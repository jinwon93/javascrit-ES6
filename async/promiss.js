//Promiss 자바스트립트안의 내장되있는 object
//State(상태)
//Producer vs Comsumer

//Producer
const promiss = new Promise((resolve, reject) => {
  //heavy work
  setTimeout(() => {
    //resolve
    //resolve('jin');
    //reject
    reject(new Error("no network"));
  }, 2000);
});

//Consumer : then . catch , finally

promiss
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=> {
      console.log('finally');
  });
