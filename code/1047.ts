function removeDuplicates(s: string): string {
  let index = 0;

  while (true) {
    if (s.length === 0 || s.length === 1 || index === s.length - 1) break;
    if (index === s.length - 2 && s.charAt(index) !== s.charAt(index + 1))
      break;
    if (s.charAt(index) === s.charAt(index + 1)) {
      s = s.slice(0, index) + s.slice(index + 2);
      index--;
      if (index < 0) index++;
    } else {
      index++;
    }
  }

  return s;
}

// main

let str1 = "aababaab";
let str2 = "azxxzy";
let str3 = "azxxzy";

console.log(
  "🚀 ~ removeDuplicates ~ removeDuplicates:",
  str1.slice(0, 0) + str1.slice(2)
);

console.log(
  "🚀 ~ removeDuplicates ~ removeDuplicates:",
  removeDuplicates(str1)
);
