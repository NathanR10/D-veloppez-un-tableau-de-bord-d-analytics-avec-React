import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import '../styles/PerformancePolarChart.css'

export default function PerformancePolarChart ({ data }) {
  const formatedData = [
    data.kind6,
    data.kind1,
    data.kind2,
    data.kind3,
    data.kind4,
    data.kind5,
  ]
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="55%" data={formatedData}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={{ fill: "white", fontSize: 15 }} />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#ff0101" fill="#ff0101" fillOpacity={0.7} strokeOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
