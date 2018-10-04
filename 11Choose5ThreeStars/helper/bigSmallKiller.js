export function bigSmallKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/[bs]{3}/) && entry[1] === true)
    .map(([condition]) =>
      `(${Array.from(condition).map((key) => {
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
