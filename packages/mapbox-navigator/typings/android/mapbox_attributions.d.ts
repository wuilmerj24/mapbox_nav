/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module attribution {
          export class AttributionDialogManagerImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.AttributionDialogManagerImpl>;
            public setDialog$plugin_attribution_publicRelease(param0: globalAndroid.app.AlertDialog): void;
            public constructor(param0: globalAndroid.content.Context);
            public setTelemetryDialog$plugin_attribution_publicRelease(param0: globalAndroid.app.AlertDialog): void;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
            public getDialog$plugin_attribution_publicRelease(): globalAndroid.app.AlertDialog;
            public showAttribution(param0: com.mapbox.maps.plugin.delegates.MapAttributionDelegate): void;
            public getTelemetryDialog$plugin_attribution_publicRelease(): globalAndroid.app.AlertDialog;
            public onStop(): void;
          }
          export module AttributionDialogManagerImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.AttributionDialogManagerImpl.Companion>;
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
        export module attribution {
          export class AttributionViewImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.AttributionViewImpl>;
            public constructor(param0: globalAndroid.content.Context);
            public setViewOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public setIconColor(param0: number): void;
            public setAttributionMargins(param0: number, param1: number, param2: number, param3: number): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public setEnable(param0: boolean): void;
            public setGravity(param0: number): void;
          }
        }
      }
    }
  }
}

// declare module com {
// 	export module mapbox {
// 		export module maps {
// 			export module plugin {
// 				export module attribution {
// 					export class AttributionViewPlugin {
// 						public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.AttributionViewPlugin>;
// 						public constructor(param0: any<any,com.mapbox.maps.plugin.attribution.AttributionViewImpl>);
// 						public constructor();
// 						public getInternalSettings(): com.mapbox.maps.plugin.attribution.generated.AttributionSettings;
// 						public bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
// 						public setCustomAttributionDialogManager(param0: com.mapbox.maps.plugin.attribution.AttributionDialogManager): void;
// 						public getMapAttributionDelegate(): com.mapbox.maps.plugin.delegates.MapAttributionDelegate;
// 						public setInternalSettings(param0: com.mapbox.maps.plugin.attribution.generated.AttributionSettings): void;
// 						public onStop(): void;
// 						public applySettings(): void;
// 						public initialize(): void;
// 						public onPluginView(param0: globalAndroid.view.View): void;
// 						public cleanup(): void;
// 						public onClick(param0: globalAndroid.view.View): void;
// 						public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
// 						public onStart(): void;
// 					}
// 				}
// 			}
// 		}
// 	}
// }
// NEW CODEW
declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module provider {
          export class MapboxModuleProvider {
            public static class: java.lang.Class<com.mapbox.common.module.provider.MapboxModuleProvider>;
            public static INSTANCE: com.mapbox.common.module.provider.MapboxModuleProvider;
            public createModule(param0: com.mapbox.annotation.module.MapboxModuleType, param1: any): any;
          }
        }
      }
    }
  }
}

declare module com.mapbox.common.module.provider.MapboxModuleProvider {
  export class ModuleInstanceProvider {
    public static class: java.lang.Class<com.mapbox.common.module.provider.MapboxModuleProvider.ModuleInstanceProvider>;
    public constructor();
    public getInstance(param0: java.lang.Class<any>, param1: com.mapbox.annotation.module.MapboxModuleType, param2: any): any;
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module attribution {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.BuildConfig>;
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
        export module attribution {
          export module generated {
            export class AttributionAttributeParser {
              public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.generated.AttributionAttributeParser>;
              public static INSTANCE: com.mapbox.maps.plugin.attribution.generated.AttributionAttributeParser;
              public parseAttributionSettings(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): com.mapbox.maps.plugin.attribution.generated.AttributionSettings;
            }
          }
        }
      }
    }
  }
}

//Generics information:
