'use strict';

const Graph = require('../graph.js');

describe('Can successfully implement a Graph and all its functions', () => {

  it('Node can be successfully added to the graph', () => {
    let graph = new Graph();

    expect(graph.addVertex('A')).toEqual({'value': 'A'});
  });

  it('An edge can be successfully added to the graph', () => {
    let graph = new Graph();
    let A = graph.addVertex('A')
    let B = graph.addVertex('B')
    graph.addDirectedEdge(A, B)

    expect(graph.adjacencyList.get(A)).toEqual([{"vertex": {"value": "B"}, "weight": 0}]);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();
    let A = graph.addVertex('A')
    graph.addDirectedEdge(A, A)

    expect(graph.getVertices()).toEqual([{"value": "A"}]);
  });

  it('An empty graph properly returns null', () => {
    let graph = new Graph();

    expect(graph.size()).toEqual(null);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let graph = new Graph();
    let A = graph.addVertex('A')
    let B = graph.addVertex('B')
    let C = graph.addVertex('C')
    let D = graph.addVertex('D')
    expect(graph.getVertices()).toEqual([{"value": "A"}, {"value": "B"}, {"value": "C"}, {"value": "D"}]);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new Graph();
    let A = graph.addVertex('A')
    let B = graph.addVertex('B')
    let C = graph.addVertex('C')
    let D = graph.addVertex('D')

    expect(graph.size()).toEqual(4);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
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

    expect(graph.getNeighbors(A)).toEqual([{"vertex": {"value": "D"}, "weight": 0}, {"vertex": {"value": "C"}, "weight": 0}, {"vertex": {"value": "B"}, "weight": 0}]);
    expect(graph.getNeighbors(C)).toEqual([{"vertex": {"value": "F"}, "weight": 0}, {"vertex": {"value": "E"}, "weight": 0}, {"vertex": {"value": "B"}, "weight": 0}])
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new Graph();

    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');

    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(A, C);
    graph.addDirectedEdge(A, B);

    let neighbor = graph.getNeighbors(A)

    expect(neighbor[0].weight).toEqual(0);

  });
  
});