/*
// const add = (function () {
//     let counter = 0;
//     return function plus() {
//         counter += 1; 
//          return counter;
//                       }
//   
//   });
//
//   let plus = add()
//   console.log(plus());
//   console.log(plus());
//   console.log(plus());
//   console.log(plus());
*/


//Example Step1
function outer(){
    let a = 10;
    function inner(){
        return a * a;
    }
    console.log(inner());
}

outer();

//In the above outer gets called a = 10 then console.log calls inner which returns 10*10=> 100 




//Example Step2
function outer(){
    let a = 10;
    return function inner(){ // here we are returning a function
        return a * a;
    }
}

let returnedFromOuter = outer();
console.log(returnedFromOuter); 
//In the above outer gets called a = 10 then returns a function definition
//
// ƒ inner(){
//     return a * a;
// } 
//we got a function we wanted its return statement for that we need to call this function 




//Example Step3
function outer(){
    let a = 10;
    return function inner(){  //here inner function is closure 
        return a * a;   //i.e this function remembers 
    }                   //Definition: A Closure is a function binded together along with its lexical scope or surrounding 
}

let returnedFromOuter = outer();
console.log(returnedFromOuter()); // this time we called the returned function that is inner

//Output : 100




//Example 4 important priorities What if a is reassigned before call 
function outer(){
    let a = 10;
    let returnOut = function inner(){  //here inner function is closure 
        return a * a;   //i.e this function remembers 
    }                  //Definition: A Closure is a function binded together along with its lexical scope or surrounding 
    a = 20
    // return returnOut;
    return returnOut();
}

let returnedFromOuter = outer();
// console.log(returnedFromOuter());
console.log(returnedFromOuter);
//Output 400

//In the above example when inner f is assigned to a variable which is called after word 
//FLOW: outer called ,a=10 , a = 20 ,return returnOut -> returnedFromOuter gets the returnout which is then called returns 20*20
//Here we could also return returnOut() call inside only then we just have to call outer();





//Example 5 Advance  In this One works and one dont why ?
function outer(){
    let a = 10;
    let returnOut = function inner(){  //here inner function is closure
        a++; 
        return a;   //i.e this function remembers 
    }                  //Definition: A Closure is a function binded together along with its lexical scope or surrounding 
    return returnOut;
    // return returnOut();
}

let returnedFromOuter = outer();
console.log(returnedFromOuter());
console.log(returnedFromOuter());
console.log(returnedFromOuter());
// console.log(returnedFromOuter);
// console.log(returnedFromOuter);
// console.log(returnedFromOuter);
 
//Earlier the whole funtion gets run again and produces output 11 11 11 (dont call inner function inside outer)
//While now we are first remembering  and calling both the function after wards  11 12 13 (instead call both the func outside of a function)
