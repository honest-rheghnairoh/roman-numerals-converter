/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const translator = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export class RomanNumerals {
  static toRoman(number, success, error) {
    if (number >= 5000) error('Number too large!');
    else {
      let num = number;
      let romanString = '';
      let i;
      for (i in translator) {
        while (num >= translator[i]) {
          romanString += i;
          num -= translator[i];
        }
      }
      success(romanString);
    }
  }

  static fromRoman(romanNumber, success, error) {
    const num = romanNumber;
    let number = 0;
    let curr = '';
    let next = '';
    for (let i = 0; i < num.length; i++) {
      curr = translator[num[i]];
      next = translator[num[i + 1]];
      if (next !== undefined && next > curr) {
        number += next - curr;
        i++;
      } else if (curr === undefined) {
        error('Invalid Roman Numeral!');
        return;
      } else number += curr;
    }
    success(number);
  }
}
