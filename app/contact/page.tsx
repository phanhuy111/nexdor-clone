"use client"

import { FormEvent, useState } from "react"
import Header from "@/components/header"
import Footer from "../../components/footer"
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"

interface FormData {
  name: string;
  phone: string;
  email: string;
  businessArea: string;
  message: string;
}

export default function ContactPage() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    businessArea: '',
    message: '',
  });

  const [formMessage, setFormMessage] = useState<string>('');

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setFormMessage(t('contact.form.validationMessage'));
      return;
    }
    console.log('Form submitted:', formData);
    setFormMessage(t('contact.form.successMessage'));
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessArea: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="hero bg-gradient-to-r from-[#33ccff] to-[#00aae3] text-white py-16"
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="company-label justify-center flex items-center mb-6"
            >
              <div className="icon-circle bg-[#33ccff] text-white rounded-full p-2 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2 className="label-text text-xl font-semibold">{t('contact.hero.label')}</h2>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center hero-title text-3xl md:text-4xl font-bold mb-4"
            >
              {t('contact.hero.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hero-text text-center text-gray-200 mb-6"
            >
              {t('contact.hero.text')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-image"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="/banner-contact.png"
                alt={t('contact.hero.imageAlt')}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section className="contact bg-white py-12">
          <div className="container mx-auto px-6">
            <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="contact-info"
              >
                <motion.h3
                  variants={slideUp}
                  className="section-title text-2xl font-bold text-gray-900 mb-4"
                >
                  {t('contact.info.title')}
                </motion.h3>

                <motion.p
                  variants={slideUp}
                  className="info-text text-gray-600 mb-6"
                >
                  {t('contact.info.companyName')}
                </motion.p>

                <motion.div
                  variants={slideUp}
                  className="info-block mb-4"
                >
                  <h4 className="info-title text-lg font-medium text-gray-800 mb-2">
                    {t('contact.info.headquarters')}
                  </h4>
                  <p className="info-detail text-gray-600">
                    {t('contact.info.address')}
                  </p>
                </motion.div>

                <motion.div
                  variants={slideUp}
                  className="info-block mb-4"
                >
                  <h4 className="info-title text-lg font-medium text-gray-800 mb-2">
                    {t('contact.info.phone')}
                  </h4>
                  <p className="info-detail text-gray-600">{t('contact.info.phoneNumber')}</p>
                </motion.div>

                <motion.div
                  variants={slideUp}
                  className="info-block mb-4"
                >
                  <h4 className="info-title text-lg font-medium text-gray-800 mb-2">
                    {t('contact.info.businessHours')}
                  </h4>
                  <p className="info-detail text-gray-600">9:00 am - 6:00 pm (From Mon - Fri)</p>
                </motion.div>

                {/* <motion.div
                  variants={slideUp}
                >
                  <h4 className="info-title text-lg font-medium text-gray-800 mb-2">
                    {t('contact.info.email')}
                  </h4>
                  <p className="info-email text-gray-600">{t('contact.info.emailAddress')}</p>
                </motion.div> */}
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="contact-form"
              >
                <motion.h3
                  variants={slideUp}
                  className="section-title text-2xl font-bold text-gray-900 mb-4"
                >
                  {t('contact.form.title')}
                </motion.h3>

                <motion.p
                  variants={slideUp}
                  className="form-text text-gray-600 mb-6"
                >
                  {t('contact.form.description')}
                </motion.p>

                <motion.form
                  variants={staggerContainer}
                  id="contactForm"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <motion.div
                    variants={slideUp}
                    className="form-row flex flex-col md:flex-row gap-4"
                  >
                    <div className="form-group flex-1">
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: "#33ccff" }}
                        type="text"
                        name="name"
                        placeholder={t('contact.form.namePlaceholder')}
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="form-group flex-1">
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: "#33ccff" }}
                        type="tel"
                        name="phone"
                        placeholder={t('contact.form.phonePlaceholder')}
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={slideUp}
                    className="form-row flex flex-col md:flex-row gap-4"
                  >
                    <div className="form-group flex-1">
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: "#33ccff" }}
                        type="email"
                        name="email"
                        placeholder={t('contact.form.emailPlaceholder')}
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="form-group flex-1">
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: "#33ccff" }}
                        type="text"
                        name="businessArea"
                        placeholder={t('contact.form.businessAreaPlaceholder')}
                        value={formData.businessArea}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={slideUp}
                    className="form-group"
                  >
                    <motion.textarea
                      whileFocus={{ scale: 1.01, borderColor: "#33ccff" }}
                      name="message"
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></motion.textarea>
                  </motion.div>

                  <motion.div
                    variants={slideUp}
                    className="form-submit text-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      id="submitBtn"
                      className="w-full md:w-auto px-6 py-3 bg-[#33ccff] text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300"
                    >
                      {t('contact.form.submitButton')}
                    </motion.button>
                    <p id="formMessage" className="form-message text-center text-red-500 mt-2">
                      {formMessage}
                    </p>
                  </motion.div>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

