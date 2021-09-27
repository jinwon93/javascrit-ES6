//ex
class MyClass {
  
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("John");
user.sayHi();  
  
