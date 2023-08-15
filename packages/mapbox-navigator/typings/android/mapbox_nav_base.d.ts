/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.navigation.base.BuildConfig>;
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
    export module navigation {
      export module base {
        export class ExperimentalMapboxNavigationAPI {
          public static class: java.lang.Class<com.mapbox.navigation.base.ExperimentalMapboxNavigationAPI>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.base.ExperimentalMapboxNavigationAPI interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export class ExperimentalPreviewMapboxNavigationAPI {
          public static class: java.lang.Class<com.mapbox.navigation.base.ExperimentalPreviewMapboxNavigationAPI>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.base.ExperimentalPreviewMapboxNavigationAPI interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export class TimeFormat {
          public static class: java.lang.Class<com.mapbox.navigation.base.TimeFormat>;
          public static INSTANCE: com.mapbox.navigation.base.TimeFormat;
          public static NONE_SPECIFIED: number;
          public static TWELVE_HOURS: number;
          public static TWENTY_FOUR_HOURS: number;
        }
        export module TimeFormat {
          export class Type {
            public static class: java.lang.Class<com.mapbox.navigation.base.TimeFormat.Type>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.TimeFormat$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module navigation {
      export module base {
        export module extensions {
          export class RouteOptionsExtensions {
            public static class: java.lang.Class<com.mapbox.navigation.base.extensions.RouteOptionsExtensions>;
            public static coordinates(param0: com.mapbox.api.directions.v5.models.RouteOptions.Builder, param1: com.mapbox.geojson.Point, param2: java.util.List<com.mapbox.geojson.Point>, param3: com.mapbox.geojson.Point): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
            public static applyDefaultNavigationOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions.Builder, param1: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
            public static applyLanguageAndVoiceUnitOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions.Builder, param1: globalAndroid.content.Context): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
            public static applyDefaultNavigationOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions.Builder): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
            public static coordinates(param0: com.mapbox.api.directions.v5.models.RouteOptions.Builder, param1: com.mapbox.geojson.Point, param2: com.mapbox.geojson.Point): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module formatter {
          export class DistanceFormatter {
            public static class: java.lang.Class<com.mapbox.navigation.base.formatter.DistanceFormatter>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.formatter.DistanceFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { formatDistance(param0: number): globalAndroid.text.SpannableString });
            public constructor();
            public formatDistance(param0: number): globalAndroid.text.SpannableString;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module formatter {
          export class DistanceFormatterOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.formatter.DistanceFormatterOptions>;
            public getUnitType(): com.mapbox.navigation.base.formatter.UnitType;
            public getLocale(): java.util.Locale;
            public toBuilder(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions.Builder;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getRoundingIncrement(): number;
            public getApplicationContext(): globalAndroid.content.Context;
            public toString(): string;
          }
          export module DistanceFormatterOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.formatter.DistanceFormatterOptions.Builder>;
              public build(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
              public unitType(param0: com.mapbox.navigation.base.formatter.UnitType): com.mapbox.navigation.base.formatter.DistanceFormatterOptions.Builder;
              public roundingIncrement(param0: number): com.mapbox.navigation.base.formatter.DistanceFormatterOptions.Builder;
              public constructor(param0: globalAndroid.content.Context);
              public locale(param0: java.util.Locale): com.mapbox.navigation.base.formatter.DistanceFormatterOptions.Builder;
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
      export module base {
        export module formatter {
          export class Rounding {
            public static class: java.lang.Class<com.mapbox.navigation.base.formatter.Rounding>;
            public static INSTANCE: com.mapbox.navigation.base.formatter.Rounding;
            public static INCREMENT_FIVE: number;
            public static INCREMENT_TEN: number;
            public static INCREMENT_TWENTY_FIVE: number;
            public static INCREMENT_FIFTY: number;
            public static INCREMENT_ONE_HUNDRED: number;
          }
          export module Rounding {
            export class Increment {
              public static class: java.lang.Class<com.mapbox.navigation.base.formatter.Rounding.Increment>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.formatter.Rounding$Increment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module navigation {
      export module base {
        export module formatter {
          export class UnitType {
            public static class: java.lang.Class<com.mapbox.navigation.base.formatter.UnitType>;
            public static IMPERIAL: com.mapbox.navigation.base.formatter.UnitType;
            public static METRIC: com.mapbox.navigation.base.formatter.UnitType;
            public static values(): androidNative.Array<com.mapbox.navigation.base.formatter.UnitType>;
            public static valueOf(param0: string): com.mapbox.navigation.base.formatter.UnitType;
            public getValue(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module internal {
          export class CoalescingBlockingQueue {
            public static class: java.lang.Class<com.mapbox.navigation.base.internal.CoalescingBlockingQueue>;
            public addJob(param0: com.mapbox.navigation.base.internal.CoalescingBlockingQueue.Item): void;
            public constructor(param0: kotlinx.coroutines.CoroutineScope, param1: kotlinx.coroutines.sync.Mutex);
          }
          export module CoalescingBlockingQueue {
            export class Item {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.CoalescingBlockingQueue.Item>;
              public hashCode(): number;
              public getBlock(): any;
              public copy(param0: any, param1: any): com.mapbox.navigation.base.internal.CoalescingBlockingQueue.Item;
              public component1(): any;
              public toString(): string;
              public constructor(param0: any, param1: any);
              public equals(param0: any): boolean;
              public component2(): any;
              public getCancellation(): any;
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
      export module base {
        export module internal {
          export class NativeRouteParserWrapper extends com.mapbox.navigation.base.internal.SDKRouteParser {
            public static class: java.lang.Class<com.mapbox.navigation.base.internal.NativeRouteParserWrapper>;
            public constructor();
            public parseDirectionsResponse(param0: string, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>;
            public parseDirectionsResponse(param0: com.mapbox.bindgen.DataRef, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module internal {
          export class NavigationRouterV2 extends com.mapbox.navigation.base.route.NavigationRouter {
            public static class: java.lang.Class<com.mapbox.navigation.base.internal.NavigationRouterV2>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.internal.NavigationRouterV2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
              getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
              cancelRouteRequest(param0: number): void;
              cancelAll(): void;
              getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
              cancelRouteRefreshRequest(param0: number): void;
              shutdown(): void;
            });
            public constructor();
            public cancelRouteRefreshRequest(param0: number): void;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
            public shutdown(): void;
            /** @deprecated */
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public cancelAll(): void;
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
            public cancelRouteRequest(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module internal {
          export class RouteRefreshRequestData {
            public static class: java.lang.Class<com.mapbox.navigation.base.internal.RouteRefreshRequestData>;
            public getLegGeometryIndex(): java.lang.Integer;
            public getLegIndex(): number;
            public getExperimentalProperties(): java.util.Map<string, string>;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public constructor(param0: number, param1: number, param2: java.lang.Integer, param3: java.util.Map<string, string>);
            public toString(): string;
            public getRouteGeometryIndex(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module internal {
          export class SDKRouteParser {
            public static class: java.lang.Class<com.mapbox.navigation.base.internal.SDKRouteParser>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.internal.SDKRouteParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { parseDirectionsResponse(param0: string, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>; parseDirectionsResponse(param0: com.mapbox.bindgen.DataRef, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>; <clinit>(): void });
            public constructor();
            public parseDirectionsResponse(param0: string, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>;
            public parseDirectionsResponse(param0: com.mapbox.bindgen.DataRef, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.bindgen.Expected<string, java.util.List<com.mapbox.navigator.RouteInterface>>;
          }
          export module SDKRouteParser {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.SDKRouteParser.Companion>;
              public getDefault(): com.mapbox.navigation.base.internal.SDKRouteParser;
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
      export module base {
        export module internal {
          export module accounts {
            export class UrlSkuTokenProvider {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.accounts.UrlSkuTokenProvider>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.internal.accounts.UrlSkuTokenProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { obtainUrlWithSkuToken(param0: java.net.URL): java.net.URL });
              public constructor();
              public obtainUrlWithSkuToken(param0: java.net.URL): java.net.URL;
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
      export module base {
        export module internal {
          export module extensions {
            export class ContextEx {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.extensions.ContextEx>;
              public static inferDeviceLanguage(param0: globalAndroid.content.Context): string;
              public static inferDeviceLocale(param0: globalAndroid.content.Context): java.util.Locale;
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
      export module base {
        export module internal {
          export module extensions {
            export class LocaleEx {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.extensions.LocaleEx>;
              public static INSTANCE: com.mapbox.navigation.base.internal.extensions.LocaleEx;
              public static getUnitTypeForLocale(param0: java.util.Locale): com.mapbox.navigation.base.formatter.UnitType;
              public static getLocaleDirectionsRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: globalAndroid.content.Context): java.util.Locale;
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
      export module base {
        export module internal {
          export module extensions {
            export class ShieldExtensions {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.extensions.ShieldExtensions>;
              public static toMapboxShield(param0: com.mapbox.navigator.Shield): com.mapbox.api.directions.v5.models.MapboxShield;
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
      export module base {
        export module internal {
          export module extensions {
            export module WaypointExKt {
              export module WhenMappings {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.base.internal.extensions.WaypointExKt.WhenMappings>;
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
      export module base {
        export module internal {
          export module factory {
            export class EHorizonFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.EHorizonFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.EHorizonFactory;
              public buildRoadObjectDistance(param0: com.mapbox.navigator.RoadObjectDistance): com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo;
              public buildNativeGraphPath(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath): com.mapbox.navigator.GraphPath;
              public buildRoadObjectEnterExitInfo(param0: com.mapbox.navigator.RoadObjectEnterExitInfo): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo;
              public buildEHorizonEdgeMetadata(param0: com.mapbox.navigator.EdgeMetadata): com.mapbox.navigation.base.trip.model.eh.EHorizonEdgeMetadata;
              public buildNativeMatchableOpenLr(param0: com.mapbox.navigation.base.trip.model.eh.MatchableOpenLr): com.mapbox.navigator.MatchableOpenLr;
              public buildRoadObjectEdgeLocation(param0: com.mapbox.navigator.RoadObjectEdgeLocation): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEdgeLocation;
              public buildNativeMatchableGeometry(param0: com.mapbox.navigation.base.trip.model.eh.MatchableGeometry): com.mapbox.navigator.MatchableGeometry;
              public buildRoadObjectPassInfo(param0: com.mapbox.navigator.RoadObjectPassInfo): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPassInfo;
              public buildEHorizonPosition(param0: com.mapbox.navigator.ElectronicHorizonPosition): com.mapbox.navigation.base.trip.model.eh.EHorizonPosition;
              public buildNativeGraphPosition(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition): com.mapbox.navigator.GraphPosition;
              public buildNativeMatchablePoint(param0: com.mapbox.navigation.base.trip.model.eh.MatchablePoint): com.mapbox.navigator.MatchablePoint;
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
      export module base {
        export module internal {
          export module factory {
            export class RoadFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RoadFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RoadFactory;
              public buildRoadObject(param0: com.mapbox.navigator.NavigationStatus): com.mapbox.navigation.base.road.model.Road;
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
      export module base {
        export module internal {
          export module factory {
            export class RoadObjectFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RoadObjectFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RoadObjectFactory;
              public getUpdatedObjectsAhead(param0: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>, param1: java.util.List<any>): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
              public toUpcomingRoadObjects(param0: java.util.List<any>): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
              public buildRoadObject(param0: com.mapbox.navigator.RoadObject): com.mapbox.navigation.base.trip.model.roadobject.RoadObject;
              public buildRoadObjectMatchingError(param0: com.mapbox.navigator.RoadObjectMatcherError): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectMatcherError;
              public buildNativeRoadObject(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObject): com.mapbox.navigator.RoadObject;
              public buildUpcomingRoadObject(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObject, param1: java.lang.Double, param2: com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo): com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject;
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
      export module base {
        export module internal {
          export module factory {
            export class RouteIndicesFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RouteIndicesFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RouteIndicesFactory;
              public buildRouteIndices(param0: number, param1: number, param2: number, param3: number, param4: number): com.mapbox.navigation.base.internal.trip.model.RouteIndices;
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
      export module base {
        export module internal {
          export module factory {
            export class RouteLegProgressFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RouteLegProgressFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RouteLegProgressFactory;
              public buildRouteLegProgressObject(param0: number, param1: com.mapbox.api.directions.v5.models.RouteLeg, param2: number, param3: number, param4: number, param5: number, param6: com.mapbox.navigation.base.trip.model.RouteStepProgress, param7: com.mapbox.api.directions.v5.models.LegStep, param8: number, param9: com.mapbox.navigation.base.route.LegWaypoint): com.mapbox.navigation.base.trip.model.RouteLegProgress;
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
      export module base {
        export module internal {
          export module factory {
            export class RouteProgressFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RouteProgressFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RouteProgressFactory;
              public buildRouteProgressObject(
                param0: com.mapbox.navigation.base.route.NavigationRoute,
                param1: com.mapbox.api.directions.v5.models.BannerInstructions,
                param2: com.mapbox.api.directions.v5.models.VoiceInstructions,
                param3: com.mapbox.navigation.base.trip.model.RouteProgressState,
                param4: com.mapbox.navigation.base.trip.model.RouteLegProgress,
                param5: java.util.List<com.mapbox.geojson.Point>,
                param6: boolean,
                param7: number,
                param8: number,
                param9: number,
                param10: number,
                param11: number,
                param12: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>,
                param13: boolean,
                param14: string,
                param15: number,
                param16: boolean,
                param17: java.util.Map<string, com.mapbox.navigation.base.internal.trip.model.RouteIndices>
              ): com.mapbox.navigation.base.trip.model.RouteProgress;
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
      export module base {
        export module internal {
          export module factory {
            export class RouteStepProgressFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.RouteStepProgressFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.RouteStepProgressFactory;
              public buildRouteStepProgressObject(param0: number, param1: number, param2: java.lang.Integer, param3: com.mapbox.api.directions.v5.models.LegStep, param4: java.util.List<com.mapbox.geojson.Point>, param5: number, param6: number, param7: number, param8: number): com.mapbox.navigation.base.trip.model.RouteStepProgress;
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
      export module base {
        export module internal {
          export module factory {
            export class SpeedLimitInfoFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.SpeedLimitInfoFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.SpeedLimitInfoFactory;
              public createSpeedLimitInfo(param0: java.lang.Integer, param1: com.mapbox.navigation.base.speed.model.SpeedUnit, param2: com.mapbox.navigation.base.speed.model.SpeedLimitSign): com.mapbox.navigation.base.speed.model.SpeedLimitInfo;
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
      export module base {
        export module internal {
          export module factory {
            export class TripNotificationStateFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.factory.TripNotificationStateFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.factory.TripNotificationStateFactory;
              public buildTripNotificationState(param0: com.mapbox.api.directions.v5.models.BannerInstructions, param1: java.lang.Double, param2: java.lang.Double, param3: string): com.mapbox.navigation.base.trip.model.TripNotificationState;
              public buildTripNotificationState(param0: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.navigation.base.trip.model.TripNotificationState;
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
      export module base {
        export module internal {
          export module maneuver {
            export class ManeuverTurnIcon {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.maneuver.ManeuverTurnIcon>;
              public component3(): boolean;
              public component1(): java.lang.Float;
              public component2(): string;
              public copy(param0: java.lang.Float, param1: string, param2: boolean, param3: java.lang.Integer): com.mapbox.navigation.base.internal.maneuver.ManeuverTurnIcon;
              public hashCode(): number;
              public getShouldFlipIcon(): boolean;
              public toString(): string;
              public getDrivingSide(): string;
              public getIcon(): java.lang.Integer;
              public constructor(param0: java.lang.Float, param1: string, param2: boolean, param3: java.lang.Integer);
              public component4(): java.lang.Integer;
              public getDegree(): java.lang.Float;
              public equals(param0: any): boolean;
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
      export module base {
        export module internal {
          export module maneuver {
            export class ManeuverTypeModifierPair {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.maneuver.ManeuverTypeModifierPair>;
              public component2(): string;
              public copy(param0: string, param1: string): com.mapbox.navigation.base.internal.maneuver.ManeuverTypeModifierPair;
              public hashCode(): number;
              public constructor(param0: string, param1: string);
              public toString(): string;
              public getModifier(): string;
              public equals(param0: any): boolean;
              public getType(): string;
              public component1(): string;
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
      export module base {
        export module internal {
          export module maneuver {
            export class TurnIconHelper {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.maneuver.TurnIconHelper>;
              public retrieveTurnIcon(param0: string, param1: java.lang.Float, param2: string, param3: string): com.mapbox.navigation.base.internal.maneuver.ManeuverTurnIcon;
              public constructor(param0: com.mapbox.navigation.base.maneuver.model.BaseTurnIconResources);
            }
            export module TurnIconHelper {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.maneuver.TurnIconHelper.Companion>;
              }
              export class IconSpec {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.maneuver.TurnIconHelper.IconSpec>;
                public toString(): string;
                public component1(): number;
                public component2(): boolean;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: boolean);
                public copy(param0: number, param1: boolean): com.mapbox.navigation.base.internal.maneuver.TurnIconHelper.IconSpec;
                public getIcon(): number;
                public getDrivingSideFlippable(): boolean;
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
      export module base {
        export module internal {
          export module metric {
            export class MetricEventInternal extends com.mapbox.navigation.base.metrics.MetricEvent {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.metric.MetricEventInternal>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.internal.metric.MetricEventInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { toValue(): com.mapbox.bindgen.Value; getMetricName(): string; toJson(param0: com.google.gson.Gson): string });
              public constructor();
              public toJson(param0: com.google.gson.Gson): string;
              public toValue(): com.mapbox.bindgen.Value;
              public getMetricName(): string;
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
      export module base {
        export module internal {
          export module route {
            export class AnnotationsRefresher {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.AnnotationsRefresher>;
              public static INSTANCE: com.mapbox.navigation.base.internal.route.AnnotationsRefresher;
              public getRefreshedAnnotations(param0: com.mapbox.api.directions.v5.models.LegAnnotation, param1: com.mapbox.api.directions.v5.models.LegAnnotation, param2: number): com.mapbox.api.directions.v5.models.LegAnnotation;
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
      export module base {
        export module internal {
          export module route {
            export class InternalRouter {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.InternalRouter>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.internal.route.InternalRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module navigation {
      export module base {
        export module internal {
          export module route {
            export class LegWaypointFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.LegWaypointFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.route.LegWaypointFactory;
              public createLegWaypoint(param0: com.mapbox.geojson.Point, param1: string, param2: com.mapbox.geojson.Point, param3: string, param4: java.util.Map<string, any>): com.mapbox.navigation.base.route.LegWaypoint;
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
      export module base {
        export module internal {
          export module route {
            export class NavigationRouteEx {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.NavigationRouteEx>;
              public static toTestNavigationRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: com.mapbox.navigation.base.route.RouterOrigin, param2: com.mapbox.navigation.base.internal.SDKRouteParser): com.mapbox.navigation.base.route.NavigationRoute;
              public static nativeRoute(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigator.RouteInterface;
              public static refreshNativePeer(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.base.route.NavigationRoute;
              public static toNavigationRoute(param0: com.mapbox.navigator.RouteInterface): com.mapbox.navigation.base.route.NavigationRoute;
              public static refreshRoute(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: java.lang.Integer, param3: java.util.List<any>, param4: java.util.List<any>, param5: java.util.List<any>, param6: java.util.List<any>): com.mapbox.navigation.base.route.NavigationRoute;
              public static createNavigationRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: com.mapbox.navigation.base.internal.SDKRouteParser): com.mapbox.navigation.base.route.NavigationRoute;
              public static toTestNavigationRoutes(param0: java.util.List<any>, param1: com.mapbox.navigation.base.route.RouterOrigin, param2: com.mapbox.navigation.base.internal.SDKRouteParser): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public static update(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: any, param2: any): com.mapbox.navigation.base.route.NavigationRoute;
              public static getRouterOrigin(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigator.RouterOrigin;
              public static createNavigationRoutes(param0: com.mapbox.api.directions.v5.models.DirectionsResponse, param1: com.mapbox.api.directions.v5.models.RouteOptions, param2: com.mapbox.navigation.base.internal.SDKRouteParser, param3: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
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
      export module base {
        export module internal {
          export module route {
            export class RouteCompatibilityCache {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.RouteCompatibilityCache>;
              public static INSTANCE: com.mapbox.navigation.base.internal.route.RouteCompatibilityCache;
              public cacheCreationResult(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
              public setDirectionsSessionResult(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
              public getFor(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.navigation.base.route.NavigationRoute;
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
      export module base {
        export module internal {
          export module route {
            export class Waypoint {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.Waypoint>;
              public static REGULAR: number;
              public static SILENT: number;
              public static EV_CHARGING_SERVER: number;
              public static EV_CHARGING_USER: number;
              public getType(): number;
              public hashCode(): number;
              public getLocation(): com.mapbox.geojson.Point;
              public getMetadata(): java.util.Map<string, com.google.gson.JsonElement>;
              public constructor(param0: com.mapbox.geojson.Point, param1: string, param2: com.mapbox.geojson.Point, param3: com.mapbox.navigation.base.internal.route.Waypoint.InternalType, param4: java.util.Map<string, any>);
              public getName(): string;
              public toString(): string;
              public getTarget(): com.mapbox.geojson.Point;
              public equals(param0: any): boolean;
              public getInternalType$libnavigation_base_release(): com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
            }
            export module Waypoint {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.Waypoint.Companion>;
              }
              export class InternalType {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.Waypoint.InternalType>;
                public static Regular: com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
                public static Silent: com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
                public static EvChargingServer: com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
                public static EvChargingUser: com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
                public static values(): androidNative.Array<com.mapbox.navigation.base.internal.route.Waypoint.InternalType>;
                public static valueOf(param0: string): com.mapbox.navigation.base.internal.route.Waypoint.InternalType;
              }
              export class Type {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.Waypoint.Type>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.base.internal.route.Waypoint$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.route.Waypoint.WhenMappings>;
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
      export module base {
        export module internal {
          export module time {
            export class TimeFormatter {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.time.TimeFormatter>;
              public static INSTANCE: com.mapbox.navigation.base.internal.time.TimeFormatter;
              public static formatTimeRemaining(param0: globalAndroid.content.Context, param1: number, param2: java.util.Locale): globalAndroid.text.SpannableStringBuilder;
              public static formatTime(param0: java.util.Calendar, param1: number, param2: boolean): string;
              public static formatTime(param0: java.util.Calendar, param1: number, param2: number, param3: boolean): string;
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
      export module base {
        export module internal {
          export module trip {
            export module model {
              export class RouteIndices {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.trip.model.RouteIndices>;
                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
                public toString(): string;
                public getLegIndex(): number;
                public getIntersectionIndex(): number;
                public equals(param0: any): boolean;
                public getLegGeometryIndex(): number;
                public getStepIndex(): number;
                public getRouteGeometryIndex(): number;
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
      export module base {
        export module internal {
          export module trip {
            export module notification {
              export class NotificationTurnIconResources extends com.mapbox.navigation.base.maneuver.model.BaseTurnIconResources {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources>;
                public getTurnIconDepart(): number;
                public getTurnIconNewNameSharpRight(): number;
                public getTurnIconOffRampLeft(): number;
                public getTurnIconOnRampSlightRight(): number;
                public getTurnIconRotaryRight(): number;
                public getTurnIconContinueSlightLeft(): number;
                public equals(param0: any): boolean;
                public getTurnIconRamp(): number;
                public getTurnIconArrive(): number;
                public getTurnIconContinueUturn(): number;
                public getTurnIconTurnSlightLeft(): number;
                public getTurnIconEndRoadRight(): number;
                public getTurnIconInvalidStraight(): number;
                public getTurnIconRoundaboutSharpLeft(): number;
                public getTurnIconOnRampSharpRight(): number;
                public getTurnIconContinueSlightRight(): number;
                public getTurnIconForkStraight(): number;
                public getTurnIconOffRampRight(): number;
                public getTurnIconRotarySharpRight(): number;
                public getTurnIconTurnSharpLeft(): number;
                public getTurnIconMergeSlightLeft(): number;
                public getTurnIconRoundaboutRight(): number;
                public getTurnIconForkSlightRight(): number;
                public getTurnIconTurnSharpRight(): number;
                public getTurnIconMergeStraight(): number;
                public getTurnIconTurnLeft(): number;
                public getTurnIconArriveStraight(): number;
                public getTurnIconNewNameStraight(): number;
                public getTurnIconOnRampRight(): number;
                public getTurnIconOnRamp(): number;
                public getTurnIconNotificationSlightRight(): number;
                public getTurnIconOnRampStraight(): number;
                public static defaultIconSet(): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources;
                public getTurnIconOnRampSharpLeft(): number;
                public getTurnIconNotificationSharpLeft(): number;
                public getTurnIconContinue(): number;
                public getTurnIconForkSlightLeft(): number;
                public getTurnIconForkLeft(): number;
                public getTurnIconOnRampSlightLeft(): number;
                public getTurnIconInvalidUturn(): number;
                public getTurnIconMergeLeft(): number;
                public getTurnIconUturn(): number;
                public getTurnIconMergeSlightRight(): number;
                public getTurnIconNotificationLeft(): number;
                public getTurnIconNotificationSlightLeft(): number;
                public getTurnIconNewNameSharpLeft(): number;
                public getTurnIconRotarySharpLeft(): number;
                public getTurnIconTurnStraight(): number;
                public getTurnIconRoundaboutLeft(): number;
                public getTurnIconArriveLeft(): number;
                public getTurnIconInvalidSlightRight(): number;
                public getTurnIconNewNameLeft(): number;
                public getTurnIconNotificationStraight(): number;
                public getTurnIconRoundaboutSlightLeft(): number;
                public getTurnIconInvalidRight(): number;
                public getTurnIconRotary(): number;
                public toString(): string;
                public getTurnIconOffRampSlightRight(): number;
                public getTurnIconContinueLeft(): number;
                public getTurnIconEndRoadLeft(): number;
                public getTurnIconRoundabout(): number;
                public getTurnIconContinueRight(): number;
                public getTurnIconRoundaboutSharpRight(): number;
                public getTurnIconOffRamp(): number;
                public getTurnIconRotaryLeft(): number;
                public getTurnIconRoundaboutSlightRight(): number;
                public getTurnIconDepartStraight(): number;
                public getTurnIconInvalid(): number;
                public getTurnIconNewNameSlightRight(): number;
                public getTurnIconInvalidLeft(): number;
                public getTurnIconDepartLeft(): number;
                public getTurnIconNewNameSlightLeft(): number;
                public getTurnIconNotificationRight(): number;
                public getTurnIconForkRight(): number;
                public getTurnIconTurnSlightRight(): number;
                public getTurnIconRotaryStraight(): number;
                public getTurnIconContinueStraight(): number;
                public getTurnIconMergeRight(): number;
                public getTurnIconOffRampSlightLeft(): number;
                public getTurnIconNewNameRight(): number;
                public getTurnIconFork(): number;
                public getTurnIconInvalidSlightLeft(): number;
                public getTurnIconArriveRight(): number;
                public getTurnIconOnRampLeft(): number;
                public getTurnIconDepartRight(): number;
                public getTurnIconRotarySlightLeft(): number;
                public toBuilder(): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                public getTurnIconNotificationSharpRight(): number;
                public getTurnIconTurnRight(): number;
                public getTurnIconRoundaboutStraight(): number;
                public getTurnIconRotarySlightRight(): number;
                public hashCode(): number;
              }
              export module NotificationTurnIconResources {
                export class Builder {
                  public static class: java.lang.Class<com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder>;
                  public turnIconArrive(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconForkLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconMergeSlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameSlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationSharpRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidSlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnSharpLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationSharpLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationSlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconArriveLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinue(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconEndRoadRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconDepartStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotarySharpRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconForkSlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotaryStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutSharpRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconMergeLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnSharpRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconDepartLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRamp(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRamp(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueSlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconDepart(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalid(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconEndRoadLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidUturn(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotaryRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOffRampLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutSlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutSlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidSlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconMergeRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotarySlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueSlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconUturn(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnSlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconArriveStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconFork(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameSlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotaryLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationSlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameSharpLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconForkStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotarySharpLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconMergeStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconForkRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampSharpLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOffRampSlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameSharpRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNotificationRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnSlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOffRamp(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampSlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public constructor();
                  public turnIconContinueUturn(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundabout(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOffRampRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutSharpLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconContinueLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconDepartRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconArriveRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotary(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconForkSlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconInvalidLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconTurnLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampSlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconMergeSlightRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconNewNameRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public build(): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources;
                  public turnIconOnRampStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRotarySlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconRoundaboutStraight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOffRampSlightLeft(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                  public turnIconOnRampSharpRight(param0: number): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Builder;
                }
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources.Companion>;
                  public defaultIconSet(): com.mapbox.navigation.base.internal.trip.notification.NotificationTurnIconResources;
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
      export module base {
        export module internal {
          export module trip {
            export module notification {
              export class TripNotificationInterceptorOwner {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.trip.notification.TripNotificationInterceptorOwner>;
                public getInterceptor(): com.mapbox.navigation.base.trip.notification.TripNotificationInterceptor;
                public setInterceptor(param0: com.mapbox.navigation.base.trip.notification.TripNotificationInterceptor): void;
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
      export module base {
        export module internal {
          export module utils {
            export class Constants {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.Constants>;
              public constructor();
            }
            export module Constants {
              export class RouteResponse {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.Constants.RouteResponse>;
                public static INSTANCE: com.mapbox.navigation.base.internal.utils.Constants.RouteResponse;
                public static KEY_WAYPOINTS: string;
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
      export module base {
        export module internal {
          export module utils {
            export class DirectionsRouteEx {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.DirectionsRouteEx>;
              public static isSameRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: com.mapbox.api.directions.v5.models.DirectionsRoute): boolean;
              public static mapToSdk(param0: java.util.List<any>): java.util.List<com.mapbox.navigation.base.internal.route.Waypoint>;
            }
            export module DirectionsRouteEx {
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.DirectionsRouteEx.WhenMappings>;
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
      export module base {
        export module internal {
          export module utils {
            export class DirectionsRouteMissingConditionsCheck {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.DirectionsRouteMissingConditionsCheck>;
              public static INSTANCE: com.mapbox.navigation.base.internal.utils.DirectionsRouteMissingConditionsCheck;
              public getERROR_MESSAGE_TEMPLATE$libnavigation_base_release(): string;
              public checkDirectionsRoute$libnavigation_base_release(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): void;
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
      export module base {
        export module internal {
          export module utils {
            export class QueriesProvider {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.QueriesProvider>;
              public static INSTANCE: com.mapbox.navigation.base.internal.utils.QueriesProvider;
              public getExclusiveQueries$libnavigation_base_release(): java.util.Map<string, string>;
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
      export module base {
        export module internal {
          export module utils {
            export module RouterExKt {
              export module WhenMappings {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.RouterExKt.WhenMappings>;
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
      export module base {
        export module internal {
          export module utils {
            export class WaypointFactory {
              public static class: java.lang.Class<com.mapbox.navigation.base.internal.utils.WaypointFactory>;
              public static INSTANCE: com.mapbox.navigation.base.internal.utils.WaypointFactory;
              public provideWaypoint(param0: com.mapbox.geojson.Point, param1: string, param2: com.mapbox.geojson.Point, param3: number, param4: java.util.Map<string, any>): com.mapbox.navigation.base.internal.route.Waypoint;
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
      export module base {
        export module maneuver {
          export module model {
            export class BaseTurnIconResources {
              public static class: java.lang.Class<com.mapbox.navigation.base.maneuver.model.BaseTurnIconResources>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.maneuver.model.BaseTurnIconResources interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getTurnIconArrive(): number;
                getTurnIconArriveLeft(): number;
                getTurnIconArriveRight(): number;
                getTurnIconArriveStraight(): number;
                getTurnIconContinue(): number;
                getTurnIconContinueLeft(): number;
                getTurnIconContinueRight(): number;
                getTurnIconContinueStraight(): number;
                getTurnIconContinueUturn(): number;
                getTurnIconContinueSlightLeft(): number;
                getTurnIconContinueSlightRight(): number;
                getTurnIconDepart(): number;
                getTurnIconDepartLeft(): number;
                getTurnIconDepartRight(): number;
                getTurnIconDepartStraight(): number;
                getTurnIconEndRoadLeft(): number;
                getTurnIconEndRoadRight(): number;
                getTurnIconFork(): number;
                getTurnIconForkLeft(): number;
                getTurnIconForkRight(): number;
                getTurnIconForkStraight(): number;
                getTurnIconForkSlightLeft(): number;
                getTurnIconForkSlightRight(): number;
                getTurnIconInvalid(): number;
                getTurnIconInvalidLeft(): number;
                getTurnIconInvalidRight(): number;
                getTurnIconInvalidStraight(): number;
                getTurnIconInvalidSlightLeft(): number;
                getTurnIconInvalidSlightRight(): number;
                getTurnIconInvalidUturn(): number;
                getTurnIconMergeLeft(): number;
                getTurnIconMergeRight(): number;
                getTurnIconMergeStraight(): number;
                getTurnIconMergeSlightLeft(): number;
                getTurnIconMergeSlightRight(): number;
                getTurnIconNewNameLeft(): number;
                getTurnIconNewNameRight(): number;
                getTurnIconNewNameStraight(): number;
                getTurnIconNewNameSharpLeft(): number;
                getTurnIconNewNameSharpRight(): number;
                getTurnIconNewNameSlightLeft(): number;
                getTurnIconNewNameSlightRight(): number;
                getTurnIconNotificationLeft(): number;
                getTurnIconNotificationRight(): number;
                getTurnIconNotificationStraight(): number;
                getTurnIconNotificationSharpLeft(): number;
                getTurnIconNotificationSharpRight(): number;
                getTurnIconNotificationSlightLeft(): number;
                getTurnIconNotificationSlightRight(): number;
                getTurnIconOffRamp(): number;
                getTurnIconOffRampLeft(): number;
                getTurnIconOffRampRight(): number;
                getTurnIconOffRampSlightLeft(): number;
                getTurnIconOffRampSlightRight(): number;
                getTurnIconOnRamp(): number;
                getTurnIconOnRampLeft(): number;
                getTurnIconOnRampRight(): number;
                getTurnIconOnRampStraight(): number;
                getTurnIconOnRampSlightLeft(): number;
                getTurnIconOnRampSlightRight(): number;
                getTurnIconOnRampSharpLeft(): number;
                getTurnIconOnRampSharpRight(): number;
                getTurnIconRamp(): number;
                getTurnIconRotary(): number;
                getTurnIconRotaryLeft(): number;
                getTurnIconRotaryRight(): number;
                getTurnIconRotaryStraight(): number;
                getTurnIconRotarySlightLeft(): number;
                getTurnIconRotarySlightRight(): number;
                getTurnIconRotarySharpLeft(): number;
                getTurnIconRotarySharpRight(): number;
                getTurnIconRoundabout(): number;
                getTurnIconRoundaboutLeft(): number;
                getTurnIconRoundaboutRight(): number;
                getTurnIconRoundaboutStraight(): number;
                getTurnIconRoundaboutSlightLeft(): number;
                getTurnIconRoundaboutSlightRight(): number;
                getTurnIconRoundaboutSharpLeft(): number;
                getTurnIconRoundaboutSharpRight(): number;
                getTurnIconTurnLeft(): number;
                getTurnIconTurnRight(): number;
                getTurnIconTurnStraight(): number;
                getTurnIconTurnSlightLeft(): number;
                getTurnIconTurnSlightRight(): number;
                getTurnIconTurnSharpLeft(): number;
                getTurnIconTurnSharpRight(): number;
                getTurnIconUturn(): number;
              });
              public constructor();
              public getTurnIconRoundaboutLeft(): number;
              public getTurnIconContinueSlightRight(): number;
              public getTurnIconNewNameSlightLeft(): number;
              public getTurnIconTurnSharpRight(): number;
              public getTurnIconArriveStraight(): number;
              public getTurnIconArriveRight(): number;
              public getTurnIconDepart(): number;
              public getTurnIconRamp(): number;
              public getTurnIconFork(): number;
              public getTurnIconRoundaboutSlightRight(): number;
              public getTurnIconContinueLeft(): number;
              public getTurnIconNotificationSharpRight(): number;
              public getTurnIconTurnStraight(): number;
              public getTurnIconNotificationLeft(): number;
              public getTurnIconMergeSlightRight(): number;
              public getTurnIconArrive(): number;
              public getTurnIconForkStraight(): number;
              public getTurnIconNewNameSlightRight(): number;
              public getTurnIconOnRampSharpLeft(): number;
              public getTurnIconNewNameSharpRight(): number;
              public getTurnIconOffRampRight(): number;
              public getTurnIconNewNameLeft(): number;
              public getTurnIconRoundaboutSharpRight(): number;
              public getTurnIconTurnRight(): number;
              public getTurnIconNotificationSlightRight(): number;
              public getTurnIconMergeStraight(): number;
              public getTurnIconOnRampRight(): number;
              public getTurnIconEndRoadLeft(): number;
              public getTurnIconInvalidRight(): number;
              public getTurnIconRotarySharpLeft(): number;
              public getTurnIconRoundaboutStraight(): number;
              public getTurnIconRotaryStraight(): number;
              public getTurnIconRotarySharpRight(): number;
              public getTurnIconInvalidUturn(): number;
              public getTurnIconForkRight(): number;
              public getTurnIconForkSlightLeft(): number;
              public getTurnIconForkSlightRight(): number;
              public getTurnIconRotary(): number;
              public getTurnIconDepartStraight(): number;
              public getTurnIconOffRamp(): number;
              public getTurnIconOnRampSlightLeft(): number;
              public getTurnIconOnRampStraight(): number;
              public getTurnIconEndRoadRight(): number;
              public getTurnIconNotificationRight(): number;
              public getTurnIconDepartRight(): number;
              public getTurnIconRotaryRight(): number;
              public getTurnIconRotarySlightLeft(): number;
              public getTurnIconRoundaboutRight(): number;
              public getTurnIconTurnSharpLeft(): number;
              public getTurnIconForkLeft(): number;
              public getTurnIconArriveLeft(): number;
              public getTurnIconRotaryLeft(): number;
              public getTurnIconContinueUturn(): number;
              public getTurnIconNotificationSharpLeft(): number;
              public getTurnIconInvalidStraight(): number;
              public getTurnIconUturn(): number;
              public getTurnIconRoundabout(): number;
              public getTurnIconNewNameSharpLeft(): number;
              public getTurnIconTurnLeft(): number;
              public getTurnIconTurnSlightRight(): number;
              public getTurnIconContinueStraight(): number;
              public getTurnIconOnRampSlightRight(): number;
              public getTurnIconMergeRight(): number;
              public getTurnIconTurnSlightLeft(): number;
              public getTurnIconInvalidLeft(): number;
              public getTurnIconNewNameRight(): number;
              public getTurnIconMergeLeft(): number;
              public getTurnIconNotificationSlightLeft(): number;
              public getTurnIconOnRamp(): number;
              public getTurnIconNewNameStraight(): number;
              public getTurnIconRotarySlightRight(): number;
              public getTurnIconMergeSlightLeft(): number;
              public getTurnIconRoundaboutSharpLeft(): number;
              public getTurnIconContinueSlightLeft(): number;
              public getTurnIconInvalidSlightLeft(): number;
              public getTurnIconOffRampSlightRight(): number;
              public getTurnIconNotificationStraight(): number;
              public getTurnIconInvalid(): number;
              public getTurnIconOnRampLeft(): number;
              public getTurnIconInvalidSlightRight(): number;
              public getTurnIconOffRampSlightLeft(): number;
              public getTurnIconContinue(): number;
              public getTurnIconRoundaboutSlightLeft(): number;
              public getTurnIconContinueRight(): number;
              public getTurnIconOnRampSharpRight(): number;
              public getTurnIconOffRampLeft(): number;
              public getTurnIconDepartLeft(): number;
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
      export module base {
        export module metrics {
          export class DirectionsMetrics {
            public static class: java.lang.Class<com.mapbox.navigation.base.metrics.DirectionsMetrics>;
            public static INSTANCE: com.mapbox.navigation.base.metrics.DirectionsMetrics;
            public static ROUTE_RETRIEVAL: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module metrics {
          export class MetricEvent {
            public static class: java.lang.Class<com.mapbox.navigation.base.metrics.MetricEvent>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.metrics.MetricEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getMetricName(): string; toJson(param0: com.google.gson.Gson): string });
            public constructor();
            public toJson(param0: com.google.gson.Gson): string;
            public getMetricName(): string;
          }
          export module MetricEvent {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.navigation.base.metrics.MetricEvent.DefaultImpls>;
            }
            export class Metric {
              public static class: java.lang.Class<com.mapbox.navigation.base.metrics.MetricEvent.Metric>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.metrics.MetricEvent$Metric interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module navigation {
      export module base {
        export module metrics {
          export class MetricsObserver {
            public static class: java.lang.Class<com.mapbox.navigation.base.metrics.MetricsObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.metrics.MetricsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onMetricUpdated(param0: string, param1: string): void });
            public constructor();
            public onMetricUpdated(param0: string, param1: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module metrics {
          export class MetricsReporter {
            public static class: java.lang.Class<com.mapbox.navigation.base.metrics.MetricsReporter>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.metrics.MetricsReporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { addEvent(param0: com.mapbox.navigation.base.metrics.MetricEvent): void; sendTurnstileEvent(param0: com.mapbox.common.TurnstileEvent): void; setMetricsObserver(param0: com.mapbox.navigation.base.metrics.MetricsObserver): void; removeObserver(): void });
            public constructor();
            public addEvent(param0: com.mapbox.navigation.base.metrics.MetricEvent): void;
            public sendTurnstileEvent(param0: com.mapbox.common.TurnstileEvent): void;
            public removeObserver(): void;
            public setMetricsObserver(param0: com.mapbox.navigation.base.metrics.MetricsObserver): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module metrics {
          export class NavigationMetrics {
            public static class: java.lang.Class<com.mapbox.navigation.base.metrics.NavigationMetrics>;
            public static INSTANCE: com.mapbox.navigation.base.metrics.NavigationMetrics;
            public static ARRIVE: string;
            public static CANCEL_SESSION: string;
            public static DEPART: string;
            public static REROUTE: string;
            public static FEEDBACK: string;
            public static INITIAL_GPS: string;
            public static FASTER_ROUTE: string;
            public static APP_USER_TURNSTILE: string;
            public static FREE_DRIVE: string;
            public static CUSTOM_EVENT: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module options {
          export class AlertServiceOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.AlertServiceOptions>;
            public getCollectRestrictedAreas(): boolean;
            public toBuilder(): com.mapbox.navigation.base.options.AlertServiceOptions.Builder;
            public getCollectTunnels(): boolean;
            public getCollectBridges(): boolean;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toString(): string;
          }
          export module AlertServiceOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.AlertServiceOptions.Builder>;
              public constructor();
              public build(): com.mapbox.navigation.base.options.AlertServiceOptions;
              public collectBridges(param0: boolean): com.mapbox.navigation.base.options.AlertServiceOptions.Builder;
              public collectTunnels(param0: boolean): com.mapbox.navigation.base.options.AlertServiceOptions.Builder;
              public collectRestrictedAreas(param0: boolean): com.mapbox.navigation.base.options.AlertServiceOptions.Builder;
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
      export module base {
        export module options {
          export class CopilotOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.CopilotOptions>;
            public getMaxHistoryFileLengthMillis(): number;
            public getMaxHistoryFilesPerSession(): number;
            public getShouldSendHistoryOnlyWithFeedback(): boolean;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getMaxTotalHistoryFilesSizePerSession(): number;
            public getShouldRecordFreeDriveHistories(): boolean;
            public toBuilder(): com.mapbox.navigation.base.options.CopilotOptions.Builder;
            public toString(): string;
          }
          export module CopilotOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.CopilotOptions.Builder>;
              public constructor();
              public maxHistoryFileLengthMillis(param0: number): com.mapbox.navigation.base.options.CopilotOptions.Builder;
              public shouldRecordFreeDriveHistories(param0: boolean): com.mapbox.navigation.base.options.CopilotOptions.Builder;
              public maxTotalHistoryFilesSizePerSession(param0: number): com.mapbox.navigation.base.options.CopilotOptions.Builder;
              public shouldSendHistoryOnlyWithFeedback(param0: boolean): com.mapbox.navigation.base.options.CopilotOptions.Builder;
              public maxHistoryFilesPerSession(param0: number): com.mapbox.navigation.base.options.CopilotOptions.Builder;
              public build(): com.mapbox.navigation.base.options.CopilotOptions;
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
      export module base {
        export module options {
          export class DeviceProfile {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.DeviceProfile>;
            public getCustomConfig(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getDeviceType(): com.mapbox.navigation.base.options.DeviceType;
            public toString(): string;
            public toBuilder(): com.mapbox.navigation.base.options.DeviceProfile.Builder;
          }
          export module DeviceProfile {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.DeviceProfile.Builder>;
              public constructor();
              public build(): com.mapbox.navigation.base.options.DeviceProfile;
              public deviceType(param0: com.mapbox.navigation.base.options.DeviceType): com.mapbox.navigation.base.options.DeviceProfile.Builder;
              public customConfig(param0: string): com.mapbox.navigation.base.options.DeviceProfile.Builder;
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
      export module base {
        export module options {
          export class DeviceType {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.DeviceType>;
            public static HANDHELD: com.mapbox.navigation.base.options.DeviceType;
            public static AUTOMOBILE: com.mapbox.navigation.base.options.DeviceType;
            public static valueOf(param0: string): com.mapbox.navigation.base.options.DeviceType;
            public static values(): androidNative.Array<com.mapbox.navigation.base.options.DeviceType>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module options {
          export class EHorizonOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.EHorizonOptions>;
            public getExpansion(): number;
            public toBuilder(): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getLength(): number;
            public getAlertServiceOptions(): com.mapbox.navigation.base.options.AlertServiceOptions;
            public getBranchLength(): number;
            public getMinTimeDeltaBetweenUpdates(): java.lang.Double;
            public toString(): string;
          }
          export module EHorizonOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.EHorizonOptions.Builder>;
              public constructor();
              public minTimeDeltaBetweenUpdates(param0: java.lang.Double): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
              public length(param0: number): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
              public expansion(param0: number): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
              public build(): com.mapbox.navigation.base.options.EHorizonOptions;
              public branchLength(param0: number): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
              public alertServiceOptions(param0: com.mapbox.navigation.base.options.AlertServiceOptions): com.mapbox.navigation.base.options.EHorizonOptions.Builder;
            }
            export module Builder {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.base.options.EHorizonOptions.Builder.Companion>;
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
      export module base {
        export module options {
          export class EventsAppMetadata {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.EventsAppMetadata>;
            public getUserId(): string;
            public getVersion(): string;
            public toBuilder(): com.mapbox.navigation.base.options.EventsAppMetadata.Builder;
            public getSessionId(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getName(): string;
            public toString(): string;
          }
          export module EventsAppMetadata {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.EventsAppMetadata.Builder>;
              public userId(param0: string): com.mapbox.navigation.base.options.EventsAppMetadata.Builder;
              public sessionId(param0: string): com.mapbox.navigation.base.options.EventsAppMetadata.Builder;
              public constructor(param0: string, param1: string);
              public build(): com.mapbox.navigation.base.options.EventsAppMetadata;
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
      export module base {
        export module options {
          export class HistoryRecorderOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.HistoryRecorderOptions>;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toBuilder(): com.mapbox.navigation.base.options.HistoryRecorderOptions.Builder;
            public getFileDirectory(): string;
            public toString(): string;
          }
          export module HistoryRecorderOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.HistoryRecorderOptions.Builder>;
              public constructor();
              public build(): com.mapbox.navigation.base.options.HistoryRecorderOptions;
              public fileDirectory(param0: string): com.mapbox.navigation.base.options.HistoryRecorderOptions.Builder;
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
      export module base {
        export module options {
          export class IncidentsOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.IncidentsOptions>;
            public getApiUrl(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getGraph(): string;
            public toBuilder(): com.mapbox.navigation.base.options.IncidentsOptions.Builder;
            public toString(): string;
          }
          export module IncidentsOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.IncidentsOptions.Builder>;
              public constructor();
              public apiUrl(param0: string): com.mapbox.navigation.base.options.IncidentsOptions.Builder;
              public build(): com.mapbox.navigation.base.options.IncidentsOptions;
              public graph(param0: string): com.mapbox.navigation.base.options.IncidentsOptions.Builder;
            }
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.IncidentsOptions.Companion>;
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
      export module base {
        export module options {
          export class NavigationOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.NavigationOptions>;
            public toBuilder(): com.mapbox.navigation.base.options.NavigationOptions.Builder;
            public getRerouteOptions(): com.mapbox.navigation.base.options.RerouteOptions;
            public getHistoryRecorderOptions(): com.mapbox.navigation.base.options.HistoryRecorderOptions;
            public getTimeFormatType(): number;
            public getRoutingTilesOptions(): com.mapbox.navigation.base.options.RoutingTilesOptions;
            public getEHorizonOptions(): com.mapbox.navigation.base.options.EHorizonOptions;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getRouteRefreshOptions(): com.mapbox.navigation.base.route.RouteRefreshOptions;
            public getEnableSensors(): boolean;
            public getCopilotOptions(): com.mapbox.navigation.base.options.CopilotOptions;
            public isDebugLoggingEnabled(): boolean;
            public getIncidentsOptions(): com.mapbox.navigation.base.options.IncidentsOptions;
            public getAccessToken(): string;
            public toString(): string;
            public getEventsAppMetadata(): com.mapbox.navigation.base.options.EventsAppMetadata;
            public getLocationEngineRequest(): com.mapbox.android.core.location.LocationEngineRequest;
            public getDeviceProfile(): com.mapbox.navigation.base.options.DeviceProfile;
            public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
            public getLocationEngine(): com.mapbox.android.core.location.LocationEngine;
            public getNavigatorPredictionMillis(): number;
            public getApplicationContext(): globalAndroid.content.Context;
            public getRouteAlternativesOptions(): com.mapbox.navigation.base.route.RouteAlternativesOptions;
          }
          export module NavigationOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.NavigationOptions.Builder>;
              public build(): com.mapbox.navigation.base.options.NavigationOptions;
              public accessToken(param0: string): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public locationEngineRequest(param0: com.mapbox.android.core.location.LocationEngineRequest): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public isDebugLoggingEnabled(param0: boolean): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public deviceProfile(param0: com.mapbox.navigation.base.options.DeviceProfile): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public routeRefreshOptions(param0: com.mapbox.navigation.base.route.RouteRefreshOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public historyRecorderOptions(param0: com.mapbox.navigation.base.options.HistoryRecorderOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public routingTilesOptions(param0: com.mapbox.navigation.base.options.RoutingTilesOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public incidentsOptions(param0: com.mapbox.navigation.base.options.IncidentsOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public timeFormatType(param0: number): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public locationEngine(param0: com.mapbox.android.core.location.LocationEngine): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public eHorizonOptions(param0: com.mapbox.navigation.base.options.EHorizonOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public eventsAppMetadata(param0: com.mapbox.navigation.base.options.EventsAppMetadata): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public copilotOptions(param0: com.mapbox.navigation.base.options.CopilotOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public routeAlternativesOptions(param0: com.mapbox.navigation.base.route.RouteAlternativesOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public enableSensors(param0: boolean): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public rerouteOptions(param0: com.mapbox.navigation.base.options.RerouteOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public navigatorPredictionMillis(param0: number): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public distanceFormatterOptions(param0: com.mapbox.navigation.base.formatter.DistanceFormatterOptions): com.mapbox.navigation.base.options.NavigationOptions.Builder;
              public constructor(param0: globalAndroid.content.Context);
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
      export module base {
        export module options {
          export class PredictiveCacheLocationOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheLocationOptions>;
            public getRouteBufferRadiusInMeters(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toBuilder(): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions.Builder;
            public getCurrentLocationRadiusInMeters(): number;
            public getDestinationLocationRadiusInMeters(): number;
            public toString(): string;
          }
          export module PredictiveCacheLocationOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheLocationOptions.Builder>;
              public constructor();
              public routeBufferRadiusInMeters(param0: number): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions.Builder;
              public destinationLocationRadiusInMeters(param0: number): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions.Builder;
              public build(): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions;
              public currentLocationRadiusInMeters(param0: number): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions.Builder;
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
      export module base {
        export module options {
          export class PredictiveCacheMapsOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheMapsOptions>;
            public getMaxZoom(): number;
            public toBuilder(): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions.Builder;
            public getMinZoom(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getPredictiveCacheLocationOptions(): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions;
            public toString(): string;
          }
          export module PredictiveCacheMapsOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheMapsOptions.Builder>;
              public constructor();
              public predictiveCacheLocationOptions(param0: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions.Builder;
              public minZoom(param0: number): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions.Builder;
              public maxZoom(param0: number): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions.Builder;
              public build(): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions;
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
      export module base {
        export module options {
          export class PredictiveCacheNavigationOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions>;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getPredictiveCacheLocationOptions(): com.mapbox.navigation.base.options.PredictiveCacheLocationOptions;
            public toBuilder(): com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions.Builder;
            public toString(): string;
          }
          export module PredictiveCacheNavigationOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions.Builder>;
              public constructor();
              public predictiveCacheLocationOptions(param0: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions): com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions.Builder;
              public build(): com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions;
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
      export module base {
        export module options {
          export class PredictiveCacheOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheOptions>;
            /** @deprecated */
            public getPredictiveCacheMapsOptions(): com.mapbox.navigation.base.options.PredictiveCacheMapsOptions;
            public getPredictiveCacheNavigationOptions(): com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions;
            public getPredictiveCacheMapsOptionsList(): java.util.List<com.mapbox.navigation.base.options.PredictiveCacheMapsOptions>;
            public toBuilder(): com.mapbox.navigation.base.options.PredictiveCacheOptions.Builder;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toString(): string;
          }
          export module PredictiveCacheOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.PredictiveCacheOptions.Builder>;
              public constructor();
              /** @deprecated */
              public predictiveCacheMapsOptions(param0: com.mapbox.navigation.base.options.PredictiveCacheMapsOptions): com.mapbox.navigation.base.options.PredictiveCacheOptions.Builder;
              public build(): com.mapbox.navigation.base.options.PredictiveCacheOptions;
              public predictiveCacheNavigationOptions(param0: com.mapbox.navigation.base.options.PredictiveCacheNavigationOptions): com.mapbox.navigation.base.options.PredictiveCacheOptions.Builder;
              public predictiveCacheMapsOptionsList(param0: java.util.List<com.mapbox.navigation.base.options.PredictiveCacheMapsOptions>): com.mapbox.navigation.base.options.PredictiveCacheOptions.Builder;
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
      export module base {
        export module options {
          export class RerouteOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.RerouteOptions>;
            public getAvoidManeuverSeconds(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toBuilder(): com.mapbox.navigation.base.options.RerouteOptions.Builder;
            public toString(): string;
          }
          export module RerouteOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.RerouteOptions.Builder>;
              public constructor();
              public avoidManeuverSeconds(param0: number): com.mapbox.navigation.base.options.RerouteOptions.Builder;
              public build(): com.mapbox.navigation.base.options.RerouteOptions;
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
      export module base {
        export module options {
          export class RoutingTilesOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.options.RoutingTilesOptions>;
            public getTilesVersion(): string;
            public getTilesDataset(): string;
            public toBuilder(): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
            public getTilesProfile(): string;
            public getFilePath(): string;
            public getMinDaysBetweenServerAndLocalTilesVersion(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getTileStore(): com.mapbox.common.TileStore;
            public getTilesBaseUri(): java.net.URI;
            public toString(): string;
          }
          export module RoutingTilesOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.options.RoutingTilesOptions.Builder>;
              public constructor();
              public tilesDataset(param0: string): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public filePath(param0: string): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public tileStore(param0: com.mapbox.common.TileStore): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public tilesProfile(param0: string): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public tilesVersion(param0: string): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public minDaysBetweenServerAndLocalTilesVersion(param0: number): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
              public build(): com.mapbox.navigation.base.options.RoutingTilesOptions;
              public tilesBaseUri(param0: java.net.URI): com.mapbox.navigation.base.options.RoutingTilesOptions.Builder;
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
      export module base {
        export module road {
          export module model {
            export class Road {
              public static class: java.lang.Class<com.mapbox.navigation.base.road.model.Road>;
              /** @deprecated */
              public getName(): string;
              public hashCode(): number;
              /** @deprecated */
              public getShieldUrl(): string;
              public constructor(param0: java.util.List<com.mapbox.navigation.base.road.model.RoadComponent>, param1: string, param2: string, param3: string);
              public toString(): string;
              public getComponents(): java.util.List<com.mapbox.navigation.base.road.model.RoadComponent>;
              public equals(param0: any): boolean;
              /** @deprecated */
              public getShieldName(): string;
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
      export module base {
        export module road {
          export module model {
            export class RoadComponent {
              public static class: java.lang.Class<com.mapbox.navigation.base.road.model.RoadComponent>;
              public constructor(param0: string, param1: string, param2: com.mapbox.api.directions.v5.models.MapboxShield, param3: string);
              public getText(): string;
              public getImageBaseUrl(): string;
              public getLanguage(): string;
              public getShield(): com.mapbox.api.directions.v5.models.MapboxShield;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
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
      export module base {
        export module route {
          export class ByteBufferBackedInputStream {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.ByteBufferBackedInputStream>;
            public read(): number;
            public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
            public constructor(param0: java.nio.ByteBuffer);
            public available(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class ExclusionViolation {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.ExclusionViolation>;
            public getType(): string;
            public getLeg(): com.mapbox.api.directions.v5.models.RouteLeg;
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getIntersectionIndex(): number;
            public getStep(): com.mapbox.api.directions.v5.models.LegStep;
            public component6(): com.mapbox.api.directions.v5.models.LegStep;
            public getStepIndex(): number;
            public toString(): string;
            public component8(): com.mapbox.api.directions.v5.models.StepIntersection;
            public component4(): com.mapbox.api.directions.v5.models.RouteLeg;
            public copy(param0: string, param1: com.mapbox.api.directions.v5.models.DirectionsRoute, param2: number, param3: com.mapbox.api.directions.v5.models.RouteLeg, param4: number, param5: com.mapbox.api.directions.v5.models.LegStep, param6: number, param7: com.mapbox.api.directions.v5.models.StepIntersection): com.mapbox.navigation.base.route.ExclusionViolation;
            public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
            public getLegIndex(): number;
            public component2(): com.mapbox.api.directions.v5.models.DirectionsRoute;
            public constructor(param0: string, param1: com.mapbox.api.directions.v5.models.DirectionsRoute, param2: number, param3: com.mapbox.api.directions.v5.models.RouteLeg, param4: number, param5: com.mapbox.api.directions.v5.models.LegStep, param6: number, param7: com.mapbox.api.directions.v5.models.StepIntersection);
            public component7(): number;
            public getIntersection(): com.mapbox.api.directions.v5.models.StepIntersection;
            public component3(): number;
            public component5(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class LegWaypoint {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.LegWaypoint>;
            public static REGULAR: string;
            public static EV_CHARGING_ADDED: string;
            public static EV_CHARGING_USER_PROVIDED: string;
            public getLocation(): com.mapbox.geojson.Point;
            public getType(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getTarget(): com.mapbox.geojson.Point;
            public getMetadata(): java.util.Map<string, com.google.gson.JsonElement>;
            public getName(): string;
            public toString(): string;
            public constructor(param0: com.mapbox.geojson.Point, param1: string, param2: com.mapbox.geojson.Point, param3: string, param4: java.util.Map<string, any>);
          }
          export module LegWaypoint {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.LegWaypoint.Companion>;
            }
            export class Type {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.LegWaypoint.Type>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.route.LegWaypoint$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module navigation {
      export module base {
        export module route {
          export class NavigationRoute {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRoute>;
            public getWaypoints(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
            public constructor(param0: com.mapbox.api.directions.v5.models.DirectionsResponse, param1: number, param2: com.mapbox.api.directions.v5.models.RouteOptions, param3: com.mapbox.navigator.RouteInterface, param4: java.util.List<any>);
            public getUpcomingRoadObjects(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
            public getNativeWaypoints$libnavigation_base_release(): java.util.List<com.mapbox.navigation.base.internal.route.Waypoint>;
            public static create(param0: com.mapbox.api.directions.v5.models.DirectionsResponse, param1: com.mapbox.api.directions.v5.models.RouteOptions, param2: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
            public getNativeRoute$libnavigation_base_release(): com.mapbox.navigator.RouteInterface;
            public getDirectionsRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
            public toString(): string;
            public getDirectionsResponse(): com.mapbox.api.directions.v5.models.DirectionsResponse;
            /** @deprecated */
            public static create(param0: com.mapbox.api.directions.v5.models.DirectionsResponse, param1: com.mapbox.api.directions.v5.models.RouteOptions): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getRouteOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
            public getUnavoidableClosures$libnavigation_base_release(): java.util.List<java.util.List<com.mapbox.api.directions.v5.models.Closure>>;
            /** @deprecated */
            public static create(param0: string, param1: string): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public static create(param0: string, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getRouteIndex(): number;
            public getId(): string;
            public constructor(param0: com.mapbox.api.directions.v5.models.DirectionsResponse, param1: number, param2: com.mapbox.api.directions.v5.models.RouteOptions, param3: com.mapbox.navigator.RouteInterface);
            public copy$libnavigation_base_release(param0: com.mapbox.api.directions.v5.models.DirectionsResponse, param1: number, param2: com.mapbox.api.directions.v5.models.RouteOptions, param3: com.mapbox.navigator.RouteInterface): com.mapbox.navigation.base.route.NavigationRoute;
          }
          export module NavigationRoute {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRoute.Companion>;
              /** @deprecated */
              public create(param0: com.mapbox.api.directions.v5.models.DirectionsResponse, param1: com.mapbox.api.directions.v5.models.RouteOptions): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public create(param0: com.mapbox.api.directions.v5.models.DirectionsResponse, param1: com.mapbox.api.directions.v5.models.RouteOptions, param2: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              /** @deprecated */
              public create(param0: string, param1: string): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public createAsync$libnavigation_base_release(param0: com.mapbox.bindgen.DataRef, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin, param3: com.mapbox.navigation.base.internal.SDKRouteParser, param4: any): any;
              public create$libnavigation_base_release(param0: com.mapbox.api.directions.v5.models.DirectionsResponse, param1: com.mapbox.api.directions.v5.models.RouteOptions, param2: com.mapbox.navigation.base.internal.SDKRouteParser, param3: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public create(param0: string, param1: string, param2: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
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
      export module base {
        export module route {
          export class NavigationRouteEx {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRouteEx>;
            /** @deprecated */
            public static toNavigationRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.navigation.base.route.NavigationRoute;
            /** @deprecated */
            public static toNavigationRoutes(param0: java.util.List<any>): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public static toDirectionsRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
            public static toNavigationRoute(param0: com.mapbox.navigator.RouteInterface): com.mapbox.navigation.base.route.NavigationRoute;
            public static toNavigationRoutes(param0: java.util.List<any>, param1: com.mapbox.navigation.base.route.RouterOrigin): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public static toNavigationRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: com.mapbox.navigation.base.internal.SDKRouteParser, param2: com.mapbox.navigation.base.route.RouterOrigin, param3: boolean): com.mapbox.navigation.base.route.NavigationRoute;
            public static toNavigationRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.navigation.base.route.NavigationRoute;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class NavigationRouter extends com.mapbox.navigation.base.route.Router {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRouter>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.NavigationRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number; getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number; getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number; cancelRouteRequest(param0: number): void; cancelAll(): void; getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number; cancelRouteRefreshRequest(param0: number): void; shutdown(): void });
            public constructor();
            public cancelRouteRefreshRequest(param0: number): void;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
            public shutdown(): void;
            public cancelAll(): void;
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
            public cancelRouteRequest(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class NavigationRouterCallback {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRouterCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.NavigationRouterCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRoutesReady(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.base.route.RouterOrigin): void; onFailure(param0: java.util.List<com.mapbox.navigation.base.route.RouterFailure>, param1: com.mapbox.api.directions.v5.models.RouteOptions): void; onCanceled(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterOrigin): void });
            public constructor();
            public onFailure(param0: java.util.List<com.mapbox.navigation.base.route.RouterFailure>, param1: com.mapbox.api.directions.v5.models.RouteOptions): void;
            public onRoutesReady(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.base.route.RouterOrigin): void;
            public onCanceled(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterOrigin): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class NavigationRouterRefreshCallback {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRouterRefreshCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.NavigationRouterRefreshCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRefreshReady(param0: com.mapbox.navigation.base.route.NavigationRoute): void; onFailure(param0: com.mapbox.navigation.base.route.NavigationRouterRefreshError): void });
            public constructor();
            public onFailure(param0: com.mapbox.navigation.base.route.NavigationRouterRefreshError): void;
            public onRefreshReady(param0: com.mapbox.navigation.base.route.NavigationRoute): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class NavigationRouterRefreshError {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.NavigationRouterRefreshError>;
            public getMessage(): string;
            public constructor();
            public getRouterFailure(): com.mapbox.navigation.base.route.RouterFailure;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public constructor(param0: string, param1: java.lang.Throwable, param2: com.mapbox.navigation.base.route.RouterFailure);
            public getThrowable(): java.lang.Throwable;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouteAlternativesOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteAlternativesOptions>;
            public getIntervalMillis(): number;
            public getAvoidManeuverSeconds(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toBuilder(): com.mapbox.navigation.base.route.RouteAlternativesOptions.Builder;
            public toString(): string;
          }
          export module RouteAlternativesOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteAlternativesOptions.Builder>;
              public constructor();
              public avoidManeuverSeconds(param0: number): com.mapbox.navigation.base.route.RouteAlternativesOptions.Builder;
              public build(): com.mapbox.navigation.base.route.RouteAlternativesOptions;
              public intervalMillis(param0: number): com.mapbox.navigation.base.route.RouteAlternativesOptions.Builder;
            }
            export module Builder {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteAlternativesOptions.Builder.Companion>;
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
      export module base {
        export module route {
          export class RouteExclusions {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteExclusions>;
            public static exclusionViolations(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<com.mapbox.navigation.base.route.ExclusionViolation>;
            public static exclusionViolations(param0: com.mapbox.navigation.base.route.NavigationRoute): java.util.List<com.mapbox.navigation.base.route.ExclusionViolation>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouteRefreshCallback {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteRefreshCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.RouteRefreshCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): void; onError(param0: com.mapbox.navigation.base.route.RouteRefreshError): void });
            public constructor();
            public onRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): void;
            public onError(param0: com.mapbox.navigation.base.route.RouteRefreshError): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouteRefreshError {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteRefreshError>;
            public getMessage(): string;
            public constructor();
            public component2(): java.lang.Throwable;
            public component1(): string;
            public copy(param0: string, param1: java.lang.Throwable): com.mapbox.navigation.base.route.RouteRefreshError;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getThrowable(): java.lang.Throwable;
            public constructor(param0: string, param1: java.lang.Throwable);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouteRefreshOptions {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteRefreshOptions>;
            public getIntervalMillis(): number;
            public toBuilder(): com.mapbox.navigation.base.route.RouteRefreshOptions.Builder;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toString(): string;
          }
          export module RouteRefreshOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteRefreshOptions.Builder>;
              public constructor();
              public build(): com.mapbox.navigation.base.route.RouteRefreshOptions;
              public intervalMillis(param0: number): com.mapbox.navigation.base.route.RouteRefreshOptions.Builder;
            }
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouteRefreshOptions.Companion>;
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
      export module base {
        export module route {
          export class Router {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.Router>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.Router interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number; cancelRouteRequest(param0: number): void; cancelAll(): void; getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number; cancelRouteRefreshRequest(param0: number): void; shutdown(): void });
            public constructor();
            public cancelRouteRefreshRequest(param0: number): void;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
            public shutdown(): void;
            public cancelAll(): void;
            public getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
            public cancelRouteRequest(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouterCallback {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.route.RouterCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRoutesReady(param0: java.util.List<any>, param1: com.mapbox.navigation.base.route.RouterOrigin): void; onFailure(param0: java.util.List<com.mapbox.navigation.base.route.RouterFailure>, param1: com.mapbox.api.directions.v5.models.RouteOptions): void; onCanceled(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterOrigin): void });
            public constructor();
            public onFailure(param0: java.util.List<com.mapbox.navigation.base.route.RouterFailure>, param1: com.mapbox.api.directions.v5.models.RouteOptions): void;
            public onRoutesReady(param0: java.util.List<any>, param1: com.mapbox.navigation.base.route.RouterOrigin): void;
            public onCanceled(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterOrigin): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouterFactory {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterFactory>;
            public static INSTANCE: com.mapbox.navigation.base.route.RouterFactory;
            public buildNavigationRouterRefreshError(param0: string, param1: java.lang.Throwable): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
            public buildNavigationRouterRefreshError(): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
            public buildNavigationRouterRefreshError(param0: string, param1: java.lang.Throwable, param2: com.mapbox.navigation.base.route.RouterFailure): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
            public buildNavigationRouterRefreshError(param0: string): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export class RouterFailure {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterFailure>;
            public getMessage(): string;
            public component3(): string;
            public constructor(param0: java.net.URL, param1: com.mapbox.navigation.base.route.RouterOrigin, param2: string);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getRouterOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
            public getThrowable(): java.lang.Throwable;
            public component5(): java.lang.Throwable;
            public component1(): java.net.URL;
            public toString(): string;
            public component2(): com.mapbox.navigation.base.route.RouterOrigin;
            public component4(): java.lang.Integer;
            public constructor(param0: java.net.URL, param1: com.mapbox.navigation.base.route.RouterOrigin, param2: string, param3: java.lang.Integer);
            public getCode(): java.lang.Integer;
            public copy(param0: java.net.URL, param1: com.mapbox.navigation.base.route.RouterOrigin, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable): com.mapbox.navigation.base.route.RouterFailure;
            public constructor(param0: java.net.URL, param1: com.mapbox.navigation.base.route.RouterOrigin, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
            public getUrl(): java.net.URL;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module route {
          export abstract class RouterOrigin {
            public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterOrigin>;
          }
          export module RouterOrigin {
            export class Custom extends com.mapbox.navigation.base.route.RouterOrigin {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterOrigin.Custom>;
              /** @deprecated */
              public constructor(param0: any);
              public constructor();
              public hashCode(): number;
              public component1(): any;
              /** @deprecated */
              public getObj(): any;
              public copy(param0: any): com.mapbox.navigation.base.route.RouterOrigin.Custom;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export class Offboard extends com.mapbox.navigation.base.route.RouterOrigin {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterOrigin.Offboard>;
              public static INSTANCE: com.mapbox.navigation.base.route.RouterOrigin.Offboard;
            }
            export class Onboard extends com.mapbox.navigation.base.route.RouterOrigin {
              public static class: java.lang.Class<com.mapbox.navigation.base.route.RouterOrigin.Onboard>;
              public static INSTANCE: com.mapbox.navigation.base.route.RouterOrigin.Onboard;
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
      export module base {
        export module speed {
          export module model {
            export class SpeedLimit {
              public static class: java.lang.Class<com.mapbox.navigation.base.speed.model.SpeedLimit>;
              public constructor(param0: java.lang.Integer, param1: com.mapbox.navigation.base.speed.model.SpeedLimitUnit, param2: com.mapbox.navigation.base.speed.model.SpeedLimitSign);
              public hashCode(): number;
              public getSpeedLimitSign(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public getSpeedLimitUnit(): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public copy(param0: java.lang.Integer, param1: com.mapbox.navigation.base.speed.model.SpeedLimitUnit, param2: com.mapbox.navigation.base.speed.model.SpeedLimitSign): com.mapbox.navigation.base.speed.model.SpeedLimit;
              public toString(): string;
              public component1(): java.lang.Integer;
              public getSpeedKmph(): java.lang.Integer;
              public component3(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public equals(param0: any): boolean;
              public component2(): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
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
      export module base {
        export module speed {
          export module model {
            export class SpeedLimitInfo {
              public static class: java.lang.Class<com.mapbox.navigation.base.speed.model.SpeedLimitInfo>;
              public hashCode(): number;
              public constructor(param0: java.lang.Integer, param1: com.mapbox.navigation.base.speed.model.SpeedUnit, param2: com.mapbox.navigation.base.speed.model.SpeedLimitSign);
              public getUnit(): com.mapbox.navigation.base.speed.model.SpeedUnit;
              public toString(): string;
              public getSign(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public equals(param0: any): boolean;
              public getSpeed(): java.lang.Integer;
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
      export module base {
        export module speed {
          export module model {
            export class SpeedLimitSign {
              public static class: java.lang.Class<com.mapbox.navigation.base.speed.model.SpeedLimitSign>;
              public static MUTCD: com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public static VIENNA: com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public static values(): androidNative.Array<com.mapbox.navigation.base.speed.model.SpeedLimitSign>;
              public static valueOf(param0: string): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
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
      export module base {
        export module speed {
          export module model {
            export class SpeedLimitUnit {
              public static class: java.lang.Class<com.mapbox.navigation.base.speed.model.SpeedLimitUnit>;
              public static KILOMETRES_PER_HOUR: com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public static MILES_PER_HOUR: com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public static valueOf(param0: string): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public static values(): androidNative.Array<com.mapbox.navigation.base.speed.model.SpeedLimitUnit>;
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
      export module base {
        export module speed {
          export module model {
            export class SpeedUnit {
              public static class: java.lang.Class<com.mapbox.navigation.base.speed.model.SpeedUnit>;
              public static MILES_PER_HOUR: com.mapbox.navigation.base.speed.model.SpeedUnit;
              public static KILOMETERS_PER_HOUR: com.mapbox.navigation.base.speed.model.SpeedUnit;
              public static METERS_PER_SECOND: com.mapbox.navigation.base.speed.model.SpeedUnit;
              public static values(): androidNative.Array<com.mapbox.navigation.base.speed.model.SpeedUnit>;
              public static valueOf(param0: string): com.mapbox.navigation.base.speed.model.SpeedUnit;
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
      export module base {
        export module time {
          export class NoneSpecifiedTimeFormat extends com.mapbox.navigation.base.time.TimeFormatResolver {
            public static class: java.lang.Class<com.mapbox.navigation.base.time.NoneSpecifiedTimeFormat>;
            public obtainTimeFormatted(param0: number, param1: java.util.Calendar): string;
            public constructor(param0: boolean);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module time {
          export class TimeFormatResolver {
            public static class: java.lang.Class<com.mapbox.navigation.base.time.TimeFormatResolver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.base.time.TimeFormatResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { obtainTimeFormatted(param0: number, param1: java.util.Calendar): string });
            public constructor();
            public obtainTimeFormatted(param0: number, param1: java.util.Calendar): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module time {
          export class TimeFormattingChain {
            public static class: java.lang.Class<com.mapbox.navigation.base.time.TimeFormattingChain>;
            public constructor();
            public setup(param0: boolean): com.mapbox.navigation.base.time.TimeFormatResolver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module time {
          export class TwelveHoursTimeFormat extends com.mapbox.navigation.base.time.TimeFormatResolver {
            public static class: java.lang.Class<com.mapbox.navigation.base.time.TwelveHoursTimeFormat>;
            public static TWELVE_HOURS_FORMAT: string;
            public obtainTimeFormatted(param0: number, param1: java.util.Calendar): string;
            public constructor(param0: com.mapbox.navigation.base.time.TimeFormatResolver);
          }
          export module TwelveHoursTimeFormat {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.time.TwelveHoursTimeFormat.Companion>;
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
      export module base {
        export module time {
          export class TwentyFourHoursTimeFormat extends com.mapbox.navigation.base.time.TimeFormatResolver {
            public static class: java.lang.Class<com.mapbox.navigation.base.time.TwentyFourHoursTimeFormat>;
            public static TWENTY_FOUR_HOURS_FORMAT: string;
            public obtainTimeFormatted(param0: number, param1: java.util.Calendar): string;
            public constructor(param0: com.mapbox.navigation.base.time.TimeFormatResolver);
          }
          export module TwentyFourHoursTimeFormat {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.base.time.TwentyFourHoursTimeFormat.Companion>;
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
      export module base {
        export module time {
          export module span {
            export class SpanItem {
              public static class: java.lang.Class<com.mapbox.navigation.base.time.span.SpanItem>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.time.span.SpanItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getSpan(): any });
              public constructor();
              public getSpan(): any;
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
      export module base {
        export module time {
          export module span {
            export class TextSpanItem extends com.mapbox.navigation.base.time.span.SpanItem {
              public static class: java.lang.Class<com.mapbox.navigation.base.time.span.TextSpanItem>;
              public getSpan(): any;
              public constructor(param0: any, param1: string);
              public getSpanText(): string;
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
      export module base {
        export module trip {
          export module model {
            export class RouteLegProgress {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.RouteLegProgress>;
              public getLegDestination(): com.mapbox.navigation.base.route.LegWaypoint;
              public getCurrentStepProgress(): com.mapbox.navigation.base.trip.model.RouteStepProgress;
              public hashCode(): number;
              public getDurationRemaining(): number;
              public getUpcomingStep(): com.mapbox.api.directions.v5.models.LegStep;
              public getDistanceTraveled(): number;
              public toString(): string;
              public getLegIndex(): number;
              public getFractionTraveled(): number;
              public getDistanceRemaining(): number;
              public getRouteLeg(): com.mapbox.api.directions.v5.models.RouteLeg;
              public equals(param0: any): boolean;
              public getGeometryIndex(): number;
              public constructor(param0: number, param1: com.mapbox.api.directions.v5.models.RouteLeg, param2: number, param3: number, param4: number, param5: number, param6: com.mapbox.navigation.base.trip.model.RouteStepProgress, param7: com.mapbox.api.directions.v5.models.LegStep, param8: number, param9: com.mapbox.navigation.base.route.LegWaypoint);
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
      export module base {
        export module trip {
          export module model {
            export class RouteProgress {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.RouteProgress>;
              public getNavigationRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public getRemainingWaypoints(): number;
              public hashCode(): number;
              public getBannerInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
              public getDurationRemaining(): number;
              public getUpcomingStepPoints(): java.util.List<com.mapbox.geojson.Point>;
              public getAlternativeRoutesIndices$libnavigation_base_release(): java.util.Map<string, com.mapbox.navigation.base.internal.trip.model.RouteIndices>;
              public getDistanceTraveled(): number;
              public getCurrentState(): com.mapbox.navigation.base.trip.model.RouteProgressState;
              public toString(): string;
              public getInParkingAisle(): boolean;
              public getInTunnel(): boolean;
              public getUpcomingRoadObjects(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
              public getVoiceInstructions(): com.mapbox.api.directions.v5.models.VoiceInstructions;
              public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.api.directions.v5.models.BannerInstructions, param2: com.mapbox.api.directions.v5.models.VoiceInstructions, param3: com.mapbox.navigation.base.trip.model.RouteProgressState, param4: com.mapbox.navigation.base.trip.model.RouteLegProgress, param5: java.util.List<com.mapbox.geojson.Point>, param6: boolean, param7: number, param8: number, param9: number, param10: number, param11: number, param12: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>, param13: boolean, param14: string, param15: number, param16: boolean, param17: java.util.Map<string, com.mapbox.navigation.base.internal.trip.model.RouteIndices>);
              public getCurrentLegProgress(): com.mapbox.navigation.base.trip.model.RouteLegProgress;
              public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public getFractionTraveled(): number;
              public getDistanceRemaining(): number;
              public getRouteAlternativeId(): string;
              public getCurrentRouteGeometryIndex(): number;
              public equals(param0: any): boolean;
              public getStale(): boolean;
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
      export module base {
        export module trip {
          export module model {
            export class RouteProgressState {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.RouteProgressState>;
              public static INITIALIZED: com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static TRACKING: com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static COMPLETE: com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static OFF_ROUTE: com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static UNCERTAIN: com.mapbox.navigation.base.trip.model.RouteProgressState;
              public static values(): androidNative.Array<com.mapbox.navigation.base.trip.model.RouteProgressState>;
              public static valueOf(param0: string): com.mapbox.navigation.base.trip.model.RouteProgressState;
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
      export module base {
        export module trip {
          export module model {
            export class RouteStepProgress {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.RouteStepProgress>;
              public hashCode(): number;
              public constructor(param0: number, param1: number, param2: java.lang.Integer, param3: com.mapbox.api.directions.v5.models.LegStep, param4: java.util.List<com.mapbox.geojson.Point>, param5: number, param6: number, param7: number, param8: number);
              public getDurationRemaining(): number;
              public getDistanceTraveled(): number;
              public toString(): string;
              public getInstructionIndex(): java.lang.Integer;
              public getStep(): com.mapbox.api.directions.v5.models.LegStep;
              public getStepPoints(): java.util.List<com.mapbox.geojson.Point>;
              public getIntersectionIndex(): number;
              public getFractionTraveled(): number;
              public getDistanceRemaining(): number;
              public equals(param0: any): boolean;
              public getStepIndex(): number;
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
      export module base {
        export module trip {
          export module model {
            export abstract class TripNotificationState {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.TripNotificationState>;
            }
            export module TripNotificationState {
              export class TripNotificationData extends com.mapbox.navigation.base.trip.model.TripNotificationState {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.TripNotificationState.TripNotificationData>;
                public toString(): string;
                public component3(): java.lang.Double;
                public equals(param0: any): boolean;
                public component4(): string;
                public copy(param0: com.mapbox.api.directions.v5.models.BannerInstructions, param1: java.lang.Double, param2: java.lang.Double, param3: string): com.mapbox.navigation.base.trip.model.TripNotificationState.TripNotificationData;
                public getDistanceRemaining(): java.lang.Double;
                public getDurationRemaining(): java.lang.Double;
                public getDrivingSide(): string;
                public getBannerInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
                public constructor(param0: com.mapbox.api.directions.v5.models.BannerInstructions, param1: java.lang.Double, param2: java.lang.Double, param3: string);
                public component1(): com.mapbox.api.directions.v5.models.BannerInstructions;
                public component2(): java.lang.Double;
                public hashCode(): number;
              }
              export class TripNotificationFreeState extends com.mapbox.navigation.base.trip.model.TripNotificationState {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.TripNotificationState.TripNotificationFreeState>;
                public equals(param0: any): boolean;
                public constructor();
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizon {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizon>;
                public constructor(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonEdge);
                public current(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonPosition): com.mapbox.navigation.base.trip.model.eh.EHorizonEdge;
                public toString(): string;
                public mpp(): java.util.List<java.util.List<com.mapbox.navigation.base.trip.model.eh.EHorizonEdge>>;
                public equals(param0: any): boolean;
                public getStart(): com.mapbox.navigation.base.trip.model.eh.EHorizonEdge;
                public hashCode(): number;
                public mpp(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonPosition): java.util.List<java.util.List<com.mapbox.navigation.base.trip.model.eh.EHorizonEdge>>;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonEdge {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonEdge>;
                public constructor(param0: number, param1: number, param2: number, param3: java.util.List<com.mapbox.navigation.base.trip.model.eh.EHorizonEdge>);
                public getId(): number;
                public toString(): string;
                public isMpp(): boolean;
                public equals(param0: any): boolean;
                public getLevel(): number;
                public getProbability(): number;
                public hashCode(): number;
                public getOut(): java.util.List<com.mapbox.navigation.base.trip.model.eh.EHorizonEdge>;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonEdgeMetadata {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonEdgeMetadata>;
                public toString(): string;
                public isRightHandTraffic(): boolean;
                public getTunnel(): boolean;
                public equals(param0: any): boolean;
                public getNames(): java.util.List<com.mapbox.navigation.base.road.model.RoadComponent>;
                public getMeanElevation(): java.lang.Double;
                public getSpeedLimit(): java.lang.Double;
                public getSpeed(): number;
                public getCountryCodeIso3(): string;
                public getToll(): boolean;
                public getRoadSurface(): string;
                public isUrban(): boolean;
                public getRamp(): boolean;
                public getBridge(): boolean;
                public getCountryCodeIso2(): string;
                public getHeading(): number;
                public getCurvature(): number;
                public getLength(): number;
                public constructor(param0: number, param1: number, param2: string, param3: java.lang.Double, param4: number, param5: boolean, param6: boolean, param7: boolean, param8: boolean, param9: boolean, param10: java.util.List<com.mapbox.navigation.base.road.model.RoadComponent>, param11: java.lang.Byte, param12: java.lang.Double, param13: number, param14: string, param15: string, param16: string, param17: boolean, param18: boolean, param19: string, param20: boolean);
                public isOneWay(): boolean;
                public getMotorway(): boolean;
                public getFunctionRoadClass(): string;
                public hashCode(): number;
                public getLaneCount(): java.lang.Byte;
                public getStateCode(): string;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonGraphPath {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath>;
                public toString(): string;
                public constructor(param0: java.util.List<java.lang.Long>, param1: number, param2: number, param3: number);
                public equals(param0: any): boolean;
                public getLength(): number;
                public getEdges(): java.util.List<java.lang.Long>;
                public getPercentAlongBegin(): number;
                public hashCode(): number;
                public getPercentAlongEnd(): number;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonGraphPosition {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition>;
                public toString(): string;
                public getEdgeId(): number;
                public constructor(param0: number, param1: number);
                public equals(param0: any): boolean;
                public getPercentAlong(): number;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export module EHorizonMapperKt {
                export module WhenMappings {
                  export class WhenMappings {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonMapperKt.WhenMappings>;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonPosition {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonPosition>;
                public toString(): string;
                public getEHorizon(): com.mapbox.navigation.base.trip.model.eh.EHorizon;
                public equals(param0: any): boolean;
                public getEHorizonResultType(): string;
                public constructor(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition, param1: com.mapbox.navigation.base.trip.model.eh.EHorizon, param2: string);
                public hashCode(): number;
                public getEHorizonGraphPosition(): com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class EHorizonResultType {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonResultType>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.eh.EHorizonResultType;
                public static INITIAL: string;
                public static UPDATE: string;
              }
              export module EHorizonResultType {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.EHorizonResultType.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.eh.EHorizonResultType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class MatchableGeometry {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>;
                public component1(): string;
                public toString(): string;
                public getCoordinates(): java.util.List<com.mapbox.geojson.Point>;
                public equals(param0: any): boolean;
                public getRoadObjectId(): string;
                public copy(param0: string, param1: java.util.List<com.mapbox.geojson.Point>): com.mapbox.navigation.base.trip.model.eh.MatchableGeometry;
                public hashCode(): number;
                public constructor(param0: string, param1: java.util.List<com.mapbox.geojson.Point>);
                public component2(): java.util.List<com.mapbox.geojson.Point>;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class MatchableOpenLr {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.MatchableOpenLr>;
                public component1(): string;
                public getOpenLRLocation(): string;
                public toString(): string;
                public equals(param0: any): boolean;
                public getRoadObjectId(): string;
                public constructor(param0: string, param1: string, param2: string);
                public component2(): string;
                public component3(): string;
                public hashCode(): number;
                public getOpenLRStandard(): string;
                public copy(param0: string, param1: string, param2: string): com.mapbox.navigation.base.trip.model.eh.MatchableOpenLr;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class MatchablePoint {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.MatchablePoint>;
                public component1(): string;
                public getBearing(): java.lang.Double;
                public toString(): string;
                public component2(): com.mapbox.geojson.Point;
                public copy(param0: string, param1: com.mapbox.geojson.Point, param2: java.lang.Double): com.mapbox.navigation.base.trip.model.eh.MatchablePoint;
                public component3(): java.lang.Double;
                public equals(param0: any): boolean;
                public constructor(param0: string, param1: com.mapbox.geojson.Point, param2: java.lang.Double);
                public getRoadObjectId(): string;
                public hashCode(): number;
                public getPoint(): com.mapbox.geojson.Point;
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
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class OpenLRStandard {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.OpenLRStandard>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.eh.OpenLRStandard;
                public static TOM_TOM: string;
                public static TPEG: string;
              }
              export module OpenLRStandard {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.OpenLRStandard.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.eh.OpenLRStandard$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class RoadClass {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.RoadClass>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.eh.RoadClass;
                public static MOTORWAY: string;
                public static TRUNK: string;
                public static PRIMARY: string;
                public static SECONDARY: string;
                public static TERTIARY: string;
                public static UNCLASSIFIED: string;
                public static RESIDENTIAL: string;
                public static SERVICE_OTHER: string;
              }
              export module RoadClass {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.RoadClass.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.eh.RoadClass$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module eh {
              export class RoadSurface {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.RoadSurface>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.eh.RoadSurface;
                public static PAVED_SMOOTH: string;
                public static PAVED: string;
                public static PAVED_ROUGH: string;
                public static COMPACTED: string;
                public static DIRT: string;
                public static GRAVEL: string;
                public static PATH: string;
                public static IMPASSABLE: string;
              }
              export module RoadSurface {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.eh.RoadSurface.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.eh.RoadSurface$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class LocalizedString {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.LocalizedString>;
                public toString(): string;
                public constructor(param0: string, param1: string);
                public equals(param0: any): boolean;
                public getLanguage(): string;
                public hashCode(): number;
                public getValue(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export abstract class RoadObject {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObject>;
                public toString(): string;
                public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
                public getLocation(): com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation;
                public getProvider(): string;
                public equals(param0: any): boolean;
                public getObjectType(): number;
                public isUrban(): java.lang.Boolean;
                public getId(): string;
                public hashCode(): number;
                public getNativeRoadObject$libnavigation_base_release(): com.mapbox.navigator.RoadObject;
                public getLength(): java.lang.Double;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectEdgeLocation {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEdgeLocation>;
                public toString(): string;
                public constructor(param0: number, param1: number);
                public equals(param0: any): boolean;
                public getPercentAlongBegin(): number;
                public hashCode(): number;
                public getPercentAlongEnd(): number;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectEnterExitInfo {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo>;
                public toString(): string;
                public getType(): number;
                public getEnterFromStartOrExitFromEnd(): boolean;
                public constructor(param0: string, param1: boolean, param2: number);
                public equals(param0: any): boolean;
                public getRoadObjectId(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module RoadObjectMapperKt {
                export module WhenMappings {
                  export class WhenMappings {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectMapperKt.WhenMappings>;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectMatcherError {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectMatcherError>;
                public toString(): string;
                public constructor(param0: string, param1: string);
                public equals(param0: any): boolean;
                public getRoadObjectId(): string;
                public getError(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectPassInfo {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPassInfo>;
                public toString(): string;
                public getType(): number;
                public equals(param0: any): boolean;
                public getRoadObjectId(): string;
                public hashCode(): number;
                public constructor(param0: string, param1: number);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectPosition {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                public toString(): string;
                public equals(param0: any): boolean;
                public constructor(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition, param1: com.mapbox.geojson.Point);
                public hashCode(): number;
                public getEHorizonGraphPosition(): com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition;
                public getCoordinate(): com.mapbox.geojson.Point;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectProvider {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectProvider>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectProvider;
                public static MAPBOX: string;
                public static CUSTOM: string;
              }
              export module RoadObjectProvider {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectProvider.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.RoadObjectProvider$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class RoadObjectType {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectType>;
                public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectType;
                public static TUNNEL: number;
                public static COUNTRY_BORDER_CROSSING: number;
                public static TOLL_COLLECTION: number;
                public static REST_STOP: number;
                public static RESTRICTED_AREA: number;
                public static BRIDGE: number;
                public static INCIDENT: number;
                public static CUSTOM: number;
                public static RAILWAY_CROSSING: number;
                public static IC: number;
                public static JCT: number;
                public static NOTIFICATION: number;
                public static MERGING_AREA: number;
              }
              export module RoadObjectType {
                export class Type {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectType.Type>;
                  /**
                   * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.RoadObjectType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export class UpcomingRoadObject {
                public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
                public toString(): string;
                public getDistanceInfo(): com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo;
                public getDistanceToStart(): java.lang.Double;
                public equals(param0: any): boolean;
                public getRoadObject(): com.mapbox.navigation.base.trip.model.roadobject.RoadObject;
                public hashCode(): number;
                public constructor(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObject, param1: java.lang.Double, param2: com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module border {
                export class CountryBorderCrossing extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossing>;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getCountryBorderCrossingInfo(): com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingInfo;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
                  public constructor(param0: string, param1: com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingInfo, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module border {
                export class CountryBorderCrossingAdminInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingAdminInfo>;
                  public constructor(param0: string, param1: string);
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public getCodeAlpha3(): string;
                  public toString(): string;
                  public getCode(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module border {
                export class CountryBorderCrossingInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingInfo>;
                  public hashCode(): number;
                  public getTo(): com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingAdminInfo;
                  public constructor(param0: com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingAdminInfo, param1: com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingAdminInfo);
                  public getFrom(): com.mapbox.navigation.base.trip.model.roadobject.border.CountryBorderCrossingAdminInfo;
                  public equals(param0: any): boolean;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module bridge {
                export class Bridge extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.bridge.Bridge>;
                  public constructor(param0: string, param1: java.lang.Double, param2: string, param3: java.lang.Boolean, param4: com.mapbox.navigator.RoadObject);
                  public toString(): string;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module custom {
                export class Custom extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.custom.Custom>;
                  public constructor(param0: string, param1: java.lang.Double, param2: string, param3: java.lang.Boolean, param4: com.mapbox.navigator.RoadObject);
                  public toString(): string;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class GantryDistanceInfo extends com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.GantryDistanceInfo>;
                  public hashCode(): number;
                  public getDistanceToStart(): java.lang.Double;
                  public equals(param0: any): boolean;
                  public constructor(param0: string, param1: number, param2: number);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class Gate {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>;
                  public hashCode(): number;
                  public getProbability(): number;
                  public equals(param0: any): boolean;
                  public getPosition(): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition;
                  public toString(): string;
                  public getId(): number;
                  public getDistance(): number;
                  public constructor(param0: number, param1: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition, param2: number, param3: number);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class LineDistanceInfo extends com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.LineDistanceInfo>;
                  public getEntryFromStart(): boolean;
                  public getDistanceToExit(): number;
                  public hashCode(): number;
                  public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number);
                  public getDistanceToStart(): java.lang.Double;
                  public equals(param0: any): boolean;
                  public getDistanceToEntry(): number;
                  public getLength(): number;
                  public constructor(param0: string, param1: number, param2: number);
                  public toString(): string;
                  public getDistanceToEnd(): number;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class PointDistanceInfo extends com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.PointDistanceInfo>;
                  public hashCode(): number;
                  public getDistanceToStart(): java.lang.Double;
                  public equals(param0: any): boolean;
                  public constructor(param0: string, param1: number, param2: number);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class PolygonDistanceInfo extends com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.PolygonDistanceInfo>;
                  public getExits(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>;
                  public getInside(): boolean;
                  public hashCode(): number;
                  public getEntrances(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>;
                  public constructor(param0: string, param1: number, param2: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>, param3: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>, param4: boolean);
                  public getDistanceToStart(): java.lang.Double;
                  public equals(param0: any): boolean;
                  public constructor(param0: string, param1: number, param2: number);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export abstract class RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo>;
                  public getRoadObjectId(): string;
                  public getDistanceInfoType(): number;
                  public hashCode(): number;
                  public getRoadObjectType(): number;
                  public getDistanceToStart(): java.lang.Double;
                  public equals(param0: any): boolean;
                  public constructor(param0: string, param1: number, param2: number);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class RoadObjectDistanceInfoType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfoType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfoType;
                  public static GANTRY: number;
                  public static LINE: number;
                  public static POINT: number;
                  public static POLYGON: number;
                  public static SUB_GRAPH: number;
                }
                export module RoadObjectDistanceInfoType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfoType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfoType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module distanceinfo {
                export class SubGraphDistanceInfo extends com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.RoadObjectDistanceInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.SubGraphDistanceInfo>;
                  public getExits(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>;
                  public getInside(): boolean;
                  public hashCode(): number;
                  public getEntrances(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>;
                  public constructor(param0: string, param1: number, param2: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>, param3: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.distanceinfo.Gate>, param4: boolean);
                  public getDistanceToStart(): java.lang.Double;
                  public equals(param0: any): boolean;
                  public constructor(param0: string, param1: number, param2: number);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module ic {
                export class Interchange extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.ic.Interchange>;
                  public getName(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.LocalizedString>;
                  public hashCode(): number;
                  public constructor(param0: string, param1: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.LocalizedString>, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module incident {
                export class Incident extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.Incident>;
                  public hashCode(): number;
                  public getInfo(): com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentInfo;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: string, param1: com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentInfo, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module incident {
                export class IncidentCongestion {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentCongestion>;
                  public hashCode(): number;
                  public constructor(param0: java.lang.Integer);
                  public equals(param0: any): boolean;
                  public getValue(): java.lang.Integer;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module incident {
                export class IncidentImpact {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentImpact>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentImpact;
                  public static UNKNOWN: string;
                  public static CRITICAL: string;
                  public static MAJOR: string;
                  public static MINOR: string;
                  public static LOW: string;
                }
                export module IncidentImpact {
                  export class Impact {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentImpact.Impact>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentImpact$Impact interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module incident {
                export class IncidentInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentInfo>;
                  public hashCode(): number;
                  public getCongestion(): com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentCongestion;
                  public getCountryCodeAlpha2(): string;
                  public getLanesClearDesc(): string;
                  public constructor(param0: string, param1: number, param2: string, param3: com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentCongestion, param4: boolean, param5: java.util.Date, param6: java.util.Date, param7: java.util.Date, param8: string, param9: string, param10: string, param11: java.util.List<java.lang.Integer>, param12: string, param13: string, param14: java.util.List<string>, param15: string, param16: string, param17: java.lang.Long, param18: java.util.List<string>);
                  public getEndTime(): java.util.Date;
                  public getId(): string;
                  public equals(param0: any): boolean;
                  public getCreationTime(): java.util.Date;
                  public toString(): string;
                  public getAlertcCodes(): java.util.List<java.lang.Integer>;
                  public getNumLanesBlocked(): java.lang.Long;
                  public getSubTypeDescription(): string;
                  public isClosed(): boolean;
                  public getLongDescription(): string;
                  public getAffectedRoadNames(): java.util.List<string>;
                  public getType(): number;
                  public getStartTime(): java.util.Date;
                  public getSubType(): string;
                  public getImpact(): string;
                  public getCountryCodeAlpha3(): string;
                  public getLanesBlocked(): java.util.List<string>;
                  public getDescription(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module incident {
                export class IncidentType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentType;
                  public static UNKNOWN: number;
                  public static ACCIDENT: number;
                  public static CONGESTION: number;
                  public static CONSTRUCTION: number;
                  public static DISABLED_VEHICLE: number;
                  public static LANE_RESTRICTION: number;
                  public static MASS_TRANSIT: number;
                  public static MISCELLANEOUS: number;
                  public static OTHER_NEWS: number;
                  public static PLANNED_EVENT: number;
                  public static ROAD_CLOSURE: number;
                  public static ROAD_HAZARD: number;
                  public static WEATHER: number;
                }
                export module IncidentType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.incident.IncidentType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module jct {
                export class Junction extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.jct.Junction>;
                  public getName(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.LocalizedString>;
                  public hashCode(): number;
                  public constructor(param0: string, param1: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.LocalizedString>, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class GantryLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.GantryLocation>;
                  public hashCode(): number;
                  public constructor(param0: number, param1: com.mapbox.geojson.Geometry);
                  public getPositions(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                  public constructor(param0: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>, param1: com.mapbox.geojson.Geometry);
                  public equals(param0: any): boolean;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class OpenLRLineLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRLineLocation>;
                  public hashCode(): number;
                  public constructor(param0: number, param1: com.mapbox.geojson.Geometry);
                  public constructor(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath, param1: com.mapbox.geojson.Geometry);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getGraphPath(): com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class OpenLROrientation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLROrientation>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.location.OpenLROrientation;
                  public static NO_ORIENTATION_OR_UNKNOWN: number;
                  public static WITH_LINE_DIRECTION: number;
                  public static AGAINST_LINE_DIRECTION: number;
                  public static BOTH: number;
                }
                export module OpenLROrientation {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLROrientation.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.location.OpenLROrientation$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class OpenLRPointLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRPointLocation>;
                  public hashCode(): number;
                  public constructor(param0: number, param1: com.mapbox.geojson.Geometry);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition, param1: com.mapbox.geojson.Geometry, param2: number, param3: number);
                  public getOpenLRSideOfRoad(): number;
                  public getOpenLROrientation(): number;
                  public getPosition(): com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class OpenLRSideOfRoad {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRSideOfRoad>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRSideOfRoad;
                  public static ON_ROAD_OR_UNKNOWN: number;
                  public static RIGHT: number;
                  public static LEFT: number;
                  public static BOTH: number;
                }
                export module OpenLRSideOfRoad {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRSideOfRoad.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.location.OpenLRSideOfRoad$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class PointLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.PointLocation>;
                  public hashCode(): number;
                  public constructor(param0: number, param1: com.mapbox.geojson.Geometry);
                  public equals(param0: any): boolean;
                  public getPosition(): com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition;
                  public constructor(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition, param1: com.mapbox.geojson.Geometry);
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class PolygonLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.PolygonLocation>;
                  public getEntries(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                  public hashCode(): number;
                  public constructor(param0: number, param1: com.mapbox.geojson.Geometry);
                  public constructor(param0: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>, param1: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>, param2: com.mapbox.geojson.Geometry);
                  public getExits(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                  public equals(param0: any): boolean;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class PolylineLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.PolylineLocation>;
                  public hashCode(): number;
                  public constructor(param0: number, param1: com.mapbox.geojson.Geometry);
                  public constructor(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath, param1: com.mapbox.geojson.Geometry);
                  public equals(param0: any): boolean;
                  public getPath(): com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export abstract class RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation>;
                  public hashCode(): number;
                  public constructor(param0: number, param1: com.mapbox.geojson.Geometry);
                  public getShape(): com.mapbox.geojson.Geometry;
                  public getLocationType(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class RoadObjectLocationType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocationType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocationType;
                  public static GANTRY: number;
                  public static OPEN_LR_LINE: number;
                  public static OPEN_LR_POINT: number;
                  public static POINT: number;
                  public static POLYGON: number;
                  public static POLYLINE: number;
                  public static ROUTE_ALERT: number;
                  public static SUBGRAPH: number;
                }
                export module RoadObjectLocationType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocationType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocationType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class RouteAlertLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.RouteAlertLocation>;
                  public hashCode(): number;
                  public constructor(param0: number, param1: com.mapbox.geojson.Geometry);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: com.mapbox.geojson.Geometry);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class SubgraphEdge {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.SubgraphEdge>;
                  public hashCode(): number;
                  public getShape(): com.mapbox.geojson.Geometry;
                  public constructor(param0: number, param1: java.util.List<java.lang.Long>, param2: java.util.List<java.lang.Long>, param3: com.mapbox.geojson.Geometry, param4: number);
                  public equals(param0: any): boolean;
                  public getLength(): number;
                  public toString(): string;
                  public getId(): number;
                  public getInnerEdgeIds(): java.util.List<java.lang.Long>;
                  public getOuterEdgeIds(): java.util.List<java.lang.Long>;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module location {
                export class SubgraphLocation extends com.mapbox.navigation.base.trip.model.roadobject.location.RoadObjectLocation {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.location.SubgraphLocation>;
                  public getEntries(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                  public hashCode(): number;
                  public constructor(param0: number, param1: com.mapbox.geojson.Geometry);
                  public getEdges(): java.util.Map<java.lang.Long, com.mapbox.navigation.base.trip.model.roadobject.location.SubgraphEdge>;
                  public getExits(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>, param1: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPosition>, param2: java.util.Map<java.lang.Long, com.mapbox.navigation.base.trip.model.roadobject.location.SubgraphEdge>, param3: com.mapbox.geojson.Geometry);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module merge {
                export class MergingArea extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.merge.MergingArea>;
                  public hashCode(): number;
                  public constructor(param0: string, param1: com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaInfo, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
                  public getInfo(): com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaInfo;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module merge {
                export class MergingAreaInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaInfo>;
                  public constructor(param0: string);
                  public hashCode(): number;
                  public getType(): string;
                  public equals(param0: any): boolean;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module merge {
                export class MergingAreaType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaType;
                  public static FROM_LEFT: string;
                  public static FROM_RIGHT: string;
                  public static FROM_BOTH_SIDES: string;
                }
                export module MergingAreaType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.merge.MergingAreaType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module notification {
                export class Notification extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.notification.Notification>;
                  public hashCode(): number;
                  public constructor(param0: string, param1: java.lang.Double, param2: string, param3: java.lang.Boolean, param4: com.mapbox.navigator.RoadObject);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module railwaycrossing {
                export class RailwayCrossing extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.railwaycrossing.RailwayCrossing>;
                  public getInfo(): com.mapbox.navigation.base.trip.model.roadobject.railwaycrossing.RailwayCrossingInfo;
                  public hashCode(): number;
                  public constructor(param0: string, param1: com.mapbox.navigation.base.trip.model.roadobject.railwaycrossing.RailwayCrossingInfo, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module railwaycrossing {
                export class RailwayCrossingInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.railwaycrossing.RailwayCrossingInfo>;
                  public constructor();
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module restrictedarea {
                export class RestrictedArea extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.restrictedarea.RestrictedArea>;
                  public constructor(param0: string, param1: java.lang.Double, param2: string, param3: java.lang.Boolean, param4: com.mapbox.navigator.RoadObject);
                  public toString(): string;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module reststop {
                export class Amenity {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.Amenity>;
                  public hashCode(): number;
                  public getType(): string;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: string, param1: string, param2: string);
                  public getName(): string;
                  public getBrand(): string;
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module reststop {
                export class AmenityType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.AmenityType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.reststop.AmenityType;
                  public static UNDEFINED: string;
                  public static GAS_STATION: string;
                  public static ELECTRIC_CHARGING_STATION: string;
                  public static TOILET: string;
                  public static COFFEE: string;
                  public static RESTAURANT: string;
                  public static SNACK: string;
                  public static ATM: string;
                  public static INFO: string;
                  public static BABY_CARE: string;
                  public static FACILITIES_FOR_DISABLED: string;
                  public static SHOP: string;
                  public static TELEPHONE: string;
                  public static HOTEL: string;
                  public static HOTSPRING: string;
                  public static SHOWER: string;
                  public static PICNIC_SHELTER: string;
                  public static POST: string;
                  public static FAX: string;
                }
                export module AmenityType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.AmenityType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.reststop.AmenityType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module reststop {
                export class RestStop extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.RestStop>;
                  public hashCode(): number;
                  public getRestStopType(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: string, param1: number, param2: string, param3: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.reststop.Amenity>, param4: string, param5: java.lang.Double, param6: string, param7: java.lang.Boolean, param8: com.mapbox.navigator.RoadObject);
                  public getName(): string;
                  public getAmenities(): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.reststop.Amenity>;
                  public getGuideMapUri(): string;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module reststop {
                export class RestStopType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.RestStopType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.reststop.RestStopType;
                  public static UNKNOWN: number;
                  public static REST_AREA: number;
                  public static SERVICE_AREA: number;
                }
                export module RestStopType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.reststop.RestStopType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.reststop.RestStopType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module tollcollection {
                export class TollCollection extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.tollcollection.TollCollection>;
                  public hashCode(): number;
                  public getTollCollectionType(): number;
                  public constructor(param0: string, param1: number, param2: string, param3: java.lang.Double, param4: string, param5: java.lang.Boolean, param6: com.mapbox.navigator.RoadObject);
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getName(): string;
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module tollcollection {
                export class TollCollectionType {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.tollcollection.TollCollectionType>;
                  public static INSTANCE: com.mapbox.navigation.base.trip.model.roadobject.tollcollection.TollCollectionType;
                  public static UNKNOWN: number;
                  public static TOLL_BOOTH: number;
                  public static TOLL_GANTRY: number;
                }
                export module TollCollectionType {
                  export class Type {
                    public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.tollcollection.TollCollectionType.Type>;
                    /**
                     * Constructs a new instance of the com.mapbox.navigation.base.trip.model.roadobject.tollcollection.TollCollectionType$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module tunnel {
                export class Tunnel extends com.mapbox.navigation.base.trip.model.roadobject.RoadObject {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.tunnel.Tunnel>;
                  public getInfo(): com.mapbox.navigation.base.trip.model.roadobject.tunnel.TunnelInfo;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public constructor(param0: string, param1: com.mapbox.navigation.base.trip.model.roadobject.tunnel.TunnelInfo, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
                  public constructor(param0: string, param1: number, param2: java.lang.Double, param3: string, param4: java.lang.Boolean, param5: com.mapbox.navigator.RoadObject);
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
      export module base {
        export module trip {
          export module model {
            export module roadobject {
              export module tunnel {
                export class TunnelInfo {
                  public static class: java.lang.Class<com.mapbox.navigation.base.trip.model.roadobject.tunnel.TunnelInfo>;
                  public constructor(param0: string);
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                  public getName(): string;
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
      export module base {
        export module trip {
          export module notification {
            export class NotificationAction {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.notification.NotificationAction>;
              public static END_NAVIGATION: com.mapbox.navigation.base.trip.notification.NotificationAction;
              public static values(): androidNative.Array<com.mapbox.navigation.base.trip.notification.NotificationAction>;
              public static valueOf(param0: string): com.mapbox.navigation.base.trip.notification.NotificationAction;
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
      export module base {
        export module trip {
          export module notification {
            export class TripNotification {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.notification.TripNotification>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.trip.notification.TripNotification interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getNotification(): globalAndroid.app.Notification; getNotificationId(): number; updateNotification(param0: com.mapbox.navigation.base.trip.model.TripNotificationState): void; onTripSessionStarted(): void; onTripSessionStopped(): void });
              public constructor();
              public getNotificationId(): number;
              public updateNotification(param0: com.mapbox.navigation.base.trip.model.TripNotificationState): void;
              public getNotification(): globalAndroid.app.Notification;
              public onTripSessionStopped(): void;
              public onTripSessionStarted(): void;
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
      export module base {
        export module trip {
          export module notification {
            export class TripNotificationInterceptor {
              public static class: java.lang.Class<com.mapbox.navigation.base.trip.notification.TripNotificationInterceptor>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.base.trip.notification.TripNotificationInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { intercept(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder });
              public constructor();
              public intercept(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
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
      export module base {
        export module utils {
          export class DecodeUtils {
            public static class: java.lang.Class<com.mapbox.navigation.base.utils.DecodeUtils>;
            public static INSTANCE: com.mapbox.navigation.base.utils.DecodeUtils;
            public static stepGeometryToPoints(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: com.mapbox.api.directions.v5.models.LegStep): java.util.List<com.mapbox.geojson.Point>;
            public static completeGeometryToLineString(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.geojson.LineString;
            public static completeGeometryToPoints(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<com.mapbox.geojson.Point>;
            public static clearCacheInternal$libnavigation_base_release(): void;
            public static stepsGeometryToPoints(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>;
            public static stepsGeometryToLineString(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<java.util.List<com.mapbox.geojson.LineString>>;
            public static stepGeometryToLineString(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: com.mapbox.api.directions.v5.models.LegStep): com.mapbox.geojson.LineString;
          }
          export module DecodeUtils {
            export class CachedRouteInfo {
              public static class: java.lang.Class<com.mapbox.navigation.base.utils.DecodeUtils.CachedRouteInfo>;
              public getStepCount(): number;
              public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public getPrecision(): number;
              public constructor(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: number);
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
      export module base {
        export module utils {
          export module route {
            export class LegSilentWaypoints {
              public static class: java.lang.Class<com.mapbox.navigation.base.utils.route.LegSilentWaypoints>;
              public constructor(param0: number);
              public getGeometryIndex(): number;
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
      export module base {
        export module utils {
          export module route {
            export class NavigationRouteUtils {
              public static class: java.lang.Class<com.mapbox.navigation.base.utils.route.NavigationRouteUtils>;
              public static hasUnexpectedUpcomingClosures(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: any): any;
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
      export module base {
        export module utils {
          export module route {
            export class RouteProgressData {
              public static class: java.lang.Class<com.mapbox.navigation.base.utils.route.RouteProgressData>;
              public constructor(param0: number, param1: number);
              public getCurrentLegIndex(): number;
              public getCurrentGeometryLegIndex(): number;
            }
          }
        }
      }
    }
  }
}
