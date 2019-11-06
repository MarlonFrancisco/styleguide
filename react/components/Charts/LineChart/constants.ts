import { LineProps } from 'recharts'
const colors = [
    '#EE7850',
    '#4CAABF',
    '#9F50B6',
    '#479A5E'
]
type DefaultLineProps = Pick<LineProps, 'type' | 'strokeWidth' | 'dot'>
const defaultProps: DefaultLineProps = {
    type: 'monotone',
    strokeWidth: 3,
    dot: false,
}

export { colors, defaultProps }