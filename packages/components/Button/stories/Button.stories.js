import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import Button from '../src/index.js'

storiesOf('Button', module)
  .add('with text', () => (
    <Button isLoading={boolean('isLoading', false)}>
      {text('Label', `Hello, I'm a button`)}
    </Button>
  ))
  .add('with emoji', () => (
    <Button isLoading={boolean('isLoading', false)}>
      <span role="img" aria-label="so cool">
        {text('Label', `😀 😎 👍 💯`)}
      </span>
    </Button>
  ))
