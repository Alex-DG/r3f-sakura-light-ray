import { css } from '@emotion/css'
import { lerp } from 'three/src/math/MathUtils'
import { sceneState } from '../../../store'

const textStyling = `
  font-style: italic;
  font-size: 1rem;
  color: #fff;
`

const styles = {
  container: css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    margin: 1em;
  `,
  text: css`
    ${textStyling}
  `,
  button: css`
    ${textStyling}
    background: transparent;
    text-decoration: underline;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  `
}

const Instructions = () => {
  const handleAdjust = () => {
    if (sceneState.lightProgress <= 0) {
      while (sceneState.lightProgress <= 0.95) {
        sceneState.lightProgress = lerp(sceneState.lightProgress, 1, 0.1)
      }
    } else {
      while (sceneState.lightProgress > 0) {
        sceneState.lightProgress = lerp(sceneState.lightProgress, -1, 0.2)
      }
    }
  }

  return (
    <div className={styles.container}>
      <span className={styles.text}>
        Scroll to{' '}
        <button className={styles.button} onClick={handleAdjust}>
          adjust
        </button>{' '}
        the light
      </span>
    </div>
  )
}

export default Instructions
