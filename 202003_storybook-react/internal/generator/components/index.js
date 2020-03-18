const { componentExists } = require('../utils');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['Stateless Function', 'React.Component'],
    }, {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }
        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    let componentTemplate;
    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = 'stateless.js.hbs';
        break;
      }
      case 'React.Component':
      default:
        componentTemplate = 'es6.js.hbs';
    }

    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.js',
        templateFile: 'components/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.js',
        templateFile: `components/${componentTemplate}`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.scss',
        templateFile: 'components/style.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/{{properCase name}}.stories.mdx',
        templateFile: 'components/stories.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
