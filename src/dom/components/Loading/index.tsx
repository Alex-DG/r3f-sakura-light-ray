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

    background-color: #d9afd9;
    background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 1;
  `,
  text: css`
    font-size: 1.25rem;
    font-weight: bold;
    color: #fff;
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
  `
}

const Loading = () => {
  const loadingRef = useRef<HTMLDivElement | null>(null)
  const { progress, completed } = useSnapshot(loadingState)

  useEffect(() => {
    if (completed) {
      gsap.to(loadingRef.current, {
        duration: 1,
        opacity: 0,
        delay: 1,
        ease: 'power3.out',
        onStart: () => {
          gsap.to(sceneState, { lightProgress: 1, delay: 0.2, duration: 1.5, ease: 'power3.out' })
        },
        onComplete: () => {
          gsap.set(loadingRef.current, { display: 'none' })
        }
      })
    }
  }, [completed])

  return (
    <div ref={loadingRef} className={styles.container}>
      <span className={styles.text}>{progress.toFixed(0)}%</span>
    </div>
  )
}

export default Loading
