// // Answer 1
function displayCurrentDateTime() {
    const now = new Date();
  
    document.body.innerHTML = `
      <h3>Current Date and Time:</h3> 
      <p>${now}</p>
      `;
  }
  displayCurrentDateTime();

// // Answer 2
function greetUser() {
    const firstName = prompt("Enter your first name");
    const lastName = prompt("Enter your last name")

    document.write(`<h4>  Hello   ${firstName}  ${lastName}  </h4>`)
  }
  greetUser( ); 

// // Answer 3
function addTwoNumbers() {
    const num1 = parseInt(prompt("Enter Num1"))
    const num2 = parseInt(prompt("Enter Num2"))
    const sum = num1 + num2;
  
    return sum;
  }
  const result_1 = addTwoNumbers();
  document.write("<b>" + "Sum of two Number: " + "</b>" + result_1); 

  document.write("<br>")
  document.write("<br>")

// Answer 4
function calculator() {
    // Compute the desired operation
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
    }

    return result;
  }
  const num1 = parseInt(prompt("Enter Number 1"))
  const operator =prompt("Enter Operator")
  const num2 = parseInt(prompt("Enter Number 2"))
  const result = calculator();
  document.write(`<b>Result:</b> ${result}`)

document.write("<br>")
document.write("<br>")

// // Answer 5
function squareNumber() {
    // Square the number
    const squared = number * number;
  
    // Return the squared number
    return squared;
  }
  const number =parseInt(prompt("Enter number you want Square"))
  const result_2 = squareNumber();
document.write(`Square of ${number} is <b> ${result_2} </b>`);

document.write("<br>")
document.write("<br>")

// // Answer 6
function factorial() {
  let result_3 = 1;
  for (let i = 2; i <= numb; i++) {
    result_3 *= i;
  }

  return result_3;
}
const numb = parseInt(prompt("Enter number for factorial"))
const result_3 = factorial(5);
document.write(`Factorial of ${numb} is <b>${result_3}</b>`);

document.write("<br>")
document.write("<br>")

// // Answer 7
function countNumbers() {
  for (let i = start; i <= end; i++) {
    document.body.innerHTML += `<p>${i}</p>`;
  }
}
const start = parseInt(prompt("Enter number you want to start counting"))
const end = parseInt(prompt("Enter number you want to end counting"))
document.write(`<b> Counting from ${start} to ${end} </b>`)
countNumbers();

document.write("<br>")
document.write("<br>")

// // Answer 8
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }

  const baseSquared = calculateSquare(base);
  const perpendicularSquared = calculateSquare(perpendicular);

  const hypotenuse = Math.sqrt(baseSquared + perpendicularSquared);

  return hypotenuse;
}
const hypotenuse = calculateHypotenuse(prompt("Enter base"), prompt("Enter perpendicular"));
document.write("Hypotenuse: " + hypotenuse);

document.write("<br>")
document.write("<br>")

// Answer 9

// // 1. Function that takes width and height as values:
function calculateRectangleArea(width, height) {
  const area = width * height;

  return area;
}
const area = calculateRectangleArea(prompt("Enter width"), prompt("Enter Height"));
document.write("Area of Rectangle With Value as Arguments: "+ "<b>" + area + "</b>");

document.write("<br>")

// // 2. Function that takes width and height as variables:
function calculateRectangleArea(width, height) {
  const area = width * height;

  return area;
}

const width = 5;
const height = 10;
const area_2 = calculateRectangleArea(width, height);
document.write("Area of Rectangle With Variable as Arguments: "+ "<b>" + area_2 + "</b>")

document.write("<br>")
document.write("<br>")

// Answer 10
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
const isPalindromes = isPalindrome(prompt("Enter any word to check it is Palindrome"));
document.write(isPalindromes);

document.write("<br>")
document.write("<br>")

// Answer 11
function capitalizeFirstLetterOfEachWord(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  const capitalizedString = words.join(" ");
  
  return capitalizedString;
}
const inputString = 'the quick brown fox';
const outputString = capitalizeFirstLetterOfEachWord(inputString);
document.write(outputString);

document.write("<br>")
document.write("<br>")

// // Answer 12
function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
const longestWord = findLongestWord("Web Development Tutorial");
document.write("Longest word is " + longestWord);

document.write("<br>")
document.write("<br>")

// // Answer 13
function countOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
          count++;
      }
  }
  return count;
}

let str = 'JSResourceS.com';
let letter = '0';
let occurrences = countOccurrences(str, letter);
document.write(`Number of occurrences of '${letter}' in '${str}': ${occurrences}`);

document.write("<br>")
document.write("<br>")

// Answer 14

// // Part 1 
function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  return `The circumference is ${circumference}`;
}

let radius = parseInt(prompt("Enter radius of circle"));
document.write(calcCircumference(radius));

document.write("<br>")

// // Part 2
function calcArea(rad) {
  let area =  Math.PI * rad * rad;
  return `The Area is ${area}`;
}

let rad = parseInt(prompt("Enter radius of circle"));
document.write(calcArea(rad));