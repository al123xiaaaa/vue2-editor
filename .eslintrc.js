module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};

// "plugin:vue/recommended",
// "eslint:recommended",
// "prettier/vue",
// "plugin:prettier/recommended"
