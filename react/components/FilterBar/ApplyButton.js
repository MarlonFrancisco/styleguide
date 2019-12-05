import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

const ApplyButton = ({ disabled, label, onClick }) => {
  return (
    <div className="flex justify-start mt4 mh3">
      <Button type="submit" disabled={disabled} onClick={onClick}>
        {label}
      </Button>
    </div>
  )
}

ApplyButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ApplyButton
