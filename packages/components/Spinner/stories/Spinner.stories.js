import React from 'react'
import { storiesOf } from '@storybook/react'
import Spinner from '../src/index.js/index.js'

storiesOf('Spinner', module).add('with text', () => (
  <span className="dib c-muted-1">
    <Spinner color="currentColor" size={20} />
  </span>
))
