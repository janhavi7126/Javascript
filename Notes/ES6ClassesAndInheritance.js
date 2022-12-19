class Employee {
	constructor(name,experience,division){
	this.name = name;
	this.experience = experience;
	this.division = division ;
	}
    moto (){ 
		return `Iam ${this.name} . My company is the best.`;
	}

}

obj = new Employee('Soham','33','junior');
console.log(obj);
console.log(obj.moto());

class Programmer extends Employee{
    constructor(name,experience,division,language,git){
        super(name,experience,division);
        this.language = language;
        this.git = git;
    }

    favouriteLang(){
        if(this.language == 'python'){
            return 'python';
        }
        else{
            return 'javaScript';
        }
    }
    static add(){
        return 'Thank you';
    }
}

object2 = new Programmer('Sheetal',5,'showOff','python','dom');
object3 = new Programmer('Samyukta',2,'general','C#','vfh');

console.log(object2);
console.log(object3);
console.log(object2.favouriteLang());
console.log(object3.favouriteLang());
console.log(Programmer.add());