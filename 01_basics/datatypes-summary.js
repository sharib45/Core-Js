// primative data type


// 7

// number,  bigint , string ,boolean ,  null , undefined , symbol


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

//Array
let superhero = ["shaktiman","doda","nagraj"]

//object
let myprofileobj={

  name :"sharib",
  age :25


}


//function

let myfunction = function(){


console.log("hello world")


}


// stack (primativ)  heap(non primative)


//stack example
let myyoutubename= "sharib"

let anothername = myyoutubename

anothername="sharibshahid"


console.log(myyoutubename)

console.log(anothername)



//heap example


const obj1 ={


city :"delhi",
pincode:11



}

let obj2 = obj1


obj2.city="mumbai"
obj2.pincode22


console.log(obj1.city)
console.log(obj2.city)