import React, { useEffect, useRef, useCallback } from 'react'
import useSp from '@/hooks/useSp'

interface Props {
  id: string
  file?: string
}

const Gist: React.FC<Props> = ({ id, file }) => {
  const ref = useRef<HTMLIFrameElement | null>(null)
  const [isSp] = useSp()
  useEffect(() => {
    updateIframeContent()
  }, [])
  const defineUrl = useCallback(() => {
    const fileArg = file ? `?file=${file}` : ''
    return `https://gist.github.com/${id}.js${fileArg}`
  }, [id, file])
  const updateIframeContent = () => {
    const iframe = ref.current
    let doc = (iframe as any).document
    if (iframe.contentDocument) doc = iframe.contentDocument
    else if (iframe.contentWindow) doc = iframe.contentWindow.document

    const gistLink = defineUrl()
    const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`
    const styles = `
    <style>
        * {
            font-size:12px;
        }
        .gist .gist-file {
            border-radius: 7px !important;
            max-height: 500px;
            overflow-y: scroll;
        }
    </style>
    `
    const elementId = file ? `gist-${id}-${file}` : `gist-${id}`
    const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`
    const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`
    doc.open()
    doc.writeln(iframeHtml)
    doc.close()
  }
  if (isSp) {
    return (
      <a
        href={`https://gist.github.com/${id}`}
        target="_blank"
        rel="noreferrer"
      >
        {`https://gist.github.com/${id}`}
      </a>
    )
  }
  return (
    <iframe
      ref={ref}
      width="100%"
      frameBorder={0}
      id={file ? `gist-${id}-${file}` : `gist-${id}`}
    />
  )
}

export default Gist
