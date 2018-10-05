export function zeroOneTwoKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/[ZOT]{3}/) && entry[1] === true)
    .map(([condition]) =>
      `(${Array.from(condition).map((key) => {
        switch (key) {
          case 'Z':
            return '[369]';

          case 'O':
            return '[1470]';

          case 'T':
            return '[258E]';

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

export default zeroOneTwoKiller;
