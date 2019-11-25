import { merge as mergeBase } from 'lodash'
import { commonDefaultProps } from './commonProps'

import { defaultProps } from './LineChart/constants'

const merge = (defaultProps: any, customProps: any) => {
  const newProps = defaultProps
  customProps && Object.keys(customProps).forEach(key => (
    newProps[key] = mergeBase(newProps[key], customProps[key])
  ))
  return newProps
}

const getChartDefaultProps = (chartCommonProps: ChartSchema = {}, userProps: ChartSchema)  => {
  const configs = merge(merge(commonDefaultProps, chartCommonProps), userProps)
  return { configs }
}

const getLineDefaultProps = (userProps: LineProps)  => {
    const lineConfigs = {...defaultProps, ...userProps}
    return { lineConfigs }
}

export {
  getChartDefaultProps,
  getLineDefaultProps
}