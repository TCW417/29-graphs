![cf](http://i.imgur.com/7v5ASc8.png) 29: Graphs
===
[![Build Status](https://travis-ci.com/TCW417/29-graphs.svg?branch=master)](https://travis-ci.com/TCW417/29-graphs)


#### Breadth-First Graph Traversal  

A graph is a collection of vertices, or nodes, and edges, or links, between vertices.  The mathmatical expression of a graph is G = (V, E) where V is the collection of vertices and E the collection of edges. 

Graphs may be directed (aka digraphs) or non-directed. Directed graphs are characterized by their links allowing movement in only one direction.  Non-directed graph links can be traversed in either direction. Notationally, the difference between digrahs and graghs is sometimes seen in the use of curly braces to surround directional edge pairs, e.g., {a, b} meaning traversal can only be from a (the origin) to b (the destination) vs use of parenthesis for non-directed edges: (a, b).  In JavaScript, the implementation of the data structure for these two types of graphs is likely to be identical so one must know at the outset what type of graph is presented.

bfs.js exports function BFS, or Breadth-First-Search.  In a breadth firs search, all of the neighbors of the current node are visited before any of *their* neighbors are visited.  This in contrast to a depth first search in which the graph is traversed from neighbor to neighbor down a single path until either a vertex with no neighbors is reached, or a vertex that has already been visited is reached. From a programming standpoing, the two methods of traversal differ only in the choice of "memory" data structure: A Stack is used for depth first searches while a Queue is used in breadth first searches.
Add your Travis badge to the top of your README (even if your build is failing), and describe what a graph is. Include the Big Oh time and space complexity of your breadth-first traversal. 
