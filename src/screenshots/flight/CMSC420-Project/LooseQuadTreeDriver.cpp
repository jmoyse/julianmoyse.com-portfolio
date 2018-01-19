#include "LooseQuadTreeDriver.h"
#include "LooseQuadTree.h"
#include "tName.h"
#include <iostream>
#include <iomanip>

extern "C"
{
    #include "drawing_c.h"
}
using namespace std;
// Part 1
// Part 2
// Part 3 - DONE
// Part 4 -  11, 12, 13, 14, 15
// Optional Part - 16, 17, 18

int main(int argc, char *argv[]){
	LooseQuadTreeDriver QTREE;
	while(!cin.eof()){
		char input[256];	
		cin.getline(input,256);
		tName *test = new tName(input);
		QTREE.parse_command(test);
	}	
	return 0;
}	

tName**  LooseQuadTreeDriver::parse_command(tName *input){
	tName *output[5];

	if (input->strcmp(new tName("TRACE ON")) == 0){
		return output;
	}
	else if (input->strcmp(new tName("TRACE OFF")) == 0){
		return output;
	}
	int currentCommand = 0;
	tName *temp = new tName();
	bool valid = false;

	for (int i=0; i<input->Length(); i++){
		if (input->at(i) == '(' ||input->at(i) == ',' ||input->at(i) == ')' ) {
			output[currentCommand++] = temp;
			valid = true;
			temp  = new tName();
		}
		else{
			temp->append(input->at(i));
			output[currentCommand] = temp;
		}	
	}
	if (valid == false){
		//cout << "INVALID COMMAND" << endl;
		return output;
	}
	// TODO: Make sure parameter 2 of INIT_QUADTREE can accept a floating point number
	if (output[0]->strcmp(new tName("INIT_QUADTREE")) == 0){
		INIT_QUADTREE(atoi(output[1]->toString()), atof(output[2]->toString()));
	}
	if (output[0]->strcmp(new tName("DISPLAY")) == 0){
		DISPLAY();
	}
	if (output[0]->strcmp(new tName("LIST_RECTANGLES")) == 0){
		LIST_RECTANGLES();
	}
	if (output[0]->strcmp(new tName("CREATE_RECTANGLE")) == 0){
		CREATE_RECTANGLE(output[1]->toString(),atoi(output[2]->toString()), atoi(output[3]->toString()),atoi(output[4]->toString()),atoi(output[5]->toString()));
	}
	if (output[0]->strcmp(new tName("INSERT")) == 0){
		INSERT(output[1]->toString());
	}
	if (output[0]->strcmp(new tName("MOVE")) == 0){
		MOVE(output[1]->toString(),atoi(output[2]->toString()),atoi(output[3]->toString()));
	}
	if (output[0]->strcmp(new tName("SEARCH_POINT")) == 0){
		SEARCH_POINT(atoi(output[1]->toString()),atoi(output[2]->toString()));
	}
	if (output[0]->strcmp(new tName("DELETE_RECTANGLE")) == 0){
		DELETE_RECTANGLE(output[1]->toString());
	}
	if (output[0]->strcmp(new tName("DELETE_POINT")) == 0){
		DELETE_POINT(atoi(output[1]->toString()),atoi(output[2]->toString()));
	}
	if (output[0]->strcmp(new tName("REGION_SEARCH")) == 0){
		DELETE_RECTANGLE(output[1]->toString());
	}
	if (output[0]->strcmp(new tName("TOUCH")) == 0){
		cout << "NOT IMPLMENTED" << endl;
	}
	if (output[0]->strcmp(new tName("WITHIN")) == 0){
		cout << "NOT IMPLMENTED" << endl;
	}
	if (output[0]->strcmp(new tName("VERT_NEIGHBOR")) == 0){
		cout << "NOT IMPLMENTED" << endl;
	}
	if (output[0]->strcmp(new tName("HORIZ_NEIGHBOR")) == 0){
		cout << "NOT IMPLMENTED" << endl;
	}
	if (output[0]->strcmp(new tName("NEAREST_RECTANGLE")) == 0){
		cout << "NOT IMPLMENTED" << endl;
	}
	if (output[0]->strcmp(new tName("WINDOW")) == 0){
		cout << "NOT IMPLMENTED" << endl;
	}
	if (output[0]->strcmp(new tName("CHANGE_EXPANSION_FACTOR")) == 0){
		cout << "NOT IMPLMENTED" << endl;
	}
	if (output[0]->strcmp(new tName("NEAREST_NEIGHBOR")) == 0){
		cout << "NOT IMPLMENTED" << endl;
	}
	if (output[0]->strcmp(new tName("LEXICALLY_GREATER_NEAREST_NEIGHBOR")) == 0){
		cout << "NOT IMPLMENTED" << endl;
	}
	if (output[0]->strcmp(new tName("RAYTRACE")) == 0){
		cout << "NOT IMPLMENTED" << endl;
	}	
	return output;
}

