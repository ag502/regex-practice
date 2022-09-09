const string1 = "how it that so hot hoot";
const regex1 = /h.t/g;

console.log(string1.match(regex1));

const string2 = "This could be the final word.";
const regex2 = /d\./g;

console.log(string2.match(regex2));

const string3 = `hot h\tt hit h
t`;
const regex3 = /h\nt/g;

console.log(string3.match(regex3));

const phoneNums = [
  "801-766-9754",
  "801-545-5454",
  "435-666-1212",
  "801-796-8010",
  "435-555-9801",
  "801-009-0909",
  "435-222-8013",
  "801-777-6655",
];

const filteredPhoneNums = phoneNums.filter((number) => {
  if (/^801-.+$/.test(number)) {
    return number;
  }
});

console.log(filteredPhoneNums);
