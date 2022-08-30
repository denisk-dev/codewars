const deepEqual = (obj1, obj2) => {
  // console.log(Object.keys(obj1));

  let keysObj1 = Object.keys(obj1);
  let keysObj2 = Object.keys(obj2);

  // console.log(keysObj1, "7");

  // console.log(keysObj2, "9");

  // if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  if (keysObj1.length !== keysObj2.length) return false;

  for (let index = 0; index < keysObj1.length; index++) {
    // console.log(obj1[keysObj1[index]], "16");
    // console.log(obj2[keysObj2[index]], "17");

    if (
      typeof obj1[keysObj1[index]] === "object" &&
      typeof obj2[keysObj2[index]] === "object"
    ) {
      return deepEqual(obj1[keysObj1[index]], obj2[keysObj2[index]]);
    } else if (
      Array.isArray(obj1[keysObj1[index]]) ||
      Array.isArray(obj2[keysObj2[index]])
    ) {
    } else {
      // console.log(obj1[keysObj1[index]]);
      // console.log(obj2[keysObj2[index]]);
      if (obj1[keysObj1[index]] !== obj2[keysObj2[index]]) return false;

      return true;
    }
  }
};

// let obj = { here: { is: "and" }, object: 2 };
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// // → false
// console.log(deepEqual(obj, { here: { is: "and" }, object: 2 }));
// // → true

function deepEqual2(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual2(a[key], b[key])) return false;
  }

  return true;
}

//TODO my logic is not handling this case.

console.log(
  deepEqual2(
    { lol: "hahaha", yeah: [3, { re: "re" }] },
    { lol: "hahaha", yeah: [3, { re: "re" }] }
  )
);
