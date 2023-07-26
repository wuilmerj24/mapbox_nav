import { Application, Color, Utils } from '@nativescript/core';
import { TimeRangeCommon, ITimeRangeEvents } from './common';
import { ETimeRangeEvents } from './events';

export class TimeRange extends TimeRangeCommon {
  public events: ITimeRangeEvents;
  owner: WeakRef<any> = new WeakRef<any>(this);
  timeRanger: nl.joery.timerangepicker.TimeRangePicker;
  createNativeView(): Object {
    this.timeRanger = new nl.joery.timerangepicker.TimeRangePicker(this._context);

    return this.timeRanger;
  }

  initNativeView(): void {
    super.initNativeView();
    try {
      this.timeRanger.setStartTime(new nl.joery.timerangepicker.TimeRangePicker.Time(12, 10));
      this.timeRanger.setSliderColor(new Color('red').android);
      this.timeRanger.setClockLabelColor(new Color('blue').android);
      this.timeRanger.setClockTickColor(new Color('cyan').android);
      this.timeRanger.setClockVisible(true);
      // this.timeRanger.setMaxDurationMinutes(1)
      this.timeRanger.setSliderRangeColor(new Color('green').android);
      this.timeRanger.setTimeStepMinutes(1);
      this.timeRanger.setThumbColor(new Color('black').android);
      this.timeRanger.setClockLabelSize(60);
      this.timeRanger.setSliderWidth(100);
      this.timeRanger.setThumbIconSize(new java.lang.Integer(100));
      this.timeRanger.setThumbSize(100);
      this.timeRanger.setClockFace(nl.joery.timerangepicker.TimeRangePicker.ClockFace.APPLE);
      this.timeRanger.setHourFormat(nl.joery.timerangepicker.TimeRangePicker.HourFormat.FORMAT_24);
      this.timeRanger.setSliderRangeGradientEnd(new java.lang.Integer(new Color('black').android));
      this.timeRanger.setSliderRangeGradientMiddle(new java.lang.Integer(new Color('blue').android));
      this.timeRanger.setSliderRangeGradientStart(new java.lang.Integer(new Color('yellow').android));
      const resId = this._context.getResources().getIdentifier('icon', 'drawable', (this._context as android.content.Context).getPackageName());

      this.timeRanger.setThumbIconEndRes(resId);
      this.timeRanger.setThumbIconStartRes(resId);
      const that = this;
      const ref = new WeakRef(this);
      this.timeRanger.setOnDragChangeListener(
        new nl.joery.timerangepicker.TimeRangePicker.OnDragChangeListener({
          onDragStart(param0) {
            const owner = ref.get();
            console.log('param ', param0);
            owner?.sendEvent(TimeRange.onDragEvent, param0);
            return true;
          },
          onDragStop(param0) {
            const owner = ref.get();
            console.log('param ', param0);
            owner?.sendEvent(TimeRange.onDragEvent, param0);
          },
        })
      );

      // this.timeRanger.setOnTimeChangeListener(new nl.joery.timerangepicker.TimeRangePicker.OnTimeChangeListener({
      //     onDurationChange(param0) {
      //         that.sendEvent(TimeRange.onTimeChangeEvent,param0);
      //     },
      //     onEndTimeChange(param0) {
      //         that.sendEvent(TimeRange.onTimeChangeEvent,param0);
      //     },
      //     onStartTimeChange(param0) {
      //         that.sendEvent(TimeRange.onTimeChangeEvent,param0);
      //     },
      // }))
    } catch (error) {
      console.error(`error ${error}`);
    }
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}
