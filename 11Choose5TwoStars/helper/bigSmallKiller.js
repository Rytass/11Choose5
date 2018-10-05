import { BIG_DEFINITONS_SIX_ELEVEN } from '../shared/bigDefinition';

export function bigSmallKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/[bs]{2}/) && entry[1] === true)
    .map(([condition]) =>
      `(${Array.from(condition).map((key) => {
        if (options.bigDefinition === BIG_DEFINITONS_SIX_ELEVEN) {
          switch (key) {
            case 'b':
              return '[67890E]';

            case 's':
              return '[12345]';

            default:
              return '.';
          }
        }

        switch (key) {
          case 'b':
            return '[7890E]';

          case 's':
            return '[123456]';

          default:
            return '.';
        }
      }).join('')})`).join('|');

  if (!composed) return numbers;

  const re = new RegExp(composed);

  numbers.forEach((num) => {
    if (`${num.num}`.match(re)) {
      num.killFailed();
    }
  });

  return numbers;
}

export default bigSmallKiller;
