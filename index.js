// Functions Assignment 

// 1
function fullName() {
  console.log("Maryam Garba");
}
fullName(); 


// 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("Maryam", "Garba"));


// 3
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(5, 7)); 





// Higher Order Functions Assignment

const countries = [
'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary', 'IceLand', 'Ireland',
'Japan',
'Kenya',
]

const names = ['Tamara', 'Mathias', 'Elias', 'Brook'] 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
const products = [ 
  { product: 'banana', price: 3 }, 
  { product: 'mango', price: 6 }, 
  { product: 'potato', price: ' ' }, 
  { product: 'avocado', price: 8 }, 
  { product: 'coffee', price: 10 }, 
  { product: 'tea', price: '' }, 
]


// 1
countries.forEach(country => console.log(country));

// 2
names.forEach(name => console.log(name));

// 3
numbers.forEach(number => console.log(number));

// 4
const countriesUpperCase = countries.map(country => country.toUpperCase());
console.log(countriesUpperCase);

// 5
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// 6
const numbersSquared = numbers.map(number => number * number);
console.log(numbersSquared);

// 7
const namesUpperCase = names.map(name => name.toUpperCase());
console.log(namesUpperCase);

// 8 
const productPrices = products.map(product => product.price);
console.log(productPrices);

// 9
const countriesWithA = countries.filter(country => country.toLowerCase().includes('a'));
console.log(countriesWithA);

// 10
const sixLetterCountries = countries.filter(country => country.length === 6);
console.log(sixLetterCountries);

// 11
const longCountries = countries.filter(country => country.length >= 6);
console.log(longCountries);

// 12
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);


// 13
const validPrices = products.filter(product => typeof product.price === 'number');
console.log(validPrices);


// 14
function findCountriesWithPattern(pattern) {
  return countries.filter(country => country.toLowerCase().includes(pattern));
}
console.log(findCountriesWithPattern('land')); 
console.log(findCountriesWithPattern('ia'));   







// Objects Assignment

// 1
const dog = {};

// 2
console.log(dog);

// 3
dog.name = "Rex";
dog.legs = 4;
dog.color = "brown";
dog.age = 5;
dog.bark = function () {
  return "woof woof!";
};
console.log(dog);


// 4
console.log(dog.name);
console.log(dog.legs);  
console.log(dog.color); 
console.log(dog.age);   
console.log(dog.bark());