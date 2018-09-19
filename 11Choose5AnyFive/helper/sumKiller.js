import { parseNumber } from './operator';

export function sumKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/killSum/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'killSumFifteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 15
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 16
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 17
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 18
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 19
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 20
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 21
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 22
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 23
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 24
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 25
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 26
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 27
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 28
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 29
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
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 30
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyOne': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 31
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyTwo': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 32
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyThree': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 33
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyFour': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 34
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyFive': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 35
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtySix': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 36
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtySeven': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 37
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyEight': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 38
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyNine': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 39
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFourty': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 40
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFourtyOne': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 41
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFourtyTwo': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 42
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFourtyThree': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 43
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFourtyFour': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 44
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFourtyFive': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])
            + parseNumber(num.num[4])) === 45
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
