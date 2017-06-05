var siblings = ['Jenny', 'Joe'];
console.log(siblings);

var parents = ['Fred', 'Diane'];
console.log(parents);

var family = parents.concat(siblings);
console.log(family);

family.push('Stella');
console.log(family);

family.reverse();
console.log(family);

console.log(family[2]);
//this displays one family member at index 2

family[2] = 'Jeni';
console.log(family);

var backUpFamily = family.slice();
console.log("backUpFamily = ", backUpFamily, "family =", family);

var stevesParents = family.splice(3);
//this splice creates a new array starting at index 3, but also alters family array
console.log("steves parents are = ", stevesParents);
console.log("family array =", family);

console.log("index of =", family.indexOf("Jeni"));

var testParents = family.splice(2);
console.log(testParents);
//this splice ends with just one item, because family was altered above

console.log(backUpFamily);

//map returns a new array and performs the function to each item of array
var new_array = backUpFamily.map(function(obj)  {
  return obj + 's';
});
console.log(new_array);
console.log(backUpFamily);

console.log(backUpFamily.toString());
