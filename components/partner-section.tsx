import Image from "next/image";
import { useTranslation } from "react-i18next";


export default function PartnerSection() {
    const { t } = useTranslation();

    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold mb-6 text-center">{t('home.ourClients')}</h2>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                    <Image
                        src="/brands/com-tam-phuc-loc-tho.png"
                        alt="L'OREAL"
                        width={120}
                        height={60}
                        className="h-[180px] object-contain"
                    />
                    <Image
                        src="/brands/dau-ma-mix.png"
                        alt="GARNIER"
                        width={120}
                        height={60}
                        className="h-[180px] object-contain"
                    />
                    <Image
                        src="/brands/familao.png"
                        alt="CUREL"
                        width={120}
                        height={60}
                        className="h-[180px] object-contain"
                    />
                    <Image
                        src="/brands/ganuong.png"
                        alt="BEAUTY BOX"
                        width={120}
                        height={60}
                        className="h-[180px] object-contain"
                    />
                    <Image
                        src="/brands/lothamilk.png"
                        alt="BIORÉ"
                        width={120}
                        height={60}
                        className="h-[180px] object-contain"
                    />
                    <Image
                        src="/brands/luckypao.png"
                        alt="SANOFI"
                        width={120}
                        height={60}
                        className="h-[180px] object-contain"
                    />
                    <Image
                        src="/brands/nutrifood.png"
                        alt="KAO"
                        width={120}
                        height={60}
                        className="h-[180px] object-contain"
                    />
                    <Image
                        src="/brands/saplela.png"
                        alt="MAYBELLINE"
                        width={120}
                        height={60}
                        className="h-[180px] object-contain"
                    />
                    <Image
                        src="/brands/vui-coffee.png"
                        alt="G.G.G"
                        width={120}
                        height={60}
                        className="h-[180px] object-contain"
                    />
                </div>
            </div>
        </section>
    )
}