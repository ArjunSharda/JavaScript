function test (number) {
  if (number < 10) {
    console.log("DETECTION: Number is under 10");
  }
  if (number < 50) {
    console.log("DETECTION: Number is under 50");
  }
  if (number < 100) {
    console.log("DETECTION: Number is under 100");
  }
  if (number < 1000) {
    console.log("DETECTION: Number is under 1,000");
  }
  if (number > 1000) {
    console.log("DETECTION: Number is over 1,000");
  }
}
test(50)
