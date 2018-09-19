import { sumKiller } from '../helper/sumKiller';
import { acrossKiller } from '../helper/acrossKiller';
import { tailKiller } from '../helper/tailKiller';
import { allKiller } from '../helper/allKiller';

export const FILTER_ACTIONS = [
  sumKiller,
  acrossKiller,
  tailKiller,
  allKiller,
];

export default {
  FILTER_ACTIONS,
};
