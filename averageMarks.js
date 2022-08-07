/* 
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places.

Practice Problem 2

Sample Input:
75.25, 65, 80, 35.45, 99.50
Output:
71.04
*/

// declare variable
var mathMark = 75.25;
var biologyMark = 65;
var chemistryMark = 80;
var physicsMark = 35.45;
var banglaMark = 99.50;
var totalMarks, average;

// calculate the average mark
totalMarks = mathMark + biologyMark + chemistryMark + physicsMark + banglaMark;
average = totalMarks / 5;

// print average 
average = average.toFixed(2);
console.log(average);
