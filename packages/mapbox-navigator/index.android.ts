import { AndroidApplication, Application, ApplicationEventData, Utils } from '@nativescript/core';
import { CLog, MapboxNavigatorCommon } from './common';

export class MapboxNavigator extends MapboxNavigatorCommon {
  private mapView;
  private navigation;
  private constraintlayout;
  createNativeView(): Object {
    let LayoutInflater: typeof android.view.LayoutInflater = android.view.LayoutInflater;
    let resId = this._context.getResources().getIdentifier('mapbox_activity_turn_by_turn_experience', 'layout', this._context.getPackageName());
    const view = LayoutInflater.from(this._context).inflate(resId, null, false) as androidx.constraintlayout.widget.ConstraintLayout;
    CLog('se configuro perfectamente');
    return this.constraintlayout;
  }

  initNativeView(): void {
    super.initNativeView();
  }

  onLoaded(): void {
    super.onLoaded();
  }

  disposeNativeView(): void {
    super.disposeNativeView();
  }
}

/*
this.constraintlayout=new androidx.constraintlayout.widget.ConstraintLayout(this._context);
    (this.constraintlayout as androidx.constraintlayout.widget.ConstraintLayout).setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    (this.constraintlayout as androidx.constraintlayout.widget.ConstraintLayout).setId(android.view.View.generateViewId());

    const mapboxInitOptions: com.mapbox.maps.MapInitOptions = new com.mapbox.maps.MapInitOptions(this._context, new com.mapbox.maps.ResourceOptions.Builder().accessToken('sk.eyJ1Ijoid3VpbG1lcmoyNCIsImEiOiJjbGp4bnA1eTcwMXg2M2txZXdrdzVyZzcxIn0.-5v9aJxrWhranZpgA9GAxA').build());
    this.mapView = new com.mapbox.maps.MapView(this._context, mapboxInitOptions);
    (this.mapView as android.view.View).setId(parseInt("mapView"));
    (this.mapView as android.view.View).setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    
    (this.constraintlayout as androidx.constraintlayout.widget.ConstraintLayout).addView(this.mapView);

    const cardView = new androidx.cardview.widget.CardView(this._context);
    cardView.setLayoutParams(new android.view.ViewGroup.LayoutParams(0, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    cardView.setVisibility(androidx.cardview.widget.CardView.INVISIBLE);
    cardView.setCardElevation(8);
    cardView.setUseCompatPadding(false);
    cardView.setId(android.view.View.generateViewId());

    const mapboxTripProgressView:any = new com.mapbox.navigation.ui.tripprogress.view.MapboxTripProgressView(this._context);
    (mapboxTripProgressView as android.view.View).setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    (mapboxTripProgressView as android.view.View).setId(android.view.View.generateViewId());
    cardView.addView(mapboxTripProgressView);

    const imageView=new android.widget.ImageView(this._context);
    imageView.setId(android.view.View.generateViewId());
    imageView.setLayoutParams(new android.view.ViewGroup.LayoutParams(48, 48));
    imageView.setForegroundGravity(android.view.Gravity.END | android.view.Gravity.CENTER_VERTICAL);
    imageView.setImageURI(android.net.Uri.parse(""));
    cardView.addView(imageView);

    this.constraintlayout.addView(cardView);

    const mapboxManeuverView:any = new com.mapbox.navigation.ui.maneuver.view.MapboxManeuverView(this._context);
    (mapboxManeuverView as android.view.View).setId(android.view.View.generateViewId());
    (mapboxManeuverView as android.view.View).setLayoutParams(new android.view.ViewGroup.LayoutParams(0, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    (mapboxManeuverView as android.view.View).setVisibility(android.view.View.INVISIBLE);
    this.constraintlayout.addView(mapboxManeuverView);

    const mapboxSoundButton:any = new com.mapbox.navigation.ui.voice.view.MapboxSoundButton(this._context);
    (mapboxSoundButton as android.view.View).setId(android.view.View.generateViewId());
    (mapboxSoundButton as android.view.View).setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    (mapboxSoundButton as android.view.View).setVisibility(android.view.View.INVISIBLE);
    this.constraintlayout.addView(mapboxSoundButton);

    const mapboxRouteOverviewButton: any =new com.mapbox.navigation.ui.maps.camera.view.MapboxRouteOverviewButton(this._context);
    (mapboxRouteOverviewButton as android.view.View).setId(android.view.View.generateViewId());
    (mapboxRouteOverviewButton as android.view.View).setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    (mapboxRouteOverviewButton as android.view.View).setVisibility(android.view.View.INVISIBLE);
    this.constraintlayout.addView(mapboxRouteOverviewButton);

    const mapboxRecenterButton: any = new com.mapbox.navigation.ui.maps.camera.view.MapboxRecenterButton(this._context);
    (mapboxRecenterButton as android.view.View).setId(android.view.View.generateViewId());
    (mapboxRecenterButton as android.view.View).setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
    (mapboxRecenterButton as android.view.View).setVisibility(android.view.View.INVISIBLE);
    this.constraintlayout.addView(mapboxRecenterButton);
 */
