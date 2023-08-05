module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@arepa/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @arepa/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@arepa': {
      // @arepa/timeranger
      timeranger: {
        build: {
          script: 'nx run timeranger:build.all',
          description: '@arepa/timeranger: Build',
        },
      },
      // @arepa/time-range
      'time-range': {
        build: {
          script: 'nx run time-range:build.all',
          description: '@arepa/time-range: Build',
        },
      },
      // @arepa/sentryio
      sentryio: {
        build: {
          script: 'nx run sentryio:build.all',
          description: '@arepa/sentryio: Build',
        },
      },
      // @arepa/sentryio
      sentryio: {
        build: {
          script: 'nx run sentryio:build.all',
          description: '@arepa/sentryio: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      timeranger: {
        script: 'nx run timeranger:focus',
        description: 'Focus on @arepa/timeranger',
      },
      'time-range': {
        script: 'nx run time-range:focus',
        description: 'Focus on @arepa/time-range',
      },
      sentryio: {
        script: 'nx run sentryio:focus',
        description: 'Focus on @arepa/sentryio',
      },
      sentryio: {
        script: 'nx run sentryio:focus',
        description: 'Focus on @arepa/sentryio',
      },
      reset: {
        script: 'nx g @arepa/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
