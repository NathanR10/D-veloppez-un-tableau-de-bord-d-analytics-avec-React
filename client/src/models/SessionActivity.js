/**
 * class SessionActivity - data modeling
 */
export default class SessionActivity {
  /**
   * Recuperate SessionActivity data
   * @param {object} data - The data value
   */
  constructor(data) {
    this._day = data.day;
    this._calories = data.calories;
    this._kilogram = data.kilogram;
  }

  /**
   * Get the start value.
   * @return {date} The _start value.
   */
  get day() {
    return new Date(this._day).getDate();
  }

  /**
   * Get the end value.
   * @return {number} The _end value.
   */
  get calories() {
    return this._calories;
  }

  /**
   * Get the kilometers value.
   * @return {number} The _kilometers value.
   */
  get kilogram() {
    return this._kilogram;
  }
}
