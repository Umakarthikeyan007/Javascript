//Other way of declaring variables
//1.By Underscore
let num1=100_00_00;
console.log(num1);

//2.Using n at end as "BigInteger"
let num2=1000234567898979697687896n;
console.log(num2);

//3.If double quotes is needed in a string
let name1="Uma \"Karthikeyan\"";
console.log(name1);

//4.NaN and it's type
let num3=5;
console.log(5/"UK"); //Output will be NaN
console.log(typeof(5/"UK")); //But typeof will show this as a type number
console.log(typeof("UK"/5)); //Same for the opposite

//Type Conversion
let num4 =String(6);
console.log(typeof(num4)); // typecasts from number to string

let name2=Number("6");
console.log(typeof(name2));

//Some variations known as Coercion
let num5 = 8;
num5 = 8+"";             // number + string = string
console.log(typeof(num5));

let num6 = "8";
num7=10-num6;
num6= num6 - 2;          // String - number = number
console.log(num6);
console.log(num7);      //number - string = string

//Truthy and Falsy
console.log(Boolean(0));  //false
console.log(Boolean(7));  //Other than 0 any number returns true
console.log(Boolean(null)); //null gives an output of 0 which is falsy
console.log(Boolean(undefined)); // 0

let a="8";
a++;
console.log(a);

let b="9";
b= +b - 2;  //If we wanted to perform a (string - number) operation use '+' infront of a string to considered it as a number. 
console.log(b);

let c="2";
c = 10 - +c;  // same goes for (number-string) operation.
console.log(c);

let detail="123 uk 34"; // fetches only first series of continuous numbers.
console.log(Number(detail));  // Cant able to retrieve the number part.
//Instead this use parseInt
console.log(parseInt(detail));   // gives 123 --> IMP: parseInt only retrieve numbers when the given string is started with a number


let n1=true;
let n2=false; // gives an output of 1 since true=1 , false=0 (1 + 0 = 1)  if (true + true then 1+1=2 2) will be ans
console.log(n1+n2); 

let x="Pen";
let y="pen";
console.log(x>y);  //returns false because P has ASCII value less than p.


//objects..
let person={
    name:"UK",
    age:20,
    Technology:["Javascript" , "Java" ]
}
console.log(person);

delete person.age;  //deletes the particular value in the object.
console.log(person);

//Function expresion.
let add = function(num1,num2){
          return num1+num2;
          }
console.log(add(5,6));  //Here even the function has no name it takes the variable name as the function name.

//Arrays
let nums=[1,2,3];   
nums[5]=6;           //We can assign values wherever we want
console.log(nums);            // But In-between values will be empty if not assigned
console.log(typeof(nums[4]));  // And their type will be --> undefined.

//Accessing various types.
let info=["UK", 20, {tech:'java'},function(){console.log("Hello World")}];
console.log(info[2].tech);   //We can access both functions and Objects.
info[3]();

//Array Methods.
let values =[1,2,3,4,5];
values.push(6);         //Add values at the end.
console.log(values);
values.unshift(0);       //Add values at the beginning.
console.log(values);
values.shift();  //Deletes at beginning.
console.log(values);
values.pop();   //Deletes at the end.
console.log(values);
values.splice(2);   //Deletes entire array after the particular index specified.
console.log(values);

let bi=[1,2,3,4,5];
bi.splice(2,1);   // (starting index , no of elements after starting index).
console.log(bi);

bi.splice(2,1,3,4);
console.log(bi);  // from 3rd argument it indicates the elements need to be added in the particular place of the array.

//Destructure of Array.
let numbers = [1,2,3,4];
let [u,v,w,z] = numbers;  // now, 1->u 2->v 3->w 4->z gets assigned which is known as destructing.
let[a1,a2, ,a4] = numbers;  //now the empty space indicates no need to assign for 3rd value hence 1->u 2->v 4->z occurs.
let[b1,b2,b3] = numbers;  //now b1->1 b2->2 b3->3 gets assigned

//Swapping of 2 nums
let c1 = 6;
let c2 = 5;
[c1,c2]=[c2,c1]; // This indicates the swapping of numbers.
console.log(c1);
console.log(c2);


//Destructing of String.
let sentence = "I am UK from Pollachi".split(" ");  //splits the string into array of strings.
let[s1,s2,s3,s4,s5]=sentence;  //like arrays strings also gets stored 
console.log(s5);
let [se1,se2,...se3]=sentence;
console.log(se3);   // prints the entire array from given part as string array.


//Set in Javascript (Only accepts unique values)
let nums1 = new Set(); //Declare set using a constructor.
nums1.add(3);
nums1.add("UK");   // Adding elements in set.
nums1.add(23.5);
nums1.add(4);
//Print each element is done by only using loops.
nums1.forEach(n => console.log(n));
console.log(nums1.has("UK")); // Checks whether given element is present in Set.


//Map in Javascript
let customer = new Map();
customer.set(1,"Biriyani");
customer.set(2,"Rice");   //Adding elements in Map.
customer.set(3,"Parotta");
console.log(customer.keys()); //print keys from a map.
console.log(customer.values());  //print values from a map.
console.log(customer.has(1));   //Checks for the ( keys ) in the map. prints True or False
console.log(customer.get(1));  //Used to retrieve values.
//To print the key-value pair use loops.
for([k,v] of customer){
    console.log(`${k} : ${v}`);
}
customer.set(1,"Fries"); // Now the biriyani gets replaced by Fries and newly sets as 1->Fries.
//Print using forEach.
customer.forEach((v,k)=> console.log(`${k} : ${v}`));  // In forEach ( params will be value and then key ).

