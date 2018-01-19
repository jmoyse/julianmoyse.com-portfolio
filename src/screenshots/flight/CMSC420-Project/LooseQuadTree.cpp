#include "LooseQuadTree.h"
using namespace std;

LooseQuadTree::LooseQuadTree() 
{
    looseQuadRoot = NULL;
    trace = false;
}

LooseQuadTree::LooseQuadTree(string name, int centerX, int centerY, int lengthX, int lengthY) 
{
    looseQuadRoot = NULL;
    looseQuadRoot = new cNode();
    World = Rectangle(name,centerX,centerY,lengthX,lengthY);
    trace = false;
}
void LooseQuadTree::ListBSTNodes()
{
    cout << "Elements : ";
    World.PrintBST(&World);
    cout << endl;
}
void LooseQuadTree::traceOn() 
{
    trace = true;
}
void LooseQuadTree::traceOff() 
{
    trace = false;
}

void LooseQuadTree::AddRectangle(Rectangle *r) 
{
    insertNode(r,looseQuadRoot,World.getLengthX(),World.getLengthY(),World.getCenterX(),World.getCenterY());
}

void LooseQuadTree::insertNode(Rectangle *r, cNode *tree, int worldX, int worldY, int centerX, int centerY) 
{
    debug ("Rectangle: ");
    debug ("	LengthX: " + r->getLengthX());
    debug ("	LengthY: " + r->getLengthY());
    debug ("	CenterX: " + r->getCenterX());
    debug ("	CenterY: " + r->getCenterY());
    debug ("World: ");
    debug ("	LengthX: " + worldX);
    debug ("	LengthY: " + worldY);
    debug ("	CenterX: " + centerX );
    debug ( "	CenterY: " + centerY );

    int rectSize = r->getLengthX()*r->getLengthY();
    int worldSize = worldX*worldY;
    //	int worldSize = worldX*(worldY+p);

    if (r->getCenterX() < centerX) {
        if (r->getCenterY() < centerY) {
            // NW BUCKET
            if (rectSize >= worldSize) { // add it to this bucket
                World.insertNode(r);
                cout << worldX << " " << worldY << " " << centerX << " " << centerY << endl;
                tree->insert(r);
            }
            else { // add it to the next smaller bucket
                debug ("NW: Creating new smaller bucket");
                if (tree->spcSon[tree->NW] == NULL) {
                    tree->spcSon[tree->NW] = new cNode();

                    insertNode(r,tree->getNW(),worldX/2,worldY/2, centerX-(worldX/4),centerY-(worldY/4));
                } else {
                    insertNode(r,tree->getNW(),worldX/2,worldY/2, centerX-(worldX/4),centerY-(worldY/4));
                }
            }
        }
        // SW BUCKET
        else {
            if (rectSize >= worldSize) { // add it to this bucket
                World.insertNode(r);
                tree->insert(r);
            } else { // add it to the next smaller bucket
                debug ("SW: Creating new smaller bucket ");
                if (tree->spcSon[tree->SW] == NULL) {
                    tree->spcSon[tree->SW] = new cNode();

                    insertNode(r,tree->getSW(),worldX/2,worldY/2,centerX-(worldX/4),centerY+(worldY/4));
                } else {
                    insertNode(r,tree->getSW(),worldX/2,worldY/2, centerX-(worldX/4),centerY+(worldY/4));
                }
            }
        }
    } else {
        if(r->getCenterY() < centerY) {
            // NE BUCKET
            if (rectSize >= worldSize) { // add it to this bucket
                World.insertNode(r);
                tree->insert(r);
            } else { // add it to the next smaller bucket

                if (tree->spcSon[tree->NE] == NULL) {
                    tree->spcSon[tree->NE] = new cNode();

                    insertNode(r,tree->getNE(),worldX/2,worldY/2, centerX+(worldX/4),centerY-(worldY/4));
                } else {
                    insertNode(r,tree->getNE(),worldX/2,worldY/2, centerX+(worldX/4),centerY-(worldY/4));
                }
            }
        } else {
            // SE BUCKET
            if (rectSize > worldSize) { // add it to this bucket
                tree->insert(r);
                World.insertNode(r);
            } else { // add it to the next smaller bucket
                debug("SE: Creating new smaller bucket");
                if (tree->spcSon[tree->SE] == NULL) {
                    tree->spcSon[tree->SE] = new cNode();
                    insertNode(r,tree->getSE(),worldX/2,worldY/2, centerX+(worldX/4),centerY+(worldY/4));
                } else {
                    insertNode(r,tree->getSE(),worldX/2,worldY/2,  centerX+(worldX/4),centerY+(worldY/4));
                }
            }
        }
    }
}

// finds in the World
Rectangle* LooseQuadTree::findNodeWorld(string name) 
{
    return World.search(name);
}

// finds in the LooseQuadRoot
Rectangle* LooseQuadTree::findNodeTree(string name) 
{
    return looseQuadRoot->findRectangle(looseQuadRoot,name);
}

void LooseQuadTree::debug(string message) 
{
    if (trace == true) {
        cout << message << endl;
    }
}

bool LooseQuadTree::removeNode(string name) {
    if (findNodeTree(name)!=NULL &&  findNodeWorld(name)!=NULL) {
        looseQuadRoot->deleteRectangle(&looseQuadRoot,name);
        World.removeNode(name);
        return true;
    } else {
        cout << "not deleting";
        return false;
    }
}

bNode * LooseQuadTree::searchPoint(int x, int y) 
{
    bNode * value = new bNode();
    World.searchPoint(World.getLeft(),x,y, &value);
    World.searchPoint(World.getRight(),x,y, &value);
    return value;
}


bNode * LooseQuadTree::deletePoint(int x, int y) 
{
    bNode * value = new bNode();
    World.deletePoint(World.getLeft(),x,y,&value);
    World.deletePoint(World.getRight(),x,y,&value);
    for (int i =0; i<value->length; i++) {
        looseQuadRoot->deleteRectangle((&looseQuadRoot),value->getNode(i)->getName());
    }
    return value;
}


void LooseQuadTree::regionSearch(int findX, int findY, cNode *tree, int worldX, int worldY, int centerX, int centerY) 
{
	int newX=0;
	int newY=0;
	int quadrant = 0;
	if (findX < centerX) {
		if (findY < CenterY){ // NW NODE	
			newX = CenterX-(worldX/4);
			newY = CenterY-(worldY/4);
			quadrant = tree->NW;
		}
		else{ // NE NODE
			newX = CenterX-(worldX/4);
			newY = CenterY+(worldY/4);
			quadrant = tree->NE;
		}
	}
	else{
		if(findY < centerY){ // NE NODE
			newX = CenterX+(worldX/4);
			newY = CenterY-(worldY/4);
			quadrant = tree->NE;
		}
		else{  // SE NODE
			newX = CenterX+(worldX/4);
			newY = CenterY+(worldY/4);
			quadrant = tree->SE;
		}
	}
	regionSearch(findX,findY, tree->quadrant[quadrant], newX, newY, centerX, centerY);
}


bNode * LooseQuadTree::regionSearch(string n) 
{
    bNode * value = new bNode();
    Rectangle * temp =  World.search(n);
    if (temp!=NULL) {
        World.regionSearch(World.getLeft(),World.search(n),&value);
        World.regionSearch(World.getRight(),World.search(n),&value);
    }
    return value;
}

LooseQuadTree::~LooseQuadTree() 
{

}
