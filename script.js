const months =  ['January', 'Febuary', 'March', 'April','May']
// console.log(months[0])


//looping through an array
for(let i = 0; i < months.length; i++) {
    console.log(months[i])
}

//replace array
months[3] = 'Not April';
console.log(months)

//array lenght
console.log(months.length)


//Things We can Have In An Array

const bestBooks = [
    'Science',
    {name:'john'},
    true,
    () => {

    }

]
console.log(bestBooks)
//console.log(alltype[2](10,2)) -> function in array
//console.log(alltype[1].product) -> object in array


const names = ['Jon', 'Bob', 'David', 'Mark'];

//Array Push - Adds a new element containing the entered
// value to the end of the array 

names.push('Dean');

//Array Pop - Deletes the last element of an array
const removedValue = names.pop();
// console.log(removedValue)

//Array Shift - Deletes the first element of an array
names.shift()

//Array Unshift - Adds a new value to the start of an array
names.unshift('Dean','open mouth');

//Array Splice - its modify the existing array, 
//by adding new value or removing existing values at 
//at specified index position

names.splice(2,0, 'jenny', 'johnny');
// console.log(names);

// Using splice to remove elements
// const sample = ['fan', 'laptop','Tvs']
// sample.splice(1,2, 'mouse', 'keyboard') //remove and add
// sample.splice(1,2) //remove
// console.log(sample)

//Array Slice - copies certain part of an array and specified
// by the index and creates new array with it
const noOneLikeJon = names.slice(1)
console.log(noOneLikeJon)

// Copying an Entire Array with slice
const listOfProduct = ['milk', 'sugar', 'milo', 'orange', 'banana', 'fanta', 'coke']
console.log(listOfProduct.slice())

// Chaining with Other Array Methods with slice

 
//Concat - merge 2 or more array together 
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
const collab = arr1.concat(arr2)
console.log(collab)

// join - gives an item to join all other items together
const joinsample = [1,2,3,4,5,6]
const joinedResult = joinsample.join('-')
console.log(joinedResult)



//Array forEach (Basics)

const namees = ['jon', 'john', 'jenny' ]

//Using forloop to loop through an array and it indexed(hardway)
for(let i = 0; i < namees.lenght; i++){
    console.log(i, namees[i]);
}

//QUICK CODE EXPLANATION
//the "i" autimatically carries the power of namees
//so we can print the i directly knowingly its attached to length
//but to remove the length we need to print it like this console.log(i, namees[i])

//Using a forEach (Easy alternatives)
// namees.forEach((name, i) => {
// console.log(name, i)
// })

//Arrow function using array method(commonly used)
const logTheName = (names, i)=> console.log(i, namees[i]);
names.forEach(logTheName)

//Best practice
names.forEach((name,i)=> console.log(name, i))

//Array map()
//1
const numbersOfStudent = [1, 2, 3, 4, 5, 6]

const multiplStudent = numbersOfStudent.map(function(mS){
    return mS*mS
} )

console.log(multiplStudent)

//2
const studentName = ['jude', 'paul', 'peter']

const capStudent = studentName.map((cS)=> cS.toUpperCase)

console.log(capStudent)



//Diferent between forEach() and map()



// //From The Book
// const myArray = new Array (
//     'kola',
//     'bose',
//     'bimbo'
// )

// console.log(myArray)


// const listOfstaff = new Array(

//     'james',
//      'john',
//      'kemi'
// )

//  console.log(listOfstaff)

//  const newStudent = [
//     'shade',
//     'pedro',
//     'pablo'
//  ]

//  console.log(newStudent)


//  const favouriteFruits = ['apple', 'banana', 'banana', 'orange']
//  // Array Methods 

// // push
//  favouriteFruits.push('mango', 'pineapple', 'coco nut')

//  //pop
//  favouriteFruits.pop()

//  //shift
//  favouriteFruits.shift()

//  //unshift
//  favouriteFruits.unshift('lemon', 'grape')

//  //indexOf
//  const indexTesting = favouriteFruits.indexOf('banana')


// //slice
// const topThreeFruits = favouriteFruits.slice(0,3)
// const lastFruit = favouriteFruits.slice(-1)

// //splice
// const testSplice = favouriteFruits.splice(0,2, 'cherry', 'avocado')

// //join

// // const testJOin = favouriteFruits.join(' and ')

// // reverse()

// const testReverse = favouriteFruits.reverse()

// console.log(favouriteFruits[0])
// console.log(favouriteFruits[1])
// console.log(favouriteFruits[2])
// console.log(favouriteFruits.length)
// console.log(favouriteFruits)
// console.log(indexTesting)
// console.log(topThreeFruits)
// console.log(lastFruit)
// // console.log(testJOin)
// console.log(testReverse)


 




