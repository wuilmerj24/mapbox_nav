import { Screen, Color } from '@nativescript/core';
import { TimeRangeCommon } from './common';

export class TimeRange extends TimeRangeCommon {
  timeRanger: RangeCircularSlider;
  createNativeView(): Object {
    this.timeRanger = RangeCircularSlider.alloc().init();
    return this.timeRanger;
  }

  initNativeView(): void {
    super.initNativeView();
    // this.timeRanger.startThumbStrokeColor=new Color('green').ios;
    // this.timeRanger.startThumbStrokeHighlightedColor=new Color('blue').ios;
    // this.timeRanger.startThumbTintColor=new Color('cyan').ios;
    // this.timeRanger.endThumbStrokeColor=new Color('yellow').ios;
    // this.timeRanger.endThumbStrokeHighlightedColor=new Color('red').ios;
    // this.timeRanger.endThumbTintColor=new Color('black').ios;
    // this.timeRanger.startThumbImage = UIImage.imageNamed("icon");
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}
