/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'web3-dark': '#0A1628',
        'web3-darker': '#060D1A',
        'web3-blue': '#4A90E2',
        'web3-cyan': '#5DD9F5',
        'web3-purple': '#7B61FF',
        'web3-pink': '#FF61E6',
      },
      backgroundImage: {
        'gradient-web3': 'linear-gradient(135deg, #0A1628 0%, #1a2847 50%, #0A1628 100%)',
        'gradient-glow': 'radial-gradient(circle at 50% 50%, rgba(77, 144, 226, 0.15), transparent 70%)',
        'gradient-card': 'linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(123, 97, 255, 0.1) 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(74, 144, 226, 0.3)',
        'glow-purple': '0 0 40px rgba(123, 97, 255, 0.3)',
        'glow-cyan': '0 0 40px rgba(93, 217, 245, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
