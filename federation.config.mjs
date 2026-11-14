import { fromPackageJson, withNativeFederation } from '@angular-architects/native-federation/config';

export default withNativeFederation({
  name: 'lab-angular-ngx',

  //shareScope: autoShareScope({level: 'minor'}),
  shared: fromPackageJson({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
    build: 'package' 
  }).patch(['@angular/*'], { includeSecondaries: { keepAll: true } }),

  //sharedMappings: mappingsFromWorkspace({ singleton: true }).filter(['@my-org/*']).get(),
  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Entry points Node.js (schematics do ng add/ng update), não rodam no browser
    '@angular/cdk/schematics',
  ],

  // Please read our docs about configuring native federation:
  // https://native-federation.com/docs/v4/angular-adapter/configuration/
  features: {
    denseChunking: true,
    denseExternals: true,
    strictImports: false
  },
});
