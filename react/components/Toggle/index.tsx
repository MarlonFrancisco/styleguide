import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Size } from 'styleguide-types'

import DenyIcon from '../icon/Deny'
import CheckIcon from '../icon/Check'

type SizesWithoutSmall = Exclude<Size, 'small'>

const propTypes = {
  checked: PropTypes.bool,
  semantic: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf<SizesWithoutSmall>(['regular', 'large']),
  helpText: PropTypes.node,
}

type Props = PropTypes.InferProps<typeof propTypes>

function identityOrUndefined<T>(a: T | null | undefined) {
  return a == null ? undefined : a
}

class Toggle extends Component<Props> {
  public static propTypes = propTypes
  public static defaultProps = {
    checked: false,
    disabled: false,
    semantic: false,
    label: '',
    size: 'regular' as SizesWithoutSmall,
  }

  public componentDidMount() {
    // @ts-ignore: Deprecated props warning.
    if (this.props.size === 'small') {
      console.warn(
        'Toggle: value "small" for the prop "size" is deprecated—the default "regular" size is now equivalent to what the size "small" was previously.'
      )
    }
  }

  public render() {
    const {
      semantic,
      disabled,
      id,
      checked,
      label,
      size,
      helpText,
    } = this.props

    let labelClass = disabled ? 'c-disabled ' : 'c-on-base '
    let classes = 'flex items-center relative br4 '
    let circleClasses = 'absolute br-100 '
    let iconDenyClasses = 'absolute flex justify-center '
    let iconCheckClasses = 'absolute flex justify-center '

    let circleStyle: React.CSSProperties = {
      boxShadow: disabled ? 'none' : '0 0 10px rgba(0,0,0,0.2)',
      transform: 'scale(0.8)',
      transition: 'all .1s ease-out',
    }
    let iconStyle: React.CSSProperties = {
      transition: 'left .1s ease-out, opacity .1s ease-in-out',
    }

    // Background
    if (semantic) {
      if (!disabled) {
        iconCheckClasses += 'c-success '
        iconDenyClasses += 'c-danger '

        if (!checked) {
          classes += 'bg-danger '
          iconDenyClasses += 'o-100 '
          iconCheckClasses += 'o-0 '
        } else {
          classes += 'bg-success '
          iconDenyClasses += 'o-0 '
          iconCheckClasses += 'o-100 '
        }
      } else {
        classes += 'bg-disabled '
        iconCheckClasses += 'c-on-disabled '
        iconDenyClasses += 'c-on-disabled '

        if (!checked) {
          iconDenyClasses += 'o-100 '
          iconCheckClasses += 'o-0 '
        } else {
          iconDenyClasses += 'o-0 '
          iconCheckClasses += 'o-100 '
        }
      }
    } else if (disabled) {
      classes += 'bg-disabled '
    } else {
      if (!checked) {
        classes += 'bg-muted-2 '
      }

      if (checked) {
        classes += 'bg-action-primary '
      }
    }

    // Circle
    if (disabled) {
      circleClasses += 'bg-muted-3 '
    } else {
      circleClasses += 'bg-base '
    }

    let style: React.CSSProperties = {
      transition: 'background 100ms ease-out',
    }

    let checkedOffset

    switch (size) {
      case 'large':
        classes += 'h2 '
        circleClasses += 'h2 w2 '
        iconDenyClasses += 'w2 '
        iconCheckClasses += 'w2 '

        labelClass += 'ml5 '

        style = {
          ...style,
          minWidth: '3.5rem',
        }
        circleStyle = {
          ...circleStyle,
          minWidth: '2rem',
        }

        checkedOffset = '1.5rem'
        break
      default:
        style = {
          ...style,
          height: '1.25rem',
          width: '2.25rem',
          minWidth: '2.25rem',
        }
        circleStyle = {
          ...circleStyle,
          height: '1.25rem',
          width: '1.25rem',
          minWidth: '1.25rem',
        }

        iconStyle = {
          ...iconStyle,
          transform: 'scale(0.7)',
          width: '1.25rem',
        }

        labelClass += 'ml3 '

        checkedOffset = '1rem'
    }

    const checkedStyle = {
      left: checked ? checkedOffset : 0,
    }

    circleStyle = { ...circleStyle, ...checkedStyle }
    iconStyle = { ...iconStyle, ...checkedStyle }

    return (
      <label htmlFor={identityOrUndefined(id)}>
        <div
          className={`flex flex-row items-center relative ${!disabled &&
            'pointer'}`}>
          <div className={`vtex-toggle ${classes}`} style={style}>
            <div className={circleClasses} style={circleStyle} />
            {semantic && (
              <div className={iconDenyClasses} style={iconStyle}>
                <DenyIcon size={size === 'regular' ? 14 : 12} />
              </div>
            )}
            {semantic && (
              <div className={iconCheckClasses} style={iconStyle}>
                <CheckIcon size={size === 'regular' ? 15 : 13} />
              </div>
            )}
          </div>
          <input
            id={identityOrUndefined(id)}
            type="checkbox"
            className="h1 w1 absolute o-0"
            disabled={!!disabled}
            checked={!!checked}
            name={identityOrUndefined(this.props.name)}
            onClick={identityOrUndefined(this.props.onClick)}
            onChange={identityOrUndefined(this.props.onChange)}
            tabIndex={0}
          />
          {label && <span className={labelClass}>{label}</span>}
        </div>
        {helpText && (
          <div className="c-muted-1 t-small mt3 lh-title">{helpText}</div>
        )}
      </label>
    )
  }
}

export default Toggle
