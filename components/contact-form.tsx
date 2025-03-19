"use client";

import type React from "react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next"; // Assuming you're using i18next for translations

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessArea: string; // Replace industry with businessArea
  message: string;
}

export default function ContactForm() {
  const { t } = useTranslation(); // For internationalization

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    businessArea: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = t('home.contactForm.errors.nameRequired') || "Vui lòng nhập họ và tên";
    if (!formData.email.trim()) {
      newErrors.email = t('home.contactForm.errors.emailRequired') || "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('home.contactForm.errors.emailInvalid') || "Email không hợp lệ";
    }
    if (!formData.phone.trim()) newErrors.phone = t('home.contactForm.errors.phoneRequired') || "Vui lòng nhập số điện thoại";
    if (!formData.message.trim()) newErrors.message = t('home.contactForm.errors.messageRequired') || "Vui lòng nhập lời nhắn";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: t('home.contactForm.successTitle') || "Gửi thành công!",
        description: t('home.contactForm.successDescription') || "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessArea: "",
        message: "",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t('home.contactForm.errorTitle') || "Có lỗi xảy ra",
        description: t('home.contactForm.errorDescription') || "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="section-title text-2xl font-bold text-gray-900 mb-4">
          {t('home.contactForm.title')}
        </h3>

        <p className="form-text text-gray-600 mb-6">
          {t('home.contactForm.description')}
        </p>

        <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
          <div className="form-row flex flex-col md:flex-row gap-4">
            <div className="form-group flex-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('home.contactForm.namePlaceholder')}
                required
                className={`w-full p-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>
            <div className="form-group flex-1">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('home.contactForm.phonePlaceholder')}
                required
                className={`w-full p-3 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>
          </div>

          <div className="form-row flex flex-col md:flex-row gap-4">
            <div className="form-group flex-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('home.contactForm.emailPlaceholder')}
                required
                className={`w-full p-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="form-group flex-1">
              <input
                type="text"
                name="businessArea"
                value={formData.businessArea}
                onChange={handleChange}
                placeholder={t('home.contactForm.businessAreaPlaceholder')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('home.contactForm.messagePlaceholder')}
              rows={6}
              required
              className={`w-full p-3 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
            ></textarea>
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <div className="form-submit text-center">
            <button
              type="submit"
              id="submitBtn"
              disabled={loading}
              className="w-full md:w-auto px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? t('home.contactForm.submitting') || "Đang gửi..." : t('home.contactForm.submitButton')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}