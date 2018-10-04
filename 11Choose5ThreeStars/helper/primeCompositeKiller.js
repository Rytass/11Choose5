export function primeCompositeKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/[pc]{3}/) && entry[1] === true)
    .map(([condition]) =>
      `(${Array.from(condition).map((key) => {
        switch (key) {
          case 'p':
            return '[12357E]';

          case 'c':
            return '[46890]';

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

export default primeCompositeKiller;
