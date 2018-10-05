import difference from 'lodash/difference';
import { parseNumber } from './operator';
import {
  BIG_DEFINITONS_SIX_ELEVEN,
  BIG_DEFINITONS_SEVEN_ELEVEN,
} from '../shared/bigDefinition';

function parseBigDefinition(definition) {
  switch (definition) {
    case BIG_DEFINITONS_SIX_ELEVEN:
      return 5;

    case BIG_DEFINITONS_SEVEN_ELEVEN:
      return 6;

    default:
      return 0;
  }
}

export function bigNumberKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/bigNumber/) && entry[1] === true);

  if (!composed.length) return numbers;

  const bigDefinition = parseBigDefinition(options.bigDefinition);

  const result = [
    ...numbers.filter((num) => {
      if (options.bigNumberZero) {
        return (
          [
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
          ].filter(n => n > bigDefinition).length === 0
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigNumberOne) {
        return (
          [
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
          ].filter(n => n > bigDefinition).length === 1
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigNumberTwo) {
        return (
          [
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
          ].filter(n => n > bigDefinition).length === 2
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigNumberThree) {
        return (
          [
            parseNumber(num.num[0]),
            parseNumber(num.num[1]),
            parseNumber(num.num[2]),
          ].filter(n => n > bigDefinition).length === 3
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export function oddNumberKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/oddNumber/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.oddNumberZero) {
        return (
          [
            num.num[0],
            num.num[1],
            num.num[2],
          ].filter(n => n.match(/[13579E]/)).length === 0
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.oddNumberOne) {
        return (
          [
            num.num[0],
            num.num[1],
            num.num[2],
          ].filter(n => n.match(/[13579E]/)).length === 1
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.oddNumberTwo) {
        return (
          [
            num.num[0],
            num.num[1],
            num.num[2],
          ].filter(n => n.match(/[13579E]/)).length === 2
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.oddNumberThree) {
        return (
          [
            num.num[0],
            num.num[1],
            num.num[2],
          ].filter(n => n.match(/[13579E]/)).length === 3
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}
