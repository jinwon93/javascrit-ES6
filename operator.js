
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

let name2 = 'jin';
// operators 
if (name2 === "jin") {
    console.log('hi jin');
}else if(name2 === "won") {
    console.log('hi won');
}else{
    console.log('not!!');
}


// Ternary operator 
// 첫번째 name2이 jin이 맞다면 ? yes를 실행하고 거짓이면 yes옆에 : 다음에 있는 no를 실행해라
console.log(name2 === 'jin' ? 'yes':'no');

const Browser = 'Chrome';

switch (Browser) {
    case 'IE':
        console.log('get out');
        break;
    case 'Chrome':
    case 'Safari':
        console.log('hellow');
        break;
    case 'FireFox':
        console.log('nice');
        break
    default:
        console.log('bye');
        break;
}

// Loops 
let i = 4;
while (i > 0) {
    console.log(`while:${i}`);
    i--;
}

// for Loop 
for (i = 0; i < 4; i++) {
    console.log(`for:${i}`);
}
// 지역변수 설정가능 !! 
for (let i = 0; i < 3; i++) {
    console.log(`for:${i}`);   
}
//nested Loop 
for (let i = 0; i < array.length; i++) {
    const element = array[i];
}
