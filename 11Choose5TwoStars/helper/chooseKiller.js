import intersectionBy from 'lodash/intersectionBy';
import { transOrigin } from './operator';
import NumberCandidate from '../shared/NumberCandidate.js';

export function chooseKiller(numbers, options) {
  if (!options.killChoose) return numbers;

  const targetChoose = options.killChoose.split(/[\n(\r\n)]/).map((num) => {
    const originNum = transOrigin(num);

    return new NumberCandidate(originNum);
  });

  intersectionBy(numbers, targetChoose, 'num').forEach((num) => {
    num.killFailed();
  });

  return numbers;
}

export default chooseKiller;
