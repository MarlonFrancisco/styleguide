import React, { FC } from 'react'
import csx from 'classnames'
import uuid from 'uuid'

import { NAMESPACES } from '../constants'

const Row: FC<RowProps> & RowComposites = ({
  as: Tag = 'tr',
  children,
  height,
  onClick,
  active,
}) => {
  const className = csx('w-100 ph4 truncate overflow-x-hidden', {
    'pointer hover-c-link hover-bg-muted-5': onClick,
    'bg-action-secondary': active,
  })
  return (
    <Tag
      key={`${NAMESPACES.ROW}-${uuid()}`}
      style={{ height: height }}
      onClick={onClick}
      className={className}>
      {children}
    </Tag>
  )
}

export const Cell: FC<CellProps> = ({
  id,
  children,
  width,
  onClick,
  as: Tag = 'td',
  className = '',
}) => {
  const classNames = csx('truncate v-mid ph2 pv0 tl bb b--muted-4', className, {
    'pointer hover-c-link hover-bg-muted-5': onClick,
  })

  return (
    <Tag
      onClick={onClick}
      id={`${NAMESPACES.CELL}-${id}`}
      style={{ minWidth: width }}
      className={classNames}>
      {children}
    </Tag>
  )
}

export type RowComposites = {
  Cell: FC<CellProps>
}

export type CellProps = {
  id?: string
  width?: number
  as?: 'td' | 'th' | 'div' | 'li'
  className?: string
  onClick?: () => void
}

export type RowProps = {
  as?: 'tr' | 'div' | 'ul'
  active?: boolean
  height?: number
  onClick?: () => void
}

Row.Cell = Cell

export default Row
