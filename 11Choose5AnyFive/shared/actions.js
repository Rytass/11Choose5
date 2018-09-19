import { baseKiller } from '../helper/baseKiller';
import { sumKiller } from '../helper/sumKiller';
import { acrossKiller } from '../helper/acrossKiller';
import { tailKiller } from '../helper/tailKiller';
import { allKiller } from '../helper/allKiller';
import {
  bigNumberKeeper,
  oddNumberKeeper,
  primeNumberKeeper,
} from '../helper/amountKeeper';
import { continuousKiller } from '../helper/continuousKiller';
import { bileKiller } from '../helper/bileKiller';
import {
  maxKeeper,
  minKeeper,
} from '../helper/maxMinKeeper';
import { twoSetKiller } from '../helper/twoSetKiller';
import { twoSetKeeper } from '../helper/twoSetKeeper';
import {
  twoAcrossKeeper,
  twoFitKeeper,
  threeFitKeeper,
  fourFitKeeper,
} from '../helper/acrossFitKeeper';
import {
  bigTypeKeeper,
  oddTypeKeeper,
  primeTypeKeeper,
  zeroLoadTypeKeeper,
  oneLoadTypeKeeper,
  twoLoadTypeKeeper,
} from '../helper/typeKeeper';

export const FILTER_ACTIONS = [
  baseKiller,
  sumKiller,
  acrossKiller,
  tailKiller,
  allKiller,
  bigNumberKeeper,
  oddNumberKeeper,
  primeNumberKeeper,
  continuousKiller,
  bileKiller,
  maxKeeper,
  minKeeper,
  twoSetKiller,
  twoSetKeeper,
  twoAcrossKeeper,
  twoFitKeeper,
  threeFitKeeper,
  fourFitKeeper,
  bigTypeKeeper,
  oddTypeKeeper,
  primeTypeKeeper,
  zeroLoadTypeKeeper,
  oneLoadTypeKeeper,
  twoLoadTypeKeeper,
];

export default {
  FILTER_ACTIONS,
};
