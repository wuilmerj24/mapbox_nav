import { AndroidApplication, Application, ApplicationEventData } from '@nativescript/core';
import { MapboxNavigatorCommon } from './common';

export class MapboxNavigator extends MapboxNavigatorCommon {
  navigator: com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
  private _nativeView: android.widget.RelativeLayout;
  createNativeView(): Object {
    this.nativeView = new android.widget.RelativeLayout(this._context);
    const navigationOptions: com.mapbox.navigation.base.options.NavigationOptions = new com.mapbox.navigation.base.options.NavigationOptions.Builder(this._context).accessToken('pk.eyJ1Ijoid3VpbG1lcmoyNCIsImEiOiJjbDd0dHUzNWgwNGI3M3FwMm5hNDJ4djRtIn0.GdiIbsEifwSWr3V6MO4vkA').enableSensors(true).isDebugLoggingEnabled(true).build();
    if (!com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.isSetup()) {
      console.log('Se esta configurando');
      com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.setup(navigationOptions);
    }
    console.log(`isSetup: ${com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.isSetup()}`);

    return this.nativeView;
  }

  initNativeView(): void {
    super.initNativeView();
    // new com.mapbox.maps.MapInitOptions(this._context).setResourceOptions(new com.mapbox.maps.ResourceOptions.Builder().accessToken("pk.eyJ1Ijoid3VpbG1lcmoyNCIsImEiOiJjbDd0dHUzNWgwNGI3M3FwMm5hNDJ4djRtIn0.GdiIbsEifwSWr3V6MO4vkA"))
    // const mapbox: com.mapbox.maps.MapView = new com.mapbox.maps.MapView(this._context);
    Application.on(AndroidApplication.activityPausedEvent, (args: ApplicationEventData) => {
      com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.attach(args.android);
    });
    Application.on(AndroidApplication.activityResumedEvent, (args: ApplicationEventData) => {
      com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.attach(args.android);
    });
    Application.on(AndroidApplication.activityStoppedEvent, (args: ApplicationEventData) => {
      com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.attach(args.android);
    });
    new com.mapbox.navigation.core.trip.session.LocationObserver({
      onNewLocationMatcherResult(param0) {},
      onNewRawLocation(param0) {},
    });
  }

  public get nativeView(): android.widget.RelativeLayout {
    return this._nativeView;
  }
  public set nativeView(value: android.widget.RelativeLayout) {
    this._nativeView = value;
  }
}
