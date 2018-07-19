
// DFS is not guaranteed to return the most optimal path in a graph

export class Queue {
  constructor() {
    this._queue = [];
  }

  enqueue(value) {
    this._queue.unshift(value);
  }

  dequeue() {
    return this._queue.pop();
  }

  peek() {
    return this._queue[this._queue.length - 1];
  }

  get length() {
    return this._queue.length;
  }
}

//
// This is LITERALLY Judy's demo code with the stack array replaced with an instance of my Queue class
// and the for of replaced with a for i loop.
//
export const BFS = (graph, startNode, goalNode) => {
  const visitedNodes = new Set(); // set to keep track of nodes we've already visited

  const parentMap = new Map(); // parentMap holds the edges we've visited 
  
  const queue = new Queue(); // instantiate a new queue

  queue.enqueue(startNode); // enqueue the start node

  visitedNodes.add(startNode); // add start node to the queue as its initial member

  while (queue.length) { // loop until the queue is empty...
    const currentNode = queue.dequeue(); // get the node at the head of the queue

    if (currentNode === goalNode) { // if we've reached our goal, bail!
      return parentMap;
    }
    
    const neighbors = graph.getNeighbors(currentNode); // otherwise, get our current neighbors

    for (let i = 0; i < neighbors.length; i++) { // for each neighbor
      const neighborNode = neighbors[i].node; // get the node value from the map object

      if (visitedNodes.has(neighborNode)) continue; /* eslint-disable-line */ // skip if already visited

      visitedNodes.add(neighborNode); // add node to list of those already visited. we won't be back...

      parentMap.set(neighborNode, currentNode); // update previous node map with this neighbor

      queue.enqueue(neighborNode); // push the neighbor onto the queue for later processing
    }
  }

  return null; // no path, or no graph, return null.
};
