'use client';

import { motion } from 'framer-motion';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function IntroductionSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideUp}
      className="container mx-auto px-4 flex flex-col gap-5"
    >
      <h2 className="text-2xl font-bold text-center text-[#33ccff]">{t('aboutUs.title')}</h2>
      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="border-2 border-[#33ccff] rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-center text-[#33ccff] font-bold mb-4">{t('aboutUs.companyName')}</h3>
          <div className="text-center w-[80%] mx-auto">
            <p className="mb-2">
              {t('aboutUs.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 