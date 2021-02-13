module.exports = {
  'comment-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
      // for uni-app
      ignoreComments: [/^#ifdef/, /^#ifndef/, /^#endif/],
    },
  ],
  'selector-pseudo-class-no-unknown': [
    true,
    // for :export
    { ignorePseudoClasses: ['export'] },
  ],
  'selector-pseudo-element-no-unknown': [
    true,
    // for ::v-deep
    { ignorePseudoElements: ['v-deep'] },
  ],
  'selector-type-no-unknown': [
    true,
    { ignore: ['custom-elements', 'default-namespace'] },
  ],
  'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  'value-keyword-case': [
    'lower',
    {
      ignoreKeywords: [
        'Arial',
        'Avenir',
        'Helvetica',
        'BlinkMacSystemFont',
        'Roboto',
      ],
    },
  ],
};