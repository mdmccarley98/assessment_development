import React from 'react'

export const languageCodes = {
    english: { us: 'en-US', britain: 'en-GB' },
    spanish: { spain: 'es-ES', mexico: 'es-MX' }
}

export const LanguageContext = React.createContext(languageCodes.english.us)