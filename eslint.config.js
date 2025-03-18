
module.exports = {
  // env: {
  //   browser: true,
  //   es2021: true,
  //   node: true
  // },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "no-unused-vars": "warn",
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],
    "no-console": "warn",
    "no-debugger": "error",
    "eqeqeq": "error",
    "curly": "error",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto",
        "semi": true,
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ]
  },
  plugins: ["prettier"]
}
