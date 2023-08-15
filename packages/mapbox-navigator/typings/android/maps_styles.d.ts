/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module maps {
      export module extension {
        export module style {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.maps.extension.style.BuildConfig>;
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
      export module extension {
        export module style {
          export class StyleExtensionImpl {
            public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleExtensionImpl>;
            public getModels(): java.util.List<com.mapbox.maps.extension.style.StyleContract.StyleModelExtension>;
            public getAtmosphere(): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
            public getTerrain(): com.mapbox.maps.extension.style.terrain.generated.Terrain;
            public getLight(): com.mapbox.maps.extension.style.light.generated.Light;
            public getImages(): java.util.List<com.mapbox.maps.extension.style.StyleContract.StyleImageExtension>;
            public getStyleUri(): string;
            public getSources(): java.util.List<com.mapbox.maps.extension.style.sources.Source>;
            public getProjection(): com.mapbox.maps.extension.style.projection.generated.Projection;
            public getLayers(): java.util.List<any>;
          }
          export module StyleExtensionImpl {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleExtensionImpl.Builder>;
              public layerAtPosition(param0: com.mapbox.maps.extension.style.layers.Layer): any;
              public getLight$extension_style_publicRelease(): com.mapbox.maps.extension.style.light.generated.Light;
              public getModels$extension_style_publicRelease(): java.util.List<com.mapbox.maps.extension.style.StyleContract.StyleModelExtension>;
              public layerAtPosition(param0: com.mapbox.maps.extension.style.layers.Layer, param1: string, param2: string, param3: java.lang.Integer): any;
              public setTerrain(param0: com.mapbox.maps.extension.style.terrain.generated.Terrain): void;
              public layerAtPosition(param0: com.mapbox.maps.extension.style.layers.Layer, param1: string): any;
              public getLayers$extension_style_publicRelease(): java.util.List<any>;
              public constructor(param0: string);
              public setTerrain$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.terrain.generated.Terrain): void;
              public addImage(param0: com.mapbox.maps.extension.style.image.ImageExtensionImpl): void;
              public addSource(param0: com.mapbox.maps.extension.style.sources.Source): void;
              public addImage9Patch(param0: com.mapbox.maps.extension.style.image.ImageNinePatchExtensionImpl): void;
              public build(): com.mapbox.maps.extension.style.StyleContract.StyleExtension;
              public getStyleUri(): string;
              public addLayer(param0: com.mapbox.maps.extension.style.layers.Layer): void;
              public addModel(param0: com.mapbox.maps.extension.style.model.ModelExtensionImpl): void;
              public setProjection(param0: com.mapbox.maps.extension.style.projection.generated.Projection): void;
              public getSources$extension_style_publicRelease(): java.util.List<com.mapbox.maps.extension.style.sources.Source>;
              public setLight(param0: com.mapbox.maps.extension.style.light.generated.Light): void;
              public getTerrain$extension_style_publicRelease(): com.mapbox.maps.extension.style.terrain.generated.Terrain;
              public setAtmosphere$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere): void;
              public getProjection$extension_style_publicRelease(): com.mapbox.maps.extension.style.projection.generated.Projection;
              public setLight$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.light.generated.Light): void;
              public layerAtPosition(param0: com.mapbox.maps.extension.style.layers.Layer, param1: string, param2: string): any;
              public getAtmosphere$extension_style_publicRelease(): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
              public addLayerAtPosition(param0: any): void;
              public getImages$extension_style_publicRelease(): java.util.List<com.mapbox.maps.extension.style.StyleContract.StyleImageExtension>;
              public setAtmosphere(param0: com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere): void;
              public setProjection$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.projection.generated.Projection): void;
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
      export module extension {
        export module style {
          export module atmosphere {
            export module generated {
              export class Atmosphere extends com.mapbox.maps.extension.style.atmosphere.generated.AtmosphereDslReceiver {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere>;
                public starIntensity(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getHighColorAsColorInt(): java.lang.Integer;
                public highColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public rangeTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getColor(): string;
                public getStarIntensity(): java.lang.Double;
                public starIntensityTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getDelegate$extension_style_publicRelease(): com.mapbox.maps.extension.style.StyleInterface;
                public range(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getRangeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public colorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public highColorTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getHorizonBlendTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public horizonBlendTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public color(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public highColor(param0: string): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getSpaceColorAsColorInt(): java.lang.Integer;
                public constructor();
                public getHighColor(): string;
                public rangeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getHighColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public starIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public spaceColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public spaceColor(param0: string): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public horizonBlend(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getSpaceColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public highColor(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public colorTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public color(param0: string): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getHighColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public range(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public horizonBlend(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public setDelegate$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public getHorizonBlendAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public horizonBlendTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public highColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getStarIntensityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getStarIntensityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public color(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getHorizonBlend(): java.lang.Double;
                public spaceColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getSpaceColor(): string;
                public getColorAsColorInt(): java.lang.Integer;
                public getSpaceColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public spaceColor(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public getRange(): java.util.List<java.lang.Double>;
                public getRangeTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public starIntensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public spaceColorTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
              }
              export module Atmosphere {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere.Companion>;
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
    export module maps {
      export module extension {
        export module style {
          export module atmosphere {
            export module generated {
              export class AtmosphereDslReceiver {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.atmosphere.generated.AtmosphereDslReceiver>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.atmosphere.generated.AtmosphereDslReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  color(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  color(param0: string): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  color(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  colorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  colorTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  highColor(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  highColor(param0: string): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  highColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  highColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  highColorTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  horizonBlend(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  horizonBlend(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  horizonBlendTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  horizonBlendTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  range(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  range(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  rangeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  rangeTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  spaceColor(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  spaceColor(param0: string): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  spaceColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  spaceColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  spaceColorTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  starIntensity(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  starIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  starIntensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                  starIntensityTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                });
                public constructor();
                public highColor(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public colorTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public starIntensity(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public color(param0: string): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public highColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public range(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public rangeTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public horizonBlend(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public starIntensityTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public range(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public horizonBlendTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public highColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public colorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public highColorTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public color(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public horizonBlendTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public color(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public spaceColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public highColor(param0: string): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public rangeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public spaceColor(param0: number): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public starIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public starIntensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public spaceColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public spaceColor(param0: string): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public spaceColorTransition(param0: any): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public horizonBlend(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
              }
              export module AtmosphereDslReceiver {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.atmosphere.generated.AtmosphereDslReceiver.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module atmosphere {
            export module generated {
              export class AtmosphereUtils {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.atmosphere.generated.AtmosphereUtils>;
                public static removeAtmosphere(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public static getAtmosphere(param0: com.mapbox.maps.extension.style.StyleInterface): com.mapbox.maps.extension.style.atmosphere.generated.Atmosphere;
                public static setAtmosphere(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleAtmosphereExtension): void;
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
      export module extension {
        export module style {
          export module expressions {
            export module generated {
              export class Expression {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.expressions.generated.Expression>;
                public static concat(param0: androidNative.Array<string>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static distance(param0: com.mapbox.geojson.GeoJson): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static distanceFromCenter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static numberFormat(param0: number, param1: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static toNumber(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static gte(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static min(param0: androidNative.Array<number>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static cos(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static toString(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static collator(param0: boolean, param1: boolean, param2: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static isSupportedScript(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static lte(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static tan(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static boolean(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static subtract(param0: number, param1: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static tan(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static get(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static max(param0: androidNative.Array<number>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static cubicBezier(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: com.mapbox.maps.extension.style.expressions.generated.Expression, param2: com.mapbox.maps.extension.style.expressions.generated.Expression, param3: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static subtract(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static accumulated(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static log10(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static skyRadialProgress(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static at(param0: number, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static at(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static mod(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static indexOf(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static toRgba(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static e(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static literal$extension_style_publicRelease(param0: java.util.HashMap<string, any>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static resolvedLocale(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static inExpression(param0: number, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static lineProgress(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static log10(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static ceil(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static neq(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static color(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static product(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static round(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static toColor(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static eq(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static ln(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static rgb(param0: number, param1: number, param2: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static isSupportedScript(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static id(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static geometryType(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static featureState(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static has(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static round(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static sum(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static objectExpression(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static varExpression(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static log2(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static literal(param0: boolean): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static sqrt(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static collator(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: com.mapbox.maps.extension.style.expressions.generated.Expression, param2: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static coalesce(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static acos(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static atan(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static collator(param0: boolean, param1: boolean, param2: java.util.Locale): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static properties(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static get(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static match(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static format(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.types.FormatSection>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static heatmapDensity(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static any(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static log2(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static all(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static max(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static sin(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static interpolate(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static letExpression(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static sqrt(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static min(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static zoom(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static rgba(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static exponential(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static length(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public constructor(param0: androidNative.Array<androidNative.Array<number>>);
                public static array(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static gt(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static length(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static has(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static number(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static acos(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static literal$extension_style_publicRelease(param0: java.util.List<any>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static abs(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static image(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static subtract(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static downcase(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static asin(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static cos(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static step(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static sum(param0: androidNative.Array<number>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static atan(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static floor(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static string(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static not(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static has(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static sin(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static not(param0: boolean): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static division(param0: number, param1: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static mod(param0: number, param1: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static concat(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static rgb(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static pow(param0: number, param1: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static inExpression(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public constructor(param0: java.util.List<any>);
                public static abs(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static literal(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static product(param0: androidNative.Array<number>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static division(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static rgba(param0: number, param1: number, param2: number, param3: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static asin(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static ceil(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static upcase(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static inExpression(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static floor(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static ln2(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static downcase(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static slice(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static numberFormat(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: com.mapbox.maps.extension.style.expressions.generated.Expression, param2: com.mapbox.maps.extension.style.expressions.generated.Expression, param3: com.mapbox.maps.extension.style.expressions.generated.Expression, param4: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static lt(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static literal(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public isLiteral(): boolean;
                public static within(param0: com.mapbox.geojson.Geometry): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public constructor(param0: java.util.HashMap<string, com.mapbox.bindgen.Value>);
                public static switchCase(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static ln(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static pow(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static varExpression(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static linear(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static pitch(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getLiteralValue(): any;
                public static get(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static toBoolean(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static typeofExpression(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static fromRaw(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static upcase(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public static pi(): com.mapbox.maps.extension.style.expressions.generated.Expression;
              }
              export module Expression {
                export abstract class Builder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.expressions.generated.Expression.Builder>;
                  public constructor(param0: string);
                  public build(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getArguments$extension_style_publicRelease(): java.util.ArrayList<com.mapbox.maps.extension.style.expressions.generated.Expression>;
                  public contents$extension_style_publicRelease(): java.util.List<com.mapbox.bindgen.Value>;
                  public getOperator$extension_style_publicRelease(): string;
                }
                export class CollatorBuilder extends com.mapbox.maps.extension.style.expressions.generated.Expression.Builder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder>;
                  public constructor();
                  public diacriticSensitive(param0: boolean): com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder;
                  public diacriticSensitive(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder;
                  public diacriticSensitive(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder;
                  public locale(param0: java.util.Locale): com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder;
                  public caseSensitive(param0: boolean): com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder;
                  public constructor(param0: string);
                  public build(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public caseSensitive(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder;
                  public locale(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder;
                  public locale(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder;
                  public caseSensitive(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder;
                  public locale(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression.CollatorBuilder;
                }
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.expressions.generated.Expression.Companion>;
                  public neq(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public at(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public ceil(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public e(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public atan(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public typeofExpression(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public concat(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public floor(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public indexOf(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public max(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public subtract(param0: number, param1: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public distance(param0: com.mapbox.geojson.GeoJson): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public isSupportedScript(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public toBoolean(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public cos(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public upcase(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public downcase(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public accumulated(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public match(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public eq(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public cos(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public min(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public literal(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public image(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public subtract(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public interpolate(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public typeofExpression(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public isSupportedScript(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public objectExpression(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public toColor(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public pow(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public round(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public product(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public rgb(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public length(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public tan(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public isSupportedScript(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public upcase(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public number(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public resolvedLocale(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public inExpression(param0: number, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public toString(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public atan(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public has(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public ln2(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public image(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public rgba(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public has(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public letExpression(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public sqrt(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public mod(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public collator(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: com.mapbox.maps.extension.style.expressions.generated.Expression, param2: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public properties(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public get(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public exponential(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public resolvedLocale(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public literal$extension_style_publicRelease(param0: java.util.HashMap<string, any>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public rgba(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public string(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public featureState(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public numberFormat(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: com.mapbox.maps.extension.style.expressions.generated.Expression, param2: com.mapbox.maps.extension.style.expressions.generated.Expression, param3: com.mapbox.maps.extension.style.expressions.generated.Expression, param4: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public collator(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public downcase(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public log2(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public lineProgress(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public atan(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public inExpression(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public id(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public max(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public heatmapDensity(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public toNumber(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public all(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public sum(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public min(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public lt(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public boolean(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public linear(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public within(param0: com.mapbox.geojson.Geometry): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public format(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public concat(param0: androidNative.Array<string>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public get(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public gt(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public exponential(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public toColor(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public cubicBezier(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: com.mapbox.maps.extension.style.expressions.generated.Expression, param2: com.mapbox.maps.extension.style.expressions.generated.Expression, param3: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public at(param0: number, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public numberFormat(param0: number, param1: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public acos(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public fromRaw(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public cubicBezier(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public sqrt(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public max(param0: androidNative.Array<number>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public slice(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public not(param0: boolean): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public get(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public skyRadialProgress(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public floor(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public indexOf(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public abs(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public toNumber(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public sin(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public literal$extension_style_publicRelease(param0: java.util.List<any>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public floor(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public step(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public has(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public product(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public lt(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public ceil(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public asin(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public pi(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public gte(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public ceil(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public inExpression(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public neq(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public objectExpression(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public ln(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public pow(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public sum(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public zoom(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public log10(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public asin(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public sin(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public inExpression(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public log2(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public string(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public division(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public not(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public geometryType(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public tan(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public acos(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public at(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public rgba(param0: number, param1: number, param2: number, param3: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public has(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public switchCase(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public interpolate(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public abs(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public get(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public coalesce(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public tan(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public upcase(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public match(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public length(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public toBoolean(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public coalesce(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public downcase(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public varExpression(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public distanceFromCenter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public mod(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public asin(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public numberFormat(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public toString(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public gte(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public boolean(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public acos(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public round(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public product(param0: androidNative.Array<number>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public sqrt(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public log10(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public ln(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public collator(param0: boolean, param1: boolean, param2: string): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public division(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public not(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public any(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public subtract(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public mod(param0: number, param1: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public toRgba(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public array(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public slice(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public collator(param0: boolean, param1: boolean, param2: java.util.Locale): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public rgb(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public sum(param0: androidNative.Array<number>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public any(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public pitch(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public round(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public cos(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public array(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public featureState(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public literal(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public subtract(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public gt(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public ln(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public letExpression(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public all(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public format(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.types.FormatSection>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public length(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public rgb(param0: number, param1: number, param2: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public lte(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public toRgba(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public varExpression(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public abs(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public lte(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public color(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public log10(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public log2(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public number(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public step(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public eq(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public sin(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public min(param0: androidNative.Array<number>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public literal(param0: boolean): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public concat(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public varExpression(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public pow(param0: number, param1: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public switchCase(param0: androidNative.Array<com.mapbox.maps.extension.style.expressions.generated.Expression>): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public division(param0: number, param1: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
                }
                export class ExpressionBuilder extends com.mapbox.maps.extension.style.expressions.generated.Expression.Builder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.expressions.generated.Expression.ExpressionBuilder>;
                  public pi(): void;
                  public distance(param0: com.mapbox.geojson.GeoJson): void;
                  public array(param0: any): void;
                  public downcase(param0: string): void;
                  public ln2(): void;
                  public constructor(param0: string);
                  public literal(param0: java.util.HashMap<string, any>): void;
                  public subtract(param0: number): void;
                  public toBoolean(param0: any): void;
                  public switchCase(param0: any): void;
                  public concat(param0: androidNative.Array<string>): void;
                  public subtract(param0: any): void;
                  public ceil(param0: any): void;
                  public get(param0: string): void;
                  public floor(param0: number): void;
                  public stop(param0: number, param1: any): void;
                  public round(param0: any): void;
                  public division(param0: number, param1: number): void;
                  public tan(param0: any): void;
                  public format(param0: any): void;
                  public sum(param0: androidNative.Array<number>): void;
                  public at(param0: number, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
                  public has(param0: string): void;
                  public varExpression(param0: any): void;
                  public interpolate(param0: any): void;
                  public mod(param0: number, param1: number): void;
                  public toNumber(param0: any): void;
                  public e(): void;
                  public atan(param0: number): void;
                  public toString(param0: any): void;
                  public skyRadialProgress(): void;
                  public isSupportedScript(param0: any): void;
                  public round(param0: number): void;
                  public sin(param0: number): void;
                  public gt(param0: any): void;
                  public inExpression(param0: any): void;
                  public zoom(): void;
                  public ceil(param0: number): void;
                  public featureState(param0: any): void;
                  public lineProgress(): void;
                  public at(param0: any): void;
                  public not(param0: boolean): void;
                  public product(param0: any): void;
                  public distanceFromCenter(): void;
                  public step(param0: any): void;
                  public upcase(param0: any): void;
                  public log10(param0: number): void;
                  public concat(param0: any): void;
                  public color(param0: number): void;
                  public cos(param0: number): void;
                  public image(param0: any): void;
                  public literal(param0: boolean): void;
                  public asin(param0: any): void;
                  public eq(param0: any): void;
                  public ln(param0: any): void;
                  public length(param0: any): void;
                  public all(param0: any): void;
                  public log2(param0: any): void;
                  public mod(param0: any): void;
                  public atan(param0: any): void;
                  public numberFormat(param0: number, param1: any): void;
                  public tan(param0: number): void;
                  public slice(param0: any): void;
                  public addArgument(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.ExpressionBuilder;
                  public toRgba(param0: any): void;
                  public min(param0: androidNative.Array<number>): void;
                  public lt(param0: any): void;
                  public pow(param0: number, param1: number): void;
                  public has(param0: any): void;
                  public pow(param0: any): void;
                  public accumulated(): void;
                  public varExpression(param0: string): void;
                  public literal(param0: java.util.List<any>): void;
                  public acos(param0: any): void;
                  public cos(param0: any): void;
                  public within(param0: com.mapbox.geojson.Geometry): void;
                  public get(param0: any): void;
                  public inExpression(param0: number, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
                  public sqrt(param0: any): void;
                  public abs(param0: number): void;
                  public asin(param0: number): void;
                  public heatmapDensity(): void;
                  public floor(param0: any): void;
                  public typeofExpression(param0: any): void;
                  public lte(param0: any): void;
                  public sin(param0: any): void;
                  public gte(param0: any): void;
                  public sum(param0: any): void;
                  public isSupportedScript(param0: string): void;
                  public sqrt(param0: number): void;
                  public abs(param0: any): void;
                  public min(param0: any): void;
                  public toColor(param0: any): void;
                  public literal(param0: number): void;
                  public log10(param0: any): void;
                  public stop(param0: any): void;
                  public neq(param0: any): void;
                  public has(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
                  public rgb(param0: number, param1: number, param2: number): void;
                  public max(param0: any): void;
                  public number(param0: any): void;
                  public log2(param0: number): void;
                  public numberFormat(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: any): void;
                  public downcase(param0: any): void;
                  public literal(param0: string): void;
                  public subtract(param0: number, param1: number): void;
                  public product(param0: androidNative.Array<number>): void;
                  public match(param0: any): void;
                  public rgb(param0: any): void;
                  public inExpression(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
                  public coalesce(param0: any): void;
                  public pitch(): void;
                  public any(param0: any): void;
                  public collator(param0: any): void;
                  public acos(param0: number): void;
                  public id(): void;
                  public boolean(param0: any): void;
                  public geometryType(): void;
                  public resolvedLocale(param0: any): void;
                  public ln(param0: number): void;
                  public letExpression(param0: any): void;
                  public upcase(param0: string): void;
                  public length(param0: string): void;
                  public division(param0: any): void;
                  public indexOf(param0: any): void;
                  public properties(): void;
                  public get(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
                  public not(param0: any): void;
                  public string(param0: any): void;
                  public rgba(param0: any): void;
                  public max(param0: androidNative.Array<number>): void;
                  public rgba(param0: number, param1: number, param2: number, param3: number): void;
                  public objectExpression(param0: any): void;
                }
                export class FormatBuilder extends com.mapbox.maps.extension.style.expressions.generated.Expression.Builder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.expressions.generated.Expression.FormatBuilder>;
                  public constructor(param0: string);
                  public constructor();
                  public build(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public formatSection(param0: string, param1: any): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatBuilder;
                  public formatSection(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: any): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatBuilder;
                  public formatSection(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatBuilder;
                  public formatSection(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatBuilder;
                }
                export class FormatSectionBuilder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder>;
                  public fontScale(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder;
                  public constructor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression);
                  public textFont(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder;
                  public textColor(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder;
                  public textColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder;
                  public textColor(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder;
                  public build(): java.util.List<com.mapbox.maps.extension.style.expressions.generated.Expression>;
                  public fontScale(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder;
                  public textFont(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder;
                  public fontScale(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder;
                  public textColor(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder;
                  public textFont(param0: java.util.List<string>): com.mapbox.maps.extension.style.expressions.generated.Expression.FormatSectionBuilder;
                }
                export class InterpolatorBuilder extends com.mapbox.maps.extension.style.expressions.generated.Expression.ExpressionBuilder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.expressions.generated.Expression.InterpolatorBuilder>;
                  public constructor(param0: string);
                  public cubicBezier(param0: any): void;
                  public linear(): void;
                  public exponential(param0: any): void;
                }
                export class NumberFormatBuilder extends com.mapbox.maps.extension.style.expressions.generated.Expression.Builder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder>;
                  public minFractionDigits(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public constructor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression);
                  public minFractionDigits(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public currency(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public maxFractionDigits(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public constructor(param0: string);
                  public locale(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public build(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public locale(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public currency(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public minFractionDigits(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public locale(param0: any): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public maxFractionDigits(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public currency(param0: string): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
                  public maxFractionDigits(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression.NumberFormatBuilder;
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
    export module maps {
      export module extension {
        export module style {
          export module expressions {
            export module types {
              export class FormatSection {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.expressions.types.FormatSection>;
                public toString(): string;
                public constructor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: com.mapbox.maps.extension.style.expressions.generated.Expression, param2: com.mapbox.maps.extension.style.expressions.generated.Expression);
                public setTextColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
                public equals(param0: any): boolean;
                public component2(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public component3(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getFontScale(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public component1(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public constructor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: com.mapbox.maps.extension.style.expressions.generated.Expression, param2: com.mapbox.maps.extension.style.expressions.generated.Expression, param3: com.mapbox.maps.extension.style.expressions.generated.Expression);
                public getContent(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public setTextFont(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
                public component4(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextFont(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public copy(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: com.mapbox.maps.extension.style.expressions.generated.Expression, param2: com.mapbox.maps.extension.style.expressions.generated.Expression, param3: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.expressions.types.FormatSection;
                public setFontScale(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): void;
                public constructor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression, param1: com.mapbox.maps.extension.style.expressions.generated.Expression);
                public constructor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression);
                public hashCode(): number;
                public getTextColor(): com.mapbox.maps.extension.style.expressions.generated.Expression;
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
      export module extension {
        export module style {
          export module image {
            export class ImageExtensionImpl {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.image.ImageExtensionImpl>;
              public constructor(param0: com.mapbox.maps.extension.style.image.ImageExtensionImpl.Builder);
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            }
            export module ImageExtensionImpl {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.image.ImageExtensionImpl.Builder>;
                public internalImage: com.mapbox.maps.Image;
                public setContent$extension_style_publicRelease(param0: com.mapbox.maps.ImageContent): void;
                public bitmap(param0: globalAndroid.graphics.Bitmap): com.mapbox.maps.extension.style.image.ImageExtensionImpl.Builder;
                public setSdf$extension_style_publicRelease(param0: boolean): void;
                public stretchY(param0: java.util.List<com.mapbox.maps.ImageStretches>): com.mapbox.maps.extension.style.image.ImageExtensionImpl.Builder;
                public build(): com.mapbox.maps.extension.style.image.ImageExtensionImpl;
                public getContent$extension_style_publicRelease(): com.mapbox.maps.ImageContent;
                public getStretchX$extension_style_publicRelease(): java.util.List<com.mapbox.maps.ImageStretches>;
                public sdf(param0: boolean): com.mapbox.maps.extension.style.image.ImageExtensionImpl.Builder;
                public stretchX(param0: java.util.List<com.mapbox.maps.ImageStretches>): com.mapbox.maps.extension.style.image.ImageExtensionImpl.Builder;
                public setInternalImage$extension_style_publicRelease(param0: com.mapbox.maps.Image): void;
                public scale(param0: number): com.mapbox.maps.extension.style.image.ImageExtensionImpl.Builder;
                public content(param0: com.mapbox.maps.ImageContent): com.mapbox.maps.extension.style.image.ImageExtensionImpl.Builder;
                public getInternalImage$extension_style_publicRelease(): com.mapbox.maps.Image;
                public setStretchY$extension_style_publicRelease(param0: java.util.List<com.mapbox.maps.ImageStretches>): void;
                public getImageId(): string;
                public getScale$extension_style_publicRelease(): java.lang.Float;
                public setStretchX$extension_style_publicRelease(param0: java.util.List<com.mapbox.maps.ImageStretches>): void;
                public getStretchY$extension_style_publicRelease(): java.util.List<com.mapbox.maps.ImageStretches>;
                public setScale$extension_style_publicRelease(param0: java.lang.Float): void;
                public getSdf$extension_style_publicRelease(): boolean;
                public constructor(param0: string);
                public image(param0: com.mapbox.maps.Image): com.mapbox.maps.extension.style.image.ImageExtensionImpl.Builder;
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
      export module extension {
        export module style {
          export module image {
            export class ImageNinePatchExtensionImpl {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.image.ImageNinePatchExtensionImpl>;
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
              public constructor(param0: com.mapbox.maps.extension.style.image.ImageNinePatchExtensionImpl.Builder);
            }
            export module ImageNinePatchExtensionImpl {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.image.ImageNinePatchExtensionImpl.Builder>;
                public setContent$extension_style_publicRelease(param0: com.mapbox.maps.ImageContent): void;
                public constructor(param0: string, param1: globalAndroid.graphics.Bitmap);
                public setSdf$extension_style_publicRelease(param0: boolean): void;
                public getContent$extension_style_publicRelease(): com.mapbox.maps.ImageContent;
                public scale(param0: number): com.mapbox.maps.extension.style.image.ImageNinePatchExtensionImpl.Builder;
                public build(): com.mapbox.maps.extension.style.image.ImageNinePatchExtensionImpl;
                public getStretchX$extension_style_publicRelease(): java.util.List<com.mapbox.maps.ImageStretches>;
                public setInternalImage$extension_style_publicRelease(param0: com.mapbox.maps.Image): void;
                public getInternalImage$extension_style_publicRelease(): com.mapbox.maps.Image;
                public setStretchY$extension_style_publicRelease(param0: java.util.List<com.mapbox.maps.ImageStretches>): void;
                public getImageId(): string;
                public getScale$extension_style_publicRelease(): java.lang.Float;
                public sdf(param0: boolean): com.mapbox.maps.extension.style.image.ImageNinePatchExtensionImpl.Builder;
                public setStretchX$extension_style_publicRelease(param0: java.util.List<com.mapbox.maps.ImageStretches>): void;
                public getBitmap(): globalAndroid.graphics.Bitmap;
                public getStretchY$extension_style_publicRelease(): java.util.List<com.mapbox.maps.ImageStretches>;
                public setScale$extension_style_publicRelease(param0: java.lang.Float): void;
                public getSdf$extension_style_publicRelease(): boolean;
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
      export module extension {
        export module style {
          export module image {
            export class ImageUtils {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.image.ImageUtils>;
              public static image9Patch(param0: string, param1: globalAndroid.graphics.Bitmap): com.mapbox.maps.extension.style.image.ImageNinePatchExtensionImpl;
              public static image9Patch(param0: string, param1: globalAndroid.graphics.Bitmap, param2: any): com.mapbox.maps.extension.style.image.ImageNinePatchExtensionImpl;
              public static addImage9Patch(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleImageExtension): void;
              public static image(param0: string, param1: any): com.mapbox.maps.extension.style.image.ImageExtensionImpl;
              public static addImage(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleImageExtension): void;
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
      export module extension {
        export module style {
          export module image {
            export class NinePatchImage {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.image.NinePatchImage>;
              public component4(): com.mapbox.maps.ImageContent;
              public constructor(param0: com.mapbox.maps.Image, param1: java.util.List<com.mapbox.maps.ImageStretches>, param2: java.util.List<com.mapbox.maps.ImageStretches>, param3: com.mapbox.maps.ImageContent);
              public hashCode(): number;
              public getImageContent(): com.mapbox.maps.ImageContent;
              public component1(): com.mapbox.maps.Image;
              public toString(): string;
              public component2(): java.util.List<com.mapbox.maps.ImageStretches>;
              public getStretchY(): java.util.List<com.mapbox.maps.ImageStretches>;
              public copy(param0: com.mapbox.maps.Image, param1: java.util.List<com.mapbox.maps.ImageStretches>, param2: java.util.List<com.mapbox.maps.ImageStretches>, param3: com.mapbox.maps.ImageContent): com.mapbox.maps.extension.style.image.NinePatchImage;
              public getInternalImage(): com.mapbox.maps.Image;
              public component3(): java.util.List<com.mapbox.maps.ImageStretches>;
              public getStretchX(): java.util.List<com.mapbox.maps.ImageStretches>;
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
    export module maps {
      export module extension {
        export module style {
          export module image {
            export class NinePatchUtils {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.image.NinePatchUtils>;
              public static addImage9Patch(param0: com.mapbox.maps.extension.style.StyleInterface, param1: string, param2: globalAndroid.graphics.Bitmap, param3: number, param4: boolean): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
              public static addImage9Patch(param0: com.mapbox.maps.extension.style.StyleInterface, param1: string, param2: globalAndroid.graphics.Bitmap, param3: number): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
              public static parse9PatchBitmap(param0: globalAndroid.graphics.Bitmap): com.mapbox.maps.extension.style.image.NinePatchImage;
              public static addImage9Patch(param0: com.mapbox.maps.extension.style.StyleInterface, param1: string, param2: globalAndroid.graphics.Bitmap): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
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
      export module extension {
        export module style {
          export module layers {
            export abstract class Layer {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.Layer>;
              public constructor();
              public getMaxZoom(): java.lang.Double;
              public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
              public getLayerId(): string;
              public getCachedLayerProperties$extension_style_publicRelease(): com.mapbox.bindgen.Value;
              public toString(): string;
              public getInternalSourceId$extension_style_publicRelease(): string;
              public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
              public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
              public getAppliedLayerPropertiesValue$extension_style_publicRelease(): com.mapbox.bindgen.Value;
              public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
              public setProperty$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>): void;
              public setInternalSourceId$extension_style_publicRelease(param0: string): void;
              public setAppliedLayerPropertiesValue$extension_style_publicRelease(param0: com.mapbox.bindgen.Value): void;
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.LayerPosition): void;
              public getDelegate$extension_style_publicRelease(): com.mapbox.maps.StyleManagerInterface;
              public setDelegate$extension_style_publicRelease(param0: com.mapbox.maps.StyleManagerInterface): void;
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
              public getMinZoom(): java.lang.Double;
              public getType$extension_style_publicRelease(): string;
            }
            export module Layer {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.Layer.Companion>;
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
      export module extension {
        export module style {
          export module layers {
            export class LayerUtils {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.LayerUtils>;
              public static TAG: string;
              public static addPersistentLayer(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.layers.Layer, param2: com.mapbox.maps.LayerPosition): void;
              public static getLayer(param0: com.mapbox.maps.StyleManagerInterface, param1: string): com.mapbox.maps.extension.style.layers.Layer;
              public static addLayerAt(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleLayerExtension, param2: java.lang.Integer): void;
              public static addLayer(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleLayerExtension): void;
              public static isPersistent(param0: com.mapbox.maps.extension.style.layers.Layer): java.lang.Boolean;
              public static addPersistentLayer(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.layers.Layer): void;
              public static addLayerAbove(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleLayerExtension, param2: string): void;
              public static bindPersistentlyTo(param0: com.mapbox.maps.extension.style.layers.Layer, param1: com.mapbox.maps.extension.style.StyleInterface, param2: com.mapbox.maps.LayerPosition): void;
              public static addLayerBelow(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleLayerExtension, param2: string): void;
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
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class BackgroundLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.BackgroundLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.BackgroundLayer>;
                public backgroundPattern(param0: string): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                /** @deprecated */
                public backgroundPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public getLayerId(): string;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                /** @deprecated */
                public backgroundPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public getBackgroundColor(): string;
                public backgroundColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public getType$extension_style_publicRelease(): string;
                public backgroundOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public getBackgroundOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getBackgroundOpacity(): java.lang.Double;
                public backgroundColor(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public getBackgroundColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public backgroundColor(param0: string): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public getBackgroundOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public backgroundOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public getBackgroundPattern(): string;
                public getMaxZoom(): java.lang.Double;
                public getBackgroundPatternAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getMinZoom(): java.lang.Double;
                public constructor();
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public getBackgroundColorAsColorInt(): java.lang.Integer;
                public getBackgroundColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public backgroundOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public constructor(param0: string);
                /** @deprecated */
                public getBackgroundPatternTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public backgroundOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundPattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
              }
              export module BackgroundLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.BackgroundLayer.Companion>;
                  public getDefaultBackgroundColor(): string;
                  public getDefaultMinZoom(): java.lang.Double;
                  /** @deprecated */
                  public getDefaultBackgroundPatternTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultBackgroundColorAsColorInt(): java.lang.Integer;
                  public getDefaultBackgroundOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultBackgroundColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultBackgroundPattern(): string;
                  public getDefaultBackgroundOpacity(): java.lang.Double;
                  public getDefaultBackgroundPatternAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultBackgroundColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultBackgroundOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class BackgroundLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.BackgroundLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.BackgroundLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundColor(param0: string): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundColor(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundPattern(param0: string): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundPattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                  backgroundPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                });
                public constructor();
                public backgroundOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundPattern(param0: string): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundColor(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundColor(param0: string): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
                public backgroundPattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.BackgroundLayer;
              }
              export module BackgroundLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.BackgroundLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class CircleLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.CircleLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.CircleLayer>;
                public getCirclePitchAlignmentAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getCircleRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getCircleStrokeOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getLayerId(): string;
                public circleTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCircleStrokeColorAsColorInt(): java.lang.Integer;
                public circleOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCircleRadius(): java.lang.Double;
                public getCircleColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public circleOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public circleStrokeWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCircleStrokeWidthTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getCircleOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public circlePitchScale(param0: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCirclePitchScaleAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getCircleColor(): string;
                public getCircleTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getCircleStrokeOpacity(): java.lang.Double;
                public getCircleTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public constructor();
                public circleRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circlePitchAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleColor(param0: string): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCircleStrokeOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public circleColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public constructor(param0: string, param1: string);
                public getCircleBlurAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public circleBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCircleBlur(): java.lang.Double;
                public circleStrokeOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCirclePitchAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment;
                public getCircleOpacity(): java.lang.Double;
                public circleTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public getSourceLayer(): string;
                public getCircleTranslate(): java.util.List<java.lang.Double>;
                public getCircleStrokeWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getType$extension_style_publicRelease(): string;
                public circleTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getCircleColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getCircleStrokeWidth(): java.lang.Double;
                public getCircleRadiusTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getCircleTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public circlePitchScale(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeColor(param0: string): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCircleStrokeColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public circleStrokeWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeColor(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getMaxZoom(): java.lang.Double;
                public getCircleSortKeyAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public circleBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getMinZoom(): java.lang.Double;
                public circleStrokeColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCircleTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public circleStrokeOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getSourceId(): string;
                public getCircleSortKey(): java.lang.Double;
                public getCircleOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public circleColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleColor(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCircleColorAsColorInt(): java.lang.Integer;
                public circleStrokeOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circlePitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCirclePitchScale(): com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale;
                public getCircleStrokeColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getCircleBlurTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public circleBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public getCircleStrokeColor(): string;
                public circleRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
              }
              export module CircleLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.CircleLayer.Companion>;
                  public getDefaultCircleOpacity(): java.lang.Double;
                  public getDefaultCircleStrokeColor(): string;
                  public getDefaultCircleBlurAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultCircleStrokeWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultCircleRadius(): java.lang.Double;
                  public getDefaultCircleStrokeOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultCircleBlur(): java.lang.Double;
                  public getDefaultCirclePitchAlignmentAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultCircleColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultCirclePitchScale(): com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale;
                  public getDefaultCircleRadiusTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultCircleBlurTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultCircleStrokeColorAsColorInt(): java.lang.Integer;
                  public getDefaultCircleStrokeWidthTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultCircleStrokeOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultCirclePitchScaleAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultCircleStrokeOpacity(): java.lang.Double;
                  public getDefaultCircleStrokeWidth(): java.lang.Double;
                  public getDefaultCircleTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultCircleTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor;
                  public getDefaultCircleColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultCircleOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultCircleSortKeyAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultCircleRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultCircleStrokeColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultCircleOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultCircleStrokeColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultCircleTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultCirclePitchAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment;
                  public getDefaultCircleSortKey(): java.lang.Double;
                  public getDefaultCircleColor(): string;
                  public getDefaultCircleTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultCircleTranslate(): java.util.List<java.lang.Double>;
                  public getDefaultCircleColorAsColorInt(): java.lang.Integer;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class CircleLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.CircleLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.CircleLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleColor(param0: string): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleColor(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circlePitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circlePitchAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circlePitchScale(param0: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circlePitchScale(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeColor(param0: string): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeColor(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleStrokeWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                  circleTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                });
                public constructor();
                public circleTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circlePitchScale(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeColor(param0: string): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circlePitchScale(param0: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeColor(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circlePitchAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleColor(param0: string): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleColor(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circlePitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleStrokeOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
                public circleRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.CircleLayer;
              }
              export module CircleLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.CircleLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class FillExtrusionLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer>;
                public getLayerId(): string;
                public fillExtrusionOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionPattern(): string;
                public fillExtrusionAmbientOcclusionRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionVerticalGradient(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionBaseTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public fillExtrusionAmbientOcclusionIntensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionPattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.FillExtrusionTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionIntensityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionColor(): string;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getFillExtrusionBase(): java.lang.Double;
                public fillExtrusionOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionColor(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionAmbientOcclusionIntensity(): java.lang.Double;
                public getFillExtrusionAmbientOcclusionRadiusTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getFillExtrusionColorAsColorInt(): java.lang.Integer;
                public fillExtrusionAmbientOcclusionRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public constructor();
                public fillExtrusionHeightTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.FillExtrusionTranslateAnchor;
                public getFillExtrusionAmbientOcclusionRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getFillExtrusionAmbientOcclusionIntensityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getFillExtrusionBaseAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public fillExtrusionColor(param0: string): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public constructor(param0: string, param1: string);
                public getFillExtrusionHeight(): java.lang.Double;
                public getFillExtrusionTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getFillExtrusionOpacity(): java.lang.Double;
                /** @deprecated */
                public fillExtrusionPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionBase(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionIntensity(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionBaseTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionPattern(param0: string): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionVerticalGradient(): java.lang.Boolean;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public fillExtrusionColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionHeight(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getFillExtrusionVerticalGradientAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getSourceLayer(): string;
                public fillExtrusionVerticalGradient(param0: boolean): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getType$extension_style_publicRelease(): string;
                public fillExtrusionTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public fillExtrusionColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getFillExtrusionTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getFillExtrusionHeightTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getFillExtrusionAmbientOcclusionRadius(): java.lang.Double;
                public fillExtrusionBase(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionHeight(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionHeightTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionAmbientOcclusionIntensityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getMaxZoom(): java.lang.Double;
                public fillExtrusionColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionPatternAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getMinZoom(): java.lang.Double;
                public fillExtrusionPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getSourceId(): string;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionHeightAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public fillExtrusionOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getFillExtrusionBaseTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                /** @deprecated */
                public getFillExtrusionPatternTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                /** @deprecated */
                public fillExtrusionPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public getFillExtrusionTranslate(): java.util.List<java.lang.Double>;
              }
              export module FillExtrusionLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer.Companion>;
                  public getDefaultFillExtrusionColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultFillExtrusionBaseTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultFillExtrusionOpacity(): java.lang.Double;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultFillExtrusionAmbientOcclusionRadius(): java.lang.Double;
                  public getDefaultFillExtrusionAmbientOcclusionRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillExtrusionHeightTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultFillExtrusionTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillExtrusionAmbientOcclusionIntensity(): java.lang.Double;
                  public getDefaultFillExtrusionAmbientOcclusionIntensityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillExtrusionBase(): java.lang.Double;
                  public getDefaultFillExtrusionColorAsColorInt(): java.lang.Integer;
                  public getDefaultFillExtrusionHeight(): java.lang.Double;
                  public getDefaultFillExtrusionTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.FillExtrusionTranslateAnchor;
                  public getDefaultFillExtrusionHeightAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillExtrusionPatternAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultFillExtrusionTranslate(): java.util.List<java.lang.Double>;
                  public getDefaultFillExtrusionBaseAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillExtrusionColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillExtrusionOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultFillExtrusionAmbientOcclusionIntensityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultFillExtrusionPattern(): string;
                  public getDefaultFillExtrusionTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultFillExtrusionVerticalGradientAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillExtrusionColor(): string;
                  public getDefaultFillExtrusionOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  /** @deprecated */
                  public getDefaultFillExtrusionPatternTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultFillExtrusionVerticalGradient(): java.lang.Boolean;
                  public getDefaultFillExtrusionAmbientOcclusionRadiusTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultFillExtrusionTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class FillExtrusionLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionAmbientOcclusionIntensity(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionAmbientOcclusionIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionAmbientOcclusionIntensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionAmbientOcclusionIntensityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionAmbientOcclusionRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionAmbientOcclusionRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionAmbientOcclusionRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionAmbientOcclusionRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionBase(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionBase(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionBaseTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionBaseTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionColor(param0: string): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionColor(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionHeight(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionHeight(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionHeightTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionHeightTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionPattern(param0: string): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionPattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.FillExtrusionTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionVerticalGradient(param0: boolean): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                  fillExtrusionVerticalGradient(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                });
                public constructor();
                public fillExtrusionBase(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionIntensity(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionBaseTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionPattern(param0: string): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionHeight(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionVerticalGradient(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionVerticalGradient(param0: boolean): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionBaseTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionIntensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionPattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.FillExtrusionTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionIntensityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionBase(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionHeight(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionColor(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionHeightTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionHeightTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionColor(param0: string): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
                public fillExtrusionAmbientOcclusionRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayer;
              }
              export module FillExtrusionLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.FillExtrusionLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class FillLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.FillLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.FillLayer>;
                public fillPattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getLayerId(): string;
                public getFillPatternAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillColor(): string;
                public fillColor(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillAntialias(): java.lang.Boolean;
                public fillOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillOutlineColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getFillAntialiasAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getFillOutlineColorAsColorInt(): java.lang.Integer;
                public fillPattern(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                /** @deprecated */
                public fillPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                /** @deprecated */
                public fillPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public fillColor(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public fillTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public fillPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public constructor();
                public fillSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor;
                public fillTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOutlineColor(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public constructor(param0: string, param1: string);
                public fillOutlineColor(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillColorAsColorInt(): java.lang.Integer;
                public getFillOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public fillTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillSortKey(): java.lang.Double;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public fillTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getSourceLayer(): string;
                public getType$extension_style_publicRelease(): string;
                public getFillSortKeyAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public fillOutlineColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getFillOutlineColor(): string;
                public getFillPattern(): string;
                /** @deprecated */
                public getFillPatternTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getFillTranslate(): java.util.List<java.lang.Double>;
                public fillAntialias(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOutlineColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getMaxZoom(): java.lang.Double;
                public getFillTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public fillAntialias(param0: boolean): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getMinZoom(): java.lang.Double;
                public fillColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getSourceId(): string;
                public fillColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillOpacity(): java.lang.Double;
                public fillOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public getFillOutlineColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getFillTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public fillOutlineColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
              }
              export module FillLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.FillLayer.Companion>;
                  public getDefaultFillColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  /** @deprecated */
                  public getDefaultFillPatternTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultFillSortKey(): java.lang.Double;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultFillColor(): string;
                  public getDefaultFillTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultFillTranslate(): java.util.List<java.lang.Double>;
                  public getDefaultFillOutlineColor(): string;
                  public getDefaultFillOutlineColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor;
                  public getDefaultFillPatternAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillAntialias(): java.lang.Boolean;
                  public getDefaultFillOutlineColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultFillTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultFillColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillAntialiasAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultFillOutlineColorAsColorInt(): java.lang.Integer;
                  public getDefaultFillPattern(): string;
                  public getDefaultFillOpacity(): java.lang.Double;
                  public getDefaultFillColorAsColorInt(): java.lang.Integer;
                  public getDefaultFillSortKeyAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultFillOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class FillLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.FillLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.FillLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillAntialias(param0: boolean): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillAntialias(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillColor(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillColor(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillOutlineColor(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillOutlineColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillOutlineColor(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillOutlineColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillOutlineColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillPattern(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillPattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                  fillTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                });
                public constructor();
                public fillColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillPattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillColor(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOutlineColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillPattern(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillAntialias(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillColor(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOutlineColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillAntialias(param0: boolean): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillPatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillPatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOutlineColor(param0: string): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOutlineColor(param0: number): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillOutlineColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.FillLayer;
                public fillTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.FillLayer;
              }
              export module FillLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.FillLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class HeatmapLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.HeatmapLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.HeatmapLayer>;
                public getHeatmapIntensityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getHeatmapRadius(): java.lang.Double;
                public getLayerId(): string;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public getHeatmapOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public getSourceLayer(): string;
                public heatmapWeight(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public getType$extension_style_publicRelease(): string;
                public getFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public heatmapOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public getHeatmapIntensity(): java.lang.Double;
                public heatmapRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapWeight(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapIntensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public getHeatmapWeight(): java.lang.Double;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public heatmapRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapIntensityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapIntensity(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public getMaxZoom(): java.lang.Double;
                public getHeatmapColor(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getHeatmapOpacity(): java.lang.Double;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public heatmapOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public getMinZoom(): java.lang.Double;
                public constructor();
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public getSourceId(): string;
                public getHeatmapWeightAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public constructor(param0: string, param1: string);
                public heatmapColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public getHeatmapIntensityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public heatmapRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public getHeatmapOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getHeatmapRadiusTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getHeatmapRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
              }
              export module HeatmapLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.HeatmapLayer.Companion>;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultHeatmapIntensityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultHeatmapRadius(): java.lang.Double;
                  public getDefaultHeatmapOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultHeatmapOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultHeatmapRadiusTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultHeatmapIntensityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultHeatmapOpacity(): java.lang.Double;
                  public getDefaultHeatmapWeight(): java.lang.Double;
                  public getDefaultHeatmapIntensity(): java.lang.Double;
                  public getDefaultHeatmapRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultHeatmapWeightAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultHeatmapColor(): com.mapbox.maps.extension.style.expressions.generated.Expression;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class HeatmapLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.HeatmapLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.HeatmapLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapIntensity(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapIntensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapIntensityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapWeight(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                  heatmapWeight(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                });
                public constructor();
                public heatmapIntensity(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapWeight(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapWeight(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapIntensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapIntensityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
                public heatmapRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HeatmapLayer;
              }
              export module HeatmapLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.HeatmapLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class HillshadeLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.HillshadeLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.HillshadeLayer>;
                public hillshadeIlluminationAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.HillshadeIlluminationAnchor): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getLayerId(): string;
                public getHillshadeShadowColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public hillshadeAccentColor(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeHighlightColor(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeAccentColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeHighlightColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getHillshadeIlluminationAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.HillshadeIlluminationAnchor;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getHillshadeAccentColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getHillshadeHighlightColor(): string;
                public hillshadeShadowColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeExaggerationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeAccentColor(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public hillshadeShadowColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public constructor();
                public getHillshadeExaggerationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getHillshadeAccentColor(): string;
                public hillshadeAccentColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeIlluminationAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getHillshadeHighlightColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getHillshadeShadowColor(): string;
                public hillshadeShadowColor(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getHillshadeExaggeration(): java.lang.Double;
                public getHillshadeIlluminationDirection(): java.lang.Double;
                public getHillshadeExaggerationTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public hillshadeHighlightColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public constructor(param0: string, param1: string);
                public hillshadeIlluminationDirection(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeHighlightColor(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getHillshadeIlluminationDirectionAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getHillshadeShadowColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public hillshadeExaggerationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public getSourceLayer(): string;
                public getType$extension_style_publicRelease(): string;
                public hillshadeExaggeration(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeIlluminationDirection(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeShadowColor(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getHillshadeAccentColorAsColorInt(): java.lang.Integer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getHillshadeIlluminationAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public hillshadeHighlightColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getMaxZoom(): java.lang.Double;
                public getMinZoom(): java.lang.Double;
                public getHillshadeShadowColorAsColorInt(): java.lang.Integer;
                public getSourceId(): string;
                public getHillshadeHighlightColorAsColorInt(): java.lang.Integer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeShadowColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public getHillshadeHighlightColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getHillshadeAccentColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public hillshadeAccentColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeExaggeration(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
              }
              export module HillshadeLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.HillshadeLayer.Companion>;
                  public getDefaultHillshadeShadowColor(): string;
                  public getDefaultHillshadeShadowColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultHillshadeHighlightColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultHillshadeAccentColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultHillshadeIlluminationDirection(): java.lang.Double;
                  public getDefaultHillshadeShadowColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultHillshadeAccentColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultHillshadeAccentColor(): string;
                  public getDefaultHillshadeIlluminationAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.HillshadeIlluminationAnchor;
                  public getDefaultHillshadeShadowColorAsColorInt(): java.lang.Integer;
                  public getDefaultHillshadeAccentColorAsColorInt(): java.lang.Integer;
                  public getDefaultHillshadeExaggeration(): java.lang.Double;
                  public getDefaultHillshadeIlluminationDirectionAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultHillshadeHighlightColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultHillshadeExaggerationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultHillshadeHighlightColor(): string;
                  public getDefaultHillshadeHighlightColorAsColorInt(): java.lang.Integer;
                  public getDefaultHillshadeExaggerationTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultHillshadeIlluminationAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class HillshadeLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.HillshadeLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.HillshadeLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeAccentColor(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeAccentColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeAccentColor(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeAccentColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeAccentColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeExaggeration(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeExaggeration(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeExaggerationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeExaggerationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeHighlightColor(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeHighlightColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeHighlightColor(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeHighlightColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeHighlightColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeIlluminationAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.HillshadeIlluminationAnchor): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeIlluminationAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeIlluminationDirection(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeIlluminationDirection(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeShadowColor(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeShadowColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeShadowColor(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeShadowColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                  hillshadeShadowColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                });
                public constructor();
                public hillshadeIlluminationAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.HillshadeIlluminationAnchor): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeExaggerationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeAccentColor(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeHighlightColor(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeAccentColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeHighlightColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeExaggeration(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeIlluminationDirection(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeShadowColor(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeHighlightColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeShadowColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeExaggerationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeAccentColor(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeShadowColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeAccentColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeIlluminationAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeShadowColor(param0: number): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeHighlightColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeIlluminationDirection(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeShadowColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeAccentColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeExaggeration(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
                public hillshadeHighlightColor(param0: string): com.mapbox.maps.extension.style.layers.generated.HillshadeLayer;
              }
              export module HillshadeLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.HillshadeLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class LineLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.LineLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.LineLayer>;
                public lineMiterLimit(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineRoundLimitAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public lineSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineDasharray(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineRoundLimit(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineOpacity(): java.lang.Double;
                public lineTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineCap(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOffset(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public linePattern(param0: string): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getLineTrimOffset(): java.util.List<java.lang.Double>;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineGapWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getLineRoundLimit(): java.lang.Double;
                public lineBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                /** @deprecated */
                public getLinePatternTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public constructor(param0: string, param1: string);
                public linePatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineJoin(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getType$extension_style_publicRelease(): string;
                public getFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public lineJoin(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineJoin): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineMiterLimit(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineDasharray(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineGapWidth(): java.lang.Double;
                public getLineBlurAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getLineOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getLineDasharray(): java.util.List<java.lang.Double>;
                public getLineWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getMaxZoom(): java.lang.Double;
                public getLineGapWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getLineGapWidthTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getLineColor(): string;
                public getMinZoom(): java.lang.Double;
                /** @deprecated */
                public linePatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getLineSortKeyAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getLineWidth(): java.lang.Double;
                public getLineTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor;
                public lineColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineDasharrayTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLayerId(): string;
                public getLineDasharrayAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public lineOffsetTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineJoin(): com.mapbox.maps.extension.style.layers.properties.generated.LineJoin;
                public getLineOffsetTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getLineWidthTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public lineRoundLimit(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineMiterLimit(): java.lang.Double;
                public lineOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineTrimOffsetAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public lineBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineDasharrayTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineSortKey(): java.lang.Double;
                public lineColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public linePattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTrimOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineGapWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public lineTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public constructor();
                public getLineTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                /** @deprecated */
                public lineDasharrayTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineTranslate(): java.util.List<java.lang.Double>;
                /** @deprecated */
                public linePatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineGradient(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineOffsetAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public lineColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getSourceLayer(): string;
                public lineTrimOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineBlurTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public lineWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineGapWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                /** @deprecated */
                public lineDasharrayTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                /** @deprecated */
                public getLineDasharrayTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public lineTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineCap(): com.mapbox.maps.extension.style.layers.properties.generated.LineCap;
                public getLineBlur(): java.lang.Double;
                public getLinePattern(): string;
                public getLineOffset(): java.lang.Double;
                public getLineJoinAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public lineOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLinePatternAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getLineColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getLineColorAsColorInt(): java.lang.Integer;
                public lineCap(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineCap): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOffsetTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getSourceId(): string;
                public getLineColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getLineGradient(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public lineBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineGapWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public linePatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public getLineCapAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getLineMiterLimitAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
              }
              export module LineLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.LineLayer.Companion>;
                  public getDefaultLineRoundLimit(): java.lang.Double;
                  public getDefaultLineGapWidthTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  /** @deprecated */
                  public getDefaultLinePatternTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultLineDasharrayAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineWidthTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultLineBlurAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineOpacity(): java.lang.Double;
                  public getDefaultLineCapAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineMiterLimit(): java.lang.Double;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultLineGapWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLinePatternAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineOffset(): java.lang.Double;
                  public getDefaultLineColor(): string;
                  public getDefaultLineBlurTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultLinePattern(): string;
                  public getDefaultLineWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineSortKey(): java.lang.Double;
                  public getDefaultLineOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineColorAsColorInt(): java.lang.Integer;
                  public getDefaultLineRoundLimitAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineDasharray(): java.util.List<java.lang.Double>;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultLineOffsetTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultLineJoin(): com.mapbox.maps.extension.style.layers.properties.generated.LineJoin;
                  public getDefaultLineJoinAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  /** @deprecated */
                  public getDefaultLineDasharrayTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultLineOffsetAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor;
                  public getDefaultLineSortKeyAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultLineMiterLimitAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineBlur(): java.lang.Double;
                  public getDefaultLineTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultLineTranslate(): java.util.List<java.lang.Double>;
                  public getDefaultLineTrimOffsetAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultLineWidth(): java.lang.Double;
                  public getDefaultLineGapWidth(): java.lang.Double;
                  public getDefaultLineColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultLineTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLineTrimOffset(): java.util.List<java.lang.Double>;
                  public getDefaultLineCap(): com.mapbox.maps.extension.style.layers.properties.generated.LineCap;
                  public getDefaultLineTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class LineLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.LineLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.LineLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineCap(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineCap): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineCap(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineJoin(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineJoin): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineJoin(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineMiterLimit(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineMiterLimit(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineRoundLimit(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineRoundLimit(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineDasharray(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineDasharray(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineDasharrayTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineDasharrayTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineGapWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineGapWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineGapWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineGapWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineGradient(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineOffset(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineOffsetTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineOffsetTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  linePattern(param0: string): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  linePattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  linePatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  linePatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineTrimOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineTrimOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                  lineWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                });
                public constructor();
                public lineMiterLimit(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineDasharray(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineRoundLimit(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOffsetTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineCap(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOffset(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineRoundLimit(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public linePattern(param0: string): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineDasharrayTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public linePattern(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTrimOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineGapWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineGapWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public linePatternTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineGradient(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineJoin(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTrimOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineJoin(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineJoin): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineMiterLimit(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineDasharray(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineGapWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineCap(param0: com.mapbox.maps.extension.style.layers.properties.generated.LineCap): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineOffsetTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineGapWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public linePatternTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LineLayer;
                public lineDasharrayTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LineLayer;
              }
              export module LineLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.LineLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class LocationIndicatorLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer>;
                public getAccuracyRadiusBorderColor(): string;
                public getTopImageSizeTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public topImageSize(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public imagePitchDisplacement(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getLocationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getLocationIndicatorOpacity(): java.lang.Double;
                public accuracyRadiusColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getLocationTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public shadowImageSize(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getAccuracyRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getShadowImageSize(): java.lang.Double;
                public emphasisCircleColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getBearingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public topImage(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getAccuracyRadiusBorderColorAsColorInt(): java.lang.Integer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getTopImageSize(): java.lang.Double;
                public getEmphasisCircleColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public emphasisCircleColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getAccuracyRadiusBorderColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public accuracyRadiusBorderColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getAccuracyRadiusBorderColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getShadowImageSizeTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public imagePitchDisplacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getAccuracyRadiusColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public locationIndicatorOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getType$extension_style_publicRelease(): string;
                public getTopImageSizeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getEmphasisCircleColor(): string;
                public perspectiveCompensation(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingImageSizeTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public locationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearing(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public shadowImageSizeTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getBearingImage(): string;
                public getShadowImageSizeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public topImageSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getMaxZoom(): java.lang.Double;
                public getMinZoom(): java.lang.Double;
                public getImagePitchDisplacementAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public location(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusBorderColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public shadowImageSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getImagePitchDisplacement(): java.lang.Double;
                public emphasisCircleColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getEmphasisCircleRadius(): java.lang.Double;
                public getBearingImageSizeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getPerspectiveCompensation(): java.lang.Double;
                public shadowImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getBearing(): java.lang.Double;
                public accuracyRadiusBorderColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getLayerId(): string;
                public bearingImageSizeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getAccuracyRadiusColorAsColorInt(): java.lang.Integer;
                public accuracyRadiusBorderColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public locationIndicatorOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getLocationIndicatorOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public bearing(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getAccuracyRadius(): java.lang.Double;
                public accuracyRadiusColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getEmphasisCircleRadiusTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public shadowImageSizeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getTopImage(): string;
                public getAccuracyRadiusColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getBearingImageAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public locationIndicatorOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getAccuracyRadiusTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public bearingImageSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getLocation(): java.util.List<java.lang.Double>;
                public getTopImageAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public constructor();
                public getAccuracyRadiusColor(): string;
                public accuracyRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public shadowImage(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public perspectiveCompensation(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public emphasisCircleRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getBearingImageSizeTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getEmphasisCircleColorAsColorInt(): java.lang.Integer;
                public location(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingImageSize(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getEmphasisCircleColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public accuracyRadiusBorderColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public locationIndicatorOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getLocationIndicatorOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public emphasisCircleRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public topImageSizeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public topImageSizeTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getShadowImageAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public topImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public locationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getPerspectiveCompensationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public bearingImage(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getShadowImage(): string;
                public getBearingImageSize(): java.lang.Double;
                public getEmphasisCircleRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public constructor(param0: string);
                public bearingImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public getBearingTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
              }
              export module LocationIndicatorLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer.Companion>;
                  public getDefaultAccuracyRadiusBorderColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultLocationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultBearingImageSizeTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultShadowImageSizeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultShadowImageAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultEmphasisCircleRadiusTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultBearingImage(): string;
                  public getDefaultLocationIndicatorOpacity(): java.lang.Double;
                  public getDefaultAccuracyRadiusBorderColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultAccuracyRadiusBorderColorAsColorInt(): java.lang.Integer;
                  public getDefaultBearingImageSizeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultPerspectiveCompensation(): java.lang.Double;
                  public getDefaultAccuracyRadiusTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultEmphasisCircleRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultAccuracyRadiusColor(): string;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultLocationTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultBearingImageSize(): java.lang.Double;
                  public getDefaultImagePitchDisplacementAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultBearing(): java.lang.Double;
                  public getDefaultShadowImageSizeTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultAccuracyRadiusBorderColor(): string;
                  public getDefaultTopImageSize(): java.lang.Double;
                  public getDefaultEmphasisCircleColor(): string;
                  public getDefaultTopImage(): string;
                  public getDefaultAccuracyRadiusColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultLocation(): java.util.List<java.lang.Double>;
                  public getDefaultImagePitchDisplacement(): java.lang.Double;
                  public getDefaultAccuracyRadiusColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultTopImageSizeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultShadowImageSize(): java.lang.Double;
                  public getDefaultLocationIndicatorOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTopImageAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultEmphasisCircleRadius(): java.lang.Double;
                  public getDefaultAccuracyRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultBearingTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultAccuracyRadiusColorAsColorInt(): java.lang.Integer;
                  public getDefaultAccuracyRadius(): java.lang.Double;
                  public getDefaultEmphasisCircleColorAsColorInt(): java.lang.Integer;
                  public getDefaultPerspectiveCompensationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultBearingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultShadowImage(): string;
                  public getDefaultLocationIndicatorOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultEmphasisCircleColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultBearingImageAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultEmphasisCircleColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultTopImageSizeTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class LocationIndicatorLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  bearingImage(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  bearingImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  shadowImage(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  shadowImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  topImage(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  topImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusBorderColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusBorderColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusBorderColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusBorderColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusBorderColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  accuracyRadiusColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  bearing(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  bearing(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  bearingTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  bearingTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  bearingImageSize(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  bearingImageSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  bearingImageSizeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  bearingImageSizeTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  emphasisCircleColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  emphasisCircleColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  emphasisCircleColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  emphasisCircleColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  emphasisCircleColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  emphasisCircleRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  emphasisCircleRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  emphasisCircleRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  emphasisCircleRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  imagePitchDisplacement(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  imagePitchDisplacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  location(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  location(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  locationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  locationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  locationIndicatorOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  locationIndicatorOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  locationIndicatorOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  locationIndicatorOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  perspectiveCompensation(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  perspectiveCompensation(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  shadowImageSize(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  shadowImageSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  shadowImageSizeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  shadowImageSizeTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  topImageSize(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  topImageSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  topImageSizeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                  topImageSizeTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                });
                public constructor();
                public accuracyRadiusBorderColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingImageSizeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusBorderColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public topImageSize(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public imagePitchDisplacement(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public locationIndicatorOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearing(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public shadowImageSize(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public shadowImageSizeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public locationIndicatorOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingImageSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public topImage(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusBorderColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public shadowImage(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public imagePitchDisplacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public perspectiveCompensation(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public locationIndicatorOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public location(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public perspectiveCompensation(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingImageSizeTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public locationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearing(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public shadowImageSizeTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingImageSize(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusBorderColor(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public topImageSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public locationIndicatorOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleRadiusTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public topImageSizeTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public topImageSizeTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public location(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusBorderColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public shadowImageSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public topImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleColor(param0: number): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public locationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingImage(param0: string): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleRadiusTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public emphasisCircleColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public bearingImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public accuracyRadiusColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
                public shadowImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayer;
              }
              export module LocationIndicatorLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.LocationIndicatorLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class ModelLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.ModelLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.ModelLayer>;
                public modelId(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public getModelScale(): java.util.List<java.lang.Double>;
                public getModelScaleTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getLayerId(): string;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelRotationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public getSourceLayer(): string;
                public modelScale(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelScaleTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public getType$extension_style_publicRelease(): string;
                public getFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public modelRotation(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public getModelRotationTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public modelId(param0: string): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelScaleTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getModelType(): com.mapbox.maps.extension.style.layers.properties.generated.ModelType;
                public getModelScaleAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getModelRotation(): java.util.List<java.lang.Double>;
                public modelType(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public getMaxZoom(): java.lang.Double;
                public modelType(param0: com.mapbox.maps.extension.style.layers.properties.generated.ModelType): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getMinZoom(): java.lang.Double;
                public constructor();
                public getSourceId(): string;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelScale(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public constructor(param0: string, param1: string);
                public getModelIdAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getModelRotationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public modelRotation(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public getModelId(): string;
                public modelRotationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public getModelTypeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
              }
              export module ModelLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.ModelLayer.Companion>;
                  public getDefaultModelRotation(): java.util.List<java.lang.Double>;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultModelScaleTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultModelScale(): java.util.List<java.lang.Double>;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultModelRotationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultModelScaleAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultModelType(): com.mapbox.maps.extension.style.layers.properties.generated.ModelType;
                  public getDefaultModelTypeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultModelIdAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultModelRotationTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultModelId(): string;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class ModelLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.ModelLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.ModelLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelId(param0: string): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelId(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelRotation(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelRotation(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelRotationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelRotationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelScale(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelScale(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelScaleTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelScaleTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelType(param0: com.mapbox.maps.extension.style.layers.properties.generated.ModelType): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                  modelType(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                });
                public constructor();
                public modelId(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelRotationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelType(param0: com.mapbox.maps.extension.style.layers.properties.generated.ModelType): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelScale(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelScaleTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelRotation(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelScale(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelId(param0: string): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelScaleTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelRotation(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelRotationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
                public modelType(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.ModelLayer;
              }
              export module ModelLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.ModelLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class RasterLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.RasterLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.RasterLayer>;
                public rasterBrightnessMax(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getRasterHueRotate(): java.lang.Double;
                public getLayerId(): string;
                public rasterOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterHueRotate(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getRasterOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public rasterSaturation(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMin(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getRasterBrightnessMaxAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getRasterSaturation(): java.lang.Double;
                public getRasterBrightnessMax(): java.lang.Double;
                public rasterFadeDuration(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterHueRotateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMinTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getRasterFadeDuration(): java.lang.Double;
                public rasterFadeDuration(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterContrastTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public rasterHueRotateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterResampling(param0: com.mapbox.maps.extension.style.layers.properties.generated.RasterResampling): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public constructor();
                public rasterContrast(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMax(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getRasterBrightnessMin(): java.lang.Double;
                public constructor(param0: string, param1: string);
                public rasterBrightnessMaxTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterSaturationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterHueRotate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMaxTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public getRasterContrastTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getSourceLayer(): string;
                public rasterOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getType$extension_style_publicRelease(): string;
                public getRasterResamplingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getRasterHueRotateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getRasterBrightnessMinTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getRasterHueRotateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public rasterSaturationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getRasterContrastAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getRasterBrightnessMaxTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getRasterSaturationTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public rasterBrightnessMin(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterSaturation(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getRasterResampling(): com.mapbox.maps.extension.style.layers.properties.generated.RasterResampling;
                public getMaxZoom(): java.lang.Double;
                public rasterResampling(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getMinZoom(): java.lang.Double;
                public getRasterBrightnessMinAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public rasterContrastTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getRasterSaturationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getRasterContrast(): java.lang.Double;
                public rasterBrightnessMinTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public getRasterFadeDurationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getRasterOpacity(): java.lang.Double;
                public getRasterOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getSourceId(): string;
                public rasterContrast(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
              }
              export module RasterLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.RasterLayer.Companion>;
                  public getDefaultRasterOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultRasterSaturation(): java.lang.Double;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultRasterOpacity(): java.lang.Double;
                  public getDefaultRasterBrightnessMaxAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultRasterOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultRasterBrightnessMinAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultRasterContrastTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultRasterHueRotateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultRasterHueRotateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultRasterFadeDurationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultRasterBrightnessMin(): java.lang.Double;
                  public getDefaultRasterResampling(): com.mapbox.maps.extension.style.layers.properties.generated.RasterResampling;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultRasterFadeDuration(): java.lang.Double;
                  public getDefaultRasterContrast(): java.lang.Double;
                  public getDefaultRasterHueRotate(): java.lang.Double;
                  public getDefaultRasterBrightnessMaxTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultRasterResamplingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultRasterSaturationTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultRasterBrightnessMinTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultRasterSaturationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultRasterContrastAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultRasterBrightnessMax(): java.lang.Double;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class RasterLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.RasterLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.RasterLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterBrightnessMax(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterBrightnessMax(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterBrightnessMaxTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterBrightnessMaxTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterBrightnessMin(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterBrightnessMin(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterBrightnessMinTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterBrightnessMinTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterContrast(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterContrast(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterContrastTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterContrastTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterFadeDuration(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterFadeDuration(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterHueRotate(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterHueRotate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterHueRotateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterHueRotateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterResampling(param0: com.mapbox.maps.extension.style.layers.properties.generated.RasterResampling): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterResampling(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterSaturation(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterSaturation(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterSaturationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                  rasterSaturationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                });
                public constructor();
                public rasterBrightnessMax(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterHueRotate(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterSaturationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterSaturation(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMin(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMin(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterSaturation(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterFadeDuration(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterHueRotateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMinTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterFadeDuration(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterResampling(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterContrastTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterHueRotateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterResampling(param0: com.mapbox.maps.extension.style.layers.properties.generated.RasterResampling): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterContrast(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterContrastTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMinTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMax(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterContrast(param0: number): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMaxTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterSaturationTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterHueRotate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
                public rasterBrightnessMaxTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.RasterLayer;
              }
              export module RasterLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.RasterLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class SkyLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.SkyLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.SkyLayer>;
                public getSkyTypeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public skyAtmosphereSun(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getSkyAtmosphereHaloColorAsColorInt(): java.lang.Integer;
                public skyAtmosphereSunIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getLayerId(): string;
                public getSkyAtmosphereHaloColor(): string;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyGradientRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getSkyGradientRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public skyType(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getSkyOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public skyGradientRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereSun(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public skyAtmosphereColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public constructor();
                public getSkyAtmosphereColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getSkyGradientCenter(): java.util.List<java.lang.Double>;
                public getSkyType(): com.mapbox.maps.extension.style.layers.properties.generated.SkyType;
                public skyOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getSkyAtmosphereHaloColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public skyGradient(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getSkyGradientRadius(): java.lang.Double;
                public getSkyAtmosphereColorAsColorInt(): java.lang.Integer;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getSkyOpacity(): java.lang.Double;
                public getType$extension_style_publicRelease(): string;
                public skyAtmosphereSunIntensity(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getSkyGradientCenterAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public skyOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereHaloColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getMaxZoom(): java.lang.Double;
                public getSkyAtmosphereSunAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getSkyOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public skyGradientCenter(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getMinZoom(): java.lang.Double;
                public getSkyAtmosphereSunIntensity(): java.lang.Double;
                public getSkyAtmosphereSunIntensityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public skyType(param0: com.mapbox.maps.extension.style.layers.properties.generated.SkyType): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getSkyAtmosphereColor(): string;
                public getSkyGradient(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public skyGradientCenter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereHaloColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereHaloColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public getSkyAtmosphereSun(): java.util.List<java.lang.Double>;
                public constructor(param0: string);
              }
              export module SkyLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.SkyLayer.Companion>;
                  public getDefaultSkyType(): com.mapbox.maps.extension.style.layers.properties.generated.SkyType;
                  public getDefaultSkyOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSkyTypeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultSkyOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultSkyAtmosphereSun(): java.util.List<java.lang.Double>;
                  public getDefaultSkyGradientRadius(): java.lang.Double;
                  public getDefaultSkyGradientRadiusAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultSkyGradientCenterAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSkyOpacity(): java.lang.Double;
                  public getDefaultSkyAtmosphereColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultSkyAtmosphereHaloColor(): string;
                  public getDefaultSkyAtmosphereHaloColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSkyAtmosphereSunAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSkyGradientCenter(): java.util.List<java.lang.Double>;
                  public getDefaultSkyAtmosphereSunIntensity(): java.lang.Double;
                  public getDefaultSkyAtmosphereSunIntensityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSkyGradient(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSkyAtmosphereHaloColorAsColorInt(): java.lang.Integer;
                  public getDefaultSkyAtmosphereColor(): string;
                  public getDefaultSkyAtmosphereColorAsColorInt(): java.lang.Integer;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class SkyLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.SkyLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.SkyLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyAtmosphereColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyAtmosphereColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyAtmosphereColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyAtmosphereHaloColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyAtmosphereHaloColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyAtmosphereHaloColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyAtmosphereSun(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyAtmosphereSun(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyAtmosphereSunIntensity(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyAtmosphereSunIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyGradient(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyGradientCenter(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyGradientCenter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyGradientRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyGradientRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyType(param0: com.mapbox.maps.extension.style.layers.properties.generated.SkyType): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                  skyType(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                });
                public constructor();
                public skyAtmosphereSun(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereSunIntensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereSunIntensity(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyGradientRadius(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyType(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereHaloColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyGradientRadius(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereSun(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyGradientCenter(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyType(param0: com.mapbox.maps.extension.style.layers.properties.generated.SkyType): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyGradientCenter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereHaloColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereHaloColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyAtmosphereColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
                public skyGradient(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SkyLayer;
              }
              export module SkyLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.SkyLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class SymbolLayer extends com.mapbox.maps.extension.style.layers.Layer implements com.mapbox.maps.extension.style.layers.generated.SymbolLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.SymbolLayer>;
                public textMaxWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconRotationAlignmentAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textHaloBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getSymbolZOrder(): com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder;
                public getIconPadding(): java.lang.Double;
                public textPitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textLineHeight(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public iconPadding(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconPadding(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTransform(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextTransform): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public textAllowOverlap(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textIgnorePlacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textField(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolZOrder(param0: com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextRadialOffset(): java.lang.Double;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.Layer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public iconOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextKeepUpright(): java.lang.Boolean;
                public iconHaloWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconSize(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                public getTextHaloWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconHaloBlur(): java.lang.Double;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.Layer;
                public getIconOffsetAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconHaloColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getTextAllowOverlapAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textJustify(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextJustify): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textLetterSpacing(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextLineHeightAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconIgnorePlacement(): java.lang.Boolean;
                public getTextOptionalAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textPadding(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textPadding(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextMaxAngleAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextPitchAlignmentAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public iconColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextIgnorePlacementAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextSizeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getType$extension_style_publicRelease(): string;
                public getTextTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor;
                public getFilter(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextLineHeight(): java.lang.Double;
                public getIconHaloColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textRotationAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextTransform(): com.mapbox.maps.extension.style.layers.properties.generated.TextTransform;
                public getTextOffsetAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextWritingMode(): java.util.List<string>;
                public getIconOptionalAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconRotate(): java.lang.Double;
                public iconImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getMinZoom(): java.lang.Double;
                public textRotate(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolSpacing(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconTextFit(): com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit;
                public textColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextHaloColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public textOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textRotate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconTranslate(): java.util.List<java.lang.Double>;
                public textSize(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTextFit(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextHaloWidthTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public iconKeepUpright(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextHaloColor(): string;
                public textTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconRotationAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconIgnorePlacementAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textField(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public iconKeepUpright(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconKeepUprightAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconSizeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconAllowOverlap(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getSymbolPlacementAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textIgnorePlacement(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconRotationAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment;
                public textOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textWritingMode(param0: java.util.List<string>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextSize(): java.lang.Double;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextHaloColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textHaloWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTransform(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolAvoidEdges(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextOpacity(): java.lang.Double;
                public getTextJustifyAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconHaloBlurTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getTextAllowOverlap(): java.lang.Boolean;
                public getSymbolZOrderAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconHaloWidthTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getSymbolAvoidEdgesAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextColor(): string;
                public getTextOptional(): java.lang.Boolean;
                public getTextRotationAlignmentAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconPitchAlignmentAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public iconImage(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textVariableAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textVariableAnchor(param0: java.util.List<string>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextIgnorePlacement(): java.lang.Boolean;
                public textHaloColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconHaloWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconHaloColor(): string;
                public getTextOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public iconIgnorePlacement(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textPitchAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconTextFitPaddingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextOffset(): java.util.List<java.lang.Double>;
                public getSourceId(): string;
                public iconPitchAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconRotate(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getSymbolAvoidEdges(): java.lang.Boolean;
                public textColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTextFit(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getSymbolSpacingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textWritingMode(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextJustify(): com.mapbox.maps.extension.style.layers.properties.generated.TextJustify;
                public textOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextField(): com.mapbox.maps.extension.style.types.Formatted;
                public symbolAvoidEdges(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textRadialOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextTransformAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textLineHeight(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextPadding(): java.lang.Double;
                public textAllowOverlap(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public iconOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public constructor(param0: string, param1: string);
                public textColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolPlacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconRotate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolPlacement(param0: com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconHaloColorAsColorInt(): java.lang.Integer;
                public getIconHaloWidth(): java.lang.Double;
                public iconAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textField(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textFont(param0: java.util.List<string>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconOptional(): java.lang.Boolean;
                public getTextFieldAsString(): string;
                public textHaloWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolZOrder(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextRadialOffsetAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textRotationAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOptional(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconRotationAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textLetterSpacing(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextKeepUprightAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOptional(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolSpacing(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextHaloBlurTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getIconTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getMaxZoom(): java.lang.Double;
                public getTextRotate(): java.lang.Double;
                public textMaxWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconPitchAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment;
                public textHaloBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconPitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextFont(): java.util.List<string>;
                public getTextTranslate(): java.util.List<java.lang.Double>;
                public iconHaloColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextHaloBlur(): java.lang.Double;
                public iconHaloColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconTextFitPadding(): java.util.List<java.lang.Double>;
                public textField(param0: com.mapbox.maps.extension.style.types.Formatted): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTextFitPadding(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextHaloBlurAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textHaloColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconColor(): string;
                public getLayerId(): string;
                public getIconHaloBlurAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextHaloWidth(): java.lang.Double;
                public textOptional(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconOpacity(): java.lang.Double;
                public getIconImage(): string;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor;
                public iconTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconOffset(): java.util.List<java.lang.Double>;
                public getTextMaxWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextPaddingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconSize(): java.lang.Double;
                public getIconPaddingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getSymbolSortKey(): java.lang.Double;
                public textHaloBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextPitchAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment;
                public getTextColorAsColorInt(): java.lang.Integer;
                public getTextRotationAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment;
                public iconHaloColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconTextFitAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextFontAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public constructor();
                public iconColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextMaxWidth(): java.lang.Double;
                public iconHaloBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getSymbolSortKeyAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textMaxAngle(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOptional(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getSymbolSpacing(): java.lang.Double;
                public textFont(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconKeepUpright(): java.lang.Boolean;
                public getVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                public textColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getSourceLayer(): string;
                public getTextVariableAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconAllowOverlap(): java.lang.Boolean;
                public getTextAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                public iconAllowOverlap(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textKeepUpright(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textKeepUpright(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconColorAsColorInt(): java.lang.Integer;
                public iconTextFitPadding(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public textMaxAngle(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconIgnorePlacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextLetterSpacing(): java.lang.Double;
                public getTextVariableAnchor(): java.util.List<string>;
                public getTextFieldAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextRotateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getSymbolPlacement(): com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement;
                public textJustify(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getIconColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public getTextLetterSpacingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextWritingModeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIconImageAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextMaxAngle(): java.lang.Double;
                public getIconAllowOverlapAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getTextHaloColorAsColorInt(): java.lang.Integer;
                public getIconRotateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public textAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textRadialOffset(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
              }
              export module SymbolLayer {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.SymbolLayer.Companion>;
                  public getDefaultTextTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSymbolZOrder(): com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder;
                  public getDefaultIconPaddingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconKeepUpright(): java.lang.Boolean;
                  public getDefaultIconOpacity(): java.lang.Double;
                  public getDefaultIconTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultTextRotate(): java.lang.Double;
                  public getDefaultTextHaloBlurAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextHaloWidth(): java.lang.Double;
                  public getDefaultIconAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public getDefaultIconOffset(): java.util.List<java.lang.Double>;
                  public getDefaultSymbolSortKey(): java.lang.Double;
                  public getDefaultIconRotationAlignmentAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextColorAsColorInt(): java.lang.Integer;
                  public getDefaultSymbolAvoidEdges(): java.lang.Boolean;
                  public getDefaultTextHaloBlurTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultMaxZoom(): java.lang.Double;
                  public getDefaultTextHaloColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextTranslateTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultTextLetterSpacing(): java.lang.Double;
                  public getDefaultIconTextFitPaddingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconTextFitAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextWritingMode(): java.util.List<string>;
                  public getDefaultIconAllowOverlap(): java.lang.Boolean;
                  public getDefaultTextMaxWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconKeepUprightAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextIgnorePlacementAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconHaloBlurAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextPaddingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconOptionalAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextFont(): java.util.List<string>;
                  public getDefaultTextHaloBlur(): java.lang.Double;
                  public getDefaultTextAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public getDefaultIconTranslateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSymbolSpacing(): java.lang.Double;
                  public getDefaultSymbolSortKeyAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultTextVariableAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconHaloBlurTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultIconColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultTextFieldAsString(): string;
                  public getDefaultTextSizeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextOpacityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconHaloColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultIconHaloWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconPitchAlignmentAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextHaloColor(): string;
                  public getDefaultTextSize(): java.lang.Double;
                  public getDefaultTextPadding(): java.lang.Double;
                  public getDefaultTextPitchAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment;
                  public getDefaultTextMaxAngleAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconColorAsColorInt(): java.lang.Integer;
                  public getDefaultTextOffsetAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextOpacity(): java.lang.Double;
                  public getDefaultTextTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor;
                  public getDefaultIconHaloWidthTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultTextRadialOffsetAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSymbolSpacingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconTextFit(): com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit;
                  public getDefaultIconImageAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextIgnorePlacement(): java.lang.Boolean;
                  public getDefaultTextJustify(): com.mapbox.maps.extension.style.layers.properties.generated.TextJustify;
                  public getDefaultIconIgnorePlacementAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconHaloWidth(): java.lang.Double;
                  public getDefaultTextColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextTransform(): com.mapbox.maps.extension.style.layers.properties.generated.TextTransform;
                  public getDefaultTextField(): com.mapbox.maps.extension.style.types.Formatted;
                  public getDefaultTextOffset(): java.util.List<java.lang.Double>;
                  public getDefaultIconHaloColorAsColorInt(): java.lang.Integer;
                  public getDefaultTextFieldAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconOffsetAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextFontAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextKeepUprightAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconTextFitPadding(): java.util.List<java.lang.Double>;
                  public getDefaultIconPadding(): java.lang.Double;
                  public getDefaultTextRadialOffset(): java.lang.Double;
                  public getDefaultTextTransformAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSymbolPlacementAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultMinZoom(): java.lang.Double;
                  public getDefaultTextColor(): string;
                  public getDefaultIconSize(): java.lang.Double;
                  public getDefaultIconTranslateAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor;
                  public getDefaultTextAllowOverlapAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextLetterSpacingAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconSizeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextLineHeight(): java.lang.Double;
                  public getDefaultTextHaloWidthAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextAllowOverlap(): java.lang.Boolean;
                  public getDefaultTextLineHeightAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextVariableAnchor(): java.util.List<string>;
                  public getDefaultTextMaxWidth(): java.lang.Double;
                  public getDefaultTextOptionalAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextHaloWidthTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultIconIgnorePlacement(): java.lang.Boolean;
                  public getDefaultTextColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultVisibility(): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getDefaultIconRotate(): java.lang.Double;
                  public getDefaultTextRotationAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment;
                  public getDefaultIconAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconImage(): string;
                  public getDefaultTextHaloColorAsColorInt(): java.lang.Integer;
                  public getDefaultIconHaloColor(): string;
                  public getDefaultTextKeepUpright(): java.lang.Boolean;
                  public getDefaultIconTranslate(): java.util.List<java.lang.Double>;
                  public getDefaultSymbolPlacement(): com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement;
                  public getDefaultTextOptional(): java.lang.Boolean;
                  public getDefaultSymbolZOrderAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconRotationAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment;
                  public getDefaultTextJustifyAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconHaloBlur(): java.lang.Double;
                  public getDefaultIconAllowOverlapAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextRotateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextRotationAlignmentAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconPitchAlignment(): com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment;
                  public getDefaultTextAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextMaxAngle(): java.lang.Double;
                  public getDefaultIconHaloColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextTranslateAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconColor(): string;
                  public getDefaultIconRotateAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultSymbolAvoidEdgesAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultTextOpacityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultTextTranslate(): java.util.List<java.lang.Double>;
                  public getDefaultTextHaloColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                  public getDefaultTextPitchAlignmentAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                  public getDefaultIconOptional(): java.lang.Boolean;
                  public getDefaultTextWritingModeAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module generated {
              export class SymbolLayerDsl {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.SymbolLayerDsl>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.layers.generated.SymbolLayerDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconAllowOverlap(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconAllowOverlap(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconIgnorePlacement(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconIgnorePlacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconImage(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconKeepUpright(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconKeepUpright(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconOptional(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconOptional(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconPadding(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconPadding(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconPitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconPitchAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconRotate(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconRotate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconRotationAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconRotationAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconSize(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconTextFit(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconTextFit(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconTextFitPadding(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconTextFitPadding(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  symbolAvoidEdges(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  symbolAvoidEdges(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  symbolPlacement(param0: com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  symbolPlacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  symbolSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  symbolSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  symbolSpacing(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  symbolSpacing(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  symbolZOrder(param0: com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  symbolZOrder(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textAllowOverlap(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textAllowOverlap(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textField(param0: com.mapbox.maps.extension.style.types.Formatted): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textField(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textField(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textField(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textFont(param0: java.util.List<string>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textFont(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textIgnorePlacement(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textIgnorePlacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textJustify(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextJustify): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textJustify(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textKeepUpright(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textKeepUpright(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textLetterSpacing(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textLetterSpacing(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textLineHeight(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textLineHeight(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textMaxAngle(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textMaxAngle(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textMaxWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textMaxWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textOptional(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textOptional(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textPadding(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textPadding(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textPitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textPitchAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textRadialOffset(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textRadialOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textRotate(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textRotate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textRotationAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textRotationAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textSize(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textTransform(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextTransform): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textTransform(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textVariableAnchor(param0: java.util.List<string>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textVariableAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textWritingMode(param0: java.util.List<string>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textWritingMode(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconHaloWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  iconTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textHaloWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                  textTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                });
                public constructor();
                public textMaxWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textPitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textLineHeight(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconPadding(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconPadding(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTransform(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextTransform): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textAllowOverlap(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textIgnorePlacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textField(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolZOrder(param0: com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolAvoidEdges(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textRadialOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconSize(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textLineHeight(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textJustify(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextJustify): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textLetterSpacing(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textAllowOverlap(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOpacity(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textPadding(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textPadding(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolPlacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconRotate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public sourceLayer(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolPlacement(param0: com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textField(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOpacity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textFont(param0: java.util.List<string>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolZOrder(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textRotationAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOptional(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTranslateTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconRotationAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textLetterSpacing(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloWidthTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textRotationAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public filter(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOptional(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolSpacing(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textMaxWidth(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconImage(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslateAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textRotate(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconPitchAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolSpacing(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textRotate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textSize(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTextFit(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconKeepUpright(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textField(param0: com.mapbox.maps.extension.style.types.Formatted): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTextFitPadding(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolSortKey(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconRotationAlignment(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textField(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOptional(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconKeepUpright(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOpacityTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconAllowOverlap(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslate(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textIgnorePlacement(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textColor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOffset(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textWritingMode(param0: java.util.List<string>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloBlur(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public minZoom(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconColor(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloBlurTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloBlurTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public visibility(param0: com.mapbox.maps.extension.style.layers.properties.generated.Visibility): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconSize(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloWidth(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textMaxAngle(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOptional(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTransform(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolAvoidEdges(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textFont(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textColorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconAllowOverlap(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconImage(param0: string): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textKeepUpright(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public symbolSortKey(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textKeepUpright(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloBlur(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textVariableAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTextFitPadding(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textVariableAnchor(param0: java.util.List<string>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslate(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textMaxAngle(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTranslateAnchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconIgnorePlacement(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconIgnorePlacement(param0: boolean): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textPitchAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textJustify(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconPitchAlignment(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOffset(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconHaloColorTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textOpacityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconRotate(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textAnchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textRadialOffset(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textColor(param0: number): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public iconTextFit(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textTranslateTransition(param0: any): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textWritingMode(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
                public textHaloWidthTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.layers.generated.SymbolLayer;
              }
              export module SymbolLayerDsl {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.generated.SymbolLayerDsl.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export class PropertyValue<T> extends java.lang.Object {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                public constructor(param0: string, param1: T);
                public getColorInt(): java.lang.Integer;
                public toString(): string;
                public getValue(): T;
                public getPropertyName(): string;
                public getPropertyValue(): T;
                public getValue(): com.mapbox.bindgen.Value;
                public isExpression(): boolean;
                public isTransition(): boolean;
                public isValue(): boolean;
              }
              export module PropertyValue {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.PropertyValue.Companion>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class Anchor extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.Anchor>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.Anchor;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.Anchor;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.Anchor;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.Anchor>;
                  public getValue(): string;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class CirclePitchAlignment extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchAlignment>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class CirclePitchScale extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale>;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.CirclePitchScale;
                  public getValue(): string;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class CircleTranslateAnchor extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor>;
                  public getValue(): string;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.CircleTranslateAnchor;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class FillExtrusionTranslateAnchor extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.FillExtrusionTranslateAnchor>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.FillExtrusionTranslateAnchor;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.FillExtrusionTranslateAnchor;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.FillExtrusionTranslateAnchor;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.FillExtrusionTranslateAnchor>;
                  public getValue(): string;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class FillTranslateAnchor extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.FillTranslateAnchor>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class HillshadeIlluminationAnchor extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.HillshadeIlluminationAnchor>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.HillshadeIlluminationAnchor;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.HillshadeIlluminationAnchor;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.HillshadeIlluminationAnchor>;
                  public getValue(): string;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.HillshadeIlluminationAnchor;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class IconAnchor extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor>;
                  public static CENTER: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public static LEFT: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public static RIGHT: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public static TOP: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public static BOTTOM: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public static TOP_LEFT: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public static TOP_RIGHT: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public static BOTTOM_LEFT: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public static BOTTOM_RIGHT: com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor>;
                  public getValue(): string;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.IconAnchor;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class IconPitchAlignment extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment;
                  public static AUTO: com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment>;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.IconPitchAlignment;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class IconRotationAlignment extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment;
                  public static AUTO: com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.IconRotationAlignment>;
                  public getValue(): string;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class IconTextFit extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit>;
                  public static NONE: com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit;
                  public static WIDTH: com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit;
                  public static HEIGHT: com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit;
                  public static BOTH: com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.IconTextFit>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class IconTranslateAnchor extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor>;
                  public getValue(): string;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.IconTranslateAnchor;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty>;
                  /**
                   * Constructs a new instance of the com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { getValue(): string });
                  public constructor();
                  public getValue(): string;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class LineCap extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.LineCap>;
                  public static BUTT: com.mapbox.maps.extension.style.layers.properties.generated.LineCap;
                  public static ROUND: com.mapbox.maps.extension.style.layers.properties.generated.LineCap;
                  public static SQUARE: com.mapbox.maps.extension.style.layers.properties.generated.LineCap;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.LineCap>;
                  public getValue(): string;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.LineCap;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class LineJoin extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.LineJoin>;
                  public static BEVEL: com.mapbox.maps.extension.style.layers.properties.generated.LineJoin;
                  public static ROUND: com.mapbox.maps.extension.style.layers.properties.generated.LineJoin;
                  public static MITER: com.mapbox.maps.extension.style.layers.properties.generated.LineJoin;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.LineJoin;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.LineJoin>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class LineTranslateAnchor extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.LineTranslateAnchor>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class ModelType extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.ModelType>;
                  public static COMMON_3D: com.mapbox.maps.extension.style.layers.properties.generated.ModelType;
                  public static LOCATION_INDICATOR: com.mapbox.maps.extension.style.layers.properties.generated.ModelType;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.ModelType>;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.ModelType;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class ProjectionName extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.ProjectionName>;
                  public static MERCATOR: com.mapbox.maps.extension.style.layers.properties.generated.ProjectionName;
                  public static GLOBE: com.mapbox.maps.extension.style.layers.properties.generated.ProjectionName;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.ProjectionName;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.ProjectionName>;
                  public getValue(): string;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class RasterResampling extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.RasterResampling>;
                  public static LINEAR: com.mapbox.maps.extension.style.layers.properties.generated.RasterResampling;
                  public static NEAREST: com.mapbox.maps.extension.style.layers.properties.generated.RasterResampling;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.RasterResampling>;
                  public getValue(): string;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.RasterResampling;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class SkyType extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.SkyType>;
                  public static GRADIENT: com.mapbox.maps.extension.style.layers.properties.generated.SkyType;
                  public static ATMOSPHERE: com.mapbox.maps.extension.style.layers.properties.generated.SkyType;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.SkyType;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.SkyType>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class SymbolPlacement extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement>;
                  public static POINT: com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement;
                  public static LINE: com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement;
                  public static LINE_CENTER: com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.SymbolPlacement>;
                  public getValue(): string;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class SymbolZOrder extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder>;
                  public static AUTO: com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder;
                  public static VIEWPORT_Y: com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder;
                  public static SOURCE: com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder>;
                  public getValue(): string;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.SymbolZOrder;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class TextAnchor extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor>;
                  public static CENTER: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public static LEFT: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public static RIGHT: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public static TOP: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public static BOTTOM: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public static TOP_LEFT: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public static TOP_RIGHT: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public static BOTTOM_LEFT: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public static BOTTOM_RIGHT: com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.TextAnchor>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class TextJustify extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.TextJustify>;
                  public static AUTO: com.mapbox.maps.extension.style.layers.properties.generated.TextJustify;
                  public static LEFT: com.mapbox.maps.extension.style.layers.properties.generated.TextJustify;
                  public static CENTER: com.mapbox.maps.extension.style.layers.properties.generated.TextJustify;
                  public static RIGHT: com.mapbox.maps.extension.style.layers.properties.generated.TextJustify;
                  public getValue(): string;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.TextJustify;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.TextJustify>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class TextPitchAlignment extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment;
                  public static AUTO: com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.TextPitchAlignment>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class TextRotationAlignment extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment;
                  public static AUTO: com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment>;
                  public getValue(): string;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.TextRotationAlignment;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class TextTransform extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.TextTransform>;
                  public static NONE: com.mapbox.maps.extension.style.layers.properties.generated.TextTransform;
                  public static UPPERCASE: com.mapbox.maps.extension.style.layers.properties.generated.TextTransform;
                  public static LOWERCASE: com.mapbox.maps.extension.style.layers.properties.generated.TextTransform;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.TextTransform>;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.TextTransform;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class TextTranslateAnchor extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor>;
                  public static MAP: com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor;
                  public static VIEWPORT: com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.TextTranslateAnchor>;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class TextWritingMode extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.TextWritingMode>;
                  public static HORIZONTAL: com.mapbox.maps.extension.style.layers.properties.generated.TextWritingMode;
                  public static VERTICAL: com.mapbox.maps.extension.style.layers.properties.generated.TextWritingMode;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.TextWritingMode>;
                  public getValue(): string;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.TextWritingMode;
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
    export module maps {
      export module extension {
        export module style {
          export module layers {
            export module properties {
              export module generated {
                export class Visibility extends com.mapbox.maps.extension.style.layers.properties.generated.LayerProperty {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.layers.properties.generated.Visibility>;
                  public static VISIBLE: com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public static NONE: com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public static valueOf(param0: string): com.mapbox.maps.extension.style.layers.properties.generated.Visibility;
                  public getValue(): string;
                  public static values(): androidNative.Array<com.mapbox.maps.extension.style.layers.properties.generated.Visibility>;
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
    export module maps {
      export module extension {
        export module style {
          export module light {
            export class LightPosition {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.light.LightPosition>;
              public constructor(param0: number, param1: number, param2: number);
              public hashCode(): number;
              public toDoubleArray(): androidNative.Array<number>;
              public copy(param0: number, param1: number, param2: number): com.mapbox.maps.extension.style.light.LightPosition;
              public toValue(): com.mapbox.bindgen.Value;
              public toString(): string;
              public toList(): java.util.List<java.lang.Double>;
              public equals(param0: any): boolean;
            }
            export module LightPosition {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.light.LightPosition.Companion>;
                public fromList(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.light.LightPosition;
                public fromArray(param0: androidNative.Array<number>): com.mapbox.maps.extension.style.light.LightPosition;
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
      export module extension {
        export module style {
          export module light {
            export module generated {
              export class Light extends com.mapbox.maps.extension.style.light.generated.LightDslReceiver {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.light.generated.Light>;
                public positionTransition(param0: any): com.mapbox.maps.extension.style.light.generated.Light;
                public getPositionAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getIntensity(): java.lang.Double;
                public intensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.light.generated.Light;
                public getIntensityAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getColorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getColor(): string;
                public intensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                public getPosition(): com.mapbox.maps.extension.style.light.LightPosition;
                public getDelegate$extension_style_publicRelease(): com.mapbox.maps.extension.style.StyleInterface;
                public setDelegate$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public color(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                public anchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.Anchor): com.mapbox.maps.extension.style.light.generated.Light;
                public position(param0: number, param1: number, param2: number): com.mapbox.maps.extension.style.light.generated.Light;
                public getPositionTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public color(param0: number): com.mapbox.maps.extension.style.light.generated.Light;
                public position(param0: com.mapbox.maps.extension.style.light.LightPosition): com.mapbox.maps.extension.style.light.generated.Light;
                public getAnchorAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public getColorTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public colorTransition(param0: any): com.mapbox.maps.extension.style.light.generated.Light;
                public intensity(param0: number): com.mapbox.maps.extension.style.light.generated.Light;
                public getIntensityTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public getColorAsColorInt(): java.lang.Integer;
                public constructor();
                public positionTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.light.generated.Light;
                public getAnchor(): com.mapbox.maps.extension.style.layers.properties.generated.Anchor;
                public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public intensityTransition(param0: any): com.mapbox.maps.extension.style.light.generated.Light;
                public anchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                public color(param0: string): com.mapbox.maps.extension.style.light.generated.Light;
                public position(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                public colorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.light.generated.Light;
              }
              export module Light {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.light.generated.Light.Companion>;
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
    export module maps {
      export module extension {
        export module style {
          export module light {
            export module generated {
              export class LightDslReceiver {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.light.generated.LightDslReceiver>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.light.generated.LightDslReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  anchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.Anchor): com.mapbox.maps.extension.style.light.generated.Light;
                  anchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                  color(param0: number): com.mapbox.maps.extension.style.light.generated.Light;
                  color(param0: string): com.mapbox.maps.extension.style.light.generated.Light;
                  color(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                  colorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.light.generated.Light;
                  colorTransition(param0: any): com.mapbox.maps.extension.style.light.generated.Light;
                  intensity(param0: number): com.mapbox.maps.extension.style.light.generated.Light;
                  intensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                  intensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.light.generated.Light;
                  intensityTransition(param0: any): com.mapbox.maps.extension.style.light.generated.Light;
                  position(param0: number, param1: number, param2: number): com.mapbox.maps.extension.style.light.generated.Light;
                  position(param0: com.mapbox.maps.extension.style.light.LightPosition): com.mapbox.maps.extension.style.light.generated.Light;
                  position(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                  positionTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.light.generated.Light;
                  positionTransition(param0: any): com.mapbox.maps.extension.style.light.generated.Light;
                });
                public constructor();
                public colorTransition(param0: any): com.mapbox.maps.extension.style.light.generated.Light;
                public positionTransition(param0: any): com.mapbox.maps.extension.style.light.generated.Light;
                public intensity(param0: number): com.mapbox.maps.extension.style.light.generated.Light;
                public intensityTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.light.generated.Light;
                public positionTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.light.generated.Light;
                public intensity(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                public intensityTransition(param0: any): com.mapbox.maps.extension.style.light.generated.Light;
                public color(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                public anchor(param0: com.mapbox.maps.extension.style.layers.properties.generated.Anchor): com.mapbox.maps.extension.style.light.generated.Light;
                public anchor(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                public color(param0: string): com.mapbox.maps.extension.style.light.generated.Light;
                public position(param0: number, param1: number, param2: number): com.mapbox.maps.extension.style.light.generated.Light;
                public position(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.light.generated.Light;
                public color(param0: number): com.mapbox.maps.extension.style.light.generated.Light;
                public colorTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.light.generated.Light;
                public position(param0: com.mapbox.maps.extension.style.light.LightPosition): com.mapbox.maps.extension.style.light.generated.Light;
              }
              export module LightDslReceiver {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.light.generated.LightDslReceiver.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module light {
            export module generated {
              export class LightUtils {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.light.generated.LightUtils>;
                public static setLight(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleLightExtension): void;
                public static getLight(param0: com.mapbox.maps.extension.style.StyleInterface): com.mapbox.maps.extension.style.light.generated.Light;
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
      export module extension {
        export module style {
          export module model {
            export class ModelExtensionImpl {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.model.ModelExtensionImpl>;
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
              public constructor(param0: com.mapbox.maps.extension.style.model.ModelExtensionImpl.Builder);
            }
            export module ModelExtensionImpl {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.model.ModelExtensionImpl.Builder>;
                public build(): com.mapbox.maps.extension.style.model.ModelExtensionImpl;
                public uri(param0: string): com.mapbox.maps.extension.style.model.ModelExtensionImpl.Builder;
                public setUri$extension_style_publicRelease(param0: string): void;
                public getModelId(): string;
                public constructor(param0: string);
                public getUri$extension_style_publicRelease(): string;
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
      export module extension {
        export module style {
          export module model {
            export class ModelUtils {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.model.ModelUtils>;
              public static addModel(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleModelExtension): void;
              public static model(param0: string, param1: any): com.mapbox.maps.extension.style.model.ModelExtensionImpl;
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
      export module extension {
        export module style {
          export module projection {
            export module generated {
              export class Projection {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.projection.generated.Projection>;
                public constructor(param0: com.mapbox.maps.extension.style.layers.properties.generated.ProjectionName);
                public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public getDelegate$extension_style_publicRelease(): com.mapbox.maps.extension.style.StyleInterface;
                public setDelegate$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public getName(): com.mapbox.maps.extension.style.layers.properties.generated.ProjectionName;
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
      export module extension {
        export module style {
          export module projection {
            export module generated {
              export class StyleProjectionUtils {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.projection.generated.StyleProjectionUtils>;
                public static getProjection(param0: com.mapbox.maps.extension.style.StyleInterface): com.mapbox.maps.extension.style.projection.generated.Projection;
                public static setProjection(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.projection.generated.Projection): void;
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
      export module extension {
        export module style {
          export module sources {
            export class CustomGeometrySource {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.CustomGeometrySource>;
              public setTileData(param0: com.mapbox.maps.CanonicalTileID, param1: java.util.List<com.mapbox.geojson.Feature>): void;
              public getId(): string;
              public getOptions(): com.mapbox.maps.CustomGeometrySourceOptions;
              public invalidTile(param0: com.mapbox.maps.CanonicalTileID): void;
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
              public constructor(param0: string, param1: com.mapbox.maps.CustomGeometrySourceOptions);
              public invalidRegion(param0: com.mapbox.maps.CoordinateBounds): void;
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
      export module extension {
        export module style {
          export module sources {
            export abstract class Source {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.Source>;
              public constructor(param0: string);
              public setDelegate$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.StyleInterface): void;
              public getSourceProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
              public getVolatileSourceProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
              public getDelegate$extension_style_publicRelease(): com.mapbox.maps.extension.style.StyleInterface;
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
              public toString(): string;
              public getSourceId(): string;
              public setVolatileProperty$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>): void;
              public setProperty$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>, param1: boolean): void;
              public getType$extension_style_publicRelease(): string;
            }
            export module Source {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.Source.Companion>;
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
      export module extension {
        export module style {
          export module sources {
            export class SourceUtils {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.SourceUtils>;
              public static getSource(param0: com.mapbox.maps.StyleManagerInterface, param1: string): com.mapbox.maps.extension.style.sources.Source;
              public static addSource(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleSourceExtension): void;
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
      export module extension {
        export module style {
          export module sources {
            export class TileSet extends java.util.HashMap<string, com.mapbox.bindgen.Value> {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.TileSet>;
              public size(): number;
              public containsKey(param0: any): boolean;
              public containsValue(param0: com.mapbox.bindgen.Value): boolean;
              public remove(param0: any): com.mapbox.bindgen.Value;
              public values(): java.util.Collection<com.mapbox.bindgen.Value>;
              public getOrDefault(param0: string, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Value;
              public getOrDefault(param0: any, param1: com.mapbox.bindgen.Value): com.mapbox.bindgen.Value;
              public remove(param0: string, param1: com.mapbox.bindgen.Value): boolean;
              public get(param0: any): com.mapbox.bindgen.Value;
              public containsKey(param0: string): boolean;
              public entrySet(): java.util.Set<java.util.Map.Entry<string, com.mapbox.bindgen.Value>>;
              public getValues(): java.util.Collection<com.mapbox.bindgen.Value>;
              public getSize(): number;
              public remove(param0: string): com.mapbox.bindgen.Value;
              public keySet(): java.util.Set<string>;
              public get(param0: string): com.mapbox.bindgen.Value;
              public getEntries(): java.util.Set<java.util.Map.Entry<string, com.mapbox.bindgen.Value>>;
              public getKeys(): java.util.Set<string>;
              public containsValue(param0: any): boolean;
              public remove(param0: any, param1: any): boolean;
            }
            export module TileSet {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.TileSet.Builder>;
                public getTiles(): java.util.List<string>;
                public legend(param0: string): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public data(param0: java.util.List<string>): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public template(param0: string): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public description(param0: string): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public minZoom(param0: number): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public getTilejson(): string;
                public constructor(param0: string, param1: java.util.List<string>);
                public scheme(param0: com.mapbox.maps.extension.style.sources.generated.Scheme): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public bounds(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public grids(param0: java.util.List<string>): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public center(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public name(param0: string): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public version(param0: string): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public maxZoom(param0: number): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public attribution(param0: string): com.mapbox.maps.extension.style.sources.TileSet.Builder;
                public build(): com.mapbox.maps.extension.style.sources.TileSet;
                public getParameters$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.bindgen.Value>;
              }
              export class RasterDemBuilder extends com.mapbox.maps.extension.style.sources.TileSet.Builder {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.TileSet.RasterDemBuilder>;
                public encoding(param0: com.mapbox.maps.extension.style.sources.generated.Encoding): com.mapbox.maps.extension.style.sources.TileSet.RasterDemBuilder;
                public constructor(param0: string, param1: java.util.List<string>);
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
      export module extension {
        export module style {
          export module sources {
            export module generated {
              export class Encoding {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.Encoding>;
                public static TERRARIUM: com.mapbox.maps.extension.style.sources.generated.Encoding;
                public static MAPBOX: com.mapbox.maps.extension.style.sources.generated.Encoding;
                public static valueOf(param0: string): com.mapbox.maps.extension.style.sources.generated.Encoding;
                public static values(): androidNative.Array<com.mapbox.maps.extension.style.sources.generated.Encoding>;
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
    export module maps {
      export module extension {
        export module style {
          export module sources {
            export module generated {
              export class GeoJsonSource extends com.mapbox.maps.extension.style.sources.Source {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.GeoJsonSource>;
                public getPromoteId(): com.mapbox.maps.extension.style.types.PromoteId;
                /** @deprecated */
                public constructor(param0: com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder);
                public geometry(param0: com.mapbox.geojson.Geometry, param1: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public featureCollection(param0: com.mapbox.geojson.FeatureCollection, param1: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public getType$extension_style_publicRelease(): string;
                public getTolerance(): java.lang.Double;
                public prefetchZoomDelta(param0: number): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public getClusterMaxZoom(): java.lang.Long;
                public data(param0: string, param1: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public getPrefetchZoomDelta(): java.lang.Long;
                public url(param0: string, param1: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public getData(): string;
                public getAttribution(): string;
                public featureCollection(param0: com.mapbox.geojson.FeatureCollection): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public getBuffer(): java.lang.Long;
                public feature(param0: com.mapbox.geojson.Feature): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public getMaxzoom(): java.lang.Long;
                public data(param0: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public getClusterProperties(): java.util.HashMap<string, any>;
                public getLineMetrics(): java.lang.Boolean;
                public url(param0: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public feature(param0: com.mapbox.geojson.Feature, param1: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public geometry(param0: com.mapbox.geojson.Geometry): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                public getCluster(): java.lang.Boolean;
                public getClusterRadius(): java.lang.Long;
                public getGenerateId(): java.lang.Boolean;
                public constructor(param0: string);
              }
              export module GeoJsonSource {
                export class Builder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder>;
                  public data(param0: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public feature(param0: com.mapbox.geojson.Feature, param1: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public tolerance(param0: number): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public getGeoJson$extension_style_publicRelease(): com.mapbox.geojson.GeoJson;
                  public generateId(param0: boolean): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public maxzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public featureCollection(param0: com.mapbox.geojson.FeatureCollection): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public constructor(param0: string);
                  public url(param0: string, param1: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public data(param0: string, param1: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public setDataId$extension_style_publicRelease(param0: string): void;
                  public attribution(param0: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public geometry(param0: com.mapbox.geojson.Geometry): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public url(param0: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public lineMetrics(param0: boolean): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public getSourceId(): string;
                  public clusterProperty(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression, param2: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public feature(param0: com.mapbox.geojson.Feature): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public setData$extension_style_publicRelease(param0: string): void;
                  public prefetchZoomDelta(param0: number): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public clusterRadius(param0: number): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public build(): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource;
                  public setGeoJson$extension_style_publicRelease(param0: com.mapbox.geojson.GeoJson): void;
                  public getDataId$extension_style_publicRelease(): string;
                  public cluster(param0: boolean): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public featureCollection(param0: com.mapbox.geojson.FeatureCollection, param1: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public clusterProperties(param0: java.util.HashMap<string, any>): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public getVolatileProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                  public promoteId(param0: com.mapbox.maps.extension.style.types.PromoteId): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public geometry(param0: com.mapbox.geojson.Geometry, param1: string): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public buffer(param0: number): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public clusterProperty(param0: string, param1: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public getData$extension_style_publicRelease(): string;
                  public clusterMaxZoom(param0: number): com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Builder;
                  public getProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                }
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.GeoJsonSource.Companion>;
                  public getDefaultCluster(): java.lang.Boolean;
                  public getDefaultGenerateId(): java.lang.Boolean;
                  public getWorkerThread$extension_style_publicRelease(): globalAndroid.os.HandlerThread;
                  public getDefaultBuffer(): java.lang.Long;
                  public getDefaultClusterRadius(): java.lang.Long;
                  public getDefaultTolerance(): java.lang.Double;
                  public getDefaultLineMetrics(): java.lang.Boolean;
                  public toGeoJsonData$extension_style_publicRelease(param0: com.mapbox.geojson.GeoJson): com.mapbox.maps.GeoJSONSourceData;
                  public getDefaultMaxzoom(): java.lang.Long;
                  public getDefaultClusterMaxZoom(): java.lang.Long;
                  public getDefaultPrefetchZoomDelta(): java.lang.Long;
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
    export module maps {
      export module extension {
        export module style {
          export module sources {
            export module generated {
              export class ImageSource extends com.mapbox.maps.extension.style.sources.Source {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.ImageSource>;
                public coordinates(param0: java.util.List<any>): com.mapbox.maps.extension.style.sources.generated.ImageSource;
                public prefetchZoomDelta(param0: number): com.mapbox.maps.extension.style.sources.generated.ImageSource;
                public url(param0: string): com.mapbox.maps.extension.style.sources.generated.ImageSource;
                public getUrl(): string;
                public constructor(param0: string);
                public getType$extension_style_publicRelease(): string;
                public getCoordinates(): java.util.List<java.util.List<java.lang.Double>>;
                public getPrefetchZoomDelta(): java.lang.Long;
                public constructor(param0: com.mapbox.maps.extension.style.sources.generated.ImageSource.Builder);
              }
              export module ImageSource {
                export class Builder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.ImageSource.Builder>;
                  public constructor(param0: string);
                  public getSourceId(): string;
                  public url(param0: string): com.mapbox.maps.extension.style.sources.generated.ImageSource.Builder;
                  public build(): com.mapbox.maps.extension.style.sources.generated.ImageSource;
                  public getVolatileProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                  public prefetchZoomDelta(param0: number): com.mapbox.maps.extension.style.sources.generated.ImageSource.Builder;
                  public coordinates(param0: java.util.List<any>): com.mapbox.maps.extension.style.sources.generated.ImageSource.Builder;
                  public getProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                }
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.ImageSource.Companion>;
                  public getDefaultPrefetchZoomDelta(): java.lang.Long;
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
    export module maps {
      export module extension {
        export module style {
          export module sources {
            export module generated {
              export class RasterDemSource extends com.mapbox.maps.extension.style.sources.Source {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.RasterDemSource>;
                public getTiles(): java.util.List<string>;
                public maxOverscaleFactorForParentTiles(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                public getMinzoom(): java.lang.Long;
                public getTileSize(): java.lang.Long;
                public volatile(param0: boolean): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                public getType$extension_style_publicRelease(): string;
                public getEncoding(): com.mapbox.maps.extension.style.sources.generated.Encoding;
                public tileNetworkRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                public url(param0: string): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                public tiles(param0: java.util.List<string>): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                public prefetchZoomDelta(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                public getTileNetworkRequestsDelay(): java.lang.Double;
                public getBounds(): java.util.List<java.lang.Double>;
                public minzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                public tileRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                public getTileRequestsDelay(): java.lang.Double;
                public getPrefetchZoomDelta(): java.lang.Long;
                public minimumTileUpdateInterval(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                public getMinimumTileUpdateInterval(): java.lang.Double;
                public getAttribution(): string;
                public getUrl(): string;
                public maxzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                public getMaxzoom(): java.lang.Long;
                public getMaxOverscaleFactorForParentTiles(): java.lang.Long;
                public getVolatile(): java.lang.Boolean;
                public constructor(param0: string);
                public constructor(param0: com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder);
              }
              export module RasterDemSource {
                export class Builder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder>;
                  public getSourceId(): string;
                  public tileSet(param0: com.mapbox.maps.extension.style.sources.TileSet): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public prefetchZoomDelta(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public tileRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public volatile(param0: boolean): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public tiles(param0: java.util.List<string>): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public tileSize(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public build(): com.mapbox.maps.extension.style.sources.generated.RasterDemSource;
                  public constructor(param0: string);
                  public maxzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public tileNetworkRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public getVolatileProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                  public minimumTileUpdateInterval(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public bounds(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public maxOverscaleFactorForParentTiles(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public attribution(param0: string): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public tileSet(param0: string, param1: java.util.List<string>, param2: any): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public url(param0: string): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public minzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public encoding(param0: com.mapbox.maps.extension.style.sources.generated.Encoding): com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Builder;
                  public getProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                }
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.RasterDemSource.Companion>;
                  public getDefaultEncoding(): com.mapbox.maps.extension.style.sources.generated.Encoding;
                  public getDefaultMinzoom(): java.lang.Long;
                  public getDefaultVolatile(): java.lang.Boolean;
                  public getDefaultTileNetworkRequestsDelay(): java.lang.Double;
                  public getDefaultTileRequestsDelay(): java.lang.Double;
                  public getDefaultMinimumTileUpdateInterval(): java.lang.Double;
                  public getDefaultMaxzoom(): java.lang.Long;
                  public getDefaultPrefetchZoomDelta(): java.lang.Long;
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
    export module maps {
      export module extension {
        export module style {
          export module sources {
            export module generated {
              export class RasterSource extends com.mapbox.maps.extension.style.sources.Source {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.RasterSource>;
                public getTiles(): java.util.List<string>;
                public url(param0: string): com.mapbox.maps.extension.style.sources.generated.RasterSource;
                public tileNetworkRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource;
                public getMinzoom(): java.lang.Long;
                public getTileSize(): java.lang.Long;
                public getType$extension_style_publicRelease(): string;
                public volatile(param0: boolean): com.mapbox.maps.extension.style.sources.generated.RasterSource;
                public getTileNetworkRequestsDelay(): java.lang.Double;
                public minzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource;
                public prefetchZoomDelta(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource;
                public getBounds(): java.util.List<java.lang.Double>;
                public getTileRequestsDelay(): java.lang.Double;
                public getPrefetchZoomDelta(): java.lang.Long;
                public getMinimumTileUpdateInterval(): java.lang.Double;
                public tileRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource;
                public getAttribution(): string;
                public getUrl(): string;
                public maxzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource;
                public getMaxzoom(): java.lang.Long;
                public constructor(param0: com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder);
                public getMaxOverscaleFactorForParentTiles(): java.lang.Long;
                public minimumTileUpdateInterval(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource;
                public getVolatile(): java.lang.Boolean;
                public tiles(param0: java.util.List<string>): com.mapbox.maps.extension.style.sources.generated.RasterSource;
                public constructor(param0: string);
                public getScheme(): com.mapbox.maps.extension.style.sources.generated.Scheme;
                public maxOverscaleFactorForParentTiles(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource;
              }
              export module RasterSource {
                export class Builder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder>;
                  public tileSize(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public getSourceId(): string;
                  public tileRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public prefetchZoomDelta(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public bounds(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public url(param0: string): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public constructor(param0: string);
                  public tiles(param0: java.util.List<string>): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public attribution(param0: string): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public getVolatileProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                  public minimumTileUpdateInterval(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public volatile(param0: boolean): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public maxOverscaleFactorForParentTiles(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public maxzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public tileNetworkRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public tileSet(param0: com.mapbox.maps.extension.style.sources.TileSet): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public tileSet(param0: string, param1: java.util.List<string>, param2: any): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public getProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                  public minzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                  public build(): com.mapbox.maps.extension.style.sources.generated.RasterSource;
                  public scheme(param0: com.mapbox.maps.extension.style.sources.generated.Scheme): com.mapbox.maps.extension.style.sources.generated.RasterSource.Builder;
                }
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.RasterSource.Companion>;
                  public getDefaultMinzoom(): java.lang.Long;
                  public getDefaultVolatile(): java.lang.Boolean;
                  public getDefaultTileNetworkRequestsDelay(): java.lang.Double;
                  public getDefaultScheme(): com.mapbox.maps.extension.style.sources.generated.Scheme;
                  public getDefaultTileRequestsDelay(): java.lang.Double;
                  public getDefaultMinimumTileUpdateInterval(): java.lang.Double;
                  public getDefaultMaxzoom(): java.lang.Long;
                  public getDefaultPrefetchZoomDelta(): java.lang.Long;
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
    export module maps {
      export module extension {
        export module style {
          export module sources {
            export module generated {
              export class Scheme {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.Scheme>;
                public static XYZ: com.mapbox.maps.extension.style.sources.generated.Scheme;
                public static TMS: com.mapbox.maps.extension.style.sources.generated.Scheme;
                public static valueOf(param0: string): com.mapbox.maps.extension.style.sources.generated.Scheme;
                public static values(): androidNative.Array<com.mapbox.maps.extension.style.sources.generated.Scheme>;
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
    export module maps {
      export module extension {
        export module style {
          export module sources {
            export module generated {
              export class VectorSource extends com.mapbox.maps.extension.style.sources.Source {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.VectorSource>;
                public getTiles(): java.util.List<string>;
                public getPromoteId(): com.mapbox.maps.extension.style.types.PromoteId;
                public getMinzoom(): java.lang.Long;
                public tileNetworkRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                public getType$extension_style_publicRelease(): string;
                public maxOverscaleFactorForParentTiles(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                public maxzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                public minimumTileUpdateInterval(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                public getTileNetworkRequestsDelay(): java.lang.Double;
                public tiles(param0: java.util.List<string>): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                public getBounds(): java.util.List<java.lang.Double>;
                public getTileRequestsDelay(): java.lang.Double;
                public getPrefetchZoomDelta(): java.lang.Long;
                public url(param0: string): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                public getMinimumTileUpdateInterval(): java.lang.Double;
                public getAttribution(): string;
                public constructor(param0: com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder);
                public getUrl(): string;
                public tileRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                public getMaxzoom(): java.lang.Long;
                public minzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                public volatile(param0: boolean): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                public getMaxOverscaleFactorForParentTiles(): java.lang.Long;
                public getVolatile(): java.lang.Boolean;
                public prefetchZoomDelta(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                public constructor(param0: string);
                public getScheme(): com.mapbox.maps.extension.style.sources.generated.Scheme;
              }
              export module VectorSource {
                export class Builder {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder>;
                  public maxOverscaleFactorForParentTiles(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public volatile(param0: boolean): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public getSourceId(): string;
                  public tileSet(param0: string, param1: java.util.List<string>, param2: any): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public tiles(param0: java.util.List<string>): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public attribution(param0: string): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public promoteId(param0: com.mapbox.maps.extension.style.types.PromoteId): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public url(param0: string): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public minimumTileUpdateInterval(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public build(): com.mapbox.maps.extension.style.sources.generated.VectorSource;
                  public bounds(param0: java.util.List<java.lang.Double>): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public prefetchZoomDelta(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public tileRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public constructor(param0: string);
                  public getVolatileProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                  public tileNetworkRequestsDelay(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public scheme(param0: com.mapbox.maps.extension.style.sources.generated.Scheme): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public tileSet(param0: com.mapbox.maps.extension.style.sources.TileSet): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public minzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                  public getProperties$extension_style_publicRelease(): java.util.HashMap<string, com.mapbox.maps.extension.style.layers.properties.PropertyValue<any>>;
                  public maxzoom(param0: number): com.mapbox.maps.extension.style.sources.generated.VectorSource.Builder;
                }
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.sources.generated.VectorSource.Companion>;
                  public getDefaultMinzoom(): java.lang.Long;
                  public getDefaultVolatile(): java.lang.Boolean;
                  public getDefaultTileNetworkRequestsDelay(): java.lang.Double;
                  public getDefaultScheme(): com.mapbox.maps.extension.style.sources.generated.Scheme;
                  public getDefaultTileRequestsDelay(): java.lang.Double;
                  public getDefaultMinimumTileUpdateInterval(): java.lang.Double;
                  public getDefaultMaxzoom(): java.lang.Long;
                  public getDefaultPrefetchZoomDelta(): java.lang.Long;
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
    export module maps {
      export module extension {
        export module style {
          export module terrain {
            export module generated {
              export class Terrain extends com.mapbox.maps.extension.style.terrain.generated.TerrainDslReceiver {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.terrain.generated.Terrain>;
                public exaggerationTransition(param0: any): com.mapbox.maps.extension.style.terrain.generated.Terrain;
                public exaggeration(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.terrain.generated.Terrain;
                public getExaggeration(): java.lang.Double;
                public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public getDelegate$extension_style_publicRelease(): com.mapbox.maps.extension.style.StyleInterface;
                public setDelegate$extension_style_publicRelease(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public getExaggerationTransition(): com.mapbox.maps.extension.style.types.StyleTransition;
                public exaggeration(param0: number): com.mapbox.maps.extension.style.terrain.generated.Terrain;
                public constructor(param0: string);
                public getExaggerationAsExpression(): com.mapbox.maps.extension.style.expressions.generated.Expression;
                public exaggerationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.terrain.generated.Terrain;
              }
              export module Terrain {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.terrain.generated.Terrain.Companion>;
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
    export module maps {
      export module extension {
        export module style {
          export module terrain {
            export module generated {
              export class TerrainDslReceiver {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.terrain.generated.TerrainDslReceiver>;
                /**
                 * Constructs a new instance of the com.mapbox.maps.extension.style.terrain.generated.TerrainDslReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { exaggeration(param0: number): com.mapbox.maps.extension.style.terrain.generated.Terrain; exaggeration(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.terrain.generated.Terrain; exaggerationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.terrain.generated.Terrain; exaggerationTransition(param0: any): com.mapbox.maps.extension.style.terrain.generated.Terrain });
                public constructor();
                public exaggeration(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.terrain.generated.Terrain;
                public exaggerationTransition(param0: any): com.mapbox.maps.extension.style.terrain.generated.Terrain;
                public exaggeration(param0: number): com.mapbox.maps.extension.style.terrain.generated.Terrain;
                public exaggerationTransition(param0: com.mapbox.maps.extension.style.types.StyleTransition): com.mapbox.maps.extension.style.terrain.generated.Terrain;
              }
              export module TerrainDslReceiver {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.terrain.generated.TerrainDslReceiver.DefaultImpls>;
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
    export module maps {
      export module extension {
        export module style {
          export module terrain {
            export module generated {
              export class TerrainUtils {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.terrain.generated.TerrainUtils>;
                public static getTerrain(param0: com.mapbox.maps.extension.style.StyleInterface, param1: string): com.mapbox.maps.extension.style.terrain.generated.Terrain;
                public static removeTerrain(param0: com.mapbox.maps.extension.style.StyleInterface): void;
                public static setTerrain(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.extension.style.StyleContract.StyleTerrainExtension): void;
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
      export module extension {
        export module style {
          export module types {
            export class AtmosphereDsl {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.types.AtmosphereDsl>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.types.AtmosphereDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module maps {
      export module extension {
        export module style {
          export module types {
            export class ExpressionDsl {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.types.ExpressionDsl>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.types.ExpressionDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module maps {
      export module extension {
        export module style {
          export module types {
            export class Formatted extends java.util.ArrayList<com.mapbox.maps.extension.style.types.FormattedSection> {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.types.Formatted>;
              public constructor();
              public removeAt(param0: number): com.mapbox.maps.extension.style.types.FormattedSection;
              public formattedSection(param0: string, param1: any): void;
              public contains(param0: any): boolean;
              public remove(param0: com.mapbox.maps.extension.style.types.FormattedSection): boolean;
              public size(): number;
              public lastIndexOf(param0: any): number;
              public remove(param0: any): boolean;
              public remove(param0: number): com.mapbox.maps.extension.style.types.FormattedSection;
              public toValue(): com.mapbox.bindgen.Value;
              public indexOf(param0: any): number;
              public formattedSection(param0: com.mapbox.maps.extension.style.types.FormattedSection): void;
              public getTextAsString(): string;
              public indexOf(param0: com.mapbox.maps.extension.style.types.FormattedSection): number;
              public lastIndexOf(param0: com.mapbox.maps.extension.style.types.FormattedSection): number;
              public getSize(): number;
              public contains(param0: com.mapbox.maps.extension.style.types.FormattedSection): boolean;
            }
            export module Formatted {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.types.Formatted.Companion>;
                public fromExpression(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): com.mapbox.maps.extension.style.types.Formatted;
                public fromProperty(param0: java.util.ArrayList<any>): com.mapbox.maps.extension.style.types.Formatted;
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
      export module extension {
        export module style {
          export module types {
            export class FormattedSection {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.types.FormattedSection>;
              public setFontScale(param0: java.lang.Double): void;
              public getFontStack(): java.util.List<string>;
              public getText(): string;
              public getFontScale(): java.lang.Double;
              public hashCode(): number;
              public constructor(param0: string, param1: java.lang.Double);
              public getTextColorAsInt(): number;
              public component2(): java.lang.Double;
              public setFontStack(param0: java.util.List<string>): void;
              public toString(): string;
              public getTextColor(): string;
              public component1(): string;
              public setTextColor(param0: string): void;
              public component3(): java.util.List<string>;
              public constructor(param0: string);
              public constructor(param0: string, param1: java.lang.Double, param2: java.util.List<string>, param3: string);
              public constructor(param0: string, param1: java.lang.Double, param2: java.util.List<string>);
              public component4(): string;
              public setTextColorAsInt(param0: number): void;
              public equals(param0: any): boolean;
              public toValue$extension_style_publicRelease(): com.mapbox.bindgen.Value;
              public copy(param0: string, param1: java.lang.Double, param2: java.util.List<string>, param3: string): com.mapbox.maps.extension.style.types.FormattedSection;
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
      export module extension {
        export module style {
          export module types {
            export class LayersDsl {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.types.LayersDsl>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.types.LayersDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module maps {
      export module extension {
        export module style {
          export module types {
            export class LightDsl {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.types.LightDsl>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.types.LightDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module maps {
      export module extension {
        export module style {
          export module types {
            export class PromoteId {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.types.PromoteId>;
              public component2(): string;
              public copy(param0: string, param1: string): com.mapbox.maps.extension.style.types.PromoteId;
              public hashCode(): number;
              public constructor(param0: string);
              public constructor(param0: string, param1: string);
              public toString(): string;
              public getSourceId(): string;
              public equals(param0: any): boolean;
              public getPropertyName(): string;
              public toValue$extension_style_publicRelease(): com.mapbox.bindgen.Value;
              public component1(): string;
            }
            export module PromoteId {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.types.PromoteId.Companion>;
                public fromProperty$extension_style_publicRelease(param0: any): com.mapbox.maps.extension.style.types.PromoteId;
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
      export module extension {
        export module style {
          export module types {
            export class SourceDsl {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.types.SourceDsl>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.types.SourceDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module maps {
      export module extension {
        export module style {
          export module types {
            export class StyleTransition {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.types.StyleTransition>;
              public getDelay(): java.lang.Long;
              public hashCode(): number;
              public toValue(): com.mapbox.bindgen.Value;
              public equals(param0: any): boolean;
              public getDuration(): java.lang.Long;
            }
            export module StyleTransition {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.types.StyleTransition.Builder>;
                public duration(param0: number): com.mapbox.maps.extension.style.types.StyleTransition.Builder;
                public delay(param0: number): com.mapbox.maps.extension.style.types.StyleTransition.Builder;
                public build(): com.mapbox.maps.extension.style.types.StyleTransition;
                public constructor();
                public getDelay(): java.lang.Long;
                public getDuration(): java.lang.Long;
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
      export module extension {
        export module style {
          export module types {
            export class TerrainDsl {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.types.TerrainDsl>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.types.TerrainDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module maps {
      export module extension {
        export module style {
          export module utils {
            export class ColorUtils {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.utils.ColorUtils>;
              public static INSTANCE: com.mapbox.maps.extension.style.utils.ColorUtils;
              public colorToRgbaArray(param0: number): androidNative.Array<number>;
              public rgbaExpressionToColorString(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): string;
              public rgbaToColor(param0: string): java.lang.Integer;
              public rgbaExpressionToColorInt(param0: com.mapbox.maps.extension.style.expressions.generated.Expression): java.lang.Integer;
              public colorIntToRgbaExpression(param0: number): com.mapbox.maps.extension.style.expressions.generated.Expression;
              public colorToGlRgbaArray(param0: number): androidNative.Array<number>;
              public colorToRgbaString(param0: number): string;
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
      export module extension {
        export module style {
          export module utils {
            export class TypeUtils {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.utils.TypeUtils>;
              public static INSTANCE: com.mapbox.maps.extension.style.utils.TypeUtils;
              public wrapToValue(param0: any): com.mapbox.bindgen.Value;
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
      export module extension {
        export module style {
          export module utils {
            export module TypeUtilsKt {
              export module WhenMappings {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.maps.extension.style.utils.TypeUtilsKt.WhenMappings>;
                }
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.maps.extension.style.layers.properties.PropertyValue:1