void LooseQuadTreeDriver::traceOn()
{
	looseQuadTree.traceOn();
}
void LooseQuadTreeDriver::traceOff()
{
	looseQuadTree.traceOff();
}

string LooseQuadTreeDriver::INIT_QUADTREE(int width, double p)
{
	double newWidth = pow(2.0, (double)width);
	looseQuadTree = LooseQuadTree("World",newWidth/2,newWidth/2,newWidth,newWidth);
	cout << "LOOSE QUADTREE INITIALIZED WITH PARAMETERS " <<  width << " " << p << endl;
	return "";
}

string LooseQuadTreeDriver::DISPLAY()
{
	int cx = looseQuadTree.World.getCenterX();
	int cy = looseQuadTree.World.getCenterY();
	int lx = looseQuadTree.World.getLengthX();
	int ly = looseQuadTree.World.getLengthY();
	
	// Dotted Line the size of World
	StartPicture(lx+1,ly+1);
	SetLineDash(3,2);
	DrawRect(0,0,cx+(lx/2),cy+(ly/2));
	
	// Draw the cords and rectangles
	looseQuadTree.looseQuadRoot->drawQuadrants(looseQuadTree.looseQuadRoot, cx,cy,lx,ly);

	// End the Picture
	EndPicture();
	return "";
}

