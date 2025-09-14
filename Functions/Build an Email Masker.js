let email = "freecodecamp@example.com"

const maskEmail = (email) => {
  let ast = "*"
  let mask = email.split('@')[0].slice(1,-1)
  let maskLen = mask.length
  let newMask = mask.replace(mask, ast).repeat(maskLen)
  let emailTail = email.slice(maskLen+1)
  return email[0].concat(newMask).concat(emailTail) 
}

console.log(maskEmail(email))