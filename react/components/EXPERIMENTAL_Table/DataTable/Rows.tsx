import React, { FC } from 'react'

import Row, { RowProps, ROW_TRANSITIONS } from './Row'
import { Column, Items } from '../index'
import { Density } from '../hooks/useTableMeasures'
import { Checkboxes } from '../../EXPERIMENTAL_useCheckboxTree/types'
import useTableMotion from '../hooks/useTableMotion'
import { CellProps } from './Cell'

const Rows: FC<RowsProps> = ({
  columns,
  items,
  onRowClick,
  cellProps,
  rowProps,
  isRowActive,
  rowHeight,
  selectedDensity,
  checkboxes,
  rowKey,
}) => {
  const motion = useTableMotion(ROW_TRANSITIONS)
  return items ? (
    <>
      {items.map(rowData => {
        const toggleChecked = () => checkboxes.toggle(rowData)

        const isRowChecked = checkboxes && checkboxes.isChecked(rowData)
        const isRowPartiallyChecked =
          checkboxes && checkboxes.isPartiallyChecked(rowData)
        const isRowSelected = isRowChecked || isRowPartiallyChecked

        const clickable = onRowClick
          ? {
              onClick: () => onRowClick({ rowData }),
              link: true,
            }
          : {}
        return (
          <Row
            {...rowProps}
            {...clickable}
            height={rowHeight}
            active={(isRowActive && isRowActive(rowData)) || isRowSelected}
            key={rowKey({ rowData })}
            motion={motion}>
            {columns.map((column: Column, cellIndex: number) => {
              const { cellRenderer, width } = column
              const cellData = rowData[column.id]
              const content = cellRenderer
                ? cellRenderer({
                    cellData,
                    rowData,
                    rowHeight,
                    selectedDensity,
                    motion,
                  })
                : cellData
              return (
                <Row.Cell {...cellProps} key={column.id} width={width}>
                  {cellIndex === 0 && checkboxes && (
                    <Row.Cell.Prefix>
                      <span className="ph3">
                        <Row.Cell.Prefix.Checkbox
                          checked={isRowChecked}
                          partial={isRowPartiallyChecked}
                          disabled={checkboxes.isDisabled(rowData)}
                          onClick={toggleChecked}
                        />
                      </span>
                    </Row.Cell.Prefix>
                  )}
                  {content}
                </Row.Cell>
              )
            })}
          </Row>
        )
      })}
    </>
  ) : null
}

export type RowsProps = {
  columns: Array<Column>
  items: Items
  selectedDensity: Density
  rowKey?: ({ rowData: unknown }) => string
  onRowClick?: ({ rowData: unknown }) => void
  isRowActive?: (rowData: unknown) => boolean
  rowProps?: RowProps
  rowHeight: number
  cellProps?: Pick<CellProps, 'tagName' | 'className'>
  checkboxes?: Checkboxes<unknown>
}

export default Rows
