// 특정 영역 비활성화
/* eslint-disable import/first */
// 코드
/* eslint-enable import/first */

// const path = require('path')
module.exports = {
  "extends": "standard",
  // "extends": [
  //   "eslint:recommended",
  //   "plugin:react/recommended"
  // ],
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  // "setting": {
  //     "import/resolver": {
  //         node: { paths: [path.resolve('./src')] }
  //     }
  // },
  // React version not specified in eslint-plugin-react settings 경고 제거 위해 추가
  "settings": {
    "version": "detect"
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    /* JSX */
    "react/prop-types": [
      0,  //"enabled" => 0=off, 1=warn, 2=error. Defaults to 0
      {
        "ignore": ["className", "children", "location", "params", "location*"], //["className", "children", "location", "params", "location*"], 
        "customValidators": []
      }
    ],
    "react/prefer-stateless-function": 1,
    "react/jsx-no-bind": [0, {
      "ignoreRefs": false,
      "allowArrowFunctions": false,
      "allowBind": true
    }],
    // "indent" : [
    //   "warn", 2
    // ],
    "indent" : "off",
    // "sort-imports": "off",
    // "import/order": "off",
    "semi": 0,  // 세미콜론 사용 여부 (1: 사용시 에러, 0: 사용/미사용 무관)
    "eol-last": 0,
    "lines-between-class-members": 0,
    "no-unused-vars" : 0,
    "no-multiple-empty-lines" : 0,
    // "no-trailing-spaces": [2, { "skipBlankLines": true, "ignoreComments" : true }],
    "no-trailing-spaces": 0,
    "no-unneeded-ternary": ["error", { "defaultAssignment": true }],
    "padded-blocks": 0,
    "quote-props": 0,
    'dot-notation': 0, // Object 속석 접근시 '.' 접근하지 않으면 에러. => 무시 
    // "space-before-function-paren": ["error", "never"],
    'standard/no-callback-literal': 'off',
    "space-before-function-paren": 0,
    "spaced-comment": 0,
    "comma-dangle": [0, "never"],
    //--------------- react-hooks 
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  }
}
