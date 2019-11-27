```js
const data = [
  { x: 100, y: 200, z: 140 },
  { x: 120, y: 100, z: 270 },
  { x: 170, y: 300, z: 100 },
  { x: 140, y: 250, z: 80 },
  { x: 150, y: 400, z: 340 },
  { x: 110, y: 280, z: 3400 },
];


<BubbleChart
  schema={{container: {width: '100%', height: '100%'}}}
  data={data}
  xAxisKey='x'
  yAxisKey='y'
  zAxisKey='z'
/>
```