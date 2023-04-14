import DataPerformance from "./DataPerformance";


/**
 * class UserPerformance - data modeling
 */
export default class UserPerformance {
  /**
   * @param {object} data - The data value.
   */
  constructor(data) {
    this._userId = data.userId;
    this._1 = data.kind["1"];
    this._2 = data.kind["2"];
    this._3 = data.kind["3"];
    this._4 = data.kind["4"];
    this._5 = data.kind["5"];
    this._6 = data.kind["6"];
    this._data = data.data.map((el) => new DataPerformance(el));
  }

  /**
   * Get the code value.
   * @return {number} The _code value
   */
  get userId() {
    return this._userId;
  }

  /**
   * Get the brand value.
   * @return {string} The _brand value
   */
  get kind1() {
    return {
      subject: this._1,
      A: this._data.find(el => el.kind === 1).value,
    };
  }

  /**
   * Get the brand value.
   * @return {string} The _brand value
   */
  get kind2() {
    return {
      subject: this._2,
      A: this._data.find(el => el.kind === 2).value,
    };
  }

  /**
   * Get the brand value.
   * @return {string} The _brand value
   */
  get kind3() {
    return {
      subject: this._3,
      A: this._data.find(el => el.kind === 3).value,
    };
  }

  /**
   * Get the brand value.
   * @return {string} The _brand value
   */
  get kind4() {
    return {
      subject: this._4,
      A: this._data.find(el => el.kind === 4).value,
    };
  }

  /**
   * Get the brand value.
   * @return {string} The _brand value
   */
  get kind5() {
    return {
      subject: this._5,
      A: this._data.find(el => el.kind === 5).value,
    };
  }

  /**
   * Get the brand value.
   * @return {string} The _brand value
   */
  get kind6() {
    return {
      subject: this._6,
      A: this._data.find(el => el.kind === 6).value,
    };
  }

  /**
   * Get the brand value.
   * @return {object} The _brand value
   */
  get data() {
    return this._data;
  }
}
