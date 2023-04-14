import SessionActivity from "./SessionActivity";

/**
 * class UserActivity - data modeling
 */
export default class UserActivity {
  /**
   * @param {object} data - The data value.
   */
  constructor(data) {
    this._userId = data.userId;
    this._sessions = data.sessions.map((el) => new SessionActivity(el));
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
