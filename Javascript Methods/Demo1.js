const name="UK";
const age=20;

//Normal Concatenation..
console.log("I am "+ name + " and my age is " + age);

//Template String..
console.log(`I am ${name} and my age is ${age}`);

console.log(`Hi!    
 I am UK`);                  // Template String is similar to pre tag in html print the content as it is in the statement

const plist=[
    { pname:"Arun",
    page:21,
    pid:1 },
    { pname:"Varun",
     page:19,
     pid:2 },
     { pname:"Tharun",
      page:18,
      pid:3
     }];

console.log(plist);

//forEach process.
plist.forEach(function(fname){
   console.log(fname.pname);
});

//map process. (return type -> array.)
const nameList = plist.map(function(fname){
    return fname.pname;
});
console.log(nameList);

//filter process (return type-> array.)
const eligible =plist.filter(function(fage){
    return fage.page <20;
});
console.log(eligible);

//reduce process (returns single value)
let arr = [1,2,3,4,5,6];
const res = arr.filter((n)=>n%2===0).reduce((a,b)=>a+b); 
console.log(res); //reduce combines the values into a single value based on the given expression.

//Combined process
const Per_eligible = plist.filter(function(per_age){
    return per_age.page <20
}).map(function(Per_name){
    return Per_name.pname;
})
console.log(Per_eligible);

//function Method1 -->assigning values directly to params
function add(num1=1,num2=3){
 console.log(num1+num2);
}
add(); // if we called params here assigned values get over written

//Arrow function
const addi = (num1,num2) => num1+num2;
console.log(addi(5,5));

//Constructor function
function Person(fname,lname,dob){
  this.fname=fname;
  this.lname=lname;
  this.dob=dob;
//   this.fullname = function(){
//     return `${this.fname} ${this.lname}`;
//   }
}

//removes function structure in object but displays in prototype.
Person.prototype.fullname = function(){
    return `${this.fname} ${this.lname}`; 
}
const person1 = new Person('UK','Karthi','26-06-2003');
const person2 = new Person('Ram','Sekar','21-08-2002');
console.log(person1.fullname());
console.log(person1);



