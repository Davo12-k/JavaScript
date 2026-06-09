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

 
 
 
 
 