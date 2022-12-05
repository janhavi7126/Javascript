let div = document.createElement("div");

div.setAttribute('style','border:2px solid black; width:154px; margin:34px; padding:23px');
div.setAttribute("id","elem");

let body = document.querySelector("body");
let firstdiv = document.getElementById("first");
let texttut = "";
let value = localStorage.getItem("text");
if(value == null){
   texttut = document.createTextNode("Click to Edit it.");
}else{
   texttut = document.createTextNode(value);
}






// div.style.backgroundColor = "red";
// div.style.width = "90%"
// div.style.height = "100px";
div.appendChild(texttut);
body.insertBefore(div,firstdiv);



let input = document.createElement("input")
input.type = "text";
input.style.backgroundColor = "red";
input.style.width = "90%"
input.style.height = "100px";
input.style.color = "#ffffff"

let text;
div.addEventListener("click",function(){

   let noOfTextAreas = document.getElementsByClassName("textarea").length;
   if(noOfTextAreas == 0){
   let html = elem.innerHTML;
   div.innerHTML = `<textarea class="form-control textarea" id="textarea" rows="3" >${html}</textarea>`
   }

   let textarea = document.getElementById("textarea");
   textarea.addEventListener("blur",function(){
      elem.innerHTML = textarea.value;
      localStorage.setItem("text",textarea.value)
   });

   // body.replaceChild(input,div);
   // text = document.createTextNode(input.value);
   

});






// input.addEventListener("blur",function(e){
//     body.replaceChild(div,input);
//     console.log(text);
//     div.appendChild(text);
    
//  });

 





console.log(body)