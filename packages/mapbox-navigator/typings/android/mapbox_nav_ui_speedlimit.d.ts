/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.BuildConfig>;
            public static DEBUG: boolean;
            public static LIBRARY_PACKAGE_NAME: string;
            public static BUILD_TYPE: string;
            public static MAPBOX_NAVIGATION_VERSION_NAME: string;
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
        export module speedlimit {
          export class SpeedInfoConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedInfoConfig>;
            public setSpeedInfoOptions(param0: com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions): void;
            public constructor(param0: globalAndroid.content.Context);
            public getSpeedInfoOptions(): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions;
            public setDistanceFormatterOptions(param0: com.mapbox.navigation.base.formatter.DistanceFormatterOptions): void;
            public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export abstract class SpeedLimitAction {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitAction>;
          }
          export module SpeedLimitAction {
            export class CalculateSpeedLimitUpdate extends com.mapbox.navigation.ui.speedlimit.SpeedLimitAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitAction.CalculateSpeedLimitUpdate>;
              public hashCode(): number;
              public constructor(param0: com.mapbox.navigation.base.speed.model.SpeedLimit);
              public copy(param0: com.mapbox.navigation.base.speed.model.SpeedLimit): com.mapbox.navigation.ui.speedlimit.SpeedLimitAction.CalculateSpeedLimitUpdate;
              public getSpeedLimit(): com.mapbox.navigation.base.speed.model.SpeedLimit;
              public component1(): com.mapbox.navigation.base.speed.model.SpeedLimit;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export class FindPostedAndCurrentSpeed extends com.mapbox.navigation.ui.speedlimit.SpeedLimitAction {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitAction.FindPostedAndCurrentSpeed>;
              public getLocationMatcherResult(): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
              public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
              public constructor(param0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, java.lang.Integer>, param1: com.mapbox.navigation.core.trip.session.LocationMatcherResult, param2: com.mapbox.navigation.base.formatter.DistanceFormatterOptions);
              public getFormatter(): com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.SpeedData, java.lang.Integer>;
              public component3(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
              public hashCode(): number;
              public component2(): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
              public copy(param0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, java.lang.Integer>, param1: com.mapbox.navigation.core.trip.session.LocationMatcherResult, param2: com.mapbox.navigation.base.formatter.DistanceFormatterOptions): com.mapbox.navigation.ui.speedlimit.SpeedLimitAction.FindPostedAndCurrentSpeed;
              public toString(): string;
              public equals(param0: any): boolean;
              public component1(): com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.SpeedData, java.lang.Integer>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export class SpeedLimitConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitConfig>;
            public constructor();
            public setStyle(param0: number): void;
            public getTextAppearance(): number;
            public getStyle(): number;
            public setTextAppearance(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export class SpeedLimitProcessor {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitProcessor>;
            public constructor();
            public process(param0: com.mapbox.navigation.ui.speedlimit.SpeedLimitAction): com.mapbox.navigation.ui.speedlimit.SpeedLimitResult;
          }
          export module SpeedLimitProcessor {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitProcessor.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export abstract class SpeedLimitResult {
            public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitResult>;
          }
          export module SpeedLimitResult {
            export class PostedAndCurrentSpeed extends com.mapbox.navigation.ui.speedlimit.SpeedLimitResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitResult.PostedAndCurrentSpeed>;
              public copy(param0: java.lang.Integer, param1: number, param2: com.mapbox.navigation.base.speed.model.SpeedUnit, param3: com.mapbox.navigation.base.speed.model.SpeedLimitSign): com.mapbox.navigation.ui.speedlimit.SpeedLimitResult.PostedAndCurrentSpeed;
              public getPostedSpeedUnit(): com.mapbox.navigation.base.speed.model.SpeedUnit;
              public constructor(param0: java.lang.Integer, param1: number, param2: com.mapbox.navigation.base.speed.model.SpeedUnit, param3: com.mapbox.navigation.base.speed.model.SpeedLimitSign);
              public hashCode(): number;
              public component2(): number;
              public getPostedSpeed(): java.lang.Integer;
              public getCurrentSpeed(): number;
              public toString(): string;
              public component1(): java.lang.Integer;
              public component4(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public getSpeedSignConvention(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public equals(param0: any): boolean;
              public component3(): com.mapbox.navigation.base.speed.model.SpeedUnit;
            }
            export class SpeedLimitCalculation extends com.mapbox.navigation.ui.speedlimit.SpeedLimitResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.SpeedLimitResult.SpeedLimitCalculation>;
              public getSpeedUnit(): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public component1(): number;
              public getSignFormat(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public hashCode(): number;
              public getSpeedKPH(): number;
              public toString(): string;
              public component3(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public copy(param0: number, param1: com.mapbox.navigation.base.speed.model.SpeedLimitUnit, param2: com.mapbox.navigation.base.speed.model.SpeedLimitSign): com.mapbox.navigation.ui.speedlimit.SpeedLimitResult.SpeedLimitCalculation;
              public equals(param0: any): boolean;
              public component2(): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public constructor(param0: number, param1: com.mapbox.navigation.base.speed.model.SpeedLimitUnit, param2: com.mapbox.navigation.base.speed.model.SpeedLimitSign);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module api {
            export class MapboxSpeedInfoApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.api.MapboxSpeedInfoApi>;
              public constructor();
              public constructor(param0: com.mapbox.navigation.ui.speedlimit.SpeedLimitProcessor);
              public updatePostedAndCurrentSpeed(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult, param1: com.mapbox.navigation.base.formatter.DistanceFormatterOptions, param2: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, java.lang.Integer>): com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module api {
            export class MapboxSpeedLimitApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.api.MapboxSpeedLimitApi>;
              public constructor(param0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, string>);
              public constructor(param0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, string>, param1: com.mapbox.navigation.ui.speedlimit.SpeedLimitProcessor);
              public updateSpeedLimit(param0: com.mapbox.navigation.base.speed.model.SpeedLimit): com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitError, com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue>;
              public setFormatter(param0: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, string>): void;
              public getFormatter(): com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue, string>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module databinding {
            export class MapboxSpeedInfoViewBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.databinding.MapboxSpeedInfoViewBinding>;
              public currentSpeedMutcd: androidx.appcompat.widget.AppCompatTextView;
              public currentSpeedVienna: androidx.appcompat.widget.AppCompatTextView;
              public postedSpeedLayoutMutcd: androidx.constraintlayout.widget.ConstraintLayout;
              public postedSpeedLayoutVienna: androidx.constraintlayout.widget.ConstraintLayout;
              public postedSpeedLegend: androidx.appcompat.widget.AppCompatTextView;
              public postedSpeedMutcd: androidx.appcompat.widget.AppCompatTextView;
              public postedSpeedUnit: androidx.appcompat.widget.AppCompatTextView;
              public postedSpeedVienna: androidx.appcompat.widget.AppCompatTextView;
              public speedInfoMutcdLayout: androidx.constraintlayout.widget.ConstraintLayout;
              public speedInfoViennaLayout: androidx.constraintlayout.widget.ConstraintLayout;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.speedlimit.databinding.MapboxSpeedInfoViewBinding;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.speedlimit.databinding.MapboxSpeedInfoViewBinding;
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
        export module speedlimit {
          export module internal {
            export class MapboxSpeedInfoComponentContract extends com.mapbox.navigation.ui.speedlimit.internal.SpeedInfoComponentContract {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.internal.MapboxSpeedInfoComponentContract>;
              public constructor();
              public onSpeedInfoClicked(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module internal {
            export class SpeedInfoComponent {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.internal.SpeedInfoComponent>;
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public constructor(param0: com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedInfoView, param1: com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions, param2: com.mapbox.navigation.base.formatter.DistanceFormatterOptions, param3: com.mapbox.navigation.ui.speedlimit.api.MapboxSpeedInfoApi, param4: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.speedlimit.internal.SpeedInfoComponentContract>);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module internal {
            export class SpeedInfoComponentContract {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.internal.SpeedInfoComponentContract>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.speedlimit.internal.SpeedInfoComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onSpeedInfoClicked(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void });
              public constructor();
              public onSpeedInfoClicked(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module internal {
            export class SpeedLimitComponent {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.internal.SpeedLimitComponent>;
              public getStyle(): number;
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public getTextAppearance(): number;
              public getSpeedLimitView(): com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView;
              public constructor(param0: number, param1: number, param2: com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView, param3: com.mapbox.navigation.ui.speedlimit.api.MapboxSpeedLimitApi);
              public getSpeedLimitApi(): com.mapbox.navigation.ui.speedlimit.api.MapboxSpeedLimitApi;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module model {
            export class CurrentSpeedDirection {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection>;
              public static TOP: com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
              public static END: com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
              public static START: com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
              public static BOTTOM: com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
              public static values(): androidNative.Array<com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection>;
              public static valueOf(param0: string): com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module model {
            export class MapboxSpeedInfoOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions>;
              public getShowSpeedWhenUnavailable(): boolean;
              public hashCode(): number;
              public getShowLegend(): boolean;
              public getRenderWithSpeedSign(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public getCurrentSpeedDirection(): com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection;
              public getSpeedInfoStyle(): com.mapbox.navigation.ui.speedlimit.model.SpeedInfoStyle;
              public toString(): string;
              public equals(param0: any): boolean;
              public getShowUnit(): boolean;
              public toBuilder(): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
            }
            export module MapboxSpeedInfoOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder>;
                public showUnit(param0: boolean): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public speedInfoStyle(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoStyle): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public constructor();
                public showSpeedWhenUnavailable(param0: boolean): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public currentSpeedDirection(param0: com.mapbox.navigation.ui.speedlimit.model.CurrentSpeedDirection): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public build(): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions;
                public showLegend(param0: boolean): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
                public renderWithSpeedSign(param0: com.mapbox.navigation.base.speed.model.SpeedLimitSign): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions.Builder;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module model {
            export class PostedAndCurrentSpeedFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.SpeedData, java.lang.Integer> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.PostedAndCurrentSpeedFormatter>;
              public constructor();
              public format(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedData): java.lang.Integer;
            }
            export module PostedAndCurrentSpeedFormatter {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.PostedAndCurrentSpeedFormatter.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.PostedAndCurrentSpeedFormatter.WhenMappings>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module model {
            export class SpeedData {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.SpeedData>;
              public getSpeed(): number;
              public getFromUnit(): com.mapbox.navigation.base.speed.model.SpeedUnit;
              public hashCode(): number;
              public constructor(param0: number, param1: com.mapbox.navigation.base.speed.model.SpeedUnit, param2: com.mapbox.navigation.base.formatter.UnitType);
              public toString(): string;
              public equals(param0: any): boolean;
              public getToUnit(): com.mapbox.navigation.base.formatter.UnitType;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module model {
            export class SpeedInfoStyle {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.SpeedInfoStyle>;
              public constructor();
              public getCurrentSpeedMutcdTextAppearance(): number;
              public getPostedSpeedViennaLayoutBackground(): number;
              public getPostedSpeedLegendTextAppearance(): number;
              public getMutcdLayoutBackground(): number;
              public setCurrentSpeedMutcdTextAppearance(param0: number): void;
              public setPostedSpeedMutcdLayoutBackground(param0: number): void;
              public getPostedSpeedMutcdTextAppearance(): number;
              public getPostedSpeedViennaTextAppearance(): number;
              public setPostedSpeedViennaTextAppearance(param0: number): void;
              public setPostedSpeedMutcdTextAppearance(param0: number): void;
              public getPostedSpeedMutcdLayoutBackground(): number;
              public setPostedSpeedUnitTextAppearance(param0: number): void;
              public getViennaLayoutBackground(): number;
              public getPostedSpeedUnitTextAppearance(): number;
              public setViennaLayoutBackground(param0: number): void;
              public setPostedSpeedViennaLayoutBackground(param0: number): void;
              public setCurrentSpeedViennaTextAppearance(param0: number): void;
              public setMutcdLayoutBackground(param0: number): void;
              public setPostedSpeedLegendTextAppearance(param0: number): void;
              public getCurrentSpeedViennaTextAppearance(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module model {
            export class SpeedInfoValue {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue>;
              public getPostedSpeedUnit(): com.mapbox.navigation.base.speed.model.SpeedUnit;
              public constructor(param0: java.lang.Integer, param1: number, param2: com.mapbox.navigation.base.speed.model.SpeedUnit, param3: com.mapbox.navigation.base.speed.model.SpeedLimitSign);
              public getPostedSpeed(): java.lang.Integer;
              public getCurrentSpeed(): number;
              public getSpeedSignConvention(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module model {
            export class SpeedLimitFormatter extends com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue, string> {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.SpeedLimitFormatter>;
              public format(param0: com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue): string;
              public constructor(param0: globalAndroid.content.Context);
            }
            export module SpeedLimitFormatter {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.SpeedLimitFormatter.Companion>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module model {
            export class UpdateSpeedLimitError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitError>;
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
        export module speedlimit {
          export module model {
            export class UpdateSpeedLimitValue {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue>;
              public getSpeedUnit(): com.mapbox.navigation.base.speed.model.SpeedLimitUnit;
              public getSpeedLimitFormatter(): com.mapbox.navigation.ui.base.formatter.ValueFormatter<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue, string>;
              public getSignFormat(): com.mapbox.navigation.base.speed.model.SpeedLimitSign;
              public constructor(param0: number, param1: com.mapbox.navigation.base.speed.model.SpeedLimitUnit, param2: com.mapbox.navigation.base.speed.model.SpeedLimitSign, param3: com.mapbox.navigation.ui.base.formatter.ValueFormatter<any, string>);
              public getSpeedKPH(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module model {
            export class ViewConstraints {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.model.ViewConstraints>;
              public constructor();
              public getStartSide(): number;
              public getShouldConnect(): boolean;
              public copy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean): com.mapbox.navigation.ui.speedlimit.model.ViewConstraints;
              public hashCode(): number;
              public component2(): number;
              public getStartId(): number;
              public component5(): number;
              public component7(): boolean;
              public toString(): string;
              public getEndId(): number;
              public component1(): number;
              public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean);
              public getViewId(): number;
              public component4(): number;
              public component6(): number;
              public component3(): number;
              public getEndSide(): number;
              public equals(param0: any): boolean;
              public getAnchor(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module view {
            export class MapboxSpeedInfoView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedInfoView>;
              public getSpeedInfoUnitTextMutcd(): androidx.appcompat.widget.AppCompatTextView;
              public getSpeedInfoPostedSpeedMutcd(): androidx.appcompat.widget.AppCompatTextView;
              public getSpeedInfoCurrentSpeedMutcd(): androidx.appcompat.widget.AppCompatTextView;
              public getSpeedInfoViennaLayout(): androidx.constraintlayout.widget.ConstraintLayout;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public getSpeedInfoOptions(): com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions;
              public getSpeedInfoPostedSpeedVienna(): androidx.appcompat.widget.AppCompatTextView;
              public setSpeedInfoOptions(param0: com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions): void;
              public getSpeedInfoMutcdLayout(): androidx.constraintlayout.widget.ConstraintLayout;
              public render(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
              public setSpeedInfo$libnavui_speedlimit_release(param0: com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue): void;
              public getSpeedInfoLegendTextMutcd(): androidx.appcompat.widget.AppCompatTextView;
              public getSpeedInfoPostedSpeedLayoutVienna(): androidx.constraintlayout.widget.ConstraintLayout;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public getSpeedInfoPostedSpeedLayoutMutcd(): androidx.constraintlayout.widget.ConstraintLayout;
              public applyOptions(param0: com.mapbox.navigation.ui.speedlimit.model.MapboxSpeedInfoOptions): void;
              public getSpeedInfoCurrentSpeedVienna(): androidx.appcompat.widget.AppCompatTextView;
              public constructor(param0: globalAndroid.content.Context);
              public getSpeedInfo$libnavui_speedlimit_release(): com.mapbox.navigation.ui.speedlimit.model.SpeedInfoValue;
            }
            export module MapboxSpeedInfoView {
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedInfoView.WhenMappings>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module speedlimit {
          export module view {
            export class MapboxSpeedLimitView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView>;
              public updateStyle(param0: number): void;
              public render(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitError, com.mapbox.navigation.ui.speedlimit.model.UpdateSpeedLimitValue>): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public constructor(param0: globalAndroid.content.Context);
              public getViewDrawable$libnavui_speedlimit_release(param0: com.mapbox.navigation.base.speed.model.SpeedLimitSign): globalAndroid.graphics.drawable.LayerDrawable;
              public getSizeSpanStartIndex$libnavui_speedlimit_release(param0: com.mapbox.navigation.base.speed.model.SpeedLimitSign, param1: string): number;
            }
            export module MapboxSpeedLimitView {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.speedlimit.view.MapboxSpeedLimitView.WhenMappings>;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
