import { ContentView } from '@nativescript/core';
import { OnDragEvent, OnTimeChangeEvent, TimeRangerLoadedEvent, ETimeRangeEvents } from './events';

export * from './events';

export declare class TimeRange extends ContentView {
  events: ITimeRangeEvents;
  public static onDragEvent: ETimeRangeEvents.OnDragEvent;
  public static onTimeChangeEvent: ETimeRangeEvents.OnTimeChangeEvent;
}

export interface ITimeRangeEvents {
  onDragEvent: OnDragEvent;
  onTimeChangeEvent: OnTimeChangeEvent;
  onTimeRangeLoad: TimeRangerLoadedEvent;
}
