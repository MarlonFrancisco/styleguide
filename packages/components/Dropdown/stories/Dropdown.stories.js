import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

import Dropdown from '../src/index.js'

const sizeOptions = {
  Default: 'regular',
  Small: 'small',
  Large: 'large',
}

storiesOf('Dropdown', module).add('Regular', () => (
  <Dropdown
    label={text('Label', 'Dropdown Label')}
    size={select('Size', sizeOptions, 'regular')}
    options={[
      { value: 'chagall', label: 'Chagall' },
      { value: 'dali', label: 'Dali' },
      { value: 'goya', label: 'Goya' },
      { value: 'monet', label: 'Monet' },
      { value: 'picasso', label: 'Picasso' },
      { value: 'tolouseLautrec', label: 'Toulouse-Lautrec' },
    ]}
    value="tolouseLautrec"
    onChange={() => {}}
  />
))
