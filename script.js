// Assignment code here
// set variables to the type of variable desired
var length = 0;
var includeUpper = false;
var includeNumbers = false;
var	includeSpecial = false;

const lettersLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const lettersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const special = ["!","@","#","$","%","^","&","*","?"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  length = prompt("how many characters would you like in your password? (8-128)");
  while(length < 8 || length > 128){
    length = prompt("Password MUST be between 8 and 128 characters");
  }
  includeUpper = confirm("Would you like upper case letters in your password?");
  includeNumbers = confirm("Would you like to include numbers in your password?");
  includeSpecial = confirm("Would you like to include special characters in your password?");
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
  if(includeUpperBoolean === false){
    console.log("includeUpperBoolean is false");
  }
  if(includeNumbersBoolean === true){
    console.log("includeNumbersBoolean is true");
    sampleArray = sampleArray.concat(numbers);
  }
  if(includeNumbersBoolean === false){
    console.log("includeNumbersBoolean is false");
  }  
  if(includeSpecialBoolean === true){
    console.log("includeSpecialBoolean is true");
    sampleArray = sampleArray.concat(special);
  }
  if(includeSpecialBoolean === false){
    console.log("includeSpecialBoolean is false");
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

// function generatePasswordlowercase() {
//   var password = "";
//   var counter = length;
//   var sampleLength = lettersLower.length;
//   while(counter > 0){
//     var index = Math.floor(Math.random()*sampleLength);
//     password += lettersLower[index];
//     counter--;
//   }
//   return password;
// }