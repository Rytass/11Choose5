import { baseKiller } from '../helper/baseKiller';
import { chooseKiller } from '../helper/chooseKiller';
import { acrossKiller } from '../helper/acrossKiller';
import { allKiller } from '../helper/allKiller';
import { sumKiller } from '../helper/sumKiller';

import { bigSmallKiller } from '../helper/bigSmallKiller';
import { oddEvenKiller } from '../helper/oddEvenKiller';
import { primeCompositeKiller } from '../helper/primeCompositeKiller';

export const FILTER_ACTIONS = [
  baseKiller,
  chooseKiller,
  acrossKiller,
  allKiller,
  sumKiller,
  bigSmallKiller,
  oddEvenKiller,
  primeCompositeKiller,
];

export default {
  FILTER_ACTIONS,
};
