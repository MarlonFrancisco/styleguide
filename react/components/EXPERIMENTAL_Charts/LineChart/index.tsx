import React, { FC } from 'react'
import { zipWith, curry } from 'lodash'
import {
  Line,
  LineChart as LineChartBase,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  TooltipFormatter,
} from 'recharts'
import PropTypes from 'prop-types'
import { tooltipProps } from './constants'
import getChartDefaultProps from '../helpers'
import getLineDefaultProps from './helpers'
import uuid from 'uuid'
import { colors } from '../commonProps'

interface Props {
  formatter: TooltipFormatter,
  lineProps: LineProps
}

const renderLine = (lineConfigs, key, color) =>(
  <Line
    key={`${key}--${uuid()}`}
    dataKey={key}
    stroke={color}
    {...lineConfigs}
  />
)

const LineChart: FC<Props & BaseChartProps> = ({
  data,
  dataKeys,
  xAxisKey,
  schema,
  formatter,
  lineProps
}) => {
  const { configs } = getChartDefaultProps(schema)
  const { lineConfigs } = getLineDefaultProps(lineProps)

  return (
    <ResponsiveContainer {...configs.container}>
      <LineChartBase data={data}>
        <XAxis dataKey={xAxisKey} {...configs.xAxis}/>
        <YAxis {...configs.yAxis} />
        <CartesianGrid
          horizontal={configs.grid.horizontal}
          vertical={configs.grid.vertical}
        />
        <Tooltip formatter={formatter} {...tooltipProps}/>
        {zipWith(dataKeys, colors, curry(renderLine)(lineConfigs))}
      </LineChartBase>
    </ResponsiveContainer>
  )
}

LineChart.propTypes = {
  /** The source data, in which each element is an object. */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,

  /** The keys or getter of a group of data which should be unique in a LineChart. */
  dataKeys: PropTypes.arrayOf(PropTypes.string).isRequired,

  /** The key of x-axis which is corresponding to the data. */
  xAxisKey: PropTypes.string,
  
  /** The formatter function of value in tooltip. If you return an array, the first entry will be the formatted "value", and the second entry will be the formatted "key" */
  formatter: PropTypes.func,
  
  /** The schema prop changes some styles of the chart. This prop should be given as an object.*/
  schema: PropTypes.object,

  /** The interpolation defines how data points should be connected when creating a path.*/
  lineProps: PropTypes.object,
}
  
export default LineChart