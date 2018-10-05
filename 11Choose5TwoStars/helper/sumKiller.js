import { parseNumber } from './operator';

export function sumKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/killSum/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'killSumThree': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) === 3
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFour': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) === 4
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFive': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) === 5
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumSix': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) === 6
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
            + parseNumber(num.num[1])) === 7
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
            + parseNumber(num.num[1])) === 8
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
            + parseNumber(num.num[1])) === 9
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
            + parseNumber(num.num[1])) === 10
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
            + parseNumber(num.num[1])) === 11
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
            + parseNumber(num.num[1])) === 12
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
            + parseNumber(num.num[1])) === 13
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
            + parseNumber(num.num[1])) === 14
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
            + parseNumber(num.num[1])) === 15
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
            + parseNumber(num.num[1])) === 16
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
            + parseNumber(num.num[1])) === 17
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
            + parseNumber(num.num[1])) === 18
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
            + parseNumber(num.num[1])) === 19
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
            + parseNumber(num.num[1])) === 20
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
            + parseNumber(num.num[1])) === 21
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
