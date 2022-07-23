const reduce = (arr, f, initValue) => {
    if(!Array.isArray(arr)) return initValue;
    let i = 0;
    let ret = initValue ?? ((i += 1), arr[0]);  // c = (a++, b++)
    // if(!initValue && initValue !== '') {  //0, '', null, undefined 
    //     ret = arr[0];
    //     i += 1; // '' + 1 = '1'
    // }
    for(; i<arr.length; i+=1){
        ret = f(ret, arr[i]);
    }
    return ret;
};

//test case
const assertReduce = (arr, f, initValue, expVal) => {
    const myReduce = reduce(arr, f, initValue);
    console.log(
        arr,
        `${f}, ${initValue} ==> ${myReduce} : ${myReduce === expVal && '통!'
            //reduce(arr, f, initValue)
        }`
    );
};

console.timeEnd('1st');

assertReduce([1, 2, 3, 4, 5], (a, b) => a + b, undefined, 15);
assertReduce([1, 2, 3, 4, 5], (a, b) => a + b, '', '12345');
assertReduce([1, 2, 3, 4, 5], (a, b) => a + b, null, 15);

assertReduce([1, 2, 3, 4, 5], (a, b) => a * b, 1, 120);
assertReduce([2, 2, 2], (a, b) => a * b, undefined, 8);
assertReduce([3, 3, 3], (a, b) => a * b, 0, 0);
assertReduce([3, 4], (a, b) => a, undefined, 3);
assertReduce([], (a, b) => a * b, 0, 0);
assertReduce(null, (a, b) => a * b, 0, 0);

console.timeEnd('Total');


// console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
// console.log(reduce([1, 2, 3,4,5], (a, b) => a + b, ''));
// console.log(reduce([1, 2, 3,4,5], (a, b) => a + b, '12'));
// console.log(reduce([1, 2, 3,4,5], (a, b) => a + b, null));
// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));