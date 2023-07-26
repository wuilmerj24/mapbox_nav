import { Observable, EventData, Page, Utils } from '@nativescript/core';
import { DemoSharedTimeRange } from '@demo/shared';
import { TimeRange } from '@arepa/time-range';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function onDrag(args) {
  console.log('ss ', args);
}

export function onLoad(args) {
  console.log('load');
  const tr: TimeRange = args.object;
}

export class DemoModel extends DemoSharedTimeRange {}
