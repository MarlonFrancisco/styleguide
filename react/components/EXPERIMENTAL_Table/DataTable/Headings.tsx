import React, { FC } from 'react'
import uuid from 'uuid'

import { TABLE_HEADER_HEIGHT } from '../hooks/useTableMeasures'
import Row, { CellProps, RowProps } from './Row'
import { Column } from '../index'

const Headings: FC<HeadingsProps> = ({ columns, cellProps, rowProps }) => {
  return (
    <Row {...rowProps} height={TABLE_HEADER_HEIGHT}>
      {columns.map((columnData: Column) => {
        const { headerRenderer, title, width } = columnData
        const content = headerRenderer ? headerRenderer({ columnData }) : title
        return (
          <Row.Cell
            {...cellProps}
            className="bt normal"
            key={`heading-${uuid()}`}
            width={width}>
            {content}
          </Row.Cell>
        )
      })}
    </Row>
  )
}

Headings.defaultProps = {
  cellProps: {
    as: 'th',
  },
}

type HeadingsProps = {
  columns?: Array<Column>
  rowProps?: RowProps
  cellProps?: Pick<CellProps, 'as'>
}

export default React.memo(Headings)
