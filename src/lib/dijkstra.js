'use strict';

/*eslint-disable*/
const PriorityQueue = require('js-priority-queue');

// dijkstra's algorithm implemented using a priority queue, or min-priority queue.
// Background and history of this algorithm can be found here: 
//    https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm

module.exports = (graph, startNode, goalNode) => { // given a graph and startNode, return the
                                                    // shortest path to goalNode
  const visitedNodes = new Set();                  // create a set of visited nodes. we'll only
                                                    // visit each node once.
  const parentMap = new Map();                      // a map to contain previous (parent) nodes
                                                    // along the path
  const shortestPathSoFar = new Map();              // a map holding the nodes on the currently
                                                    // shortest path

  const priorityQueue = new PriorityQueue({         // create a new priority queue with comparison
    comparator: (a, b) => a.priority - b.priority,  // function. Priority ==> distance.
  });

  priorityQueue.queue({                             // add the startNode to the queue with minimum
    node: startNode,                                // priority (or distance in this case)
    priority: 0,
  });
  shortestPathSoFar.set(startNode, 0);              // add the startNode to the shortest path map as
                                                    // it's on the path by definition


  while (priorityQueue.length > 0) {                  // While there are nodes in the priority queue
    const currentNode = priorityQueue.dequeue().node; // dequeue the next node in line

    if (visitedNodes.has(currentNode)) { continue; }  // if we've previously visited this node, skip 
                                                      // this iteration and go back to the top of the loop
    visitedNodes.add(currentNode);                    // add the current node to the visited nodes set

    if (currentNode === goalNode) { return parentMap; } // if we've found the goal node then we're done!
    
    const neighbors = graph.getNeighbors(currentNode); // get an array of the nodes that are neighbors of
                                                        // the current node
    for (const neighbor of neighbors) {                 // for each neighbor node...
      const neighborWeight = neighbor.weight;           // cash weight and node
      const neighborNode = neighbor.node;

      if (visitedNodes.has(neighborNode)) { continue; } // again, if we've visited the node, skip ahead...
      
      const newPathWeight = shortestPathSoFar.get(currentNode) + neighborWeight; // calculate the distance
                                                        // from startNode to neighbor node thru current node
      if (!shortestPathSoFar.has(neighbor) ||           // if this neighbor node isn't on the shortest path
         newPathWeight < shortestPathSoFar.get(neighborNode)) { // OR the newly calculated path distance is
                                                        // less than the current distance
        shortestPathSoFar.set(neighborNode, newPathWeight); // add the current neighbor do the shortest path
                                                          // map along with its new distance.
        parentMap.set(neighborNode, currentNode);         // add neighbor to the previous (parent) map

        priorityQueue.queue({                             // add neighbor node the the priority queue with
          node: neighborNode,                             // priority (distance) equal to its distance from
          priority: shortestPathSoFar.get(neighborNode),  // start node
        });
      }
    }
  }
  return null;                                            // graph is empty, return null.
};
