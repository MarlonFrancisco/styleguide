import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ButtonWithIcon from '../ButtonWithIcon'
import IconCaretDown from '../icon/CaretDown'
import Menu from '../Menu'

interface Option {
  label: string
  handleCallback: () => void
  toggle: {
    checked: boolean
    semantic: boolean
  }
}

interface Props {
  align?: 'right' | 'left'
  buttonProps?: React.ComponentProps<ButtonWithIcon>
  hideCaretIcon?: boolean
  // deprecated
  icon?: React.ReactNode
  isActiveOfGroup?: boolean
  isFirstOfGroup?: boolean
  isGrouped?: boolean
  isLastOfGroup?: boolean
  label?: string
  menuWidth?: number | string
  options: Option[]
  shouldCloseOnClick?: boolean
}

interface State {
  isMenuOpen: boolean
}

class ActionMenu extends Component<Props, State> {
  private container: React.RefObject<HTMLDivElement>
  private menu: React.RefObject<Menu>

  public static defaultProps = {
    options: [],
    align: 'right',
    hideCaretIcon: false,
    menuWidth: '100%',
    shouldCloseOnClick: true,
    isGrouped: false,
    isFirstOfGroup: false,
    isLastOfGroup: false,
    isActiveOfGroup: false,
  }

  public static propTypes = {
    /** Menu alignment in relation to the button*/
    align: PropTypes.oneOf(['right', 'left']),
    /** If should close the menu after clicking an option */
    shouldCloseOnClick: PropTypes.bool,
    /** Respecting ButtonWithIcon props contract. For more info, see:
     * https://styleguide.vtex.com/#/Components/Forms/Button
     */
    // TODO: match ButtonWithIcon prop types
    buttonProps: PropTypes.object,
    /** @deprecated Button icon: use buttonProps instead */
    icon: PropTypes.element,
    /** Button text label */
    label: PropTypes.string,
    /** Hide the automatic caret icon */
    hideCaretIcon: PropTypes.bool,
    /** Menu width*/
    menuWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Menu options */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        handleCallback: PropTypes.func,
        /** whether option has inline toggle */
        toggle: PropTypes.shape({
          checked: PropTypes.bool,
          semantic: PropTypes.bool,
        }),
      })
    ).isRequired,
    /** */
    isGrouped: PropTypes.bool,
    /** */
    isFirstOfGroup: PropTypes.bool,
    /** */
    isLastOfGroup: PropTypes.bool,
    /** */
    isActiveOfGroup: PropTypes.bool,
  }

  constructor(props: Props) {
    super(props)
    this.container = React.createRef()
    this.menu = React.createRef()
    this.state = {
      isMenuOpen: false,
    }
  }

  private openMenu = () => {
    if (this.state.isMenuOpen) return

    document.addEventListener('mousedown', this.handleClickOutside)
    this.setState({ isMenuOpen: true })
  }

  private closeMenu = () => {
    if (!this.state.isMenuOpen) return

    document.removeEventListener('mousedown', this.handleClickOutside)
    this.setState({ isMenuOpen: false })
  }

  private handleClick = () => {
    if (!this.state.isMenuOpen) {
      this.openMenu()
    } else {
      this.closeMenu()
    }
  }

  private isClickOutsideMenu = (target: React.MouseEvent['target']) =>
    this.menu && this.menu.current && !this.menu.current.contains(target)

  private isClickOutsideContainer = (target: React.MouseEvent['target']) =>
    this.container &&
    this.container.current &&
    !this.container.current.contains(target as Node)

  private isClickOutside = (target: React.MouseEvent['target']) =>
    this.isClickOutsideContainer(target) && this.isClickOutsideMenu(target)

  private handleClickOutside: EventListener = (e) => {
    if (e.target && this.isClickOutside(e.target) && this.state.isMenuOpen) {
      this.closeMenu()
    }
  }

  public componentWillUnmount() {
    if (this.state.isMenuOpen) {
      this.closeMenu()
    }
  }

  public render() {
    const {
      icon,
      label,
      options,
      menuWidth,
      align,
      buttonProps,
      hideCaretIcon,
      shouldCloseOnClick,
      isGrouped,
      isFirstOfGroup,
      isLastOfGroup,
      isActiveOfGroup,
    } = this.props

    const { isMenuOpen } = this.state

    const iconCaret = <IconCaretDown size={12} color="currentColor" />

    return (
      <div ref={this.container}>
        <Menu
          ref={this.menu}
          open={isMenuOpen}
          align={align}
          width={menuWidth}
          options={options}
          onClose={shouldCloseOnClick ? this.closeMenu : null}>
          <ButtonWithIcon
            {...{
              icon:
                icon ||
                (!label && !hideCaretIcon ? iconCaret : <React.Fragment />),
            }}
            {...buttonProps}
            isGrouped={isGrouped}
            isFirstOfGroup={isFirstOfGroup}
            isLastOfGroup={isLastOfGroup}
            isActiveOfGroup={isActiveOfGroup}
            onClick={this.handleClick}>
            {label && (
              <span className="flex align-baseline items-center">
                <span className={`${hideCaretIcon ? '' : 'mr3'}`}>{label}</span>
                {!hideCaretIcon && <span>{iconCaret}</span>}
              </span>
            )}
          </ButtonWithIcon>
        </Menu>
      </div>
    )
  }
}

export default ActionMenu
