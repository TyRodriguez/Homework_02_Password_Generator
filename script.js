// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCharacters = {
  "numeric":"0123456789",
  "uppercase":"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "lowercase":"abcdefghijklmnopqrstuvwxyz",
  "specialChar":"!@#$%^&*()_+~`|}{[]:;?><,./-=",
}

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

var userPwdLength = prompt("What is the desired password length?");
if (userPwdLength>=8){
  var passLength = userPwdLength
  var userUppercase = confirm("Click 'Ok' to include uppercases. Click 'Cancel' for No.");
  var userLowercase = confirm("Click 'Ok' to include lowercases. Click 'Cancel' for No.");
  var userNumeric = confirm("Click 'Ok' to include numeric characters. Click 'Cancel' for No.");
  var userSpecialChar = confirm("Click 'Ok' to include special characters. Click 'Cancel' for No.");
  console.log(passLength);
  console.log(userUppercase);
  console.log(userLowercase);
  console.log(userNumeric);
  console.log(userSpecialChar);
}
else {
  alert("Password length must be at least 8 chracters.")
}

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
password ="";
var characters ="";
if (userUppercase) {
  characters= (characters + (passwordCharacters.uppercase));
  console.log(characters);
}
if (userLowercase) {
  characters=(characters + (passwordCharacters.lowercase));
  console.log(characters);
}
if (userNumeric) {
  characters=(characters+(passwordCharacters.numeric));
  console.log(characters);
}
if (userSpecialChar) {
  characters=(characters+(passwordCharacters.specialChar));
  console.log(characters);
}
}
