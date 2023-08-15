/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module shield {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.BuildConfig>;
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
        export module shield {
          export abstract class ResourceCache<Argument, Value> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ResourceCache<any, any>>;
            public static CANCELED_MESSAGE: string;
            public obtainResource(param0: Argument, param1: any): any;
            public constructor(param0: number);
            public getOrRequest(param0: Argument, param1: any): any;
          }
          export module ResourceCache {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ResourceCache.Companion>;
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
        export module shield {
          export class RoadShieldContentManager {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldContentManager>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.ui.shield.RoadShieldContentManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getShields(param0: java.util.List<any>, param1: any): any; cancelAll(): void });
            public constructor();
            public cancelAll(): void;
            public getShields(param0: java.util.List<any>, param1: any): any;
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
        export module shield {
          export class RoadShieldContentManagerContainer extends com.mapbox.navigation.ui.shield.RoadShieldContentManager {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldContentManagerContainer>;
            public static INSTANCE: com.mapbox.navigation.ui.shield.RoadShieldContentManagerContainer;
            public cancelAll(): void;
            public getShields(param0: java.util.List<any>, param1: any): any;
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
        export module shield {
          export class RoadShieldContentManagerImpl extends com.mapbox.navigation.ui.shield.RoadShieldContentManager {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldContentManagerImpl>;
            public static CANCELED_MESSAGE: string;
            public constructor();
            public cancelAll(): void;
            public constructor(param0: com.mapbox.navigation.ui.shield.ShieldResultCache);
            public getShields(param0: java.util.List<any>, param1: any): any;
          }
          export module RoadShieldContentManagerImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldContentManagerImpl.Companion>;
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
        export module shield {
          export class RoadShieldDownloader {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldDownloader>;
            public static INSTANCE: com.mapbox.navigation.ui.shield.RoadShieldDownloader;
            public download(param0: string, param1: any): any;
          }
          export module RoadShieldDownloader {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.RoadShieldDownloader.WhenMappings>;
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
        export module shield {
          export class ShieldByteArrayCache extends com.mapbox.navigation.ui.shield.ResourceCache<string, androidNative.Array<number>> {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ShieldByteArrayCache>;
            public constructor();
            public constructor(param0: number);
            public obtainResource(param0: string, param1: any): any;
            public obtainResource(param0: any, param1: any): any;
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
        export module shield {
          export class ShieldRequest {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ShieldRequest>;
            public constructor(param0: com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload);
            public getId(): java.util.UUID;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getToDownload(): com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload;
            public toString(): string;
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
        export module shield {
          export class ShieldResultCache extends com.mapbox.navigation.ui.shield.ResourceCache<com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload, com.mapbox.navigation.ui.shield.model.RouteShield> {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ShieldResultCache>;
            public obtainResource(param0: com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload, param1: any): any;
            public constructor();
            public constructor(param0: number);
            public obtainResource(param0: any, param1: any): any;
            public constructor(param0: com.mapbox.navigation.ui.shield.ShieldSpritesCache, param1: com.mapbox.navigation.ui.shield.ShieldByteArrayCache);
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
        export module shield {
          export class ShieldSpritesCache extends com.mapbox.navigation.ui.shield.ResourceCache<string, com.mapbox.api.directions.v5.models.ShieldSprites> {
            public static class: java.lang.Class<com.mapbox.navigation.ui.shield.ShieldSpritesCache>;
            public constructor();
            public constructor(param0: number);
            public obtainResource(param0: string, param1: any): any;
            public obtainResource(param0: any, param1: any): any;
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
        export module shield {
          export module api {
            export class MapboxRouteShieldApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.api.MapboxRouteShieldApi>;
              public constructor();
              public cancel(): void;
              public getRouteShields(param0: java.util.List<any>, param1: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public getRouteShields(param0: java.util.List<any>, param1: string, param2: string, param3: string, param4: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public getRouteShieldsInternal$libnavui_shield_release(param0: java.util.List<any>, param1: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public getRouteShields(param0: com.mapbox.navigation.base.road.model.Road, param1: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
              public getRouteShields(param0: com.mapbox.navigation.base.road.model.Road, param1: string, param2: string, param3: string, param4: com.mapbox.navigation.ui.shield.model.RouteShieldCallback): void;
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
        export module shield {
          export module internal {
            export module model {
              export abstract class RouteShieldToDownload {
                public static class: java.lang.Class<com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload>;
                public getUrl(): string;
              }
              export module RouteShieldToDownload {
                export class MapboxDesign extends com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxDesign>;
                  public component2(): string;
                  public hashCode(): number;
                  public component4(): com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy;
                  public equals(param0: any): boolean;
                  public component1(): com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload;
                  public toString(): string;
                  public getAccessToken(): string;
                  public getUrl(): string;
                  public getLegacyFallback(): com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy;
                  public getMapboxShield(): com.mapbox.api.directions.v5.models.MapboxShield;
                  public component3(): com.mapbox.api.directions.v5.models.MapboxShield;
                  public constructor(param0: com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload, param1: string, param2: com.mapbox.api.directions.v5.models.MapboxShield, param3: com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy);
                  public copy(param0: com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload, param1: string, param2: com.mapbox.api.directions.v5.models.MapboxShield, param3: com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy): com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxDesign;
                  public getShieldSpriteToDownload(): com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload;
                }
                export class MapboxLegacy extends com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy>;
                  public constructor(param0: string);
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public getInitialUrl(): string;
                  public toString(): string;
                  public getUrl(): string;
                  public component1(): string;
                  public copy(param0: string): com.mapbox.navigation.ui.shield.internal.model.RouteShieldToDownload.MapboxLegacy;
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
    export module navigation {
      export module ui {
        export module shield {
          export module internal {
            export module model {
              export class ShieldSpriteToDownload {
                public static class: java.lang.Class<com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload>;
                public component1(): string;
                public getStyleId(): string;
                public toString(): string;
                public copy(param0: string, param1: string): com.mapbox.navigation.ui.shield.internal.model.ShieldSpriteToDownload;
                public constructor(param0: string, param1: string);
                public getUserId(): string;
                public equals(param0: any): boolean;
                public component2(): string;
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
        export module shield {
          export module model {
            export abstract class RouteShield {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShield>;
              public getByteArray(): androidNative.Array<number>;
              public getUrl(): string;
              public toBitmap(param0: globalAndroid.content.res.Resources, param1: java.lang.Integer): globalAndroid.graphics.Bitmap;
            }
            export module RouteShield {
              export class MapboxDesignedShield extends com.mapbox.navigation.ui.shield.model.RouteShield {
                public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShield.MapboxDesignedShield>;
                public toString(): string;
                public compareWith(param0: com.mapbox.api.directions.v5.models.MapboxShield): boolean;
                public equals(param0: any): boolean;
                public constructor(param0: string, param1: androidNative.Array<number>, param2: com.mapbox.api.directions.v5.models.MapboxShield, param3: com.mapbox.api.directions.v5.models.ShieldSprite);
                public toBitmap(param0: globalAndroid.content.res.Resources, param1: java.lang.Integer): globalAndroid.graphics.Bitmap;
                public getMapboxShield(): com.mapbox.api.directions.v5.models.MapboxShield;
                public getShieldSprite(): com.mapbox.api.directions.v5.models.ShieldSprite;
                public hashCode(): number;
              }
              export class MapboxLegacyShield extends com.mapbox.navigation.ui.shield.model.RouteShield {
                public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShield.MapboxLegacyShield>;
                public constructor(param0: string, param1: androidNative.Array<number>, param2: string);
                public toString(): string;
                public getInitialUrl(): string;
                public equals(param0: any): boolean;
                public toBitmap(param0: globalAndroid.content.res.Resources, param1: java.lang.Integer): globalAndroid.graphics.Bitmap;
                public compareWith(param0: string): boolean;
                public hashCode(): number;
              }
              export module MapboxLegacyShield {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShield.MapboxLegacyShield.Companion>;
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
    export module navigation {
      export module ui {
        export module shield {
          export module model {
            export class RouteShieldCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShieldCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.shield.model.RouteShieldCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRoadShields(param0: java.util.List<any>): void });
              public constructor();
              public onRoadShields(param0: java.util.List<any>): void;
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
        export module shield {
          export module model {
            export class RouteShieldError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShieldError>;
              public hashCode(): number;
              public getUrl(): string;
              public constructor(param0: string, param1: string);
              public toString(): string;
              public equals(param0: any): boolean;
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
        export module shield {
          export module model {
            export class RouteShieldFactory {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShieldFactory>;
              public static INSTANCE: com.mapbox.navigation.ui.shield.model.RouteShieldFactory;
              public static buildRouteShield(param0: string, param1: androidNative.Array<number>, param2: com.mapbox.api.directions.v5.models.MapboxShield, param3: com.mapbox.api.directions.v5.models.ShieldSprite): com.mapbox.navigation.ui.shield.model.RouteShield.MapboxDesignedShield;
              public static buildRouteShield(param0: string, param1: androidNative.Array<number>, param2: string): com.mapbox.navigation.ui.shield.model.RouteShield.MapboxLegacyShield;
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
        export module shield {
          export module model {
            export class RouteShieldOrigin {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShieldOrigin>;
              public getOriginalUrl(): string;
              public hashCode(): number;
              public constructor(param0: boolean, param1: string, param2: string);
              public isFallback(): boolean;
              public getOriginalErrorMessage(): string;
              public toString(): string;
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
        export module shield {
          export module model {
            export class RouteShieldResult {
              public static class: java.lang.Class<com.mapbox.navigation.ui.shield.model.RouteShieldResult>;
              public getShield(): com.mapbox.navigation.ui.shield.model.RouteShield;
              public getOrigin(): com.mapbox.navigation.ui.shield.model.RouteShieldOrigin;
              public hashCode(): number;
              public constructor(param0: com.mapbox.navigation.ui.shield.model.RouteShield, param1: com.mapbox.navigation.ui.shield.model.RouteShieldOrigin);
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.navigation.ui.shield.ResourceCache:2
