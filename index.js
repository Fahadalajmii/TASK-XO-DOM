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
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  if (index % 2 === 1) {
    fillButton(index, "X");
  } else {
    fillButton(index, "O");
  }

  checkWinner();
}

/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
// function checkPlayer() {
//   text = 1;
// function myfunc_3() {
//     if (text == 1) {
//         document.getElementById(1).value = "X";
//         document.getElementById(1).disabled = true;
//          text= 0;
//     }
//     else {
//         document.getElementById(1).value = "0";
//         document.getElementById(1).disabled = true;
//         text = 1;
//     }
// }

// function myfunc_4() {
//     if ( text== 1) {
//         document.getElementById(2).value = "X";
//         document.getElementById(2).disabled = true;
//         text = 0;
//     }
//     else {
//         document.getElementById(2).value = "0";
//         document.getElementById(2).disabled = true;
//         text = 1;
//     }
// }

// function myfunc_5() {
//     if (text == 1) {
//         document.getElementById(3).value = "X";
//         document.getElementById(3).disabled = true;
//         text = 0;
//     }
//     else {
//         document.getElementById(3).value = "0";
//         document.getElementById(3).disabled = true;
//         text = 1;
//     }
// }

// function myfunc_6() {
//     if (text == 1) {
//         document.getElementById(4).value = "X";
//         document.getElementById(4).disabled = true;
//         text = 0;
//     }
//     else {
//         document.getElementById(4).value = "0";
//         document.getElementById(4).disabled = true;
//         text = 1;
//     }
// }

// function myfunc_7() {
//     if (text == 1) {
//         document.getElementById(5).value = "X";
//         document.getElementById(5).disabled = true;
//         text = 0;
//     }
//     else {
//         document.getElementById(5).value = "0";
//         document.getElementById(5).disabled = true;
//         text = 1;
//     }
// }

// function myfunc_8() {
//     if (text == 1) {
//         document.getElementById(6).value = "X";
//         document.getElementById(6).disabled = true;
//         text = 0;
//     }
//     else {
//         document.getElementById(6).value = "0";
//         document.getElementById(6).disabled = true;
//         text = 1;
//     }
// }

// function myfunc_9() {
//     if (text == 1) {
//         document.getElementById(7).value = "X";
//         document.getElementById(7).disabled = true;
//         text = 0;
//     }
//     else {
//         document.getElementById(7).value = "0";
//         document.getElementById(7).disabled = true;
//         text = 1;
//     }
// }

// function myfunc_10() {
//     if (text == 1) {
//         document.getElementById(8).value = "X";
//         document.getElementById(8).disabled = true;
//         text = 0;
//     }
//     else {
//         document.getElementById(8).value = "0";
//         document.getElementById(8).disabled = true;
//         text = 1;
//     }
// }

