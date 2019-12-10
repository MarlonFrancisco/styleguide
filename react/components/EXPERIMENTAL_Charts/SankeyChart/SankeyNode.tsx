import React from 'react'

import {
  Layer,
  Rectangle
} from 'recharts'
import { colors } from '../commonProps'
const SankeyNode = ({
  x,
  y,
  width,
  height,
  index,
  payload,
  containerWidth,
  labelFormatter,
}) => {
  const isOut = x + width + 6 > containerWidth;
  
  return (
    <Layer key={`CustomNode${index}`}>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#5192ca"
        fillOpacity="1"
      />
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2}
        fontSize="12"
        stroke="#333"
      >
        {labelFormatter? labelFormatter(payload.name): payload.name}
      </text>
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2 + 13}
        fontSize="10"
        stroke="#333"
        strokeOpacity="0.5"
      >
        {payload.value + 'k'}
      </text>
    </Layer>
  );
}

export default SankeyNode