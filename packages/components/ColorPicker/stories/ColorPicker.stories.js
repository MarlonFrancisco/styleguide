import React from 'react'
import { storiesOf } from '@storybook/react'
// import { text, boolean } from '@storybook/addon-knobs'

import ColorPicker from '../src/index.js'

class ColorPickerExample extends React.Component {
  constructor() {
    super()
    this.state = { color: { hex: '#141E7A' }, history: [] }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(color) {
    const { history } = this.state
    history.push(color)
    this.setState({
      history,
      color,
    })
  }

  render() {
    return (
      <div>
        <div className="w-50">
          <ColorPicker
            color={this.state.color}
            colorHistory={this.state.history}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

storiesOf('Color Picker', module).add('Regular', () => <ColorPickerExample />)
