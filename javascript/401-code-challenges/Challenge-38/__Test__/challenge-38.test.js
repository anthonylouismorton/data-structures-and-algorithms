"use strict";

const Graph = require("../graph.js");

describe("Can use graph", () => {
  let graph = new Graph();

  let A = graph.addVertex('A');
  let B = graph.addVertex('B');
  let C = graph.addVertex('C');
  let D = graph.addVertex('D');
  let E = graph.addVertex('E');
  let F = graph.addVertex('F');
  let G = graph.addVertex('G');
  let H = graph.addVertex('H');

  graph.addDirectedEdge(A, B);
  graph.addDirectedEdge(A, D);
  graph.addDirectedEdge(B, C);
  graph.addDirectedEdge(B, D);
  graph.addDirectedEdge(C, G);
  graph.addDirectedEdge(D, E);
  graph.addDirectedEdge(D, H);
  graph.addDirectedEdge(D, F);
  graph.addDirectedEdge(F, H);
  let myTest = graph.depthFirst(A)
  function valueFinder(arr){
    return arr.map(obj => 
      obj ? obj.value : null)
  }
 
  it("Returns an array of depth first vertices.", () => {
    expect(valueFinder(Array.from(myTest))).toEqual(["A", "B", "C", "G", "D", "E", "H", "F"])

  });

  it("Returns error if there is no starting vertex.", () => {
    let myGraph = new Graph();
    
    expect(myGraph.depthFirst()).toEqual("there is no vertices in this graph")

  });

  it("Returns only one value if there is only one vertex in the graph.", () => {
    let myGraph = new Graph();
    let A = myGraph.addVertex('A');
    myGraph.addDirectedEdge(A, A)
    
    expect(Array.from(myGraph.depthFirst(A))).toEqual([{"value": "A"}])

  });
});