import { baseKiller } from '../helper/baseKiller';
import { chooseKiller } from '../helper/chooseKiller';
import { acrossKiller } from '../helper/acrossKiller';
import { allKiller } from '../helper/allKiller';
import {
  bigNumberKeeper,
  oddNumberKeeper,
} from '../helper/amountKeeper';
import { sumKiller } from '../helper/sumKiller';
import { positionKiller } from '../helper/positionKiller';
import { bileKiller } from '../helper/bileKiller';
import { bigSmallKiller } from '../helper/bigSmallKiller';
import { oddEvenKiller } from '../helper/oddEvenKiller';
import { primeCompositeKiller } from '../helper/primeCompositeKiller';

export const FILTER_ACTIONS = [
  baseKiller,
  chooseKiller,
  acrossKiller,
  allKiller,
  bigNumberKeeper,
  oddNumberKeeper,
  sumKiller,
  positionKiller,
  bileKiller,
  bigSmallKiller,
  oddEvenKiller,
  primeCompositeKiller,
];

export default {
  FILTER_ACTIONS,
};
