const string1 =
  "Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.";

const regex1 = /\bmonday|tuesday|wednesday|thursday|friday|saturday|sunday\b/gi;
console.log(string1.match(regex1));

const regex2 = /\b[a-z]{3}day\b|\b[a-z]{4}day\b/gi;
console.log(string1.match(regex2));

const string2 = "a5c3a2b1d1 a1e3a2b1a4 d5c3a2b1d1";

const regex3 = /([a-d][1-5]){5}/g;
console.log(string2.match(regex3));

const string3 =
  "Today is monday and tomorrow is tuesdays and then we have wednesday.";

const regex4 = /\b(monday|tuesday|wednesday)\b/g;
console.log(string3.match(regex4));

const string4 = "2018/3/9";

const regex5 = /^(\d{4})[-./](\d{1,2})[-./](\d{1,2})$/;
const arr = regex5.exec(string4);

if (regex5.test(string4)) {
  const [_, year, month, day] = arr;

  console.log(year, month, day);
} else {
  console.log("wrong format");
}

const string5 = "yoyo";

const regex6 = /(yo)\1/;
console.log(regex6.exec(string5));

const regex7 = /^(\d{4})[-./](\d{1,2})[-./]\2$/;
console.log(string4.match(regex7));

const regex8 = /^(?:\d{4})([-./])(\d{1,2})\1(\d{1,2})$/;
console.log(regex8.exec(string4));

const string6 = "<strong>This is a strong tag</strong><i>this is italic</i>";

const regex9 = /<(\w+>)[\w\s]+<\/\1/g;
console.log(string6.match(regex9));

const regex10 = /<(?<tag>\w+>)[\w\s]+<\/\k<tag>/g;
console.log(string6.match(regex10));

const string7 = "http://allthingsjavascript.com google.com youtube.com";

const regex11 = /\w+(?=.com)/g;
console.log(string7.match(regex11));

const string8 = "aH0kdfjN";

const regex12 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
console.log(string8.match(regex12));

const string9 = "There are 59 items for a price of $199 or €173.";

const regex13 = /(?<=\$|€)\d+/g;
console.log(string9.match(regex13));

const names = [
  "Jensen, Dale",
  "Smith, Andrea",
  "Jorgensen, Michael",
  "Vasefi, Annika",
  "Lopez, Monica",
  "Crockett, Steven",
];

const newNames = names.map((name) => {
  const regex = /^(?<lastName>[A-Za-z]+),\s*(?<firstName>[A-Za-z]+)$/g;

  const result = regex.exec(name);

  if (result) {
    const { lastName, firstName } = result.groups;

    return `${firstName}, ${lastName}`;
  }
});

console.log(newNames);
