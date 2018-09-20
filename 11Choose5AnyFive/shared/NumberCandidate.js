import { parseNumber } from '../helper/operator';

export default class NumberCandidate {
  constructor(num) {
    this.num = num;
    this.failedCount = 0;
    this.bileFailedCount = 0;
    this.killFailedCount = 0;
  }

  resetFailed() {
    this.failedCount = 0;
  }

  failed() {
    this.failedCount += 1;
  }

  killFailed() {
    this.killFailedCount += 1;
  }

  bileFailed() {
    this.bileFailedCount += 1;
  }

  isBilePass(limit = 0) {
    return this.bileFailedCount === limit;
  }

  isPass(limit = 0) {
    return this.failedCount === limit;
  }

  toString() {
    return this.num;
  }

  getSerialNumber() {
    this.serialNum = Array.from(this.num).sort((a, b) => parseNumber(a) > parseNumber(b)).join('');

    return this.serialNum;
  }

  set serial(serialNum) {
    this.serialNum = serialNum;
  }

  get serial() {
    return this.serialNum || this.getSerialNumber();
  }
}
