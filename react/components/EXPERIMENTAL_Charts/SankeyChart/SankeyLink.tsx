import React, { FC, useState } from 'react'
import { Layer } from 'recharts'
import { colors } from '../commonProps'

type Props = {
  sourceX: number,
  targetX: number,
  sourceY: number,
  targetY: number,
  sourceControlX: number,
  targetControlX: number,
  sourceRelativeY: number,
  targetRelativeY: number,
  linkWidth: number,
  index: number,
}

const SankeyLink: FC<Props> = ({
  sourceX,
  targetX,
  sourceY,
  targetY,
  sourceControlX,
  targetControlX,
  linkWidth,
  index
}) => {

  const [ fill, setFill ] = useState(colors[1])

  return (
    <Layer key={`CustomLink${index}`}>
      <path
        d={`
          M${sourceX},${sourceY + linkWidth / 2}
          C${sourceControlX},${sourceY + linkWidth / 2}
          ${targetControlX},${targetY + linkWidth / 2}
          ${targetX},${targetY + linkWidth / 2}
          L${targetX},${targetY - linkWidth / 2}
          C${targetControlX},${targetY - linkWidth / 2}
          ${sourceControlX},${sourceY - linkWidth / 2}
          ${sourceX},${sourceY - linkWidth / 2}
          Z
        `}
        fill={fill}
        strokeWidth="0"
        onMouseLeave={() => { setFill(colors[1])}}
        onMouseEnter={() => { setFill('#46b5d1')}}
      />
    </Layer>
  );
}


export default SankeyLink