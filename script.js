// Assignment code here
var length = prompt("how many characters would you like in your password? (8-128)");
var includeUpper = confirm("Would you like upper case letters in your password?");
var includeNumbers = confirm("Would you like to include numbers in your password?");
var	includeSpecial = confirm("Would you like to include special characters in your password?");

var lettersLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lettersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","&","*","?"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(includeUpper,includeNumbers,includeSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(includeUpperBoolean, includeNumbersBoolean, includeSpecialBoolean){
  var sampleArray = lettersLower;
  if(includeUpperBoolean === true){
    console.log("includeUpperBoolean is true");
    sampleArray = sampleArray.concat(lettersUpper);
  }
  if(includeNumbersBoolean === true){
    sampleArray = sampleArray.concat(numbers);
  }
  if(includeSpecialBoolean === true){
    sampleArray = sampleArray.concat(special);
  }
  
  var password = "";
  var counter = length;
  var sampleLength = sampleArray.length;
  while(counter > 0){
    var index = Math.floor(Math.random()*sampleLength);
    password += sampleArray[index];
    counter--;
  }
  return password;

}

function generatePasswordlowercase() {
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