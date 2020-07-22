module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        'space-before-function-paren': ['error', 'never'],
        'camelcase': 'off',
        'semi': ['error', 'always'],
        'indent': ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/array-bracket-spacing': 'error',
        'vue/arrow-spacing': 'error',
        'vue/block-spacing': 'error',
        'vue/brace-style': 'error',
        'vue/comma-dangle': 'error',
        'vue/component-name-in-template-casing': 'error',
        'vue/eqeqeq': 'error',
        'vue/key-spacing': 'error',
        'vue/match-component-file-name': 'error',
        'vue/object-curly-spacing': 'error',
        'vue/max-attributes-per-line': ['error', {
            'singleline': 4,
            'multiline': {
                'max': 1,
                'allowFirstLine': false
            }
        }],
        'vue/html-indent': ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        'no-mixed-operators': 'off'
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/recommended',
        '@vue/standard',
        '@vue/typescript'
    ]
};
