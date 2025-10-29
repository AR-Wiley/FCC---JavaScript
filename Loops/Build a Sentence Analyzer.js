function getVowelCount(sentence) {
  let count = 0;
  let arr = sentence.toLowerCase().split(" ");
  let vowels = "aeiou";
  for (let letter in senArr) {
    if (vowels.includes(senArr[letter])) {
      count += 1;
    }
  }
  return count;
}

function getConsonantCount(sentence) {
  let count = 0;
  let arr = sentence.toLowerCase().split(" ");
  let consonant = "bcdfghjklmnpqrstvwxyz";
  for (let letter in arr) {
    if (consonant.includes(arr[letter])) {
      count += 1;
    }
  }
  return count;
}

function getPunctuationCount(sentence) {
  let count = 0;
  let arr = sentence.toLowerCase().split(" ");
  let character = "abcdefghijklmnopqrstuvwxyz";
  let space = " ";
  for (let letter in arr) {
    if (!character.includes(arr[letter]) && !space.includes(arr[letter])) {
      count += 1;
    }
  }
  return count;
}

function getWordCount(sentence) {
  let count = 0;
  let arr = sentence.trim().toLowerCase().split(" ");
  for (let word in arr) {
    count += 1;
  }
  return count;
}