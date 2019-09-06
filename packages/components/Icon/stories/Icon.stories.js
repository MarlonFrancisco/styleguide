import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import * as Icons from '../src/index.js'

const DEMO_SIZE = 20
const DEMO_LABEL = 'pb3 code c-muted-1 f6'
const TOTAL_ICONS_PER_LINE = 6
class IconsTable extends React.PureComponent {
  render() {
    const completeIconsArray = Object.keys(Icons).sort((a, b) =>
      a < b ? -1 : a > b ? 1 : 0
    )
    const totalLines = Math.ceil(
      completeIconsArray.length / TOTAL_ICONS_PER_LINE
    )
    const chunkedIconsMatrix = []
    for (var i = 0; i < totalLines; i++) {
      const rangeStart = TOTAL_ICONS_PER_LINE * i
      chunkedIconsMatrix[i] = completeIconsArray.slice(
        rangeStart,
        rangeStart + TOTAL_ICONS_PER_LINE
      )
    }

    return (
      <table className="w-100">
        <tbody>
          {chunkedIconsMatrix.map((iconsLine, row) => (
            <tr key={`icon-table-row-${row}`}>
              {iconsLine.map((icon, cell) => {
                // eslint-disable-next-line import/namespace
                const IconComponent = Icons[icon]
                return (
                  <td key={`icon-table-cell-${row}-${cell}`}>
                    <div className={DEMO_LABEL}>{icon}</div>
                    <IconComponent size={DEMO_SIZE} />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

storiesOf('Icons', module).add('icons', () => <IconsTable />)
