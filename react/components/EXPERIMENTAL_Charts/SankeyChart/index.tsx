import React, { FC } from 'react'
import {
  Sankey,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { getChartDefaultProps }from '../helpers'

import SankeyLink from './SankeyLink'
import SankeyNode from './SankeyNode'

type SankeyProps = {
  labelFormatter: Function,
  padding: number,
}

const SankeyChart: FC<BaseChartProps & SankeyProps>= ({
  data,
  config,
  padding,
  labelFormatter
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
          node={(props) => <SankeyNode {...props} labelFormatter={labelFormatter}/>}
          link={(props) => <SankeyLink {...props}/>}
        >
          <Tooltip />
        </Sankey>
    </ResponsiveContainer>
  )
}

export default SankeyChart
