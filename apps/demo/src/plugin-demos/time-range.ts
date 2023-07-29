import { Observable, EventData, Page, Utils } from '@nativescript/core';
import { DemoSharedTimeRange } from '@demo/shared';
import { TimeRange } from '@arepa/time-range';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function onDrag(args) {
  console.log('onDrag ', args.data);
}

export function onTime(args) {
  console.log('onTime ', args.data);
}

export function onLoad(args) {
  console.log('load');
  const tr: TimeRange = args.object;
}

export class DemoModel extends DemoSharedTimeRange {}
