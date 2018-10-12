import NumberCandidate from '../shared/NumberCandidate.js';
import { transOrigin } from './operator';

export function baseKiller(numbers, options) {
  if (!options.base) return numbers;

  const usefulBase = options.base.split(/[\n(\r\n)]/).filter(t => transOrigin(t).length === 3);

  return usefulBase.map((num) => {
    const originNum = transOrigin(num);

    return new NumberCandidate(originNum);
  });
}

export default baseKiller;
