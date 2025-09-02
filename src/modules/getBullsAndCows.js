'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {number} userInput - The user input
 * @param {number} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  const res = { bulls: 0, cows: 0 };
  const guessArr = userInput.split('');
  const secretArr = numberToGuess.split('');

  const usedSecret = Array(4).fill(false);
  const usedGuess = Array(4).fill(false);

  for (let i = 0; i < 4; i++) {
    if (guessArr[i] === secretArr[i]) {
      res.bulls++;
      usedSecret[i] = true;
      usedGuess[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (usedGuess[i]) {
      continue;
    }

    for (let j = 0; j < 4; j++) {
      if (!usedSecret[j] && guessArr[i] === secretArr[j]) {
        res.cows++;
        usedSecret[j] = true;
        break;
      }
    }
  }

  return res;
}

module.exports = {
  getBullsAndCows,
};
