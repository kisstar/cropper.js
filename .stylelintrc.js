module.exports = {
  extends: [
    'stylelint-config-twbs-bootstrap/scss',
    'stylelint-config-prettier',
  ],
  rules: {
    'declaration-property-value-disallowed-list': {
      border: 'none',
      outline: 'none',
    },
    'function-disallowed-list': ['calc', 'lighten', 'darken'],
    'property-disallowed-list': [
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'transition',
    ],
    'scss/dollar-variable-default': [
      true,
      {
        ignore: 'local',
      },
    ],
    'scss/selector-no-union-class-name': true,
  },
};
