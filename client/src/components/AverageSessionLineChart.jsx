import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from 'recharts'
import '../styles/AverageSessionLineChart.css'
import PropTypes from 'prop-types'

/**
 * Component for showing a recharts graph of average sessions length of user
 * 
 * @component
 * @example
 * @param {array} data - Session's data
 * @param {number} data[].day - Session's day
 * @param {number} data[].sessionLength - Session's length
 */

export default function AverageSessionLineChart ({ data }) {
  const ContentBg = ({ points, width }) => {
    const [{ x }] = points
    return (
      <Rectangle width={width || 0} height={263} x={x || 0} fill='#0000004D' style={{ transition: 'all .4s' }} />
    )
  }

  ContentBg.propTypes = {
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number
    })),
    width: PropTypes.number
  };

  return (
    <>
      <span className='AverageSessionLineChart_dailyFrame_title'>Durée moyenne des<br />sessions</span>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 100,
            right: 0,
            left: 0,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickFormatter={(day) => (day.substring(0, 1))}
            dy={20}
            stroke='#ffffff80'
            interval="preserveStartEnd"
            style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }}
          />
          <YAxis tickLine={false} axisLine={false} hide={true} tick={(props) => (
            <span>{props}s</span>
          )} />
          <Tooltip
            cursor={<ContentBg />}
            position={{ y: 0 }}
            wrapperStyle={{ outline: 'none' }}
            content={(props) => (
              <ul className='AverageSessionLineChart_dailyFrame_tooltip'>
                {props.payload.map((entry, index) => (
                  <li key={`item-${index}`}>
                    {`${entry.value} min`}
                  </li>
                ))}
              </ul>
            )}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff59" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#gradient)"
            strokeWidth={2}
            dot={{ stroke: 'transparent', fill: 'transparent' }}
            activeDot={{ stroke: '#FFFFFF', fill: '#FFFFFF' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

AverageSessionLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    sessionLength: PropTypes.number.isRequired,
  })).isRequired,
  payload: PropTypes.array,
};
