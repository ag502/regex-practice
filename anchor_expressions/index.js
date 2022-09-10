const string1 =
  "The dot is a very powerful regex metacharacter. It allows you to be lazy. Put in a dot, and everything matches just fine when you test the regex on valid data.\nThe problem is that the regex also matches in cases where it should not match. If you are new to regular expressions, some of these cases may not be so obious at first.";

const regex1 = /^The/gi;
console.log(string1.match(regex1));

const regex2 = /first.$/gi;
console.log(string1.match(regex2));

const regex3 = /^The/gim;
console.log(string1.match(regex3));

const regex4 = /\.$/gim;
console.log(string1.match(regex4));

const string2 =
  "Inplants this idea: plan to plant multiple trees on this planet.";

const regex5 = /\bplan\b/g;
console.log(string2.match(regex5));

const string3 =
  "Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.";

const regex6 = /\b[mtwfs][a-z]{1,4}[nsir]day\b/gi;
console.log(string3.match(regex6));

const newString3 = string3.replace(regex6, "Monday");
console.log(newString3);
