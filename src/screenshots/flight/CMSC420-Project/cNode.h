#ifndef CNODE_H
#define CNODE_H

#define NDIR_2D 4
#include "bNode.h"


class cNode {
	public:
		typedef enum {NW,NE,SW,SE} quadrant;
		

		cNode();
		cNode(int quadrant, Rectangle *r);
			
		~cNode();
		void drawQuadrants(cNode *quadTreeNode,int cx,int cy,int lx,int ly);
		void printQuadrants(cNode *quadTreeNode);
		void printQuadrants(cNode *quadTreeNode, int depth);
		void insertRectangle(int quadrant, Rectangle *r);
		void deleteRectangle(cNode **quadTreeNode, string name);
		Rectangle * findRectangle(cNode *quadTreeNode, string name);
		void insert(Rectangle *r);

		cNode* getNW();
		cNode* getSW();
		cNode* getNE();
		cNode* getSE();		

		cNode *spcSon[NDIR_2D];
		bNode *binSon;
	
};
#endif
