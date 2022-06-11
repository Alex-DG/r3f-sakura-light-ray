export const isDebug = () => {
  const queryString = window.location.search
  return queryString === '?debug'
}
