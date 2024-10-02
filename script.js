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

//ARRAY METHODS


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

numBers.forEach((number)=> console.log(number * 2))

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


let pop = []

// arrProducts.map((namee)=> namee.pop.slice(0,3) )
    

// console.log(productName)




// 3. filter
// Given an array of numbers, use filter to return a new array containing only the even numbers.
const numfilter = [5, 10, 20, 16, 17, 30, 6]

// const filteredEven = numfilter.filter((even)=> 
// //till internet)

// Create an array of objects representing people, and use filter to find all people older than 18.

const people = 
[
    {
        name:'mike',
        age:'17',
         
       },
       
       {
        name:'john',
        age:'50'
    
       },
       
       {
        name:'Emmanuel',
       age:'25'
       },
]


const greater = people.filter((plus)=>  plus.age > 18)
console.log(greater)


// Use filter to return all words in an array that contain more than 5 characters.

const checkList = ['kamaru', 'kule', 'gbenga', 'johs', 'joseph']

const more = checkList.filter((check)=> check.length > 5)

console.log(more)


// 4. find
// Given an array of numbers, use find to return the first number greater than 10.

const numbG = [3, 4, 16, 17, 20]

const greaterThanfive = numbG.find((numb)=> numb > 5)

console.log(greaterThanfive)

// Use find to locate the first person in an array of objects who lives in a specific city.

const locatiion = 

[
{
name:'john',
city:'newyork'
},

{
name:'jenny',
city:'spain'
},

{
name:'jessica',
city:'newyork'
},

{
name:'jerry',
city:'spain'
}
]

const empty = []

const findCity = locatiion.find((cit)=> {
     if( cit.city === 'newyork'){
        return cit.name
    }
})


console.log(findCity)

// console.log(locatiion)

// Given an array of strings, use find to return the first string that starts with the letter 'A'.

const availableJobs = ['array', 'strings', 'operators']

const findA = availableJobs.find((jobs)=> jobs.startsWith('a') )

console.log(findA)


// 5. sort
// Given an array of numbers, use sort to sort them in ascending order.

const mixedNumbers = [20,10,15,7,23,8]
const arrangee = mixedNumbers.sort((a,b)=> a - b)

console.log(arrangee)

// Use sort to arrange an array of names alphabetically.
const arrangedName = ['bode', 'anike', 'carlton', 'emma', ]
const sorttedNames = arrangedName.sort()
console.log(sorttedNames)

// Given an array of product prices, use sort to arrange the products from highest to lowest price.

const arrProductPtices = [500, 100, 900, 10, 0.3]

const productee = arrProductPtices.sort()
console.log(productee)


// 6. reduce
// Given an array of numbers, use reduce to sum all the numbers.
const allyNUmb = [10,100, 75, 20, 17];
const sumally = allyNUmb.reduce((a,b)=> a + b);
console.log(sumally);

// Use reduce to count the occurrences of a specific word in an array of strings.
//UNSOLVED
// const occure = ['gemini', 'weather', 'acapela', 'emmanuela'];
// const findWord = occure.reduce((a)=> a.includes('e'));
// console.log(findWord);

// Given an array of products with prices, use reduce to calculate the total price of all products.
const allproducts = [200, 100, 800, 4000];
const calcall = allproducts.reduce((a,b )=> a + b );
console.log(calcall);


// 7. reverse
// Create an array of numbers and use reverse to reverse the order of the numbers.

const rebase = [1,2,3,4,5,6,7,8,9];
const reverseOP = rebase.reverse();
console.log(reverseOP);

// Given a string, split it into an array of characters, reverse the array, and join it back to form the reversed string.
// UNSOLVED
// const arrChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// const reverseOp = arrChar.split("").reverse().join("");
// console.log(reverseOp)


// Use reverse to reverse the order of an array of names.

const allarr = ['normal', ()=>{}, {}];
const revAll = allarr.reverse();
console.log(revAll)


// 8. every
// Given an array of numbers, use every to check if all numbers are greater than 0.
const everyNumb = [10, 20, 30, 40, 50];
const everyResult = everyNumb.every((numbers)=> numbers > 0 )
console.log(everyResult)


// Create an array of strings, and use every to check if all strings contain more than 3 characters.
const everyString = ['one', 'two', 'act'];
const checkThreeStrings = everyString.every((strings)=> strings.length === 3);
console.log(checkThreeStrings)

