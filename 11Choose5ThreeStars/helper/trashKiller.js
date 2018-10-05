import { transOrigin } from './operator';

export function trashKiller(numbers, options) {
  if (!options.trash) return numbers;

  const trashSet = options.trash.split(/[\n(\r\n)]/).filter(t => t);

  trashSet.forEach((set) => {
    const [
      first,
      second,
      third,
    ] = set.split('*');

    const firstText = transOrigin(first);
    const secondText = transOrigin(second);
    const thirdText = transOrigin(third);

    numbers.forEach((num) => {
      if (
        ~firstText.indexOf(num.num[0])
        && ~secondText.indexOf(num.num[1])
        && ~thirdText.indexOf(num.num[2])
      ) {
        num.killFailed();
      }
    });
  });

  return numbers;
}

export default trashKiller;
