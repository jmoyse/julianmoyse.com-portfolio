#include "cNode.h"
#include "drawing_c.h"
using namespace std;


cNode::cNode()
{
	spcSon[NW] = NULL;
	spcSon[NE] = NULL;
	spcSon[SW] = NULL;
	spcSon[SE] = NULL;
	
	binSon = new bNode();
}
cNode::cNode(int quadrant, Rectangle *r)
{
	spcSon[NW] = NULL;
	spcSon[NE] = NULL;
	spcSon[SW] = NULL;
	spcSon[SE] = NULL;	
	spcSon[quadrant] = new cNode();
	binSon = new bNode();
	spcSon[quadrant]->binSon = new bNode(r);
}

void cNode::insert(Rectangle *r)
{
	if (binSon->length == 0){
		binSon = new bNode(r);
	}
	else {
		binSon->insertNode(r);
	}
}


void cNode::insertRectangle(int quadrant, Rectangle *r)
{
	if (spcSon[quadrant] == NULL){
		spcSon[quadrant] = new cNode();
	}

	if (spcSon[quadrant]->binSon->length == 0){
		spcSon[quadrant]->binSon = new bNode(r);
	}
	else {
		spcSon[quadrant]->binSon->insertNode(r);
	}
}

void cNode::printQuadrants(cNode *quadTreeNode)
{
	if(quadTreeNode != NULL){
		printQuadrants(quadTreeNode->spcSon[NW]);	
		printQuadrants(quadTreeNode->spcSon[NE]);
		quadTreeNode->binSon->printNodes();
		cout << endl;
		printQuadrants(quadTreeNode->spcSon[SW]);
		printQuadrants(quadTreeNode->spcSon[SE]);
	}
}
void cNode::drawQuadrants(cNode *quadTreeNode,int cx,int cy,int lx,int ly)
{
	if(quadTreeNode != NULL){
		if (quadTreeNode->binSon!= NULL){
			for (int i = 0; i<quadTreeNode->binSon->length; i++){
				int minX = quadTreeNode->binSon->getNode(i)->getCenterX() - quadTreeNode->binSon->getNode(i)->getLengthX()/2;
				int minY = quadTreeNode->binSon->getNode(i)->getCenterY() - quadTreeNode->binSon->getNode(i)->getLengthY()/2;
				int maxX = quadTreeNode->binSon->getNode(i)->getCenterX() + quadTreeNode->binSon->getNode(i)->getLengthX()/2;
				int maxY = quadTreeNode->binSon->getNode(i)->getCenterY() + quadTreeNode->binSon->getNode(i)->getLengthY()/2;
				
				SetLineDash(1,1);
				DrawRect(minX,minY,maxX,maxY);
			
				char * temp;
				temp = new char[quadTreeNode->binSon->getNode(i)->getName().length() + 1];
				strcpy(temp, quadTreeNode->binSon->getNode(i)->getName().c_str());

				DrawName(temp, minX,minY);
			}
		}
		if (quadTreeNode->spcSon[NW] == NULL && quadTreeNode->spcSon[NE] == NULL && quadTreeNode->spcSon[SW] == NULL && quadTreeNode->spcSon[SE] == NULL)
			return;
		
		
		SetLineDash(3,2);
		DrawLine(cx-(lx/2),cy,cx+(lx/2),cy);
		SetLineDash(3,2);
		DrawLine(cx,cy-(ly/2),cx,cy+(ly/2));
		
		
		drawQuadrants(quadTreeNode->spcSon[NW], cx-(lx/4), cy-(ly/4), lx/2,ly/2);
		drawQuadrants(quadTreeNode->spcSon[NE], cx+(lx/4), cy-(ly/4), lx/2,ly/2);
		drawQuadrants(quadTreeNode->spcSon[SW], cx-(lx/4), cy+(ly/4), lx/2,ly/2);
		drawQuadrants(quadTreeNode->spcSon[SE], cx+(lx/4), cy+(ly/4), lx/2,ly/2);
	}
}
void cNode::printQuadrants(cNode *quadTreeNode, int depth)
{
	if(quadTreeNode != NULL){
		for (int i=0; i<depth; i++){
			cout << "  ";
		}
		quadTreeNode->binSon->printNodes();
		cout << endl;
		printQuadrants(quadTreeNode->spcSon[NW], depth+1);	
		printQuadrants(quadTreeNode->spcSon[NE], depth+1);			
		printQuadrants(quadTreeNode->spcSon[SW], depth+1);	
		printQuadrants(quadTreeNode->spcSon[SE], depth+1);	
	}
}

