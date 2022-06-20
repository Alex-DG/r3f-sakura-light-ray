import useDom from '../hooks/debugStyle'
import Credits from './components/Credits'
import Instructions from './components/Instructions'
import Loading from './components/Loading'

const Dom = () => {
  useDom()

  return (
    <>
      <Instructions />
      <Credits />
      <Loading />
    </>
  )
}

export default Dom
