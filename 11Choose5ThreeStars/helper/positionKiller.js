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

  const third = [
    options.thirdOne,
    options.thirdTwo,
    options.thirdThree,
    options.thirdFour,
    options.thirdFive,
    options.thirdSix,
    options.thirdSeven,
    options.thirdEight,
    options.thirdNine,
    options.thirdTen,
    options.thirdEleven,
  ];

  numbers.forEach((num) => {
    if (first[parseNumber(num.num[0]) - 1]) {
      num.failed();
    }

    if (second[parseNumber(num.num[1]) - 1]) {
      num.failed();
    }

    if (third[parseNumber(num.num[2]) - 1]) {
      num.failed();
    }

    if (
      !options.positionFaultZero
      && !options.positionFaultOne
      && !options.positionFaultTwo
      && !options.positionFaultThree
    ) {
      if (!num.isPass(0)) {
        num.killFailed();
        return;
      }
      return;
    }

    if (
      !(
        (options.positionFaultZero ? num.isPass(0) : false)
        || (options.positionFaultOne ? num.isPass(1) : false)
        || (options.positionFaultTwo ? num.isPass(2) : false)
        || (options.positionFaultThree ? num.isPass(3) : false)
      )
    ) {
      num.killFailed();
    }
  });

  return numbers;
}

export default positionKiller;
