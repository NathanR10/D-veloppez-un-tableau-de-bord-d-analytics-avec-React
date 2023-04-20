import axios from "axios";
import mockData from '../__mock__/data.json'
import UserMainData from "../models/UserMainData";
import UserActivity from "../models/UserActivity";
import UserAverageSessions from "../models/UserAverageSessions";
import UserPerformance from "../models/UserPerformance";

// eslint-disable-next-line no-undef
const REACT_APP_API_MOCKING = process.env.REACT_APP_API_MOCKING === "true";
// eslint-disable-next-line no-undef
const REACT_APP_API_ROUTE = process.env.REACT_APP_API_ROUTE;

/**
 * collect data of targeted user, using userId
 * if REACT_APP_API_MOCKING is true, it return mocked data
 * else it return API server response
 * Inspect UserMainData function for more details
 */
const getUserMainData = async (userId) => {
  if (REACT_APP_API_MOCKING) {
    return new UserMainData(mockData.USER_MAIN_DATA.find(el => el.id === userId));
  } else {
    try {
      const res = await axios.get(`${REACT_APP_API_ROUTE}user/${userId}`);
      return new UserMainData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
}

/**
 * collect data of targeted user, using userId
 * if REACT_APP_API_MOCKING is true, it return mocked data
 * else it return API server response
 * Inspect UserActivity function for more details
 */
const getUserActivity = async (userId) => {
  if (REACT_APP_API_MOCKING) {
    return new UserActivity(mockData.USER_ACTIVITY.find(el => el.userId === userId));
  } else {
    try {
      const res = await axios.get(`${REACT_APP_API_ROUTE}user/${userId}/activity`);
      return new UserActivity(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
}

/**
 * collect data of targeted user, using userId
 * if REACT_APP_API_MOCKING is true, it return mocked data
 * else it return API server response
 * Inspect UserAverageSessions function for more details
 */
const getUserAverageSessions = async (userId) => {
  if (REACT_APP_API_MOCKING) {
    return new UserAverageSessions(mockData.USER_AVERAGE_SESSIONS.find(el => el.userId === userId));
  } else {
    try {
      const res = await axios.get(`${REACT_APP_API_ROUTE}user/${userId}/average-sessions`);
      return new UserAverageSessions(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
}

/**
 * collect data of targeted user, using userId
 * if REACT_APP_API_MOCKING is true, it return mocked data
 * else it return API server response
 * Inspect UserPerformance function for more details
 */
const getUserPerformance = async (userId) => {
  if (REACT_APP_API_MOCKING) {
    return new UserPerformance(mockData.USER_PERFORMANCE.find(el => el.userId === userId));
  } else {
    try {
      const res = await axios.get(`${REACT_APP_API_ROUTE}user/${userId}/performance`);
      return new UserPerformance(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
}

const services = {
  getUserMainData: async (userId) => await getUserMainData(userId),
  getUserActivity: async (userId) => await getUserActivity(userId),
  getUserAverageSessions: async (userId) => await getUserAverageSessions(userId),
  getUserPerformance: async (userId) => await getUserPerformance(userId),
}

export default services;