// Use every to determine if all elements in an array of booleans are true.
// UNSOLVED - STRANGE
const arrBol = [10 === 10, 20 > 10, 1 < 5]
const checkBol = arrBol.every((bool)=>  bool === true);
console.log(checkBol)



// 9. some - LEARN 
// Given an array of numbers, use some to check if any number is greater than 100.
 const smNumb = [100, 50, 60, 200];
 const checkSum = smNumb.some((sm)=> sm > 100 );
console.log(checkSum)

// Use some to check if an array of strings contains any empty strings.
// Given an array of ages, use some to check if any person is older than 65.




// 10. includes - LEARN 
// Given an array of numbers, use includes to check if the number 5 is present.
// Use includes to check if a specific word exists in an array of words.
// Create an array of names, and use includes to check if the name 'John' is in the list.



// 11. findIndex
// Given an array of numbers, use findIndex to find the index of the first number greater than 50.

const indNumb = [10,40, 80, 80, 50];
const checkInd = indNumb.findIndex((ind)=> ind > 50);
console.log(checkInd)

// Use findIndex to locate the index of a specific product by name in an array of product objects.

const indOfProduct = 
[
{name:'pepsi'},
{name:'dell'},
{name:'panasonic'},
{name:'samsung'}
];
const prodByName = indOfProduct.findIndex((spec)=> spec );
console.log(prodByName)

// Given an array of strings, use findIndex to find the index of the first string that contains more than 10 characters.

const indOfString = ['string', 'computer', 'mathmatics'];
const findInd = indOfString.findIndex((ids)=> ids.length > 9);
console.log(findInd);



// REAL LIFE PROBLEM SOLVING
// FINAL WORK + PROJECT
// Here are 10 practice questions combining array methods and higher-order functions that reflect real-life problem-solving scenarios:
// 1. Inventory Management (push, pop, map, filter, find)
// You are managing a store inventory. Given an array of products, perform the following tasks:
// Add a new product to the end of the list using push.
// Remove the last product when it's out of stock using pop.
// Use map to increase the price of all products by 10%.
// Use filter to create a list of products that are in stock (inStock: true).
// Use find to locate the first product that costs more than $500.


// 2. Customer Data Analysis (sort, reduce, filter)
// You have an array of customer orders with total amounts. Perform these operations:
// Use sort to arrange the orders in descending order based on the total amount.
// Use reduce to calculate the total revenue generated by all orders combined.
// Use filter to get a list of orders that are above $1000.

// 3. Event Planning (unshift, shift, forEach, reverse, findIndex)
// For an event guest list, perform the following:
// Use unshift to add a guest to the beginning of the guest list.
// Use shift to remove the first guest after they check in.
// Use forEach to print a welcome message for each guest on the list.
// Use reverse to reverse the order of the guest list.
// Use findIndex to find the position of a specific guest by their name.

// 4. Social Media Posts (concat, map, filter, some, every)
// You are working with social media posts data. Perform these tasks:
// Use concat to combine two arrays of posts from different platforms.
// Use map to generate a list of post titles.
// Use filter to find posts that contain more than 100 likes.
// Use some to check if there is any post with over 1000 likes.
// Use every to check if all posts have a date property.

// 5. E-commerce Cart Management (includes, reduce, filter, slice)
// In an e-commerce website, you're managing a user's cart. Complete the following:
// Use includes to check if a specific product is already in the cart.
// Use reduce to calculate the total cost of all items in the cart.
// Use filter to find items that are eligible for free shipping (price > $50).
// Use slice to remove the first two items from the cart, as a user decided not to purchase them.

// 6. Task Scheduling (unshift, sort, find, findIndex)
// You are working with a task management system. Perform these operations:
// Use unshift to add a new task at the top of the task list.
// Use sort to prioritize tasks based on deadlines (earliest deadline first).
// Use find to locate the first task that has a priority level of "high."
// Use findIndex to find the position of a specific task by its title.

// 7. Library Book Management (concat, filter, map, findIndex)
// You are managing a digital library system. Complete these tasks:
// Use concat to merge two arrays of books from different categories (e.g., Fiction and Non-Fiction).
// Use filter to create a list of all books published after the year 2000.
// Use map to create a new array that contains only the titles of the books.
// Use findIndex to locate the index of a specific book by its ISBN.

