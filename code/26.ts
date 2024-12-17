function removeDuplicates(nums: number[]): number {
  let uniquePointer = 0;
  for (let checkPointer = 1; checkPointer < nums.length; checkPointer++) {
    if (nums[checkPointer] !== nums[uniquePointer]) {
      uniquePointer++;
      [nums[checkPointer], nums[uniquePointer]] = [
        nums[uniquePointer],
        nums[checkPointer],
      ];
    }
  }

  return uniquePointer + 1;
}

// test case

let case1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let ans = removeDuplicates(case1);

console.log(ans);
console.log(case1);
