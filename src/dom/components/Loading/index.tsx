import { useEffect, useRef } from 'react'

import { css } from '@emotion/css'
import { loadingState, sceneState } from '../../../store'
import { useSnapshot } from 'valtio'
import gsap from 'gsap'

const styles = {
  container: css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100%;
    height: 100%;

    background-color: #000;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 1;
  `,
  text: css`
    font-size: 1rem;
    color: #fff;
  `
}

const Loading = () => {
  const loadingRef = useRef<HTMLDivElement | null>(null)
  const { progress, completed } = useSnapshot(loadingState)

  useEffect(() => {
    if (completed) {
      const tl = gsap.timeline()
      const loadingDiv = loadingRef.current as HTMLDivElement

      tl.to(loadingDiv, {
        duration: 1,
        opacity: 0,
        delay: 1,
        ease: 'power3.out'
      })
      tl.to(sceneState, { lightProgress: 1, duration: 1.5, ease: 'power3.out' })
      tl.set(loadingDiv, { display: 'none' })
    }
  }, [completed])

  return (
    <div ref={loadingRef} className={styles.container}>
      <span className={styles.text}>Loading {progress.toFixed(0)}%</span>
    </div>
  )
}

export default Loading
