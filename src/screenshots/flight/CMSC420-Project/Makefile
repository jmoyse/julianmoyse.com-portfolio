CC=     g++
CFLAGS= -Wl,-rpath,/usr/local/gcc/lib64

all: part4.3

part4.3: LooseQuadTree.h LooseQuadTree.cpp LooseQuadTreeDriver.cpp LooseQuadTreeDriver.h cNode.cpp cNode.h bNode.cpp bNode.h drawing_c.h drawing.c Rectangle.cpp Rectangle.h tName.h tName.cpp
	$(CC) $(CFLAGS) -o part4.3 LooseQuadTree.h LooseQuadTree.cpp LooseQuadTreeDriver.cpp LooseQuadTreeDriver.h cNode.cpp cNode.h bNode.cpp bNode.h drawing_c.h drawing.c Rectangle.cpp Rectangle.h tName.cpp tName.h

part4.2: decoder.cpp tName.cpp tName.h
	$(CC) $(CFLAGS) -o part4.2 decoder.cpp tName.cpp tName.h

clean: 
	rm -rf part*



