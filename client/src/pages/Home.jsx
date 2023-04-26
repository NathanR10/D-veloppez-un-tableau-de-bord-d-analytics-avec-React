import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'
import Stat from '../components/Stat'
import services from '../services'
import formatNumber from '../services/utils'
import DailyActivityBarChart from '../components/DailyActivityBarChart'
import AverageSessionLineChart from '../components/AverageSessionLineChart'
import PerformancePolarChart from '../components/PerformancePolarChart'
import ScorePieChart from '../components/ScorePieChart'
import { useParams } from 'react-router-dom'

/**
 * Home is a View of the project.
 *
 * @returns {JSX.Element}
 */

export default function Home () {
  const navigate = useNavigate()
  const [userMainData, setUserMainData] = useState({
    firstName: '...',
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  })
  const [userActivityData, setUserActivityData] = useState()
  const [userAverageData, setUserAverageData] = useState()
  const [userPerformanceData, setUserPerformanceData] = useState()
  const [userScoreData, setUserScoreData] = useState()
  const { id } = useParams()
  const formatedId = parseInt(id)

  useEffect(() => {
    const fetchData = async () => {
      const userMain = await services.getUserMainData(formatedId)
      if (!userMain) {
        // Redirect user at home if id is invalid
        return navigate('/')
      }
      const userActivity = await services.getUserActivity(formatedId);
      const userAverage = await services.getUserAverageSessions(formatedId);
      const userPerformance = await services.getUserPerformance(formatedId);
      setUserMainData(userMain)
      setUserScoreData([{ name: 'Score', value: userMain.score }])
      setUserActivityData(userActivity.sessions)
      setUserAverageData(userAverage.sessions)
      setUserPerformanceData(userPerformance)
    }
    fetchData()
      .catch(console.error);
  }, [])

  return (
    <div className='home_frame'>
      <h1 className='home_title'>Bonjour <span className='home_titleName'>{userMainData.firstName}</span></h1>
      <p className='home_subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className='home_mainStatsFrame'>
        <div className='home_linesFrame'>
          <div className='home_dailyFrame'>
            {userActivityData && <DailyActivityBarChart data={userActivityData} />}
          </div>
          <div className='home_subStatsFrame'>
            <div className='home_averageFrame'>
              {userActivityData && <AverageSessionLineChart data={userAverageData} />}
            </div>
            <div className='home_polarFrame'>
              {userPerformanceData && <PerformancePolarChart data={userPerformanceData} />}
            </div>
            <div className='home_scoreFrame'>
              {userScoreData && <ScorePieChart data={userScoreData} />}
            </div>
          </div>
        </div>
        <div className='home_intsFrame'>
          <Stat
            icon="/assets/calories.png"
            color="rgba(255, 0, 0, 0.07)"
            value={formatNumber(userMainData.calorieCount)}
            label="Calories"
            type="kCal" />
          <Stat
            icon="/assets/proteines.png"
            color="rgba(74, 184, 255, 0.1)"
            value={formatNumber(userMainData.proteinCount)}
            label="Protéines"
            type="g" />
          <Stat
            icon="/assets/glucides.png"
            color="rgba(249, 206, 35, 0.1)"
            value={formatNumber(userMainData.carbohydrateCount)}
            label="Glucides"
            type="g" />
          <Stat
            icon="/assets/lipides.png"
            color="rgba(253, 81, 129, 0.1)"
            value={formatNumber(userMainData.lipidCount)}
            label="Lipides"
            type="g" />
        </div>
      </div>
    </div>
  )
}
