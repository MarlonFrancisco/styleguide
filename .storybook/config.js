import { configure, addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import 'vtex-tachyons'

import theme from './theme.js'
import './iframe-style.css'

addDecorator(withA11y)

// https://github.com/storybookjs/storybook/tree/next/addons/knobs#withknobs-options
addDecorator(
  withKnobs({
    escapeHTML: false,
  })
)

addDecorator(
  // https://github.com/storybookjs/storybook/tree/next/addons/info#options-and-defaults
  withInfo({
    // header: false,
    // display info without clicking "info" button
    // inline: true
  })
)

addParameters({
  options: { theme },
})

// automatically import all files ending in *.stories.js
const req = require.context(
  '../packages/components',
  true,
  /\.stories\.(t|j)sx?$/
)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
