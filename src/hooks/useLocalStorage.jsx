import { useEffect, useState } from 'react'

export default function useLocalStorage (key, initialState) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const item = localStorage.getItem(key)
    const storageState = JSON.parse(item)
    storageState && setState(storageState)
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, setState]
}
