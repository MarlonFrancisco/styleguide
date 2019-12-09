import React, { FC, useState } from 'react'
import { Layer } from 'recharts'

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

  const [ fill, setFill ] = useState('rgba(0, 136, 254, 0.5)')

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
        onMouseLeave={() => { setFill('rgba(0, 136, 254, 0.5)');}}
        onMouseEnter={() => { setFill('#C0C0C0');}}
      />
    </Layer>
  );
}


export default SankeyLink