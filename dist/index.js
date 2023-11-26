"use strict";
/*
let age: number = 15;

let FirstName: string = 'Mario';

FirstName = '20';


let planet = 'Earth';
let isLarge = true;
let moonCount = 5;

console.log("hello world !!");
console.log(`${planet} has ${moonCount} number of moons and its ${isLarge}` ); */
let names = ['mario', 'django'];
let age = [2, 5];
names.push('bowser');
age.push(7);
// Type inference with arrays
let fruits = ['Apple', 'Banana'];
let f = fruits[1];
fruits.push('peaches');
let things = [1, true, 'hello'];
let th = things[1];
//Object literals
let user = {
    firstname: 'mario',
    age: 30,
    id: 1
};
user.age = 45;
//Object inference with object literals
let person = {
    firstname: 'mario',
    age: 30,
    id: 1
};
person.firstname = 'dfljd';
//Functions
function addTwoNumbers(a, b) {
    return a + b;
}
let c = addTwoNumbers(2, 5);
let subtractNumbers = (a, b) => {
    return a - b;
};
;
const autherOne = {
    name: 'abc',
    avatar: 'scc/images/pic001.png'
};
let myBook = {
    title: 'some title',
    pages: 950,
    rating: 4,
    tags: ['horror', 'fiction', 'drama'],
    auther: autherOne
};
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const getRandomRGB = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
};
console.log(getRandomColor());
console.log(getRandomRGB());
const userOne = {
    name: 'Dexter',
    score: 25
};
const formatUser = (user) => {
    console.log(`${user.name} has ${user.score} score`);
};
formatUser(userOne);
