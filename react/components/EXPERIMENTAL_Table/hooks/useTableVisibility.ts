import { useMemo, useState, useCallback } from 'react'
import { Column } from '../index'

export default function useTableVisibility({ columns }: VisibilityData) {
  const [hiddenColumns, setHiddenColumns] = useState(getHiddenColumns(columns))

  const visibleColumns = useMemo(() => {
    const reducer = (acc: Array<Column>, col: Column) =>
      hiddenColumns.includes(col.id) ? acc : [...acc, col]

    return columns.reduce(reducer, [])
  }, [hiddenColumns, columns])

  const toggleColumn = useCallback(
    (id: string) => {
      hiddenColumns.includes(id)
        ? setHiddenColumns(hiddenColumns.filter(col => col !== id))
        : setHiddenColumns([...hiddenColumns, id])
    },
    [hiddenColumns]
  )

  const showAllColumns = () => {
    setHiddenColumns([])
  }

  const hideAllColumns = () => {
    setHiddenColumns(columns.map(col => col.id))
  }

  return {
    columns,
    visibleColumns,
    hiddenColumns,
    toggleColumn,
    showAllColumns,
    hideAllColumns,
  }
}

export type VisibilityData = {
  columns: Array<Column>
}

interface Monad<T> extends Array<any> {
  flatMap?(func: (x: T) => any): Array<any>
}

function getHiddenColumns(columns: Monad<Column>): Array<string> {
  return columns.flatMap(col => (col.hidden ? [col.id] : []))
}
