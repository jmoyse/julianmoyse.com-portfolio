#ifndef LOOSEQUADTREEDRIVER_H
#define LOOSEQUADTREEDRIVER_H
#include <iostream>
#include <math.h>
#include <string>
#include "LooseQuadTree.h"
#include "drawing_c.h"
#include "tName.h"

using namespace std;

class LooseQuadTreeDriver {
	public:
		LooseQuadTreeDriver();
		void initLooseQuadTree();
		void initRectTree();
		void traceOn();
		void traceOff();

		tName** parse_command(tName *input);
		bool isFloatingPointNumber(tName *s);
		
		string INIT_QUADTREE(int width, double p);
		string DISPLAY();
		string LIST_RECTANGLES();
		string CREATE_RECTANGLE(string name,int cx,int cy,int lx, int ly);
		string INSERT(string n);
		string MOVE(string name, int cx, int cy);
		string SEARCH_POINT(int px, int py);
		string DELETE_RECTANGLE(string n);
		string DELETE_POINT(int px, int py);
		string REGION_SEARCH(string n);
		
		LooseQuadTree looseQuadTree;
		bNode *rectTree;
	private:
		bool trace;
		
};
#endif
