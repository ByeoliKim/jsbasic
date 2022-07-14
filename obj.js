const user = {
    '': 1,           // OK
    ' ': 1,          // OK
    123: 1,          // OK?        cf. user[123] * 10 = ?
    true: 1,         // OK?        cf. user[false] = 0
    'id': 1,         // OK?
    id: 2,           // user.id ? 2
    [`name`]: 'Hong',  // OK? No     cf. user[`name`] = 'Hong'; // OK
    [Symbol()]: 'Hong', // OK?       cf. s = Symbol(); user[s] = 9; // OK
    'my-friends': ['Han', 'Kim'], // OK?
    y0: '000',       // OK?
    getInfo: () => `${this.id}-${this.name}`,       // OK?
    getInfo() { 
        return `${this.id}-${this.name}`; 
    }, // OK?
}
//console.log(user, user.getInfo());
console.log(Reflect.ownKeys(user));
console.log(user?.idd + 1);
user.addr = 'Seoul';
console.log(user?.addr);
console.log(Object.keys(user));
console.log('addr' in user, user.hasOwnProperty('addr'));

const s = Symbol();
user[s] = 'xxx';
console.log(Reflect.ownKeys(user));
console.log(user[s]);

user[`${user.id}'s name`] = `Mr. ${user.name}`;
console.log(Object.keys(user), user["'2's name"]);

user.firstName = 'Kildong';
user.lastName = 'kim';
user.fullName = `${user.firstName} ${user.lastName}`;
user.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
console.log('fn= ', user.fullName());
console.log(Object.keys(user));


console.log('==================');
user.addr = 'Pusan';
console.log(Object.getOwnPropertyDescriptor(user, 'addr'));

user.age = 30;  //writable : true
Object.defineProperty(user, 'age', { value: 39, writable: false});
console.log(Object.getOwnPropertyDescriptor(user, 'age'), user.age);

console.log(
    Object.keys(user),
    '\n----------\n',
    Object.values(user),
    '\n----------\n',
    Object.entries(user)
);


const park = Object.fromEntries([
    ['id', 7],
    ['nm', 'Park'],
]);
console.log(park);

//const newUser1 = Object.assign({age: 30}, park);
const newUser1 = {...park}; //assign 보다는 스프레드문법을 사용하자
//const newUser1 = new Object(park); //ES5
newUser1.id = 5;
console.log(newUser1, park);

//Object.preventExtensions(user); // 삭제, 읽기, 쓰기, 재정의
//Object.seal(user);              // 읽기, 쓰기
Object.freeze(user);            // 읽기
console.log(Object.getOwnPropertyDescriptor(user, 'age'));

park.arr = [1,2,3];
console.log(park.arr);
Object.freeze(park);
park.arr[1] = 200;
park.arr = ['a', 'b'];
console.log(park.arr);

console.log('==================');

//try this
const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
// function copyObject(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }
// const newKim = copyObject(kim);
// newKim.addr = 'DaeGu';
// console.log(kim.addr !== newKim.addr);

const newKim = copyObject2(kim);
newKim.addr = 'DaeGu';
console.log(kim.addr !== newKim.addr);

//정답
function copyObject2(obj) {
    const copyObj = {};
    for(let k in obj) {
        console.log(k, obj[k]);
        copyObj[k] = obj[k];
    }
    return copyObj;
}