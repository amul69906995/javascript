const expensive = (num1, num2, num3) => {
    console.log(num1 + num2 + num3, "expensive")
}
const throttle = (fn, delay) => {
    let callFunction = true;
    return ((...args) => {
        if (callFunction) {
            fn(...args)
            callFunction = false
        }
        setTimeout(()=>{callFunction=true},delay)
    })
}

const x=throttle(expensive,100)
x(4,2,1);
x(4,2,1);
x(4,2,1);
x(4,2,1);
x(4,2,1);
x(4,2,1);
x(4,2,1);
x(4,2,1);
x(4,2,1);
x(4,2,1);
x(4,2,1);
x(4,2,1);
setTimeout(()=>{x(4,2,1)},500)
//resize,scroll , payment
// call the function if previous function occures delay(300)ms ago