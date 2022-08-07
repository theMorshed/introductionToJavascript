/*
Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return.
Input:
The first line of the input is the taka Harry’s mom gave him.
The second line is the cost of 1 kg of oranges and 1 kg of apples.
Output:
Print the result.
Sample Input: 1000
        700 
Output: 300
*/

// declare and intialize necessary varibale
var totalMoney = 1000;
var orangePrice = 400;
var applePrice = 300;
var returnMoney;

// calculate the amount
returnMoney = totalMoney - (orangePrice + applePrice);

// print the result
console.log(returnMoney);
