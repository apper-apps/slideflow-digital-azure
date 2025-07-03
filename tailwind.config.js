/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#00d4ff',
        secondary: '#007acc',
        accent: '#1a1a2e',
        surface: '#16213e',
        background: '#0f3460',
        success: '#00ff88',
        warning: '#ffaa00',
        error: '#ff4444',
        info: '#00aaff',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        'gradient-text': 'linear-gradient(135deg, #00d4ff 0%, #007acc 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(26, 26, 46, 0.6) 0%, rgba(22, 33, 62, 0.4) 100%)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slide-in 0.3s ease-out',
        'slide-out': 'slide-out 0.3s ease-in',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100px)' },
        },
      },
    },
  },
  plugins: [],
}