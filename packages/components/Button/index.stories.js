import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Button from './index.js'

storiesOf('Button', module)
  .add('with text', () => (
    <Button>{text('Label', `Hello, I'm a button`)}</Button>
  ))
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        {text('Label', `😀 😎 👍 💯`)}
      </span>
    </Button>
  ))
