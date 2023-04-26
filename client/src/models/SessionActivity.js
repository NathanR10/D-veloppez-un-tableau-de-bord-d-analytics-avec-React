export default class SessionActivity {
  /**
   * Class representing session actibity data
   * @class SessionActivity
   * @param {object} data - The performance data
   * @param {date} props.day - Value of the Date (YYYY-MM-DD)
   * @param {number} props.calories - Value of the calories
   * @param {number} props.kilogram - Value of the kilogram
   */
  constructor(data) {
    this._day = data.day;
    this._calories = data.calories;
    this._kilogram = data.kilogram;
  }

  /**
   * Access of value of date attribute.
   * @method
   * @memberof SessionActivity
   * @return {date} The day of the attribute.
   */
  get day() {
    return new Date(this._day).getDate();
  }

  /**
   * Access of value of calories attribute.
   * @method
   * @memberof SessionActivity
   * @return {number} The value of calories attribute.
   */
  get calories() {
    return this._calories;
  }

  /**
   * Access of value of kilogram attribute.
   * @method
   * @memberof SessionActivity
   * @return {number} The value of kilogram attribute.
   */
  get kilogram() {
    return this._kilogram;
  }
}
