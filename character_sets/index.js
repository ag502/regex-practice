const string1 =
  "Make the outline for the square gray and the fill for the circle grey.";

const regex1 = /gr[ae]y/g;
console.log(string1.match(regex1));

const regex2 = /[rh][abcde][ i]/g;
console.log(string1.match(regex2));

const regex3 = /gr[ae]y[ .]/g;
console.log(string1.match(regex3));

const string2 =
  "There have been 4 - 5 times I have tried, but I will try it again.";

const regex4 = /[1-7]/g;
console.log(string2.match(regex4));

const regex5 = /[1-4a-eA-Z]/g;
console.log(string2.match(regex5));

const regex6 = /[A-Z][a-i]/g;
console.log(string2.match(regex6));

const string3 = "Exception 0xAF89F";

const regex7 = /0x[0-9A-F][0-9A-F]/g;
console.log(string3.match(regex7));

const string4 = "How do we capture the numbers 13 - 20?";

const regex8 = /[1-2][03-9]/g;
console.log(string4.match(regex8));

const regex9 = /0x[^0-9A-F][0-9A-F]/g;
console.log(string3.match(regex9));

const string5 =
  "A string that contains numbers (12345)\n A second line _ (12345)\t\t\t 3 Tabs";

const regex10 = /\s/g;
console.log(string5.match(regex10));

const phoneNums = [
  "801-766-9754",
  "801-545-5454",
  "435-666-1212",
  "801-796-80104",
  "435-555-9801",
  "801-777-665-",
  "801-77A-6655",
  "801-778-665",
];

const filteredNumbers = phoneNums.filter((number) => {
  if (/801-\d\d\d-\d\d\d\d/.test(number)) {
    return number;
  }
});

console.log(filteredNumbers);
