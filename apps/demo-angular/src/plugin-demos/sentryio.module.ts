import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SentryioComponent } from './sentryio.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SentryioComponent }])],
  declarations: [SentryioComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SentryioModule {}
