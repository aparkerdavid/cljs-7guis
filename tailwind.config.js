module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    outline: ["focus"],
    borderColor: ["focus", "hover"],
    extend: {
      backgroundColor: ["active", "odd"],
      borderColor: ["active"],
    },
  },
  plugins: [],
};
