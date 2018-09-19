import { sumKiller } from '../helper/sumKiller';
import { acrossKiller } from '../helper/acrossKiller';
import { tailKiller } from '../helper/tailKiller';

export const FILTER_ACTIONS = [
  sumKiller,
  acrossKiller,
  tailKiller,
];

export default {
  FILTER_ACTIONS,
};
