console.log('hello world');

var a = 1;
var b = a + 10;
let a2= 3;

//const d = new _Dog();

const s = 'xxxx';
const S = new String('xxxx');   //6200 ~ 6300
//s = 'yyyy';
//s = { id:5, name: 'kim' }; //6200 ~ 6302
//console.log(s, S);

const f1 = function () {
    //const 변수 선언 표현식
    console.log('this is f1');
}

var j = { id:2, f: function() {} };

function f() {} //함수를 정의하는 함수 표현식

let s1 = new String('xxx');
let s2 = 'xxx';
console.log(s1 == s2, s1 === s2, typeof s1, typeof s2);

const x = 'My name is Kim';
console.log(x);

const sy1 =  Symbol('sy');
const sy2 =  Symbol('sy');
console.log(sy1, sy1 === sy2, sy1.description === sy2.description);

const b1 = 1;
const b2 = Boolean(1);
console.log(b1, b2, !b1, !!b1);

//null 과 undefined
//console.log(x5); //undefined는 메모리 할당은 x , null은 메모리 주소까지 할당된 상태

a = 1;
b = a;
a = 2;
console.log(b);

o1 = { id:1 };
o2 =  o1;
o1.id = 2;
console.log(o2.id);

const u = 'hong';   //primitive
u.age = 30; //error? No! (: 오브젝트 강제형변환) 30은 어디든 바인딩되지 않는다
console.log(u.age, typeof u); // No Error! But,  undefined

//u = 7;
//console.log(u);

let i7 = 1;
console.log(i7);
//let i = 1; 

console.log(x7);
var x7 = 1;
/*
var x7;
consol.log(x7);
x7 = 1;
*/

// console.log(x1); // (가)
// console.log(y1); // (나)에서 오류가 난다
// console.log(x1, y1); //es6에서는 선언문을 안 적으면 자동으로 let으로 적용된다

const x1 = 5;
console.log(3 - -x1);
console.log(3 - -x1);
console.log(10 + -x1 * 2);
console.log(-10 * -x1 * -2);