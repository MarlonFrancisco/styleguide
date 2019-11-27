import { commonDefaultProps } from './commonProps'
import { merge as mergeBase } from 'lodash'

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

const getRangeOfZAxis = (key, data) => {
  const values = data.map(item => item[key])
  const min = Math.min(...values)
  const max = Math.max(...values)
  return [min, max]
} 

export {
  getChartDefaultProps,
  getRangeOfZAxis,
  merge
}