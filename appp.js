//var,let,const

/*var name ="Viviane Sop";
console.log(name);
name='Laure Mamchie';
console.log(name);


//initialize var

var greeting;
console.log(greeting);
greeting='Hello';
console.log(greeting);*/


//Let

/*let name ="Viviane Sop";
console.log(name);
name='Laure Mamchie';
console.log(name);*/

//const
/*const name ='Cesar';
console.log(name);

const surname;
surname = 'Viviane';
console.log(surname);

const person ={
    name :'John',
    age:30
    
}

person.name='Sarah';
person.age =35;
console.log(person);

const numbers = [1,2,3,4,5,6];
numbers.push(7,8);
console.log(numbers);

const num = {a:1,b:2,c:3,d:4};
console.log(num);*/



//PRIMITIVES TYPES 
//const
//String
/*const name ='John';
console.log(typeof name);
//number
const age =78;
console.log(typeof age);
//boolean
var kids = true;
console.log(typeof kids);
//null
const surname =null;
console.log(typeof surname);
//undefined
let first;
console.log(typeof first);
//Symbol
const sym = Symbol();
console.log(typeof sym);

// REFERENCES TYPES-OBJECTS
//Arrays
const hobbies =['Movies','Musicss','Dance'];
console.log(typeof hobbies);
//OBJECT LITERAL
const address ={
    state: 'Cape Town',
    city: 'Parow'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);


//Number to String
let val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length);

//Boolean to String
let vul = String(true);
console.log(vul);
console.log(typeof vul);
console.log(vul.length);

//Date to String
let vil =String(new Date());
console.log(vil);
console.log(typeof vil);
console.log(vil.length);

//Array to String
let vol = String([1,2,3,4,5]);
console.log(vol);
console.log(typeof vol);
console.log(vol.length);

//toString 
val= (5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);



//String to Number
var vl =Number('4');
console.log(vl);
console.log(typeof vl);
console.log(vl.toFixed(3));

//String to Boolean
var vt =Boolean('true');
console.log(vt);
console.log(typeof vt);*/



//console.log('Hello Node js');

function sum(a,b)
{
return a+b;
}
const total = sum(20,30);
console.log('Total:',total);
