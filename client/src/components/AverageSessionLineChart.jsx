import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from 'recharts'
import '../styles/AverageSessionLineChart.css'

export default function AverageSessionLineChart ({ data }) {
  const ContentBg = ({ points, width }) => {
    const [{ x }] = points
    return (
      <Rectangle width={width} height={263} x={x} fill='#0000004D' style={{ transition: 'all .4s' }} />
    )
  }

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
            tickFormatter={(day, index) => (day.substring(0, 1))}
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
