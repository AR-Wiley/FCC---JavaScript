let str = "Hello"

function reverseString(str){

  let splt = str.split("")
  let arr = []
  

  for(let i = 0; i < str.length; i++){
    let p = splt.pop()
    arr.push(p)
  }

  return arr.join("")

}