const myName = 'David'
console.log (myName)

let myAge = 20
console.log (myAge);

const country = 'Nigeria'
console.log (country);

let maritalStatus = 'single' 
console.log (maritalStatus) ;

let kids = 0 
console.log (kids);

let degree = 'OND'
console.log (degree)

let whereILive =  'somewhere'

console.log (whereILive);

let myHobbies = 'working out, playing basketball, playing football'

console.log (myHobbies);

const myPhonemodelN = 4356273n 
console.log (myPhonemodelN)

console.log (typeof(myPhonemodelN))

let davidHaveKids = false 
console.log (davidHaveKids);

 const davidBlessed =  true
 console.log (davidBlessed);

  let howManyStudent = null 


  console.log (howManyStudent)
    
  howManyStudent = 30 

  console.log (howManyStudent)

  let howManPhone;

  console.log (howManPhone)


  const homeAppliances = {
    Aircondition:  'OX fan',
    Bedsize:  '3by6, mouka foam',
    Phones: 5,
    Walldrope: 'big size',
    Chargers: 4,
    Soundbar: '18watt',
    Windowblind: 1,
    Bedspread: 3,
    cutton: 6,
    bucket:2,
    isEverythinthere: true

  }

  console.log (homeAppliances)

  console.log (homeAppliances .Bedsize);
  console.log (homeAppliances ['Phones'])

  console.log (homeAppliances .isEverythinthere)

  console.log (typeof(isEverythinthere));

  let waterCold = true
  if (waterCold) {
    console.log('Buy me 3 sachet water')
  }

let sheComing = true
if (sheComing) {
  console.log('Wait for her to cook the food');
  
}
 
let isEletricitity = true
if (isEletricitity) {
  console.log('Plug the fridge, and blend the pepper with a blender.');
  
}

let age = 15
if (age<=15) {
  console.log ('Sorry, You are not allow here.')
}

let userAge = 56
if (userAge>=18) {
  console.log ('You are very welcome.')
}

let studentAge = 13
if (studentAge==13) {
  console.log('You are promoted to next the class..')
}

let studentAgee = 13
if (studentAgee!=13) {
  console.log('You are promoted to next the class.')
} else { 
  console.log ('You are to write an Exam')
}

let score = 50;

if (score>60) {
  console.log ('You are passed.')
} else {
  console.log ( 'You better see me in the office because you are a genius.')
}


let whiteShirt = true 
let hasBlueTie = true
if (whiteShirt && hasBlueTie) {
  console.log ('You are qualified to enter')
} else {
  console.log ('Change your dress')
}




// Array

const gymEquipment = [`Dumbells`, `WeightP`, `Treadmill`,`Ironbar`, `Kettlebell`, 3,5,7, true, 546464667n, `Bench`]

const totalEquipment = gymEquipment.length
console.log(totalEquipment)

console.log(gymEquipment[3])

console.log (typeof(gymEquipment))

const fouthEquipment = gymEquipment[4] 
console.log (fouthEquipment)

const lastQuipment = gymEquipment[gymEquipment.length - 1]
console.log(lastQuipment)




const gettingBigint = gymEquipment
[gymEquipment.length - 2]
console.log (gettingBigint)

const students = [`Amina`,`John`, `Sarah`, `Mike`]

console.log (`welcome ${students[0]}`)
console.log(`welcome ${students[1]}`)
console.log (`welcome ${students[2]}`)
console.log(`welcome ${students[3]}`)




const products = [`Laptop`, `Phone`, `Mouse`]

console.log (`Product1:${products[0]}`)
console.log(`Product:${products[1]}`)
console.log (`Product3:${products[2]}`)

const fruits = [`Apple`,`Banana`,`Orange`]

const secondFruits= fruits[1]
console.log(secondFruits)

const color = [`Red`, `Blue`, `Green`, `Yellow`] 

const gettinLastColor = color [color.length -1]
console.log(gettinLastColor)

const countries = [ `Nigeria`, `Ghana`, `Mali`]

const firstcountry = countries[0]
console.log (firstcountry)

const animals = [`Dog`, `Cat`,  `Lion`, `Tiger`]

 const lastAnimal=animals [animals.length-1]
 console.log (lastAnimal)

 const fruits2 = [`Apple`,`Banana`, `Orange`]
 fruits2[1] = `Mango`
 console.log(fruits2);     





