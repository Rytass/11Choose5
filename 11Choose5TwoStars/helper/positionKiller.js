import { parseNumber } from './operator';

export function positionKiller(numbers, options) {
  const first = [
    options.firstOne,
    options.firstTwo,
    options.firstThree,
    options.firstFour,
    options.firstFive,
    options.firstSix,
    options.firstSeven,
    options.firstEight,
    options.firstNine,
    options.firstTen,
    options.firstEleven,
  ];

  const second = [
    options.secondOne,
    options.secondTwo,
    options.secondThree,
    options.secondFour,
    options.secondFive,
    options.secondSix,
    options.secondSeven,
    options.secondEight,
    options.secondNine,
    options.secondTen,
    options.secondEleven,
  ];

  numbers.forEach((num) => {
    if (first[parseNumber(num.num[0]) - 1]) {
      num.failed();
    }

    if (second[parseNumber(num.num[1]) - 1]) {
      num.failed();
    }

    if (!num.isPass(0)) {
      num.killFailed();
    }
  });

  return numbers;
}

export default positionKiller;
