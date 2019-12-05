import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash/merge'
import classnames from 'classnames'

import IconClear from '../icon/Clear'
import IconCaretDown from '../icon/CaretDown'
import Menu from './Menu'
import ConditionsWidget from './ConditionsWidget'
import ClearButton from './ClearButton'

const OPEN_MENU_STYLE = { backgroundColor: '#dbe9fd' }
const emptyVirtualStatement = {
  subject: null,
  verb: null,
  object: null,
  error: null,
}

const filterStatementBySubject = (statements = [], subject, options = {}) => {
  const hasStatement = statements.some(st => st.subject === subject)
  return hasStatement
    ? statements.filter(st => st.subject === subject)
    : [
        {
          ...emptyVirtualStatement,
          subject: subject,
          verb:
            options[subject] && options[subject].verbs.length > 0
              ? options[subject].verbs[0].value
              : null,
        },
      ]
}

class FilterTag extends PureComponent {
  constructor(props) {
    super(props)
    this.filterMenuContainer = React.createRef()

    this.state = {
      isMenuOpen: false,
      virtualStatement: filterStatementBySubject(
        props.statements,
        props.subject,
        props.options
      )[0],
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.statements &&
      nextProps.statements.length > 0 &&
      nextProps.subject &&
      nextProps.statements.some(st => st.subject === nextProps.subject)
    ) {
      const statement = filterStatementBySubject(
        nextProps.statements,
        nextProps.subject,
        nextProps.options
      )[0]
      return {
        virtualStatement: merge({}, statement, prevState.virtualStatement),
      }
    }
    return prevState
  }

  openMenu = () => {
    if (this.state.isMenuOpen) return

    document.addEventListener('mousedown', this.handleClickOutside)
    this.setState({
      isMenuOpen: true,
      virtualStatement: filterStatementBySubject(
        this.props.statements,
        this.props.subject,
        this.props.options
      )[0],
    })
  }

  closeMenu = () => {
    if (!this.state.isMenuOpen) return

    document.removeEventListener('mousedown', this.handleClickOutside)
    this.setState({
      isMenuOpen: false,
      virtualStatement: filterStatementBySubject(
        [],
        this.props.subject,
        this.props.options
      )[0],
    })
  }

  handleClickOutside = e => {
    if (
      this.filterMenuContainer &&
      this.filterMenuContainer.current &&
      !this.filterMenuContainer.current.contains(e.target) &&
      this.state.isMenuOpen
    ) {
      this.closeMenu()
    }
  }

  componentWillUnmount() {
    if (this.state.isMenuOpen) {
      this.closeMenu()
    }
  }

  handleChangeStatement = statement => {
    this.setState(state => {
      return {
        virtualStatement: merge({}, state.virtualStatement, {
          ...statement,
        }),
      }
    })
  }

  resetVirtualStatement = () => {
    const { subject, options } = this.props
    const statement = filterStatementBySubject([], subject, options)
    this.setState({ virtualStatement: statement })
  }

  render() {
    const {
      options,
      subject,
      statements,
      alwaysVisible,
      subjectPlaceholder,
      onClickClear,
      isMoreOptions,
      submitFilterLabel,
      newFilterLabel,
    } = this.props
    const { isMenuOpen } = this.state

    const statement = filterStatementBySubject(statements, subject)[0]
    const isEmpty = !!(
      statements &&
      (!statement || (statement && !statement.object))
    )

    console.log({
      options,
      subject,
      statements,
      alwaysVisible,
      subjectPlaceholder,
      onClickClear,
      isMoreOptions,
      submitFilterLabel,
      newFilterLabel,
    })

    return (
      <div
        ref={this.filterMenuContainer}
        style={{
          ...(isMenuOpen && OPEN_MENU_STYLE),
        }}
        className={this.filterTagClasses(
          isEmpty,
          isMoreOptions,
          alwaysVisible
        )}>
        <div className="flex items-stretch">
          <Menu open={isMenuOpen} align="left" button={this.menuToggleButton()}>
            {this.defaultWidget()}
          </Menu>
          <ClearButton
            enabled={!isEmpty && !isMoreOptions}
            onClick={() => {
              this.resetVirtualStatement()
              onClickClear()
            }}
          />
        </div>
      </div>
    )
  }

  menuToggleButton = () => {
    const {
      options,
      subject,
      statements,
      getFilterLabel,
      isMoreOptions,
    } = this.props
    const { isMenuOpen } = this.state

    return (
      <button
        type="button"
        className="bw1 ba br2 v-mid relative bg-transparent b--transparent c-action-primary pointer w-100 outline-0"
        onClick={isMenuOpen ? this.closeMenu : this.openMenu}>
        <div className="flex items-center justify-center h-100 ph3 ">
          <span className="flex items-center nl1 nowrap">
            {isMoreOptions ? (
              <span className="fw5">{getFilterLabel()}</span>
            ) : (
              <Fragment>
                <span>{`${options[subject].label}:\xa0`}</span>
                <span className="fw5">{`${getFilterLabel(
                  filterStatementBySubject(statements, subject)
                )}`}</span>
              </Fragment>
            )}
            <div className="ml2 nr2">
              <IconCaretDown size={11} color="currentColor" />
            </div>
          </span>
        </div>
      </button>
    )
  }

  filterTagClasses(isEmpty, isMoreOptions, alwaysVisible) {
    return classnames(`br2 ba b--solid pv1 dib c-on-base`, {
      pr4: !(isEmpty || isMoreOptions),
      'bg-transparent hover-bg-muted-5 b--muted-4': alwaysVisible && isEmpty,
      'hover-bg-muted-5 b--muted-4':
        !(alwaysVisible && isEmpty) && isMoreOptions,
      'bg-action-secondary hover-bg-action-secondary b--action-secondary':
        !(alwaysVisible && isEmpty) && !isMoreOptions,
    })
  }

  createLegacyOptions = (options, statement) => {
    return Object.keys(options).reduce(
      (legacyOptionsAcc, opt) => ({
        ...legacyOptionsAcc,
        [opt]: {
          ...merge({}, { ...options[opt] }),
          verbs: options[opt].verbs.map(this.toLegacyVerbOption(statement)),
        },
      }),
      {}
    )
  }

  toLegacyVerbOption = statement => {
    const { virtualStatement } = this.state

    return verb => {
      if (typeof verb.object === 'function') {
        return verb
      }
      console.warn(
        '[Deprecation alert]',
        'FilterBar prop "options" will change contract due to Conditions and Statement refactor.',
        'please if you are using it let @guigs and @eric know...'
      )
      return {
        ...verb,
        object: ({ error, onChange, value }) => {
          return (
            <>
              {verb.object.renderFn({
                statements: [merge({}, statement, virtualStatement)],
                values: value,
                statementIndex: 0,
                error,
                extraParams: verb.object && verb.object.extraParams,
                onChangeObjectCallback: onChange,
              })}
            </>
          )
        },
      }
    }
  }

  applyButton = (isEmpty, isMoreOptions, onClickClear) => {
    return (
      !isEmpty &&
      !isMoreOptions && (
        <div
          className="flex items-center c-link hover-c-link pointer"
          onClick={() => {
            this.resetVirtualStatement()
            onClickClear()
          }}>
          <IconClear solid size={16} />
        </div>
      )
    )
  }

  handleApplyButtonClick = () => {
    this.props.onSubmitFilterStatement(this.state.virtualStatement)
    this.resetVirtualStatement()
    this.closeMenu()
  }

  defaultWidget = () => {
    const {
      options,
      subject,
      statements,
      subjectPlaceholder,
      isMoreOptions,
      submitFilterLabel,
      newFilterLabel,
    } = this.props
    const { virtualStatement } = this.state

    const statement = filterStatementBySubject(statements, subject)[0]

    const shouldOmitSubject = !isMoreOptions
    const shouldOmitVerbChoice = isMoreOptions
      ? false
      : options[subject].verbs.length === 1

    // this is temporary just to assure backward compatibility
    const compatibleOptions = this.createLegacyOptions(options, statement)

    return (
      <ConditionsWidget
        isMoreOptions={isMoreOptions}
        shouldOmitVerbChoice={shouldOmitVerbChoice}
        shouldOmitSubject={shouldOmitSubject}
        options={compatibleOptions}
        subjectPlaceholder={subjectPlaceholder}
        statement={statement}
        onChangeStatement={this.handleChangeStatement}
        onChangeObjectCallback={st =>
          this.handleChangeStatement({
            ...st,
            error: null,
          })
        }
        virtualStatement={virtualStatement}
        submitFilterLabel={submitFilterLabel}
        onApply={this.handleApplyButtonClick}
        header={{ newFilterLabel, verbLabel: options[subject].verbs[0].label }}
      />
    )
  }
}

FilterTag.defaultProps = {
  alwaysVisible: false,
  isMoreOptions: false,
  subjectPlaceholder: '…',
  newFilterLabel: 'New filter',
}

FilterTag.propTypes = {
  options: PropTypes.object.isRequired,
  subject: PropTypes.string,
  statements: PropTypes.array,
  alwaysVisible: PropTypes.bool,
  getFilterLabel: PropTypes.func,
  subjectPlaceholder: PropTypes.string,
  onClickClear: PropTypes.func,
  isMoreOptions: PropTypes.bool,
  onSubmitFilterStatement: PropTypes.func.isRequired,
  submitFilterLabel: PropTypes.string.isRequired,
  newFilterLabel: PropTypes.string,
}

export default FilterTag
