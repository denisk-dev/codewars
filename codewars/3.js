function solution(number) {
  if (Math.sign(number) === -1) {
    return 0;
  }

  const here = [...Array(number).keys()];

  const sdfsd = here.filter((h) => {
    if (h % 3 === 0 && h % 5 === 0) {
      return true;
    }
    if (h % 3 === 0) {
      return true;
    }

    if (h % 5 === 0) {
      return true;
    }

    return false;
  });

  return sdfsd.reduce((a, b) => {
    return a + b;
  }, 0);
}

console.log(solution(10));
