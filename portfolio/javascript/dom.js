// document.body.innerText="Hello World";
// document.body.style="color:red";
// setTimeout(()=>{                                         //this function is called after 5 seconds
//     document.body.innerText="BIT";
//     document.body.style="color:violet";
// },5000)                      


// const divElement = document.getElementById('hello');
// //divElement.innerText = "HELLO"
// divElement.innerHTML='<p>bracket</p>'
// console.log(divElement);


// const pTag = document.getElementsByTagName('h1');
// console.log(pTag);


// const li = document.getElementsByTagName('li');       //if we iterate like this if there are two ol tags then all the li inside both will be iterated.
// let x=0;
// for(const eachLi of li){                 //iterating through list objects and printing values to each list object
//     eachLi.innerText=x++;
// }
// console.log(Array.isArray(li));


// const body = document.getElementsByTagName('body')[0];        
// console.log(body.childNodes);   //returs desc of everyline in body
// console.log(body.children);     //returns only elements inside body


// const changeOl = document.getElementById('changable');        //only particular li of ol is selected and iterated
// const li = changeOl.children;
// let x=0;
// for(const eachLi of li){
//     eachLi.innerText=x++;
//     eachLi.classList.add('list');
// }


// const OlChange = () =>{
//     const changeOl = document.getElementById('changable');        //only particular li of ol is selected and iterated
//     const li = changeOl.children;
//     let x=0;
//     for(const eachLi of li){
//         eachLi.classList.toggle('list');
//     }
// }
// //setInterval(OlChange,1000);
// const changecolorbtn = document.getElementById('primary');       //changes the color when button is clicker
// //element.addEventListener(action,callback);                    //syntax for below line
// changecolorbtn.addEventListener('click',OlChange);
// const changeBtn = () =>{
//     changecolorbtn.classList.toggle('btn');
// };
// changecolorbtn.addEventListener('mouseover',changeBtn);
// changecolorbtn.addEventListener('mouseout',changeBtn);



//forms
const loginBtn = document.getElementById('login-btn');
const loginForm = document.getElementById('login-form');
console.log(loginBtn,loginForm);

loginBtn.addEventListener('click',(event)=>{
    console.log('call from button');
})

loginForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const username_element = document.getElementById('username').value;
    const password_element = document.getElementById('password').value;
    console.log(username_element,password_element);     //displaying username and password received from user and displaying in console
})


