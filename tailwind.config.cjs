const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,vue}'],
  theme: {
    colors: {
      primary: 'var(--e-color-primary)',
      secondary: 'var(--e-color-secondary)',
      accent: 'var(--e-color-accent)',
      warning: 'var(--e-color-warning)',
      danger: 'var --e-color-danger)',
      base: "var(--e-base-color)"
    },
    boxShadow: {
      "s-0": "0 0 0 rgba(0,0,0,0.2), 0 0 0 rgba(0,0,0,0.14), 0 0 0 rgba(0,0,0,0.12)",
      "s-1": "0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12)",
      "s-2": "0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12)",
      "s-3": "0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12)",
      "s-4": "0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12)",
      "s-5": "0 3px 5px -1px rgba(0,0,0,0.2), 0 5px 8px rgba(0,0,0,0.14), 0 1px 14px rgba(0,0,0,0.12)",
      "s-6": "0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12)",
      "s-7": "0 4px 5px -2px rgba(0,0,0,0.2), 0 7px 10px 1px rgba(0,0,0,0.14), 0 2px 16px 1px rgba(0,0,0,0.12)",
      "s-8": "0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12)",
      "s-9": "0 5px 6px -3px rgba(0,0,0,0.2), 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12)",
      "s-10": "0 6px 6px -3px rgba(0,0,0,0.2), 0 10px 14px 1px rgba(0,0,0,0.14), 0 4px 18px 3px rgba(0,0,0,0.12)",
      "s-11": "0 6px 7px -4px rgba(0,0,0,0.2), 0 11px 15px 1px rgba(0,0,0,0.14), 0 4px 20px 3px rgba(0,0,0,0.12)",
      "s-12": "0 7px 8px -4px rgba(0,0,0,0.2), 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12)",
      "s-13": "0 7px 8px -4px rgba(0,0,0,0.2), 0 13px 19px 2px rgba(0,0,0,0.14), 0 5px 24px 4px rgba(0,0,0,0.12)",
      "s-14": "0 7px 9px -4px rgba(0,0,0,0.2), 0 14px 21px 2px rgba(0,0,0,0.14), 0 5px 26px 4px rgba(0,0,0,0.12)",
      "s-15": "0 8px 9px -5px rgba(0,0,0,0.2), 0 15px 22px 2px rgba(0,0,0,0.14), 0 6px 28px 5px rgba(0,0,0,0.12)",
      "s-16": "0 8px 10px -5px rgba(0,0,0,0.2), 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12)",
      "s-17": "0 8px 11px -5px rgba(0,0,0,0.2), 0 17px 26px 2px rgba(0,0,0,0.14), 0 6px 32px 5px rgba(0,0,0,0.12)",
      "s-18": "0 9px 11px -5px rgba(0,0,0,0.2), 0 18px 28px 2px rgba(0,0,0,0.14), 0 7px 34px 6px rgba(0,0,0,0.12)",
      "s-19": "0 9px 12px -6px rgba(0,0,0,0.2), 0 19px 29px 2px rgba(0,0,0,0.14), 0 7px 36px 6px rgba(0,0,0,0.12)",
      "s-20": "0 10px 13px -6px rgba(0,0,0,0.2), 0 20px 31px 3px rgba(0,0,0,0.14), 0 8px 38px 7px rgba(0,0,0,0.12)",
      "s-21": "0 10px 13px -6px rgba(0,0,0,0.2), 0 21px 33px 3px rgba(0,0,0,0.14), 0 8px 40px 7px rgba(0,0,0,0.12)",
      "s-22": "0 10px 14px -6px rgba(0,0,0,0.2), 0 22px 35px 3px rgba(0,0,0,0.14), 0 8px 42px 7px rgba(0,0,0,0.12)",
      "s-23": "0 11px 14px -7px rgba(0,0,0,0.2), 0 23px 36px 3px rgba(0,0,0,0.14), 0 9px 44px 8px rgba(0,0,0,0.12)",
      "s-24": "0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12)",

    },
  },
  safelist: ["eu-*"],
}
