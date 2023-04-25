/**
 * class UserMainData - data modeling
 */
export default class UserMainData {
  /**
   * @param {object} data - The data value.
   */
  constructor(data) {
    this._userId = data.userId;
    this._firstName = data.userInfos.firstName;
    this._lastName = data.userInfos.lastName;
    this._age = data.userInfos.age;
    this._score = data.score;
    this._calorieCount = data.keyData.calorieCount;
    this._proteinCount = data.keyData.proteinCount;
    this._carbohydrateCount = data.keyData.carbohydrateCount;
    this._lipidCount = data.keyData.lipidCount;
  }

  /**
   * Get the code value.
   * @return {number} The _code value
   */
  get userId() {
    return this._userId;
  }
  
  /**
   * Get the code value.
   * @return {string} The _code value
   */
  get firstName() {
    return this._firstName;
  }
  
  /**
   * Get the code value.
   * @return {string} The _code value
   */
  get lastName() {
    return this._lastName;
  }
  
  /**
   * Get the code value.
   * @return {number} The _code value
   */
  get age() {
    return this._age;
  }
  
  /**
   * Get the code value.
   * @return {number} The _code value
   */
  get score() {
    return this._score * 100;
  }
  
  /**
   * Get the code value.
   * @return {number} The _code value
   */
  get calorieCount() {
    return this._calorieCount;
  }
  
  /**
   * Get the code value.
   * @return {number} The _code value
   */
  get proteinCount() {
    return this._proteinCount;
  }
  
  /**
   * Get the code value.
   * @return {number} The _code value
   */
  get carbohydrateCount() {
    return this._carbohydrateCount;
  }
  
  /**
   * Get the code value.
   * @return {number} The _code value
   */
  get lipidCount() {
    return this._lipidCount;
  }
}
