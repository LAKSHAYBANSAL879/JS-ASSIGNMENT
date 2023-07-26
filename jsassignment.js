//q1
// 1. Type Conversion.

// Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number". Use error handling in javascript to achieve this output.
function convertinNumber(str) {
    try{
        const num=Number(str);
        if(Number.isNaN(str)){
            throw new Error("inavlid number");
        }
        return num
    }
    catch(error){
        return error.messaage;
    }
}
console.log(convertinNumber("1234"));
console.log(convertinNumber("abcd"));
//  q2
function getperson(person){
    try{
        if(typeof person !=="object" || !person.name || person.age){
            throw new Error("Invalid parameters type");
        }
return `Name: ${person.name},Age: ${person.age}`;
    }
    catch(error){
        return error.message;
    }
}
console.log(getperson({name : "lakshay", age: 20}));
console.log(getperson({name : "lakshay"}));
console.log(getperson([ "lakshay", 20]));

// q3
class car{
constructor(year,company,model){
    this.year=year;
    this.company=company;
    this.model=model;
}
getDescription(){
    return `This is a ${this.year} ${this.company} ${this.model}.`;

}

}
const mycar=new car("2022","TATA","NEXON");
console.log(mycar.getDescription());
q4
class employee{
    constructor(name,position,salary){
        this.name=name;
        this.position=position;
         this.salary=salary;
    }
    getSalary(){
        return `salary of ${this.name} is ${this.salary}`;
    }
}
const employee1=new employee("ramesh","MANAGER","100000");
console.log(employee1.getSalary());
// q5
class person{
    constructor(name="Unknown",age=0){
        this.name=name;
        this.age=age;

    }
    getDetails(){
        return `Name : ${this.name} ,Age : ${this.age}`;
    }
}
const person1=new person("Lakshay",20);
const person2=new person();
console.log(person1.getDetails());
console.log(person2.getDetails());
// q6

class calculator{
    static add(num1,num2){
    return num1+num2;
    }
}
const result=calculator.add(15,20);
console.log(result);
// q7
class user{
    constructor(username,password){
        this.username=username;
        this.password=password;

    }
    getPassword(){
        return this.password.replace(/./g,"*");
    }
    setPassword(newpassword){
let containNumber=false;
let containUppercase=false;
for (let i =0; i< newpassword.length; i++) {
    const char = newpassword.charAt(i);
    if(!isNaN(char)){
       containNumber=true; 
    }
  else if(char === char.toUpperCase()){
containUppercase=true;
  }  
}
if (newpassword.length>=8 &&  containNumber&& containUppercase ) {
    this.password=newpassword;
}
else {
    console.log(
      "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
    );
  }

    }
}
const users=new user("laksh123","helloJi123");
console.log(users.getPassword());
users.setPassword("mypasswor123d");
users.setPassword("Mypassword");
users.setPassword("mYpassword123");
console.log(users.getPassword());
// q8
function numberChecker(numbers) {
    return function (num) {
      return numbers.includes(num);
    };
  }
  
  // Expected Result:
  const arr = [1, 2, 3, 4, 5];
  const checkNum = numberChecker(arr);
  
  console.log(checkNum(3)); // true
  console.log(checkNum(6)); // false
//    q9
function filterByCategory(products) {
  return function (category) {
    return products.filter(function (product) {
      return product.category === category;
    });
  };
}

// Expected Output

var products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "Sunglasses", category: "Accessories" },
];

var clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);
// Output: [{name: "Shirt", category: "Clothing"}, {name: "Pants", category: "Clothing"}]
