#### The line chart shows the data as a data points connected by a line. They are useful to analyze changes over the time, comparisons, and trends.

```js
  const sampleData = require('./sampleData').default;
  const keys = ['customers', 'orders', 'totalSpent'];
  const mapper = {
    'customers': 'Customers',
    'orders': 'Orders',
    'totalSpent': 'Total Spent'
  }
  const formatter = (value, name) => {
    if(name == 'totalSpent')
        value = `$${value}`
    return [value, mapper[name]]

  }
  <LineChart
    data={sampleData}
    dataKeys={keys}
    xAxisKey='hour'
    formatter={formatter}
  />
```

### 👍 Dos
- Use grids to help your audience trace their finger
from the data to the axis.
- Use axis labels clearly and concise, so, you might be want to abbreviate sometimes.


### 👎 Don'ts
-  Avoid spaghetti chart(don't use more than 4 lines)
```jsx noeditor
const sampleData = require('./multilineSample').default;
const keys = ['uv', 'pv', 'amt', 'gte', 'yaw'];
const schema = {container: { height: 200, width: '30%'}};
<LineChart
  data={sampleData}
  dataKeys={keys}
  schema={schema}
  xAxisKey='name'
/>
```

- Avoid to do grid competes visually with the data.



# Line chart schema
The schema prop defines the style of the chart. This should be given as an object with styles defined for `axis`, `grid`, `container`, according to your needs.  

```js noeditor static
const schema = {
  container:{
    height: 300,
    width: '100%'
  },
  axis: {
    axisLine: false,
    tickLine: false
  },
  grid: {
    horizontal: false,
    vertical: false,
  }
};

```

#### axis
The axis property is responsible to change visual appearence of the axis in the chart.

- `tickLine`: If set true, axis tick lines will be drawn.
- `axisLine`: If set true, axis line will be drawn.

#### container
The container property is responsible to define the size of box that will render the chart.

- `height`: The percentage value of the chart's width or a fixed width.
- `width`: The percentage value of the chart's width or a fixed height.

#### grid
The grid property is responsible to show a grid inside the chart.

- `horizontal`: If set true, horizontal grid lines will be drawn.
- `vertical`: If set true, vertical grid lines will be drawn. 

### Formatting values on the tooltip

The formatter prop takes a `function` which will be used to render each content of tooltip. If you want to customize the content of your tooltip, make sure that your function follows this signature:

```js noeditor static
const mapper = {
  'customers': 'Customers',
  'orders': 'Orders',
  'totalSpent': 'Total Spent'
}

const formatter = (value, name) => {
  if(name == 'totalSpent')
    value = `$${value}`
  return [value, mapper[name]]
}

const formatter2 = (value, name) => {
  return mapper[name]
}
```

