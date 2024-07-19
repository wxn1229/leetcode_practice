function reverseString(s: string[]): void {
  let leftIndex: number = 0;
  let rightIndex: number = s.length - 1;
  while (leftIndex < rightIndex) {
    s = swap(s, leftIndex, rightIndex);
    leftIndex++;
    rightIndex--;
  }
}

function swap(s: string[], indexA: number, indexB: number) {
  let tmp: string = "";
  tmp = s[indexA];
  s[indexA] = s[indexB];
  s[indexB] = tmp;
  return s;
}

//main
let str = ["h", "e", "l", "l", "o"];
reverseString(str);

console.log("🚀 ~ reverseString ~ reverseString:", str);
