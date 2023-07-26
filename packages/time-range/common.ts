import { ContentView } from '@nativescript/core';
import { ETimeRangeEvents } from './events';
import { TimeRange } from '.';

export abstract class TimeRangeCommon extends ContentView implements TimeRange {
  public events: any;
  public static onDragEvent = ETimeRangeEvents.OnDragEvent;
  public static onTimeChangeEvent = ETimeRangeEvents.OnTimeChangeEvent;
  public sendEvent(eventName: string, data?: any, msg?: string) {
    console.log('call sendEvent: ', eventName);
    this.notify({
      eventName,
      object: this,
      data,
      message: msg,
    });
  }
}

export interface ITimeRangeEvents {
  onDragEvent: any;
  onTimeChangeEvent: any;
}
