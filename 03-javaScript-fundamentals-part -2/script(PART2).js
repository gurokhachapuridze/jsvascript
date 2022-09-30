'use strict';

////////////////////////
/*functions

function describeCountry ( country, population, capitalCity ){
  const answerIs = `${country} has ${population} million people and its
  capital city is ${capitalCity} `
  return answerIs;
}

const result = describeCountry ("georgia" ,4,"tbilisi");
console.log(result);
const result1 = describeCountry ("german" ,20,"berlinii");
console.log(result1);
const result2 = describeCountry ("france" ,40,"paris");
console.log(result2);
*/

//////////////////////////////////////////
/*  FUNCTION Declarations vs. Expressions


const worldPopulation = 7900;

// Declaration
function percentageOfWorld1 (population){
return population / worldPopulation * 100;
}
let result  = percentageOfWorld1(200)
let result4 = percentageOfWorld1(300)
let result5 = percentageOfWorld1(400)
console.log(result, result4, result5);

let percentageOfWorld2 = function  (population){
  return population / worldPopulation * 100;
  }
let result01 = percentageOfWorld2(200);
let result02 = percentageOfWorld2(300);
let result03 = percentageOfWorld2(300);
console.log(percentageOfWorld2(300));


///////////////////////
ARROW FUNCTION

let percentageOfWorld3 = population => population / worldPopulation * 100;
let perGeorgia = percentageOfWorld3(200);
console.log(perGeorgia);
*/

// let percentageOfWorld1 = function (percentage){
//   return percentage/7900*100;
// }

// let describePopulation = function (country, population){
//   let percentageResult = percentageOfWorld1(population);

//   let description= `${country} has ${population} million people,
//   which is about ${percentage } of the world.`
//   console.log(description);
// }
// describePopulation('China', 1441);

/////////////////////////////////////
/* FUNCTIONS IN FUNCTIONS

let percentageOfWorld1 = function (population){
  return population/2*100;}
  
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million
  people, which is about ${percentage}% of the world.`;
  
  
  };
  console.log(describePopulation('Portugal', 10));
  describePopulation('China', 1441);
  describePopulation('USA', 332);
  */

////////////////////////////////
/* coding chalange #1 Part 2


  const calcAverage = (a,b,c) => (a+b+c)/3;
  let scoreDolhins = calcAverage (44,23,71);
  let scoreKoalas  = calcAverage (65,54,49);

  console.log(scoreDolhins,scoreKoalas);

  let checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= avgKoalas*2 ) {
      console.log(`winner is dolphins ${avgDolphins} vs ${avgKoalas}🚀`);
    } else if (avgKoalas >= avgDolphins*2) {
      console.log(`winner is koalas ${avgKoalas} vs ${avgDolphins}🦾`);
    }else{
      console.log(`no team wins!`)
    }
  }
  
  checkWinner(scoreDolhins,scoreKoalas);
  
  
  let scoreDolhins2 = calcAverage (85, 54,41);
  let scoreKoalas2  = calcAverage (23,34,27);
  console.log(scoreDolhins2,scoreKoalas2);
  checkWinner(scoreDolhins2,scoreKoalas2);
*/

////////////////////////////
/* Introduction to Arrays

let percentageOfWorld1 = function (population){
  return population/2*100;}

let populations = [10, 20, 30, 40];
console.log(populations == 4);

let ab1 = percentageOfWorld1 (populations[0]);
let ab2 = percentageOfWorld1 (populations[1]);
let ab3 = percentageOfWorld1 (populations[2]);
let ab4 =  percentageOfWorld1 (populations[3]);
console.log(ab1,ab2,ab3,ab4);

let percentages = [
  percentageOfWorld1 (populations[0]),
  percentageOfWorld1 (populations[1]),
  percentageOfWorld1 (populations[2]),
  percentageOfWorld1 (populations[3])
]
console.log(percentages)
*/

/////////////////////////////////
/* Basic Array Operations (Methods)

let neighbours = ["USA", "Turkey", 'Canada'];
console.log(neighbours);

neighbours.push("utopia");
console.log(neighbours);
let pushed =neighbours.push("Avstria");
console.log(neighbours);

console.log(pushed);
console.log(neighbours.length);

neighbours.pop();
neighbours.pop();

console.log(neighbours)
let poped = neighbours.pop();
console.log(poped)
console.log(neighbours);

let news = neighbours.unshift('tbilisi')
console.log(neighbours);
console.log(news);

let news2 = neighbours.shift()
console.log(neighbours);
console.log(news2);


if (!neighbours.includes('Germany')){
  console.log('Probably not a central European country :D')
}

neighbours[1]='France';
console.log(neighbours);
console.log(neighbours.length)

neighbours.unshift('gori')
console.log(neighbours)

console.log(neighbours.indexOf('France'));
neighbours[neighbours.indexOf('gori')]= 'ხაშური'
console.log(neighbours);
*/

//////////////////////////////
/* Coding Challenge #2 part 2

let calcTip = function(bill){
  return bill >=50 && bill <=300 ? bill * 0.15 : 
  bill * 0.2;
}

let bills = [125, 555, 44];
console.log(bills);

let tips =[
  calcTip (bills [0]),
  calcTip (bills [1]),
  calcTip (bills [2])
]

console.log(tips);

let total =[
  calcTip (bills [0]) + bills [0],
  calcTip (bills [1]) + bills [1],
  calcTip (bills [2]) + bills [2]
]
 console.log(total);
*/

