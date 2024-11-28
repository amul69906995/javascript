//concept of javascript allows us to access variable from its lexical parent even when function is returned 
const hof=(input)=>{
    let y="amul"//cannot be accessed or modified from outside variable
    //make this variable private and encapsulate the data
    //also when function is returned and value of input is changed it presist with new input(maintain state)
   return ()=>{
    let x;
    x=prompt("enter a number")
    console.log(input+x)
   }
}

const clouser=hof(4);

//hof is nothing but higher order function mean a function return a function the parent function is called higher order function
//in react function are nothing but component so higher order function is same as higher order component a higher order component takes a component and enhances it and return a new component with enhanced feature.


//  function 
function x(){
    console.log("hello")
}
//arrow 
const y=()=>{
    console.log("hello")
}
//anonymus function 
//the callback function inside is nothing but anonymus function which doesnot have a name
setTimeout(() => {
    
}, timeout);
//immediately invoked function expression
(function(){
    console.log("hello")
    })()