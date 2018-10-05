import { parseNumber } from './operator';

export function tailKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/tail/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'tailZero': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) % 10 === 0
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'tailOne': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) % 10 === 1
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'tailTwo': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) % 10 === 2
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'tailThree': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) % 10 === 3
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'tailFour': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) % 10 === 4
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'tailFive': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) % 10 === 5
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'tailSix': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) % 10 === 6
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'tailSeven': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) % 10 === 7
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'tailEight': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) % 10 === 8
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'tailNine': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])) % 10 === 9
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

export default tailKiller;
