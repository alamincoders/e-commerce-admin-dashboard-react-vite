/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px"
      }
    },
    boxShadow: {
      custom: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      custom_secondary: "rgba(0, 0, 0, 0.030) 5.4px 2.4px 3.2px"
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      primary: {
        50: '#f0f2fe',
        100: '#dee2fb',
        200: '#c4cdf9',
        300: '#9cadf4',
        400: '#5c74eb',
        500: '#4b5be6',
        600: '#363bda',
        700: '#302dc8',
        800: '#302aa3',
        900: '#292781',
        950: '#1e1c4f'
      },
      secondary: {
        50: '#f4f7fa',
        100: '#e7ecf2',
        200: '#d4dce9',
        300: '#b7c6d9',
        400: '#92a7c5',
        500: '#7a8fb7',
        600: '#687aa8',
        700: '#5c6a99',
        800: '#4f587e',
        900: '#424b66',
        950: '#2c2f3f'
      },
      success: {
        50: '#edfcf5',
        100: '#d4f7e5',
        200: '#adedd0',
        300: '#77deb5',
        400: '#3bc593',
        500: '#1dac7d',
        600: '#108b65',
        700: '#0d6f53',
        800: '#0d5843',
        900: '#0c4838',
        950: '#052920'
      },
      error: {
        50: '#fef2f2',
        100: '#fde3e3',
        200: '#fdcbcb',
        300: '#faa7a7',
        400: '#f46e6e',
        500: '#eb4848',
        600: '#d72b2b',
        700: '#b52020',
        800: '#961e1e',
        900: '#7c2020',
        950: '#430c0c'
      },
      sunglow: {
        50: "#fdf9ef",
        100: "#fbf1d9",
        200: "#f6e0b2",
        300: "#f0cb81",
        400: "#e9ad53",
        500: "#e3922c",
        600: "#d47a22",
        700: "#8d4b1f",
        800: "#723f1c",
        900: "#3d1e0d"
      },
      gray: {
        50: "#f6f7f9",
        100: "#f1f2f5",
        200: "#d6d9e1",
        300: "#b1b9c8",
        400: "#8793a9",
        500: "#68758f",
        600: "#535e76",
        700: "#3b4151",
        800: "#343946",
        900: "#23262e"
      }
    }
  },
  plugins: []
};
