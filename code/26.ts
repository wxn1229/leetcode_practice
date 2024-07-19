function removeDuplicates(nums: number[]): number {
  let inputIndex = 0;
  let checkIndex = 0;
  while (checkIndex <= nums.length - 1) {
    if (nums[inputIndex] !== nums[checkIndex]) {
      nums[++inputIndex] = nums[checkIndex];
    }
    checkIndex++;
  }
  return inputIndex + 1;
}

// interesting solutiong
function removeDuplicates2(nums: number[]): number {
  const set = new Set(nums);
  nums.length = 0;
  // for(var i = 0; i < set.size; i++)
  console.log(set);
  nums.push(...set);
  return nums.length;
}

// main
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(
  "🚀 ~ removeDuplicates ~ removeDuplicates:",
  removeDuplicates2(nums)
);

console.log("🚀 ~ nums:", nums);
