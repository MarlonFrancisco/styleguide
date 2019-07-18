import PropTypes from 'prop-types'
import React, { Component } from 'react'
import uuid from 'uuid/v4'

import ReactSelect from 'react-select'
import CreatableSelect from 'react-select/lib/Creatable'
import COLORS from './colors'

import ClearIndicator from './ClearIndicator'
import DropdownIndicatorComponent from './DropdownIndicator'
import MultiValueRemove from './MultiValueRemove'
import Placeholder from './Placeholder'
import ControlComponent from './Control'

import { getFontClassNameFromSize, getTagPaddingFromSize } from './styles'
import { withForwardedRef, refShape } from '../../modules/withForwardedRef'

const getOptionValue = option => {
  return JSON.stringify(option.value)
}

class Select extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: undefined,
    }

    this.inputId = `react-select-input-${uuid()}`
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchTerm } = this.state
    const { searchTerm: prevSearchTerm } = prevState
    const { loading } = this.props
    const { loading: prevLoading } = prevProps

    if (searchTerm !== prevSearchTerm || loading !== prevLoading) {
      document.getElementById(this.inputId).focus()
    }
  }

  render() {
    const {
      forwardedRef,
      autoFocus,
      creatable,
      defaultValue,
      disabled,
      errorMessage,
      formatCreateLabel,
      label,
      loading,
      multi,
      noOptionsMessage,
      onChange,
      onSearchInputChange,
      options,
      placeholder,
      size,
      transparentBorder,
      value,
      valuesMaxHeight,
      clearable,
    } = this.props

    const reactSelectComponentProps = {
      ref: forwardedRef,
      autoFocus,
      className: `b--danger bw1 ${getFontClassNameFromSize(size)} ${
        errorMessage ? 'b--danger bw1' : ''
      }`,
      components: {
        ClearIndicator,
        Control: function Control(props) {
          return (
            <ControlComponent
              errorMessage={errorMessage}
              size={size}
              {...props}
            />
          )
        },
        DropdownIndicator: function DropdownIndicator(props) {
          return <DropdownIndicatorComponent size={size} {...props} />
        },
        IndicatorSeparator: () => null,
        MultiValueRemove,
        Placeholder,
      },
      defaultValue,
      formatCreateLabel,
      getOptionValue,
      isClearable: clearable,
      isDisabled: disabled,
      isLoading: loading,
      isMulti: multi,
      noOptionsMessage,
      inputId: this.inputId,
      onInputChange: (value, { action }) => {
        this.setState({
          searchTerm: value,
        })
        if (
          action === 'input-change' &&
          typeof onSearchInputChange === 'function'
        ) {
          onSearchInputChange(value)
        }
      },
      onChange,
      options,
      placeholder,
      styles: {
        control: style => {
          const errorStyle = errorMessage ? { borderColor: COLORS.red } : {}

          const transparentBorderStyle = {
            borderColor: 'transparent',
            boxShadow: 'none',
            '&:active': {
              borderColor: 'transparent',
            },
            '&:focus': {
              borderColor: 'transparent',
            },
            '&:hover': {
              borderColor: 'transparent',
            },
          }

          return {
            ...style,
            ...errorStyle,
            ...(transparentBorder === true && transparentBorderStyle),
            borderWidth: '.125rem',
          }
        },
        group: (style, { label }) => ({
          ...style,
          ...(options.length > 0 &&
            label !== options[options.length - 1].label && {
              borderBottom: `1px solid ${COLORS['muted-4']}`,
            }),
        }),
        groupHeading: style => ({
          ...style,
          color: COLORS['muted-2'],
          fontSize: '90%',
          fontWeight: 400,
          marginBottom: '0.6em',
        }),
        menu: style => ({ ...style, marginTop: 0 }),
        multiValue: (style, state) => ({
          ...style,
          backgroundColor: state.isDisabled
            ? COLORS['muted-4']
            : COLORS.aliceBlue,
          borderRadius: 100,
          padding: getTagPaddingFromSize(size),
          color: state.isDisabled ? COLORS.gray : COLORS.blue,
          position: 'relative',
        }),
        multiValueLabel: (style, state) => ({
          ...style,
          paddingRight: 0,
          fontWeight: 500,
          color: state.isDisabled ? COLORS.gray : COLORS.blue,
        }),
        multiValueRemove: style => ({
          ...style,
          colors: 'inherit',
          ':hover': {
            backgroundColor: 'transparent',
            color: COLORS.red,
          },
        }),
        option: style => ({ ...style, cursor: 'pointer' }),
        placeholder: style => ({ ...style, padding: 10 }),
        valueContainer: (style, state) => ({
          ...style,
          cursor: 'pointer',
          paddingLeft: '1rem',
          backgroundColor: state.isDisabled
            ? COLORS.lightGray
            : style.backgroundColor,
          maxHeight: `${valuesMaxHeight}px`,
          overflowY: 'auto',
        }),
        theme: theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: COLORS.gray,
            primary25: COLORS.lightGray,
          },
        }),
      },
      value,
    }

    return (
      <div className="flex flex-column">
        {label && (
          <label className={`dib mb3 w-100 ${getFontClassNameFromSize(size)}`}>
            {label}
          </label>
        )}

        {creatable ? (
          <CreatableSelect {...reactSelectComponentProps} />
        ) : (
          <ReactSelect {...reactSelectComponentProps} />
        )}

        {errorMessage && (
          <span className="c-danger f6 mt3 lh-title">{errorMessage}</span>
        )}
      </div>
    )
  }
}

