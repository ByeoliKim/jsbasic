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


// ⇔ function declareFn(name) {
    const declareFn = function(name) {  //함수 선언식일 경우~~~~~~~~~~~~
        // if, 'use strict'?
        this.name = name;   //this가 글로벌 name이 전역 스코프 ~ 윈도우를 가르킨다.🥶
        console.log('declarefn ====', this, new.target, this.name, name);
    }
    const r = declareFn('dfn');
    console.log('outer.name', name);
    
    const arrowFn = (name) => { // 화살표 함수는 오브젝트.,.~~~~~~~~~~~~~~
        this.name = name;   //this 는 object 의 자신...~~~^^
        console.log('arrowfn=', this, new.target, this.name, name);
    }
    
    arrowFn('afn');
    console.log('arrow.name=', name);   //global name
    
    console.log('typeof r=', r);
    arrowFn('afn');

    const dfn = new declareFn('D');
    console.log('typeof dfn', typeof dfn);
    // const afn = new arrowFn('A'); // error!


    console.log('==================================');

    const Dog = function(name) {
        console.log(this, new.target, 
                    this instanceof Dog);
        //this는 글로벌 객체 
        this.name = name;
        this.bark = function () {
        console.log('bark=', new.target, this.name, name);
        };
        this.bark2 = () =>
        console.log('bark2=', new.target, this.name, name);
    }
    
    const dog = Dog('Doggy');
    const lucy = new Dog('Lucy');

    //Dog.bark();
    bark();
    bark2();
    lucy.bark(); // ?
    lucy.bark2(); // ?
    console.log('type=', typeof dog); // ?
    console.log('type=', typeof lucy); // ?

    console.log('=========================');

    const Cat = (name) => {
        console.log(this, new.target);
        this.name = name;
        this.barkcat = function () {
        console.log('bark=', new.target, this.name, name);
        };
        this.barkcat2 = () =>
        console.log('bark2=', new.target, this.name, name);
    
    return this;
    }
    
    const cat = Cat('Coco');
    // const cat = new Cat(''); // error!!
    cat.barkcat(); // ?
    cat.barkcat2(); // ? 
    //Cat.bark(); // ?
    //Cat.bark2(); // ? 
    console.log('type=', typeof cat); // ? 
    
    // cf. arrow function's this (p.52)

    const obj2 = {
        name: 'ObjName',
        bark1() {
        console.log('1=', this.name);
        const self = this;
        setTimeout( function() {
        console.log('11=', self.name);
        }, 1000);
        console.log('xxxx');
    },
    bark2() {
        console.log('2=', this.name);
        setTimeout(() => {
        console.log('22=', this.name);
        }, 1000);
    },
    };
    
    obj2.bark1();
    obj2.bark2();      