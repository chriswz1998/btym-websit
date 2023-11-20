/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      backgroundImage: {
        'bg1': 'url(\'/bg1.jpeg\')'
      },
      colors:
          {
            'default-blue': 'rgba(62, 128, 255, 1)',
            'default-text-color': 'rgba(16, 36, 52, 1)',
            'description-text-color': 'rgba(134, 150, 160, 1)',
            'description-text-color1': 'rgba(31, 32, 34, 1)',
            'description-text-color2': 'rgba(169, 177, 198, 1)',
            'mask-bg': 'rgba(1, 12, 37, .7)',
            'icon-1': 'rgba(214, 235, 228, 1)',
            'text-1': 'rgba(32, 191, 169, 1)',
            'text-2': 'rgba(134, 150, 160, 1)',
            'icon-2': 'rgba(250, 226, 218, 1)',
            'text-3': 'rgba(255, 121, 77, 1)',
            'icon-3': 'rgba(250, 226, 218, 1)',
            'icon-4': 'rgba(235, 245, 255, 1)',
            'mask-color': 'rgba(42, 130, 228, 0.22)',
            'mask-color1': 'rgba(62, 128, 255, .08)',
            'mask-color2': 'rgba(235, 245, 255, 1)',
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))'
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))'
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))'
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))'
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))'
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))'
            }
          },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
