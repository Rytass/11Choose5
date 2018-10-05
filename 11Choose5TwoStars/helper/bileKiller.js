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

    if (bileNumbers.find(bileNumber => bileNumber)) {
      const bileLength = uniq([
        firstIndex,
        secondIndex,
      ].filter(index => index >= 0)).length;

      return (
        (bileNumbers[0] ? bileLength === 0 : false)
        || (bileNumbers[1] ? bileLength === 1 : false)
        || (bileNumbers[2] ? bileLength === 2 : false)
      );
    }

    return ~firstIndex || ~secondIndex;
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
      ];

    case 'bileSet2':
      return [
        options.zeroOfbileSet2,
        options.oneOfbileSet2,
        options.twoOfbileSet2,
      ];

    case 'bileSet3':
      return [
        options.zeroOfbileSet3,
        options.oneOfbileSet3,
        options.twoOfbileSet3,
      ];

    default:
      return [];
  }
}

export function bileKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/bileSet[123]/) && entry[1].length)
    .map(([condition, value]) => {
      const bileNumbers = getBileNumbers(condition, options);

      return parseBileSet(numbers, value, bileNumbers);
    });

  if (!composed.length) return numbers;

  composed.forEach(set => difference(numbers, set).forEach(num => num.bileFailed()));

  numbers.forEach((num) => {
    if (!num.isBilePass(0)) {
      num.killFailed();
    }
  });

  return numbers;
}

export default bileKiller;
