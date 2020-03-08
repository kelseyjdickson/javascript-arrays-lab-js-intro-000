var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
var results = [];
let xtraArr = [];
// Add your functions and code here
function destructivelyAppendKitten(name){

kittens.push(name);
}
function destructivelyPrependKitten(){
  kittens.unshift('Bob');
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
};

function destructivelyRemoveFirstKitten(){
kittens.shift();

}
function appendKitten(name){
results += kittens.concat(name);
return results;
}

function prependKitten(name){
  results += kittens.unshift(name);
return results;

}
// function removeLastKitten(){
//   results += kittens.pop('Garfield');
//   return results
// }
//
// function removeFirstKitten(){
//
// }
