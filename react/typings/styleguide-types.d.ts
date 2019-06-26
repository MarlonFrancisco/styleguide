declare module 'styleguide-types' {
  type Size = 'small' | 'regular' | 'large'
  type HorizontalAlignment = 'left' | 'right'

  interface IconProps {
    color?: string
    size?: number
    block?: boolean
  }

  interface SolidIconProps extends IconProps {
    solid?: boolean
  }
}