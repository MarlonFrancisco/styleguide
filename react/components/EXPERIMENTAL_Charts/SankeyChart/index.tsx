import React, { FC } from 'react'
import {
  Sankey,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import { getChartDefaultProps }from '../helpers'

import SankeyLink from './SankeyLink'
import SankeyNode from './SankeyNode'

const SankeyChart: FC<BaseChartProps>= ({
  data,
  config
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
          nodePadding={5}
          node={(props) => <SankeyNode {...props}/>}
          link={(props) => <SankeyLink {...props}/>}
        >
          <Tooltip />
        </Sankey>
    </ResponsiveContainer>
  )
}

export default SankeyChart
