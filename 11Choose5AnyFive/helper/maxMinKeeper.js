import difference from 'lodash/difference';
import { parseNumber } from './operator';

export function maxKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/max/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.maxFive) {
        return (
          Math.max(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 5
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.maxSix) {
        return (
          Math.max(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 6
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.maxSeven) {
        return (
          Math.max(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 7
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.maxEight) {
        return (
          Math.max(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 8
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.maxNine) {
        return (
          Math.max(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 9
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.maxTen) {
        return (
          Math.max(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 10
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.maxEleven) {
        return (
          Math.max(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 11
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export function minKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/min/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.minOne) {
        return (
          Math.min(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 1
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.minTwo) {
        return (
          Math.min(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 2
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.minThree) {
        return (
          Math.min(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 3
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.minFour) {
        return (
          Math.min(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 4
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.minFive) {
        return (
          Math.min(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 5
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.minSix) {
        return (
          Math.min(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 6
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.minSeven) {
        return (
          Math.min(
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
            parseNumber(num.num[3]),
            parseNumber(num.num[4])
          ) === 7
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}
