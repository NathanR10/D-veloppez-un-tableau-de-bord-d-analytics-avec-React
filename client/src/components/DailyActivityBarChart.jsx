import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts'
import '../styles/DailyActivityBarChart.css'

export default function DailyActivityBarChart ({ data }) {

  const getDailyData = (data) => {
    let dailyData = { minCalories: Infinity, minKilograms: Infinity, maxCalories: -Infinity, maxKilograms: -Infinity }
    data.forEach(el => {
      dailyData.minCalories = Math.min(dailyData.minCalories, el._calories)
      dailyData.minKilograms = Math.min(dailyData.minKilograms, el._kilogram)
      dailyData.maxCalories = Math.max(dailyData.maxCalories, el._calories)
      dailyData.maxKilograms = Math.max(dailyData.maxKilograms, el._kilogram)
    })
    return dailyData
  }

  const ContentBg = ({ x }) => {
    return (
      // max height = 260px
      <Rectangle width={56} height={143} x={x} y={117} fill='#c4c4c480' style={{ transform: 'translateX(-28px)', transition: 'all .4s' }} />
    )
  }
  return (
    <>
      <span className='dailyActivityBarChart_dailyFrame_title'>Activité quotidienne</span>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 100,
            right: 30,
            left: 40,
            bottom: 30,
          }}
          barSize={7}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#DEDEDE" />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: '#dedede' }}
            scale="point"
            dy={15}
          />
          <YAxis
            yAxisId="calories"
            orientation="left"
            domain={[0, getDailyData(data).maxCalories + 100]}
            hide={true}
          />
          <YAxis
            yAxisId="kilograms"
            orientation="right"
            domain={[getDailyData(data).minKilograms - 4, getDailyData(data).maxKilograms]}
            tick={{ fontSize: 14, style: { paddingLeft: 100 } }}
            tickLine={false}
            axisLine={false}
            dx={30}
          />
          <Tooltip cursor={<ContentBg />} wrapperStyle={{ outline: 'none' }} content={(props) => (
            <ul className='dailyActivityBarChart_dailyFrame_tooltip'>
              {props.payload.map((entry, index) => (
                <li key={`item-${index}`}>
                  {index === 0 ? `${entry.value}Kcal` : `${entry.value}kg`}
                </li>
              ))}
            </ul>
          )} />
          <Bar yAxisId="calories" name='Kcal' dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
          <Bar yAxisId="kilograms" name='kg' dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
          <Legend layout="horizontal" verticalAlign="top" align="right" iconType="circle" content={(props) => (
            <ul className='dailyActivityBarChart_dailyFrame_legend'>
              {props.payload.map((entry, index) => (
                <li key={`item-${index}`}>
                  <svg width={10} height={10}>
                    <circle fill={entry.color} cx={5} cy={5} r={5} />
                  </svg>
                  <span>{entry.value === 'kg' ? `Poids (${entry.value})` : `Calories brûlées (${entry.value})`}</span>
                </li>
              ))}
            </ul>
          )} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
