/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.BuildConfig>;
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
        export module maneuver {
          export class LaneIconProcessor {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.LaneIconProcessor>;
            public getLaneIcon(param0: com.mapbox.navigation.ui.maneuver.model.LaneIndicator): com.mapbox.navigation.ui.maneuver.model.LaneIcon;
            public rearrange$libnavui_maneuver_release(param0: java.util.List<any>, param1: any, param2: number): void;
            public constructor(param0: com.mapbox.navigation.ui.maneuver.model.LaneIconResources);
            public getLaneIconResources(): com.mapbox.navigation.ui.maneuver.model.LaneIconResources;
          }
          export module LaneIconProcessor {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.LaneIconProcessor.Companion>;
            }
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
        export module maneuver {
          export abstract class ManeuverAction {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverAction>;
          }
          export module ManeuverAction {
            export class GetManeuverList extends com.mapbox.navigation.ui.maneuver.ManeuverAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverAction.GetManeuverList>;
              public component3(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions;
              public component4(): com.mapbox.navigation.base.formatter.DistanceFormatter;
              public hashCode(): number;
              public component1(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public constructor(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.maneuver.ManeuverState, param2: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, param3: com.mapbox.navigation.base.formatter.DistanceFormatter);
              public getManeuverOption(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions;
              public component2(): com.mapbox.navigation.ui.maneuver.ManeuverState;
              public toString(): string;
              public copy(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: com.mapbox.navigation.ui.maneuver.ManeuverState, param2: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, param3: com.mapbox.navigation.base.formatter.DistanceFormatter): com.mapbox.navigation.ui.maneuver.ManeuverAction.GetManeuverList;
              public getDistanceFormatter(): com.mapbox.navigation.base.formatter.DistanceFormatter;
              public getManeuverState(): com.mapbox.navigation.ui.maneuver.ManeuverState;
              public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public equals(param0: any): boolean;
            }
            export class GetManeuverListWithRoute extends com.mapbox.navigation.ui.maneuver.ManeuverAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverAction.GetManeuverListWithRoute>;
              public component3(): com.mapbox.navigation.ui.maneuver.ManeuverState;
              public hashCode(): number;
              public component5(): com.mapbox.navigation.base.formatter.DistanceFormatter;
              public getManeuverOption(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions;
              public toString(): string;
              public component1(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public copy(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: java.lang.Integer, param2: com.mapbox.navigation.ui.maneuver.ManeuverState, param3: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, param4: com.mapbox.navigation.base.formatter.DistanceFormatter): com.mapbox.navigation.ui.maneuver.ManeuverAction.GetManeuverListWithRoute;
              public getDistanceFormatter(): com.mapbox.navigation.base.formatter.DistanceFormatter;
              public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public component4(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions;
              public getRouteLegIndex(): java.lang.Integer;
              public getManeuverState(): com.mapbox.navigation.ui.maneuver.ManeuverState;
              public constructor(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: java.lang.Integer, param2: com.mapbox.navigation.ui.maneuver.ManeuverState, param3: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, param4: com.mapbox.navigation.base.formatter.DistanceFormatter);
              public component2(): java.lang.Integer;
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
      export module ui {
        export module maneuver {
          export class ManeuverConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverConfig>;
            public getUserId(): string;
            public constructor(param0: globalAndroid.content.Context);
            public setDistanceFormatterOptions(param0: com.mapbox.navigation.base.formatter.DistanceFormatterOptions): void;
            public setOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions): void;
            public getStyleId(): string;
            public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
            public setUserId(param0: string): void;
            public setStyleId(param0: string): void;
            public getOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions;
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
        export module maneuver {
          export class ManeuverProcessor {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverProcessor>;
            public static INSTANCE: com.mapbox.navigation.ui.maneuver.ManeuverProcessor;
            public process(param0: com.mapbox.navigation.ui.maneuver.ManeuverAction): com.mapbox.navigation.ui.maneuver.ManeuverResult;
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
        export module maneuver {
          export abstract class ManeuverResult {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult>;
          }
          export module ManeuverResult {
            export abstract class GetManeuverList extends com.mapbox.navigation.ui.maneuver.ManeuverResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList>;
            }
            export module GetManeuverList {
              export class Failure extends com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList.Failure>;
                public component1(): string;
                public toString(): string;
                public equals(param0: any): boolean;
                public constructor(param0: string);
                public copy(param0: string): com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList.Failure;
                public getError(): string;
                public hashCode(): number;
              }
              export class Success extends com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList.Success>;
                public getManeuvers(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
                public toString(): string;
                public copy(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>): com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverList.Success;
                public equals(param0: any): boolean;
                public component1(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
                public constructor(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>);
                public hashCode(): number;
              }
            }
            export abstract class GetManeuverListWithProgress extends com.mapbox.navigation.ui.maneuver.ManeuverResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress>;
            }
            export module GetManeuverListWithProgress {
              export class Failure extends com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress.Failure>;
                public component1(): string;
                public toString(): string;
                public copy(param0: string): com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress.Failure;
                public equals(param0: any): boolean;
                public constructor(param0: string);
                public getError(): string;
                public hashCode(): number;
              }
              export class Success extends com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress.Success>;
                public getManeuvers(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
                public toString(): string;
                public equals(param0: any): boolean;
                public component1(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
                public constructor(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>);
                public copy(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>): com.mapbox.navigation.ui.maneuver.ManeuverResult.GetManeuverListWithProgress.Success;
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
        export module maneuver {
          export class ManeuverState {
            public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.ManeuverState>;
            public component3(): java.util.List<com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers>;
            public constructor();
            public component1(): com.mapbox.api.directions.v5.models.DirectionsRoute;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
            public getRoadShields(): java.util.HashMap<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>;
            public getAllManeuvers(): java.util.List<com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers>;
            public component2(): java.util.HashMap<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>;
            public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
            public copy(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: java.util.HashMap<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>, param2: java.util.List<com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers>): com.mapbox.navigation.ui.maneuver.ManeuverState;
            public constructor(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: java.util.HashMap<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>, param2: java.util.List<com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers>);
            public setRoute(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): void;
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
        export module maneuver {
          export module api {
            export class MapboxLaneIconsApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.api.MapboxLaneIconsApi>;
              public constructor();
              public getTurnLane(param0: com.mapbox.navigation.ui.maneuver.model.LaneIndicator): com.mapbox.navigation.ui.maneuver.model.LaneIcon;
              public constructor(param0: com.mapbox.navigation.ui.maneuver.model.LaneIconResources);
            }
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
        export module maneuver {
          export module api {
            export class MapboxManeuverApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.api.MapboxManeuverApi>;
              public cancel(): void;
              public constructor(param0: com.mapbox.navigation.base.formatter.DistanceFormatter);
              public constructor(param0: com.mapbox.navigation.base.formatter.DistanceFormatter, param1: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions);
              public getManeuvers(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>;
              /** @deprecated */
              public getManeuvers(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: java.lang.Integer): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>;
              public getRoadShields$libnavui_maneuver_release(param0: string, param1: string, param2: string, param3: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, param4: com.mapbox.navigation.ui.maneuver.api.RoadShieldCallback): void;
              /** @deprecated */
              public getManeuvers(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>;
              public getRoadShields(param0: string, param1: string, param2: string, param3: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, param4: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public getManeuvers(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: java.lang.Integer): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>;
              public getRoadShields(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, param1: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public constructor(param0: com.mapbox.navigation.base.formatter.DistanceFormatter, param1: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, param2: com.mapbox.navigation.ui.maneuver.ManeuverProcessor, param3: com.mapbox.navigation.ui.shield.api.MapboxRouteShieldApi);
              /** @deprecated */
              public getRoadShields(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, param1: com.mapbox.navigation.ui.maneuver.api.RoadShieldCallback): void;
              public getManeuvers(param0: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>;
              public constructor(param0: com.mapbox.navigation.base.formatter.DistanceFormatter, param1: com.mapbox.navigation.ui.maneuver.model.ManeuverOptions, param2: com.mapbox.navigation.ui.shield.api.MapboxRouteShieldApi);
            }
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
        export module maneuver {
          export module api {
            export class MapboxTurnIconsApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.api.MapboxTurnIconsApi>;
              public generateTurnIcon(param0: string, param1: java.lang.Float, param2: string, param3: string): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.TurnIconError, com.mapbox.navigation.base.internal.maneuver.ManeuverTurnIcon>;
              public setTurnIconResources(param0: com.mapbox.navigation.ui.maneuver.model.TurnIconResources): void;
              public getTurnIconResources(): com.mapbox.navigation.ui.maneuver.model.TurnIconResources;
              public constructor(param0: com.mapbox.navigation.ui.maneuver.model.TurnIconResources);
              public updateResources(param0: com.mapbox.navigation.ui.maneuver.model.TurnIconResources): void;
            }
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
        export module maneuver {
          export module api {
            export class RoadShieldCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.api.RoadShieldCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.maneuver.api.RoadShieldCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRoadShields(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, param1: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>, param2: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShieldError>): void });
              public constructor();
              /** @deprecated */
              public onRoadShields(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, param1: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>, param2: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShieldError>): void;
            }
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
        export module maneuver {
          export module databinding {
            export class MapboxItemLaneGuidanceLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.databinding.MapboxItemLaneGuidanceLayoutBinding>;
              public itemLaneGuidance: com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidance;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemLaneGuidanceLayoutBinding;
              public getRoot(): globalAndroid.widget.LinearLayout;
              public static inflate(param0: globalAndroid.view.LayoutInflater): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemLaneGuidanceLayoutBinding;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemLaneGuidanceLayoutBinding;
            }
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
        export module maneuver {
          export module databinding {
            export class MapboxItemUpcomingManeuversLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.databinding.MapboxItemUpcomingManeuversLayoutBinding>;
              public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
              public static inflate(param0: globalAndroid.view.LayoutInflater): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemUpcomingManeuversLayoutBinding;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemUpcomingManeuversLayoutBinding;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.mapbox.navigation.ui.maneuver.databinding.MapboxItemUpcomingManeuversLayoutBinding;
            }
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
        export module maneuver {
          export module databinding {
            export class MapboxMainManeuverLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.databinding.MapboxMainManeuverLayoutBinding>;
              public mainManeuverGuideline: androidx.constraintlayout.widget.Guideline;
              public maneuverIcon: com.mapbox.navigation.ui.maneuver.view.MapboxTurnIconManeuver;
              public primaryManeuverText: com.mapbox.navigation.ui.maneuver.view.MapboxPrimaryManeuver;
              public secondaryManeuverText: com.mapbox.navigation.ui.maneuver.view.MapboxSecondaryManeuver;
              public stepDistance: com.mapbox.navigation.ui.maneuver.view.MapboxStepDistance;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.maneuver.databinding.MapboxMainManeuverLayoutBinding;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.maneuver.databinding.MapboxMainManeuverLayoutBinding;
              public getRoot(): globalAndroid.view.View;
            }
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
        export module maneuver {
          export module databinding {
            export class MapboxManeuverLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.databinding.MapboxManeuverLayoutBinding>;
              public laneGuidanceRecycler: androidx.recyclerview.widget.RecyclerView;
              public mainManeuverLayout: androidx.constraintlayout.widget.ConstraintLayout;
              public maneuver: androidx.cardview.widget.CardView;
              public subManeuverLayout: androidx.constraintlayout.widget.ConstraintLayout;
              public upcomingManeuverRecycler: com.mapbox.navigation.ui.maneuver.view.MapboxManeuversList;
              public static inflate(param0: globalAndroid.view.LayoutInflater): com.mapbox.navigation.ui.maneuver.databinding.MapboxManeuverLayoutBinding;
              public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.mapbox.navigation.ui.maneuver.databinding.MapboxManeuverLayoutBinding;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.maneuver.databinding.MapboxManeuverLayoutBinding;
            }
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
        export module maneuver {
          export module databinding {
            export class MapboxSubManeuverLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.databinding.MapboxSubManeuverLayoutBinding>;
              public subManeuverGuideline: androidx.constraintlayout.widget.Guideline;
              public subManeuverIcon: com.mapbox.navigation.ui.maneuver.view.MapboxTurnIconManeuver;
              public subManeuverText: com.mapbox.navigation.ui.maneuver.view.MapboxSubManeuver;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.maneuver.databinding.MapboxSubManeuverLayoutBinding;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.maneuver.databinding.MapboxSubManeuverLayoutBinding;
              public getRoot(): globalAndroid.view.View;
            }
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
        export module maneuver {
          export module internal {
            export class ManeuverComponent {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.internal.ManeuverComponent>;
              public getStyleId(): string;
              public getManeuverApi(): com.mapbox.navigation.ui.maneuver.api.MapboxManeuverApi;
              public getOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions;
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public getUserId(): string;
              public getContract(): com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.maneuver.internal.ManeuverComponentContract>;
              public getManeuverView(): com.mapbox.navigation.ui.maneuver.view.MapboxManeuverView;
              public constructor(param0: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverView, param1: string, param2: string, param3: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions, param4: com.mapbox.navigation.base.formatter.DistanceFormatterOptions, param5: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.maneuver.internal.ManeuverComponentContract>, param6: com.mapbox.navigation.ui.maneuver.api.MapboxManeuverApi);
            }
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
        export module maneuver {
          export module internal {
            export class ManeuverComponentContract {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.internal.ManeuverComponentContract>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.maneuver.internal.ManeuverComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onManeuverViewStateChanged(param0: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState): void; onManeuverViewVisibilityChanged(param0: boolean): void });
              public constructor();
              public onManeuverViewVisibilityChanged(param0: boolean): void;
              public onManeuverViewStateChanged(param0: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState): void;
            }
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
        export module maneuver {
          export module model {
            export class Component {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.Component>;
              public constructor(param0: string, param1: com.mapbox.navigation.ui.maneuver.model.ComponentNode);
              public component2(): com.mapbox.navigation.ui.maneuver.model.ComponentNode;
              public hashCode(): number;
              public getNode(): com.mapbox.navigation.ui.maneuver.model.ComponentNode;
              public copy(param0: string, param1: com.mapbox.navigation.ui.maneuver.model.ComponentNode): com.mapbox.navigation.ui.maneuver.model.Component;
              public toString(): string;
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
      export module ui {
        export module maneuver {
          export module model {
            export class ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ComponentNode>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.maneuver.model.ComponentNode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
      export module ui {
        export module maneuver {
          export module model {
            export class DelimiterComponentNode extends com.mapbox.navigation.ui.maneuver.model.ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.DelimiterComponentNode>;
              public getText(): string;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.DelimiterComponentNode.Builder;
            }
            export module DelimiterComponentNode {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.DelimiterComponentNode.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.DelimiterComponentNode;
                public text(param0: string): com.mapbox.navigation.ui.maneuver.model.DelimiterComponentNode.Builder;
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
        export module maneuver {
          export module model {
            export class ExitComponentNode extends com.mapbox.navigation.ui.maneuver.model.ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ExitComponentNode>;
              public getText(): string;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ExitComponentNode.Builder;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export module ExitComponentNode {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ExitComponentNode.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.ExitComponentNode;
                public constructor();
                public text(param0: string): com.mapbox.navigation.ui.maneuver.model.ExitComponentNode.Builder;
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
        export module maneuver {
          export module model {
            export class ExitNumberComponentNode extends com.mapbox.navigation.ui.maneuver.model.ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode>;
              public getText(): string;
              public hashCode(): number;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode.Builder;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export module ExitNumberComponentNode {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode.Builder>;
                public text(param0: string): com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode;
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
        export module maneuver {
          export module model {
            export class ExitStyleGenerator {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ExitStyleGenerator>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.ExitStyleGenerator;
              public styleAndGetExit(param0: string, param1: globalAndroid.widget.TextView, param2: number, param3: globalAndroid.content.res.Resources): globalAndroid.text.SpannableStringBuilder;
            }
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
        export module maneuver {
          export module model {
            export class Lane {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.Lane>;
              public constructor();
              public getAllLanes(): java.util.List<com.mapbox.navigation.ui.maneuver.model.LaneIndicator>;
              public hashCode(): number;
              public toString(): string;
              public constructor(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.LaneIndicator>);
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
      export module ui {
        export module maneuver {
          export module model {
            export class LaneFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.LaneFactory;
              public static buildLane(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.LaneIndicator>): com.mapbox.navigation.ui.maneuver.model.Lane;
            }
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
        export module maneuver {
          export module model {
            export class LaneIcon {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIcon>;
              public getDrawableResId(): number;
              public constructor(param0: number, param1: boolean);
              public hashCode(): number;
              public toString(): string;
              public getShouldFlip(): boolean;
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
      export module ui {
        export module maneuver {
          export module model {
            export class LaneIconError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIconError>;
              public getActiveDirection(): string;
              public constructor(param0: string, param1: com.mapbox.navigation.ui.maneuver.model.LaneIndicator, param2: string);
              public getLaneIndicator(): com.mapbox.navigation.ui.maneuver.model.LaneIndicator;
              public getErrorMessage(): string;
            }
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
        export module maneuver {
          export module model {
            export class LaneIconResources {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIconResources>;
              public getLaneOppositeSlightTurnOrSlightTurn(): number;
              public getLaneOppositeSlightTurnOrSlightTurnUsingSlightTurn(): number;
              public getLaneOppositeTurnOrStraightOrTurnUsingTurn(): number;
              public getLaneStraightOrSharpTurnUsingSharpTurn(): number;
              public getLaneOppositeTurnOrStraightOrSlightTurnUsingSlightTurn(): number;
              public getLaneStraightOrUturn(): number;
              public getLaneOppositeTurnOrSlightTurnUsingSlightTurn(): number;
              public getLaneOppositeTurnOrStraightOrSlightTurnUsingStraight(): number;
              public getLaneOppositeSlightTurnOrStraightOrSlightTurnUsingSlightTurn(): number;
              public getLaneSlightTurnOrTurnUsingTurn(): number;
              public getLaneOppositeSlightTurnOrStraightOrTurn(): number;
              public getLaneOppositeSlightTurnOrTurn(): number;
              public getLaneOppositeSlightTurnOrStraightOrSlightTurn(): number;
              public getLaneSlightTurn(): number;
              public getLaneOppositeTurnOrSlightTurn(): number;
              public getLaneSharpTurnUsingSharpTurn(): number;
              public getLaneTurnOrSharpTurn(): number;
              public getLaneSharpTurn(): number;
              public getLaneSlightTurnUsingSlightTurn(): number;
              public getLaneOppositeTurnOrStraightOrSlightTurn(): number;
              public getLaneStraight(): number;
              public getLaneStraightOrUturnUsingUturn(): number;
              public getLaneTurnOrUturnUsingTurn(): number;
              public getLaneStraightOrTurnUsingTurn(): number;
              public getLaneTurnOrSharpTurnUsingSharpTurn(): number;
              public getLaneStraightOrUturnUsingStraight(): number;
              public getLaneSlightTurnOrUturnUsingSlightTurn(): number;
              public getLaneOppositeTurnOrStraightOrTurnUsingStraight(): number;
              public getLaneStraightOrSlightTurnUsingStraight(): number;
              public getLaneStraightOrTurn(): number;
              public getLaneOppositeTurnOrTurn(): number;
              public getLaneStraightOrSlightTurnUsingSlightTurn(): number;
              public getLaneStraightOrTurnOrUturnUsingUturn(): number;
              public getLaneTurnOrUturn(): number;
              public equals(param0: any): boolean;
              public getLaneSlightTurnOrUturn(): number;
              public getLaneTurnUsingTurn(): number;
              public getLaneStraightUsingStraight(): number;
              public hashCode(): number;
              public getLaneSlightTurnOrTurn(): number;
              public getLaneTurnOrSharpTurnUsingTurn(): number;
              public getLaneStraightOrTurnOrUturnUsingStraight(): number;
              public toString(): string;
              public getLaneUturnUsingUturn(): number;
              public getLaneStraightOrSharpTurnUsingStraight(): number;
              public getLaneTurn(): number;
              public getLaneStraightOrSharpTurn(): number;
              public getLaneStraightOrSlightTurnOrTurnUsingSlightTurn(): number;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
              public getLaneSlightTurnOrUturnUsingUturn(): number;
              public getLaneOppositeSlightTurnOrStraightOrTurnUsingTurn(): number;
              public getLaneTurnOrUturnUsingUturn(): number;
              public getLaneStraightOrSlightTurnOrTurn(): number;
              public getLaneStraightOrTurnOrUturnUsingTurn(): number;
              public getLaneOppositeTurnOrTurnUsingTurn(): number;
              public getLaneOppositeTurnOrStraightOrTurn(): number;
              public getLaneStraightOrTurnUsingStraight(): number;
              public getLaneSlightTurnOrSharpTurn(): number;
              public getLaneUturn(): number;
              public getLaneOppositeSlightTurnOrStraightOrSlightTurnUsingStraight(): number;
              public getLaneOppositeSlightTurnOrTurnUsingTurn(): number;
              public getLaneStraightOrSlightTurnOrTurnUsingTurn(): number;
              public getLaneStraightOrSlightTurnOrTurnUsingStraight(): number;
              public getLaneStraightOrSlightTurn(): number;
              public getLaneSlightTurnOrTurnUsingSlightTurn(): number;
              public getLaneStraightOrTurnOrUturn(): number;
              public getLaneSlightTurnOrSharpTurnUsingSlightTurn(): number;
              public getLaneOppositeSlightTurnOrStraightOrTurnUsingStraight(): number;
              public getLaneSlightTurnOrSharpTurnUsingSharpTurn(): number;
            }
            export module LaneIconResources {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder>;
                public laneSlightTurnOrUturnUsingUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSharpTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrTurnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrSharpTurnUsingSharpTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSharpTurnUsingSharpTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrUturnUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnUsingSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrSharpTurnUsingSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrSharpTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrSlightTurnUsingSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public constructor();
                public laneSlightTurnOrUturnUsingSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrUturnUsingUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnOrUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrTurnUsingSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrSlightTurnUsingSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrUturnUsingUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrTurnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrSlightTurnUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.LaneIconResources;
                public laneOppositeSlightTurnOrTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnOrTurnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneUturnUsingUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrTurnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSharpTurnUsingSharpTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrTurnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSharpTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnOrTurnUsingSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnUsingSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrSlightTurnUsingSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnOrTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnOrUturnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnOrTurnUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrStraightOrTurnUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrTurnUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSharpTurnUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrUturnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrSharpTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurnOrSharpTurnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrTurnUsingTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrSlightTurnUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrSlightTurnUsingSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeTurnOrStraightOrTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneOppositeSlightTurnOrSlightTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnOrUturnUsingUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrSlightTurnUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneStraightOrTurnOrUturnUsingStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrSharpTurnUsingSharpTurn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
                public laneSlightTurnOrUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.LaneIconResources.Builder;
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
        export module maneuver {
          export module model {
            export class LaneIndicator {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIndicator>;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder;
              public getActiveDirection(): string;
              public isActive(): boolean;
              public hashCode(): number;
              public getDirections(): java.util.List<string>;
              public toString(): string;
              public getDrivingSide(): string;
              public equals(param0: any): boolean;
            }
            export module LaneIndicator {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.LaneIndicator;
                public drivingSide(param0: string): com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder;
                public isActive(param0: boolean): com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder;
                public constructor();
                public activeDirection(param0: string): com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder;
                public directions(param0: java.util.List<string>): com.mapbox.navigation.ui.maneuver.model.LaneIndicator.Builder;
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
        export module maneuver {
          export module model {
            export class LegIndexToManeuvers {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers>;
              public constructor(param0: number, param1: java.util.List<com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers>);
              public component1(): number;
              public hashCode(): number;
              public getLegIndex(): number;
              public component2(): java.util.List<com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers>;
              public getStepIndexToManeuvers(): java.util.List<com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers>;
              public toString(): string;
              public equals(param0: any): boolean;
              public copy(param0: number, param1: java.util.List<com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers>): com.mapbox.navigation.ui.maneuver.model.LegIndexToManeuvers;
            }
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
        export module maneuver {
          export module model {
            export class Maneuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
              public copy$libnavui_maneuver_release(param0: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, param1: com.mapbox.navigation.ui.maneuver.model.StepDistance, param2: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, param3: com.mapbox.navigation.ui.maneuver.model.SubManeuver, param4: com.mapbox.navigation.ui.maneuver.model.Lane, param5: com.mapbox.geojson.Point): com.mapbox.navigation.ui.maneuver.model.Maneuver;
              public constructor(param0: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, param1: com.mapbox.navigation.ui.maneuver.model.StepDistance, param2: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, param3: com.mapbox.navigation.ui.maneuver.model.SubManeuver, param4: com.mapbox.navigation.ui.maneuver.model.Lane, param5: com.mapbox.geojson.Point);
              public getLaneGuidance(): com.mapbox.navigation.ui.maneuver.model.Lane;
              public hashCode(): number;
              public getSecondary(): com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver;
              public getManeuverPoint(): com.mapbox.geojson.Point;
              public getStepDistance(): com.mapbox.navigation.ui.maneuver.model.StepDistance;
              public equals(param0: any): boolean;
              public getSub(): com.mapbox.navigation.ui.maneuver.model.SubManeuver;
              public getPrimary(): com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver;
            }
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
        export module maneuver {
          export module model {
            export class ManeuverError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverError>;
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

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module maneuver {
          export module model {
            export class ManeuverErrorFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverErrorFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.ManeuverErrorFactory;
              public static buildManeuverError(param0: string, param1: java.lang.Throwable): com.mapbox.navigation.ui.maneuver.model.ManeuverError;
            }
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
        export module maneuver {
          export module model {
            export class ManeuverExitOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions>;
              public hashCode(): number;
              public getTextAppearance(): number;
              public getMutcdExitProperties(): com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesMutcd;
              public toString(): string;
              public equals(param0: any): boolean;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions.Builder;
              public getViennaExitProperties(): com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesVienna;
            }
            export module ManeuverExitOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions.Builder>;
                public textAppearance(param0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions;
                public constructor();
                public mutcdExitProperties(param0: com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesMutcd): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions.Builder;
                public viennaExitProperties(param0: com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesVienna): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions.Builder;
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
        export module maneuver {
          export module model {
            export class ManeuverFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.ManeuverFactory;
              public static buildManeuver(param0: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, param1: com.mapbox.navigation.ui.maneuver.model.StepDistance, param2: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, param3: com.mapbox.navigation.ui.maneuver.model.SubManeuver, param4: com.mapbox.navigation.ui.maneuver.model.Lane, param5: com.mapbox.geojson.Point): com.mapbox.navigation.ui.maneuver.model.Maneuver;
            }
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
        export module maneuver {
          export module model {
            export class ManeuverInstructionGenerator {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverInstructionGenerator>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.ManeuverInstructionGenerator;
              public generateSecondary(param0: globalAndroid.content.Context, param1: number, param2: com.mapbox.navigation.ui.maneuver.view.MapboxExitText, param3: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, param4: java.util.Set<any>): globalAndroid.text.SpannableStringBuilder;
              public generateSub(param0: globalAndroid.content.Context, param1: number, param2: com.mapbox.navigation.ui.maneuver.view.MapboxExitText, param3: com.mapbox.navigation.ui.maneuver.model.SubManeuver, param4: java.util.Set<any>): globalAndroid.text.SpannableStringBuilder;
              public generatePrimary(param0: globalAndroid.content.Context, param1: number, param2: com.mapbox.navigation.ui.maneuver.view.MapboxExitText, param3: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, param4: java.util.Set<any>): globalAndroid.text.SpannableStringBuilder;
            }
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
        export module maneuver {
          export module model {
            export class ManeuverOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverOptions>;
              public getFilterDuplicateManeuvers(): boolean;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions.Builder;
            }
            export module ManeuverOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverOptions.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions;
                public filterDuplicateManeuvers(param0: boolean): com.mapbox.navigation.ui.maneuver.model.ManeuverOptions.Builder;
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
        export module maneuver {
          export module model {
            export class ManeuverPrimaryOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions>;
              public hashCode(): number;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions.Builder;
              public getTextAppearance(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public getExitOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions;
            }
            export module ManeuverPrimaryOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions;
                public exitOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions.Builder;
                public constructor();
                public textAppearance(param0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions.Builder;
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
        export module maneuver {
          export module model {
            export class ManeuverSecondaryOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions>;
              public hashCode(): number;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions.Builder;
              public getTextAppearance(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public getExitOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions;
            }
            export module ManeuverSecondaryOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions;
                public textAppearance(param0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions.Builder;
                public exitOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions.Builder;
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
        export module maneuver {
          export module model {
            export class ManeuverSubOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions>;
              public hashCode(): number;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions.Builder;
              public getTextAppearance(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public getExitOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions;
            }
            export module ManeuverSubOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions.Builder>;
                public textAppearance(param0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions.Builder;
                public constructor();
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions;
                public exitOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverExitOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions.Builder;
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
        export module maneuver {
          export module model {
            export class ManeuverViewOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions>;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
              public getStepDistanceTextAppearance(): number;
              public getManeuverBackgroundColor(): number;
              public hashCode(): number;
              public getSubManeuverBackgroundColor(): number;
              public getPrimaryManeuverOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions;
              public toString(): string;
              public getLaneGuidanceTurnIconManeuver(): number;
              public getSecondaryManeuverOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions;
              public equals(param0: any): boolean;
              public getSubManeuverOptions(): com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions;
              public getTurnIconManeuver(): number;
              public getUpcomingManeuverBackgroundColor(): number;
            }
            export module ManeuverViewOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder>;
                public maneuverBackgroundColor(param0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public upcomingManeuverBackgroundColor(param0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions;
                public laneGuidanceTurnIconManeuver(param0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public secondaryManeuverOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public turnIconManeuver(param0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public stepDistanceTextAppearance(param0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public constructor();
                public subManeuverBackgroundColor(param0: number): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public subManeuverOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
                public primaryManeuverOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions): com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions.Builder;
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
        export module maneuver {
          export module model {
            export abstract class MapboxExitProperties {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties>;
              public getFallbackDrawable(): number;
              public getExitLeftDrawable(): number;
              public getShouldFallbackWithDrawable(): boolean;
              public getExitRightDrawable(): number;
              public getShouldFallbackWithText(): boolean;
              public getExitBackground(): number;
            }
            export module MapboxExitProperties {
              export class PropertiesMutcd extends com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesMutcd>;
                public constructor();
                public constructor(param0: boolean, param1: boolean, param2: number, param3: number, param4: number, param5: number);
              }
              export class PropertiesVienna extends com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties.PropertiesVienna>;
                public constructor();
                public constructor(param0: boolean, param1: boolean, param2: number, param3: number, param4: number, param5: number);
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
        export module maneuver {
          export module model {
            export class PrimaryManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver>;
              public constructor();
              public constructor(param0: string, param1: string, param2: string, param3: java.lang.Double, param4: string, param5: string, param6: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>);
              public getText(): string;
              public getComponentList(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>;
              public hashCode(): number;
              public getId(): string;
              public getDegrees(): java.lang.Double;
              public toString(): string;
              public getModifier(): string;
              public getDrivingSide(): string;
              public equals(param0: any): boolean;
              public getType(): string;
            }
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
        export module maneuver {
          export module model {
            export class PrimaryManeuverFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.PrimaryManeuverFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuverFactory;
              public static buildPrimaryManeuver(param0: string, param1: string, param2: string, param3: number, param4: string, param5: string, param6: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>): com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver;
            }
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
        export module maneuver {
          export module model {
            export class RoadShield {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.RoadShield>;
              public getShieldUrl(): string;
              public hashCode(): number;
              public toString(): string;
              public component2(): androidNative.Array<number>;
              public equals(param0: any): boolean;
              public getShieldIcon(): androidNative.Array<number>;
              public setShieldIcon(param0: androidNative.Array<number>): void;
              public constructor(param0: string, param1: androidNative.Array<number>);
              public component1(): string;
              public copy(param0: string, param1: androidNative.Array<number>): com.mapbox.navigation.ui.maneuver.model.RoadShield;
            }
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
        export module maneuver {
          export module model {
            export class RoadShieldComponentNode extends com.mapbox.navigation.ui.maneuver.model.ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode>;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode.Builder;
              public getText(): string;
              public getShieldUrl(): string;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public getMapboxShield(): com.mapbox.api.directions.v5.models.MapboxShield;
            }
            export module RoadShieldComponentNode {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode.Builder>;
                public text(param0: string): com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode.Builder;
                public constructor();
                public build(): com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode;
                public mapboxShield(param0: com.mapbox.api.directions.v5.models.MapboxShield): com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode.Builder;
                public shieldUrl(param0: string): com.mapbox.navigation.ui.maneuver.model.RoadShieldComponentNode.Builder;
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
        export module maneuver {
          export module model {
            export class RoadShieldError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.RoadShieldError>;
              public component2(): string;
              public hashCode(): number;
              public getUrl(): string;
              public constructor(param0: string, param1: string);
              public toString(): string;
              public equals(param0: any): boolean;
              public getMessage(): string;
              public copy(param0: string, param1: string): com.mapbox.navigation.ui.maneuver.model.RoadShieldError;
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
      export module ui {
        export module maneuver {
          export module model {
            export class RoadShieldGenerator {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.RoadShieldGenerator>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.RoadShieldGenerator;
              public styleAndGetRoadShield(param0: string, param1: number, param2: globalAndroid.content.res.Resources, param3: com.mapbox.navigation.ui.shield.model.RouteShield): globalAndroid.text.SpannableStringBuilder;
            }
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
        export module maneuver {
          export module model {
            export class SecondaryManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver>;
              public constructor();
              public constructor(param0: string, param1: string, param2: string, param3: java.lang.Double, param4: string, param5: string, param6: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>);
              public getText(): string;
              public getComponentList(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>;
              public hashCode(): number;
              public getId(): string;
              public getDegrees(): java.lang.Double;
              public toString(): string;
              public getModifier(): string;
              public getDrivingSide(): string;
              public equals(param0: any): boolean;
              public getType(): string;
            }
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
        export module maneuver {
          export module model {
            export class SecondaryManeuverFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.SecondaryManeuverFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuverFactory;
              public static buildSecondaryManeuver(param0: string, param1: string, param2: string, param3: number, param4: string, param5: string, param6: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>): com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver;
            }
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
        export module maneuver {
          export module model {
            export class StepDistance {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.StepDistance>;
              public getDistanceFormatter(): com.mapbox.navigation.base.formatter.DistanceFormatter;
              public hashCode(): number;
              public constructor(param0: com.mapbox.navigation.base.formatter.DistanceFormatter, param1: number, param2: java.lang.Double);
              public setDistanceRemaining(param0: java.lang.Double): void;
              public getDistanceRemaining(): java.lang.Double;
              public getTotalDistance(): number;
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
      export module ui {
        export module maneuver {
          export module model {
            export class StepIndexToManeuvers {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers>;
              public getManeuverList(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
              public component1(): number;
              public hashCode(): number;
              public constructor(param0: number, param1: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>);
              public component2(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>;
              public copy(param0: number, param1: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>): com.mapbox.navigation.ui.maneuver.model.StepIndexToManeuvers;
              public toString(): string;
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
      export module ui {
        export module maneuver {
          export module model {
            export class SubManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.SubManeuver>;
              public constructor();
              public constructor(param0: string, param1: string, param2: string, param3: java.lang.Double, param4: string, param5: string, param6: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>);
              public getText(): string;
              public getComponentList(): java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>;
              public hashCode(): number;
              public getId(): string;
              public getDegrees(): java.lang.Double;
              public toString(): string;
              public getModifier(): string;
              public getDrivingSide(): string;
              public equals(param0: any): boolean;
              public getType(): string;
            }
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
        export module maneuver {
          export module model {
            export class SubManeuverFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.SubManeuverFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.maneuver.model.SubManeuverFactory;
              public static buildSubManeuver(param0: string, param1: string, param2: string, param3: number, param4: string, param5: string, param6: java.util.List<com.mapbox.navigation.ui.maneuver.model.Component>): com.mapbox.navigation.ui.maneuver.model.SubManeuver;
            }
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
        export module maneuver {
          export module model {
            export class TextComponentNode extends com.mapbox.navigation.ui.maneuver.model.ComponentNode {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TextComponentNode>;
              public getText(): string;
              public hashCode(): number;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.TextComponentNode.Builder;
              public toString(): string;
              public getAbbrPriority(): java.lang.Integer;
              public equals(param0: any): boolean;
              public getAbbr(): string;
            }
            export module TextComponentNode {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TextComponentNode.Builder>;
                public build(): com.mapbox.navigation.ui.maneuver.model.TextComponentNode;
                public abbr(param0: string): com.mapbox.navigation.ui.maneuver.model.TextComponentNode.Builder;
                public constructor();
                public abbrPriority(param0: java.lang.Integer): com.mapbox.navigation.ui.maneuver.model.TextComponentNode.Builder;
                public text(param0: string): com.mapbox.navigation.ui.maneuver.model.TextComponentNode.Builder;
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
        export module maneuver {
          export module model {
            export class TurnIconError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TurnIconError>;
              public getDegrees(): java.lang.Float;
              public constructor(param0: string, param1: string, param2: java.lang.Float, param3: string, param4: string);
              public getModifier(): string;
              public getDrivingSide(): string;
              public getType(): string;
              public getErrorMessage(): string;
            }
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
        export module maneuver {
          export module model {
            export class TurnIconResources {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TurnIconResources>;
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
              public equals(param0: any): boolean;
              public getTurnIconRotarySharpRight(): number;
              public getTurnIconInvalidUturn(): number;
              public getTurnIconForkRight(): number;
              public getTurnIconForkSlightLeft(): number;
              public getTurnIconForkSlightRight(): number;
              public getTurnIconRotary(): number;
              public hashCode(): number;
              public getTurnIconDepartStraight(): number;
              public getTurnIconOffRamp(): number;
              public toBuilder(): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
              public getTurnIconOnRampSlightLeft(): number;
              public getTurnIconOnRampStraight(): number;
              public toString(): string;
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
              public static defaultIconSet(): com.mapbox.navigation.ui.maneuver.model.TurnIconResources;
              public getTurnIconInvalidSlightRight(): number;
              public getTurnIconOffRampSlightLeft(): number;
              public getTurnIconContinue(): number;
              public getTurnIconRoundaboutSlightLeft(): number;
              public getTurnIconContinueRight(): number;
              public getTurnIconOnRampSharpRight(): number;
              public getTurnIconOffRampLeft(): number;
              public getTurnIconDepartLeft(): number;
            }
            export module TurnIconResources {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder>;
                public turnIconNewNameSharpLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotaryStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconArriveRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotarySharpLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconEndRoadLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameSharpRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationSlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalid(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueSlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconEndRoadRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRamp(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutSlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnSlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameSlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueSlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampSharpLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconDepartRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconForkSlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidSlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconArrive(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconMergeSlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutSharpLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconDepartStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconForkLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationSharpRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public constructor();
                public turnIconContinueLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampSlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutSlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinueStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconDepart(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconArriveLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconForkSlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidSlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotaryRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampSharpRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconForkStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconContinue(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotarySlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampSlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotarySharpRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOffRampSlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameSlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconMergeLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconForkRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOffRamp(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnSlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotarySlightLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOffRampRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconArriveStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public build(): com.mapbox.navigation.ui.maneuver.model.TurnIconResources;
                public turnIconRotaryLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNewNameRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconDepartLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnSharpLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationSlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconUturn(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconInvalidLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOffRampLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOffRampSlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconTurnSharpRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRotary(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconFork(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRamp(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundaboutSharpRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconMergeSlightRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconOnRampLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconMergeStraight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconNotificationSharpLeft(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconRoundabout(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
                public turnIconMergeRight(param0: number): com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Builder;
              }
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.model.TurnIconResources.Companion>;
                public defaultIconSet(): com.mapbox.navigation.ui.maneuver.model.TurnIconResources;
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
        export module maneuver {
          export module view {
            export class MapboxExitText {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxExitText>;
              public updateExitProperties(param0: com.mapbox.navigation.ui.maneuver.model.MapboxExitProperties): void;
              public getViewAsBitmap(): globalAndroid.graphics.Bitmap;
              public setExit(param0: string, param1: com.mapbox.navigation.ui.maneuver.model.ExitNumberComponentNode): void;
              public updateTextAppearance(param0: number): void;
              /** @deprecated */
              public setExitStyle(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public styleExitWith(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.drawable.Drawable;
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
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxLaneGuidance {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidance>;
              public renderLane(param0: com.mapbox.navigation.ui.maneuver.model.LaneIcon, param1: androidx.appcompat.view.ContextThemeWrapper): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
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
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxLaneGuidanceAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidanceAdapter.MapboxLaneGuidanceViewHolder> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidanceAdapter>;
              public updateStyle(param0: number): void;
              public getItemCount(): number;
              public removeLanes(): void;
              public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidanceAdapter.MapboxLaneGuidanceViewHolder;
              public addLanes(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.LaneIndicator>): void;
              public constructor(param0: globalAndroid.content.Context);
              public onBindViewHolder(param0: com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidanceAdapter.MapboxLaneGuidanceViewHolder, param1: number): void;
            }
            export module MapboxLaneGuidanceAdapter {
              export class MapboxLaneGuidanceViewHolder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxLaneGuidanceAdapter.MapboxLaneGuidanceViewHolder>;
                public bindLaneIndicator(param0: com.mapbox.navigation.ui.maneuver.model.LaneIndicator): void;
                public constructor(param0: com.mapbox.navigation.ui.maneuver.databinding.MapboxItemLaneGuidanceLayoutBinding);
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
        export module maneuver {
          export module view {
            export class MapboxManeuverDiffCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverDiffCallback>;
              public getNewListSize(): number;
              public areItemsTheSame(param0: number, param1: number): boolean;
              public getOldListSize(): number;
              public areContentsTheSame(param0: number, param1: number): boolean;
              public constructor(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>, param1: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>);
            }
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
        export module maneuver {
          export module view {
            export class MapboxManeuverView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverView>;
              /** @deprecated */
              public updateStyle(param0: number): void;
              public renderRemoveLanes(): void;
              /** @deprecated */
              public updateUpcomingSecondaryManeuverTextAppearance(param0: number): void;
              /** @deprecated */
              public updateUpcomingManeuverStepDistanceTextAppearance(param0: number): void;
              public getUpcomingManeuverRenderingEnabled(): boolean;
              /** @deprecated */
              public updateTurnIconStyle(param0: number): void;
              public updateSubManeuverViewVisibility(param0: number): void;
              public updateUpcomingManeuversVisibility(param0: number): void;
              /** @deprecated */
              public updateLaneGuidanceIconStyle(param0: number): void;
              public setUpcomingManeuverRenderingEnabled(param0: boolean): void;
              public renderSecondary(param0: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, param1: java.util.Set<any>): void;
              /** @deprecated */
              public renderSubManeuver(param0: com.mapbox.navigation.ui.maneuver.model.SubManeuver, param1: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              public getManeuverViewState(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState>;
              /** @deprecated */
              public renderSubManeuver(param0: com.mapbox.navigation.ui.maneuver.model.SubManeuver): void;
              public updateSecondaryManeuverVisibility(param0: number): void;
              /** @deprecated */
              public updateSecondaryManeuverTextAppearance(param0: number): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              /** @deprecated */
              public renderManeuverShields(param0: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>): void;
              /** @deprecated */
              public renderSecondaryManeuver(param0: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, param1: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              public updateTurnIconResources(param0: com.mapbox.navigation.ui.maneuver.model.TurnIconResources): void;
              public renderPrimary(param0: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, param1: java.util.Set<any>): void;
              public renderManeuvers(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.maneuver.model.ManeuverError, java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>>): void;
              /** @deprecated */
              public updateUpcomingPrimaryManeuverTextAppearance(param0: number): void;
              public getUpcomingManeuverAdapter$libnavui_maneuver_release(): com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public renderManeuverWith(param0: java.util.List<any>): void;
              /** @deprecated */
              public updatePrimaryManeuverTextAppearance(param0: number): void;
              /** @deprecated */
              public renderPrimaryManeuver(param0: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, param1: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              /** @deprecated */
              public renderPrimaryManeuver(param0: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver): void;
              public updateManeuverViewOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions): void;
              public renderDistanceRemaining(param0: com.mapbox.navigation.ui.maneuver.model.StepDistance): void;
              /** @deprecated */
              public updateStepDistanceTextAppearance(param0: number): void;
              public renderAddLanes(param0: com.mapbox.navigation.ui.maneuver.model.Lane): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions);
              public updatePrimaryManeuverTextVisibility(param0: number): void;
              /** @deprecated */
              public updateSubManeuverTextAppearance(param0: number): void;
              public renderSub(param0: com.mapbox.navigation.ui.maneuver.model.SubManeuver, param1: java.util.Set<any>): void;
              public constructor(param0: globalAndroid.content.Context);
              /** @deprecated */
              public renderSecondaryManeuver(param0: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver): void;
            }
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
        export module maneuver {
          export module view {
            export abstract class MapboxManeuverViewState {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState>;
            }
            export module MapboxManeuverViewState {
              export class COLLAPSED extends com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState.COLLAPSED>;
                public static INSTANCE: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState.COLLAPSED;
              }
              export class EXPANDED extends com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState.EXPANDED>;
                public static INSTANCE: com.mapbox.navigation.ui.maneuver.view.MapboxManeuverViewState.EXPANDED;
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
        export module maneuver {
          export module view {
            export class MapboxManeuversList {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxManeuversList>;
              public requestLayout(): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
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
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxPrimaryManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxPrimaryManeuver>;
              /** @deprecated */
              public render(param0: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver): void;
              /** @deprecated */
              public render(param0: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, param1: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              public updateOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions);
              public renderManeuver(param0: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver, param1: java.util.Set<any>): void;
              public getOptions$libnavui_maneuver_release(): com.mapbox.navigation.ui.maneuver.model.ManeuverPrimaryOptions;
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
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxSecondaryManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxSecondaryManeuver>;
              public getOptions$libnavui_maneuver_release(): com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions;
              /** @deprecated */
              public render(param0: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions);
              public updateOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverSecondaryOptions): void;
              public renderManeuver(param0: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, param1: java.util.Set<any>): void;
              /** @deprecated */
              public render(param0: com.mapbox.navigation.ui.maneuver.model.SecondaryManeuver, param1: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
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
      export module ui {
        export module maneuver {
          export module view {
            export class MapboxStepDistance {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxStepDistance>;
              public renderDistanceRemaining(param0: com.mapbox.navigation.ui.maneuver.model.StepDistance): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public constructor(param0: globalAndroid.content.Context);
              public renderTotalStepDistance(param0: com.mapbox.navigation.ui.maneuver.model.StepDistance): void;
            }
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
        export module maneuver {
          export module view {
            export class MapboxSubManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxSubManeuver>;
              /** @deprecated */
              public render(param0: com.mapbox.navigation.ui.maneuver.model.SubManeuver, param1: com.mapbox.navigation.ui.maneuver.model.RoadShield): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions);
              public renderManeuver(param0: com.mapbox.navigation.ui.maneuver.model.SubManeuver, param1: java.util.Set<any>): void;
              public updateOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverSubOptions): void;
              public constructor(param0: globalAndroid.content.Context);
              /** @deprecated */
              public render(param0: com.mapbox.navigation.ui.maneuver.model.SubManeuver): void;
            }
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
        export module maneuver {
          export module view {
            export class MapboxTurnIconManeuver {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxTurnIconManeuver>;
              public updateTurnIconResources(param0: com.mapbox.navigation.ui.maneuver.model.TurnIconResources): void;
              public renderSubTurnIcon(param0: com.mapbox.navigation.ui.maneuver.model.SubManeuver): void;
              public updateTurnIconStyle(param0: androidx.appcompat.view.ContextThemeWrapper): void;
              public renderPrimaryTurnIcon(param0: com.mapbox.navigation.ui.maneuver.model.PrimaryManeuver): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public getTurnIconTheme$libnavui_maneuver_release(): androidx.appcompat.view.ContextThemeWrapper;
              public constructor(param0: globalAndroid.content.Context);
            }
            export module MapboxTurnIconManeuver {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxTurnIconManeuver.Companion>;
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
        export module maneuver {
          export module view {
            export class MapboxUpcomingManeuverAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter.MapboxUpcomingManeuverViewHolder> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter>;
              /** @deprecated */
              public updateRoadShields(param0: java.util.Map<string, com.mapbox.navigation.ui.maneuver.model.RoadShield>): void;
              /** @deprecated */
              public updateUpcomingManeuverStepDistanceTextAppearance(param0: number): void;
              /** @deprecated */
              public updateUpcomingSecondaryManeuverTextAppearance(param0: number): void;
              public updateManeuverViewOptions(param0: com.mapbox.navigation.ui.maneuver.model.ManeuverViewOptions): void;
              public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter.MapboxUpcomingManeuverViewHolder;
              /** @deprecated */
              public updateUpcomingPrimaryManeuverTextAppearance(param0: number): void;
              public addUpcomingManeuvers(param0: java.util.List<com.mapbox.navigation.ui.maneuver.model.Maneuver>): void;
              public getItemCount(): number;
              public updateShields(param0: java.util.Set<any>): void;
              public onBindViewHolder(param0: com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter.MapboxUpcomingManeuverViewHolder, param1: number): void;
              public updateUpcomingManeuverIconStyle(param0: androidx.appcompat.view.ContextThemeWrapper): void;
              public constructor(param0: globalAndroid.content.Context);
            }
            export module MapboxUpcomingManeuverAdapter {
              export class MapboxUpcomingManeuverViewHolder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.maneuver.view.MapboxUpcomingManeuverAdapter.MapboxUpcomingManeuverViewHolder>;
                public getViewBinding(): com.mapbox.navigation.ui.maneuver.databinding.MapboxMainManeuverLayoutBinding;
                public constructor(param0: com.mapbox.navigation.ui.maneuver.databinding.MapboxMainManeuverLayoutBinding);
                public bindUpcomingManeuver(param0: com.mapbox.navigation.ui.maneuver.model.Maneuver): void;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
