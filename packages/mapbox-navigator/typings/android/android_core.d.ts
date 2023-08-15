/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export class AsyncOperationResultCallback {
        public static class: java.lang.Class<com.mapbox.maps.AsyncOperationResultCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.AsyncOperationResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class AsyncOperationResultCallbackNative extends com.mapbox.maps.AsyncOperationResultCallback {
        public static class: java.lang.Class<com.mapbox.maps.AsyncOperationResultCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>): void;
      }
      export module AsyncOperationResultCallbackNative {
        export class AsyncOperationResultCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.AsyncOperationResultCallbackNative.AsyncOperationResultCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CameraBounds {
        public static class: java.lang.Class<com.mapbox.maps.CameraBounds>;
        public getMinPitch(): number;
        public hashCode(): number;
        public getBounds(): com.mapbox.maps.CoordinateBounds;
        public equals(param0: any): boolean;
        public constructor(param0: com.mapbox.maps.CoordinateBounds, param1: number, param2: number, param3: number, param4: number);
        public toString(): string;
        public getMaxZoom(): number;
        public getMaxPitch(): number;
        public getMinZoom(): number;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CameraBoundsOptions {
        public static class: java.lang.Class<com.mapbox.maps.CameraBoundsOptions>;
        public getMinZoom(): java.lang.Double;
        public getMaxPitch(): java.lang.Double;
        public getMinPitch(): java.lang.Double;
        public hashCode(): number;
        public getBounds(): com.mapbox.maps.CoordinateBounds;
        public equals(param0: any): boolean;
        public getMaxZoom(): java.lang.Double;
        public toBuilder(): com.mapbox.maps.CameraBoundsOptions.Builder;
        public toString(): string;
      }
      export module CameraBoundsOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.CameraBoundsOptions.Builder>;
          public constructor();
          public maxPitch(param0: java.lang.Double): com.mapbox.maps.CameraBoundsOptions.Builder;
          public minPitch(param0: java.lang.Double): com.mapbox.maps.CameraBoundsOptions.Builder;
          public maxZoom(param0: java.lang.Double): com.mapbox.maps.CameraBoundsOptions.Builder;
          public minZoom(param0: java.lang.Double): com.mapbox.maps.CameraBoundsOptions.Builder;
          public build(): com.mapbox.maps.CameraBoundsOptions;
          public bounds(param0: com.mapbox.maps.CoordinateBounds): com.mapbox.maps.CameraBoundsOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CameraManager extends com.mapbox.maps.StyleManager implements com.mapbox.maps.CameraManagerInterface {
        public static class: java.lang.Class<com.mapbox.maps.CameraManager>;
        public getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
        public isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
        public getStyleImage(param0: string): com.mapbox.maps.Image;
        public hasStyleModel(param0: string): boolean;
        public isStyleLoaded(): boolean;
        public cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public getStyleURI(): string;
        public getCameraState(): com.mapbox.maps.CameraState;
        public removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setCamera(param0: com.mapbox.maps.CameraOptions): void;
        public setStyleURI(param0: string): void;
        public getRenderWorldCopies(): boolean;
        public addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        public addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
        public setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
        public removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public cameraForGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public styleSourceExists(param0: string): boolean;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public styleLayerExists(param0: string): boolean;
        public getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getBounds(): com.mapbox.maps.CameraBounds;
        public coordinatesInfoForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.maps.CoordinateInfo>;
        public getFreeCameraOptions(): com.mapbox.maps.FreeCameraOptions;
        public getStyleTransition(): com.mapbox.maps.TransitionOptions;
        public setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
        public setStyleJSON(param0: string): void;
        public hasStyleImage(param0: string): boolean;
        public coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public setStyleLightProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addPersistentStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleJSON(): string;
        public pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
        public setStyleGeoJSONSourceData(param0: string, param1: string, param2: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleCustomGeometrySourceTileData(param0: string, param1: com.mapbox.maps.CanonicalTileID, param2: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
        /** @deprecated */
        public setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
        public getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
        public getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setRenderWorldCopies(param0: boolean): void;
        public addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
        public setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
        public getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public static cleanNativePeer(param0: number): void;
        public updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public constructor(param0: number);
        public invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public dragEnd(): void;
        public addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
      }
      export module CameraManager {
        export class CameraManagerPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.CameraManager.CameraManagerPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CameraManagerInterface extends com.mapbox.maps.StyleManagerInterface {
        public static class: java.lang.Class<com.mapbox.maps.CameraManagerInterface>;
        /**
         * Constructs a new instance of the com.mapbox.maps.CameraManagerInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
          cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
          cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
          cameraForGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
          coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
          coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
          coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
          coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
          pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
          coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
          coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
          pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
          coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
          coordinatesInfoForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.maps.CoordinateInfo>;
          setCamera(param0: com.mapbox.maps.CameraOptions): void;
          getCameraState(): com.mapbox.maps.CameraState;
          setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
          getFreeCameraOptions(): com.mapbox.maps.FreeCameraOptions;
          setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getBounds(): com.mapbox.maps.CameraBounds;
          setRenderWorldCopies(param0: boolean): void;
          getRenderWorldCopies(): boolean;
          dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
          getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
          dragEnd(): void;
          tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
          getStyleURI(): string;
          setStyleURI(param0: string): void;
          getStyleJSON(): string;
          setStyleJSON(param0: string): void;
          getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
          getStyleTransition(): com.mapbox.maps.TransitionOptions;
          setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
          addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addPersistentStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
          removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          styleLayerExists(param0: string): boolean;
          getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
          setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
          setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleGeoJSONSourceData(param0: string, param1: string, param2: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          styleSourceExists(param0: string): boolean;
          getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleLightProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleImage(param0: string): com.mapbox.maps.Image;
          addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          hasStyleImage(param0: string): boolean;
          addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          hasStyleModel(param0: string): boolean;
          addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleCustomGeometrySourceTileData(param0: string, param1: com.mapbox.maps.CanonicalTileID, param2: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          isStyleLoaded(): boolean;
          subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
          unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
          unsubscribe(param0: com.mapbox.maps.Observer): void;
        });
        public constructor();
        public getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
        public isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
        public getStyleImage(param0: string): com.mapbox.maps.Image;
        public hasStyleModel(param0: string): boolean;
        public isStyleLoaded(): boolean;
        public cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public getStyleURI(): string;
        public getCameraState(): com.mapbox.maps.CameraState;
        public removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setCamera(param0: com.mapbox.maps.CameraOptions): void;
        public setStyleURI(param0: string): void;
        public getRenderWorldCopies(): boolean;
        public addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        public addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
        public setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
        public removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public cameraForGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public styleSourceExists(param0: string): boolean;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public styleLayerExists(param0: string): boolean;
        public getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getBounds(): com.mapbox.maps.CameraBounds;
        public coordinatesInfoForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.maps.CoordinateInfo>;
        public getFreeCameraOptions(): com.mapbox.maps.FreeCameraOptions;
        public getStyleTransition(): com.mapbox.maps.TransitionOptions;
        public setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
        public setStyleJSON(param0: string): void;
        public hasStyleImage(param0: string): boolean;
        public coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public setStyleLightProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addPersistentStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleJSON(): string;
        public pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
        public setStyleGeoJSONSourceData(param0: string, param1: string, param2: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleCustomGeometrySourceTileData(param0: string, param1: com.mapbox.maps.CanonicalTileID, param2: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
        /** @deprecated */
        public setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
        public getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
        public getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setRenderWorldCopies(param0: boolean): void;
        public addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
        public setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
        public getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public dragEnd(): void;
        public addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CameraOptions {
        public static class: java.lang.Class<com.mapbox.maps.CameraOptions>;
        public getAnchor(): com.mapbox.maps.ScreenCoordinate;
        public getPitch(): java.lang.Double;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getBearing(): java.lang.Double;
        public getCenter(): com.mapbox.geojson.Point;
        public getZoom(): java.lang.Double;
        public toString(): string;
        public getPadding(): com.mapbox.maps.EdgeInsets;
        public toBuilder(): com.mapbox.maps.CameraOptions.Builder;
      }
      export module CameraOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.CameraOptions.Builder>;
          public bearing(param0: java.lang.Double): com.mapbox.maps.CameraOptions.Builder;
          public zoom(param0: java.lang.Double): com.mapbox.maps.CameraOptions.Builder;
          public constructor();
          public padding(param0: com.mapbox.maps.EdgeInsets): com.mapbox.maps.CameraOptions.Builder;
          public center(param0: com.mapbox.geojson.Point): com.mapbox.maps.CameraOptions.Builder;
          public pitch(param0: java.lang.Double): com.mapbox.maps.CameraOptions.Builder;
          public anchor(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions.Builder;
          public build(): com.mapbox.maps.CameraOptions;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CameraState {
        public static class: java.lang.Class<com.mapbox.maps.CameraState>;
        public getBearing(): number;
        public getZoom(): number;
        public hashCode(): number;
        public getPitch(): number;
        public equals(param0: any): boolean;
        public getCenter(): com.mapbox.geojson.Point;
        public toString(): string;
        public constructor(param0: com.mapbox.geojson.Point, param1: com.mapbox.maps.EdgeInsets, param2: number, param3: number, param4: number);
        public getPadding(): com.mapbox.maps.EdgeInsets;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CancelTileFunctionCallback {
        public static class: java.lang.Class<com.mapbox.maps.CancelTileFunctionCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.CancelTileFunctionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.maps.CanonicalTileID): void });
        public constructor();
        public run(param0: com.mapbox.maps.CanonicalTileID): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CancelTileFunctionCallbackNative extends com.mapbox.maps.CancelTileFunctionCallback {
        public static class: java.lang.Class<com.mapbox.maps.CancelTileFunctionCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.maps.CanonicalTileID): void;
      }
      export module CancelTileFunctionCallbackNative {
        export class CancelTileFunctionCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.CancelTileFunctionCallbackNative.CancelTileFunctionCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CanonicalTileID {
        public static class: java.lang.Class<com.mapbox.maps.CanonicalTileID>;
        public constructor(param0: number, param1: number, param2: number);
        public getX(): number;
        public hashCode(): number;
        public getY(): number;
        public getZ(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ConstrainMode {
        public static class: java.lang.Class<com.mapbox.maps.ConstrainMode>;
        public static NONE: com.mapbox.maps.ConstrainMode;
        public static HEIGHT_ONLY: com.mapbox.maps.ConstrainMode;
        public static WIDTH_AND_HEIGHT: com.mapbox.maps.ConstrainMode;
        public static values(): androidNative.Array<com.mapbox.maps.ConstrainMode>;
        public static valueOf(param0: string): com.mapbox.maps.ConstrainMode;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ContextMode {
        public static class: java.lang.Class<com.mapbox.maps.ContextMode>;
        public static UNIQUE: com.mapbox.maps.ContextMode;
        public static SHARED: com.mapbox.maps.ContextMode;
        public static valueOf(param0: string): com.mapbox.maps.ContextMode;
        public static values(): androidNative.Array<com.mapbox.maps.ContextMode>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CoordinateBounds {
        public static class: java.lang.Class<com.mapbox.maps.CoordinateBounds>;
        public isBounded(): boolean;
        public northwest(): com.mapbox.geojson.Point;
        public latitudeSpan(): number;
        public southeast(): com.mapbox.geojson.Point;
        public constructor(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point);
        public north(): number;
        public south(): number;
        public static world(): com.mapbox.maps.CoordinateBounds;
        public extend(param0: com.mapbox.geojson.Point): com.mapbox.maps.CoordinateBounds;
        public contains(param0: com.mapbox.maps.CoordinateBounds, param1: boolean): boolean;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public static singleton(param0: com.mapbox.geojson.Point): com.mapbox.maps.CoordinateBounds;
        public isEmpty(): boolean;
        public west(): number;
        public static hull(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point): com.mapbox.maps.CoordinateBounds;
        public intersects(param0: com.mapbox.maps.CoordinateBounds, param1: boolean): boolean;
        public crossesAntimeridian(): boolean;
        public constrain(param0: com.mapbox.geojson.Point): com.mapbox.geojson.Point;
        public longitudeSpan(): number;
        public isValid(): boolean;
        public toString(): string;
        public center(): com.mapbox.geojson.Point;
        public contains(param0: com.mapbox.geojson.Point, param1: boolean): boolean;
        public getInfiniteBounds(): boolean;
        public east(): number;
        public getSouthwest(): com.mapbox.geojson.Point;
        public extend(param0: com.mapbox.maps.CoordinateBounds): com.mapbox.maps.CoordinateBounds;
        public getNortheast(): com.mapbox.geojson.Point;
        public containsLatitude(param0: number): boolean;
        public constructor(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point, param2: boolean);
        public containsLongitude(param0: number): boolean;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CoordinateBoundsZoom {
        public static class: java.lang.Class<com.mapbox.maps.CoordinateBoundsZoom>;
        public constructor(param0: com.mapbox.maps.CoordinateBounds, param1: number);
        public getZoom(): number;
        public hashCode(): number;
        public getBounds(): com.mapbox.maps.CoordinateBounds;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CoordinateInfo {
        public static class: java.lang.Class<com.mapbox.maps.CoordinateInfo>;
        public hashCode(): number;
        public constructor(param0: com.mapbox.geojson.Point, param1: boolean);
        public equals(param0: any): boolean;
        public getCoordinate(): com.mapbox.geojson.Point;
        public getIsOnSurface(): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CustomGeometrySourceOptions {
        public static class: java.lang.Class<com.mapbox.maps.CustomGeometrySourceOptions>;
        public getCancelTileFunction(): com.mapbox.maps.CancelTileFunctionCallback;
        public hashCode(): number;
        public getFetchTileFunction(): com.mapbox.maps.FetchTileFunctionCallback;
        public equals(param0: any): boolean;
        public toString(): string;
        public getMaxZoom(): number;
        public getTileOptions(): com.mapbox.maps.TileOptions;
        public toBuilder(): com.mapbox.maps.CustomGeometrySourceOptions.Builder;
        public getMinZoom(): number;
      }
      export module CustomGeometrySourceOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.CustomGeometrySourceOptions.Builder>;
          public cancelTileFunction(param0: com.mapbox.maps.CancelTileFunctionCallback): com.mapbox.maps.CustomGeometrySourceOptions.Builder;
          public constructor();
          public tileOptions(param0: com.mapbox.maps.TileOptions): com.mapbox.maps.CustomGeometrySourceOptions.Builder;
          public minZoom(param0: number): com.mapbox.maps.CustomGeometrySourceOptions.Builder;
          public build(): com.mapbox.maps.CustomGeometrySourceOptions;
          public maxZoom(param0: number): com.mapbox.maps.CustomGeometrySourceOptions.Builder;
          public fetchTileFunction(param0: com.mapbox.maps.FetchTileFunctionCallback): com.mapbox.maps.CustomGeometrySourceOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CustomLayerHost {
        public static class: java.lang.Class<com.mapbox.maps.CustomLayerHost>;
        /**
         * Constructs a new instance of the com.mapbox.maps.CustomLayerHost interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { initialize(): void; prerender(param0: com.mapbox.maps.CustomLayerRenderParameters): com.mapbox.maps.CustomLayerRenderConfiguration; render(param0: com.mapbox.maps.CustomLayerRenderParameters): void; renderToTile(param0: com.mapbox.maps.CanonicalTileID): void; contextLost(): void; deinitialize(): void });
        public constructor();
        public contextLost(): void;
        public deinitialize(): void;
        public initialize(): void;
        public renderToTile(param0: com.mapbox.maps.CanonicalTileID): void;
        public render(param0: com.mapbox.maps.CustomLayerRenderParameters): void;
        public prerender(param0: com.mapbox.maps.CustomLayerRenderParameters): com.mapbox.maps.CustomLayerRenderConfiguration;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CustomLayerHostNative extends com.mapbox.maps.CustomLayerHost {
        public static class: java.lang.Class<com.mapbox.maps.CustomLayerHostNative>;
        public peer: number;
        public contextLost(): void;
        public deinitialize(): void;
        public initialize(): void;
        public static cleanNativePeer(param0: number): void;
        public renderToTile(param0: com.mapbox.maps.CanonicalTileID): void;
        public constructor(param0: number);
        public render(param0: com.mapbox.maps.CustomLayerRenderParameters): void;
        public prerender(param0: com.mapbox.maps.CustomLayerRenderParameters): com.mapbox.maps.CustomLayerRenderConfiguration;
      }
      export module CustomLayerHostNative {
        export class CustomLayerHostPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.CustomLayerHostNative.CustomLayerHostPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CustomLayerRenderConfiguration {
        public static class: java.lang.Class<com.mapbox.maps.CustomLayerRenderConfiguration>;
        public getShouldRerenderTiles(): boolean;
        public toBuilder(): com.mapbox.maps.CustomLayerRenderConfiguration.Builder;
        public hashCode(): number;
        public getIsRenderToTileSupported(): boolean;
        public equals(param0: any): boolean;
        public toString(): string;
      }
      export module CustomLayerRenderConfiguration {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.CustomLayerRenderConfiguration.Builder>;
          public constructor();
          public shouldRerenderTiles(param0: boolean): com.mapbox.maps.CustomLayerRenderConfiguration.Builder;
          public build(): com.mapbox.maps.CustomLayerRenderConfiguration;
          public isRenderToTileSupported(param0: boolean): com.mapbox.maps.CustomLayerRenderConfiguration.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class CustomLayerRenderParameters {
        public static class: java.lang.Class<com.mapbox.maps.CustomLayerRenderParameters>;
        public getHeight(): number;
        public getBearing(): number;
        public getRenderToTilesIDs(): java.util.List<com.mapbox.maps.CanonicalTileID>;
        public getZoom(): number;
        public getPitch(): number;
        public toString(): string;
        public getWidth(): number;
        public getLatitude(): number;
        public hashCode(): number;
        /** @deprecated */
        public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: java.util.List<java.lang.Double>, param9: com.mapbox.maps.ElevationData);
        public equals(param0: any): boolean;
        public getLongitude(): number;
        public getFieldOfView(): number;
        public getProjectionMatrix(): java.util.List<java.lang.Double>;
        public getElevationData(): com.mapbox.maps.ElevationData;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class EdgeInsets {
        public static class: java.lang.Class<com.mapbox.maps.EdgeInsets>;
        public getTop(): number;
        public constructor(param0: number, param1: number, param2: number, param3: number);
        public getLeft(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getBottom(): number;
        public getRight(): number;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ElevationData {
        public static class: java.lang.Class<com.mapbox.maps.ElevationData>;
        /**
         * Constructs a new instance of the com.mapbox.maps.ElevationData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getElevation(param0: com.mapbox.geojson.Point): java.lang.Double; getTerrainExaggeration(): number });
        public constructor();
        public getElevation(param0: com.mapbox.geojson.Point): java.lang.Double;
        public getTerrainExaggeration(): number;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ElevationDataNative extends com.mapbox.maps.ElevationData {
        public static class: java.lang.Class<com.mapbox.maps.ElevationDataNative>;
        public peer: number;
        public getElevation(param0: com.mapbox.geojson.Point): java.lang.Double;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public getTerrainExaggeration(): number;
      }
      export module ElevationDataNative {
        export class ElevationDataPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.ElevationDataNative.ElevationDataPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Event {
        public static class: java.lang.Class<com.mapbox.maps.Event>;
        public getType(): string;
        public constructor(param0: string, param1: com.mapbox.bindgen.Value);
        public getData(): com.mapbox.bindgen.Value;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class FeatureExtensionValue {
        public static class: java.lang.Class<com.mapbox.maps.FeatureExtensionValue>;
        public getValue(): com.mapbox.bindgen.Value;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public constructor(param0: com.mapbox.bindgen.Value, param1: java.util.List<com.mapbox.geojson.Feature>);
        public getFeatureCollection(): java.util.List<com.mapbox.geojson.Feature>;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class FetchTileFunctionCallback {
        public static class: java.lang.Class<com.mapbox.maps.FetchTileFunctionCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.FetchTileFunctionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.maps.CanonicalTileID): void });
        public constructor();
        public run(param0: com.mapbox.maps.CanonicalTileID): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class FetchTileFunctionCallbackNative extends com.mapbox.maps.FetchTileFunctionCallback {
        public static class: java.lang.Class<com.mapbox.maps.FetchTileFunctionCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.maps.CanonicalTileID): void;
      }
      export module FetchTileFunctionCallbackNative {
        export class FetchTileFunctionCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.FetchTileFunctionCallbackNative.FetchTileFunctionCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class FreeCameraOptions {
        public static class: java.lang.Class<com.mapbox.maps.FreeCameraOptions>;
        public peer: number;
        public setPosition(param0: com.mapbox.maps.Vec3): void;
        public setPitchBearing(param0: number, param1: number): void;
        public getOrientation(): com.mapbox.maps.Vec4;
        public lookAtPoint(param0: com.mapbox.geojson.Point, param1: number): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public lookAtPoint(param0: com.mapbox.geojson.Point, param1: number, param2: com.mapbox.maps.Vec3): void;
        public setLocation(param0: com.mapbox.geojson.Point, param1: number): void;
        public lookAtPoint(param0: com.mapbox.geojson.Point): void;
        public getPosition(): com.mapbox.maps.Vec3;
        public setOrientation(param0: com.mapbox.maps.Vec4): void;
      }
      export module FreeCameraOptions {
        export class FreeCameraOptionsPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.FreeCameraOptions.FreeCameraOptionsPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class GeoJSONSourceData {
        public static class: java.lang.Class<com.mapbox.maps.GeoJSONSourceData>;
        public getList(): java.util.List<com.mapbox.geojson.Feature>;
        public getString(): string;
        public isList(): boolean;
        public getGeometry(): com.mapbox.geojson.Geometry;
        public static valueOf(param0: string): com.mapbox.maps.GeoJSONSourceData;
        public isGeometry(): boolean;
        public isFeature(): boolean;
        public constructor(param0: com.mapbox.geojson.Geometry);
        public constructor(param0: com.mapbox.geojson.Feature);
        public getTypeInfo(): com.mapbox.maps.GeoJSONSourceData.Type;
        public constructor(param0: string);
        public static valueOf(param0: com.mapbox.geojson.Geometry): com.mapbox.maps.GeoJSONSourceData;
        public constructor(param0: java.util.List<com.mapbox.geojson.Feature>);
        public getFeature(): com.mapbox.geojson.Feature;
        public isString(): boolean;
        public static valueOf(param0: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.maps.GeoJSONSourceData;
        public static valueOf(param0: com.mapbox.geojson.Feature): com.mapbox.maps.GeoJSONSourceData;
      }
      export module GeoJSONSourceData {
        export class Type {
          public static class: java.lang.Class<com.mapbox.maps.GeoJSONSourceData.Type>;
          public static GEOMETRY: com.mapbox.maps.GeoJSONSourceData.Type;
          public static FEATURE: com.mapbox.maps.GeoJSONSourceData.Type;
          public static LIST: com.mapbox.maps.GeoJSONSourceData.Type;
          public static STRING: com.mapbox.maps.GeoJSONSourceData.Type;
          public static values(): androidNative.Array<com.mapbox.maps.GeoJSONSourceData.Type>;
          public static valueOf(param0: string): com.mapbox.maps.GeoJSONSourceData.Type;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class GlyphsRasterizationMode {
        public static class: java.lang.Class<com.mapbox.maps.GlyphsRasterizationMode>;
        public static NO_GLYPHS_RASTERIZED_LOCALLY: com.mapbox.maps.GlyphsRasterizationMode;
        public static IDEOGRAPHS_RASTERIZED_LOCALLY: com.mapbox.maps.GlyphsRasterizationMode;
        public static ALL_GLYPHS_RASTERIZED_LOCALLY: com.mapbox.maps.GlyphsRasterizationMode;
        public static valueOf(param0: string): com.mapbox.maps.GlyphsRasterizationMode;
        public static values(): androidNative.Array<com.mapbox.maps.GlyphsRasterizationMode>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class GlyphsRasterizationOptions {
        public static class: java.lang.Class<com.mapbox.maps.GlyphsRasterizationOptions>;
        public getRasterizationMode(): com.mapbox.maps.GlyphsRasterizationMode;
        public toBuilder(): com.mapbox.maps.GlyphsRasterizationOptions.Builder;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
        public getFontFamily(): string;
      }
      export module GlyphsRasterizationOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.GlyphsRasterizationOptions.Builder>;
          public rasterizationMode(param0: com.mapbox.maps.GlyphsRasterizationMode): com.mapbox.maps.GlyphsRasterizationOptions.Builder;
          public fontFamily(param0: string): com.mapbox.maps.GlyphsRasterizationOptions.Builder;
          public constructor();
          public build(): com.mapbox.maps.GlyphsRasterizationOptions;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Image {
        public static class: java.lang.Class<com.mapbox.maps.Image>;
        public getWidth(): number;
        public getHeight(): number;
        public hashCode(): number;
        public getData(): androidNative.Array<number>;
        public equals(param0: any): boolean;
        public constructor(param0: number, param1: number, param2: androidNative.Array<number>);
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ImageContent {
        public static class: java.lang.Class<com.mapbox.maps.ImageContent>;
        public getTop(): number;
        public constructor(param0: number, param1: number, param2: number, param3: number);
        public getLeft(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getBottom(): number;
        public getRight(): number;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ImageStretches {
        public static class: java.lang.Class<com.mapbox.maps.ImageStretches>;
        public constructor(param0: number, param1: number);
        public getFirst(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
        public getSecond(): number;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class LayerPosition {
        public static class: java.lang.Class<com.mapbox.maps.LayerPosition>;
        public getAt(): java.lang.Integer;
        public constructor(param0: string, param1: string, param2: java.lang.Integer);
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getBelow(): string;
        public toString(): string;
        public getAbove(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Map extends com.mapbox.maps.CameraManager implements com.mapbox.maps.MapInterface {
        public static class: java.lang.Class<com.mapbox.maps.Map>;
        public getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public setNorthOrientation(param0: com.mapbox.maps.NorthOrientation): void;
        public moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public querySourceFeatures(param0: string, param1: com.mapbox.maps.SourceQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
        public setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
        public queryFeatureExtensions(param0: string, param1: com.mapbox.geojson.Feature, param2: string, param3: string, param4: java.util.HashMap<string, com.mapbox.bindgen.Value>, param5: com.mapbox.maps.QueryFeatureExtensionCallback): void;
        public hasStyleModel(param0: string): boolean;
        public isStyleLoaded(): boolean;
        public setDebug(param0: java.util.List<com.mapbox.maps.MapDebugOptions>, param1: boolean): void;
        public cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public getStyleURI(): string;
        public getCameraState(): com.mapbox.maps.CameraState;
        public isUserAnimationInProgress(): boolean;
        public getRenderCacheOptions(): com.mapbox.maps.RenderCacheOptions;
        public getMapOptions(): com.mapbox.maps.MapOptions;
        public setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setUserAnimationInProgress(param0: boolean): void;
        public setCamera(param0: com.mapbox.maps.CameraOptions): void;
        public getRenderWorldCopies(): boolean;
        public addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        public getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
        public removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeViewAnnotation(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public updateViewAnnotation(param0: string, param1: com.mapbox.maps.ViewAnnotationOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        /** @deprecated */
        public queryRenderedFeatures(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
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
        /** @deprecated */
        public isMapLoaded(): boolean;
        public addViewAnnotation(param0: string, param1: com.mapbox.maps.ViewAnnotationOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleJSON(): string;
        public pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
        /** @deprecated */
        public setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public render(): void;
        public getViewAnnotationOptions(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.maps.ViewAnnotationOptions>;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public queryRenderedFeatures(param0: com.mapbox.maps.RenderedQueryGeometry, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): com.mapbox.common.Cancelable;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public getPrefetchZoomDelta(): number;
        public coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
        public getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setSize(param0: com.mapbox.maps.Size): void;
        public setGestureInProgress(param0: boolean): void;
        public static cleanNativePeer(param0: number): void;
        public updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public constructor(param0: number);
        public invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getElevation(param0: com.mapbox.geojson.Point): java.lang.Double;
        public setMemoryBudget(param0: com.mapbox.maps.MapMemoryBudget): void;
        public getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public static clearData(param0: com.mapbox.maps.ResourceOptions, param1: com.mapbox.maps.AsyncOperationResultCallback): void;
        public getStyleImage(param0: string): com.mapbox.maps.Image;
        public setViewAnnotationPositionsUpdateListener(param0: com.mapbox.maps.ViewAnnotationPositionsUpdateListener): void;
        /** @deprecated */
        public queryRenderedFeatures(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public getDebug(): java.util.List<com.mapbox.maps.MapDebugOptions>;
        public setRenderCacheOptions(param0: com.mapbox.maps.RenderCacheOptions): void;
        public coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public getResourceOptions(): com.mapbox.maps.ResourceOptions;
        public removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public constructor(param0: com.mapbox.maps.MapClient, param1: com.mapbox.maps.MapOptions, param2: com.mapbox.maps.ResourceOptions);
        public removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public isGestureInProgress(): boolean;
        public getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setFeatureState(param0: string, param1: string, param2: string, param3: com.mapbox.bindgen.Value): void;
        public setStyleURI(param0: string): void;
        public addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setConstrainMode(param0: com.mapbox.maps.ConstrainMode): void;
        public getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
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
        public reduceMemoryUse(): void;
        public setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
        public getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setViewportMode(param0: com.mapbox.maps.ViewportMode): void;
        public getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
        public getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setRenderWorldCopies(param0: boolean): void;
        public addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeFeatureState(param0: string, param1: string, param2: string, param3: string): void;
        public setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public createRenderer(): void;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
        public setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        /** @deprecated */
        public queryRenderedFeatures(param0: com.mapbox.maps.ScreenBox, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getSize(): com.mapbox.maps.Size;
        public dragEnd(): void;
      }
      export module Map {
        export class MapPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.Map.MapPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapClient {
        public static class: java.lang.Class<com.mapbox.maps.MapClient>;
        /**
         * Constructs a new instance of the com.mapbox.maps.MapClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { scheduleRepaint(): void; scheduleTask(param0: com.mapbox.maps.Task): void });
        public constructor();
        public scheduleTask(param0: com.mapbox.maps.Task): void;
        public scheduleRepaint(): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapClientNative extends com.mapbox.maps.MapClient {
        public static class: java.lang.Class<com.mapbox.maps.MapClientNative>;
        public peer: number;
        public scheduleTask(param0: com.mapbox.maps.Task): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public scheduleRepaint(): void;
      }
      export module MapClientNative {
        export class MapClientPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.MapClientNative.MapClientPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapConstants {
        public static class: java.lang.Class<com.mapbox.maps.MapConstants>;
        public static MIN_PITCH: number;
        public static MAX_PITCH: number;
        public static MIN_ZOOM: number;
        public static MAX_ZOOM: number;
        public static DEFAULT_TRANSITION_DURATION: number;
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapDebugOptions {
        public static class: java.lang.Class<com.mapbox.maps.MapDebugOptions>;
        public static TILE_BORDERS: com.mapbox.maps.MapDebugOptions;
        public static PARSE_STATUS: com.mapbox.maps.MapDebugOptions;
        public static TIMESTAMPS: com.mapbox.maps.MapDebugOptions;
        public static COLLISION: com.mapbox.maps.MapDebugOptions;
        public static OVERDRAW: com.mapbox.maps.MapDebugOptions;
        public static STENCIL_CLIP: com.mapbox.maps.MapDebugOptions;
        public static DEPTH_BUFFER: com.mapbox.maps.MapDebugOptions;
        public static RENDER_CACHE: com.mapbox.maps.MapDebugOptions;
        public static MODEL_BOUNDS: com.mapbox.maps.MapDebugOptions;
        public static TERRAIN_WIREFRAME: com.mapbox.maps.MapDebugOptions;
        public static values(): androidNative.Array<com.mapbox.maps.MapDebugOptions>;
        public static valueOf(param0: string): com.mapbox.maps.MapDebugOptions;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapEvents {
        public static class: java.lang.Class<com.mapbox.maps.MapEvents>;
        public static MAP_LOADED: string;
        public static MAP_LOADING_ERROR: string;
        public static MAP_IDLE: string;
        public static STYLE_DATA_LOADED: string;
        public static STYLE_LOADED: string;
        public static STYLE_IMAGE_MISSING: string;
        public static STYLE_IMAGE_REMOVE_UNUSED: string;
        public static SOURCE_DATA_LOADED: string;
        public static SOURCE_ADDED: string;
        public static SOURCE_REMOVED: string;
        public static RENDER_FRAME_STARTED: string;
        public static RENDER_FRAME_FINISHED: string;
        public static CAMERA_CHANGED: string;
        public static RESOURCE_REQUEST: string;
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapInterface extends com.mapbox.maps.CameraManagerInterface {
        public static class: java.lang.Class<com.mapbox.maps.MapInterface>;
        /**
         * Constructs a new instance of the com.mapbox.maps.MapInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          createRenderer(): void;
          destroyRenderer(): void;
          render(): void;
          setSize(param0: com.mapbox.maps.Size): void;
          getSize(): com.mapbox.maps.Size;
          triggerRepaint(): void;
          setGestureInProgress(param0: boolean): void;
          isGestureInProgress(): boolean;
          setUserAnimationInProgress(param0: boolean): void;
          isUserAnimationInProgress(): boolean;
          setPrefetchZoomDelta(param0: number): void;
          getPrefetchZoomDelta(): number;
          setNorthOrientation(param0: com.mapbox.maps.NorthOrientation): void;
          setConstrainMode(param0: com.mapbox.maps.ConstrainMode): void;
          setViewportMode(param0: com.mapbox.maps.ViewportMode): void;
          getMapOptions(): com.mapbox.maps.MapOptions;
          getDebug(): java.util.List<com.mapbox.maps.MapDebugOptions>;
          setDebug(param0: java.util.List<com.mapbox.maps.MapDebugOptions>, param1: boolean): void;
          isMapLoaded(): boolean;
          queryRenderedFeatures(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
          queryRenderedFeatures(param0: com.mapbox.maps.ScreenBox, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
          queryRenderedFeatures(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
          queryRenderedFeatures(param0: com.mapbox.maps.RenderedQueryGeometry, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): com.mapbox.common.Cancelable;
          querySourceFeatures(param0: string, param1: com.mapbox.maps.SourceQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
          queryFeatureExtensions(param0: string, param1: com.mapbox.geojson.Feature, param2: string, param3: string, param4: java.util.HashMap<string, com.mapbox.bindgen.Value>, param5: com.mapbox.maps.QueryFeatureExtensionCallback): void;
          setFeatureState(param0: string, param1: string, param2: string, param3: com.mapbox.bindgen.Value): void;
          getFeatureState(param0: string, param1: string, param2: string, param3: com.mapbox.maps.QueryFeatureStateCallback): void;
          removeFeatureState(param0: string, param1: string, param2: string, param3: string): void;
          setMemoryBudget(param0: com.mapbox.maps.MapMemoryBudget): void;
          reduceMemoryUse(): void;
          getResourceOptions(): com.mapbox.maps.ResourceOptions;
          getElevation(param0: com.mapbox.geojson.Point): java.lang.Double;
          setRenderCacheOptions(param0: com.mapbox.maps.RenderCacheOptions): void;
          getRenderCacheOptions(): com.mapbox.maps.RenderCacheOptions;
          setViewAnnotationPositionsUpdateListener(param0: com.mapbox.maps.ViewAnnotationPositionsUpdateListener): void;
          addViewAnnotation(param0: string, param1: com.mapbox.maps.ViewAnnotationOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          updateViewAnnotation(param0: string, param1: com.mapbox.maps.ViewAnnotationOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeViewAnnotation(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getViewAnnotationOptions(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.maps.ViewAnnotationOptions>;
          tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
          cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
          cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
          cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
          cameraForGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
          coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
          coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
          coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
          coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
          pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
          coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
          coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
          pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
          coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
          coordinatesInfoForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.maps.CoordinateInfo>;
          setCamera(param0: com.mapbox.maps.CameraOptions): void;
          getCameraState(): com.mapbox.maps.CameraState;
          setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
          getFreeCameraOptions(): com.mapbox.maps.FreeCameraOptions;
          setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getBounds(): com.mapbox.maps.CameraBounds;
          setRenderWorldCopies(param0: boolean): void;
          getRenderWorldCopies(): boolean;
          dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
          getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
          dragEnd(): void;
          tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
          getStyleURI(): string;
          setStyleURI(param0: string): void;
          getStyleJSON(): string;
          setStyleJSON(param0: string): void;
          getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
          getStyleTransition(): com.mapbox.maps.TransitionOptions;
          setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
          addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addPersistentStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
          removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          styleLayerExists(param0: string): boolean;
          getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
          setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
          setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleGeoJSONSourceData(param0: string, param1: string, param2: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          styleSourceExists(param0: string): boolean;
          getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleLightProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleImage(param0: string): com.mapbox.maps.Image;
          addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          hasStyleImage(param0: string): boolean;
          addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          hasStyleModel(param0: string): boolean;
          addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleCustomGeometrySourceTileData(param0: string, param1: com.mapbox.maps.CanonicalTileID, param2: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          isStyleLoaded(): boolean;
          subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
          unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
          unsubscribe(param0: com.mapbox.maps.Observer): void;
        });
        public constructor();
        public getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public setNorthOrientation(param0: com.mapbox.maps.NorthOrientation): void;
        public moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public querySourceFeatures(param0: string, param1: com.mapbox.maps.SourceQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
        public setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
        public queryFeatureExtensions(param0: string, param1: com.mapbox.geojson.Feature, param2: string, param3: string, param4: java.util.HashMap<string, com.mapbox.bindgen.Value>, param5: com.mapbox.maps.QueryFeatureExtensionCallback): void;
        public hasStyleModel(param0: string): boolean;
        public isStyleLoaded(): boolean;
        public setDebug(param0: java.util.List<com.mapbox.maps.MapDebugOptions>, param1: boolean): void;
        public cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public getStyleURI(): string;
        public getCameraState(): com.mapbox.maps.CameraState;
        public isUserAnimationInProgress(): boolean;
        public getRenderCacheOptions(): com.mapbox.maps.RenderCacheOptions;
        public getMapOptions(): com.mapbox.maps.MapOptions;
        public setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setUserAnimationInProgress(param0: boolean): void;
        public setCamera(param0: com.mapbox.maps.CameraOptions): void;
        public getRenderWorldCopies(): boolean;
        public addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        public getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
        public removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeViewAnnotation(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public updateViewAnnotation(param0: string, param1: com.mapbox.maps.ViewAnnotationOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        /** @deprecated */
        public queryRenderedFeatures(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
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
        /** @deprecated */
        public isMapLoaded(): boolean;
        public addViewAnnotation(param0: string, param1: com.mapbox.maps.ViewAnnotationOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleJSON(): string;
        public pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
        /** @deprecated */
        public setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public render(): void;
        public getViewAnnotationOptions(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.maps.ViewAnnotationOptions>;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public queryRenderedFeatures(param0: com.mapbox.maps.RenderedQueryGeometry, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): com.mapbox.common.Cancelable;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public getPrefetchZoomDelta(): number;
        public coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
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
        public setViewAnnotationPositionsUpdateListener(param0: com.mapbox.maps.ViewAnnotationPositionsUpdateListener): void;
        /** @deprecated */
        public queryRenderedFeatures(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public getDebug(): java.util.List<com.mapbox.maps.MapDebugOptions>;
        public setRenderCacheOptions(param0: com.mapbox.maps.RenderCacheOptions): void;
        public coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public getResourceOptions(): com.mapbox.maps.ResourceOptions;
        public removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public isGestureInProgress(): boolean;
        public getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setFeatureState(param0: string, param1: string, param2: string, param3: com.mapbox.bindgen.Value): void;
        public setStyleURI(param0: string): void;
        public addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setConstrainMode(param0: com.mapbox.maps.ConstrainMode): void;
        public getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
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
        public reduceMemoryUse(): void;
        public setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
        public getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setViewportMode(param0: com.mapbox.maps.ViewportMode): void;
        public getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
        public getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setRenderWorldCopies(param0: boolean): void;
        public addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeFeatureState(param0: string, param1: string, param2: string, param3: string): void;
        public setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public createRenderer(): void;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
        public setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        /** @deprecated */
        public queryRenderedFeatures(param0: com.mapbox.maps.ScreenBox, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
        public setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getSize(): com.mapbox.maps.Size;
        public dragEnd(): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapMemoryBudget {
        public static class: java.lang.Class<com.mapbox.maps.MapMemoryBudget>;
        public constructor(param0: com.mapbox.maps.MapMemoryBudgetInTiles);
        public static valueOf(param0: com.mapbox.maps.MapMemoryBudgetInTiles): com.mapbox.maps.MapMemoryBudget;
        public static valueOf(param0: com.mapbox.maps.MapMemoryBudgetInMegabytes): com.mapbox.maps.MapMemoryBudget;
        public isMapMemoryBudgetInTiles(): boolean;
        public getTypeInfo(): com.mapbox.maps.MapMemoryBudget.Type;
        public constructor(param0: com.mapbox.maps.MapMemoryBudgetInMegabytes);
        public getMapMemoryBudgetInTiles(): com.mapbox.maps.MapMemoryBudgetInTiles;
        public getMapMemoryBudgetInMegabytes(): com.mapbox.maps.MapMemoryBudgetInMegabytes;
        public isMapMemoryBudgetInMegabytes(): boolean;
      }
      export module MapMemoryBudget {
        export class Type {
          public static class: java.lang.Class<com.mapbox.maps.MapMemoryBudget.Type>;
          public static MAP_MEMORY_BUDGET_IN_MEGABYTES: com.mapbox.maps.MapMemoryBudget.Type;
          public static MAP_MEMORY_BUDGET_IN_TILES: com.mapbox.maps.MapMemoryBudget.Type;
          public static valueOf(param0: string): com.mapbox.maps.MapMemoryBudget.Type;
          public static values(): androidNative.Array<com.mapbox.maps.MapMemoryBudget.Type>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapMemoryBudgetInMegabytes {
        public static class: java.lang.Class<com.mapbox.maps.MapMemoryBudgetInMegabytes>;
        public getSize(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public constructor(param0: number);
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapMemoryBudgetInTiles {
        public static class: java.lang.Class<com.mapbox.maps.MapMemoryBudgetInTiles>;
        public getSize(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public constructor(param0: number);
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapOptions {
        public static class: java.lang.Class<com.mapbox.maps.MapOptions>;
        public getConstrainMode(): com.mapbox.maps.ConstrainMode;
        public getCrossSourceCollisions(): java.lang.Boolean;
        public getGlyphsRasterizationOptions(): com.mapbox.maps.GlyphsRasterizationOptions;
        public toBuilder(): com.mapbox.maps.MapOptions.Builder;
        public toString(): string;
        public getPixelRatio(): number;
        public getOptimizeForTerrain(): java.lang.Boolean;
        public getContextMode(): com.mapbox.maps.ContextMode;
        public hashCode(): number;
        public getOrientation(): com.mapbox.maps.NorthOrientation;
        public getViewportMode(): com.mapbox.maps.ViewportMode;
        public equals(param0: any): boolean;
        public getSize(): com.mapbox.maps.Size;
      }
      export module MapOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.MapOptions.Builder>;
          public constrainMode(param0: com.mapbox.maps.ConstrainMode): com.mapbox.maps.MapOptions.Builder;
          public size(param0: com.mapbox.maps.Size): com.mapbox.maps.MapOptions.Builder;
          public constructor();
          public viewportMode(param0: com.mapbox.maps.ViewportMode): com.mapbox.maps.MapOptions.Builder;
          public glyphsRasterizationOptions(param0: com.mapbox.maps.GlyphsRasterizationOptions): com.mapbox.maps.MapOptions.Builder;
          public pixelRatio(param0: number): com.mapbox.maps.MapOptions.Builder;
          public orientation(param0: com.mapbox.maps.NorthOrientation): com.mapbox.maps.MapOptions.Builder;
          public optimizeForTerrain(param0: java.lang.Boolean): com.mapbox.maps.MapOptions.Builder;
          public build(): com.mapbox.maps.MapOptions;
          public crossSourceCollisions(param0: java.lang.Boolean): com.mapbox.maps.MapOptions.Builder;
          public contextMode(param0: com.mapbox.maps.ContextMode): com.mapbox.maps.MapOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapRecorder {
        public static class: java.lang.Class<com.mapbox.maps.MapRecorder>;
        public peer: number;
        public togglePauseReplay(): void;
        public stopRecording(): string;
        public getPlaybackState(): string;
        public startRecording(): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public constructor(param0: com.mapbox.maps.Map);
        public replay(param0: string, param1: number, param2: number, param3: com.mapbox.maps.PlaybackFinished): void;
      }
      export module MapRecorder {
        export class MapRecorderPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.MapRecorder.MapRecorderPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapSnapshot extends com.mapbox.maps.MapSnapshotInterface {
        public static class: java.lang.Class<com.mapbox.maps.MapSnapshot>;
        public peer: number;
        public screenCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
        public attributions(): java.util.List<string>;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public coordinate(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        public image(): com.mapbox.maps.Image;
      }
      export module MapSnapshot {
        export class MapSnapshotPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.MapSnapshot.MapSnapshotPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapSnapshotInterface {
        public static class: java.lang.Class<com.mapbox.maps.MapSnapshotInterface>;
        /**
         * Constructs a new instance of the com.mapbox.maps.MapSnapshotInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { screenCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate; coordinate(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point; attributions(): java.util.List<string>; image(): com.mapbox.maps.Image });
        public constructor();
        public screenCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
        public attributions(): java.util.List<string>;
        public coordinate(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        public image(): com.mapbox.maps.Image;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapSnapshotOptions {
        public static class: java.lang.Class<com.mapbox.maps.MapSnapshotOptions>;
        public getPixelRatio(): number;
        public toBuilder(): com.mapbox.maps.MapSnapshotOptions.Builder;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getGlyphsRasterizationOptions(): com.mapbox.maps.GlyphsRasterizationOptions;
        public getSize(): com.mapbox.maps.Size;
        public getResourceOptions(): com.mapbox.maps.ResourceOptions;
        public toString(): string;
      }
      export module MapSnapshotOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.MapSnapshotOptions.Builder>;
          public build(): com.mapbox.maps.MapSnapshotOptions;
          public glyphsRasterizationOptions(param0: com.mapbox.maps.GlyphsRasterizationOptions): com.mapbox.maps.MapSnapshotOptions.Builder;
          public constructor();
          public pixelRatio(param0: number): com.mapbox.maps.MapSnapshotOptions.Builder;
          public size(param0: com.mapbox.maps.Size): com.mapbox.maps.MapSnapshotOptions.Builder;
          public resourceOptions(param0: com.mapbox.maps.ResourceOptions): com.mapbox.maps.MapSnapshotOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapSnapshotter extends com.mapbox.maps.CameraManager implements com.mapbox.maps.MapSnapshotterInterface {
        public static class: java.lang.Class<com.mapbox.maps.MapSnapshotter>;
        public getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
        public setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
        public hasStyleModel(param0: string): boolean;
        public isStyleLoaded(): boolean;
        public cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public getStyleURI(): string;
        public getCameraState(): com.mapbox.maps.CameraState;
        public setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setCamera(param0: com.mapbox.maps.CameraOptions): void;
        public getRenderWorldCopies(): boolean;
        public addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        public getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
        public removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public styleLayerExists(param0: string): boolean;
        public addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getBounds(): com.mapbox.maps.CameraBounds;
        public start(param0: com.mapbox.maps.SnapshotCompleteCallback): void;
        public coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
        public coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public setStyleLightProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleJSON(): string;
        public pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
        /** @deprecated */
        public setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
        public getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setSize(param0: com.mapbox.maps.Size): void;
        public static cleanNativePeer(param0: number): void;
        public updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public constructor(param0: number);
        public invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        /** @deprecated */
        public isInTileMode(): boolean;
        public addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getElevation(param0: com.mapbox.geojson.Point): java.lang.Double;
        public constructor(param0: com.mapbox.maps.MapSnapshotOptions);
        public getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public getStyleImage(param0: string): com.mapbox.maps.Image;
        /** @deprecated */
        public setTileMode(param0: boolean): void;
        public coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public cancel(): void;
        public removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleURI(param0: string): void;
        public addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
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
        public pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
        public setStyleGeoJSONSourceData(param0: string, param1: string, param2: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleCustomGeometrySourceTileData(param0: string, param1: com.mapbox.maps.CanonicalTileID, param2: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public reduceMemoryUse(): void;
        public setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
        public getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
        public getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setRenderWorldCopies(param0: boolean): void;
        public addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
        public setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getSize(): com.mapbox.maps.Size;
        public dragEnd(): void;
      }
      export module MapSnapshotter {
        export class MapSnapshotterPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.MapSnapshotter.MapSnapshotterPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapSnapshotterInterface extends com.mapbox.maps.CameraManagerInterface {
        public static class: java.lang.Class<com.mapbox.maps.MapSnapshotterInterface>;
        /**
         * Constructs a new instance of the com.mapbox.maps.MapSnapshotterInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          setSize(param0: com.mapbox.maps.Size): void;
          getSize(): com.mapbox.maps.Size;
          isInTileMode(): boolean;
          setTileMode(param0: boolean): void;
          start(param0: com.mapbox.maps.SnapshotCompleteCallback): void;
          cancel(): void;
          getElevation(param0: com.mapbox.geojson.Point): java.lang.Double;
          reduceMemoryUse(): void;
          cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
          cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
          cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
          cameraForGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
          coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
          coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
          coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
          coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
          pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
          coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
          coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
          pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
          coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
          coordinatesInfoForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.maps.CoordinateInfo>;
          setCamera(param0: com.mapbox.maps.CameraOptions): void;
          getCameraState(): com.mapbox.maps.CameraState;
          setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
          getFreeCameraOptions(): com.mapbox.maps.FreeCameraOptions;
          setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getBounds(): com.mapbox.maps.CameraBounds;
          setRenderWorldCopies(param0: boolean): void;
          getRenderWorldCopies(): boolean;
          dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
          getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
          dragEnd(): void;
          tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
          getStyleURI(): string;
          setStyleURI(param0: string): void;
          getStyleJSON(): string;
          setStyleJSON(param0: string): void;
          getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
          getStyleTransition(): com.mapbox.maps.TransitionOptions;
          setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
          addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addPersistentStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
          removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          styleLayerExists(param0: string): boolean;
          getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
          setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
          setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleGeoJSONSourceData(param0: string, param1: string, param2: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          styleSourceExists(param0: string): boolean;
          getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleLightProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleImage(param0: string): com.mapbox.maps.Image;
          addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          hasStyleImage(param0: string): boolean;
          addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          hasStyleModel(param0: string): boolean;
          addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleCustomGeometrySourceTileData(param0: string, param1: com.mapbox.maps.CanonicalTileID, param2: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          isStyleLoaded(): boolean;
          subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
          unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
          unsubscribe(param0: com.mapbox.maps.Observer): void;
        });
        public constructor();
        public getElevation(param0: com.mapbox.geojson.Point): java.lang.Double;
        public getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
        public isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
        public getStyleImage(param0: string): com.mapbox.maps.Image;
        /** @deprecated */
        public setTileMode(param0: boolean): void;
        public hasStyleModel(param0: string): boolean;
        public isStyleLoaded(): boolean;
        public cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public cancel(): void;
        public getStyleURI(): string;
        public getCameraState(): com.mapbox.maps.CameraState;
        public removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setCamera(param0: com.mapbox.maps.CameraOptions): void;
        public setStyleURI(param0: string): void;
        public getRenderWorldCopies(): boolean;
        public addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
        public addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
        public setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
        public removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public cameraForGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
        public styleSourceExists(param0: string): boolean;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public styleLayerExists(param0: string): boolean;
        public getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getBounds(): com.mapbox.maps.CameraBounds;
        public coordinatesInfoForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.maps.CoordinateInfo>;
        public getFreeCameraOptions(): com.mapbox.maps.FreeCameraOptions;
        public getStyleTransition(): com.mapbox.maps.TransitionOptions;
        public setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public start(param0: com.mapbox.maps.SnapshotCompleteCallback): void;
        public coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
        public tileCover(param0: com.mapbox.maps.TileCoverOptions, param1: com.mapbox.maps.CameraOptions): java.util.List<com.mapbox.maps.CanonicalTileID>;
        public setStyleJSON(param0: string): void;
        public hasStyleImage(param0: string): boolean;
        public coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
        public getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public setStyleLightProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addPersistentStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleJSON(): string;
        public pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
        public setStyleGeoJSONSourceData(param0: string, param1: string, param2: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleCustomGeometrySourceTileData(param0: string, param1: com.mapbox.maps.CanonicalTileID, param2: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
        /** @deprecated */
        public setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public reduceMemoryUse(): void;
        public setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
        public getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
        public getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setRenderWorldCopies(param0: boolean): void;
        public addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
        public setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
        public getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setSize(param0: com.mapbox.maps.Size): void;
        public setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public getSize(): com.mapbox.maps.Size;
        /** @deprecated */
        public isInTileMode(): boolean;
        public dragEnd(): void;
        public addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MercatorCoordinate {
        public static class: java.lang.Class<com.mapbox.maps.MercatorCoordinate>;
        public constructor(param0: number, param1: number);
        public getX(): number;
        public hashCode(): number;
        public getY(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class NorthOrientation {
        public static class: java.lang.Class<com.mapbox.maps.NorthOrientation>;
        public static UPWARDS: com.mapbox.maps.NorthOrientation;
        public static RIGHTWARDS: com.mapbox.maps.NorthOrientation;
        public static DOWNWARDS: com.mapbox.maps.NorthOrientation;
        public static LEFTWARDS: com.mapbox.maps.NorthOrientation;
        public static values(): androidNative.Array<com.mapbox.maps.NorthOrientation>;
        public static valueOf(param0: string): com.mapbox.maps.NorthOrientation;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Observable extends com.mapbox.maps.ObservableInterface {
        public static class: java.lang.Class<com.mapbox.maps.Observable>;
        public peer: number;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
      }
      export module Observable {
        export class ObservablePeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.Observable.ObservablePeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ObservableInterface {
        public static class: java.lang.Class<com.mapbox.maps.ObservableInterface>;
        /**
         * Constructs a new instance of the com.mapbox.maps.ObservableInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void; unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void; unsubscribe(param0: com.mapbox.maps.Observer): void });
        public constructor();
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Observer {
        public static class: java.lang.Class<com.mapbox.maps.Observer>;
        /**
         * Constructs a new instance of the com.mapbox.maps.Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { notify(param0: com.mapbox.maps.Event): void });
        public constructor();
        public notify(param0: com.mapbox.maps.Event): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ObserverNative extends com.mapbox.maps.Observer {
        public static class: java.lang.Class<com.mapbox.maps.ObserverNative>;
        public peer: number;
        public notify(param0: com.mapbox.maps.Event): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
      }
      export module ObserverNative {
        export class ObserverPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.ObserverNative.ObserverPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineDatabaseMergeCallback {
        public static class: java.lang.Class<com.mapbox.maps.OfflineDatabaseMergeCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.OfflineDatabaseMergeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.maps.OfflineRegion>>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.maps.OfflineRegion>>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineDatabaseMergeCallbackNative extends com.mapbox.maps.OfflineDatabaseMergeCallback {
        public static class: java.lang.Class<com.mapbox.maps.OfflineDatabaseMergeCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.maps.OfflineRegion>>): void;
      }
      export module OfflineDatabaseMergeCallbackNative {
        export class OfflineDatabaseMergeCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.OfflineDatabaseMergeCallbackNative.OfflineDatabaseMergeCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineManager extends com.mapbox.maps.OfflineManagerInterface {
        public static class: java.lang.Class<com.mapbox.maps.OfflineManager>;
        public peer: number;
        public loadStylePack(param0: string, param1: com.mapbox.maps.StylePackLoadOptions, param2: com.mapbox.maps.StylePackCallback): com.mapbox.common.Cancelable;
        public constructor(param0: com.mapbox.maps.ResourceOptions);
        public loadStylePack(param0: string, param1: com.mapbox.maps.StylePackLoadOptions, param2: com.mapbox.maps.StylePackLoadProgressCallback, param3: com.mapbox.maps.StylePackCallback): com.mapbox.common.Cancelable;
        public getStylePackMetadata(param0: string, param1: com.mapbox.maps.StylePackMetadataCallback): void;
        public getAllStylePacks(param0: com.mapbox.maps.StylePacksCallback): void;
        public createTilesetDescriptor(param0: com.mapbox.maps.TilesetDescriptorOptionsForTilesets): com.mapbox.common.TilesetDescriptor;
        public removeStylePack(param0: string): void;
        public createTilesetDescriptor(param0: com.mapbox.maps.TilesetDescriptorOptions): com.mapbox.common.TilesetDescriptor;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public getStylePack(param0: string, param1: com.mapbox.maps.StylePackCallback): void;
      }
      export module OfflineManager {
        export class OfflineManagerPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.OfflineManager.OfflineManagerPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineManagerInterface {
        public static class: java.lang.Class<com.mapbox.maps.OfflineManagerInterface>;
        /**
         * Constructs a new instance of the com.mapbox.maps.OfflineManagerInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          createTilesetDescriptor(param0: com.mapbox.maps.TilesetDescriptorOptions): com.mapbox.common.TilesetDescriptor;
          createTilesetDescriptor(param0: com.mapbox.maps.TilesetDescriptorOptionsForTilesets): com.mapbox.common.TilesetDescriptor;
          loadStylePack(param0: string, param1: com.mapbox.maps.StylePackLoadOptions, param2: com.mapbox.maps.StylePackLoadProgressCallback, param3: com.mapbox.maps.StylePackCallback): com.mapbox.common.Cancelable;
          loadStylePack(param0: string, param1: com.mapbox.maps.StylePackLoadOptions, param2: com.mapbox.maps.StylePackCallback): com.mapbox.common.Cancelable;
          getAllStylePacks(param0: com.mapbox.maps.StylePacksCallback): void;
          getStylePack(param0: string, param1: com.mapbox.maps.StylePackCallback): void;
          getStylePackMetadata(param0: string, param1: com.mapbox.maps.StylePackMetadataCallback): void;
          removeStylePack(param0: string): void;
        });
        public constructor();
        public loadStylePack(param0: string, param1: com.mapbox.maps.StylePackLoadOptions, param2: com.mapbox.maps.StylePackCallback): com.mapbox.common.Cancelable;
        public loadStylePack(param0: string, param1: com.mapbox.maps.StylePackLoadOptions, param2: com.mapbox.maps.StylePackLoadProgressCallback, param3: com.mapbox.maps.StylePackCallback): com.mapbox.common.Cancelable;
        public getStylePackMetadata(param0: string, param1: com.mapbox.maps.StylePackMetadataCallback): void;
        public getAllStylePacks(param0: com.mapbox.maps.StylePacksCallback): void;
        public createTilesetDescriptor(param0: com.mapbox.maps.TilesetDescriptorOptionsForTilesets): com.mapbox.common.TilesetDescriptor;
        public removeStylePack(param0: string): void;
        public createTilesetDescriptor(param0: com.mapbox.maps.TilesetDescriptorOptions): com.mapbox.common.TilesetDescriptor;
        public getStylePack(param0: string, param1: com.mapbox.maps.StylePackCallback): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegion extends com.mapbox.maps.OfflineRegionInterface {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegion>;
        public peer: number;
        public invalidate(param0: com.mapbox.maps.AsyncOperationResultCallback): void;
        public getGeometryDefinition(): com.mapbox.maps.OfflineRegionGeometryDefinition;
        public setOfflineRegionDownloadState(param0: com.mapbox.maps.OfflineRegionDownloadState): void;
        public setOfflineRegionObserver(param0: com.mapbox.maps.OfflineRegionObserver): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public setMetadata(param0: androidNative.Array<number>, param1: com.mapbox.maps.AsyncOperationResultCallback): void;
        public getMetadata(): androidNative.Array<number>;
        public purge(param0: com.mapbox.maps.AsyncOperationResultCallback): void;
        public getTilePyramidDefinition(): com.mapbox.maps.OfflineRegionTilePyramidDefinition;
        public getStatus(param0: com.mapbox.maps.OfflineRegionStatusCallback): void;
        public getIdentifier(): number;
      }
      export module OfflineRegion {
        export class OfflineRegionPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.OfflineRegion.OfflineRegionPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionCallback {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.OfflineRegionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.maps.OfflineRegion>>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.maps.OfflineRegion>>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionCallbackNative extends com.mapbox.maps.OfflineRegionCallback {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.maps.OfflineRegion>>): void;
      }
      export module OfflineRegionCallbackNative {
        export class OfflineRegionCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.OfflineRegionCallbackNative.OfflineRegionCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionCreateCallback {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionCreateCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.OfflineRegionCreateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.OfflineRegion>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.OfflineRegion>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionCreateCallbackNative extends com.mapbox.maps.OfflineRegionCreateCallback {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionCreateCallbackNative>;
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.OfflineRegion>): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module OfflineRegionCreateCallbackNative {
        export class OfflineRegionCreateCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.OfflineRegionCreateCallbackNative.OfflineRegionCreateCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionDownloadState {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionDownloadState>;
        public static INACTIVE: com.mapbox.maps.OfflineRegionDownloadState;
        public static ACTIVE: com.mapbox.maps.OfflineRegionDownloadState;
        public static valueOf(param0: string): com.mapbox.maps.OfflineRegionDownloadState;
        public static values(): androidNative.Array<com.mapbox.maps.OfflineRegionDownloadState>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionGeometryDefinition {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionGeometryDefinition>;
        public getStyleURL(): string;
        public getPixelRatio(): number;
        public getGeometry(): com.mapbox.geojson.Geometry;
        public getGlyphsRasterizationMode(): com.mapbox.maps.GlyphsRasterizationMode;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
        public toBuilder(): com.mapbox.maps.OfflineRegionGeometryDefinition.Builder;
        public getMaxZoom(): number;
        public getMinZoom(): number;
      }
      export module OfflineRegionGeometryDefinition {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.OfflineRegionGeometryDefinition.Builder>;
          public minZoom(param0: number): com.mapbox.maps.OfflineRegionGeometryDefinition.Builder;
          public constructor();
          public geometry(param0: com.mapbox.geojson.Geometry): com.mapbox.maps.OfflineRegionGeometryDefinition.Builder;
          public glyphsRasterizationMode(param0: com.mapbox.maps.GlyphsRasterizationMode): com.mapbox.maps.OfflineRegionGeometryDefinition.Builder;
          public build(): com.mapbox.maps.OfflineRegionGeometryDefinition;
          public styleURL(param0: string): com.mapbox.maps.OfflineRegionGeometryDefinition.Builder;
          public maxZoom(param0: number): com.mapbox.maps.OfflineRegionGeometryDefinition.Builder;
          public pixelRatio(param0: number): com.mapbox.maps.OfflineRegionGeometryDefinition.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionInterface {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionInterface>;
        /**
         * Constructs a new instance of the com.mapbox.maps.OfflineRegionInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getIdentifier(): number; getTilePyramidDefinition(): com.mapbox.maps.OfflineRegionTilePyramidDefinition; getGeometryDefinition(): com.mapbox.maps.OfflineRegionGeometryDefinition; getMetadata(): androidNative.Array<number>; setMetadata(param0: androidNative.Array<number>, param1: com.mapbox.maps.AsyncOperationResultCallback): void; setOfflineRegionDownloadState(param0: com.mapbox.maps.OfflineRegionDownloadState): void; setOfflineRegionObserver(param0: com.mapbox.maps.OfflineRegionObserver): void; invalidate(param0: com.mapbox.maps.AsyncOperationResultCallback): void; purge(param0: com.mapbox.maps.AsyncOperationResultCallback): void; getStatus(param0: com.mapbox.maps.OfflineRegionStatusCallback): void });
        public constructor();
        public invalidate(param0: com.mapbox.maps.AsyncOperationResultCallback): void;
        public getGeometryDefinition(): com.mapbox.maps.OfflineRegionGeometryDefinition;
        public setOfflineRegionDownloadState(param0: com.mapbox.maps.OfflineRegionDownloadState): void;
        public setOfflineRegionObserver(param0: com.mapbox.maps.OfflineRegionObserver): void;
        public setMetadata(param0: androidNative.Array<number>, param1: com.mapbox.maps.AsyncOperationResultCallback): void;
        public getMetadata(): androidNative.Array<number>;
        public purge(param0: com.mapbox.maps.AsyncOperationResultCallback): void;
        public getTilePyramidDefinition(): com.mapbox.maps.OfflineRegionTilePyramidDefinition;
        public getStatus(param0: com.mapbox.maps.OfflineRegionStatusCallback): void;
        public getIdentifier(): number;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionManager extends com.mapbox.maps.OfflineRegionManagerInterface {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionManager>;
        public peer: number;
        public constructor(param0: com.mapbox.maps.ResourceOptions);
        public mergeOfflineDatabase(param0: string, param1: com.mapbox.maps.OfflineDatabaseMergeCallback): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public getOfflineRegions(param0: com.mapbox.maps.OfflineRegionCallback): void;
        public setOfflineMapboxTileCountLimit(param0: number): void;
        public createOfflineRegion(param0: com.mapbox.maps.OfflineRegionTilePyramidDefinition, param1: com.mapbox.maps.OfflineRegionCreateCallback): void;
        public createOfflineRegion(param0: com.mapbox.maps.OfflineRegionGeometryDefinition, param1: com.mapbox.maps.OfflineRegionCreateCallback): void;
      }
      export module OfflineRegionManager {
        export class OfflineRegionManagerPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.OfflineRegionManager.OfflineRegionManagerPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionManagerInterface {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionManagerInterface>;
        /**
         * Constructs a new instance of the com.mapbox.maps.OfflineRegionManagerInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getOfflineRegions(param0: com.mapbox.maps.OfflineRegionCallback): void; createOfflineRegion(param0: com.mapbox.maps.OfflineRegionGeometryDefinition, param1: com.mapbox.maps.OfflineRegionCreateCallback): void; createOfflineRegion(param0: com.mapbox.maps.OfflineRegionTilePyramidDefinition, param1: com.mapbox.maps.OfflineRegionCreateCallback): void; mergeOfflineDatabase(param0: string, param1: com.mapbox.maps.OfflineDatabaseMergeCallback): void; setOfflineMapboxTileCountLimit(param0: number): void });
        public constructor();
        public mergeOfflineDatabase(param0: string, param1: com.mapbox.maps.OfflineDatabaseMergeCallback): void;
        public getOfflineRegions(param0: com.mapbox.maps.OfflineRegionCallback): void;
        public setOfflineMapboxTileCountLimit(param0: number): void;
        public createOfflineRegion(param0: com.mapbox.maps.OfflineRegionTilePyramidDefinition, param1: com.mapbox.maps.OfflineRegionCreateCallback): void;
        public createOfflineRegion(param0: com.mapbox.maps.OfflineRegionGeometryDefinition, param1: com.mapbox.maps.OfflineRegionCreateCallback): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionObserver {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionObserver>;
        /**
         * Constructs a new instance of the com.mapbox.maps.OfflineRegionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { statusChanged(param0: com.mapbox.maps.OfflineRegionStatus): void; responseError(param0: com.mapbox.maps.ResponseError): void; mapboxTileCountLimitExceeded(param0: number): void });
        public constructor();
        public statusChanged(param0: com.mapbox.maps.OfflineRegionStatus): void;
        public mapboxTileCountLimitExceeded(param0: number): void;
        public responseError(param0: com.mapbox.maps.ResponseError): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionObserverNative extends com.mapbox.maps.OfflineRegionObserver {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionObserverNative>;
        public peer: number;
        public statusChanged(param0: com.mapbox.maps.OfflineRegionStatus): void;
        public static cleanNativePeer(param0: number): void;
        public mapboxTileCountLimitExceeded(param0: number): void;
        public constructor(param0: number);
        public responseError(param0: com.mapbox.maps.ResponseError): void;
      }
      export module OfflineRegionObserverNative {
        export class OfflineRegionObserverPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.OfflineRegionObserverNative.OfflineRegionObserverPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionStatus {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionStatus>;
        public getCompletedTileSize(): number;
        public getCompletedTileCount(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getCompletedResourceCount(): number;
        public getRequiredResourceCountIsPrecise(): boolean;
        public getCompletedResourceSize(): number;
        public toString(): string;
        public constructor(param0: com.mapbox.maps.OfflineRegionDownloadState, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean);
        public getRequiredResourceCount(): number;
        public getDownloadState(): com.mapbox.maps.OfflineRegionDownloadState;
        public getRequiredTileCount(): number;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionStatusCallback {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionStatusCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.OfflineRegionStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.OfflineRegionStatus>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.OfflineRegionStatus>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionStatusCallbackNative extends com.mapbox.maps.OfflineRegionStatusCallback {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionStatusCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.OfflineRegionStatus>): void;
      }
      export module OfflineRegionStatusCallbackNative {
        export class OfflineRegionStatusCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.OfflineRegionStatusCallbackNative.OfflineRegionStatusCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class OfflineRegionTilePyramidDefinition {
        public static class: java.lang.Class<com.mapbox.maps.OfflineRegionTilePyramidDefinition>;
        public getStyleURL(): string;
        public getPixelRatio(): number;
        public toBuilder(): com.mapbox.maps.OfflineRegionTilePyramidDefinition.Builder;
        public getGlyphsRasterizationMode(): com.mapbox.maps.GlyphsRasterizationMode;
        public hashCode(): number;
        public getBounds(): com.mapbox.maps.CoordinateBounds;
        public equals(param0: any): boolean;
        public toString(): string;
        public getMaxZoom(): number;
        public getMinZoom(): number;
      }
      export module OfflineRegionTilePyramidDefinition {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.OfflineRegionTilePyramidDefinition.Builder>;
          public build(): com.mapbox.maps.OfflineRegionTilePyramidDefinition;
          public bounds(param0: com.mapbox.maps.CoordinateBounds): com.mapbox.maps.OfflineRegionTilePyramidDefinition.Builder;
          public constructor();
          public maxZoom(param0: number): com.mapbox.maps.OfflineRegionTilePyramidDefinition.Builder;
          public pixelRatio(param0: number): com.mapbox.maps.OfflineRegionTilePyramidDefinition.Builder;
          public glyphsRasterizationMode(param0: com.mapbox.maps.GlyphsRasterizationMode): com.mapbox.maps.OfflineRegionTilePyramidDefinition.Builder;
          public styleURL(param0: string): com.mapbox.maps.OfflineRegionTilePyramidDefinition.Builder;
          public minZoom(param0: number): com.mapbox.maps.OfflineRegionTilePyramidDefinition.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class PlaybackFinished {
        public static class: java.lang.Class<com.mapbox.maps.PlaybackFinished>;
        /**
         * Constructs a new instance of the com.mapbox.maps.PlaybackFinished interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(): void });
        public constructor();
        public run(): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class PlaybackFinishedNative extends com.mapbox.maps.PlaybackFinished {
        public static class: java.lang.Class<com.mapbox.maps.PlaybackFinishedNative>;
        public run(): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module PlaybackFinishedNative {
        export class PlaybackFinishedPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.PlaybackFinishedNative.PlaybackFinishedPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ProjectedMeters {
        public static class: java.lang.Class<com.mapbox.maps.ProjectedMeters>;
        public constructor(param0: number, param1: number);
        public hashCode(): number;
        public getNorthing(): number;
        public equals(param0: any): boolean;
        public getEasting(): number;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Projection {
        public static class: java.lang.Class<com.mapbox.maps.Projection>;
        public peer: number;
        public static getMetersPerPixelAtLatitude(param0: number, param1: number): number;
        public static coordinateForProjectedMeters(param0: com.mapbox.maps.ProjectedMeters): com.mapbox.geojson.Point;
        public static unproject(param0: com.mapbox.maps.MercatorCoordinate, param1: number): com.mapbox.geojson.Point;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public static projectedMetersForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ProjectedMeters;
        public static project(param0: com.mapbox.geojson.Point, param1: number): com.mapbox.maps.MercatorCoordinate;
      }
      export module Projection {
        export class ProjectionPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.Projection.ProjectionPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class QueriedFeature {
        public static class: java.lang.Class<com.mapbox.maps.QueriedFeature>;
        public constructor(param0: com.mapbox.geojson.Feature, param1: string, param2: string, param3: com.mapbox.bindgen.Value);
        public hashCode(): number;
        public getFeature(): com.mapbox.geojson.Feature;
        public equals(param0: any): boolean;
        public getSource(): string;
        public getState(): com.mapbox.bindgen.Value;
        public toString(): string;
        public getSourceLayer(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class QueryFeatureExtensionCallback {
        public static class: java.lang.Class<com.mapbox.maps.QueryFeatureExtensionCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.QueryFeatureExtensionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.FeatureExtensionValue>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.FeatureExtensionValue>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class QueryFeatureExtensionCallbackNative extends com.mapbox.maps.QueryFeatureExtensionCallback {
        public static class: java.lang.Class<com.mapbox.maps.QueryFeatureExtensionCallbackNative>;
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.FeatureExtensionValue>): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module QueryFeatureExtensionCallbackNative {
        export class QueryFeatureExtensionCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.QueryFeatureExtensionCallbackNative.QueryFeatureExtensionCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class QueryFeatureStateCallback {
        public static class: java.lang.Class<com.mapbox.maps.QueryFeatureStateCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.QueryFeatureStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class QueryFeatureStateCallbackNative extends com.mapbox.maps.QueryFeatureStateCallback {
        public static class: java.lang.Class<com.mapbox.maps.QueryFeatureStateCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>): void;
      }
      export module QueryFeatureStateCallbackNative {
        export class QueryFeatureStateCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.QueryFeatureStateCallbackNative.QueryFeatureStateCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class QueryFeaturesCallback {
        public static class: java.lang.Class<com.mapbox.maps.QueryFeaturesCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.QueryFeaturesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.maps.QueriedFeature>>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.maps.QueriedFeature>>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class QueryFeaturesCallbackNative extends com.mapbox.maps.QueryFeaturesCallback {
        public static class: java.lang.Class<com.mapbox.maps.QueryFeaturesCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.maps.QueriedFeature>>): void;
      }
      export module QueryFeaturesCallbackNative {
        export class QueryFeaturesCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.QueryFeaturesCallbackNative.QueryFeaturesCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class RenderCacheOptions {
        public static class: java.lang.Class<com.mapbox.maps.RenderCacheOptions>;
        public getSize(): java.lang.Integer;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toBuilder(): com.mapbox.maps.RenderCacheOptions.Builder;
        public toString(): string;
      }
      export module RenderCacheOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.RenderCacheOptions.Builder>;
          public size(param0: java.lang.Integer): com.mapbox.maps.RenderCacheOptions.Builder;
          public constructor();
          public build(): com.mapbox.maps.RenderCacheOptions;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class RenderedQueryGeometry {
        public static class: java.lang.Class<com.mapbox.maps.RenderedQueryGeometry>;
        public isList(): boolean;
        public constructor(param0: com.mapbox.maps.ScreenCoordinate);
        public static valueOf(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): com.mapbox.maps.RenderedQueryGeometry;
        public getScreenCoordinate(): com.mapbox.maps.ScreenCoordinate;
        public static valueOf(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.RenderedQueryGeometry;
        public getScreenBox(): com.mapbox.maps.ScreenBox;
        public constructor(param0: com.mapbox.maps.ScreenBox);
        public isScreenCoordinate(): boolean;
        public constructor(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>);
        public getList(): java.util.List<com.mapbox.maps.ScreenCoordinate>;
        public static valueOf(param0: com.mapbox.maps.ScreenBox): com.mapbox.maps.RenderedQueryGeometry;
        public isScreenBox(): boolean;
        public getTypeInfo(): com.mapbox.maps.RenderedQueryGeometry.Type;
      }
      export module RenderedQueryGeometry {
        export class Type {
          public static class: java.lang.Class<com.mapbox.maps.RenderedQueryGeometry.Type>;
          public static SCREEN_BOX: com.mapbox.maps.RenderedQueryGeometry.Type;
          public static SCREEN_COORDINATE: com.mapbox.maps.RenderedQueryGeometry.Type;
          public static LIST: com.mapbox.maps.RenderedQueryGeometry.Type;
          public static valueOf(param0: string): com.mapbox.maps.RenderedQueryGeometry.Type;
          public static values(): androidNative.Array<com.mapbox.maps.RenderedQueryGeometry.Type>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class RenderedQueryOptions {
        public static class: java.lang.Class<com.mapbox.maps.RenderedQueryOptions>;
        public getLayerIds(): java.util.List<string>;
        public getFilter(): com.mapbox.bindgen.Value;
        public constructor(param0: java.util.List<string>, param1: com.mapbox.bindgen.Value);
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ResourceOptions {
        public static class: java.lang.Class<com.mapbox.maps.ResourceOptions>;
        public getAssetPath(): string;
        public getTileStoreUsageMode(): com.mapbox.maps.TileStoreUsageMode;
        public hashCode(): number;
        public getAccessToken(): string;
        public getBaseURL(): string;
        public getDataPath(): string;
        public equals(param0: any): boolean;
        public toBuilder(): com.mapbox.maps.ResourceOptions.Builder;
        public toString(): string;
        public getTileStore(): com.mapbox.common.TileStore;
      }
      export module ResourceOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.ResourceOptions.Builder>;
          public dataPath(param0: string): com.mapbox.maps.ResourceOptions.Builder;
          public accessToken(param0: string): com.mapbox.maps.ResourceOptions.Builder;
          public baseURL(param0: string): com.mapbox.maps.ResourceOptions.Builder;
          public constructor();
          public tileStoreUsageMode(param0: com.mapbox.maps.TileStoreUsageMode): com.mapbox.maps.ResourceOptions.Builder;
          public tileStore(param0: com.mapbox.common.TileStore): com.mapbox.maps.ResourceOptions.Builder;
          public build(): com.mapbox.maps.ResourceOptions;
          public assetPath(param0: string): com.mapbox.maps.ResourceOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ResponseError {
        public static class: java.lang.Class<com.mapbox.maps.ResponseError>;
        public getReason(): com.mapbox.maps.ResponseErrorReason;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getRetryAfter(): java.util.Date;
        public getMessage(): string;
        public toString(): string;
        public constructor(param0: com.mapbox.maps.ResponseErrorReason, param1: string, param2: java.util.Date);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ResponseErrorReason {
        public static class: java.lang.Class<com.mapbox.maps.ResponseErrorReason>;
        public static NOT_FOUND: com.mapbox.maps.ResponseErrorReason;
        public static SERVER: com.mapbox.maps.ResponseErrorReason;
        public static CONNECTION: com.mapbox.maps.ResponseErrorReason;
        public static RATE_LIMIT: com.mapbox.maps.ResponseErrorReason;
        public static OTHER: com.mapbox.maps.ResponseErrorReason;
        public static valueOf(param0: string): com.mapbox.maps.ResponseErrorReason;
        public static values(): androidNative.Array<com.mapbox.maps.ResponseErrorReason>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ScreenBox {
        public static class: java.lang.Class<com.mapbox.maps.ScreenBox>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public constructor(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate);
        public toString(): string;
        public getMin(): com.mapbox.maps.ScreenCoordinate;
        public getMax(): com.mapbox.maps.ScreenCoordinate;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ScreenCoordinate {
        public static class: java.lang.Class<com.mapbox.maps.ScreenCoordinate>;
        public constructor(param0: number, param1: number);
        public getX(): number;
        public hashCode(): number;
        public getY(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Settings {
        public static class: java.lang.Class<com.mapbox.maps.Settings>;
        public peer: number;
        public static get(param0: string): com.mapbox.bindgen.Value;
        public static set(param0: string, param1: com.mapbox.bindgen.Value): void;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
      }
      export module Settings {
        export class SettingsPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.Settings.SettingsPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Size {
        public static class: java.lang.Class<com.mapbox.maps.Size>;
        public constructor(param0: number, param1: number);
        public getWidth(): number;
        public getHeight(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class SnapshotCompleteCallback {
        public static class: java.lang.Class<com.mapbox.maps.SnapshotCompleteCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.SnapshotCompleteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.MapSnapshot>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.MapSnapshot>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class SnapshotCompleteCallbackNative extends com.mapbox.maps.SnapshotCompleteCallback {
        public static class: java.lang.Class<com.mapbox.maps.SnapshotCompleteCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<string, com.mapbox.maps.MapSnapshot>): void;
      }
      export module SnapshotCompleteCallbackNative {
        export class SnapshotCompleteCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.SnapshotCompleteCallbackNative.SnapshotCompleteCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class SourceQueryOptions {
        public static class: java.lang.Class<com.mapbox.maps.SourceQueryOptions>;
        public getFilter(): com.mapbox.bindgen.Value;
        public constructor(param0: java.util.List<string>, param1: com.mapbox.bindgen.Value);
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
        public getSourceLayerIds(): java.util.List<string>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StyleManager extends com.mapbox.maps.Observable implements com.mapbox.maps.StyleManagerInterface {
        public static class: java.lang.Class<com.mapbox.maps.StyleManager>;
        public getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
        public getStyleImage(param0: string): com.mapbox.maps.Image;
        public hasStyleModel(param0: string): boolean;
        public isStyleLoaded(): boolean;
        public getStyleURI(): string;
        public static getStyleSourcePropertyDefaultValue(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleURI(param0: string): void;
        public addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
        public removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public static getStyleLayerPropertyDefaultValue(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public styleSourceExists(param0: string): boolean;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public styleLayerExists(param0: string): boolean;
        public getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTransition(): com.mapbox.maps.TransitionOptions;
        public setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleJSON(param0: string): void;
        public hasStyleImage(param0: string): boolean;
        public getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
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
        public getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
      }
      export module StyleManager {
        export class StyleManagerPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.StyleManager.StyleManagerPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StyleManagerInterface extends com.mapbox.maps.ObservableInterface {
        public static class: java.lang.Class<com.mapbox.maps.StyleManagerInterface>;
        /**
         * Constructs a new instance of the com.mapbox.maps.StyleManagerInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          getStyleURI(): string;
          setStyleURI(param0: string): void;
          getStyleJSON(): string;
          setStyleJSON(param0: string): void;
          getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
          getStyleTransition(): com.mapbox.maps.TransitionOptions;
          setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
          addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addPersistentStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
          removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          styleLayerExists(param0: string): boolean;
          getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
          setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleSourceProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
          setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleGeoJSONSourceData(param0: string, param1: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleGeoJSONSourceData(param0: string, param1: string, param2: com.mapbox.maps.GeoJSONSourceData): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          styleSourceExists(param0: string): boolean;
          getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleLightProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
          setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
          setStyleLightProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
          setStyleProjectionProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          getStyleImage(param0: string): com.mapbox.maps.Image;
          addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          hasStyleImage(param0: string): boolean;
          addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          hasStyleModel(param0: string): boolean;
          addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          setStyleCustomGeometrySourceTileData(param0: string, param1: com.mapbox.maps.CanonicalTileID, param2: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
          isStyleLoaded(): boolean;
          subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
          unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
          unsubscribe(param0: com.mapbox.maps.Observer): void;
        });
        public constructor();
        public getStyleAtmosphereProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public moveStyleLayer(param0: string, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleModel(param0: string, param1: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLights(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleLayerProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLayerProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public isStyleLayerPersistent(param0: string): com.mapbox.bindgen.Expected<string, java.lang.Boolean>;
        public setStyleTransition(param0: com.mapbox.maps.TransitionOptions): void;
        public getStyleImage(param0: string): com.mapbox.maps.Image;
        public hasStyleModel(param0: string): boolean;
        public isStyleLoaded(): boolean;
        public getStyleURI(): string;
        public removeStyleSource(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperties(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public removeStyleLayer(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleSources(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleURI(param0: string): void;
        public addStyleImage(param0: string, param1: number, param2: com.mapbox.maps.Image, param3: boolean, param4: java.util.List<com.mapbox.maps.ImageStretches>, param5: java.util.List<com.mapbox.maps.ImageStretches>, param6: com.mapbox.maps.ImageContent): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleLayer(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleLightProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public setStyleTerrain(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleProjectionProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public getStyleLayerProperty(param0: string, param1: string): com.mapbox.maps.StylePropertyValue;
        public getStyleDefaultCamera(): com.mapbox.maps.CameraOptions;
        public removeStyleModel(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public styleSourceExists(param0: string): boolean;
        public unsubscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public setStyleAtmosphereProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceRegion(param0: string, param1: com.mapbox.maps.CoordinateBounds): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public styleLayerExists(param0: string): boolean;
        public getStyleLayerProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public addStyleCustomGeometrySource(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addStyleSource(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTransition(): com.mapbox.maps.TransitionOptions;
        public setStyleLight(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleJSON(param0: string): void;
        public hasStyleImage(param0: string): boolean;
        public getStyleLightProperty(param0: string): com.mapbox.maps.StylePropertyValue;
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
        public getStyleSourceProperties(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.Value>;
        public unsubscribe(param0: com.mapbox.maps.Observer): void;
        public removeStyleImage(param0: string): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public addPersistentStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleSourceProperty(param0: string, param1: string, param2: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleProjection(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleLights(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public subscribe(param0: com.mapbox.maps.Observer, param1: java.util.List<string>): void;
        public getStyleLayers(): java.util.List<com.mapbox.maps.StyleObjectInfo>;
        public setStyleTerrainProperty(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public setStyleAtmosphere(param0: com.mapbox.bindgen.Value): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public updateStyleImageSourceImage(param0: string, param1: com.mapbox.maps.Image): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public invalidateStyleCustomGeometrySourceTile(param0: string, param1: com.mapbox.maps.CanonicalTileID): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
        public getStyleTerrainProperty(param0: string): com.mapbox.maps.StylePropertyValue;
        public addStyleCustomLayer(param0: string, param1: com.mapbox.maps.CustomLayerHost, param2: com.mapbox.maps.LayerPosition): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StyleObjectInfo {
        public static class: java.lang.Class<com.mapbox.maps.StyleObjectInfo>;
        public getType(): string;
        public getId(): string;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
        public constructor(param0: string, param1: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePack {
        public static class: java.lang.Class<com.mapbox.maps.StylePack>;
        public constructor(param0: string, param1: com.mapbox.maps.GlyphsRasterizationMode, param2: number, param3: number, param4: number, param5: java.util.Date);
        public getGlyphsRasterizationMode(): com.mapbox.maps.GlyphsRasterizationMode;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getCompletedResourceCount(): number;
        public getStyleURI(): string;
        public getCompletedResourceSize(): number;
        public toString(): string;
        public getRequiredResourceCount(): number;
        public getExpires(): java.util.Date;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePackCallback {
        public static class: java.lang.Class<com.mapbox.maps.StylePackCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.StylePackCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.maps.StylePackError, com.mapbox.maps.StylePack>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.maps.StylePackError, com.mapbox.maps.StylePack>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePackCallbackNative extends com.mapbox.maps.StylePackCallback {
        public static class: java.lang.Class<com.mapbox.maps.StylePackCallbackNative>;
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.maps.StylePackError, com.mapbox.maps.StylePack>): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module StylePackCallbackNative {
        export class StylePackCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.StylePackCallbackNative.StylePackCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePackError {
        public static class: java.lang.Class<com.mapbox.maps.StylePackError>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public constructor(param0: com.mapbox.maps.StylePackErrorType, param1: string);
        public getMessage(): string;
        public toString(): string;
        public getType(): com.mapbox.maps.StylePackErrorType;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePackErrorType {
        public static class: java.lang.Class<com.mapbox.maps.StylePackErrorType>;
        public static CANCELED: com.mapbox.maps.StylePackErrorType;
        public static DOES_NOT_EXIST: com.mapbox.maps.StylePackErrorType;
        public static DISK_FULL: com.mapbox.maps.StylePackErrorType;
        public static OTHER: com.mapbox.maps.StylePackErrorType;
        public static valueOf(param0: string): com.mapbox.maps.StylePackErrorType;
        public toString(): string;
        public static values(): androidNative.Array<com.mapbox.maps.StylePackErrorType>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePackLoadOptions {
        public static class: java.lang.Class<com.mapbox.maps.StylePackLoadOptions>;
        public getGlyphsRasterizationMode(): com.mapbox.maps.GlyphsRasterizationMode;
        public hashCode(): number;
        public toBuilder(): com.mapbox.maps.StylePackLoadOptions.Builder;
        public equals(param0: any): boolean;
        public getAcceptExpired(): boolean;
        public getMetadata(): com.mapbox.bindgen.Value;
        public toString(): string;
      }
      export module StylePackLoadOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.StylePackLoadOptions.Builder>;
          public build(): com.mapbox.maps.StylePackLoadOptions;
          public glyphsRasterizationMode(param0: com.mapbox.maps.GlyphsRasterizationMode): com.mapbox.maps.StylePackLoadOptions.Builder;
          public constructor();
          public metadata(param0: com.mapbox.bindgen.Value): com.mapbox.maps.StylePackLoadOptions.Builder;
          public acceptExpired(param0: boolean): com.mapbox.maps.StylePackLoadOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePackLoadProgress {
        public static class: java.lang.Class<com.mapbox.maps.StylePackLoadProgress>;
        public getLoadedResourceCount(): number;
        public getLoadedResourceSize(): number;
        public hashCode(): number;
        public getErroredResourceCount(): number;
        public equals(param0: any): boolean;
        public getCompletedResourceCount(): number;
        public getCompletedResourceSize(): number;
        public toString(): string;
        public getRequiredResourceCount(): number;
        public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePackLoadProgressCallback {
        public static class: java.lang.Class<com.mapbox.maps.StylePackLoadProgressCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.StylePackLoadProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.maps.StylePackLoadProgress): void });
        public constructor();
        public run(param0: com.mapbox.maps.StylePackLoadProgress): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePackLoadProgressCallbackNative extends com.mapbox.maps.StylePackLoadProgressCallback {
        public static class: java.lang.Class<com.mapbox.maps.StylePackLoadProgressCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.maps.StylePackLoadProgress): void;
      }
      export module StylePackLoadProgressCallbackNative {
        export class StylePackLoadProgressCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.StylePackLoadProgressCallbackNative.StylePackLoadProgressCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePackMetadataCallback {
        public static class: java.lang.Class<com.mapbox.maps.StylePackMetadataCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.StylePackMetadataCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.maps.StylePackError, com.mapbox.bindgen.Value>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.maps.StylePackError, com.mapbox.bindgen.Value>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePackMetadataCallbackNative extends com.mapbox.maps.StylePackMetadataCallback {
        public static class: java.lang.Class<com.mapbox.maps.StylePackMetadataCallbackNative>;
        public static cleanNativePeer(param0: number): void;
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.maps.StylePackError, com.mapbox.bindgen.Value>): void;
      }
      export module StylePackMetadataCallbackNative {
        export class StylePackMetadataCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.StylePackMetadataCallbackNative.StylePackMetadataCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePacksCallback {
        public static class: java.lang.Class<com.mapbox.maps.StylePacksCallback>;
        /**
         * Constructs a new instance of the com.mapbox.maps.StylePacksCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(param0: com.mapbox.bindgen.Expected<com.mapbox.maps.StylePackError, java.util.List<com.mapbox.maps.StylePack>>): void });
        public constructor();
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.maps.StylePackError, java.util.List<com.mapbox.maps.StylePack>>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePacksCallbackNative extends com.mapbox.maps.StylePacksCallback {
        public static class: java.lang.Class<com.mapbox.maps.StylePacksCallbackNative>;
        public run(param0: com.mapbox.bindgen.Expected<com.mapbox.maps.StylePackError, java.util.List<com.mapbox.maps.StylePack>>): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module StylePacksCallbackNative {
        export class StylePacksCallbackPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.StylePacksCallbackNative.StylePacksCallbackPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePropertyValue {
        public static class: java.lang.Class<com.mapbox.maps.StylePropertyValue>;
        public getValue(): com.mapbox.bindgen.Value;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getKind(): com.mapbox.maps.StylePropertyValueKind;
        public toString(): string;
        public constructor(param0: com.mapbox.bindgen.Value, param1: com.mapbox.maps.StylePropertyValueKind);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class StylePropertyValueKind {
        public static class: java.lang.Class<com.mapbox.maps.StylePropertyValueKind>;
        public static UNDEFINED: com.mapbox.maps.StylePropertyValueKind;
        public static CONSTANT: com.mapbox.maps.StylePropertyValueKind;
        public static EXPRESSION: com.mapbox.maps.StylePropertyValueKind;
        public static TRANSITION: com.mapbox.maps.StylePropertyValueKind;
        public static valueOf(param0: string): com.mapbox.maps.StylePropertyValueKind;
        public static values(): androidNative.Array<com.mapbox.maps.StylePropertyValueKind>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Task {
        public static class: java.lang.Class<com.mapbox.maps.Task>;
        /**
         * Constructs a new instance of the com.mapbox.maps.Task interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { run(): void });
        public constructor();
        public run(): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class TaskNative extends com.mapbox.maps.Task {
        public static class: java.lang.Class<com.mapbox.maps.TaskNative>;
        public run(): void;
        public static cleanNativePeer(param0: number): void;
      }
      export module TaskNative {
        export class TaskPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.TaskNative.TaskPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class TileCoverOptions {
        public static class: java.lang.Class<com.mapbox.maps.TileCoverOptions>;
        public getMinZoom(): java.lang.Byte;
        public getTileSize(): java.lang.Short;
        public hashCode(): number;
        public toBuilder(): com.mapbox.maps.TileCoverOptions.Builder;
        public equals(param0: any): boolean;
        public getRoundZoom(): java.lang.Boolean;
        public toString(): string;
        public getMaxZoom(): java.lang.Byte;
      }
      export module TileCoverOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.TileCoverOptions.Builder>;
          public build(): com.mapbox.maps.TileCoverOptions;
          public constructor();
          public maxZoom(param0: java.lang.Byte): com.mapbox.maps.TileCoverOptions.Builder;
          public roundZoom(param0: java.lang.Boolean): com.mapbox.maps.TileCoverOptions.Builder;
          public tileSize(param0: java.lang.Short): com.mapbox.maps.TileCoverOptions.Builder;
          public minZoom(param0: java.lang.Byte): com.mapbox.maps.TileCoverOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class TileOptions {
        public static class: java.lang.Class<com.mapbox.maps.TileOptions>;
        public getTolerance(): number;
        public getBuffer(): number;
        public toBuilder(): com.mapbox.maps.TileOptions.Builder;
        public hashCode(): number;
        public getClip(): boolean;
        public equals(param0: any): boolean;
        public getTileSize(): number;
        public getWrap(): boolean;
        public toString(): string;
      }
      export module TileOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.TileOptions.Builder>;
          public tolerance(param0: number): com.mapbox.maps.TileOptions.Builder;
          public tileSize(param0: number): com.mapbox.maps.TileOptions.Builder;
          public build(): com.mapbox.maps.TileOptions;
          public constructor();
          public wrap(param0: boolean): com.mapbox.maps.TileOptions.Builder;
          public buffer(param0: number): com.mapbox.maps.TileOptions.Builder;
          public clip(param0: boolean): com.mapbox.maps.TileOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class TileStoreUsageMode {
        public static class: java.lang.Class<com.mapbox.maps.TileStoreUsageMode>;
        public static DISABLED: com.mapbox.maps.TileStoreUsageMode;
        public static READ_ONLY: com.mapbox.maps.TileStoreUsageMode;
        public static READ_AND_UPDATE: com.mapbox.maps.TileStoreUsageMode;
        public static values(): androidNative.Array<com.mapbox.maps.TileStoreUsageMode>;
        public toString(): string;
        public static valueOf(param0: string): com.mapbox.maps.TileStoreUsageMode;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class TilesetDescriptorOptions {
        public static class: java.lang.Class<com.mapbox.maps.TilesetDescriptorOptions>;
        public getPixelRatio(): number;
        public hashCode(): number;
        public toBuilder(): com.mapbox.maps.TilesetDescriptorOptions.Builder;
        public equals(param0: any): boolean;
        public getStylePackOptions(): com.mapbox.maps.StylePackLoadOptions;
        public getStyleURI(): string;
        public toString(): string;
        public getMaxZoom(): number;
        public getMinZoom(): number;
      }
      export module TilesetDescriptorOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.TilesetDescriptorOptions.Builder>;
          public constructor();
          public build(): com.mapbox.maps.TilesetDescriptorOptions;
          public styleURI(param0: string): com.mapbox.maps.TilesetDescriptorOptions.Builder;
          public maxZoom(param0: number): com.mapbox.maps.TilesetDescriptorOptions.Builder;
          public pixelRatio(param0: number): com.mapbox.maps.TilesetDescriptorOptions.Builder;
          public stylePackOptions(param0: com.mapbox.maps.StylePackLoadOptions): com.mapbox.maps.TilesetDescriptorOptions.Builder;
          public minZoom(param0: number): com.mapbox.maps.TilesetDescriptorOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class TilesetDescriptorOptionsForTilesets {
        public static class: java.lang.Class<com.mapbox.maps.TilesetDescriptorOptionsForTilesets>;
        public getExtraOptions(): com.mapbox.bindgen.Value;
        public getPixelRatio(): number;
        public getTilesets(): java.util.List<string>;
        public toBuilder(): com.mapbox.maps.TilesetDescriptorOptionsForTilesets.Builder;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
        public getMaxZoom(): number;
        public getMinZoom(): number;
      }
      export module TilesetDescriptorOptionsForTilesets {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.TilesetDescriptorOptionsForTilesets.Builder>;
          public minZoom(param0: number): com.mapbox.maps.TilesetDescriptorOptionsForTilesets.Builder;
          public constructor();
          public maxZoom(param0: number): com.mapbox.maps.TilesetDescriptorOptionsForTilesets.Builder;
          public tilesets(param0: java.util.List<string>): com.mapbox.maps.TilesetDescriptorOptionsForTilesets.Builder;
          public build(): com.mapbox.maps.TilesetDescriptorOptionsForTilesets;
          public extraOptions(param0: com.mapbox.bindgen.Value): com.mapbox.maps.TilesetDescriptorOptionsForTilesets.Builder;
          public pixelRatio(param0: number): com.mapbox.maps.TilesetDescriptorOptionsForTilesets.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class TransitionOptions {
        public static class: java.lang.Class<com.mapbox.maps.TransitionOptions>;
        public toBuilder(): com.mapbox.maps.TransitionOptions.Builder;
        public getDelay(): java.lang.Long;
        public hashCode(): number;
        public getEnablePlacementTransitions(): java.lang.Boolean;
        public equals(param0: any): boolean;
        public toString(): string;
        public getDuration(): java.lang.Long;
      }
      export module TransitionOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.TransitionOptions.Builder>;
          public duration(param0: java.lang.Long): com.mapbox.maps.TransitionOptions.Builder;
          public delay(param0: java.lang.Long): com.mapbox.maps.TransitionOptions.Builder;
          public constructor();
          public enablePlacementTransitions(param0: java.lang.Boolean): com.mapbox.maps.TransitionOptions.Builder;
          public build(): com.mapbox.maps.TransitionOptions;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Vec3 {
        public static class: java.lang.Class<com.mapbox.maps.Vec3>;
        public constructor(param0: number, param1: number, param2: number);
        public getX(): number;
        public hashCode(): number;
        public getY(): number;
        public getZ(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Vec4 {
        public static class: java.lang.Class<com.mapbox.maps.Vec4>;
        public getW(): number;
        public constructor(param0: number, param1: number, param2: number, param3: number);
        public getX(): number;
        public hashCode(): number;
        public getY(): number;
        public getZ(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class Version {
        public static class: java.lang.Class<com.mapbox.maps.Version>;
        public peer: number;
        public static getVersionString(): string;
        public static getRevisionString(): string;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public static getMinorVersion(): number;
        public static getMajorVersion(): number;
        public static getPatchVersion(): number;
      }
      export module Version {
        export class VersionPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.Version.VersionPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ViewAnnotationAnchor {
        public static class: java.lang.Class<com.mapbox.maps.ViewAnnotationAnchor>;
        public static TOP: com.mapbox.maps.ViewAnnotationAnchor;
        public static LEFT: com.mapbox.maps.ViewAnnotationAnchor;
        public static BOTTOM: com.mapbox.maps.ViewAnnotationAnchor;
        public static RIGHT: com.mapbox.maps.ViewAnnotationAnchor;
        public static TOP_LEFT: com.mapbox.maps.ViewAnnotationAnchor;
        public static BOTTOM_RIGHT: com.mapbox.maps.ViewAnnotationAnchor;
        public static TOP_RIGHT: com.mapbox.maps.ViewAnnotationAnchor;
        public static BOTTOM_LEFT: com.mapbox.maps.ViewAnnotationAnchor;
        public static CENTER: com.mapbox.maps.ViewAnnotationAnchor;
        public static values(): androidNative.Array<com.mapbox.maps.ViewAnnotationAnchor>;
        public static valueOf(param0: string): com.mapbox.maps.ViewAnnotationAnchor;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ViewAnnotationOptions {
        public static class: java.lang.Class<com.mapbox.maps.ViewAnnotationOptions>;
        public getGeometry(): com.mapbox.geojson.Geometry;
        public getAnchor(): com.mapbox.maps.ViewAnnotationAnchor;
        public getOffsetX(): java.lang.Integer;
        public toString(): string;
        public getAssociatedFeatureId(): string;
        public getHeight(): java.lang.Integer;
        public getWidth(): java.lang.Integer;
        public getAllowOverlap(): java.lang.Boolean;
        public getOffsetY(): java.lang.Integer;
        public getSelected(): java.lang.Boolean;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getVisible(): java.lang.Boolean;
        public toBuilder(): com.mapbox.maps.ViewAnnotationOptions.Builder;
      }
      export module ViewAnnotationOptions {
        export class Builder {
          public static class: java.lang.Class<com.mapbox.maps.ViewAnnotationOptions.Builder>;
          public selected(param0: java.lang.Boolean): com.mapbox.maps.ViewAnnotationOptions.Builder;
          public allowOverlap(param0: java.lang.Boolean): com.mapbox.maps.ViewAnnotationOptions.Builder;
          public visible(param0: java.lang.Boolean): com.mapbox.maps.ViewAnnotationOptions.Builder;
          public constructor();
          public width(param0: java.lang.Integer): com.mapbox.maps.ViewAnnotationOptions.Builder;
          public geometry(param0: com.mapbox.geojson.Geometry): com.mapbox.maps.ViewAnnotationOptions.Builder;
          public anchor(param0: com.mapbox.maps.ViewAnnotationAnchor): com.mapbox.maps.ViewAnnotationOptions.Builder;
          public offsetX(param0: java.lang.Integer): com.mapbox.maps.ViewAnnotationOptions.Builder;
          public height(param0: java.lang.Integer): com.mapbox.maps.ViewAnnotationOptions.Builder;
          public build(): com.mapbox.maps.ViewAnnotationOptions;
          public associatedFeatureId(param0: string): com.mapbox.maps.ViewAnnotationOptions.Builder;
          public offsetY(param0: java.lang.Integer): com.mapbox.maps.ViewAnnotationOptions.Builder;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ViewAnnotationPositionDescriptor {
        public static class: java.lang.Class<com.mapbox.maps.ViewAnnotationPositionDescriptor>;
        public getWidth(): number;
        public getHeight(): number;
        public getLeftTopCoordinate(): com.mapbox.maps.ScreenCoordinate;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public constructor(param0: string, param1: number, param2: number, param3: com.mapbox.maps.ScreenCoordinate);
        public getIdentifier(): string;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ViewAnnotationPositionsUpdateListener {
        public static class: java.lang.Class<com.mapbox.maps.ViewAnnotationPositionsUpdateListener>;
        /**
         * Constructs a new instance of the com.mapbox.maps.ViewAnnotationPositionsUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onViewAnnotationPositionsUpdate(param0: java.util.List<com.mapbox.maps.ViewAnnotationPositionDescriptor>): void });
        public constructor();
        public onViewAnnotationPositionsUpdate(param0: java.util.List<com.mapbox.maps.ViewAnnotationPositionDescriptor>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ViewAnnotationPositionsUpdateListenerNative extends com.mapbox.maps.ViewAnnotationPositionsUpdateListener {
        public static class: java.lang.Class<com.mapbox.maps.ViewAnnotationPositionsUpdateListenerNative>;
        public peer: number;
        public static cleanNativePeer(param0: number): void;
        public constructor(param0: number);
        public onViewAnnotationPositionsUpdate(param0: java.util.List<com.mapbox.maps.ViewAnnotationPositionDescriptor>): void;
      }
      export module ViewAnnotationPositionsUpdateListenerNative {
        export class ViewAnnotationPositionsUpdateListenerPeerCleaner {
          public static class: java.lang.Class<com.mapbox.maps.ViewAnnotationPositionsUpdateListenerNative.ViewAnnotationPositionsUpdateListenerPeerCleaner>;
          public run(): void;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ViewportMode {
        public static class: java.lang.Class<com.mapbox.maps.ViewportMode>;
        public static DEFAULT: com.mapbox.maps.ViewportMode;
        public static FLIPPED_Y: com.mapbox.maps.ViewportMode;
        public static values(): androidNative.Array<com.mapbox.maps.ViewportMode>;
        public static valueOf(param0: string): com.mapbox.maps.ViewportMode;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module assets {
        export class AssetManagerProvider {
          public static class: java.lang.Class<com.mapbox.maps.assets.AssetManagerProvider>;
          public initialize(param0: globalAndroid.content.res.AssetManager): void;
          public constructor();
          public finalize(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module core {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.maps.core.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module loader {
        export class MapboxMaps {
          public static class: java.lang.Class<com.mapbox.maps.loader.MapboxMaps>;
          public static INSTANCE: com.mapbox.maps.loader.MapboxMaps;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module loader {
        export class MapboxMapsInitializer extends androidx.startup.Initializer<com.mapbox.maps.loader.MapboxMaps> {
          public static class: java.lang.Class<com.mapbox.maps.loader.MapboxMapsInitializer>;
          public constructor();
          public dependencies(): java.util.List<java.lang.Class<any>>;
          public create(param0: globalAndroid.content.Context): com.mapbox.maps.loader.MapboxMaps;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module text {
        export class LocalGlyphRasterizer {
          public static class: java.lang.Class<com.mapbox.maps.text.LocalGlyphRasterizer>;
          public getFontMetrics(param0: string, param1: boolean): com.mapbox.maps.text.LocalGlyphRasterizer.FontMetrics;
          public getGlyphMetrics(param0: string): com.mapbox.maps.text.LocalGlyphRasterizer.GlyphMetrics;
        }
        export module LocalGlyphRasterizer {
          export class FontMetrics {
            public static class: java.lang.Class<com.mapbox.maps.text.LocalGlyphRasterizer.FontMetrics>;
          }
          export class GlyphMetrics {
            public static class: java.lang.Class<com.mapbox.maps.text.LocalGlyphRasterizer.GlyphMetrics>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module text {
        export class StringUtils {
          public static class: java.lang.Class<com.mapbox.maps.text.StringUtils>;
        }
      }
    }
  }
}

//Generics information:
