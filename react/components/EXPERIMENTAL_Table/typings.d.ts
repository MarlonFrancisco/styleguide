interface Column {
  id: string
  title: string
  width?: number
  cellRender?: ({ cellData: any, rowData: any }) => React.ReactNode
  headerRender?: ({ headerData: any }) => React.ReactNode
}

interface TableProps {
  nestedRows?: boolean
}

interface TableState {
  columns?: Array<Column>
  items?: Array<Object>
  isEmpty?: boolean
  tableHeight?: number
  rowHeight?: number
  selectedDensity?: string
  setSelectedDensity?: (density: Density) => void
}

type Density = 'low' | 'medium' | 'high'