//  const greatnessName = [`King David`, `Davo`, `Adewale`]
//  greatnessName[2] = `God is with me`
//  console.log(greatnessName)

//  greatnessName.push (`Adewale` ,`God's Plan`,`Blessed`) 
//  console.log(greatnessName); 

const scores =[50,70,90]
scores[1] =  100
console.log(scores)
 
const randomNames = [`John`, `Mary`, `Peter`]

randomNames[2] = `Ayo`

console.log(randomNames);

const secStudents = [`John`,`Sarah`,`Mike`, `Peace`]

const totalofstudent = secStudents.length
console.log (totalofstudent)




const numbers = [10,20,30,40,50]

const totalnumbers = numbers.length
console.log(totalnumbers)

//Operators
//=asign value

const isNumberG = 10 > 20 
console.log (isNumberG)


//Assignment on string method

//1
const nnname = `Amina`
console.log (nnname.length)
//2
const countryyy = `Nigeria`

console.log(`${countryyy} has a 7 charaters`)

console.log (countryyy.toUpperCase())
console.log (countryyy.toLowerCase())

//3
const city = `lagos`
console.log (city.toUpperCase())

//4

const language = `JAVASCRIPT`
console.log (language.toUpperCase())

//5

const mentor = `AyOdEv`
console.log (mentor.toLowerCase())

//6 trim()

const username = ` John `
console.log(username.trim())
//7
const email = `  ayo@gmail.com  `;
console.log (email.trim().length)
//8
const sentence = `I Love JavaScript`

console.log(sentence.includes(`JavaScript`))
//9
const sentence2 = `Frontend Development`

console.log (sentence2.includes(`Backend`))
//10

const email2 = `ayo@gmail.com`
console.log (email2.includes(`@`))
//11
const website = `https://google.com`
const checkWith = website.startsWith(`https`)
console.log (checkWith)

//12
const file = `photo.jpg`
const withT = file.endsWith(`jpg`)
console.log(withT)


//13
const email3 = `user@gmail.com`
console.log(email3.endsWith(`.com`))

//14
const sentence3 = `  I like Cats`
 console.log(sentence3.replace(`Cats`, `Dogs`).trimStart());

 //15 
 const message =  `Welcome User`
 const user1 = message.replace(`User`, `Amina`)
 console.log(user1)
  
 //16 
 const word = `JavaScript`
 const sliceWord = word.slice(0,4)
 console.log(sliceWord)
//17
const word2 = `Frontend`
console.log(word2.slice(0,5))
//18
const phoneNum = `08012345678`
console.log (phoneNum.slice(7,11))
//19
const nameA = `Amina`
console.log(nameA.charAt(0))
//20
const country1 = `Nigeria`
console.log (country1.charAt(2))
//21
const username2 = `  AyoDev   `
console.log (username2.trim().toLowerCase())
//22
const emailC = `Student@gmail.com`
console.log(emailC.includes(`@`))
console.log(emailC.endsWith(`.com`))
//23
const productCode =  `Laptop-2025`
console.log (productCode.slice(0,6))
//24
const password = `mypassword123`
console.log(password.includes(`123`))
//25
const nameB = `John`
console.log(`Welcome ${nameB}`)

const idk = `For the very first time,`
console.log (idk.repeat(5))

const slipText = `Learning JavaScript is actually interesting`
console.log(slipText.split(` `))
 
const phoneBrand = [`iPhone`, `Samsung`,`Tecno`]
console.log(phoneBrand)
console.log(phoneBrand.toString())
console.log (phoneBrand.at([0]))
phoneBrand.pop()
console.log(phoneBrand);
phoneBrand.push(`Infinix`)
console.log(phoneBrand);
phoneBrand.shift()
console.log(phoneBrand);
phoneBrand.unshift(`Nokia`)
console.log(phoneBrand);

let thiss  =  slipText.concat(phoneBrand)
console.log(thiss)


 let cars = [`Benz`, `BMW`, `Toyota`, `suzuki`, `Lexus`, `Kia`]
 console.log(cars)


// To remove
// start at index 1 and remove one
cars.splice(2,1)
console.log(cars)

// To add
//Start at index 1
//Remove 0 items
//Add Mazda
cars.splice(1,0,`Mazda`)
console.log(cars)

//TO replace
//Start at index 1
//Remove suzuki
//Insert  pigeout

cars.splice(3,1, `Pigeout`)
console.log(cars)
//ASSIGNMENT ON ARRAY

