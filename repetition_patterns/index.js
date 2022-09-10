const string1 =
  "She sells seahells on a seashore. The shells she sells are seashells, I'm sure.";

const regex1 = /[A-Z]+/g;
console.log(string1.match(regex1));

const regex2 = /s[a-z]+/g;
console.log(string1.match(regex2));

const regex3 = /s[a-z]?/g;
console.log(string1.match(regex3));

const regex4 = /s[a-z]*/g;
console.log(string1.match(regex4));

const string2 =
  "<p>This is the first paragraph.</p><p>Paragraph number two.</p>";

const regex5 = /<p>.*<\/p>/;
console.log(string2.match(regex5));

const regex6 = /<p>.*?<\/p>/;
console.log(string2.match(regex6));

const string3 = "My telephone number is as follows: 801-555-6789.";

const regex7 = /\w{3,5}/g;
console.log(string3.match(regex7));

const regex8 = /\w{3,}/g;
console.log(string3.match(regex8));

const string4 = "32-6678-, 45-668778-1, 65-454";

const regex9 = /\d{2}-\d{4,6}?-/g;
console.log(string4.match(regex9));

const phoneNumbers = [
  "(801)-123-4567",
  "801.123.4567",
  "801-123-4567",
  "8011234567",
  "(801)123-4567",
];

const filteredNumber = phoneNumbers.filter((number) => {
  const regex = /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/;

  if (regex.test(number)) {
    return number;
  }
});

console.log(filteredNumber);
