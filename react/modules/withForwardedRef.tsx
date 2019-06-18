import React from 'react'
import PropTypes from 'prop-types'

// For more info see: https://stackoverflow.com/a/51127130/10725088
// Typescript hasn't include Element on Window type yet, related: https://github.com/Microsoft/TypeScript/issues/19816
const Element =
  typeof window === 'undefined' || typeof (window as any).Element === 'undefined'
    ? function() {}
    : (window as any).Element

export const refShape: any = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
])

type ForwardedRefProps<T = HTMLElement> = {
  forwardedRef: React.Ref<T>
}

export function withForwardedRef<OriginalProps extends ForwardedRefProps>(Component: React.ComponentType<OriginalProps>) {
  const ComponentWithRef = React.forwardRef<typeof Component, OriginalProps>((props, ref) => {
    return <Component {...props} forwardedRef={ref} />
  })

  ComponentWithRef.displayName = Component.displayName || Component.name

  type ReturnProps = Omit<React.ComponentProps<typeof ComponentWithRef>, 'forwardedRef'>

  return ComponentWithRef as React.ForwardRefExoticComponent<ReturnProps>
}
