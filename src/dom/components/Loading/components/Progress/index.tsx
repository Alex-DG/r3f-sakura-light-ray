import { useProgress } from '@react-three/drei'
import { css } from '@emotion/css'
import { useEffect } from 'react'

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;

    animation-name: bounce;
    animation-timing-function: ease-out;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `,
  text: css`
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.45rem;
    color: #fff;
  `,
  progress: css`
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: #fff;
    height: 1em;
  `
}

const Progress = () => {
  const progress = useProgress((state) => state.progress)

  useEffect(() => {
    console.log('⏳', `Progress ${progress}%`)
  }, [progress])

  return (
    <div className={styles.container}>
      <span className={styles.text}>{'..:: Loading ::..'}</span>
      <span className={styles.progress}>
        {progress > 0 &&
          `
          ${progress.toFixed(0)}%`}
      </span>
    </div>
  )
}

export default Progress
