import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import '../styles/PerformancePolarChart.css'
import PropTypes from 'prop-types'

/**
 * A component that displays a chart of user performance based on the provided data.
 *
 * @param {object} props - The properties passed to the component.
 * @param {Array<{
*   kind1: { A: number, subject: string },
*   kind2: { A: number, subject: string },
*   kind3: { A: number, subject: string },
*   kind4: { A: number, subject: string },
*   kind5: { A: number, subject: string }
* }>} props.data - The data to display in the chart.
* @param {number} props.data.kind1.A - A is the dataset name in the chart, we only use A before we need one dataset.
* @param {string} props.data.kind1.subject - The name of the pole, corresponding to A value.
* @returns {JSX.Element} The chart component.
*/


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

const kindPropType = PropTypes.shape({
  A: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired
});

PerformancePolarChart.propTypes = {
  data: PropTypes.shape({
    kind1: kindPropType.isRequired,
    kind2: kindPropType.isRequired,
    kind3: kindPropType.isRequired,
    kind4: kindPropType.isRequired,
    kind5: kindPropType.isRequired,
    kind6: kindPropType.isRequired,
  }).isRequired,
};
