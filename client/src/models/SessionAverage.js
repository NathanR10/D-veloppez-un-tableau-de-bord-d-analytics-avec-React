/**
 * class SessionAverage - data modeling
 */
export default class SessionAverage {
  /**
   * Recuperate SessionAverage data
   * @param {object} data - The data value
   */
  constructor(data) {
    this._day = data.day;
    this._sessionLength = data.sessionLength;
  }

  /**
   * Get the start value.
   * @return {number} The _start value.
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
   * Get the end value.
   * @return {number} The _end value.
   */
  get sessionLength() {
    return this._sessionLength;
  }
}
