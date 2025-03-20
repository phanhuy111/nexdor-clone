"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslation } from 'react-i18next'
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LanguageSwitcher from "./language-switcher"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] border-gray-800">
        <nav className="flex flex-col space-y-4">
          <Link
            href="/about-us"
            className="hover:text-red-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('header.about')}
          </Link>
          <Link
            href="/services"
            className="hover:text-red-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('header.services')}
          </Link>
          <Link
            href="/"
            className="hover:text-red-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('header.porfolio')}
          </Link>
          <Link
            href="/blog"
            className="hover:text-red-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('header.blog')}
          </Link>
          <Link
            href="/contact"
            className="hover:text-red-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('header.contact')}
          </Link>
          <LanguageSwitcher />
        </nav>
      </SheetContent>
    </Sheet>
  )
}

