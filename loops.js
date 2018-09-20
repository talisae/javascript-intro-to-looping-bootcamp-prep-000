function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i === 1){ 
    array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}
function whileLoop(n){
  let countdown = n;
  while (countdown > 0){
    console.log(--countdown);
  }
  return 'done';
}
var i = 0;
function incrementVariable() {
  i = i + 1;
}
do {
  array.shift();
  incrementVariable();
} while (array.length > 0 && incrementVariable());
return array;

for ([initialization]; [condition]; [iteration]) {
  [loopBody];
}
while ([condition]) {
  [loopBody];
} // when we don't know how many times a loop needs to run - that is, the condition is dependent on a dynamic function/return value.
do {
  [loopBody];
} while ([condition]);
// do-while loop is almost exactly the same as the while loop, except for the fact that the loop's body is executed at least once before the condition is tested. 
