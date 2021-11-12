import React, { createContext, useState } from 'react';
export const LanguageContext = createContext('')

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('');

    const value = {
      language,
      setLanguage,
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}