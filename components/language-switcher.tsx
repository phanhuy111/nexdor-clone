'use client'

import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

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
        console.log('Changing language to:', newLang) // Debug log
        i18n.changeLanguage(newLang)
        localStorage.setItem('i18nextLng', newLang)
    }

    return (
        <Button
            variant="ghost"
            className="hover:text-red-500 transition-colors"
            onClick={toggleLanguage}
        >
            {t('header.switchLanguage')}
        </Button>
    )
} 