const fruitsA = [`Apple`, `Banana`]
fruitsA.push(`Orange`, `Mango`)
console.log(fruitsA)

const colors =  [`Red`, `Blue`, `Green`]
colors.pop()
console.log(colors)

const countriesA = [`Kenya`,`Ghana`,`Nigeria`]
countriesA.shift()
console.log(countriesA)

const numbersA = [20,30,40]
numbersA.unshift(10)
console.log(numbersA)

const studentA = [`John`,`Sarah`,`Mike`]
console.log(studentA)
console.log(studentA.includes(`Sarah`))
console.log(studentA.includes(`David`))

const foodsA = [`Rice`,`Beans`,`Yam`, `Bread`]
console.log(foodsA)
console.log(foodsA.indexOf(`Yam`))
console.log(foodsA.indexOf(`Bread`))
//slice
const fruitsAA = [`Apple`, `Banana`,`Orange`, `Mango`]
console.log(fruitsAA.slice(1,3))
//splice 
const fruitsAAA = [`Apple`,`Banana`,`Orange`]
console.log(fruitsAAA)
fruitsAAA.splice(1,1, `Mango`)
console.log(fruitsAAA)

const namesA = [`Amina`, `Tunde`, `Chidi`]
namesA.forEach((name)=> console.log( `Welcome `+ name))

const numberss = [1,2,3,4,5]

numberss.map((num)=> console.log(num *2))

const studentss = [
  {name: `Amina`},
  {name: `Tunde`},
  {name: `Chidi`}
]

const getName = studentss.map((name)=> name.name)
console.log(getName)
//

const scoresS = [30,80,45,90,60]
 
const NumAbove = scoresS.filter((score)=> score >= 50)
console.log(NumAbove);

const studentsData = [
  {name: `Amina`, score: 45},
  {name:`Tunde`, score:82},
  {name:`Chidi`, score:60}
]

const passedS = studentsData.filter((score)=> score.score >= 50)
console.log(passedS)

const users = [
  {id:1, name:`John`},
  {id:2, name:`Sarah`},
  {id:3, name: `Mike`}
]

const findId = users.find((look)=> look.id===2)
console.log(findId)

users.find((named)=> console.log(named.name==`chidi`))

const randomNum = [20,50,70,34,63,47,74]
const total = randomNum.reduce((d,a)=> d+a)
console.log(total)

let phoneA = [20, 50,70,66,45,34,25]
phoneA.sort((a,b)=> a-b)
console.log(phoneA);

console.log(phoneA.reverse())

//ASSIGNMENT ON ALL

const checkNum = 7
if (checkNum %2===0) {
console.log(`Even`)
} else {
  console.log(`Odd`)
}

const numbs = -1

if (numbs > 0) {
  console.log(`Positive`)
} else if (numbs < 0) {
  console.log(`Negative`)
} else {
  console.log(`Zero`)
}

const votingAge = 18

if (votingAge >=18) {
  console.log(`You are eligible to vote`)
} else {
  console.log(`You are a minor`)
}

const checkPass  = 1234

if (checkPass === 1234 ) {
  console.log(`Access granted`)
} else{
  console.log(`Access denied`)
}

const temperature = 0

if(temperature >= 30) {
  console.log(`Hot`)
} else if (temperature <=15) {
  console.log(`Cold`)
} else{
  console.log(`Normal`)
}

const num1 = 600
const num2 = 400

if (num1 > num2) {
  console.log(`Largest`)
} else{
  console.log(`Lesser`)
}

 // 70+ A
//60-69 B
//50- C
//BELOW 50 F

// const scorez = prompt(`check your result`)

// if(scorez >= 70 && scorez <101) {
//   console.log(`A1`)
// } 
// else if (scorez > 59 && scorez < 70) { 
//   console.log(`B2`) 
// }else if( scorez > 49 && scorez <51) {
// console.log(`C4`)
// }else{
//   console.log(`Come to the deparment for questioning`)
// }

const leap = 366

if (leap %2===0) {
  console.log(`Leap Year`)
} else {
  console.log(`Normal Year`)
}

const username1 = `Davo1`

if(username1.length < 5) {
  console.log(`Too Short`)
}else {
  console.log(`valid`)
}
const usernameA = `admin`
const passworrd = `1234`

if(usernameA===`admin` && passworrd=== `1234`) {
console.log(`Login Successful`)
}else {
  console.log(`invalid credentials`)
}

