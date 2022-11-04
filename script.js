// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
if (!max){
  max=min
  min= 0
}
var rand = Math.random()
return Math.floor (min*(1-rand) + rand*max)

}

function getRandomItem (list){
  return list[randomInt(list.length)]


}



// generate password function
function generatePassword() {


  if (greetingAnswer === null){
    return
  }

  while (true){
    var greetingAnswer = window.prompt("How many characters do you want in your password?")
    var passLength = parseInt(greetingAnswer);

    if(isNaN(passLength)){
      window.alert("Invalid input")
    } 
    else if (passLength < 8 || passLength > 128) {
      window.alert("invalid password length")
    } else{
      break
    }


  }

  var numbersQuestion = window.confirm("Did you want numbers in your password?")
  var lowercaseQuestion = window.confirm("Did you want your password to include lowercase letters?")
  var uppercaseQuestion = window.confirm("Did you want to include Uppercase letters?")
  var symbolsQuestion= window.confirm("Did you want to include symbols?")


  var numberList =["0", "1", "2", "3", "4","5","6","7","8","9"]
  var symbolsList= ["!","@","#","$","%","^","&","*"]
  var lowercaseList= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var answersCart = []

  if (numbersQuestion === true){
    answersCart.push(numberList)
  }

  if (symbolsQuestion === true){
    answersCart.push(symbolsList)

  }

  if (lowercaseQuestion === true){
    answersCart.push(lowercaseList)

  }

  if (uppercaseQuestion === true){
    answersCart.push(uppercaseList)

  }

  if (answersCart.length === 0){
    answersCart.push(lowercaseList)
  }

  var generatedPassword = ""
  for (var i = 0; i < passLength; i++) {
    var randomList = getRandomItem(answersCart)
    var randomChar = getRandomItem(randomList) 
    generatedPassword += randomChar
  }

    return generatedPassword
  

  }





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;
  
}
console.log (password)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
