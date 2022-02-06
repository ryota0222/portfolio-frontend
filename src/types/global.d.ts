/* eslint-disable no-var */
interface Window {
  adsbygoogle: { [key: string]: unknown }[]
  gtag?: any
}

declare global {
  var window: Window
}
