	#include <iostream>
	#include "tName.h"
	using namespace std;

	tName::tName()
	{
		length = 0;
		name = new char[length];	
	}
	tName::tName(char * input)
	{
		length = 0;
		name = input;
		int position = 0;
		while(name[position++]!='\0'){
			length++;
		}
	}

	ostream& operator << (ostream& os, tName* string)
	{
		if (string->Length() >0){
			os << string->toString();
		}
		return os;
	}


	istream& operator >> (istream& is, tName* string)
	{
		is >> string->toString();
		return is;
	}

	//TODO: Write strcmp function for tName
	int tName::strcmp(tName* string)
	{
		if (length > string->Length()){
			return 1;
		}
		else if (length < string->Length()){
			return -1;
		}
		else {
			for(int i=0; i<length; i++){
				if (name[i] > string->at(i))
					return 1;
				else if (name[i] < string->at(i))
					return -1;
			}
			return 0;
		}
	}

	char * tName::toString()
	{
		return name;
	}
	int tName::Length()
	{
		return length;
	}
	char tName::at(int position)
	{
		if (position > length)
			return NULL;
		return name[position];
	}
	tName* tName::substring(int start, int end)
	{
		if (0<= start < end <=length){
			int position = 0;
			char* temp = new char[end-start];
			for(int i=start; i<=end; i++){
				temp[position++]=name[i]; 
			}
			temp[position++] = '\0';
			
			tName * tempName = new tName(temp);
			return (tempName);

		}
	}

	//TODO: Write operator function for tName
	tName* tName::append(tName* string)
	{
		int newLength = string->Length() + length;
		cout << newLength << endl;
		char * temp = new char[newLength];
		// copy name over
		for(int i =0;i< length; i++){
			temp[i] = name[i];
		}
		int position = 0;
		// copy string over
		for (int i=length; i<newLength; i++){
			temp[i] = string->at(position);
			position++;
		}
		temp[newLength] = '\0';
		name = temp;
		length = newLength;
		return new tName(temp);	
	}
	tName* tName::append(char character)
	{
		//cout << "YESSSSSSSSSS" << endl;
		int newLength = length+1;
		char * temp = new char[newLength];

		for(int i=0;i<length; i++){
			temp[i] = name[i];
		//	cout << temp[i];
		}
		//cout << character << endl;
		temp[length] = character;
		temp[newLength] = '\0';
		length = newLength;
		name = temp;
		
		return new tName(temp);
	}

	tName::~tName()
	{

	}