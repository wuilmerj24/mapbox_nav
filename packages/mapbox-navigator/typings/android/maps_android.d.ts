/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export class BuildConfig {
        public static class: java.lang.Class<com.mapbox.maps.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public static FLAVOR: string;
        public static RUN_FROM_IDE: boolean;
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CameraAttributeParser {
        public static class: java.lang.Class<com.mapbox.maps.CameraAttributeParser>;
        public static INSTANCE: com.mapbox.maps.CameraAttributeParser;
        public parseCameraOptions(param0: globalAndroid.content.res.TypedArray, param1: number): com.mapbox.maps.CameraOptions;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class FontUtils {
        public static class: java.lang.Class<com.mapbox.maps.FontUtils>;
        public static INSTANCE: com.mapbox.maps.FontUtils;
        public extractValidFont(param0: string): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapAttributeParser {
        public static class: java.lang.Class<com.mapbox.maps.MapAttributeParser>;
        public static INSTANCE: com.mapbox.maps.MapAttributeParser;
        public parseMapOptions(param0: globalAndroid.content.res.TypedArray, param1: number): com.mapbox.maps.MapOptions;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapControllable {
        public static class: java.lang.Class<com.mapbox.maps.MapControllable>;
        /**
         * Constructs a new instance of the com.mapbox.maps.MapControllable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          getMapboxMap(): com.mapbox.maps.MapboxMap;
          onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
          onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
          onSizeChanged(param0: number, param1: number): void;
          queueEvent(param0: java.lang.Runnable, param1: boolean): void;
          snapshot(): globalAndroid.graphics.Bitmap;
          snapshot(param0: com.mapbox.maps.MapView.OnSnapshotReady): void;
          setMaximumFps(param0: number): void;
          setOnFpsChangedListener(param0: com.mapbox.maps.renderer.OnFpsChangedListener): void;
          addWidget(param0: com.mapbox.maps.renderer.widget.Widget): void;
          removeWidget(param0: com.mapbox.maps.renderer.widget.Widget): boolean;
          addRendererSetupErrorListener(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
          removeRendererSetupErrorListener(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
        });
        public constructor();
        public setMaximumFps(param0: number): void;
        public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public setOnFpsChangedListener(param0: com.mapbox.maps.renderer.OnFpsChangedListener): void;
        public removeWidget(param0: com.mapbox.maps.renderer.widget.Widget): boolean;
        public getMapboxMap(): com.mapbox.maps.MapboxMap;
        public snapshot(param0: com.mapbox.maps.MapView.OnSnapshotReady): void;
        public addWidget(param0: com.mapbox.maps.renderer.widget.Widget): void;
        public snapshot(): globalAndroid.graphics.Bitmap;
        public removeRendererSetupErrorListener(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
        public queueEvent(param0: java.lang.Runnable, param1: boolean): void;
        public addRendererSetupErrorListener(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
        public onSizeChanged(param0: number, param1: number): void;
      }
      export module MapControllable {
        export class DefaultImpls {
          public static class: java.lang.Class<com.mapbox.maps.MapControllable.DefaultImpls>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapController extends com.mapbox.maps.MapControllable {
        public static class: java.lang.Class<com.mapbox.maps.MapController>;
        public static TAG: string;
        public createPlugin(param0: com.mapbox.maps.MapView, param1: com.mapbox.maps.plugin.Plugin): void;
        public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public getLifecycleState$sdk_publicRelease(): com.mapbox.maps.MapController.LifecycleState;
        public getMapboxMap(): com.mapbox.maps.MapboxMap;
        public setLifecycleState$sdk_publicRelease(param0: com.mapbox.maps.MapController.LifecycleState): void;
        public getPlugin(param0: string): com.mapbox.maps.plugin.MapPlugin;
        public addWidget(param0: com.mapbox.maps.renderer.widget.Widget): void;
        public onAttachedToWindow$sdk_publicRelease(param0: com.mapbox.maps.MapView): void;
        public onStop(): void;
        public getNativeMap(): com.mapbox.maps.MapInterface;
        public getPluginRegistry$sdk_publicRelease(): com.mapbox.maps.plugin.MapPluginRegistry;
        public onLowMemory(): void;
        public setMaximumFps(param0: number): void;
        public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public setOnFpsChangedListener(param0: com.mapbox.maps.renderer.OnFpsChangedListener): void;
        public removeWidget(param0: com.mapbox.maps.renderer.widget.Widget): boolean;
        public constructor(param0: com.mapbox.maps.renderer.MapboxRenderer, param1: com.mapbox.maps.MapInitOptions);
        public setScreenRefreshRate$sdk_publicRelease(param0: number): void;
        public snapshot(param0: com.mapbox.maps.MapView.OnSnapshotReady): void;
        public onStart(): void;
        public snapshot(): globalAndroid.graphics.Bitmap;
        public initializePlugins(param0: com.mapbox.maps.MapInitOptions, param1: com.mapbox.maps.MapView): void;
        public removeRendererSetupErrorListener(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
        public queueEvent(param0: java.lang.Runnable, param1: boolean): void;
        public getRenderer$sdk_publicRelease(): com.mapbox.maps.renderer.MapboxRenderer;
        public constructor(param0: com.mapbox.maps.renderer.MapboxRenderer, param1: com.mapbox.maps.NativeObserver, param2: com.mapbox.maps.MapInitOptions, param3: com.mapbox.maps.ContextMode, param4: com.mapbox.maps.MapInterface, param5: com.mapbox.maps.MapboxMap, param6: com.mapbox.maps.plugin.MapPluginRegistry, param7: com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener);
        public onDestroy(): void;
        public addRendererSetupErrorListener(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
        public onSizeChanged(param0: number, param1: number): void;
      }
      export module MapController {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.maps.MapController.Companion>;
        }
        export class LifecycleState {
          public static class: java.lang.Class<com.mapbox.maps.MapController.LifecycleState>;
          public static STATE_STOPPED: com.mapbox.maps.MapController.LifecycleState;
          public static STATE_STARTED: com.mapbox.maps.MapController.LifecycleState;
          public static STATE_DESTROYED: com.mapbox.maps.MapController.LifecycleState;
          public static valueOf(param0: string): com.mapbox.maps.MapController.LifecycleState;
          public static values(): androidNative.Array<com.mapbox.maps.MapController.LifecycleState>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapInitOptions {
        public static class: java.lang.Class<com.mapbox.maps.MapInitOptions>;
        public setMapOptions(param0: com.mapbox.maps.MapOptions): void;
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.ResourceOptions, param2: com.mapbox.maps.MapOptions, param3: java.util.List<any>, param4: com.mapbox.maps.CameraOptions);
        public setTextureView(param0: boolean): void;
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.ResourceOptions, param2: com.mapbox.maps.MapOptions);
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.ResourceOptions, param2: com.mapbox.maps.MapOptions, param3: java.util.List<any>, param4: com.mapbox.maps.CameraOptions, param5: boolean, param6: string);
        public copy(param0: globalAndroid.content.Context, param1: com.mapbox.maps.ResourceOptions, param2: com.mapbox.maps.MapOptions, param3: java.util.List<any>, param4: com.mapbox.maps.CameraOptions, param5: boolean, param6: string, param7: globalAndroid.util.AttributeSet, param8: number): com.mapbox.maps.MapInitOptions;
        public component2(): com.mapbox.maps.ResourceOptions;
        public getTextureView(): boolean;
        public hashCode(): number;
        public constructor(param0: globalAndroid.content.Context);
        public equals(param0: any): boolean;
        public setCameraOptions(param0: com.mapbox.maps.CameraOptions): void;
        public component6(): boolean;
        public getResourceOptions(): com.mapbox.maps.ResourceOptions;
        public component4(): java.util.List<com.mapbox.maps.plugin.Plugin>;
        public component3(): com.mapbox.maps.MapOptions;
        public getAttrs(): globalAndroid.util.AttributeSet;
        public getMapOptions(): com.mapbox.maps.MapOptions;
        public getStyleUri(): string;
        public setResourceOptions(param0: com.mapbox.maps.ResourceOptions): void;
        public component1(): globalAndroid.content.Context;
        public getContext(): globalAndroid.content.Context;
        public getPlugins(): java.util.List<com.mapbox.maps.plugin.Plugin>;
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.ResourceOptions, param2: com.mapbox.maps.MapOptions, param3: java.util.List<any>, param4: com.mapbox.maps.CameraOptions, param5: boolean, param6: string, param7: globalAndroid.util.AttributeSet);
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.ResourceOptions, param2: com.mapbox.maps.MapOptions, param3: java.util.List<any>, param4: com.mapbox.maps.CameraOptions, param5: boolean, param6: string, param7: globalAndroid.util.AttributeSet, param8: number);
        public toString(): string;
        public component9(): number;
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.ResourceOptions, param2: com.mapbox.maps.MapOptions, param3: java.util.List<any>);
        public getCameraOptions(): com.mapbox.maps.CameraOptions;
        public setAttrs(param0: globalAndroid.util.AttributeSet): void;
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.ResourceOptions, param2: com.mapbox.maps.MapOptions, param3: java.util.List<any>, param4: com.mapbox.maps.CameraOptions, param5: boolean);
        public setPlugins(param0: java.util.List<any>): void;
        public getAntialiasingSampleCount(): number;
        public component8(): globalAndroid.util.AttributeSet;
        public component7(): string;
        public component5(): com.mapbox.maps.CameraOptions;
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.ResourceOptions);
        public setAntialiasingSampleCount(param0: number): void;
      }
      export module MapInitOptions {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.maps.MapInitOptions.Companion>;
          public getDefaultResourceOptions(param0: globalAndroid.content.Context): com.mapbox.maps.ResourceOptions;
          public getDefaultMapOptions(param0: globalAndroid.content.Context): com.mapbox.maps.MapOptions;
          public getDefaultPluginList(): java.util.List<com.mapbox.maps.plugin.Plugin.Mapbox>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapProvider {
        public static class: java.lang.Class<com.mapbox.maps.MapProvider>;
        public static INSTANCE: com.mapbox.maps.MapProvider;
        public getMapboxMap(param0: com.mapbox.maps.MapInterface, param1: com.mapbox.maps.NativeObserver, param2: number): com.mapbox.maps.MapboxMap;
        public getMapTelemetryInstance(param0: globalAndroid.content.Context, param1: string): com.mapbox.maps.module.MapTelemetry;
        public getNativeMapWrapper(param0: com.mapbox.maps.MapInitOptions, param1: com.mapbox.maps.MapClient): com.mapbox.maps.MapInterface;
        public getNativeMapCore(param0: com.mapbox.maps.MapView): com.mapbox.maps.MapInterface;
        public getMapPluginRegistry(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.maps.MapController, param2: com.mapbox.maps.module.MapTelemetry): com.mapbox.maps.plugin.MapPluginRegistry;
        public flushPendingEvents(param0: string): void;
      }
      export module MapProvider {
        export class WhenMappings {
          public static class: java.lang.Class<com.mapbox.maps.MapProvider.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapSurface extends com.mapbox.maps.MapControllable {
        public static class: java.lang.Class<com.mapbox.maps.MapSurface>;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.Surface, param2: com.mapbox.maps.MapInitOptions);
        public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public surfaceCreated(): void;
        public getMapboxMap(): com.mapbox.maps.MapboxMap;
        public getPlugin(param0: string): com.mapbox.maps.plugin.MapPlugin;
        public addWidget(param0: com.mapbox.maps.renderer.widget.Widget): void;
        public onStop(): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.Surface, param2: com.mapbox.maps.MapInitOptions, param3: com.mapbox.maps.renderer.MapboxSurfaceRenderer, param4: com.mapbox.maps.MapController);
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.Surface);
        public surfaceChanged(param0: number, param1: number): void;
        public onLowMemory(): void;
        public setMaximumFps(param0: number): void;
        public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public setOnFpsChangedListener(param0: com.mapbox.maps.renderer.OnFpsChangedListener): void;
        public removeWidget(param0: com.mapbox.maps.renderer.widget.Widget): boolean;
        public snapshot(param0: com.mapbox.maps.MapView.OnSnapshotReady): void;
        public getSurface(): globalAndroid.view.Surface;
        public surfaceDestroyed(): void;
        public onStart(): void;
        public snapshot(): globalAndroid.graphics.Bitmap;
        public removeRendererSetupErrorListener(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
        public queueEvent(param0: java.lang.Runnable, param1: boolean): void;
        public onDestroy(): void;
        public addRendererSetupErrorListener(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
        public onSizeChanged(param0: number, param1: number): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapView implements com.mapbox.maps.MapControllable {
        public static class: java.lang.Class<com.mapbox.maps.MapView>;
        public static DEFAULT_ANTIALIASING_SAMPLE_COUNT: number;
        public static DEFAULT_FPS: number;
        public static isTerrainRenderingSupported(): boolean;
        public static isRenderingSupported(): boolean;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public createPlugin(param0: com.mapbox.maps.plugin.Plugin): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: com.mapbox.maps.MapInitOptions);
        public getMapboxMap(): com.mapbox.maps.MapboxMap;
        public getPlugin(param0: string): com.mapbox.maps.plugin.MapPlugin;
        public addWidget(param0: com.mapbox.maps.renderer.widget.Widget): void;
        public getViewAnnotationManager(): com.mapbox.maps.viewannotation.ViewAnnotationManager;
        public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public constructor(param0: globalAndroid.content.Context);
        public onStop(): void;
        public getMapController$sdk_publicRelease(): com.mapbox.maps.MapController;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public parseTypedArray$sdk_publicRelease(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): com.mapbox.maps.MapInitOptions;
        public onLowMemory(): void;
        public setMaximumFps(param0: number): void;
        public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
        public setOnFpsChangedListener(param0: com.mapbox.maps.renderer.OnFpsChangedListener): void;
        public removeWidget(param0: com.mapbox.maps.renderer.widget.Widget): boolean;
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.MapInitOptions);
        public snapshot(param0: com.mapbox.maps.MapView.OnSnapshotReady): void;
        public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
        public onStart(): void;
        public snapshot(): globalAndroid.graphics.Bitmap;
        public removeRendererSetupErrorListener(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
        public queueEvent(param0: java.lang.Runnable, param1: boolean): void;
        public onDestroy(): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: com.mapbox.maps.MapController);
        public onAttachedToWindow(): void;
        public addRendererSetupErrorListener(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
        public onSizeChanged(param0: number, param1: number): void;
      }
      export module MapView {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.maps.MapView.Companion>;
          public isTerrainRenderingSupported(): boolean;
          public isRenderingSupported(): boolean;
        }
        export class OnSnapshotReady {
          public static class: java.lang.Class<com.mapbox.maps.MapView.OnSnapshotReady>;
          /**
           * Constructs a new instance of the com.mapbox.maps.MapView$OnSnapshotReady interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void });
          public constructor();
          public onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxConfigurationException {
        public static class: java.lang.Class<com.mapbox.maps.MapboxConfigurationException>;
        public constructor(param0: string);
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxConstants {
        public static class: java.lang.Class<com.mapbox.maps.MapboxConstants>;
        public static MAPBOX_ACCESS_TOKEN_RESOURCE_NAME: string;
        public static CORE_SHARED_LIBRARY_NAME: string;
        public static MAP_SHARED_LIBRARY_NAME: string;
        public static MINIMUM_ZOOM: number;
        public static MAXIMUM_ZOOM: number;
        public static MAXIMUM_BEARING: number;
        public static MINIMUM_BEARING: number;
        public static getMAPBOX_LOCALE(): java.util.Locale;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxMap {
        public static class: java.lang.Class<com.mapbox.maps.MapboxMap>;
        public static QFE_SUPER_CLUSTER: string;
        public static QFE_LEAVES: string;
        public static QFE_LIMIT: string;
        public static QFE_OFFSET: string;
        public static QFE_DEFAULT_LIMIT: number;
        public static QFE_DEFAULT_OFFSET: number;
        public static QFE_CHILDREN: string;
        public static QFE_EXPANSION_ZOOM: string;
        public getGeoJsonClusterExpansionZoom(param0: string, param1: com.mapbox.geojson.Feature, param2: com.mapbox.maps.QueryFeatureExtensionCallback): void;
        public removeOnSourceRemovedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener): void;
        public setNorthOrientation(param0: com.mapbox.maps.NorthOrientation): void;
        public addOnMapLoadErrorListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public getGeoJsonClusterLeaves(param0: string, param1: com.mapbox.geojson.Feature, param2: number, param3: number, param4: com.mapbox.maps.QueryFeatureExtensionCallback): void;
        public setStyleLoadInitiated$sdk_publicRelease(param0: boolean): void;
        public querySourceFeatures(param0: string, param1: com.mapbox.maps.SourceQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
        public getGeoJsonClusterLeaves(param0: string, param1: com.mapbox.geojson.Feature, param2: number, param3: com.mapbox.maps.QueryFeatureExtensionCallback): void;
        public cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public getCameraState(): com.mapbox.maps.CameraState;
        public isUserAnimationInProgress(): boolean;
        public removeOnMapLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener): void;
        public setViewAnnotationPositionsUpdateListener$sdk_publicRelease(param0: com.mapbox.maps.ViewAnnotationPositionsUpdateListener): void;
        public getRenderCacheOptions(): com.mapbox.maps.RenderCacheOptions;
        public removeFeatureState(param0: string, param1: string): void;
        public getMapOptions(): com.mapbox.maps.MapOptions;
        public setUserAnimationInProgress(param0: boolean): void;
        public setCamera(param0: com.mapbox.maps.CameraOptions): void;
        public addOnStyleImageMissingListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener): void;
        public addOnRenderFrameFinishedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener): void;
        public getRenderWorldCopies(): boolean;
        public loadStyleUri(param0: string, param1: com.mapbox.maps.Style.OnStyleLoaded): void;
        public coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        /** @deprecated */
        public isFullyLoaded(): boolean;
        public setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
        /** @deprecated */
        public queryRenderedFeatures(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public projectedMetersForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ProjectedMeters;
        public getMetersPerPixelAtLatitude(param0: number): number;
        public getBounds(): com.mapbox.maps.CameraBounds;
        public getStyle(param0: com.mapbox.maps.Style.OnStyleLoaded): void;
        public removeOnRenderFrameStartedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener): void;
        public getFeatureState(param0: string, param1: string, param2: string, param3: com.mapbox.maps.QueryFeatureStateCallback): void;
        public addOnRenderFrameStartedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener): void;
        public coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public addOnStyleImageUnusedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener): void;
        public tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
        public loadStyleJson(param0: string, param1: com.mapbox.maps.Style.OnStyleLoaded, param2: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public getFeatureState(param0: string, param1: string, param2: com.mapbox.maps.QueryFeatureStateCallback): void;
        public triggerRepaint(): void;
        public coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public loadStyle(param0: com.mapbox.maps.extension.style.StyleContract.StyleExtension, param1: com.mapbox.maps.TransitionOptions, param2: com.mapbox.maps.Style.OnStyleLoaded, param3: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public setGesturesAnimationPlugin$sdk_publicRelease(param0: com.mapbox.maps.plugin.gestures.GesturesPlugin): void;
        public onDestroy$sdk_publicRelease(): void;
        public loadStyleJson(param0: string, param1: com.mapbox.maps.Style.OnStyleLoaded): void;
        public addOnSourceAddedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener): void;
        public removeOnSourceAddedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener): void;
        public setDebug(param0: java.util.List<any>, param1: boolean): void;
        public loadStyle(param0: com.mapbox.maps.extension.style.StyleContract.StyleExtension): void;
        public getViewAnnotationOptions$sdk_publicRelease(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.maps.ViewAnnotationOptions>;
        public pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
        public getStyle$sdk_publicRelease(): com.mapbox.maps.Style;
        public addOnMapIdleListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener): void;
        public addOnSourceDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener): void;
        public removeViewAnnotation$sdk_publicRelease(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public constructor(param0: com.mapbox.maps.MapInterface, param1: com.mapbox.maps.NativeObserver, param2: com.mapbox.maps.StyleObserver);
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public queryRenderedFeatures(param0: com.mapbox.maps.RenderedQueryGeometry, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): com.mapbox.common.Cancelable;
        public isValid(): boolean;
        public addOnStyleLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener): void;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public getPrefetchZoomDelta(): number;
        public coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
        public setGestureInProgress(param0: boolean): void;
        public getRenderHandler$sdk_publicRelease(): globalAndroid.os.Handler;
        public setGesturesPlugin$sdk_publicRelease(param0: com.mapbox.maps.plugin.gestures.GesturesPlugin): void;
        public getGeoJsonClusterLeaves(param0: string, param1: com.mapbox.geojson.Feature, param2: com.mapbox.maps.QueryFeatureExtensionCallback): void;
        public unproject(param0: com.mapbox.maps.MercatorCoordinate, param1: number): com.mapbox.geojson.Point;
        public project(param0: com.mapbox.geojson.Point, param1: number): com.mapbox.maps.MercatorCoordinate;
        public setFeatureState(param0: string, param1: string, param2: com.mapbox.bindgen.Value): void;
        public getElevation(param0: com.mapbox.geojson.Point): java.lang.Double;
        public removeFeatureState(param0: string, param1: string, param2: string): void;
        public addOnCameraChangeListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener): void;
        public setMemoryBudget(param0: com.mapbox.maps.MapMemoryBudget): void;
        public clearData(param0: com.mapbox.maps.AsyncOperationResultCallback): void;
        public addOnStyleDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener): void;
        public loadStyle(param0: com.mapbox.maps.extension.style.StyleContract.StyleExtension, param1: com.mapbox.maps.Style.OnStyleLoaded): void;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public removeOnSourceDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener): void;
        public static clearData(param0: com.mapbox.maps.ResourceOptions, param1: com.mapbox.maps.AsyncOperationResultCallback): void;
        public loadStyleUri(param0: string): void;
        /** @deprecated */
        public queryRenderedFeatures(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public getDebug(): java.util.List<com.mapbox.maps.MapDebugOptions>;
        public coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public setRenderCacheOptions(param0: com.mapbox.maps.RenderCacheOptions): void;
        public getResourceOptions(): com.mapbox.maps.ResourceOptions;
        public removeOnMapLoadErrorListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public addOnMapLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener): void;
        public removeOnRenderFrameFinishedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener): void;
        public loadStyle(param0: com.mapbox.maps.extension.style.StyleContract.StyleExtension, param1: com.mapbox.maps.Style.OnStyleLoaded, param2: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public getGeoJsonClusterChildren(param0: string, param1: com.mapbox.geojson.Feature, param2: com.mapbox.maps.QueryFeatureExtensionCallback): void;
        public removeOnStyleDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener): void;
        public isGestureInProgress(): boolean;
        public setFeatureState(param0: string, param1: string, param2: string, param3: com.mapbox.bindgen.Value): void;
        public loadStyleUri(param0: string, param1: com.mapbox.maps.TransitionOptions, param2: com.mapbox.maps.Style.OnStyleLoaded, param3: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public loadStyleJson(param0: string): void;
        public setConstrainMode(param0: com.mapbox.maps.ConstrainMode): void;
        public setStyle$sdk_publicRelease(param0: com.mapbox.maps.Style): void;
        public removeOnStyleImageMissingListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener): void;
        public cameraAnimationsPlugin(param0: any): any;
        public removeOnStyleImageUnusedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener): void;
        public cameraForGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public removeOnMapIdleListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener): void;
        public isStyleLoadInitiated$sdk_publicRelease(): boolean;
        public loadStyleUri(param0: string, param1: com.mapbox.maps.Style.OnStyleLoaded, param2: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public getGesturesPlugin$sdk_publicRelease(): com.mapbox.maps.plugin.gestures.GesturesPlugin;
        public getCameraAnimationsPlugin$sdk_publicRelease(): com.mapbox.maps.plugin.animation.CameraAnimationsPlugin;
        public addOnSourceRemovedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener): void;
        public coordinatesInfoForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.maps.CoordinateInfo>;
        public executeOnRenderThread(param0: java.lang.Runnable): void;
        public getFreeCameraOptions(): com.mapbox.maps.FreeCameraOptions;
        public setCameraAnimationsPlugin$sdk_publicRelease(param0: com.mapbox.maps.plugin.animation.CameraAnimationsPlugin): void;
        public constructor(param0: com.mapbox.maps.MapInterface, param1: com.mapbox.maps.NativeObserver, param2: number);
        public coordinateForProjectedMeters(param0: com.mapbox.maps.ProjectedMeters): com.mapbox.geojson.Point;
        public loadStyleJson(param0: string, param1: com.mapbox.maps.TransitionOptions, param2: com.mapbox.maps.Style.OnStyleLoaded, param3: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public removeOnStyleLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener): void;
        public updateViewAnnotation$sdk_publicRelease(param0: string, param1: com.mapbox.maps.ViewAnnotationOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
        public getStyle(): com.mapbox.maps.Style;
        public setPrefetchZoomDelta(param0: number): void;
        /** @deprecated */
        public queryFeatureExtensions(param0: string, param1: com.mapbox.geojson.Feature, param2: string, param3: string, param4: java.util.HashMap<string, com.mapbox.bindgen.Value>, param5: com.mapbox.maps.QueryFeatureExtensionCallback): void;
        public reduceMemoryUse(): void;
        public setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
        public setViewportMode(param0: com.mapbox.maps.ViewportMode): void;
        public getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
        public setRenderWorldCopies(param0: boolean): void;
        public setCameraAnimationPlugin$sdk_publicRelease(param0: com.mapbox.maps.plugin.animation.CameraAnimationsPlugin): void;
        public gesturesPlugin(param0: any): any;
        public removeOnCameraChangeListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener): void;
        public removeFeatureState(param0: string, param1: string, param2: string, param3: string): void;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
        /** @deprecated */
        public queryRenderedFeatures(param0: com.mapbox.maps.ScreenBox, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public setRenderHandler$sdk_publicRelease(param0: globalAndroid.os.Handler): void;
        public addViewAnnotation$sdk_publicRelease(param0: string, param1: com.mapbox.maps.ViewAnnotationOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getMetersPerPixelAtLatitude(param0: number, param1: number): number;
        public getSize(): com.mapbox.maps.Size;
        public dragEnd(): void;
      }
      export module MapboxMap {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.maps.MapboxMap.Companion>;
          public clearData(param0: com.mapbox.maps.ResourceOptions, param1: com.mapbox.maps.AsyncOperationResultCallback): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class NativeMapImpl {
        public static class: java.lang.Class<com.mapbox.maps.NativeMapImpl>;
        public getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public setNorthOrientation(param0: com.mapbox.maps.NorthOrientation): void;
        public moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
        public querySourceFeatures(param0: string, param1: com.mapbox.maps.SourceQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
        public queryFeatureExtensions(param0: string, param1: com.mapbox.geojson.Feature, param2: string, param3: string, param4: java.util.HashMap<string, com.mapbox.bindgen.Value>, param5: com.mapbox.maps.QueryFeatureExtensionCallback): void;
        public hasStyleModel(param0: string): boolean;
        public isStyleLoaded(): boolean;
        public cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public getStyleURI(): string;
        public getCameraState(): com.mapbox.maps.CameraState;
        public isUserAnimationInProgress(): boolean;
        public getRenderCacheOptions(): com.mapbox.maps.RenderCacheOptions;
        public getMapOptions(): com.mapbox.maps.MapOptions;
        public setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setUserAnimationInProgress(param0: boolean): void;
        public setCamera(param0: com.mapbox.maps.CameraOptions): void;
        public addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getRenderWorldCopies(): boolean;
        public coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        public getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getMap(): com.mapbox.maps.MapInterface;
        public setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
        public removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeViewAnnotation(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public updateViewAnnotation(param0: string, param1: com.mapbox.maps.ViewAnnotationOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public styleLayerExists(param0: string): boolean;
        public addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getBounds(): com.mapbox.maps.CameraBounds;
        public getFeatureState(param0: string, param1: string, param2: string, param3: com.mapbox.maps.QueryFeatureStateCallback): void;
        public tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
        public coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public triggerRepaint(): void;
        public coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public setStyleLightProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addViewAnnotation(param0: string, param1: com.mapbox.maps.ViewAnnotationOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleJSON(): string;
        public setDebug(param0: java.util.List<any>, param1: boolean): void;
        public pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
        /** @deprecated */
        public setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public render(): void;
        public getViewAnnotationOptions(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.maps.ViewAnnotationOptions>;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public queryRenderedFeatures(param0: com.mapbox.maps.RenderedQueryGeometry, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): com.mapbox.common.Cancelable;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
        public getPrefetchZoomDelta(): number;
        public getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setSize(param0: com.mapbox.maps.Size): void;
        public setGestureInProgress(param0: boolean): void;
        public updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getElevation(param0: com.mapbox.geojson.Point): java.lang.Double;
        public setMemoryBudget(param0: com.mapbox.maps.MapMemoryBudget): void;
        public getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public getStyleImage(param0: string): com.mapbox.maps.Image;
        public queryRenderedFeatures(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public setViewAnnotationPositionsUpdateListener(param0: com.mapbox.maps.ViewAnnotationPositionsUpdateListener): void;
        public queryRenderedFeatures(param0: com.mapbox.maps.ScreenBox, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public isMapLoaded(): boolean;
        public setRenderCacheOptions(param0: com.mapbox.maps.RenderCacheOptions): void;
        public coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public getDebug(): java.util.List<com.mapbox.maps.MapDebugOptions>;
        public getResourceOptions(): com.mapbox.maps.ResourceOptions;
        public removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public isGestureInProgress(): boolean;
        public getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setFeatureState(param0: string, param1: string, param2: string, param3: com.mapbox.bindgen.Value): void;
        public setStyleURI(param0: string): void;
        public addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public setConstrainMode(param0: com.mapbox.maps.ConstrainMode): void;
        public getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
        public constructor(param0: com.mapbox.maps.MapInterface);
        public cameraForGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public styleSourceExists(param0: string): boolean;
        public getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public coordinatesInfoForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.maps.CoordinateInfo>;
        public getFreeCameraOptions(): com.mapbox.maps.FreeCameraOptions;
        public getStyleTransition(): com.mapbox.maps.TransitionOptions;
        public setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleJSON(param0: string): void;
        public hasStyleImage(param0: string): boolean;
        public getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public addPersistentStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public destroyRenderer(): void;
        public pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
        public setStyleGeoJSONSourceData(param0: string, param1: string, param2: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleCustomGeometrySourceTileData(param0: string, param1: com.mapbox.maps.CanonicalTileID, param2: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setPrefetchZoomDelta(param0: number): void;
        public setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public reduceMemoryUse(): void;
        public setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
        public getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
        public setViewportMode(param0: com.mapbox.maps.ViewportMode): void;
        public getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setRenderWorldCopies(param0: boolean): void;
        public addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeFeatureState(param0: string, param1: string, param2: string, param3: string): void;
        public createRenderer(): void;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
        public setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public queryRenderedFeatures(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public getSize(): com.mapbox.maps.Size;
        public dragEnd(): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class NativeMapProvider {
        public static class: java.lang.Class<com.mapbox.maps.NativeMapProvider>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class NativeObserver {
        public static class: java.lang.Class<com.mapbox.maps.NativeObserver>;
        public constructor(param0: com.mapbox.maps.ObservableInterface);
        public notify(param0: com.mapbox.maps.Event): void;
        public removeOnSourceRemovedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener): void;
        public addOnSourceRemovedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener): void;
        public addOnCameraChangeListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener): void;
        public addOnMapLoadErrorListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public removeOnRenderFrameStartedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener): void;
        public getOnSourceDataLoadedListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener>;
        public addOnRenderFrameStartedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener): void;
        public getOnMapIdleListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener>;
        public addOnStyleDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener): void;
        public addOnStyleImageUnusedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener): void;
        public getOnRenderFrameFinishedListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener>;
        public getOnCameraChangeListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener>;
        public removeOnStyleLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener): void;
        public getOnSourceRemovedListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener>;
        public removeOnSourceDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener): void;
        public getOnStyleImageUnusedListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener>;
        public addOnSourceAddedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener): void;
        public removeOnSourceAddedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener): void;
        public getOnStyleLoadedListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener>;
        public getOnStyleImageMissingListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener>;
        public getOnSourceAddedListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener>;
        public removeOnMapLoadErrorListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public removeOnMapLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener): void;
        public addOnMapLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener): void;
        public removeOnRenderFrameFinishedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener): void;
        public removeOnStyleDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener): void;
        public setObservedEvents(param0: java.util.concurrent.CopyOnWriteArraySet<string>): void;
        public addOnMapIdleListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener): void;
        public addOnSourceDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener): void;
        public getOnMapLoadedListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener>;
        public addOnStyleImageMissingListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener): void;
        public addOnRenderFrameFinishedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener): void;
        public addOnStyleLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener): void;
        public getObservedEvents(): java.util.concurrent.CopyOnWriteArraySet<string>;
        public removeOnCameraChangeListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener): void;
        public getOnRenderFrameStartedListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener>;
        public removeOnStyleImageMissingListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener): void;
        public getOnStyleDataLoadedListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener>;
        public resubscribeStyleLoadListeners(): void;
        public removeOnStyleImageUnusedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener): void;
        public onDestroy(): void;
        public removeOnMapIdleListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener): void;
        public getOnMapLoadErrorListeners(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener>;
      }
      export module NativeObserver {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.maps.NativeObserver.Companion>;
          public getSUPPORTED_EVENTS(): java.util.List<string>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ResourceOptionsManager {
        public static class: java.lang.Class<com.mapbox.maps.ResourceOptionsManager>;
        public constructor(param0: com.mapbox.maps.ResourceOptions);
        public setResourceOptions(param0: com.mapbox.maps.ResourceOptions): void;
        public update(param0: any): void;
        public hashCode(): number;
        public component1(): com.mapbox.maps.ResourceOptions;
        public equals(param0: any): boolean;
        public copy(param0: com.mapbox.maps.ResourceOptions): com.mapbox.maps.ResourceOptionsManager;
        public getResourceOptions(): com.mapbox.maps.ResourceOptions;
        public toString(): string;
      }
      export module ResourceOptionsManager {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.maps.ResourceOptionsManager.Companion>;
          public getDefault(param0: globalAndroid.content.Context, param1: string): com.mapbox.maps.ResourceOptionsManager;
          public getTokenResId$sdk_publicRelease(param0: globalAndroid.content.Context): number;
          public destroyDefault(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ResourcesAttributeParser {
        public static class: java.lang.Class<com.mapbox.maps.ResourcesAttributeParser>;
        public static INSTANCE: com.mapbox.maps.ResourcesAttributeParser;
        public parseResourcesOptions(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.TypedArray): com.mapbox.maps.ResourceOptions;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Snapshot {
        public static class: java.lang.Class<com.mapbox.maps.Snapshot>;
        public attributions(): java.util.List<string>;
        public screenCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
        public constructor(param0: com.mapbox.maps.MapSnapshot);
        public coordinate(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        public getBitmap(): globalAndroid.graphics.Bitmap;
        public image(): com.mapbox.maps.Image;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class SnapshotCreatedListener {
        public static class: java.lang.Class<com.mapbox.maps.SnapshotCreatedListener>;
        /**
         * Constructs a new instance of the com.mapbox.maps.SnapshotCreatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onSnapshotResult(param0: com.mapbox.maps.MapSnapshotInterface): void });
        public constructor();
        public onSnapshotResult(param0: com.mapbox.maps.MapSnapshotInterface): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class SnapshotOverlayOptions {
        public static class: java.lang.Class<com.mapbox.maps.SnapshotOverlayOptions>;
        public constructor(param0: boolean, param1: boolean);
        public copy(param0: boolean, param1: boolean): com.mapbox.maps.SnapshotOverlayOptions;
        public component2(): boolean;
        public hashCode(): number;
        public component1(): boolean;
        public equals(param0: any): boolean;
        public getShowAttributes(): boolean;
        public constructor(param0: boolean);
        public toString(): string;
        public getShowLogo(): boolean;
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class SnapshotStyleListener {
        public static class: java.lang.Class<com.mapbox.maps.SnapshotStyleListener>;
        /**
         * Constructs a new instance of the com.mapbox.maps.SnapshotStyleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onDidFinishLoadingStyle(param0: com.mapbox.maps.Style): void; onDidFullyLoadStyle(param0: com.mapbox.maps.Style): void; onDidFailLoadingStyle(param0: string): void; onStyleImageMissing(param0: string): void });
        public constructor();
        public onDidFailLoadingStyle(param0: string): void;
        public onStyleImageMissing(param0: string): void;
        public onDidFinishLoadingStyle(param0: com.mapbox.maps.Style): void;
        public onDidFullyLoadStyle(param0: com.mapbox.maps.Style): void;
      }
      export module SnapshotStyleListener {
        export class DefaultImpls {
          public static class: java.lang.Class<com.mapbox.maps.SnapshotStyleListener.DefaultImpls>;
          public static onDidFailLoadingStyle(param0: com.mapbox.maps.SnapshotStyleListener, param1: string): void;
          public static onDidFullyLoadStyle(param0: com.mapbox.maps.SnapshotStyleListener, param1: com.mapbox.maps.Style): void;
          public static onStyleImageMissing(param0: com.mapbox.maps.SnapshotStyleListener, param1: string): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Snapshotter {
        public static class: java.lang.Class<com.mapbox.maps.Snapshotter>;
        public setStyleJson(param0: string): void;
        public getStyleJson(): string;
        public clearData(param0: com.mapbox.maps.AsyncOperationResultCallback): void;
        public tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: number, param3: number): com.mapbox.maps.CameraOptions;
        public setSnapshotCreatedCallback$sdk_publicRelease(param0: com.mapbox.maps.SnapshotCreatedListener): void;
        public coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public destroy(): void;
        /** @deprecated */
        public setTileMode(param0: boolean): void;
        public cancel(): void;
        public getSnapshotCreatedCallback$sdk_publicRelease(): com.mapbox.maps.SnapshotCreatedListener;
        public setStyleListener(param0: com.mapbox.maps.SnapshotStyleListener): void;
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.MapSnapshotOptions);
        public getCameraState(): com.mapbox.maps.CameraState;
        public getStyleUri(): string;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public setCamera(param0: com.mapbox.maps.CameraOptions): void;
        public getSnapshotStyleCallback$sdk_publicRelease(): com.mapbox.maps.SnapshotStyleListener;
        public start(param0: com.mapbox.maps.SnapshotCreatedListener): void;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public constructor(param0: java.lang.ref.WeakReference<globalAndroid.content.Context>, param1: com.mapbox.maps.MapSnapshotOptions, param2: com.mapbox.maps.SnapshotOverlayOptions, param3: com.mapbox.maps.MapSnapshotterInterface, param4: com.mapbox.maps.Observer);
        public setSize(param0: com.mapbox.maps.Size): void;
        public setSnapshotStyleCallback$sdk_publicRelease(param0: com.mapbox.maps.SnapshotStyleListener): void;
        public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.maps.MapSnapshotOptions, param2: com.mapbox.maps.SnapshotOverlayOptions);
        public setStyleUri(param0: string): void;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        /** @deprecated */
        public isInTileMode(): boolean;
        public getSize(): com.mapbox.maps.Size;
      }
      export module Snapshotter {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.maps.Snapshotter.Companion>;
        }
        export class Logo {
          public static class: java.lang.Class<com.mapbox.maps.Snapshotter.Logo>;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap, param2: number);
          public getSmall(): globalAndroid.graphics.Bitmap;
          public component3(): number;
          public component1(): globalAndroid.graphics.Bitmap;
          public component2(): globalAndroid.graphics.Bitmap;
          public getScale(): number;
          public copy(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap, param2: number): com.mapbox.maps.Snapshotter.Logo;
          public hashCode(): number;
          public getLarge(): globalAndroid.graphics.Bitmap;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Style {
        public static class: java.lang.Class<com.mapbox.maps.Style>;
        public static MAPBOX_STREETS: string;
        public static OUTDOORS: string;
        public static LIGHT: string;
        public static DARK: string;
        public static SATELLITE: string;
        public static SATELLITE_STREETS: string;
        public static TRAFFIC_DAY: string;
        public static TRAFFIC_NIGHT: string;
        public markInvalid$sdk_publicRelease(): void;
        public getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public constructor(param0: com.mapbox.maps.StyleManagerInterface, param1: number);
        public getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addImage(param0: string, param1: globalAndroid.graphics.Bitmap): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
        public getStyleImage(param0: string): com.mapbox.maps.Image;
        public getPixelRatio(): number;
        public addImage(param0: string, param1: globalAndroid.graphics.Bitmap, param2: boolean): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public hasStyleModel(param0: string): boolean;
        public isStyleLoaded(): boolean;
        public getStyleURI(): string;
        public removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public addImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleURI(param0: string): void;
        public addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
        public removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleSourcesAttribution(): java.util.List<string>;
        public styleSourceExists(param0: string): boolean;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public styleLayerExists(param0: string): boolean;
        public getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTransition(): com.mapbox.maps.TransitionOptions;
        public setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public hasStyleImage(param0: string): boolean;
        public setStyleJSON(param0: string): void;
        public getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public addImage(param0: string, param1: com.mapbox.maps.Image, param2: boolean): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLightProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addPersistentStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleJSON(): string;
        public setStyleGeoJSONSourceData(param0: string, param1: string, param2: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleCustomGeometrySourceTileData(param0: string, param1: com.mapbox.maps.CanonicalTileID, param2: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        /** @deprecated */
        public setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public isValid(): boolean;
        public addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
      }
      export module Style {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.maps.Style.Companion>;
        }
        export class OnStyleLoaded {
          public static class: java.lang.Class<com.mapbox.maps.Style.OnStyleLoaded>;
          /**
           * Constructs a new instance of the com.mapbox.maps.Style$OnStyleLoaded interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onStyleLoaded(param0: com.mapbox.maps.Style): void });
          public constructor();
          public onStyleLoaded(param0: com.mapbox.maps.Style): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StyleObserver {
        public static class: java.lang.Class<com.mapbox.maps.StyleObserver>;
        public static TAG: string;
        public onStyleLoaded(param0: com.mapbox.maps.extension.observable.eventdata.StyleLoadedEventData): void;
        public onDestroy(): void;
        public constructor(param0: com.mapbox.maps.MapInterface, param1: com.mapbox.maps.Style.OnStyleLoaded, param2: com.mapbox.maps.NativeObserver, param3: number);
        public setLoadStyleListener(param0: com.mapbox.maps.Style.OnStyleLoaded, param1: com.mapbox.maps.Style.OnStyleLoaded, param2: com.mapbox.maps.Style.OnStyleLoaded, param3: com.mapbox.maps.Style.OnStyleLoaded, param4: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
        public addGetStyleListener(param0: com.mapbox.maps.Style.OnStyleLoaded): void;
        public onMapLoadError(param0: com.mapbox.maps.extension.observable.eventdata.MapLoadingErrorEventData): void;
        public onStyleDataLoaded(param0: com.mapbox.maps.extension.observable.eventdata.StyleDataLoadedEventData): void;
      }
      export module StyleObserver {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.maps.StyleObserver.Companion>;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.mapbox.maps.StyleObserver.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ThreadChecker {
        public static class: java.lang.Class<com.mapbox.maps.ThreadChecker>;
        public static INSTANCE: com.mapbox.maps.ThreadChecker;
        public throwIfNotMainThread(): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ViewAnnotationManagerImpl extends com.mapbox.maps.viewannotation.ViewAnnotationManager {
        public static class: java.lang.Class<com.mapbox.maps.ViewAnnotationManagerImpl>;
        public static EXCEPTION_TEXT_GEOMETRY_IS_NULL: string;
        public static EXCEPTION_TEXT_ASSOCIATED_FEATURE_ID_ALREADY_EXISTS: string;
        public setViewAnnotationUpdateMode(param0: com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode): void;
        public getViewUpdatedListenerSet$sdk_publicRelease(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.maps.viewannotation.OnViewAnnotationUpdatedListener>;
        public constructor(param0: com.mapbox.maps.MapView, param1: globalAndroid.widget.FrameLayout);
        public getViewAnnotationUpdateMode(): com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode;
        public getViewAnnotationOptionsByView(param0: globalAndroid.view.View): com.mapbox.maps.ViewAnnotationOptions;
        public getIdLookupMap$sdk_publicRelease(): java.util.concurrent.ConcurrentHashMap<globalAndroid.view.View, string>;
        public removeOnViewAnnotationUpdatedListener(param0: com.mapbox.maps.viewannotation.OnViewAnnotationUpdatedListener): void;
        public onViewAnnotationPositionsUpdate(param0: java.util.List<com.mapbox.maps.ViewAnnotationPositionDescriptor>): void;
        public updateViewAnnotation(param0: globalAndroid.view.View, param1: com.mapbox.maps.ViewAnnotationOptions): boolean;
        public getViewAnnotationOptionsByFeatureId(param0: string): com.mapbox.maps.ViewAnnotationOptions;
        public getAnnotations(): java.util.Map<globalAndroid.view.View, com.mapbox.maps.ViewAnnotationOptions>;
        public addViewAnnotation(param0: globalAndroid.view.View, param1: com.mapbox.maps.ViewAnnotationOptions): void;
        public calculateCoordinateBoundForAnnotation$sdk_publicRelease(param0: com.mapbox.maps.ViewAnnotationOptions, param1: globalAndroid.graphics.Rect, param2: java.lang.Double): com.mapbox.maps.CoordinateBounds;
        public getViewAnnotationByFeatureId(param0: string): globalAndroid.view.View;
        public destroy(): void;
        public addOnViewAnnotationUpdatedListener(param0: com.mapbox.maps.viewannotation.OnViewAnnotationUpdatedListener): void;
        public getViewAnnotationOptionsFrame$sdk_publicRelease(param0: com.mapbox.maps.ViewAnnotationOptions): globalAndroid.graphics.Rect;
        public removeViewAnnotation(param0: globalAndroid.view.View): boolean;
        public cameraForAnnotations(param0: java.util.List<any>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public addViewAnnotation(param0: number, param1: com.mapbox.maps.ViewAnnotationOptions): globalAndroid.view.View;
        public removeAllViewAnnotations(): void;
        public addViewAnnotation(param0: number, param1: com.mapbox.maps.ViewAnnotationOptions, param2: androidx.asynclayoutinflater.view.AsyncLayoutInflater, param3: any): void;
      }
      export module ViewAnnotationManagerImpl {
        export class Companion {
          public static class: java.lang.Class<com.mapbox.maps.ViewAnnotationManagerImpl.Companion>;
          public needToReorderZ$sdk_publicRelease(param0: java.util.List<com.mapbox.maps.ViewAnnotationPositionDescriptor>, param1: java.util.List<com.mapbox.maps.ViewAnnotationPositionDescriptor>): boolean;
        }
        export class WhenMappings {
          public static class: java.lang.Class<com.mapbox.maps.ViewAnnotationManagerImpl.WhenMappings>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module attribution {
        export class AttributionLayout {
          public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionLayout>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getLogo(): globalAndroid.graphics.Bitmap;
          public component1(): globalAndroid.graphics.Bitmap;
          public copy(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.PointF, param2: boolean): com.mapbox.maps.attribution.AttributionLayout;
          public component2(): globalAndroid.graphics.PointF;
          public component3(): boolean;
          public constructor(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.PointF, param2: boolean);
          public hashCode(): number;
          public getAnchorPoint(): globalAndroid.graphics.PointF;
          public isShortText(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module attribution {
        export class AttributionMeasure {
          public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure>;
          public constructor(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.Bitmap, param3: globalAndroid.widget.TextView, param4: globalAndroid.widget.TextView, param5: number);
          public getTextView(): globalAndroid.widget.TextView;
          public measure(): com.mapbox.maps.attribution.AttributionLayout;
        }
        export module AttributionMeasure {
          export class Chain {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.Chain>;
            public setCommands(param0: java.util.List<any>): void;
            public start(param0: com.mapbox.maps.attribution.AttributionMeasure): com.mapbox.maps.attribution.AttributionLayout;
            public constructor(param0: androidNative.Array<com.mapbox.maps.attribution.AttributionMeasure.Command>);
            public getCommands(): java.util.List<com.mapbox.maps.attribution.AttributionMeasure.Command>;
          }
          export class Command {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.Command>;
            /**
             * Constructs a new instance of the com.mapbox.maps.attribution.AttributionMeasure$Command interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { execute(param0: com.mapbox.maps.attribution.AttributionMeasure, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap, param4: boolean): com.mapbox.maps.attribution.AttributionLayout; execute(param0: com.mapbox.maps.attribution.AttributionMeasure): com.mapbox.maps.attribution.AttributionLayout });
            public constructor();
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap, param4: boolean): com.mapbox.maps.attribution.AttributionLayout;
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure): com.mapbox.maps.attribution.AttributionLayout;
          }
          export module Command {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.Command.DefaultImpls>;
              public static execute(param0: com.mapbox.maps.attribution.AttributionMeasure.Command, param1: com.mapbox.maps.attribution.AttributionMeasure, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap, param5: boolean): com.mapbox.maps.attribution.AttributionLayout;
            }
          }
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.Companion>;
          }
          export class FullLogoLongTextCommand extends com.mapbox.maps.attribution.AttributionMeasure.Command {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.FullLogoLongTextCommand>;
            public constructor();
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap, param4: boolean): com.mapbox.maps.attribution.AttributionLayout;
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure): com.mapbox.maps.attribution.AttributionLayout;
          }
          export class FullLogoShortTextCommand extends com.mapbox.maps.attribution.AttributionMeasure.Command {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.FullLogoShortTextCommand>;
            public constructor();
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap, param4: boolean): com.mapbox.maps.attribution.AttributionLayout;
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure): com.mapbox.maps.attribution.AttributionLayout;
          }
          export class LongTextCommand extends com.mapbox.maps.attribution.AttributionMeasure.Command {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.LongTextCommand>;
            public constructor();
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap, param4: boolean): com.mapbox.maps.attribution.AttributionLayout;
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure): com.mapbox.maps.attribution.AttributionLayout;
          }
          export class NoTextCommand extends com.mapbox.maps.attribution.AttributionMeasure.Command {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.NoTextCommand>;
            public constructor();
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap, param4: boolean): com.mapbox.maps.attribution.AttributionLayout;
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure): com.mapbox.maps.attribution.AttributionLayout;
          }
          export class ShortTextCommand extends com.mapbox.maps.attribution.AttributionMeasure.Command {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.ShortTextCommand>;
            public constructor();
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap, param4: boolean): com.mapbox.maps.attribution.AttributionLayout;
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure): com.mapbox.maps.attribution.AttributionLayout;
          }
          export class SmallLogoLongTextCommand extends com.mapbox.maps.attribution.AttributionMeasure.Command {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.SmallLogoLongTextCommand>;
            public constructor();
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap, param4: boolean): com.mapbox.maps.attribution.AttributionLayout;
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure): com.mapbox.maps.attribution.AttributionLayout;
          }
          export class SmallLogoShortTextCommand extends com.mapbox.maps.attribution.AttributionMeasure.Command {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionMeasure.SmallLogoShortTextCommand>;
            public constructor();
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap, param4: boolean): com.mapbox.maps.attribution.AttributionLayout;
            public execute(param0: com.mapbox.maps.attribution.AttributionMeasure): com.mapbox.maps.attribution.AttributionLayout;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module attribution {
        export class AttributionParser {
          public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionParser>;
          public createAttributionString(param0: boolean): string;
          public createAttributionString(): string;
          public constructor(param0: java.lang.ref.WeakReference<globalAndroid.content.Context>, param1: string, param2: boolean, param3: boolean, param4: boolean, param5: boolean);
          public parse(): void;
          public getAttributions(): java.util.Set<com.mapbox.maps.plugin.attribution.Attribution>;
        }
        export module AttributionParser {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionParser.Companion>;
            public getIMPROVE_MAP_URLS(): java.util.List<string>;
          }
          export class Options {
            public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionParser.Options>;
            public static HTML_STYLE_REGEX: string;
            public withCopyrightSign(param0: boolean): com.mapbox.maps.attribution.AttributionParser.Options;
            public constructor(param0: globalAndroid.content.Context);
            public withMapboxAttribution(param0: boolean): com.mapbox.maps.attribution.AttributionParser.Options;
            public build(): com.mapbox.maps.attribution.AttributionParser;
            public withAttributionData(param0: androidNative.Array<string>): com.mapbox.maps.attribution.AttributionParser.Options;
            public withTelemetryAttribution(param0: boolean): com.mapbox.maps.attribution.AttributionParser.Options;
            public withImproveMap(param0: boolean): com.mapbox.maps.attribution.AttributionParser.Options;
          }
          export module Options {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.attribution.AttributionParser.Options.Companion>;
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
      export module exception {
        export class WorkerThreadException {
          public static class: java.lang.Class<com.mapbox.maps.exception.WorkerThreadException>;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class InvalidViewPluginHostException {
          public static class: java.lang.Class<com.mapbox.maps.plugin.InvalidViewPluginHostException>;
          public constructor(param0: string);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class MapAttributionDelegateImpl {
          public static class: java.lang.Class<com.mapbox.maps.plugin.MapAttributionDelegateImpl>;
          public parseAttributions(param0: globalAndroid.content.Context, param1: com.mapbox.maps.plugin.attribution.AttributionParserConfig): java.util.List<com.mapbox.maps.plugin.attribution.Attribution>;
          public buildMapBoxFeedbackUrl(param0: globalAndroid.content.Context): string;
          public telemetry(): com.mapbox.maps.module.MapTelemetry;
          public constructor(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.maps.module.MapTelemetry);
        }
        export module MapAttributionDelegateImpl {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.plugin.MapAttributionDelegateImpl.Companion>;
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
        export class MapDelegateProviderImpl {
          public static class: java.lang.Class<com.mapbox.maps.plugin.MapDelegateProviderImpl>;
          public getMapListenerDelegate(): com.mapbox.maps.plugin.delegates.MapListenerDelegate;
          public getStyleStateDelegate(): com.mapbox.maps.plugin.delegates.MapStyleStateDelegate;
          public getMapTransformDelegate(): com.mapbox.maps.plugin.delegates.MapTransformDelegate;
          public getMapAttributionDelegate(): com.mapbox.maps.plugin.delegates.MapAttributionDelegate;
          public getMapFeatureQueryDelegate(): com.mapbox.maps.plugin.delegates.MapFeatureQueryDelegate;
          public getMapboxMap(): com.mapbox.maps.MapboxMap;
          public getMapCameraManagerDelegate(): com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate;
          public getStyle(param0: any): void;
          public getMapPluginProviderDelegate(): com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate;
          public constructor(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.maps.MapController, param2: com.mapbox.maps.module.MapTelemetry);
          public getMapProjectionDelegate(): com.mapbox.maps.plugin.delegates.MapProjectionDelegate;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class MapPluginRegistry {
          public static class: java.lang.Class<com.mapbox.maps.plugin.MapPluginRegistry>;
          public onStart(): void;
          public createPlugin(param0: com.mapbox.maps.MapView, param1: com.mapbox.maps.MapInitOptions, param2: com.mapbox.maps.plugin.Plugin): void;
          public onTouch(param0: globalAndroid.view.MotionEvent): boolean;
          public onStyleChanged(param0: com.mapbox.maps.Style): void;
          public onAttachedToWindow(param0: com.mapbox.maps.MapView): void;
          public getPlugin(param0: string): any;
          public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider);
          public onCameraMove(param0: com.mapbox.maps.CameraState): void;
          public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public onStop(): void;
          public onDestroy(): void;
          public onSizeChanged(param0: number, param1: number): void;
        }
        export module MapPluginRegistry {
          export class State {
            public static class: java.lang.Class<com.mapbox.maps.plugin.MapPluginRegistry.State>;
            public static STARTED: com.mapbox.maps.plugin.MapPluginRegistry.State;
            public static STOPPED: com.mapbox.maps.plugin.MapPluginRegistry.State;
            public static valueOf(param0: string): com.mapbox.maps.plugin.MapPluginRegistry.State;
            public static values(): androidNative.Array<com.mapbox.maps.plugin.MapPluginRegistry.State>;
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.mapbox.maps.plugin.MapPluginRegistry.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class EventType {
          public static class: java.lang.Class<com.mapbox.maps.renderer.EventType>;
          public static DEFAULT: com.mapbox.maps.renderer.EventType;
          public static DESTROY_RENDERER: com.mapbox.maps.renderer.EventType;
          public static valueOf(param0: string): com.mapbox.maps.renderer.EventType;
          public static values(): androidNative.Array<com.mapbox.maps.renderer.EventType>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class FpsManager {
          public static class: java.lang.Class<com.mapbox.maps.renderer.FpsManager>;
          public static VSYNC_COUNT_TILL_IDLE: number;
          public setFpsChangedListener$sdk_publicRelease(param0: com.mapbox.maps.renderer.OnFpsChangedListener): void;
          public preRender(param0: number): boolean;
          public destroy(): void;
          public setScreenRefreshRate(param0: number): void;
          public setUserRefreshRate(param0: number): void;
          public onSurfaceDestroyed(): void;
          public postRender(): void;
          public constructor(param0: globalAndroid.os.Handler);
          public getFpsChangedListener$sdk_publicRelease(): com.mapbox.maps.renderer.OnFpsChangedListener;
        }
        export module FpsManager {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.renderer.FpsManager.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class MapboxRenderThread {
          public static class: java.lang.Class<com.mapbox.maps.renderer.MapboxRenderThread>;
          public static RETRY_DELAY_MS: number;
          public getRenderDestroyCallChain$sdk_publicRelease(): boolean;
          public removeWidget(param0: com.mapbox.maps.renderer.widget.Widget): boolean;
          public getRenderHandlerThread$sdk_publicRelease(): com.mapbox.maps.renderer.RenderHandlerThread;
          public doFrame(param0: number): void;
          public setPaused$sdk_publicRelease(param0: boolean): void;
          public onSurfaceDestroyed(): void;
          public setNeedViewAnnotationSync$sdk_publicRelease(param0: boolean): void;
          public getFpsChangedListener$sdk_publicRelease(): com.mapbox.maps.renderer.OnFpsChangedListener;
          public onSurfaceSizeChanged(param0: number, param1: number): void;
          public getNonRenderEventQueue$sdk_publicRelease(): java.util.concurrent.ConcurrentLinkedQueue<com.mapbox.maps.renderer.RenderEvent>;
          public processAndroidSurface$sdk_publicRelease(param0: globalAndroid.view.Surface, param1: number, param2: number): void;
          public pause(): void;
          public destroy$sdk_publicRelease(): void;
          public getRenderEventQueue$sdk_publicRelease(): java.util.concurrent.ConcurrentLinkedQueue<com.mapbox.maps.renderer.RenderEvent>;
          public getEglCore$sdk_publicRelease(): com.mapbox.maps.renderer.egl.EGLCore;
          public constructor(param0: com.mapbox.maps.renderer.MapboxRenderer, param1: com.mapbox.maps.renderer.MapboxWidgetRenderer, param2: boolean, param3: number);
          public onSurfaceCreated(param0: globalAndroid.view.Surface, param1: number, param2: number): void;
          public getEglContextCreated$sdk_publicRelease(): boolean;
          public setAwaitingNextVsync$sdk_publicRelease(param0: boolean): void;
          public setFpsChangedListener$sdk_publicRelease(param0: com.mapbox.maps.renderer.OnFpsChangedListener): void;
          public setScreenRefreshRate(param0: number): void;
          public queueRenderEvent(param0: com.mapbox.maps.renderer.RenderEvent): void;
          public setRenderDestroyCallChain$sdk_publicRelease(param0: boolean): void;
          public setViewAnnotationMode$sdk_publicRelease(param0: com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode): void;
          public setEglSurface$sdk_publicRelease(param0: javax.microedition.khronos.egl.EGLSurface): void;
          public getEglSurface$sdk_publicRelease(): javax.microedition.khronos.egl.EGLSurface;
          public getViewAnnotationMode$sdk_publicRelease(): com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode;
          public setEglContextCreated$sdk_publicRelease(param0: boolean): void;
          public constructor(param0: com.mapbox.maps.renderer.MapboxRenderer, param1: com.mapbox.maps.renderer.MapboxWidgetRenderer, param2: com.mapbox.maps.renderer.RenderHandlerThread, param3: com.mapbox.maps.renderer.egl.EGLCore, param4: com.mapbox.maps.renderer.FpsManager, param5: com.mapbox.maps.renderer.gl.TextureRenderer);
          public setUserRefreshRate(param0: number): void;
          public resume(): void;
          public getNeedViewAnnotationSync$sdk_publicRelease(): boolean;
          public getAwaitingNextVsync$sdk_publicRelease(): boolean;
          public getPaused$sdk_publicRelease(): boolean;
          public addWidget(param0: com.mapbox.maps.renderer.widget.Widget): void;
        }
        export module MapboxRenderThread {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.renderer.MapboxRenderThread.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export abstract class MapboxRenderer {
          public static class: java.lang.Class<com.mapbox.maps.renderer.MapboxRenderer>;
          public renderThread: com.mapbox.maps.renderer.MapboxRenderThread;
          public setMap$sdk_publicRelease(param0: com.mapbox.maps.MapInterface): void;
          public createRenderer(): void;
          public onDestroy(): void;
          public getWidgetRenderer$sdk_publicRelease(): com.mapbox.maps.renderer.MapboxWidgetRenderer;
          public setReadyForSnapshot$sdk_publicRelease(param0: java.util.concurrent.atomic.AtomicBoolean): void;
          public onStart(): void;
          public scheduleTask(param0: com.mapbox.maps.Task): void;
          public render(): void;
          public getMap$sdk_publicRelease(): com.mapbox.maps.MapInterface;
          public snapshot(param0: com.mapbox.maps.MapView.OnSnapshotReady): void;
          public constructor();
          public snapshot(): globalAndroid.graphics.Bitmap;
          public setMap(param0: com.mapbox.maps.MapInterface): void;
          public setRenderThread$sdk_publicRelease(param0: com.mapbox.maps.renderer.MapboxRenderThread): void;
          public onSurfaceChanged(param0: number, param1: number): void;
          public queueRenderEvent(param0: java.lang.Runnable): void;
          public setMaximumFps(param0: number): void;
          public getRenderThread$sdk_publicRelease(): com.mapbox.maps.renderer.MapboxRenderThread;
          public getPixelReader$sdk_publicRelease(): com.mapbox.maps.renderer.gl.PixelReader;
          public getReadyForSnapshot$sdk_publicRelease(): java.util.concurrent.atomic.AtomicBoolean;
          public destroyRenderer(): void;
          public setOnFpsChangedListener(param0: com.mapbox.maps.renderer.OnFpsChangedListener): void;
          public setPixelReader$sdk_publicRelease(param0: com.mapbox.maps.renderer.gl.PixelReader): void;
          public queueNonRenderEvent(param0: java.lang.Runnable): void;
          public onStop(): void;
          public scheduleRepaint(): void;
        }
        export module MapboxRenderer {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.renderer.MapboxRenderer.Companion>;
            public getRepaintRenderEvent$sdk_publicRelease(): com.mapbox.maps.renderer.RenderEvent;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class MapboxSurfaceHolderRenderer extends com.mapbox.maps.renderer.MapboxSurfaceRenderer {
          public static class: java.lang.Class<com.mapbox.maps.renderer.MapboxSurfaceHolderRenderer>;
          public surfaceCreated(): void;
          public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
          public constructor();
          public constructor(param0: globalAndroid.view.SurfaceHolder, param1: number);
          public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
          public surfaceDestroyed(): void;
          public constructor(param0: com.mapbox.maps.renderer.MapboxRenderThread);
          public surfaceChanged(param0: globalAndroid.view.Surface, param1: number, param2: number): void;
          public constructor(param0: number);
          public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class MapboxSurfaceRenderer extends com.mapbox.maps.renderer.MapboxRenderer {
          public static class: java.lang.Class<com.mapbox.maps.renderer.MapboxSurfaceRenderer>;
          public surfaceCreated(): void;
          public constructor();
          public surfaceDestroyed(): void;
          public constructor(param0: com.mapbox.maps.renderer.MapboxRenderThread);
          public surfaceChanged(param0: globalAndroid.view.Surface, param1: number, param2: number): void;
          public getWidgetRenderer$sdk_publicRelease(): com.mapbox.maps.renderer.MapboxWidgetRenderer;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class MapboxTextureViewRenderer extends com.mapbox.maps.renderer.MapboxRenderer {
          public static class: java.lang.Class<com.mapbox.maps.renderer.MapboxTextureViewRenderer>;
          public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
          public constructor(param0: globalAndroid.view.TextureView, param1: number);
          public constructor();
          public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
          public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
          public constructor(param0: com.mapbox.maps.renderer.MapboxRenderThread);
          public getWidgetRenderer$sdk_publicRelease(): com.mapbox.maps.renderer.MapboxWidgetRenderer;
          public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class MapboxWidgetRenderer {
          public static class: java.lang.Class<com.mapbox.maps.renderer.MapboxWidgetRenderer>;
          public hasWidgets(): boolean;
          public removeWidget(param0: com.mapbox.maps.renderer.widget.Widget): boolean;
          public setSharedContext(param0: javax.microedition.khronos.egl.EGLContext): void;
          public onSurfaceChanged(param0: number, param1: number): void;
          public getTexture(): number;
          public updateTexture(): void;
          public release(): void;
          public addWidget(param0: com.mapbox.maps.renderer.widget.Widget): void;
          public cleanUpAllWidgets(): void;
          public hasTexture(): boolean;
          public constructor(param0: number);
          public getNeedTextureUpdate(): boolean;
        }
        export module MapboxWidgetRenderer {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.renderer.MapboxWidgetRenderer.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class OnFpsChangedListener {
          public static class: java.lang.Class<com.mapbox.maps.renderer.OnFpsChangedListener>;
          /**
           * Constructs a new instance of the com.mapbox.maps.renderer.OnFpsChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onFpsChanged(param0: number): void });
          public constructor();
          public onFpsChanged(param0: number): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class RenderEvent {
          public static class: java.lang.Class<com.mapbox.maps.renderer.RenderEvent>;
          public component3(): com.mapbox.maps.renderer.EventType;
          public equals(param0: any): boolean;
          public getEventType(): com.mapbox.maps.renderer.EventType;
          public toString(): string;
          public component1(): java.lang.Runnable;
          public constructor(param0: java.lang.Runnable, param1: boolean, param2: com.mapbox.maps.renderer.EventType);
          public getRunnable(): java.lang.Runnable;
          public getNeedRender(): boolean;
          public copy(param0: java.lang.Runnable, param1: boolean, param2: com.mapbox.maps.renderer.EventType): com.mapbox.maps.renderer.RenderEvent;
          public hashCode(): number;
          public component2(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class RenderHandlerThread {
          public static class: java.lang.Class<com.mapbox.maps.renderer.RenderHandlerThread>;
          public start(): globalAndroid.os.Handler;
          public post(param0: any): void;
          public constructor();
          public postDelayed(param0: any, param1: number, param2: com.mapbox.maps.renderer.EventType): void;
          public setHandler$sdk_publicRelease(param0: globalAndroid.os.Handler): void;
          public isRunning$sdk_publicRelease(): boolean;
          public stop(): void;
          public getHandler$sdk_publicRelease(): globalAndroid.os.Handler;
          public clearDefaultMessages(): void;
          public getHandlerThread$sdk_publicRelease(): globalAndroid.os.HandlerThread;
        }
        export module RenderHandlerThread {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.renderer.RenderHandlerThread.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class RendererError {
          public static class: java.lang.Class<com.mapbox.maps.renderer.RendererError>;
          public static NO_VALID_EGL_CONFIG_FOUND: com.mapbox.maps.renderer.RendererError;
          public static OUT_OF_MEMORY: com.mapbox.maps.renderer.RendererError;
          public equals(param0: any): boolean;
          public toString(): string;
          public getEglErrorCode(): number;
          public hashCode(): number;
          public constructor(param0: number);
        }
        export module RendererError {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.renderer.RendererError.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export class RendererSetupErrorListener {
          public static class: java.lang.Class<com.mapbox.maps.renderer.RendererSetupErrorListener>;
          /**
           * Constructs a new instance of the com.mapbox.maps.renderer.RendererSetupErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onError(param0: com.mapbox.maps.renderer.RendererError): void });
          public constructor();
          public onError(param0: com.mapbox.maps.renderer.RendererError): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export module egl {
          export class EGLConfigChooser {
            public static class: java.lang.Class<com.mapbox.maps.renderer.egl.EGLConfigChooser>;
            public constructor(param0: boolean, param1: number);
            public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
          }
          export module EGLConfigChooser {
            export class BufferFormat {
              public static class: java.lang.Class<com.mapbox.maps.renderer.egl.EGLConfigChooser.BufferFormat>;
              public static Format16Bit: com.mapbox.maps.renderer.egl.EGLConfigChooser.BufferFormat;
              public static Format32BitNoAlpha: com.mapbox.maps.renderer.egl.EGLConfigChooser.BufferFormat;
              public static Format32BitAlpha: com.mapbox.maps.renderer.egl.EGLConfigChooser.BufferFormat;
              public static Format24Bit: com.mapbox.maps.renderer.egl.EGLConfigChooser.BufferFormat;
              public static Unknown: com.mapbox.maps.renderer.egl.EGLConfigChooser.BufferFormat;
              public static values(): androidNative.Array<com.mapbox.maps.renderer.egl.EGLConfigChooser.BufferFormat>;
              public setValue(param0: number): void;
              public static valueOf(param0: string): com.mapbox.maps.renderer.egl.EGLConfigChooser.BufferFormat;
              public getValue(): number;
            }
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.renderer.egl.EGLConfigChooser.Companion>;
              public setSTENCIL_SIZE$sdk_publicRelease(param0: number): void;
              public getSTENCIL_SIZE$sdk_publicRelease(): number;
            }
            export class DepthStencilFormat {
              public static class: java.lang.Class<com.mapbox.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat>;
              public static Format16Depth8Stencil: com.mapbox.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat;
              public static Format24Depth8Stencil: com.mapbox.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat;
              public static values(): androidNative.Array<com.mapbox.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat>;
              public static valueOf(param0: string): com.mapbox.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat;
              public setValue(param0: number): void;
              public getValue(): number;
            }
            export module chooseBestMatchConfig {
              export module DepthStencilFormat {
                export class Config extends java.lang.Comparable<com.mapbox.maps.renderer.egl.EGLConfigChooser.chooseBestMatchConfig.Config> {
                  public static class: java.lang.Class<com.mapbox.maps.renderer.egl.EGLConfigChooser.chooseBestMatchConfig.Config>;
                  public getDepthStencilFormat(): com.mapbox.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat;
                  public constructor(param0: com.mapbox.maps.renderer.egl.EGLConfigChooser.BufferFormat, param1: com.mapbox.maps.renderer.egl.EGLConfigChooser.DepthStencilFormat, param2: boolean, param3: boolean, param4: number, param5: javax.microedition.khronos.egl.EGLConfig, param6: number);
                  public isCaveat(): boolean;
                  public isNotConformant(): boolean;
                  public compareTo(param0: com.mapbox.maps.renderer.egl.EGLConfigChooser.chooseBestMatchConfig.Config): number;
                  public getBufferFormat(): com.mapbox.maps.renderer.egl.EGLConfigChooser.BufferFormat;
                  public getConfig(): javax.microedition.khronos.egl.EGLConfig;
                  public getSamples(): number;
                  public getIndex(): number;
                }
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
      export module renderer {
        export module egl {
          export class EGLCore {
            public static class: java.lang.Class<com.mapbox.maps.renderer.egl.EGLCore>;
            public removeRendererStateListener$sdk_publicRelease(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
            public makeCurrent(param0: javax.microedition.khronos.egl.EGLSurface): boolean;
            public releaseSurface(param0: javax.microedition.khronos.egl.EGLSurface): void;
            public makeNothingCurrent(): boolean;
            public prepareEgl(): boolean;
            public createOffscreenSurface(param0: number, param1: number): javax.microedition.khronos.egl.EGLSurface;
            public addRendererStateListener$sdk_publicRelease(param0: com.mapbox.maps.renderer.RendererSetupErrorListener): void;
            public release(): void;
            public constructor(param0: boolean, param1: number, param2: javax.microedition.khronos.egl.EGLContext);
            public setEglContext$sdk_publicRelease(param0: javax.microedition.khronos.egl.EGLContext): void;
            public swapBuffers(param0: javax.microedition.khronos.egl.EGLSurface): number;
            public getEglNoSurface$sdk_publicRelease(): javax.microedition.khronos.egl.EGLSurface;
            public getEglContext$sdk_publicRelease(): javax.microedition.khronos.egl.EGLContext;
            public clearRendererStateListeners$sdk_publicRelease(): void;
            public createWindowSurface(param0: globalAndroid.view.Surface): javax.microedition.khronos.egl.EGLSurface;
          }
          export module EGLCore {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.renderer.egl.EGLCore.Companion>;
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
      export module renderer {
        export module gl {
          export class GlUtils {
            public static class: java.lang.Class<com.mapbox.maps.renderer.gl.GlUtils>;
            public static INSTANCE: com.mapbox.maps.renderer.gl.GlUtils;
            public toFloatBuffer(param0: androidNative.Array<number>): java.nio.FloatBuffer;
            public checkCompileStatus(param0: number): void;
            public getIdentityMatrix(): androidNative.Array<number>;
            public put(param0: java.nio.FloatBuffer, param1: androidNative.Array<number>): void;
            public loadShader(param0: number, param1: string): number;
            public put(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
            public checkError(param0: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export module gl {
          export class PixelReader {
            public static class: java.lang.Class<com.mapbox.maps.renderer.gl.PixelReader>;
            public getWidth(): number;
            public readPixels(): java.nio.ByteBuffer;
            public getHeight(): number;
            public release(): void;
            public constructor(param0: number, param1: number);
          }
          export module PixelReader {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.renderer.gl.PixelReader.Companion>;
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
      export module renderer {
        export module gl {
          export class TextureRenderer {
            public static class: java.lang.Class<com.mapbox.maps.renderer.gl.TextureRenderer>;
            public static COORDS_PER_VERTEX: number;
            public static COORDS_PER_TEX: number;
            public static BYTES_PER_FLOAT: number;
            public static VERTEX_STRIDE: number;
            public static TEX_STRIDE: number;
            public static VERTEX_COUNT: number;
            public render(param0: number): void;
            public constructor();
            public constructor(param0: number);
            public prepare(): void;
            public release(): void;
          }
          export module TextureRenderer {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.renderer.gl.TextureRenderer.Companion>;
              public getVERTEX_SHADER_CODE(): string;
              public getFRAGMENT_SHADER_CODE(): string;
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
      export module renderer {
        export module widget {
          export class BitmapWidget extends com.mapbox.maps.renderer.widget.Widget {
            public static class: java.lang.Class<com.mapbox.maps.renderer.widget.BitmapWidget>;
            public constructor();
            public updateBitmap(param0: globalAndroid.graphics.Bitmap): void;
            /** @deprecated */
            public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.mapbox.maps.renderer.widget.WidgetPosition, param2: number, param3: number);
            /** @deprecated */
            public setTranslation(param0: number, param1: number): void;
            public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.mapbox.maps.renderer.widget.WidgetPosition);
            public setRotation(param0: number): void;
            public getRenderer$sdk_publicRelease(): com.mapbox.maps.renderer.widget.BitmapWidgetRenderer;
            public setPosition(param0: com.mapbox.maps.renderer.widget.WidgetPosition): void;
            public constructor(param0: globalAndroid.graphics.Bitmap);
            /** @deprecated */
            public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.mapbox.maps.renderer.widget.WidgetPosition, param2: number);
            public getRenderer$sdk_publicRelease(): com.mapbox.maps.renderer.widget.WidgetRenderer;
            public getPosition(): com.mapbox.maps.renderer.widget.WidgetPosition;
            public getRotation(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export module widget {
          export class BitmapWidgetRenderer extends com.mapbox.maps.renderer.widget.WidgetRenderer {
            public static class: java.lang.Class<com.mapbox.maps.renderer.widget.BitmapWidgetRenderer>;
            public static COORDS_PER_VERTEX: number;
            public static BYTES_PER_FLOAT: number;
            public static VERTEX_STRIDE: number;
            public static VERTEX_COUNT: number;
            public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.mapbox.maps.renderer.widget.WidgetPosition);
            public onSurfaceChanged(param0: number, param1: number): void;
            public updateBitmap(param0: globalAndroid.graphics.Bitmap): void;
            public setNeedRender(param0: boolean): void;
            public setRotation(param0: number): void;
            public render(): void;
            public setPosition(param0: com.mapbox.maps.renderer.widget.WidgetPosition): void;
            public getNeedRender(): boolean;
            public prepare(): void;
            public release(): void;
            public getRotation(): number;
            public getPosition(): com.mapbox.maps.renderer.widget.WidgetPosition;
          }
          export module BitmapWidgetRenderer {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.renderer.widget.BitmapWidgetRenderer.Companion>;
              public getVERTEX_SHADER_CODE(): string;
              public getFRAGMENT_SHADER_CODE(): string;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.maps.renderer.widget.BitmapWidgetRenderer.WhenMappings>;
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
      export module renderer {
        export module widget {
          export abstract class Widget {
            public static class: java.lang.Class<com.mapbox.maps.renderer.widget.Widget>;
            public constructor();
            public setRotation(param0: number): void;
            public setPosition(param0: com.mapbox.maps.renderer.widget.WidgetPosition): void;
            public getRenderer$sdk_publicRelease(): com.mapbox.maps.renderer.widget.WidgetRenderer;
            public getPosition(): com.mapbox.maps.renderer.widget.WidgetPosition;
            /** @deprecated */
            public setTranslation(param0: number, param1: number): void;
            public getRotation(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module renderer {
        export module widget {
          export class WidgetPosition {
            public static class: java.lang.Class<com.mapbox.maps.renderer.widget.WidgetPosition>;
            public getOffsetX(): number;
            public getOffsetY(): number;
            public getHorizontalAlignment(): com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal;
            /** @deprecated */
            public constructor(param0: com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal, param1: com.mapbox.maps.renderer.widget.WidgetPosition.Vertical);
            public getVerticalAlignment(): com.mapbox.maps.renderer.widget.WidgetPosition.Vertical;
            public toBuilder(): com.mapbox.maps.renderer.widget.WidgetPosition.Builder;
            public equals(param0: any): boolean;
            public hashCode(): number;
            /** @deprecated */
            public getHorizontal(): com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal;
            public toString(): string;
            /** @deprecated */
            public getVertical(): com.mapbox.maps.renderer.widget.WidgetPosition.Vertical;
          }
          export module WidgetPosition {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.maps.renderer.widget.WidgetPosition.Builder>;
              public constructor();
              public setVerticalAlignment(param0: com.mapbox.maps.renderer.widget.WidgetPosition.Vertical): com.mapbox.maps.renderer.widget.WidgetPosition.Builder;
              public getHorizontalAlignment(): com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal;
              public setHorizontalAlignment(param0: com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal): com.mapbox.maps.renderer.widget.WidgetPosition.Builder;
              public getOffsetY(): number;
              public build(): com.mapbox.maps.renderer.widget.WidgetPosition;
              public getOffsetX(): number;
              public setOffsetX(param0: number): com.mapbox.maps.renderer.widget.WidgetPosition.Builder;
              public setOffsetY(param0: number): com.mapbox.maps.renderer.widget.WidgetPosition.Builder;
              public getVerticalAlignment(): com.mapbox.maps.renderer.widget.WidgetPosition.Vertical;
            }
            export class Horizontal {
              public static class: java.lang.Class<com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal>;
              public static LEFT: com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal;
              public static CENTER: com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal;
              public static RIGHT: com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal;
              public static valueOf(param0: string): com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal;
              public static values(): androidNative.Array<com.mapbox.maps.renderer.widget.WidgetPosition.Horizontal>;
            }
            export class Vertical {
              public static class: java.lang.Class<com.mapbox.maps.renderer.widget.WidgetPosition.Vertical>;
              public static TOP: com.mapbox.maps.renderer.widget.WidgetPosition.Vertical;
              public static CENTER: com.mapbox.maps.renderer.widget.WidgetPosition.Vertical;
              public static BOTTOM: com.mapbox.maps.renderer.widget.WidgetPosition.Vertical;
              public static values(): androidNative.Array<com.mapbox.maps.renderer.widget.WidgetPosition.Vertical>;
              public static valueOf(param0: string): com.mapbox.maps.renderer.widget.WidgetPosition.Vertical;
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
      export module renderer {
        export module widget {
          export class WidgetRenderer {
            public static class: java.lang.Class<com.mapbox.maps.renderer.widget.WidgetRenderer>;
            /**
             * Constructs a new instance of the com.mapbox.maps.renderer.widget.WidgetRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getNeedRender(): boolean; onSurfaceChanged(param0: number, param1: number): void; prepare(): void; render(): void; release(): void; setRotation(param0: number): void; getRotation(): number; setPosition(param0: com.mapbox.maps.renderer.widget.WidgetPosition): void; getPosition(): com.mapbox.maps.renderer.widget.WidgetPosition });
            public constructor();
            public onSurfaceChanged(param0: number, param1: number): void;
            public setRotation(param0: number): void;
            public render(): void;
            public setPosition(param0: com.mapbox.maps.renderer.widget.WidgetPosition): void;
            public getNeedRender(): boolean;
            public prepare(): void;
            public release(): void;
            public getRotation(): number;
            public getPosition(): com.mapbox.maps.renderer.widget.WidgetPosition;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module viewannotation {
        export class OnViewAnnotationUpdatedListener {
          public static class: java.lang.Class<com.mapbox.maps.viewannotation.OnViewAnnotationUpdatedListener>;
          /**
           * Constructs a new instance of the com.mapbox.maps.viewannotation.OnViewAnnotationUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onViewAnnotationPositionUpdated(param0: globalAndroid.view.View, param1: com.mapbox.maps.ScreenCoordinate, param2: number, param3: number): void; onViewAnnotationVisibilityUpdated(param0: globalAndroid.view.View, param1: boolean): void });
          public constructor();
          public onViewAnnotationVisibilityUpdated(param0: globalAndroid.view.View, param1: boolean): void;
          public onViewAnnotationPositionUpdated(param0: globalAndroid.view.View, param1: com.mapbox.maps.ScreenCoordinate, param2: number, param3: number): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module viewannotation {
        export class ViewAnnotation {
          public static class: java.lang.Class<com.mapbox.maps.viewannotation.ViewAnnotation>;
          public getView(): globalAndroid.view.View;
          public setMeasuredHeight(param0: number): void;
          public getId(): string;
          public getMeasuredHeight(): number;
          public getViewLayoutParams(): globalAndroid.widget.FrameLayout.LayoutParams;
          public component7(): number;
          public getHandleVisibilityAutomatically(): boolean;
          public toString(): string;
          public copy(param0: globalAndroid.view.View, param1: globalAndroid.view.View.OnAttachStateChangeListener, param2: boolean, param3: com.mapbox.maps.viewannotation.ViewAnnotationVisibility, param4: globalAndroid.widget.FrameLayout.LayoutParams, param5: number, param6: number): com.mapbox.maps.viewannotation.ViewAnnotation;
          public getVisibility(): com.mapbox.maps.viewannotation.ViewAnnotationVisibility;
          public component5(): globalAndroid.widget.FrameLayout.LayoutParams;
          public getAttachStateListener(): globalAndroid.view.View.OnAttachStateChangeListener;
          public setVisibility(param0: com.mapbox.maps.viewannotation.ViewAnnotationVisibility): void;
          public hashCode(): number;
          public setMeasuredWidth(param0: number): void;
          public constructor(param0: globalAndroid.view.View, param1: globalAndroid.view.View.OnAttachStateChangeListener, param2: boolean, param3: com.mapbox.maps.viewannotation.ViewAnnotationVisibility, param4: globalAndroid.widget.FrameLayout.LayoutParams, param5: number, param6: number);
          public component2(): globalAndroid.view.View.OnAttachStateChangeListener;
          public component1(): globalAndroid.view.View;
          public component4(): com.mapbox.maps.viewannotation.ViewAnnotationVisibility;
          public setHandleVisibilityAutomatically(param0: boolean): void;
          public setAttachStateListener(param0: globalAndroid.view.View.OnAttachStateChangeListener): void;
          public equals(param0: any): boolean;
          public getMeasuredWidth(): number;
          public component6(): number;
          public isVisible(): boolean;
          public component3(): boolean;
          public setViewLayoutParams(param0: globalAndroid.widget.FrameLayout.LayoutParams): void;
        }
        export module ViewAnnotation {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.viewannotation.ViewAnnotation.Companion>;
            public getUSER_FIXED_DIMENSION$sdk_publicRelease(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module viewannotation {
        export class ViewAnnotationManager {
          public static class: java.lang.Class<com.mapbox.maps.viewannotation.ViewAnnotationManager>;
          /**
           * Constructs a new instance of the com.mapbox.maps.viewannotation.ViewAnnotationManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            addViewAnnotation(param0: number, param1: com.mapbox.maps.ViewAnnotationOptions): globalAndroid.view.View;
            addViewAnnotation(param0: number, param1: com.mapbox.maps.ViewAnnotationOptions, param2: androidx.asynclayoutinflater.view.AsyncLayoutInflater, param3: any): void;
            addViewAnnotation(param0: globalAndroid.view.View, param1: com.mapbox.maps.ViewAnnotationOptions): void;
            removeViewAnnotation(param0: globalAndroid.view.View): boolean;
            removeAllViewAnnotations(): void;
            updateViewAnnotation(param0: globalAndroid.view.View, param1: com.mapbox.maps.ViewAnnotationOptions): boolean;
            getViewAnnotationByFeatureId(param0: string): globalAndroid.view.View;
            getViewAnnotationOptionsByFeatureId(param0: string): com.mapbox.maps.ViewAnnotationOptions;
            getViewAnnotationOptionsByView(param0: globalAndroid.view.View): com.mapbox.maps.ViewAnnotationOptions;
            addOnViewAnnotationUpdatedListener(param0: com.mapbox.maps.viewannotation.OnViewAnnotationUpdatedListener): void;
            removeOnViewAnnotationUpdatedListener(param0: com.mapbox.maps.viewannotation.OnViewAnnotationUpdatedListener): void;
            setViewAnnotationUpdateMode(param0: com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode): void;
            getViewAnnotationUpdateMode(): com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode;
            getAnnotations(): java.util.Map<globalAndroid.view.View, com.mapbox.maps.ViewAnnotationOptions>;
            cameraForAnnotations(param0: java.util.List<any>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
            <clinit>(): void;
          });
          public constructor();
          public static DEFAULT_UPDATE_MODE: com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode;
          public addOnViewAnnotationUpdatedListener(param0: com.mapbox.maps.viewannotation.OnViewAnnotationUpdatedListener): void;
          public getViewAnnotationOptionsByFeatureId(param0: string): com.mapbox.maps.ViewAnnotationOptions;
          public getViewAnnotationUpdateMode(): com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode;
          public getAnnotations(): java.util.Map<globalAndroid.view.View, com.mapbox.maps.ViewAnnotationOptions>;
          public removeOnViewAnnotationUpdatedListener(param0: com.mapbox.maps.viewannotation.OnViewAnnotationUpdatedListener): void;
          public getViewAnnotationOptionsByView(param0: globalAndroid.view.View): com.mapbox.maps.ViewAnnotationOptions;
          public cameraForAnnotations(param0: java.util.List<any>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
          public addViewAnnotation(param0: number, param1: com.mapbox.maps.ViewAnnotationOptions, param2: androidx.asynclayoutinflater.view.AsyncLayoutInflater, param3: any): void;
          public removeViewAnnotation(param0: globalAndroid.view.View): boolean;
          public updateViewAnnotation(param0: globalAndroid.view.View, param1: com.mapbox.maps.ViewAnnotationOptions): boolean;
          public addViewAnnotation(param0: number, param1: com.mapbox.maps.ViewAnnotationOptions): globalAndroid.view.View;
          public addViewAnnotation(param0: globalAndroid.view.View, param1: com.mapbox.maps.ViewAnnotationOptions): void;
          public removeAllViewAnnotations(): void;
          public getViewAnnotationByFeatureId(param0: string): globalAndroid.view.View;
          public setViewAnnotationUpdateMode(param0: com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode): void;
        }
        export module ViewAnnotationManager {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.viewannotation.ViewAnnotationManager.Companion>;
          }
          export class DefaultImpls {
            public static class: java.lang.Class<com.mapbox.maps.viewannotation.ViewAnnotationManager.DefaultImpls>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module viewannotation {
        export class ViewAnnotationUpdateMode {
          public static class: java.lang.Class<com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode>;
          public static MAP_FIXED_DELAY: com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode;
          public static MAP_SYNCHRONIZED: com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
        export module ViewAnnotationUpdateMode {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.viewannotation.ViewAnnotationUpdateMode.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module viewannotation {
        export class ViewAnnotationVisibility {
          public static class: java.lang.Class<com.mapbox.maps.viewannotation.ViewAnnotationVisibility>;
          public static INITIAL: com.mapbox.maps.viewannotation.ViewAnnotationVisibility;
          public static VISIBLE_AND_NOT_POSITIONED: com.mapbox.maps.viewannotation.ViewAnnotationVisibility;
          public static VISIBLE_AND_POSITIONED: com.mapbox.maps.viewannotation.ViewAnnotationVisibility;
          public static INVISIBLE: com.mapbox.maps.viewannotation.ViewAnnotationVisibility;
          public static valueOf(param0: string): com.mapbox.maps.viewannotation.ViewAnnotationVisibility;
          public static values(): androidNative.Array<com.mapbox.maps.viewannotation.ViewAnnotationVisibility>;
        }
      }
    }
  }
}

//Generics information:
