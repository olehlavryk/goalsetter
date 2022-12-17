module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "ignorePatterns": ["node_modules", ".eslintrc.js"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "no-unused-vars": "warn",
        "no-undef": "warn",
        "no-console": "warn",
        "quotes": ["warn", "double", { "allowTemplateLiterals": true }],
        "prefer-const": "warn",
        "indent": ["warn", 2],
        "max-len": ["warn", { "code": 120 }],
        "semi": ["warn", "always"],
    }
};
