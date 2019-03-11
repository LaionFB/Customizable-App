import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default.routing.module';
import { DefaultHomePage } from './pages/home/home.page';
import { DefaultPersonPage } from './pages/person/person.page';
import { DefaultTermsAndConditionsPage } from './pages/terms-and-conditions/terms-and-conditions.page';
import { DefaultInputComponent } from './components/input/input.component';

const defaultModule: NgModule = {
  declarations: [
    DefaultHomePage,
    DefaultPersonPage,
    DefaultTermsAndConditionsPage,
    DefaultInputComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ],
  providers: [],
  entryComponents: [
    DefaultInputComponent
  ]
}

export function defaultModuleOverrider(module: { declarations?: { old?: string, new?: any }[], imports?: { old?: string, new?: any }[], providers?: { old?: string, new?: any }[], entryComponents?: { old?: string, new?: any }[] }): NgModule{
  let overridenModule: NgModule = {};

  let removeDeclarations = module.declarations ? module.declarations.map(obj => obj.old).filter(Boolean) : [];
  let includeDeclarations = module.declarations ? module.declarations.map(obj => obj.new).filter(Boolean) : [];
  overridenModule.declarations = defaultModule.declarations.filter(obj => !removeDeclarations.includes(obj['name'])).concat(includeDeclarations);

  let removeImports = module.imports ? module.imports.map(obj => obj.old).filter(Boolean) : [];
  let includeImports = module.imports ? module.imports.map(obj => obj.new).filter(Boolean) : [];
  overridenModule.imports = defaultModule.imports.filter(obj => !removeImports.includes(obj['name'])).concat(includeImports);

  let removeProviders = module.providers ? module.providers.map(obj => obj.old).filter(Boolean) : [];
  let includeProviders = module.providers ? module.providers.map(obj => obj.new).filter(Boolean) : [];
  overridenModule.providers = defaultModule.providers.filter(obj => !removeProviders.includes(obj['name'])).concat(includeProviders);

  let removeEntryComponents = module.entryComponents ? module.entryComponents.map(obj => obj.old).filter(Boolean) : [];
  let includeEntryComponents = module.entryComponents ? module.entryComponents.map(obj => obj.new).filter(Boolean) : [];
  overridenModule.entryComponents = defaultModule.entryComponents.filter(obj => !removeEntryComponents.includes(obj['name'])).concat(includeEntryComponents);

  return overridenModule;
}

@NgModule(defaultModule)
export class DefaultModule { }
