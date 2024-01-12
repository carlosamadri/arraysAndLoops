// Calculate the sum of all resistors connected in series.
/** 
 * Examples:
 * - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
 * - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
 * - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
 * 
 * Note: This approach uses the absolute value of each resistance to ensure all values are positive
*/

let resistance1 = [-1, 5, 6, 3];
let resistance2 = [14, 3.5, 6];
let resistance3 = [8,  15, 100];

const sumResistance = resistanceVal => {
    let sum = 0;

    for(let index = 0; index < resistanceVal.length; index++) {
        let resistance = resistanceVal[index];
        if (resistance < 0) {
            resistance = resistance * (-1);
        }
        sum = sum + resistance;
    }
    return sum;
}

console.log(`The sum resistance is: ${sumResistance(resistance1)}`);
console.log(`The sum resistance is: ${sumResistance(resistance2)}`);
console.log(`The sum resistance is: ${sumResistance(resistance3)}`);

// NUMBER DIVIDED INTO HALVES

/**
 * Given a number; return the number divided into its halves in an array.
 * 
 * Examples:
 * -`numDiv(4)` should return `[2,2]`
 * -`numDiv(10)` should return `[5,5]`
 * 
 * Note: The original example for `numDiv(10)` appears to be incorrect.
 */

let n1 = 4;
let n2 = 10;

const numDiv = number => {
    const array = [];
    const half = number / 2;
    array.push(half);
    array.push(half);
    
    return array;
}
    
console.log(numDiv(n1));
console.log(numDiv(n2));

// SECRET SOCIETY

/**
 * Find the name of a secret society based on the first letter of each member's name.
 * 
 * Examples:
 * - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
 * - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
 * - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.
 * 
 */

let strangers = ["Esperanza", "Franco", "Nia"];
let friends = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"];
let potter = ["Harry", "Ron", "Hermione"];

const secretName = members => {
    let societyCapitals = [];
    let society = "";

    for (let index = 0; index < members.length; index++) {
        const member = members[index];
        societyCapitals.push(member[0]);
    }
    societyCapitals.sort();

    for (let index = 0; index < societyCapitals.length; index++) {
        society = society + societyCapitals[index];
    }
    return society;
}

console.log(secretName(strangers));
console.log(secretName(friends));
console.log(secretName(potter));

//Online status
 
/**Display online status for a list of users.
 * 
 * Example:
 * - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` 
 * should return `'mockIng99, J0eyPunch and 1 more online'`.
 * 
*/
// 1. Obtener la cantidad total de usuarios
// 2. Calcular usuarios restrantes del total eliminando los priemros dos.
// 3. Obtener los primeros 2
// 4. Imprimimos el mensaje

const users = ["mockIng99", "J0eyPunch", "glassedFer", "Mo0o0x56"];

function getLength(arr) {
    return arr.length;
}

function calcRemaining(total) {
    return total - 2;
}

function getUsers(arr) {
    const users = arr[0] + arr[1];
    return users;
}

function onlineStatus(arr) {
    const total = getLength(arr);
    const rest = calcRemaining(total);
    const firstUsers = getUsers(arr);

    console.log(`Users: ${firstUsers} and ${rest} are online`);
}
onlineStatus(users);

//Version 2 del ejercicio anterior
// function statusOnline(){
// const onlineStatus = arr => {
//     if (arr.length !== 0) {
//         if(arr.length >= 3) {
//             const firstUsers = getUsers(arr);
//             console.log(`Users: ${firstUsers}, and ${arr.length - 2} are online`);
//         } else {
//             console.log(`Users: ${arr.join(',')} are online`);
//         } else {
//             console.log(`There are no users online`);
//         }
// }

// console.log(users.slice(0, 2));

 

//Array of Multiples
 
/** 
 * 
 * Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 * Examples:
 * - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
 * - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 * 
 */

const arrayMultiplos = (number, length) => {
    const array = [];
    const value = number;

    for (let index = 0; index < length; index++) {
        array.push(number);
        number += value;
    }
    return array;
}

console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));

//Positive dominance in Array
 
/** 
 * 
 * Write a function to determine if an array is positively dominant.
 * An array is positively dominant when the majority of its elements are positive.
 * 
 * Example:
 * - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 * 
*/
// 1. Loop por cada elemento
// 2. Total de positivos
// 3. Cantidad total y dividir sobre 2
// 4. Comparamos e imprimimos boolean

const numArr = [-1000, -1, 50, 1, 2, 5];
const negativeArr = [-1000, -1, -50, -1, 5, 2];

function positiveArr(arr) {
    let positiveCount = 0
    arr.forEach((num) => {
        if(num > 0) {
            positiveCount++;
        }
    })
    const mid = arr.length / 2;
    return positiveCount > mid;
}
//Imprime true
const res = positiveArr(numArr);
console.log(res);
//Imprime false
//const res = positiveArr(negativeArr);
//console.log(res);

//Antipodal Average
 
/** 
 * 
 * Given an array, return a shorter array following these steps:
 * - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
 * - Sum each number of the first part with the inverse numbers of the second part.
 * - Divide each number of the resulting array by 2.
 * 
 * Example:
 * - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
 * 
*/

let numArray = [1, 2, 3, 5, 22, 6];

const antipodalAvg = array => {
    const arrayReturn = [];

    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
        const operation = (array[i] + array [j]) / 2;
        arrayReturn.push(operation);
    }
    return arrayReturn;
}

console.log(antipodalAvg(numArray));

//const array = [1, 2, 3, 5, 22, 6];
//for (let index = array.length -1; index >= 0; index--) {
//    const element = array[index];
//    console.log(element);
//}