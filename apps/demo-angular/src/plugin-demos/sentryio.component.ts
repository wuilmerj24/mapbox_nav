import { Component, NgZone } from '@angular/core';
import { DemoSharedSentryio } from '@demo/shared';
import {} from '@arepa/sentryio';

@Component({
  selector: 'demo-sentryio',
  templateUrl: 'sentryio.component.html',
})
export class SentryioComponent {
  demoShared: DemoSharedSentryio;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSentryio();
  }
}
