'use client'

import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function LanguageSwitcher() {
    const { i18n, t } = useTranslation()

    // Ensure the language is initialized properly from localStorage
    useEffect(() => {
        const savedLang = localStorage.getItem('i18nextLng')
        if (savedLang && (savedLang === 'en' || savedLang === 'vi')) {
            i18n.changeLanguage(savedLang)
        }
    }, [i18n])

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'vi' : 'en'
        i18n.changeLanguage(newLang)
        localStorage.setItem('i18nextLng', newLang)
    }

    return (
        <button
            className={`flex items-center p-2 rounded transition-colors duration-300`}
            onClick={toggleLanguage}
        >
            <img
                src={i18n.language === 'vi' ? "/vi.svg" : "/en.svg"}
                alt={i18n.language === 'vi' ? "Vietnamese Flag" : "English Flag"}
                className="w-[24px] h-[24px] mr-2"
            />
        </button>
    )
} 