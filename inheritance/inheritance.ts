class Person {
    name: String;
    constructor(name: String) {
        this.name = name;
    }
    dance() {
        console.log(this.name + " is dancing");
    }
}

var bran = new Person("Bran");
bran.dance();

class AwesomePerson extends Person {
    dance() {
        console.log("SO AWESOME!");
        super.dance();
    }
}

var rob = new AwesomePerson("Rob");
rob.dance();