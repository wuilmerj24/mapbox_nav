/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module compass {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.compass.BuildConfig>;
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
        export module compass {
          export class CompassViewImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.compass.CompassViewImpl>;
            public getCompassGravity(): number;
            public setCompassGravity(param0: number): void;
            public constructor(param0: globalAndroid.content.Context);
            public getCompassRotation(): number;
            public setCompassAlpha(param0: number): void;
            public setCompassEnabled(param0: boolean): void;
            public isCompassEnabled(): boolean;
            public injectPresenter$plugin_compass_publicRelease(param0: com.mapbox.maps.plugin.compass.CompassPlugin): void;
            public isCompassVisible(): boolean;
            public setCompassRotation(param0: number): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public getCompassImage(): globalAndroid.graphics.drawable.Drawable;
            public setCompassVisible(param0: boolean): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public setCompassMargins(param0: number, param1: number, param2: number, param3: number): void;
            public setCompassImage(param0: globalAndroid.graphics.drawable.Drawable): void;
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
        export module compass {
          export class CompassViewPlugin {
            public static class: java.lang.Class<com.mapbox.maps.plugin.compass.CompassViewPlugin>;
            public constructor();
            public setBearing$plugin_compass_publicRelease(param0: number): void;
            public removeCompassClickListener(param0: com.mapbox.maps.plugin.compass.OnCompassClickListener): void;
            public setInternalSettings(param0: com.mapbox.maps.plugin.compass.generated.CompassSettings): void;
            public onCameraMove(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidNative.Array<java.lang.Double>): void;
            public getBearing$plugin_compass_publicRelease(): number;
            public bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
            public onCompassClicked(): void;
            public getInternalSettings(): com.mapbox.maps.plugin.compass.generated.CompassSettings;
            public setEnabled(param0: boolean): void;
            public onStop(): void;
            public applySettings(): void;
            public getEnabled(): boolean;
            public initialize(): void;
            public onPluginView(param0: globalAndroid.view.View): void;
            public constructor(param0: any, param1: globalAndroid.animation.ValueAnimator, param2: globalAndroid.os.Handler);
            public cleanup(): void;
            public addCompassClickListener(param0: com.mapbox.maps.plugin.compass.OnCompassClickListener): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public onStart(): void;
          }
          export module CompassViewPlugin {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.compass.CompassViewPlugin.Companion>;
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
        export module compass {
          export module generated {
            export class CompassAttributeParser {
              public static class: java.lang.Class<com.mapbox.maps.plugin.compass.generated.CompassAttributeParser>;
              public static INSTANCE: com.mapbox.maps.plugin.compass.generated.CompassAttributeParser;
              public parseCompassSettings(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): com.mapbox.maps.plugin.compass.generated.CompassSettings;
            }
          }
        }
      }
    }
  }
}

//Generics information:
