import { parseNumber } from './operator';

export function sumKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/killSum/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'killSumSix': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 6
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumSeven': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 7
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumEight': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 8
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumNine': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 9
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 10
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumEleven': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 11
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwelve': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 12
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 13
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFourteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 14
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFifteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 15
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumSixteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 16
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumSeventeen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 17
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumEighteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 18
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumNineteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 19
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwenty': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 20
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyOne': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 21
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyTwo': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 22
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyThree': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 23
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyFour': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 24
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyFive': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 25
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentySix': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 26
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentySeven': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 27
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyEight': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 28
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyNine': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 29
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirty': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])) === 30
          ) {
            num.killFailed();
          }
        });
        break;
      }

      default:
        break;
    }
  });

  return numbers;
}

export default { sumKiller };
