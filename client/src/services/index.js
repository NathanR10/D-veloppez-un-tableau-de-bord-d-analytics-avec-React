import axios from "axios";
import mockData from '../__mock__/data.json'
import UserMainData from "../models/UserMainData";
import UserActivity from "../models/UserActivity";
import UserAverageSessions from "../models/UserAverageSessions";
import UserPerformance from "../models/UserPerformance";

const getUserMainData = async (userId) => {
  if (process.env.REACT_APP_API_MOCKING === "true") {
    return new UserMainData(mockData.USER_MAIN_DATA.find(el => el.id === userId));
  } else {
    try {
      const res = await axios.get('http://localhost:3001/user/' + userId);
      return new UserMainData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
}


const getUserActivity = async (userId) => {
  if (process.env.REACT_APP_API_MOCKING === "true") {
    return new UserActivity(mockData.USER_ACTIVITY.find(el => el.userId === userId));
  } else {
    try {
      const res = await axios.get('http://localhost:3001/user/' + userId + '/activity');
      return new UserActivity(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
}

const getUserAverageSessions = async (userId) => {
  if (process.env.REACT_APP_API_MOCKING === "true") {
    return new UserAverageSessions(mockData.USER_AVERAGE_SESSIONS.find(el => el.userId === userId));
  } else {
    try {
      const res = await axios.get('http://localhost:3001/user/' + userId + '/average-sessions');
      return new UserAverageSessions(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
}

const getUserPerformance = async (userId) => {
  if (process.env.REACT_APP_API_MOCKING === "true") {
    return new UserPerformance(mockData.USER_PERFORMANCE.find(el => el.userId === userId));
  } else {
    try {
      const res = await axios.get('http://localhost:3001/user/' + userId + '/performance');
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
