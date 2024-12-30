function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
console.log(clone); // Output: { a: 1, b: { c: 2 } }


// { a: 1, b: { c: 2 } }