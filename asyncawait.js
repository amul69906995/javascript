
//bydefault async function return a promise
async function fun1() {
    return 20
}
console.log(fun1())
fun1().then(val=>console.log("line 7",val))

async function fun2(){
  const value=await fun1();//wait until promise is resolved till then move out of async and run other code
  console.log("line 11",value)
}
fun2()
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(millis);
        }, millis);
    });
}
let promisefun=sleep(10000);
console.log(promisefun);
promisefun.then(v=>console.log("value",v));

// line 6 line 21 line 7 line 11 line 22
//event loop
//microtask and macrotack queue