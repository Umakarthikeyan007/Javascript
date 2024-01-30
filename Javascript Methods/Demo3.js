//Currying in Javascript 

//normal function.
const Details = (Myname,age,yr) => "I am "+Myname+" my age is "+age+" and studying "+yr+" year";
console.log(Details('Uk', 20, 'final'));

//function inside another function known as Currying
const Details2 = Myname=>
                 age=>
                 yr => 
                 "I am "+Myname+" my age is "+age+" and studying "+yr+" year";
console.log(Details2('UK')(20)('final'));   //separate functions so separate set of arguments.

//String Methods
let str = "Good Morning!";
console.log(str.substring(3,9)); // (start index ,end index -1)
console.log(str.substr(3,9));  //(start index ,no.of.characters).

let str2 = "     Hai    ";
console.log(str2.trimStart()); //removes whitespace at the start 
console.log(str2.trimEnd()); //removes whitespace at the end

let str3="5";
console.log(str3.padStart(4,"0"));  // (max length , element to be added at the front)
console.log(str3.padEnd(4,"0"));  // (max length , element to be added at the end)

let str4 ="Hello Boys";
console.log(str4.search("Boys")); //returns index.

let str5 ="good boy good girl good mom good dad";
console.log(str5.match("good"));  //returns a array of object use .index to find index of 1st occurence.

let a=2;
let b=2.5;
console.log(Number.isInteger(a));  //returns true if it is a integer.
console.log(Number.isInteger(b));  //returns false since it is a decimal.

let num = 45.0097908;
console.log(num.toFixed(2));   // decimal length is 2.
console.log(num.toPrecision(2)); //overall length is 2.

//Flat method 
 let twodarray =[[1,2],[3,4]];
 console.log(twodarray.flat()); // reduces the dimension of the array.

 //sorting
 let arr = [1,4,8,3,2,5,7,9,5,8];
 arr.splice(5,1,6);
 console.log(arr.sort((a,b)=> a-b));

 //reverse sorting
 console.log(arr.sort((a,b)=> b-a));


 //IIFE - Immediately Invoked Function Expression.
//Function Expression with no name.

(function (words){
    console.log(words);
})("Hello World!!")  //enclose function by () and immediately invoke by passing params