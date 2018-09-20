import flatten from 'lodash/flatten';
import {
  parseNumber,
  transOrigin,
} from './operator';

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
          result.push(`${array[i]}${a2[j]}${a3[k]}${a4[l]}`);
        }
      }
    }
  }

  return result;
}

export function fourKeeper(numbers, options) {
  const usefulFours = flatten(options.keepFour.split(/[\n(\r\n)]/).map(num => combination(transOrigin(num))));

  const fours = usefulFours.map((num) => {
    const targets = Array.from(num).sort((a, b) => parseNumber(a) > parseNumber(b));
    return new RegExp(`${targets[0]}.*${targets[1]}.*${targets[2]}.*${targets[3]}`);
  });

  if (!options.keepFour) return numbers;

  numbers.forEach((num) => {
    if (!fours.some(re => num.serial.match(re))) {
      num.killFailed();
    }
  });

  return numbers;
}

export default fourKeeper;
