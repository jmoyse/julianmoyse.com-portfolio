#include "Rectangle.h"
#include "bNode.h"
using namespace std;

Rectangle::Rectangle()
{
	Name = "";
	Center[X] = 0;
	Center[Y] = 0;
	Length[X] = 0;
	Length[Y] = 0;
	binSon[LEFT] = NULL;
	binSon[RIGHT] = NULL;
}

Rectangle::Rectangle(string name, int centerX, int centerY, int lengthX,int lengthY)
{
	Name = name;
	Center[X] = centerX;
	Center[Y] = centerY;
	Length[X] = lengthX;
	Length[Y] = lengthY;
	binSon[LEFT] = NULL;
	binSon[RIGHT] = NULL;
}

int Rectangle::getCenterX()
{
	return Center[X];
}
int Rectangle::getCenterY()
{
	return Center[Y];
}
int Rectangle::getLengthX()
{
	return Length[X];
}
int Rectangle::getLengthY()
{
	return Length[Y];
}
void Rectangle::setCenter(int x, int y)
{
	Center[X] = x;
	Center[Y] = y;
}

void Rectangle::setLength(int x, int y)
{
	Length[X] = x;
	Length[Y] = y;
}

	void Rectangle::setName(string name)
{
	Name = name;
}

string Rectangle::getName()
{
	return Name;
}
Rectangle* Rectangle::search(string r)
{
	Rectangle * nodePtr = this;
	Rectangle * parentPtr = NULL;
	bool found = false;

	while(nodePtr != NULL && !found){
		if(r.compare(nodePtr->getName())==0){
			//cout << "found it " + nodePtr->getName() << " " << r << endl;
			return nodePtr;
		}
		else if(r.compare(nodePtr->getName())<0){
			parentPtr = nodePtr;
			nodePtr = nodePtr->binSon[LEFT];
		}
		else if(r.compare(nodePtr->getName())>0){
			parentPtr = nodePtr;
			nodePtr = nodePtr->binSon[RIGHT];
		}
		else{
			//found = true;
			cout << "big problem";
		}
	}
	return NULL;
}

Rectangle* Rectangle::findNode(string r)
{
	Rectangle * nodePtr = this;
	Rectangle * parentPtr = NULL;
	bool found = false;

	while(nodePtr != NULL && !found){
		if(r.compare(nodePtr->getName())==0){
			//cout << "found it " + nodePtr->getName() << " " << r << endl;
			return parentPtr;
		}
		else if(r.compare(nodePtr->getName())<0){
			parentPtr = nodePtr;
			nodePtr = nodePtr->binSon[LEFT];
		}
		else if(r.compare(nodePtr->getName())>0){
			parentPtr = nodePtr;
			nodePtr = nodePtr->binSon[RIGHT];
		}
		else{
			//found = true;
			cout << "big problem";
		}
	}
	return parentPtr;
}

//TODO: Rectangle::insertNode : Try to remember what happens when you get "problem"
void Rectangle::insertNode(Rectangle *r)
{
	Rectangle* parentPtr = findNode(r->getName());

	if (parentPtr == NULL){
		cout << "problem";
	}
	else if (r->getName().compare(parentPtr->getName())<0){
		//cout << "Added " << r->getName() << " to the LEFT" << endl;
		r->binSon[LEFT] = NULL;
		r->binSon[RIGHT] = NULL;
		parentPtr->binSon[LEFT] = r;
		parentPtr->binSon[LEFT]->binSon[LEFT] = NULL;
		parentPtr->binSon[LEFT]->binSon[RIGHT] = NULL;	
		
		
	}
	else{
		//cout << "Added " << r->getName() << " to the RIGHT of " <<parentPtr->getName() <<endl;
		r->binSon[LEFT] = NULL;
		r->binSon[RIGHT] = NULL;
		parentPtr->binSon[RIGHT] = r;
		parentPtr->binSon[RIGHT]->binSon[LEFT] = NULL;
		parentPtr->binSon[RIGHT]->binSon[RIGHT] = NULL;			
	}
} 

void Rectangle::searchPoint(Rectangle *node, int x, int y, bNode **temp)
{
	if (node != NULL){
		int RectMaxX = node->getCenterX()+(node->getLengthX()/2);
		int RectMinX = node->getCenterX()-(node->getLengthX()/2);
		int RectMaxY = node->getCenterY()+(node->getLengthY()/2);
		int RectMinY = node->getCenterY()-(node->getLengthY()/2);

		searchPoint(node->binSon[LEFT], x, y, &(*temp));
		if (x>RectMinX && x<RectMaxX){
			if (y>RectMinY && y<RectMaxY){
				if ((*temp)->length == 0)
					(*temp) = new bNode(node);
				else
					(*temp)->insertNode(node);
			}
		}
		searchPoint(node->binSon[RIGHT], x, y, &(*temp));
	}
	return;
} 

void Rectangle::deletePoint(Rectangle *node, int x, int y, bNode **temp)
{
	if (node != NULL){
		int RectMaxX = node->getCenterX()+(node->getLengthX()/2);
		int RectMinX = node->getCenterX()-(node->getLengthX()/2);
		int RectMaxY = node->getCenterY()+(node->getLengthY()/2);
		int RectMinY = node->getCenterY()-(node->getLengthY()/2);

		deletePoint(node->binSon[LEFT], x, y, &(*temp));
		if (x>RectMinX && x<RectMaxX){
			if (y>RectMinY && y<RectMaxY){
				removeNode(node->getName());
				if ((*temp)->length == 0)
					(*temp) = new bNode(node);
				else
					(*temp)->insertNode(node);
			}
		}
		deletePoint(node->binSon[RIGHT], x, y, &(*temp));
	}
} 

