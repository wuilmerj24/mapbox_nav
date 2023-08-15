import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMapboxNavigator } from '@demo/shared';
import {} from '@arepa/mapbox-navigator';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMapboxNavigator {}
