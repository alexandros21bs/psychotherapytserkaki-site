import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { STORAGE_KEY, translations } from './language-constants'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'en' ? 'en' : 'el'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language === 'en' ? 'en' : 'el'
  }, [language])

  const value = useMemo(() => {
    const t = translations[language]
    return {
      language,
      setLanguage,
      isEnglish: language === 'en',
      t,
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
