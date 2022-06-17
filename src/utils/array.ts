export const replaceKeyAndValue = (target: Record<string, unknown>) => {
  const array = Object.fromEntries(
    Object.entries(target).map(function (value) {
      return [value[1], value[0]]
    }),
  )
  return array
}
