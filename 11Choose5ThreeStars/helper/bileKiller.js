import difference from 'lodash/difference';
import uniq from 'lodash/uniq';
import { parseNumber } from './operator';

function parseBileSet(numbers, set, bileNumbers) {
  if (!set.length) {
    return numbers;
  }

  const result = numbers.filter((num) => {
    const firstIndex = set.findIndex(bile => bile === parseNumber(num.num[0]));
    const secondIndex = set.findIndex(bile => bile === parseNumber(num.num[1]));
    const thirdIndex = set.findIndex(bile => bile === parseNumber(num.num[2]));

    if (bileNumbers.find(bileNumber => bileNumber)) {
      const bileLength = uniq([
        firstIndex,
        secondIndex,
        thirdIndex,
      ].filter(index => index >= 0)).length;

      return (
        (bileNumbers[0] ? bileLength === 0 : false)
        || (bileNumbers[1] ? bileLength === 1 : false)
        || (bileNumbers[2] ? bileLength === 2 : false)
        || (bileNumbers[3] ? bileLength === 3 : false)
      );
    }

    return ~firstIndex || ~secondIndex || ~thirdIndex;
  });

  return result;
}

function getBileNumbers(condition, options) {
  switch (condition) {
    case 'bileSet1':
      return [
        options.zeroOfbileSet1,
        options.oneOfbileSet1,
        options.twoOfbileSet1,
        options.threeOfbileSet1,
      ];

    case 'bileSet2':
      return [
        options.zeroOfbileSet2,
        options.oneOfbileSet2,
        options.twoOfbileSet2,
        options.threeOfbileSet2,
      ];

    case 'bileSet3':
      return [
        options.zeroOfbileSet3,
        options.oneOfbileSet3,
        options.twoOfbileSet3,
        options.threeOfbileSet3,
      ];

    case 'bileSet4':
      return [
        options.zeroOfbileSet4,
        options.oneOfbileSet4,
        options.twoOfbileSet4,
        options.threeOfbileSet4,
      ];

    default:
      return [];
  }
}

export function bileKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/bileSet[1234]/) && entry[1].length)
    .map(([condition, value]) => {
      const bileNumbers = getBileNumbers(condition, options);

      return parseBileSet(numbers, value, bileNumbers);
    });

  if (!composed.length) return numbers;

  composed.forEach(set => difference(numbers, set).forEach(num => num.bileFailed()));

  numbers.forEach((num) => {
    if (
      !options.bileFaultZero
      && !options.bileFaultOne
      && !options.bileFaultTwo
      && !options.bileFaultThree
      && !options.bileFaultFour
    ) {
      if (!num.isBilePass(0)) {
        num.killFailed();
        return;
      }
      return;
    }

    if (
      !(
        (options.bileFaultZero ? num.isBilePass(0) : false)
        || (options.bileFaultOne ? num.isBilePass(1) : false)
        || (options.bileFaultTwo ? num.isBilePass(2) : false)
        || (options.bileFaultThree ? num.isBilePass(3) : false)
        || (options.bileFaultFour ? num.isBilePass(4) : false)
      )
    ) {
      num.killFailed();
    }
  });

  return numbers;
}

export default bileKiller;
