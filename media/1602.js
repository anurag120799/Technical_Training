console.log(Math.PI);
var x = Math.random();
console.log(x);
x = Math.round(3.4);
console.log(x);
// round vs floor

x = Math.floor(3.4);
console.log(x);

x = Math.round(3.4);
console.log(x);

// Sqrt Root 
x = Math.sqrt(4);
console.log(x);

// cos
x = Math.cos(0);
console.log(x);


//Lets Create an Obj

var person = {
    name:"Mark Z",
    state:"cal",
    birth:1984
}

// According to Line No.33 , We are going to Create JSON Object
var personJSON = {
    name:"Mark Z",
    state:"cal",
    birth:1984
}

// JSON Array 

var personJSON2 = [
    {
        "name":"Mark",
        "state":"cal",
        "birth":1984
    },
];
console.log(personJSON2);
console.log(typeof personJSON);
console.log(typeof personJSON2);

// Convert to a JSON String

var personString=JSON.stringify(personJSON);
console.log(personString);
console.log(personString=='{"name":"Mark Z","state":"cal","birth":1984}');


// Parse a JSON String 

var stringParsedAsJSON=JSON.parse(personString);
console.log(stringParsedAsJSON);

// Array Obj

var shoppingList=['orange','apple','banana'];
console.log(shoppingList);

// Array Constructor 

var shoppingList2=new Array("bread","egg","butter");
console.log(shoppingList2);

console.log(shoppingList[1]);
//console.log(shoppingList.1);

shoppingList[1]="pear";
console.log(shoppingList);

//shoppingList[-1]="nuts";
//console.log(shoppingList);

delete shoppingList[1];
console.log(shoppingList);
console.log(shoppingList.length);

// Add an Element at the end
// Push
var x =shoppingList.push("test1");
console.log(shoppingList);

// What About pop?

shoppingList.pop();
console.log(shoppingList);

// shift & unshift can be used too

//x = shoppingList.unshift("grapes","strawberry");
//console.log(x);

// go to the element of index 1
// remove two elements starting from index 1
// replace them with grape & strawberry

shoppingList.splice(1,2,"grapes",'strawberry');
console.log(shoppingList);

// return two elements starting from position 0
// this return a new array

x = shoppingList.slice(0,2);
console.log(x);

// sort an array
shoppingList.sort();
console.log(shoppingList);

// Reverse an Array

shoppingList.reverse();
console.log(shoppingList);

// map

var addDelicious=function(n){
    return "Delicious"+n;
}
x=shoppingList.map(addDelicious);
console.log(x);

// filter

var numbers = [34,57,10,49,747,23];
x = numbers.filter(function(n){
    return n%3==0;
});

console.log(x);

// every
var num1=[35,41,75,78,81,91];
var testFunction=function(n){
    return n%3==0;
};
x=num1.filter(testFunction);
console.log(x);

x=num1.every(testFunction);
console.log(x);

// Looping Through Array using forEach
var shoppingList1=['Organge','apple','banana'];
console.log(shoppingList1);

for(var i=0;i<shoppingList1.length;i++){
    console.log(shoppingList1);
}

shoppingList1.forEach(function(element){
    console.log(element);
});

// Implement the logic for ES6(updated JS)

//for (element for shoppingList1){

//console.log(element);
//}








