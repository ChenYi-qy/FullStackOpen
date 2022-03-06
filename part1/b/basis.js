
// Variables: do not recommmend to use var, use let and const instead
const x = 1
let y = 5
console.log(x,y)
y+=10
console.log(x,y)
y = 'sometext'
console.log(x,y)

// Arrays
const t = [1,-1,3] // Note: even an arry is defined by const, you can still modify it
t.push(5)
console.log(t.length)
console.log(t[1])
t.forEach(value => {
    console.log(value)
})

const t2 = t.concat(5) // concat creates an new array which contains old array and new elements
console.log(t)
console.log(t2)

const m1 = t.map(value => value * 2) // map can also be used to create a new array
console.log(m1)

const m2 = t.map(value => '<li>' + value + '<li>')
console.log(m2)

const t3 = [1,2,3,4,5]
const [first,second, ...rest] = t3 // dectructuring assignment: first and second will recive the first two elements to be their values, the rest is "collected" to another array(rest)
console.log(first,second)
console.log(rest)

// Objects
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'Phd'
}
const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}
const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov'
    },
    grades: [2,3,5,3],
    department: 'Stanford University'
}
console.log(object1.name)
const fieldname = 'age'
console.log(object1[fieldname]) // we can also use "[]" to reference object's name
object1.address = 'Helsinki' 
object1['secret number'] = 12341 // we can use "." or "[]" to add atributes to objects

// Functions
const sum = (p1,p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
const result = sum(1,5)
console.log(result)

const square1 = p => { // we can omit "()" when we only have one parameter
    console.log(p)
    return p * p
}

const square2 = p => p * p // we can omit "{}" when we only have one expression
const t4 = [1,2,3]
const tSquared = t4.map(p => p * p)

function product(a,b) { // Method1 to define a function
    return a * b
}
const averge = function(a,b) { // Method2 to define a function(don't need to give it a name)
    return (a + b) / 2
}

// Classes  (JavaScript do not have class mechnism like java, but we can "simulate" the classes in object oriented programming)
class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is' + this.name)
    }
}
const adam = new Person('Adam Ondra',35)
adam.greet();
const janja = new Person('Janja Garnbret',22)
janja.greet();