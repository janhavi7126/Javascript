let students = [
    {name :"Sam",age:17},
    {name :"Ram",age:22}
]

// function addStudent(student){
//     setTimeout(function(){
//         students.push(student);
//         console.log('student have been enroll');
//     },3000);

// }

function addStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log('student have been enroll');
        callback();
    },3000);

}

function getStudent(){
    setTimeout(function(){
        let str="";
        students.forEach(function(elems){
            str+= `<li>${elems.name}</li>`;
        });
        let unorder = document.getElementById('uno');
        unorder.innerHTML = str;
        console.log('student have been fetched');
    },1000)
}

let newStud = {name:"Hari",age:20};
// addStudent(newStud);
// getStudent();
addStudent(newStud,getStudent);




// student have been fetched
// student have been enroll
// getStudent();
// undefined
// student have been fetched

// here comes callback
