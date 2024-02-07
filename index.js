//1. Addition
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.
let sum = 0;
for (let i = 200; i <= 2700; i++) {
  if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
    sum += i;
  }
}
console.log(sum);

// 2. Shift the Values

// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].


let x = [2, 1, 6, 4, -7];
let shiftedArray = [];

for (let i = 0; i < x.length; i++) {
  shiftedArray[i] = x[x.length - 1 - i];
}

console.log(shiftedArray);
console.log(x);

// 3. FizzBuzz

/* Create an algorithm that inserts the numbers from 1 to 135 into an array, 
 while replacing the values that are divisible by 3 with the word "Fizz", 
 the numbers that are divisible by 5 with the word "Buzz", 
 and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".*/
 
// Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]

let result = [];
for (let i = 0; i <= 135; i++) {
  if (i % 3 === 0) {
    result.push("Fizz");
  } else if (i % 5 === 0) {
    result.push("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    result.push("FizzBuzz");
  } else {
    result.push(i);
  }
}

console.log(result);

// 4. Fibonacci

// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// 0 1 1 2 3 5 8 13 21...

let fib = []
for (let i=0 ; i<= 1000000 ; i++){
    if (i==0){
          fib[i]=i
    }else if (i==1){
        fib[i]=i
    }else {
        fib [i]=fib[i-1]+fib[i-2]
    }  
}
console.log(fib.length)
console.log(fib)

// 5. Remove the Negative

// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

let arrNum = [1, -2, 4, 1];
for (let i = 0; i < arrNum.length; i++) {
  if (arrNum[i] < 0) {
    arrNum.splice(i, 1);
    i--;
  }
}
console.log(arr[i])
console.log(arrNum);

// 6. Communist Censorship

// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice


let arrStrings = ["Man", "I", "Love", "The", "Matrix", "Program"];
let word = "Program";
let m = ''


  for (let i = 0; i <= arrStrings.length; i++) {
      if (i < word.length){
          m+=`*`;
      }
    if (arrStrings[i] == word) {
        arrStrings[i] = m
    }
  }
 
console.log(arrStrings);



