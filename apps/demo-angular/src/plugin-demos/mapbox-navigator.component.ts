import { Component, NgZone } from '@angular/core';
import { DemoSharedMapboxNavigator } from '@demo/shared';
import {} from '@arepa/mapbox-navigator';

@Component({
  selector: 'demo-mapbox-navigator',
  templateUrl: 'mapbox-navigator.component.html',
})
export class MapboxNavigatorComponent {
  demoShared: DemoSharedMapboxNavigator;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMapboxNavigator();
  }
}
