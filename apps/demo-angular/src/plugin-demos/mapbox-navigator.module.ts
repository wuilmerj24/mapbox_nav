import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MapboxNavigatorComponent } from './mapbox-navigator.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MapboxNavigatorComponent }])],
  declarations: [MapboxNavigatorComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MapboxNavigatorModule {}
