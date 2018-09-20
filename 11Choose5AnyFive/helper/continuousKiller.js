import { parseNumber } from './operator';

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
            parseNumber(num.serial[3]) - parseNumber(num.serial[2]),
            parseNumber(num.serial[4]) - parseNumber(num.serial[3]),
          ];

          if (
            intervalArray[0] > 1
            && intervalArray[1] > 1
            && intervalArray[2] > 1
            && intervalArray[3] > 1
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
            parseNumber(num.serial[3]) - parseNumber(num.serial[2]),
            parseNumber(num.serial[4]) - parseNumber(num.serial[3]),
          ];

          if (
            (
              intervalArray[0] === 1
              && intervalArray[1] > 1
              && intervalArray[2] > 1
              && intervalArray[3] > 1
            )
            || (
              intervalArray[0] > 1
              && intervalArray[1] === 1
              && intervalArray[2] > 1
              && intervalArray[3] > 1
            )
            || (
              intervalArray[0] > 1
              && intervalArray[1] > 1
              && intervalArray[2] === 1
              && intervalArray[3] > 1
            )
            || (
              intervalArray[0] > 1
              && intervalArray[1] > 1
              && intervalArray[2] > 1
              && intervalArray[3] === 1
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
            parseNumber(num.serial[3]) - parseNumber(num.serial[2]),
            parseNumber(num.serial[4]) - parseNumber(num.serial[3]),
          ];

          if (
            (
              intervalArray[0] === 1
              && intervalArray[1] === 1
              && intervalArray[2] > 1
              && intervalArray[3] > 1
            )
            || (
              intervalArray[0] > 1
              && intervalArray[1] === 1
              && intervalArray[2] === 1
              && intervalArray[3] > 1
            )
            || (
              intervalArray[0] > 1
              && intervalArray[1] > 1
              && intervalArray[2] === 1
              && intervalArray[3] === 1
            )
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'fourContinuous': {
        numbers.forEach((num) => {
          const intervalArray = [
            parseNumber(num.serial[1]) - parseNumber(num.serial[0]),
            parseNumber(num.serial[2]) - parseNumber(num.serial[1]),
            parseNumber(num.serial[3]) - parseNumber(num.serial[2]),
            parseNumber(num.serial[4]) - parseNumber(num.serial[3]),
          ];

          if (
            (
              intervalArray[0] === 1
              && intervalArray[1] === 1
              && intervalArray[2] === 1
              && intervalArray[3] > 1
            )
            || (
              intervalArray[0] > 1
              && intervalArray[1] === 1
              && intervalArray[2] === 1
              && intervalArray[3] === 1
            )
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'fiveContinuous': {
        numbers.forEach((num) => {
          const intervalArray = [
            parseNumber(num.serial[1]) - parseNumber(num.serial[0]),
            parseNumber(num.serial[2]) - parseNumber(num.serial[1]),
            parseNumber(num.serial[3]) - parseNumber(num.serial[2]),
            parseNumber(num.serial[4]) - parseNumber(num.serial[3]),
          ];

          if (
            intervalArray[0] === 1
            && intervalArray[1] === 1
            && intervalArray[2] === 1
            && intervalArray[3] === 1
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'doubleTwoContinuous': {
        numbers.forEach((num) => {
          const intervalArray = [
            parseNumber(num.serial[1]) - parseNumber(num.serial[0]),
            parseNumber(num.serial[2]) - parseNumber(num.serial[1]),
            parseNumber(num.serial[3]) - parseNumber(num.serial[2]),
            parseNumber(num.serial[4]) - parseNumber(num.serial[3]),
          ];

          if (
            (
              intervalArray[0] === 1
              && intervalArray[1] > 1
              && intervalArray[2] > 1
              && intervalArray[3] === 1
            )
            || (
              intervalArray[0] === 1
              && intervalArray[1] > 1
              && intervalArray[2] === 1
              && intervalArray[3] > 1
            )
            || (
              intervalArray[0] > 1
              && intervalArray[1] === 1
              && intervalArray[2] > 1
              && intervalArray[3] === 1
            )
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'twoContinuousThreeContinuous': {
        numbers.forEach((num) => {
          const intervalArray = [
            parseNumber(num.serial[1]) - parseNumber(num.serial[0]),
            parseNumber(num.serial[2]) - parseNumber(num.serial[1]),
            parseNumber(num.serial[3]) - parseNumber(num.serial[2]),
            parseNumber(num.serial[4]) - parseNumber(num.serial[3]),
          ];

          if (
            intervalArray[0] === 1
            && intervalArray[3] === 1
            && (
              (intervalArray[1] === 1 && intervalArray[2] > 1)
              || (intervalArray[1] > 1 && intervalArray[2] === 1)
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

export default {
  continuousKiller,
};
