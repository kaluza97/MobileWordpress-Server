const parser = require('@typescript-eslint/parser');

module.exports = [
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            parser: parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module"
            },
            globals: {
                node: true,
            }
        },
        plugins: {
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin")
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-require-imports": "off"
        }
    }
];