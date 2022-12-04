import { useEffect, useRef } from "react"

export const useDidUpdate = (func: () => void, deps?: any) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }

    func()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
