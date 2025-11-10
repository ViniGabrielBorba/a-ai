'use client'

import { createContext, useState, useContext, ReactNode } from 'react'
import Toast, { ToastType } from '@/components/Toast'

interface ToastMessage {
  id: string
  message: string
  type: ToastType
  duration?: number
}

interface ToastContextType {
  showToast: (message: string, type: ToastType, duration?: number) => void
  showSuccess: (message: string, duration?: number) => void
  showError: (message: string, duration?: number) => void
  showInfo: (message: string, duration?: number) => void
  showWarning: (message: string, duration?: number) => void
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
  showSuccess: () => {},
  showError: () => {},
  showInfo: () => {},
  showWarning: () => {}
})

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const showToast = (message: string, type: ToastType, duration?: number) => {
    const id = Math.random().toString(36).substring(7)
    setToasts((prev) => [...prev, { id, message, type, duration }])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const showSuccess = (message: string, duration?: number) => {
    showToast(message, 'success', duration)
  }

  const showError = (message: string, duration?: number) => {
    showToast(message, 'error', duration)
  }

  const showInfo = (message: string, duration?: number) => {
    showToast(message, 'info', duration)
  }

  const showWarning = (message: string, duration?: number) => {
    showToast(message, 'warning', duration)
  }

  return (
    <ToastContext.Provider value={{ showToast, showSuccess, showError, showInfo, showWarning }}>
      {children}
      <div className="fixed top-4 right-4 z-[9999] pointer-events-none max-w-md w-full sm:w-auto">
        <div className="flex flex-col gap-3">
          {toasts.map((toast) => (
            <div key={toast.id} className="pointer-events-auto animate-slide-in-right">
              <Toast
                message={toast.message}
                type={toast.type}
                duration={toast.duration}
                onClose={() => removeToast(toast.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)

