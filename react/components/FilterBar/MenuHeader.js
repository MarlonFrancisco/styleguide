import React from 'react'
import PropTypes from 'prop-types'

const MenuHeader = ({ title, fixedVerb }) => {
  return (
    <div className={`flex flex-wrap ${title.enabled ? 'mb6' : 'mb3'}`}>
      {title.enabled && <span className="f4 mh3">{title.label}</span>}
      <div className="flex flex-column">
        {fixedVerb.enabled && <span className="mh3">{fixedVerb.label}</span>}
      </div>
    </div>
  )
}

MenuHeader.defaultProps = {
  enabled: false,
  title: 'New Filter',
  shouldOmitVerb: false,
  verb: '',
}

MenuHeader.propTypes = {
  title: PropTypes.shape({
    enabled: PropTypes.bool,
    label: PropTypes.string,
  }),
  fixedVerb: PropTypes.shape({
    enabled: PropTypes.bool,
    label: PropTypes.string,
  }),
}

export default MenuHeader
