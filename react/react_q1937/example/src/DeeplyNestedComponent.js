import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

function DeeplyNestedComponent() {
    const language = useContext(LanguageContext)

    return (
        <div>Language: {language}</div>
    )
}

export default DeeplyNestedComponent