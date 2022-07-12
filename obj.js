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
console.log(user, user.getInfo());