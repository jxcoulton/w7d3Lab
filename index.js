// 1) -------------------------------------------------------
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
	//returns 10 console.logs, 1 for each number
}
// Q: What is the time complexity of the for loop?
// ANSWER: 1 + (1 * n) => O(n)

// 1.2) You are challenged to find the 4th element of the array, and you came up with this solution:

var count = 1;
var answer = 0;

for (let i = 0; i < numbers.length; i++) {
	if (count === 4) {
		answer = numbers[i];
		return;
	} else {
		count += 1;
	}
	// adds up to 4 then console.logs one response
}
// Q: What is the time complexity of of this solution?
// ANSWER: 1 + (1 * 4) => O(5) => O(1)

// Q: Could you come up with a solution that has a better time complexity? If so, what is that time complexity?
// ANSWER: O(1) same time complexity

let answer = numbers[3];

// 2) -------------------------------------------------------
function printA() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		//returns 5 console.logs 1 incrementing up to 5
	}
}
// Q: What is the time complexity of the function?
// ANSWER: (1 * 5) => O(5) => O(1)

// 3) -------------------------------------------------------
function printB(number) {
	for (let i = 0; i < number; i++) {
		console.log(i);
		//returns 'number' number of console.logs incrementing from 1 to 'number'
	}
}
// Q: What is the time complexity of the function?
// ANSWER: (1 * n) => O(n)

// 4) -------------------------------------------------------
function printC(num, arr) {
	for (let i = 0; i < num; i++) {
		for (let j = 0; j < arr.length; j++) {
			console.log(j);
			//returns a console.log of each j[i] (up to the length of j), for each i[i] (up to 'i' number of times) ex i[0] j[0] / i[0] j[1]
		}
	}
}
// Q: What is the time complexity of the function?
// ANSWER: n * n => O(n^2)

// 5) -------------------------------------------------------
for (let i = 0; i < numbers.length; i++) {
	for (let j = 0; j < numbers.length; j++) {
		console.log(j);
		//returns a console.log of each j[i] (up to the length of j), for each i[i] (up to the length of i) ex i[0] j[0] / i[0] j[1]
	}
}
// Q: What is the time complexity of the nested for loop?
// ANSWER: n * n => O(n^2)

// 6) -------------------------------------------------------
let newNumbersA = numbers.filter((num) => {
	return num < 5;
	//returns each numbers less then 5, limited by the length of the array
});
// Q: What is the time complexity of the filter higher-order function?
// ANSWER: 1 + (1 * n) => O(n)

// 7) -------------------------------------------------------
let newNumbersB = numbers.map((num) => {
	return num * 3;
	//returns the original array length with each number multiplied times 3
});
// Q: What is the time complexity of the map higher-order function?
// ANSWER: 1 + (1 * n) => O(n)

// 8) -------------------------------------------------------
function removeNum() {
	numbers.splice(3, 1);
	//returns numbers array minus 1 value at position 3, all other numbers shift down 1 to fill the space
}
// Q: What is the time complexity of the function?
// ANSWER: O(n) the function itself is simple, targeting a specific number, but all the numbers after it shift indexes (1 * n)

// 9) -------------------------------------------------------
function insertNum() {
	numbers.splice(3, 0, 19);
	//returns numbers array plus 1 value at position 3, all other numbers shift indexes up 1
}
// Q: What is the time complexity of the function?
// ANSWER: O(n) the function itself is simple, targeting a specific space and inserting one number, but all the numbers after it shift indexes (1 * n)

// 10) -------------------------------------------------------
function pushNum() {
	numbers.push(25);
	//returns numbers array + 1 index value at  the end.
}
// Q: What is the time complexity of the function?
// ANSWER: (1 * 1) => O(1)

// 11) -------------------------------------------------------
// Given an array of names....
function printFirstTwoNames(array) {
	console.log(array[0]);
	console.log(array[1]);
	//returns only 2 console.logs
}

// Q: What is the time complexity of the function? Could we write this function differently to accomplish the goal of the function in a faster time complexity?
// ANSWER: (1 * 2) => O(2) => O(1) there are no other ways to write this function that would be faster

// Advanced Challenges
// Solve the following challenge. Once complete, determine the time complexity of your solution. Consider if there are ways to solve the challenge with a better time complexity.

// CHALLENGE - SQUARE EVERY NUMBER
//Welcome. In this challenge, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81, 1^2 is 1, 1^2 is 1, and 9^2 is 81. Together, we have 81, 1, 1, 81. Once combined we have 811181.

// Starting Code:
function squareEveryDigit(number) {
	num = num.toString();
	let newArr = [];
	for (let i = 0; i < num.length; i++) {
		let number = num[i] * num[i];
		number = number.toString();
		newArr.push(number);
	}
	console.log(newArr.join(""));
}

squareEveryDigit(946); // When running 946, you should see a result of 811636
// O(n)
