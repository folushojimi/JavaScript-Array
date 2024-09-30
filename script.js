// const months =  ['January', 'Febuary', 'March', 'April','May']
// // console.log(months[0])


// //looping through an array
// for(let i = 0; i < months.length; i++) {
//     console.log(months[i])
// }

// //replace array
// months[3] = 'Not April';
// console.log(months)

// //array lenght
// console.log(months.length)


// //Things We can Have In An Array

// const bestBooks = [
//     'Science',
//     {name:'john'},
//     true,
//     () => {

//     }

// ]
// console.log(bestBooks)
// //console.log(alltype[2](10,2)) -> function in array
// //console.log(alltype[1].product) -> object in array


// const names = ['Jon', 'Bob', 'David', 'Mark'];

// //Array Push - Adds a new element containing the entered
// // value to the end of the array 

// names.push('Dean');

// //Array Pop - Deletes the last element of an array
// const removedValue = names.pop();
// // console.log(removedValue)

// //Array Shift - Deletes the first element of an array
// names.shift()

// //Array Unshift - Adds a new value to the start of an array
// names.unshift('Dean','open mouth');

// //Array Splice - its modify the existing array, 
// //by adding new value or removing existing values at 
// //at specified index position

// names.splice(2,0, 'jenny', 'johnny');
// // console.log(names);

// // Using splice to remove elements
// // const sample = ['fan', 'laptop','Tvs']
// // sample.splice(1,2, 'mouse', 'keyboard') //remove and add
// // sample.splice(1,2) //remove
// // console.log(sample)

// //Array Slice - copies certain part of an array and specified
// // by the index and creates new array with it
// const noOneLikeJon = names.slice(1)
// console.log(noOneLikeJon)

// // Copying an Entire Array with slice
// const listOfProduct = ['milk', 'sugar', 'milo', 'orange', 'banana', 'fanta', 'coke']
// console.log(listOfProduct.slice())

// // Chaining with Other Array Methods with slice

 
// //Concat - merge 2 or more array together 
// const arr1 = [1,2,3,4]
// const arr2 = [5,6,7,8]
// const collab = arr1.concat(arr2)
// console.log(collab)

// // join - gives an item to join all other items together
// const joinsample = [1,2,3,4,5,6]
// const joinedResult = joinsample.join('-')
// console.log(joinedResult)



// // HIGEHR ORDER FUNCTION IN JAVASCRIPT


// //ARRAY forEach (Basics)

// const namees = ['jon', 'john', 'jenny' ]

// //Using forloop to loop through an array and it indexed(hardway)
// for(let i = 0; i < namees.lenght; i++){
//     console.log(i, namees[i]);
// }

// //QUICK CODE EXPLANATION
// //the "i" autimatically carries the power of namees
// //so we can print the i directly knowingly its attached to length
// //but to remove the length we need to print it like this console.log(i, namees[i])

// //Using a forEach (Easy alternatives)
// // namees.forEach((name, i) => {
// // console.log(name, i)
// // })

// //Arrow function using array method(commonly used)
// const logTheName = (names, i)=> console.log(i, namees[i]);
// names.forEach(logTheName)

// //Best practice
// names.forEach((name,i)=> console.log(name, i))


// //Hosting our forEach array in a new variabele
// // Title-casingmeanscapitalizingthe
// //  firstletterofeachwordinastring

// const titleCaseName = []

// names.forEach((name)=>{
//     const tiledOP = name[0].toUpperCase + name.slice(1)
// titleCaseName.push(tiledOP)
// })



// //ARRAY map()
// //1
// const numbersOfStudent = [1, 2, 3, 4, 5, 6]

// const multiplStudent = numbersOfStudent.map(function(mS){
//     return mS*mS
// } )

// console.log(multiplStudent)

// //2
// const studentName = ['jude', 'paul', 'peter']

// const capStudent = studentName.map((cS)=> cS.toUpperCase)

// console.log(capStudent)


// //ARRAY FILTER - used to filter out elements that meets certain condition 
// const sTudent = [
//     'John',
//     'Jane',
//     'Johnson',
//     'kola',
//     'bode',
//     'bose',
//     'amaka',
//     'angel',
//     'anike'
// ]

// const studentWithJ = sTudent.filter((JStudent)=>
// JStudent.startsWith('J'))

// console.log(studentWithJ)


// //To filter for student that did not start with j - using negation (!)

// const studentwithNoJ = sTudent.filter((NoStudent)=> !NoStudent.startsWith() )

// console.log(studentwithNoJ)


// //alternative to startWith() - method is charAt()

// const studenttWithA = sTudent.filter((aStudent)=> aStudent.charAt(0) === 'a')

// console.log(studenttWithA)


// // ARRAY SORT()

// //sort() - its a method in javascript used to sort things, 
// //in order arrangement, always put sorted item in new array

// const arrangement = [0,7,2,8,5,1,3,4,6]

// const letscheck = arrangement.sort()

// console.log(letscheck)


// //sorting array of strings
// const alphabet =['z','a','o','b','c']

// const alphabetSort = alphabet.sort()

// console.log(alphabetSort)

// //sorting array in decending order 
// const yearsOfBirth = [1920, 1988, 1930, 2023, 2024]
// yearsOfBirth.sort((a,b)=> b - a)

// // custom ascending
// yearsOfBirth.sort((a,b)=> b - a)


// // ARRAY REVERSE - Used to reverse the order of elements in an array 
// //modifies the original array

