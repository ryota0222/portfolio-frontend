import { memo } from 'react'
import BlogStyle from '@/styles/blog.css'

interface Props {
  lang?: string
}

export const Code: React.FC<Props> = memo(({ children, lang }) => {
  const _lang = lang ?? 'js'
  return (
    <BlogStyle.CodeWrapper className="code prism">
      <div className="head-component">
        <div className="btn-wrapper">
          <span className="btn"></span>
          <span className="btn"></span>
          <span className="btn"></span>
        </div>
      </div>
      <pre className={`line-numbers language-${_lang}`}>
        <code className={`language-${_lang}`}>{children}</code>
      </pre>
    </BlogStyle.CodeWrapper>
  )
})
