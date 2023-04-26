export default class SessionAverage {
  /**
   * Class representing session average data
   * @class SessionAverage
   * @param {object} data - The performance data
   * @param {number} props.day - Value of the day 
   * @param {number} props.sessionLength - Value of the sessionLength
   */
  constructor(data) {
    this._day = data.day;
    this._sessionLength = data.sessionLength;
  }

  /**
   * Access of value of day attribute.
   * @method
   * @memberof SessionAverage
   * @return {number} The day name of the attribute.
   */
  get day() {
    let day = this._day;
    switch (day) {
      case 1:
        day = 'Lundi';
        break;
      case 2:
        day = 'Mardi';
        break;
      case 3:
        day = 'Mercredi';
        break;
      case 4:
        day = 'Jeudi';
        break;
      case 5:
        day = 'Vendredi';
        break;
      case 6:
        day = 'Samedi';
        break;
      case 7:
        day = 'Dimanche';
        break;
      default:
        break;
    }
    return day;
  }

  /**
   * Access of value of sessionLength attribute.
   * @method
   * @memberof SessionAverage
   * @return {number} The value of sessionLength attribute.
   */
  get sessionLength() {
    return this._sessionLength;
  }
}
