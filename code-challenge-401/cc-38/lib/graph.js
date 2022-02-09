"use strict";
const util = require("util");

// *********** INSTRUCTIONS ************* //
/*
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:
add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Include the weight of the connection in the returned collection
size
  - Arguments: none
  - Returns the total number of nodes in the graph
*/

// Vertex = Node
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    //this.startNode;
    //this.endNode;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // why use a Map?
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    // - Arguments: value
    // - Returns: The added node
    let vertex = new Vertex(value);
    // console.log('Adding new Vertex with value: ', value);
    // - Add a node to the graph
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    // console.log(`Creating new edge with ${startVertex} and ${endVertex}`, util.inspect(startVertex))
    if (
      !this.adjacencyList.has(startVertex) ||
      !this.adjacencyList.has(endVertex)
    ) {
      throw new Error("__ERROR__ Invalid Vertices");
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    // - Arguments: node
    // - Returns a collection of edges connected to the given node
    // - Include the weight of the connection in the returned collection
    if (!this.adjacencyList.has(vertex)) {
      throw new Error("__ERROR__ Invalid Vertex", vertex);
    }

    return [...this.adjacencyList.get(vertex)];
  }

  getVertices() {
    // - Arguments: none
    // - Returns all of the nodes in the graph as a collection (set, list, or similar)
    return this.adjacencyList.entries();
  }

  size() {
    // - Arguments: none
    // - Returns the total number of nodes in the graph
    return this.adjacencyList.size();
  }

  bfs(startNode) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    console.log(visitedNodes);

    return;
  }

  dfs(startNode) {
    let startingVertex = this.getNeighbors(startNode)
    let stack = startingVertex
    let visitedNodes = new Set();
    let results = [];
    visitedNodes.add(startNode);
    let popped = stack.shift()
    console.log('popped:', popped);
    console.log('popped:', this.getNeighbors(popped.vertex));
    // if(stack[0].vertex) console.log('stack[0].vertex',stack[0].vertex)
    
    // while (stack) {
    //   // console.log('stack.vertex:', stack[0].vertex);
    //   // stack = stack.vertex
    // }

    /*
      Push the root node into the stack
      Start a while loop while the stack is not empty
      Peek at the top node in the stack
      If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
      If the top node does not have any unvisited children, Pop that node off the stack
      repeat until the stack is empty.
    */
  }

  getPriceTravel(startingVertex, layover, endingVertex) {
    let startNeighbors = this.getNeighbors(startingVertex);
    let layoverNeighbors;
    if (layover) layoverNeighbors = this.getNeighbors(layover);
    let okToTravel = false;
    let totalCost = 0;

    function findCost(start, stop) {
      if (layover) okToTravel = false;
      start.forEach((place) => {
        if (place.vertex.value === stop.value) {
          totalCost = totalCost + place.weight;
          if (place.weight) okToTravel = true;
        }
      });
    }
    if (layover === null) {
      findCost(startNeighbors, endingVertex);
    } else if (layover) {
      findCost(startNeighbors, layover);
      findCost(layoverNeighbors, endingVertex);
    }
    if (okToTravel) {
      return `Cost of Flight would be: ${totalCost}`;
    } else return "Could not connect your flights!";
  }
}

const graph = new Graph();

const A = graph.addVertex("A");
const B = graph.addVertex("B");
const C = graph.addVertex("C");
const D = graph.addVertex("D");
const E = graph.addVertex("E");
const F = graph.addVertex("F");
const G = graph.addVertex("G");
const H = graph.addVertex("H");

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(B, A);
graph.addDirectedEdge(B, D);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(C, B);
graph.addDirectedEdge(C, G);
graph.addDirectedEdge(G, C);
graph.addDirectedEdge(D, A);
graph.addDirectedEdge(D, B);
graph.addDirectedEdge(D, E);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(E, D);
graph.addDirectedEdge(H, D);
graph.addDirectedEdge(H, F);
graph.addDirectedEdge(F, D);
graph.addDirectedEdge(F, H);

// console.log('graph:', graph);
graph.dfs(A)
