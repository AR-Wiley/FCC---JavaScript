const truncateString = (str, num) => {
  let len = str.length
  if (len > num){
    str = str.slice(0, num)
    return str + "..."
  }
  return str 
}