/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    // Scopes follow the frontend epics in ClickUp. Scope is optional.
    'scope-enum': [
      2,
      'always',
      [
        'ui',
        'layout',
        'auth',
        'session',
        'api',
        'feed',
        'post',
        'profile',
        'config',
        'deps',
        'ci',
        'docs',
        'test',
      ],
    ],
  },
};

export default config;
