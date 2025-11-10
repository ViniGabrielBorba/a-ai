'use client'

import { useEffect, useState } from 'react'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

interface ToastProps {
  message: string
  type: ToastType
  duration?: number
  onClose: () => void
}

export default function Toast({ message, type, duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeaving(true)
      setTimeout(() => {
        setIsVisible(false)
        onClose()
      }, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️'
  }

  const colors = {
    success: 'bg-green-500 border-green-600',
    error: 'bg-red-500 border-red-600',
    info: 'bg-blue-500 border-blue-600',
    warning: 'bg-yellow-500 border-yellow-600'
  }

  const iconBg = {
    success: 'bg-green-100',
    error: 'bg-red-100',
    info: 'bg-blue-100',
    warning: 'bg-yellow-100'
  }

  return (
    <div
      className={`min-w-[320px] max-w-md transform transition-all duration-300 ${
        isLeaving ? 'translate-x-full opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'
      }`}
    >
      <div
        className={`${colors[type]} rounded-xl shadow-2xl border-2 overflow-hidden backdrop-blur-sm transform transition-transform hover:scale-105`}
      >
        <div className="flex items-start p-4">
          <div className={`${iconBg[type]} rounded-full p-3 mr-3 flex-shrink-0`}>
            <span className="text-2xl block animate-pulse-subtle">{icons[type]}</span>
          </div>
          <div className="flex-1 pt-1">
            <p className="text-white font-semibold text-sm leading-relaxed">{message}</p>
          </div>
          <button
            onClick={() => {
              setIsLeaving(true)
              setTimeout(() => {
                setIsVisible(false)
                onClose()
              }, 300)
            }}
            className="ml-3 text-white hover:text-gray-200 transition-all flex-shrink-0 p-1 hover:bg-white hover:bg-opacity-20 rounded-full hover:rotate-90"
            aria-label="Fechar notificação"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="h-1 bg-black bg-opacity-20 relative overflow-hidden">
          <div
            className="h-full bg-white bg-opacity-30 transition-all ease-linear"
            style={{
              width: isLeaving ? '0%' : '100%',
              animation: isVisible && !isLeaving ? `shrink ${duration}ms linear forwards` : 'none'
            }}
          />
        </div>
      </div>
    </div>
  )
}

