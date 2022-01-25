
var s = "Hello"
console.log(s)
console.log(typeof(s))
console.log(s.length)
for(let i = 0; i < s.length; i ++) {
   console.log(s[i]);
   console.log(s.charCodeAt(i));
}

var sc = "*_#"

console.log(sc.includes('*'))

console.log("abc,xyz,pqr".split(","))

for(let c of s) 
  console.log(c)