string LooseQuadTreeDriver::LIST_RECTANGLES()
{
	if (rectTree->length == 0)
		cout << "NO RECTANGLES IN DATABASE" << endl;
	else{ 
		rectTree->printNodes();
		cout << endl;
	}
	return "";
}
string LooseQuadTreeDriver::CREATE_RECTANGLE(string name,int cx,int cy,int lx, int ly)
{
	Rectangle *temp = new Rectangle(name,cx,cy,lx,ly);
	if (rectTree->length == 0)
		rectTree = new bNode(temp);
	else
		rectTree->insertNode(temp);
	cout << "RECTANGLE " << name << " CREATED WITH PARAMETERS " << cx << " " << cy << " " << lx << " " << ly << endl;
	return "";
}
string LooseQuadTreeDriver::INSERT(string n)
{
	bNode *temp = rectTree->searchNode(n);

	if (temp != NULL){		
		int RRectMaxX = temp->getRectangle()->getCenterX()+(temp->getRectangle()->getLengthX()/2);
		int RRectMinX = temp->getRectangle()->getCenterX()-(temp->getRectangle()->getLengthX()/2);
		int RRectMaxY = temp->getRectangle()->getCenterY()+(temp->getRectangle()->getLengthY()/2);
		int RRectMinY = temp->getRectangle()->getCenterY()-(temp->getRectangle()->getLengthY()/2);

		int WorldRectMaxX = looseQuadTree.World.getCenterX()+(looseQuadTree.World.getLengthX()/2);
		int WorldRectMinX = looseQuadTree.World.getCenterX()-(looseQuadTree.World.getLengthX()/2);
		int WorldRectMaxY = looseQuadTree.World.getCenterY()+(looseQuadTree.World.getLengthY()/2);
		int WorldRectMinY = looseQuadTree.World.getCenterY()-(looseQuadTree.World.getLengthY()/2);

		if ((RRectMinX < WorldRectMinX) || (RRectMaxX > WorldRectMaxX) || (RRectMinY < WorldRectMinY) || (RRectMaxY > WorldRectMaxY)){
			cout << "INSERTION OF " << temp->getRectangle()->getName() << " FAILED AS " <<  temp->getRectangle()->getName()<< " LIES PARTIALLY OUTISDE SPACE SPANNED BY LOOSEQUADTREE" << endl;
			return "";
		}
		looseQuadTree.AddRectangle(temp->getRectangle());	
		cout << "RECTANGLE " << n << " HAS BEEN INSERTED" << endl;
		return "" ;
	}
	else {
		cout << "INSERT FAILED ON " <<  n  <<  ". DOES NOT EXIST IN DATABASE." << endl;
		return "" ;
	}
	return "";
}
//TODO: Rewrite Move.  Needs to delete on the way down, and check for places to insert on the way up
string LooseQuadTreeDriver::MOVE(string name, int cx, int cy)
{
	Rectangle *temp = looseQuadTree.findNodeTree(name);
	looseQuadTree.removeNode(name);
	temp->setCenter(temp->getCenterX()+cx,temp->getCenterY()+cy);
	INSERT(name);
	cout << "RECTANGLE " << name << " N HAS BEEN MOVED TO " << cx << " " << cy << endl;
	return "";
}

string LooseQuadTreeDriver::SEARCH_POINT(int px, int py)
{
	
	bNode * temp = looseQuadTree.searchPoint(px,py);
	if (temp->length == 0){
		cout << "NO RECTANGLE CONTAINS QUERY POINT " << px << " " << py << endl;
	}
	else {
		cout << "POINT " << px << " " << py << " FALLS IN RECTANGLES ";
		temp->printNodes();
		cout << endl;
	}	
	return "";
}

string LooseQuadTreeDriver::DELETE_RECTANGLE(string n)
{
	if (rectTree->searchNode(n) == NULL){ // doesn't exist in rectTree
		cout << "RECTANGLE " << n << " NOT FOUND IN RECTANGLE DATABASE" << endl;
		return "" ;
	}
	if (looseQuadTree.World.search(n) == NULL){
		cout << "RECTANGLE " << n << " WAS NOT FOUND IN THE LOOSE QUADTREE"  << endl;
		return "";
	}
	looseQuadTree.removeNode(n);
	cout << "DELETED RECTANGLE " << n << " N FROM QUADTREE" << endl;
	return "";	
}
string LooseQuadTreeDriver::DELETE_POINT(int px, int py)
{
	bNode * temp =looseQuadTree.deletePoint(px,py);
	if (temp->length ==0){
		cout << "NO RECTANGLES DELETED USING POINT " << px << " " << py << endl;
	}
	else {
		cout << "DELETED RECTANGLES ";
		temp->printNodes();
		cout << endl;
	}
	return "";
}
string LooseQuadTreeDriver::REGION_SEARCH(string n)
{
	bNode * temp = looseQuadTree.regionSearch(n);
	if (temp->length==0){
		cout << "RECTANGLE " << n << " INTERSECTS NO RECTANGLES" << endl;
	}
	else {
		cout << "RECTANGLE " << n << " INTERSECTS RECTANGLES ";
		temp->printNodes();
		cout << endl;
	}
	return "";
}


LooseQuadTreeDriver::LooseQuadTreeDriver()
{
	rectTree = new bNode();
	trace = false;
}

void LooseQuadTreeDriver::initLooseQuadTree()
{

}

void LooseQuadTreeDriver::initRectTree()
{

}
	

	