const balance = `$20000`

if(balance<= `$20000`) {
  console.log(`Allow Withdraw`)
}else{
  console.log(`Insufficient Funds`)
}

// const discount = prompt(`Discount Sale`)
// if(discount > 10000 ){
//   console.log(`10% discount`)
// } else if (discount >= 5000 && discount < 9999){
//   console.log(`5% discount`)
// } else {
//   console.log(`No discount`)
// }

const checkNumRange = 40
if(checkNumRange >=10 && checkNumRange <=50){
  console.log(`The number is between 10 and 50`)
}else{
  console.log(`The number is not between 10 and 50`);
  
}

// const traficLight = prompt(`Light system`)

// if(traficLight===`Red`){
//   console.log(`Stop`)
// } else if (traficLight===`Yellow`){
//   console.log(`Ready`)
// } if (traficLight===`Green`){
//   console.log(`Go`)
// }

// const remaining

//ASSIGNMENT ON LOOPS

const printNum = 10
for(i=1;i<=10;i++){
console.log(i)
}
const printNum2 = 10
for(i=10;i>=1;i--){
console.log(i);

}
const printEven = 20
for(i=0;i<=20;i++){
 if (i %2===0)
  console.log(i)
}

const printOdd = 20
for(i=1;i<=20;i++){
  if(i %2!==0)
    console.log(i)
}

let calculateSum = 0
for(i=1;i<=10;i++){
  calculateSum += i
  console.log(calculateSum)
} 

let multiplyTable = 5
for(i=1;i<=12;i++){
console.log(`${5} * ${i} = ${5* i}`
)
}

let findNum = 3
for(i=1;i<=30;i++) {
if (i %3===0)
  console.log(i)
}

let loopText =`Javascript is fun`
let vowels = 0
for(i=0;i < loopText.length;i++){
  if("aeiou".includes(loopText[i].toLowerCase()) ){
   vowels++;
  }
 
}
 console.log(vowels)

 
const reverseName =`ayo`
let reversed = ''
for(i=reverseName.length -1;i>=0;i--){
 reversed += reverseName[i]
  console.log(reversed)

}

const build =   `*`
for(i=1;i<=6;i++){
console.log(i)
}

// FUNCTIONS ASSIGNMENT

function PrintLog(p){
console.log(p)
}

function Greet(){
  console.log(`Hello World`)
}
Greet()

function myNamee(){
  console.log(`David`)
}
myNamee()

function Goal(){
  PrintLog(`I will master Javascript.`)
}

Goal()

function printNumber(){
  for(i=1;i<=5;i++){
console.log(i);

  }
}
printNumber()
//6
function star(){
  PrintLog(`***`)
}
star()
// LEVEL 2, FUNCTION WITH PARAMETER
function greetPerson(name){
PrintLog(`Hello ${name}`)
}
greetPerson(`Ayo`)

function addThis(a,b){
return a+b
}
PrintLog(addThis(20,10))

function multiply(a,b){
  return a*b
}
PrintLog(multiply(5,4))

function studentName(name){
  PrintLog(`Amina`)
}
studentName()

function NextYearAge(x){
return x +1
}
PrintLog(NextYearAge(25))

function returnSum (a,b){
return a+b
}
PrintLog(returnSum(4,6))

function getFullName(firstname, secondname){
return `${firstname} ${secondname}`

}
PrintLog(getFullName(`David`,`Ade`))

function double(a){
return a*2
}
PrintLog(double(8))

function passed(score){
if (score>=50) {
  return `Passed`
} else {
  return `Failed`
}
}
PrintLog(passed(50))
PrintLog(passed(70))
PrintLog(passed(30))

function iseven(nume){
 return nume %2===0
}
PrintLog(iseven(4))
PrintLog(iseven(5))

function studentReport(name,score){
return `${name} ${score}`
}
PrintLog(studentReport(`Tunde Scored`,`85 Point`))

function calculateTotal(price,quantity){
return price*quantity
}
PrintLog(calculateTotal(500,3))

//18 
function turnMinuteToSec(min){
 return min*1
}
PrintLog(turnMinuteToSec(60))

//19
function findLarger(a,b){
if (a>b) {
  return a
} else {
  return b
}
}

PrintLog(findLarger(10,25))

//20
function createUser(firstnam) {
  PrintLog(`${firstnam}123`)
}

createUser(`ayo`)


