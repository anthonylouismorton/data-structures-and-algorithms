# stack-queue-pseudo
<!-- Short summary or background information -->
Create a AnimalShelter class that takes in dog and cat objects. Class has a method to enqueue and dequeue dogs and cats.

## Challenge
<!-- Description of the challenge -->
Challenge Type: Code Challenge / Algorithm  


Feature Tasks  
Create a class called AnimalShelter which holds only dogs and cats.  
The shelter operates using a first-in, first-out approach.  
Implement the following methods:  


enqueue  
Arguments: animal  
animal can be either a dog or a cat object.  


dequeue  
Arguments: pref  
pref can be either "dog" or "cat"  
Return: either a dog or a cat, based on preference.  
If pref is not "dog" or "cat" then return null.  

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
enqueue - O(1)/constant  
dequeue- O(n)/linear


## API
<!-- Description of each method publicly available to your Linked List -->
enqueue  
Arguments: animal  
animal can be either a dog or a cat object.  


dequeue  
Arguments: pref  
pref can be either "dog" or "cat"   
