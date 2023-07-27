import { Application, Color, Utils } from '@nativescript/core';
import { TimeRangeCommon, ITimeRangeEvents } from './common';
import { ETimeRangeEvents } from './events';

export class TimeData {
  _native: nl.joery.timerangepicker.TimeRangePicker.Time;

  static fromNative(value: nl.joery.timerangepicker.TimeRangePicker.Time): TimeData {
    if (value instanceof nl.joery.timerangepicker.TimeRangePicker.Time) {
      const ret = new TimeData();
      ret._native = value;
      return ret;
    }
    return null;
  }

  get native() {
    return this._native;
  }

  get hour() {
    return this.native.getHour();
  }

  get minute() {
    return this.native.getMinute();
  }

  toString() {
    return this.native.toString();
  }
}

export class TimeDurationData {
  _native: nl.joery.timerangepicker.TimeRangePicker.TimeDuration;

  static fromNative(value: nl.joery.timerangepicker.TimeRangePicker.TimeDuration): TimeDurationData {
    if (value instanceof nl.joery.timerangepicker.TimeRangePicker.TimeDuration) {
      const ret = new TimeDurationData();
      ret._native = value;
      return ret;
    }
    return null;
  }

  get native() {
    return this._native;
  }

  get start() {
    return TimeData.fromNative(this.native.getStart());
  }

  get end() {
    return TimeData.fromNative(this.native.getEnd());
  }

  get hour() {
    return this.native.getHour();
  }

  get minute() {
    return this.native.getMinute();
  }

  get duration() {
    return this.native.getDuration().toMillis();
  }

  toString() {
    return this.native.toString();
  }
}

export class TimeRange extends TimeRangeCommon {
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
      const ref = new WeakRef(this);
      this.timeRanger.setOnDragChangeListener(
        new nl.joery.timerangepicker.TimeRangePicker.OnDragChangeListener({
          onDragStart(param0) {
            ref.get()?.sendEvent(TimeRange.dragEvent, param0);
            return true;
          },
          onDragStop(param0) {
            ref.get()?.sendEvent(TimeRange.dragEvent, param0);
          },
        })
      );

      this.timeRanger.setOnTimeChangeListener(
        new nl.joery.timerangepicker.TimeRangePicker.OnTimeChangeListener({
          onDurationChange(param0) {
            ref?.get()?.sendEvent(TimeRange.timeChangeEvent, TimeDurationData.fromNative(param0));
          },
          onEndTimeChange(param0) {
            ref?.get()?.sendEvent(TimeRange.timeChangeEvent, TimeData.fromNative(param0));
          },
          onStartTimeChange(param0) {
            ref?.get()?.sendEvent(TimeRange.timeChangeEvent, TimeData.fromNative(param0));
          },
        })
      );
    } catch (error) {
      console.error(`error ${error}`);
    }
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}
