/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module overlay {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.overlay.BuildConfig>;
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
        export module overlay {
          export class MapOverlayPluginImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.overlay.MapOverlayPluginImpl>;
            public getWidth$plugin_overlay_publicRelease(): number;
            public constructor();
            public setHeight$plugin_overlay_publicRelease(param0: number): void;
            public setDisplayingAreaMargins(param0: number, param1: number, param2: number, param3: number): void;
            public setWidth$plugin_overlay_publicRelease(param0: number): void;
            public getHeight$plugin_overlay_publicRelease(): number;
            public registerOverlays(param0: java.util.List<any>): void;
            public unregisterOverlays(param0: java.util.List<any>): void;
            public registerMapOverlayCoordinatesProvider(param0: com.mapbox.maps.plugin.overlay.MapOverlayCoordinatesProvider): void;
            public initialize(): void;
            public cleanup(): void;
            public onSizeChanged(param0: number, param1: number): void;
            public unregisterMapOverlayCoordinatesProvider(): void;
            public registerOverlay(param0: globalAndroid.view.View): void;
            public getEdgeInsets(): com.mapbox.maps.EdgeInsets;
            public unregisterOverlay(param0: globalAndroid.view.View): void;
            public reframe(param0: com.mapbox.maps.plugin.overlay.OnReframeFinished): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          }
          export module MapOverlayPluginImpl {
            export class MapOverLayRect extends java.lang.Comparable<com.mapbox.maps.plugin.overlay.MapOverlayPluginImpl.MapOverLayRect> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.overlay.MapOverlayPluginImpl.MapOverLayRect>;
              public setTop(param0: number): void;
              public setRight(param0: number): void;
              public getTop(): number;
              public getRight(): number;
              public isOverLap(param0: com.mapbox.maps.plugin.overlay.MapOverlayPluginImpl.MapOverLayRect): boolean;
              public setBottom(param0: number): void;
              public getBottom(): number;
              public updateTop(param0: number): com.mapbox.maps.plugin.overlay.MapOverlayPluginImpl.MapOverLayRect;
              public compareTo(param0: com.mapbox.maps.plugin.overlay.MapOverlayPluginImpl.MapOverLayRect): number;
              public updateBottom(param0: number): com.mapbox.maps.plugin.overlay.MapOverlayPluginImpl.MapOverLayRect;
              public getLeft(): number;
              public updateLeft(param0: number): com.mapbox.maps.plugin.overlay.MapOverlayPluginImpl.MapOverLayRect;
              public updateRight(param0: number): com.mapbox.maps.plugin.overlay.MapOverlayPluginImpl.MapOverLayRect;
              public setLeft(param0: number): void;
              public constructor(param0: number, param1: number, param2: number, param3: number);
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
        export module overlay {
          export class MapOverlayUtils {
            public static class: java.lang.Class<com.mapbox.maps.plugin.overlay.MapOverlayUtils>;
            public static getOverlay(param0: com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate): com.mapbox.maps.plugin.overlay.MapOverlayPlugin;
          }
        }
      }
    }
  }
}

//Generics information:
