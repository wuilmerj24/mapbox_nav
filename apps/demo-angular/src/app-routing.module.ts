import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mapbox-navigator', loadChildren: () => import('./plugin-demos/mapbox-navigator.module').then((m) => m.MapboxNavigatorModule) },
  { path: 'sentryio', loadChildren: () => import('./plugin-demos/sentryio.module').then((m) => m.SentryioModule) },
  { path: 'time-range', loadChildren: () => import('./plugin-demos/time-range.module').then((m) => m.TimeRangeModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
