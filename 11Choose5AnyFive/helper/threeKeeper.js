import {
  parseNumber,
  transOrigin,
} from './operator';

export function threeKeeper(numbers, options) {
  const threes = options.keepThree.split(/[\n(\r\n)]/).map((num) => {
    const targets = Array.from(transOrigin(num)).sort((a, b) => parseNumber(a) > parseNumber(b));
    return new RegExp(`${targets[0]}.*${targets[1]}.*${targets[2]}`);
  });

  if (!options.keepThree) return numbers;

  numbers.forEach((num) => {
    if (!threes.some(re => num.serial.match(re))) {
      num.killFailed();
    }
  });

  return numbers;
}

export default threeKeeper;
