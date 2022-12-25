//Metacharacter symbol

let str = "hello everyone , Good Morning! to one? and* all."
//1)To see starts with
console.log("...............starts with............................");
let reg1 = /^hell/;
console.log(reg1.test(str)); // true
reg1 = /^eve/;
console.log(reg1.test(str)); //false

console.log("...............Ends with............................");
//2)Ends With
let reg2 = /hell$/;
console.log(reg2.test(str)); // false
reg2 = /all$/;
console.log(reg2.test(str)); //false
reg2 = /all.$/;
console.log(reg2.test(str)); //true

console.log("............... 1 character in between............................");
let reg3 = /hello.everyone/;
console.log(reg3.test(str)); // true (space is one character)
reg3 = /hel.lo/;
console.log(reg3.test(str)); //false (0 character between hel and lo)
reg3 = /eve.one/;
console.log(reg3.test(str)); //false (ry 2 character between eve and one)
reg3 = /Go.d/;
console.log(reg3.test(str)); //true ( 'o' 1 character between Go and d)

console.log("............... 0 or more character in between............................");
let reg4 = /hello*everyone/;
console.log(reg4.test(str)); // false (space is not considered only character)
reg4 = /h*ello/;
console.log(reg4.test(str)); //true (0 character between hel and lo)
reg4 = /e*one/; //(execption) eve*one
console.log(reg4.test(str)); //true ('very' 4 character between eve and one)
//for more than 1 * must be exactly after one character
reg4 = /Go*d/;
console.log(reg4.test(str)); //true ( 'o' 1 character between Go and d)


console.log("............... after or before char optional but not anything else............................");
let reg5 = /hel?lo ev?eryone/;
console.log(reg5.test(str)); // true ('hel' is there after that 'lo ev' is there then 'eryone' also there)
reg5 = /h?llo/; //(execption)
console.log(reg5.test(str)); //true ('h ' is there, after 'llo' there  e missing considered option)
reg5 = /et?veryone/;
console.log(reg5.test(str)); //true ('e' there 't optional' not there ' veryone ' there)
//for more than 1 * must be exactly after one character
reg5 = /Go?d/;
console.log(reg5.test(str)); //false ('G' therr , 'o optional' there ,'d' not there 'od' there)

console.log("............... escape character \ ............................");
let reg6 = /one?/;
console.log(reg6.test(str)); // true (after 'on' 'e optional')
reg6 = /an*d/; //(execption)
console.log(reg6.test(str)); //true ('an' and 'd contains 0 character) 
reg6 = /one\?/;
console.log(reg6.test(str)); //true ('one?' matches)
//for more than 1 * must be exactly after one character
reg6 = /an\*d/;
console.log(reg6.test(str)); //false ('an*d' does not matches)




