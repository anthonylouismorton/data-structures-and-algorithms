# Graph
<!-- Short summary or background information -->
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods: add node, add edge, get node, get neighbors, and size

## Challenge
<!-- Description of the challenge -->
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:  

add node  
Arguments: value  
Returns: The added node  
Add a node to the graph  

add edge  
Arguments: 2 nodes to be connected by the edge, weight (optional)  
Returns: nothing  
Adds a new edge between two nodes in the graph  
If specified, assign a weight to the edge  
Both nodes should already be in the Graph  

get nodes  
Arguments: none  
Returns all of the nodes in the graph as a collection (set, list, or similar)  

get neighbors  
Arguments: node  
Returns a collection of edges connected to the given node  
Include the weight of the connection in the returned collection  
  
size  
Arguments: none  
Returns the total number of nodes in the graph  

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
addVertex
Time: O(1)
Space: O(|V|^2)

addDirectedEdge
Time: O(1)
Space: O(1)

getVertices
Time: O(|V|)
Space: O(1)

GetNeighbor

Time: O(|V|)
Space: O(1)

Size
Time: O(|V|+|E|)
Space: O(|V|^2)

breadthFirst
Time: O(|V|+|E|)
Space: O(n)

V = vertices
E = edges

## API
<!-- Description of each method publicly available in your Graph -->
add node  
Arguments: value  
Returns: The added node  
Add a node to the graph  

add edge  
Arguments: 2 nodes to be connected by the edge, weight (optional)  
Returns: nothing  
Adds a new edge between two nodes in the graph  
If specified, assign a weight to the edge  
Both nodes should already be in the Graph  

get nodes  
Arguments: none  
Returns all of the nodes in the graph as a collection (set, list, or similar)  

get neighbors  
Arguments: node  
Returns a collection of edges connected to the given node  
Include the weight of the connection in the returned collection  
  
size  
Arguments: none  
Returns the total number of nodes in the graph  