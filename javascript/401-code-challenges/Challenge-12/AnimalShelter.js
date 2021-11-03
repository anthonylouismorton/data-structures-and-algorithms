'use strict'

const Stack = require('./Stack.js')

class AnimalShelter{
  constructor(){
   this.dogStack = new Stack();
   this.catStack = new Stack();
   this.animalQueueStack = new Stack();
   

  }
 
  enqueue(animal) {

    if(animal === 'cat'){
      this.catStack.push(animal)
    }
    else if(animal === 'dog'){
      this.dogStack.push(animal)
    }
    else{
      return 'we do not accept that animal at our shelter'
    }
  }

  dequeue(pref){
    //console.log(this.animalQueueStack)
    if(pref !== 'cat' && pref !== 'dog'){
      return null;
    }

    if(this.animalQueueStack === null && this.animalQueueStack.top.value === pref){
      return this.animalQueueStack.pop();
    }

    if(this.animalQueueStack.top !== null){
      if(this.animalQueueStack.top.value === pref){
        this.animalQueueStack.pop()
      }
      if(this.animalQueueStack.top.value !== pref){
        if(this.animalQueueStack.top.value === 'cat'){
          this.catStack.push(this.animalQueueStack.top.value);
          this.animalQueueStack.pop();
      }
      else{
        this.dogStack.push(this.animalQueueStack.top.value)
        this.animalQueueStack.pop();
      }
      }
    }
    

    if(this.dogStack.isEmpty() && this.catStack.isEmpty()){
      return 'this queue is empty'
    }
    if(this.animalQueueStack.isEmpty() && pref === 'cat'){
      //console.log('in cat stack')
      while(!this.catStack.isEmpty()){
        this.animalQueueStack.push(this.catStack.top.value);
        this.catStack.pop();
      }
    }
    if(this.animalQueueStack.isEmpty() && pref === 'dog'){
      while(!this.dogStack.isEmpty()){
        this.animalQueueStack.push(this.dogStack.top.value);
        this.dogStack.pop();
    }
  }
    var prefAnimal = this.animalQueueStack.top.value;
    this.animalQueueStack.pop();
    return prefAnimal;
  }
}

module.exports = AnimalShelter;