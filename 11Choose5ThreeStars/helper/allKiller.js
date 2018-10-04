export function allKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/all[One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven]/) && entry[1] === true)
    .map(([condition]) => {
      switch (condition) {
        case 'allOne':
          return '(.*1.*)';

        case 'allTwo':
          return '(.*2.*)';

        case 'allThree':
          return '(.*3.*)';

        case 'allFour':
          return '(.*4.*)';

        case 'allFive':
          return '(.*5.*)';

        case 'allSix':
          return '(.*6.*)';

        case 'allSeven':
          return '(.*7.*)';

        case 'allEight':
          return '(.*8.*)';

        case 'allNine':
          return '(.*9.*)';

        case 'allTen':
          return '(.*0.*)';

        case 'allEleven':
          return '(.*E.*)';

        default:
          return '';
      }
    }).join('|');

  if (!composed) return numbers;

  const re = new RegExp(composed);

  numbers.forEach((num) => {
    if (`${num.num}`.match(re)) {
      num.killFailed();
    }
  });

  return numbers;
}

export default allKiller;
