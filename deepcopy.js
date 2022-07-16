function deepCopy(o) {
    var result = {};
    if (typeof o === "object" && o !== null)
      for (i in o) result[i] = deepCopy(o[i]);
    else result = o;
    return result;
  }
  var obj1 = {
    a: 1,
    b: [1, 2, 3]
  };
  
  var obj2 = deepCopy(obj1);
  
  console.log(obj1 === obj2);
  console.log(obj1);
  //console.log(obj2);
  obj2.b[0] = 100
  console.log(obj2);