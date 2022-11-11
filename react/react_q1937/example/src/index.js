import React from 'react'
import ReactDOM from 'react-dom';
import { LanguageContext, languageCodes } from './LanguageContext'
import DeeplyNestedComponent from './DeeplyNestedComponent'

const ShallowlyNestedComponent = () => (
    <DeeplyNestedComponent />
)

const MyApp = () => (
    <LanguageContext.Provider value={languageCodes.english.us}>
        <ShallowlyNestedComponent />
    </LanguageContext.Provider>
)

ReactDOM.render(
    <MyApp />,
    document.getElementById('root')
)