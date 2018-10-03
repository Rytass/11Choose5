import NumberCandidate from '../shared/NumberCandidate';

function allRotated(list) {
  function rotatedTo(i) {
    const rotated = [];

    rotated.push(list[i]);

    return (
      rotated
        .concat(list.slice(0, i))
        .concat(list.slice(i + 1, list.length))
    );
  }

  const all = [];
  for (let i = 0; i < list.length; i += 1) {
    all.push(rotatedTo(i));
  }
  return all;
}

function perm(list) {
  const pls = [];

  if (list.length === 9) {
    pls.push([]);
  } else {
    allRotated(list).forEach((lt) => {
      perm(lt.slice(1, lt.length)).forEach((tailPl) => {
        const pl = [];

        pl.push(lt[0]);

        pls.push(pl.concat(tailPl));
      });
    });
  }

  return pls;
}

export default function initNumberPool() {
  const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'E'];

  const result = perm(list).map(item => new NumberCandidate(item.join('')));

  return result;
}
