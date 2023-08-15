/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module tripprogress {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.BuildConfig>;
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
        export module tripprogress {
          export abstract class TripProgressAction {
            public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressAction>;
          }
          export module TripProgressAction {
            export class CalculateTripDetails extends com.mapbox.navigation.ui.tripprogress.TripProgressAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressAction.CalculateTripDetails>;
              public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public hashCode(): number;
              public copy(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.ui.tripprogress.TripProgressAction.CalculateTripDetails;
              public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute);
              public toString(): string;
              public equals(param0: any): boolean;
              public component1(): com.mapbox.navigation.base.route.NavigationRoute;
            }
            export class CalculateTripProgress extends com.mapbox.navigation.ui.tripprogress.TripProgressAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressAction.CalculateTripProgress>;
              public hashCode(): number;
              public component1(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public copy(param0: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.navigation.ui.tripprogress.TripProgressAction.CalculateTripProgress;
              public constructor(param0: com.mapbox.navigation.base.trip.model.RouteProgress);
              public toString(): string;
              public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
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
        export module tripprogress {
          export class TripProgressConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressConfig>;
            public getTripProgressFormatter(): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter;
            public constructor(param0: globalAndroid.content.Context);
            public getTripOverviewRoutes(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>;
            public setTripProgressFormatter(param0: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter): void;
            public setTripOverviewRoutes(param0: kotlinx.coroutines.flow.Flow<any>): void;
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
        export module tripprogress {
          export class TripProgressProcessor {
            public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressProcessor>;
            public constructor();
            public process(param0: com.mapbox.navigation.ui.tripprogress.TripProgressAction): com.mapbox.navigation.ui.tripprogress.TripProgressResult;
          }
          export module TripProgressProcessor {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressProcessor.WhenMappings>;
            }
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
        export module tripprogress {
          export abstract class TripProgressResult {
            public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult>;
          }
          export module TripProgressResult {
            export class RouteProgressCalculation extends com.mapbox.navigation.ui.tripprogress.TripProgressResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult.RouteProgressCalculation>;
              public getEstimatedTimeToArrival(): number;
              public hashCode(): number;
              public component2(): number;
              public component5(): number;
              public copy(param0: number, param1: number, param2: number, param3: number, param4: number): com.mapbox.navigation.ui.tripprogress.TripProgressResult.RouteProgressCalculation;
              public toString(): string;
              public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
              public getTotalTimeRemaining(): number;
              public getCurrentLegTimeRemaining(): number;
              public getPercentRouteTraveled(): number;
              public component1(): number;
              public component4(): number;
              public getDistanceRemaining(): number;
              public component3(): number;
              public equals(param0: any): boolean;
            }
            export abstract class TripOverview extends com.mapbox.navigation.ui.tripprogress.TripProgressResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview>;
            }
            export module TripOverview {
              export class Failure extends com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.Failure>;
                public component1(): string;
                public getErrorMessage(): string;
                public toString(): string;
                public constructor(param0: string, param1: java.lang.Throwable);
                public equals(param0: any): boolean;
                public copy(param0: string, param1: java.lang.Throwable): com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.Failure;
                public hashCode(): number;
                public getThrowable(): java.lang.Throwable;
                public component2(): java.lang.Throwable;
              }
              export class RouteLegTripOverview {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview>;
                public toString(): string;
                public getLegDistance(): number;
                public copy(param0: number, param1: number, param2: number, param3: number): com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public getLegIndex(): number;
                public getEstimatedTimeToArrival(): number;
                public equals(param0: any): boolean;
                public component3(): number;
                public getLegTime(): number;
                public component1(): number;
                public component4(): number;
                public component2(): number;
                public hashCode(): number;
              }
              export class Success extends com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.Success>;
                public toString(): string;
                public equals(param0: any): boolean;
                public component3(): number;
                public getRouteLegTripDetail(): java.util.List<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview>;
                public component1(): java.util.List<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview>;
                public getTotalEstimatedTimeToArrival(): number;
                public copy(param0: java.util.List<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview>, param1: number, param2: number, param3: number): com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.Success;
                public getTotalDistance(): number;
                public component4(): number;
                public component2(): number;
                public getTotalTime(): number;
                public hashCode(): number;
                public constructor(param0: java.util.List<com.mapbox.navigation.ui.tripprogress.TripProgressResult.TripOverview.RouteLegTripOverview>, param1: number, param2: number, param3: number);
              }
            }
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
        export module tripprogress {
          export module api {
            export class MapboxTripProgressApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.api.MapboxTripProgressApi>;
              public setFormatter(param0: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter): void;
              public getTripProgress(param0: com.mapbox.navigation.base.trip.model.RouteProgress): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateValue;
              public constructor(param0: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter);
              public getTripDetails(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.tripprogress.model.TripOverviewError, com.mapbox.navigation.ui.tripprogress.model.TripOverviewValue>;
              public constructor(param0: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter, param1: com.mapbox.navigation.ui.tripprogress.TripProgressProcessor);
              public getFormatter(): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter;
            }
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
        export module tripprogress {
          export module databinding {
            export class MapboxTripProgressLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.databinding.MapboxTripProgressLayoutBinding>;
              public distanceRemainingIcon: globalAndroid.widget.ImageView;
              public distanceRemainingLayout: androidx.appcompat.widget.LinearLayoutCompat;
              public distanceRemainingText: com.mapbox.navigation.ui.tripprogress.view.DistanceRemainingView;
              public estimatedArrivalTimeLayout: androidx.appcompat.widget.LinearLayoutCompat;
              public estimatedTimeToArriveIcon: globalAndroid.widget.ImageView;
              public estimatedTimeToArriveText: com.mapbox.navigation.ui.tripprogress.view.EstimatedArrivalTimeView;
              public timeRemainingText: com.mapbox.navigation.ui.tripprogress.view.TimeRemainingView;
              public tripProgressContainer: androidx.constraintlayout.widget.ConstraintLayout;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.tripprogress.databinding.MapboxTripProgressLayoutBinding;
              public getRoot(): globalAndroid.view.View;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.tripprogress.databinding.MapboxTripProgressLayoutBinding;
            }
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
        export module tripprogress {
          export module internal {
            export module ui {
              export class MapboxTripProgressComponentContract extends com.mapbox.navigation.ui.tripprogress.internal.ui.TripProgressComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.internal.ui.MapboxTripProgressComponentContract>;
                public constructor(param0: kotlinx.coroutines.flow.Flow<any>);
                public constructor();
                public getPreviewRoutes(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>;
              }
            }
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
        export module tripprogress {
          export module internal {
            export module ui {
              export class TripProgressComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.internal.ui.TripProgressComponent>;
                public constructor(param0: com.mapbox.navigation.ui.tripprogress.view.MapboxTripProgressView, param1: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.tripprogress.internal.ui.TripProgressComponentContract>, param2: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter, param3: com.mapbox.navigation.ui.tripprogress.api.MapboxTripProgressApi);
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
        export module tripprogress {
          export module internal {
            export module ui {
              export class TripProgressComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.internal.ui.TripProgressComponentContract>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.tripprogress.internal.ui.TripProgressComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getPreviewRoutes(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>> });
                public constructor();
                public getPreviewRoutes(): kotlinx.coroutines.flow.Flow<java.util.List<com.mapbox.navigation.base.route.NavigationRoute>>;
              }
            }
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
        export module tripprogress {
          export module model {
            export class DistanceRemainingFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<java.lang.Double, globalAndroid.text.SpannableString> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.DistanceRemainingFormatter>;
              public format(param0: number): globalAndroid.text.SpannableString;
              public constructor(param0: com.mapbox.navigation.base.formatter.DistanceFormatterOptions);
            }
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
        export module tripprogress {
          export module model {
            export class EstimatedTimeToArrivalFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<java.lang.Long, globalAndroid.text.SpannableString> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.EstimatedTimeToArrivalFormatter>;
              public constructor(param0: globalAndroid.content.Context, param1: number);
              public format(param0: number): globalAndroid.text.SpannableString;
            }
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
        export module tripprogress {
          export module model {
            export class PercentDistanceTraveledFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<java.lang.Double, globalAndroid.text.SpannableString> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.PercentDistanceTraveledFormatter>;
              public constructor();
              public format(param0: number): globalAndroid.text.SpannableString;
            }
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
        export module tripprogress {
          export module model {
            export class RouteLegTripOverview {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.RouteLegTripOverview>;
              public getEstimatedTimeToArrival(): number;
              public getLegTime(): number;
              public getLegIndex(): number;
              public getLegDistance(): number;
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
    export module navigation {
      export module ui {
        export module tripprogress {
          export module model {
            export class TimeRemainingFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<java.lang.Double, globalAndroid.text.SpannableString> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TimeRemainingFormatter>;
              public constructor(param0: globalAndroid.content.Context, param1: java.util.Locale);
              public format(param0: number): globalAndroid.text.SpannableString;
              public setLocale(param0: java.util.Locale): void;
              public getLocale(): java.util.Locale;
            }
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
        export module tripprogress {
          export module model {
            export class TripOverviewError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripOverviewError>;
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
        export module tripprogress {
          export module model {
            export class TripOverviewValue {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripOverviewValue>;
              public getTotalEstimatedTimeToArrival(): number;
              public getRouteLegTripDetail(): java.util.List<com.mapbox.navigation.ui.tripprogress.model.RouteLegTripOverview>;
              public getTotalDistance(): number;
              public getFormatter(): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter;
              public constructor(param0: java.util.List<com.mapbox.navigation.ui.tripprogress.model.RouteLegTripOverview>, param1: number, param2: number, param3: number, param4: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter);
              public getTotalTime(): number;
            }
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
        export module tripprogress {
          export module model {
            export class TripProgressUpdateFormatter {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter>;
              public getEstimatedTimeToArrival(param0: number): globalAndroid.text.SpannableString;
              public hashCode(): number;
              public getPercentRouteTraveled(param0: number): globalAndroid.text.SpannableString;
              public getTimeRemaining(param0: number): globalAndroid.text.SpannableString;
              public toBuilder(param0: globalAndroid.content.Context): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder;
              public toString(): string;
              public equals(param0: any): boolean;
              public getDistanceRemaining(param0: number): globalAndroid.text.SpannableString;
            }
            export module TripProgressUpdateFormatter {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder>;
                public estimatedTimeToArrivalFormatter(param0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, any>): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder;
                public timeRemainingFormatter(param0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, any>): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder;
                public distanceRemainingFormatter(param0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, any>): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder;
                public constructor(param0: globalAndroid.content.Context);
                public percentRouteTraveledFormatter(param0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, any>): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder;
                public build(): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter;
              }
              export module Builder {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Builder.WhenMappings>;
                }
              }
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter.Companion>;
              }
            }
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
        export module tripprogress {
          export module model {
            export class TripProgressUpdateValue {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateValue>;
              public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter);
              public getCurrentLegTimeRemaining(): number;
              public getPercentRouteTraveled(): number;
              public getEstimatedTimeToArrival(): number;
              public getTrafficCongestionColor(): number;
              public getDistanceRemaining(): number;
              public getFormatter(): com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateFormatter;
              public getTotalTimeRemaining(): number;
            }
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
        export module tripprogress {
          export module model {
            export class TripProgressViewOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions>;
              public getEstimatedArrivalTimeIcon(): number;
              public getDistanceRemainingTextAppearance(): number;
              public getEstimatedArrivalTimeTextAppearance(): number;
              public hashCode(): number;
              public getDistanceRemainingIconTint(): globalAndroid.content.res.ColorStateList;
              public toBuilder(): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
              public getEstimatedArrivalTimeIconTint(): globalAndroid.content.res.ColorStateList;
              public toString(): string;
              public getBackgroundColor(): number;
              public equals(param0: any): boolean;
              public getTimeRemainingTextAppearance(): number;
              public getDistanceRemainingIcon(): number;
            }
            export module TripProgressViewOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder>;
                public build(): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions;
                public distanceRemainingIconTint(param0: globalAndroid.content.res.ColorStateList): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public distanceRemainingIcon(param0: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public distanceRemainingTextAppearance(param0: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public timeRemainingTextAppearance(param0: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public estimatedArrivalTimeIconTint(param0: globalAndroid.content.res.ColorStateList): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public constructor();
                public backgroundColor(param0: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public estimatedArrivalTimeTextAppearance(param0: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
                public estimatedArrivalTimeIcon(param0: number): com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions.Builder;
              }
            }
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
        export module tripprogress {
          export module view {
            export class DistanceRemainingView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.view.DistanceRemainingView>;
              public renderDistanceRemaining(param0: globalAndroid.text.SpannableString, param1: globalAndroid.widget.TextView.BufferType): void;
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
        export module tripprogress {
          export module view {
            export class EstimatedArrivalTimeView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.view.EstimatedArrivalTimeView>;
              public renderEstimatedArrivalTime(param0: globalAndroid.text.SpannableString, param1: globalAndroid.widget.TextView.BufferType): void;
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
        export module tripprogress {
          export module view {
            export class MapboxTripProgressView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.view.MapboxTripProgressView>;
              /** @deprecated */
              public updateStyle(param0: number): void;
              public render(param0: com.mapbox.navigation.ui.tripprogress.model.TripProgressUpdateValue): void;
              public renderLegOverview(param0: number, param1: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.tripprogress.model.TripOverviewError, com.mapbox.navigation.ui.tripprogress.model.TripOverviewValue>): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public updateOptions(param0: com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions): void;
              public renderTripOverview(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.tripprogress.model.TripOverviewError, com.mapbox.navigation.ui.tripprogress.model.TripOverviewValue>): void;
              public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.navigation.ui.tripprogress.model.TripProgressViewOptions);
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
        export module tripprogress {
          export module view {
            export class TimeRemainingView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.tripprogress.view.TimeRemainingView>;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public renderTimeRemaining(param0: globalAndroid.text.SpannableString, param1: globalAndroid.widget.TextView.BufferType): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public constructor(param0: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

//Generics information:
