export function transNumber(number) {
  const splitNum = number.split('').map((num) => {
    if (num === '0') return '10';

    if (num === 'E') return '11';

    return `0${num}`;
  });

  const resultNum = splitNum.join('\xa0\xa0');

  return resultNum;
}

export function transOrigin(text) {
  const numberArray = text.split(/\s/).filter(t => t).map((num) => {
    switch (num) {
      case '01':
        return '1';

      case '02':
        return '2';

      case '03':
        return '3';

      case '04':
        return '4';

      case '05':
        return '5';

      case '06':
        return '6';

      case '07':
        return '7';

      case '08':
        return '8';

      case '09':
        return '9';

      case '10':
        return '0';

      case '11':
        return 'E';

      default:
        return '';
    }
  });

  const result = numberArray.join('');

  return result;
}

export function parseNumber(num) {
  if (num === '0') return 10;

  if (num === 'E') return 11;

  return Number(num);
}