// function myfunc_11() {
//     if (text == 1) {
//         document.getElementById(9).value = "X";
//         document.getElementById(9).disabled = true;
//         text = 0;
//     }
//     else {
//         document.getElementById(9).value = "0";
//         document.getElementById(9).disabled = true;
//         text = 1;
//     }
// }

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// }
function checkWinner() {
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById(1).value;
  b2 = document.getElementById(2).value;
  b3 = document.getElementById(3).value;
  b4 = document.getElementById(4).value;
  b5 = document.getElementById(5).value;
  b6 = document.getElementById(6).value;
  b7 = document.getElementById(7).value;
  b8 = document.getElementById(8).value;
  b9 = document.getElementById(9).value;

  if (
    (b1 == "x" || b1 == "X") &&
    (b2 == "x" || b2 == "X") &&
    (b3 == "x" || b3 == "X")
  ) {
    winningAlert(X);

    // document.getElementById('print')
    //     .innerHTML = "Player X won";
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert('Player X won');
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b4 == "x" || b4 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    winningAlert(X);
    // document.getElementById('print')
    //     .innerHTML = "Player X won";
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;

    // window.alert('Player X won');
  } else if (
    (b7 == "x" || b7 == "X") &&
    (b8 == "x" || b8 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    // document.getElementById('print')
    //     .innerHTML = "Player X won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // window.alert('Player X won');
    winningAlert(X);
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b6 == "x" || b6 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    winningAlert(X);
    //     document.getElementById('print')
    //         .innerHTML = "Player X won";
    //     document.getElementById("b1").disabled = true;
    //     document.getElementById("b2").disabled = true;
    //     document.getElementById("b4").disabled = true;
    //     document.getElementById("b5").disabled = true;
    //     document.getElementById("b7").disabled = true;
    //     document.getElementById("b8").disabled = true;
    //     window.alert('Player X won');
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    winningAlert(X);
    //     document.getElementById('print')
    //         .innerHTML = "Player X won";
    //     document.getElementById("b2").disabled = true;
    //     document.getElementById("b3").disabled = true;
    //     document.getElementById("b4").disabled = true;
    //     document.getElementById("b6").disabled = true;
    //     document.getElementById("b7").disabled = true;
    //     document.getElementById("b8").disabled = true;
    //     window.alert('Player X won');
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    winningAlert(X);
    // document.getElementById('print')
    //     .innerHTML = "Player X won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert('Player X won');
  } else if (
    (b2 == "x" || b2 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b8 == "x" || b8 == "X")
  ) {
    // document.getElementById('print')
    //     .innerHTML = "Player X won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert('Player X won');
    winningAlert(X);
  } else if (
    (b4 == "x" || b4 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b6 == "x" || b6 == "X")
  ) {
    // document.getElementById('print')
    //     .innerHTML = "Player X won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert('Player X won');

    winningAlert(X);
  }

  // Checking of Player X finish
  // Checking for Player 0 starts, Is player 0 won or
  // not and after that disabled all the other fields
  else if (
    (b1 == "0" || b1 == "0") &&
    (b2 == "0" || b2 == "0") &&
    (b3 == "0" || b3 == "0")
  ) {
    winningAlert(O);
    // document.getElementById('print')
    //     .innerHTML = "Player 0 won";
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert('Player 0 won');
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b4 == "0" || b4 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    // document.getElementById('print')
    //     .innerHTML = "Player 0 won";
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert('Player 0 won');
    winningAlert(O);
  } else if (
    (b7 == "0" || b7 == "0") &&
    (b8 == "0" || b8 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    // document.getElementById('print')
    //     .innerHTML = "Player 0 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b6").disabled = true;
    // window.alert('Player 0 won');
    winningAlert(O);
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b6 == "0" || b6 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    // document.getElementById('print')
    //     .innerHTML = "Player 0 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b5").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // window.alert('Player 0 won');
    winningAlert(O);
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    // document.getElementById('print')
    //     .innerHTML = "Player 0 won";
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // window.alert('Player 0 won');
    winningAlert(O);
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    // document.getElementById('print')
    //     .innerHTML = "Player 0 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert('Player 0 won');
    winningAlert("O");
  } else if (
    (b2 == "0" || b2 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b8 == "0" || b8 == "0")
  ) {
    // document.getElementById('print')
    //     .innerHTML = "Player 0 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b4").disabled = true;
    // document.getElementById("b6").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert('Player 0 won');

    winningAlert(O);
  } else if (
    (b4 == "0" || b4 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b6 == "0" || b6 == "0")
  ) {
    // document.getElementById('print')
    //     .innerHTML = "Player 0 won";
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b3").disabled = true;
    // document.getElementById("b7").disabled = true;
    // document.getElementById("b8").disabled = true;
    // document.getElementById("b9").disabled = true;
    // window.alert('Player 0 won');
    winningAlert(O);
  }

  // Checking of Player 0 finsh
  // Here, Checking about Tie
  // else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
  //     || b2 == '0') && (b3 == 'X' || b3 == '0') &&
  //     (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
  //     b5 == '0') && (b6 == 'X' || b6 == '0') &&
  //     (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
  //     b8 == '0') && (b9 == 'X' || b9 == '0')) {
  //         document.getElementById('print')
  // //             .innerHTML = "Match Tie";
  // //         window.alert('Match Tie');
  // winningAlert(O);

  //     }
  //     else {

  //         // Here, Printing Result
  //         if (flag == 1) {
  //             document.getElementById('print')
  //                 .innerHTML = "Player X Turn";
  //         }
  //         else {
  //             document.getElementById('print')
  //                 .innerHTML = "Player 0 Turn";
  //         }
}

// function restartGame
