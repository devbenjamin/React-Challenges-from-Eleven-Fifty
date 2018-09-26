// class User {
//     constructor(name) {
//         this.name = name;
//         this.type = "Trial User"
//     }
//     greet() {
//         console.log('Welcome back, ' + this.name);
//     }
//     status () {
//         console.log('Current status: ' + this.type);
//     }
// }

// let anonDude = new User("Anonymous dude");

// anonDude.greet();
// anonDude.status();

// var anonLady = new User("Anopnymous lady");

// anonLady.greet();
// anonLady.status();

// let jeff = new User("Jeff");

// jeff.greet();
// jeff.status();
// jeff.name = 'bob';

// console.log(jeff.name);

class User {
    constructor(username, password) {
        this.name = username;
        this.password = true;
        this.type = 'Trial User';
    }
    greet() {
        console.log('Welcome back,' +this.name);
    }
    status() {
        console.log('Current status: ' + this.type);
    }
}

let anonDude =  new User("Anonymous");
anonDude.greet();
console.log(anonDude.password);

class BronzeLevelUser extends User {
    constructor(username, password, ccinfo) {
    super(username);
    this.type = "Bronze User";
}}

var bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "4242424242424242");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy.password);



