import Image from "next/image"
import Link from "next/link"
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="bg-[#1a1a1a] py-10 border-t border-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Image
                            src="/logo.png"
                            alt="Nexdor Logo"
                            width={150}
                            height={40}
                            className="h-10 w-auto mb-4"
                        />
                        <p className="text-gray-400 text-sm">{t('footer.companyName')}</p>
                    </div>
                    {/* <div>
                        <h3 className="font-bold mb-4">{t('footer.services.title')}</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    {t('footer.services.items.digitalMarketing')}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    {t('footer.services.items.webDevelopment')}
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                    <div>
                        <h3 className="font-bold mb-4">{t('footer.contact.title')}</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>{t('footer.contact.email')}: marketing@nexdor.tech</li>
                            <li>{t('footer.contact.businessHours')}: 9:00 am - 6:00 pm (From Mon - Fri)</li>
                            <li>{t('footer.contact.address')}: 68 CIRCULAR ROAD #02-01 SINGAPORE</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Nexdor Solution. {t('footer.allRightsReserved')}
                </div>
            </div>
        </footer>
    )
} 