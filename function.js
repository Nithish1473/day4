
// function demo(){ 
//     console.log("function without parameters");
// }
// demo();

// function userDetails(name,age,city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// userDetails("nithish",20,"kollapur");




// //! anonymous function
// function(){
//     console.log("anonymous function");
// }
// ();



// !  function expression

// let x = function(){
//     console.log("function expression is executing");
// };
// x();

// ! IIFE
// (function(){
//     console.log("IIFE");
// })();


// !arrow function

// function demo(){
//     console.log("Helo");
// }
// demo();

// let x = ()=>console.log("Arrow function");
//     x();


// let x =(a,b) =>console.log(a+b);   
// x(5,5);

// let x=_=> {console.log("hi");
// console.log("bye");
// console.log("hello");
// }
// x();


// ??!return keyword


// function demo(a,b){
//     return a+b;
// };
// let x= demo(5,5);
// console.log(x);
// function demo(a,b){
//     console.log("Hi");
//     console.log("Good Morning");
//     return a+b;
// } 

    // console.log("Bye");


// let y= (a,b)=> a+b   //implicit return
//let a=y(10,20);
//console.log(a);


// let z=(a,b)=>{return a+b}; //explicit return
// let b=z(10,100);
// console.log(b);


// Higher order function
// function hof(a){
//     return a;
// };
// let x = hof(function(){return "Hello i am a callback function"});
// console.log(x);



// function parent(callback){
//     return Callback;
// }
// let x = parent (add(5,5));
// console.log(x);


// function add(a,b){
//     return a+b

// }


//?Closure

function x(){
    let a = 10;
    let b = "Hello";
    var user = "Nithish";
    let company = "TCS";
    const sal = 14787999;
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a,b);
};
x();






