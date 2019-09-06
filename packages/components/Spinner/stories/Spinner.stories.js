import React from 'react'
import { storiesOf } from '@storybook/react'
import Spinner from '../src/index.js'

storiesOf('Spinner', module).add('Regular', () => (
  <span className="dib c-muted-1">
    <Spinner color="currentColor" size={20} />
  </span>
))
