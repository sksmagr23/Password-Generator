function generatePassword(len) {
  let set ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^*_+|:;,.?/~"

  var pwd = ""
  for (var i = 0; i < len; i++) {
    var randIndex = Math.floor(Math.random() * set.length)
    pwd += set[randIndex]
  }

  return pwd
}

function generate() {
  var passwordLength = document.getElementById("passwordLength").value

  if (passwordLength <= 15) {
    var newPassword = generatePassword(passwordLength)
    document.getElementById("password").value = newPassword
  } 
  else {
    alert("Please enter password word limit less than 15")
  }
}

function clearpwd(){
    document.getElementById("password").value = "";
    var passwordLength = document.getElementById("passwordLength");
    if (passwordLength) {
      passwordLength.value = "";
    }
  }