//////////////////////////
/* Introduction to Objects

let myCountry= {
  country: 'Georgia',
  capital: 'Tbilisi',
  language: 'Qartuli',
  population: '4',
  neighbours: ['usa', 'canada', 'turkey']
}
console.log(myCountry)
  
  myCountry.location = 'europe';

console.log(myCountry)
*/

///////////////////////////////
/* Dot vs. Bracket Notation

let myCountry= {
  country: 'Georgia',
  capital: 'Tbilisi',
  language: 'Qartuli',
  population: 4,
  neighbours: ['usa', 'canada', 'turkey']
}
console.log(`${myCountry.country} has ${myCountry.population} million 
${myCountry.language}- speaking people
${myCountry.neighbours.length} 
neighbouring countries and s capital called ${myCountry.capital}.`)

myCountry.population+2

myCountry.population -= 2;
console.log(myCountry.population);
myCountry['population'] += 2;
console.log(myCountry.population);
*/

////////////////////////////////////
/*Object Methods

let myCountry= {
  country: 'Georgia',
  capital: 'Tbilisi',
  language: 'Qartuli',
  population: '4',
  neighbours: ['usa', 'canada', 'turkey'],
  
  describe: function(){
    return (`${this.country} has ${this.population} million 
    ${this.language}- speaking people
    ${this.neighbours.length} 
    neighbouring countries and s capital called ${this.capital}.`)
    },
  
  checkIsland: function(){
    this.island = this.neighbours.length == 0 ? true : false
    return this.island;

  },

  iftrue: function(){
    this.pass = this.population +3
    return this.pass;
  },

  iftrue1: function(){
    this.pass = Number (this.population) +3
    return this.pass;
  },

  iftrue2: (a,b) => a+b
  

}
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry.iftrue());
console.log(myCountry.iftrue1());
console.log(myCountry.iftrue2(1,2));
console.log(Object.values(myCountry));
console.log(Object.values(myCountry).length)
*/

//////////////////////////
/* coding challange #3


let mark={
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function(){
    this.bmi = this.mass/this.height**2;
    return this.bmi;
  }
}

let john={
  fullName: 'Mark Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function(){
    this.bmi = this.mass/this.height**2;
    return this.bmi;
  }

}
console.log(john.calcBMI(),mark.calcBMI())


if (mark.bmi>john.bmi){
  console.log(`${mark.fullName}'s BMI (${mark.bmi} )
  is higher than ${john.fullName}'s (${john.bmi}) `)
}else if (john.bmi>mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi} )
  is higher than ${mark.fullName}'s( ${mark.bmi}) `)
}
*/

//////////////////////////////////
/* Iteration: The for Loop

for(let i=1; i<=10; i++){
  console.log(`Voter number ${i} is currently voting`);
}
*/

//////////////////////////////////////
/* Looping Arrays, Breaking and Continuing

const jonas = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true,
];

for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] === `string`) {
		console.log(jonas[i],typeof jonas[i]);
  }
}
 
  if (typeof jonas[i] !== `string`) continue;
  console.log(jonas[i], typeof jonas[i]);
}


const populations = [10, 1441, 332, 83];
const percentages2 = [];
let percentageOfWorld1 = function (population){
  return population/2*100;}
  for (let i = 0; i < populations.length; i++) {
    const percentages2 = percentageOfWorld1(populations[i]);
    console.log(percentages2);
  }
  //   percentages2.push(percentageOfWorld1(populations[i]))
  //   console.log(percentages2);
    
  // }
  // console.log(percentages2);
  */

  ///////////////////////////////////////
/* Looping Backwards and Loops in Loops

 const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
  ];
  for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
  console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

  console.log(`-----------sxva---------`)
  
  const listOfNeighbours2 = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
    ];

for (let i = 0; i < listOfNeighbours2.length; i++)
console.log(`Neighbour: ${listOfNeighbours2[i]}`)
*/

///////////////////////////////////////
/* The while Loop

const populations = [10, 1441, 332, 83];
const percentages3 = [];

let percentageOfWorld1 = function (population){
  return population/2*100;
}
  let x = 0;
  while (x<populations.length) {
    const percentages3 = (populations[x]);
    console.log(percentages3);
    x++;
  }

  const percentages4 = [];
 let i = 0;
 while (i < populations.length) {
 const perc = percentageOfWorld1(populations[i]);
 percentages4.push(perc);
 i++;
 }
 console.log(percentages4);
 */

 //////////////////////////////////////
//  Coding Challenge #4

let calcTip2 = function(bill){
  return bill >=50 && bill <=300 ? bill * 0.15 : 
  bill * 0.2;
  }

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips =[];
let totals= [];

for (let i = 0; i < bills.length; i++) {
  // const tips = calcTip2(bills[i]);
  // console.log(tips)
  

  const tip = calcTip2(bills[i]);
  tips.push(tip);
  totals.push(tip+bills[i])
}

console.log(tips, totals)
// console.log(totals)

const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage2([2, 3, 7]));
console.log(calcAverage2(totals));
console.log(calcAverage2(tips));



