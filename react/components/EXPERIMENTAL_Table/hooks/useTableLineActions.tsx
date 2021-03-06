import React, { useMemo } from 'react'

import LineAction, { LineActionObject } from '../LineActions'
import { Items, Column } from '../index'

const NO_TITLE_COLUMN = ' '
const LINE_ACTION_ID = 'lineAction'

export default function useTableLineActions({
  items,
  columns,
  lineActions,
}: LineActionsData) {
  const itemsWithLineActions = useMemo<Items>(() => {
    return lineActions
      ? items.map(item => ({ lineAction: true, ...item }))
      : items
  }, [items, lineActions])

  const columnsWithLineActions = useMemo<Array<Column>>(() => {
    const cellRenderer = ({ rowData }) => (
      <LineAction lineActions={lineActions} rowData={rowData} />
    )

    return lineActions
      ? [
          ...columns,
          {
            id: LINE_ACTION_ID,
            title: NO_TITLE_COLUMN,
            cellRenderer,
          },
        ]
      : columns
  }, [columns, lineActions])

  return {
    itemsWithLineActions,
    columnsWithLineActions,
  }
}

export type LineActionsData = {
  items: Items
  columns: Array<Column>
  lineActions: Array<LineActionObject>
}
