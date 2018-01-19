#ifndef RECTANGLE_H
#define RECTANGLE_H
#define NDIR_1D 2
#include <iostream>
#include <string>

class bNode;
using namespace std;

class Rectangle {
	public:
		typedef enum {LEFT, RIGHT, BOTH} direction;
		typedef enum {X,Y} dimension;

		Rectangle();
		Rectangle(string name, int centerX, int centerY, int lengthX,int lengthY);
		void PrintBST(Rectangle *node);
		void searchPoint(Rectangle *node, int x, int y, bNode **temp);

		int getCenterX();
		int getCenterY();
		int getLengthX();
		int getLengthY();

		Rectangle* getLeft();
		Rectangle* getRight();

		void setCenter(int x, int y);
		void setLength(int x,int y);

		void setName(string name);
		string getName();

		void regionSearch(Rectangle *r, Rectangle *s, bNode **temp);
		void deletePoint(Rectangle *node, int x, int y, bNode **temp);

		void removeNode(string r);
		void insertNode(Rectangle *r);

		void removeReference(Rectangle *r);
		
		Rectangle* search(string r);

		Rectangle* findNode(string r);
		Rectangle* findPredessor(Rectangle * tree);

		~Rectangle();
	private:
		string Name;
		Rectangle *binSon[NDIR_1D];
		int Center[NDIR_1D];
		int Length[NDIR_1D];
};
#endif
