/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module animation {
          export class CameraAnimationsPluginImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimationsPluginImpl>;
            public cameraAnimationsFactory: com.mapbox.maps.plugin.animation.CameraAnimatorsFactory;
            public static TAG: string;
            public performMapJump$plugin_animation_publicRelease(param0: com.mapbox.maps.CameraOptions): void;
            public registerAnimators(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>): void;
            public addCameraZoomChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public moveBy(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public addCameraCenterChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.geojson.Point>): void;
            public unregisterAnimators(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>, param1: boolean): void;
            public flyTo(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public unregisterAllAnimators(): void;
            public calculateScaleBy(param0: number, param1: number): number;
            public removeCameraAnimationsLifecycleListener(param0: com.mapbox.maps.plugin.animation.CameraAnimationsLifecycleListener): void;
            public removeCameraBearingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public pitchBy(param0: number, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public setAnchor(param0: com.mapbox.maps.ScreenCoordinate): void;
            public addCameraAnimationsLifecycleListener(param0: com.mapbox.maps.plugin.animation.CameraAnimationsLifecycleListener): void;
            public setDebugMode(param0: boolean): void;
            public removeCameraPaddingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.maps.EdgeInsets>): void;
            public setCameraAnimationsFactory(param0: com.mapbox.maps.plugin.animation.CameraAnimatorsFactory): void;
            public cleanup(): void;
            public createAnchorAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.maps.ScreenCoordinate>, param1: any): globalAndroid.animation.ValueAnimator;
            public playAnimatorsSequentially(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>): void;
            public getAnimators$plugin_animation_publicRelease(): java.util.HashSet<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public removeCameraZoomChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public cancelAllAnimators(param0: java.util.List<string>): void;
            public removeCameraAnchorChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorNullableChangeListener<com.mapbox.maps.ScreenCoordinate>): void;
            public constructor();
            public addCameraBearingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public onCameraMove(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidNative.Array<java.lang.Double>): void;
            public getAnchor(): com.mapbox.maps.ScreenCoordinate;
            public removeCameraPitchChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public scaleBy(param0: number, param1: com.mapbox.maps.ScreenCoordinate, param2: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public createPaddingAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.maps.EdgeInsets>, param1: any): globalAndroid.animation.ValueAnimator;
            public getCameraAnimationsFactory(): com.mapbox.maps.plugin.animation.CameraAnimatorsFactory;
            public getDebugMode(): boolean;
            public createCenterAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.geojson.Point>, param1: any): globalAndroid.animation.ValueAnimator;
            public addCameraPitchChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public playAnimatorsTogether(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>): void;
            public removeCameraCenterChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.geojson.Point>): void;
            public easeTo(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public initialize(): void;
            public addCameraPaddingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.maps.EdgeInsets>): void;
            public createPitchAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: any): globalAndroid.animation.ValueAnimator;
            public createBearingAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: boolean, param2: any): globalAndroid.animation.ValueAnimator;
            public createZoomAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: any): globalAndroid.animation.ValueAnimator;
            public addCameraAnchorChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorNullableChangeListener<com.mapbox.maps.ScreenCoordinate>): void;
            public rotateBy(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate, param2: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
          }
          export module CameraAnimationsPluginImpl {
            export class AnimationFinishStatus {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimationsPluginImpl.AnimationFinishStatus>;
              public static CANCELED: com.mapbox.maps.plugin.animation.CameraAnimationsPluginImpl.AnimationFinishStatus;
              public static ENDED: com.mapbox.maps.plugin.animation.CameraAnimationsPluginImpl.AnimationFinishStatus;
              public static valueOf(param0: string): com.mapbox.maps.plugin.animation.CameraAnimationsPluginImpl.AnimationFinishStatus;
              public static values(): androidNative.Array<com.mapbox.maps.plugin.animation.CameraAnimationsPluginImpl.AnimationFinishStatus>;
            }
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimationsPluginImpl.Companion>;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimationsPluginImpl.WhenMappings>;
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
        export module animation {
          export class CameraAnimationsUtils {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimationsUtils>;
            public static flyTo(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.CameraOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public static moveBy(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.ScreenCoordinate, param2: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public static easeTo(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.CameraOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public static moveBy(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.plugin.animation.Cancelable;
            public static easeTo(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public static pitchBy(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: number): com.mapbox.maps.plugin.animation.Cancelable;
            public static getCamera(param0: com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate): com.mapbox.maps.plugin.animation.CameraAnimationsPlugin;
            public static pitchBy(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: number, param2: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public static scaleBy(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: number, param2: com.mapbox.maps.ScreenCoordinate, param3: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public static rotateBy(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.ScreenCoordinate, param2: com.mapbox.maps.ScreenCoordinate, param3: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public static rotateBy(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.ScreenCoordinate, param2: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.plugin.animation.Cancelable;
            public static flyTo(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public static scaleBy(param0: com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate, param1: number, param2: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.plugin.animation.Cancelable;
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
        export module animation {
          export class CameraAnimatorsFactory {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimatorsFactory>;
            public static DEFAULT_ANIMATION_DURATION_MS: number;
            public static CUBIC_BEZIER_INTERPOLATOR: globalAndroid.view.animation.Interpolator;
            public getScaleBy(param0: number, param1: com.mapbox.maps.ScreenCoordinate, param2: string): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public getMoveBy(param0: com.mapbox.maps.ScreenCoordinate, param1: string): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public getRotateBy(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public getEaseTo(param0: com.mapbox.maps.CameraOptions, param1: string): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public getScaleBy(param0: number, param1: com.mapbox.maps.ScreenCoordinate): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public getFlyTo(param0: com.mapbox.maps.CameraOptions, param1: string): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public getEaseTo(param0: com.mapbox.maps.CameraOptions): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public getFlyTo(param0: com.mapbox.maps.CameraOptions): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public static setDefaultAnimatorOptions(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: any): void;
            public getPitchBy(param0: number, param1: string): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public getRotateBy(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate, param2: string): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public getPitchBy(param0: number): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public getMoveBy(param0: com.mapbox.maps.ScreenCoordinate): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
            public static setDefaultAnimatorOptions(param0: any): void;
            public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider);
            public getScaleBy(param0: number): androidNative.Array<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
          }
          export module CameraAnimatorsFactory {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimatorsFactory.Companion>;
              public setDefaultAnimatorOptions(param0: any): void;
              public setDefaultAnimatorOptions(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: any): void;
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
        export module animation {
          export class CameraTransform {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraTransform>;
            public static INSTANCE: com.mapbox.maps.plugin.animation.CameraTransform;
            public scaleZoom(param0: number): number;
            public zoomScale(param0: number): number;
            public offset(param0: com.mapbox.maps.MercatorCoordinate, param1: com.mapbox.maps.MercatorCoordinate): com.mapbox.maps.ScreenCoordinate;
            public rad2deg(param0: number): number;
            public wrap$plugin_animation_publicRelease(param0: number, param1: number, param2: number): number;
            public deg2rad(param0: number): number;
            public calculateScaleBy(param0: number, param1: number): number;
            public angleBetween(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): number;
            public offset(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.ScreenCoordinate;
            public wrapCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.geojson.Point;
            public calculateLatLngMoveBy(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.CameraState, param2: com.mapbox.maps.plugin.delegates.MapTransformDelegate, param3: com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate): com.mapbox.geojson.Point;
            public unwrapForShortestPath(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point): com.mapbox.geojson.Point;
            public getMapCenter(param0: com.mapbox.maps.EdgeInsets, param1: com.mapbox.maps.Size): com.mapbox.maps.ScreenCoordinate;
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
        export module animation {
          export class HighLevelAnimatorSet {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.HighLevelAnimatorSet>;
            public copy(param0: string, param1: globalAndroid.animation.AnimatorSet): com.mapbox.maps.plugin.animation.HighLevelAnimatorSet;
            public component2(): globalAndroid.animation.AnimatorSet;
            public getOwner(): string;
            public cancel(): void;
            public constructor(param0: string, param1: globalAndroid.animation.AnimatorSet);
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
            public getAnimatorSet(): globalAndroid.animation.AnimatorSet;
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
        export module animation {
          export module animator {
            export class CameraAnchorAnimator extends com.mapbox.maps.plugin.animation.animator.CameraAnimator<com.mapbox.maps.ScreenCoordinate> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.animator.CameraAnchorAnimator>;
              public constructor(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.maps.ScreenCoordinate>, param1: any);
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>, param1: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<any>);
              public getType(): com.mapbox.maps.plugin.animation.CameraAnimatorType;
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
        export module animation {
          export module animator {
            export abstract class CameraAnimator<T> extends globalAndroid.animation.ValueAnimator {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.animator.CameraAnimator<any>>;
              public getTargets(): androidNative.Array<any>;
              public addInternalListener$plugin_animation_publicRelease(param0: globalAndroid.animation.Animator.AnimatorListener): void;
              public setSkipped$plugin_animation_publicRelease(param0: boolean): void;
              public getOwner(): string;
              public getHasUserListeners$plugin_animation_publicRelease(): boolean;
              public removeInternalUpdateListener$plugin_animation_publicRelease(): void;
              public getAnimatedValue(): any;
              public getStartValue(): any;
              public getTargetValues$plugin_animation_publicRelease(): androidNative.Array<any>;
              public start(): void;
              public setCanceled$plugin_animation_publicRelease(param0: boolean): void;
              public removeUpdateListener(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): void;
              public setEvaluator(param0: globalAndroid.animation.TypeEvaluator<any>): void;
              public setOwner$plugin_animation_publicRelease(param0: string): void;
              public setObjectValues(param0: androidNative.Array<any>): void;
              public removeListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
              public cancel(): void;
              public removeInternalListener$plugin_animation_publicRelease(): void;
              public addListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
              public removeAllListeners(): void;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>, param1: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<any>);
              public getCanceled$plugin_animation_publicRelease(): boolean;
              public isInternal$plugin_animation_publicRelease(): boolean;
              public getSkipped$plugin_animation_publicRelease(): boolean;
              public setInternal$plugin_animation_publicRelease(param0: boolean): void;
              public addInternalUpdateListener$plugin_animation_publicRelease(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): void;
              public addUpdateListener(param0: globalAndroid.animation.ValueAnimator.AnimatorUpdateListener): void;
              public removeAllUpdateListeners(): void;
              public getType(): com.mapbox.maps.plugin.animation.CameraAnimatorType;
            }
            export module CameraAnimator {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.animation.animator.CameraAnimator.Companion>;
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
        export module animation {
          export module animator {
            export class CameraBearingAnimator extends com.mapbox.maps.plugin.animation.animator.CameraAnimator<java.lang.Double> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.animator.CameraBearingAnimator>;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>, param1: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<any>);
              public getUseShortestPath(): boolean;
              public constructor(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: boolean, param2: any);
              public getType(): com.mapbox.maps.plugin.animation.CameraAnimatorType;
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
        export module animation {
          export module animator {
            export class CameraCenterAnimator extends com.mapbox.maps.plugin.animation.animator.CameraAnimator<com.mapbox.geojson.Point> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.animator.CameraCenterAnimator>;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>, param1: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<any>);
              public constructor(param0: globalAndroid.animation.TypeEvaluator<com.mapbox.geojson.Point>, param1: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.geojson.Point>, param2: any);
              public constructor(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.geojson.Point>, param1: any);
              public getType(): com.mapbox.maps.plugin.animation.CameraAnimatorType;
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
        export module animation {
          export module animator {
            export class CameraPaddingAnimator extends com.mapbox.maps.plugin.animation.animator.CameraAnimator<com.mapbox.maps.EdgeInsets> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.animator.CameraPaddingAnimator>;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>, param1: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<any>);
              public constructor(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.maps.EdgeInsets>, param1: any);
              public getType(): com.mapbox.maps.plugin.animation.CameraAnimatorType;
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
        export module animation {
          export module animator {
            export class CameraPitchAnimator extends com.mapbox.maps.plugin.animation.animator.CameraAnimator<java.lang.Double> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.animator.CameraPitchAnimator>;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>, param1: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<any>);
              public getType(): com.mapbox.maps.plugin.animation.CameraAnimatorType;
              public constructor(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: any);
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
        export module animation {
          export module animator {
            export class CameraZoomAnimator extends com.mapbox.maps.plugin.animation.animator.CameraAnimator<java.lang.Double> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.animator.CameraZoomAnimator>;
              public constructor(param0: globalAndroid.animation.TypeEvaluator<any>, param1: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<any>);
              public constructor(param0: globalAndroid.animation.TypeEvaluator<java.lang.Double>, param1: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param2: any);
              public getType(): com.mapbox.maps.plugin.animation.CameraAnimatorType;
              public constructor(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: any);
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
        export module animation {
          export module animator {
            export class Evaluators {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.animator.Evaluators>;
              public static INSTANCE: com.mapbox.maps.plugin.animation.animator.Evaluators;
              public getDOUBLE(): globalAndroid.animation.TypeEvaluator<java.lang.Double>;
              public getPOINT(): globalAndroid.animation.TypeEvaluator<com.mapbox.geojson.Point>;
              public getEDGE_INSET(): globalAndroid.animation.TypeEvaluator<com.mapbox.maps.EdgeInsets>;
              public getSCREEN_COORDINATE(): globalAndroid.animation.TypeEvaluator<com.mapbox.maps.ScreenCoordinate>;
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
        export module camera {
          export module animation {
            export class BuildConfig {
              public static class: java.lang.Class<com.mapbox.maps.plugin.camera.animation.BuildConfig>;
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
}

//Generics information:
//com.mapbox.maps.plugin.animation.animator.CameraAnimator:1