void Rectangle::removeNode(string r)
{	
	int side;
	Rectangle * nodeToDelete = findNode(r);
	Rectangle * tree;


	if (nodeToDelete == NULL && r.compare(this->getName()) == 0){
		//cout << "We're deleting the head node.  This shouldn't happen  EVER" << endl;
		return;
	}
	else if (nodeToDelete == NULL){
		return;
	}

	if(nodeToDelete->binSon[LEFT]!=NULL && nodeToDelete->binSon[LEFT]->getName().compare(r) == 0){
		tree = nodeToDelete->binSon[LEFT];
		side = LEFT;
	}
	else if(nodeToDelete->binSon[RIGHT]!=NULL && nodeToDelete->binSon[RIGHT]->getName().compare(r) == 0){
		tree = nodeToDelete->binSon[RIGHT];
		side = RIGHT;
	}
	else{
		cout << "this really shouldn't happen";
	}
	tree = search(r);
	Rectangle *& temp = tree;

	if (tree->binSon[LEFT] == NULL){
		nodeToDelete->binSon[side] = tree->binSon[RIGHT];
	}
	else if (tree->binSon[RIGHT] == NULL){
		nodeToDelete->binSon[side] = tree->binSon[LEFT];
	}
	else{
		Rectangle * pred = findPredessor(tree->binSon[LEFT]);
		removeReference(pred);

		tree->Name = pred->getName();
	}
}

void Rectangle::removeReference(Rectangle *r)
{
	Rectangle * nodePtr = this;
	Rectangle * parentPtr = NULL;
	bool found = false;

	while(nodePtr != NULL && !found){
		if(r->getName().compare(nodePtr->getName()) == 0 && nodePtr == r){
			if (parentPtr->binSon[LEFT]->getName().compare(r->getName()) ==0) // left side
				parentPtr->binSon[LEFT] = NULL;
			else if (parentPtr->binSon[RIGHT]->getName().compare(r->getName()) ==0) // left side
				parentPtr->binSon[RIGHT] = NULL;
			else {
				cout << "another problem";
			}
			return;
		}
		else if(r->getName().compare(nodePtr->getName())<0){
			parentPtr = nodePtr;
			nodePtr = nodePtr->binSon[LEFT];
		}
		else if(r->getName().compare(nodePtr->getName())>0){
			parentPtr = nodePtr;
			nodePtr = nodePtr->binSon[RIGHT];
		}
		else{
			cout << "big problem";
		}
	}
}

Rectangle* Rectangle::findPredessor(Rectangle * tree)
{
	Rectangle * temp = tree;
	while(temp->binSon[RIGHT]!= NULL)
	temp = temp->binSon[RIGHT];
	return temp;
}


Rectangle* Rectangle::getLeft()
{
	return binSon[LEFT];

}
Rectangle* Rectangle::getRight()
{
	return binSon[RIGHT];
}

//http://www.tekpool.com/?p=23
void Rectangle::regionSearch(Rectangle *r, Rectangle *s, bNode ** temp){
	if (r != NULL){
		int SRectMaxX = s->getCenterX()+(s->getLengthX()/2);
		int SRectMinX = s->getCenterX()-(s->getLengthX()/2);
		int SRectMaxY = s->getCenterY()+(s->getLengthY()/2);
		int SRectMinY = s->getCenterY()-(s->getLengthY()/2);
		
		int RRectMaxX = r->getCenterX()+(r->getLengthX()/2);
		int RRectMinX = r->getCenterX()-(r->getLengthX()/2);
		int RRectMaxY = r->getCenterY()+(r->getLengthY()/2);
		int RRectMinY = r->getCenterY()-(r->getLengthY()/2);

		regionSearch(r->binSon[LEFT],s,&(*temp));

		if (r->getName().compare(s->getName())!=0 && r->getName().compare("World")!=0){
			bool contains = false;
			if (((RRectMinX <= SRectMinX) && (SRectMinX <= RRectMaxX)) && ((RRectMinY <= SRectMinY) && (SRectMinY <= RRectMaxY))){
				contains = true;
				//cout << s->getName() << " OVERLAPS WITH " << r->getName() << endl;
			}
				
			else if (((SRectMinX <= RRectMinX) && (RRectMinX <= SRectMaxX)) && ((SRectMinY <= RRectMinY) && (RRectMinY <= SRectMaxY))){
				contains = true;
				//cout << s->getName() << " OVERLAPS WITH " << r->getName()<< endl;
			}
				
			else if (((RRectMaxX >= SRectMaxX) && (SRectMaxX>= RRectMinX)) && ((RRectMaxY >= SRectMaxY) && (SRectMaxY>= RRectMinY))){
				contains = true;
				//cout << s->getName() << " OVERLAPS WITH " << r->getName()<< endl;
			}
				
			else if (((SRectMaxX >= RRectMaxX) && (RRectMaxX>= SRectMinX)) && ((SRectMaxY >= RRectMaxY) && (RRectMaxY>= SRectMinY))){
				contains = true;
						//cout << s->getName() << " OVERLAPS WITH " << r->getName()<< endl;		

			}
			if (contains == true){
				if ((*temp)->length == 0)
				(*temp) = new bNode(r);
				else
				(*temp)->insertNode(r);
			}

		
	
		}
		regionSearch(r->binSon[RIGHT],s,&(*temp));
	}
}

void Rectangle::PrintBST(Rectangle *node)
{
	if (node != NULL){
		PrintBST(node->binSon[LEFT]);
		if (node->getName().compare("World") != 0){
			cout << node->getName() << " ";
		}
		PrintBST(node->binSon[RIGHT]);
	}
}


Rectangle::~Rectangle()
{

}
