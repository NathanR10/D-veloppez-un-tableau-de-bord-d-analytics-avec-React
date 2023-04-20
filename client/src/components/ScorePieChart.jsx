import React from 'react'
import { Pie, Cell, ResponsiveContainer, PieChart } from 'recharts'
import '../styles/ScorePieChart.css'
import PropTypes from 'prop-types'

/**
 * Component for showing a recharts graph of performances poles of user
 * 
 * @component
 * @example
 * const data = [{name: string, value: number(min: 0, max: 100)}]
 * return (
 *   <ScorePieChart data={data} />
 * )
 */

export default function ScorePieChart ({ data }) {
  const progress = data[0].value
  const startAngle = 210
  const endAngle = ((-30 - startAngle) / 100 * progress) + startAngle
  return (
    <>
      <div className='ScorePieChart_bgFrame'><div className='ScorePieChart_bg'></div></div>
      <span className='ScorePieChart_dailyFrame_title'>Score</span>
      <div className='ScorePieChart_frame'>
        <span className='ScorePieChart_dailyFrame_desc'><b className='ScorePieChart_dailyFrame_progress'>{progress}%</b><br />de votre<br />objectif</span>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={'50%'}
              cy={'55%'}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={'70%'}
              outerRadius={'80%'}
              paddingAngle={5}
              dataKey="value"
              cornerRadius={'50%'}
            >
              <Cell fill={'#FF0000'} />
            </Pie>
          </PieChart>
        </ResponsiveContainer >
      </div>
    </>
  )
}

ScorePieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};
