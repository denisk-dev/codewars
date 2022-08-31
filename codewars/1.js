function squareDigits(num) {
  let ssfddf = String(num).split("");

  const fsdf = ssfddf.map((s) => {
    return Number(s) * Number(s);
  });

  fsdf.join("");

  return fsdf.join("");
}

console.log(squareDigits(123213));
