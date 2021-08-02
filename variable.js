

// Variable re(read/write) 메모리에 읽고 쓰기 가능하다
// let  
// const r(read) 읽기만

let globaiName = "gloBal name"; // 전역변수
{
    //block scope block 내부에서만 선언
    let name = "jin";
    console.log(name);
    const name2 = "jin2";
    console.log(name2);
    console.log(globaiName);
}
console.log(globaiName);

//var  ( don't ever use this!) 변수 선언전에 값을 할당할수있어 사용하지 않는것이 좋음
//var hoisting!!! (어디에 선언했나  상관없이 항상 제일 선언을 위로 끌어주는것 )
//has no block scope (블록스코프를 무시한다)
age = 4;
var age;

