// zadaci sa časa
// task 1
var person = {
    name:"Sara",
    age:36,
    married:false,
    children:[
    {
        name:"Ana",
        age:15,

    },
    {   name:"Tamara",
        age:6,
    },
    {  name:"Jelena",
       age:8

    }
],
oldest:function() {
    var najstarijeDete=this.children[0].age;
    var max=0;
    var children1 = [];
    for (var i=0;i<this.children.length;i++) {
        if (najstarijeDete<this.children[i].age){
            najstarijeDete=this.children[i].age
            max=i;
        }
    }
     for ( var i =0; i< this.children.length;i++){
         if(i !== max){
            children1[children1.length]= this.children[i]
         }
    }
    children=children1;

    console.log(children)
    
}
     
}
person.oldest();

// task 2

var football = [
    ["Srbija","Španija","Nemačka","Italija","Francuska"],
    ["LeoMesi","TijeriAnri","DidijeDrogba","NemanjaVidić","SinišaMihajlović"],
    ["zadnjiVezni","napad","štoper","prednjiVezni","sredina"]
]
function transformToObject() {
    var footballObject = {}
    footballObject.teams = {}
    footballObject.players = {}
    footballObject.positions ={}
       for (let i = 0; i < football.length; i++) {
           footballObject.teams[i] = football[0][i];
           footballObject.players[i] = football[1][i];
           footballObject.positions[i] = football[2][i];    
       }
       console.log(footballObject)
}
transformToObject();

// task 1 from homework
/* Based on existing object:
var person = {
	name: "Mike";
	age: 28,
	married: true
}
Create a function which should change age to 34, and delete married property.
In the end console.log object
var person = {
    name:"Mike",
    age:28,
    married:true
} */
// rešenje bez funkcije
/* var person = {
	name: "Mike",
	age: 28,
	married: true
    };
    person.age=34;
    delete person.married;
    console.log(person) */

 var person = {
        name: "Mike",
        age: 28,
        married: true
        }; 
function changePerson() {
    for (var {} in person) {
        if (person.married===true) {
            delete person.married;
            person.age=34;
            
        }
    } console.log(person)
}
changePerson();

//TASK 2: 
/* Based on existing object:
var person = {
	name: "Jack";
	age: 32,
	married: true
}
Create a function which should check if person has children property, if not add it. 
Its value should be array containing two objects with children data. 
Each object should contain child name, age and gender.
 */

var person = {
	name: "Jack",
	age: 32,
	married: true
}
function findPersonsChildren() {
    var newPerson = {};
    children=[];
        if (person.children == undefined){
            person.children = [
                {
                    name:"Ana",
                    age:15,
                    gender:"fimale"
            
                },
                {   name:"Tamara",
                    age:6,
                    gender:"fimale"
            
                },
                {  name:"Jelena",
                   age:8,
                   gender:"fimale"
                }
            ];
            newPerson=person;
        }
            console.log(newPerson)
    }
            
      
findPersonsChildren();

// task 3
/* Based on existing array of objects,
Create a function which should console.log if student passed exam, result should be something like:
"Jack passed exam" or "Mike didn't pass exam"*/

var students = [ 
    {
        name: 'Mike',
        age: 28,
        passed: false
    },
    {
        name: 'Anna',
        age: 23,
        passed: true
    },
    {
        name: 'Jack',
        age: 32,
        passed: true
    },
 ];
 function checkingExames() {
     for (var i = 0; i < students.length; i++) {
         if (students[i].passed == true) {
             console.log(students[i].name + " ", "passed exam")
         }else{
             console.log(students[i].name + " ", "did not pass exam")
         }
         
     }

 }
checkingExames();

// TASK 4:
/* Based on existing array of objects:

Create a function which should repack existing data into three arrays, names, ages, and passed. 
Example of names array:

var names = ['Mike', 'Anna', 'Jack']; */

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];
function transformToArrays() {
    var studentsArray = [];
    var names = [];
    var age = [];
    var passed=[];
    for (var i = 0; i < students.length; i++) {
        names[i]= students[i].name;
        age[i] = students[i].age;
        passed[i] = students[i].passed;
    }
    console.log(names,age,passed)
}
transformToArrays();
// task 5
/* Based on existing object:

Create the other object which should inherit data from existing object. 
Then console.log age by accessing the newly created object. */

var person = {
	name: "Jack",
	age: 32,
	married: true
}

var newPerson = Object.create(person);
console.log(newPerson.age)


//TASK 6:

/* Based on existing object:

Create a method which, when called, should console.log name and age of existing object. */

var person = {
	name: "Mike",
	age: 28,
    married: true,
    findNameAndAge:function (){
        return this.name + " " + this.age;
    }
};
console.log(person.findNameAndAge())


//TASK 7:
/* Based on existing object:

var person = {};

Create a method which should create name, age and married properties in existing object, based on parameters passed in method.
*/

person.fillObject = function(){

var person = {
  fillObject: function(name,age,married) {
    console.log(person.name,person.age,person.married)
  }
}
}
person.fillObject("Mike",36,true);
console.log(person)
