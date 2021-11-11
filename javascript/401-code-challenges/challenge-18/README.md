# Breadth-first Traversal
<!-- Short summary or background information -->
Create a function that takes in a k-ary tree and returns a k-ary tree; The returned tree with have all values divisible by 3, 5, and 15 replaced by "Fizz", "Buzz", and "FizzBuzz" respectively. Any value not divisible by those will turn the number into a string.



## Challenge
<!-- Description of the challenge -->
Challenge Type: Code Challenge / Algorithm  


Feature Tasks  
Write a function called fizz buzz tree  
Arguments: k-ary tree  
Return: new k-ary tree  
Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:  


If the value is divisible by 3, replace the value with “Fizz”  
If the value is divisible by 5, replace the value with “Buzz”  
If the value is divisible by 3 and 5, replace the value with “FizzBuzz”  
If the value is not divisible by 3 or 5, simply turn the number into a String.  

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
fizzbuzz =  time: linear O(n) space: linear O(n)


## API
<!-- Description of each method publicly available in each of your trees -->
breadth first   
Arguments: tree  
Return: list of all values in the tree, in the order they were encountered  
NOTE: Traverse the input tree using a Breadth-first approach   
