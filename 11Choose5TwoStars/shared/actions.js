import { baseKiller } from '../helper/baseKiller';
import { chooseKiller } from '../helper/chooseKiller';
import { positionKiller } from '../helper/positionKiller';
import { bileKiller } from '../helper/bileKiller';

import { sumKiller } from '../helper/sumKiller';

export const FILTER_ACTIONS = [
  baseKiller,
  chooseKiller,
  positionKiller,
  bileKiller,
  sumKiller,
];

export default {
  FILTER_ACTIONS,
};
