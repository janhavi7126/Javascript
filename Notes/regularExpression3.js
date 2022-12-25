//Character Sets
let str = "hello"
let reg = /hello/;
console.log(reg.test(str));//true
//................can be a to z any character................
str = "hello"
reg = /h[a-z]llo/; 
console.log(reg.test(str));//true
str = "h3llo"
console.log(reg.test(str)); //false
str = "hllo"
console.log(reg.test(str)); //false
str = "h llo"
console.log(reg.test(str)); //false
str = "hzllo"
console.log(reg.test(str)); //true

///////////////////////////////////////////////////
//................can be only e character................
reg = /h[e]llo/;
str = "hzllo"
console.log(reg.test(str)); //false

//................can be z ,  e  , l character................
reg = /h[zel]llo/;
str = "hzllo"
console.log(reg.test(str)); //true

//////////////////////////////////////////////
//................can be a to z any character but not zel................
reg = /h[^zel]llo/;
str = "hzllo"
console.log(reg.test(str)); //false
reg = /h[^zel]llo/;
str = "hello"
console.log(reg.test(str)); //false
reg = /h[^zel]llo/;
str = "hallo"
console.log(reg.test(str)); //false

//................for 2 or more character................

reg = /h[a-z][a-z]l[a-z]lo/; 
str = "habltlo"
console.log(reg.test(str));//true ab   t
str = "habcltlo"
console.log(reg.test(str));//false abc  t

//................CAPITAL [A-Z]................
console.log('................CAPITAL [A-Z]................');

reg = /h[a-z][A-Z]l[a-zA-Z]lo/; 
str = "habltlo"
console.log(reg.test(str));//false
str = "haBlTlo"
console.log(reg.test(str));//true
str = "haBltlo"
console.log(reg.test(str));//true
str = "hAblTlo"
console.log(reg.test(str));//false
//................Number [0-1]................

console.log('................Number [0-1]...............');
reg = /h[a-z][A-Z]l[a-zA-Z0-9]lo/; 
str = "habl8lo"
console.log(reg.test(str));//false
str = "haBlTlo"
console.log(reg.test(str));//true
str = "haBltlo"
console.log(reg.test(str));//true

console.log('................Quantifiers...............');
let reg2 = /hel{2}o/; // 2 times
let str2 = "hello";
console.log(reg2.test(str2));//true

reg2 = /hel{0,2}o/; // 0 ,1 ,2 times

str2 = "heo";
console.log(reg2.test(str2));//true
str2 = "helo";
console.log(reg2.test(str2));//true

str2 = "helllo";
console.log(reg2.test(str2));//false

console.log('................Groupings...............');

let reg3 = /hel(to){6}lo/; // 6 times
let str3 = "heltotototototolo";
console.log(reg3.test(str3));//true
str3 = "hello";
console.log(reg3.test(str3));//false

reg3 = /l(to){2,6}lo/
str3 = "heltotototolo";
console.log(reg3.test(str3));//true
str3 = "heltolo";
console.log(reg3.test(str3));//false
str3 = "tototolo";
console.log(reg3.test(str3));//false l 
