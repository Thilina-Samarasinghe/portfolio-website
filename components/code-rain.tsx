"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Characters to use in the rain
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    // Animation
    function draw() {
      const isDark = theme === "dark"

      // Use a more transparent background fade for better visibility in both themes
      ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.3)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Use green text for both themes, but adjust opacity for light theme
      ctx.fillStyle = isDark
        ? "#0f0" // Bright green for dark theme
        : "rgba(0, 180, 0, 0.8)" // Slightly darker green with opacity for light theme
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const intervalId = setInterval(draw, 33) // ~30fps

    return () => {
      clearInterval(intervalId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 opacity-30" />
}

