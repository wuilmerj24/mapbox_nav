/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module viewport {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.BuildConfig>;
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
        export module viewport {
          export class ViewportPluginImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.ViewportPluginImpl>;
            public defaultTransition: com.mapbox.maps.plugin.viewport.transition.ViewportTransition;
            public static VIEWPORT_CAMERA_OWNER: string;
            public constructor();
            public makeFollowPuckViewportState(param0: com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions): com.mapbox.maps.plugin.viewport.state.FollowPuckViewportState;
            public makeOverviewViewportState(param0: com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions): com.mapbox.maps.plugin.viewport.state.OverviewViewportState;
            public getStatus(): com.mapbox.maps.plugin.viewport.ViewportStatus;
            public idle(): void;
            public addStatusObserver(param0: com.mapbox.maps.plugin.viewport.ViewportStatusObserver): void;
            public transitionTo(param0: com.mapbox.maps.plugin.viewport.state.ViewportState, param1: com.mapbox.maps.plugin.viewport.transition.ViewportTransition, param2: com.mapbox.maps.plugin.viewport.CompletionListener): void;
            public setDefaultTransition(param0: com.mapbox.maps.plugin.viewport.transition.ViewportTransition): void;
            public getDefaultTransition(): com.mapbox.maps.plugin.viewport.transition.ViewportTransition;
            public removeStatusObserver(param0: com.mapbox.maps.plugin.viewport.ViewportStatusObserver): void;
            public constructor(param0: globalAndroid.os.Handler);
            public getOptions(): com.mapbox.maps.plugin.viewport.data.ViewportOptions;
            public setOptions(param0: com.mapbox.maps.plugin.viewport.data.ViewportOptions): void;
            public makeImmediateViewportTransition(): com.mapbox.maps.plugin.viewport.transition.ViewportTransition;
            public initialize(): void;
            public cleanup(): void;
            public makeDefaultViewportTransition(param0: com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions): com.mapbox.maps.plugin.viewport.transition.DefaultViewportTransition;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          }
          export module ViewportPluginImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.ViewportPluginImpl.Companion>;
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
        export module viewport {
          export class ViewportUtils {
            public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.ViewportUtils>;
            public static getViewport(param0: com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate): com.mapbox.maps.plugin.viewport.ViewportPlugin;
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
        export module viewport {
          export module state {
            export class FollowPuckViewportStateImpl {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.state.FollowPuckViewportStateImpl>;
              public static TAG: string;
              public isFollowingStateRunning$plugin_viewport_publicRelease(): boolean;
              public setFollowingStateRunning$plugin_viewport_publicRelease(param0: boolean): void;
              public getOptions(): com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions;
              public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider, param1: com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions, param2: com.mapbox.maps.plugin.viewport.transition.MapboxViewportTransitionFactory);
              public startUpdatingCamera(): void;
              public setOptions(param0: com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions): void;
              public stopUpdatingCamera(): void;
              public observeDataSource(param0: com.mapbox.maps.plugin.viewport.state.ViewportStateDataObserver): com.mapbox.maps.plugin.animation.Cancelable;
            }
            export module FollowPuckViewportStateImpl {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.state.FollowPuckViewportStateImpl.Companion>;
              }
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
        export module viewport {
          export module state {
            export class OverviewViewportStateImpl {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.state.OverviewViewportStateImpl>;
              public isOverviewStateRunning$plugin_viewport_publicRelease(): boolean;
              public startUpdatingCamera(): void;
              public getOptions(): com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions;
              public stopUpdatingCamera(): void;
              public setOptions(param0: com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions): void;
              public setOverviewStateRunning$plugin_viewport_publicRelease(param0: boolean): void;
              public observeDataSource(param0: com.mapbox.maps.plugin.viewport.state.ViewportStateDataObserver): com.mapbox.maps.plugin.animation.Cancelable;
              public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider, param1: com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions, param2: com.mapbox.maps.plugin.viewport.transition.MapboxViewportTransitionFactory);
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
        export module viewport {
          export module transition {
            export class DefaultViewportTransitionImpl {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.transition.DefaultViewportTransitionImpl>;
              public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider, param1: com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions, param2: com.mapbox.maps.plugin.viewport.transition.MapboxViewportTransitionFactory);
              public run(param0: com.mapbox.maps.plugin.viewport.state.ViewportState, param1: com.mapbox.maps.plugin.viewport.CompletionListener): com.mapbox.maps.plugin.animation.Cancelable;
              public getOptions(): com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions;
              public setOptions(param0: com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions): void;
            }
            export module DefaultViewportTransitionImpl {
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.transition.DefaultViewportTransitionImpl.WhenMappings>;
              }
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
        export module viewport {
          export module transition {
            export class ImmediateViewportTransition {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.transition.ImmediateViewportTransition>;
              public run(param0: com.mapbox.maps.plugin.viewport.state.ViewportState, param1: com.mapbox.maps.plugin.viewport.CompletionListener): com.mapbox.maps.plugin.animation.Cancelable;
              public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider);
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
        export module viewport {
          export module transition {
            export class MapboxViewportTransitionFactory {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.transition.MapboxViewportTransitionFactory>;
              public transitionFromHighZoomToLowZoom(param0: com.mapbox.maps.CameraOptions, param1: number): globalAndroid.animation.AnimatorSet;
              public constructor(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider);
              public transitionFromLowZoomToHighZoom(param0: com.mapbox.maps.CameraOptions, param1: number): globalAndroid.animation.AnimatorSet;
              public transitionLinear(param0: com.mapbox.maps.CameraOptions, param1: number): globalAndroid.animation.AnimatorSet;
            }
            export module MapboxViewportTransitionFactory {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.transition.MapboxViewportTransitionFactory.Companion>;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
