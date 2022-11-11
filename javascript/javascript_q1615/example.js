// D1
function Pet1() {
    this.speak = function() { return 'silence' }
    this.walk = function() { return 'scurry' }
}

function Dog1() {
    Pet1.call(this)
    this.speak = function() { return 'woof' }
}

const dog1 = new Dog1()
console.log(dog1.speak());
console.log(dog1.walk());

// D2
class Pet2 {
    speak() { return 'silence' }
    walk() { return 'scurry' }
}

class Dog2 extends Pet2 {
    speak() { return 'woof' }
}

const dog2 = new Dog2()
console.log(dog2.speak());
console.log(dog2.walk());

// D3
const pet3 = {
    speak: function() { return 'silence' },
    walk: function() { return 'scurry' }
}

const dog3 = Object.create(pet3)
dog3.speak = function() { return 'woof' }

console.log(dog3.speak());
console.log(dog3.walk());

// Answer (the one that is *NOT* valid)
const pet4 = {
    speak: function() { return 'silence' },
    walk: function() { return 'scurry' }
}

const dog4 = {
    speak: function() { return 'woof' }
}
dog4.prototype = pet4

console.log(dog4.speak());
console.log(dog4.walk());