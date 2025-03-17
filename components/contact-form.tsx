"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface FormData {
  name: string
  email: string
  phone: string
  tiktokId: string
  followers: string
  industry: string
  message: string
}

interface ContactFormProps {
  type: "creator" | "brand"
}

export default function ContactForm({ type }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    tiktokId: "",
    followers: "",
    industry: "sắc đẹp",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ và tên"
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ"
    }
    if (!formData.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại"
    if (type === "creator") {
      if (!formData.tiktokId.trim()) newErrors.tiktokId = "Vui lòng nhập ID TikTok"
      if (!formData.followers.trim()) newErrors.followers = "Vui lòng nhập số người theo dõi"
    }
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập lời nhắn"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        tiktokId: "",
        followers: "",
        industry: "sắc đẹp",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Họ và tên <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Họ và tên"
            className={`w-full border-b ${errors.name ? "border-red-500" : "border-gray-300"} py-2 focus:outline-none focus:border-red-600`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full border-b ${errors.email ? "border-red-500" : "border-gray-300"} py-2 focus:outline-none focus:border-red-600`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Số điện thoại <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
            className={`w-full border-b ${errors.phone ? "border-red-500" : "border-gray-300"} py-2 focus:outline-none focus:border-red-600`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

        {/* TikTok ID - Only for Creator */}
        {type === "creator" && (
          <div>
            <label className="block mb-2 text-sm font-medium">
              ID TikTok <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="tiktokId"
              value={formData.tiktokId}
              onChange={handleChange}
              placeholder="ID TikTok"
              className={`w-full border-b ${errors.tiktokId ? "border-red-500" : "border-gray-300"} py-2 focus:outline-none focus:border-red-600`}
            />
            {errors.tiktokId && <p className="mt-1 text-xs text-red-500">{errors.tiktokId}</p>}
          </div>
        )}

        {/* Followers - Only for Creator */}
        {type === "creator" && (
          <div>
            <label className="block mb-2 text-sm font-medium">
              Người theo dõi <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="followers"
              value={formData.followers}
              onChange={handleChange}
              placeholder="Người theo dõi"
              className={`w-full border-b ${errors.followers ? "border-red-500" : "border-gray-300"} py-2 focus:outline-none focus:border-red-600`}
            />
            {errors.followers && <p className="mt-1 text-xs text-red-500">{errors.followers}</p>}
          </div>
        )}

        {/* Industry */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Ngành <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600 appearance-none bg-transparent"
            >
              <option value="sắc đẹp">Sắc đẹp</option>
              <option value="thời trang">Thời trang</option>
              <option value="công nghệ">Công nghệ</option>
              <option value="ẩm thực">Ẩm thực</option>
              <option value="du lịch">Du lịch</option>
            </select>
            <ChevronDown
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
              size={16}
            />
          </div>
        </div>

        {/* Brand Name - Only for Brand */}
        {type === "brand" && (
          <div>
            <label className="block mb-2 text-sm font-medium">
              Tên thương hiệu <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="brandName"
              placeholder="Tên thương hiệu"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-600"
            />
          </div>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Lời nhắn <span className="text-red-600">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Để lại lời nhắn"
          className={`w-full border-b ${errors.message ? "border-red-500" : "border-gray-300"} py-2 focus:outline-none focus:border-red-600 min-h-[100px]`}
        ></textarea>
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? "Đang gửi..." : "Gửi"}
      </button>
    </form>
  )
}

