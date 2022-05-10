// Number Guessing Function
// Made by ajsharda17
// Credit to https://www.w3schools.com/js/js_random.asp

function numberguess (int) {
  console.log("I have a number within the range of 1 to 10.");
  const number = Math.floor(Math.random() * 11);
  if (number == int) {
    console.log("You got the number right! It was:", number);
  } else {
    console.log("Oopsie, you got the number wrong. The number is", number)
    console.log("You put", int)
  }
  
}

numberguess(5)
