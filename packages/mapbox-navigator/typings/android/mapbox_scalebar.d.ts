/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export module scalebar {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.BuildConfig>;
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
        export module scalebar {
          export class LocaleUnitResolver {
            public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.LocaleUnitResolver>;
            public static INSTANCE: com.mapbox.maps.plugin.scalebar.LocaleUnitResolver;
            public isMetricSystem(): boolean;
          }
          export module LocaleUnitResolver {
            export class ImperialCountryCode {
              public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.LocaleUnitResolver.ImperialCountryCode>;
              public static INSTANCE: com.mapbox.maps.plugin.scalebar.LocaleUnitResolver.ImperialCountryCode;
              public static US: string;
              public static MYANMAR: string;
              public static LIBERIA: string;
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
        export module scalebar {
          export class ScaleBarImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.ScaleBarImpl>;
            public static MSG_RENDER_ON_DEMAND: number;
            public static MSG_RENDER_CONTINUOUS: number;
            public static DEFAULT_MAPVIEW_WIDTH: number;
            public static DEFAULT_PIXEL_RATIO: number;
            public static INTERNAL_PADDING_DP: number;
            public constructor(param0: globalAndroid.content.Context);
            public getTextPaint$plugin_scalebar_publicRelease(): globalAndroid.graphics.Paint;
            public setPixelRatio(param0: number): void;
            public getScaleTable$plugin_scalebar_publicRelease(): java.util.List<globalAndroid.util.Pair<java.lang.Integer, java.lang.Integer>>;
            public getMapViewWidth(): number;
            public getUnit$plugin_scalebar_publicRelease(): string;
            public getUseContinuousRendering(): boolean;
            public getPixelRatio(): number;
            public getRefreshHandler$plugin_scalebar_publicRelease(): com.mapbox.maps.plugin.scalebar.ScaleBarImpl.RefreshHandler;
            public setSettings(param0: com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public onMeasure(param0: number, param1: number): void;
            public getDistanceText$plugin_scalebar_publicRelease(param0: number, param1: string): string;
            public getSettings(): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
            public setUnit$plugin_scalebar_publicRelease(param0: string): void;
            public setUseContinuousRendering(param0: boolean): void;
            public setDistancePerPixel(param0: number): void;
            public setScaleTable$plugin_scalebar_publicRelease(param0: java.util.List<any>): void;
            public setEnable(param0: boolean): void;
            public getBarPaint$plugin_scalebar_publicRelease(): globalAndroid.graphics.Paint;
            public calculateWidthAndHeight$plugin_scalebar_publicRelease(): globalAndroid.util.Pair<java.lang.Float, java.lang.Float>;
            public setMapViewWidth(param0: number): void;
            public getDistancePerPixel(): number;
            public getStrokePaint$plugin_scalebar_publicRelease(): globalAndroid.graphics.Paint;
            public onDraw(param0: globalAndroid.graphics.Canvas): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public getEnable(): boolean;
            public calculateSegmentsConfiguration$plugin_scalebar_publicRelease(param0: number, param1: number, param2: java.util.List<any>, param3: globalAndroid.graphics.Paint, param4: number, param5: string, param6: number): com.mapbox.maps.plugin.scalebar.SegmentsConfiguration;
          }
          export module ScaleBarImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.ScaleBarImpl.Companion>;
            }
            export class RefreshHandler {
              public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.ScaleBarImpl.RefreshHandler>;
              public constructor(param0: com.mapbox.maps.plugin.scalebar.ScaleBarImpl);
              public handleMessage(param0: globalAndroid.os.Message): void;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.ScaleBarImpl.WhenMappings>;
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
        export module scalebar {
          export class ScaleBarPluginImpl {
            public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.ScaleBarPluginImpl>;
            public constructor(param0: any);
            public constructor();
            public getInternalSettings(): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
            public bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
            public setUseContinuousRendering(param0: boolean): void;
            public setDistancePerPixel(param0: number): void;
            public getUseContinuousRendering(): boolean;
            public setEnabled(param0: boolean): void;
            public applySettings(): void;
            public getDistancePerPixel(): number;
            public getEnabled(): boolean;
            public setInternalSettings(param0: com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings): void;
            public initialize(): void;
            public onPluginView(param0: globalAndroid.view.View): void;
            public cleanup(): void;
            public onSizeChanged(param0: number, param1: number): void;
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
        export module scalebar {
          export class ScaleBarUtils {
            public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.ScaleBarUtils>;
            public static getScaleBar(param0: com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate): com.mapbox.maps.plugin.scalebar.ScaleBarPlugin;
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
        export module scalebar {
          export class SegmentsConfiguration {
            public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.SegmentsConfiguration>;
            public setUnitDistance(param0: number): void;
            public getLabelMarginsAndAnchor(): java.util.List<any>;
            public constructor(param0: number, param1: number, param2: number, param3: java.util.List<string>, param4: java.util.List<any>);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getUnitDistance(): number;
            public getUnitBarWidth(): number;
            public setUnitBarWidth(param0: number): void;
            public toString(): string;
            public setRectCount(param0: number): void;
            public getRectCount(): number;
            public component2(): number;
            public setLabelMarginsAndAnchor(param0: java.util.List<any>): void;
            public component4(): java.util.List<string>;
            public getLabelTexts(): java.util.List<string>;
            public setLabelTexts(param0: java.util.List<string>): void;
            public component5(): java.util.List<any>;
            public component1(): number;
            public component3(): number;
            public copy(param0: number, param1: number, param2: number, param3: java.util.List<string>, param4: java.util.List<any>): com.mapbox.maps.plugin.scalebar.SegmentsConfiguration;
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
        export module scalebar {
          export module generated {
            export class ScaleBarAttributeParser {
              public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.generated.ScaleBarAttributeParser>;
              public static INSTANCE: com.mapbox.maps.plugin.scalebar.generated.ScaleBarAttributeParser;
              public parseScaleBarSettings(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
            }
          }
        }
      }
    }
  }
}

//Generics information:
