const kim = {
    nid: 3,
    arr: [1, 2, 3, { aid: 1 }, [10, 20]],
    oo: { id: 1, name: 'Hong', 
            addr: { city: 'Seoul' } },
    fn() { console.log('fn=', this.nid); },
};

const copyArrayOrObject = arrobj => {
	const copyObj = Array.isArray(arrobj) ? [] : {};
	for (let k in arrobj) {
		const tmpObj = arrobj[k];
		console.log(k, tmpObj, typeof tmpObj);
		if (typeof tmpObj === 'object') copyObj[k] = copyArrayOrObject(tmpObj);
		else copyObj[k] = arrobj[k];
	}

	return copyObj;
};

const newKim = copyArrayOrObject(kim);
newKim.oo.name = 'Kim';
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
console.log(kim, newKim);

const kims = [ kim, newKim ];
const newKims = copyArrayOrObject(kims);
console.log(kims, newKims);