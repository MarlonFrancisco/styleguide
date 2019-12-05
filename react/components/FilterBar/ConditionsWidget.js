import React from 'react'
import PropTypes from 'prop-types'

import Statement from '../Statement'

import ApplyButton from './ApplyButton'
import MenuHeader from './MenuHeader'

const ConditionsWidget = ({
  isMoreOptions,
  shouldOmitVerbChoice,
  shouldOmitSubject,
  options,
  subjectPlaceholder,
  statement,
  onChangeStatement,
  onChangeObjectCallback,
  virtualStatement,
  submitFilterLabel,
  onApply,
  header: { newFilterLabel, verbLabel },
}) => {
  return (
    <div className="ma5">
      <MenuHeader
        title={{
          enabled: isMoreOptions,
          label: newFilterLabel,
        }}
        fixedVerb={{
          enabled: shouldOmitVerbChoice,
          label: verbLabel,
        }}
      />
      <Statement
        isFullWidth
        omitSubject={shouldOmitSubject}
        omitVerbs={shouldOmitVerbChoice}
        options={options}
        subjectPlaceholder={subjectPlaceholder}
        statement={
          isMoreOptions
            ? virtualStatement
            : merge({}, statement, virtualStatement)
        }
        onChangeStatement={onChangeStatement}
        onChangeObjectCallback={onChangeObjectCallback}
      />
      <ApplyButton
        disabled={virtualStatement && !virtualStatement.object}
        label={submitFilterLabel}
        onClick={onApply}
      />
    </div>
  )
}

ConditionsWidget.propTypes = {
  isMoreOptions: PropTypes.bool,
  shouldOmitVerbChoice: PropTypes.bool,
  shouldOmitSubject: PropTypes.bool,
  options: PropTypes.object,
  subjectPlaceholder: PropTypes.string,
  statement: PropTypes.object,
  onChangeStatement: PropTypes.func,
  onChangeObjectCallback: PropTypes.func,
  virtualStatement: PropTypes.object,
  submitFilterLabel: PropTypes.string,
  onApply: PropTypes.func,
  header: PropTypes.shape({
    newFilterLabel: PropTypes.string,
    verbLabel: PropTypes.string,
  }),
}

export default ConditionsWidget
