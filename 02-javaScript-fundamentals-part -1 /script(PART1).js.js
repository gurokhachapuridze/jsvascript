

/* Values and Variables

console.log('asignment');

let firstName = 'gurami';
console.log(firstName)

let country = 'georgia';
let continent = 'europe';
let population = 'milion';

console.log(country);
console.log(continent);
console.log(population);

true
 console.log(true)
 */

/////////////////////////
/*  data types 

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

//////////////////////////////
/* let, const and var

const language="georgian";

const birthAge=1997;


let age =23
age=24;
console.log(age)
console.log(birthAge)
*/

////////////////////////////
/* basic operators


let population = 30

console.log(population / 2);
console.log(population+1 )

let finPopulation = 60;
console.log(finPopulation > population);

let otherPopulation = 33
console.log(otherPopulation > population)

let country = 'Georgia';
let continent = 'Europe';
let population1 = '1 milion';
let language = "Georgian";

let description = country + " is in " + continent + " and its " + population1 + " people speak " + language;
console.log(description);

const firtstName = "gurami";
const lastName = "khachapuridze";

console.log(firtstName,lastName)

const nowAday = 2022;
const myAge = nowAday - 1997;
const gioAge = nowAday - 1999;

console.log (myAge, gioAge);
console.log (myAge*2,gioAge%2,myAge/2,gioAge);
*/


////////////////////////// 
/*Coding Challenge #1

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
  and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.



let markWeight = 78;
let markHeight = 1.69;

let BMI = markWeight / markHeight ** 2;
console.log(BMI)
let markBMI = BMI

let johnWeight = 92;
let johnheight = 1.95;

let BMI2 = johnWeight / johnheight ** 2;
console.log(BMI2);
let johnBMI = BMI2;
console.log (markBMI > johnBMI);
*/

////////////////////////////////////
/*Strings and Template Literals

console.log (`hi + ${johnWeight} ';
i
am
gurami`)
*/


//////////////////////////////////
/* if else statement;  asignment and chalenge #2

let birthyears = 1997;

if (birthyears < 2000){
    console.log(20)
}else{
    console.log(21)
}

let birthyears = 2997;
let centuryy
if (birthyears < 2000){
     centuryy =20
  
}else{
    centuryy =21
     
}
console.log(centuryy);



let population1 = 32; 
let country1 = "Georgia"
if (population1>33){
  console.log (`${country1}'s population is hight.`)
}else {
  console.log( `${country1}'s population is ${population1 - 1} `)
}


let markWeight = 78;
let markHeight = 1.69;

let BMI = markWeight / markHeight ** 2;
console.log(BMI)
let markBMI = BMI

let johnWeight = 92;
let johnheight = 1.95;

let BMI2 = johnWeight / johnheight ** 2;
console.log(BMI2);
let johnBMI = BMI2;

if(markBMI<johnBMI){
  console.log("John's BMI is higher than Mark's!")
}else{
  console.log("Mark's BMI is higher than John's!")
}

if(markBMI>johnBMI){
  console.log(`Mark's BMI${BMI} is higher than John's BMI ${BMI2}`)
}
*/


////////////////////////////////
/*Type Conversion and Coercion

console.log('4'-"1" + 3 -"2"); //-> 4
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('58' < "59"); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/


//////////////////////////
/*Equality Operators: == vs. ===

let  numNeighbours = Number (prompt ('How many neighbour countries does your country have?'));

if(numNeighbours ==="1"){
  console.log('Only 1 border!')
}else{
  console.log('More than 1 border');
}if(numNeighbours==0){
  console.log('No borders');
}
*/


/////////////////////////
/* Coding Challenge #3 and  Logical Operators


let dolpinsAvarage = (88+91+110)/3;
console.log(dolpinsAvarage);

let KoalasAvarage = (88+91+1)/3;
console.log(KoalasAvarage);

console.log(dolpinsAvarage > KoalasAvarage);

if (dolpinsAvarage > KoalasAvarage) 
  console.log("winner is Dolpin team")
else if(dolpinsAvarage < KoalasAvarage)
  console.log("winner is Koala team")
else if(dolpinsAvarage == KoalasAvarage) 
  console.log("match is draw")


let speaks= "georgian"
let people = 3
let isIsnalnd = "no"

let speaks1= "english"
let people1 = 50
let isIsnalnd1 = "no"

if (!speaks==!speaks1 && !people==!people1 && isIsnalnd==isIsnalnd1){
  console.log ("you should live in gerogia")
}else{
  console.log("you shoud not live🐣")
}
*/


///////////////////////////
/*  The switch Statement


let language = 'chinese';

switch (language) {
  case "chinese":
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'english':
    console.log ('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
    break;
}
*/


//////////////////////////////////////
/*The Conditional (Ternary) Operator


const popul = 33;

popul >= 33 ? ' population is above average': 
' population is belov average';

console.log(`Georgia's ${popul >= 33 ? ' population is above average': 
' population is belov average'}`)
*/


let tip = 40;
let answer =  tip >= 50 && tip <= 300 ? 0.15 : 20/100;
console.log(answer); 

let payMoney = tip * answer;
console.log(payMoney);

let totalMoney =payMoney + tip
console.log(totalMoney);

console.log(`the bill was ${tip} the tip was ${payMoney} and the total value ${totalMoney}`)









