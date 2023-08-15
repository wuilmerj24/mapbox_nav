/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module gestures {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.BuildConfig>;
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
        export module gestures {
          export class GestureState {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GestureState>;
            public constructor(param0: com.mapbox.android.gestures.AndroidGesturesManager);
            public saveAndDisable(param0: com.mapbox.maps.plugin.gestures.GestureState.Type): boolean;
            public restore(param0: com.mapbox.maps.plugin.gestures.GestureState.Type): void;
            public peek(param0: com.mapbox.maps.plugin.gestures.GestureState.Type): java.lang.Boolean;
          }
          export module GestureState {
            export class Type {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GestureState.Type>;
              public static DoubleTap: com.mapbox.maps.plugin.gestures.GestureState.Type;
              public static Scale: com.mapbox.maps.plugin.gestures.GestureState.Type;
              public static ScaleQuickZoom: com.mapbox.maps.plugin.gestures.GestureState.Type;
              public static Shove: com.mapbox.maps.plugin.gestures.GestureState.Type;
              public static values(): androidNative.Array<com.mapbox.maps.plugin.gestures.GestureState.Type>;
              public static valueOf(param0: string): com.mapbox.maps.plugin.gestures.GestureState.Type;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GestureState.WhenMappings>;
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
        export module gestures {
          export class GesturesPluginImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesPluginImpl>;
            public static ROTATION_ANGLE_THRESHOLD: number;
            public static MAX_SHOVE_ANGLE: number;
            public calculateZoomBy$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): number;
            public handleZoomAnimation$plugin_gestures_publicRelease(param0: boolean, param1: com.mapbox.maps.ScreenCoordinate, param2: boolean): void;
            public bind$plugin_gestures_publicRelease(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager, param2: globalAndroid.util.AttributeSet, param3: number): void;
            public handleShoveBegin$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.ShoveGestureDetector): boolean;
            public handleSingleTapUpEvent$plugin_gestures_publicRelease(): boolean;
            public addOnMapLongClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapLongClickListener): void;
            public getDoubleTapRegistered$plugin_gestures_publicRelease(): boolean;
            public bind(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void;
            public cleanup(): void;
            public handleDoubleTapEvent$plugin_gestures_publicRelease(param0: globalAndroid.view.MotionEvent, param1: number): boolean;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public isPointAboveHorizon$plugin_gestures_publicRelease(param0: com.mapbox.maps.ScreenCoordinate): boolean;
            public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: com.mapbox.maps.extension.style.StyleInterface);
            public addProtectedAnimationOwner(param0: string): void;
            public handleScaleBegin$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): boolean;
            public setGesturesManager(param0: com.mapbox.android.gestures.AndroidGesturesManager, param1: boolean, param2: boolean): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: globalAndroid.os.Handler, param4: globalAndroid.os.Handler);
            public getGesturesManager(): com.mapbox.android.gestures.AndroidGesturesManager;
            public handleRotateEnd$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.RotateGestureDetector, param1: number, param2: number, param3: number): void;
            public addOnMoveListener(param0: com.mapbox.maps.plugin.gestures.OnMoveListener): void;
            public onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public handleMove$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.MoveGestureDetector, param1: number, param2: number): boolean;
            public removeOnScaleListener(param0: com.mapbox.maps.plugin.gestures.OnScaleListener): void;
            public initialize(): void;
            public setCenterScreen$plugin_gestures_publicRelease(param0: com.mapbox.maps.ScreenCoordinate): void;
            public setDoubleTapRegistered$plugin_gestures_publicRelease(param0: boolean): void;
            public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
            public removeOnMapLongClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapLongClickListener): void;
            public handleFlingEvent$plugin_gestures_publicRelease(param0: globalAndroid.view.MotionEvent, param1: number, param2: number): boolean;
            public addOnShoveListener(param0: com.mapbox.maps.plugin.gestures.OnShoveListener): void;
            public handleLongPressEvent$plugin_gestures_publicRelease(param0: com.mapbox.maps.ScreenCoordinate): void;
            public handleRotateBegin$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.RotateGestureDetector): boolean;
            public handleShove$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.ShoveGestureDetector, param1: number): boolean;
            public getInternalSettings(): com.mapbox.maps.plugin.gestures.generated.GesturesSettings;
            public addOnMapClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapClickListener): void;
            public addOnFlingListener(param0: com.mapbox.maps.plugin.gestures.OnFlingListener): void;
            public handleScaleEnd$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.StandardScaleGestureDetector, param1: number, param2: number): void;
            public handleClickEvent$plugin_gestures_publicRelease(param0: com.mapbox.maps.ScreenCoordinate): boolean;
            public animateZoomOut$plugin_gestures_publicRelease(param0: com.mapbox.maps.ScreenCoordinate, param1: boolean): void;
            public removeOnMoveListener(param0: com.mapbox.maps.plugin.gestures.OnMoveListener): void;
            public handleMoveStartEvent$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.MoveGestureDetector): boolean;
            public removeOnRotateListener(param0: com.mapbox.maps.plugin.gestures.OnRotateListener): void;
            public handleMoveEnd$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.MoveGestureDetector): void;
            public addOnScaleListener(param0: com.mapbox.maps.plugin.gestures.OnScaleListener): void;
            public removeOnFlingListener(param0: com.mapbox.maps.plugin.gestures.OnFlingListener): void;
            public handleShoveEnd$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.ShoveGestureDetector): void;
            public removeOnShoveListener(param0: com.mapbox.maps.plugin.gestures.OnShoveListener): void;
            public addOnRotateListener(param0: com.mapbox.maps.plugin.gestures.OnRotateListener): void;
            public setInternalSettings(param0: com.mapbox.maps.plugin.gestures.generated.GesturesSettings): void;
            public handleRotate$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.RotateGestureDetector, param1: number): boolean;
            public removeProtectedAnimationOwner(param0: string): void;
            public applySettings(): void;
            public getCenterScreen$plugin_gestures_publicRelease(): com.mapbox.maps.ScreenCoordinate;
            public removeOnMapClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapClickListener): void;
            public handleScale$plugin_gestures_publicRelease(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): boolean;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: number);
            public onSizeChanged(param0: number, param1: number): void;
          }
          export module GesturesPluginImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesPluginImpl.Companion>;
            }
            export class MoveGestureListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesPluginImpl.MoveGestureListener>;
              public onMove(param0: com.mapbox.android.gestures.MoveGestureDetector, param1: number, param2: number): boolean;
              public onMoveEnd(param0: com.mapbox.android.gestures.MoveGestureDetector, param1: number, param2: number): void;
              public constructor(param0: com.mapbox.maps.plugin.gestures.GesturesPluginImpl);
              public onMoveBegin(param0: com.mapbox.android.gestures.MoveGestureDetector): boolean;
            }
            export class RotateGestureListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesPluginImpl.RotateGestureListener>;
              public constructor(param0: com.mapbox.maps.plugin.gestures.GesturesPluginImpl);
              public onRotateBegin(param0: com.mapbox.android.gestures.RotateGestureDetector): boolean;
              public onRotateEnd(param0: com.mapbox.android.gestures.RotateGestureDetector, param1: number, param2: number, param3: number): void;
              public onRotate(param0: com.mapbox.android.gestures.RotateGestureDetector, param1: number, param2: number): boolean;
            }
            export class ScaleGestureListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesPluginImpl.ScaleGestureListener>;
              public constructor(param0: com.mapbox.maps.plugin.gestures.GesturesPluginImpl);
              public onScaleEnd(param0: com.mapbox.android.gestures.StandardScaleGestureDetector, param1: number, param2: number): void;
              public onScaleBegin(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): boolean;
              public onScale(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): boolean;
            }
            export class ShoveGestureListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesPluginImpl.ShoveGestureListener>;
              public onShoveBegin(param0: com.mapbox.android.gestures.ShoveGestureDetector): boolean;
              public constructor(param0: com.mapbox.maps.plugin.gestures.GesturesPluginImpl);
              public onShove(param0: com.mapbox.android.gestures.ShoveGestureDetector, param1: number, param2: number): boolean;
              public onShoveEnd(param0: com.mapbox.android.gestures.ShoveGestureDetector, param1: number, param2: number): void;
            }
            export class StandardGestureListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesPluginImpl.StandardGestureListener>;
              public onDown(param0: globalAndroid.view.MotionEvent): boolean;
              public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
              public onLongPress(param0: globalAndroid.view.MotionEvent): void;
              public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
              public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
              public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
              public constructor(param0: number);
            }
            export class TapGestureListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesPluginImpl.TapGestureListener>;
              public constructor(param0: com.mapbox.maps.plugin.gestures.GesturesPluginImpl);
              public onMultiFingerTap(param0: com.mapbox.android.gestures.MultiFingerTapGestureDetector, param1: number): boolean;
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
        export module gestures {
          export class GesturesUtils {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesUtils>;
            public static isScrollVerticallyLimited(param0: com.mapbox.maps.plugin.gestures.generated.GesturesSettings): boolean;
            public static removeOnFlingListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnFlingListener): void;
            public static getGesturesManager(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate): com.mapbox.android.gestures.AndroidGesturesManager;
            public static addOnScaleListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnScaleListener): void;
            public static addOnFlingListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnFlingListener): void;
            public static isScrollHorizontallyLimited(param0: com.mapbox.maps.plugin.gestures.generated.GesturesSettings): boolean;
            public static removeOnMoveListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnMoveListener): void;
            public static removeOnMapClickListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnMapClickListener): void;
            public static addOnShoveListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnShoveListener): void;
            /** @deprecated */
            public static getGesturesSettings(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate): com.mapbox.maps.plugin.gestures.generated.GesturesSettings;
            public static addOnMapClickListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnMapClickListener): void;
            public static addOnMoveListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnMoveListener): void;
            public static getGestures(param0: com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate): com.mapbox.maps.plugin.gestures.GesturesPlugin;
            public static removeOnRotateListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnRotateListener): void;
            public static removeOnScaleListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnScaleListener): void;
            public static removeOnShoveListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnShoveListener): void;
            public static addOnMapLongClickListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnMapLongClickListener): void;
            public static setGesturesManager(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.android.gestures.AndroidGesturesManager, param2: boolean, param3: boolean): void;
            public static addOnRotateListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnRotateListener): void;
            public static removeOnMapLongClickListener(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.plugin.gestures.OnMapLongClickListener): void;
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
        export module gestures {
          export module generated {
            export class GesturesAttributeParser {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.generated.GesturesAttributeParser>;
              public static INSTANCE: com.mapbox.maps.plugin.gestures.generated.GesturesAttributeParser;
              public parseGesturesSettings(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): com.mapbox.maps.plugin.gestures.generated.GesturesSettings;
            }
          }
        }
      }
    }
  }
}

//Generics information:
