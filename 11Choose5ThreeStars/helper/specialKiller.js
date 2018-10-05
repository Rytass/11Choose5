import { parseNumber } from './operator';

export function hillKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/hill|convex|concave/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'uphill': {
        numbers.forEach((num) => {
          if (
            parseNumber(num.num[0]) <= parseNumber(num.num[1])
            && parseNumber(num.num[1]) <= parseNumber(num.num[2])
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'downhill': {
        numbers.forEach((num) => {
          if (
            parseNumber(num.num[0]) >= parseNumber(num.num[1])
            && parseNumber(num.num[1]) >= parseNumber(num.num[2])
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'convex': {
        numbers.forEach((num) => {
          if (
            parseNumber(num.num[1]) > parseNumber(num.num[0])
            && parseNumber(num.num[1]) > parseNumber(num.num[2])
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'concave': {
        numbers.forEach((num) => {
          if (
            parseNumber(num.num[1]) < parseNumber(num.num[0])
            && parseNumber(num.num[1]) < parseNumber(num.num[2])
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

export function continuousKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/Continuous/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'noContinuous': {
        numbers.forEach((num) => {
          const intervalArray = [
            parseNumber(num.serial[1]) - parseNumber(num.serial[0]),
            parseNumber(num.serial[2]) - parseNumber(num.serial[1]),
          ];

          if (
            intervalArray[0] > 1
            && intervalArray[1] > 1
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'twoContinuous': {
        numbers.forEach((num) => {
          const intervalArray = [
            parseNumber(num.serial[1]) - parseNumber(num.serial[0]),
            parseNumber(num.serial[2]) - parseNumber(num.serial[1]),
          ];

          if (
            (
              intervalArray[0] === 1
              && intervalArray[1] > 1
            )
            || (
              intervalArray[0] > 1
              && intervalArray[1] === 1
            )
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'threeContinuous': {
        numbers.forEach((num) => {
          const intervalArray = [
            parseNumber(num.serial[1]) - parseNumber(num.serial[0]),
            parseNumber(num.serial[2]) - parseNumber(num.serial[1]),
          ];

          if (
            (
              intervalArray[0] === 1
              && intervalArray[1] === 1
            )
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
