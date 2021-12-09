'use strict';

const Graph = require('../graph.js');

describe('Can successfully implement a Graph and all its functions', () => {

  it('will traverse a graph breadth first', () => {
    let graph = new Graph();

    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');
    let E = graph.addVertex('E');
    let F = graph.addVertex('F');
    let G = graph.addVertex('G');
    let H = graph.addVertex('H');

    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(A, C);
    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(D, F);
    graph.addDirectedEdge(B, C);
    graph.addDirectedEdge(B, E);
    graph.addDirectedEdge(C, F);
    graph.addDirectedEdge(C, E);
    graph.addDirectedEdge(C, B);
    graph.addDirectedEdge(F, G);
    graph.addDirectedEdge(G, H);
    graph.addDirectedEdge(H, F);

    let myTest = graph.breadthFirst(A)
    expect(Array.from(myTest)).toEqual([{"value": "A"}, {"value": "D"}, {"value": "C"}, {"value": "B"}, {"value": "F"}, {"value": "E"}, {"value": "G"}, {"value": "H"}])
  });

  it('will return error message when there is no vertex in the graph', () => {
    let graph = new Graph();
    let myTest = graph.breadthFirst()


    expect(Array.from(myTest).join('')).toEqual("there is no vertices in this graph");

  });
  
});