import { ContainerView } from '@nativescript/core';
import { ETimeRangeEvents } from './events';
import { TimeRange } from '.';

export abstract class TimeRangeCommon extends ContainerView implements TimeRange {
  public static dragEvent = ETimeRangeEvents.OnDragEvent;
  public static timeChangeEvent = ETimeRangeEvents.OnTimeChangeEvent;
  public sendEvent(eventName: string, data?: any, msg?: string) {
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
