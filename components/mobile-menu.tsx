"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslation } from 'react-i18next'
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
      <SheetContent side="right" className="w-[300px] bg-[#222222] border-gray-800">
        <nav className="flex flex-col space-y-4">
          <Link
            href="/about-us"
            className="text-white hover:text-red-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('header.about')}
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-red-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('header.services')}
          </Link>
          <Link
            href="/porfolio"
            className="text-white hover:text-red-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('header.porfolio')}
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-red-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('header.blog')}
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-red-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t('header.contact')}
          </Link>
          <Link
            href="/consultation"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors text-center"
            onClick={() => setOpen(false)}
          >
            {t('header.consultation')}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

