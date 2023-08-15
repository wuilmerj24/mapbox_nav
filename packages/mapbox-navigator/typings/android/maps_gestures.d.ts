/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class AndroidGesturesManager {
          public static class: java.lang.Class<com.mapbox.android.gestures.AndroidGesturesManager>;
          public static GESTURE_TYPE_SCROLL: number;
          public static GESTURE_TYPE_SCALE: number;
          public static GESTURE_TYPE_ROTATE: number;
          public static GESTURE_TYPE_SHOVE: number;
          public static GESTURE_TYPE_MULTI_FINGER_TAP: number;
          public static GESTURE_TYPE_SINGLE_TAP_UP: number;
          public static GESTURE_TYPE_LONG_PRESS: number;
          public static GESTURE_TYPE_FLING: number;
          public static GESTURE_TYPE_SHOW_PRESS: number;
          public static GESTURE_TYPE_DOWN: number;
          public static GESTURE_TYPE_DOUBLE_TAP: number;
          public static GESTURE_TYPE_DOUBLE_TAP_EVENT: number;
          public static GESTURE_TYPE_SINGLE_TAP_CONFIRMED: number;
          public static GESTURE_TYPE_MOVE: number;
          public static GESTURE_TYPE_SIDEWAYS_SHOVE: number;
          public static GESTURE_TYPE_QUICK_SCALE: number;
          public getSidewaysShoveGestureDetector(): com.mapbox.android.gestures.SidewaysShoveGestureDetector;
          public getRotateGestureDetector(): com.mapbox.android.gestures.RotateGestureDetector;
          public setShoveGestureListener(param0: com.mapbox.android.gestures.ShoveGestureDetector.OnShoveGestureListener): void;
          public setMutuallyExclusiveGestures(param0: androidNative.Array<java.util.Set<java.lang.Integer>>): void;
          public setMultiFingerTapGestureListener(param0: com.mapbox.android.gestures.MultiFingerTapGestureDetector.OnMultiFingerTapGestureListener): void;
          public removeStandardScaleGestureListener(): void;
          public removeRotateGestureListener(): void;
          public getMultiFingerTapGestureDetector(): com.mapbox.android.gestures.MultiFingerTapGestureDetector;
          public setSidewaysShoveGestureListener(param0: com.mapbox.android.gestures.SidewaysShoveGestureDetector.OnSidewaysShoveGestureListener): void;
          public removeMultiFingerTapGestureListener(): void;
          public setMutuallyExclusiveGestures(param0: java.util.List<java.util.Set<java.lang.Integer>>): void;
          public removeStandardGestureListener(): void;
          public getStandardGestureDetector(): com.mapbox.android.gestures.StandardGestureDetector;
          public removeShoveGestureListener(): void;
          public removeMoveGestureListener(): void;
          public setStandardScaleGestureListener(param0: com.mapbox.android.gestures.StandardScaleGestureDetector.StandardOnScaleGestureListener): void;
          public setStandardGestureListener(param0: com.mapbox.android.gestures.StandardGestureDetector.StandardOnGestureListener): void;
          public getMutuallyExclusiveGestures(): java.util.List<java.util.Set<java.lang.Integer>>;
          public constructor(param0: globalAndroid.content.Context);
          public constructor(param0: globalAndroid.content.Context, param1: java.util.List<java.util.Set<java.lang.Integer>>, param2: boolean);
          public removeSidewaysShoveGestureListener(): void;
          public getMoveGestureDetector(): com.mapbox.android.gestures.MoveGestureDetector;
          public constructor(param0: globalAndroid.content.Context, param1: boolean);
          public setRotateGestureListener(param0: com.mapbox.android.gestures.RotateGestureDetector.OnRotateGestureListener): void;
          public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public constructor(param0: globalAndroid.content.Context, param1: androidNative.Array<java.util.Set<java.lang.Integer>>);
          public getDetectors(): java.util.List<com.mapbox.android.gestures.BaseGesture<any>>;
          public getStandardScaleGestureDetector(): com.mapbox.android.gestures.StandardScaleGestureDetector;
          public setMoveGestureListener(param0: com.mapbox.android.gestures.MoveGestureDetector.OnMoveGestureListener): void;
          public getShoveGestureDetector(): com.mapbox.android.gestures.ShoveGestureDetector;
        }
        export module AndroidGesturesManager {
          export class GestureType {
            public static class: java.lang.Class<com.mapbox.android.gestures.AndroidGesturesManager.GestureType>;
            /**
             * Constructs a new instance of the com.mapbox.android.gestures.AndroidGesturesManager$GestureType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export abstract class BaseGesture<L> extends java.lang.Object {
          public static class: java.lang.Class<com.mapbox.android.gestures.BaseGesture<any>>;
          public context: globalAndroid.content.Context;
          public windowManager: globalAndroid.view.WindowManager;
          public listener: L;
          public getCurrentEvent(): globalAndroid.view.MotionEvent;
          public setEnabled(param0: boolean): void;
          public getGestureDuration(): number;
          public canExecute(param0: number): boolean;
          public removeListener(): void;
          public getPreviousEvent(): globalAndroid.view.MotionEvent;
          public setListener(param0: L): void;
          public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public analyzeEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager);
          public isEnabled(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.android.gestures.BuildConfig>;
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
    export module android {
      export module gestures {
        export class Constants {
          public static class: java.lang.Class<com.mapbox.android.gestures.Constants>;
          public static DEFAULT_ROTATE_ANGLE_THRESHOLD: number;
          public static DEFAULT_SHOVE_MAX_ANGLE: number;
          public static DEFAULT_MULTI_TAP_TIME_THRESHOLD: number;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class MoveDistancesObject {
          public static class: java.lang.Class<com.mapbox.android.gestures.MoveDistancesObject>;
          public getDistanceXSinceLast(): number;
          public addNewPosition(param0: number, param1: number): void;
          public getCurrentX(): number;
          public getInitialY(): number;
          public getDistanceYSinceLast(): number;
          public getInitialX(): number;
          public getPreviousY(): number;
          public getPreviousX(): number;
          public getCurrentY(): number;
          public getDistanceXSinceStart(): number;
          public getDistanceYSinceStart(): number;
          public constructor(param0: number, param1: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class MoveGestureDetector extends com.mapbox.android.gestures.ProgressiveGesture<com.mapbox.android.gestures.MoveGestureDetector.OnMoveGestureListener> {
          public static class: java.lang.Class<com.mapbox.android.gestures.MoveGestureDetector>;
          public reset(): void;
          public setMoveThresholdResource(param0: number): void;
          public canExecute(param0: number): boolean;
          public getMoveThreshold(): number;
          public setMoveThresholdRect(param0: globalAndroid.graphics.RectF): void;
          public getLastDistanceY(): number;
          public gestureStopped(): void;
          public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager);
          public setMoveThreshold(param0: number): void;
          public getMoveObject(param0: number): com.mapbox.android.gestures.MoveDistancesObject;
          public getMoveThresholdRect(): globalAndroid.graphics.RectF;
          public getRequiredPointersCount(): number;
          public analyzeMovement(): boolean;
          public getLastDistanceX(): number;
          public provideHandledTypes(): java.util.Set<java.lang.Integer>;
          public analyzeEvent(param0: globalAndroid.view.MotionEvent): boolean;
        }
        export module MoveGestureDetector {
          export class OnMoveGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.MoveGestureDetector.OnMoveGestureListener>;
            /**
             * Constructs a new instance of the com.mapbox.android.gestures.MoveGestureDetector$OnMoveGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onMoveBegin(param0: com.mapbox.android.gestures.MoveGestureDetector): boolean; onMove(param0: com.mapbox.android.gestures.MoveGestureDetector, param1: number, param2: number): boolean; onMoveEnd(param0: com.mapbox.android.gestures.MoveGestureDetector, param1: number, param2: number): void });
            public constructor();
            public onMoveEnd(param0: com.mapbox.android.gestures.MoveGestureDetector, param1: number, param2: number): void;
            public onMove(param0: com.mapbox.android.gestures.MoveGestureDetector, param1: number, param2: number): boolean;
            public onMoveBegin(param0: com.mapbox.android.gestures.MoveGestureDetector): boolean;
          }
          export class SimpleOnMoveGestureListener extends com.mapbox.android.gestures.MoveGestureDetector.OnMoveGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.MoveGestureDetector.SimpleOnMoveGestureListener>;
            public onMoveEnd(param0: com.mapbox.android.gestures.MoveGestureDetector, param1: number, param2: number): void;
            public onMove(param0: com.mapbox.android.gestures.MoveGestureDetector, param1: number, param2: number): boolean;
            public constructor();
            public onMoveBegin(param0: com.mapbox.android.gestures.MoveGestureDetector): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class MultiFingerDistancesObject {
          public static class: java.lang.Class<com.mapbox.android.gestures.MultiFingerDistancesObject>;
          public constructor(param0: number, param1: number, param2: number, param3: number);
          public getCurrFingersDiffX(): number;
          public getPrevFingersDiffXY(): number;
          public getPrevFingersDiffY(): number;
          public getPrevFingersDiffX(): number;
          public getCurrFingersDiffXY(): number;
          public getCurrFingersDiffY(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export abstract class MultiFingerGesture<L> extends com.mapbox.android.gestures.BaseGesture<any> {
          public static class: java.lang.Class<com.mapbox.android.gestures.MultiFingerGesture<any>>;
          public getCurrentSpanY(param0: number, param1: number): number;
          public getCurrentSpan(param0: number, param1: number): number;
          public isSloppyGesture(): boolean;
          public reset(): void;
          public canExecute(param0: number): boolean;
          public getCurrentSpanX(param0: number, param1: number): number;
          public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager);
          public setSpanThreshold(param0: number): void;
          public setSpanThresholdResource(param0: number): void;
          public getPointersCount(): number;
          public getSpanThreshold(): number;
          public getRequiredPointersCount(): number;
          public analyzeMovement(): boolean;
          public getPreviousSpan(param0: number, param1: number): number;
          public getPreviousSpanX(param0: number, param1: number): number;
          public analyzeEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public getPreviousSpanY(param0: number, param1: number): number;
          public getFocalPoint(): globalAndroid.graphics.PointF;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class MultiFingerTapGestureDetector extends com.mapbox.android.gestures.MultiFingerGesture<com.mapbox.android.gestures.MultiFingerTapGestureDetector.OnMultiFingerTapGestureListener> {
          public static class: java.lang.Class<com.mapbox.android.gestures.MultiFingerTapGestureDetector>;
          public setMultiFingerTapMovementThresholdResource(param0: number): void;
          public reset(): void;
          public canExecute(param0: number): boolean;
          public getMultiFingerTapMovementThreshold(): number;
          public getMultiFingerTapTimeThreshold(): number;
          public setMultiFingerTapTimeThreshold(param0: number): void;
          public analyzeEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public setMultiFingerTapMovementThreshold(param0: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager);
        }
        export module MultiFingerTapGestureDetector {
          export class OnMultiFingerTapGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.MultiFingerTapGestureDetector.OnMultiFingerTapGestureListener>;
            /**
             * Constructs a new instance of the com.mapbox.android.gestures.MultiFingerTapGestureDetector$OnMultiFingerTapGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onMultiFingerTap(param0: com.mapbox.android.gestures.MultiFingerTapGestureDetector, param1: number): boolean });
            public constructor();
            public onMultiFingerTap(param0: com.mapbox.android.gestures.MultiFingerTapGestureDetector, param1: number): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class PermittedActionsGuard {
          public static class: java.lang.Class<com.mapbox.android.gestures.PermittedActionsGuard>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class PointerDistancePair extends globalAndroid.util.Pair<java.lang.Integer, java.lang.Integer> {
          public static class: java.lang.Class<com.mapbox.android.gestures.PointerDistancePair>;
          public equals(param0: any): boolean;
          public constructor(param0: java.lang.Integer, param1: java.lang.Integer);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export abstract class ProgressiveGesture<L> extends com.mapbox.android.gestures.MultiFingerGesture<any> {
          public static class: java.lang.Class<com.mapbox.android.gestures.ProgressiveGesture<any>>;
          public setEnabled(param0: boolean): void;
          public isInProgress(): boolean;
          public interrupt(): void;
          public gestureStopped(): void;
          public provideHandledTypes(): java.util.Set<java.lang.Integer>;
          public analyzeEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager);
          public gestureStarted(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class RotateGestureDetector extends com.mapbox.android.gestures.ProgressiveGesture<com.mapbox.android.gestures.RotateGestureDetector.OnRotateGestureListener> {
          public static class: java.lang.Class<com.mapbox.android.gestures.RotateGestureDetector>;
          public analyzeMovement(): boolean;
          public reset(): void;
          public canExecute(param0: number): boolean;
          public getAngleThreshold(): number;
          public gestureStopped(): void;
          public provideHandledTypes(): java.util.Set<java.lang.Integer>;
          public getDeltaSinceStart(): number;
          public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager);
          public getDeltaSinceLast(): number;
          public setAngleThreshold(param0: number): void;
        }
        export module RotateGestureDetector {
          export class OnRotateGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.RotateGestureDetector.OnRotateGestureListener>;
            /**
             * Constructs a new instance of the com.mapbox.android.gestures.RotateGestureDetector$OnRotateGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRotateBegin(param0: com.mapbox.android.gestures.RotateGestureDetector): boolean; onRotate(param0: com.mapbox.android.gestures.RotateGestureDetector, param1: number, param2: number): boolean; onRotateEnd(param0: com.mapbox.android.gestures.RotateGestureDetector, param1: number, param2: number, param3: number): void });
            public constructor();
            public onRotateBegin(param0: com.mapbox.android.gestures.RotateGestureDetector): boolean;
            public onRotate(param0: com.mapbox.android.gestures.RotateGestureDetector, param1: number, param2: number): boolean;
            public onRotateEnd(param0: com.mapbox.android.gestures.RotateGestureDetector, param1: number, param2: number, param3: number): void;
          }
          export class SimpleOnRotateGestureListener extends com.mapbox.android.gestures.RotateGestureDetector.OnRotateGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.RotateGestureDetector.SimpleOnRotateGestureListener>;
            public constructor();
            public onRotateBegin(param0: com.mapbox.android.gestures.RotateGestureDetector): boolean;
            public onRotate(param0: com.mapbox.android.gestures.RotateGestureDetector, param1: number, param2: number): boolean;
            public onRotateEnd(param0: com.mapbox.android.gestures.RotateGestureDetector, param1: number, param2: number, param3: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class ShoveGestureDetector extends com.mapbox.android.gestures.ProgressiveGesture<com.mapbox.android.gestures.ShoveGestureDetector.OnShoveGestureListener> {
          public static class: java.lang.Class<com.mapbox.android.gestures.ShoveGestureDetector>;
          public setPixelDeltaThreshold(param0: number): void;
          public setMaxShoveAngle(param0: number): void;
          public isSloppyGesture(): boolean;
          public reset(): void;
          public canExecute(param0: number): boolean;
          public getDeltaPixelSinceLast(): number;
          public gestureStopped(): void;
          public getMaxShoveAngle(): number;
          public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager);
          public getDeltaPixelsSinceStart(): number;
          public getPixelDeltaThreshold(): number;
          public analyzeMovement(): boolean;
          public provideHandledTypes(): java.util.Set<java.lang.Integer>;
          public setPixelDeltaThresholdResource(param0: number): void;
        }
        export module ShoveGestureDetector {
          export class OnShoveGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.ShoveGestureDetector.OnShoveGestureListener>;
            /**
             * Constructs a new instance of the com.mapbox.android.gestures.ShoveGestureDetector$OnShoveGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onShoveBegin(param0: com.mapbox.android.gestures.ShoveGestureDetector): boolean; onShove(param0: com.mapbox.android.gestures.ShoveGestureDetector, param1: number, param2: number): boolean; onShoveEnd(param0: com.mapbox.android.gestures.ShoveGestureDetector, param1: number, param2: number): void });
            public constructor();
            public onShove(param0: com.mapbox.android.gestures.ShoveGestureDetector, param1: number, param2: number): boolean;
            public onShoveBegin(param0: com.mapbox.android.gestures.ShoveGestureDetector): boolean;
            public onShoveEnd(param0: com.mapbox.android.gestures.ShoveGestureDetector, param1: number, param2: number): void;
          }
          export class SimpleOnShoveGestureListener extends com.mapbox.android.gestures.ShoveGestureDetector.OnShoveGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.ShoveGestureDetector.SimpleOnShoveGestureListener>;
            public constructor();
            public onShove(param0: com.mapbox.android.gestures.ShoveGestureDetector, param1: number, param2: number): boolean;
            public onShoveBegin(param0: com.mapbox.android.gestures.ShoveGestureDetector): boolean;
            public onShoveEnd(param0: com.mapbox.android.gestures.ShoveGestureDetector, param1: number, param2: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class SidewaysShoveGestureDetector extends com.mapbox.android.gestures.ProgressiveGesture<com.mapbox.android.gestures.SidewaysShoveGestureDetector.OnSidewaysShoveGestureListener> {
          public static class: java.lang.Class<com.mapbox.android.gestures.SidewaysShoveGestureDetector>;
          public setPixelDeltaThreshold(param0: number): void;
          public setMaxShoveAngle(param0: number): void;
          public isSloppyGesture(): boolean;
          public reset(): void;
          public canExecute(param0: number): boolean;
          public getDeltaPixelSinceLast(): number;
          public gestureStopped(): void;
          public getMaxShoveAngle(): number;
          public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager);
          public getDeltaPixelsSinceStart(): number;
          public getPixelDeltaThreshold(): number;
          public analyzeMovement(): boolean;
          public provideHandledTypes(): java.util.Set<java.lang.Integer>;
          public setPixelDeltaThresholdResource(param0: number): void;
        }
        export module SidewaysShoveGestureDetector {
          export class OnSidewaysShoveGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.SidewaysShoveGestureDetector.OnSidewaysShoveGestureListener>;
            /**
             * Constructs a new instance of the com.mapbox.android.gestures.SidewaysShoveGestureDetector$OnSidewaysShoveGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSidewaysShoveBegin(param0: com.mapbox.android.gestures.SidewaysShoveGestureDetector): boolean; onSidewaysShove(param0: com.mapbox.android.gestures.SidewaysShoveGestureDetector, param1: number, param2: number): boolean; onSidewaysShoveEnd(param0: com.mapbox.android.gestures.SidewaysShoveGestureDetector, param1: number, param2: number): void });
            public constructor();
            public onSidewaysShoveEnd(param0: com.mapbox.android.gestures.SidewaysShoveGestureDetector, param1: number, param2: number): void;
            public onSidewaysShove(param0: com.mapbox.android.gestures.SidewaysShoveGestureDetector, param1: number, param2: number): boolean;
            public onSidewaysShoveBegin(param0: com.mapbox.android.gestures.SidewaysShoveGestureDetector): boolean;
          }
          export class SimpleOnSidewaysShoveGestureListener extends com.mapbox.android.gestures.SidewaysShoveGestureDetector.OnSidewaysShoveGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.SidewaysShoveGestureDetector.SimpleOnSidewaysShoveGestureListener>;
            public constructor();
            public onSidewaysShoveEnd(param0: com.mapbox.android.gestures.SidewaysShoveGestureDetector, param1: number, param2: number): void;
            public onSidewaysShove(param0: com.mapbox.android.gestures.SidewaysShoveGestureDetector, param1: number, param2: number): boolean;
            public onSidewaysShoveBegin(param0: com.mapbox.android.gestures.SidewaysShoveGestureDetector): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class StandardGestureDetector extends com.mapbox.android.gestures.BaseGesture<com.mapbox.android.gestures.StandardGestureDetector.StandardOnGestureListener> {
          public static class: java.lang.Class<com.mapbox.android.gestures.StandardGestureDetector>;
          public isLongpressEnabled(): boolean;
          public analyzeEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager);
          public setIsLongpressEnabled(param0: boolean): void;
        }
        export module StandardGestureDetector {
          export class SimpleStandardOnGestureListener extends com.mapbox.android.gestures.StandardGestureDetector.StandardOnGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.StandardGestureDetector.SimpleStandardOnGestureListener>;
            public constructor();
            public onDown(param0: globalAndroid.view.MotionEvent): boolean;
            public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
            public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
            public onShowPress(param0: globalAndroid.view.MotionEvent): void;
            public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
            public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
            public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
            public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
            public onLongPress(param0: globalAndroid.view.MotionEvent): void;
          }
          export class StandardOnGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.StandardGestureDetector.StandardOnGestureListener>;
            /**
             * Constructs a new instance of the com.mapbox.android.gestures.StandardGestureDetector$StandardOnGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class StandardScaleGestureDetector extends com.mapbox.android.gestures.ProgressiveGesture<com.mapbox.android.gestures.StandardScaleGestureDetector.StandardOnScaleGestureListener> {
          public static class: java.lang.Class<com.mapbox.android.gestures.StandardScaleGestureDetector>;
          public getCurrentSpan(): number;
          public getCurrentSpanY(param0: number, param1: number): number;
          public getPreviousSpanX(): number;
          public getStartSpan(): number;
          public getCurrentSpanX(param0: number, param1: number): number;
          public gestureStopped(): void;
          public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.android.gestures.AndroidGesturesManager);
          public setSpanSinceStartThresholdResource(param0: number): void;
          public getStartSpanY(): number;
          public getStartSpanX(): number;
          public getRequiredPointersCount(): number;
          public getSpanSinceStartThreshold(): number;
          public getPreviousSpan(param0: number, param1: number): number;
          public getScaleFactor(): number;
          public getCurrentSpanX(): number;
          public provideHandledTypes(): java.util.Set<java.lang.Integer>;
          public analyzeEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public setSpanSinceStartThreshold(param0: number): void;
          public getCurrentSpan(param0: number, param1: number): number;
          public reset(): void;
          public isSloppyGesture(): boolean;
          public getCurrentSpanY(): number;
          public isScalingOut(): boolean;
          public analyzeMovement(): boolean;
          public getPreviousSpanX(param0: number, param1: number): number;
          public getPreviousSpan(): number;
          public getPreviousSpanY(): number;
          public getPreviousSpanY(param0: number, param1: number): number;
        }
        export module StandardScaleGestureDetector {
          export class SimpleStandardOnScaleGestureListener extends com.mapbox.android.gestures.StandardScaleGestureDetector.StandardOnScaleGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.StandardScaleGestureDetector.SimpleStandardOnScaleGestureListener>;
            public onScaleEnd(param0: com.mapbox.android.gestures.StandardScaleGestureDetector, param1: number, param2: number): void;
            public constructor();
            public onScaleBegin(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): boolean;
            public onScale(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): boolean;
          }
          export class StandardOnScaleGestureListener {
            public static class: java.lang.Class<com.mapbox.android.gestures.StandardScaleGestureDetector.StandardOnScaleGestureListener>;
            /**
             * Constructs a new instance of the com.mapbox.android.gestures.StandardScaleGestureDetector$StandardOnScaleGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onScaleBegin(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): boolean; onScale(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): boolean; onScaleEnd(param0: com.mapbox.android.gestures.StandardScaleGestureDetector, param1: number, param2: number): void });
            public constructor();
            public onScaleEnd(param0: com.mapbox.android.gestures.StandardScaleGestureDetector, param1: number, param2: number): void;
            public onScaleBegin(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): boolean;
            public onScale(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module android {
      export module gestures {
        export class Utils {
          public static class: java.lang.Class<com.mapbox.android.gestures.Utils>;
          public static dpToPx(param0: number): number;
          public constructor();
          public static determineFocalPoint(param0: globalAndroid.view.MotionEvent): globalAndroid.graphics.PointF;
          public static getRawX(param0: globalAndroid.view.MotionEvent, param1: number): number;
          public static getRawY(param0: globalAndroid.view.MotionEvent, param1: number): number;
          public static pxToDp(param0: number): number;
          public static pxToMm(param0: number, param1: globalAndroid.content.Context): number;
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.android.gestures.BaseGesture:1
//com.mapbox.android.gestures.MultiFingerGesture:1
//com.mapbox.android.gestures.ProgressiveGesture:1
