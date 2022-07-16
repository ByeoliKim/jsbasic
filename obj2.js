const kim = {
	nid: 3,
	addr: 'Pusan',
    arr: [1,2,3, {aid : 1}, [10,20, [13,14]] ],
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },   //오브젝트 타입
};

// function deepCopyObject(object) {
//     if (typeof object !== "object") {
//         return object;
//     }

//     const copy = Array.isArray(object) ? [] : {};

//     for (let key of Object.keys(object)) {
//         copy[key] = deepCopyObject(object[key]);
//     }

//     return copy;
// }

const copyArray = a => {
	const rets = [];
	for (let t of a) {
        if (Array.isArray(t)) rets.push(copyArray(t))
        else if (typeof t === 'object') rets.push(deepCopyObject(t));
        else rets.push(t);
    }
	return rets;
};

//깊은 복사 정답
const deepCopyObject = obj => {
	const copyObj = {};
	for (let k in obj) {
		const tmpObj = obj[k];
		//console.log(k, tmpObj, typeof tmpObj);
		// if (Array.isArray(tmpObj)) copyObj[k] = [...tmpObj];
		if (Array.isArray(tmpObj)) copyObj[k] = copyArray(tmpObj);
		else if (typeof tmpObj === 'object') copyObj[k] = deepCopyObject(tmpObj);
		else copyObj[k] = obj[k];
	}
	return copyObj;
}

const deepArrObj = dao => {
    //const copyObj2 = {};
    //const rets2 = [];
    let result = {};
    if(typeof dao === 'object' && dao !== null){
        for(i in dao) result[i] = deepArrObj(dao[i]);
    } else {
        result = 0;
    }
    return result;
}

const newKim = deepCopyObject(kim);
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';
console.log(kim, newKim); // oo와 arr이 다르면 통과!

const kim2 = [ { id: 1, n: 'Hong' }, {id:2, n: 'Kim'} ];

console.log('------------------');
