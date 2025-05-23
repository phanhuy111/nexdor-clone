'use client'

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from 'react-i18next'
import MobileMenu from "./mobile-menu"
import LanguageSwitcher from "./language-switcher"

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="bg-[#ffff] sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-[12rem]">
            <Image
              src="/logo1.png"
              alt="Nexdor Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex space-x-16">
            <Link href="/solution" className="hover:text-red-500 transition-colors">
              {t('header.about')}
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">
              {t('header.contact')}
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