Select.defaultProps = {
  multi: true,
  placeholder: 'Select...',
  size: 'regular',
  transparentBorder: false,
  clearable: true,
}

Select.propTypes = {
  /** @ignore Forwarded Ref */
  forwardedRef: refShape,
  /** Select auto focus */
  autoFocus: PropTypes.bool,
  /** Should clear button appear */
  clearable: PropTypes.bool,
  /** Creatable options. */
  creatable: PropTypes.bool,
  /** Default value */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Disables Select */
  disabled: PropTypes.bool,
  /** Error message, e.g., validation error message. */
  errorMessage: PropTypes.string,
  /** Gets the label for the "Create new..." option in the menu. ({inputValue}) => string | null */
  formatCreateLabel: PropTypes.func,
  /** Label text. */
  label: PropTypes.string,
  /** Is the select in a state of loading (async). */
  loading: PropTypes.bool,
  /** Text to display when loading options */
  loadingMessage: PropTypes.string,
  /** Support multiple selected options. */
  multi: PropTypes.bool,
  /** Text to display when there are no options. ({inputValue}) => string | null */
  noOptionsMessage: PropTypes.func,
  /** onChange handler: (option) => void */
  onChange: PropTypes.func.isRequired,
  /** Handle events on search input */
  onSearchInputChange: PropTypes.func,
  /** Array of options, which may or may not be grouped. */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      /** Normal options. */
      PropTypes.shape({
        /** Text that gets rendered for the option. */
        label: PropTypes.string.isRequired,
        /** Underlying value, e.g., an id. */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
          .isRequired,
      }),
      /** Grouped options. */
      PropTypes.shape({
        /** Group label. */
        label: PropTypes.string.isRequired,
        /** Group options. */
        options: PropTypes.arrayOf(
          PropTypes.shape({
            /** Text that gets rendered for the option. */
            label: PropTypes.string.isRequired,
            /** Underlying value, e.g., an id. */
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
              .isRequired,
          }).isRequired
        ),
      }),
    ])
  ),
  /** Text for the select value.  */
  placeholder: PropTypes.string,
  /** Select size */
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  /** Whether or not the border should be transparent. */
  transparentBorder: PropTypes.bool,
  /** Value of the select. */
  value: PropTypes.oneOfType([
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
          .isRequired,
      })
    ),
  ]),
  /** Max height (in _px_) of the selected values container */
  valuesMaxHeight: PropTypes.number,
}

export default withForwardedRef(Select)
