module.exports = function check(str, bracketsConfig) {
  // your solution
  let obj = { '(' : ')',
  '{': '}',
  '[': ']',
  '|': '|',
  '1': '2',
  '3': '4',
  '5': '6',
  '7': '7',
  '8': '8'}
let stack = [];
for(let i =0; i<str.length; i++){

if(obj[stack[stack.length-1]] === str[i]) {
stack.pop();
} else {
stack.push(str[i])
}
}
if(stack.length > 0 ) {
return false
} else {
return true
}
}
