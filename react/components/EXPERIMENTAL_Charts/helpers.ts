import { merge } from 'lodash'
import { commonDefaultProps } from './commonProps'
import { defaultProps } from './LineChart/constants'

<<<<<<< HEAD
const getChartDefaultProps = (userProps: ChartProps)  => {
  const props = commonDefaultProps
  userProps && Object.keys(userProps).forEach(key => (
    props[key] = merge(props[key], userProps[key])
  ))
  
  return { configs: props }
=======
const getDefaultProps = (userProps: ChartSchema)  => {
    const configs = {...commonDefaultProps, ...userProps}
    return { configs }
>>>>>>> Fix some problems
}

const getLineDefaultProps = (userProps: LineProps)  => {
    const lineConfigs = {...defaultProps, ...userProps}
    return { lineConfigs }
}

export {
  getChartDefaultProps,
  getLineDefaultProps
}