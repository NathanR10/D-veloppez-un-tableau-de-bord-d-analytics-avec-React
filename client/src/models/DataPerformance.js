export default class DataPerformance {
  /**
   * Class representing performance data
   * @class DataPerformance
   * @param {object} data - The performance data
   * @param {number} props.kind - Id corresponding of kind name
   * @param {number} props.value - Value of the kind
   */
  constructor(data) {
    this._value = data.value;
    this._kind = data.kind;
  }

  /**
   * Access of value of value attribute.
   * @method
   * @memberof DataPerformance
   * @return {number} The value of value attribute.
   */
  get value() {
    return this._value;
  }

  /**
   * Access of value of kind attribute.
   * @method
   * @memberof DataPerformance
   * @return {number} The value of kind attribute.
   */
  get kind() {
    return this._kind;
  }
}
