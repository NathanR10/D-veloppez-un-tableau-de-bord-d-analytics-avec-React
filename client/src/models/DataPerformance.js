/**
 * class DataPerformance - data modeling
 */
export default class DataPerformance {
  /**
   * Recuperate DataPerformance data
   * @param {object} data - The data value
   */
  constructor(data) {
    this._value = data.value;
    this._kind = data.kind;
  }

  /**
   * Get the end value.
   * @return {number} The _end value.
   */
  get value() {
    return this._value;
  }

  /**
   * Get the kilometers value.
   * @return {number} The _kilometers value.
   */
  get kind() {
    return this._kind;
  }
}
