
// class : template
class Person{
    //constructor
    constructor (name,age){
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        console.log(`${this.name}:hellow`);
    }
}

const jin = new Person('jin',29);
console.log(jin.name,jin.age);
jin.speak();


// Getter and Sertter

class User{
    constructor(FirstName,LastName,age){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }

    set age(value){
        this._age = valu < 0 ? 0 : value;
    }
}


const user = new User('jin','won',-1);
console.log(user.age);