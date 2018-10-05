import { baseKiller } from '../helper/baseKiller';
import { chooseKiller } from '../helper/chooseKiller';
import { acrossKiller } from '../helper/acrossKiller';
import { allKiller } from '../helper/allKiller';
import {
  bigNumberKeeper,
  oddNumberKeeper,
} from '../helper/amountKeeper';
import {
  hillKiller,
  continuousKiller,
} from '../helper/specialKiller';
import { sumKiller } from '../helper/sumKiller';
import { positionKiller } from '../helper/positionKiller';
import { bileKiller } from '../helper/bileKiller';
import { bigSmallKiller } from '../helper/bigSmallKiller';
import { oddEvenKiller } from '../helper/oddEvenKiller';
import { primeCompositeKiller } from '../helper/primeCompositeKiller';
import { twoSetKiller } from '../helper/twoSetKiller';
import { twoSetKeeper } from '../helper/twoSetKeeper';
import {
  twoAcrossKeeper,
  twoFitKeeper,
} from '../helper/acrossFitKeeper';
import { trashKiller } from '../helper/trashKiller';
import { zeroOneTwoKiller } from '../helper/zeroOneTwoKiller';
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
  chooseKiller,
  acrossKiller,
  allKiller,
  bigNumberKeeper,
  oddNumberKeeper,
  hillKiller,
  continuousKiller,
  sumKiller,
  positionKiller,
  bileKiller,
  bigSmallKiller,
  oddEvenKiller,
  primeCompositeKiller,
  twoSetKiller,
  twoSetKeeper,
  twoAcrossKeeper,
  twoFitKeeper,
  trashKiller,
  zeroOneTwoKiller,
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
