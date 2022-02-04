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

// const graph = new Graph();

// const Pandora = graph.addVertex("Pandora");
// const Arendelle = graph.addVertex("Arendelle");
// const Metroville = graph.addVertex("Metroville");
// const Monstropolis = graph.addVertex("Monstropolis");
// const Narnia = graph.addVertex("Narnia");
// const Naboo = graph.addVertex("Naboo");

// graph.addDirectedEdge(Pandora, Arendelle, 150);
// graph.addDirectedEdge(Pandora, Metroville, 82);
// graph.addDirectedEdge(Arendelle, Pandora, 150);
// graph.addDirectedEdge(Arendelle, Metroville, 99);
// graph.addDirectedEdge(Arendelle, Monstropolis, 42);
// graph.addDirectedEdge(Metroville, Pandora, 82);
// graph.addDirectedEdge(Metroville, Arendelle, 99);
// graph.addDirectedEdge(Metroville, Monstropolis, 105);
// graph.addDirectedEdge(Metroville, Naboo, 26);
// graph.addDirectedEdge(Metroville, Narnia, 37);
// graph.addDirectedEdge(Monstropolis, Arendelle, 42);
// graph.addDirectedEdge(Monstropolis, Metroville, 105);
// graph.addDirectedEdge(Monstropolis, Naboo, 73);
// graph.addDirectedEdge(Narnia, Metroville, 37);
// graph.addDirectedEdge(Narnia, Naboo, 250);
// graph.addDirectedEdge(Naboo, Narnia, 250);
// graph.addDirectedEdge(Naboo, Metroville, 26);
// graph.addDirectedEdge(Naboo, Monstropolis, 73);

// console.log('GET PRICE TRAVEL')
// console.log(' ')
// console.log('GetPriceTravel Fucntion Result: ',graph.getPriceTravel(Pandora, Narnia, Monstropolis));
// console.log('GetPriceTravel Fucntion Result: ',graph.getPriceTravel(Pandora, Metroville, Naboo));
// console.log('-------------')

// getNeighbors()
// let neighborCheck = graph.getNeighbors(Pandora);
// console.log('getNeighbors(ten) ', neighborCheck);

// // getVertices() -> returns and iterable object
// let vertices = graph.getVertices();
// console.log('All Graph Vertices', vertices);

// console.log('log the graph', util.inspect(graph))
// console.log(util.inspect(graph.pathTo(ten, seven), false, null, true));
// console.log('BFS Traversal with Vertex 10 as starter', util.inspect(graph.bfs(ten), false, null, true));
// console.log(util.inspect(graph.dfs(ten), false, null, true));

module.exports = { Graph };
