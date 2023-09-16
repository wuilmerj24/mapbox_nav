import { Screen, Color, Application, GestureEvents, Utils } from '@nativescript/core';
import { TimeRangeCommon, clockFaceProperty, clockLabelColorProperty, clockLabelSizeProperty, clockTickColorProperty, clockVisibleProperty, endTimeProperty, hourFormatProperty, maxDurationMinutesProperty, sliderColorProperty, sliderRangeColorProperty, sliderRangeGradientEndProperty, sliderRangeGradientMiddleProperty, sliderRangeGradientStartProperty, sliderWidthProperty, startTimeProperty, thumbColorProperty, thumbIconEndResProperty, thumbIconSizeProperty, thumbIconStartResProperty, thumbSizeProperty, timeStepMinutesProperty } from './common';

export class TimeRange extends TimeRangeCommon {
  timeRanger: MSDoubleHandleCircularSlider;
  createNativeView(): any {
    this.timeRanger = MSDoubleHandleCircularSlider.new();
    this.timeRanger._commaSeparatedLabels = '12,1,2,3,4,5,6,7,8,9,10,11';
    return this.timeRanger;
  }

  initNativeView(): void {
    super.initNativeView();
    try {
      const _changeHandler = TimeRangerChangeHandlerImpl.initWithOwner(new WeakRef(this));
      this.timeRanger.addTargetActionForControlEvents(_changeHandler, 'sliderValueChanged', UIControlEvents.ValueChanged);
    } catch (error) {
      console.log(error);
    }
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}

@NativeClass()
class TimeRangerChangeHandlerImpl extends NSObject {
  private _owner: WeakRef<TimeRange>;

  public static initWithOwner(owner: WeakRef<TimeRange>): TimeRangerChangeHandlerImpl {
    const handler = <TimeRangerChangeHandlerImpl>TimeRangerChangeHandlerImpl.new();
    handler._owner = owner;
    return handler;
  }

  public sliderValueChanged(sender: MSDoubleHandleCircularSlider) {
    const nSCSwiftTimeRangerExt = NSCSwiftTimeRangerExt.new();
    let res_data = nSCSwiftTimeRangerExt.updateTextsStartPointValueEndPointValue(sender, sender._currentValue, sender._secondCurrentValue);
    console.log(res_data[0]);
    this._owner.get().sendEvent(TimeRange.dragEvent, { start: sender._currentValue.toString(), end: sender._secondCurrentValue.toString() });
  }

  public static ObjCExposedMethods = {
    sliderValueChanged: { returns: interop.types.void, params: [MSDoubleHandleCircularSlider] },
  };
}
