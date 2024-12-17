function reverseString(s: string[]): void {
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  while (leftIndex < rightIndex) {
    swap(s, leftIndex, rightIndex);
    leftIndex++;
    rightIndex--;
  }
}

function swap(s: string[], indexA: number, indexB: number): void {
  let tmp: string;
  tmp = s[indexA];
  s[indexA] = s[indexB];
  s[indexB] = tmp;
}

// test case

let case1 = ["h", "e", "l", "l", "o"];
let case2 = ["H", "a", "n", "n", "a", "h"];

reverseString(case1);
reverseString(case2);

console.log(case1);
console.log(case2);
