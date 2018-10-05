import intersection from 'lodash/intersection';
import difference from 'lodash/difference';
import uniq from 'lodash/uniq';
import { parseNumber } from './operator';

function parseTwoAcrossSet(numbers, set, count, isCountWeight) {
  if (!set.length) {
    return numbers;
  }

  const result = numbers.filter((num) => {
    const firstIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[0]) - parseNumber(num.num[1]))
    ));
    const secondIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[0]) - parseNumber(num.num[2]))
    ));
    const thirdIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[1]) - parseNumber(num.num[2]))
    ));


    if (count.find(c => c)) {
      if (isCountWeight) {
        const countLength = [
          !!~firstIndex,
          !!~secondIndex,
          !!~thirdIndex,
        ].filter(index => index).length;

        return (
          (count[0] ? countLength === 0 : false)
          || (count[1] ? countLength === 1 : false)
          || (count[2] ? countLength === 2 : false)
          || (count[3] ? countLength === 3 : false)
        );
      }

      const countLength = uniq([
        firstIndex,
        secondIndex,
        thirdIndex,
      ].filter(index => index >= 0)).length;

      return (
        (count[0] ? countLength === 0 : false)
        || (count[1] ? countLength === 1 : false)
        || (count[2] ? countLength === 2 : false)
        || (count[3] ? countLength === 3 : false)
      );
    }

    return (
      ~firstIndex
      || ~secondIndex
      || ~thirdIndex
    );
  });

  return result;
}

function parseTwoFitSet(numbers, set, count, isCountWeight) {
  if (!set.length) {
    return numbers;
  }

  const result = numbers.filter((num) => {
    const firstIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[0]) + parseNumber(num.num[1])) % 10
    ));
    const secondIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[0]) + parseNumber(num.num[2])) % 10
    ));
    const thirdIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[1]) + parseNumber(num.num[2])) % 10
    ));


    if (count.find(c => c)) {
      if (isCountWeight) {
        const countLength = [
          !!~firstIndex,
          !!~secondIndex,
          !!~thirdIndex,
        ].filter(index => index).length;

        return (
          (count[0] ? countLength === 0 : false)
          || (count[1] ? countLength === 1 : false)
          || (count[2] ? countLength === 2 : false)
          || (count[3] ? countLength === 3 : false)
        );
      }

      const countLength = uniq([
        firstIndex,
        secondIndex,
        thirdIndex,
      ].filter(index => index >= 0)).length;

      return (
        (count[0] ? countLength === 0 : false)
        || (count[1] ? countLength === 1 : false)
        || (count[2] ? countLength === 2 : false)
        || (count[3] ? countLength === 3 : false)
      );
    }

    return (
      ~firstIndex
      || ~secondIndex
      || ~thirdIndex
    );
  });

  return result;
}

function getCount(condition, options) {
  switch (condition) {
    case 'keepTwoAcrossSet':
      return [
        options.keepTwoAcrossNumberZero,
        options.keepTwoAcrossNumberOne,
        options.keepTwoAcrossNumberTwo,
        options.keepTwoAcrossNumberThree,
      ];

    case 'keepTwoFitSet':
      return [
        options.keepTwoFitNumberZero,
        options.keepTwoFitNumberOne,
        options.keepTwoFitNumberTwo,
        options.keepTwoFitNumberThree,
      ];

    default:
      return [];
  }
}

export function twoAcrossKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/keepTwoAcrossSet/) && entry[1].length)
    .map(([condition, value]) => {
      const count = getCount(condition, options);

      return parseTwoAcrossSet(numbers, value, count, options.keepTwoAcrossCountWeight);
    });

  if (!composed.length) return numbers;

  const [
    twoAcrossSet,
  ] = composed;

  const result = intersection(
    (twoAcrossSet || numbers),
  );

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export function twoFitKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/keepTwoFitSet/) && entry[1].length)
    .map(([condition, value]) => {
      const count = getCount(condition, options);

      return parseTwoFitSet(numbers, value, count, options.keepTwoFitCountWeight);
    });

  if (!composed.length) return numbers;

  const [
    twoFitSet,
  ] = composed;

  const result = intersection(
    (twoFitSet || numbers),
  );

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}
