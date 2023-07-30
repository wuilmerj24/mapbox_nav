import { Screen } from '@nativescript/core';
import { TimeRangeCommon } from './common';

export class TimeRange extends TimeRangeCommon {
  timeRanger: RangeCircularSlider;
  createNativeView(): Object {
    this.timeRanger = RangeCircularSlider.alloc().init();

    return this.timeRanger;
  }

  initNativeView(): void {
    super.initNativeView();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}
