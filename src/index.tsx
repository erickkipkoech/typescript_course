//Basic Types
//primitive types
let id: number = 5;
let company: string = "Acme Corps";
let isPublished: boolean = true;
let age: number;
age = 30;

//any
let x: any = "Hello";
x = true;

//array declaration
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

//Tuple
let person: [number, boolean, string] = [2, true, "Hello"];
//Tuple Array
let employee: [number, string][];
employee = [
  [1, "Erick"],
  [2, "Brad"],
  [3, "Giana"],
];

//union
let pid: number | string = 22;

//Enum-allows us to defne set of named constants(numeric or string)
//the values of the enum contents are 0 by default but can be assigned
enum Direction1 {
  Up = 1,
  Left,
  Down,
  Right,
}

console.log(Direction1.Left);

enum Direction2 {
  Up = "Up",
  Left = "Left",
  Down = "Down",
  Right = "Right",
}
console.log(Direction2.Right);

//Objects
/*const user: {
    id:number,
    name:string
} = {
  id: 1,
  name: "John",
};*/
//is same as the one below
type User={
    id:number,
    name:string,
}

const user: User={
    id:1,
    name:"John"
}

//Type assertion- Telling a compiler that we want to treat an entity as a differnt type

let cid:any=1
let customerId=cid as number


//Functions
function addNumber(x:number,y:number):number{
    return x+y;
}

console.log(addNumber(1,2));

//Void
function log(message: string|number):void{
    console.log(message);
}

log("Hello");

//Interfaces- similar to objects, are custom objects 

interface userInterface{
   readonly id:number,
    name:string,
    age?:number,
}
const user1:userInterface={
    id:1,
    name:"John"
}

//using readonly disallows one to change a value
//user1.id=5;

//interface with a function
interface MathFunc{
    (x:number,y:number):number
}

const add:MathFunc=(x:number,y:number):number=>x+y;
const subtract:MathFunc=(x:number,y:number):number=>x-y;

//classes
/*class Person{
    id:number;
    name:string;

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;

    }
//methods
    register(){
        return `${this.name} is registered`
    }

}

const eric=new Person(1,"Eric Kipkoech");
const brad=new Person(2, "Brad Traversy");

console.log(eric,brad);

console.log(eric.register());
*/
//protected, private access modifiers- the values can only be accessed inside a class or its extension


interface PersonInterface{
    id:number,
    name:string,
    register():string
}

class Person implements PersonInterface{
    id:number
    name:string

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    register() {
        return `${this.name} is registered`
    }
}

const eric=new Person(1,"Eric Kipkoech");
const brad=new Person(2, "Brad Traversy");

console.log(eric,brad);

console.log(eric.register());


//extends/subclasses
class Employee extends Person{
    position:string;

    constructor(id:number,name:string,position:string){
        super(id,name);
        this.position=position;
    }
}

const emp=new Employee(3,"Erick Kipkoech","Manager");

console.log(emp.register());

//Generics
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items);
}

let numArrays=getArray<number>([1,2,3,4,5]);
let strArrays=getArray<string>(["ERick","Brad","John"]);

numArrays.push(2)