const colors = require('tailwindcss/colors')

const mono = [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
]
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                mono: ['"iA Quattro"', ...mono],
                code: mono,
                sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            },
            backgroundColor: {
                accent: 'var(--color-bg-accent)',
                primary: 'var(--color-bg-primary)',
                secondary: 'var(--color-bg-secondary)',
                hover: {
                    accent: 'var(--color-bg-accent-hover)',
                },
            },
            textColor: {
                accent: 'var(--color-text-accent)',
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
                tertiary: 'var(--color-text-tertiary)',
                on: {
                    accent: 'var(--color-text-on-accent)',
                },
                fill: {
                    primary: 'var(--color-fill-primary)',
                    secondary: 'var(--color-fill-secondary)',
                },
            },
            divideColor: {
                subtle: 'var(--color-bg-secondary)',
            },
            borderColor: {
                accent: 'var(--color-text-accent)',
                subtle: 'var(--color-bg-secondary)',
            },
            letterSpacing: {
                widestest: '0.2em',
            },
            opacity: {
                90: '.9',
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: 'var(--color-text-tertiary)',
                        a: {
                            color: 'var(--color-text-tertiary)',
                            '&:hover': {
                                color: 'var(--color-text-accent)',
                            },
                            textDecoration: 'underline',
                        },
                        h1: {
                            color: 'var(--color-text-primary)',
                        },
                        h2: {
                            color: 'var(--color-text-accent)',
                        },
                        h3: {
                            color: 'var(--color-text-accent)',
                        },
                        h4: {
                            color: 'var(--color-text-accent)',
                        },
                        strong: {
                            color: 'var(--color-text-tertiary)',
                        },
                    },
                },
            },
            // colors: {
            //     white: '#fff',
            //     gray: colors.trueGray,
            //     'gray-1000': '#050505',
            // },
            boxShadow: {
                cardHover:
                    '0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)',
            },
        },
    },
    variants: {
        extend: {
            textColor: ['group-hover'],
            borderWidth: ['hover', 'focus'],
            display: ['group-hover'],
            scale: ['group-hover'],
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
