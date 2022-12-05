//Primitive types
//String

let Name = "janhavi";
console.log("My name is "+ Name);
console.log("Data type is "+ (typeof Name));

let age = 21;
console.log("Data type is "+ (typeof age));


let islock = true;

console.log("Data type is "+ (typeof islock));

let nullvar = null;

console.log("Data type is "+ (typeof nullvar));

let undef = undefined;
console.log("Data type is "+ (typeof undef));

//Reference Data type
myarr = [1,2,35,4,false]
console.log("Data type is "+ (typeof myarr));// object
myarr2 = [1,2,35,4]
console.log("Data type is "+ (typeof myarr2));//object
myarr3 = [1,2,35,4,"janhavi"]
console.log("Data type is "+ (typeof myarr3));// object

// javascript is dynamically typed language
// as it not required to tell which data type the variable is

//C ,C++ ,Java statically typed language

let marks ={
    janhavi: 33,
    Khushi: 34,
    Sejal:37
}
console.log(marks)
console.log("D  ata type is "+ (typeof marks));// object

function findname() {
    
}
console.log("Data type is "+ (typeof findname));// function
let date = new Date();
console.log("Data type is "+ (typeof date));//object

let object1 = {
    name:'Bingeh',
    age:18
    };
    let object2 = object1;
    
    //updating object1,
    object1.age = 20;
    
    console.log(object2); //age 20
    console.log(object1); //age 20
    
    let variable1 ="hii";
    let variable2 = variable1;
    
    variable1 = "hello"
    
    console.log(variable2); //
    console.log(variable1); //





