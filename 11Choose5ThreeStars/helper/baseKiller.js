import NumberCandidate from '../shared/NumberCandidate.js';
import { transOrigin } from './operator';

export function baseKiller(numbers, options) {
  if (!options.base) return numbers;

  return options.base.split(/[\n(\r\n)]/).map((num) => {
    const originNum = transOrigin(num);

    return new NumberCandidate(originNum);
  });
}

export default baseKiller;
