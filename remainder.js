/* 
Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
remainder would be if she divided the number by 5. Help Sarah write the program.
Input:
The first line of the input contains the number.
Output:
Print the remainder.

Practice Problem 4

Sample Input:
119

Output:
4
*/

// declare variable and initialize
var givenNumber = 119;
var remainderNumber = 5;
var remainder;

// calculate
remainder = givenNumber % remainderNumber;

// print result
console.log(remainder);
