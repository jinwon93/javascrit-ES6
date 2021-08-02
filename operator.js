
// Logical operators || (or) , && (and) , ! (not)
const value1 = true;
const value2 = 4 < 2 ;


// || or  value 3개중에 하나라도 true이면 실행
// 주의할점 !!!!! value1이 참이라면 바로실행 그래서 제일 무거운 함수나 메모리가 많이 차지하는 것들은 첫번쨰에
//선언하지 않도록 주의!!!
console.log(`or: ${value1 || value2 || check()}`);


// && and
console.log(`and:${value1 && value2 && check()}`);



function check() {
    for (let i = 0; i < 10; i++) {
        console.log('😎');
    }
    return true;
}