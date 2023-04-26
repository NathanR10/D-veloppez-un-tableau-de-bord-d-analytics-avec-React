import DataPerformance from "./DataPerformance";

export default class UserPerformance {
  /**
   * Class representing user performance data
   * @class UserPerformance
   * @param {object} data - The performance data
   * @param {number} props.userId - Value of the userId 
   * @param {string} props.kind["1"] - Value of the kind1
   * @param {string} props.kind["2"] - Value of the kind2
   * @param {string} props.kind["3"] - Value of the kind3
   * @param {string} props.kind["4"] - Value of the kind4
   * @param {string} props.kind["5"] - Value of the kind5
   * @param {string} props.kind["6"] - Value of the kind6
   * @param {Array} props.data - Value of the data
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
   * Access of value of userId attribute.
   * @method
   * @memberof UserPerformance
   * @return {number} The value of userId attribute.
   */
  get userId() {
    return this._userId;
  }

  /**
   * Access of value of kind1 attribute.
   * @method
   * @memberof UserPerformance
   * @return {string} The corresponding name of kind1 attribute.
   */
  get kind1() {
    return {
      subject: this._1,
      A: this._data.find(el => el.kind === 1).value,
    };
  }

  /**
   * Access of value of kind2 attribute.
   * @method
   * @memberof UserPerformance
   * @return {string} The corresponding name of kind2 attribute.
   */
  get kind2() {
    return {
      subject: this._2,
      A: this._data.find(el => el.kind === 2).value,
    };
  }

  /**
   * Access of value of kind3 attribute.
   * @method
   * @memberof UserPerformance
   * @return {string} The corresponding name of kind3 attribute.
   */
  get kind3() {
    return {
      subject: this._3,
      A: this._data.find(el => el.kind === 3).value,
    };
  }

  /**
   * Access of value of kind4 attribute.
   * @method
   * @memberof UserPerformance
   * @return {string} The corresponding name of kind4 attribute.
   */
  get kind4() {
    return {
      subject: this._4,
      A: this._data.find(el => el.kind === 4).value,
    };
  }

  /**
   * Access of value of kind5 attribute.
   * @method
   * @memberof UserPerformance
   * @return {string} The corresponding name of kind5 attribute.
   */
  get kind5() {
    return {
      subject: this._5,
      A: this._data.find(el => el.kind === 5).value,
    };
  }

  /**
   * Access of value of kind6 attribute.
   * @method
   * @memberof UserPerformance
   * @return {string} The corresponding name of kind6 attribute.
   */
  get kind6() {
    return {
      subject: this._6,
      A: this._data.find(el => el.kind === 6).value,
    };
  }

  /**
   * Access of value of data attribute.
   * @method
   * @memberof UserPerformance
   * @return {Array} The value of data attribute.
   */
  get data() {
    return this._data;
  }
}
