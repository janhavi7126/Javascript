//regular expression literal
let reg = /hello/;
console.log(reg); 
//inside regular expression literal
console.log(reg.source); 

let str = "How are You ? hello";
        //012345678910111213 14 index H
console.log(reg.exec(str));
//['hello', index: 14, input: 'How are You ? hello', groups: undefined]

str = "How are You ? Hello";//H
console.log(reg.exec(str)); // null

//example 2
let reg2 = /Bye/;//g-global flag

let str2 = "Bye Bye! Bye!! Bye!! ";
console.log(reg2.exec(str2))
console.log(reg2.exec(str2))
console.log(reg2.exec(str2))
console.log(reg2.exec(str2))
console.log(reg2.exec(str2))
console.log(reg2.exec(str2))

//if g not present
//['Bye', index: 0, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]
//['Bye', index: 0, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]
//['Bye', index: 0, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]
//['Bye', index: 0, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]
//['Bye', index: 0, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]
//['Bye', index: 0, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]

//if g present
//['Bye', index: 0, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]
//['Bye', index: 4, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]
//['Bye', index: 9, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]
//['Bye', index: 15, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]
//null
//['Bye', index: 0, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]

//example 3
let reg3 = /hello/i;// case in sensitive

let str3 = "How are You ? hello";
        //012345678910111213 14 index H
console.log(reg3.exec(str3));
//['hello', index: 14, input: 'How are You ? hello', groups: undefined]

str3 = "How are You ? HeLLo";//H
console.log(reg3.exec(str3)); // null

//['hello', index: 14, input: 'How are You ? hello', groups: undefined]
//['HeLLo', index: 14, input: 'How are You ? Hello', groups: undefined]

//Hello [0]returns -> what has matched and not what has searched
//we can use it as object(.input,.index) but will throw Typeerror if null


//2)Test
console.log(reg.test(str));//false bcoz str is reassigned as capital H
console.log(reg2.test(str2));//true
console.log(reg3.test(str3));//true 

//3)Match - will return an array of result or null 
console.log(str.match(reg));// opposite
console.log(str2.match(reg2));// opposite without g
//output :['Bye', index: 0, input: 'Bye Bye! Bye!! Bye!! ', groups: undefined]
console.log(str2.match(reg2));// opposite with g
// (4) ['Bye', 'Bye', 'Bye', 'Bye']
// 0: "Bye"
// 1: "Bye"
// 2: "Bye"
// 3: "Bye"

//4)search - returns index of first match else -1 (does not depend on g)
console.log(str.search(reg));// opposite 
//-1 bcoz of capital H
console.log(str2.search(reg2));// opposite without g 
//0
console.log(str2.search(reg2));// opposite with g
//0


//5)replace- returns new rplaced string with first match /all the replacements depends on g
console.log(str.replace(reg,'heyy'));//nothing 
//How are You ? Hello
console.log(str2.replace(reg2,'heyy'));//without g
//heyy Bye! Bye!! Bye!!
console.log(str2.replace(reg2,'heyy'));//with g
//heyy heyy! heyy!! heyy!!

