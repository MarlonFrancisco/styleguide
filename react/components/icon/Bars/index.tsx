import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { IconProps } from 'styleguide-types'
import { calcIconSize, baseClassname } from '../utils'

const iconBase = {
  width: 18,
  height: 12,
}

class Bars extends PureComponent<IconProps> {
  public static defaultProps = {
    color: 'currentColor',
    size: 20,
    block: false,
  }

  public static propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    block: PropTypes.bool,
  }

  public render() {
    const { color, size, block } = this.props
    const newSize = calcIconSize(iconBase, size!)

    return (
      <svg
        className={`${baseClassname('bars')} ${block ? 'db' : ''}`}
        width={newSize.width}
        height={newSize.height}
        viewBox="0 0 18 12"
        fill={color}
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
          fill={color}
        />
      </svg>
    )
  }
}

export default Bars
