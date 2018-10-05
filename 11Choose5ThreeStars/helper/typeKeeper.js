import difference from 'lodash/difference';

function getTargetArray(num) {
  return [
    num.num[0],
    num.num[1],
    num.num[2],
  ];
}

export function bigTypeKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/bigType/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.bigTypeZero) {
        return (
          getTargetArray(num).filter(target => target.match(/[7890E]/)).length === 0
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigTypeOne) {
        return (
          getTargetArray(num).filter(target => target.match(/[7890E]/)).length === 1
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigTypeTwo) {
        return (
          getTargetArray(num).filter(target => target.match(/[7890E]/)).length === 2
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigTypeThree) {
        return (
          getTargetArray(num).filter(target => target.match(/[7890E]/)).length === 3
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export function oddTypeKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/oddType/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.oddTypeZero) {
        return (
          getTargetArray(num).filter(target => target.match(/[13579E]/)).length === 0
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.oddTypeOne) {
        return (
          getTargetArray(num).filter(target => target.match(/[13579E]/)).length === 1
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.oddTypeTwo) {
        return (
          getTargetArray(num).filter(target => target.match(/[13579E]/)).length === 2
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.oddTypeThree) {
        return (
          getTargetArray(num).filter(target => target.match(/[13579E]/)).length === 3
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export function primeTypeKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/primeType/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.primeTypeZero) {
        return (
          getTargetArray(num).filter(target => target.match(/[12357E]/)).length === 0
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.primeTypeOne) {
        return (
          getTargetArray(num).filter(target => target.match(/[12357E]/)).length === 1
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.primeTypeTwo) {
        return (
          getTargetArray(num).filter(target => target.match(/[12357E]/)).length === 2
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.primeTypeThree) {
        return (
          getTargetArray(num).filter(target => target.match(/[12357E]/)).length === 3
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export function zeroLoadTypeKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/zeroLoadType/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.zeroLoadTypeZero) {
        return (
          getTargetArray(num).filter(target => target.match(/[369]/)).length === 0
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.zeroLoadTypeOne) {
        return (
          getTargetArray(num).filter(target => target.match(/[369]/)).length === 1
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.zeroLoadTypeTwo) {
        return (
          getTargetArray(num).filter(target => target.match(/[369]/)).length === 2
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.zeroLoadTypeThree) {
        return (
          getTargetArray(num).filter(target => target.match(/[369]/)).length === 3
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export function oneLoadTypeKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/oneLoadType/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.oneLoadTypeZero) {
        return (
          getTargetArray(num).filter(target => target.match(/[1470]/)).length === 0
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.oneLoadTypeOne) {
        return (
          getTargetArray(num).filter(target => target.match(/[1470]/)).length === 1
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.oneLoadTypeTwo) {
        return (
          getTargetArray(num).filter(target => target.match(/[1470]/)).length === 2
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.oneLoadTypeThree) {
        return (
          getTargetArray(num).filter(target => target.match(/[1470]/)).length === 3
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export function twoLoadTypeKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/twoLoadType/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.twoLoadTypeZero) {
        return (
          getTargetArray(num).filter(target => target.match(/[258E]/)).length === 0
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.twoLoadTypeOne) {
        return (
          getTargetArray(num).filter(target => target.match(/[258E]/)).length === 1
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.twoLoadTypeTwo) {
        return (
          getTargetArray(num).filter(target => target.match(/[258E]/)).length === 2
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.twoLoadTypeThree) {
        return (
          getTargetArray(num).filter(target => target.match(/[258E]/)).length === 3
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}
