let a = document.scripts;
let b = document.links;

let href;
Array.from(b).forEach(function(elems){
    href = elems.href;
    if (href.includes("script")) {
        console.log(href);
    }
})



console.log(a);
console.log(b);



// let main = document.createElement("div");
// console.log(main);

// let body = document.querySelector("body");
// console.log(body)
// body.appendChild(main)

// let heading = document.createElement("h1");
// let t1 = document.createTextNode("Go to CodeWithHarry")
// let an = document.createElement("a")
// an.setAttribute("href","https://www.codewithHarry.com")


// heading.appendChild(t1);
// an.appendChild(heading);
// main.appendChild(an);

