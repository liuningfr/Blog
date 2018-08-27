module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "parserOptions": {
    "ecmaFeatures": { "experimentalObjectRestSpread": true, "jsx": true },
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "semi": "warn",
    "no-console": "off",
    "camelcase": "off",
    "max-len": ["warn", 100],
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "quotes": ["warn", "single"],
    "comma-dangle": "warn",
    "arrow-parens": "off",
    "no-unused-vars": "warn",
    "no-return-assign": "off",
    "no-nested-ternary": "off",
    "no-confusing-arrow": "off",
    "no-underscore-dangle": "off",
    "object-property-newline": "off",
    "function-paren-newline": ["error", "consistent"],
    "no-param-reassign": ["error", { "props": false }],
    "object-curly-newline": "off",
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-has-content": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/jsx-max-props-per-line": ["error", { "maximum": 3, "when": "multiline" }],
    "react/no-array-index-key": "off",
    "linebreak-style": "off",
    "prefer-destructuring": "off"
  }
}
  