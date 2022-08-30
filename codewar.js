function highAndLow(numbers) {
  // ...
  let numsString = numbers.split(" ");

  const nums = numsString.map((n) => {
    return Number(n);
  });

  nums.sort((a, b) => b - a);

  let last = nums[nums.length - 1];

  return `${nums[0]} ${last}`;
}

highAndLow("9 0 -4 2");