// const noOfPupils = [9, 20, 17, 19, 1];
// noOfPupils.reverse();
// console.log(noOfPupils);

// //ARRAY REDUCE - itterate through array and return a signle value eithther 
// //addition, multiply, or substracting.
// //can also be used to concatenate strings in an array. 
// // reduce() - (does not modified the original array)
// noOfPupils.reduce((a, b)=> a + b)
// noOfPupils.reduce((a, b)=> a - b)
// noOfPupils.reduce((a, b)=> a * b)

// //can also be used to concatenate strings in an array. 
// const proteinFood = ['egg', 'beans', 'milk', 'soy bean']

// proteinFood.reduce((a, b)=> a + ' , ' + b )

// //ARRAY EVERY - checks if all elements in array

// const bettingClient = [20, 30, 40, 80, 25]

// const validBettingClient = bettingClient.every((validClient)=> validClient > 18 )

// console.log(validBettingClient)


// // ARRAY -  some()and includes() - it checks if at least one element 
// //element in an array meets a condition

// const localGov = [
// 'alimosho',
// 'agbado',
// 'ikeja',
// 'etiosa'
// ]

// const checkOneCity = localGov.some((city)=> city.includes("a"))
// console.log(checkOneCity)


//  //ARRAY FIND
// const quantities = [1, 100, 20, 40]

// const quantcheck = quantities.find((quantity)=> quantity > 16)

// console.log(quantcheck)


// //ARRAY FINDINDEXOF
// const newpro = [20, 30, 40, 80]

// const checkIndex = newpro.findIndex((ind)=> ind > 10)

// console.log(checkIndex)





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


// HIGHER ORDER FUNCTION EXERCISE
// 1. forEach

// Given an array of numbers, use forEach to print each number multiplied by 2.
const numBers = [10, 20, 30, 40, 50, 60]

numBers.forEach((number, i)=> console.log(number * 2))

// Use forEach to iterate over an array of names and print a welcome message for each name.

const arrNames = [
    'folusho',
    'dele',
    'diamond',
    'richard'
]


// arrNames.forEach((name)=>  console.log('welcome' + ' ' + name )) - (just for code testing)


//best practice

const welcomeName = []

arrNames.forEach((name)=> {
    const names = 'Welcome' + ' ' + name
    welcomeName.push(names)
})

console.log(welcomeName)


// Given an array of prices, use forEach to sum up the total price and print the result.

const prices = [200, 500, 700, 800]

// prices.forEach((price, i)=> console.log(price + i))
let sum = 0 

const totalPrice = []

prices.forEach((price)=> {

const total = sum +=  price   

totalPrice.push(total)
})

console.log(sum)



// 2. map
// Create an array of numbers and use map to create a new array where each number is squared.
const arrNumb = [20,30,40,50];
const squareNumb = arrNumb.map((square)=>  square * square);
console.log(squareNumb);

// Given an array of strings, use map to capitalize the first letter of each string.
const arrString = ['home', 'school', 'work', 'gym', 'music'];

const result = arrString.map((string)=> string[0].toUpperCase() + string.slice(1))

console.log(result)


// Use map to transform an array of objects representing products into an array containing only the product names.


const arrProducts = [

{
 name:'samsung',
 model:'s24',
 country:'korea' 
},

{
 name:'iphone',
 model:'16',
 country:'USA' 
},

{
 name:'huawei',
 model:'p14',
 country:'china' 
},

]

const productName = arrProducts.map((namee)=>{namee.[1].name} )

// 3. filter
// Given an array of numbers, use filter to return a new array containing only the even numbers.
// Create an array of objects representing people, and use filter to find all people older than 18.
// Use filter to return all words in an array that contain more than 5 characters.


// 4. find
// Given an array of numbers, use find to return the first number greater than 10.
// Use find to locate the first person in an array of objects who lives in a specific city.
// Given an array of strings, use find to return the first string that starts with the letter 'A'.


// 5. sort
// Given an array of numbers, use sort to sort them in ascending order.
// Use sort to arrange an array of names alphabetically.
// Given an array of product prices, use sort to arrange the products from highest to lowest price.


// 6. reduce
// Given an array of numbers, use reduce to sum all the numbers.
// Use reduce to count the occurrences of a specific word in an array of strings.
// Given an array of products with prices, use reduce to calculate the total price of all products.


// 7. reverse
// Create an array of numbers and use reverse to reverse the order of the numbers.
// Given a string, split it into an array of characters, reverse the array, and join it back to form the reversed string.
// Use reverse to reverse the order of an array of names.


// 8. every
// Given an array of numbers, use every to check if all numbers are greater than 0.
// Create an array of strings, and use every to check if all strings contain more than 3 characters.
// Use every to determine if all elements in an array of booleans are true.


// 9. some
// Given an array of numbers, use some to check if any number is greater than 100.
// Use some to check if an array of strings contains any empty strings.
// Given an array of ages, use some to check if any person is older than 65.




// 10. includes
// Given an array of numbers, use includes to check if the number 5 is present.
// Use includes to check if a specific word exists in an array of words.
// Create an array of names, and use includes to check if the name 'John' is in the list.



// 11. findIndex
// Given an array of numbers, use findIndex to find the index of the first number greater than 50.
// Use findIndex to locate the index of a specific product by name in an array of product objects.
// Given an array of strings, use findIndex to find the index of the first string that contains more than 10 characters.

