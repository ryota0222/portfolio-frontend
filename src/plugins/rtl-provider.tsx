import createCache, { StylisPlugin } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { useRouter } from 'next/router'
import rtl from 'stylis-plugin-rtl'

// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: 'css-ar', stylisPlugins: [rtl] as Array<StylisPlugin> },
  ltr: { key: 'css-en' },
}

export function RtlProvider({ children }) {
  const { locale } = useRouter()
  const dir = locale == 'ar' ? 'rtl' : 'ltr'
  const cache = createCache(options[dir])
  return <CacheProvider value={cache}>{children}</CacheProvider>
}
