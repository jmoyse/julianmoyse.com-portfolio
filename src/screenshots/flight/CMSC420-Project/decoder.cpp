///* 
//	Command Decoder
//	Julian Moyse
//	CMSC 420 - Fall 2007
//	Project 1, Part 2
//*/
//
//#include <iostream>
//#include <iomanip>
//#include "tName.h"
//using namespace std;
//
//// Functions
//tName** parse_command(tName *input);
//tName* command_number(tName *input);
//tName *remove_whitespace(tName * s);
//bool isFloatingPointNumber(tName *s);
//
//int main(int argc, char *argv[]){
//	while(!cin.eof()){
//		char input[256];
//		cin.getline(input,256);
//		tName *test = new tName(input);
//		parse_command(test);
//	}
//	
//	return 0;
//}	
//
//tName** parse_command(tName *input, LooseQuadTreeDriver QTREE){
//	tName *output[5];
//
//	if (input->strcmp(new tName("TRACE ON")) == 0){
//		return output;
//	}
//	else if (input->strcmp(new tName("TRACE OFF")) == 0){
//		return output;
//	}
//	int currentCommand = 0;
//	tName *temp = new tName();
//	bool valid = false;
//
//	for (int i=0; i<input->Length(); i++){
//		if (input->at(i) == '(' ||input->at(i) == ',' ||input->at(i) == ')' ) {
//			output[currentCommand++] = temp;
//			valid = true;
//			temp  = new tName();
//		}
//		else{
//			temp->append(input->at(i));
//			output[currentCommand] = temp;
//		}	
//	}
//	if (valid == false){
//		cout << "INVALID COMMAND" << endl;
//		return output;
//	}
//
//
//	if (output[0]->strcmp(new tName("INIT_QUADTREE")) == 0){
//		QTREE.INIT_QUADTREE(atof(output[1], atof(output[2]);
//	}
//	if (output[0]->strcmp(new tName("DISPLAY")) == 0){
//		QTREE.DISPLAY();
//	}
//	if (input->strcmp(new tName("LIST_RECTANGLES")) == 0){
//		QTREE.LIST_RECTANGLES();
//	}
//	if (input->strcmp(new tName("CREATE_RECTANGLE")) == 0){
//		QTREE.CREATE_RECTANGLE(output[1]->toString(),output[2],output[3],output[4],output[5]);
//	}
//	if (input->strcmp(new tName("INSERT")) == 0){
//		QTREE.INSERT(output[1]->toString();
//	}
//	
//	
//	
//	
////	if (input->strcmp(new tName("MOVE")) == 0){
////		output[0]  = new tName("6");
////	}
////	if (input->strcmp(new tName("SEARCH_POINT")) == 0){
////		value  = new tName("7");
////	}
////	if (output[0]->strcmp(new tName("DELETE_RECTANGLE")) == 0){
////		value  = new tName("8A");
////	}
////	if (output[0]->strcmp(new tName("DELETE_POINT")) == 0){
////		value  = new tName("8B");
////	}
////	if (output[0]->strcmp(new tName("REGION_SEARCH")) == 0){
////		value  = new tName("9");
////	}
////	if (output[0]->strcmp(new tName("TOUCH")) == 0){
////		value  = new tName("10");
////	}
////	if (output[0]->strcmp(new tName("WITHIN")) == 0){
////		value  = new tName("11");
////	}
////	if (output[0]->strcmp(new tName("VERT_NEIGHBOR")) == 0){
////		value  = new tName("12B");
////	}
////	if (output[0]->strcmp(new tName("HORIZ_NEIGHBOR")) == 0){
////		value  = new tName("12A");
////	}
////	if (output[0]->strcmp(new tName("NEAREST_RECTANGLE")) == 0){
////		value  = new tName("13");
////	}
////	if (output[0]->strcmp(new tName("WINDOW")) == 0){
////		value  = new tName("14");
////	}
////	if (output[0]->strcmp(new tName("CHANGE_EXPANSION_FACTOR")) == 0){
////		value  = new tName("15");
////	}
////	if (output[0]->strcmp(new tName("NEAREST_NEIGHBOR")) == 0){
////		value  = new tName("16");
////	}
////	if (output[0]->strcmp(new tName("LEXICALLY_GREATER_NEAREST_NEIGHBOR")) == 0){
////		value  = new tName("17");
////	}
////	if (output[0]->strcmp(new tName("RAYTRACE")) == 0){
////		value  = new tName("18");
////	}	
//	
////	
////	
////	for (int i=1; i<currentCommand; i++){
////		if((output[0]->strcmp(new tName("INIT_QUADTREE"))==0 || output[0]->strcmp(new tName("CHANGE_EXPANSION_FACTOR"))==0) &&  isFloatingPointNumber(output[i])){
////			 cout.setf(ios::fixed);
////			 cout << " " << setprecision(3) << atof(output[i]->toString());
////		}
////		else {
////			cout << " " << output[i];	
////		}
////	}
////	
////	cout << endl;
//	return output;
//}
//
//tName* command_number(tName *input){
//	tName * value = new tName("COMMAND IS NOT IMPLEMENTED");
//	if (input->Length() == NULL){
//		return value;
//	}
//	if (input->strcmp(new tName("INIT_QUADTREE")) == 0)
//		value  = new tName("1");	
//	if (input->strcmp(new tName("DISPLAY")) == 0)
//		value  = new tName("2");
//	if (input->strcmp(new tName("LIST_RECTANGLES")) == 0)
//		value  = new tName("3");
//	if (input->strcmp(new tName("CREATE_RECTANGLE")) == 0)
//		value  = new tName("4");
//	if (input->strcmp(new tName("INSERT")) == 0)
//		value  = new tName("5");
//	if (input->strcmp(new tName("MOVE")) == 0)
//		value  = new tName("6");
//	if (input->strcmp(new tName("SEARCH_POINT")) == 0)
//		value  = new tName("7");
//	if (input->strcmp(new tName("DELETE_RECTANGLE")) == 0)
//		value  = new tName("8A");
//	if (input->strcmp(new tName("DELETE_POINT")) == 0)
//		value  = new tName("8B");
//	if (input->strcmp(new tName("REGION_SEARCH")) == 0)
//		value  = new tName("9");
//	if (input->strcmp(new tName("TOUCH")) == 0)
//		value  = new tName("10");
//	if (input->strcmp(new tName("WITHIN")) == 0)
//		value  = new tName("11");
//	if (input->strcmp(new tName("VERT_NEIGHBOR")) == 0)
//		value  = new tName("12B");
//	if (input->strcmp(new tName("HORIZ_NEIGHBOR")) == 0)
//		value  = new tName("12A");
//	if (input->strcmp(new tName("NEAREST_RECTANGLE")) == 0)
//		value  = new tName("13");
//	if (input->strcmp(new tName("WINDOW")) == 0)
//		value  = new tName("14");
//	if (input->strcmp(new tName("CHANGE_EXPANSION_FACTOR")) == 0)
//		value  = new tName("15");
//	if (input->strcmp(new tName("NEAREST_NEIGHBOR")) == 0)
//		value  = new tName("16");
//	if (input->strcmp(new tName("LEXICALLY_GREATER_NEAREST_NEIGHBOR")) == 0)
//		value  = new tName("17");
//	if (input->strcmp(new tName("RAYTRACE")) == 0)
//		value  = new tName("18");
//
//	return value;
//}
//
//bool isFloatingPointNumber(tName *s){
//	// check if its all numbers and has a DecimalPoint
//	bool hasDecimalPoint = false;
//	bool hasOnlyNumbers = true;
//	for(int i=0; i<s->Length(); i++){
//		if(s->at(i) == '.'){
//			hasDecimalPoint = true;
//		}
//		else if (s->at(i)!='0' && s->at(i)!='1' && s->at(i)!='2'  && s->at(i)!='3' && s->at(i)!='4' && s->at(i)!='5' && s->at(i)!='6'  && s->at(i)!='7' && s->at(i)!='8' && s->at(i)!='9'){
//			hasOnlyNumbers = false;
//			return false;
//		}
//	}
//	if (hasOnlyNumbers == true && hasDecimalPoint == true)
//		return true;
//	else
//		return false;
//}
//
//tName *remove_whitespace(tName * s)
//{
//	int startWhiteSpace = 0;
//	// find the start of the whitespace
//	for(int i=0; i<s->Length(); i++){
//		if(s->at(i)!=' '){
//			startWhiteSpace = i;
//			break;
//		}
//	}
//	// find the end of the whitespace
//	int endWhiteSpace = 0;
//	for (int i=s->Length(); i<0; i--){
//		if(s->at(0)!=' '){
//			endWhiteSpace = i;
//			break;
//		}
//	}
//
//	tName * substring = s->substring(startWhiteSpace,endWhiteSpace);
//
//	//cout << startWhiteSpace << " " << endWhiteSpace << endl;
//	return s->substring(startWhiteSpace,endWhiteSpace);
//}
//
//
//
//
