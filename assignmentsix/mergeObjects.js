function mergeObjects(...objs){
   // return objs.reduce((accumulator, current) =>({...accumulator, ...current}), {})
  return  Object.assign({}, ...objs)
}

//test case
const obj1 = {a: 1, b:2 }
const obj2 = {b: 3, c: 4}
console.log(mergeObjects(obj1, obj2))