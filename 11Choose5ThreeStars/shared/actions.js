import { baseKiller } from '../helper/baseKiller';
import { chooseKiller } from '../helper/chooseKiller';
import { acrossKiller } from '../helper/acrossKiller';
import { allKiller } from '../helper/allKiller';

export const FILTER_ACTIONS = [
  baseKiller,
  chooseKiller,
  acrossKiller,
  allKiller,
];

export default {
  FILTER_ACTIONS,
};
