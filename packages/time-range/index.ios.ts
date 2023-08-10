import { Screen, Color, Application, GestureEvents } from '@nativescript/core';
import { TimeRangeCommon } from './common';

@NativeClass()
class TimeRangerChangeHandlerImpl extends NSObject {
  private _owner: WeakRef<TimeRange>;

  public static initWithOwner(owner: WeakRef<TimeRange>): TimeRangerChangeHandlerImpl {
    const handler = <TimeRangerChangeHandlerImpl>TimeRangerChangeHandlerImpl.new();
    handler._owner = owner;
    return handler;
  }

  public sliderValueChanged(sender: RangeCircularSlider) {
    console.log('sender.endEditing(true): ', sender.endEditing(true));
    this._owner.get().sendEvent(TimeRange.dragEvent, { start: sender.startPointValue.toString(), end: sender.endPointValue.toString() });
    this._owner.get().sendEvent(TimeRange.dragEvent, { start: sender.startPointValue.toString(), end: sender.endPointValue.toString() });
  }

  public timerValueChanged(sender: RangeCircularSlider) {
    console.log('timerValueChanged ', sender.startPointValue);
    this._owner.get().sendEvent(TimeRange.timeChangeEvent, { start: sender.startPointValue.toString(), end: sender.endPointValue.toString(), event: sender.state.toString() });
  }

  public static ObjCExposedMethods = {
    sliderValueChanged: { returns: interop.types.void, params: [RangeCircularSlider] },
    timerValueChanged: { returns: interop.types.void, params: [RangeCircularSlider] },
  };
}

export class TimeRange extends TimeRangeCommon {
  timeRanger: RangeCircularSlider;
  createNativeView(): Object {
    this.timeRanger = RangeCircularSlider.new().init();
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

  onLoaded(): void {
    super.onLoaded();
    try {
      const _changeHandler = TimeRangerChangeHandlerImpl.initWithOwner(new WeakRef(this));
      this.timeRanger.addTargetActionForControlEvents(_changeHandler, 'sliderValueChanged', UIControlEvents.ValueChanged);
      this.timeRanger.addTargetActionForControlEvents(_changeHandler, 'timerValueChanged', UIControlEvents.EditingDidEnd);
    } catch (error) {
      console.log(error);
    }
  }

  updateData() {
    console.log('Se ejecuto');
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}
