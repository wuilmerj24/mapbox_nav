/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module annotation {
          export abstract class AnnotationManagerImpl<G, T, S, D, U, V, I, L> extends com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any> {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationManagerImpl<any, any, any, any, any, any, any, any>>;
            public setLayerFilter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
            public setSource$plugin_annotation_publicRelease(param0: com.mapbox.maps.extension.style.sources.generated.GeoJsonSource): void;
            public getInteractionListener(): java.util.List<any>;
            public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider, param1: com.mapbox.maps.plugin.annotation.AnnotationConfig);
            public create(param0: java.util.List<any>): java.util.List<any>;
            public enableDataDrivenProperty(param0: string): void;
            public removeLongClickListener(param0: any): boolean;
            public removeInteractionListener(param0: any): boolean;
            public getClickListeners(): java.util.List<any>;
            public onDestroy(): void;
            public setDataDrivenPropertyIsUsed(param0: string): void;
            public setDragLayer$plugin_annotation_publicRelease(param0: any): void;
            public initLayerAndSource(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public getDelegateProvider(): com.mapbox.maps.plugin.delegates.MapDelegateProvider;
            public getLayer$plugin_annotation_publicRelease(): any;
            public addLongClickListener(param0: any): boolean;
            public update(param0: java.util.List<any>): void;
            public create(param0: any): any;
            public setDragSource$plugin_annotation_publicRelease(param0: com.mapbox.maps.extension.style.sources.generated.GeoJsonSource): void;
            public getAnnotationIdKey(): string;
            public removeClickListener(param0: any): boolean;
            public createLayer(): any;
            public getDragSourceId(): string;
            public initializeDataDrivenPropertyMap(): void;
            public getDragListeners(): java.util.List<any>;
            public queryMapForFeatures(param0: com.mapbox.maps.ScreenCoordinate): any;
            public getDragSource$plugin_annotation_publicRelease(): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
            public getDataDrivenPropertyUsageMap(): java.util.Map<string, java.lang.Boolean>;
            public update(param0: any): void;
            public createDragLayer(): any;
            public getLayerId(): string;
            public delete(param0: any): void;
            public getDragLayer$plugin_annotation_publicRelease(): any;
            public getLongClickListeners(): java.util.List<any>;
            public selectAnnotation(param0: any): void;
            public queryMapForFeatures(param0: com.mapbox.geojson.Point): any;
            public setLayer$plugin_annotation_publicRelease(param0: any): void;
            public getSourceId(): string;
            public delete(param0: java.util.List<any>): void;
            public addClickListener(param0: any): boolean;
            public getDragLayerId(): string;
            public addInteractionListener(param0: any): boolean;
            public getAnnotations(): java.util.List<any>;
            public addDragListener(param0: any): boolean;
            public getSource$plugin_annotation_publicRelease(): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
            public removeDragListener(param0: any): boolean;
            public onSizeChanged(param0: number, param1: number): void;
            public deleteAll(): void;
            public getLayerFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
          }
          export module AnnotationManagerImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationManagerImpl.Companion>;
            }
            export class MapClick {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationManagerImpl.MapClick>;
              public constructor(param0: com.mapbox.maps.plugin.annotation.AnnotationManagerImpl<any, any, any, any, any, any, any, any>);
              public onMapClick(param0: com.mapbox.geojson.Point): boolean;
            }
            export class MapLongClick {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationManagerImpl.MapLongClick>;
              public constructor(param0: com.mapbox.maps.plugin.annotation.AnnotationManagerImpl<any, any, any, any, any, any, any, any>);
              public onMapLongClick(param0: com.mapbox.geojson.Point): boolean;
            }
            export class MapMove {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationManagerImpl.MapMove>;
              public constructor(param0: com.mapbox.maps.plugin.annotation.AnnotationManagerImpl<any, any, any, any, any, any, any, any>);
              public onMoveBegin(param0: com.mapbox.android.gestures.MoveGestureDetector): void;
              public onMove(param0: com.mapbox.android.gestures.MoveGestureDetector): boolean;
              public onMoveEnd(param0: com.mapbox.android.gestures.MoveGestureDetector): void;
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
        export module annotation {
          export class AnnotationPluginImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationPluginImpl>;
            public constructor();
            public removeAnnotationManager(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>): void;
            public createAnnotationManager(param0: globalAndroid.view.View, param1: com.mapbox.maps.plugin.annotation.AnnotationType, param2: com.mapbox.maps.plugin.annotation.AnnotationConfig): com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>;
            public initialize(): void;
            public getManagerList$plugin_annotation_publicRelease(): java.util.List<java.lang.ref.WeakReference<com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>>>;
            public createAnnotationManager(param0: com.mapbox.maps.plugin.annotation.AnnotationType, param1: com.mapbox.maps.plugin.annotation.AnnotationConfig): com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>;
            public cleanup(): void;
            public onSizeChanged(param0: number, param1: number): void;
            public onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          }
          export module AnnotationPluginImpl {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationPluginImpl.WhenMappings>;
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
        export module annotation {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.BuildConfig>;
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
        export module annotation {
          export class ConvertUtils {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.ConvertUtils>;
            public static INSTANCE: com.mapbox.maps.plugin.annotation.ConvertUtils;
            public convertStringArray(param0: java.util.List<any>): com.google.gson.JsonArray;
            public calculateMercatorCoordinateShift(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point, param2: number): com.mapbox.maps.MercatorCoordinate;
            public toStringArray(param0: com.google.gson.JsonArray): java.util.List<string>;
            public convertDoubleArray(param0: java.util.List<any>): com.google.gson.JsonArray;
            public shiftPointWithMercatorCoordinate(param0: com.mapbox.geojson.Point, param1: com.mapbox.maps.MercatorCoordinate, param2: number): com.mapbox.geojson.Point;
            public toDoubleArray(param0: com.google.gson.JsonArray): java.util.List<java.lang.Double>;
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
        export module annotation {
          export class QueryAnnotationCallback<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.QueryAnnotationCallback<any>>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.annotation.QueryAnnotationCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onQueryAnnotation(param0: T): void });
            public constructor();
            public onQueryAnnotation(param0: T): void;
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
        export module annotation {
          export module generated {
            export class CircleAnnotation extends com.mapbox.maps.plugin.annotation.Annotation<com.mapbox.geojson.Point> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.CircleAnnotation>;
              public static ID_KEY: string;
              public getCircleColorInt(): java.lang.Integer;
              public setCircleColorString(param0: string): void;
              public getCircleOpacity(): java.lang.Double;
              public setUsedDataDrivenProperties(): void;
              public setCircleStrokeOpacity(param0: java.lang.Double): void;
              public getCircleStrokeWidth(): java.lang.Double;
              public setCircleColorInt(param0: java.lang.Integer): void;
              public getCircleSortKey(): java.lang.Double;
              public getCircleRadius(): java.lang.Double;
              public getCircleBlur(): java.lang.Double;
              public setCircleOpacity(param0: java.lang.Double): void;
              public getCircleStrokeColorInt(): java.lang.Integer;
              public setCircleSortKey(param0: java.lang.Double): void;
              public getCircleStrokeOpacity(): java.lang.Double;
              public getType(): com.mapbox.maps.plugin.annotation.AnnotationType;
              public setCircleStrokeWidth(param0: java.lang.Double): void;
              public getOffsetGeometry(param0: com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate, param1: com.mapbox.android.gestures.MoveDistancesObject): com.mapbox.geojson.Point;
              public constructor(param0: number, param1: com.mapbox.maps.plugin.annotation.AnnotationManager<com.mapbox.geojson.Point, com.mapbox.maps.plugin.annotation.generated.CircleAnnotation, any, any, any, any, any>, param2: com.google.gson.JsonObject, param3: com.mapbox.geojson.Point);
              public getCircleColorString(): string;
              public setCircleStrokeColorString(param0: string): void;
              public setCircleBlur(param0: java.lang.Double): void;
              public setPoint(param0: com.mapbox.geojson.Point): void;
              public setCircleStrokeColorInt(param0: java.lang.Integer): void;
              public getCircleStrokeColorString(): string;
              public getPoint(): com.mapbox.geojson.Point;
              public setCircleRadius(param0: java.lang.Double): void;
            }
            export module CircleAnnotation {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.CircleAnnotation.Companion>;
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
        export module annotation {
          export module generated {
            export class CircleAnnotationManager extends com.mapbox.maps.plugin.annotation.AnnotationManagerImpl<com.mapbox.geojson.Point, com.mapbox.maps.plugin.annotation.generated.CircleAnnotation, com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions, com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationDragListener, com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationClickListener, com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationLongClickListener, com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationInteractionListener, com.mapbox.maps.extension.style.layers.generated.CircleLayer> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.CircleAnnotationManager>;
              public getCirclePitchAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment;
              public create(param0: java.util.List<any>): java.util.List<any>;
              public createDragLayer(): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
              public setCirclePitchScale(param0: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale): void;
              public getCircleTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor;
              public create(param0: com.mapbox.geojson.FeatureCollection): java.util.List<com.mapbox.maps.plugin.annotation.generated.CircleAnnotation>;
              public getDragSourceId(): string;
              public setDataDrivenPropertyIsUsed(param0: string): void;
              public getDragLayerId(): string;
              public create(param0: any): any;
              public create(param0: string): java.util.List<com.mapbox.maps.plugin.annotation.generated.CircleAnnotation>;
              public createLayer(): any;
              public initializeDataDrivenPropertyMap(): void;
              public getLayerId(): string;
              public setCircleTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor): void;
              public setCirclePitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment): void;
              public createLayer(): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
              public getCircleTranslate(): java.util.List<java.lang.Double>;
              public getCirclePitchScale(): com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale;
              public createDragLayer(): any;
              public getAnnotationIdKey(): string;
              public getLayerFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
              public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider, param1: com.mapbox.maps.plugin.annotation.AnnotationConfig);
              public getSourceId(): string;
              public setLayerFilter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
              public setCircleTranslate(param0: java.util.List<java.lang.Double>): void;
            }
            export module CircleAnnotationManager {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.CircleAnnotationManager.Companion>;
                public getID_GENERATOR(): java.util.concurrent.atomic.AtomicLong;
                public setID_GENERATOR(param0: java.util.concurrent.atomic.AtomicLong): void;
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
        export module annotation {
          export module generated {
            export class CircleAnnotationOptions extends com.mapbox.maps.plugin.annotation.AnnotationOptions<com.mapbox.geojson.Point, com.mapbox.maps.plugin.annotation.generated.CircleAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions>;
              public static PROPERTY_CIRCLE_SORT_KEY: string;
              public static PROPERTY_CIRCLE_BLUR: string;
              public static PROPERTY_CIRCLE_COLOR: string;
              public static PROPERTY_CIRCLE_OPACITY: string;
              public static PROPERTY_CIRCLE_RADIUS: string;
              public static PROPERTY_CIRCLE_STROKE_COLOR: string;
              public static PROPERTY_CIRCLE_STROKE_OPACITY: string;
              public static PROPERTY_CIRCLE_STROKE_WIDTH: string;
              public withCircleStrokeColor(param0: number): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public getGeometry(): com.mapbox.geojson.Point;
              public getData(): com.google.gson.JsonElement;
              public getCircleOpacity(): java.lang.Double;
              public withDraggable(param0: boolean): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public withCircleBlur(param0: number): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public setCircleStrokeOpacity(param0: java.lang.Double): void;
              public getCircleStrokeWidth(): java.lang.Double;
              public withCircleSortKey(param0: number): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public withCircleStrokeWidth(param0: number): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public getCircleSortKey(): java.lang.Double;
              public build(param0: number, param1: com.mapbox.maps.plugin.annotation.AnnotationManager<com.mapbox.geojson.Point, com.mapbox.maps.plugin.annotation.generated.CircleAnnotation, any, any, any, any, any>): com.mapbox.maps.plugin.annotation.generated.CircleAnnotation;
              public withPoint(param0: com.mapbox.geojson.Point): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public withCircleStrokeOpacity(param0: number): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public getCircleRadius(): java.lang.Double;
              public getCircleBlur(): java.lang.Double;
              public withCircleColor(param0: string): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public withCircleStrokeColor(param0: string): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public setCircleOpacity(param0: java.lang.Double): void;
              public constructor();
              public setCircleSortKey(param0: java.lang.Double): void;
              public getCircleStrokeOpacity(): java.lang.Double;
              public getCircleColor(): string;
              public setCircleStrokeWidth(param0: java.lang.Double): void;
              public withGeometry(param0: com.mapbox.geojson.Point): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public withCircleOpacity(param0: number): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public setCircleStrokeColor(param0: string): void;
              public setCircleBlur(param0: java.lang.Double): void;
              public withCircleRadius(param0: number): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public withCircleColor(param0: number): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public withData(param0: com.google.gson.JsonElement): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
              public getPoint(): com.mapbox.geojson.Point;
              public setCircleColor(param0: string): void;
              public getCircleStrokeColor(): string;
              public getDraggable(): boolean;
              public setCircleRadius(param0: java.lang.Double): void;
            }
            export module CircleAnnotationOptions {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions.Companion>;
                public fromFeature(param0: com.mapbox.geojson.Feature): com.mapbox.maps.plugin.annotation.generated.CircleAnnotationOptions;
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
        export module annotation {
          export module generated {
            export class OnCircleAnnotationClickListener extends com.mapbox.maps.plugin.annotation.OnAnnotationClickListener<com.mapbox.maps.plugin.annotation.generated.CircleAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationClickListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnCircleAnnotationDragListener extends com.mapbox.maps.plugin.annotation.OnAnnotationDragListener<com.mapbox.maps.plugin.annotation.generated.CircleAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationDragListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationDragListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnCircleAnnotationInteractionListener extends com.mapbox.maps.plugin.annotation.OnAnnotationInteractionListener<com.mapbox.maps.plugin.annotation.generated.CircleAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationInteractionListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationInteractionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnCircleAnnotationLongClickListener extends com.mapbox.maps.plugin.annotation.OnAnnotationLongClickListener<com.mapbox.maps.plugin.annotation.generated.CircleAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationLongClickListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnCircleAnnotationLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPointAnnotationClickListener extends com.mapbox.maps.plugin.annotation.OnAnnotationClickListener<com.mapbox.maps.plugin.annotation.generated.PointAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationClickListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPointAnnotationDragListener extends com.mapbox.maps.plugin.annotation.OnAnnotationDragListener<com.mapbox.maps.plugin.annotation.generated.PointAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationDragListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationDragListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPointAnnotationInteractionListener extends com.mapbox.maps.plugin.annotation.OnAnnotationInteractionListener<com.mapbox.maps.plugin.annotation.generated.PointAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationInteractionListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationInteractionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPointAnnotationLongClickListener extends com.mapbox.maps.plugin.annotation.OnAnnotationLongClickListener<com.mapbox.maps.plugin.annotation.generated.PointAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationLongClickListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPolygonAnnotationClickListener extends com.mapbox.maps.plugin.annotation.OnAnnotationClickListener<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationClickListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPolygonAnnotationDragListener extends com.mapbox.maps.plugin.annotation.OnAnnotationDragListener<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationDragListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationDragListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPolygonAnnotationInteractionListener extends com.mapbox.maps.plugin.annotation.OnAnnotationInteractionListener<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationInteractionListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationInteractionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPolygonAnnotationLongClickListener extends com.mapbox.maps.plugin.annotation.OnAnnotationLongClickListener<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationLongClickListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPolylineAnnotationClickListener extends com.mapbox.maps.plugin.annotation.OnAnnotationClickListener<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationClickListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPolylineAnnotationDragListener extends com.mapbox.maps.plugin.annotation.OnAnnotationDragListener<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationDragListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationDragListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPolylineAnnotationInteractionListener extends com.mapbox.maps.plugin.annotation.OnAnnotationInteractionListener<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationInteractionListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationInteractionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class OnPolylineAnnotationLongClickListener extends com.mapbox.maps.plugin.annotation.OnAnnotationLongClickListener<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationLongClickListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
        export module annotation {
          export module generated {
            export class PointAnnotation extends com.mapbox.maps.plugin.annotation.Annotation<com.mapbox.geojson.Point> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PointAnnotation>;
              public static ID_KEY: string;
              public static ICON_DEFAULT_NAME_PREFIX: string;
              public getTextJustify(): com.mapbox.maps.extension.style.layers.properties.generated.TextJustify;
              public getIconColorString(): string;
              public setTextLetterSpacing(param0: java.lang.Double): void;
              public getTextHaloColorInt(): java.lang.Integer;
              public setTextHaloWidth(param0: java.lang.Double): void;
              public setUsedDataDrivenProperties(): void;
              public setIconImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
              public setIconOpacity(param0: java.lang.Double): void;
              public getTextTransform(): com.mapbox.maps.extension.style.layers.properties.generated.TextTransform;
              public getIconHaloColorInt(): java.lang.Integer;
              public setIconImage(param0: string): void;
              public setIconHaloColorInt(param0: java.lang.Integer): void;
              public setTextTransform(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextTransform): void;
              public setTextHaloBlur(param0: java.lang.Double): void;
              public setTextOffset(param0: java.util.List<java.lang.Double>): void;
              public setIconHaloBlur(param0: java.lang.Double): void;
              public getIconOpacity(): java.lang.Double;
              public setIconColorInt(param0: java.lang.Integer): void;
              public setIconHaloWidth(param0: java.lang.Double): void;
              public setIconOffset(param0: java.util.List<java.lang.Double>): void;
              public getIconHaloColorString(): string;
              public setIconSize(param0: java.lang.Double): void;
              public getSymbolSortKey(): java.lang.Double;
              public getType(): com.mapbox.maps.plugin.annotation.AnnotationType;
              public getTextHaloBlur(): java.lang.Double;
              public getTextOffset(): java.util.List<java.lang.Double>;
              public setTextMaxWidth(param0: java.lang.Double): void;
              public getIconSize(): java.lang.Double;
              public setTextAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor): void;
              public getPoint(): com.mapbox.geojson.Point;
              public getIconRotate(): java.lang.Double;
              public getTextAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
              public getIconColorInt(): java.lang.Integer;
              public setTextOpacity(param0: java.lang.Double): void;
              public getTextHaloColorString(): string;
              public setTextJustify(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextJustify): void;
              public setTextColorString(param0: string): void;
              public setIconRotate(param0: java.lang.Double): void;
              public setIconColorString(param0: string): void;
              public getIconHaloWidth(): java.lang.Double;
              public getTextHaloWidth(): java.lang.Double;
              public getIconHaloBlur(): java.lang.Double;
              public getTextColorString(): string;
              public getTextRadialOffset(): java.lang.Double;
              public constructor(param0: number, param1: com.mapbox.maps.plugin.annotation.AnnotationManager<com.mapbox.geojson.Point, com.mapbox.maps.plugin.annotation.generated.PointAnnotation, any, any, any, any, any>, param2: com.google.gson.JsonObject, param3: com.mapbox.geojson.Point);
              public getIconImage(): string;
              public setTextField(param0: string): void;
              public getTextLineHeight(): java.lang.Double;
              public getTextOpacity(): java.lang.Double;
              public getIconAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
              public setTextHaloColorInt(param0: java.lang.Integer): void;
              public getTextLetterSpacing(): java.lang.Double;
              public getIconImageBitmap(): globalAndroid.graphics.Bitmap;
              public getIconOffset(): java.util.List<java.lang.Double>;
              public getTextColorInt(): java.lang.Integer;
              public getTextSize(): java.lang.Double;
              public getTextField(): string;
              public getOffsetGeometry(param0: com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate, param1: com.mapbox.android.gestures.MoveDistancesObject): com.mapbox.geojson.Point;
              public getTextMaxWidth(): java.lang.Double;
              public setTextHaloColorString(param0: string): void;
              public getTextRotate(): java.lang.Double;
              public setTextColorInt(param0: java.lang.Integer): void;
              public setPoint(param0: com.mapbox.geojson.Point): void;
              public setIconAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor): void;
              public setSymbolSortKey(param0: java.lang.Double): void;
              public setIconHaloColorString(param0: string): void;
              public setTextRadialOffset(param0: java.lang.Double): void;
              public setTextSize(param0: java.lang.Double): void;
              public setTextRotate(param0: java.lang.Double): void;
              public setTextLineHeight(param0: java.lang.Double): void;
            }
            export module PointAnnotation {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PointAnnotation.Companion>;
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
        export module annotation {
          export module generated {
            export class PointAnnotationManager extends com.mapbox.maps.plugin.annotation.AnnotationManagerImpl<com.mapbox.geojson.Point, com.mapbox.maps.plugin.annotation.generated.PointAnnotation, com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions, com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationDragListener, com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationClickListener, com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationLongClickListener, com.mapbox.maps.plugin.annotation.generated.OnPointAnnotationInteractionListener, com.mapbox.maps.extension.style.layers.generated.SymbolLayer> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PointAnnotationManager>;
              public getTextTranslate(): java.util.List<java.lang.Double>;
              public setIconTextFit(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit): void;
              public setIconIgnorePlacement(param0: java.lang.Boolean): void;
              public getIconOptional(): java.lang.Boolean;
              public setSymbolZOrder(param0: com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder): void;
              public setIconPadding(param0: java.lang.Double): void;
              public getTextFont(): java.util.List<string>;
              public getTextWritingMode(): java.util.List<string>;
              public getDragSourceId(): string;
              public getDragLayerId(): string;
              public getIconTextFit(): com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit;
              public setIconTextFitPadding(param0: java.util.List<java.lang.Double>): void;
              public getTextVariableAnchor(): java.util.List<string>;
              public setIconOptional(param0: java.lang.Boolean): void;
              public getSymbolPlacement(): com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement;
              public getTextTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor;
              public createLayer(): any;
              public initializeDataDrivenPropertyMap(): void;
              public getIconTranslate(): java.util.List<java.lang.Double>;
              public setTextPadding(param0: java.lang.Double): void;
              public setIconTranslate(param0: java.util.List<java.lang.Double>): void;
              public getLayerId(): string;
              public getSymbolAvoidEdges(): java.lang.Boolean;
              public getTextAllowOverlap(): java.lang.Boolean;
              public setTextIgnorePlacement(param0: java.lang.Boolean): void;
              public getSymbolSpacing(): java.lang.Double;
              public create(param0: string): java.util.List<com.mapbox.maps.plugin.annotation.generated.PointAnnotation>;
              public setIconPitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment): void;
              public getIconPitchAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment;
              public getTextOptional(): java.lang.Boolean;
              public create(param0: com.mapbox.geojson.FeatureCollection): java.util.List<com.mapbox.maps.plugin.annotation.generated.PointAnnotation>;
              public getTextMaxAngle(): java.lang.Double;
              public setTextVariableAnchor(param0: java.util.List<string>): void;
              public createDragLayer(): any;
              public getAnnotationIdKey(): string;
              public getSymbolZOrder(): com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder;
              public getTextPadding(): java.lang.Double;
              public setTextAllowOverlap(param0: java.lang.Boolean): void;
              public create(param0: java.util.List<any>): java.util.List<any>;
              public getIconTextFitPadding(): java.util.List<java.lang.Double>;
              public getIconAllowOverlap(): java.lang.Boolean;
              public getIconRotationAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment;
              public setIconTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor): void;
              public getTextRotationAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment;
              public setTextTranslate(param0: java.util.List<java.lang.Double>): void;
              public getIconIgnorePlacement(): java.lang.Boolean;
              public setIconRotationAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment): void;
              public getTextPitchAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment;
              public getIconTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor;
              public createLayer(): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
              public createDragLayer(): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
              /** @deprecated */
              public setTextLineHeight(param0: java.lang.Double): void;
              public setDataDrivenPropertyIsUsed(param0: string): void;
              public setTextFont(param0: java.util.List<string>): void;
              public setTextTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor): void;
              public create(param0: any): any;
              public getTextKeepUpright(): java.lang.Boolean;
              public setTextKeepUpright(param0: java.lang.Boolean): void;
              public setSymbolSpacing(param0: java.lang.Double): void;
              public setIconAllowOverlap(param0: java.lang.Boolean): void;
              public getIconPadding(): java.lang.Double;
              public setSymbolPlacement(param0: com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement): void;
              public getTextIgnorePlacement(): java.lang.Boolean;
              public setTextOptional(param0: java.lang.Boolean): void;
              /** @deprecated */
              public getTextLineHeight(): java.lang.Double;
              public setTextMaxAngle(param0: java.lang.Double): void;
              public getLayerFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
              public setSymbolAvoidEdges(param0: java.lang.Boolean): void;
              public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider, param1: com.mapbox.maps.plugin.annotation.AnnotationConfig);
              public getSourceId(): string;
              public setTextRotationAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment): void;
              public setLayerFilter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
              public setTextPitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment): void;
              public getIconKeepUpright(): java.lang.Boolean;
              public setIconKeepUpright(param0: java.lang.Boolean): void;
              public setTextWritingMode(param0: java.util.List<string>): void;
            }
            export module PointAnnotationManager {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PointAnnotationManager.Companion>;
                public getID_GENERATOR(): java.util.concurrent.atomic.AtomicLong;
                public setID_GENERATOR(param0: java.util.concurrent.atomic.AtomicLong): void;
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
        export module annotation {
          export module generated {
            export class PointAnnotationOptions extends com.mapbox.maps.plugin.annotation.AnnotationOptions<com.mapbox.geojson.Point, com.mapbox.maps.plugin.annotation.generated.PointAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions>;
              public static PROPERTY_ICON_ANCHOR: string;
              public static PROPERTY_ICON_IMAGE: string;
              public static PROPERTY_ICON_OFFSET: string;
              public static PROPERTY_ICON_ROTATE: string;
              public static PROPERTY_ICON_SIZE: string;
              public static PROPERTY_SYMBOL_SORT_KEY: string;
              public static PROPERTY_TEXT_ANCHOR: string;
              public static PROPERTY_TEXT_FIELD: string;
              public static PROPERTY_TEXT_JUSTIFY: string;
              public static PROPERTY_TEXT_LETTER_SPACING: string;
              public static PROPERTY_TEXT_LINE_HEIGHT: string;
              public static PROPERTY_TEXT_MAX_WIDTH: string;
              public static PROPERTY_TEXT_OFFSET: string;
              public static PROPERTY_TEXT_RADIAL_OFFSET: string;
              public static PROPERTY_TEXT_ROTATE: string;
              public static PROPERTY_TEXT_SIZE: string;
              public static PROPERTY_TEXT_TRANSFORM: string;
              public static PROPERTY_ICON_COLOR: string;
              public static PROPERTY_ICON_HALO_BLUR: string;
              public static PROPERTY_ICON_HALO_COLOR: string;
              public static PROPERTY_ICON_HALO_WIDTH: string;
              public static PROPERTY_ICON_OPACITY: string;
              public static PROPERTY_TEXT_COLOR: string;
              public static PROPERTY_TEXT_HALO_BLUR: string;
              public static PROPERTY_TEXT_HALO_COLOR: string;
              public static PROPERTY_TEXT_HALO_WIDTH: string;
              public static PROPERTY_TEXT_OPACITY: string;
              public getTextJustify(): com.mapbox.maps.extension.style.layers.properties.generated.TextJustify;
              public setIconHaloColor(param0: string): void;
              public withIconOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public setTextLetterSpacing(param0: java.lang.Double): void;
              public withIconImage(param0: globalAndroid.graphics.Bitmap): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withIconHaloColor(param0: string): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withTextOpacity(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getGeometry(): com.mapbox.geojson.Point;
              public setTextHaloWidth(param0: java.lang.Double): void;
              public setIconOpacity(param0: java.lang.Double): void;
              public withIconImage(param0: string): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getTextTransform(): com.mapbox.maps.extension.style.layers.properties.generated.TextTransform;
              public setIconImage(param0: string): void;
              public setTextTransform(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextTransform): void;
              public setTextHaloBlur(param0: java.lang.Double): void;
              public withIconRotate(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public setTextOffset(param0: java.util.List<java.lang.Double>): void;
              public setIconHaloBlur(param0: java.lang.Double): void;
              public getIconOpacity(): java.lang.Double;
              public withTextRadialOffset(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public setIconHaloWidth(param0: java.lang.Double): void;
              public setIconOffset(param0: java.util.List<java.lang.Double>): void;
              public setTextHaloColor(param0: string): void;
              public withData(param0: com.google.gson.JsonElement): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withDraggable(param0: boolean): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public setIconSize(param0: java.lang.Double): void;
              public getSymbolSortKey(): java.lang.Double;
              public getTextHaloBlur(): java.lang.Double;
              public getTextOffset(): java.util.List<java.lang.Double>;
              public setTextMaxWidth(param0: java.lang.Double): void;
              public getTextColor(): string;
              public withSymbolSortKey(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getIconSize(): java.lang.Double;
              public withTextTransform(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextTransform): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public setTextAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor): void;
              public getIconColor(): string;
              public withTextHaloColor(param0: string): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getPoint(): com.mapbox.geojson.Point;
              public getIconRotate(): java.lang.Double;
              public getTextAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
              public setTextOpacity(param0: java.lang.Double): void;
              public setTextJustify(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextJustify): void;
              public withTextHaloBlur(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public setIconRotate(param0: java.lang.Double): void;
              public getIconHaloWidth(): java.lang.Double;
              public getTextHaloWidth(): java.lang.Double;
              public getIconHaloBlur(): java.lang.Double;
              public setIconColor(param0: string): void;
              public withPoint(param0: com.mapbox.geojson.Point): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getTextRadialOffset(): java.lang.Double;
              public getData(): com.google.gson.JsonElement;
              public withTextOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getIconImage(): string;
              public setTextField(param0: string): void;
              public withTextLetterSpacing(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getTextLineHeight(): java.lang.Double;
              public build(param0: number, param1: com.mapbox.maps.plugin.annotation.AnnotationManager<com.mapbox.geojson.Point, com.mapbox.maps.plugin.annotation.generated.PointAnnotation, any, any, any, any, any>): com.mapbox.maps.plugin.annotation.generated.PointAnnotation;
              public withIconHaloBlur(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withIconOpacity(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getTextOpacity(): java.lang.Double;
              public getIconAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
              public getTextHaloColor(): string;
              public getTextLetterSpacing(): java.lang.Double;
              public withIconColor(param0: string): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withTextAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withTextColor(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withIconAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withTextSize(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getIconHaloColor(): string;
              public withIconHaloWidth(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withTextMaxWidth(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withGeometry(param0: com.mapbox.geojson.Point): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getIconOffset(): java.util.List<java.lang.Double>;
              public withTextLineHeight(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withTextJustify(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextJustify): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withTextHaloColor(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public constructor();
              public withTextRotate(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withIconSize(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getTextSize(): java.lang.Double;
              public getTextField(): string;
              public getTextMaxWidth(): java.lang.Double;
              public getTextRotate(): java.lang.Double;
              public setTextColor(param0: string): void;
              public withIconColor(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withTextHaloWidth(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public setIconAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor): void;
              public setSymbolSortKey(param0: java.lang.Double): void;
              public setTextRadialOffset(param0: java.lang.Double): void;
              public withTextField(param0: string): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public getDraggable(): boolean;
              public setTextSize(param0: java.lang.Double): void;
              public setTextRotate(param0: java.lang.Double): void;
              public setTextLineHeight(param0: java.lang.Double): void;
              public withTextColor(param0: string): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
              public withIconHaloColor(param0: number): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
            }
            export module PointAnnotationOptions {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions.Companion>;
                public fromFeature(param0: com.mapbox.geojson.Feature): com.mapbox.maps.plugin.annotation.generated.PointAnnotationOptions;
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
        export module annotation {
          export module generated {
            export class PolygonAnnotation extends com.mapbox.maps.plugin.annotation.Annotation<com.mapbox.geojson.Polygon> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation>;
              public static ID_KEY: string;
              public getFillOutlineColorString(): string;
              public getFillSortKey(): java.lang.Double;
              public getFillColorString(): string;
              public setFillColorString(param0: string): void;
              public setFillOutlineColorString(param0: string): void;
              public getType(): com.mapbox.maps.plugin.annotation.AnnotationType;
              public setFillPattern(param0: string): void;
              public setUsedDataDrivenProperties(): void;
              public setFillOutlineColorInt(param0: java.lang.Integer): void;
              public constructor(param0: number, param1: com.mapbox.maps.plugin.annotation.AnnotationManager<com.mapbox.geojson.Polygon, com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation, any, any, any, any, any>, param2: com.google.gson.JsonObject, param3: com.mapbox.geojson.Polygon);
              public setPoints(param0: java.util.List<any>): void;
              public setFillOpacity(param0: java.lang.Double): void;
              public getFillColorInt(): java.lang.Integer;
              public getPoints(): java.util.List<java.util.List<com.mapbox.geojson.Point>>;
              public getFillOpacity(): java.lang.Double;
              public getFillPattern(): string;
              public setFillSortKey(param0: java.lang.Double): void;
              public setFillColorInt(param0: java.lang.Integer): void;
              public getOffsetGeometry(param0: com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate, param1: com.mapbox.android.gestures.MoveDistancesObject): com.mapbox.geojson.Polygon;
              public getFillOutlineColorInt(): java.lang.Integer;
            }
            export module PolygonAnnotation {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation.Companion>;
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
        export module annotation {
          export module generated {
            export class PolygonAnnotationManager extends com.mapbox.maps.plugin.annotation.AnnotationManagerImpl<com.mapbox.geojson.Polygon, com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation, com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions, com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationDragListener, com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationClickListener, com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationLongClickListener, com.mapbox.maps.plugin.annotation.generated.OnPolygonAnnotationInteractionListener, com.mapbox.maps.extension.style.layers.generated.FillLayer> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationManager>;
              public getFillTranslate(): java.util.List<java.lang.Double>;
              public createLayer(): any;
              public initializeDataDrivenPropertyMap(): void;
              public getLayerId(): string;
              public create(param0: java.util.List<any>): java.util.List<any>;
              public createLayer(): com.mapbox.maps.extension.style.layers.generated.FillLayer;
              public setFillAntialias(param0: java.lang.Boolean): void;
              public getFillAntialias(): java.lang.Boolean;
              public createDragLayer(): com.mapbox.maps.extension.style.layers.generated.FillLayer;
              public getDragSourceId(): string;
              public create(param0: string): java.util.List<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation>;
              public getFillTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor;
              public createDragLayer(): any;
              public getAnnotationIdKey(): string;
              public getLayerFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
              public setDataDrivenPropertyIsUsed(param0: string): void;
              public getDragLayerId(): string;
              public setFillTranslate(param0: java.util.List<java.lang.Double>): void;
              public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider, param1: com.mapbox.maps.plugin.annotation.AnnotationConfig);
              public getSourceId(): string;
              public create(param0: any): any;
              public create(param0: com.mapbox.geojson.FeatureCollection): java.util.List<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation>;
              public setFillTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor): void;
              public setLayerFilter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
            }
            export module PolygonAnnotationManager {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationManager.Companion>;
                public getID_GENERATOR(): java.util.concurrent.atomic.AtomicLong;
                public setID_GENERATOR(param0: java.util.concurrent.atomic.AtomicLong): void;
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
        export module annotation {
          export module generated {
            export class PolygonAnnotationOptions extends com.mapbox.maps.plugin.annotation.AnnotationOptions<com.mapbox.geojson.Polygon, com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions>;
              public static PROPERTY_FILL_SORT_KEY: string;
              public static PROPERTY_FILL_COLOR: string;
              public static PROPERTY_FILL_OPACITY: string;
              public static PROPERTY_FILL_OUTLINE_COLOR: string;
              public static PROPERTY_FILL_PATTERN: string;
              public getData(): com.google.gson.JsonElement;
              public getFillColor(): string;
              public withGeometry(param0: com.mapbox.geojson.Polygon): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
              public setFillOpacity(param0: java.lang.Double): void;
              public build(param0: number, param1: com.mapbox.maps.plugin.annotation.AnnotationManager<com.mapbox.geojson.Polygon, com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation, any, any, any, any, any>): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotation;
              public getFillOutlineColor(): string;
              public withFillColor(param0: number): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
              public withFillOpacity(param0: number): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
              public getPoints(): java.util.List<java.util.List<com.mapbox.geojson.Point>>;
              public getFillOpacity(): java.lang.Double;
              public setFillSortKey(param0: java.lang.Double): void;
              public withFillColor(param0: string): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
              public withFillOutlineColor(param0: number): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
              public constructor();
              public withData(param0: com.google.gson.JsonElement): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
              public getFillSortKey(): java.lang.Double;
              public withPoints(param0: java.util.List<any>): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
              public setFillPattern(param0: string): void;
              public getGeometry(): com.mapbox.geojson.Polygon;
              public withFillPattern(param0: string): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
              public withFillSortKey(param0: number): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
              public setFillColor(param0: string): void;
              public getFillPattern(): string;
              public withFillOutlineColor(param0: string): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
              public getDraggable(): boolean;
              public setFillOutlineColor(param0: string): void;
              public withDraggable(param0: boolean): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
            }
            export module PolygonAnnotationOptions {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions.Companion>;
                public fromFeature(param0: com.mapbox.geojson.Feature): com.mapbox.maps.plugin.annotation.generated.PolygonAnnotationOptions;
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
        export module annotation {
          export module generated {
            export class PolylineAnnotation extends com.mapbox.maps.plugin.annotation.Annotation<com.mapbox.geojson.LineString> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation>;
              public static ID_KEY: string;
              public setLineOffset(param0: java.lang.Double): void;
              public getOffsetGeometry(param0: com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate, param1: com.mapbox.android.gestures.MoveDistancesObject): com.mapbox.geojson.LineString;
              public getLineSortKey(): java.lang.Double;
              public getLineColorInt(): java.lang.Integer;
              public setLineOpacity(param0: java.lang.Double): void;
              public setPoints(param0: java.util.List<com.mapbox.geojson.Point>): void;
              public setUsedDataDrivenProperties(): void;
              public getLineWidth(): java.lang.Double;
              public getLineBlur(): java.lang.Double;
              public setLineColorInt(param0: java.lang.Integer): void;
              public getLineOffset(): java.lang.Double;
              public setLineColorString(param0: string): void;
              public setLinePattern(param0: string): void;
              public getPoints(): java.util.List<com.mapbox.geojson.Point>;
              public getLineJoin(): com.mapbox.maps.extension.style.layers.properties.generated.LineJoin;
              public setLineGapWidth(param0: java.lang.Double): void;
              public setLineJoin(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineJoin): void;
              public setLineWidth(param0: java.lang.Double): void;
              public getLinePattern(): string;
              public getType(): com.mapbox.maps.plugin.annotation.AnnotationType;
              public constructor(param0: number, param1: com.mapbox.maps.plugin.annotation.AnnotationManager<com.mapbox.geojson.LineString, com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation, any, any, any, any, any>, param2: com.google.gson.JsonObject, param3: com.mapbox.geojson.LineString);
              public getLineOpacity(): java.lang.Double;
              public setLineSortKey(param0: java.lang.Double): void;
              public getLineColorString(): string;
              public setLineBlur(param0: java.lang.Double): void;
              public getLineGapWidth(): java.lang.Double;
            }
            export module PolylineAnnotation {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation.Companion>;
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
        export module annotation {
          export module generated {
            export class PolylineAnnotationManager extends com.mapbox.maps.plugin.annotation.AnnotationManagerImpl<com.mapbox.geojson.LineString, com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation, com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions, com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationDragListener, com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationClickListener, com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationLongClickListener, com.mapbox.maps.plugin.annotation.generated.OnPolylineAnnotationInteractionListener, com.mapbox.maps.extension.style.layers.generated.LineLayer> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationManager>;
              public setLineTranslate(param0: java.util.List<java.lang.Double>): void;
              public create(param0: java.util.List<any>): java.util.List<any>;
              public getLineTranslate(): java.util.List<java.lang.Double>;
              public setLineDasharray(param0: java.util.List<java.lang.Double>): void;
              public getLineRoundLimit(): java.lang.Double;
              public createDragLayer(): com.mapbox.maps.extension.style.layers.generated.LineLayer;
              public getLineCap(): com.mapbox.maps.extension.style.layers.properties.generated.LineCap;
              public setLineRoundLimit(param0: java.lang.Double): void;
              public getDragSourceId(): string;
              public setLineMiterLimit(param0: java.lang.Double): void;
              public setDataDrivenPropertyIsUsed(param0: string): void;
              public getDragLayerId(): string;
              public create(param0: any): any;
              public createLayer(): any;
              public create(param0: string): java.util.List<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation>;
              public initializeDataDrivenPropertyMap(): void;
              public getLayerId(): string;
              public setLineCap(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineCap): void;
              public setLineTrimOffset(param0: java.util.List<java.lang.Double>): void;
              public createLayer(): com.mapbox.maps.extension.style.layers.generated.LineLayer;
              public getLineDasharray(): java.util.List<java.lang.Double>;
              public create(param0: com.mapbox.geojson.FeatureCollection): java.util.List<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation>;
              public getLineTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor;
              public createDragLayer(): any;
              public getAnnotationIdKey(): string;
              public getLineTrimOffset(): java.util.List<java.lang.Double>;
              public getLayerFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
              public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider, param1: com.mapbox.maps.plugin.annotation.AnnotationConfig);
              public getSourceId(): string;
              public setLayerFilter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
              public getLineMiterLimit(): java.lang.Double;
              public setLineTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor): void;
            }
            export module PolylineAnnotationManager {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationManager.Companion>;
                public getID_GENERATOR(): java.util.concurrent.atomic.AtomicLong;
                public setID_GENERATOR(param0: java.util.concurrent.atomic.AtomicLong): void;
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
        export module annotation {
          export module generated {
            export class PolylineAnnotationOptions extends com.mapbox.maps.plugin.annotation.AnnotationOptions<com.mapbox.geojson.LineString, com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation> {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions>;
              public static PROPERTY_LINE_JOIN: string;
              public static PROPERTY_LINE_SORT_KEY: string;
              public static PROPERTY_LINE_BLUR: string;
              public static PROPERTY_LINE_COLOR: string;
              public static PROPERTY_LINE_GAP_WIDTH: string;
              public static PROPERTY_LINE_OFFSET: string;
              public static PROPERTY_LINE_OPACITY: string;
              public static PROPERTY_LINE_PATTERN: string;
              public static PROPERTY_LINE_WIDTH: string;
              public setLineOffset(param0: java.lang.Double): void;
              public getLineSortKey(): java.lang.Double;
              public withLineColor(param0: number): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public withLineSortKey(param0: number): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public setLineOpacity(param0: java.lang.Double): void;
              public getData(): com.google.gson.JsonElement;
              public getLineWidth(): java.lang.Double;
              public getLineBlur(): java.lang.Double;
              public withGeometry(param0: com.mapbox.geojson.LineString): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public getLineOffset(): java.lang.Double;
              public withLineGapWidth(param0: number): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public withPoints(param0: java.util.List<com.mapbox.geojson.Point>): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public setLinePattern(param0: string): void;
              public getLineJoin(): com.mapbox.maps.extension.style.layers.properties.generated.LineJoin;
              public getPoints(): java.util.List<com.mapbox.geojson.Point>;
              public withData(param0: com.google.gson.JsonElement): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public withLinePattern(param0: string): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public setLineGapWidth(param0: java.lang.Double): void;
              public getGeometry(): com.mapbox.geojson.LineString;
              public constructor();
              public setLineJoin(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineJoin): void;
              public withLineOffset(param0: number): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public setLineWidth(param0: java.lang.Double): void;
              public getLinePattern(): string;
              public getLineOpacity(): java.lang.Double;
              public build(param0: number, param1: com.mapbox.maps.plugin.annotation.AnnotationManager<com.mapbox.geojson.LineString, com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation, any, any, any, any, any>): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotation;
              public withLineBlur(param0: number): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public setLineSortKey(param0: java.lang.Double): void;
              public getLineColor(): string;
              public withLineWidth(param0: number): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public setLineColor(param0: string): void;
              public setLineBlur(param0: java.lang.Double): void;
              public getLineGapWidth(): java.lang.Double;
              public getDraggable(): boolean;
              public withLineJoin(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineJoin): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public withLineColor(param0: string): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public withLineOpacity(param0: number): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              public withDraggable(param0: boolean): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
            }
            export module PolylineAnnotationOptions {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions.Companion>;
                public fromFeature(param0: com.mapbox.geojson.Feature): com.mapbox.maps.plugin.annotation.generated.PolylineAnnotationOptions;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.maps.plugin.annotation.AnnotationManagerImpl:8
//com.mapbox.maps.plugin.annotation.QueryAnnotationCallback:1
