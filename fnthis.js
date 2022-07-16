// cf. Object Method
const obj = {
    name: 'ObjName',
    bark() { // good!(호출한 객체)
        console.log('bark=', this.name);
    },
    bark2: () => // bad!!
    console.log('bark2=', obj.name),
};

    obj.bark();
    obj.bark2();  



const arrowFn = (name) => {
    this.name = name;
    console.log(this, new.target, this.name, name);
}

arrowFn('afn');