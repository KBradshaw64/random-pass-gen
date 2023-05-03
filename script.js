// Assignment code here
var length = prompt("how many characters would you like in your password? (8-128)");
var lettersLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lettersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var password = "";
  var counter = length;
  var sampleLength = lettersLower.length;
  while(counter > 0){
    var index = Math.floor(Math.random()*sampleLength);
    password += lettersLower[index];
    counter--;
  }
  return password;
}