let i = 0;
if(true) {
    let i = 0;
    console.log('dfdf');
}
console.log(i);

function f() {
    let i = 1;
    {
        let i = 2;
        console.log(i);
    }
    console.log(i);
}
f();
//함수형 언어는 호이스팅이 됨

console.log('==============================');

var gg = 1;
let bb = 2;
function f1() {
  var gg = 11;
  let bb = 22;
  console.log('f1>', gg, bb); // gg, bb?
  f2();  // callable? Yes (: 함수도 호이스팅 됩니당
}

function f2() {
  console.log('f2>', gg, bb); // gg?
}

f1();

console.log('==================');
function varFn() {
    var v = 1;
    {
      var v = 2, vv = 3;
      console.log(v, vv);
    }
    console.log(v, vv); // 2, 3 
}

varFn();

function letFn() {
    let l = 1;
    {
      let l = 2
      let ll = 3;
      console.log(l, ll); // 2, 3
    }
    console.log(l); // 1
}

letFn();

//클로저는 모든 함수형 언어가 가지고 있는 가장 중요한 특성
//스코프의 속성을 활용한 상위/외부 식별자를 접근.
//(은닉성과 스코프 체인 제어)
//스코프 체인은 outerLexicalEnvironmentReference

let fn2;
{
  const privateUser = { id: 1, name: 'Hong' };
  fn2 = function() {    // fn2 = () => privateUser;
    return privateUser;     //퍼블릭한 공간에 프라이빗한 것을 스코프체인하여 연결하는 게 클로저다
  }
}

const hong = fn2();
hong.age = 30;
console.log(hong);

function getFn() {
    const pv = 5; // private variable
    return function(n) { // 내부함수(:외부에서 pv 접근)
      return pv + n;
    }
  }
  
  const defVal = 100;
  const add5Fn = getFn();
  console.log(add5Fn(30) + defVal); // 135

//옵셔널 체이닝
const obj = null; // vs   obj?.id
console.log(obj?.id);

//널(null) 병합 연산자

