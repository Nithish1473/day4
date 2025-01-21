// let user1="Nithish";
// let user2="ramesh";
// let user3="naresh";
// console.log(user1);
// console.log(user2);
// console.log(user3);



// let users = ["Nithish","ramesh","naresh"];
// console.log(users[1]);
// console.log(users[0]);
// for(let i = 0;i<users.length;i++){
//     console.log(users[i]);
// }


// let users = ["Nithish","ramesh","naresh","ANR"];
// // let x =users.map((user)=>{
// //     // console.log(user);
// //     return user; //!["Nithish","ramesh","naresh","ANR"];

// // });
// // console.log(x);

// let x = users.forEach((user)=>{
//     //console.log(user);
//     return user;
// });
//  console.log(x); //!undefined


// let userDetails = {
//     name:"nithish",
//     age:21,
//     company:"Amazon",
//     sal:10000,
//     details:function(){
//         return `my name is ${this.name} and i am working in ${this.company}`
//     }

// }
// console.log(userDetails);
// console.log(userDetails.name);
// console.log(userDetails.details());

// ! JSON

let userDetails ={ 
    name :"Nithish",
    age:21,
    city:"KLP"
};
console.log(userDetails);

let x = JSON.stringify(userDetails);
console.log("JSON object:"+x);
 

let y = JSON.parse(x);
console.log(y);


 