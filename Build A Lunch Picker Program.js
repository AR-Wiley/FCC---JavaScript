let lunches = []

function addLunchToEnd(arr, str){
  arr.push(str)
  console.log(`${str} added to the end of the lunch menu.`)
  return arr
}

function addLunchToStart(arr, str){
  arr.unshift(str)
   console.log(`${str} added to the start of the lunch menu.`)
  return arr
}

function removeLastLunch(arr){
  if (arr.length === 0) {
    console.log("No lunches to remove.")
  } else {
    const x = arr.pop()
    console.log(`${x} removed from the end of the lunch menu.`)
    return arr
  }
}

function removeFirstLunch(arr){
  if (arr.length === 0) {
    console.log("No lunches to remove.")
  } else {
    const y = arr.shift()
    console.log(`${y} removed from the start of the lunch menu.`)
    return arr
  }
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.")
  } else {
     const randomNum = Math.floor(Math.random() * arr.length)
     const randomLunch = arr[randomNum]
     console.log(`Randomly selected lunch: ${randomLunch}`)
  }
}

function showLunchMenu(arr){
  if( arr.length === 0){
    console.log("The menu is empty.")
  } else {
    return `Menu items: ${arr.join(", ")} `
  }
}