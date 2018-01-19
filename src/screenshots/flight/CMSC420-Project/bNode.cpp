#include <sstream>
#include "bNode.h"
using namespace std;

bNode::bNode()
{
	prev = NULL;
	next = NULL;
	Rect = NULL;
	length = 0;
}
bNode::bNode(Rectangle *r)
{
	length = 0;
	prev = NULL;
	next = NULL;
	Rect = NULL;

	next = new bNode();
	next->prev = this;
	next->Rect = r;

	next->next = new bNode();
	next->next->prev = next;
	length++;
}

Rectangle * bNode::getRectangle()
{
	return Rect;
}


bNode* bNode::searchNode(string name)
{
	bool moreToSearch = true;
	bNode* location = next;
	bNode* foundNode = NULL;

	if (location == NULL){
		return NULL;
	}

	bool found = false;
	
	while(moreToSearch){
		if(name.compare(location->Rect->getName())==0){
			return location;
		}
		else{
			location = location->next;
			moreToSearch = (location->Rect!=NULL);
		}
	}
	return NULL;
}



bNode* bNode::findNode(string name)
{
	bool moreToSearch = true;
	bNode* location = next;
	bNode* foundNode = NULL;

	bool found = false;
	
	while(moreToSearch){
		if(name.compare(location->Rect->getName()) < 0){
			moreToSearch = false;
		}
		else{
			location = location->next;
			moreToSearch = (location->Rect!=NULL);
		}
	}
	return location;
}

bNode* bNode::findNode(Rectangle *data)
{
	bool moreToSearch = true;
	bNode* location = next;
	bNode* foundNode = NULL;

	bool found = false;
	
	while(moreToSearch){
		if(data->getName().compare(location->Rect->getName()) < 0){
			moreToSearch = false;
		}
		else{
			location = location->next;
			moreToSearch = (location->Rect!=NULL);
		}
	}
	return location;
}


void bNode::printNodes()
{
	if (next == NULL){
		//	cout << "EMPTY" << endl;
		return;
	}
	//cout << "START->";

	bNode* location = location = next;
	bool moreToSearch;
	moreToSearch = (location->Rect!=NULL);

	while(location->Rect!=NULL){
		cout << location->Rect->getName() << " " ;
		location = location->next;
	}
	//cout << "END" << endl;
}

Rectangle* bNode::getNode(int position)
{	
	int i = 0 ;
	if (next == NULL){
		return NULL;
	}
	bNode* location = location = next;
	bool moreToSearch;
	moreToSearch = (location->Rect!=NULL);
	while(location->Rect!=NULL){
		if (i == position){
			return location->Rect;
		}
		location = location->next;
		i++;		
	}
	return NULL;

}
string bNode::listNodes()
{
	std::ostringstream o;
	o << "START LIST" << endl;
	string returnVal = "";
	int count = 0;
	if (next == NULL){
		return "EMPTY";
		o << "END LIST" << endl;
	}
	bNode* location = location = next;
	bool moreToSearch;
	moreToSearch = (location->Rect!=NULL);

	while(location->Rect!=NULL){
		//BLISS 5 5 79 79		
		o << location->Rect->getName() << "zzzzzz";
		o << location->Rect->getCenterX() << " ";
		o << location->Rect->getCenterY() << " ";
		o << location->Rect->getLengthX() << " ";
		o << location->Rect->getLengthY() << " ";
		
		
	}
	o << "END LIST";
	return o.str();
}

void bNode::insertNode(Rectangle *data)
{

	bNode * location = findNode(data);
	bNode * newNode = new bNode();
	newNode->Rect = data;

	newNode->prev = location->prev;
	newNode->next = location;

	location->prev->next = newNode;
	location->prev = newNode;
	length++;
}

void bNode::removeNode(Rectangle *data)
{
	bNode * location = searchNode(data->getName());
	if (location == NULL){
		return;
	}
	bNode * ptrPrev = location->prev;
	bNode * ptrNext = location->next;

	ptrPrev->next = ptrNext;
	ptrNext->prev = ptrPrev;

	length--;
}
bNode::~bNode()
{

}
