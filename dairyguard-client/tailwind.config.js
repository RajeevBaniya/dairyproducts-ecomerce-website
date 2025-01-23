import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grayBg": "#808080",
        "green2": "#178a25",
        "green3" : "#1fb831",
        "green4" : "#1ec932",
        "green5" : "#48db5a",
        "green6" : "#1b7006",
        "green": "#1ba12b",
        "red": "#FF6868",
        "secondary": "#555",
        "prigmayBG": "#FCFCFC"
      }
    },
  },
  plugins: [daisyui],
}
