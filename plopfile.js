const config = plop => {
  plop.setGenerator('Estrutura SOLID', {
      description: 'this is a SOLID generator',
      prompts: [
        {
          type: 'input',
          name: 'moduleName',
          message: 'Insira o nome do módulo'
        },
        {
          type: 'input',
          name: 'routeName',
          message: 'Insira o nome da tabela'
        },
        {
          type: 'input',
          name: 'PluralRouteName',
          message: 'Insira o nome da tabela no plural'
        },
        {
          type: 'input',
          name: 'routeName',
          message: 'Insira o nome da tabela'
        }
      ],
      actions: [
        {
          type: 'add',
          path: 'src/modules/{{moduleName}}/model/{{sentenceCase routeName}}.ts',
          templateFile: 'plop-Templates/modules/model/routeName.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/modules/{{moduleName}}/repositories/types/I{{sentenceCase PluralRouteName}}Repository.ts',
          templateFile: 'plop-Templates/modules/repositories/types/IRepository.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/modules/{{moduleName}}/repositories/implementations/{{sentenceCase PluralRouteName}}Repository.ts',
          templateFile: 'plop-Templates/modules/repositories/implementations/Repository.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/modules/{{moduleName}}/useCases/{{routeName}}/create{{sentenceCase routeName}}/Create{{sentenceCase routeName}}Controller.ts',
          templateFile: 'plop-Templates/modules/useCases/routeName/createRouteName/CreateRouteNameController.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/modules/{{moduleName}}/useCases/{{routeName}}/create{{sentenceCase routeName}}/Create{{sentenceCase routeName}}UseCase.ts',
          templateFile: 'plop-Templates/modules/useCases/routeName/createRouteName/CreateRouteNameUseCase.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/modules/{{moduleName}}/useCases/{{routeName}}/create{{sentenceCase routeName}}/index.ts',
          templateFile: 'plop-Templates/modules/useCases/routeName/createRouteName/index.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/modules/{{moduleName}}/useCases/{{routeName}}/list{{sentenceCase PluralRouteName}}/List{{sentenceCase PluralRouteName}}Controller.ts',
          templateFile: 'plop-Templates/modules/useCases/routeName/listRouteName/ListRouteNameController.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/modules/{{moduleName}}/useCases/{{routeName}}/list{{sentenceCase PluralRouteName}}/List{{sentenceCase PluralRouteName}}UseCase.ts',
          templateFile: 'plop-Templates/modules/useCases/routeName/listRouteName/ListRouteNameUseCase.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/modules/{{moduleName}}/useCases/{{routeName}}/list{{sentenceCase PluralRouteName}}/index.ts',
          templateFile: 'plop-Templates/modules/useCases/routeName/listRouteName/index.hbs',
          skipIfExists: true,
        },


        {
          type: 'add',
          path: 'src/routes/{{moduleName}}/{{routeName}}.routes.ts',
          templateFile: 'plop-Templates/routes/routeName/routeName.hbs',
          skipIfExists: true,
        },
      ]
  });
};

module.exports = config;