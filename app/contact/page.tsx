"use client"

import { FormEvent, useState } from "react"
import Header from "@/components/header"
import Footer from "../../components/footer"
import { useTranslation } from 'react-i18next'

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
        <section className="hero bg-gradient-to-r from-[#33ccff] to-[#00aae3] text-white py-16">
          <div className="container mx-auto px-6">
            <div className="company-label justify-center flex items-center mb-6">
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
            </div>

            <h2 className="text-center hero-title text-3xl md:text-4xl font-bold mb-4">
              {t('contact.hero.title')}
            </h2>

            <p className="hero-text text-center text-gray-200 mb-6">
              {t('contact.hero.text')}
            </p>

            <div className="hero-image">
              <img
                src="https://chuyendoiso2.maugiaodien.com/wp-content/uploads/2023/05/contacts_01-1.jpg"
                alt={t('contact.hero.imageAlt')}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact bg-white py-12">
          <div className="container mx-auto px-6">
            <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="contact-info">
                <h3 className="section-title text-2xl font-bold text-gray-900 mb-4">
                  {t('contact.info.title')}
                </h3>

                <p className="info-text text-gray-600 mb-6">
                  {t('contact.info.companyName')}
                </p>

                <div className="info-block mb-4">
                  <h4 className="info-title text-lg font-medium text-gray-800 mb-2">
                    {t('contact.info.headquarters')}
                  </h4>
                  <p className="info-detail text-gray-600">
                    {t('contact.info.address')}
                  </p>
                </div>

                <div className="info-block mb-4">
                  <h4 className="info-title text-lg font-medium text-gray-800 mb-2">
                    {t('contact.info.phone')}
                  </h4>
                  <p className="info-detail text-gray-600">{t('contact.info.phoneNumber')}</p>
                </div>

                <div className="info-block">
                  <h4 className="info-title text-lg font-medium text-gray-800 mb-2">
                    {t('contact.info.email')}
                  </h4>
                  <p className="info-email text-gray-600">{t('contact.info.emailAddress')}</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form">
                <h3 className="section-title text-2xl font-bold text-gray-900 mb-4">
                  {t('contact.form.title')}
                </h3>

                <p className="form-text text-gray-600 mb-6">
                  {t('contact.form.description')}
                </p>

                <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-row flex flex-col md:flex-row gap-4">
                    <div className="form-group flex-1">
                      <input
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
                      <input
                        type="tel"
                        name="phone"
                        placeholder={t('contact.form.phonePlaceholder')}
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="form-row flex flex-col md:flex-row gap-4">
                    <div className="form-group flex-1">
                      <input
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
                      <input
                        type="text"
                        name="businessArea"
                        placeholder={t('contact.form.businessAreaPlaceholder')}
                        value={formData.businessArea}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                  </div>

                  <div className="form-submit text-center">
                    <button
                      type="submit"
                      id="submitBtn"
                      className="w-full md:w-auto px-6 py-3 bg-[#33ccff] text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300"
                    >
                      {t('contact.form.submitButton')}
                    </button>
                    <p id="formMessage" className="form-message text-center text-red-500 mt-2">
                      {formMessage}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

