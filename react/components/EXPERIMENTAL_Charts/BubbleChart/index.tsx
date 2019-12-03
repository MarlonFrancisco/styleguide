import React, { FC } from 'react'
import PropTypes from 'prop-types'
import ScatterChart from '../ScatterChart'


const BubbleChart:FC<BaseChartProps> = (props) => {
  return (
    <ScatterChart {...props}/>  
  )
}

BubbleChart.propTypes = {
  /** The source data, in which each element is an object. */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,

  /** The config prop changes some styles of the chart. This prop should be given as an object.*/
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

  /** The key of x-axis which is corresponding to the data. */
  xAxisKey: PropTypes.string.isRequired,

  /** The keys or getter of a group of data which should be unique in a ScatterChart. */
  dataKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  
  /** The key of y-axis which is corresponding to the data, it measures size of dot. */
  zAxisKey: PropTypes.string.isRequired,
}

export default BubbleChart