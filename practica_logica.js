// User profile
/**
 * Write a program that prompts a user their data: username, age, and a list
 * of their favorite movies. Store the information and then showcase it in the
 * console. Take note that the output for the films should add a small massage
 * like: `The film {film} is one of my favorites.`
 */

let userName = prompt("Introduce your username: ");
let userAge = prompt("Introduce your age: ");
let favMovies = prompt("Finally introduce your favorite movies separated by commas: ");
let arrayMovies = favMovies.split(",");

console.log("My name is " + userName + ". I'm " + userAge + " years old and the film " + arrayMovies[0] + " is one of my favorites.");

 // Highest number
/**
 * Write a program that asks for 10 numbers. Using logical operators and any 
 * other javascript functions/structures you've seen before,
 * determinate and output the highest of those numbers.
 */

let numbers = prompt("Introduce a number: ");

while (numbers.length > 10) {
    
}