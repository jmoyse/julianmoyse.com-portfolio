#include <iostream>

#if !defined _TNAME_H
#define _TNAME_H

#define MAX_STRING_LEN 256
#define MAX_NAME_LEN 6


using namespace std;

class tName {
	public:
		tName();
		tName(char * name);
		~tName();
		int Length();
		int strcmp(tName* string);
		tName* substring(int start, int end);
		char at(int position);
		
		tName* append(tName* string);
		tName* append(char character);
		char * toString();
		
		friend ostream& operator << (ostream& os, tName* string);
		friend istream& operator >> (istream& is, tName* string);
	private:
		char * name;
		int length;
};
#endif	
