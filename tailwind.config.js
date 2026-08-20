/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070B1A',
        midnight: '#0F172A',
        aurora: {
          cyan: '#22D3EE',
          purple: '#8B5CF6',
          pink: '#EC4899',
          mint: '#34D399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Satoshi', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'Inter', 'Satoshi', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft-dark': '0 24px 80px rgba(0, 0, 0, 0.34)',
        'soft-light': '0 24px 80px rgba(15, 23, 42, 0.10)',
        glow: '0 0 40px rgba(139, 92, 246, 0.28)',
        cyan: '0 0 34px rgba(34, 211, 238, 0.24)',
      },
      backgroundImage: {
        'mesh-dark':
          'radial-gradient(circle at 18% 18%, rgba(139, 92, 246, 0.22), transparent 30%), radial-gradient(circle at 84% 14%, rgba(34, 211, 238, 0.18), transparent 28%), radial-gradient(circle at 58% 88%, rgba(236, 72, 153, 0.14), transparent 30%), linear-gradient(135deg, #070B1A 0%, #0F172A 48%, #111827 100%)',
        'mesh-light':
          'radial-gradient(circle at 18% 16%, rgba(139, 92, 246, 0.14), transparent 30%), radial-gradient(circle at 86% 12%, rgba(34, 211, 238, 0.14), transparent 28%), radial-gradient(circle at 54% 86%, rgba(236, 72, 153, 0.10), transparent 32%), linear-gradient(135deg, #F8FAFC 0%, #EEF4FF 48%, #FFFFFF 100%)',
        'premium-button':
          'linear-gradient(135deg, #8B5CF6 0%, #22D3EE 48%, #EC4899 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.78', transform: 'scale(1.06)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 7s ease-in-out infinite',
        shimmer: 'shimmer 1.8s infinite',
      },
    },
  },
  plugins: [],
}
