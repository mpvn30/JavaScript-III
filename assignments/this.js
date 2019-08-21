/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when the "this" keyword is used in a function but is called without referencing any object, it will reference the default window value which is usually undefined. Although, using strict mode or 'use strict'; inside the function will return an error.
* 2. Implicit Binding is the most common "this" principle. In implicit binding the "this" keyword references the object to the left of the dot in the syntax when a function is invoked. 
* 3. New binding uses constructor functions. When a constructor function is invoked with the "new" keyword it will create a new object with the new object attributes given.
* 4. Explicit Binding uses the call, apply and bind properties. .call allows to invoke a function while referencing a specific object. Apply is the same with call except it allows us to pass arrays. Lastly, Bind is also the same as .call except it returns us a new function permanently.
*
* write out a code example of each explanation above
*/

// Principle 1
const loveLife = function(){
    console.log(this.status)
};
let you = {
    status: "single"
}
loveLife(); //this will result to undefined unless you initially changed the value of status in your window using window.status = "" or used strict mode;
// code example for Window Binding

// Principle 2
const speak = function(obj){
    obj.speak = function(){
    console.log(`Hello I am ${this.name} and I am from ${this.location}`)
    };
};

let person = {
    name: "Mike",
    location: "Queens, New York",
};
let personTwo = {
    name: "John",
    location: "Las Vegas, Nevada"
}
//Passing function in object
speak(person);
speak(personTwo);
//invoking
person.speak(); //left of the dot is person so it is referencing the object person
personTwo.speak(); //left of the dot is personTwo so it is referencing the personTwo object
// code example for Implicit Binding

// Principle 3
const Candy = function(name, color ,type){
    this.name = name;
    this.color = color;
    this.type = type;
}
let gum = new Candy('Juicy Fruit', 'Yellow', 'Chewing Gum'); //"new" keyword used so it creates a new object with the given attributes.

// code example for New Binding

// Principle 4
//example for .call()
const growl = function(){
    console.log(`${this.animal} says ${this.sound}`)
}

let specie = {
    animal: "dog",
    sound: "woof!"
}
let specieTwo = {
    animal: "cat",
    sound: "meow!"
}

growl.call(specie); //calling the function referencing specie
growl.call(specieTwo); //calling the function referencing specieTwo
//example for apply
const growl = function(breed1, breed2, breed3){
    console.log(`${this.animal} says ${this.sound} and it has breeds such as ${breed1}, ${breed2}, and ${breed3}`)
}

let specie = {
    animal: "dog",
    sound: "woof!"
}
let specieTwo = {
    animal: "cat",
    sound: "meow!"
}
let breed = ['Bulldog', 'Labrador', 'Beagle'];
let breedTwo = ['Persian', 'Siamese','Sphynx']

growl.apply(specie, breed);
growl.apply(specieTwo, breedTwo);

//example for bind
const newFunction = growl.bind(specie);//this will bind the growl function to the object specie

// code example for Explicit Binding
