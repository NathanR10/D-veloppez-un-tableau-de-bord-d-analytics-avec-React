import SessionAverage from "./SessionAverage";

/**
 * class UserAverageSessions - data modeling
 */
export default class UserAverageSessions {
  /**
   * @param {object} data - The data value.
   */
  constructor(data) {
    this._userId = data.userId;
    this._sessions = data.sessions.map((el) => new SessionAverage(el));
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
   * @return {object} The _brand value
   */
  get sessions() {
    return this._sessions;
  }
}
