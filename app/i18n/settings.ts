export const fallbackLng = 'vi'
export const languages = [fallbackLng, 'en']
export const defaultNS = 'translation'

const resources = {
    en: {
        translation: require('./locales/en.json')
    },
    vi: {
        translation: require('./locales/vi.json')
    }
};


export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        resources,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
} 