let ActualValue = 10;
let GuessNumber = 20;
if (GuessNumber == ActualValue) {
    console.log("congralution you guess correct number");
}
else if (GuessNumber > ActualValue) {
    console.log("your guess value is greater than actualValue");
}
else if (GuessNumber < ActualValue) {
    console.log(" your guess value is low then actualValue ");
}
else {
    console.log("your input are invalid!");
}
export {};
