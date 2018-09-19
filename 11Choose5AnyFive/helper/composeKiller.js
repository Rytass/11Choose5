import flatten from 'lodash/flatten';
import uniqBy from 'lodash/uniqBy';
import intersectionBy from 'lodash/intersectionBy';
import { transOrigin } from './operator';
import NumberCandidate from '../shared/NumberCandidate.js';

function combination(number) {
  const array = number.split('');
  const result = [];

  for (let i = 0, len1 = array.length; i < len1; i += 1) {
    const a2 = array.concat();
    a2.splice(0, i + 1);
    for (let j = 0, len2 = a2.length; j < len2; j += 1) {
      const a3 = a2.concat();
      a3.splice(0, j + 1);
      for (let k = 0, len3 = a3.length; k < len3; k += 1) {
        const a4 = a3.concat();
        a4.splice(0, k + 1);
        for (let l = 0, len4 = a4.length; l < len4; l += 1) {
          const a5 = a4.concat();
          a5.splice(0, l + 1);
          for (let m = 0, len5 = a5.length; m < len5; m += 1) {
            result.push(`${array[i]}${a2[j]}${a3[k]}${a4[l]}${a5[m]}`);
          }
        }
      }
    }
  }

  return result;
}

export function composeKiller(numbers, options) {
  if (!options.killCompose) return numbers;

  const usefulCompose = flatten(options.killCompose.split(/[\n(\r\n)]/).map((num) => {
    const originNum = transOrigin(num);

    return combination(originNum);
  }));

  const targetCompose = uniqBy(usefulCompose.map(num => new NumberCandidate(num)), 'num');

  intersectionBy(numbers, targetCompose, 'num').forEach((num) => {
    num.killFailed();
  });

  return numbers;
}

export default composeKiller;
