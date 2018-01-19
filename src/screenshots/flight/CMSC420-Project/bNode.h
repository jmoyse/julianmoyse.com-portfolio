#ifndef BNODE_H
#define BNODE_H

#include <string>
#include <iostream>

#include "Rectangle.h"

class bNode {
	public:
		bNode();
		bNode(Rectangle *r);
		void insertNode(Rectangle *data);
		void removeNode(Rectangle *data);
		bNode* searchNode(string name);
		Rectangle * getNode(int position);

		Rectangle* getRectangle();
		void printNodes();
		string listNodes();
		int length;

		~bNode();
		bNode * prev;
		bNode * next;
		Rectangle *Rect;
	private:	
		bNode* findNode(Rectangle *data);
		bNode* findNode(string s);
};
#endif
