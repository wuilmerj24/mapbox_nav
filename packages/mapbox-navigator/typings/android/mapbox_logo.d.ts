/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module logo {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.logo.BuildConfig>;
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
        export module logo {
          export class LogoUtils {
            public static class: java.lang.Class<com.mapbox.maps.plugin.logo.LogoUtils>;
            public static getLogo(param0: com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate): com.mapbox.maps.plugin.logo.LogoPlugin;
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
        export module logo {
          export class LogoViewImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.logo.LogoViewImpl>;
            public constructor(param0: globalAndroid.content.Context);
            public getLogoEnabled(): boolean;
            public injectPresenter$plugin_logo_publicRelease(param0: com.mapbox.maps.plugin.logo.LogoPlugin): void;
            public setLogoGravity(param0: number): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public setLogoEnabled(param0: boolean): void;
            public setLogoMargins(param0: number, param1: number, param2: number, param3: number): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public getLogoGravity(): number;
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
        export module logo {
          export class LogoViewPlugin {
            public static class: java.lang.Class<com.mapbox.maps.plugin.logo.LogoViewPlugin>;
            public setInternalSettings(param0: com.mapbox.maps.plugin.logo.generated.LogoSettings): void;
            public constructor();
            public constructor(param0: any);
            public getEnabled(): boolean;
            public bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
            public initialize(): void;
            public onPluginView(param0: globalAndroid.view.View): void;
            public cleanup(): void;
            public getInternalSettings(): com.mapbox.maps.plugin.logo.generated.LogoSettings;
            public setEnabled(param0: boolean): void;
            public applySettings(): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
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
        export module logo {
          export module generated {
            export class LogoAttributeParser {
              public static class: java.lang.Class<com.mapbox.maps.plugin.logo.generated.LogoAttributeParser>;
              public static INSTANCE: com.mapbox.maps.plugin.logo.generated.LogoAttributeParser;
              public parseLogoSettings(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): com.mapbox.maps.plugin.logo.generated.LogoSettings;
            }
          }
        }
      }
    }
  }
}

//Generics information:
