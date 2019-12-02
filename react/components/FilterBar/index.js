import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ButtonWithIcon from '../ButtonWithIcon'
import IconClose from '../icon/Close'
import deprecated from '../../modules/deprecated'

import FilterTag from './FilterTag'

const HEAVY_ICON_OPTICAL_COMPENSATION = { marginTop: '1px' }

const isStatementComplete = st => st.subject && st.verb && st.object
const filterExtraOptions = (options, alwaysVisibleFilters, statements) => {
  return Object.keys(options)
    .filter(
      key =>
        !alwaysVisibleFilters.includes(key) &&
        !statements.some(st => st.subject === key && st.object)
    )
    .reduce(
      (filteredOptions, key) => ({ ...filteredOptions, [key]: options[key] }),
      {}
    )
}

const FILTER_VALUE_LABEL_MAX_LENGTH = 17
const truncateFilterValue = filterValue =>
  `${filterValue.substring(0, FILTER_VALUE_LABEL_MAX_LENGTH)}${
    filterValue.length <= FILTER_VALUE_LABEL_MAX_LENGTH ? '' : '…'
  }`

class FilterBar extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      visibleExtraOptions: [],
    }
  }

  toggleExtraFilterOption = key => {
    const { visibleExtraOptions } = this.state
    const newVisibleExtraOptions = [
      ...(visibleExtraOptions.indexOf(key) === -1 ? [key] : []),
      ...visibleExtraOptions.filter(op => op !== key),
    ]
    this.setState({ visibleExtraOptions: newVisibleExtraOptions })
  }

  handleSubmitFilter = st => {
    const { statements } = this.props
    const hasStatement = statements.some(_st => _st.subject === st.subject)
    if (hasStatement) {
      const newStatements = statements.map(_st => {
        if (_st.subject === st.subject) {
          return {
            ..._st,
            ...st,
          }
        }
        return _st
      })
      this.changeStatementsCallback(newStatements)
    } else {
      const newStatements = statements.slice(0)
      newStatements.push(st)
      this.changeStatementsCallback(newStatements)
    }
  }

  handleMoreOptionsSelected = st => {
    if (isStatementComplete(st)) {
      this.handleSubmitFilter(st)
      this.toggleExtraFilterOption(st.subject)
    }
  }

  handleFilterClear = subject => {
    const { alwaysVisibleFilters, statements } = this.props
    const newStatements = statements.filter(_st => _st.subject !== subject)
    this.changeStatementsCallback(newStatements)
    !alwaysVisibleFilters.includes(subject) &&
      this.toggleExtraFilterOption(subject)
  }

  changeStatementsCallback = statements => {
    this.props.onChangeStatements(statements)
  }

  handleClearAllfilters = () => {
    this.setState({ visibleExtraOptions: [] })
    this.changeStatementsCallback([])
  }

  highlightedFiltersTags = () => {
    const optionsKeys = Object.keys(this.props.options)

    return optionsKeys.filter(this.isHighlighted).map(this.optionToFilterTag)
  }

  isHighlighted = key => {
    return (
      this.props.alwaysVisibleFilters.includes(key) ||
      this.state.visibleExtraOptions.includes(key)
    )
  }

  optionToFilterTag = subject => {
    const {
      statements,
      alwaysVisibleFilters,
      options,
      submitFilterLabel,
    } = this.props

    return (
      <div key={`VTEX__filter_option--${subject}`} className="ma2">
        <FilterTag
          alwaysVisible={alwaysVisibleFilters.includes(subject)}
          getFilterLabel={() => this.getFilterLabel(subject)}
          submitFilterLabel={submitFilterLabel}
          subject={subject}
          options={options}
          statements={statements}
          onClickClear={() => this.handleFilterClear(subject)}
          onSubmitFilterStatement={this.handleSubmitFilter}
        />
      </div>
    )
  }

  getFilterLabel = subject => {
    const { options, statements } = this.props

    const statement = statements.find(st => st.subject === subject)
    const label =
      options[subject] && options[subject].renderFilterLabel(statement)
    return (
      (label && typeof label === 'string' && truncateFilterValue(label)) || '…'
    )
  }

  extraFiltersTag = () => {
    const {
      options,
      moreOptionsLabel,
      alwaysVisibleFilters,
      statements,
      subjectPlaceholder,
      submitFilterLabel,
      newFilterLabel,
    } = this.props
    const { visibleExtraOptions } = this.state
    const optionsKeys = Object.keys(options)
    const areExtraOptionsAvailable =
      alwaysVisibleFilters.length + visibleExtraOptions.length !==
      optionsKeys.length

    return (
      areExtraOptionsAvailable && (
        <div className="ma2">
          <FilterTag
            isMoreOptions
            subjectPlaceholder={subjectPlaceholder}
            getFilterLabel={() => moreOptionsLabel}
            submitFilterLabel={submitFilterLabel}
            newFilterLabel={newFilterLabel}
            options={{
              ...filterExtraOptions(options, alwaysVisibleFilters, statements),
            }}
            statements={[]}
            onSubmitFilterStatement={this.handleMoreOptionsSelected}
          />
        </div>
      )
    )
  }

  clearFiltersTag = () => {
    const { clearAllFiltersButtonLabel, statements } = this.props
    const hasActiveFilters = statements.some(st => !!st && !!st.object)

    return (
      clearAllFiltersButtonLabel &&
      hasActiveFilters && (
        <div className="ml-auto mt1">
          <ButtonWithIcon
            icon={
              <span
                className="flex items-center c-muted-2"
                style={HEAVY_ICON_OPTICAL_COMPENSATION}>
                <IconClose size={13} />
              </span>
            }
            size="small"
            variation="tertiary"
            onClick={this.handleClearAllfilters}>
            <span className="c-muted-2">{clearAllFiltersButtonLabel}</span>
          </ButtonWithIcon>
        </div>
      )
    )
  }

  render() {
    const { options } = this.props
    const hasOptions = Object.keys(options).length > 0

    return (
      hasOptions && (
        <div className="flex flex-wrap nl1">
          {this.highlightedFiltersTags()}
          {this.extraFiltersTag()}
          {this.clearFiltersTag()}
        </div>
      )
    )
  }
}

FilterBar.defaultProps = {
  options: {},
  moreOptionsLabel: 'More',
  alwaysVisibleFilters: [],
  subjectPlaceholder: 'Select a filter…',
  submitFilterLabel: 'Apply',
  newFilterLabel: 'New Filter',
  statements: [],
}

export const filterBarPropTypes = {
  /** filter options (mirroring statements from Conditions component) */
  options: PropTypes.objectOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      renderFilterLabel: PropTypes.func,
      verbs: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string,
          label: PropTypes.string,
          object: PropTypes.func,
        })
      ),
    })
  ).isRequired,
  /** filter statements (mirroring statements from Conditions component) */
  statements: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      verb: PropTypes.string.isRequired,
      object: PropTypes.object,
      error: PropTypes.string,
    })
  ).isRequired,
  /** Filters change callback: returns array of statement definitions */
  onChangeStatements: PropTypes.func.isRequired,
  /** label for MORE options */
  moreOptionsLabel: PropTypes.string,
  /** filter options that are always visible outside MORE options */
  alwaysVisibleFilters: PropTypes.arrayOf(PropTypes.string),
  /** if this label is passed, when some filter is not empty a clear all button will appear */
  clearAllFiltersButtonLabel: PropTypes.string,
  /** Subject select placeholder inside 'More options' */
  subjectPlaceholder: PropTypes.string,
  /** Submit button label for statement inside FilterTag */
  submitFilterLabel: PropTypes.string,
  /** New Filter title label for inside the 'More options' menu */
  newFilterLabel: PropTypes.string,
}

FilterBar.propTypes = filterBarPropTypes

export default deprecated({
  useNewProps: {
    submitFilterLable: 'submitFilterLabel',
    newFilterLable: 'newFilterLabel',
  },
})(FilterBar)