// 8. Movie Recommendations (sort, reduce, filter, includes, some)
// You are building a movie recommendation system. Perform the following:
// Use sort to arrange movies by their rating, from highest to lowest.
// Use reduce to calculate the average rating of all movies.
// Use filter to find all movies from a specific genre, such as "Action."
// Use includes to check if a particular movie is in the user’s favorites list.
// Use some to check if there’s at least one movie that has a rating higher than 9.

// 9. Budget Planning (reduce, map, filter, slice)
// You are working on a monthly budget tool. Perform these tasks:
// Use reduce to calculate the total expenses from an array of spending categories.
// Use map to increase the budget of each category by 10% for next month.
// Use filter to list categories where the spending exceeded the initial budget.
// Use slice to return only the first 3 categories from the array, which represent top-priority expenses.


// 10. Online Shopping (push, sort, reduce, some, filter, join)
// You are developing features for an online shopping platform. Complete these tasks:
// Use push to add a new product to a shopping cart.
// Use sort to arrange the cart items by price in ascending order.
// Use reduce to calculate the total price of the cart items.
// Use some to check if any item in the cart costs more than $500.
// Use join to generate a string of all product names in the cart, separated by commas.





//DESTRUCTURING ARRAY

const confAttendee = [
    'Emmanuel',
    'Leke',
    'Paul',
    'Janet'
]

const [
    firstAttendee,
    secondAttendee,
    thirdAttendee,
    fourthAttendee,
] = confAttendee


console.log(firstAttendee)
console.log(secondAttendee)


//Destructuring only 
//the elements we need 

{
    const [firstAttendee,  ,thirdAttendee] = confAttendee
    console.log(firstAttendee)
    console.log(thirdAttendee)

}


// LIST OF DESTRUCTURING BASIC CHALLENGE QUESTIONS
// 1. Extract First Two Elements
// Given an array [100, 200, 300], use array destructuring to extract the first two 
// elements into separate variables first and second.

const extractFirst = [
    100,
    200,
    300,
]

const [ex1, ex2] = extractFirst

console.log(ex1)
console.log(ex2)




// 2. Skip Elements While Destructuring
// Given an array [10, 20, 30, 40], use array destructuring to skip the first element and 
// extract the second and fourth elements into second and fourth.

const skip = [
    10,
    20,
    30,
    40,
];
const [ , s2,  , s4] = skip;
console.log(s2);
console.log(s4);

// 3. Destructure with Default Values
// Given an array [5], use array destructuring to extract the first value into a variable x and 
// assign a default value of 10 to the second variable y if it doesn't exist.





// 4. Destructure Nested Arrays
// Given a nested array [1, [2, 3], 4], use array destructuring to extract the first element, the 
// second element (which is an array), and the third element into separate variables a, b, and c.

const nestedArray = [
    1,
    [2,3],
    4
];

const [n1, n2, n3] = nestedArray;

const a = n1;
const b = n2;
const c = n3;

console.log(a,b,c)

// 5. Swap Two Variables
// Given two variables a = 50 and b = 100, use array destructuring to swap the values of a and b.
{
let a = 50;
let b = 100;

// creating a headless destructure

[a , b] = [b, a];

console.log(a);
console.log(b);



};


// LIST OF DESTRUCTURING ADVANCE CHALLENGE QUESTIONS

//1. Splitting and Assigning Top Scores
//You have an array of top scores 
//from a gaming leaderboard:[230, 180, 170, 150, 140]. Use array destructuring 
//to assign the first two scores to firstPlace and secondPlace variables, and 
//store the rest of the scores in a remainingScores array.

// 2. Extracting Key Flight Information
// An airline API returns flight details as an array: ['Flight 101', 'New York', 'Los Angeles', 'On Time']. 
// Use array destructuring to extract and assign the flight number, departure city, and arrival city to 
// individual variables, while ignoring the flight status.

// 3. Parsing Shopping Cart Items
// A shopping cart contains items with their name, quantity, and price stored in an array: ['Laptop', 1, 1200].
//  Use array destructuring to extract the name of the item and its price into separate variables, while ignoring the quantity.

// 4. Returning Multiple Values from a Survey Response
// A survey result returns an array with responses for [satisfactionLevel, improvementSuggestions, contactMethod], where contactMethod
//  is optional. Use array destructuring to assign the first two values to variables, and assign 'Not provided' as the default value 
//  for contactMethod if it's missing.

// 5. Handling Date Information
// A function returns a date as an array [year, month, day], but sometimes the day is omitted. Use array destructuring to extract the year and
//  month, and assign a default value of 1 to the day if it’s not provided.