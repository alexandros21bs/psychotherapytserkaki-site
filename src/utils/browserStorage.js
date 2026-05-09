export function readStorageValue(key) {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const storage = window.localStorage
    return storage ? storage.getItem(key) : null
  } catch {
    return null
  }
}


export function writeStorageValue(key, value) {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    const storage = window.localStorage
    if (!storage) {
      return false
    }
    storage.setItem(key, value)
    return true
  } catch {
    return false
  }
}