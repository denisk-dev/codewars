const toStringSymbol = Symbol("lol");

Array.prototype[toStringSymbol] = () => {
  console.log(this);
  return `${this.length} hello niggers`;
};

const arra = [1, 2];

const newFuncyky = arra[toStringSymbol].bind(arra);

console.log(newFuncyky);

// console.log(arra[toStringSymbol].bind(arra)());
// console.log([1, 2].toString());
// // → 1,2
// console.log([1, 2][toStringSymbol]());
// // console.log([1, 2][toStringSymbol]());
// // → 2 cm of blue yarn

const someObj = {
  jafafdk: "sfsdfsdf",
  rofl: () => {
    return `${this.jafafdk}`;
  },
};

console.log(someObj.rofl.bind(someObj));
