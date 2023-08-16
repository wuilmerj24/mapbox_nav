import { AndroidApplication, Application, ApplicationEventData, Utils } from '@nativescript/core';
import { MapboxNavigatorCommon } from './common';

export class MapboxNavigator extends MapboxNavigatorCommon {
  navigator: com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
  private _nativeView: android.widget.RelativeLayout;
  mapView: com.mapbox.maps.MapView;
  createNativeView(): Object {
    this.nativeView = new android.widget.RelativeLayout(this._context);
    const navigationOptions: com.mapbox.navigation.base.options.NavigationOptions = new com.mapbox.navigation.base.options.NavigationOptions.Builder(this._context).accessToken('pk.eyJ1Ijoid3VpbG1lcmoyNCIsImEiOiJjbDd0dHUzNWgwNGI3M3FwMm5hNDJ4djRtIn0.GdiIbsEifwSWr3V6MO4vkA').enableSensors(true).isDebugLoggingEnabled(true).build();
    this.navigator = com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.setup(navigationOptions);
    const mapboxInitOptions: com.mapbox.maps.MapInitOptions = new com.mapbox.maps.MapInitOptions(this._context, new com.mapbox.maps.ResourceOptions.Builder().accessToken('sk.eyJ1Ijoid3VpbG1lcmoyNCIsImEiOiJjbGp4bnA1eTcwMXg2M2txZXdrdzVyZzcxIn0.-5v9aJxrWhranZpgA9GAxA').build());
    this.mapView = new com.mapbox.maps.MapView(this._context, mapboxInitOptions);
    return this.mapView;
  }

  initNativeView(): void {
    super.initNativeView();
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
      onNewLocationMatcherResult(param0) {
        console.log('onNewLocationMatcherResult ', param0);
      },
      onNewRawLocation(param0) {
        console.log('onNewRawLocation ', param0);
      },
    });
  }

  onLoaded(): void {
    super.onLoaded();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
    Application.on(AndroidApplication.activityDestroyedEvent, (args: ApplicationEventData) => {
      com.mapbox.navigation.core.lifecycle.MapboxNavigationApp.unregisterObserver(args.android);
    });
  }

  public get nativeView(): android.widget.RelativeLayout {
    return this._nativeView;
  }
  public set nativeView(value: android.widget.RelativeLayout) {
    this._nativeView = value;
  }
}
