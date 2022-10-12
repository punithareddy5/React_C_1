/* eslint-disable unused-imports/no-unused-imports */
module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false, 
      presets: ["@babel/preset-env","@babel/preset-react"],
    },
  },
  "plugins": ["unused-imports", "eslint-plugin-react"],
  rules:{ 
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "unused-imports/no-unused-imports": "warn",
  "unused-imports/no-unused-vars": [
    "warn",
    {
      "vars": "all",
      "varsIgnorePattern": "^_",
      "args": "after-used",
      "argsIgnorePattern": "^_"
    }
  ]
  }
}; 