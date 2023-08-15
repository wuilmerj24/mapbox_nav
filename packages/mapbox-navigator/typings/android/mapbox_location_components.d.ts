/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.BuildConfig>;
            public static DEBUG: boolean;
            public static LIBRARY_PACKAGE_NAME: string;
            public static BUILD_TYPE: string;
            public static FLAVOR: string;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class DefaultLocationProvider {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.DefaultLocationProvider>;
            public getLocationCompassListener$plugin_locationcomponent_publicRelease(): com.mapbox.maps.plugin.locationcomponent.LocationCompassEngine.CompassListener;
            public constructor(param0: globalAndroid.content.Context);
            public addOnCompassCalibrationListener(param0: com.mapbox.maps.plugin.locationcomponent.LocationCompassCalibrationListener): void;
            public removeCompassCalibrationListener(param0: com.mapbox.maps.plugin.locationcomponent.LocationCompassCalibrationListener): void;
            public updatePuckBearingSource(param0: com.mapbox.maps.plugin.PuckBearingSource): void;
            public unRegisterLocationConsumer(param0: com.mapbox.maps.plugin.locationcomponent.LocationConsumer): void;
            public registerLocationConsumer(param0: com.mapbox.maps.plugin.locationcomponent.LocationConsumer): void;
            public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.plugin.locationcomponent.LocationCompassEngine);
          }
          export module DefaultLocationProvider {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.DefaultLocationProvider.Companion>;
            }
            export class CurrentLocationEngineCallback extends com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.DefaultLocationProvider.CurrentLocationEngineCallback>;
              public onSuccess(param0: com.mapbox.android.core.location.LocationEngineResult): void;
              public constructor(param0: com.mapbox.maps.plugin.locationcomponent.DefaultLocationProvider);
              public onFailure(param0: java.lang.Exception): void;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.DefaultLocationProvider.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LayerSourceProvider {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LayerSourceProvider>;
            public constructor();
            public getModelSource(param0: com.mapbox.maps.plugin.LocationPuck3D): com.mapbox.maps.plugin.locationcomponent.ModelSourceWrapper;
            public getModelLayerRenderer(param0: com.mapbox.maps.plugin.LocationPuck3D): com.mapbox.maps.plugin.locationcomponent.ModelLayerRenderer;
            public getModelLayer(param0: com.mapbox.maps.plugin.LocationPuck3D): com.mapbox.maps.plugin.locationcomponent.ModelLayerWrapper;
            public getLocationIndicatorLayer(): com.mapbox.maps.plugin.locationcomponent.LocationIndicatorLayerWrapper;
            public getLocationIndicatorLayerRenderer(param0: com.mapbox.maps.plugin.LocationPuck2D): com.mapbox.maps.plugin.locationcomponent.LocationIndicatorLayerRenderer;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationCompassCalibrationListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationCompassCalibrationListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.LocationCompassCalibrationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCompassCalibrationNeeded(): void });
            public constructor();
            public onCompassCalibrationNeeded(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationCompassEngine {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationCompassEngine>;
            public constructor(param0: globalAndroid.content.Context);
            public addCompassListener$plugin_locationcomponent_publicRelease(param0: com.mapbox.maps.plugin.locationcomponent.LocationCompassEngine.CompassListener): void;
            public removeCalibrationListener(param0: com.mapbox.maps.plugin.locationcomponent.LocationCompassCalibrationListener): void;
            public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
            public addCalibrationListener(param0: com.mapbox.maps.plugin.locationcomponent.LocationCompassCalibrationListener): void;
            public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
            public removeCompassListener$plugin_locationcomponent_publicRelease(param0: com.mapbox.maps.plugin.locationcomponent.LocationCompassEngine.CompassListener): void;
          }
          export module LocationCompassEngine {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationCompassEngine.Companion>;
            }
            export class CompassListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationCompassEngine.CompassListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.LocationCompassEngine$CompassListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onCompassChanged(param0: number): void });
              public constructor();
              public onCompassChanged(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationComponentConstants {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationComponentConstants>;
            public static INSTANCE: com.mapbox.maps.plugin.locationcomponent.LocationComponentConstants;
            public static COMPASS_UPDATE_RATE_MS: number;
            public static TRANSITION_ANIMATION_DURATION_MS: number;
            public static MAX_ANIMATION_DURATION_MS: number;
            public static ACCURACY_RADIUS_ANIMATION_DURATION: number;
            public static DEFAULT_TRACKING_ZOOM_ANIM_DURATION: number;
            public static DEFAULT_TRACKING_PADDING_ANIM_DURATION: number;
            public static DEFAULT_TRACKING_TILT_ANIM_DURATION: number;
            public static INSTANT_LOCATION_TRANSITION_THRESHOLD: number;
            public static DEFAULT_INTERVAL_MILLIS: number;
            public static DEFAULT_FASTEST_INTERVAL_MILLIS: number;
            public static LOCATION_INDICATOR_LAYER: string;
            public static MODEL_SOURCE: string;
            public static MODEL_LAYER: string;
            public static TOP_ICON: string;
            public static SHADOW_ICON: string;
            public static BEARING_ICON: string;
            public static PULSING_MAX_RADIUS_FOLLOW_ACCURACY: number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationComponentPluginImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationComponentPluginImpl>;
            public internalSettings: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
            public internalSettings2: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
            public onPuckBearingAnimatorDefaultOptionsUpdated(param0: any): void;
            public setLocationProvider$plugin_locationcomponent_publicRelease(param0: com.mapbox.maps.plugin.locationcomponent.LocationProvider): void;
            public isLocatedAt(param0: com.mapbox.geojson.Point, param1: com.mapbox.maps.plugin.locationcomponent.PuckLocatedAtPointListener): void;
            public getInternalSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
            public onPuckLocationAnimatorDefaultOptionsUpdated(param0: any): void;
            public getIndicatorPositionChangedListener$plugin_locationcomponent_publicRelease(): com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener;
            public setLocationProvider(param0: com.mapbox.maps.plugin.locationcomponent.LocationProvider): void;
            public onPuckAccuracyRadiusAnimatorDefaultOptionsUpdated(param0: any): void;
            public getInternalSettings2(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
            public isLocationComponentActivated$plugin_locationcomponent_publicRelease(): boolean;
            public getLocationProvider$plugin_locationcomponent_publicRelease(): com.mapbox.maps.plugin.locationcomponent.LocationProvider;
            public onLocationUpdated(param0: androidNative.Array<com.mapbox.geojson.Point>, param1: any): void;
            public applySettings2(): void;
            public bind(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void;
            public cleanup(): void;
            public addOnIndicatorPositionChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener): void;
            public setLocationPuckManager$plugin_locationcomponent_publicRelease(param0: com.mapbox.maps.plugin.locationcomponent.LocationPuckManager): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public removeOnIndicatorBearingChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener): void;
            public constructor();
            public getIndicatorBearingChangedListener$plugin_locationcomponent_publicRelease(): com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener;
            public onAccuracyRadiusUpdated(param0: androidNative.Array<number>, param1: any): void;
            public addOnIndicatorAccuracyRadiusChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener): void;
            public onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public removeOnIndicatorPositionChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener): void;
            public getLocationProvider(): com.mapbox.maps.plugin.locationcomponent.LocationProvider;
            public onStop(): void;
            public applySettings(): void;
            public setLocationComponentActivated$plugin_locationcomponent_publicRelease(param0: boolean): void;
            public getIndicatorAccuracyRadiusChangedListener$plugin_locationcomponent_publicRelease(): com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener;
            public onBearingUpdated(param0: androidNative.Array<number>, param1: any): void;
            public getLocationPuckManager$plugin_locationcomponent_publicRelease(): com.mapbox.maps.plugin.locationcomponent.LocationPuckManager;
            public initialize(): void;
            public setInternalSettings2(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2): void;
            public setInternalSettings(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings): void;
            public addOnIndicatorBearingChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener): void;
            public onStart(): void;
            public removeOnIndicatorAccuracyRadiusChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener): void;
            public bind$plugin_locationcomponent_publicRelease(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: com.mapbox.maps.plugin.locationcomponent.LocationProvider, param4: com.mapbox.maps.plugin.locationcomponent.LocationPuckManager): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationComponentPositionManager {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationComponentPositionManager>;
            public update(param0: string, param1: string): boolean;
            public updateStyle(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public getLayerAbove$plugin_locationcomponent_publicRelease(): string;
            public constructor(param0: com.mapbox.maps.StyleManagerInterface, param1: string, param2: string);
            public addLayerToMap(param0: com.mapbox.maps.plugin.locationcomponent.LocationLayerWrapper): void;
            public setLayerAbove$plugin_locationcomponent_publicRelease(param0: string): void;
            public setLayerBelow$plugin_locationcomponent_publicRelease(param0: string): void;
            public getLayerBelow$plugin_locationcomponent_publicRelease(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationComponentUtils {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationComponentUtils>;
            public static createDefault2DPuck(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin, param1: globalAndroid.content.Context): com.mapbox.maps.plugin.LocationPuck2D;
            public static getLocationComponent2(param0: com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate): com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin2;
            public static createDefault2DPuck(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin, param1: globalAndroid.content.Context, param2: boolean): com.mapbox.maps.plugin.LocationPuck2D;
            public static getLocationComponent(param0: com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate): com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationIndicatorLayerRenderer extends com.mapbox.maps.plugin.locationcomponent.LocationLayerRenderer {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationIndicatorLayerRenderer>;
            public setAccuracyRadius(param0: number): void;
            public isRendererInitialised(): boolean;
            public clearBitmaps(): void;
            public hide(): void;
            public styleAccuracy(param0: number, param1: number): void;
            public updatePulsingUi(param0: number, param1: number, param2: java.lang.Float): void;
            public removeLayers(): void;
            public setBearing(param0: number): void;
            public updateStyle(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public initializeComponents(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public styleScaling(param0: com.mapbox.bindgen.Value): void;
            public show(): void;
            public adjustPulsingCircleLayerVisibility(param0: boolean): void;
            public constructor(param0: com.mapbox.maps.plugin.LocationPuck2D, param1: com.mapbox.maps.plugin.locationcomponent.LayerSourceProvider);
            public setLatLng(param0: com.mapbox.geojson.Point): void;
            public addLayers(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPositionManager): void;
          }
          export module LocationIndicatorLayerRenderer {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationIndicatorLayerRenderer.Companion>;
              public colorIntToRgbaExpression(param0: number): java.util.List<com.mapbox.bindgen.Value>;
              public colorToRgbaArray(param0: number): androidNative.Array<number>;
              public buildRGBAExpression(param0: androidNative.Array<number>): java.util.List<com.mapbox.bindgen.Value>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationIndicatorLayerWrapper extends com.mapbox.maps.plugin.locationcomponent.LocationLayerWrapper {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationIndicatorLayerWrapper>;
            public bearing(param0: number): void;
            public accuracyRadius(param0: number): void;
            public bearingImageSize(param0: com.mapbox.bindgen.Value): void;
            public topImage(param0: string): void;
            public accuracyRadiusBorderColor(param0: java.util.List<any>): void;
            public shadowImageSize(param0: com.mapbox.bindgen.Value): void;
            public emphasisCircleColorTransition(param0: number, param1: number): void;
            public opacity(param0: number): void;
            public shadowImage(param0: string): void;
            public topImageSize(param0: com.mapbox.bindgen.Value): void;
            public emphasisCircleRadius(param0: number): void;
            public location(param0: java.util.List<java.lang.Double>): void;
            public emphasisCircleColor(param0: java.util.List<any>): void;
            public bearingImage(param0: string): void;
            public accuracyRadiusColor(param0: java.util.List<any>): void;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationLayerRenderer {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationLayerRenderer>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.LocationLayerRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { initializeComponents(param0: com.mapbox.maps.extension.style.StyleInterface): void; isRendererInitialised(): boolean; addLayers(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPositionManager): void; removeLayers(): void; hide(): void; show(): void; styleAccuracy(param0: number, param1: number): void; setAccuracyRadius(param0: number): void; styleScaling(param0: com.mapbox.bindgen.Value): void; setLatLng(param0: com.mapbox.geojson.Point): void; setBearing(param0: number): void; adjustPulsingCircleLayerVisibility(param0: boolean): void; updatePulsingUi(param0: number, param1: number, param2: java.lang.Float): void; clearBitmaps(): void; updateStyle(param0: com.mapbox.maps.extension.style.StyleInterface): void });
            public constructor();
            public setAccuracyRadius(param0: number): void;
            public isRendererInitialised(): boolean;
            public clearBitmaps(): void;
            public hide(): void;
            public styleAccuracy(param0: number, param1: number): void;
            public updatePulsingUi(param0: number, param1: number, param2: java.lang.Float): void;
            public removeLayers(): void;
            public setBearing(param0: number): void;
            public updateStyle(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public initializeComponents(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public styleScaling(param0: com.mapbox.bindgen.Value): void;
            public show(): void;
            public adjustPulsingCircleLayerVisibility(param0: boolean): void;
            public setLatLng(param0: com.mapbox.geojson.Point): void;
            public addLayers(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPositionManager): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationLayerWrapper {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationLayerWrapper>;
            public getLayerProperties(): java.util.HashMap<string, com.mapbox.bindgen.Value>;
            public updateStyle(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public updateProperty(param0: string, param1: com.mapbox.bindgen.Value): void;
            public setLayerProperties(param0: java.util.HashMap<string, com.mapbox.bindgen.Value>): void;
            public visibility(param0: boolean): void;
            public toValue(): com.mapbox.bindgen.Value;
            public getLayerId(): string;
            public constructor(param0: string);
            public bindTo(param0: com.mapbox.maps.StyleManagerInterface, param1: com.mapbox.maps.LayerPosition): void;
          }
          export module LocationLayerWrapper {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationLayerWrapper.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class LocationPuckManager {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationPuckManager>;
            public static MIN_ZOOM: number;
            public static MAX_ZOOM: number;
            public static PUCK_3D_EXPONENTIAL_EXPRESSION_BASE: number;
            public static LATITUDE_MAX: number;
            public static MERCATOR_SCALE_THRESHOLD: number;
            public static BEARING_UPDATE_THRESHOLD: number;
            public cleanUp(): void;
            public updateAccuracyRadiusAnimator(param0: any): void;
            public getSettings2(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
            public updateSettings2(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2): void;
            public updateCurrentPosition(param0: androidNative.Array<com.mapbox.geojson.Point>, param1: any): void;
            public updateMaxPulsingRadiusToFollowAccuracyRing$plugin_locationcomponent_publicRelease(param0: number): void;
            public setLastMercatorScale$plugin_locationcomponent_publicRelease(param0: number): void;
            public getLastMercatorScale$plugin_locationcomponent_publicRelease(): number;
            public setHidden$plugin_locationcomponent_publicRelease(param0: boolean): void;
            public updateSettings(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings): void;
            public setLocationLayerRenderer$plugin_locationcomponent_publicRelease(param0: com.mapbox.maps.plugin.locationcomponent.LocationLayerRenderer): void;
            public getLastBearing$plugin_locationcomponent_publicRelease(): number;
            public updateBearingAnimator(param0: any): void;
            public setSettings(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings): void;
            public initialize(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public isHidden$plugin_locationcomponent_publicRelease(): boolean;
            public isLayerInitialised(): boolean;
            public getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
            public updateCurrentBearing(param0: androidNative.Array<number>, param1: any, param2: boolean): void;
            public constructor(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings, param1: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2, param2: com.mapbox.maps.plugin.delegates.MapDelegateProvider, param3: com.mapbox.maps.plugin.locationcomponent.LocationComponentPositionManager, param4: com.mapbox.maps.plugin.locationcomponent.LayerSourceProvider, param5: com.mapbox.maps.plugin.locationcomponent.animators.PuckAnimatorManager);
            public setSettings2(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2): void;
            public setLastLocation$plugin_locationcomponent_publicRelease(param0: com.mapbox.geojson.Point): void;
            public updateAccuracyRadius(param0: androidNative.Array<number>, param1: any): void;
            public hide(): void;
            public onStop(): void;
            public updateStyle(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public setLastBearing$plugin_locationcomponent_publicRelease(param0: number): void;
            public updateLocationAnimator(param0: any): void;
            public getLocationLayerRenderer$plugin_locationcomponent_publicRelease(): com.mapbox.maps.plugin.locationcomponent.LocationLayerRenderer;
            public animateToBearing(param0: androidNative.Array<number>, param1: any, param2: boolean): void;
            public getLastLocation$plugin_locationcomponent_publicRelease(): com.mapbox.geojson.Point;
            public onStart(): void;
            public styleScaling$plugin_locationcomponent_publicRelease(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings): void;
            public show(param0: boolean): void;
          }
          export module LocationPuckManager {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationPuckManager.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class ModelLayerRenderer extends com.mapbox.maps.plugin.locationcomponent.LocationLayerRenderer {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.ModelLayerRenderer>;
            public setLastLocation$plugin_locationcomponent_publicRelease(param0: com.mapbox.geojson.Point): void;
            public setAccuracyRadius(param0: number): void;
            public isRendererInitialised(): boolean;
            public clearBitmaps(): void;
            public hide(): void;
            public styleAccuracy(param0: number, param1: number): void;
            public updatePulsingUi(param0: number, param1: number, param2: java.lang.Float): void;
            public removeLayers(): void;
            public setBearing(param0: number): void;
            public updateStyle(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public initializeComponents(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public styleScaling(param0: com.mapbox.bindgen.Value): void;
            public constructor(param0: com.mapbox.maps.plugin.locationcomponent.LayerSourceProvider, param1: com.mapbox.maps.plugin.LocationPuck3D);
            public show(): void;
            public adjustPulsingCircleLayerVisibility(param0: boolean): void;
            public setLatLng(param0: com.mapbox.geojson.Point): void;
            public addLayers(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPositionManager): void;
            public getLastLocation$plugin_locationcomponent_publicRelease(): com.mapbox.geojson.Point;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class ModelLayerWrapper extends com.mapbox.maps.plugin.locationcomponent.LocationLayerWrapper {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.ModelLayerWrapper>;
            public modelScale(param0: java.util.List<java.lang.Double>): void;
            public modelRotation(param0: java.util.List<java.lang.Double>): void;
            public modelTranslation(param0: java.util.List<java.lang.Double>): void;
            public modelOpacity(param0: number): void;
            public constructor(param0: string, param1: string, param2: java.util.List<java.lang.Double>, param3: java.util.List<java.lang.Double>, param4: java.util.List<java.lang.Double>, param5: number);
            public modelScaleExpression(param0: com.mapbox.bindgen.Value): void;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export class ModelSourceWrapper {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.ModelSourceWrapper>;
            public static DEFAULT_MODEL_NAME: string;
            public static MODELS: string;
            public static TYPE: string;
            public static URL: string;
            public static POSITION: string;
            public static ORIENTATION: string;
            public updateStyle(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public setPositionAndOrientation(param0: java.util.List<java.lang.Double>, param1: java.util.List<java.lang.Double>): void;
            public bindTo(param0: com.mapbox.maps.StyleManagerInterface): void;
            public toValue(): com.mapbox.bindgen.Value;
            public constructor(param0: string, param1: string, param2: java.util.List<java.lang.Double>);
            public getSourceId(): string;
          }
          export module ModelSourceWrapper {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.ModelSourceWrapper.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export module animators {
            export class Evaluators {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.animators.Evaluators>;
              public static INSTANCE: com.mapbox.maps.plugin.locationcomponent.animators.Evaluators;
              public getDOUBLE(): globalAndroid.animation.TypeEvaluator<java.lang.Double>;
              public getPOINT(): globalAndroid.animation.TypeEvaluator<com.mapbox.geojson.Point>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export module animators {
            export class PuckAccuracyRadiusAnimator extends com.mapbox.maps.plugin.locationcomponent.animators.PuckAnimator<java.lang.Double> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.animators.PuckAccuracyRadiusAnimator>;
              public updateLayer(param0: number, param1: any): void;
              public getAccuracyCircleBorderColor$plugin_locationcomponent_publicRelease(): number;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>);
              public setAccuracyCircleColor$plugin_locationcomponent_publicRelease(param0: number): void;
              public constructor(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener);
              public getAccuracyCircleColor$plugin_locationcomponent_publicRelease(): number;
              public setAccuracyCircleBorderColor$plugin_locationcomponent_publicRelease(param0: number): void;
              public updateLayer(param0: number, param1: number): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export module animators {
            export abstract class PuckAnimator<T> extends globalAndroid.animation.ValueAnimator {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.animators.PuckAnimator<any>>;
              public animate(param0: androidNative.Array<any>, param1: any): void;
              public getEnabled$plugin_locationcomponent_publicRelease(): boolean;
              public updateLayer(param0: number, param1: any): void;
              public getLocationRenderer(): com.mapbox.maps.plugin.locationcomponent.LocationLayerRenderer;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>);
              public setUpdateListener(param0: any): void;
              public getUserConfiguredAnimator$plugin_locationcomponent_publicRelease(): globalAndroid.animation.ValueAnimator;
              public cancelRunning(): void;
              public setLocationRenderer(param0: com.mapbox.maps.plugin.locationcomponent.LocationLayerRenderer): void;
              public setUserConfiguredAnimator$plugin_locationcomponent_publicRelease(param0: globalAndroid.animation.ValueAnimator): void;
              public updateOptions(param0: any): void;
              public setUpdateListener$plugin_locationcomponent_publicRelease(param0: any): void;
              public addUpdateListener(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): void;
              public getUpdateListener$plugin_locationcomponent_publicRelease(): any;
              public setEnabled$plugin_locationcomponent_publicRelease(param0: boolean): void;
              public setEvaluator(param0: globalAndroid.animation.TypeEvaluator<any>): void;
              public clone(): globalAndroid.animation.ValueAnimator;
              public setLocationLayerRenderer(param0: com.mapbox.maps.plugin.locationcomponent.LocationLayerRenderer): void;
              public setObjectValues(param0: androidNative.Array<any>): void;
            }
            export module PuckAnimator {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.animators.PuckAnimator.Companion>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export module animators {
            export class PuckAnimatorManager {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.animators.PuckAnimatorManager>;
              public setPuckAnimationEnabled$plugin_locationcomponent_publicRelease(param0: boolean): void;
              public onStop(): void;
              public getPuckAnimationEnabled$plugin_locationcomponent_publicRelease(): boolean;
              public applySettings2(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2): void;
              public updateAccuracyRadiusAnimator(param0: any): void;
              public updatePositionAnimator(param0: any): void;
              public setUpdateListeners(param0: any, param1: any, param2: any): void;
              public animatePosition(param0: androidNative.Array<com.mapbox.geojson.Point>, param1: any): void;
              public updateBearingAnimator(param0: any): void;
              public animateAccuracyRadius(param0: androidNative.Array<number>, param1: any): void;
              public constructor(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener, param1: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener, param2: com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener, param3: number);
              public updatePulsingRadius(param0: number, param1: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings): void;
              public constructor(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener, param1: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener, param2: com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener, param3: com.mapbox.maps.plugin.locationcomponent.animators.PuckBearingAnimator, param4: com.mapbox.maps.plugin.locationcomponent.animators.PuckPositionAnimator, param5: com.mapbox.maps.plugin.locationcomponent.animators.PuckPulsingAnimator, param6: com.mapbox.maps.plugin.locationcomponent.animators.PuckAccuracyRadiusAnimator, param7: number);
              public onStart(): void;
              public setLocationLayerRenderer(param0: com.mapbox.maps.plugin.locationcomponent.LocationLayerRenderer): void;
              public applyPulsingAnimationSettings(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings): void;
              public animateBearing(param0: androidNative.Array<number>, param1: any): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export module animators {
            export class PuckBearingAnimator extends com.mapbox.maps.plugin.locationcomponent.animators.PuckAnimator<java.lang.Double> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.animators.PuckBearingAnimator>;
              public getEnabled$plugin_locationcomponent_publicRelease(): boolean;
              public updateLayer(param0: number, param1: any): void;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>);
              public constructor(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener);
              public setEnabled$plugin_locationcomponent_publicRelease(param0: boolean): void;
              public updateLayer(param0: number, param1: number): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export module animators {
            export class PuckPositionAnimator extends com.mapbox.maps.plugin.locationcomponent.animators.PuckAnimator<com.mapbox.geojson.Point> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.animators.PuckPositionAnimator>;
              public constructor(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener);
              public updateLayer(param0: number, param1: any): void;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>);
              public updateLayer(param0: number, param1: com.mapbox.geojson.Point): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export module animators {
            export class PuckPulsingAnimator extends com.mapbox.maps.plugin.locationcomponent.animators.PuckAnimator<java.lang.Double> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.animators.PuckPulsingAnimator>;
              public static PULSING_DEFAULT_DURATION: number;
              public static DEFAULT_RADIUS_DP: number;
              public getPulsingColor(): number;
              public setPulseFadeEnabled(param0: boolean): void;
              public constructor();
              public setMaxRadius(param0: number): void;
              public updateLayer(param0: number, param1: any): void;
              public animateInfinite(): void;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>);
              public getPulseFadeEnabled(): boolean;
              public getMaxRadius(): number;
              public setPulsingColor(param0: number): void;
              public constructor(param0: number);
              public updateLayer(param0: number, param1: number): void;
            }
            export module PuckPulsingAnimator {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.animators.PuckPulsingAnimator.Companion>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export module generated {
            export class LocationComponentAttributeParser {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentAttributeParser>;
              public static INSTANCE: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentAttributeParser;
              public parseLocationComponentSettings(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export module generated {
            export class LocationComponentAttributeParser2 {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentAttributeParser2>;
              public static INSTANCE: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentAttributeParser2;
              public parseLocationComponentSettings2(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module locationcomponent {
          export module utils {
            export class BitmapUtils {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.utils.BitmapUtils>;
              public static INSTANCE: com.mapbox.maps.plugin.locationcomponent.utils.BitmapUtils;
              public equals(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): boolean;
              public getBitmapFromDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.Bitmap;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.maps.plugin.locationcomponent.animators.PuckAnimator:1
