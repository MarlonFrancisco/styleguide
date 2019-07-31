import PropTypes from 'prop-types'
import React from 'react'

function calculateTabs(data) {
  let tabs = 0
  while (data.parent) {
    tabs++
    data = data.parent
  }
  return tabs
}

export default function CellTab({ tabbable, tabLength, data, children }) {
  if (!tabbable) {
    return children
  }

  const tabs = calculateTabs(data)
  return (
    <div
      style={{
        paddingLeft: `${tabs * tabLength}rem`,
      }}>
      {children}
    </div>
  )
}

CellTab.defaultProps = {
  tabLength: 1,
  children: null,
}

CellTab.propTypes = {
  tabbable: PropTypes.bool.isRequired,
  tabLength: PropTypes.number,
  data: PropTypes.object.isRequired,
  children: PropTypes.node,
}
