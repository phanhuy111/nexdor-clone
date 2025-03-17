'use client'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getOptions } from './settings'

i18next
    .use(initReactI18next)
    .init({
        ...getOptions(),
        detection: {
            order: ['path', 'htmlTag', 'cookie', 'navigator'],
        }
    })

export default i18next 