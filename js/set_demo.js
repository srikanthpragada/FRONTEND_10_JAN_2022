
var names = new Set();
names.add("Scott");
names.add("Steve");
names.add("Scott");

console.log(names.has("Tom"))

// Display all names
for (var n of names.values())
  console.log(n)