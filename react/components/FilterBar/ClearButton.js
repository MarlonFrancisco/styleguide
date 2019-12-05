import React from 'react'
import PropTypes from 'prop-types'

import IconClear from '../icon/Clear'

const ClearButton = ({ enabled, onClick }) => {
  return (
    enabled && (
      <div
        className="flex items-center c-link hover-c-link pointer"
        onClick={onClick}>
        <IconClear solid size={16} />
      </div>
    )
  )
}

ClearButton.propTypes = {
  enabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ClearButton
