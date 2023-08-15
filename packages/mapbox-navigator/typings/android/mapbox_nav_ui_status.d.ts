/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module status {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.status.BuildConfig>;
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
        export module status {
          export module databinding {
            export class MapboxStatusViewLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.status.databinding.MapboxStatusViewLayoutBinding>;
              public container: androidx.constraintlayout.widget.ConstraintLayout;
              public iconImage: androidx.appcompat.widget.AppCompatImageView;
              public messageText: androidx.appcompat.widget.AppCompatTextView;
              public progressBar: globalAndroid.widget.ProgressBar;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.status.databinding.MapboxStatusViewLayoutBinding;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.status.databinding.MapboxStatusViewLayoutBinding;
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
        export module status {
          export module model {
            export class Status {
              public static class: java.lang.Class<com.mapbox.navigation.ui.status.model.Status>;
              public constructor(param0: string, param1: number, param2: boolean, param3: boolean, param4: number);
              public getIcon(): number;
              public hashCode(): number;
              public getSpinner(): boolean;
              public getAnimated(): boolean;
              public toString(): string;
              public getDuration(): number;
              public equals(param0: any): boolean;
              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module status {
          export module model {
            export class StatusFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.status.model.StatusFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.status.model.StatusFactory;
              public static buildStatus(param0: string, param1: number, param2: boolean, param3: boolean): com.mapbox.navigation.ui.status.model.Status;
              public static buildStatus(param0: string, param1: number): com.mapbox.navigation.ui.status.model.Status;
              public static buildStatus(param0: string, param1: number, param2: boolean, param3: boolean, param4: number): com.mapbox.navigation.ui.status.model.Status;
              public static buildStatus(param0: string): com.mapbox.navigation.ui.status.model.Status;
              public static buildStatus(param0: string, param1: number, param2: boolean): com.mapbox.navigation.ui.status.model.Status;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module status {
          export module view {
            export class MapboxStatusView {
              public static class: java.lang.Class<com.mapbox.navigation.ui.status.view.MapboxStatusView>;
              public onDetachedFromWindow(): void;
              public render(param0: com.mapbox.navigation.ui.status.model.Status): void;
              public getIconImage(): androidx.appcompat.widget.AppCompatImageView;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
              public isRendered(): boolean;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public cancel(param0: java.lang.Boolean): void;
              public getShowAnimRes(): number;
              public getContainerView(): androidx.constraintlayout.widget.ConstraintLayout;
              public setHideAnimRes(param0: number): void;
              public getCurrentStatus(): com.mapbox.navigation.ui.status.model.Status;
              public setShowAnimRes(param0: number): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public getSpinnerProgressBar(): globalAndroid.widget.ProgressBar;
              public getMessageTextView(): androidx.appcompat.widget.AppCompatTextView;
              public getHideAnimRes(): number;
              public constructor(param0: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

//Generics information:
