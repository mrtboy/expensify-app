const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolve data');
    resolve("this is my second");
  }, 5000);
 
});

console.log('before');

promise.then((data)=> {
  console.log(data);
}).then(() => {
  console.log("Second one",data);
});

console.log('after');
