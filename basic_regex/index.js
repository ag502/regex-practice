const string =
  "hello hello !! Programming Courses alwayS starts with a hello world example.";

const regex1 = new RegExp("hello");
const regex2 = /world/;

// console.log(regex1.test(string));
// console.log(regex2.test(string));

// console.log(regex1.exec(string));
// console.log(regex2.exec(string));

// console.log(string.match(regex1));
// console.log(string.match(regex2));

// console.log(string.search(regex1));
// console.log(string.search(regex2));

const regex3 = /s\s/gi;

console.log(regex3.exec(string));
console.log(regex3.exec(string));
console.log(regex3.exec(string));
console.log(regex3.exec(string));

// console.log(string.match(regex3));
