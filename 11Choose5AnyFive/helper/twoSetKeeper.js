import difference from 'lodash/difference';

export function twoSetKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/keepTwoSet/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.keepTwoSetOneTwo) {
        return (
          num.num.match(/1.*2|2.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetOneThree) {
        return (
          num.num.match(/1.*3|3.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetOneFour) {
        return (
          num.num.match(/1.*4|4.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetOneFive) {
        return (
          num.num.match(/1.*5|5.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetOneSix) {
        return (
          num.num.match(/1.*6|6.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetOneSeven) {
        return (
          num.num.match(/1.*7|7.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetOneEight) {
        return (
          num.num.match(/1.*8|8.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetOneNine) {
        return (
          num.num.match(/1.*9|9.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetOneTen) {
        return (
          num.num.match(/1.*0|0.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetOneEleven) {
        return (
          num.num.match(/1.*E|E.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetTwoThree) {
        return (
          num.num.match(/2.*3|3.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetTwoFour) {
        return (
          num.num.match(/2.*4|4.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetTwoFive) {
        return (
          num.num.match(/2.*5|5.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetTwoSix) {
        return (
          num.num.match(/2.*6|6.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetTwoSeven) {
        return (
          num.num.match(/2.*7|7.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetTwoEight) {
        return (
          num.num.match(/2.*8|8.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetTwoNine) {
        return (
          num.num.match(/2.*9|9.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetTwoTen) {
        return (
          num.num.match(/2.*0|0.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetTwoEleven) {
        return (
          num.num.match(/2.*E|E.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetThreeFour) {
        return (
          num.num.match(/3.*4|4.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetThreeFive) {
        return (
          num.num.match(/3.*5|5.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetThreeSix) {
        return (
          num.num.match(/3.*6|6.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetThreeSeven) {
        return (
          num.num.match(/3.*7|7.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetThreeEight) {
        return (
          num.num.match(/3.*8|8.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetThreeNine) {
        return (
          num.num.match(/3.*9|9.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetThreeTen) {
        return (
          num.num.match(/3.*0|0.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetThreeEleven) {
        return (
          num.num.match(/3.*E|E.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFourFive) {
        return (
          num.num.match(/4.*5|5.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFourSix) {
        return (
          num.num.match(/4.*6|6.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFourSeven) {
        return (
          num.num.match(/4.*7|7.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFourEight) {
        return (
          num.num.match(/4.*8|8.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFourNine) {
        return (
          num.num.match(/4.*9|9.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFourTen) {
        return (
          num.num.match(/4.*0|0.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFourEleven) {
        return (
          num.num.match(/4.*E|E.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFiveSix) {
        return (
          num.num.match(/5.*6|6.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFiveSeven) {
        return (
          num.num.match(/5.*7|7.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFiveEight) {
        return (
          num.num.match(/5.*8|8.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFiveNine) {
        return (
          num.num.match(/5.*9|9.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFiveTen) {
        return (
          num.num.match(/5.*0|0.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetFiveEleven) {
        return (
          num.num.match(/5.*E|E.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetSixSeven) {
        return (
          num.num.match(/6.*7|7.*6/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetSixEight) {
        return (
          num.num.match(/6.*8|8.*6/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetSixNine) {
        return (
          num.num.match(/6.*9|9.*6/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetSixTen) {
        return (
          num.num.match(/6.*0|0.*6/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetSixEleven) {
        return (
          num.num.match(/6.*E|E.*6/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetSevenEight) {
        return (
          num.num.match(/7.*8|8.*7/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetSevenNine) {
        return (
          num.num.match(/7.*9|9.*7/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetSevenTen) {
        return (
          num.num.match(/7.*0|0.*7/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetSevenEleven) {
        return (
          num.num.match(/7.*E|E.*7/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetEightNine) {
        return (
          num.num.match(/8.*9|9.*8/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetEightTen) {
        return (
          num.num.match(/8.*0|0.*8/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetEightEleven) {
        return (
          num.num.match(/8.*E|E.*8/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetNineTen) {
        return (
          num.num.match(/9.*0|0.*9/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetNineEleven) {
        return (
          num.num.match(/9.*E|E.*9/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.keepTwoSetTenEleven) {
        return (
          num.num.match(/0.*E|E.*0/)
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export default { twoSetKeeper };
