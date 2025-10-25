let findLongestWordLength = (str) => {
  let arr = str.split(" ")
  let count = 0
  for(let word of arr){
    if(word.length > count){
      count = word.length
    }
  }
  return count
}

