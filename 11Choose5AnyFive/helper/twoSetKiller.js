import uniqBy from 'lodash/uniqBy';

export function twoSetKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/killTwoSet/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.killTwoSetOneTwo) {
        return (
          num.num.match(/1.*2|2.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetOneThree) {
        return (
          num.num.match(/1.*3|3.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetOneFour) {
        return (
          num.num.match(/1.*4|4.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetOneFive) {
        return (
          num.num.match(/1.*5|5.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetOneSix) {
        return (
          num.num.match(/1.*6|6.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetOneSeven) {
        return (
          num.num.match(/1.*7|7.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetOneEight) {
        return (
          num.num.match(/1.*8|8.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetOneNine) {
        return (
          num.num.match(/1.*9|9.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetOneTen) {
        return (
          num.num.match(/1.*0|0.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetOneEleven) {
        return (
          num.num.match(/1.*E|E.*1/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetTwoThree) {
        return (
          num.num.match(/2.*3|3.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetTwoFour) {
        return (
          num.num.match(/2.*4|4.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetTwoFive) {
        return (
          num.num.match(/2.*5|5.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetTwoSix) {
        return (
          num.num.match(/2.*6|6.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetTwoSeven) {
        return (
          num.num.match(/2.*7|7.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetTwoEight) {
        return (
          num.num.match(/2.*8|8.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetTwoNine) {
        return (
          num.num.match(/2.*9|9.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetTwoTen) {
        return (
          num.num.match(/2.*0|0.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetTwoEleven) {
        return (
          num.num.match(/2.*E|E.*2/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetThreeFour) {
        return (
          num.num.match(/3.*4|4.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetThreeFive) {
        return (
          num.num.match(/3.*5|5.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetThreeSix) {
        return (
          num.num.match(/3.*6|6.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetThreeSeven) {
        return (
          num.num.match(/3.*7|7.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetThreeEight) {
        return (
          num.num.match(/3.*8|8.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetThreeNine) {
        return (
          num.num.match(/3.*9|9.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetThreeTen) {
        return (
          num.num.match(/3.*0|0.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetThreeEleven) {
        return (
          num.num.match(/3.*E|E.*3/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFourFive) {
        return (
          num.num.match(/4.*5|5.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFourSix) {
        return (
          num.num.match(/4.*6|6.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFourSeven) {
        return (
          num.num.match(/4.*7|7.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFourEight) {
        return (
          num.num.match(/4.*8|8.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFourNine) {
        return (
          num.num.match(/4.*9|9.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFourTen) {
        return (
          num.num.match(/4.*0|0.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFourEleven) {
        return (
          num.num.match(/4.*E|E.*4/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFiveSix) {
        return (
          num.num.match(/5.*6|6.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFiveSeven) {
        return (
          num.num.match(/5.*7|7.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFiveEight) {
        return (
          num.num.match(/5.*8|8.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFiveNine) {
        return (
          num.num.match(/5.*9|9.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFiveTen) {
        return (
          num.num.match(/5.*0|0.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetFiveEleven) {
        return (
          num.num.match(/5.*E|E.*5/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetSixSeven) {
        return (
          num.num.match(/6.*7|7.*6/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetSixEight) {
        return (
          num.num.match(/6.*8|8.*6/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetSixNine) {
        return (
          num.num.match(/6.*9|9.*6/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetSixTen) {
        return (
          num.num.match(/6.*0|0.*6/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetSixEleven) {
        return (
          num.num.match(/6.*E|E.*6/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetSevenEight) {
        return (
          num.num.match(/7.*8|8.*7/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetSevenNine) {
        return (
          num.num.match(/7.*9|9.*7/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetSevenTen) {
        return (
          num.num.match(/7.*0|0.*7/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetSevenEleven) {
        return (
          num.num.match(/7.*E|E.*7/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetEightNine) {
        return (
          num.num.match(/8.*9|9.*8/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetEightTen) {
        return (
          num.num.match(/8.*0|0.*8/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetEightEleven) {
        return (
          num.num.match(/8.*E|E.*8/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetNineTen) {
        return (
          num.num.match(/9.*0|0.*9/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetNineEleven) {
        return (
          num.num.match(/9.*E|E.*9/)
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.killTwoSetTenEleven) {
        return (
          num.num.match(/0.*E|E.*0/)
        );
      }

      return false;
    }),
  ];

  uniqBy(result, 'num').forEach(num => num.killFailed());

  return numbers;
}

export default { twoSetKiller };
