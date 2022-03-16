import ErrorPageTemplate from '@/components/templates/ErrorPage'

const Error = ({ statusCode, message }) => {
  return <ErrorPageTemplate title={statusCode} description={message} />
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  const message =
    err?.response?.message ?? `An error ${statusCode} occurred on server`
  return { statusCode, message }
}

export default Error
