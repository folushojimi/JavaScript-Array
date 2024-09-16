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


 




