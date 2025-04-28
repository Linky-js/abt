import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        'no-useless-escape': 'off',
        'vue/no-setup-props-destructure': 'off',
        'vue/valid-v-slot': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1
                },
                multiline: {
                    max: 1
                }
            }
        ],
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT'
                ],
                alphabetical: false
            }
        ],
        'vue/html-indent': [
            'error',
            2,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ]
    }
});
