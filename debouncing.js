let count = 0;
const getData=(num1,num2,num3) =>{
    console.log("get data called ", num1+num2+num3,count++)
}
// takes function and delay and return a function
const debouncedFun = (fn, delay) => {
    let timer;
    return (
         (...args) =>{
            //let context = this;
            console.log(args)
            if (timer) {
               // console.log(timer)
                clearTimeout(timer);
            }
            timer = setTimeout(() => { fn(...args) }, delay)
        }
    )
}

const getDataDebouncedVersion=debouncedFun(getData,100);
getDataDebouncedVersion(5,4,3);
getDataDebouncedVersion(5,4,3);
getDataDebouncedVersion(5,4,3);
getDataDebouncedVersion(5,4,3);
//call function if delay between 2 events is >300ms.
//example search bar , payment



 

  

