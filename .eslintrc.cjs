module.exports = {
  "root": true,
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 12,
      "project": "./tsconfig.json",
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "settings": {
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        "typescript": {}
      }
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint"],
  "rules": {
      // Customize rules here as per your project's needs
  }
} 