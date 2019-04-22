class Man{
    occupation = 'IT';
    constructor(){
        this.fName = "Avner";
    }
    init(name, birthDate){
        this.name = name;
        this.birthDate = birthDate;
    }
    printInfo(){
        console.log(this.name);
        console.log(this.birthDate);
        //console.log(this.fName);
    }
}

var man = new Man();
man.init("Avner", "10/01/81");
console.log(man.name);
console.log(man.birthDate);
console.log(man.occupation);
console.dir(man);
man.printInfo();

var avner = {
    name: 'Avner',
    birthYear: 1981,
    occupation: 'IT',
    hobbies: ['ps', 'basketball', 'ski'],
    getAge: function(year){
        //console.log('Avner\'s hobbies are: ' + this.hobbies.join(', '));
        return year - this.birthYear;
    }
};

avner.name = 38;
avner.hobbies.splice(1,2, 'TaV');
console.log(avner.getAge(2019));
//console.log(avner.hobbies[1]);
//console.dir(avner);


/*
var marksHeight = 1.53;
var johnsHeight = 1.85;
var marksMass = 65;
var johnsMass = 87;

var marksBMI = marksMass / (marksHeight * marksHeight);
var johnsBMI = johnsMass / (johnsHeight * johnsHeight);

console.log('Mark\'s BMI: ' + marksBMI);
console.log('John\'s BMI: ' + johnsBMI);
console.log('is Mark\'s BMI higher than John\'s? ' + marksBMI > johnsBMI)

var age = 7;
var age1 = 1;
var age2 = 5;
var age3 = 10;

switch(true){
    case age < 5:
    console.log(age1);
    break;
    case age == 5:
    console.log(age2);
    break;
    case age > 5:
    console.log(age3);
    break;
    default:
    console.log('no age');
}
console.log(stam1);
let stam1 = 1;
var stam2 = 2;
function stam(){
    console.log(stam1);
}

stam();
*/