import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

import Input from '../src/index.js'

const sizeOptions = {
  Default: 'default',
  Small: 'small',
  Large: 'large',
  'X-Large': 'x-large',
}

storiesOf('Input', module).add('Regular', () => (
  <Input
    placeholder="Placeholder"
    size={select('Sizes', sizeOptions, 'default')}
    label={text('label', 'Input Label')}
  />
))
