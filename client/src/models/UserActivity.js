import SessionActivity from "./SessionActivity";

export default class UserActivity {
  /**
   * Class representing user activity data
   * @class UserActivity
   * @param {object} data - The performance data
   * @param {number} props.userId - Value of the userId 
   * @param {Array} props.sessions - Value of sessions
   */
  constructor(data) {
    this._userId = data.userId;
    this._sessions = data.sessions.map((el) => new SessionActivity(el));
  }

  /**
   * Access of value of userId attribute.
   * @method
   * @memberof UserActivity
   * @return {number} The value of userId attribute.
   */
  get userId() {
    return this._userId;
  }

  /**
   * Access of value of sessions attribute.
   * @method
   * @memberof UserActivity
   * @return {Array} The value of sessions attribute.
   */
  get sessions() {
    return this._sessions;
  }
}