Rectangle * cNode::findRectangle(cNode *quadTreeNode, string name)
{	
		Rectangle * NWrect = NULL;		
		Rectangle * NErect = NULL;	
		Rectangle * SWrect = NULL;	

		Rectangle * SErect = NULL;
	if(quadTreeNode != NULL){
		if (quadTreeNode->binSon != NULL){
			bNode *temp = quadTreeNode->binSon->searchNode(name);
			if (temp != NULL){
				return  temp->Rect;
			}
		}
		Rectangle * NWrect = findRectangle(quadTreeNode->spcSon[NW], name);	
		if (NWrect!= NULL)
			return NWrect;
		Rectangle * NErect = findRectangle(quadTreeNode->spcSon[NE], name);
		if (NErect!= NULL)
			return NErect;
		Rectangle * SWrect = findRectangle(quadTreeNode->spcSon[SW], name);
		if (SWrect!= NULL)
			return SWrect;
		Rectangle * SErect = findRectangle(quadTreeNode->spcSon[SE], name);
		if (SErect!= NULL)
			return SErect;

		return NULL;
	}	
	return NULL;
}


void cNode::deleteRectangle(cNode **quadTreeNode, string name)
{
	if((*quadTreeNode) != NULL){
		if ((*quadTreeNode)->binSon != NULL){
			bNode *temp = (*quadTreeNode)->binSon->searchNode(name);
			if (temp != NULL){
				if ((*quadTreeNode)->binSon->length == 1){
					(*quadTreeNode)->binSon = NULL;
				}
				else {
					(*quadTreeNode)->binSon->removeNode(temp->Rect);
				}
			}
		}

		deleteRectangle(&(*quadTreeNode)->spcSon[NW], name);
		deleteRectangle(&(*quadTreeNode)->spcSon[NE], name);
		deleteRectangle(&(*quadTreeNode)->spcSon[SW], name);
		deleteRectangle(&(*quadTreeNode)->spcSon[SE], name);



 		if ((*quadTreeNode)->spcSon[NW] == NULL && (*quadTreeNode)->spcSon[NE] == NULL && (*quadTreeNode)->spcSon[SW] == NULL && (*quadTreeNode)->spcSon[SE] == NULL && ((*quadTreeNode)->binSon == NULL || (*quadTreeNode)->binSon->length == 0) && (*quadTreeNode)!=this)
 		{
 			(*quadTreeNode) = NULL;
 		}

	}
}

//
//void cNode::deleteRectangle(cNode **quadTreeNode, string name)
//{
//	if((*quadTreeNode) != NULL){
//		if ((*quadTreeNode)->binSon != NULL){
//			bNode *temp = (*quadTreeNode)->binSon->searchNode(name);
//			if (temp != NULL){
//				if ((*quadTreeNode)->binSon->length == 1){
//					(*quadTreeNode)->binSon = NULL;
//				}
//				else {
//					(*quadTreeNode)->binSon->removeNode(temp->Rect);
//				}
//			}
//		}
//
//		deleteRectangle(&(*quadTreeNode)->spcSon[NW], name);
//		deleteRectangle(&(*quadTreeNode)->spcSon[NE], name);
//		deleteRectangle(&(*quadTreeNode)->spcSon[SW], name);
//		deleteRectangle(&(*quadTreeNode)->spcSon[SE], name);
//
//
//
// 		if ((*quadTreeNode)->spcSon[NW] == NULL && (*quadTreeNode)->spcSon[NE] == NULL && (*quadTreeNode)->spcSon[SW] == NULL && (*quadTreeNode)->spcSon[SE] == NULL && ((*quadTreeNode)->binSon == NULL || (*quadTreeNode)->binSon->length == 0) && (*quadTreeNode)!=this)
// 		{
// 			(*quadTreeNode) = NULL;
// 		}
//
//	}
//}

cNode* cNode::getNW()
{
	return spcSon[NW];	
}
cNode* cNode::getSW()
{
	return spcSon[SW];
}
cNode* cNode::getNE()
{
	return spcSon[NE];
}
cNode* cNode::getSE()
{
	return spcSon[SE];
}
cNode::~cNode()
{

}
