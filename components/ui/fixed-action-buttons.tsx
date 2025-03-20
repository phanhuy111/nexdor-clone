'use client'

import Link from "next/link"
import { PhoneCall, MessageCircle } from "lucide-react"

export default function FixedActionButtons() {
    return (
        <div className="fixed bottom-10 right-10 flex flex-col gap-4 z-50">
            <Link
                href="tel:+84123456789"
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors flex items-center justify-center shadow-lg"
            >
                <PhoneCall className="h-6 w-6" />
            </Link>
            <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors flex items-center justify-center shadow-lg"
            >
                <MessageCircle className="h-6 w-6" />
            </Link>
        </div>
    )
} 