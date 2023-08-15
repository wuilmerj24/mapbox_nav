/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module lifecycle {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.lifecycle.BuildConfig>;
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
        export module lifecycle {
          export class MapboxLifecyclePluginImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.lifecycle.MapboxLifecyclePluginImpl>;
            public registerLifecycleObserver(param0: globalAndroid.view.View, param1: com.mapbox.maps.MapboxLifecycleObserver): void;
            public constructor();
            public initialize(): void;
            public cleanup(): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          }
          export module MapboxLifecyclePluginImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.lifecycle.MapboxLifecyclePluginImpl.Companion>;
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
        export module lifecycle {
          export class ViewLifecycleOwner {
            public static class: java.lang.Class<com.mapbox.maps.plugin.lifecycle.ViewLifecycleOwner>;
            public cleanUp(): void;
            public getViewLifecycleRegistry$plugin_lifecycle_publicRelease(): androidx.lifecycle.LifecycleRegistry;
            public constructor(param0: globalAndroid.view.View);
            public getLifecycle(): androidx.lifecycle.LifecycleRegistry;
          }
        }
      }
    }
  }
}

//Generics information:
