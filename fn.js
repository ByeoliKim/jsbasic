//220714

function hello() {
    return 'Hello World!';
}

console.log(hello());

function printFnReturnValue(fn) {
    console.log(fn.name, fn());
}
printFnReturnValue(hello);

function f(n) {
	//if (n.hasOwnProperty('id')) n.id += 1;
    if(typeof n === 'object' && Reflect.has(n, 'id')) n.id += 1;
	else n += 1;    //10 -> 11
}

let n = 10;
let nobj = { id: 10 };
f(n);   //typeof number, 순수함수
f(nobj);    //mem-address 전달, typeof object, 비 순수 함수
console.log(n, nobj);

console.log('====================');

const user = {id: 1, name: 27}
function fd1(id, name) {
    console.log(`Id is ${id}, Name is ${name}`);
}
//let {id, name} = user;
function fd2({id, name}) {
    console.log(`Id is ${id}, Name is ${name}`);
}
function fd3([id, name]) {
    console.log(`Id is ${id}, Name is ${name}`);
}
fd1(user.id, user.name);
fd2(user);

//함수형에서는 오버로딩이 존재하지 않음
//함수표현식
// const f = function f(a) {
//     return a + 100;
// }

//함수선언식
function f(a, b = 100) {
    return a + b;   //10+''
}
function f2(a, b) {
    return a + (b || 100);
}
console.log('f=', f(10, 20), f(10, ''), f2(10, ''));

console.log('====================');

const f11 = function ff(islast = false){
    console.log('f1');
    if(!islast) f11(true);
};
const f22 = function(){
    console.log('f2');
};

f11();
f22();

console.log('====================');
//즉시호출함수
(function () {
    console.log('xxx');
})();

console.log('====================');

const counter = (function() {
    let curr = 0;
    return {
        inc(n = 1) {
            curr += n;
        },
        dec(n = 1){
            curr -= n;
        },
        getCurr: function() {
            return curr;
        }
        
    };
})();

console.log('Curr=', counter.getCurr());
counter.inc();
console.log('Curr=', counter.getCurr());

counter.inc(100);
console.log('Curr=', counter.getCurr());
counter.inc(100);
console.log('Curr=', counter.getCurr());
counter.dec(50);
console.log('Curr=', counter.getCurr());

// (async function() {
//     const x = await fetch(...);
//     x.arrayBuffer...
// })();

console.log('============');

//화살표함수
const f5 = (n,m) => n * m;
const f4 = (n,m) => {
    return n*m;
}

const f3 = n => {
    //console.log('f3');
    return n * 10;
}
console.log(f5(5,2));
console.log(f4(10,10));
console.log(f3(100));


console.log('===============');
const name = 'NNNNNNN';
const obj2 = {
    name: 'ObjName',
    bark1() {
        console.log('Obj.bark=', this.name);
    },
    bark2: () => console.log('Obj.bark2=', obj2.name),
};
obj2.bark1();
obj2.bark2();

console.log('===============');
//재귀함수 (Recursive Function)
let total = 0;
for (let i=1; i<=100; i+=1) {
    total += 1;
}
console.log(total);

function rf(n) {
    if(n <= 0) {
        return 0;
    }
    return n + rf(n-1);
}
console.log('재귀함수', rf(100));

//정답
const sum1 = (n) => {
//1+2+3+4+5+6+7+8
//100 + 99 + 98 + 97 + 96
    if(n < 1) return n;
    //return n + (n-1) + (n-2) + (n-3) +...
    return n + sum1(n - 1);
}
console.log(sum1(100));

const sum2 = n => {
    if (n === 1) return n;
    return n + sum2(n-1);
}
console.log(sum2(100));