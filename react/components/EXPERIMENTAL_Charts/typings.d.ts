type BaseGridProps = Pick<CartesianGridProps, 'vertical' | 'horizontal'>
type BaseXAxisProps = Pick<XAxisProps, 'axisLine' | 'tickLine' | 'padding' | 'tick' | 'hide'>
type BaseYAxisProps = Pick<YAxisProps, 'axisLine' | 'tickLine' | 'padding' | 'tick' | 'hide'>
type BaseContainerProps = Pick<ResponsiveContainerProps, 'height' | 'width'>
type DefaultLineProps = Pick<LineProps, 'type' | 'strokeWidth' | 'dot'>
type DefaultBarProps = Pick<LineProps, 'layout'>

type ChartSchema = {
  xAxis?: BaseAxisProps,
  yAxis?: BaseAxisProps, 
  container?: BaseContainerProps,
  grid?: BaseGridProps
}

type AxisKey = 'number' | 'category'

type BaseChartProps = {
  data: any,
  dataKeys: string[],
  xAxisKey: string,
<<<<<<< HEAD
  config: ChartSchema
=======
  yAxisKey: string,
  schema: ChartSchema
>>>>>>> Add default config for barchart
}

type LineProps = {
  type?: LineType
}

type BarProps = {
  layout?: LayoutType 
}
