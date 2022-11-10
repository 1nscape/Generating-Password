// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var confirmSpecialCharacter;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmLength;




function writePassword() {
  var passwordOptions = []
  var finalPassword = []
  confirmLength = prompt("How many characters you want? Choose between 8 to 128")

  if (confirmLength <= 8 || confirmLength >= 128) {
    alert("Must be between 8 to 128 characters, try again.");
    return;
  }


  confirmUpperCase = confirm("Would you like to have an upper case?");
  if (confirmUpperCase === true) {
    passwordOptions = passwordOptions.concat(upperCase)
  }


  confirmLowerCase = confirm("Would you like to have lower case?");
  if (confirmLowerCase === true) {
    passwordOptions = passwordOptions.concat(lowerCase)
  }

  confirmSpecialCharacter = confirm("Would you like to have special characters?");
  if (confirmSpecialCharacter === true) {
    passwordOptions = passwordOptions.concat(specialCharacter)
  }

  confirmNumber = confirm("Would you like to have numbers?");
  if (confirmNumber === true) {
    passwordOptions = passwordOptions.concat(number)
  }

  if (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumber === false) {
    alert("Please choose one criteria")
    return;
  }
  for (let index = 0; index < confirmLength; index++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);