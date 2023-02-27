
import abcd,{ getParamById} from "./utilities.js";    //.js extension should be given   //default functions should be giben outside {} set brackets   //default functions can be imported with anyname
// Infinity, -Infinity, NaN, Float, number --> comes under number type
//(number/String) is NaN

//number
const x=0;
console.log(x);

//string
//strings can be given inside double quotes or single quotes or backtick
const str='hello ' +x+  ' world';
console.log(str);


const back = `hell0 
hello
hello
hello
hello
hello`;
console.log(back);             //contents inside backtick(``) displays with the same indendation that we have specified

const a = `hello ${
    (x===0)? "BIT":"Krishna"
} world`;
console.log(a);

//BigInt
const xtr=10n;
console.log(typeof xtr); //bigint

//null
let xrt={};             //object is declared but not initialized      

//undefined
let unde;
console.log(unde);

//object
const user={
    name:"nithya",
    age:20,
    college:"BIT",
    "first name":'name'          //if param name should be created with space then give inside quotes
}
console.log(user);
console.log(user['first name']);    //to access the param name with space access it with [''] symbol
user.address='Udumalpet';           //to add new param inside already created object
console.log(user);
delete user.name;                   //to delete a key value pair from the object
console.log(user);

//how to freeze the object
// function add(num1,num2){              //normal function
//     return num1+num2;
// }
const freezed_user=Object.freeze({           //freeze function is inside Object class
    name:"nithya",
    age:20,
    college:"BIT",
    "first name":'name', 
    //sum:add,                            //normal function
    // sum:(num1,num2) => num1+num2,          //arrow function
    sum:(num1,num2)=>{                      //funtion to add two numbers only if both the inputs are numbers otherwise say invalid number
        if(typeof num1 !== 'number' || typeof num2 !== 'number') return 'INVALID NUMBER'
        return num1+num2
    }

});
// freezed_user.address="Udumalpet";
// delete freezed_user.name;
console.log(freezed_user.sum(10,20));            //if we make an object to freeze we cannot add or delete the key value pair and also if we try to do so no error will occur and no change will happen in object.


const nuser=Object.entries({             //entries function will make the object to 2D array     
    name:"nithya",
    age:20,
    college:"BIT",
    "first name":'name'          
});
console.log(nuser);


//filter,find,findindex,splice,push,pop,shift,unshift
let age = [10,30,40,50];
let result=age.filter(validateage);         //filter function
function validateage(age){
    return age>18;
}
console.log(result);

let resultfind=age.find(validateage);         //find function -- returns only the first value that satisifies the condition
console.log(resultfind);

let resultfindindex=age.findIndex(validateage);      //findindex function --  returns only the index of fisrt value that satisfies the condition
console.log(resultfindindex);

const name=['Nithya','sri','priya','anu'];
let resultsplice = name.splice(1,1,'sree');     //splice function is used to remove and/or add new values. 1st argument specifies the index to perform change. 2nd argument specifies the no of elements to be removed from the index specified.3rd argument specifies the element to be added in the specified position
console.log(name);

const arr=['dog','cat','snake'];
arr.push('fish','tiger');           //push function adds new elements to the end of array
console.log(arr);

let resultpop = arr.pop();
console.log(resultpop);

let resultshift= arr.shift();                    //shift removes first element of the array and returns the removed element
console.log(resultshift);

let arr1=['kkkk','nnnnn','jjjjj'];
arr1.unshift('aaaa','qqqqq');
console.log(arr1);


const plus=(num1 =0,num2=0) => num1+num2;     //default value should be given as 0. if no value is passes we will get Nan. WE arenot able to handle NaN so set default value as 0.
const subtract = (num1,num2) => num1-num2;
const multiply = (num1,num2) => num1*num2;
const division = (num1,num2) => num1/num2;

//higher order function - function receiving another function as argument and returning a function.
//callback function -  passing a function as parameter is called callback function

//Higher order function - it receives function as rgument
const calculator = (num1,num2,callback) =>{
    return callback(num1,num2);
}
console.log(calculator(10,20,plus)); //30


//Array
const arr2=[1,'hello',true,()=>10,{name:'nithya'}];
console.log(arr2[4]);

const arr3=[2,3,4,5,6].map((num)=>num*5);
console.log(arr3);


const arrofobj = [
    {
        "userid":1,
        "id":2,
        "title":"hhhhhhh",
        "completed":true
    },
    {
        "userid":1,
        "id":3,
        "title":"ddddddd",
        "completed":false
    },
    {
        "userid":1,
        "id":7,
        "title":"sssssss",
        "completed":true},
    {
        "userid":1,
        "id":8,
        "title":"yyyyyyy",
        "completed":true
    },
    {
        "userid":1,
        "id":10,
        "title":"sssssss",
        "completed":false
    }];
const title = arrofobj.map((param)=>param.title);        //printing titles in an array
console.log(title);

const getid3 = arrofobj.find((eachitem)=>eachitem.id===3);          //getting object with id 3 ------ returns firstmatch
console.log(getid3);

const getuserid = arrofobj.filter((eachitem)=>eachitem.userid===1);
console.log(getuserid);

const newobj = {"userid":2,"id":0,"title":"hhhhhh","completed":false};
arrofobj.push(newobj);
console.log(arrofobj);
arrofobj.pop();
console.log(arrofobj);


//object destructuring
const obj={
    name:"nithya",
    age:20,
    address:"UDT"
}
//let username = obj.name;
let {name:username}=obj; //object destructuring ---- this line is same as before line.
console.log(username);

let {
    name:uname,
    age:myage,
    address,
    dom
}=obj;
console.log(uname,myage,address,dom);


//Array destructuring
const array=[1,2,3,4,5];
//let arrvalue = array[3];
let [,b,c,d,e]=array;     //here b maps to 2nd ele of array, c maps to 3rd ele of array, d maps to 4th ele of arr and e maps to 5th ele of array.
let [m,n,o]=array;     
console.log(b,c,d,e);
console.log(m,n,o);


//Modules
console.log(getParamById(3));
console.log(abcd());







