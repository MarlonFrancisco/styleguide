import React, {FC} from 'react'
import {
  ScatterChart as ScatterChartBase, 
  XAxis, 
  YAxis,
  ZAxis, 
  Tooltip,
  Scatter,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'
import { getChartDefaultProps } from '../helpers'
import { commonDefaultProps, colors} from '../commonProps'


const BubbleChart:FC<BaseChartProps> = ({
  data,
  schema,
  xAxisKey,
  yAxisKey,
  zAxisKey
}) => {
  const { configs } = getChartDefaultProps(commonDefaultProps, schema)
  console.log(data.map(item => item[zAxisKey]))
  const values = data.map(item => item[zAxisKey])
  const min = Math.min(...values)
  const max = Math.max(...values)
  
  return (
    <ResponsiveContainer {...configs.container} >
      <ScatterChartBase data={data}>
        <CartesianGrid {...configs.grid}/>
        <XAxis dataKey={xAxisKey} {...configs.xAxis} />
        <YAxis dataKey={yAxisKey} {...configs.yAxis} />
        <ZAxis dataKey={zAxisKey} range={[min, max]}/>
        <Tooltip cursor={false}/>
        <Scatter fill={colors[0]} data={data} />
      </ScatterChartBase>
    </ResponsiveContainer>
  )
}

export default BubbleChart