let character = 'Hello';
console.log(character);
character = "World";
console.log(character);
let secondCharacter;
secondCharacter = "Test"
console.log(secondCharacter);
secondCharacter = character;


let profession;
let age;
profession = "teacher";

console.log(profession);
console.log(age);



let character = 'Hello';
let count = 8;
// console.log(count + 1);
// console.log(count - 1);
// console.log(count * 1);
// console.log(count / 1);
// let rows = [];
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[2] = 10;
console.log(rows);
rows[rows.length - 1];
rows = 10;

let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp")
console.log(rows);
let popped = rows.pop();
console.log(popped);

let pushed = rows.push("freeCodeCamp");
console.log(pushed)

let character = "Hello";
let count = 8;
let rows = [];

const character = "Hello";
const count = 8;
const rows = [];

let character = "Hello";
character = "#"
const count = 8;
const rows = [];

for ("iterator"; "condition"; "iteration") {
}

for (let i = 0; "condition"; "iteration") {

}

for (let i = 0; i < count; "iteration") {

}

for (let i = 0; i < count; i = i + 1) {

}

for (let i = 0; i < count; i = i + 1) {
    console.log(i);
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}

let result = "";

console.log(result);

for (const row of rows) {

}

for (const row of rows) {
    result = result + row
}

for (const row of rows) {
    result = result + '\n' + row;
}


for (let i = 0; i < count; i = i + 1) {
    rows.push(character);
}


for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i));
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1))
}

function padRow() { }
padRow();
const call = padRow();
console.log(call);

function padRow() {
    return "Hello!"
}

function padRow(name) {
    return "Hello!";
}


function padRow(name) {
    return name;
}

const call = padRow('Gaukhar');

//   step 55:

function addTwoNumbers(a, b) {
    return a + b;
};
const sum = addTwoNumbers(5, 10);
console.log(sum)

function padRow(name) {
    return character + name;
}

function padRow(name) {
    const test = "Testing";
    return character + name;
}

function padRow(name) {
    const test = "Testing";
    return test;
}

function padRow(name) {
    const test = "Testing";
    console.log("This works!");
    return test;
    console.log("This works!");
}

function padRow() {
    const test = "Testing";
    return test;
}
const call = padRow();
console.log(call);

function padRow() {

}
const call = padRow();
console.log(call);

function padRow() {

}

function padRow(rowNumber, rowCount) {

}

function padRow(rowNumber, rowCount) {
    return character.repeat(rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow())
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count))
}

function padRow(rowNumber, rowCount) {
    return " " + character.repeat(rowNumber) + " ";
}

function padRow(rowNumber, rowCount) {
    const spaces = " ".repeat(rowCount - rowNumber);
    const characters = "#".repeat(rowNumber * 2 - 1);
    return spaces + characters + spaces;
}

function padRow(rowNumber, rowCount) {
    const spaces = " ".repeat(rowCount - rowNumber);
    const characters = "#".repeat(2 * rowNumber - 1);
    return spaces + characters + spaces;
}

// for (let i = 0; i < count; i += 1) {

// for (let i = 0; i < count; i ++) {

for (let i = 1; i < count; i++) {
    rows.push(padRow(i + 1, count));
}

for (let i = 1; i < count; i++) {
    rows.push(padRow(i, count));
}

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}


for (let i = 1; i <= count; i++) {
    // comment
    rows.push(padRow(i, count));
}


/*
for (let i = 1; i <= count; i++) {
 rows.push(padRow(i, count));
}  */


if (true) {
    console.log("Condition is true");
}

if (false) {
    console.log("Condition is true");
}

if ("false") {
    console.log("Condition is true");
}

if ("") {
    console.log("Condition is true");
}

if ("") {
    console.log("Condition is true");
} else if (5 < 10) {
    console.log("5 is less than 10");
}

if ("") {
    console.log("Condition is true");
} else if (5 < 10) {
    console.log("5 is less than 10");
} else {
    console.log("This is the else block")
}

let continueLoop = false;
let done = 0;

while (continueLoop) {

}

while (continueLoop) {
    done++;
}

while (continueLoop) {
    done++;
    if (done == count) {
    }
}

if (done === count) {

}

if (done === count) {
    continueLoop = false
}

rows.push(padRow(done, count));

while (done !== count) {
    done++;
    rows.push(padRow(done, count));
    if (done === count) {
        continueLoop = false;
    }
}

while (done !== count) {
    done++;
    rows.push(padRow(done, count));
}

let done = 0;

while (done <= count) {
    done++;
    rows.push(padRow(done, count));
}

let done = 0;

while (rows.length < count) {
    done++;
    rows.push(padRow(done, count));
}

let done = 0;

while (rows.length < count) {
    done++;
    rows.push(padRow(rows.length + 1, count));
}

while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

for (let i = count; false; false) { }

for (let i = count; i > 0; false) { }

for (let i = count; i > 0; i = i - 1) { }

for (let i = count; i > 0; i = i - 1) {
    rows.push(padRow(i, count));
}


for (let i = count; i > 0; i -= 1) {
    rows.push(padRow(i, count));
}

for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}


/* for (let i = count; i > 0; i--) {
rows.push(padRow(i, count));
} */

const numbers = [1, 2, 3];
console.log(numbers)

const numbers = [1, 2, 3];
const unshifted = numbers.unshift(5);
console.log(numbers);
console.log(unshifted);


for (let i = 1; i <= count; i++) {
    rows.unshift(padRow(i, count));
}

let inverted = true;

if (inverted) {
    for (let i = 1; i <= count; i++) {
        rows.unshift(padRow(i, count));
    }
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    }
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {

    }
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}

for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}

const character = "!";
const count = 10;
const rows = [];
let inverted = false;
