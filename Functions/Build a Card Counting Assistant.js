let count = 0

const cc = (card) => {
  
  const low = [2,3,4,5,6]
  const mid = [7,8,9]
  const high = [10,"J","Q","K","A"]
  
  if (low.includes(card) === true){
    count += 1
  } else if (mid.includes(card) === true) {
    count += 0
  } else if (high.includes(card) === true){
    count -= 1
  }

  if (count > 0) {
    return `${count}` + " Bet"
  } else if (count <= 0){
    return `${count}` + " Hold"
  }
}
