// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  confirm(`Horraaay, ${winner} wins!`);
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let counter = 1;
let x = [];
let o = [];
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.

  if (counter % 2 === 1) {
    fillButton(index, "X");
    counter++;
    x.push(index);
  } else {
    fillButton(index, "O");
    counter++;
    o.push(index);
  }
  console.log("X", x);
  console.log("O", o);

  if (checkWinner(x)) {
    winningAlert("X");
  } else if (checkWinner(o)) {
    winningAlert("O");
  } else {
    console.log("no winner");
  }
}

/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer() {}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// }
function checkWinner(test) {
  const row1 = [1, 2, 3];
  const row2 = [4, 5, 6];
  const row3 = [7, 8, 9];

  const row4 = [1, 4, 7];
  const row5 = [2, 5, 8];
  const row6 = [3, 6, 9];

  const row7 = [1, 5, 9];
  const row8 = [3, 5, 7];

  let result = false;

  return (
    row1.every((elem) => test.includes(elem)) ||
    row2.every((elem) => test.includes(elem)) ||
    row3.every((elem) => test.includes(elem)) ||
    row4.every((elem) => test.includes(elem)) ||
    row5.every((elem) => test.includes(elem)) ||
    row6.every((elem) => test.includes(elem)) ||
    row7.every((elem) => test.includes(elem)) ||
    row8.every((elem) => test.includes(elem))
  );
}

function restartGame() {}
