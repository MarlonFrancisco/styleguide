import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Size } from 'styleguide-types'

import Button, { Props as ButtonProps} from '../Button'

import { withForwardedRef, refShape } from '../../modules/withForwardedRef'

type IconPosition = 'left' | 'right'

interface Props extends Omit<ButtonProps, 'icon'| 'ref'> {
  children?: React.ReactNode
  forwardedRef: React.Ref<HTMLElement>
  icon?: React.ReactNode
  iconPosition?: IconPosition
  size?: Size
}

class ButtonWithIcon extends Component<Props> {
  public static propTypes = {
    /** @ignore Button label */
    children: PropTypes.node,
    /** @ignore Forwarded Ref */
    forwardedRef: refShape,
    /** The icon image */
    icon: PropTypes.node,
    /** Position of the icon */
    iconPosition: PropTypes.oneOf<IconPosition>(['left', 'right']),
    /** @ignore Button size, used to calculate the margins of the icon.
     * It is then passed to the Button itself */
    size: PropTypes.oneOf<Size>(['small', 'regular', 'large']),
  }

  public static defaultProps = {
    iconPosition: 'left' as IconPosition,
  }

  public render() {
    const { icon, iconPosition, size, children } = this.props

    const hasIconOnly = !children

    let iconMargin
    let paddingOffset

    switch (size) {
      case 'small':
        iconMargin = 2
        paddingOffset = 1
        break
      case 'large':
        iconMargin = 4
        paddingOffset = 3
        break
      default:
        iconMargin = 3
        paddingOffset = 2
        break
    }

    return (
      <Button {...this.props} icon={false} iconOnly={hasIconOnly}>
        {hasIconOnly ? (
          icon
        ) : (
          <span
            className={`flex items-center ${
              iconPosition === 'left'
                ? `nr${paddingOffset}`
                : `nl${paddingOffset}`
            }`}>
            {icon && iconPosition === 'left' && (
              <div
                className={`mr${iconMargin} nl${iconMargin} flex items-center`}>
                {icon}
              </div>
            )}
            <div>{children}</div>
            {icon && iconPosition === 'right' && (
              <div
                className={`ml${iconMargin} nr${iconMargin} flex items-center`}>
                {icon}
              </div>
            )}
          </span>
        )}
      </Button>
    )
  }
}

export default withForwardedRef(ButtonWithIcon)
