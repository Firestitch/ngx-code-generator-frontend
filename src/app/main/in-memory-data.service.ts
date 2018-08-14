import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const modules = {
      modules:
        [
          {
            'modulePath': '/src/app/module1',
            'moduleFullPath': '/src/app/module1/module1.module.ts',
            'moduleName': 'module1.module.ts'
          },
          {
            'modulePath': '/src/app',
            'moduleFullPath': '/src/app/app.module.ts',
            'moduleName': 'app.module.ts'
          }
        ]
    };

    return { modules };
  }
}
