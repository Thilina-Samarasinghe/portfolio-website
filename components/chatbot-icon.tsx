"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ChatbotIconProps {
  link: string
}

export default function ChatbotIcon({ link }: ChatbotIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Robot eye blink animation
  const eyeVariants = {
    open: { scaleY: 1 },
    squint: { scaleY: 0.3 },
    closed: { scaleY: 0.1 },
  }

  const blinkAnimation = {
    duration: 0.4,
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse" as const,
    repeatDelay: 2,
    ease: "easeInOut",
  }

  // Antenna animation
  const antennaVariants = {
    idle: { y: 0 },
    active: { y: -2 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            className="flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-lg overflow-hidden"
          >
            {/* Robot SVG */}
            <motion.svg
              viewBox="0 0 100 100"
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              {/* Antenna */}
              <motion.g
                initial="idle"
                animate={isHovered ? "active" : "idle"}
                variants={antennaVariants}
                transition={{
                  duration: 0.3,
                  repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "reverse",
                }}
              >
                <rect x="48" y="10" width="4" height="10" fill="currentColor" />
                <circle cx="50" cy="8" r="5" fill="currentColor" />
              </motion.g>

              {/* Head */}
              <rect x="30" y="25" width="40" height="35" rx="8" fill="currentColor" />

              {/* Eyes */}
              <g>
                <motion.ellipse
                  cx="38"
                  cy="40"
                  rx="5"
                  ry="6"
                  fill="#1a1f36"
                  initial="open"
                  animate={isHovered ? ["open", "squint", "open"] : ["open", "closed", "open"]}
                  variants={eyeVariants}
                  transition={blinkAnimation}
                />
                <motion.ellipse
                  cx="62"
                  cy="40"
                  rx="5"
                  ry="6"
                  fill="#1a1f36"
                  initial="open"
                  animate={isHovered ? ["open", "squint", "open"] : ["open", "closed", "open"]}
                  variants={eyeVariants}
                  transition={blinkAnimation}
                />
              </g>

              {/* Mouth */}
              <motion.rect
                x="40"
                y="55"
                width="20"
                height={isHovered ? "8" : "3"}
                rx="2"
                fill="#1a1f36"
                animate={{ height: isHovered ? 8 : 3 }}
                transition={{ duration: 0.3 }}
              />

              {/* Body */}
              <rect x="35" y="65" width="30" height="20" rx="4" fill="currentColor" />

              {/* Buttons/Lights */}
              <motion.circle
                cx="42"
                cy="75"
                r="3"
                fill="#1a1f36"
                animate={{
                  fill: isHovered ? ["#1a1f36", "#ff5555", "#1a1f36"] : "#1a1f36",
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "loop",
                }}
              />
              <motion.circle
                cx="50"
                cy="75"
                r="3"
                fill="#1a1f36"
                animate={{
                  fill: isHovered ? ["#1a1f36", "#55ff55", "#1a1f36"] : "#1a1f36",
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "loop",
                  delay: 0.3,
                }}
              />
              <motion.circle
                cx="58"
                cy="75"
                r="3"
                fill="#1a1f36"
                animate={{
                  fill: isHovered ? ["#1a1f36", "#5555ff", "#1a1f36"] : "#1a1f36",
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "loop",
                  delay: 0.6,
                }}
              />
            </motion.svg>
          </motion.div>

          {/* Ripple effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1.5],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="absolute inset-0 rounded-full bg-primary"
          />

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-2 rounded shadow-lg whitespace-nowrap"
              >
                <p className="text-sm font-medium">Chat with AI Assistant</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </a>
    </motion.div>
  )
}

