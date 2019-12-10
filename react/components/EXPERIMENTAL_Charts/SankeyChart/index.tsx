import React, { FC } from 'react'
import {
  Sankey,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { getChartDefaultProps }from '../helpers'

import SankeyLink from './SankeyLink'
import SankeyNode from './SankeyNode'
import PropTypes from 'prop-types'

type SankeyProps = {
  labelFormatter: Function,
  valueFormatter: Function,
  CustomTooltip: Function, 
  padding: number,
}

const SankeyChart: FC<BaseChartProps & SankeyProps>= ({
  data,
  config,
  padding,
  labelFormatter,
  valueFormatter,
}) => {
  const { configs } = getChartDefaultProps(config)

  return (
    <ResponsiveContainer {...configs.container}>
      <Sankey
        data={data}
        margin={{
          left: 200,
          right: 200,
          top: 100,
          bottom: 100
        }}
        nodePadding={padding}
        node={(props) => (
          <SankeyNode
            {...props}
            labelFormatter={labelFormatter}
            valueFormatter={valueFormatter}
          />
        )}
        link={(props) => <SankeyLink {...props} />}
      >
        <Tooltip />
      </Sankey>
    </ResponsiveContainer>
  )
}

SankeyChart.propTypes = {
  /** The source data, in which each element is an object. */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,

  /** The key of x-axis which is corresponding to the data. */
  xAxisKey: PropTypes.string.isRequired,
  
  /** The formatter function of label in node.*/
  labelFormatter: PropTypes.func,

  /** The formatter function of value in node.*/
  valueFormatter: PropTypes.func,
  
  /** The schema prop changes some styles of the chart. This prop should be given as an object.*/
  config: PropTypes.shape({
    xAxis: PropTypes.shape({
      axisLine: PropTypes.bool,
      tickLine: PropTypes.bool,
      tick: PropTypes.bool,
      hide: PropTypes.bool
    }),
    yAxis: PropTypes.shape({
      axisLine: PropTypes.bool,
      tickLine: PropTypes.bool,
      tick: PropTypes.bool,
      hide: PropTypes.bool
    }), 
    container: PropTypes.shape({
      height: PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number]
      ),
      width: PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number]
      ),
    }),
    grid: PropTypes.shape({
      horizontal: PropTypes.bool,
      vertical: PropTypes.bool,
    })
  }),
}
  
export default SankeyChart
