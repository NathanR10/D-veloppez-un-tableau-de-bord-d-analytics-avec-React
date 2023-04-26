export default class UserMainData {
  /**
   * Class representing user main data
   * @class UserMainData
   * @param {object} data - The performance data
   * @param {number} props.userId - Value of the userId 
   * @param {string} props.userInfos.firstName - Value of the firstName
   * @param {string} props.userInfos.lastName - Value of the lastName
   * @param {number} props.userInfos.age - Value of the age
   * @param {number} props.score - Value of the score
   * @param {number} props.keyData.calorieCount - Value of the calorieCount
   * @param {number} props.keyData.proteinCount - Value of the proteinCount
   * @param {number} props.keyData.carbohydrateCount - Value of the carbohydrateCount
   * @param {number} props.keyData.lipidCount - Value of the lipidCount
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
   * Access of value of userId attribute.
   * @method
   * @memberof UserMainData
   * @return {number} The value of userId attribute.
   */
  get userId() {
    return this._userId;
  }
  
  /**
   * Access of value of firstName attribute.
   * @method
   * @memberof UserMainData
   * @return {string} The value of firstName attribute.
   */
  get firstName() {
    return this._firstName;
  }
  
  /**
   * Access of value of lastName attribute.
   * @method
   * @memberof UserMainData
   * @return {string} The value of lastName attribute.
   */
  get lastName() {
    return this._lastName;
  }
  
  /**
   * Access of value of age attribute.
   * @method
   * @memberof UserMainData
   * @return {number} The value of age attribute.
   */
  get age() {
    return this._age;
  }
  
  /**
   * Access of value of score attribute.
   * @method
   * @memberof UserMainData
   * @return {number} The value of score attribute.
   */
  get score() {
    return this._score * 100;
  }
  
  /**
   * Access of value of calorieCount attribute.
   * @method
   * @memberof UserMainData
   * @return {number} The value of calorieCount attribute.
   */
  get calorieCount() {
    return this._calorieCount;
  }
  
  /**
   * Access of value of proteinCount attribute.
   * @method
   * @memberof UserMainData
   * @return {number} The value of proteinCount attribute.
   */
  get proteinCount() {
    return this._proteinCount;
  }
  
  /**
   * Access of value of carbohydrateCount attribute.
   * @method
   * @memberof UserMainData
   * @return {number} The value of carbohydrateCount attribute.
   */
  get carbohydrateCount() {
    return this._carbohydrateCount;
  }
  
  /**
   * Access of value of lipidCount attribute.
   * @method
   * @memberof UserMainData
   * @return {number} The value of lipidCount attribute.
   */
  get lipidCount() {
    return this._lipidCount;
  }
}
