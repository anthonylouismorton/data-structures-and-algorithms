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
  graph.addDirectedEdge(B, D);
  graph.addDirectedEdge(B, C);
  graph.addDirectedEdge(C, G);
  graph.addDirectedEdge(D, E);
  graph.addDirectedEdge(D, F);
  graph.addDirectedEdge(D, H);
  graph.addDirectedEdge(F, H);
  let myTest = graph.depthFirst(A)
  let neighbors = graph.getNeighbors(A)
  it("Returns an array of depth first vertices.", () => {
    expect(neighbors).toEqual()
    expect(myTest).toEqual("True, $150");

  });
});