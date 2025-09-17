"use client"
import { toast } from "sonner"

export const showToast = {
  success: (message: string, description?: string) =>
    toast.success(message, {
      description,
      duration: 4000,
      className: "text-2xl font-bold px-6 py-4 rounded-xl bg-green-600 text-white shadow-lg",
      closeButton: true,
    }),

  error: (message: string, description?: string) =>
    toast.error(message, {
      description,
      duration: 4000,
      className: "text-2xl font-bold px-6 py-4 rounded-xl bg-red-600 text-white shadow-lg",
      closeButton: true,
    }),

  info: (message: string, description?: string) =>
    toast.info(message, {
      description,
      duration: 4000,
      className: "text-2xl font-bold px-6 py-4 rounded-xl bg-blue-600 text-white shadow-lg",
      closeButton: true,
    }),
  
  warn: (message: string, description?: string) =>
    toast.warning(message, {
      description,
      duration: 4000,
      className: "text-2xl font-bold px-6 py-4 rounded-xl bg-yellow-600 text-white shadow-lg",
      closeButton: true,
    }),
}
