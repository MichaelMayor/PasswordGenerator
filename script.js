// Assignment Code
var generateBtn = document.querySelector("#generate");
//generate arrays to pull from
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowLetters =capLetters.toLowerCase()
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function generatePassword () {
    //prompt password length
    var passLength = parseInt(prompt("How many characters long should the password be? (Please enter a number between 8 and 128)"));
    
        //check password length is within bounds
        if (passLength > 8 && passLength < 128){
            //find password specifications
            var passCapLetters = confirm("Include Capital Letters?");
            var passNumbers = confirm("Include Numbers?");
            var passSpecialChar = confirm ("Include Special Characters?");
            var password = "";
            
            
            
            for (i=0 ; i < passLength; i++){
                //make lower case option
                var options = lowLetters[Math.floor(Math.random()*25)];
                //uppercase option
                if (passCapLetters){
                 var options = options + capLetters[Math.floor(Math.random()*25)];
                }
                //numerical option
                if (passNumbers) {
                    var num = Math.floor(Math.random()*9);
                    var options = options + num.toString();
                }
                //special character option
                if (passSpecialChar) {
                 var options = options + specialChar[Math.floor(Math.random() * specialChar.length)];
                }
                //choose option at random
                currentChar = options[Math.floor(Math.random()*options.length)];
                //add current character to password
                password = password.concat(currentChar);
            
            }
        }
        //alert for invalid password length
        else{
            alert("Invalid Password Length");
        }
 return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
