#ifndef LOOSEQUADTREE_H
#define LOOSEQUADTREE_H

#include <string>

#ifndef RECTANGLE_H
#include "Rectangle.h"
#endif

#include "Rectangle.h"
#ifndef CNODE_H
#include "cNode.h"
#endif

using namespace std;
class LooseQuadTree{
	public:	
		LooseQuadTree();
		LooseQuadTree(string name, int centerX, int centerY, int lengthX, int lengthY);
		void AddRectangle(Rectangle *r);
		void insertNode(Rectangle *r, cNode *tree, int worldX, int worldY, int centerX, int centerY);
		void traceOn();
		void traceOff();
		bNode * deletePoint(int x, int y);
		bNode * searchPoint(int x, int y);
		bNode * regionSearch(string n);


		Rectangle* findNodeWorld(string name);
		Rectangle* findNodeTree(string name);
		bool removeNode(string name);
		void debug(string message);
		
		void ListBSTNodes();
		cNode *looseQuadRoot;
		Rectangle World;
		float p;

		~LooseQuadTree();
private:
	bool trace;


};
#endif
