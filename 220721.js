//콜백함수
// for (let i = 0; i < 5; i++) {      // ⇒ ⇒ ⇒
//     setTimeout(() => console.log(i), 1000); // (나)
// }
//콜백 함수를 화살표 함수로 사용하면 this가 외부(전역/상위) 객체를 가리킨다.

//고차함수
//1급 객체로서의 함수, 함수가 변수가 될 수도 있고, 매개변수도 될 수 있고, 리턴값으로의 반환값이 될 수도 있고...

//reduce
//[1,2,3].reduce((sum,a ) => sum += a,0);

//const reduce = (arr, cb, 0) => { ...cb(a + b)}
//const reduce = (배열, 콜백함수, 초기값) => { …cb()

//trythis
// const sp = (function() {
//     const reduceSample = [1,2,3,4,5];
//     let sum = 0;
//     reduceSample.forEach(n => {
//         sum += n;
//     });
//     console.log(sum);
// })();
const reduce = (arr, cb, acc) => {
    // if(!Array.isArray(arr)) {
    //     console.log('~~', arr);
    //     return;
    // }
    //console.log(acc);
    let i = acc || acc === '' ? 0 : 1;
    //acc = acc ?? ((i += 1),arr[0]);
    //console.log(i);
    let curr = acc || acc === '' ? acc : arr[0];
    //console.log(curr);
    for(; i<arr.length; i++) {
        curr = cb(curr, arr[i]);
    }
    return curr;
};
console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1));
console.log(reduce([2, 2, 2], (a, b) => a * b));
console.log(reduce([3, 3, 3], (a, b) => a * b, 0));