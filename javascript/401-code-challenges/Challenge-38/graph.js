'use strict';

const Edge = require('./edge.js')
const Vertex = require('./vertex.js')
const Stack = require('./Stack.js')

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.collection = [];
  }

  // adding a value to our adjency
  addVertex(value) {
    let payload = new Vertex(value);
    this.adjacencyList.set(payload, []);

    // for simplicities sake
    return payload;
  }

  // add method should specify direct vs undirected, adding a connection between vertices
  addDirectedEdge(startVertex, endVertex, weight = 0) {

    // check if the vertex exists in our list of vertices.
    if(!this.adjacencyList.has(startVertex) && !this.adjacencyList.has(endVertex)) {
      throw new Error('Vertex Error');
    }

    // what should do to add them to our adjacency values?

    // grab all edges connected to the starting vertex
    let neighbors = this.adjacencyList.get(startVertex);

    // create a new edge from our ending vertex and push it into the list of neighbors.
    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getVertices(){
    this.adjacencyList.forEach((key, value) => {
      this.collection.push(value)
    });

    return this.collection

  }

  getNeighbors(vertex) {
    console.log(this.adjacencyList)
    console.log(vertex)
    if(!this.adjacencyList.has(vertex)) {
      throw new Error('GET NEIGHBOR ERROR :: Invalid vertex');
    }

    // I don't want mutate this array
    return [...this.adjacencyList.get(vertex)];
  }

  size(){
    if(this.adjacencyList.size === 0){
      return null
    }
    return this.adjacencyList.size
  }

  breadthFirst(startVertex) {
    if(!startVertex){
      return 'there is no vertices in this graph'
    }
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);


    while(queue.length) {

      const current = queue.shift();

      // I need to see all of current nodes adjecneies
      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {

        let neighbor = edge.vertex;

        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else {
          continue;
        }
      }
    }

    return visitedNodes;
  }

  depthFirst(startVertex) {
    if(!startVertex){
      return 'there is no vertices in this graph'
    }
    const stack = new Stack();
    const visitedNodes = new Set();

    stack.push(startVertex);
    visitedNodes.add(startVertex);

    console.log(stack.pop())
    while(!stack.isEmpty()) {
      let top = stack.pop();
      console.log(top)
      this.getNeighbors(top)
      .filter(vertex => !visitedNodes.has(vertex))
      .forEach(vertex => {
        visitedNodes.add(vertex);
        stack.push(vertex)
      })
    }

    return visitedNodes;
  }
}

module.exports = Graph;