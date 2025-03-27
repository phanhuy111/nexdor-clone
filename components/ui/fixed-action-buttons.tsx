'use client'

import Link from "next/link"
import { PhoneCall, MessageCircle, ArrowUp } from "lucide-react"

export default function FixedActionButtons() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-10 right-10 flex flex-col gap-4 z-50">
            <Link
                href="tel:+84123456789"
                className="bg-[#33ccff] hover:bg-[#33ccff] text-white p-3 rounded-full transition-colors flex items-center justify-center shadow-lg"
            >
                <PhoneCall className="h-6 w-6" />
            </Link>
            <Link
                href="/contact"
                className="bg-[#33ccff] hover:bg-[#33ccff] text-white p-3 rounded-full transition-colors flex items-center justify-center shadow-lg"
            >
                <MessageCircle className="h-6 w-6" />
            </Link>
            <button
                onClick={scrollToTop}
                className="bg-[#33ccff] hover:bg-[#00aae3] text-white p-3 rounded-full transition-colors flex items-center justify-center shadow-lg"
            >
                <ArrowUp className="h-6 w-6" />
            </button>
        </div>
    )
} 