//Shorthand character classes

//1) \w word character ( '_' or alphabet or number ) only 1 char
let reg = /he\wllo/
str = "Good Morning hegllo";
console.log(reg.test(str));//true  g
str = "Good Morning he*llo";
console.log(reg.test(str));//false *
str = "Good Morning he_llo";
console.log(reg.test(str));//true _
str = "Good Morning he123_llo";
console.log(reg.test(str));//false 123_


//2) \w+ word character ( '_'s or alphabet s or number s)plural
let reg2 = /he\w+llo/
str = "Good Morning he_2_llo";
console.log(reg2.test(str));//true _2_
str = "Good Morning he g llo";
console.log(reg2.test(str));//false space g space
str = "Good Morning heBYllo";
console.log(reg2.test(str));//true BY
reg2 = /\w+llo/
str = "Good Morning%heBYollo";
console.log(reg2.test(str));//true did not specified start

//3) \W one Non word character (no '_' or no alphabet or no number)
let reg3 = /he\Wllo/
str = "Good Morning hegllo";
console.log(reg3.test(str));//true  g   false
str = "Good Morning he*llo";
console.log(reg3.test(str));//false *   true
str = "Good Morning he_llo";
console.log(reg3.test(str));//true _    false
str = "Good Morning he123_llo";
console.log(reg3.test(str));//false 123_  false bcoz W only checks for one char _ or 1 is in wthats y false


//4) \W+ word character ( no '_'s or no  alphabet s or no number s)plural more than one non word character
let reg4 = /he\W+llo/
str = "Good Morning he_2_llo";
console.log(reg4.test(str));//true _2_ false
str = "Good Morning he   llo";
console.log(reg4.test(str));//false space g space false as no g  .. true for space space space 
str = "Good Morning heBYllo";
console.log(reg4.test(str));//true BY false
reg2 = /\w+llo/
str = "Good Morning%heBYollo";
console.log(reg4.test(str));//true did not specified start false

//5) \d one digit 
let reg5 = /\d456/
str = "hsbsjsxj hahah  7456 hhbb"
console.log(reg5.test(str));//true
//\d more than  one digit
reg5 = /\d+456/
str = "hsbsjsxj hahah 77456 hhbb"
console.log(reg5.test(str));//true
str = "hsbsjsxj hahah 456 hhbb"
console.log(reg5.test(str));//false
str = "hsbsjsxj hahah 7745 hhbb"
console.log(reg5.test(str));//false

//6) \D non digit 
 
let reg6 = /\D456/
str = "hsbsjsxj hahah  7456 hhbb"
console.log(reg6.test(str));//false
str = "hsbsjsxj hahah  _456 hhbb"
console.log(reg6.test(str));//true
// \d more than  one digit
reg6 = /\D+456/
str = "hsbsjsxj hahah 77456 hhbb"
console.log(reg6.test(str));//false
str = "hsbsjsxj hahah f456 hhbb"
console.log(reg6.test(str));//true
str = "hsbsjsxj hahah WR456 hhbb"
console.log(reg6.test(str));//true

//white space character \s one space or tab
reg6 = /yo\sps/;
str = "hsbsjsxj yo ps456 hhbb";
console.log(reg6.test(str));//true
str = "hsbsjsxj yo\tps456 hhbb";
console.log(reg6.test(str));//true
str = "hsbsjsxj yops456 hhbb";
console.log(reg6.test(str));//false
// \s+ more than one or one white space character
reg6 = /yo\s+ps/;
str = "hsbsjsxj yo   ps456 hhbb";
console.log(reg6.test(str));//true
str = "hsbsjsxj yo\t\t\tps456 hhbb";
console.log(reg6.test(str));//true
str = "hsbsjsxj yops456 hhbb";
console.log(reg6.test(str));//false

//Non white space character \S one space or Non tab
reg6 = /yo\Sps/;
str = "hsbsjsxj yo ps456 hhbb";
console.log(reg6.test(str));//true false
str = "hsbsjsxj yo\tps456 hhbb";  
console.log(reg6.test(str));//true false
str = "hsbsjsxj yo3ps456 hhbb"; 
console.log(reg6.test(str));//false true

reg6 = /yo\S+ps/;
str = "hsbsjsxj yo   ps456 hhbb";
console.log(reg6.test(str));//true  false
str = "hsbsjsxj yo\t\t\tps456 hhbb";
console.log(reg6.test(str));//true  false
str = "hsbsjsxj yoAps456 hhbb"; 
console.log(reg6.test(str));//false true

// Word Boundary \b
reg6 = /yo\b/;
str = "hsbsjsxj yo   ps456 hhbb";
console.log(reg6.test(str));//true   
str = "hsbsjsxj yops456 hhbb";
console.log(reg6.test(str));//false
  
//Assertions 
reg6 = /yo(?=b)/;// b should be after yo
str = "hsbsjsxj yo bps456 hhbb";
console.log(reg6.test(str));//false   
str = "hsbsjsxj yobps456 hhbb";
console.log(reg6.test(str));//true

reg6 = /yo(?!b)/;// b should not be after yo
str = "hsbsjsxj yo bps456 hhbb";
console.log(reg6.test(str));//true   
str = "hsbsjsxj yobps456 hhbb";
console.log(reg6.test(str));//false