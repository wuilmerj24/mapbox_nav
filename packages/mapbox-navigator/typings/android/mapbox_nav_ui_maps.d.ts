/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.BuildConfig>;
            public static DEBUG: boolean;
            public static LIBRARY_PACKAGE_NAME: string;
            public static BUILD_TYPE: string;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class BuildingHighlightConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.BuildingHighlightConfig>;
            public constructor();
            public setOptions(param0: com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions): void;
            public getBuildingView(): com.mapbox.navigation.ui.maps.building.view.MapboxBuildingView;
            public getOptions(): com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions;
            public setBuildingsApi(param0: com.mapbox.navigation.ui.maps.building.api.MapboxBuildingsApi): void;
            public getBuildingsApi(): com.mapbox.navigation.ui.maps.building.api.MapboxBuildingsApi;
            public setBuildingView(param0: com.mapbox.navigation.ui.maps.building.view.MapboxBuildingView): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class CameraModeConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.CameraModeConfig>;
            public constructor();
            public getNavigationCamera(): com.mapbox.navigation.ui.maps.camera.NavigationCamera;
            public setNavigationCamera(param0: com.mapbox.navigation.ui.maps.camera.NavigationCamera): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class LocationPuckConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.LocationPuckConfig>;
            public constructor();
            public getEnableLocationUpdates(): boolean;
            public setLocationProvider(param0: com.mapbox.navigation.ui.maps.location.NavigationLocationProvider): void;
            public setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
            public getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
            public getLocationProvider(): com.mapbox.navigation.ui.maps.location.NavigationLocationProvider;
            public setEnableLocationUpdates(param0: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class NavigationCameraConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.NavigationCameraConfig>;
            public constructor();
            public setViewportDataSource(param0: com.mapbox.navigation.ui.maps.camera.data.MapboxNavigationViewportDataSource): void;
            public getViewportDataSource(): com.mapbox.navigation.ui.maps.camera.data.MapboxNavigationViewportDataSource;
            public setSwitchToIdleOnMapGesture(param0: boolean): void;
            public getNavigationCamera(): com.mapbox.navigation.ui.maps.camera.NavigationCamera;
            public setNavigationCamera(param0: com.mapbox.navigation.ui.maps.camera.NavigationCamera): void;
            public getSwitchToIdleOnMapGesture(): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class NavigationStyles {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.NavigationStyles>;
            public static INSTANCE: com.mapbox.navigation.ui.maps.NavigationStyles;
            public static NAVIGATION_DAY_STYLE_USER_ID: string;
            public static NAVIGATION_DAY_STYLE_ID: string;
            public static NAVIGATION_DAY_STYLE: string;
            public static NAVIGATION_NIGHT_STYLE_USER_ID: string;
            public static NAVIGATION_NIGHT_STYLE_ID: string;
            public static NAVIGATION_NIGHT_STYLE: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class PredictiveCacheController {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.PredictiveCacheController>;
            /** @deprecated */
            public constructor(param0: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions);
            /** @deprecated */
            public createMapControllers(param0: com.mapbox.maps.MapboxMap): void;
            /** @deprecated */
            public constructor(param0: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions, param1: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions, param2: com.mapbox.navigation.ui.maps.PredictiveCacheControllerErrorHandler);
            public createStyleMapControllers(param0: com.mapbox.maps.MapboxMap, param1: boolean, param2: java.util.List<string>): void;
            /** @deprecated */
            public constructor(param0: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions, param1: com.mapbox.navigation.ui.maps.PredictiveCacheControllerErrorHandler);
            /** @deprecated */
            public createMapControllers(param0: com.mapbox.maps.MapboxMap, param1: java.util.List<string>): void;
            /** @deprecated */
            public constructor(param0: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions, param1: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions);
            public createStyleMapControllers(param0: com.mapbox.maps.MapboxMap): void;
            public setPredictiveCacheControllerErrorHandler(param0: com.mapbox.navigation.ui.maps.PredictiveCacheControllerErrorHandler): void;
            public onDestroy(): void;
            /** @deprecated */
            public constructor();
            public createStyleMapControllers(param0: com.mapbox.maps.MapboxMap, param1: boolean): void;
            public constructor(param0: com.mapbox.navigation.base.options.PredictiveCacheOptions);
            public getPredictiveCacheControllerErrorHandler(): com.mapbox.navigation.ui.maps.PredictiveCacheControllerErrorHandler;
            public removeMapControllers(param0: com.mapbox.maps.MapboxMap): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class PredictiveCacheControllerErrorHandler {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.PredictiveCacheControllerErrorHandler>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.ui.maps.PredictiveCacheControllerErrorHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onError(param0: string): void });
            public constructor();
            public onError(param0: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class RecenterButtonConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.RecenterButtonConfig>;
            public setAnimationOptions(param0: com.mapbox.maps.plugin.animation.MapAnimationOptions): void;
            public constructor();
            public setCameraOptions(param0: com.mapbox.maps.CameraOptions): void;
            public getCameraOptions(): com.mapbox.maps.CameraOptions;
            public getAnimationOptions(): com.mapbox.maps.plugin.animation.MapAnimationOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class RoadNameConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.RoadNameConfig>;
            public constructor();
            public getRouteShieldApi(): com.mapbox.navigation.ui.shield.api.MapboxRouteShieldApi;
            public setRouteShieldApi(param0: com.mapbox.navigation.ui.shield.api.MapboxRouteShieldApi): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class RouteArrowConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.RouteArrowConfig>;
            public constructor(param0: globalAndroid.content.Context);
            public setOptions(param0: com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions): void;
            public getOptions(): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export class RouteLineConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maps.RouteLineConfig>;
            public setOptions(param0: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions): void;
            public constructor(param0: globalAndroid.content.Context);
            public getOptions(): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export module building {
            export abstract class BuildingAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.BuildingAction>;
            }
            export module BuildingAction {
              export class QueryBuilding extends com.mapbox.navigation.ui.maps.building.BuildingAction {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.BuildingAction.QueryBuilding>;
                public component1(): com.mapbox.geojson.Point;
                public toString(): string;
                public constructor(param0: com.mapbox.geojson.Point, param1: com.mapbox.maps.MapboxMap);
                public component2(): com.mapbox.maps.MapboxMap;
                public getMapboxMap(): com.mapbox.maps.MapboxMap;
                public copy(param0: com.mapbox.geojson.Point, param1: com.mapbox.maps.MapboxMap): com.mapbox.navigation.ui.maps.building.BuildingAction.QueryBuilding;
                public equals(param0: any): boolean;
                public hashCode(): number;
                public getPoint(): com.mapbox.geojson.Point;
              }
              export class QueryBuildingOnFinalDestination extends com.mapbox.navigation.ui.maps.building.BuildingAction {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.BuildingAction.QueryBuildingOnFinalDestination>;
                public toString(): string;
                public getProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
                public constructor(param0: com.mapbox.navigation.base.trip.model.RouteProgress);
                public component1(): com.mapbox.navigation.base.trip.model.RouteProgress;
                public equals(param0: any): boolean;
                public copy(param0: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.navigation.ui.maps.building.BuildingAction.QueryBuildingOnFinalDestination;
                public hashCode(): number;
              }
              export class QueryBuildingOnWaypoint extends com.mapbox.navigation.ui.maps.building.BuildingAction {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.BuildingAction.QueryBuildingOnWaypoint>;
                public toString(): string;
                public getProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
                public constructor(param0: com.mapbox.navigation.base.trip.model.RouteProgress);
                public component1(): com.mapbox.navigation.base.trip.model.RouteProgress;
                public equals(param0: any): boolean;
                public copy(param0: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.navigation.ui.maps.building.BuildingAction.QueryBuildingOnWaypoint;
                public hashCode(): number;
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
    export module navigation {
      export module ui {
        export module maps {
          export module building {
            export class BuildingProcessor {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.BuildingProcessor>;
              public static INSTANCE: com.mapbox.navigation.ui.maps.building.BuildingProcessor;
              public queryBuilding(param0: com.mapbox.navigation.ui.maps.building.BuildingAction.QueryBuilding, param1: any): any;
              public queryBuildingOnFinalDestination(param0: com.mapbox.navigation.ui.maps.building.BuildingAction.QueryBuildingOnFinalDestination): com.mapbox.navigation.ui.maps.building.BuildingResult.GetDestination;
              public queryBuildingOnWaypoint(param0: com.mapbox.navigation.ui.maps.building.BuildingAction.QueryBuildingOnWaypoint): com.mapbox.navigation.ui.maps.building.BuildingResult.GetDestination;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export module building {
            export abstract class BuildingResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.BuildingResult>;
            }
            export module BuildingResult {
              export class GetDestination extends com.mapbox.navigation.ui.maps.building.BuildingResult {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.BuildingResult.GetDestination>;
                public component1(): com.mapbox.geojson.Point;
                public toString(): string;
                public equals(param0: any): boolean;
                public copy(param0: com.mapbox.geojson.Point): com.mapbox.navigation.ui.maps.building.BuildingResult.GetDestination;
                public constructor(param0: com.mapbox.geojson.Point);
                public hashCode(): number;
                public getPoint(): com.mapbox.geojson.Point;
              }
              export class QueriedBuildings extends com.mapbox.navigation.ui.maps.building.BuildingResult {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.BuildingResult.QueriedBuildings>;
                public component1(): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.building.model.BuildingError, com.mapbox.navigation.ui.maps.building.model.BuildingValue>;
                public copy(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.building.model.BuildingError, com.mapbox.navigation.ui.maps.building.model.BuildingValue>): com.mapbox.navigation.ui.maps.building.BuildingResult.QueriedBuildings;
                public toString(): string;
                public constructor(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.building.model.BuildingError, com.mapbox.navigation.ui.maps.building.model.BuildingValue>);
                public getQueriedBuildings(): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.building.model.BuildingError, com.mapbox.navigation.ui.maps.building.model.BuildingValue>;
                public equals(param0: any): boolean;
                public hashCode(): number;
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
    export module navigation {
      export module ui {
        export module maps {
          export module building {
            export module api {
              export class MapboxBuildingsApi {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.api.MapboxBuildingsApi>;
                public queryBuildingToHighlight(param0: com.mapbox.geojson.Point, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.building.model.BuildingError, com.mapbox.navigation.ui.maps.building.model.BuildingValue>>): void;
                public cancel(): void;
                public constructor(param0: com.mapbox.maps.MapboxMap);
                public queryBuildingOnFinalDestination(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.building.model.BuildingError, com.mapbox.navigation.ui.maps.building.model.BuildingValue>>): void;
                public constructor(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.navigation.ui.maps.building.BuildingProcessor);
                public queryBuildingOnWaypoint(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.building.model.BuildingError, com.mapbox.navigation.ui.maps.building.model.BuildingValue>>): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module building {
            export module model {
              export class BuildingError {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.model.BuildingError>;
                public getErrorMessage(): string;
                public constructor(param0: string);
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
    export module navigation {
      export module ui {
        export module maps {
          export module building {
            export module model {
              export class BuildingValue {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.model.BuildingValue>;
                public getBuildings(): java.util.List<com.mapbox.maps.QueriedFeature>;
                public constructor(param0: java.util.List<com.mapbox.maps.QueriedFeature>);
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
    export module navigation {
      export module ui {
        export module maps {
          export module building {
            export module model {
              export class MapboxBuildingHighlightOptions {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions>;
                public getFillExtrusionOpacity(): number;
                public toString(): string;
                public getFillExtrusionColor(): number;
                public equals(param0: any): boolean;
                public hashCode(): number;
                public toBuilder(): com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions.Builder;
              }
              export module MapboxBuildingHighlightOptions {
                export class Builder {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions.Builder>;
                  public fillExtrusionOpacity(param0: number): com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions.Builder;
                  public constructor();
                  public build(): com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions;
                  public fillExtrusionColor(param0: number): com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions.Builder;
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
    export module navigation {
      export module ui {
        export module maps {
          export module building {
            export module view {
              export class MapboxBuildingView {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.view.MapboxBuildingView>;
                public highlightBuilding(param0: com.mapbox.maps.Style, param1: java.util.List<com.mapbox.maps.QueriedFeature>, param2: com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions): void;
                public removeBuildingHighlight(param0: com.mapbox.maps.Style): void;
                public highlightBuilding(param0: com.mapbox.maps.Style, param1: java.util.List<com.mapbox.maps.QueriedFeature>): void;
                public clear(param0: com.mapbox.maps.Style): void;
                public removeBuildingHighlight(param0: com.mapbox.maps.Style, param1: com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions): void;
                public constructor();
              }
              export module MapboxBuildingView {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.building.view.MapboxBuildingView.Companion>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export class NavigationCamera {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.NavigationCamera>;
              public static NAVIGATION_CAMERA_OWNER: string;
              public getDebugger(): com.mapbox.navigation.ui.maps.camera.data.debugger.MapboxNavigationViewportDataSourceDebugger;
              public requestNavigationCameraToOverview(param0: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): void;
              public requestNavigationCameraToOverview(param0: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions, param2: com.mapbox.navigation.ui.maps.camera.transition.TransitionEndListener): void;
              public requestNavigationCameraToOverview(): void;
              public registerNavigationCameraStateChangeObserver(param0: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraStateChangedObserver): void;
              public requestNavigationCameraToFollowing(param0: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): void;
              public requestNavigationCameraToOverview(param0: any, param1: any): void;
              public getState(): com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState;
              public requestNavigationCameraToFollowing(param0: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions, param2: com.mapbox.navigation.ui.maps.camera.transition.TransitionEndListener): void;
              public setDebugger(param0: com.mapbox.navigation.ui.maps.camera.data.debugger.MapboxNavigationViewportDataSourceDebugger): void;
              public constructor(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.maps.plugin.animation.CameraAnimationsPlugin, param2: com.mapbox.navigation.ui.maps.camera.data.ViewportDataSource, param3: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraStateTransition);
              public requestNavigationCameraToFollowing(): void;
              public requestNavigationCameraToOverview(param0: any, param1: any, param2: com.mapbox.navigation.ui.maps.camera.transition.TransitionEndListener): void;
              public requestNavigationCameraToFollowing(param0: any, param1: any, param2: com.mapbox.navigation.ui.maps.camera.transition.TransitionEndListener): void;
              public requestNavigationCameraToIdle(): void;
              public unregisterNavigationCameraStateChangeObserver(param0: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraStateChangedObserver): void;
              public resetFrame(): void;
              public requestNavigationCameraToOverview(param0: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): void;
              public requestNavigationCameraToFollowing(param0: any, param1: any): void;
              public requestNavigationCameraToFollowing(param0: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): void;
            }
            export module NavigationCamera {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.NavigationCamera.Companion>;
                public getDEFAULT_FRAME_TRANSITION_OPT$libnavui_maps_release(): com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions;
                public getDEFAULT_STATE_TRANSITION_OPT$libnavui_maps_release(): com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.NavigationCamera.WhenMappings>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export class FollowingCameraFramingStrategy {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.FollowingCameraFramingStrategy>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.camera.data.FollowingCameraFramingStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getPointsToFrameOnCurrentStep(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions, param2: java.util.List<any>): java.util.List<com.mapbox.geojson.Point>; getPointsToFrameAfterCurrentManeuver(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions, param2: java.util.List<any>): java.util.List<com.mapbox.geojson.Point>; <clinit>(): void });
                public constructor();
                public getPointsToFrameOnCurrentStep(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions, param2: java.util.List<any>): java.util.List<com.mapbox.geojson.Point>;
                public getPointsToFrameAfterCurrentManeuver(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions, param2: java.util.List<any>): java.util.List<com.mapbox.geojson.Point>;
              }
              export module FollowingCameraFramingStrategy {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.FollowingCameraFramingStrategy.Companion>;
                  public getDefault(): com.mapbox.navigation.ui.maps.camera.data.FollowingCameraFramingStrategy;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export class FollowingFrameOptions {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions>;
                public getMinZoom(): number;
                public setPitchUpdatesAllowed(param0: boolean): void;
                public setZoomUpdatesAllowed(param0: boolean): void;
                public getMaximizeViewableGeometryWhenPitchZero(): boolean;
                public setCenterUpdatesAllowed(param0: boolean): void;
                public setMinZoom(param0: number): void;
                public getIntersectionDensityCalculation(): com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.IntersectionDensityCalculation;
                public getBearingSmoothing(): com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.BearingSmoothing;
                public getZoomUpdatesAllowed(): boolean;
                public getMaxZoom(): number;
                public setFramingStrategy(param0: com.mapbox.navigation.ui.maps.camera.data.FollowingCameraFramingStrategy): void;
                public setFocalPoint(param0: com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.FocalPoint): void;
                public setBearingUpdatesAllowed(param0: boolean): void;
                public getPaddingUpdatesAllowed(): boolean;
                public setMaximizeViewableGeometryWhenPitchZero(param0: boolean): void;
                public getPitchNearManeuvers(): com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.PitchNearManeuvers;
                public constructor();
                public getCenterUpdatesAllowed(): boolean;
                public getFocalPoint(): com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.FocalPoint;
                public getFramingStrategy(): com.mapbox.navigation.ui.maps.camera.data.FollowingCameraFramingStrategy;
                public getDefaultPitch(): number;
                public getFrameGeometryAfterManeuver(): com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.FrameGeometryAfterManeuver;
                public setDefaultPitch(param0: number): void;
                public getPitchUpdatesAllowed(): boolean;
                public setPaddingUpdatesAllowed(param0: boolean): void;
                public setMaxZoom(param0: number): void;
                public getBearingUpdatesAllowed(): boolean;
              }
              export module FollowingFrameOptions {
                export class BearingSmoothing {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.BearingSmoothing>;
                  public constructor();
                  public getMaxBearingAngleDiff(): number;
                  public setMaxBearingAngleDiff(param0: number): void;
                  public setEnabled(param0: boolean): void;
                  public getEnabled(): boolean;
                }
                export class FocalPoint {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.FocalPoint>;
                  public hashCode(): number;
                  public getY(): number;
                  public component1(): number;
                  public component2(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getX(): number;
                  public copy(param0: number, param1: number): com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.FocalPoint;
                  public constructor(param0: number, param1: number);
                }
                export class FrameGeometryAfterManeuver {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.FrameGeometryAfterManeuver>;
                  public getDistanceToFrameAfterManeuver(): number;
                  public constructor();
                  public setDistanceToFrameAfterManeuver(param0: number): void;
                  public setEnabled(param0: boolean): void;
                  public setDistanceToCoalesceCompoundManeuvers(param0: number): void;
                  public getEnabled(): boolean;
                  public getDistanceToCoalesceCompoundManeuvers(): number;
                }
                export class IntersectionDensityCalculation {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.IntersectionDensityCalculation>;
                  public constructor();
                  public setAverageDistanceMultiplier(param0: number): void;
                  public getAverageDistanceMultiplier(): number;
                  public setEnabled(param0: boolean): void;
                  public setMinimumDistanceBetweenIntersections(param0: number): void;
                  public getMinimumDistanceBetweenIntersections(): number;
                  public getEnabled(): boolean;
                }
                export class PitchNearManeuvers {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.PitchNearManeuvers>;
                  public setExcludedManeuvers(param0: java.util.List<string>): void;
                  public constructor();
                  public setTriggerDistanceFromManeuver(param0: number): void;
                  public getExcludedManeuvers(): java.util.List<string>;
                  public getTriggerDistanceFromManeuver(): number;
                  public setEnabled(param0: boolean): void;
                  public getEnabled(): boolean;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export class MapboxFollowingCameraFramingStrategy extends com.mapbox.navigation.ui.maps.camera.data.FollowingCameraFramingStrategy {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.MapboxFollowingCameraFramingStrategy>;
                public static INSTANCE: com.mapbox.navigation.ui.maps.camera.data.MapboxFollowingCameraFramingStrategy;
                public getPointsToFrameOnCurrentStep(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions, param2: java.util.List<any>): java.util.List<com.mapbox.geojson.Point>;
                public getPointsToFrameAfterCurrentManeuver(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions, param2: java.util.List<any>): java.util.List<com.mapbox.geojson.Point>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export class MapboxNavigationViewportDataSource extends com.mapbox.navigation.ui.maps.camera.data.ViewportDataSource {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.MapboxNavigationViewportDataSource>;
                public static ZERO_PITCH: number;
                public static BEARING_NORTH: number;
                public getOverviewPadding(): com.mapbox.maps.EdgeInsets;
                public followingPitchPropertyOverride(param0: java.lang.Double): void;
                public overviewZoomPropertyOverride(param0: java.lang.Double): void;
                public getDebugger(): com.mapbox.navigation.ui.maps.camera.data.debugger.MapboxNavigationViewportDataSourceDebugger;
                public setFollowingPadding(param0: com.mapbox.maps.EdgeInsets): void;
                public setOverviewPadding(param0: com.mapbox.maps.EdgeInsets): void;
                public clearRouteData(): void;
                public setDebugger(param0: com.mapbox.navigation.ui.maps.camera.data.debugger.MapboxNavigationViewportDataSourceDebugger): void;
                public overviewPitchPropertyOverride(param0: java.lang.Double): void;
                public overviewCenterPropertyOverride(param0: com.mapbox.geojson.Point): void;
                public getViewportData(): com.mapbox.navigation.ui.maps.camera.data.ViewportData;
                public overviewBearingPropertyOverride(param0: java.lang.Double): void;
                public constructor(param0: com.mapbox.maps.MapboxMap);
                public onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
                public getFollowingPadding(): com.mapbox.maps.EdgeInsets;
                /** @deprecated */
                public onRouteChanged(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): void;
                public followingBearingPropertyOverride(param0: java.lang.Double): void;
                public followingZoomPropertyOverride(param0: java.lang.Double): void;
                public additionalPointsToFrameForFollowing(param0: java.util.List<com.mapbox.geojson.Point>): void;
                public followingCenterPropertyOverride(param0: com.mapbox.geojson.Point): void;
                public evaluate(): void;
                public onLocationChanged(param0: globalAndroid.location.Location): void;
                public clearOverviewOverrides(): void;
                public registerUpdateObserver(param0: com.mapbox.navigation.ui.maps.camera.data.ViewportDataSourceUpdateObserver): void;
                public onRouteChanged(param0: com.mapbox.navigation.base.route.NavigationRoute): void;
                public clearFollowingOverrides(): void;
                public additionalPointsToFrameForOverview(param0: java.util.List<com.mapbox.geojson.Point>): void;
                public getOptions(): com.mapbox.navigation.ui.maps.camera.data.MapboxNavigationViewportDataSourceOptions;
                public unregisterUpdateObserver(param0: com.mapbox.navigation.ui.maps.camera.data.ViewportDataSourceUpdateObserver): void;
              }
              export module MapboxNavigationViewportDataSource {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.MapboxNavigationViewportDataSource.Companion>;
                  public getEMPTY_EDGE_INSETS$libnavui_maps_release(): com.mapbox.maps.EdgeInsets;
                  public getNULL_ISLAND_POINT$libnavui_maps_release(): com.mapbox.geojson.Point;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export class MapboxNavigationViewportDataSourceOptions {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.MapboxNavigationViewportDataSourceOptions>;
                public setFollowingFrameOptions(param0: com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions): void;
                public setOverviewFrameOptions(param0: com.mapbox.navigation.ui.maps.camera.data.OverviewFrameOptions): void;
                public getFollowingFrameOptions(): com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions;
                public getOverviewFrameOptions(): com.mapbox.navigation.ui.maps.camera.data.OverviewFrameOptions;
                public constructor();
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export class OverviewFrameOptions {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.OverviewFrameOptions>;
                public setPitchUpdatesAllowed(param0: boolean): void;
                public setBearingUpdatesAllowed(param0: boolean): void;
                public getGeometrySimplification(): com.mapbox.navigation.ui.maps.camera.data.OverviewFrameOptions.GeometrySimplification;
                public setZoomUpdatesAllowed(param0: boolean): void;
                public getPaddingUpdatesAllowed(): boolean;
                public constructor();
                public getCenterUpdatesAllowed(): boolean;
                public setCenterUpdatesAllowed(param0: boolean): void;
                public getPitchUpdatesAllowed(): boolean;
                public getZoomUpdatesAllowed(): boolean;
                public getMaxZoom(): number;
                public setPaddingUpdatesAllowed(param0: boolean): void;
                public setMaxZoom(param0: number): void;
                public getBearingUpdatesAllowed(): boolean;
              }
              export module OverviewFrameOptions {
                export class GeometrySimplification {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.OverviewFrameOptions.GeometrySimplification>;
                  public constructor();
                  public setSimplificationFactor(param0: number): void;
                  public setEnabled(param0: boolean): void;
                  public getSimplificationFactor(): number;
                  public getEnabled(): boolean;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export class ViewportData {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.ViewportData>;
                public toString(): string;
                public component1(): com.mapbox.maps.CameraOptions;
                public constructor(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.maps.CameraOptions);
                public equals(param0: any): boolean;
                public getCameraForFollowing(): com.mapbox.maps.CameraOptions;
                public getCameraForOverview(): com.mapbox.maps.CameraOptions;
                public copy(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.maps.CameraOptions): com.mapbox.navigation.ui.maps.camera.data.ViewportData;
                public hashCode(): number;
                public component2(): com.mapbox.maps.CameraOptions;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export class ViewportDataSource {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.ViewportDataSource>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.camera.data.ViewportDataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getViewportData(): com.mapbox.navigation.ui.maps.camera.data.ViewportData; registerUpdateObserver(param0: com.mapbox.navigation.ui.maps.camera.data.ViewportDataSourceUpdateObserver): void; unregisterUpdateObserver(param0: com.mapbox.navigation.ui.maps.camera.data.ViewportDataSourceUpdateObserver): void });
                public constructor();
                public getViewportData(): com.mapbox.navigation.ui.maps.camera.data.ViewportData;
                public registerUpdateObserver(param0: com.mapbox.navigation.ui.maps.camera.data.ViewportDataSourceUpdateObserver): void;
                public unregisterUpdateObserver(param0: com.mapbox.navigation.ui.maps.camera.data.ViewportDataSourceUpdateObserver): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export class ViewportDataSourceProcessor {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.ViewportDataSourceProcessor>;
                public static INSTANCE: com.mapbox.navigation.ui.maps.camera.data.ViewportDataSourceProcessor;
                public processRouteIntersections(param0: boolean, param1: number, param2: com.mapbox.api.directions.v5.models.DirectionsRoute, param3: java.util.List<any>): java.util.List<java.util.List<java.lang.Double>>;
                public getMapAnchoredPaddingFromUserPadding(param0: com.mapbox.maps.Size, param1: com.mapbox.maps.EdgeInsets, param2: com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions.FocalPoint): com.mapbox.maps.EdgeInsets;
                public getScreenBoxForFraming(param0: com.mapbox.maps.Size, param1: com.mapbox.maps.EdgeInsets): com.mapbox.maps.ScreenBox;
                public processRoutePoints(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>;
                public getSmootherBearingForMap(param0: boolean, param1: number, param2: number, param3: number, param4: java.util.List<com.mapbox.geojson.Point>): number;
                public processRouteForPostManeuverFramingGeometry(param0: boolean, param1: number, param2: number, param3: com.mapbox.api.directions.v5.models.DirectionsRoute, param4: java.util.List<any>): java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>;
                public getPitchFallbackFromRouteProgress(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.maps.camera.data.FollowingFrameOptions): number;
                public slicePointsAtAngle(param0: java.util.List<com.mapbox.geojson.Point>, param1: number): java.util.List<com.mapbox.geojson.Point>;
                public getRemainingPointsOnRoute(param0: java.util.List<any>, param1: java.util.List<com.mapbox.geojson.Point>, param2: com.mapbox.navigation.base.trip.model.RouteLegProgress, param3: com.mapbox.navigation.base.trip.model.RouteStepProgress): java.util.List<com.mapbox.geojson.Point>;
                public simplifyCompleteRoutePoints(param0: boolean, param1: number, param2: java.util.List<any>): java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export class ViewportDataSourceUpdateObserver {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.ViewportDataSourceUpdateObserver>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.camera.data.ViewportDataSourceUpdateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { viewportDataSourceUpdated(param0: com.mapbox.navigation.ui.maps.camera.data.ViewportData): void });
                public constructor();
                public viewportDataSourceUpdated(param0: com.mapbox.navigation.ui.maps.camera.data.ViewportData): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module data {
              export abstract class ViewportProperty<T> extends java.lang.Object {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.ViewportProperty<any>>;
                public setOverride(param0: T): void;
                public get(): T;
                public getOverride(): T;
                public getFallback(): T;
                public setFallback(param0: T): void;
              }
              export module ViewportProperty {
                export class BearingProperty extends com.mapbox.navigation.ui.maps.camera.data.ViewportProperty<java.lang.Double> {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.ViewportProperty.BearingProperty>;
                  public constructor(param0: java.lang.Double, param1: number);
                }
                export class CenterProperty extends com.mapbox.navigation.ui.maps.camera.data.ViewportProperty<com.mapbox.geojson.Point> {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.ViewportProperty.CenterProperty>;
                  public constructor(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point);
                }
                export class PitchProperty extends com.mapbox.navigation.ui.maps.camera.data.ViewportProperty<java.lang.Double> {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.ViewportProperty.PitchProperty>;
                  public constructor(param0: java.lang.Double, param1: number);
                }
                export class ZoomProperty extends com.mapbox.navigation.ui.maps.camera.data.ViewportProperty<java.lang.Double> {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.data.ViewportProperty.ZoomProperty>;
                  public constructor(param0: java.lang.Double, param1: number);
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module lifecycle {
              export class LocationGesturesManager {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.lifecycle.LocationGesturesManager>;
                public constructor(param0: globalAndroid.content.Context, param1: any);
                public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module lifecycle {
              export class NavigationBasicGesturesHandler {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationBasicGesturesHandler>;
                public onAnimatorInterrupting(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string, param3: globalAndroid.animation.ValueAnimator, param4: string): void;
                public onAnimatorCancelling(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void;
                public onAnimatorEnding(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void;
                public constructor(param0: com.mapbox.navigation.ui.maps.camera.NavigationCamera);
                public onAnimatorStarting(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module lifecycle {
              export class NavigationCameraLifecycleProvider {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationCameraLifecycleProvider>;
                public static INSTANCE: com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationCameraLifecycleProvider;
                public getCustomGesturesManager(param0: globalAndroid.content.Context, param1: any): com.mapbox.android.gestures.AndroidGesturesManager;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module lifecycle {
              export class NavigationScaleGestureActionListener {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureActionListener>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureActionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onNavigationScaleGestureAction(): void });
                public constructor();
                public onNavigationScaleGestureAction(): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module lifecycle {
              export class NavigationScaleGestureHandler {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureHandler>;
                public getInitialGesturesManager(): com.mapbox.android.gestures.AndroidGesturesManager;
                public onAnimatorInterrupting(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string, param3: globalAndroid.animation.ValueAnimator, param4: string): void;
                public isInitialized(): boolean;
                public getCustomGesturesManager(): com.mapbox.android.gestures.AndroidGesturesManager;
                public onAnimatorCancelling(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void;
                public cleanup(): void;
                public onAnimatorEnding(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void;
                public initialize(): void;
                public onAnimatorStarting(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void;
                public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.navigation.ui.maps.camera.NavigationCamera, param2: com.mapbox.maps.MapboxMap, param3: com.mapbox.maps.plugin.gestures.GesturesPlugin, param4: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin, param5: com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureActionListener, param6: com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureHandlerOptions);
              }
              export module NavigationScaleGestureHandler {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureHandler.WhenMappings>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module lifecycle {
              export class NavigationScaleGestureHandlerOptions {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureHandlerOptions>;
                public toBuilder(): com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureHandlerOptions.Builder;
                public toString(): string;
                public getFollowingInitialMoveThreshold(): number;
                public equals(param0: any): boolean;
                public getFollowingMultiFingerProtectedMoveArea(): globalAndroid.graphics.RectF;
                public hashCode(): number;
                public getFollowingMultiFingerMoveThreshold(): number;
              }
              export module NavigationScaleGestureHandlerOptions {
                export class Builder {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureHandlerOptions.Builder>;
                  public followingMultiFingerProtectedMoveArea(param0: globalAndroid.graphics.RectF): com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureHandlerOptions.Builder;
                  public constructor(param0: globalAndroid.content.Context);
                  public followingMultiFingerMoveThreshold(param0: number): com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureHandlerOptions.Builder;
                  public followingInitialMoveThreshold(param0: number): com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureHandlerOptions.Builder;
                  public build(): com.mapbox.navigation.ui.maps.camera.lifecycle.NavigationScaleGestureHandlerOptions;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module state {
              export class NavigationCameraState {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState>;
                public static IDLE: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState;
                public static TRANSITION_TO_FOLLOWING: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState;
                public static FOLLOWING: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState;
                public static TRANSITION_TO_OVERVIEW: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState;
                public static OVERVIEW: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState;
                public static values(): androidNative.Array<com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState>;
                public static valueOf(param0: string): com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module state {
              export class NavigationCameraStateChangedObserver {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.state.NavigationCameraStateChangedObserver>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.camera.state.NavigationCameraStateChangedObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onNavigationCameraStateChanged(param0: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState): void });
                public constructor();
                public onNavigationCameraStateChanged(param0: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module transition {
              export class MapboxNavigationCameraStateTransition extends com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraStateTransition {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.transition.MapboxNavigationCameraStateTransition>;
                public transitionToFollowing(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                public updateFrameForOverview(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                public constructor(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.maps.plugin.animation.CameraAnimationsPlugin, param2: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransition);
                public updateFrameForFollowing(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                public transitionToOverview(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module transition {
              export class MapboxNavigationCameraTransition extends com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransition {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.transition.MapboxNavigationCameraTransition>;
                public transitionFromHighZoomToLowZoom(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                public constructor(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.maps.plugin.animation.CameraAnimationsPlugin);
                public transitionFromLowZoomToHighZoom(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                public transitionLinear(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module transition {
              export class NavigationCameraStateTransition {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraStateTransition>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraStateTransition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  transitionToFollowing(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                  transitionToOverview(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                  updateFrameForFollowing(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                  updateFrameForOverview(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                });
                public constructor();
                public transitionToFollowing(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                public updateFrameForOverview(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                public updateFrameForFollowing(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                public transitionToOverview(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module transition {
              export class NavigationCameraTransition {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransition>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { transitionFromLowZoomToHighZoom(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet; transitionFromHighZoomToLowZoom(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet; transitionLinear(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet });
                public constructor();
                public transitionFromHighZoomToLowZoom(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                public transitionFromLowZoomToHighZoom(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
                public transitionLinear(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions): globalAndroid.animation.AnimatorSet;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module transition {
              export class NavigationCameraTransitionOptions {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions>;
                public toString(): string;
                public getMaxDuration(): number;
                public equals(param0: any): boolean;
                public toBuilder(): com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions.Builder;
                public hashCode(): number;
              }
              export module NavigationCameraTransitionOptions {
                export class Builder {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions.Builder>;
                  public constructor();
                  public build(): com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions;
                  public maxDuration(param0: number): com.mapbox.navigation.ui.maps.camera.transition.NavigationCameraTransitionOptions.Builder;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module transition {
              export class TransitionEndListener {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.transition.TransitionEndListener>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.camera.transition.TransitionEndListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onTransitionEnd(param0: boolean): void });
                public constructor();
                public onTransitionEnd(param0: boolean): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module view {
              export class MapboxRecenterButton {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.view.MapboxRecenterButton>;
                public updateStyle(param0: number): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public showTextAndExtend(param0: number): void;
                public constructor(param0: globalAndroid.content.Context);
                public showTextAndExtend(param0: number, param1: string): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
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
    export module navigation {
      export module ui {
        export module maps {
          export module camera {
            export module view {
              export class MapboxRouteOverviewButton {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.camera.view.MapboxRouteOverviewButton>;
                public updateStyle(param0: number): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public showTextAndExtend(param0: number): void;
                public constructor(param0: globalAndroid.content.Context);
                public showTextAndExtend(param0: number, param1: string): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
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
    export module navigation {
      export module ui {
        export module maps {
          export module databinding {
            export class MapboxCameraModeButtonLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.databinding.MapboxCameraModeButtonLayoutBinding>;
              public buttonText: androidx.appcompat.widget.AppCompatTextView;
              public container: androidx.constraintlayout.widget.ConstraintLayout;
              public iconImage: androidx.appcompat.widget.AppCompatImageView;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.maps.databinding.MapboxCameraModeButtonLayoutBinding;
              public getRoot(): globalAndroid.view.View;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.maps.databinding.MapboxCameraModeButtonLayoutBinding;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export module databinding {
            export class MapboxRoadNameLabelLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.databinding.MapboxRoadNameLabelLayoutBinding>;
              public roadNameLabel: androidx.appcompat.widget.AppCompatTextView;
              public roadNameShieldIcon: androidx.appcompat.widget.AppCompatImageView;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.maps.databinding.MapboxRoadNameLabelLayoutBinding;
              public getRoot(): globalAndroid.view.View;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.maps.databinding.MapboxRoadNameLabelLayoutBinding;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module junction {
              export abstract class JunctionAction {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction>;
              }
              export module JunctionAction {
                export class CheckJunctionAvailability extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction.CheckJunctionAvailability>;
                  public hashCode(): number;
                  public constructor(param0: com.mapbox.api.directions.v5.models.BannerInstructions);
                  public equals(param0: any): boolean;
                  public getInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
                  public toString(): string;
                  public component1(): com.mapbox.api.directions.v5.models.BannerInstructions;
                  public copy(param0: com.mapbox.api.directions.v5.models.BannerInstructions): com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction.CheckJunctionAvailability;
                }
                export class ParseRasterToBitmap extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction.ParseRasterToBitmap>;
                  public hashCode(): number;
                  public getData(): androidNative.Array<number>;
                  public equals(param0: any): boolean;
                  public component1(): androidNative.Array<number>;
                  public toString(): string;
                  public constructor(param0: androidNative.Array<number>);
                  public copy(param0: androidNative.Array<number>): com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction.ParseRasterToBitmap;
                }
                export class PrepareJunctionRequest extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction.PrepareJunctionRequest>;
                  public constructor(param0: string);
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getJunctionUrl(): string;
                  public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction.PrepareJunctionRequest;
                  public component1(): string;
                }
                export class ProcessJunctionResponse extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction.ProcessJunctionResponse>;
                  public getResponse(): com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>;
                  public component1(): com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>;
                  public hashCode(): number;
                  public copy(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction.ProcessJunctionResponse;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>);
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module junction {
              export class JunctionProcessor {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionProcessor>;
                public static INSTANCE: com.mapbox.navigation.ui.maps.guidance.junction.JunctionProcessor;
                public process(param0: com.mapbox.navigation.ui.maps.guidance.junction.JunctionAction): com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult;
              }
              export module JunctionProcessor {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionProcessor.WhenMappings>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module junction {
              export abstract class JunctionResult {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult>;
              }
              export module JunctionResult {
                export class JunctionAvailable extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionAvailable>;
                  public constructor(param0: string);
                  public hashCode(): number;
                  public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionAvailable;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getJunctionUrl(): string;
                  public component1(): string;
                }
                export abstract class JunctionBitmap extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionBitmap>;
                }
                export module JunctionBitmap {
                  export class Failure extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionBitmap {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionBitmap.Failure>;
                    public equals(param0: any): boolean;
                    public constructor(param0: string);
                    public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionBitmap.Failure;
                    public hashCode(): number;
                    public toString(): string;
                    public getMessage(): string;
                    public component1(): string;
                  }
                  export class Success extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionBitmap {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionBitmap.Success>;
                    public constructor(param0: globalAndroid.graphics.Bitmap);
                    public equals(param0: any): boolean;
                    public hashCode(): number;
                    public toString(): string;
                    public component1(): globalAndroid.graphics.Bitmap;
                    public getJunction(): globalAndroid.graphics.Bitmap;
                    public copy(param0: globalAndroid.graphics.Bitmap): com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionBitmap.Success;
                  }
                }
                export abstract class JunctionRaster extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRaster>;
                }
                export module JunctionRaster {
                  export class Empty extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRaster {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRaster.Empty>;
                    public static INSTANCE: com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRaster.Empty;
                  }
                  export class Failure extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRaster {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRaster.Failure>;
                    public equals(param0: any): boolean;
                    public constructor(param0: string);
                    public getError(): string;
                    public hashCode(): number;
                    public toString(): string;
                    public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRaster.Failure;
                    public component1(): string;
                  }
                  export class Success extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRaster {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRaster.Success>;
                    public equals(param0: any): boolean;
                    public getData(): androidNative.Array<number>;
                    public hashCode(): number;
                    public component1(): androidNative.Array<number>;
                    public constructor(param0: androidNative.Array<number>);
                    public copy(param0: androidNative.Array<number>): com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRaster.Success;
                    public toString(): string;
                  }
                }
                export class JunctionRequest extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRequest>;
                  public hashCode(): number;
                  public getRequest(): com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest;
                  public component1(): com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest;
                  public copy(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionRequest;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest);
                }
                export class JunctionUnavailable extends com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionUnavailable>;
                  public static INSTANCE: com.mapbox.navigation.ui.maps.guidance.junction.JunctionResult.JunctionUnavailable;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module junction {
              export module api {
                export class MapboxJunctionApi {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.api.MapboxJunctionApi>;
                  public constructor(param0: string);
                  public generateJunction(param0: com.mapbox.api.directions.v5.models.BannerInstructions, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.guidance.junction.model.JunctionError, com.mapbox.navigation.ui.maps.guidance.junction.model.JunctionValue>>): void;
                  public cancelAll(): void;
                }
                export module MapboxJunctionApi {
                  export class Companion {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.api.MapboxJunctionApi.Companion>;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module junction {
              export module api {
                export class MapboxRasterToBitmapParser {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.api.MapboxRasterToBitmapParser>;
                  public static INSTANCE: com.mapbox.navigation.ui.maps.guidance.junction.api.MapboxRasterToBitmapParser;
                  public static parse(param0: androidNative.Array<number>): com.mapbox.bindgen.Expected<string, globalAndroid.graphics.Bitmap>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module junction {
              export module model {
                export class JunctionError {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.model.JunctionError>;
                  public getThrowable(): java.lang.Throwable;
                  public constructor(param0: string, param1: java.lang.Throwable);
                  public getErrorMessage(): string;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module junction {
              export module model {
                export class JunctionValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.model.JunctionValue>;
                  public getBitmap(): globalAndroid.graphics.Bitmap;
                  public constructor(param0: globalAndroid.graphics.Bitmap);
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module junction {
              export module model {
                export class MapboxJunctionRequest {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.model.MapboxJunctionRequest>;
                  public constructor(param0: number, param1: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest);
                  public hashCode(): number;
                  public getRequest(): com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest;
                  public component1(): number;
                  public component2(): com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest;
                  public getRequestId(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public copy(param0: number, param1: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): com.mapbox.navigation.ui.maps.guidance.junction.model.MapboxJunctionRequest;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module junction {
              export module view {
                export class MapboxJunctionView {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.junction.view.MapboxJunctionView>;
                  public constructor(param0: globalAndroid.content.Context);
                  public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                  public render(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.guidance.junction.model.JunctionError, com.mapbox.navigation.ui.maps.guidance.junction.model.JunctionValue>): void;
                  public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module restarea {
              export abstract class RestAreaAction {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction>;
              }
              export module RestAreaAction {
                export class CheckRestAreaMapAvailability extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction.CheckRestAreaMapAvailability>;
                  public hashCode(): number;
                  public constructor(param0: com.mapbox.api.directions.v5.models.BannerInstructions);
                  public equals(param0: any): boolean;
                  public getInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
                  public toString(): string;
                  public copy(param0: com.mapbox.api.directions.v5.models.BannerInstructions): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction.CheckRestAreaMapAvailability;
                  public component1(): com.mapbox.api.directions.v5.models.BannerInstructions;
                }
                export class CheckUpcomingRestStop extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction.CheckUpcomingRestStop>;
                  public constructor(param0: com.mapbox.navigation.base.trip.model.RouteProgress);
                  public hashCode(): number;
                  public component1(): com.mapbox.navigation.base.trip.model.RouteProgress;
                  public copy(param0: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction.CheckUpcomingRestStop;
                  public equals(param0: any): boolean;
                  public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
                  public toString(): string;
                }
                export class ParseSvgToBitmap extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction.ParseSvgToBitmap>;
                  public hashCode(): number;
                  public copy(param0: androidNative.Array<number>, param1: com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction.ParseSvgToBitmap;
                  public getSvg(): androidNative.Array<number>;
                  public getOptions(): com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions;
                  public equals(param0: any): boolean;
                  public component1(): androidNative.Array<number>;
                  public toString(): string;
                  public constructor(param0: androidNative.Array<number>, param1: com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions);
                  public component2(): com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions;
                }
                export class PrepareRestAreaMapRequest extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction.PrepareRestAreaMapRequest>;
                  public getSapaMapUrl(): string;
                  public constructor(param0: string);
                  public hashCode(): number;
                  public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction.PrepareRestAreaMapRequest;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public component1(): string;
                }
                export class ProcessRestAreaMapResponse extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction.ProcessRestAreaMapResponse>;
                  public getResponse(): com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>;
                  public component1(): com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>;
                  public hashCode(): number;
                  public copy(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction.ProcessRestAreaMapResponse;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>);
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module restarea {
              export class RestAreaProcessor {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaProcessor>;
                public static INSTANCE: com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaProcessor;
                public process(param0: com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaAction): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult;
              }
              export module RestAreaProcessor {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaProcessor.WhenMappings>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module restarea {
              export abstract class RestAreaResult {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult>;
              }
              export module RestAreaResult {
                export abstract class RestAreaBitmap extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaBitmap>;
                }
                export module RestAreaBitmap {
                  export class Failure extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaBitmap {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaBitmap.Failure>;
                    public getThrowable(): java.lang.Throwable;
                    public equals(param0: any): boolean;
                    public getError(): string;
                    public copy(param0: string, param1: java.lang.Throwable): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaBitmap.Failure;
                    public hashCode(): number;
                    public toString(): string;
                    public component2(): java.lang.Throwable;
                    public constructor(param0: string, param1: java.lang.Throwable);
                    public component1(): string;
                  }
                  export class Success extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaBitmap {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaBitmap.Success>;
                    public constructor(param0: globalAndroid.graphics.Bitmap);
                    public equals(param0: any): boolean;
                    public hashCode(): number;
                    public copy(param0: globalAndroid.graphics.Bitmap): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaBitmap.Success;
                    public toString(): string;
                    public component1(): globalAndroid.graphics.Bitmap;
                    public getRestAreaGuideMap(): globalAndroid.graphics.Bitmap;
                  }
                }
                export class RestAreaMapAvailable extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapAvailable>;
                  public getSapaMapUrl(): string;
                  public constructor(param0: string);
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapAvailable;
                  public component1(): string;
                }
                export class RestAreaMapRequest extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapRequest>;
                  public hashCode(): number;
                  public getRequest(): com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest;
                  public copy(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapRequest;
                  public component1(): com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest);
                }
                export abstract class RestAreaMapSvg extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapSvg>;
                }
                export module RestAreaMapSvg {
                  export class Empty extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapSvg {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapSvg.Empty>;
                    public static INSTANCE: com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapSvg.Empty;
                  }
                  export class Failure extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapSvg {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapSvg.Failure>;
                    public equals(param0: any): boolean;
                    public constructor(param0: string);
                    public getError(): string;
                    public hashCode(): number;
                    public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapSvg.Failure;
                    public toString(): string;
                    public component1(): string;
                  }
                  export class Success extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapSvg {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapSvg.Success>;
                    public equals(param0: any): boolean;
                    public getData(): androidNative.Array<number>;
                    public hashCode(): number;
                    public component1(): androidNative.Array<number>;
                    public constructor(param0: androidNative.Array<number>);
                    public toString(): string;
                    public copy(param0: androidNative.Array<number>): com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapSvg.Success;
                  }
                }
                export class RestAreaMapUnavailable extends com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapUnavailable>;
                  public static INSTANCE: com.mapbox.navigation.ui.maps.guidance.restarea.RestAreaResult.RestAreaMapUnavailable;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module restarea {
              export module api {
                export class MapboxRestAreaApi {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.api.MapboxRestAreaApi>;
                  public constructor(param0: string);
                  public getOptions(): com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions;
                  public cancelAll(): void;
                  public getAccessToken(): string;
                  public generateRestAreaGuideMap(param0: com.mapbox.api.directions.v5.models.BannerInstructions, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.guidance.restarea.model.RestAreaGuideMapError, com.mapbox.navigation.ui.maps.guidance.restarea.model.RestAreaGuideMapValue>>): void;
                  public constructor(param0: string, param1: com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions);
                  public generateUpcomingRestAreaGuideMap(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.guidance.restarea.model.RestAreaGuideMapError, com.mapbox.navigation.ui.maps.guidance.restarea.model.RestAreaGuideMapValue>>): void;
                }
                export module MapboxRestAreaApi {
                  export class Companion {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.api.MapboxRestAreaApi.Companion>;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module restarea {
              export module model {
                export class MapboxRestAreaOptions {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions>;
                  public toBuilder(): com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions.Builder;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public getDesiredGuideMapWidth(): number;
                  public toString(): string;
                }
                export module MapboxRestAreaOptions {
                  export class Builder {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions.Builder>;
                    public constructor();
                    public desiredGuideMapWidth(param0: number): com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions.Builder;
                    public build(): com.mapbox.navigation.ui.maps.guidance.restarea.model.MapboxRestAreaOptions;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module restarea {
              export module model {
                export class RestAreaGuideMapError {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.model.RestAreaGuideMapError>;
                  public getThrowable(): java.lang.Throwable;
                  public constructor(param0: string, param1: java.lang.Throwable);
                  public getMessage(): string;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module restarea {
              export module model {
                export class RestAreaGuideMapValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.model.RestAreaGuideMapValue>;
                  public getBitmap(): globalAndroid.graphics.Bitmap;
                  public constructor(param0: globalAndroid.graphics.Bitmap);
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module restarea {
              export module view {
                export class MapboxRestAreaGuideMapView {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.restarea.view.MapboxRestAreaGuideMapView>;
                  public constructor(param0: globalAndroid.content.Context);
                  public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                  public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                  public render(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.guidance.restarea.model.RestAreaGuideMapError, com.mapbox.navigation.ui.maps.guidance.restarea.model.RestAreaGuideMapValue>): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export abstract class SignboardAction {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction>;
              }
              export module SignboardAction {
                export class CheckSignboardAvailability extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction.CheckSignboardAvailability>;
                  public hashCode(): number;
                  public constructor(param0: com.mapbox.api.directions.v5.models.BannerInstructions);
                  public equals(param0: any): boolean;
                  public getInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
                  public toString(): string;
                  public component1(): com.mapbox.api.directions.v5.models.BannerInstructions;
                  public copy(param0: com.mapbox.api.directions.v5.models.BannerInstructions): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction.CheckSignboardAvailability;
                }
                export class ParseSvgToBitmap extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction.ParseSvgToBitmap>;
                  public component2(): com.mapbox.navigation.ui.maps.guidance.signboard.api.SvgToBitmapParser;
                  public hashCode(): number;
                  public constructor(param0: androidNative.Array<number>, param1: com.mapbox.navigation.ui.maps.guidance.signboard.api.SvgToBitmapParser, param2: com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions);
                  public copy(param0: androidNative.Array<number>, param1: com.mapbox.navigation.ui.maps.guidance.signboard.api.SvgToBitmapParser, param2: com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction.ParseSvgToBitmap;
                  public getSvg(): androidNative.Array<number>;
                  public getParser(): com.mapbox.navigation.ui.maps.guidance.signboard.api.SvgToBitmapParser;
                  public equals(param0: any): boolean;
                  public component1(): androidNative.Array<number>;
                  public toString(): string;
                  public getOptions(): com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions;
                  public component3(): com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions;
                }
                export class PrepareSignboardRequest extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction.PrepareSignboardRequest>;
                  public constructor(param0: string);
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getSignboardUrl(): string;
                  public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction.PrepareSignboardRequest;
                  public component1(): string;
                }
                export class ProcessSignboardResponse extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction.ProcessSignboardResponse>;
                  public getResponse(): com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>;
                  public component1(): com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public copy(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction.ProcessSignboardResponse;
                  public constructor(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>);
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export class SignboardProcessor {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardProcessor>;
                public static INSTANCE: com.mapbox.navigation.ui.maps.guidance.signboard.SignboardProcessor;
                public process(param0: com.mapbox.navigation.ui.maps.guidance.signboard.SignboardAction): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult;
              }
              export module SignboardProcessor {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardProcessor.WhenMappings>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export abstract class SignboardResult {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult>;
              }
              export module SignboardResult {
                export class SignboardAvailable extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardAvailable>;
                  public constructor(param0: string);
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getSignboardUrl(): string;
                  public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardAvailable;
                  public component1(): string;
                }
                export abstract class SignboardBitmap extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardBitmap>;
                }
                export module SignboardBitmap {
                  export class Failure extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardBitmap {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardBitmap.Failure>;
                    public equals(param0: any): boolean;
                    public constructor(param0: string);
                    public hashCode(): number;
                    public toString(): string;
                    public getMessage(): string;
                    public component1(): string;
                    public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardBitmap.Failure;
                  }
                  export class Success extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardBitmap {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardBitmap.Success>;
                    public constructor(param0: globalAndroid.graphics.Bitmap);
                    public equals(param0: any): boolean;
                    public hashCode(): number;
                    public toString(): string;
                    public component1(): globalAndroid.graphics.Bitmap;
                    public getSignboard(): globalAndroid.graphics.Bitmap;
                    public copy(param0: globalAndroid.graphics.Bitmap): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardBitmap.Success;
                  }
                }
                export class SignboardRequest extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardRequest>;
                  public hashCode(): number;
                  public getRequest(): com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest;
                  public component1(): com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest;
                  public equals(param0: any): boolean;
                  public copy(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardRequest;
                  public toString(): string;
                  public constructor(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest);
                }
                export abstract class SignboardSvg extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardSvg>;
                }
                export module SignboardSvg {
                  export class Empty extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardSvg {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardSvg.Empty>;
                    public static INSTANCE: com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardSvg.Empty;
                  }
                  export class Failure extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardSvg {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardSvg.Failure>;
                    public equals(param0: any): boolean;
                    public constructor(param0: string);
                    public getError(): string;
                    public hashCode(): number;
                    public toString(): string;
                    public component1(): string;
                    public copy(param0: string): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardSvg.Failure;
                  }
                  export class Success extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardSvg {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardSvg.Success>;
                    public equals(param0: any): boolean;
                    public getData(): androidNative.Array<number>;
                    public copy(param0: androidNative.Array<number>): com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardSvg.Success;
                    public hashCode(): number;
                    public component1(): androidNative.Array<number>;
                    public constructor(param0: androidNative.Array<number>);
                    public toString(): string;
                  }
                }
                export class SignboardUnavailable extends com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardUnavailable>;
                  public static INSTANCE: com.mapbox.navigation.ui.maps.guidance.signboard.SignboardResult.SignboardUnavailable;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export module api {
                export class MapboxExternalFileResolver {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.api.MapboxExternalFileResolver>;
                  public constructor(param0: globalAndroid.content.res.AssetManager);
                  public resolveFont(param0: string, param1: number, param2: string): globalAndroid.graphics.Typeface;
                }
                export module MapboxExternalFileResolver {
                  export class Companion {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.api.MapboxExternalFileResolver.Companion>;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export module api {
                export class MapboxSignboardApi {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.api.MapboxSignboardApi>;
                  public constructor(param0: string, param1: globalAndroid.content.Context, param2: com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions);
                  public generateSignboard(param0: com.mapbox.api.directions.v5.models.BannerInstructions, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.guidance.signboard.model.SignboardError, com.mapbox.navigation.ui.maps.guidance.signboard.model.SignboardValue>>): void;
                  public constructor(param0: string, param1: com.mapbox.navigation.ui.maps.guidance.signboard.api.SvgToBitmapParser);
                  public constructor(param0: string, param1: com.mapbox.navigation.ui.maps.guidance.signboard.api.SvgToBitmapParser, param2: com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions);
                  public cancelAll(): void;
                }
                export module MapboxSignboardApi {
                  export class Companion {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.api.MapboxSignboardApi.Companion>;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export module api {
                export class MapboxSvgToBitmapParser extends com.mapbox.navigation.ui.maps.guidance.signboard.api.SvgToBitmapParser {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.api.MapboxSvgToBitmapParser>;
                  public constructor(param0: com.caverock.androidsvg.SVGExternalFileResolver);
                  public parse(param0: androidNative.Array<number>, param1: com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions): com.mapbox.bindgen.Expected<string, globalAndroid.graphics.Bitmap>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export module api {
                export class SvgToBitmapParser {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.api.SvgToBitmapParser>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.ui.maps.guidance.signboard.api.SvgToBitmapParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { parse(param0: androidNative.Array<number>, param1: com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions): com.mapbox.bindgen.Expected<string, globalAndroid.graphics.Bitmap> });
                  public constructor();
                  public parse(param0: androidNative.Array<number>, param1: com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions): com.mapbox.bindgen.Expected<string, globalAndroid.graphics.Bitmap>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export module model {
                export class MapboxSignboardOptions {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions>;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getCssStyles(): string;
                  public getDesiredSignboardWidth(): number;
                  public toBuilder(): com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions.Builder;
                }
                export module MapboxSignboardOptions {
                  export class Builder {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions.Builder>;
                    public build(): com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions;
                    public constructor();
                    public cssStyles(param0: string): com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions.Builder;
                    public desiredSignboardWidth(param0: number): com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardOptions.Builder;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export module model {
                export class MapboxSignboardRequest {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardRequest>;
                  public getHttpRequest(): com.mapbox.common.HttpRequest;
                  public hashCode(): number;
                  public component1(): number;
                  public getRequestId(): number;
                  public constructor(param0: number, param1: com.mapbox.common.HttpRequest);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public copy(param0: number, param1: com.mapbox.common.HttpRequest): com.mapbox.navigation.ui.maps.guidance.signboard.model.MapboxSignboardRequest;
                  public component2(): com.mapbox.common.HttpRequest;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export module model {
                export class SignboardError {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.model.SignboardError>;
                  public getThrowable(): java.lang.Throwable;
                  public constructor(param0: string, param1: java.lang.Throwable);
                  public getErrorMessage(): string;
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export module model {
                export class SignboardValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.model.SignboardValue>;
                  public getBitmap(): globalAndroid.graphics.Bitmap;
                  public constructor(param0: globalAndroid.graphics.Bitmap);
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
    export module navigation {
      export module ui {
        export module maps {
          export module guidance {
            export module signboard {
              export module view {
                export class MapboxSignboardView {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.guidance.signboard.view.MapboxSignboardView>;
                  public constructor(param0: globalAndroid.content.Context);
                  public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                  public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                  public render(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.guidance.signboard.model.SignboardError, com.mapbox.navigation.ui.maps.guidance.signboard.model.SignboardValue>): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module extensions {
              export class MapboxStyleEx {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.extensions.MapboxStyleEx>;
                public static getUserId(param0: com.mapbox.maps.Style): string;
                public static getStyleId(param0: com.mapbox.maps.Style): string;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module extensions {
              export class NavigationCameraExFlowable {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.extensions.NavigationCameraExFlowable>;
                public static flowNavigationCameraState(param0: com.mapbox.navigation.ui.maps.camera.NavigationCamera): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module location {
              export class ConstantVelocityInterpolator {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.location.ConstantVelocityInterpolator>;
                public constructor(param0: com.mapbox.geojson.Point, param1: androidNative.Array<com.mapbox.geojson.Point>);
                public getInterpolation(param0: number): number;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module location {
              export class PuckAnimationEvaluator extends java.lang.Object {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.location.PuckAnimationEvaluator>;
                public constructor(param0: androidNative.Array<com.mapbox.geojson.Point>);
                public evaluate(param0: number, param1: com.mapbox.geojson.Point, param2: com.mapbox.geojson.Point): com.mapbox.geojson.Point;
                public reset(): void;
                public installIn(param0: globalAndroid.animation.ValueAnimator): void;
                public getInterpolation(param0: number): number;
              }
              export module PuckAnimationEvaluator {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.location.PuckAnimationEvaluator.Companion>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module offline {
              export class OfflineManagerProvider {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.offline.OfflineManagerProvider>;
                public static INSTANCE: com.mapbox.navigation.ui.maps.internal.offline.OfflineManagerProvider;
                public provideOfflineManager(param0: com.mapbox.maps.ResourceOptions): com.mapbox.maps.OfflineManagerInterface;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module route {
              export module line {
                export class MapboxRouteLineUtils {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.route.line.MapboxRouteLineUtils>;
                  public static INSTANCE: com.mapbox.navigation.ui.maps.internal.route.line.MapboxRouteLineUtils;
                  public static VANISH_POINT_STOP_GAP: number;
                  public getGranularDistancesProvider$libnavui_maps_release(): any;
                  public trimRouteDataCacheToSize$libnavui_maps_release(param0: number): void;
                  public getLayerVisibility$libnavui_maps_release(param0: com.mapbox.maps.Style, param1: string): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getMaskingLayerIds(): java.util.Set<string>;
                  public getCongestionColorForInactiveRouteLegs(param0: string, param1: com.mapbox.navigation.ui.maps.route.line.model.InactiveRouteColors): number;
                  public getLayerGroup3SourceLayerIds(): java.util.Set<string>;
                  public getMaskingLayerDynamicData$libnavui_maps_release(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                  public calculateDistance$libnavui_maps_release(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point): number;
                  public calculateRouteLineSegments(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: java.util.List<string>, param2: boolean, param3: com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources): java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionData>;
                  public getRouteLineExpressionDataWithStreetClassOverride$libnavui_maps_release(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteData>, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources, param2: boolean, param3: java.util.List<string>): java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionData>;
                  public getExtractRouteData$libnavui_maps_release(): any;
                  public getExtractRouteDataWithTrafficAndRoadClassDeDuped$libnavui_maps_release(): any;
                  public removeLayers$libnavui_maps_release(param0: com.mapbox.maps.Style): void;
                  public getTrafficLineExpression$libnavui_maps_release(param0: number, param1: number, param2: number, param3: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionData>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public layersAreInitialized$libnavui_maps_release(param0: com.mapbox.maps.Style, param1: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions): boolean;
                  public getTrafficLineExpressionSoftGradient$libnavui_maps_release(param0: number, param1: number, param2: number, param3: number, param4: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionData>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public static getBelowLayerIdToUse(param0: string, param1: com.mapbox.maps.Style): string;
                  public getTrafficLineExpressionProducer$libnavui_maps_release(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources, param2: java.util.List<string>, param3: boolean, param4: number, param5: number, param6: number, param7: boolean, param8: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public getNonMaskingRestrictedLineExpressionProducer$libnavui_maps_release(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteRestrictionData>, param1: number, param2: number, param3: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public getMatchingColors$libnavui_maps_release(param0: com.mapbox.geojson.FeatureCollection, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteStyleDescriptor>, param2: number, param3: number): any;
                  public buildWayPointFeatureCollection$libnavui_maps_release(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.geojson.FeatureCollection;
                  public getFilteredRouteLineExpressionData$libnavui_maps_release(param0: number, param1: java.util.List<any>, param2: any): java.util.List<any>;
                  public getExtractRouteDataCache$libnavui_maps_release(): globalAndroid.util.LruCache<com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKeyRouteTraffic<java.util.List<com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteData>>, java.util.List<com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteData>>;
                  public getRouteLineFeatureDataProvider(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine>): any;
                  // public getLayerGroup1SourceKey-7K0eyGk(): string;
                  public getLayerGroup1SourceKey(): string;
                  public getRouteColorForCongestion(param0: string, param1: boolean, param2: com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources): number;
                  public getSourceLayerMap(): java.util.Map<com.mapbox.navigation.ui.maps.route.line.model.RouteLineSourceKey, java.util.Set<string>>;
                  public getRoadClassArray$libnavui_maps_release(param0: java.util.List<any>): androidNative.Array<string>;
                  public buildScalingExpression$libnavui_maps_release(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineScaleValue>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getRestrictedLineExpressionProducer$libnavui_maps_release(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteRestrictionData>, param1: number, param2: number, param3: boolean, param4: number, param5: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public getRouteLineExpression$libnavui_maps_release(param0: number, param1: number, param2: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getLayerGroup1SourceLayerIds(): java.util.Set<string>;
                  public initializeLayers(param0: com.mapbox.maps.Style, param1: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions): void;
                  public getRouteLineExpression$libnavui_maps_release(param0: number, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionData>, param2: number, param3: number, param4: number, param5: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public featureCollectionHasProperty$libnavui_maps_release(param0: com.mapbox.geojson.FeatureCollection, param1: number, param2: string): boolean;
                  public getTrafficCongestionAnnotationProvider$libnavui_maps_release(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources): any;
                  public getAlternativeRouteDeviationOffsets$libnavui_maps_release(param0: com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata, param1: any): number;
                  public getLayerGroup3SourceKey(): string;
                  public findDistanceToNearestPointOnCurrentLine$libnavui_maps_release(param0: com.mapbox.geojson.Point, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineGranularDistances, param2: number): number;
                  public getLayerIdsForPrimaryRoute$libnavui_maps_release(param0: com.mapbox.maps.Style, param1: java.util.Map<com.mapbox.navigation.ui.maps.route.line.model.RouteLineSourceKey, any>): java.util.Set<string>;
                  public getRouteFeatureDataProvider(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): any;
                  public extractRouteRestrictionData$libnavui_maps_release(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: any): java.util.List<com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteRestrictionData>;
                  public getLayerGroup2SourceLayerIds(): java.util.Set<string>;
                  public resolveNumericToValue$libnavui_maps_release(param0: java.lang.Integer, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources): string;
                  public getLayerGroup2SourceKey(): string;
                  public getRestrictedLineExpression$libnavui_maps_release(param0: number, param1: number, param2: number, param3: number, param4: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteRestrictionData>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getGetRouteLegTrafficNumericCongestionProvider$libnavui_maps_release(): any;
                  public getTopRouteLineRelatedLayerId$libnavui_maps_release(param0: com.mapbox.maps.Style): string;
                  public getTrafficLineExpression$libnavui_maps_release(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionData>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getGetRouteLegTrafficCongestionProvider$libnavui_maps_release(): any;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module route {
              export module line {
                export class RoutesRenderedResultFactory {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.route.line.RoutesRenderedResultFactory>;
                  public static INSTANCE: com.mapbox.navigation.ui.maps.internal.route.line.RoutesRenderedResultFactory;
                  public routesRenderedResult(param0: java.util.Set<string>, param1: java.util.Set<string>, param2: java.util.Set<string>, param3: java.util.Set<string>): com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedResult;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class BuildingHighlightComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.BuildingHighlightComponent>;
                public constructor(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.navigation.ui.maps.building.model.MapboxBuildingHighlightOptions, param2: com.mapbox.navigation.ui.maps.building.api.MapboxBuildingsApi, param3: com.mapbox.navigation.ui.maps.building.view.MapboxBuildingView);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              }
              export module BuildingHighlightComponent {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.BuildingHighlightComponent.Companion>;
                  public getLOG_TAG(): string;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class CameraModeButtonComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.CameraModeButtonComponent>;
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public constructor(param0: com.mapbox.navigation.ui.maps.view.MapboxCameraModeButton, param1: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.maps.internal.ui.CameraModeButtonComponentContract>);
                public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class CameraModeButtonComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.CameraModeButtonComponentContract>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.internal.ui.CameraModeButtonComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getButtonState(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState>; onClick(param0: globalAndroid.view.View): void });
                public constructor();
                public onClick(param0: globalAndroid.view.View): void;
                public getButtonState(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class CompassButtonComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.CompassButtonComponent>;
                public constructor(param0: com.mapbox.navigation.ui.base.view.MapboxExtendableButton, param1: com.mapbox.maps.MapView);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class LocationComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.LocationComponent>;
                public getLocationProvider(): com.mapbox.navigation.ui.maps.location.NavigationLocationProvider;
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public constructor(param0: com.mapbox.navigation.ui.maps.location.NavigationLocationProvider);
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class LocationPuckComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.LocationPuckComponent>;
                public constructor(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin, param1: com.mapbox.maps.plugin.LocationPuck, param2: com.mapbox.navigation.ui.maps.location.NavigationLocationProvider);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class MapboxCameraModeButtonComponentContract implements com.mapbox.navigation.ui.maps.internal.ui.CameraModeButtonComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.MapboxCameraModeButtonComponentContract>;
                public constructor(param0: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.maps.camera.NavigationCamera>);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public onClick(param0: globalAndroid.view.View): void;
                public getButtonState(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState>;
                public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              }
              export module MapboxCameraModeButtonComponentContract {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.MapboxCameraModeButtonComponentContract.WhenMappings>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class MapboxRecenterButtonComponentContract implements com.mapbox.navigation.ui.maps.internal.ui.RecenterButtonComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.MapboxRecenterButtonComponentContract>;
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                public onClick(param0: globalAndroid.view.View): void;
                public constructor(param0: com.mapbox.maps.MapView, param1: com.mapbox.navigation.ui.maps.RecenterButtonConfig);
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class MapboxRoadNameComponentContract implements com.mapbox.navigation.ui.maps.internal.ui.RoadNameComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.MapboxRoadNameComponentContract>;
                public getMapStyle(): kotlinx.coroutines.flow.StateFlow<com.mapbox.maps.Style>;
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public constructor(param0: com.mapbox.maps.MapboxMap);
                public getRoadInfo(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.base.road.model.Road>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class MapboxRouteAlternativeComponentContract extends com.mapbox.navigation.ui.maps.internal.ui.RouteAlternativeContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.MapboxRouteAlternativeComponentContract>;
                public constructor();
                public onAlternativeRoutesUpdated(param0: number, param1: com.mapbox.navigation.core.MapboxNavigation, param2: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class MapboxRouteLineComponentContract extends com.mapbox.navigation.ui.maps.internal.ui.RouteLineComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.MapboxRouteLineComponentContract>;
                public getRouteInPreview(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>;
                public onMapClicked(param0: com.mapbox.geojson.Point): void;
                public constructor();
                public setRoutes(param0: com.mapbox.navigation.core.MapboxNavigation, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: java.lang.Integer): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class NavigationCameraComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.NavigationCameraComponent>;
                public getNavigationCamera(): com.mapbox.navigation.ui.maps.camera.NavigationCamera;
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public constructor(param0: com.mapbox.navigation.ui.maps.camera.data.MapboxNavigationViewportDataSource, param1: com.mapbox.navigation.ui.maps.camera.NavigationCamera);
                public getViewportDataSource(): com.mapbox.navigation.ui.maps.camera.data.MapboxNavigationViewportDataSource;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class NavigationCameraGestureComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.NavigationCameraGestureComponent>;
                public constructor(param0: com.mapbox.maps.MapView, param1: com.mapbox.navigation.ui.maps.camera.NavigationCamera);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class RecenterButtonComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.RecenterButtonComponent>;
                public constructor(param0: com.mapbox.navigation.ui.base.view.MapboxExtendableButton, param1: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.maps.internal.ui.RecenterButtonComponentContract>);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class RecenterButtonComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.RecenterButtonComponentContract>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.internal.ui.RecenterButtonComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>; onClick(param0: globalAndroid.view.View): void });
                public constructor();
                public isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                public onClick(param0: globalAndroid.view.View): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class RoadNameComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.RoadNameComponent>;
                public constructor(param0: com.mapbox.navigation.ui.maps.roadname.view.MapboxRoadNameView, param1: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.maps.internal.ui.RoadNameComponentContract>, param2: com.mapbox.navigation.ui.shield.api.MapboxRouteShieldApi);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class RoadNameComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.RoadNameComponentContract>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.internal.ui.RoadNameComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getRoadInfo(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.base.road.model.Road>; getMapStyle(): kotlinx.coroutines.flow.StateFlow<com.mapbox.maps.Style> });
                public constructor();
                public getMapStyle(): kotlinx.coroutines.flow.StateFlow<com.mapbox.maps.Style>;
                public getRoadInfo(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.base.road.model.Road>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class RouteAlternativeComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.RouteAlternativeComponent>;
                public constructor(param0: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.maps.internal.ui.RouteAlternativeContract>);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public constructor();
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class RouteAlternativeContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.RouteAlternativeContract>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.internal.ui.RouteAlternativeContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onAlternativeRoutesUpdated(param0: number, param1: com.mapbox.navigation.core.MapboxNavigation, param2: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void });
                public constructor();
                public onAlternativeRoutesUpdated(param0: number, param1: com.mapbox.navigation.core.MapboxNavigation, param2: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class RouteArrowComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.RouteArrowComponent>;
                public constructor(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions, param2: com.mapbox.navigation.ui.maps.route.arrow.api.MapboxRouteArrowApi, param3: com.mapbox.navigation.ui.maps.route.arrow.api.MapboxRouteArrowView);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class RouteLineComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.RouteLineComponent>;
                public constructor(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate, param2: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions, param3: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param4: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineView, param5: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.maps.internal.ui.RouteLineComponentContract>);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              }
              export module RouteLineComponent {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.RouteLineComponent.Companion>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module internal {
            export module ui {
              export class RouteLineComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.internal.ui.RouteLineComponentContract>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.internal.ui.RouteLineComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { setRoutes(param0: com.mapbox.navigation.core.MapboxNavigation, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: java.lang.Integer): void; getRouteInPreview(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>; onMapClicked(param0: com.mapbox.geojson.Point): void });
                public constructor();
                public getRouteInPreview(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>;
                public onMapClicked(param0: com.mapbox.geojson.Point): void;
                public setRoutes(param0: com.mapbox.navigation.core.MapboxNavigation, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: java.lang.Integer): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module location {
            export class NavigationLocationProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.location.NavigationLocationProvider>;
              public constructor();
              public getLastLocation(): globalAndroid.location.Location;
              public unRegisterLocationConsumer(param0: com.mapbox.maps.plugin.locationcomponent.LocationConsumer): void;
              public getLastKeyPoints(): java.util.List<globalAndroid.location.Location>;
              public registerLocationConsumer(param0: com.mapbox.maps.plugin.locationcomponent.LocationConsumer): void;
              public changePosition(param0: globalAndroid.location.Location, param1: java.util.List<any>, param2: any, param3: any): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export module puck {
            export class LocationPuckOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.puck.LocationPuckOptions>;
              public getFreeDrivePuck(): com.mapbox.maps.plugin.LocationPuck;
              public getContext(): globalAndroid.content.Context;
              public toBuilder(): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions.Builder;
              public hashCode(): number;
              public getArrivalPuck(): com.mapbox.maps.plugin.LocationPuck;
              public getDestinationPreviewPuck(): com.mapbox.maps.plugin.LocationPuck;
              public getRoutePreviewPuck(): com.mapbox.maps.plugin.LocationPuck;
              public toString(): string;
              public getActiveNavigationPuck(): com.mapbox.maps.plugin.LocationPuck;
              public equals(param0: any): boolean;
              public getIdlePuck(): com.mapbox.maps.plugin.LocationPuck;
            }
            export module LocationPuckOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.puck.LocationPuckOptions.Builder>;
                public destinationPreviewPuck(param0: com.mapbox.maps.plugin.LocationPuck): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions.Builder;
                public defaultPuck(param0: com.mapbox.maps.plugin.LocationPuck): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions.Builder;
                public idlePuck(param0: com.mapbox.maps.plugin.LocationPuck): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions.Builder;
                public freeDrivePuck(param0: com.mapbox.maps.plugin.LocationPuck): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions.Builder;
                public build(): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions;
                public constructor(param0: globalAndroid.content.Context);
                public activeNavigationPuck(param0: com.mapbox.maps.plugin.LocationPuck): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions.Builder;
                public arrivalPuck(param0: com.mapbox.maps.plugin.LocationPuck): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions.Builder;
                public routePreviewPuck(param0: com.mapbox.maps.plugin.LocationPuck): com.mapbox.navigation.ui.maps.puck.LocationPuckOptions.Builder;
              }
              export module Builder {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.puck.LocationPuckOptions.Builder.Companion>;
                  public regularPuck(param0: globalAndroid.content.Context): com.mapbox.maps.plugin.LocationPuck;
                  public navigationPuck(param0: globalAndroid.content.Context): com.mapbox.maps.plugin.LocationPuck;
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
    export module navigation {
      export module ui {
        export module maps {
          export module roadname {
            export module api {
              export class MapboxRoadNameLabelApi {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.roadname.api.MapboxRoadNameLabelApi>;
                /** @deprecated */
                public getRoadNameLabel(param0: com.mapbox.navigation.base.road.model.Road): com.mapbox.navigation.ui.maps.roadname.model.RoadLabel;
                public constructor();
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
    export module navigation {
      export module ui {
        export module maps {
          export module roadname {
            export module model {
              export class RoadLabel {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.roadname.model.RoadLabel>;
                public constructor(param0: string, param1: androidNative.Array<number>, param2: string);
                /** @deprecated */
                public getRoadName(): string;
                /** @deprecated */
                public getShield(): androidNative.Array<number>;
                /** @deprecated */
                public getShieldName(): string;
                /** @deprecated */
                public toString(): string;
                /** @deprecated */
                public hashCode(): number;
                public constructor(param0: string, param1: androidNative.Array<number>);
                public constructor();
                /** @deprecated */
                public equals(param0: any): boolean;
                public constructor(param0: string);
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
    export module navigation {
      export module ui {
        export module maps {
          export module roadname {
            export module view {
              export class MapboxRoadNameLabelView {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.roadname.view.MapboxRoadNameLabelView>;
                /** @deprecated */
                public showRoadName(param0: boolean): void;
                /** @deprecated */
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                /** @deprecated */
                public showShieldIcon(param0: boolean): void;
                /** @deprecated */
                public updateRoadNameTextAppearance(param0: number): void;
                /** @deprecated */
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                /** @deprecated */
                public render(param0: com.mapbox.navigation.ui.maps.roadname.model.RoadLabel): void;
                /** @deprecated */
                public constructor(param0: globalAndroid.content.Context);
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
    export module navigation {
      export module ui {
        export module maps {
          export module roadname {
            export module view {
              export class MapboxRoadNameView {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.roadname.view.MapboxRoadNameView>;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public renderRoadName(param0: com.mapbox.navigation.base.road.model.Road): void;
                public renderRoadNameWith(param0: java.util.List<any>): void;
                public constructor(param0: globalAndroid.content.Context);
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export class RouteLayerConstants {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.RouteLayerConstants>;
              public static INSTANCE: com.mapbox.navigation.ui.maps.route.RouteLayerConstants;
              public static TOP_LEVEL_ROUTE_LINE_LAYER_ID: string;
              public static BOTTOM_LEVEL_ROUTE_LINE_LAYER_ID: string;
              public static ARROW_SHAFT_CASING_LINE_LAYER_ID: string;
              public static ARROW_SHAFT_LINE_LAYER_ID: string;
              public static ARROW_HEAD_CASING_LAYER_ID: string;
              public static ARROW_HEAD_LAYER_ID: string;
              public static WAYPOINT_LAYER_ID: string;
              public static LAYER_GROUP_1_SOURCE_ID: string;
              public static LAYER_GROUP_2_SOURCE_ID: string;
              public static LAYER_GROUP_3_SOURCE_ID: string;
              public static WAYPOINT_SOURCE_ID: string;
              public static TWO_POINTS: number;
              public static THIRTY: number;
              public static ARROW_BEARING: string;
              public static ARROW_SHAFT_SOURCE_ID: string;
              public static ARROW_HEAD_SOURCE_ID: string;
              public static ARROW_HEAD_ICON: string;
              public static ARROW_HEAD_ICON_CASING: string;
              public static MAX_DEGREES: number;
              public static MIN_ARROW_ZOOM: number;
              public static MAX_ARROW_ZOOM: number;
              public static MIN_ZOOM_ARROW_SHAFT_SCALE: number;
              public static MAX_ZOOM_ARROW_SHAFT_SCALE: number;
              public static MIN_ZOOM_ARROW_SHAFT_CASING_SCALE: number;
              public static MAX_ZOOM_ARROW_SHAFT_CASING_SCALE: number;
              public static MIN_ZOOM_ARROW_HEAD_SCALE: number;
              public static MAX_ZOOM_ARROW_HEAD_SCALE: number;
              public static MIN_ZOOM_ARROW_HEAD_CASING_SCALE: number;
              public static MAX_ZOOM_ARROW_HEAD_CASING_SCALE: number;
              public static OPAQUE: number;
              public static ARROW_HIDDEN_ZOOM_LEVEL: number;
              public static TRANSPARENT: number;
              public static WAYPOINT_PROPERTY_KEY: string;
              public static WAYPOINT_ORIGIN_VALUE: string;
              public static WAYPOINT_DESTINATION_VALUE: string;
              public static LOW_CONGESTION_VALUE: string;
              public static MODERATE_CONGESTION_VALUE: string;
              public static HEAVY_CONGESTION_VALUE: string;
              public static SEVERE_CONGESTION_VALUE: string;
              public static UNKNOWN_CONGESTION_VALUE: string;
              public static CLOSURE_CONGESTION_VALUE: string;
              public static RESTRICTED_CONGESTION_VALUE: string;
              public static ORIGIN_MARKER_NAME: string;
              public static DESTINATION_MARKER_NAME: string;
              public static ROUTE_LINE_UPDATE_MAX_DISTANCE_THRESHOLD_IN_METERS: number;
              public static DEFAULT_ROUTE_DESCRIPTOR_PLACEHOLDER: string;
              public static MAX_ELAPSED_SINCE_INDEX_UPDATE_NANO: number;
              public static DEFAULT_ROUTE_SOURCES_TOLERANCE: number;
              public static ROUNDED_LINE_CAP: boolean;
              public static SOFT_GRADIENT_STOP_GAP_METERS: number;
              public static RESTRICTED_ROAD_LINE_OPACITY: number;
              public static RESTRICTED_ROAD_LINE_WIDTH: number;
              public static DEFAULT_VANISHING_POINT_MIN_UPDATE_INTERVAL_NANO: number;
              public static LAYER_GROUP_1_TRAIL_CASING: string;
              public static LAYER_GROUP_1_TRAIL: string;
              public static LAYER_GROUP_1_CASING: string;
              public static LAYER_GROUP_1_MAIN: string;
              public static LAYER_GROUP_1_TRAFFIC: string;
              public static LAYER_GROUP_1_RESTRICTED: string;
              public static LAYER_GROUP_2_TRAIL_CASING: string;
              public static LAYER_GROUP_2_TRAIL: string;
              public static LAYER_GROUP_2_CASING: string;
              public static LAYER_GROUP_2_MAIN: string;
              public static LAYER_GROUP_2_TRAFFIC: string;
              public static LAYER_GROUP_2_RESTRICTED: string;
              public static LAYER_GROUP_3_TRAIL_CASING: string;
              public static LAYER_GROUP_3_TRAIL: string;
              public static LAYER_GROUP_3_CASING: string;
              public static LAYER_GROUP_3_MAIN: string;
              public static LAYER_GROUP_3_TRAFFIC: string;
              public static LAYER_GROUP_3_RESTRICTED: string;
              public static MASKING_LAYER_TRAIL_CASING: string;
              public static MASKING_LAYER_TRAIL: string;
              public static MASKING_LAYER_CASING: string;
              public static MASKING_LAYER_MAIN: string;
              public static MASKING_LAYER_TRAFFIC: string;
              public static MASKING_LAYER_RESTRICTED: string;
              public getIN_ACTIVE_ROUTE_LEG_COLOR$libnavui_maps_release(): number;
              public getMODERATE_CONGESTION_RANGE$libnavui_maps_release(): any;
              public getROUTE_LINE_TRAVELED_COLOR$libnavui_maps_release(): number;
              public getROUTE_SEVERE_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getALTERNATE_ROUTE_UNKNOWN_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getMANEUVER_ARROWHEAD_ICON_DRAWABLE$libnavui_maps_release(): number;
              public getMANEUVER_ARROWHEAD_ICON_CASING_DRAWABLE$libnavui_maps_release(): number;
              public getSEVERE_CONGESTION_RANGE$libnavui_maps_release(): any;
              public getORIGIN_WAYPOINT_ICON$libnavui_maps_release(): number;
              public getALTERNATE_ROUTE_LOW_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getROUTE_UNKNOWN_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getMANEUVER_ARROW_CASING_COLOR$libnavui_maps_release(): number;
              public getALTERNATE_ROUTE_SEVERE_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getROUTE_MODERATE_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getROUTE_HEAVY_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getROUTE_LEG_INACTIVE_MODERATE_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getLOW_CONGESTION_RANGE$libnavui_maps_release(): any;
              public getARROW_HEAD_CASING_OFFSET$libnavui_maps_release(): androidNative.Array<java.lang.Double>;
              public getROUTE_LEG_INACTIVE_LOW_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getMANEUVER_ARROW_COLOR$libnavui_maps_release(): number;
              public getALTERNATE_RESTRICTED_ROAD_COLOR$libnavui_maps_release(): number;
              public getROUTE_LOW_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getDESTINATION_WAYPOINT_ICON$libnavui_maps_release(): number;
              public getROUTE_LINE_TRAVELED_CASING_COLOR$libnavui_maps_release(): number;
              public getRESTRICTED_ROAD_COLOR$libnavui_maps_release(): number;
              public getROUTE_LEG_INACTIVE_UNKNOWN_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getROUTE_LEG_INACTIVE_RESTRICTED_ROAD_COLOR$libnavui_maps_release(): number;
              public getALTERNATE_ROUTE_MODERATE_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getROUTE_LEG_INACTIVE_SEVERE_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getROUTE_CLOSURE_COLOR$libnavui_maps_release(): number;
              public getRESTRICTED_ROAD_DASH_ARRAY$libnavui_maps_release(): java.util.List<java.lang.Double>;
              public getROUTE_DEFAULT_COLOR$libnavui_maps_release(): number;
              public getALTERNATIVE_ROUTE_CLOSURE_COLOR$libnavui_maps_release(): number;
              public getHEAVY_CONGESTION_RANGE$libnavui_maps_release(): any;
              public getROUTE_LEG_INACTIVE_CLOSURE_COLOR$libnavui_maps_release(): number;
              public getARROW_HEAD_OFFSET$libnavui_maps_release(): androidNative.Array<java.lang.Double>;
              public getTRAFFIC_BACKFILL_ROAD_CLASSES$libnavui_maps_release(): java.util.List<string>;
              public getROUTE_LEG_INACTIVE_HEAVY_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getROUTE_CASING_COLOR$libnavui_maps_release(): number;
              public getALTERNATE_ROUTE_HEAVY_TRAFFIC_COLOR$libnavui_maps_release(): number;
              public getALTERNATE_ROUTE_CASING_COLOR$libnavui_maps_release(): number;
              public getALTERNATE_ROUTE_DEFAULT_COLOR$libnavui_maps_release(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export class RouteArrowUtils {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.RouteArrowUtils>;
                public static INSTANCE: com.mapbox.navigation.ui.maps.route.arrow.RouteArrowUtils;
                public layersAreInitialized$libnavui_maps_release(param0: com.mapbox.maps.Style): boolean;
                public removeLayersAndSources$libnavui_maps_release(param0: com.mapbox.maps.Style): void;
                public obtainArrowPointsFrom(param0: com.mapbox.navigation.base.trip.model.RouteProgress): java.util.List<com.mapbox.geojson.Point>;
                public initializeLayers(param0: com.mapbox.maps.Style, param1: com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export module api {
                export class MapboxRouteArrowApi {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.api.MapboxRouteArrowApi>;
                  public constructor();
                  public redraw(): com.mapbox.navigation.ui.maps.route.arrow.model.ArrowAddedValue;
                  public getArrows(): java.util.List<com.mapbox.navigation.ui.maps.route.arrow.model.ManeuverArrow>;
                  public clearArrows(): com.mapbox.navigation.ui.maps.route.arrow.model.ClearArrowsValue;
                  public showManeuverArrow(): com.mapbox.navigation.ui.maps.route.arrow.model.ArrowVisibilityChangeValue;
                  public addUpcomingManeuverArrow(param0: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.arrow.model.InvalidPointError, com.mapbox.navigation.ui.maps.route.arrow.model.UpdateManeuverArrowValue>;
                  public addArrow(param0: com.mapbox.navigation.ui.maps.route.arrow.model.ManeuverArrow): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.arrow.model.InvalidPointError, com.mapbox.navigation.ui.maps.route.arrow.model.ArrowAddedValue>;
                  public removeArrow(param0: com.mapbox.navigation.ui.maps.route.arrow.model.ManeuverArrow): com.mapbox.navigation.ui.maps.route.arrow.model.RemoveArrowValue;
                  public hideManeuverArrow(): com.mapbox.navigation.ui.maps.route.arrow.model.ArrowVisibilityChangeValue;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export module api {
                export class MapboxRouteArrowView {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.api.MapboxRouteArrowView>;
                  public render(param0: com.mapbox.maps.Style, param1: com.mapbox.navigation.ui.maps.route.arrow.model.RemoveArrowValue): void;
                  public render(param0: com.mapbox.maps.Style, param1: com.mapbox.navigation.ui.maps.route.arrow.model.ArrowVisibilityChangeValue): void;
                  public renderManeuverUpdate(param0: com.mapbox.maps.Style, param1: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.arrow.model.InvalidPointError, com.mapbox.navigation.ui.maps.route.arrow.model.UpdateManeuverArrowValue>): void;
                  public render(param0: com.mapbox.maps.Style, param1: com.mapbox.navigation.ui.maps.route.arrow.model.ClearArrowsValue): void;
                  public getVisibility(param0: com.mapbox.maps.Style): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public render(param0: com.mapbox.maps.Style, param1: com.mapbox.navigation.ui.maps.route.arrow.model.ArrowAddedValue): void;
                  public render(param0: com.mapbox.maps.Style, param1: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.arrow.model.InvalidPointError, com.mapbox.navigation.ui.maps.route.arrow.model.ArrowAddedValue>): void;
                  public constructor(param0: com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions);
                }
                export module MapboxRouteArrowView {
                  export class Companion {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.api.MapboxRouteArrowView.Companion>;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export module model {
                export class ArrowAddedValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.model.ArrowAddedValue>;
                  public getArrowHeadFeatureCollection(): com.mapbox.geojson.FeatureCollection;
                  public constructor(param0: com.mapbox.geojson.FeatureCollection, param1: com.mapbox.geojson.FeatureCollection);
                  public getArrowShaftFeatureCollection(): com.mapbox.geojson.FeatureCollection;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export module model {
                export class ArrowVisibilityChangeValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.model.ArrowVisibilityChangeValue>;
                  public constructor(param0: java.util.List<any>);
                  public getLayerVisibilityModifications(): java.util.List<any>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export module model {
                export class ClearArrowsValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.model.ClearArrowsValue>;
                  public getArrowHeadFeatureCollection(): com.mapbox.geojson.FeatureCollection;
                  public constructor(param0: com.mapbox.geojson.FeatureCollection, param1: com.mapbox.geojson.FeatureCollection);
                  public getArrowShaftFeatureCollection(): com.mapbox.geojson.FeatureCollection;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export module model {
                export class InvalidPointError {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.model.InvalidPointError>;
                  public getThrowable(): java.lang.Throwable;
                  public constructor(param0: string, param1: java.lang.Throwable);
                  public getErrorMessage(): string;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export module model {
                export class ManeuverArrow {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.model.ManeuverArrow>;
                  public getPoints(): java.util.List<com.mapbox.geojson.Point>;
                  public constructor(param0: java.util.List<com.mapbox.geojson.Point>);
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export module model {
                export class RemoveArrowValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.model.RemoveArrowValue>;
                  public getArrowHeadFeatureCollection(): com.mapbox.geojson.FeatureCollection;
                  public constructor(param0: com.mapbox.geojson.FeatureCollection, param1: com.mapbox.geojson.FeatureCollection);
                  public getArrowShaftFeatureCollection(): com.mapbox.geojson.FeatureCollection;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export module model {
                export class RouteArrowOptions {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions>;
                  public hashCode(): number;
                  public getArrowShaftCasingScaleExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getTolerance(): number;
                  public getArrowHeadIconCasing(): globalAndroid.graphics.drawable.Drawable;
                  public toBuilder(param0: globalAndroid.content.Context): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                  public getAboveLayerId(): string;
                  public getArrowColor(): number;
                  public getArrowHeadIcon(): globalAndroid.graphics.drawable.Drawable;
                  public getArrowShaftScaleExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getArrowCasingColor(): number;
                  public getArrowHeadCasingScaleExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getArrowHeadScaleExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                }
                export module RouteArrowOptions {
                  export class Builder {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder>;
                    public withTolerance(param0: number): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                    public withAboveLayerId(param0: string): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                    public withArrowHeadIconDrawable(param0: number): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                    public constructor(param0: globalAndroid.content.Context);
                    public build(): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions;
                    public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: number, param5: string, param6: number, param7: com.mapbox.maps.extension.style.expressions.generated.Expression, param8: com.mapbox.maps.extension.style.expressions.generated.Expression, param9: com.mapbox.maps.extension.style.expressions.generated.Expression, param10: com.mapbox.maps.extension.style.expressions.generated.Expression);
                    public withArrowHeadIconCasingDrawable(param0: number): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                    public withArrowShaftCasingScalingExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                    public withArrowShaftScalingExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                    public withArrowheadCasingScalingExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                    public withArrowColor(param0: number): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                    public withArrowCasingColor(param0: number): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                    public withArrowheadScalingExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.navigation.ui.maps.route.arrow.model.RouteArrowOptions.Builder;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module arrow {
              export module model {
                export class UpdateManeuverArrowValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.arrow.model.UpdateManeuverArrowValue>;
                  public constructor(param0: java.util.List<any>, param1: com.mapbox.geojson.Feature, param2: com.mapbox.geojson.Feature);
                  public getArrowShaftFeature(): com.mapbox.geojson.Feature;
                  public getLayerVisibilityModifications(): java.util.List<any>;
                  public getArrowHeadFeature(): com.mapbox.geojson.Feature;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export class MapboxRouteLineApiExtensions {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.MapboxRouteLineApiExtensions>;
                public static INSTANCE: com.mapbox.navigation.ui.maps.route.line.MapboxRouteLineApiExtensions;
                public setNavigationRoutes(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: number, param3: java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>, param4: any): any;
                public clearRouteLine(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: any): any;
                public setNavigationRoutes(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: number, param3: any): any;
                /** @deprecated */
                public setRoutes(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLine>, param2: any): any;
                public findClosestRoute(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: com.mapbox.geojson.Point, param2: com.mapbox.maps.MapboxMap, param3: number, param4: any): any;
                public setNavigationRouteLines(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine>, param2: java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>, param3: any): any;
                public setNavigationRouteLines(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine>, param2: number, param3: any): any;
                public setNavigationRoutes(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: any): any;
                public setAlternativeTrafficColor(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>, param1: number): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>;
                public getRouteDrawData(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: any): any;
                public setPrimaryTrafficColor(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>;
                public setNavigationRoutes(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>, param3: any): any;
                public showRouteWithLegIndexHighlighted(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: number, param2: any): any;
                public setPrimaryTrafficColor(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>, param1: number): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>;
                public setNavigationRouteLines(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine>, param2: number, param3: java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>, param4: any): any;
                public setNavigationRouteLines(param0: com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine>, param2: any): any;
                public setAlternativeTrafficColor(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class DataIdHolder {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.DataIdHolder>;
                  public constructor();
                  public incrementDataId(param0: string): number;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class ExpectedRoutesToRenderData {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.ExpectedRoutesToRenderData>;
                  public getClearedRouteId(param0: string): string;
                  public constructor();
                  public getSourceAndDataIds(): java.util.List<any>;
                  public getAllRenderedRouteIds(): java.util.Set<string>;
                  public getRenderedRouteId(param0: string): string;
                  public getAllClearedRouteIds(): java.util.Set<string>;
                  public addClearedRoute(param0: string, param1: number, param2: string): void;
                  public addRenderedRoute(param0: string, param1: number, param2: string): void;
                  public isEmpty(): boolean;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class MapboxRouteLineApi {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi>;
                  public getPrimaryNavigationRoute(): com.mapbox.navigation.base.route.NavigationRoute;
                  public getRouteLineDynamicDataForMaskingLayers$libnavui_maps_release(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                  public cancel(): void;
                  public getAlternativelyStyleSegmentsNotInLeg$libnavui_maps_release(): any;
                  public setVanishingOffset(param0: number): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteLineUpdateValue>;
                  public setNavigationRouteLines(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine>, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>>): void;
                  public updateVanishingPointState$libnavui_maps_release(param0: com.mapbox.navigation.base.trip.model.RouteProgressState): void;
                  public updateUpcomingRoutePointIndex$libnavui_maps_release(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
                  public getRouteDrawData(param0: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>>): void;
                  public setRoadClasses(param0: java.util.List<string>): void;
                  public setNavigationRouteLines(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine>, param1: java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>, param2: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>>): void;
                  /** @deprecated */
                  public getRoutes(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
                  public setNavigationRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>>): void;
                  public updateTraveledRouteLine(param0: com.mapbox.geojson.Point): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteLineUpdateValue>;
                  public setNavigationRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: number, param2: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>>): void;
                  public updateWithRouteProgress(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteLineUpdateValue>>): void;
                  public setNavigationRouteLines(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine>, param1: number, param2: java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>, param3: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>>): void;
                  public setNavigationRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>, param2: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>>): void;
                  public findClosestRoute(param0: com.mapbox.geojson.Point, param1: com.mapbox.maps.MapboxMap, param2: number, param3: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteNotFound, com.mapbox.navigation.ui.maps.route.line.model.ClosestRouteValue>>): void;
                  public getNavigationRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
                  public getVanishPointOffset(): number;
                  public getActiveLegIndex$libnavui_maps_release(): number;
                  public constructor(param0: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions);
                  public getRouteLineDynamicDataForMaskingLayers$libnavui_maps_release(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionData>, param1: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                  /** @deprecated */
                  public getPrimaryRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
                  /** @deprecated */
                  public setRoutes(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLine>, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>>): void;
                  public clearRouteLine(param0: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteLineClearValue>>): void;
                  public showRouteWithLegIndexHighlighted(param0: number, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteLineUpdateValue>>): void;
                  public setNavigationRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: number, param2: java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>, param3: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>>): void;
                }
                export module MapboxRouteLineApi {
                  export class Companion {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineApi.Companion>;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class MapboxRouteLineView {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineView>;
                  public cancel(): void;
                  /** @deprecated */
                  public setOptions(param0: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions): void;
                  public renderRouteDrawData(param0: com.mapbox.maps.Style, param1: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>, param2: com.mapbox.maps.MapboxMap, param3: com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallback): void;
                  public getTrafficVisibility(param0: com.mapbox.maps.Style): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public hidePrimaryRoute(param0: com.mapbox.maps.Style): void;
                  public renderClearRouteLineValue(param0: com.mapbox.maps.Style, param1: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteLineClearValue>): void;
                  public initializeLayers(param0: com.mapbox.maps.Style): void;
                  public renderRouteDrawData(param0: com.mapbox.maps.Style, param1: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>): void;
                  public showPrimaryRoute(param0: com.mapbox.maps.Style): void;
                  public renderClearRouteLineValue(param0: com.mapbox.maps.Style, param1: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteLineClearValue>, param2: com.mapbox.maps.MapboxMap, param3: com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallback): void;
                  public constructor(param0: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions, param1: com.mapbox.navigation.ui.maps.route.line.api.RoutesExpector, param2: com.mapbox.navigation.ui.maps.route.line.api.DataIdHolder);
                  public showAlternativeRoutes(param0: com.mapbox.maps.Style): void;
                  public showOriginAndDestinationPoints(param0: com.mapbox.maps.Style): void;
                  public getAlternativeRoutesVisibility(param0: com.mapbox.maps.Style): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public hideOriginAndDestinationPoints(param0: com.mapbox.maps.Style): void;
                  public hideTraffic(param0: com.mapbox.maps.Style): void;
                  public constructor(param0: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions);
                  public getPrimaryRouteVisibility(param0: com.mapbox.maps.Style): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public hideAlternativeRoutes(param0: com.mapbox.maps.Style): void;
                  public getOptions(): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions;
                  public showTraffic(param0: com.mapbox.maps.Style): void;
                  public initPrimaryRouteLineLayerGroup$libnavui_maps_release(param0: java.util.Set<string>): void;
                  public renderRouteLineUpdate(param0: com.mapbox.maps.Style, param1: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError, com.mapbox.navigation.ui.maps.route.line.model.RouteLineUpdateValue>): void;
                }
                export module MapboxRouteLineView {
                  export class Companion {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.MapboxRouteLineView.Companion>;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class RouteRenderCallbackHolder {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.RouteRenderCallbackHolder>;
                  public constructor(param0: com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallbackWrapper, param1: java.util.Set<string>, param2: java.util.Set<string>, param3: com.mapbox.navigation.ui.maps.route.line.api.ExpectedRoutesToRenderData, param4: com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener);
                  public getRenderedRouteIdsToNotify(): java.util.Set<string>;
                  public notifyAndCleanUp(): void;
                  public onRouteRendered(param0: string): void;
                  public getCallbackWrapper(): com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallbackWrapper;
                  public getListener(): com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener;
                  public onRouteRenderingCancelled(param0: string): void;
                  public getExpectedRoutes(): com.mapbox.navigation.ui.maps.route.line.api.ExpectedRoutesToRenderData;
                  public hasAllRoutes(): boolean;
                  public getClearedRouteIdsToNotify(): java.util.Set<string>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class RoutesExpector {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.RoutesExpector>;
                  public constructor();
                  public expectRoutes(param0: java.util.Set<string>, param1: java.util.Set<string>, param2: com.mapbox.navigation.ui.maps.route.line.api.ExpectedRoutesToRenderData, param3: com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallbackWrapper): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class RoutesRenderedCallback {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallback>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { onRoutesRendered(param0: com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedResult): void });
                  public constructor();
                  public onRoutesRendered(param0: com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedResult): void;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class RoutesRenderedCallbackWrapper {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallbackWrapper>;
                  public hashCode(): number;
                  public copy(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallback): com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallbackWrapper;
                  public constructor(param0: com.mapbox.maps.MapboxMap, param1: com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallback);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public component1(): com.mapbox.maps.MapboxMap;
                  public getCallback(): com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallback;
                  public getMap(): com.mapbox.maps.MapboxMap;
                  public component2(): com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedCallback;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class RoutesRenderedResult {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.RoutesRenderedResult>;
                  public hashCode(): number;
                  public constructor(param0: java.util.Set<string>, param1: java.util.Set<string>, param2: java.util.Set<string>, param3: java.util.Set<string>);
                  public getSuccessfullyRenderedRouteIds(): java.util.Set<string>;
                  public getSuccessfullyClearedRouteIds(): java.util.Set<string>;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getClearingCancelledRouteIds(): java.util.Set<string>;
                  public getRenderingCancelledRouteIds(): java.util.Set<string>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class SourceIdAndDataId {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.SourceIdAndDataId>;
                  public hashCode(): number;
                  public getSourceId(): string;
                  public isOutdatedBy(param0: com.mapbox.navigation.ui.maps.route.line.api.SourceIdAndDataId): boolean;
                  public component2(): number;
                  public constructor(param0: string, param1: number);
                  public getDataId(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public copy(param0: string, param1: number): com.mapbox.navigation.ui.maps.route.line.api.SourceIdAndDataId;
                  public component1(): string;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module api {
                export class VanishingRouteLine {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.VanishingRouteLine>;
                  public constructor();
                  public getUpcomingRouteGeometrySegmentIndex(): java.lang.Integer;
                  public getVanishPointOffset(): number;
                  public updateVanishingPointState(param0: com.mapbox.navigation.base.trip.model.RouteProgressState): void;
                  public setUpcomingRouteGeometrySegmentIndex(param0: java.lang.Integer): void;
                  public getTraveledRouteLineExpressions$libnavui_maps_release(param0: com.mapbox.geojson.Point, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineGranularDistances): com.mapbox.navigation.ui.maps.route.line.model.VanishingRouteLineExpressions;
                  public setVanishPointOffset(param0: number): void;
                  public getTraveledRouteLineExpressions$libnavui_maps_release(param0: com.mapbox.geojson.Point, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineGranularDistances, param2: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionData>, param3: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteRestrictionData>, param4: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions, param5: number, param6: number, param7: boolean): com.mapbox.navigation.ui.maps.route.line.model.VanishingRouteLineExpressions;
                  public getVanishingPointState(): com.mapbox.navigation.ui.maps.route.line.model.VanishingPointState;
                }
                export module VanishingRouteLine {
                  export class WhenMappings {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.api.VanishingRouteLine.WhenMappings>;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class ClosestRouteValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.ClosestRouteValue>;
                  /** @deprecated */
                  public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
                  public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute);
                  public getNavigationRoute(): com.mapbox.navigation.base.route.NavigationRoute;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export abstract class ExpressionOffsetData {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.ExpressionOffsetData>;
                  public hashCode(): number;
                  public getOffset(): number;
                  public equals(param0: any): boolean;
                  public getLegIndex(): number;
                  public toString(): string;
                  public copyWithNewOffset(param0: number): com.mapbox.navigation.ui.maps.route.line.model.ExpressionOffsetData;
                  public constructor(param0: number, param1: number);
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class ExtractedRouteData {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteData>;
                  public isLegOrigin(): boolean;
                  public component2(): string;
                  public hashCode(): number;
                  public getTrafficCongestionIdentifier(): string;
                  public equals(param0: any): boolean;
                  public getLegIndex(): number;
                  public component4(): number;
                  public toString(): string;
                  public constructor(param0: number, param1: string, param2: string, param3: number, param4: boolean);
                  public getRoadClass(): string;
                  public component3(): string;
                  public copy(param0: number, param1: string, param2: string, param3: number, param4: boolean): com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteData;
                  public component5(): boolean;
                  public component1(): number;
                  public getOffset(): number;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class ExtractedRouteRestrictionData extends com.mapbox.navigation.ui.maps.route.line.model.ExpressionOffsetData {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.ExtractedRouteRestrictionData>;
                  public isInRestrictedSection(): boolean;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: number, param1: boolean, param2: number);
                  public copyWithNewOffset(param0: number): com.mapbox.navigation.ui.maps.route.line.model.ExpressionOffsetData;
                  public constructor(param0: number, param1: number);
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class InactiveRouteColors {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.InactiveRouteColors>;
                  public getInactiveRouteLegClosureColor(): number;
                  public hashCode(): number;
                  public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
                  public component2(): number;
                  public component5(): number;
                  public component7(): number;
                  public equals(param0: any): boolean;
                  public component4(): number;
                  public toString(): string;
                  public constructor(param0: number);
                  public getInactiveRouteLegUnknownCongestionColor(): number;
                  public getInactiveRouteLegSevereCongestionColor(): number;
                  public component1(): number;
                  public component6(): number;
                  public constructor(param0: com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions);
                  public copy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): com.mapbox.navigation.ui.maps.route.line.model.InactiveRouteColors;
                  public getInactiveRouteLegLowCongestionColor(): number;
                  public getInactiveRouteLegModerateCongestionColor(): number;
                  public component3(): number;
                  public getInactiveRouteLegHeavyCongestionColor(): number;
                  public getInactiveRouteLegRestrictedRoadColor(): number;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class MapboxRouteLineOptions {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions>;
                  public hashCode(): number;
                  public getOriginIcon(): globalAndroid.graphics.drawable.Drawable;
                  public equals(param0: any): boolean;
                  public getResourceProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources;
                  public toString(): string;
                  public getTolerance(): number;
                  public getVanishingRouteLine$libnavui_maps_release(): com.mapbox.navigation.ui.maps.route.line.api.VanishingRouteLine;
                  public toBuilder(param0: globalAndroid.content.Context): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                  public getWaypointLayerIconOffset(): java.util.List<java.lang.Double>;
                  public getRouteStyleDescriptors(): java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteStyleDescriptor>;
                  public getIconPitchAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment;
                  public getSoftGradientTransition(): number;
                  public getWaypointLayerIconAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public getDisplaySoftGradientForTraffic(): boolean;
                  public getRouteLineBelowLayerId(): string;
                  public getVanishingRouteLineUpdateIntervalNano(): number;
                  public getDisplayRestrictedRoadSections(): boolean;
                  public getLineDepthOcclusionFactor(): number;
                  public getStyleInactiveRouteLegsIndependently(): boolean;
                  public getDestinationIcon(): globalAndroid.graphics.drawable.Drawable;
                  public getShareLineGeometrySources(): boolean;
                  public setVanishingRouteLine$libnavui_maps_release(param0: com.mapbox.navigation.ui.maps.route.line.api.VanishingRouteLine): void;
                }
                export module MapboxRouteLineOptions {
                  export class Builder {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder>;
                    public shareLineGeometrySources(param0: boolean): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public displayRestrictedRoadSections(param0: boolean): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public waypointLayerIconAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public lineDepthOcclusionFactor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public waypointLayerIconOffset(param0: java.util.List<java.lang.Double>): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public constructor(param0: globalAndroid.content.Context);
                    public displaySoftGradientForTraffic(param0: boolean): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public build(): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions;
                    public styleInactiveRouteLegsIndependently(param0: boolean): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public withTolerance(param0: number): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public vanishingRouteLineUpdateInterval(param0: number): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public withRouteLineResources(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public withVanishingRouteLineEnabled(param0: boolean): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public withRouteLineBelowLayerId(param0: string): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public iconPitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources, param2: string, param3: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteStyleDescriptor>, param4: boolean, param5: number, param6: boolean, param7: boolean, param8: boolean, param9: number, param10: number, param11: java.util.List<java.lang.Double>, param12: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor, param13: com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment, param14: boolean, param15: number);
                    public withRouteStyleDescriptors(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteStyleDescriptor>): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                    public softGradientTransition(param0: number): com.mapbox.navigation.ui.maps.route.line.model.MapboxRouteLineOptions.Builder;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class NavigationRouteLine {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine>;
                  public component2(): string;
                  public hashCode(): number;
                  public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: string);
                  public component1(): com.mapbox.navigation.base.route.NavigationRoute;
                  public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
                  public copy(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: string): com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getIdentifier(): string;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class NavigationRouteLineEx {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLineEx>;
                  public static toNavigationRouteLine(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLine): com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine;
                  public static toNavigationRouteLines(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLine>): java.util.List<com.mapbox.navigation.ui.maps.route.line.model.NavigationRouteLine>;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteFeatureData {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteFeatureData>;
                  public hashCode(): number;
                  public component1(): com.mapbox.navigation.base.route.NavigationRoute;
                  public getLineString(): com.mapbox.geojson.LineString;
                  public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
                  public component2(): com.mapbox.geojson.FeatureCollection;
                  public equals(param0: any): boolean;
                  public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.geojson.FeatureCollection, param2: com.mapbox.geojson.LineString);
                  public toString(): string;
                  public component3(): com.mapbox.geojson.LineString;
                  public getFeatureCollection(): com.mapbox.geojson.FeatureCollection;
                  public copy(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.geojson.FeatureCollection, param2: com.mapbox.geojson.LineString): com.mapbox.navigation.ui.maps.route.line.model.RouteFeatureData;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLine {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLine>;
                  public component2(): string;
                  public constructor(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: string);
                  public hashCode(): number;
                  public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
                  public copy(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: string): com.mapbox.navigation.ui.maps.route.line.model.RouteLine;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getIdentifier(): string;
                  public component1(): com.mapbox.api.directions.v5.models.DirectionsRoute;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineClearValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineClearValue>;
                  public getWaypointsSource(): com.mapbox.geojson.FeatureCollection;
                  public toMutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineClearValue.MutableRouteLineClearValue;
                  public constructor(param0: com.mapbox.geojson.FeatureCollection, param1: java.util.List<com.mapbox.geojson.FeatureCollection>, param2: com.mapbox.geojson.FeatureCollection);
                  public getPrimaryRouteSource(): com.mapbox.geojson.FeatureCollection;
                  public getAlternativeRouteSourceSources(): java.util.List<com.mapbox.geojson.FeatureCollection>;
                }
                export module RouteLineClearValue {
                  export class MutableRouteLineClearValue {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineClearValue.MutableRouteLineClearValue>;
                    public getPrimaryRouteSource(): com.mapbox.geojson.FeatureCollection;
                    public setPrimaryRouteSource(param0: com.mapbox.geojson.FeatureCollection): void;
                    public setAlternativeRouteSourceSources(param0: java.util.List<com.mapbox.geojson.FeatureCollection>): void;
                    public getAlternativeRouteSourceSources(): java.util.List<com.mapbox.geojson.FeatureCollection>;
                    public constructor(param0: com.mapbox.geojson.FeatureCollection, param1: java.util.List<com.mapbox.geojson.FeatureCollection>, param2: com.mapbox.geojson.FeatureCollection);
                    public getWaypointsSource(): com.mapbox.geojson.FeatureCollection;
                    public setWaypointsSource(param0: com.mapbox.geojson.FeatureCollection): void;
                    public toImmutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineClearValue;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineColorResources {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources>;
                  public getLowCongestionRange(): any;
                  public getRouteClosureColor(): number;
                  public getModerateCongestionRange(): any;
                  public getAlternativeRouteCasingColor(): number;
                  public getRouteSevereCongestionColor(): number;
                  public getHeavyCongestionRange(): any;
                  public getRouteHeavyCongestionColor(): number;
                  public getInactiveRouteLegSevereCongestionColor(): number;
                  public getAlternativeRouteRestrictedRoadColor(): number;
                  public getAlternativeRouteLowCongestionColor(): number;
                  public getRestrictedRoadColor(): number;
                  public getAlternativeRouteClosureColor(): number;
                  public getInactiveRouteLegLowCongestionColor(): number;
                  public getAlternativeRouteHeavyCongestionColor(): number;
                  public getAlternativeRouteModerateCongestionColor(): number;
                  public getRouteDefaultColor(): number;
                  public getInactiveRouteLegClosureColor(): number;
                  public getAlternativeRouteSevereCongestionColor(): number;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public getInActiveRouteLegsColor(): number;
                  public toBuilder(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                  public toString(): string;
                  public getRouteCasingColor(): number;
                  public getInactiveRouteLegUnknownCongestionColor(): number;
                  public getSevereCongestionRange(): any;
                  public getRouteUnknownCongestionColor(): number;
                  public getRouteLowCongestionColor(): number;
                  public getAlternativeRouteUnknownCongestionColor(): number;
                  public getRouteLineTraveledCasingColor(): number;
                  public getInactiveRouteLegModerateCongestionColor(): number;
                  public getAlternativeRouteDefaultColor(): number;
                  public getRouteModerateCongestionColor(): number;
                  public getInactiveRouteLegHeavyCongestionColor(): number;
                  public getRouteLineTraveledColor(): number;
                  public getInactiveRouteLegRestrictedRoadColor(): number;
                }
                export module RouteLineColorResources {
                  export class Builder {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder>;
                    public inactiveRouteLegRestrictedRoadColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public inactiveRouteLegLowCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public inactiveRouteLegClosureColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public severeCongestionRange(param0: any): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public constructor();
                    public alternativeRouteSevereCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public alternativeRouteCasingColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public alternativeRouteLowCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public alternativeRouteModerateCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public routeUnknownCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public routeModerateCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public routeSevereCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public build(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources;
                    public routeLineTraveledColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public inactiveRouteLegSevereCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public inActiveRouteLegsColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public lowCongestionRange(param0: any): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public inactiveRouteLegUnknownCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public routeHeavyCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public alternativeRouteDefaultColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public inactiveRouteLegHeavyCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public routeLowCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public routeDefaultColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public alternativeRouteUnknownCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public restrictedRoadColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public routeLineTraveledCasingColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public alternativeRouteHeavyCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public routeClosureColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public alternativeRouteClosureColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public routeCasingColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public moderateCongestionRange(param0: any): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public heavyCongestionRange(param0: any): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public inactiveRouteLegModerateCongestionColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                    public alternativeRouteRestrictedRoadColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources.Builder;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineData {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineData>;
                  public hashCode(): number;
                  public toMutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineData.MutableRouteLineData;
                  public getDynamicData(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getFeatureCollection(): com.mapbox.geojson.FeatureCollection;
                  public constructor(param0: com.mapbox.geojson.FeatureCollection, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData);
                }
                export module RouteLineData {
                  export class MutableRouteLineData {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineData.MutableRouteLineData>;
                    public toImmutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineData;
                    public setFeatureCollection(param0: com.mapbox.geojson.FeatureCollection): void;
                    public getDynamicData(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                    public setDynamicData(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData): void;
                    public getFeatureCollection(): com.mapbox.geojson.FeatureCollection;
                    public constructor(param0: com.mapbox.geojson.FeatureCollection, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData);
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineDistancesIndex {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>;
                  public hashCode(): number;
                  public copy(param0: com.mapbox.geojson.Point, param1: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex;
                  public component2(): number;
                  public getPoint(): com.mapbox.geojson.Point;
                  public equals(param0: any): boolean;
                  public getDistanceRemaining(): number;
                  public constructor(param0: com.mapbox.geojson.Point, param1: number);
                  public toString(): string;
                  public component1(): com.mapbox.geojson.Point;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineDynamicData {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData>;
                  public hashCode(): number;
                  public getCasingExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public toMutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData.MutableRouteLineDynamicData;
                  public equals(param0: any): boolean;
                  public getTrailExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public getTrailCasingExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public toString(): string;
                  public getBaseExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public getTrimOffset: com.mapbox.navigation.ui.maps.route.line.model.RouteLineTrimOffset;
                  public getTrafficExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public getRestrictedSectionExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                }
                export module RouteLineDynamicData {
                  export class MutableRouteLineDynamicData {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData.MutableRouteLineDynamicData>;
                    public setCasingExpressionProvider(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider): void;
                    public toImmutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                    public getTrimOffset: com.mapbox.navigation.ui.maps.route.line.model.RouteLineTrimOffset;
                    public getBaseExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                    public setTrafficExpressionProvider(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider): void;
                    public getTrailCasingExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                    public setTrailCasingExpressionProvider(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider): void;
                    public getRestrictedSectionExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                    public getTrafficExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                    public getCasingExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                    public setRestrictedSectionExpressionProvider(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider): void;
                    public setTrimOffset(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineTrimOffset): void;
                    public setBaseExpressionProvider(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider): void;
                    public getTrailExpressionProvider(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                    public setTrailExpressionProvider(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider): void;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineError {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError>;
                  public getThrowable(): java.lang.Throwable;
                  public toMutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineError.MutableRouteLineError;
                  public constructor(param0: string, param1: java.lang.Throwable);
                  public getErrorMessage(): string;
                }
                export module RouteLineError {
                  export class MutableRouteLineError {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineError.MutableRouteLineError>;
                    public getThrowable(): java.lang.Throwable;
                    public toImmutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineError;
                    public setThrowable(param0: java.lang.Throwable): void;
                    public getErrorMessage(): string;
                    public constructor(param0: string, param1: java.lang.Throwable);
                    public setErrorMessage(param0: string): void;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineExpressionData extends com.mapbox.navigation.ui.maps.route.line.model.ExpressionOffsetData {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionData>;
                  public constructor(param0: number, param1: string, param2: number, param3: number);
                  public hashCode(): number;
                  public getCongestionValue(): string;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public copyWithNewOffset(param0: number): com.mapbox.navigation.ui.maps.route.line.model.ExpressionOffsetData;
                  public copyWithNewSegmentColor(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionData;
                  public getSegmentColor(): number;
                  public constructor(param0: number, param1: number);
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineExpressionProvider {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { generateExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression });
                  public constructor();
                  public generateExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineFeatureId {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineFeatureId>;
                  public hashCode(): number;
                  public static constructor(param0: string): string;
                  public equals(param0: any): boolean;
                  public static equals(param0: string, param1: string): boolean;
                  public static hashCode(param0: string): number;
                  public toString(): string;
                  public static id(param0: string): string;
                  public static toString(param0: string): string;
                  public static equals(param0: string, param1: any): boolean;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineGranularDistances {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineGranularDistances>;
                  public hashCode(): number;
                  public component2(): androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>;
                  public getStepsDistances(): androidNative.Array<androidNative.Array<androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>>>;
                  public constructor(param0: number, param1: androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>, param2: androidNative.Array<androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>>, param3: androidNative.Array<androidNative.Array<androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>>>);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public component4(): androidNative.Array<androidNative.Array<androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>>>;
                  public component3(): androidNative.Array<androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>>;
                  public component1(): number;
                  public getCompleteDistance(): number;
                  public getRouteDistances(): androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>;
                  public getLegsDistances(): androidNative.Array<androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>>;
                  public copy(param0: number, param1: androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>, param2: androidNative.Array<androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>>, param3: androidNative.Array<androidNative.Array<androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDistancesIndex>>>): com.mapbox.navigation.ui.maps.route.line.model.RouteLineGranularDistances;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineResources {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources>;
                  public hashCode(): number;
                  public getRestrictedRoadOpacity(): number;
                  public getDestinationWaypointIcon(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getAlternativeRouteCasingLineScaleExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getRoundedLineCap(): boolean;
                  public getRestrictedRoadLineWidth(): number;
                  public getRouteLineScaleExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getRestrictedRoadDashArray(): java.util.List<java.lang.Double>;
                  public getTrafficBackfillRoadClasses(): java.util.List<string>;
                  public getRouteLineColorResources(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources;
                  public getRouteTrafficLineScaleExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getAlternativeRouteLineScaleExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getRouteCasingLineScaleExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getOriginWaypointIcon(): number;
                  public toBuilder(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                  public getAlternativeRouteTrafficLineScaleExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                }
                export module RouteLineResources {
                  export class Builder {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder>;
                    public destinationWaypointIcon(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public alternativeRouteLineScaleExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public constructor();
                    public routeTrafficLineScaleExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public roundedLineCap(param0: boolean): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public restrictedRoadLineWidth(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public originWaypointIcon(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public alternativeRouteTrafficLineScaleExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public restrictedRoadDashArray(param0: java.util.List<java.lang.Double>): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public routeCasingLineScaleExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public routeLineScaleExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public build(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources;
                    public routeLineColorResources(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineColorResources): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public restrictedRoadOpacity(param0: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public trafficBackfillRoadClasses(param0: java.util.List<string>): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                    public alternativeRouteCasingLineScaleExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.navigation.ui.maps.route.line.model.RouteLineResources.Builder;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineScaleValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineScaleValue>;
                  public hashCode(): number;
                  public constructor(param0: number, param1: number, param2: number);
                  public component1(): number;
                  public component2(): number;
                  public copy(param0: number, param1: number, param2: number): com.mapbox.navigation.ui.maps.route.line.model.RouteLineScaleValue;
                  public equals(param0: any): boolean;
                  public getScaleStop(): number;
                  public component3(): number;
                  public toString(): string;
                  public getScaleMultiplier(): number;
                  public getScale(): number;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineSourceKey {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineSourceKey>;
                  public hashCode(): number;
                  public getSourceId(): string;
                  public static constructor(param0: string): string;
                  public equals(param0: any): boolean;
                  public static equals(param0: string, param1: string): boolean;
                  public static hashCode(param0: string): number;
                  public toString(): string;
                  public static toString(param0: string): string;
                  public static equals(param0: string, param1: any): boolean;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineTrimExpressionProvider extends com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineTrimExpressionProvider>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.ui.maps.route.line.model.RouteLineTrimExpressionProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { generateExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression });
                  public constructor();
                  public generateExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineTrimOffset {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineTrimOffset>;
                  public static toString(param0: number): string;
                  public hashCode(): number;
                  public static equals(param0: number, param1: any): boolean;
                  public static hashCode(param0: number): number;
                  public getOffset(): number;
                  public equals(param0: any): boolean;
                  public static equals(param0: number, param1: number): boolean;
                  public toString(): string;
                  public static constructor(param0: number): number;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteLineUpdateValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineUpdateValue>;
                  public getAlternativeRouteLinesDynamicData(): java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData>;
                  public getPrimaryRouteLineDynamicData(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                  public hashCode(): number;
                  public constructor(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData>, param2: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData);
                  public equals(param0: any): boolean;
                  public getIgnorePrimaryRouteLineData$libnavui_maps_release(): boolean;
                  public toString(): string;
                  public getRouteLineMaskingLayerDynamicData(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                  public setIgnorePrimaryRouteLineData$libnavui_maps_release(param0: boolean): void;
                  public toMutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineUpdateValue.MutableRouteLineUpdateValue;
                }
                export module RouteLineUpdateValue {
                  export class MutableRouteLineUpdateValue {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteLineUpdateValue.MutableRouteLineUpdateValue>;
                    public setIgnorePrimaryRouteLineData$libnavui_maps_release(param0: boolean): void;
                    public constructor(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData>, param2: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData);
                    public setPrimaryRouteLineDynamicData(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData): void;
                    public getRouteLineMaskingLayerDynamicData(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                    public setAlternativeRouteLinesDynamicData(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData>): void;
                    public toImmutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineUpdateValue;
                    public setRouteLineMaskingLayerDynamicData(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData): void;
                    public getAlternativeRouteLinesDynamicData(): java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData>;
                    public getPrimaryRouteLineDynamicData(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                    public getIgnorePrimaryRouteLineData$libnavui_maps_release(): boolean;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteNotFound {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteNotFound>;
                  public getThrowable(): java.lang.Throwable;
                  public constructor(param0: string, param1: java.lang.Throwable);
                  public getErrorMessage(): string;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteSetValue {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue>;
                  public toMutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue.MutableRouteSetValue;
                  public getPrimaryRouteLineData(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineData;
                  public getWaypointsSource(): com.mapbox.geojson.FeatureCollection;
                  public constructor(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineData, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineData>, param2: com.mapbox.geojson.FeatureCollection, param3: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData);
                  public getRouteLineMaskingLayerDynamicData(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                  public getAlternativeRouteLinesData(): java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineData>;
                }
                export module RouteSetValue {
                  export class MutableRouteSetValue {
                    public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue.MutableRouteSetValue>;
                    public getAlternativeRouteLinesData(): java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineData>;
                    public getRouteLineMaskingLayerDynamicData(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData;
                    public getPrimaryRouteLineData(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineData;
                    public setAlternativeRouteLinesData(param0: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineData>): void;
                    public toImmutableValue(): com.mapbox.navigation.ui.maps.route.line.model.RouteSetValue;
                    public setRouteLineMaskingLayerDynamicData(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData): void;
                    public getWaypointsSource(): com.mapbox.geojson.FeatureCollection;
                    public setWaypointsSource(param0: com.mapbox.geojson.FeatureCollection): void;
                    public constructor(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineData, param1: java.util.List<com.mapbox.navigation.ui.maps.route.line.model.RouteLineData>, param2: com.mapbox.geojson.FeatureCollection, param3: com.mapbox.navigation.ui.maps.route.line.model.RouteLineDynamicData);
                    public setPrimaryRouteLineData(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineData): void;
                  }
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class RouteStyleDescriptor {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.RouteStyleDescriptor>;
                  public hashCode(): number;
                  public getLineCasingColor(): number;
                  public component2(): number;
                  public equals(param0: any): boolean;
                  public constructor(param0: string, param1: number, param2: number);
                  public component3(): number;
                  public toString(): string;
                  public getRouteIdentifier(): string;
                  public getLineColor(): number;
                  public component1(): string;
                  public copy(param0: string, param1: number, param2: number): com.mapbox.navigation.ui.maps.route.line.model.RouteStyleDescriptor;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class VanishingPointState {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.VanishingPointState>;
                  public static ENABLED: com.mapbox.navigation.ui.maps.route.line.model.VanishingPointState;
                  public static ONLY_INCREASE_PROGRESS: com.mapbox.navigation.ui.maps.route.line.model.VanishingPointState;
                  public static DISABLED: com.mapbox.navigation.ui.maps.route.line.model.VanishingPointState;
                  public static values(): androidNative.Array<com.mapbox.navigation.ui.maps.route.line.model.VanishingPointState>;
                  public static valueOf(param0: string): com.mapbox.navigation.ui.maps.route.line.model.VanishingPointState;
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
    export module navigation {
      export module ui {
        export module maps {
          export module route {
            export module line {
              export module model {
                export class VanishingRouteLineExpressions {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.maps.route.line.model.VanishingRouteLineExpressions>;
                  public hashCode(): number;
                  public component3(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public equals(param0: any): boolean;
                  public component2(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public toString(): string;
                  public getTrafficLineExpression(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public getRouteLineCasingExpression(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public component4(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public copy(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider, param2: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider, param3: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider): com.mapbox.navigation.ui.maps.route.line.model.VanishingRouteLineExpressions;
                  public constructor(param0: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider, param1: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider, param2: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider, param3: com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider);
                  public component1(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public getRestrictedRoadExpression(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
                  public getRouteLineExpression(): com.mapbox.navigation.ui.maps.route.line.model.RouteLineExpressionProvider;
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
    export module navigation {
      export module ui {
        export module maps {
          export module util {
            export class CacheResultUtils {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.util.CacheResultUtils>;
              public static INSTANCE: com.mapbox.navigation.ui.maps.util.CacheResultUtils;
              public cacheResult(param0: any, param1: number): any;
              public cacheRouteTrafficResult(param0: any, param1: globalAndroid.util.LruCache<any, any>): any;
              public cacheRouteResult(param0: any, param1: globalAndroid.util.LruCache<any, any>): any;
              public cacheResult(param0: any, param1: globalAndroid.util.LruCache<any, any>): any;
              public cacheResult(param0: any, param1: globalAndroid.util.LruCache<any, any>): any;
              public cacheResult(param0: any, param1: globalAndroid.util.LruCache<any, any>): any;
              public cacheResult(param0: any, param1: number): any;
            }
            export module CacheResultUtils {
              export class CacheResultCall<F, R> extends java.lang.Object {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultCall<any, any>>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.maps.util.CacheResultUtils$CacheResultCall interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { invoke(param0: F): R });
                public constructor();
                public invoke(param0: F): R;
              }
              export class CacheResultHandler<F, K, R> extends java.lang.Object {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultHandler<any, any, any>>;
                public getCache(): globalAndroid.util.LruCache<K, R>;
                public invoke(param0: K): R;
                public getF(): F;
                public constructor(param0: F, param1: globalAndroid.util.LruCache<K, R>);
              }
              export class CacheResultKey1<P1, R> extends com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultCall<any, any> {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKey1>;
                public copy(param0: any): com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKey1;
                public constructor(param0: any);
                public toString(): string;
                public component1(): any;
                public getP1(): any;
                public equals(param0: any): boolean;
                public invoke(param0: any): any;
                public invoke(param0: any): any;
                public hashCode(): number;
              }
              export class CacheResultKey2<P1, P2, R> extends com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultCall<any> {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKey2<any, any, any>>;
                public toString(): string;
                public constructor(param0: any, param1: any);
                public component1(): any;
                public getP1(): any;
                public equals(param0: any): boolean;
                public component2(): any;
                public invoke(param0: any): any;
                public invoke(param0: any): any;
                public hashCode(): number;
                public getP2(): any;
                public copy(param0: any, param1: any): com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKey2<any, any, any>;
              }
              export class CacheResultKey3<P1, P2, P3, R> extends com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultCall<any> {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKey3<any, any, any, any>>;
                public toString(): string;
                public component1(): any;
                public getP3(): any;
                public getP1(): any;
                public equals(param0: any): boolean;
                public component2(): any;
                public constructor(param0: any, param1: any, param2: any);
                public getP2(): any;
                public component3(): any;
                public invoke(param0: any): any;
                public copy(param0: any, param1: any, param2: any): com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKey3<any, any, any, any>;
                public invoke(param0: any): any;
                public hashCode(): number;
              }
              export class CacheResultKeyRoute<R> extends com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultCall<any> {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKeyRoute<any>>;
                public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute);
                public toString(): string;
                public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
                public equals(param0: any): boolean;
                public invoke(param0: any): any;
                public component1(): com.mapbox.navigation.base.route.NavigationRoute;
                public invoke(param0: any): any;
                public hashCode(): number;
                public copy(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKeyRoute<any>;
              }
              export class CacheResultKeyRouteTraffic<R> extends com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultCall<any> {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKeyRouteTraffic<any>>;
                public toString(): string;
                public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: any);
                public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
                public component2(): any;
                public copy(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: any): com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKeyRouteTraffic<any>;
                public equals(param0: any): boolean;
                public component1(): com.mapbox.navigation.base.route.NavigationRoute;
                public invoke(param0: any): any;
                public invoke(param0: any): any;
                public hashCode(): number;
                public getTrafficProvider(): any;
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
    export module navigation {
      export module ui {
        export module maps {
          export module util {
            export class OnViewScreenshotReady {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.util.OnViewScreenshotReady>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.maps.util.OnViewScreenshotReady interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onViewCaptureReady(param0: globalAndroid.graphics.Bitmap): void });
              public constructor();
              public onViewCaptureReady(param0: globalAndroid.graphics.Bitmap): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export module util {
            export class ViewUtils {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.util.ViewUtils>;
              public static INSTANCE: com.mapbox.navigation.ui.maps.util.ViewUtils;
              public static capture(param0: globalAndroid.view.View, param1: com.mapbox.navigation.ui.maps.util.OnViewScreenshotReady): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maps {
          export module view {
            export class MapboxCameraModeButton {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maps.view.MapboxCameraModeButton>;
              public getOverviewIconResId(): number;
              public updateStyle(param0: number): void;
              public getFollowingIconResId(): number;
              public getFollowingText(): string;
              public getIconImage(): androidx.appcompat.widget.AppCompatImageView;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
              public setStateAndExtend(param0: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState): void;
              public setFollowingIconResId(param0: number): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public getContainerView(): androidx.constraintlayout.widget.ConstraintLayout;
              public setState(param0: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState): void;
              public setFollowingText(param0: string): void;
              public getTextView(): androidx.appcompat.widget.AppCompatTextView;
              public getOverviewText(): string;
              public setStateAndExtend(param0: com.mapbox.navigation.ui.maps.camera.state.NavigationCameraState, param1: number): void;
              public setOverviewText(param0: string): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public setOverviewIconResId(param0: number): void;
              public constructor(param0: globalAndroid.content.Context);
            }
            export module MapboxCameraModeButton {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maps.view.MapboxCameraModeButton.Companion>;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.navigation.ui.maps.camera.data.ViewportProperty:1
//com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultCall:2
//com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultHandler:3
//com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKey1:2
//com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKey2:3
//com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKey3:4
//com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKeyRoute:1
//com.mapbox.navigation.ui.maps.util.CacheResultUtils.CacheResultKeyRouteTraffic:1
