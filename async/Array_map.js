

//map ex
var arr = ['foo', 'hello', 'diamond', 'A']
// 각 요소의 글자 길이값 반환
var arr2 = arr.map((v) => v.length)
console.log(arr2)	 // [3, 5, 7, 1]



//filter ex
var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.filter((v) => (v % 5 === 0))
console.log(arr2)	// [15, 395, 400, 3000]

//version 2
var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.reduce((pre, value) => {
    if (value % 5 == 0) {
        pre.push(value);
    }
    return pre;
}, []);
console.log(arr2)   


//test code 1
const fruits1 = ['apple', 'banana', 'orange'];
{
  // My
  let result = ``;
  fruits1.forEach((item, index) => {
    result += item;
    if (index < fruits1.length-1) result += `, `;
  });
  console.log(result); // > apple, banana, orange
}
{
  // Solution
  const result = fruits1.join(`, `);
  console.log(result); // > apple, banana, orange
}

//test code 2

const fruits2 = '🍎, 🥝, 🍌, 🍒';
{
  // My
  const result = [];
  for (let item of fruits2) {
    if ((item !== `,`) && (item !== ` `)) {
      result.push(item);
    }
  }
  console.log(result); // > ["🍎", "🥝", "🍌", "🍒"]
}
{
  // Solution
  const result = fruits2.split(`, `);
  console.log(result); // > ["🍎", "🥝", "🍌", "🍒"]
}
//reverse
const array1 = [1, 2, 3, 4, 5];
{
  // My
  array1.sort((a, b) => b - a);
  console.log(array1); // > [5, 4, 3, 2, 1] : 기존의 배열이 바뀜
}
{
  // Solution
  const result = array1.reverse();
  console.log(array1); // > [1, 2, 3, 4, 5] : 기존의 배열이 바뀜
  // console.log(result); // > [1, 2, 3, 4, 5] : 리턴값 존재
}
//slice
const array2 = [1, 2, 3, 4, 5];
{
  // My
  const result = array2.filter((item, index) => index > 1);
  console.log(result); // > [3, 4, 5]
  // console.log(array2); // > [1, 2, 3, 4, 5] : 기존의 배열은 변화가 없음
}
{
  // Solution
  const result = array2.slice(2, 5);
  console.log(result); // > [3, 4, 5]
  // console.log(array2); // > [1, 2, 3, 4, 5] : 기존의 배열은 변화가 없음
}

//find 
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
{
  // My Q2
  let result = {};
  for (let index in students) {
    if (students[index].score === 90) {
      result = students[index];
      break;
    }
  }
  console.log(result); // > Student {name: "C", age: 30, enrolled: true, score: 90}
}
{
  // Solution
  const result = students.find((student) => student.score === 90);
  console.log(result); // > Student {name: "C", age: 30, enrolled: true, score: 90}
}

//map
// 결과는 다음과 같아야합니다. [45, 80, 90, 66, 88]
{
  // My
  const result = [];
  students.forEach((item) => result.push(item.score));
  console.log(result); // > [45, 80, 90, 66, 88]
}
{
  // Solution
  const result = students.map((student) => student.score);
  console.log(result); // > [45, 80, 90, 66, 88]
}
//some
{
  // My
  students.forEach((item) => {
    if (item.score < 50) console.log(true); // > true
  });
}
{
  // Solution
  const result = students.some((student) => student.score < 50)
  console.log(result); // > true
  // const result2 = !students.every((student) => student.score >= 50)
  // console.log(result2);
}

{
  // My
  let result = 0;
  students.forEach((item, index) => {
    result += item.score
    if (index === students.length - 1) {
      result = result / students.length;
    }
  });
  console.log(result); // > 73.8
}
//reduce
{
  // Solution
  // const result = students.reduce((prev, curr) => {
  //   console.log(prev); // return 된 값 (콜백함수의 2번째 인자가 없으면 값은 배열의 1번째 요소)
  //   console.log(curr); // 배열의 요소 (콜백함수의 2번째 인자가 없으면 배열의 2번째 요소부터 시작)
  //   console.log(`------------------`); // 구분선..
  //   return curr; // 다음 prev의 값으로 할당됨
  // });
  const result = students.reduce((prev, curr) =>  prev += curr.score, 0); // 콜백함수의 2번째 인자가 0이므로 첫 prev의 값은 0으로 할당됨
  console.log(result / students.length); // > 73.8
}
//join
// 결과는 '45, 80, 90, 66, 88' 이어야합니다.
{
	// My
  let result = ``;
  students.forEach((item, index) => {
    result += item.score;
    if (index < students.length - 1) result += `, `
  });
  console.log(result); // > 45, 80, 90, 66, 88
}
{
  // Solution
  const result = students
    .map((student) => student.score)
    // .filter((score) => score >= 50)
    .join(`, `);
  console.log(result); // > 45, 80, 90, 66, 88
}

//오름차순
// 결과는 '45, 66, 80, 88, 90' 이어야합니다.
{
  // My
  const scoreString = `45, 80, 90, 66, 88`;
  // step 1. 배열로 변환
  const scoreStringArray = [];
  let temp = ``;
  for(let i in scoreString) {
    if (scoreString[i] === `,`) {
      scoreStringArray.push(Number(temp));
      temp = ``;
      continue;
    }
    if (scoreString[i] === ` `) continue;
    
    temp += scoreString[i];

    if (i == scoreString.length-1) scoreStringArray.push(Number(temp));
  }
  // step 2. 정렬
  scoreStringArray.sort((a, b) => {
    return a - b;
  });
  // step 3. 문자열로 변환
  let result = ``;
  scoreStringArray.forEach((item, index) => {
    result += item;
    if (index < scoreStringArray.length - 1) result += `, `
  });
  console.log(result); // > 45, 66, 80, 88, 90
}
{
  // Solution
  const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join(`, `);
  console.log(result); // > 45, 66, 80, 88, 90
}
