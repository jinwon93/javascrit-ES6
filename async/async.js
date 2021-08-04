//asyns & await
// clear style promiss


//1.asyns
/*function fetchUesr() {
    return new Promise((resolve,reject)=>{
        resolve('jkm');
    });
}*/
async function fetchUesr() {
    return 'win';
}
const user = fetchUesr();
user.then(console.log);
console.log(user);


// await
function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(1000);
    return `🍎`;
  }
  async function getBanana() {
    await delay(2000);
    return `🍌`;
  }
  
  // 방법 1: 무식한 코드
  async function pickFruits() {
    // 프로미스 객체는 선언 즉시 바로 실행됨
    // getApple과 getBanana는 병렬(독립적)로 실행됨
    const applePromise = getApple();
    const bananaPromise = getBanana();
    // 동기화
    const apple = await applePromise; 
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  }
  pickFruits().then(result => console.log(result));
  
  // 방법 2: Promise APIs 사용
  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => {
      return fruits.join(` + `);
    });
      // return Promise.all([getApple(), getBanana()]);
  }
  pickAllFruits().then(console.log);
  
  
  // 번외: 비동기 처리중 먼저 리턴하는 녀석만 출력
  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
  }
  pickOnlyOne().then(console.log);