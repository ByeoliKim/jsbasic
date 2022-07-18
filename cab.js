// call, apply, bind
// fn.call(thisBindingObject, args1, args2, …);
// fn.apply(thisBindingObject, [args1, …]);
// const bindFn = fn.bind(thisBindingObject);
// bindFn(args1, args2, …);

const printInfo = function (name) {
    console.log(`ID is ${this.id}, Name is ${name}.`);
};
const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };

printInfo(kim.name);
printInfo.call(kim);
printInfo.call(hong, hong.name);
// printInfo.apply(kim, kim.name);
printInfo.apply(hong, [hong.name]);
printInfo.apply(hong, [...hong.name]); // H

const printOne = printInfo.bind(hong);
printOne('Park');

const printHong = printInfo.bind(hong);
printHong('Kil-dong');


const declareFn = function (name) {
    // if, 'use strict'?
    this.name = name;
    console.log(this, this.id, new.target, this.name, name);
};

const arrowFn = (name) => {
    this.name = name;
    console.log(this, this.id, new.target, this.name, name);
};

declareFn.call(hong, 'Lee');
arrowFn.apply(kim, ['King']);


//순수함수 (Pure Function)
//함수로서의 함수
//수학적함수
//입력이 같으면 결과도 같다
//부수 효과(side effect)가 없다!
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
const getWeekName = function(weekNo) {
    return `${weeks[weekNo]}요일`;
};
const day = new Date().getDay();
console.log(`오늘은 ${getWeekName(day)}입니다!`);

//try this!
const getNextWeek = () => {
    
    let widx = -1;
        
        fn = function() {
            widx += 1; // side-effect!
            if (widx > weeks.length) widx = 0;
            return `${weeks[widx]}요일`;
            //return widx;
        }
    
};

let cnt = 0;
const intl = setInterval(() => {
// widx += 2; // side-effect!
console.log('call', cnt, getNextWeek());
if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);

function ff() {

}