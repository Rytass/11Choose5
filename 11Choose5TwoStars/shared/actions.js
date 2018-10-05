import { baseKiller } from '../helper/baseKiller';
import { chooseKiller } from '../helper/chooseKiller';
import { positionKiller } from '../helper/positionKiller';
import { bileKiller } from '../helper/bileKiller';
import { acrossKiller } from '../helper/acrossKiller';
import { tailKiller } from '../helper/tailKiller';
import { sumKiller } from '../helper/sumKiller';
import { zeroOneTwoKiller } from '../helper/zeroOneTwoKiller';
import {
  hillKiller,
  continuousKiller,
} from '../helper/specialKiller';

export const FILTER_ACTIONS = [
  baseKiller,
  chooseKiller,
  positionKiller,
  bileKiller,
  acrossKiller,
  tailKiller,
  sumKiller,
  zeroOneTwoKiller,
  hillKiller,
  continuousKiller,
];

export default {
  FILTER_ACTIONS,
};
