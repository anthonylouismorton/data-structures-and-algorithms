# stack-queue-pseudo
<!-- Short summary or background information -->
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Create a Binary Tree class with pre order, in order, and post order methods
Create a Binary Search Tree class with add and contains methods

## Challenge
<!-- Description of the challenge -->
Challenge Type: New Implementation  

Features
 

Node  
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.


Binary Tree  
Create a Binary Tree class  
Define a method for each of the depth first traversals:  
pre order  
in order  
post order which returns an array of the values, ordered appropriately.  
Any exceptions or errors that come from your code should be semantic, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.


Binary Search Tree  
Create a Binary Search Tree class  
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:  


Add  
Arguments: value  
Return: nothing  
Adds a new node with that value in the correct location in the binary search tree.


Contains  
Argument: value  
Returns: boolean indicating whether or not the value is in the tree at least once.


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
contain - O(n)/linear  
add - O(n)/linear  
preOrder - O(n)/linear  
postOrder - O(n)/linear  
inOrder - O(n)/linear  


## API
<!-- Description of each method publicly available in each of your trees -->
Add  
Arguments: value  
Return: nothing  
Adds a new node with that value in the correct location in the binary search tree.  


Contains  
Argument: value  
Returns: boolean indicating whether or not the value is in the tree at least once.  


in order 
Argument: tree.root
Returns: Array that returns tree values in order


pre order 
Argument: tree.root  
Returns: Array that returns tree values in pre order  


post order 
Argument: tree.root  
Returns: Array that returns tree values in post order  
