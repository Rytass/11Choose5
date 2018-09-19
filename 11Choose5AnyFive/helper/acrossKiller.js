import { parseNumber } from './operator';

export function acrossKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/across/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'acrossFour': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            ) === 4
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossFive': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            ) === 5
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossSix': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            ) === 6
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossSeven': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            ) === 7
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossEight': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            ) === 8
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossNine': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            ) === 9
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossTen': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1]),
              parseNumber(num.num[2]),
              parseNumber(num.num[3]),
              parseNumber(num.num[4])
            ) === 10
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

export default acrossKiller;
