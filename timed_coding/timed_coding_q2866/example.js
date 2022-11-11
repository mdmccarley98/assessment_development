// runs in O(n) time and O(1) space
function findSmallestMissingNegative(nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    nums[i] *= -1;
  }

  for (let i = 0; i < n; i++) {
    let x = nums[i];
    while (x > 0 && x <= n && nums[x - 1] !== x) {
      [nums[i], nums[x - 1]] = [nums[x - 1], x];
      x = nums[i];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return (i + 1) * (-1);
    }
  }

  return (n + 1) * (-1);
}

const tests = [
  [[4, -6, 0, -3, 9], -1],
  [[-4, 6, 0, 3, -9], -1],
  [[3, 5, -1, 1, 5], -2],
  [[-3, 5, -1, 1, -5], -2],
  [[3, 8, 5, 10, 2], -1],
  [[-3, -8, -5, -10, -2], -1],
  [[-2, -3, -4, -5, -6, -7], -1],
  [[-1, -2, -3, -4, -5, -6], -7],
];

for (const test of tests) {
  console.assert(findSmallestMissingNegative(test[0]) === test[1]);
}

const specialCase = [
  Array.from({ length: Math.pow(10, 8) }, () => {
    const rand = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 2;
    return [-rand, rand][Math.random() * 2 | 0];
  }), -1
];

console.assert(findSmallestMissingNegative(specialCase[0]) === specialCase[1]);
