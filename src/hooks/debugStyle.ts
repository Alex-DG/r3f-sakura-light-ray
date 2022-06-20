import { useEffect, useRef } from 'react'
import { debugStyle } from '../utils/debug/debugStyle'

const useDom = () => {
  const bodyRef = useRef<HTMLBodyElement>(null!)

  useEffect(() => {
    bodyRef.current = document.querySelector('body') as HTMLBodyElement
    if (bodyRef.current) {
      debugStyle(bodyRef.current.style)
    }
  }, [])

  return null
}

export default useDom
