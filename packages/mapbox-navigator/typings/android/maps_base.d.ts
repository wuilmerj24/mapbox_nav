/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module common {
      export class MapboxMapsAndroidLogger {
        public static class: java.lang.Class<com.mapbox.common.MapboxMapsAndroidLogger>;
        public static INSTANCE: com.mapbox.common.MapboxMapsAndroidLogger;
        public static SDK_IDENTIFIER: string;
        public internalLogW$sdk_base_publicRelease(param0: string, param1: string): void;
        public internalLogI$sdk_base_publicRelease(param0: string, param1: string): void;
        public internalLogD$sdk_base_publicRelease(param0: string, param1: string): void;
        public internalLogE$sdk_base_publicRelease(param0: string, param1: string): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class ExtensionUtils {
        public static class: java.lang.Class<com.mapbox.maps.ExtensionUtils>;
        public static bitmap(param0: com.mapbox.maps.MapSnapshotInterface): globalAndroid.graphics.Bitmap;
        public static toCameraOptions(param0: com.mapbox.maps.CameraState, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
        public static toCameraOptions(param0: com.mapbox.maps.CameraState): com.mapbox.maps.CameraOptions;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxAnnotationException {
        public static class: java.lang.Class<com.mapbox.maps.MapboxAnnotationException>;
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxCameraAnimationException {
        public static class: java.lang.Class<com.mapbox.maps.MapboxCameraAnimationException>;
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxConcurrentGeometryModificationException {
        public static class: java.lang.Class<com.mapbox.maps.MapboxConcurrentGeometryModificationException>;
        public constructor(param0: string, param1: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxExperimental {
        public static class: java.lang.Class<com.mapbox.maps.MapboxExperimental>;
        /**
         * Constructs a new instance of the com.mapbox.maps.MapboxExperimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxLifecycleObserver {
        public static class: java.lang.Class<com.mapbox.maps.MapboxLifecycleObserver>;
        /**
         * Constructs a new instance of the com.mapbox.maps.MapboxLifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onStart(): void; onStop(): void; onDestroy(): void; onLowMemory(): void });
        public constructor();
        public onStart(): void;
        public onLowMemory(): void;
        public onStop(): void;
        public onDestroy(): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxLocationComponentException {
        public static class: java.lang.Class<com.mapbox.maps.MapboxLocationComponentException>;
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxLogger {
        public static class: java.lang.Class<com.mapbox.maps.MapboxLogger>;
        public static logD(param0: string, param1: string): void;
        public static logE(param0: string, param1: string): void;
        public static logI(param0: string, param1: string): void;
        public static logW(param0: string, param1: string): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxMapException {
        public static class: java.lang.Class<com.mapbox.maps.MapboxMapException>;
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxStyleException {
        public static class: java.lang.Class<com.mapbox.maps.MapboxStyleException>;
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export class MapboxViewAnnotationException {
        public static class: java.lang.Class<com.mapbox.maps.MapboxViewAnnotationException>;
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module base {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.maps.base.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public static FLAVOR: string;
          public static MAPBOX_EVENTS_USER_AGENT: string;
          public static MAPBOX_SDK_IDENTIFIER: string;
          public static MAPBOX_SDK_VERSION: string;
          public static MAPBOX_VERSION_STRING: string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module extension {
        export module observable {
          export module eventdata {
            export class CameraChangedEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.CameraChangedEventData>;
              public getBegin(): number;
              public component1(): number;
              public getEnd(): java.lang.Long;
              public hashCode(): number;
              public toString(): string;
              public copy(param0: number, param1: java.lang.Long): com.mapbox.maps.extension.observable.eventdata.CameraChangedEventData;
              public constructor(param0: number, param1: java.lang.Long);
              public equals(param0: any): boolean;
              public component2(): java.lang.Long;
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
        export module observable {
          export module eventdata {
            export class MapIdleEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.MapIdleEventData>;
              public getBegin(): number;
              public component1(): number;
              public getEnd(): java.lang.Long;
              public hashCode(): number;
              public copy(param0: number, param1: java.lang.Long): com.mapbox.maps.extension.observable.eventdata.MapIdleEventData;
              public toString(): string;
              public constructor(param0: number, param1: java.lang.Long);
              public equals(param0: any): boolean;
              public component2(): java.lang.Long;
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
        export module observable {
          export module eventdata {
            export class MapLoadedEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.MapLoadedEventData>;
              public getBegin(): number;
              public component1(): number;
              public copy(param0: number, param1: java.lang.Long): com.mapbox.maps.extension.observable.eventdata.MapLoadedEventData;
              public getEnd(): java.lang.Long;
              public hashCode(): number;
              public toString(): string;
              public constructor(param0: number, param1: java.lang.Long);
              public equals(param0: any): boolean;
              public component2(): java.lang.Long;
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
        export module observable {
          export module eventdata {
            export class MapLoadingErrorEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.MapLoadingErrorEventData>;
              public getBegin(): number;
              public hashCode(): number;
              public toString(): string;
              public component5(): string;
              public component2(): java.lang.Long;
              public copy(param0: number, param1: java.lang.Long, param2: com.mapbox.maps.extension.observable.model.MapLoadErrorType, param3: string, param4: string, param5: com.mapbox.maps.extension.observable.model.TileID): com.mapbox.maps.extension.observable.eventdata.MapLoadingErrorEventData;
              public constructor(param0: number, param1: java.lang.Long, param2: com.mapbox.maps.extension.observable.model.MapLoadErrorType, param3: string, param4: string, param5: com.mapbox.maps.extension.observable.model.TileID);
              public component1(): number;
              public getEnd(): java.lang.Long;
              public getTileId(): com.mapbox.maps.extension.observable.model.TileID;
              public component3(): com.mapbox.maps.extension.observable.model.MapLoadErrorType;
              public getType(): com.mapbox.maps.extension.observable.model.MapLoadErrorType;
              public component4(): string;
              public component6(): com.mapbox.maps.extension.observable.model.TileID;
              public getSourceId(): string;
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
    export module maps {
      export module extension {
        export module observable {
          export module eventdata {
            export class RenderFrameFinishedEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.RenderFrameFinishedEventData>;
              public getBegin(): number;
              public component3(): com.mapbox.maps.extension.observable.model.RenderMode;
              public component5(): boolean;
              public hashCode(): number;
              public toString(): string;
              public getPlacementChanged(): boolean;
              public component2(): java.lang.Long;
              public copy(param0: number, param1: java.lang.Long, param2: com.mapbox.maps.extension.observable.model.RenderMode, param3: boolean, param4: boolean): com.mapbox.maps.extension.observable.eventdata.RenderFrameFinishedEventData;
              public component1(): number;
              public getRenderMode(): com.mapbox.maps.extension.observable.model.RenderMode;
              public getEnd(): java.lang.Long;
              public getNeedsRepaint(): boolean;
              public constructor(param0: number, param1: java.lang.Long, param2: com.mapbox.maps.extension.observable.model.RenderMode, param3: boolean, param4: boolean);
              public equals(param0: any): boolean;
              public component4(): boolean;
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
        export module observable {
          export module eventdata {
            export class RenderFrameStartedEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.RenderFrameStartedEventData>;
              public getBegin(): number;
              public component1(): number;
              public getEnd(): java.lang.Long;
              public hashCode(): number;
              public copy(param0: number, param1: java.lang.Long): com.mapbox.maps.extension.observable.eventdata.RenderFrameStartedEventData;
              public toString(): string;
              public constructor(param0: number, param1: java.lang.Long);
              public equals(param0: any): boolean;
              public component2(): java.lang.Long;
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
        export module observable {
          export module eventdata {
            export class ResourceEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.ResourceEventData>;
              public getBegin(): number;
              public getCancelled(): boolean;
              public hashCode(): number;
              public constructor(param0: number, param1: java.lang.Long, param2: com.mapbox.maps.extension.observable.model.DataSourceType, param3: com.mapbox.maps.extension.observable.model.Request, param4: com.mapbox.maps.extension.observable.model.Response, param5: boolean);
              public component6(): boolean;
              public getResponse(): com.mapbox.maps.extension.observable.model.Response;
              public toString(): string;
              public getRequest(): com.mapbox.maps.extension.observable.model.Request;
              public component2(): java.lang.Long;
              public component3(): com.mapbox.maps.extension.observable.model.DataSourceType;
              public component4(): com.mapbox.maps.extension.observable.model.Request;
              public component1(): number;
              public getDataSource(): com.mapbox.maps.extension.observable.model.DataSourceType;
              public copy(param0: number, param1: java.lang.Long, param2: com.mapbox.maps.extension.observable.model.DataSourceType, param3: com.mapbox.maps.extension.observable.model.Request, param4: com.mapbox.maps.extension.observable.model.Response, param5: boolean): com.mapbox.maps.extension.observable.eventdata.ResourceEventData;
              public getEnd(): java.lang.Long;
              public component5(): com.mapbox.maps.extension.observable.model.Response;
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
        export module observable {
          export module eventdata {
            export class SourceAddedEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.SourceAddedEventData>;
              public constructor(param0: number, param1: java.lang.Long, param2: string);
              public getBegin(): number;
              public component1(): number;
              public getEnd(): java.lang.Long;
              public hashCode(): number;
              public getId(): string;
              public copy(param0: number, param1: java.lang.Long, param2: string): com.mapbox.maps.extension.observable.eventdata.SourceAddedEventData;
              public toString(): string;
              public equals(param0: any): boolean;
              public component3(): string;
              public component2(): java.lang.Long;
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
        export module observable {
          export module eventdata {
            export class SourceDataLoadedEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.SourceDataLoadedEventData>;
              public getBegin(): number;
              public getTileID(): com.mapbox.maps.extension.observable.model.TileID;
              public constructor(param0: number, param1: java.lang.Long, param2: string, param3: com.mapbox.maps.extension.observable.model.SourceDataType, param4: java.lang.Boolean, param5: com.mapbox.maps.extension.observable.model.TileID, param6: string);
              public getDataId(): string;
              public component7(): string;
              public hashCode(): number;
              public getId(): string;
              public copy(param0: number, param1: java.lang.Long, param2: string, param3: com.mapbox.maps.extension.observable.model.SourceDataType, param4: java.lang.Boolean, param5: com.mapbox.maps.extension.observable.model.TileID, param6: string): com.mapbox.maps.extension.observable.eventdata.SourceDataLoadedEventData;
              public getType(): com.mapbox.maps.extension.observable.model.SourceDataType;
              public toString(): string;
              public component3(): string;
              public component2(): java.lang.Long;
              public component1(): number;
              public getEnd(): java.lang.Long;
              public component4(): com.mapbox.maps.extension.observable.model.SourceDataType;
              public getLoaded(): java.lang.Boolean;
              public component6(): com.mapbox.maps.extension.observable.model.TileID;
              public component5(): java.lang.Boolean;
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
        export module observable {
          export module eventdata {
            export class SourceRemovedEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.SourceRemovedEventData>;
              public constructor(param0: number, param1: java.lang.Long, param2: string);
              public getBegin(): number;
              public component1(): number;
              public getEnd(): java.lang.Long;
              public hashCode(): number;
              public getId(): string;
              public toString(): string;
              public copy(param0: number, param1: java.lang.Long, param2: string): com.mapbox.maps.extension.observable.eventdata.SourceRemovedEventData;
              public equals(param0: any): boolean;
              public component3(): string;
              public component2(): java.lang.Long;
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
        export module observable {
          export module eventdata {
            export class StyleDataLoadedEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.StyleDataLoadedEventData>;
              public getBegin(): number;
              public component1(): number;
              public component3(): com.mapbox.maps.extension.observable.model.StyleDataType;
              public constructor(param0: number, param1: java.lang.Long, param2: com.mapbox.maps.extension.observable.model.StyleDataType);
              public getEnd(): java.lang.Long;
              public hashCode(): number;
              public copy(param0: number, param1: java.lang.Long, param2: com.mapbox.maps.extension.observable.model.StyleDataType): com.mapbox.maps.extension.observable.eventdata.StyleDataLoadedEventData;
              public toString(): string;
              public equals(param0: any): boolean;
              public getType(): com.mapbox.maps.extension.observable.model.StyleDataType;
              public component2(): java.lang.Long;
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
        export module observable {
          export module eventdata {
            export class StyleImageMissingEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.StyleImageMissingEventData>;
              public constructor(param0: number, param1: java.lang.Long, param2: string);
              public getBegin(): number;
              public component1(): number;
              public getEnd(): java.lang.Long;
              public hashCode(): number;
              public getId(): string;
              public copy(param0: number, param1: java.lang.Long, param2: string): com.mapbox.maps.extension.observable.eventdata.StyleImageMissingEventData;
              public toString(): string;
              public equals(param0: any): boolean;
              public component3(): string;
              public component2(): java.lang.Long;
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
        export module observable {
          export module eventdata {
            export class StyleImageUnusedEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.StyleImageUnusedEventData>;
              public constructor(param0: number, param1: java.lang.Long, param2: string);
              public getBegin(): number;
              public component1(): number;
              public getEnd(): java.lang.Long;
              public hashCode(): number;
              public getId(): string;
              public copy(param0: number, param1: java.lang.Long, param2: string): com.mapbox.maps.extension.observable.eventdata.StyleImageUnusedEventData;
              public toString(): string;
              public equals(param0: any): boolean;
              public component3(): string;
              public component2(): java.lang.Long;
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
        export module observable {
          export module eventdata {
            export class StyleLoadedEventData {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.eventdata.StyleLoadedEventData>;
              public getBegin(): number;
              public component1(): number;
              public getEnd(): java.lang.Long;
              public hashCode(): number;
              public toString(): string;
              public copy(param0: number, param1: java.lang.Long): com.mapbox.maps.extension.observable.eventdata.StyleLoadedEventData;
              public constructor(param0: number, param1: java.lang.Long);
              public equals(param0: any): boolean;
              public component2(): java.lang.Long;
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
        export module observable {
          export module model {
            export class DataSourceType {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.DataSourceType>;
              public static RESOURCE_LOADER: com.mapbox.maps.extension.observable.model.DataSourceType;
              public static NETWORK: com.mapbox.maps.extension.observable.model.DataSourceType;
              public static DATABASE: com.mapbox.maps.extension.observable.model.DataSourceType;
              public static ASSET: com.mapbox.maps.extension.observable.model.DataSourceType;
              public static FILE_SYSTEM: com.mapbox.maps.extension.observable.model.DataSourceType;
              public static values(): androidNative.Array<com.mapbox.maps.extension.observable.model.DataSourceType>;
              public static valueOf(param0: string): com.mapbox.maps.extension.observable.model.DataSourceType;
              public getValue(): string;
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
        export module observable {
          export module model {
            export class Error {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.Error>;
              public component2(): string;
              public copy(param0: com.mapbox.maps.extension.observable.model.ResponseErrorReason, param1: string): com.mapbox.maps.extension.observable.model.Error;
              public hashCode(): number;
              public getReason(): com.mapbox.maps.extension.observable.model.ResponseErrorReason;
              public toString(): string;
              public equals(param0: any): boolean;
              public getMessage(): string;
              public component1(): com.mapbox.maps.extension.observable.model.ResponseErrorReason;
              public constructor(param0: com.mapbox.maps.extension.observable.model.ResponseErrorReason, param1: string);
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
        export module observable {
          export module model {
            export class MapLoadErrorType {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.MapLoadErrorType>;
              public static STYLE: com.mapbox.maps.extension.observable.model.MapLoadErrorType;
              public static SPRITE: com.mapbox.maps.extension.observable.model.MapLoadErrorType;
              public static SOURCE: com.mapbox.maps.extension.observable.model.MapLoadErrorType;
              public static TILE: com.mapbox.maps.extension.observable.model.MapLoadErrorType;
              public static GLYPHS: com.mapbox.maps.extension.observable.model.MapLoadErrorType;
              public static values(): androidNative.Array<com.mapbox.maps.extension.observable.model.MapLoadErrorType>;
              public static valueOf(param0: string): com.mapbox.maps.extension.observable.model.MapLoadErrorType;
              public getValue(): string;
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
        export module observable {
          export module model {
            export class RenderMode {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.RenderMode>;
              public static PARTIAL: com.mapbox.maps.extension.observable.model.RenderMode;
              public static FULL: com.mapbox.maps.extension.observable.model.RenderMode;
              public static values(): androidNative.Array<com.mapbox.maps.extension.observable.model.RenderMode>;
              public static valueOf(param0: string): com.mapbox.maps.extension.observable.model.RenderMode;
              public getValue(): string;
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
        export module observable {
          export module model {
            export class Request {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.Request>;
              public getPriority(): com.mapbox.maps.extension.observable.model.RequestPriority;
              public component2(): string;
              public copy(param0: java.util.List<string>, param1: string, param2: com.mapbox.maps.extension.observable.model.RequestType, param3: com.mapbox.maps.extension.observable.model.RequestPriority): com.mapbox.maps.extension.observable.model.Request;
              public hashCode(): number;
              public component3(): com.mapbox.maps.extension.observable.model.RequestType;
              public getLoadingMethod(): java.util.List<string>;
              public component4(): com.mapbox.maps.extension.observable.model.RequestPriority;
              public toString(): string;
              public constructor(param0: java.util.List<string>, param1: string, param2: com.mapbox.maps.extension.observable.model.RequestType, param3: com.mapbox.maps.extension.observable.model.RequestPriority);
              public component1(): java.util.List<string>;
              public getKind(): com.mapbox.maps.extension.observable.model.RequestType;
              public getUrl(): string;
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
        export module observable {
          export module model {
            export class RequestPriority {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.RequestPriority>;
              public static REGULAR: com.mapbox.maps.extension.observable.model.RequestPriority;
              public static LOW: com.mapbox.maps.extension.observable.model.RequestPriority;
              public static valueOf(param0: string): com.mapbox.maps.extension.observable.model.RequestPriority;
              public getValue(): string;
              public static values(): androidNative.Array<com.mapbox.maps.extension.observable.model.RequestPriority>;
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
        export module observable {
          export module model {
            export class RequestType {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.RequestType>;
              public static UNKNOWN: com.mapbox.maps.extension.observable.model.RequestType;
              public static STYLE: com.mapbox.maps.extension.observable.model.RequestType;
              public static SOURCE: com.mapbox.maps.extension.observable.model.RequestType;
              public static TILE: com.mapbox.maps.extension.observable.model.RequestType;
              public static GLYPHS: com.mapbox.maps.extension.observable.model.RequestType;
              public static SPRITE_IMAGE: com.mapbox.maps.extension.observable.model.RequestType;
              public static SPRITE_JSON: com.mapbox.maps.extension.observable.model.RequestType;
              public static IMAGE: com.mapbox.maps.extension.observable.model.RequestType;
              public static valueOf(param0: string): com.mapbox.maps.extension.observable.model.RequestType;
              public getValue(): string;
              public static values(): androidNative.Array<com.mapbox.maps.extension.observable.model.RequestType>;
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
        export module observable {
          export module model {
            export class Response {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.Response>;
              public component3(): boolean;
              public component7(): string;
              public constructor(param0: string, param1: boolean, param2: boolean, param3: string, param4: com.mapbox.maps.extension.observable.model.ResponseSourceType, param5: boolean, param6: string, param7: number, param8: com.mapbox.maps.extension.observable.model.Error);
              public getNoContent(): boolean;
              public getModified(): string;
              public component9(): com.mapbox.maps.extension.observable.model.Error;
              public component5(): com.mapbox.maps.extension.observable.model.ResponseSourceType;
              public hashCode(): number;
              public component2(): boolean;
              public component6(): boolean;
              public getError(): com.mapbox.maps.extension.observable.model.Error;
              public copy(param0: string, param1: boolean, param2: boolean, param3: string, param4: com.mapbox.maps.extension.observable.model.ResponseSourceType, param5: boolean, param6: string, param7: number, param8: com.mapbox.maps.extension.observable.model.Error): com.mapbox.maps.extension.observable.model.Response;
              public toString(): string;
              public getETag(): string;
              public component1(): string;
              public getMustRevalidate(): boolean;
              public getNotModified(): boolean;
              public getSize(): number;
              public getSource(): com.mapbox.maps.extension.observable.model.ResponseSourceType;
              public component8(): number;
              public component4(): string;
              public equals(param0: any): boolean;
              public getExpires(): string;
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
        export module observable {
          export module model {
            export class ResponseErrorReason {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.ResponseErrorReason>;
              public static SUCCESS: com.mapbox.maps.extension.observable.model.ResponseErrorReason;
              public static NOT_FOUND: com.mapbox.maps.extension.observable.model.ResponseErrorReason;
              public static SERVER: com.mapbox.maps.extension.observable.model.ResponseErrorReason;
              public static CONNECTION: com.mapbox.maps.extension.observable.model.ResponseErrorReason;
              public static RATE_LIMIT: com.mapbox.maps.extension.observable.model.ResponseErrorReason;
              public static IN_OFFLINE_MODE: com.mapbox.maps.extension.observable.model.ResponseErrorReason;
              public static OTHER: com.mapbox.maps.extension.observable.model.ResponseErrorReason;
              public getValue(): string;
              public static values(): androidNative.Array<com.mapbox.maps.extension.observable.model.ResponseErrorReason>;
              public static valueOf(param0: string): com.mapbox.maps.extension.observable.model.ResponseErrorReason;
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
        export module observable {
          export module model {
            export class ResponseSourceType {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.ResponseSourceType>;
              public static NETWORK: com.mapbox.maps.extension.observable.model.ResponseSourceType;
              public static CACHE: com.mapbox.maps.extension.observable.model.ResponseSourceType;
              public static TILE_STORE: com.mapbox.maps.extension.observable.model.ResponseSourceType;
              public static LOCAL_FILE: com.mapbox.maps.extension.observable.model.ResponseSourceType;
              public static values(): androidNative.Array<com.mapbox.maps.extension.observable.model.ResponseSourceType>;
              public static valueOf(param0: string): com.mapbox.maps.extension.observable.model.ResponseSourceType;
              public getValue(): string;
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
        export module observable {
          export module model {
            export class SourceDataType {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.SourceDataType>;
              public static METADATA: com.mapbox.maps.extension.observable.model.SourceDataType;
              public static TILE: com.mapbox.maps.extension.observable.model.SourceDataType;
              public static values(): androidNative.Array<com.mapbox.maps.extension.observable.model.SourceDataType>;
              public getValue(): string;
              public static valueOf(param0: string): com.mapbox.maps.extension.observable.model.SourceDataType;
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
        export module observable {
          export module model {
            export class StyleDataType {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.StyleDataType>;
              public static STYLE: com.mapbox.maps.extension.observable.model.StyleDataType;
              public static SPRITE: com.mapbox.maps.extension.observable.model.StyleDataType;
              public static SOURCES: com.mapbox.maps.extension.observable.model.StyleDataType;
              public static values(): androidNative.Array<com.mapbox.maps.extension.observable.model.StyleDataType>;
              public static valueOf(param0: string): com.mapbox.maps.extension.observable.model.StyleDataType;
              public getValue(): string;
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
        export module observable {
          export module model {
            export class TileID {
              public static class: java.lang.Class<com.mapbox.maps.extension.observable.model.TileID>;
              public constructor(param0: number, param1: number, param2: number);
              public getY(): number;
              public component1(): number;
              public hashCode(): number;
              public component2(): number;
              public copy(param0: number, param1: number, param2: number): com.mapbox.maps.extension.observable.model.TileID;
              public component3(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public getX(): number;
              public getZoom(): number;
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
          export class StyleContract {
            public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract>;
            /**
             * Constructs a new instance of the com.mapbox.maps.extension.style.StyleContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
          export module StyleContract {
            export class StyleAtmosphereExtension {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract.StyleAtmosphereExtension>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.StyleContract$StyleAtmosphereExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void });
              public constructor();
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            }
            export class StyleExtension {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract.StyleExtension>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.StyleContract$StyleExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getStyleUri(): string; getSources(): java.util.List<com.mapbox.maps.extension.style.StyleContract.StyleSourceExtension>; getImages(): java.util.List<com.mapbox.maps.extension.style.StyleContract.StyleImageExtension>; getModels(): java.util.List<com.mapbox.maps.extension.style.StyleContract.StyleModelExtension>; getLayers(): java.util.List<any>; getLight(): com.mapbox.maps.extension.style.StyleContract.StyleLightExtension; getTerrain(): com.mapbox.maps.extension.style.StyleContract.StyleTerrainExtension; getAtmosphere(): com.mapbox.maps.extension.style.StyleContract.StyleAtmosphereExtension; getProjection(): com.mapbox.maps.extension.style.StyleContract.StyleProjectionExtension });
              public constructor();
              public getProjection(): com.mapbox.maps.extension.style.StyleContract.StyleProjectionExtension;
              public getSources(): java.util.List<com.mapbox.maps.extension.style.StyleContract.StyleSourceExtension>;
              public getTerrain(): com.mapbox.maps.extension.style.StyleContract.StyleTerrainExtension;
              public getImages(): java.util.List<com.mapbox.maps.extension.style.StyleContract.StyleImageExtension>;
              public getLayers(): java.util.List<any>;
              public getLight(): com.mapbox.maps.extension.style.StyleContract.StyleLightExtension;
              public getModels(): java.util.List<com.mapbox.maps.extension.style.StyleContract.StyleModelExtension>;
              public getAtmosphere(): com.mapbox.maps.extension.style.StyleContract.StyleAtmosphereExtension;
              public getStyleUri(): string;
            }
            export class StyleImageExtension {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract.StyleImageExtension>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.StyleContract$StyleImageExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void });
              public constructor();
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            }
            export class StyleLayerExtension {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract.StyleLayerExtension>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.StyleContract$StyleLayerExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { bindTo(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.LayerPosition): void });
              public constructor();
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface, param1: com.mapbox.maps.LayerPosition): void;
            }
            export module StyleLayerExtension {
              export class DefaultImpls {
                public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract.StyleLayerExtension.DefaultImpls>;
              }
            }
            export class StyleLightExtension {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract.StyleLightExtension>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.StyleContract$StyleLightExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void });
              public constructor();
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            }
            export class StyleModelExtension {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract.StyleModelExtension>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.StyleContract$StyleModelExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void });
              public constructor();
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            }
            export class StyleProjectionExtension {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract.StyleProjectionExtension>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.StyleContract$StyleProjectionExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void });
              public constructor();
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            }
            export class StyleSourceExtension {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract.StyleSourceExtension>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.StyleContract$StyleSourceExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void });
              public constructor();
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            }
            export class StyleTerrainExtension {
              public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleContract.StyleTerrainExtension>;
              /**
               * Constructs a new instance of the com.mapbox.maps.extension.style.StyleContract$StyleTerrainExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void });
              public constructor();
              public bindTo(param0: com.mapbox.maps.extension.style.StyleInterface): void;
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
          export class StyleInterface {
            public static class: java.lang.Class<com.mapbox.maps.extension.style.StyleInterface>;
            /**
             * Constructs a new instance of the com.mapbox.maps.extension.style.StyleInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getPixelRatio(): number; isValid(): boolean; addImage(param0: string, param1: globalAndroid.graphics.Bitmap): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None> });
            public constructor();
            public getPixelRatio(): number;
            public addImage(param0: string, param1: globalAndroid.graphics.Bitmap): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
            public isValid(): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module module {
        export class MapTelemetry {
          public static class: java.lang.Class<com.mapbox.maps.module.MapTelemetry>;
          /**
           * Constructs a new instance of the com.mapbox.maps.module.MapTelemetry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onAppUserTurnstileEvent(): void; setUserTelemetryRequestState(param0: boolean): void; disableTelemetrySession(): void; setDebugLoggingEnabled(param0: boolean): void; setSessionIdRotationInterval(param0: number): boolean; onPerformanceEvent(param0: globalAndroid.os.Bundle): void; getUserTelemetryRequestState(): boolean });
          public constructor();
          public onAppUserTurnstileEvent(): void;
          public setUserTelemetryRequestState(param0: boolean): void;
          /** @deprecated */
          public setDebugLoggingEnabled(param0: boolean): void;
          public disableTelemetrySession(): void;
          /** @deprecated */
          public setSessionIdRotationInterval(param0: number): boolean;
          public onPerformanceEvent(param0: globalAndroid.os.Bundle): void;
          public getUserTelemetryRequestState(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class ContextBinder {
          public static class: java.lang.Class<com.mapbox.maps.plugin.ContextBinder>;
          /**
           * Constructs a new instance of the com.mapbox.maps.plugin.ContextBinder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { bind(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void });
          public constructor();
          public bind(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class InvalidPluginConfigurationException {
          public static class: java.lang.Class<com.mapbox.maps.plugin.InvalidPluginConfigurationException>;
          public constructor(param0: string);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class LifecyclePlugin {
          public static class: java.lang.Class<com.mapbox.maps.plugin.LifecyclePlugin>;
          /**
           * Constructs a new instance of the com.mapbox.maps.plugin.LifecyclePlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onStart(): void; onStop(): void });
          public constructor();
          public onStart(): void;
          public onStop(): void;
        }
        export module LifecyclePlugin {
          export class DefaultImpls {
            public static class: java.lang.Class<com.mapbox.maps.plugin.LifecyclePlugin.DefaultImpls>;
            public static onStart(param0: com.mapbox.maps.plugin.LifecyclePlugin): void;
            public static onStop(param0: com.mapbox.maps.plugin.LifecyclePlugin): void;
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
        export abstract class LocationPuck {
          public static class: java.lang.Class<com.mapbox.maps.plugin.LocationPuck>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class LocationPuck2D extends com.mapbox.maps.plugin.LocationPuck {
          public static class: java.lang.Class<com.mapbox.maps.plugin.LocationPuck2D>;
          public setOpacity(param0: number): void;
          public copy(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: string, param4: number): com.mapbox.maps.plugin.LocationPuck2D;
          public getBearingImage(): globalAndroid.graphics.drawable.Drawable;
          public setBearingImage(param0: globalAndroid.graphics.drawable.Drawable): void;
          public getShadowImage(): globalAndroid.graphics.drawable.Drawable;
          public component3(): globalAndroid.graphics.drawable.Drawable;
          public toString(): string;
          public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable);
          public constructor();
          public getScaleExpression(): string;
          public component4(): string;
          public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: string, param4: number);
          public hashCode(): number;
          public getOpacity(): number;
          public component5(): number;
          public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: string);
          public component1(): globalAndroid.graphics.drawable.Drawable;
          public constructor(param0: globalAndroid.graphics.drawable.Drawable);
          public setTopImage(param0: globalAndroid.graphics.drawable.Drawable): void;
          public equals(param0: any): boolean;
          public getTopImage(): globalAndroid.graphics.drawable.Drawable;
          public setShadowImage(param0: globalAndroid.graphics.drawable.Drawable): void;
          public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable);
          public setScaleExpression(param0: string): void;
          public component2(): globalAndroid.graphics.drawable.Drawable;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class LocationPuck3D extends com.mapbox.maps.plugin.LocationPuck {
          public static class: java.lang.Class<com.mapbox.maps.plugin.LocationPuck3D>;
          public setModelScaleExpression(param0: string): void;
          public getModelOpacity(): number;
          public getModelTranslation(): java.util.List<java.lang.Float>;
          public component5(): string;
          public constructor(param0: string);
          public component3(): number;
          public setModelScale(param0: java.util.List<java.lang.Float>): void;
          public setModelOpacity(param0: number): void;
          public toString(): string;
          public constructor(param0: string, param1: java.util.List<java.lang.Float>, param2: number, param3: java.util.List<java.lang.Float>, param4: string, param5: java.util.List<java.lang.Float>, param6: java.util.List<java.lang.Float>);
          public constructor(param0: string, param1: java.util.List<java.lang.Float>);
          public getPosition(): java.util.List<java.lang.Float>;
          public setModelTranslation(param0: java.util.List<java.lang.Float>): void;
          public getModelUri(): string;
          public copy(param0: string, param1: java.util.List<java.lang.Float>, param2: number, param3: java.util.List<java.lang.Float>, param4: string, param5: java.util.List<java.lang.Float>, param6: java.util.List<java.lang.Float>): com.mapbox.maps.plugin.LocationPuck3D;
          public hashCode(): number;
          public constructor(param0: string, param1: java.util.List<java.lang.Float>, param2: number, param3: java.util.List<java.lang.Float>, param4: string, param5: java.util.List<java.lang.Float>);
          public getModelScaleExpression(): string;
          public constructor(param0: string, param1: java.util.List<java.lang.Float>, param2: number, param3: java.util.List<java.lang.Float>, param4: string);
          public setModelUri(param0: string): void;
          public component4(): java.util.List<java.lang.Float>;
          public getModelScale(): java.util.List<java.lang.Float>;
          public getModelRotation(): java.util.List<java.lang.Float>;
          public constructor(param0: string, param1: java.util.List<java.lang.Float>, param2: number);
          public component6(): java.util.List<java.lang.Float>;
          public equals(param0: any): boolean;
          public component2(): java.util.List<java.lang.Float>;
          public component7(): java.util.List<java.lang.Float>;
          public component1(): string;
          public setPosition(param0: java.util.List<java.lang.Float>): void;
          public setModelRotation(param0: java.util.List<java.lang.Float>): void;
          public constructor(param0: string, param1: java.util.List<java.lang.Float>, param2: number, param3: java.util.List<java.lang.Float>);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class MapCameraPlugin extends com.mapbox.maps.plugin.MapPlugin {
          public static class: java.lang.Class<com.mapbox.maps.plugin.MapCameraPlugin>;
          /**
           * Constructs a new instance of the com.mapbox.maps.plugin.MapCameraPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCameraMove(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidNative.Array<java.lang.Double>): void; initialize(): void; cleanup(): void; onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void });
          public constructor();
          public cleanup(): void;
          public onCameraMove(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidNative.Array<java.lang.Double>): void;
          public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          public initialize(): void;
        }
        export module MapCameraPlugin {
          export class DefaultImpls {
            public static class: java.lang.Class<com.mapbox.maps.plugin.MapCameraPlugin.DefaultImpls>;
            public static onDelegateProvider(param0: com.mapbox.maps.plugin.MapCameraPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public static cleanup(param0: com.mapbox.maps.plugin.MapCameraPlugin): void;
            public static initialize(param0: com.mapbox.maps.plugin.MapCameraPlugin): void;
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
        export class MapPlugin {
          public static class: java.lang.Class<com.mapbox.maps.plugin.MapPlugin>;
          /**
           * Constructs a new instance of the com.mapbox.maps.plugin.MapPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { initialize(): void; cleanup(): void; onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void });
          public constructor();
          public cleanup(): void;
          public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          public initialize(): void;
        }
        export module MapPlugin {
          export class DefaultImpls {
            public static class: java.lang.Class<com.mapbox.maps.plugin.MapPlugin.DefaultImpls>;
            public static initialize(param0: com.mapbox.maps.plugin.MapPlugin): void;
            public static cleanup(param0: com.mapbox.maps.plugin.MapPlugin): void;
            public static onDelegateProvider(param0: com.mapbox.maps.plugin.MapPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
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
        export class MapSizePlugin {
          public static class: java.lang.Class<com.mapbox.maps.plugin.MapSizePlugin>;
          /**
           * Constructs a new instance of the com.mapbox.maps.plugin.MapSizePlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSizeChanged(param0: number, param1: number): void });
          public constructor();
          public onSizeChanged(param0: number, param1: number): void;
        }
        export module MapSizePlugin {
          export class DefaultImpls {
            public static class: java.lang.Class<com.mapbox.maps.plugin.MapSizePlugin.DefaultImpls>;
            public static onSizeChanged(param0: com.mapbox.maps.plugin.MapSizePlugin, param1: number, param2: number): void;
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
        export class MapStyleObserverPlugin {
          public static class: java.lang.Class<com.mapbox.maps.plugin.MapStyleObserverPlugin>;
          /**
           * Constructs a new instance of the com.mapbox.maps.plugin.MapStyleObserverPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void });
          public constructor();
          public onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export abstract class Plugin {
          public static class: java.lang.Class<com.mapbox.maps.plugin.Plugin>;
          public static MAPBOX_CAMERA_PLUGIN_ID: string;
          public static MAPBOX_GESTURES_PLUGIN_ID: string;
          public static MAPBOX_COMPASS_PLUGIN_ID: string;
          public static MAPBOX_LOGO_PLUGIN_ID: string;
          public static MAPBOX_ATTRIBUTION_PLUGIN_ID: string;
          public static MAPBOX_LOCATION_COMPONENT_PLUGIN_ID: string;
          public static MAPBOX_SCALEBAR_PLUGIN_ID: string;
          public static MAPBOX_ANNOTATION_PLUGIN_ID: string;
          public static MAPBOX_LIFECYCLE_PLUGIN_ID: string;
          public static MAPBOX_MAP_OVERLAY_PLUGIN_ID: string;
          public static MAPBOX_VIEWPORT_PLUGIN_ID: string;
          public equals(param0: any): boolean;
          public toString(): string;
          public getId(): string;
          public getInstance(): com.mapbox.maps.plugin.MapPlugin;
          public hashCode(): number;
        }
        export module Plugin {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.maps.plugin.Plugin.Companion>;
          }
          export class Custom extends com.mapbox.maps.plugin.Plugin {
            public static class: java.lang.Class<com.mapbox.maps.plugin.Plugin.Custom>;
            public constructor(param0: string, param1: com.mapbox.maps.plugin.MapPlugin);
          }
          export class Mapbox extends com.mapbox.maps.plugin.Plugin {
            public static class: java.lang.Class<com.mapbox.maps.plugin.Plugin.Mapbox>;
            public constructor(param0: string);
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
        export class PuckBearingSource {
          public static class: java.lang.Class<com.mapbox.maps.plugin.PuckBearingSource>;
          public static HEADING: com.mapbox.maps.plugin.PuckBearingSource;
          public static COURSE: com.mapbox.maps.plugin.PuckBearingSource;
          public static valueOf(param0: string): com.mapbox.maps.plugin.PuckBearingSource;
          public getValue(): string;
          public static values(): androidNative.Array<com.mapbox.maps.plugin.PuckBearingSource>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class ScrollMode {
          public static class: java.lang.Class<com.mapbox.maps.plugin.ScrollMode>;
          public static HORIZONTAL: com.mapbox.maps.plugin.ScrollMode;
          public static VERTICAL: com.mapbox.maps.plugin.ScrollMode;
          public static HORIZONTAL_AND_VERTICAL: com.mapbox.maps.plugin.ScrollMode;
          public static values(): androidNative.Array<com.mapbox.maps.plugin.ScrollMode>;
          public getValue(): string;
          public static valueOf(param0: string): com.mapbox.maps.plugin.ScrollMode;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module plugin {
        export class ViewPlugin extends com.mapbox.maps.plugin.MapPlugin {
          public static class: java.lang.Class<com.mapbox.maps.plugin.ViewPlugin>;
          /**
           * Constructs a new instance of the com.mapbox.maps.plugin.ViewPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View; onPluginView(param0: globalAndroid.view.View): void; initialize(): void; cleanup(): void; onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void });
          public constructor();
          public cleanup(): void;
          public bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
          public onPluginView(param0: globalAndroid.view.View): void;
          public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          public initialize(): void;
        }
        export module ViewPlugin {
          export class DefaultImpls {
            public static class: java.lang.Class<com.mapbox.maps.plugin.ViewPlugin.DefaultImpls>;
            public static initialize(param0: com.mapbox.maps.plugin.ViewPlugin): void;
            public static cleanup(param0: com.mapbox.maps.plugin.ViewPlugin): void;
            public static onDelegateProvider(param0: com.mapbox.maps.plugin.ViewPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public static onPluginView(param0: com.mapbox.maps.plugin.ViewPlugin, param1: globalAndroid.view.View): void;
          }
          export class Initializer {
            public static class: java.lang.Class<com.mapbox.maps.plugin.ViewPlugin.Initializer>;
            public getContext(): java.lang.ref.WeakReference<globalAndroid.content.Context>;
            public getPixelRatio(): number;
            public component2(): globalAndroid.content.res.TypedArray;
            public copy(param0: java.lang.ref.WeakReference<globalAndroid.content.Context>, param1: globalAndroid.content.res.TypedArray, param2: number): com.mapbox.maps.plugin.ViewPlugin.Initializer;
            public constructor(param0: java.lang.ref.WeakReference<globalAndroid.content.Context>, param1: globalAndroid.content.res.TypedArray, param2: number);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getAttributes(): globalAndroid.content.res.TypedArray;
            public component3(): number;
            public toString(): string;
            public component1(): java.lang.ref.WeakReference<globalAndroid.content.Context>;
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
        export module animation {
          export class CameraAnimationsLifecycleListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimationsLifecycleListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.animation.CameraAnimationsLifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAnimatorStarting(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void; onAnimatorInterrupting(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string, param3: globalAndroid.animation.ValueAnimator, param4: string): void; onAnimatorEnding(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void; onAnimatorCancelling(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void });
            public constructor();
            public onAnimatorCancelling(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void;
            public onAnimatorStarting(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void;
            public onAnimatorInterrupting(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string, param3: globalAndroid.animation.ValueAnimator, param4: string): void;
            public onAnimatorEnding(param0: com.mapbox.maps.plugin.animation.CameraAnimatorType, param1: globalAndroid.animation.ValueAnimator, param2: string): void;
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
        export module animation {
          export class CameraAnimationsPlugin extends com.mapbox.maps.plugin.MapPlugin {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimationsPlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.animation.CameraAnimationsPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getDebugMode(): boolean;
              setDebugMode(param0: boolean): void;
              getAnchor(): com.mapbox.maps.ScreenCoordinate;
              setAnchor(param0: com.mapbox.maps.ScreenCoordinate): void;
              easeTo(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
              scaleBy(param0: number, param1: com.mapbox.maps.ScreenCoordinate, param2: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
              moveBy(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
              rotateBy(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate, param2: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
              pitchBy(param0: number, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
              flyTo(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
              createZoomAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: any): globalAndroid.animation.ValueAnimator;
              createAnchorAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.maps.ScreenCoordinate>, param1: any): globalAndroid.animation.ValueAnimator;
              createBearingAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: boolean, param2: any): globalAndroid.animation.ValueAnimator;
              createPitchAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: any): globalAndroid.animation.ValueAnimator;
              createPaddingAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.maps.EdgeInsets>, param1: any): globalAndroid.animation.ValueAnimator;
              createCenterAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.geojson.Point>, param1: any): globalAndroid.animation.ValueAnimator;
              registerAnimators(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>): void;
              cancelAllAnimators(param0: java.util.List<string>): void;
              unregisterAnimators(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>, param1: boolean): void;
              calculateScaleBy(param0: number, param1: number): number;
              addCameraBearingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
              addCameraPitchChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
              addCameraZoomChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
              removeCameraZoomChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
              addCameraCenterChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.geojson.Point>): void;
              removeCameraCenterChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.geojson.Point>): void;
              addCameraPaddingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.maps.EdgeInsets>): void;
              removeCameraPaddingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.maps.EdgeInsets>): void;
              addCameraAnchorChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorNullableChangeListener<com.mapbox.maps.ScreenCoordinate>): void;
              removeCameraAnchorChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorNullableChangeListener<com.mapbox.maps.ScreenCoordinate>): void;
              removeCameraBearingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
              removeCameraPitchChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
              addCameraAnimationsLifecycleListener(param0: com.mapbox.maps.plugin.animation.CameraAnimationsLifecycleListener): void;
              removeCameraAnimationsLifecycleListener(param0: com.mapbox.maps.plugin.animation.CameraAnimationsLifecycleListener): void;
              playAnimatorsTogether(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>): void;
              playAnimatorsSequentially(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            });
            public constructor();
            public registerAnimators(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>): void;
            public moveBy(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public addCameraZoomChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public addCameraCenterChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.geojson.Point>): void;
            public unregisterAnimators(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>, param1: boolean): void;
            public flyTo(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public calculateScaleBy(param0: number, param1: number): number;
            public removeCameraAnimationsLifecycleListener(param0: com.mapbox.maps.plugin.animation.CameraAnimationsLifecycleListener): void;
            public removeCameraBearingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public pitchBy(param0: number, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public setAnchor(param0: com.mapbox.maps.ScreenCoordinate): void;
            public addCameraAnimationsLifecycleListener(param0: com.mapbox.maps.plugin.animation.CameraAnimationsLifecycleListener): void;
            public setDebugMode(param0: boolean): void;
            public removeCameraPaddingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.maps.EdgeInsets>): void;
            public cleanup(): void;
            public createAnchorAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.maps.ScreenCoordinate>, param1: any): globalAndroid.animation.ValueAnimator;
            public playAnimatorsSequentially(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>): void;
            public removeCameraZoomChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public cancelAllAnimators(param0: java.util.List<string>): void;
            public removeCameraAnchorChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorNullableChangeListener<com.mapbox.maps.ScreenCoordinate>): void;
            public addCameraBearingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public getAnchor(): com.mapbox.maps.ScreenCoordinate;
            public removeCameraPitchChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public scaleBy(param0: number, param1: com.mapbox.maps.ScreenCoordinate, param2: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public createPaddingAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.maps.EdgeInsets>, param1: any): globalAndroid.animation.ValueAnimator;
            public getDebugMode(): boolean;
            public createCenterAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<com.mapbox.geojson.Point>, param1: any): globalAndroid.animation.ValueAnimator;
            public addCameraPitchChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<java.lang.Double>): void;
            public playAnimatorsTogether(param0: androidNative.Array<globalAndroid.animation.ValueAnimator>): void;
            public removeCameraCenterChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.geojson.Point>): void;
            public easeTo(param0: com.mapbox.maps.CameraOptions, param1: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public initialize(): void;
            public addCameraPaddingChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<com.mapbox.maps.EdgeInsets>): void;
            public createPitchAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: any): globalAndroid.animation.ValueAnimator;
            public createBearingAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: boolean, param2: any): globalAndroid.animation.ValueAnimator;
            public createZoomAnimator(param0: com.mapbox.maps.plugin.animation.CameraAnimatorOptions<java.lang.Double>, param1: any): globalAndroid.animation.ValueAnimator;
            public rotateBy(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate, param2: com.mapbox.maps.plugin.animation.MapAnimationOptions): com.mapbox.maps.plugin.animation.Cancelable;
            public addCameraAnchorChangeListener(param0: com.mapbox.maps.plugin.animation.CameraAnimatorNullableChangeListener<com.mapbox.maps.ScreenCoordinate>): void;
          }
          export module CameraAnimationsPlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimationsPlugin.DefaultImpls>;
              public static initialize(param0: com.mapbox.maps.plugin.animation.CameraAnimationsPlugin): void;
              public static cleanup(param0: com.mapbox.maps.plugin.animation.CameraAnimationsPlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.animation.CameraAnimationsPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
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
        export module animation {
          export class CameraAnimatorChangeListener<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<any>>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onChanged(param0: T): void });
            public constructor();
            public onChanged(param0: T): void;
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
        export module animation {
          export class CameraAnimatorNullableChangeListener<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimatorNullableChangeListener<any>>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.animation.CameraAnimatorNullableChangeListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onChanged(param0: T): void });
            public constructor();
            public onChanged(param0: T): void;
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
        export module animation {
          export class CameraAnimatorOptions<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimatorOptions<any>>;
            public getStartValue(): T;
            public getOwner(): string;
            public getTargets(): androidNative.Array<T>;
            public hashCode(): number;
            public equals(param0: any): boolean;
          }
          export module CameraAnimatorOptions {
            export class Builder<T> extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimatorOptions.Builder<any>>;
              public constructor(param0: androidNative.Array<T>);
              public build(): com.mapbox.maps.plugin.animation.CameraAnimatorOptions<T>;
              public owner(param0: string): com.mapbox.maps.plugin.animation.CameraAnimatorOptions.Builder<T>;
              public getTargets(): androidNative.Array<T>;
              public startValue(param0: T): com.mapbox.maps.plugin.animation.CameraAnimatorOptions.Builder<T>;
            }
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimatorOptions.Companion>;
              public cameraAnimatorOptions(param0: androidNative.Array<any>, param1: any): com.mapbox.maps.plugin.animation.CameraAnimatorOptions<any>;
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
        export module animation {
          export class CameraAnimatorType {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.CameraAnimatorType>;
            public static CENTER: com.mapbox.maps.plugin.animation.CameraAnimatorType;
            public static ZOOM: com.mapbox.maps.plugin.animation.CameraAnimatorType;
            public static BEARING: com.mapbox.maps.plugin.animation.CameraAnimatorType;
            public static PITCH: com.mapbox.maps.plugin.animation.CameraAnimatorType;
            public static ANCHOR: com.mapbox.maps.plugin.animation.CameraAnimatorType;
            public static PADDING: com.mapbox.maps.plugin.animation.CameraAnimatorType;
            public static values(): androidNative.Array<com.mapbox.maps.plugin.animation.CameraAnimatorType>;
            public static valueOf(param0: string): com.mapbox.maps.plugin.animation.CameraAnimatorType;
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
        export module animation {
          export class Cancelable {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.Cancelable>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.animation.Cancelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { cancel(): void });
            public constructor();
            public cancel(): void;
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
        export module animation {
          export class MapAnimationOptions {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.MapAnimationOptions>;
            public getInterpolator(): globalAndroid.animation.TimeInterpolator;
            public getOwner(): string;
            public getDuration(): java.lang.Long;
            public getStartDelay(): java.lang.Long;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getAnimatorListener(): globalAndroid.animation.Animator.AnimatorListener;
          }
          export module MapAnimationOptions {
            export class Builder {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.MapAnimationOptions.Builder>;
              public constructor();
              public animatorListener(param0: globalAndroid.animation.Animator.AnimatorListener): com.mapbox.maps.plugin.animation.MapAnimationOptions.Builder;
              public startDelay(param0: number): com.mapbox.maps.plugin.animation.MapAnimationOptions.Builder;
              public duration(param0: number): com.mapbox.maps.plugin.animation.MapAnimationOptions.Builder;
              public interpolator(param0: globalAndroid.animation.TimeInterpolator): com.mapbox.maps.plugin.animation.MapAnimationOptions.Builder;
              public owner(param0: string): com.mapbox.maps.plugin.animation.MapAnimationOptions.Builder;
              public build(): com.mapbox.maps.plugin.animation.MapAnimationOptions;
            }
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.animation.MapAnimationOptions.Companion>;
              public mapAnimationOptions(param0: any): com.mapbox.maps.plugin.animation.MapAnimationOptions;
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
        export module animation {
          export class MapAnimationOwnerRegistry {
            public static class: java.lang.Class<com.mapbox.maps.plugin.animation.MapAnimationOwnerRegistry>;
            public static INSTANCE: com.mapbox.maps.plugin.animation.MapAnimationOwnerRegistry;
            public static INTERNAL: string;
            public static GESTURES: string;
            public static COMPASS: string;
            public static LOCATION: string;
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
        export module annotation {
          export abstract class Annotation<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.Annotation<any>>;
            public static ID_DATA: string;
            public static MAX_MERCATOR_LATITUDE: number;
            public static MIN_MERCATOR_LATITUDE: number;
            public getGeometry(): T;
            public getType(): com.mapbox.maps.plugin.annotation.AnnotationType;
            public isSelected(): boolean;
            public setGeometry(param0: T): void;
            public getId(): number;
            public getOffsetGeometry(param0: com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate, param1: com.mapbox.android.gestures.MoveDistancesObject): T;
            public constructor(param0: number, param1: com.google.gson.JsonObject, param2: T);
            public setDraggable(param0: boolean): void;
            public setSelected(param0: boolean): void;
            public setUsedDataDrivenProperties(): void;
            public getJsonObjectCopy(): com.google.gson.JsonObject;
            public getJsonObject(): com.google.gson.JsonObject;
            public setData(param0: com.google.gson.JsonElement): void;
            public getFeatureIdentifier(): string;
            public getData(): com.google.gson.JsonElement;
            public isDraggable(): boolean;
          }
          export module Annotation {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.Annotation.Companion>;
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
        export module annotation {
          export class AnnotationConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationConfig>;
            public component3(): string;
            public constructor();
            public constructor(param0: string, param1: string, param2: string, param3: com.mapbox.maps.plugin.annotation.AnnotationSourceOptions);
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getAnnotationSourceOptions(): com.mapbox.maps.plugin.annotation.AnnotationSourceOptions;
            public getLayerId(): string;
            public getBelowLayerId(): string;
            public getSourceId(): string;
            public copy(param0: string, param1: string, param2: string, param3: com.mapbox.maps.plugin.annotation.AnnotationSourceOptions): com.mapbox.maps.plugin.annotation.AnnotationConfig;
            public toString(): string;
            public constructor(param0: string, param1: string, param2: string);
            public component2(): string;
            public constructor(param0: string, param1: string);
            public component4(): com.mapbox.maps.plugin.annotation.AnnotationSourceOptions;
            public constructor(param0: string);
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
        export module annotation {
          export class AnnotationManager<G, T, S, D, U, V, I> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.annotation.AnnotationManager<any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              create(param0: S): T;
              create(param0: java.util.List<any>): java.util.List<T>;
              update(param0: T): void;
              update(param0: java.util.List<any>): void;
              delete(param0: T): void;
              delete(param0: java.util.List<any>): void;
              deleteAll(): void;
              onDestroy(): void;
              selectAnnotation(param0: T): void;
              onSizeChanged(param0: number, param1: number): void;
              getDelegateProvider(): com.mapbox.maps.plugin.delegates.MapDelegateProvider;
              getAnnotations(): java.util.List<T>;
              getDragListeners(): java.util.List<D>;
              getClickListeners(): java.util.List<U>;
              getLongClickListeners(): java.util.List<V>;
              getInteractionListener(): java.util.List<I>;
              addDragListener(param0: D): boolean;
              removeDragListener(param0: D): boolean;
              addClickListener(param0: U): boolean;
              removeClickListener(param0: U): boolean;
              addLongClickListener(param0: V): boolean;
              removeLongClickListener(param0: V): boolean;
              addInteractionListener(param0: I): boolean;
              removeInteractionListener(param0: I): boolean;
              enableDataDrivenProperty(param0: string): void;
            });
            public constructor();
            public update(param0: T): void;
            public addInteractionListener(param0: I): boolean;
            public removeLongClickListener(param0: V): boolean;
            public removeClickListener(param0: U): boolean;
            public getLongClickListeners(): java.util.List<V>;
            public enableDataDrivenProperty(param0: string): void;
            public delete(param0: T): void;
            public addLongClickListener(param0: V): boolean;
            public onDestroy(): void;
            public removeInteractionListener(param0: I): boolean;
            public create(param0: java.util.List<any>): java.util.List<T>;
            public getDelegateProvider(): com.mapbox.maps.plugin.delegates.MapDelegateProvider;
            public getClickListeners(): java.util.List<U>;
            public update(param0: java.util.List<any>): void;
            public create(param0: S): T;
            public getInteractionListener(): java.util.List<I>;
            public delete(param0: java.util.List<any>): void;
            public getAnnotations(): java.util.List<T>;
            public addDragListener(param0: D): boolean;
            public addClickListener(param0: U): boolean;
            public getDragListeners(): java.util.List<D>;
            public removeDragListener(param0: D): boolean;
            public onSizeChanged(param0: number, param1: number): void;
            public deleteAll(): void;
            public selectAnnotation(param0: T): void;
          }
          export module AnnotationManager {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationManager.DefaultImpls>;
              public static addInteractionListener(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>, param1: com.mapbox.maps.plugin.annotation.OnAnnotationInteractionListener<any>): boolean;
              public static removeClickListener(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>, param1: com.mapbox.maps.plugin.annotation.OnAnnotationClickListener<any>): boolean;
              public static addDragListener(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>, param1: com.mapbox.maps.plugin.annotation.OnAnnotationDragListener<any>): boolean;
              public static removeDragListener(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>, param1: com.mapbox.maps.plugin.annotation.OnAnnotationDragListener<any>): boolean;
              public static addClickListener(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>, param1: com.mapbox.maps.plugin.annotation.OnAnnotationClickListener<any>): boolean;
              public static removeLongClickListener(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>, param1: com.mapbox.maps.plugin.annotation.OnAnnotationLongClickListener<any>): boolean;
              public static addLongClickListener(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>, param1: com.mapbox.maps.plugin.annotation.OnAnnotationLongClickListener<any>): boolean;
              public static removeInteractionListener(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>, param1: com.mapbox.maps.plugin.annotation.OnAnnotationInteractionListener<any>): boolean;
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
        export module annotation {
          export class AnnotationOptions<G, T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationOptions>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.annotation.AnnotationOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { build(param0: number, param1: com.mapbox.maps.plugin.annotation.AnnotationManager<G, T, any, any, any, any, any>): T });
            public constructor();
            public build(param0: number, param1: com.mapbox.maps.plugin.annotation.AnnotationManager<G, T, any, any, any, any, any>): T;
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
        export module annotation {
          export class AnnotationPlugin implements com.mapbox.maps.plugin.MapPlugin, com.mapbox.maps.plugin.MapSizePlugin, com.mapbox.maps.plugin.MapStyleObserverPlugin {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationPlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.annotation.AnnotationPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              createAnnotationManager(param0: globalAndroid.view.View, param1: com.mapbox.maps.plugin.annotation.AnnotationType, param2: com.mapbox.maps.plugin.annotation.AnnotationConfig): com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>;
              createAnnotationManager(param0: com.mapbox.maps.plugin.annotation.AnnotationType, param1: com.mapbox.maps.plugin.annotation.AnnotationConfig): com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>;
              removeAnnotationManager(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              onSizeChanged(param0: number, param1: number): void;
              onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            });
            public constructor();
            public removeAnnotationManager(param0: com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>): void;
            public initialize(): void;
            public createAnnotationManager(param0: com.mapbox.maps.plugin.annotation.AnnotationType, param1: com.mapbox.maps.plugin.annotation.AnnotationConfig): com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>;
            public cleanup(): void;
            /** @deprecated */
            public createAnnotationManager(param0: globalAndroid.view.View, param1: com.mapbox.maps.plugin.annotation.AnnotationType, param2: com.mapbox.maps.plugin.annotation.AnnotationConfig): com.mapbox.maps.plugin.annotation.AnnotationManager<any, any, any, any, any, any, any>;
            public onSizeChanged(param0: number, param1: number): void;
            public onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          }
          export module AnnotationPlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationPlugin.DefaultImpls>;
              public static onSizeChanged(param0: com.mapbox.maps.plugin.annotation.AnnotationPlugin, param1: number, param2: number): void;
              public static cleanup(param0: com.mapbox.maps.plugin.annotation.AnnotationPlugin): void;
              public static initialize(param0: com.mapbox.maps.plugin.annotation.AnnotationPlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.annotation.AnnotationPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
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
        export module annotation {
          export class AnnotationSourceOptions {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationSourceOptions>;
            public component5(): com.mapbox.maps.plugin.annotation.ClusterOptions;
            public getBuffer(): java.lang.Long;
            public constructor();
            public getTolerance(): java.lang.Double;
            public component1(): java.lang.Long;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: java.lang.Boolean, param3: java.lang.Double, param4: com.mapbox.maps.plugin.annotation.ClusterOptions);
            public constructor(param0: java.lang.Long);
            public getLineMetrics(): java.lang.Boolean;
            public copy(param0: java.lang.Long, param1: java.lang.Long, param2: java.lang.Boolean, param3: java.lang.Double, param4: com.mapbox.maps.plugin.annotation.ClusterOptions): com.mapbox.maps.plugin.annotation.AnnotationSourceOptions;
            public constructor(param0: java.lang.Long, param1: java.lang.Long);
            public component3(): java.lang.Boolean;
            public component4(): java.lang.Double;
            public toString(): string;
            public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: java.lang.Boolean, param3: java.lang.Double);
            public component2(): java.lang.Long;
            public getMaxZoom(): java.lang.Long;
            public getClusterOptions(): com.mapbox.maps.plugin.annotation.ClusterOptions;
            public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: java.lang.Boolean);
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
        export module annotation {
          export class AnnotationType {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.AnnotationType>;
            public static PolygonAnnotation: com.mapbox.maps.plugin.annotation.AnnotationType;
            public static PolylineAnnotation: com.mapbox.maps.plugin.annotation.AnnotationType;
            public static PointAnnotation: com.mapbox.maps.plugin.annotation.AnnotationType;
            public static CircleAnnotation: com.mapbox.maps.plugin.annotation.AnnotationType;
            public static values(): androidNative.Array<com.mapbox.maps.plugin.annotation.AnnotationType>;
            public static valueOf(param0: string): com.mapbox.maps.plugin.annotation.AnnotationType;
            public setValue(param0: number): void;
            public getValue(): number;
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
        export module annotation {
          export class ClusterOptions {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.ClusterOptions>;
            public getCircleRadius(): number;
            public getClusterMaxZoom(): number;
            public component5(): com.mapbox.bindgen.Value;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value, param3: number, param4: com.mapbox.bindgen.Value, param5: number, param6: com.mapbox.bindgen.Value, param7: number, param8: com.mapbox.bindgen.Value, param9: number);
            public constructor(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value, param3: number, param4: com.mapbox.bindgen.Value, param5: number, param6: com.mapbox.bindgen.Value, param7: number, param8: com.mapbox.bindgen.Value, param9: number, param10: java.util.List<any>, param11: java.util.HashMap<string, any>);
            public component6(): number;
            public component9(): com.mapbox.bindgen.Value;
            public component2(): number;
            public constructor(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value, param3: number, param4: com.mapbox.bindgen.Value);
            public component12(): java.util.HashMap<string, any>;
            public component10(): number;
            public component11(): java.util.List<any>;
            public getTextField(): com.mapbox.bindgen.Value;
            public constructor(param0: boolean);
            public component1(): boolean;
            public constructor(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value, param3: number, param4: com.mapbox.bindgen.Value, param5: number);
            public getClusterRadius(): number;
            public component8(): number;
            public constructor();
            public getTextColorExpression(): com.mapbox.bindgen.Value;
            public component3(): com.mapbox.bindgen.Value;
            public component7(): com.mapbox.bindgen.Value;
            public getTextSizeExpression(): com.mapbox.bindgen.Value;
            public getTextColor(): number;
            public component4(): number;
            public constructor(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value, param3: number, param4: com.mapbox.bindgen.Value, param5: number, param6: com.mapbox.bindgen.Value, param7: number, param8: com.mapbox.bindgen.Value);
            public constructor(param0: boolean, param1: number);
            public toString(): string;
            public constructor(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value, param3: number);
            public getColorLevels(): java.util.List<any>;
            public getTextSize(): number;
            public getClusterProperties(): java.util.HashMap<string, any>;
            public constructor(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value, param3: number, param4: com.mapbox.bindgen.Value, param5: number, param6: com.mapbox.bindgen.Value);
            public constructor(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value, param3: number, param4: com.mapbox.bindgen.Value, param5: number, param6: com.mapbox.bindgen.Value, param7: number, param8: com.mapbox.bindgen.Value, param9: number, param10: java.util.List<any>);
            public constructor(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value, param3: number, param4: com.mapbox.bindgen.Value, param5: number, param6: com.mapbox.bindgen.Value, param7: number);
            public copy(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value, param3: number, param4: com.mapbox.bindgen.Value, param5: number, param6: com.mapbox.bindgen.Value, param7: number, param8: com.mapbox.bindgen.Value, param9: number, param10: java.util.List<any>, param11: java.util.HashMap<string, any>): com.mapbox.maps.plugin.annotation.ClusterOptions;
            public constructor(param0: boolean, param1: number, param2: com.mapbox.bindgen.Value);
            public getCircleRadiusExpression(): com.mapbox.bindgen.Value;
            public getCluster(): boolean;
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
        export module annotation {
          export class OnAnnotationClickListener<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.OnAnnotationClickListener<any>>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.annotation.OnAnnotationClickListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAnnotationClick(param0: T): boolean });
            public constructor();
            public onAnnotationClick(param0: T): boolean;
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
        export module annotation {
          export class OnAnnotationDragListener<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.OnAnnotationDragListener<any>>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.annotation.OnAnnotationDragListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAnnotationDragStarted(param0: com.mapbox.maps.plugin.annotation.Annotation<any>): void; onAnnotationDrag(param0: com.mapbox.maps.plugin.annotation.Annotation<any>): void; onAnnotationDragFinished(param0: com.mapbox.maps.plugin.annotation.Annotation<any>): void });
            public constructor();
            public onAnnotationDrag(param0: com.mapbox.maps.plugin.annotation.Annotation<any>): void;
            public onAnnotationDragFinished(param0: com.mapbox.maps.plugin.annotation.Annotation<any>): void;
            public onAnnotationDragStarted(param0: com.mapbox.maps.plugin.annotation.Annotation<any>): void;
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
        export module annotation {
          export class OnAnnotationInteractionListener<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.OnAnnotationInteractionListener<any>>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.annotation.OnAnnotationInteractionListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSelectAnnotation(param0: T): void; onDeselectAnnotation(param0: T): void });
            public constructor();
            public onSelectAnnotation(param0: T): void;
            public onDeselectAnnotation(param0: T): void;
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
        export module annotation {
          export class OnAnnotationLongClickListener<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.maps.plugin.annotation.OnAnnotationLongClickListener<any>>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.annotation.OnAnnotationLongClickListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAnnotationLongClick(param0: T): boolean });
            public constructor();
            public onAnnotationLongClick(param0: T): boolean;
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
          export class Attribution {
            public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.Attribution>;
            public static OSM: string;
            public static OSM_ABBR: string;
            public static TELEMETRY_SETTINGS: string;
            public static ABOUT_MAPS_URL: string;
            public static ABOUT_TELEMETRY_URL: string;
            public getTitleAbbreviated(): string;
            public component2(): string;
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getUrl(): string;
            public copy(param0: string, param1: string): com.mapbox.maps.plugin.attribution.Attribution;
            public constructor(param0: string, param1: string);
            public toString(): string;
            public getTitle(): string;
          }
          export module Attribution {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.Attribution.Companion>;
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
          export class AttributionDialogManager {
            public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.AttributionDialogManager>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.attribution.AttributionDialogManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { showAttribution(param0: com.mapbox.maps.plugin.delegates.MapAttributionDelegate): void; onStop(): void });
            public constructor();
            public showAttribution(param0: com.mapbox.maps.plugin.delegates.MapAttributionDelegate): void;
            public onStop(): void;
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
          export class AttributionParserConfig {
            public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.AttributionParserConfig>;
            public constructor();
            public setWithCopyrightSign(param0: boolean): void;
            public getWithImproveMap(): boolean;
            public getWithTelemetryAttribution(): boolean;
            public setWithMapboxAttribution(param0: boolean): void;
            public constructor(param0: boolean, param1: boolean, param2: boolean);
            public setWithImproveMap(param0: boolean): void;
            public setWithTelemetryAttribution(param0: boolean): void;
            public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean);
            public getWithCopyrightSign(): boolean;
            public constructor(param0: boolean);
            public getWithMapboxAttribution(): boolean;
            public constructor(param0: boolean, param1: boolean);
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
          export class AttributionPlugin implements com.mapbox.maps.plugin.ViewPlugin, com.mapbox.maps.plugin.LifecyclePlugin, com.mapbox.maps.plugin.attribution.generated.AttributionSettingsInterface {
            public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.AttributionPlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.attribution.AttributionPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              setCustomAttributionDialogManager(param0: com.mapbox.maps.plugin.attribution.AttributionDialogManager): void;
              getMapAttributionDelegate(): com.mapbox.maps.plugin.delegates.MapAttributionDelegate;
              bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
              onPluginView(param0: globalAndroid.view.View): void;
              onStart(): void;
              onStop(): void;
              getSettings(): com.mapbox.maps.plugin.attribution.generated.AttributionSettings;
              updateSettings(param0: any): void;
              getEnabled(): boolean;
              setEnabled(param0: boolean): void;
              getIconColor(): number;
              setIconColor(param0: number): void;
              getPosition(): number;
              setPosition(param0: number): void;
              getMarginLeft(): number;
              setMarginLeft(param0: number): void;
              getMarginTop(): number;
              setMarginTop(param0: number): void;
              getMarginRight(): number;
              setMarginRight(param0: number): void;
              getMarginBottom(): number;
              setMarginBottom(param0: number): void;
              getClickable(): boolean;
              setClickable(param0: boolean): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            });
            public constructor();
            public setIconColor(param0: number): void;
            public getMapAttributionDelegate(): com.mapbox.maps.plugin.delegates.MapAttributionDelegate;
            public getClickable(): boolean;
            public getMarginTop(): number;
            public cleanup(): void;
            public getSettings(): com.mapbox.maps.plugin.attribution.generated.AttributionSettings;
            public setMarginRight(param0: number): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public getMarginLeft(): number;
            public setMarginTop(param0: number): void;
            public setClickable(param0: boolean): void;
            public bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
            public getPosition(): number;
            public getMarginBottom(): number;
            public setCustomAttributionDialogManager(param0: com.mapbox.maps.plugin.attribution.AttributionDialogManager): void;
            public updateSettings(param0: any): void;
            public onStop(): void;
            public setEnabled(param0: boolean): void;
            public getEnabled(): boolean;
            public setMarginLeft(param0: number): void;
            public setMarginBottom(param0: number): void;
            public initialize(): void;
            public onPluginView(param0: globalAndroid.view.View): void;
            public getIconColor(): number;
            public setPosition(param0: number): void;
            public onStart(): void;
            public getMarginRight(): number;
          }
          export module AttributionPlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.AttributionPlugin.DefaultImpls>;
              public static onStart(param0: com.mapbox.maps.plugin.attribution.AttributionPlugin): void;
              public static onPluginView(param0: com.mapbox.maps.plugin.attribution.AttributionPlugin, param1: globalAndroid.view.View): void;
              public static cleanup(param0: com.mapbox.maps.plugin.attribution.AttributionPlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.attribution.AttributionPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              public static onStop(param0: com.mapbox.maps.plugin.attribution.AttributionPlugin): void;
              public static initialize(param0: com.mapbox.maps.plugin.attribution.AttributionPlugin): void;
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
          export class AttributionView {
            public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.AttributionView>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.attribution.AttributionView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { setEnable(param0: boolean): void; setGravity(param0: number): void; setIconColor(param0: number): void; setAttributionMargins(param0: number, param1: number, param2: number, param3: number): void; setViewOnClickListener(param0: globalAndroid.view.View.OnClickListener): void; requestLayout(): void });
            public constructor();
            public setViewOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
            public setIconColor(param0: number): void;
            public requestLayout(): void;
            public setAttributionMargins(param0: number, param1: number, param2: number, param3: number): void;
            public setEnable(param0: boolean): void;
            public setGravity(param0: number): void;
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
          export class OnAttributionClickListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.OnAttributionClickListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.attribution.OnAttributionClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAttributionClick(): void });
            public constructor();
            public onAttributionClick(): void;
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
            export class AttributionSettings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.generated.AttributionSettings>;
              public getPosition(): number;
              public component1(): boolean;
              public hashCode(): number;
              public component2(): number;
              public setClickable(param0: boolean): void;
              public component5(): number;
              public toString(): string;
              public getMarginTop(): number;
              public getClickable(): boolean;
              public copy(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean): com.mapbox.maps.plugin.attribution.generated.AttributionSettings;
              public component8(): boolean;
              public getMarginRight(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number);
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number);
              public getEnabled(): boolean;
              public setMarginTop(param0: number): void;
              public constructor(param0: boolean, param1: number, param2: number, param3: number);
              public component6(): number;
              public component3(): number;
              public constructor(param0: boolean, param1: number, param2: number);
              public setEnabled(param0: boolean): void;
              public getMarginLeft(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
              public constructor();
              public component7(): number;
              public getMarginBottom(): number;
              public getIconColor(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean);
              public setMarginRight(param0: number): void;
              public setIconColor(param0: number): void;
              public setPosition(param0: number): void;
              public component4(): number;
              public setMarginLeft(param0: number): void;
              public constructor(param0: boolean);
              public setMarginBottom(param0: number): void;
              public equals(param0: any): boolean;
              public constructor(param0: boolean, param1: number);
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
          export module generated {
            export abstract class AttributionSettingsBase extends com.mapbox.maps.plugin.attribution.generated.AttributionSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.generated.AttributionSettingsBase>;
              public constructor();
              public getSettings(): com.mapbox.maps.plugin.attribution.generated.AttributionSettings;
              public getPosition(): number;
              public setClickable(param0: boolean): void;
              public getMarginBottom(): number;
              public getIconColor(): number;
              public getMarginTop(): number;
              public getClickable(): boolean;
              public getInternalSettings(): com.mapbox.maps.plugin.attribution.generated.AttributionSettings;
              public setMarginRight(param0: number): void;
              public setIconColor(param0: number): void;
              public getMarginRight(): number;
              public setPosition(param0: number): void;
              public getEnabled(): boolean;
              public setMarginTop(param0: number): void;
              public setInternalSettings(param0: com.mapbox.maps.plugin.attribution.generated.AttributionSettings): void;
              public setMarginLeft(param0: number): void;
              public updateSettings(param0: any): void;
              public setEnabled(param0: boolean): void;
              public applySettings(): void;
              public setMarginBottom(param0: number): void;
              public getMarginLeft(): number;
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
          export module generated {
            export class AttributionSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.attribution.generated.AttributionSettingsInterface>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.attribution.generated.AttributionSettingsInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getSettings(): com.mapbox.maps.plugin.attribution.generated.AttributionSettings; updateSettings(param0: any): void; getEnabled(): boolean; setEnabled(param0: boolean): void; getIconColor(): number; setIconColor(param0: number): void; getPosition(): number; setPosition(param0: number): void; getMarginLeft(): number; setMarginLeft(param0: number): void; getMarginTop(): number; setMarginTop(param0: number): void; getMarginRight(): number; setMarginRight(param0: number): void; getMarginBottom(): number; setMarginBottom(param0: number): void; getClickable(): boolean; setClickable(param0: boolean): void });
              public constructor();
              public getSettings(): com.mapbox.maps.plugin.attribution.generated.AttributionSettings;
              public getPosition(): number;
              public setClickable(param0: boolean): void;
              public getMarginBottom(): number;
              public getIconColor(): number;
              public getMarginTop(): number;
              public getClickable(): boolean;
              public setMarginRight(param0: number): void;
              public setIconColor(param0: number): void;
              public getMarginRight(): number;
              public setPosition(param0: number): void;
              public getEnabled(): boolean;
              public setMarginTop(param0: number): void;
              public setMarginLeft(param0: number): void;
              public updateSettings(param0: any): void;
              public setEnabled(param0: boolean): void;
              public setMarginBottom(param0: number): void;
              public getMarginLeft(): number;
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
        export module compass {
          export class CompassPlugin implements com.mapbox.maps.plugin.ViewPlugin, com.mapbox.maps.plugin.MapCameraPlugin, com.mapbox.maps.plugin.LifecyclePlugin, com.mapbox.maps.plugin.compass.generated.CompassSettingsInterface {
            public static class: java.lang.Class<com.mapbox.maps.plugin.compass.CompassPlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.compass.CompassPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              addCompassClickListener(param0: com.mapbox.maps.plugin.compass.OnCompassClickListener): void;
              removeCompassClickListener(param0: com.mapbox.maps.plugin.compass.OnCompassClickListener): void;
              onCompassClicked(): void;
              bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
              onPluginView(param0: globalAndroid.view.View): void;
              onCameraMove(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidNative.Array<java.lang.Double>): void;
              onStart(): void;
              onStop(): void;
              getSettings(): com.mapbox.maps.plugin.compass.generated.CompassSettings;
              updateSettings(param0: any): void;
              getEnabled(): boolean;
              setEnabled(param0: boolean): void;
              getPosition(): number;
              setPosition(param0: number): void;
              getMarginLeft(): number;
              setMarginLeft(param0: number): void;
              getMarginTop(): number;
              setMarginTop(param0: number): void;
              getMarginRight(): number;
              setMarginRight(param0: number): void;
              getMarginBottom(): number;
              setMarginBottom(param0: number): void;
              getOpacity(): number;
              setOpacity(param0: number): void;
              getRotation(): number;
              setRotation(param0: number): void;
              getVisibility(): boolean;
              setVisibility(param0: boolean): void;
              getFadeWhenFacingNorth(): boolean;
              setFadeWhenFacingNorth(param0: boolean): void;
              getClickable(): boolean;
              setClickable(param0: boolean): void;
              getImage(): globalAndroid.graphics.drawable.Drawable;
              setImage(param0: globalAndroid.graphics.drawable.Drawable): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            });
            public constructor();
            public getSettings(): com.mapbox.maps.plugin.compass.generated.CompassSettings;
            public removeCompassClickListener(param0: com.mapbox.maps.plugin.compass.OnCompassClickListener): void;
            public onCompassClicked(): void;
            public setFadeWhenFacingNorth(param0: boolean): void;
            public getClickable(): boolean;
            public setVisibility(param0: boolean): void;
            public getFadeWhenFacingNorth(): boolean;
            public setRotation(param0: number): void;
            public getMarginTop(): number;
            public cleanup(): void;
            public getRotation(): number;
            public setMarginRight(param0: number): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public getMarginLeft(): number;
            public setOpacity(param0: number): void;
            public getVisibility(): boolean;
            public setMarginTop(param0: number): void;
            public onCameraMove(param0: number, param1: number, param2: number, param3: number, param4: number, param5: androidNative.Array<java.lang.Double>): void;
            public setClickable(param0: boolean): void;
            public bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
            public getPosition(): number;
            public getMarginBottom(): number;
            public getOpacity(): number;
            public updateSettings(param0: any): void;
            public onStop(): void;
            public setEnabled(param0: boolean): void;
            public getImage(): globalAndroid.graphics.drawable.Drawable;
            public getEnabled(): boolean;
            public setMarginLeft(param0: number): void;
            public setMarginBottom(param0: number): void;
            public initialize(): void;
            public onPluginView(param0: globalAndroid.view.View): void;
            public addCompassClickListener(param0: com.mapbox.maps.plugin.compass.OnCompassClickListener): void;
            public setPosition(param0: number): void;
            public setImage(param0: globalAndroid.graphics.drawable.Drawable): void;
            public onStart(): void;
            public getMarginRight(): number;
          }
          export module CompassPlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.compass.CompassPlugin.DefaultImpls>;
              public static onPluginView(param0: com.mapbox.maps.plugin.compass.CompassPlugin, param1: globalAndroid.view.View): void;
              public static onStop(param0: com.mapbox.maps.plugin.compass.CompassPlugin): void;
              public static onStart(param0: com.mapbox.maps.plugin.compass.CompassPlugin): void;
              public static initialize(param0: com.mapbox.maps.plugin.compass.CompassPlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.compass.CompassPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              public static cleanup(param0: com.mapbox.maps.plugin.compass.CompassPlugin): void;
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
        export module compass {
          export class CompassView {
            public static class: java.lang.Class<com.mapbox.maps.plugin.compass.CompassView>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.compass.CompassView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { isCompassVisible(): boolean; setCompassVisible(param0: boolean): void; isCompassEnabled(): boolean; setCompassEnabled(param0: boolean): void; getCompassImage(): globalAndroid.graphics.drawable.Drawable; setCompassImage(param0: globalAndroid.graphics.drawable.Drawable): void; getCompassGravity(): number; setCompassGravity(param0: number): void; getCompassRotation(): number; setCompassRotation(param0: number): void; setCompassAlpha(param0: number): void; setCompassMargins(param0: number, param1: number, param2: number, param3: number): void; requestLayout(): void });
            public constructor();
            public getCompassGravity(): number;
            public setCompassGravity(param0: number): void;
            public getCompassRotation(): number;
            public setCompassAlpha(param0: number): void;
            public setCompassEnabled(param0: boolean): void;
            public isCompassEnabled(): boolean;
            public isCompassVisible(): boolean;
            public setCompassRotation(param0: number): void;
            public requestLayout(): void;
            public getCompassImage(): globalAndroid.graphics.drawable.Drawable;
            public setCompassVisible(param0: boolean): void;
            public setCompassMargins(param0: number, param1: number, param2: number, param3: number): void;
            public setCompassImage(param0: globalAndroid.graphics.drawable.Drawable): void;
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
        export module compass {
          export class OnCompassClickListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.compass.OnCompassClickListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.compass.OnCompassClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCompassClick(): void });
            public constructor();
            public onCompassClick(): void;
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
        export module compass {
          export module generated {
            export class CompassSettings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.compass.generated.CompassSettings>;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean, param9: boolean, param10: boolean, param11: globalAndroid.graphics.drawable.Drawable);
              public copy(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean, param9: boolean, param10: boolean, param11: globalAndroid.graphics.drawable.Drawable): com.mapbox.maps.plugin.compass.generated.CompassSettings;
              public getPosition(): number;
              public component2(): number;
              public component10(): boolean;
              public setClickable(param0: boolean): void;
              public component5(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean, param9: boolean, param10: boolean);
              public getMarginRight(): number;
              public getEnabled(): boolean;
              public setMarginTop(param0: number): void;
              public component11(): boolean;
              public constructor(param0: boolean, param1: number, param2: number);
              public setEnabled(param0: boolean): void;
              public setRotation(param0: number): void;
              public getMarginLeft(): number;
              public setImage(param0: globalAndroid.graphics.drawable.Drawable): void;
              public setOpacity(param0: number): void;
              public getRotation(): number;
              public setPosition(param0: number): void;
              public component4(): number;
              public setMarginLeft(param0: number): void;
              public constructor(param0: boolean);
              public equals(param0: any): boolean;
              public component1(): boolean;
              public hashCode(): number;
              public getFadeWhenFacingNorth(): boolean;
              public toString(): string;
              public getMarginTop(): number;
              public getClickable(): boolean;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number);
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number);
              public setVisibility(param0: boolean): void;
              public component9(): boolean;
              public constructor(param0: boolean, param1: number, param2: number, param3: number);
              public component6(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean);
              public component3(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
              public getVisibility(): boolean;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
              public constructor();
              public component12(): globalAndroid.graphics.drawable.Drawable;
              public getImage(): globalAndroid.graphics.drawable.Drawable;
              public component7(): number;
              public getMarginBottom(): number;
              public setMarginRight(param0: number): void;
              public setFadeWhenFacingNorth(param0: boolean): void;
              public component8(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean, param9: boolean);
              public getOpacity(): number;
              public setMarginBottom(param0: number): void;
              public constructor(param0: boolean, param1: number);
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
        export module compass {
          export module generated {
            export abstract class CompassSettingsBase extends com.mapbox.maps.plugin.compass.generated.CompassSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.compass.generated.CompassSettingsBase>;
              public setInternalSettings(param0: com.mapbox.maps.plugin.compass.generated.CompassSettings): void;
              public getPosition(): number;
              public getFadeWhenFacingNorth(): boolean;
              public setClickable(param0: boolean): void;
              public getMarginTop(): number;
              public getClickable(): boolean;
              public getMarginRight(): number;
              public getSettings(): com.mapbox.maps.plugin.compass.generated.CompassSettings;
              public getEnabled(): boolean;
              public setMarginTop(param0: number): void;
              public setVisibility(param0: boolean): void;
              public getInternalSettings(): com.mapbox.maps.plugin.compass.generated.CompassSettings;
              public updateSettings(param0: any): void;
              public setEnabled(param0: boolean): void;
              public setRotation(param0: number): void;
              public getMarginLeft(): number;
              public constructor();
              public getVisibility(): boolean;
              public setImage(param0: globalAndroid.graphics.drawable.Drawable): void;
              public setOpacity(param0: number): void;
              public getImage(): globalAndroid.graphics.drawable.Drawable;
              public getMarginBottom(): number;
              public getRotation(): number;
              public setMarginRight(param0: number): void;
              public setFadeWhenFacingNorth(param0: boolean): void;
              public setPosition(param0: number): void;
              public setMarginLeft(param0: number): void;
              public getOpacity(): number;
              public applySettings(): void;
              public setMarginBottom(param0: number): void;
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
        export module compass {
          export module generated {
            export class CompassSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.compass.generated.CompassSettingsInterface>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.compass.generated.CompassSettingsInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getSettings(): com.mapbox.maps.plugin.compass.generated.CompassSettings;
                updateSettings(param0: any): void;
                getEnabled(): boolean;
                setEnabled(param0: boolean): void;
                getPosition(): number;
                setPosition(param0: number): void;
                getMarginLeft(): number;
                setMarginLeft(param0: number): void;
                getMarginTop(): number;
                setMarginTop(param0: number): void;
                getMarginRight(): number;
                setMarginRight(param0: number): void;
                getMarginBottom(): number;
                setMarginBottom(param0: number): void;
                getOpacity(): number;
                setOpacity(param0: number): void;
                getRotation(): number;
                setRotation(param0: number): void;
                getVisibility(): boolean;
                setVisibility(param0: boolean): void;
                getFadeWhenFacingNorth(): boolean;
                setFadeWhenFacingNorth(param0: boolean): void;
                getClickable(): boolean;
                setClickable(param0: boolean): void;
                getImage(): globalAndroid.graphics.drawable.Drawable;
                setImage(param0: globalAndroid.graphics.drawable.Drawable): void;
              });
              public constructor();
              public getPosition(): number;
              public getFadeWhenFacingNorth(): boolean;
              public setClickable(param0: boolean): void;
              public getMarginTop(): number;
              public getClickable(): boolean;
              public getMarginRight(): number;
              public getSettings(): com.mapbox.maps.plugin.compass.generated.CompassSettings;
              public getEnabled(): boolean;
              public setMarginTop(param0: number): void;
              public setVisibility(param0: boolean): void;
              public updateSettings(param0: any): void;
              public setEnabled(param0: boolean): void;
              public setRotation(param0: number): void;
              public getMarginLeft(): number;
              public getVisibility(): boolean;
              public setImage(param0: globalAndroid.graphics.drawable.Drawable): void;
              public setOpacity(param0: number): void;
              public getImage(): globalAndroid.graphics.drawable.Drawable;
              public getMarginBottom(): number;
              public getRotation(): number;
              public setMarginRight(param0: number): void;
              public setFadeWhenFacingNorth(param0: boolean): void;
              public setPosition(param0: number): void;
              public setMarginLeft(param0: number): void;
              public getOpacity(): number;
              public setMarginBottom(param0: number): void;
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
        export module delegates {
          export class MapAttributionDelegate {
            public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapAttributionDelegate>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.delegates.MapAttributionDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { telemetry(): com.mapbox.maps.module.MapTelemetry; parseAttributions(param0: globalAndroid.content.Context, param1: com.mapbox.maps.plugin.attribution.AttributionParserConfig): java.util.List<com.mapbox.maps.plugin.attribution.Attribution>; buildMapBoxFeedbackUrl(param0: globalAndroid.content.Context): string });
            public constructor();
            public parseAttributions(param0: globalAndroid.content.Context, param1: com.mapbox.maps.plugin.attribution.AttributionParserConfig): java.util.List<com.mapbox.maps.plugin.attribution.Attribution>;
            public buildMapBoxFeedbackUrl(param0: globalAndroid.content.Context): string;
            public telemetry(): com.mapbox.maps.module.MapTelemetry;
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
        export module delegates {
          export class MapCameraManagerDelegate {
            public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getCameraState(): com.mapbox.maps.CameraState;
              cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
              cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
              cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
              cameraForGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
              coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
              coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
              coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
              coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
              pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
              coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
              coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
              pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
              coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
              coordinatesInfoForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.maps.CoordinateInfo>;
              setCamera(param0: com.mapbox.maps.CameraOptions): void;
              setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
              getFreeCameraOptions(): com.mapbox.maps.FreeCameraOptions;
              setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
              getBounds(): com.mapbox.maps.CameraBounds;
              dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
              getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
              dragEnd(): void;
            });
            public constructor();
            public cameraForCoordinateBounds(param0: com.mapbox.maps.CoordinateBounds, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
            public coordinateBoundsForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
            public coordinatesForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.geojson.Point>;
            public cameraForGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
            public dragEnd(): void;
            public getCameraState(): com.mapbox.maps.CameraState;
            public coordinateForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.geojson.Point;
            public pixelsForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.maps.ScreenCoordinate>;
            public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.EdgeInsets, param2: java.lang.Double, param3: java.lang.Double): com.mapbox.maps.CameraOptions;
            public cameraForCoordinates(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.maps.CameraOptions, param2: com.mapbox.maps.ScreenBox): com.mapbox.maps.CameraOptions;
            public coordinateBoundsZoomForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
            public getBounds(): com.mapbox.maps.CameraBounds;
            public setCamera(param0: com.mapbox.maps.CameraOptions): void;
            public getFreeCameraOptions(): com.mapbox.maps.FreeCameraOptions;
            public setBounds(param0: com.mapbox.maps.CameraBoundsOptions): com.mapbox.bindgen.Expected<string, com.mapbox.bindgen.None>;
            public coordinateBoundsZoomForCameraUnwrapped(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBoundsZoom;
            public coordinateInfoForPixel(param0: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CoordinateInfo;
            public coordinatesInfoForPixels(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>): java.util.List<com.mapbox.maps.CoordinateInfo>;
            public setCamera(param0: com.mapbox.maps.FreeCameraOptions): void;
            public pixelForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ScreenCoordinate;
            public getDragCameraOptions(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.ScreenCoordinate): com.mapbox.maps.CameraOptions;
            public coordinateBoundsForCamera(param0: com.mapbox.maps.CameraOptions): com.mapbox.maps.CoordinateBounds;
            public dragStart(param0: com.mapbox.maps.ScreenCoordinate): void;
          }
          export module MapCameraManagerDelegate {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate.DefaultImpls>;
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
        export module delegates {
          export class MapDelegateProvider {
            public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapDelegateProvider>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.delegates.MapDelegateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getMapCameraManagerDelegate(): com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate; getMapProjectionDelegate(): com.mapbox.maps.plugin.delegates.MapProjectionDelegate; getMapTransformDelegate(): com.mapbox.maps.plugin.delegates.MapTransformDelegate; getMapAttributionDelegate(): com.mapbox.maps.plugin.delegates.MapAttributionDelegate; getStyle(param0: any): void; getMapPluginProviderDelegate(): com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate; getMapFeatureQueryDelegate(): com.mapbox.maps.plugin.delegates.MapFeatureQueryDelegate; getMapListenerDelegate(): com.mapbox.maps.plugin.delegates.MapListenerDelegate; getStyleStateDelegate(): com.mapbox.maps.plugin.delegates.MapStyleStateDelegate });
            public constructor();
            public getMapFeatureQueryDelegate(): com.mapbox.maps.plugin.delegates.MapFeatureQueryDelegate;
            public getMapTransformDelegate(): com.mapbox.maps.plugin.delegates.MapTransformDelegate;
            public getMapProjectionDelegate(): com.mapbox.maps.plugin.delegates.MapProjectionDelegate;
            public getStyleStateDelegate(): com.mapbox.maps.plugin.delegates.MapStyleStateDelegate;
            public getMapCameraManagerDelegate(): com.mapbox.maps.plugin.delegates.MapCameraManagerDelegate;
            public getMapAttributionDelegate(): com.mapbox.maps.plugin.delegates.MapAttributionDelegate;
            public getMapListenerDelegate(): com.mapbox.maps.plugin.delegates.MapListenerDelegate;
            public getStyle(param0: any): void;
            public getMapPluginProviderDelegate(): com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate;
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
        export module delegates {
          export class MapFeatureQueryDelegate {
            public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapFeatureQueryDelegate>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.delegates.MapFeatureQueryDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              queryRenderedFeatures(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
              queryRenderedFeatures(param0: com.mapbox.maps.ScreenBox, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
              queryRenderedFeatures(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
              queryRenderedFeatures(param0: com.mapbox.maps.RenderedQueryGeometry, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): com.mapbox.common.Cancelable;
              querySourceFeatures(param0: string, param1: com.mapbox.maps.SourceQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
              executeOnRenderThread(param0: java.lang.Runnable): void;
            });
            public constructor();
            public querySourceFeatures(param0: string, param1: com.mapbox.maps.SourceQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
            /** @deprecated */
            public queryRenderedFeatures(param0: com.mapbox.maps.ScreenBox, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
            public queryRenderedFeatures(param0: com.mapbox.maps.RenderedQueryGeometry, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): com.mapbox.common.Cancelable;
            public executeOnRenderThread(param0: java.lang.Runnable): void;
            /** @deprecated */
            public queryRenderedFeatures(param0: java.util.List<com.mapbox.maps.ScreenCoordinate>, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
            /** @deprecated */
            public queryRenderedFeatures(param0: com.mapbox.maps.ScreenCoordinate, param1: com.mapbox.maps.RenderedQueryOptions, param2: com.mapbox.maps.QueryFeaturesCallback): void;
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
        export module delegates {
          export class MapListenerDelegate {
            public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapListenerDelegate>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.delegates.MapListenerDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              addOnCameraChangeListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener): void;
              removeOnCameraChangeListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener): void;
              addOnMapIdleListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener): void;
              removeOnMapIdleListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener): void;
              addOnMapLoadErrorListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
              removeOnMapLoadErrorListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
              addOnMapLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener): void;
              removeOnMapLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener): void;
              addOnRenderFrameStartedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener): void;
              removeOnRenderFrameStartedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener): void;
              addOnRenderFrameFinishedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener): void;
              removeOnRenderFrameFinishedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener): void;
              addOnSourceAddedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener): void;
              removeOnSourceAddedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener): void;
              addOnSourceDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener): void;
              removeOnSourceDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener): void;
              addOnSourceRemovedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener): void;
              removeOnSourceRemovedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener): void;
              addOnStyleDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener): void;
              removeOnStyleDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener): void;
              addOnStyleLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener): void;
              removeOnStyleLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener): void;
              addOnStyleImageMissingListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener): void;
              removeOnStyleImageMissingListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener): void;
              addOnStyleImageUnusedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener): void;
              removeOnStyleImageUnusedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener): void;
            });
            public constructor();
            public addOnMapIdleListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener): void;
            public removeOnStyleImageUnusedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener): void;
            public removeOnRenderFrameStartedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener): void;
            public removeOnMapLoadErrorListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
            public addOnStyleImageUnusedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener): void;
            public addOnStyleDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener): void;
            public addOnSourceRemovedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener): void;
            public removeOnMapLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener): void;
            public removeOnStyleLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener): void;
            public addOnStyleImageMissingListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener): void;
            public addOnRenderFrameStartedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener): void;
            public removeOnCameraChangeListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener): void;
            public removeOnStyleImageMissingListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener): void;
            public removeOnSourceAddedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener): void;
            public addOnSourceAddedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener): void;
            public removeOnSourceDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener): void;
            public removeOnStyleDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener): void;
            public removeOnSourceRemovedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener): void;
            public addOnMapLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener): void;
            public addOnCameraChangeListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener): void;
            public removeOnMapIdleListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener): void;
            public removeOnRenderFrameFinishedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener): void;
            public addOnMapLoadErrorListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener): void;
            public addOnRenderFrameFinishedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener): void;
            public addOnStyleLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener): void;
            public addOnSourceDataLoadedListener(param0: com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener): void;
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
        export module delegates {
          export class MapPluginExtensionsDelegate {
            public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.delegates.MapPluginExtensionsDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { cameraAnimationsPlugin(param0: any): any; gesturesPlugin(param0: any): any });
            public constructor();
            public cameraAnimationsPlugin(param0: any): any;
            public gesturesPlugin(param0: any): any;
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
        export module delegates {
          export class MapPluginProviderDelegate {
            public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.delegates.MapPluginProviderDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getPlugin(param0: string): com.mapbox.maps.plugin.MapPlugin });
            public constructor();
            public getPlugin(param0: string): com.mapbox.maps.plugin.MapPlugin;
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
        export module delegates {
          export class MapProjectionDelegate {
            public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapProjectionDelegate>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.delegates.MapProjectionDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getMetersPerPixelAtLatitude(param0: number, param1: number): number; getMetersPerPixelAtLatitude(param0: number): number; projectedMetersForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ProjectedMeters; coordinateForProjectedMeters(param0: com.mapbox.maps.ProjectedMeters): com.mapbox.geojson.Point; project(param0: com.mapbox.geojson.Point, param1: number): com.mapbox.maps.MercatorCoordinate; unproject(param0: com.mapbox.maps.MercatorCoordinate, param1: number): com.mapbox.geojson.Point });
            public constructor();
            public projectedMetersForCoordinate(param0: com.mapbox.geojson.Point): com.mapbox.maps.ProjectedMeters;
            public project(param0: com.mapbox.geojson.Point, param1: number): com.mapbox.maps.MercatorCoordinate;
            public unproject(param0: com.mapbox.maps.MercatorCoordinate, param1: number): com.mapbox.geojson.Point;
            public getMetersPerPixelAtLatitude(param0: number, param1: number): number;
            public getMetersPerPixelAtLatitude(param0: number): number;
            public coordinateForProjectedMeters(param0: com.mapbox.maps.ProjectedMeters): com.mapbox.geojson.Point;
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
        export module delegates {
          export class MapStyleStateDelegate {
            public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapStyleStateDelegate>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.delegates.MapStyleStateDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { isFullyLoaded(): boolean });
            public constructor();
            /** @deprecated */
            public isFullyLoaded(): boolean;
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
        export module delegates {
          export class MapTransformDelegate {
            public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.MapTransformDelegate>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.delegates.MapTransformDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { setGestureInProgress(param0: boolean): void; isGestureInProgress(): boolean; setNorthOrientation(param0: com.mapbox.maps.NorthOrientation): void; setConstrainMode(param0: com.mapbox.maps.ConstrainMode): void; setViewportMode(param0: com.mapbox.maps.ViewportMode): void; setUserAnimationInProgress(param0: boolean): void; isUserAnimationInProgress(): boolean; getMapOptions(): com.mapbox.maps.MapOptions; getSize(): com.mapbox.maps.Size });
            public constructor();
            public setViewportMode(param0: com.mapbox.maps.ViewportMode): void;
            public isUserAnimationInProgress(): boolean;
            public setConstrainMode(param0: com.mapbox.maps.ConstrainMode): void;
            public setUserAnimationInProgress(param0: boolean): void;
            public getSize(): com.mapbox.maps.Size;
            public isGestureInProgress(): boolean;
            public setGestureInProgress(param0: boolean): void;
            public setNorthOrientation(param0: com.mapbox.maps.NorthOrientation): void;
            public getMapOptions(): com.mapbox.maps.MapOptions;
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
        export module delegates {
          export module listeners {
            export class OnCameraChangeListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnCameraChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onCameraChanged(param0: com.mapbox.maps.extension.observable.eventdata.CameraChangedEventData): void });
              public constructor();
              public onCameraChanged(param0: com.mapbox.maps.extension.observable.eventdata.CameraChangedEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnMapIdleListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnMapIdleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onMapIdle(param0: com.mapbox.maps.extension.observable.eventdata.MapIdleEventData): void });
              public constructor();
              public onMapIdle(param0: com.mapbox.maps.extension.observable.eventdata.MapIdleEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnMapLoadErrorListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnMapLoadErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onMapLoadError(param0: com.mapbox.maps.extension.observable.eventdata.MapLoadingErrorEventData): void });
              public constructor();
              public onMapLoadError(param0: com.mapbox.maps.extension.observable.eventdata.MapLoadingErrorEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnMapLoadedListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnMapLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onMapLoaded(param0: com.mapbox.maps.extension.observable.eventdata.MapLoadedEventData): void });
              public constructor();
              public onMapLoaded(param0: com.mapbox.maps.extension.observable.eventdata.MapLoadedEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnRenderFrameFinishedListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameFinishedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRenderFrameFinished(param0: com.mapbox.maps.extension.observable.eventdata.RenderFrameFinishedEventData): void });
              public constructor();
              public onRenderFrameFinished(param0: com.mapbox.maps.extension.observable.eventdata.RenderFrameFinishedEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnRenderFrameStartedListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnRenderFrameStartedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRenderFrameStarted(param0: com.mapbox.maps.extension.observable.eventdata.RenderFrameStartedEventData): void });
              public constructor();
              public onRenderFrameStarted(param0: com.mapbox.maps.extension.observable.eventdata.RenderFrameStartedEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnSourceAddedListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnSourceAddedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onSourceAdded(param0: com.mapbox.maps.extension.observable.eventdata.SourceAddedEventData): void });
              public constructor();
              public onSourceAdded(param0: com.mapbox.maps.extension.observable.eventdata.SourceAddedEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnSourceDataLoadedListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnSourceDataLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onSourceDataLoaded(param0: com.mapbox.maps.extension.observable.eventdata.SourceDataLoadedEventData): void });
              public constructor();
              public onSourceDataLoaded(param0: com.mapbox.maps.extension.observable.eventdata.SourceDataLoadedEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnSourceRemovedListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnSourceRemovedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onSourceRemoved(param0: com.mapbox.maps.extension.observable.eventdata.SourceRemovedEventData): void });
              public constructor();
              public onSourceRemoved(param0: com.mapbox.maps.extension.observable.eventdata.SourceRemovedEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnStyleDataLoadedListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnStyleDataLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onStyleDataLoaded(param0: com.mapbox.maps.extension.observable.eventdata.StyleDataLoadedEventData): void });
              public constructor();
              public onStyleDataLoaded(param0: com.mapbox.maps.extension.observable.eventdata.StyleDataLoadedEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnStyleImageMissingListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnStyleImageMissingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onStyleImageMissing(param0: com.mapbox.maps.extension.observable.eventdata.StyleImageMissingEventData): void });
              public constructor();
              public onStyleImageMissing(param0: com.mapbox.maps.extension.observable.eventdata.StyleImageMissingEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnStyleImageUnusedListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnStyleImageUnusedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onStyleImageUnused(param0: com.mapbox.maps.extension.observable.eventdata.StyleImageUnusedEventData): void });
              public constructor();
              public onStyleImageUnused(param0: com.mapbox.maps.extension.observable.eventdata.StyleImageUnusedEventData): void;
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
        export module delegates {
          export module listeners {
            export class OnStyleLoadedListener {
              public static class: java.lang.Class<com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.delegates.listeners.OnStyleLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onStyleLoaded(param0: com.mapbox.maps.extension.observable.eventdata.StyleLoadedEventData): void });
              public constructor();
              public onStyleLoaded(param0: com.mapbox.maps.extension.observable.eventdata.StyleLoadedEventData): void;
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
        export module gestures {
          export class GesturesPlugin implements com.mapbox.maps.plugin.MapPlugin, com.mapbox.maps.plugin.ContextBinder, com.mapbox.maps.plugin.MapSizePlugin, com.mapbox.maps.plugin.gestures.generated.GesturesSettingsInterface {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesPlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.gestures.GesturesPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
              onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
              addOnMapClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapClickListener): void;
              removeOnMapClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapClickListener): void;
              addOnMapLongClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapLongClickListener): void;
              removeOnMapLongClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapLongClickListener): void;
              setGesturesManager(param0: com.mapbox.android.gestures.AndroidGesturesManager, param1: boolean, param2: boolean): void;
              getGesturesManager(): com.mapbox.android.gestures.AndroidGesturesManager;
              addOnRotateListener(param0: com.mapbox.maps.plugin.gestures.OnRotateListener): void;
              removeOnRotateListener(param0: com.mapbox.maps.plugin.gestures.OnRotateListener): void;
              addOnFlingListener(param0: com.mapbox.maps.plugin.gestures.OnFlingListener): void;
              removeOnFlingListener(param0: com.mapbox.maps.plugin.gestures.OnFlingListener): void;
              addOnMoveListener(param0: com.mapbox.maps.plugin.gestures.OnMoveListener): void;
              removeOnMoveListener(param0: com.mapbox.maps.plugin.gestures.OnMoveListener): void;
              addOnScaleListener(param0: com.mapbox.maps.plugin.gestures.OnScaleListener): void;
              removeOnScaleListener(param0: com.mapbox.maps.plugin.gestures.OnScaleListener): void;
              addOnShoveListener(param0: com.mapbox.maps.plugin.gestures.OnShoveListener): void;
              removeOnShoveListener(param0: com.mapbox.maps.plugin.gestures.OnShoveListener): void;
              addProtectedAnimationOwner(param0: string): void;
              removeProtectedAnimationOwner(param0: string): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              bind(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void;
              onSizeChanged(param0: number, param1: number): void;
              getSettings(): com.mapbox.maps.plugin.gestures.generated.GesturesSettings;
              updateSettings(param0: any): void;
              getRotateEnabled(): boolean;
              setRotateEnabled(param0: boolean): void;
              getPinchToZoomEnabled(): boolean;
              setPinchToZoomEnabled(param0: boolean): void;
              getScrollEnabled(): boolean;
              setScrollEnabled(param0: boolean): void;
              getSimultaneousRotateAndPinchToZoomEnabled(): boolean;
              setSimultaneousRotateAndPinchToZoomEnabled(param0: boolean): void;
              getPitchEnabled(): boolean;
              setPitchEnabled(param0: boolean): void;
              getScrollMode(): com.mapbox.maps.plugin.ScrollMode;
              setScrollMode(param0: com.mapbox.maps.plugin.ScrollMode): void;
              getDoubleTapToZoomInEnabled(): boolean;
              setDoubleTapToZoomInEnabled(param0: boolean): void;
              getDoubleTouchToZoomOutEnabled(): boolean;
              setDoubleTouchToZoomOutEnabled(param0: boolean): void;
              getQuickZoomEnabled(): boolean;
              setQuickZoomEnabled(param0: boolean): void;
              getFocalPoint(): com.mapbox.maps.ScreenCoordinate;
              setFocalPoint(param0: com.mapbox.maps.ScreenCoordinate): void;
              getPinchToZoomDecelerationEnabled(): boolean;
              setPinchToZoomDecelerationEnabled(param0: boolean): void;
              getRotateDecelerationEnabled(): boolean;
              setRotateDecelerationEnabled(param0: boolean): void;
              getScrollDecelerationEnabled(): boolean;
              setScrollDecelerationEnabled(param0: boolean): void;
              getIncreaseRotateThresholdWhenPinchingToZoom(): boolean;
              setIncreaseRotateThresholdWhenPinchingToZoom(param0: boolean): void;
              getIncreasePinchToZoomThresholdWhenRotating(): boolean;
              setIncreasePinchToZoomThresholdWhenRotating(param0: boolean): void;
              getZoomAnimationAmount(): number;
              setZoomAnimationAmount(param0: number): void;
              getPinchScrollEnabled(): boolean;
              setPinchScrollEnabled(param0: boolean): void;
            });
            public constructor();
            public getPinchToZoomDecelerationEnabled(): boolean;
            public getQuickZoomEnabled(): boolean;
            public getIncreasePinchToZoomThresholdWhenRotating(): boolean;
            public setPinchToZoomEnabled(param0: boolean): void;
            public setQuickZoomEnabled(param0: boolean): void;
            public getPinchToZoomEnabled(): boolean;
            public setZoomAnimationAmount(param0: number): void;
            public setDoubleTouchToZoomOutEnabled(param0: boolean): void;
            public addOnMapLongClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapLongClickListener): void;
            public bind(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void;
            /** @deprecated */
            public setIncreaseRotateThresholdWhenPinchingToZoom(param0: boolean): void;
            public cleanup(): void;
            public setScrollDecelerationEnabled(param0: boolean): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
            public addProtectedAnimationOwner(param0: string): void;
            public getDoubleTapToZoomInEnabled(): boolean;
            public setRotateEnabled(param0: boolean): void;
            public setDoubleTapToZoomInEnabled(param0: boolean): void;
            public setGesturesManager(param0: com.mapbox.android.gestures.AndroidGesturesManager, param1: boolean, param2: boolean): void;
            public getGesturesManager(): com.mapbox.android.gestures.AndroidGesturesManager;
            public setScrollEnabled(param0: boolean): void;
            public setFocalPoint(param0: com.mapbox.maps.ScreenCoordinate): void;
            public setPitchEnabled(param0: boolean): void;
            public addOnMoveListener(param0: com.mapbox.maps.plugin.gestures.OnMoveListener): void;
            public updateSettings(param0: any): void;
            public getScrollDecelerationEnabled(): boolean;
            public getRotateDecelerationEnabled(): boolean;
            public setIncreasePinchToZoomThresholdWhenRotating(param0: boolean): void;
            public removeOnScaleListener(param0: com.mapbox.maps.plugin.gestures.OnScaleListener): void;
            /** @deprecated */
            public getIncreaseRotateThresholdWhenPinchingToZoom(): boolean;
            public initialize(): void;
            public setScrollMode(param0: com.mapbox.maps.plugin.ScrollMode): void;
            public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
            public removeOnMapLongClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapLongClickListener): void;
            public getScrollEnabled(): boolean;
            public getFocalPoint(): com.mapbox.maps.ScreenCoordinate;
            public getPinchScrollEnabled(): boolean;
            public setPinchScrollEnabled(param0: boolean): void;
            public addOnShoveListener(param0: com.mapbox.maps.plugin.gestures.OnShoveListener): void;
            public setPinchToZoomDecelerationEnabled(param0: boolean): void;
            public addOnMapClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapClickListener): void;
            public addOnFlingListener(param0: com.mapbox.maps.plugin.gestures.OnFlingListener): void;
            public getZoomAnimationAmount(): number;
            public removeOnMoveListener(param0: com.mapbox.maps.plugin.gestures.OnMoveListener): void;
            public getRotateEnabled(): boolean;
            public removeOnRotateListener(param0: com.mapbox.maps.plugin.gestures.OnRotateListener): void;
            public setSimultaneousRotateAndPinchToZoomEnabled(param0: boolean): void;
            public addOnScaleListener(param0: com.mapbox.maps.plugin.gestures.OnScaleListener): void;
            public removeOnFlingListener(param0: com.mapbox.maps.plugin.gestures.OnFlingListener): void;
            public removeOnShoveListener(param0: com.mapbox.maps.plugin.gestures.OnShoveListener): void;
            public addOnRotateListener(param0: com.mapbox.maps.plugin.gestures.OnRotateListener): void;
            public getScrollMode(): com.mapbox.maps.plugin.ScrollMode;
            public getSimultaneousRotateAndPinchToZoomEnabled(): boolean;
            public removeProtectedAnimationOwner(param0: string): void;
            public removeOnMapClickListener(param0: com.mapbox.maps.plugin.gestures.OnMapClickListener): void;
            public getDoubleTouchToZoomOutEnabled(): boolean;
            public onSizeChanged(param0: number, param1: number): void;
            public getPitchEnabled(): boolean;
            public getSettings(): com.mapbox.maps.plugin.gestures.generated.GesturesSettings;
            public setRotateDecelerationEnabled(param0: boolean): void;
          }
          export module GesturesPlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.GesturesPlugin.DefaultImpls>;
              public static onSizeChanged(param0: com.mapbox.maps.plugin.gestures.GesturesPlugin, param1: number, param2: number): void;
              public static cleanup(param0: com.mapbox.maps.plugin.gestures.GesturesPlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.gestures.GesturesPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              public static initialize(param0: com.mapbox.maps.plugin.gestures.GesturesPlugin): void;
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
        export module gestures {
          export class OnFlingListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.OnFlingListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.gestures.OnFlingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onFling(): void });
            public constructor();
            public onFling(): void;
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
        export module gestures {
          export class OnMapClickListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.OnMapClickListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.gestures.OnMapClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onMapClick(param0: com.mapbox.geojson.Point): boolean });
            public constructor();
            public onMapClick(param0: com.mapbox.geojson.Point): boolean;
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
        export module gestures {
          export class OnMapLongClickListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.OnMapLongClickListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.gestures.OnMapLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onMapLongClick(param0: com.mapbox.geojson.Point): boolean });
            public constructor();
            public onMapLongClick(param0: com.mapbox.geojson.Point): boolean;
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
        export module gestures {
          export class OnMoveListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.OnMoveListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.gestures.OnMoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onMoveBegin(param0: com.mapbox.android.gestures.MoveGestureDetector): void; onMove(param0: com.mapbox.android.gestures.MoveGestureDetector): boolean; onMoveEnd(param0: com.mapbox.android.gestures.MoveGestureDetector): void });
            public constructor();
            public onMove(param0: com.mapbox.android.gestures.MoveGestureDetector): boolean;
            public onMoveEnd(param0: com.mapbox.android.gestures.MoveGestureDetector): void;
            public onMoveBegin(param0: com.mapbox.android.gestures.MoveGestureDetector): void;
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
        export module gestures {
          export class OnRotateListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.OnRotateListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.gestures.OnRotateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRotateBegin(param0: com.mapbox.android.gestures.RotateGestureDetector): void; onRotate(param0: com.mapbox.android.gestures.RotateGestureDetector): void; onRotateEnd(param0: com.mapbox.android.gestures.RotateGestureDetector): void });
            public constructor();
            public onRotateBegin(param0: com.mapbox.android.gestures.RotateGestureDetector): void;
            public onRotate(param0: com.mapbox.android.gestures.RotateGestureDetector): void;
            public onRotateEnd(param0: com.mapbox.android.gestures.RotateGestureDetector): void;
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
        export module gestures {
          export class OnScaleListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.OnScaleListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.gestures.OnScaleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onScaleBegin(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): void; onScale(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): void; onScaleEnd(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): void });
            public constructor();
            public onScale(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): void;
            public onScaleEnd(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): void;
            public onScaleBegin(param0: com.mapbox.android.gestures.StandardScaleGestureDetector): void;
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
        export module gestures {
          export class OnShoveListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.OnShoveListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.gestures.OnShoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onShoveBegin(param0: com.mapbox.android.gestures.ShoveGestureDetector): void; onShove(param0: com.mapbox.android.gestures.ShoveGestureDetector): void; onShoveEnd(param0: com.mapbox.android.gestures.ShoveGestureDetector): void });
            public constructor();
            public onShove(param0: com.mapbox.android.gestures.ShoveGestureDetector): void;
            public onShoveBegin(param0: com.mapbox.android.gestures.ShoveGestureDetector): void;
            public onShoveEnd(param0: com.mapbox.android.gestures.ShoveGestureDetector): void;
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
        export module gestures {
          export module generated {
            export class GesturesSettings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.generated.GesturesSettings>;
              public setScrollDecelerationEnabled(param0: boolean): void;
              public setRotateEnabled(param0: boolean): void;
              public constructor(param0: boolean, param1: boolean);
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean);
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean);
              public component15(): boolean;
              public setPinchToZoomDecelerationEnabled(param0: boolean): void;
              public getScrollDecelerationEnabled(): boolean;
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode);
              public component14(): boolean;
              public setIncreasePinchToZoomThresholdWhenRotating(param0: boolean): void;
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean, param8: boolean, param9: com.mapbox.maps.ScreenCoordinate);
              public setScrollEnabled(param0: boolean): void;
              public component11(): boolean;
              public component12(): boolean;
              public getDoubleTapToZoomInEnabled(): boolean;
              public constructor(param0: boolean, param1: boolean, param2: boolean);
              public component13(): boolean;
              public getPinchToZoomDecelerationEnabled(): boolean;
              public setPinchScrollEnabled(param0: boolean): void;
              public getZoomAnimationAmount(): number;
              public getPitchEnabled(): boolean;
              public component17(): boolean;
              public getSimultaneousRotateAndPinchToZoomEnabled(): boolean;
              public copy(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean, param8: boolean, param9: com.mapbox.maps.ScreenCoordinate, param10: boolean, param11: boolean, param12: boolean, param13: boolean, param14: boolean, param15: number, param16: boolean): com.mapbox.maps.plugin.gestures.generated.GesturesSettings;
              public getRotateEnabled(): boolean;
              public getFocalPoint(): com.mapbox.maps.ScreenCoordinate;
              public setDoubleTouchToZoomOutEnabled(param0: boolean): void;
              public constructor(param0: boolean);
              public setIncreaseRotateThresholdWhenPinchingToZoom(param0: boolean): void;
              public getScrollEnabled(): boolean;
              public setSimultaneousRotateAndPinchToZoomEnabled(param0: boolean): void;
              public equals(param0: any): boolean;
              public getScrollMode(): com.mapbox.maps.plugin.ScrollMode;
              public getRotateDecelerationEnabled(): boolean;
              public component3(): boolean;
              public setRotateDecelerationEnabled(param0: boolean): void;
              public component1(): boolean;
              public component5(): boolean;
              public hashCode(): number;
              public component2(): boolean;
              public getDoubleTouchToZoomOutEnabled(): boolean;
              public getPinchScrollEnabled(): boolean;
              public component7(): boolean;
              public toString(): string;
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean, param8: boolean, param9: com.mapbox.maps.ScreenCoordinate, param10: boolean, param11: boolean, param12: boolean, param13: boolean, param14: boolean, param15: number);
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean, param8: boolean);
              public component6(): com.mapbox.maps.plugin.ScrollMode;
              public component8(): boolean;
              public component9(): boolean;
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean, param8: boolean, param9: com.mapbox.maps.ScreenCoordinate, param10: boolean, param11: boolean);
              public setZoomAnimationAmount(param0: number): void;
              public getQuickZoomEnabled(): boolean;
              public constructor();
              public setQuickZoomEnabled(param0: boolean): void;
              public setPinchToZoomEnabled(param0: boolean): void;
              public component16(): number;
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean, param8: boolean, param9: com.mapbox.maps.ScreenCoordinate, param10: boolean, param11: boolean, param12: boolean, param13: boolean, param14: boolean);
              public setPitchEnabled(param0: boolean): void;
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean, param8: boolean, param9: com.mapbox.maps.ScreenCoordinate, param10: boolean, param11: boolean, param12: boolean, param13: boolean, param14: boolean, param15: number, param16: boolean);
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean);
              public setScrollMode(param0: com.mapbox.maps.plugin.ScrollMode): void;
              public getIncreasePinchToZoomThresholdWhenRotating(): boolean;
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean, param8: boolean, param9: com.mapbox.maps.ScreenCoordinate, param10: boolean, param11: boolean, param12: boolean);
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean);
              public component10(): com.mapbox.maps.ScreenCoordinate;
              public setDoubleTapToZoomInEnabled(param0: boolean): void;
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean, param8: boolean, param9: com.mapbox.maps.ScreenCoordinate, param10: boolean);
              public getIncreaseRotateThresholdWhenPinchingToZoom(): boolean;
              public getPinchToZoomEnabled(): boolean;
              public component4(): boolean;
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: com.mapbox.maps.plugin.ScrollMode, param6: boolean, param7: boolean, param8: boolean, param9: com.mapbox.maps.ScreenCoordinate, param10: boolean, param11: boolean, param12: boolean, param13: boolean);
              public setFocalPoint(param0: com.mapbox.maps.ScreenCoordinate): void;
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
        export module gestures {
          export module generated {
            export abstract class GesturesSettingsBase extends com.mapbox.maps.plugin.gestures.generated.GesturesSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.generated.GesturesSettingsBase>;
              public setScrollDecelerationEnabled(param0: boolean): void;
              public setRotateDecelerationEnabled(param0: boolean): void;
              /** @deprecated */
              public setIncreaseRotateThresholdWhenPinchingToZoom(param0: boolean): void;
              public setRotateEnabled(param0: boolean): void;
              public getDoubleTouchToZoomOutEnabled(): boolean;
              public getPinchScrollEnabled(): boolean;
              public setPinchToZoomDecelerationEnabled(param0: boolean): void;
              public getScrollDecelerationEnabled(): boolean;
              public setIncreasePinchToZoomThresholdWhenRotating(param0: boolean): void;
              public updateSettings(param0: any): void;
              public setScrollEnabled(param0: boolean): void;
              public getDoubleTapToZoomInEnabled(): boolean;
              public setInternalSettings(param0: com.mapbox.maps.plugin.gestures.generated.GesturesSettings): void;
              public setZoomAnimationAmount(param0: number): void;
              public constructor();
              public getQuickZoomEnabled(): boolean;
              public getPinchToZoomDecelerationEnabled(): boolean;
              public setQuickZoomEnabled(param0: boolean): void;
              public setPinchToZoomEnabled(param0: boolean): void;
              public setPitchEnabled(param0: boolean): void;
              public setPinchScrollEnabled(param0: boolean): void;
              public setScrollMode(param0: com.mapbox.maps.plugin.ScrollMode): void;
              public getInternalSettings(): com.mapbox.maps.plugin.gestures.generated.GesturesSettings;
              public getZoomAnimationAmount(): number;
              public getPitchEnabled(): boolean;
              public getIncreasePinchToZoomThresholdWhenRotating(): boolean;
              public getSimultaneousRotateAndPinchToZoomEnabled(): boolean;
              public setDoubleTapToZoomInEnabled(param0: boolean): void;
              public getRotateEnabled(): boolean;
              public getFocalPoint(): com.mapbox.maps.ScreenCoordinate;
              public getSettings(): com.mapbox.maps.plugin.gestures.generated.GesturesSettings;
              public setDoubleTouchToZoomOutEnabled(param0: boolean): void;
              public setIncreaseRotateThresholdWhenPinchingToZoom(param0: boolean): void;
              public getScrollEnabled(): boolean;
              public setSimultaneousRotateAndPinchToZoomEnabled(param0: boolean): void;
              public applySettings(): void;
              public getIncreaseRotateThresholdWhenPinchingToZoom(): boolean;
              public getScrollMode(): com.mapbox.maps.plugin.ScrollMode;
              public getRotateDecelerationEnabled(): boolean;
              /** @deprecated */
              public getIncreaseRotateThresholdWhenPinchingToZoom(): boolean;
              public getPinchToZoomEnabled(): boolean;
              public setFocalPoint(param0: com.mapbox.maps.ScreenCoordinate): void;
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
        export module gestures {
          export module generated {
            export class GesturesSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.generated.GesturesSettingsInterface>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.gestures.generated.GesturesSettingsInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getSettings(): com.mapbox.maps.plugin.gestures.generated.GesturesSettings;
                updateSettings(param0: any): void;
                getRotateEnabled(): boolean;
                setRotateEnabled(param0: boolean): void;
                getPinchToZoomEnabled(): boolean;
                setPinchToZoomEnabled(param0: boolean): void;
                getScrollEnabled(): boolean;
                setScrollEnabled(param0: boolean): void;
                getSimultaneousRotateAndPinchToZoomEnabled(): boolean;
                setSimultaneousRotateAndPinchToZoomEnabled(param0: boolean): void;
                getPitchEnabled(): boolean;
                setPitchEnabled(param0: boolean): void;
                getScrollMode(): com.mapbox.maps.plugin.ScrollMode;
                setScrollMode(param0: com.mapbox.maps.plugin.ScrollMode): void;
                getDoubleTapToZoomInEnabled(): boolean;
                setDoubleTapToZoomInEnabled(param0: boolean): void;
                getDoubleTouchToZoomOutEnabled(): boolean;
                setDoubleTouchToZoomOutEnabled(param0: boolean): void;
                getQuickZoomEnabled(): boolean;
                setQuickZoomEnabled(param0: boolean): void;
                getFocalPoint(): com.mapbox.maps.ScreenCoordinate;
                setFocalPoint(param0: com.mapbox.maps.ScreenCoordinate): void;
                getPinchToZoomDecelerationEnabled(): boolean;
                setPinchToZoomDecelerationEnabled(param0: boolean): void;
                getRotateDecelerationEnabled(): boolean;
                setRotateDecelerationEnabled(param0: boolean): void;
                getScrollDecelerationEnabled(): boolean;
                setScrollDecelerationEnabled(param0: boolean): void;
                getIncreaseRotateThresholdWhenPinchingToZoom(): boolean;
                setIncreaseRotateThresholdWhenPinchingToZoom(param0: boolean): void;
                getIncreasePinchToZoomThresholdWhenRotating(): boolean;
                setIncreasePinchToZoomThresholdWhenRotating(param0: boolean): void;
                getZoomAnimationAmount(): number;
                setZoomAnimationAmount(param0: number): void;
                getPinchScrollEnabled(): boolean;
                setPinchScrollEnabled(param0: boolean): void;
              });
              public constructor();
              public setScrollDecelerationEnabled(param0: boolean): void;
              public setRotateDecelerationEnabled(param0: boolean): void;
              /** @deprecated */
              public setIncreaseRotateThresholdWhenPinchingToZoom(param0: boolean): void;
              public setRotateEnabled(param0: boolean): void;
              public getDoubleTouchToZoomOutEnabled(): boolean;
              public getPinchScrollEnabled(): boolean;
              public setPinchToZoomDecelerationEnabled(param0: boolean): void;
              public getScrollDecelerationEnabled(): boolean;
              public setIncreasePinchToZoomThresholdWhenRotating(param0: boolean): void;
              public updateSettings(param0: any): void;
              public setScrollEnabled(param0: boolean): void;
              public getDoubleTapToZoomInEnabled(): boolean;
              public setZoomAnimationAmount(param0: number): void;
              public getQuickZoomEnabled(): boolean;
              public getPinchToZoomDecelerationEnabled(): boolean;
              public setQuickZoomEnabled(param0: boolean): void;
              public setPinchToZoomEnabled(param0: boolean): void;
              public setPitchEnabled(param0: boolean): void;
              public setPinchScrollEnabled(param0: boolean): void;
              public setScrollMode(param0: com.mapbox.maps.plugin.ScrollMode): void;
              public getZoomAnimationAmount(): number;
              public getPitchEnabled(): boolean;
              public getIncreasePinchToZoomThresholdWhenRotating(): boolean;
              public getSimultaneousRotateAndPinchToZoomEnabled(): boolean;
              public setDoubleTapToZoomInEnabled(param0: boolean): void;
              public getRotateEnabled(): boolean;
              public getFocalPoint(): com.mapbox.maps.ScreenCoordinate;
              public getSettings(): com.mapbox.maps.plugin.gestures.generated.GesturesSettings;
              public setDoubleTouchToZoomOutEnabled(param0: boolean): void;
              public getScrollEnabled(): boolean;
              public setSimultaneousRotateAndPinchToZoomEnabled(param0: boolean): void;
              public getScrollMode(): com.mapbox.maps.plugin.ScrollMode;
              public getRotateDecelerationEnabled(): boolean;
              /** @deprecated */
              public getIncreaseRotateThresholdWhenPinchingToZoom(): boolean;
              public getPinchToZoomEnabled(): boolean;
              public setFocalPoint(param0: com.mapbox.maps.ScreenCoordinate): void;
            }
            export module GesturesSettingsInterface {
              export class DefaultImpls {
                public static class: java.lang.Class<com.mapbox.maps.plugin.gestures.generated.GesturesSettingsInterface.DefaultImpls>;
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
        export module lifecycle {
          export class MapboxLifecyclePlugin extends com.mapbox.maps.plugin.MapPlugin {
            public static class: java.lang.Class<com.mapbox.maps.plugin.lifecycle.MapboxLifecyclePlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.lifecycle.MapboxLifecyclePlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { registerLifecycleObserver(param0: globalAndroid.view.View, param1: com.mapbox.maps.MapboxLifecycleObserver): void; initialize(): void; cleanup(): void; onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void });
            public constructor();
            public registerLifecycleObserver(param0: globalAndroid.view.View, param1: com.mapbox.maps.MapboxLifecycleObserver): void;
            public initialize(): void;
            public cleanup(): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          }
          export module MapboxLifecyclePlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.lifecycle.MapboxLifecyclePlugin.DefaultImpls>;
              public static initialize(param0: com.mapbox.maps.plugin.lifecycle.MapboxLifecyclePlugin): void;
              public static cleanup(param0: com.mapbox.maps.plugin.lifecycle.MapboxLifecyclePlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.lifecycle.MapboxLifecyclePlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
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
        export module locationcomponent {
          export class LocationComponentPlugin implements com.mapbox.maps.plugin.MapPlugin, com.mapbox.maps.plugin.MapStyleObserverPlugin, com.mapbox.maps.plugin.LifecyclePlugin, com.mapbox.maps.plugin.ContextBinder, com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsInterface {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              setLocationProvider(param0: com.mapbox.maps.plugin.locationcomponent.LocationProvider): void;
              getLocationProvider(): com.mapbox.maps.plugin.locationcomponent.LocationProvider;
              addOnIndicatorPositionChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener): void;
              removeOnIndicatorPositionChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener): void;
              addOnIndicatorBearingChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener): void;
              removeOnIndicatorBearingChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener): void;
              isLocatedAt(param0: com.mapbox.geojson.Point, param1: com.mapbox.maps.plugin.locationcomponent.PuckLocatedAtPointListener): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void;
              onStart(): void;
              onStop(): void;
              bind(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void;
              getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
              updateSettings(param0: any): void;
              getEnabled(): boolean;
              setEnabled(param0: boolean): void;
              getPulsingEnabled(): boolean;
              setPulsingEnabled(param0: boolean): void;
              getPulsingColor(): number;
              setPulsingColor(param0: number): void;
              getPulsingMaxRadius(): number;
              setPulsingMaxRadius(param0: number): void;
              getLayerAbove(): string;
              setLayerAbove(param0: string): void;
              getLayerBelow(): string;
              setLayerBelow(param0: string): void;
              getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
              setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
            });
            public constructor();
            public isLocatedAt(param0: com.mapbox.geojson.Point, param1: com.mapbox.maps.plugin.locationcomponent.PuckLocatedAtPointListener): void;
            public setLocationProvider(param0: com.mapbox.maps.plugin.locationcomponent.LocationProvider): void;
            public getLayerAbove(): string;
            public bind(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void;
            public setLayerBelow(param0: string): void;
            public setPulsingMaxRadius(param0: number): void;
            public cleanup(): void;
            public addOnIndicatorPositionChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public removeOnIndicatorBearingChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener): void;
            public getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
            public setPulsingColor(param0: number): void;
            public getPulsingColor(): number;
            public getPulsingMaxRadius(): number;
            public setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
            public onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public updateSettings(param0: any): void;
            public getLocationProvider(): com.mapbox.maps.plugin.locationcomponent.LocationProvider;
            public removeOnIndicatorPositionChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener): void;
            public onStop(): void;
            public setEnabled(param0: boolean): void;
            public getPulsingEnabled(): boolean;
            public setPulsingEnabled(param0: boolean): void;
            public getEnabled(): boolean;
            public setLayerAbove(param0: string): void;
            public initialize(): void;
            public getLayerBelow(): string;
            public getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
            public addOnIndicatorBearingChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener): void;
            public onStart(): void;
          }
          export module LocationComponentPlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin.DefaultImpls>;
              public static onStop(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin): void;
              public static onStart(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              public static initialize(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin): void;
              public static cleanup(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin): void;
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
        export module locationcomponent {
          export class LocationComponentPlugin2 implements com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin, com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsInterface2 {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin2>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              addOnIndicatorAccuracyRadiusChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener): void;
              removeOnIndicatorAccuracyRadiusChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener): void;
              setLocationProvider(param0: com.mapbox.maps.plugin.locationcomponent.LocationProvider): void;
              getLocationProvider(): com.mapbox.maps.plugin.locationcomponent.LocationProvider;
              addOnIndicatorPositionChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener): void;
              removeOnIndicatorPositionChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener): void;
              addOnIndicatorBearingChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener): void;
              removeOnIndicatorBearingChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener): void;
              isLocatedAt(param0: com.mapbox.geojson.Point, param1: com.mapbox.maps.plugin.locationcomponent.PuckLocatedAtPointListener): void;
              getSettings2(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
              updateSettings2(param0: any): void;
              getShowAccuracyRing(): boolean;
              setShowAccuracyRing(param0: boolean): void;
              getAccuracyRingColor(): number;
              setAccuracyRingColor(param0: number): void;
              getAccuracyRingBorderColor(): number;
              setAccuracyRingBorderColor(param0: number): void;
              getPuckBearingEnabled(): boolean;
              setPuckBearingEnabled(param0: boolean): void;
              getPuckBearingSource(): com.mapbox.maps.plugin.PuckBearingSource;
              setPuckBearingSource(param0: com.mapbox.maps.plugin.PuckBearingSource): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void;
              onStart(): void;
              onStop(): void;
              bind(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void;
              getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
              updateSettings(param0: any): void;
              getEnabled(): boolean;
              setEnabled(param0: boolean): void;
              getPulsingEnabled(): boolean;
              setPulsingEnabled(param0: boolean): void;
              getPulsingColor(): number;
              setPulsingColor(param0: number): void;
              getPulsingMaxRadius(): number;
              setPulsingMaxRadius(param0: number): void;
              getLayerAbove(): string;
              setLayerAbove(param0: string): void;
              getLayerBelow(): string;
              setLayerBelow(param0: string): void;
              getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
              setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
              getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
              updateSettings(param0: any): void;
              getEnabled(): boolean;
              setEnabled(param0: boolean): void;
              getPulsingEnabled(): boolean;
              setPulsingEnabled(param0: boolean): void;
              getPulsingColor(): number;
              setPulsingColor(param0: number): void;
              getPulsingMaxRadius(): number;
              setPulsingMaxRadius(param0: number): void;
              getLayerAbove(): string;
              setLayerAbove(param0: string): void;
              getLayerBelow(): string;
              setLayerBelow(param0: string): void;
              getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
              setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
            });
            public constructor();
            public isLocatedAt(param0: com.mapbox.geojson.Point, param1: com.mapbox.maps.plugin.locationcomponent.PuckLocatedAtPointListener): void;
            public getSettings2(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
            public getAccuracyRingBorderColor(): number;
            public setAccuracyRingBorderColor(param0: number): void;
            public setShowAccuracyRing(param0: boolean): void;
            public getAccuracyRingColor(): number;
            public setLocationProvider(param0: com.mapbox.maps.plugin.locationcomponent.LocationProvider): void;
            public getPuckBearingSource(): com.mapbox.maps.plugin.PuckBearingSource;
            public getLayerAbove(): string;
            public bind(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number): void;
            public setLayerBelow(param0: string): void;
            public setPuckBearingEnabled(param0: boolean): void;
            public setPulsingMaxRadius(param0: number): void;
            public getShowAccuracyRing(): boolean;
            public cleanup(): void;
            public getPuckBearingEnabled(): boolean;
            public addOnIndicatorPositionChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public removeOnIndicatorBearingChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener): void;
            public setAccuracyRingColor(param0: number): void;
            public getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
            public setPulsingColor(param0: number): void;
            public getPulsingColor(): number;
            public getPulsingMaxRadius(): number;
            public setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
            public addOnIndicatorAccuracyRadiusChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener): void;
            public onStyleChanged(param0: com.mapbox.maps.extension.style.StyleInterface): void;
            public updateSettings(param0: any): void;
            public getLocationProvider(): com.mapbox.maps.plugin.locationcomponent.LocationProvider;
            public removeOnIndicatorPositionChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener): void;
            public onStop(): void;
            public setEnabled(param0: boolean): void;
            public getPulsingEnabled(): boolean;
            public updateSettings2(param0: any): void;
            public setPulsingEnabled(param0: boolean): void;
            public setPuckBearingSource(param0: com.mapbox.maps.plugin.PuckBearingSource): void;
            public getEnabled(): boolean;
            public setLayerAbove(param0: string): void;
            public initialize(): void;
            public getLayerBelow(): string;
            public getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
            public addOnIndicatorBearingChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener): void;
            public onStart(): void;
            public removeOnIndicatorAccuracyRadiusChangedListener(param0: com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener): void;
          }
          export module LocationComponentPlugin2 {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin2.DefaultImpls>;
              public static cleanup(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin2): void;
              public static onStop(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin2): void;
              public static onStart(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin2): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin2, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              public static initialize(param0: com.mapbox.maps.plugin.locationcomponent.LocationComponentPlugin2): void;
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
        export module locationcomponent {
          export class LocationConsumer {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationConsumer>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.LocationConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onLocationUpdated(param0: androidNative.Array<com.mapbox.geojson.Point>, param1: any): void; onBearingUpdated(param0: androidNative.Array<number>, param1: any): void; onPuckLocationAnimatorDefaultOptionsUpdated(param0: any): void; onPuckBearingAnimatorDefaultOptionsUpdated(param0: any): void });
            public constructor();
            public onPuckBearingAnimatorDefaultOptionsUpdated(param0: any): void;
            public onBearingUpdated(param0: androidNative.Array<number>, param1: any): void;
            public onLocationUpdated(param0: androidNative.Array<com.mapbox.geojson.Point>, param1: any): void;
            public onPuckLocationAnimatorDefaultOptionsUpdated(param0: any): void;
          }
          export module LocationConsumer {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationConsumer.DefaultImpls>;
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
        export module locationcomponent {
          export class LocationConsumer2 extends com.mapbox.maps.plugin.locationcomponent.LocationConsumer {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationConsumer2>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.LocationConsumer2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAccuracyRadiusUpdated(param0: androidNative.Array<number>, param1: any): void; onPuckAccuracyRadiusAnimatorDefaultOptionsUpdated(param0: any): void; onLocationUpdated(param0: androidNative.Array<com.mapbox.geojson.Point>, param1: any): void; onBearingUpdated(param0: androidNative.Array<number>, param1: any): void; onPuckLocationAnimatorDefaultOptionsUpdated(param0: any): void; onPuckBearingAnimatorDefaultOptionsUpdated(param0: any): void });
            public constructor();
            public onPuckBearingAnimatorDefaultOptionsUpdated(param0: any): void;
            public onBearingUpdated(param0: androidNative.Array<number>, param1: any): void;
            public onLocationUpdated(param0: androidNative.Array<com.mapbox.geojson.Point>, param1: any): void;
            public onPuckLocationAnimatorDefaultOptionsUpdated(param0: any): void;
            public onAccuracyRadiusUpdated(param0: androidNative.Array<number>, param1: any): void;
            public onPuckAccuracyRadiusAnimatorDefaultOptionsUpdated(param0: any): void;
          }
          export module LocationConsumer2 {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationConsumer2.DefaultImpls>;
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
        export module locationcomponent {
          export class LocationProvider {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.LocationProvider>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.LocationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { registerLocationConsumer(param0: com.mapbox.maps.plugin.locationcomponent.LocationConsumer): void; unRegisterLocationConsumer(param0: com.mapbox.maps.plugin.locationcomponent.LocationConsumer): void });
            public constructor();
            public unRegisterLocationConsumer(param0: com.mapbox.maps.plugin.locationcomponent.LocationConsumer): void;
            public registerLocationConsumer(param0: com.mapbox.maps.plugin.locationcomponent.LocationConsumer): void;
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
        export module locationcomponent {
          export class OnIndicatorAccuracyRadiusChangedListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.OnIndicatorAccuracyRadiusChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onIndicatorAccuracyRadiusChanged(param0: number): void });
            public constructor();
            public onIndicatorAccuracyRadiusChanged(param0: number): void;
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
        export module locationcomponent {
          export class OnIndicatorBearingChangedListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.OnIndicatorBearingChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onIndicatorBearingChanged(param0: number): void });
            public constructor();
            public onIndicatorBearingChanged(param0: number): void;
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
        export module locationcomponent {
          export class OnIndicatorPositionChangedListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.OnIndicatorPositionChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onIndicatorPositionChanged(param0: com.mapbox.geojson.Point): void });
            public constructor();
            public onIndicatorPositionChanged(param0: com.mapbox.geojson.Point): void;
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
        export module locationcomponent {
          export class PuckLocatedAtPointListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.PuckLocatedAtPointListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.PuckLocatedAtPointListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onResult(param0: boolean): void });
            public constructor();
            public onResult(param0: boolean): void;
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
        export module locationcomponent {
          export module generated {
            export class LocationComponentSettings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings>;
              public component1(): boolean;
              public hashCode(): number;
              public component2(): boolean;
              public toString(): string;
              public constructor(param0: boolean, param1: boolean, param2: number, param3: number, param4: com.mapbox.maps.plugin.LocationPuck);
              public constructor(param0: boolean, param1: boolean, param2: number, param3: com.mapbox.maps.plugin.LocationPuck);
              public constructor(param0: com.mapbox.maps.plugin.LocationPuck);
              public getEnabled(): boolean;
              public constructor(param0: boolean, param1: boolean, param2: com.mapbox.maps.plugin.LocationPuck);
              public getPulsingMaxRadius(): number;
              public setPulsingMaxRadius(param0: number): void;
              public component3(): number;
              public setEnabled(param0: boolean): void;
              public getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
              public component6(): string;
              public constructor(param0: boolean, param1: boolean, param2: number, param3: number, param4: string, param5: string, param6: com.mapbox.maps.plugin.LocationPuck);
              public getLayerAbove(): string;
              public copy(param0: boolean, param1: boolean, param2: number, param3: number, param4: string, param5: string, param6: com.mapbox.maps.plugin.LocationPuck): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
              public setPulsingEnabled(param0: boolean): void;
              public setLayerBelow(param0: string): void;
              public setPulsingColor(param0: number): void;
              public component5(): string;
              public getPulsingColor(): number;
              public constructor(param0: boolean, param1: com.mapbox.maps.plugin.LocationPuck);
              public component7(): com.mapbox.maps.plugin.LocationPuck;
              public component4(): number;
              public setLayerAbove(param0: string): void;
              public getPulsingEnabled(): boolean;
              public setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
              public equals(param0: any): boolean;
              public constructor(param0: boolean, param1: boolean, param2: number, param3: number, param4: string, param5: com.mapbox.maps.plugin.LocationPuck);
              public getLayerBelow(): string;
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
        export module locationcomponent {
          export module generated {
            export class LocationComponentSettings2 {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2>;
              public getShowAccuracyRing(): boolean;
              public component1(): boolean;
              public hashCode(): number;
              public setPuckBearingEnabled(param0: boolean): void;
              public component2(): number;
              public toString(): string;
              public setPuckBearingSource(param0: com.mapbox.maps.plugin.PuckBearingSource): void;
              public setAccuracyRingBorderColor(param0: number): void;
              public component3(): number;
              public setAccuracyRingColor(param0: number): void;
              public component5(): com.mapbox.maps.plugin.PuckBearingSource;
              public constructor(param0: boolean, param1: number, param2: number);
              public constructor();
              public constructor(param0: boolean, param1: number, param2: number, param3: boolean);
              public constructor(param0: boolean, param1: number, param2: number, param3: boolean, param4: com.mapbox.maps.plugin.PuckBearingSource);
              public getAccuracyRingColor(): number;
              public copy(param0: boolean, param1: number, param2: number, param3: boolean, param4: com.mapbox.maps.plugin.PuckBearingSource): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
              public getAccuracyRingBorderColor(): number;
              public getPuckBearingSource(): com.mapbox.maps.plugin.PuckBearingSource;
              public getPuckBearingEnabled(): boolean;
              public setShowAccuracyRing(param0: boolean): void;
              public constructor(param0: boolean);
              public equals(param0: any): boolean;
              public component4(): boolean;
              public constructor(param0: boolean, param1: number);
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
        export module locationcomponent {
          export module generated {
            export abstract class LocationComponentSettingsBase extends com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsBase>;
              public constructor();
              public setPulsingEnabled(param0: boolean): void;
              public getInternalSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
              public setLayerBelow(param0: string): void;
              public setPulsingColor(param0: number): void;
              public getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
              public getPulsingColor(): number;
              public setInternalSettings(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings): void;
              public getEnabled(): boolean;
              public getPulsingMaxRadius(): number;
              public setPulsingMaxRadius(param0: number): void;
              public setLayerAbove(param0: string): void;
              public updateSettings(param0: any): void;
              public setEnabled(param0: boolean): void;
              public getPulsingEnabled(): boolean;
              public getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
              public applySettings(): void;
              public setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
              public getLayerAbove(): string;
              public getLayerBelow(): string;
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
        export module locationcomponent {
          export module generated {
            export abstract class LocationComponentSettingsBase2 extends com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsBase implements com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsInterface2 {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsBase2>;
              public getShowAccuracyRing(): boolean;
              public setPuckBearingEnabled(param0: boolean): void;
              public setPuckBearingSource(param0: com.mapbox.maps.plugin.PuckBearingSource): void;
              public setAccuracyRingBorderColor(param0: number): void;
              public getInternalSettings2(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
              public applySettings2(): void;
              public getEnabled(): boolean;
              public getPulsingMaxRadius(): number;
              public setPulsingMaxRadius(param0: number): void;
              public updateSettings(param0: any): void;
              public setAccuracyRingColor(param0: number): void;
              public setEnabled(param0: boolean): void;
              public getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
              public getLayerAbove(): string;
              public constructor();
              public setPulsingEnabled(param0: boolean): void;
              public getAccuracyRingColor(): number;
              public getAccuracyRingBorderColor(): number;
              public setLayerBelow(param0: string): void;
              public getPuckBearingSource(): com.mapbox.maps.plugin.PuckBearingSource;
              public setPulsingColor(param0: number): void;
              public getPuckBearingEnabled(): boolean;
              public getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
              public getPulsingColor(): number;
              public getSettings2(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
              public updateSettings2(param0: any): void;
              public setShowAccuracyRing(param0: boolean): void;
              public setInternalSettings2(param0: com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2): void;
              public setLayerAbove(param0: string): void;
              public getPulsingEnabled(): boolean;
              public setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
              public getLayerBelow(): string;
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
        export module locationcomponent {
          export module generated {
            export class LocationComponentSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsInterface>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings; updateSettings(param0: any): void; getEnabled(): boolean; setEnabled(param0: boolean): void; getPulsingEnabled(): boolean; setPulsingEnabled(param0: boolean): void; getPulsingColor(): number; setPulsingColor(param0: number): void; getPulsingMaxRadius(): number; setPulsingMaxRadius(param0: number): void; getLayerAbove(): string; setLayerAbove(param0: string): void; getLayerBelow(): string; setLayerBelow(param0: string): void; getLocationPuck(): com.mapbox.maps.plugin.LocationPuck; setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void });
              public constructor();
              public setPulsingEnabled(param0: boolean): void;
              public setLayerBelow(param0: string): void;
              public setPulsingColor(param0: number): void;
              public getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
              public getPulsingColor(): number;
              public getEnabled(): boolean;
              public getPulsingMaxRadius(): number;
              public setPulsingMaxRadius(param0: number): void;
              public setLayerAbove(param0: string): void;
              public updateSettings(param0: any): void;
              public setEnabled(param0: boolean): void;
              public getPulsingEnabled(): boolean;
              public getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
              public setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
              public getLayerAbove(): string;
              public getLayerBelow(): string;
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
        export module locationcomponent {
          export module generated {
            export class LocationComponentSettingsInterface2 extends com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsInterface2>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettingsInterface2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getSettings2(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
                updateSettings2(param0: any): void;
                getShowAccuracyRing(): boolean;
                setShowAccuracyRing(param0: boolean): void;
                getAccuracyRingColor(): number;
                setAccuracyRingColor(param0: number): void;
                getAccuracyRingBorderColor(): number;
                setAccuracyRingBorderColor(param0: number): void;
                getPuckBearingEnabled(): boolean;
                setPuckBearingEnabled(param0: boolean): void;
                getPuckBearingSource(): com.mapbox.maps.plugin.PuckBearingSource;
                setPuckBearingSource(param0: com.mapbox.maps.plugin.PuckBearingSource): void;
                getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
                updateSettings(param0: any): void;
                getEnabled(): boolean;
                setEnabled(param0: boolean): void;
                getPulsingEnabled(): boolean;
                setPulsingEnabled(param0: boolean): void;
                getPulsingColor(): number;
                setPulsingColor(param0: number): void;
                getPulsingMaxRadius(): number;
                setPulsingMaxRadius(param0: number): void;
                getLayerAbove(): string;
                setLayerAbove(param0: string): void;
                getLayerBelow(): string;
                setLayerBelow(param0: string): void;
                getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
                setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
              });
              public constructor();
              public getShowAccuracyRing(): boolean;
              public setPuckBearingEnabled(param0: boolean): void;
              public setPuckBearingSource(param0: com.mapbox.maps.plugin.PuckBearingSource): void;
              public setAccuracyRingBorderColor(param0: number): void;
              public getEnabled(): boolean;
              public getPulsingMaxRadius(): number;
              public setPulsingMaxRadius(param0: number): void;
              public updateSettings(param0: any): void;
              public setAccuracyRingColor(param0: number): void;
              public setEnabled(param0: boolean): void;
              public getLocationPuck(): com.mapbox.maps.plugin.LocationPuck;
              public getLayerAbove(): string;
              public setPulsingEnabled(param0: boolean): void;
              public getAccuracyRingColor(): number;
              public getAccuracyRingBorderColor(): number;
              public setLayerBelow(param0: string): void;
              public getPuckBearingSource(): com.mapbox.maps.plugin.PuckBearingSource;
              public setPulsingColor(param0: number): void;
              public getPuckBearingEnabled(): boolean;
              public getSettings(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings;
              public getPulsingColor(): number;
              public getSettings2(): com.mapbox.maps.plugin.locationcomponent.generated.LocationComponentSettings2;
              public updateSettings2(param0: any): void;
              public setShowAccuracyRing(param0: boolean): void;
              public setLayerAbove(param0: string): void;
              public getPulsingEnabled(): boolean;
              public setLocationPuck(param0: com.mapbox.maps.plugin.LocationPuck): void;
              public getLayerBelow(): string;
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
        export module logo {
          export class LogoPlugin implements com.mapbox.maps.plugin.ViewPlugin, com.mapbox.maps.plugin.logo.generated.LogoSettingsInterface {
            public static class: java.lang.Class<com.mapbox.maps.plugin.logo.LogoPlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.logo.LogoPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
              onPluginView(param0: globalAndroid.view.View): void;
              getSettings(): com.mapbox.maps.plugin.logo.generated.LogoSettings;
              updateSettings(param0: any): void;
              getEnabled(): boolean;
              setEnabled(param0: boolean): void;
              getPosition(): number;
              setPosition(param0: number): void;
              getMarginLeft(): number;
              setMarginLeft(param0: number): void;
              getMarginTop(): number;
              setMarginTop(param0: number): void;
              getMarginRight(): number;
              setMarginRight(param0: number): void;
              getMarginBottom(): number;
              setMarginBottom(param0: number): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            });
            public constructor();
            public setMarginTop(param0: number): void;
            public bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
            public getPosition(): number;
            public getMarginBottom(): number;
            public updateSettings(param0: any): void;
            public setEnabled(param0: boolean): void;
            public getSettings(): com.mapbox.maps.plugin.logo.generated.LogoSettings;
            public getEnabled(): boolean;
            public setMarginLeft(param0: number): void;
            public setMarginBottom(param0: number): void;
            public initialize(): void;
            public onPluginView(param0: globalAndroid.view.View): void;
            public getMarginTop(): number;
            public setPosition(param0: number): void;
            public cleanup(): void;
            public getMarginRight(): number;
            public setMarginRight(param0: number): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public getMarginLeft(): number;
          }
          export module LogoPlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.logo.LogoPlugin.DefaultImpls>;
              public static cleanup(param0: com.mapbox.maps.plugin.logo.LogoPlugin): void;
              public static initialize(param0: com.mapbox.maps.plugin.logo.LogoPlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.logo.LogoPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              public static onPluginView(param0: com.mapbox.maps.plugin.logo.LogoPlugin, param1: globalAndroid.view.View): void;
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
        export module logo {
          export class LogoView {
            public static class: java.lang.Class<com.mapbox.maps.plugin.logo.LogoView>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.logo.LogoView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getLogoEnabled(): boolean; setLogoEnabled(param0: boolean): void; getLogoGravity(): number; setLogoGravity(param0: number): void; setLogoMargins(param0: number, param1: number, param2: number, param3: number): void; requestLayout(): void });
            public constructor();
            public getLogoEnabled(): boolean;
            public setLogoGravity(param0: number): void;
            public requestLayout(): void;
            public setLogoEnabled(param0: boolean): void;
            public setLogoMargins(param0: number, param1: number, param2: number, param3: number): void;
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
          export module generated {
            export class LogoSettings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.logo.generated.LogoSettings>;
              public getPosition(): number;
              public component1(): boolean;
              public hashCode(): number;
              public component2(): number;
              public component5(): number;
              public toString(): string;
              public getMarginTop(): number;
              public getMarginRight(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number);
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number);
              public getEnabled(): boolean;
              public setMarginTop(param0: number): void;
              public constructor(param0: boolean, param1: number, param2: number, param3: number);
              public component6(): number;
              public component3(): number;
              public constructor(param0: boolean, param1: number, param2: number);
              public setEnabled(param0: boolean): void;
              public copy(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number): com.mapbox.maps.plugin.logo.generated.LogoSettings;
              public getMarginLeft(): number;
              public constructor();
              public getMarginBottom(): number;
              public setMarginRight(param0: number): void;
              public setPosition(param0: number): void;
              public component4(): number;
              public setMarginLeft(param0: number): void;
              public constructor(param0: boolean);
              public setMarginBottom(param0: number): void;
              public equals(param0: any): boolean;
              public constructor(param0: boolean, param1: number);
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
        export module logo {
          export module generated {
            export abstract class LogoSettingsBase extends com.mapbox.maps.plugin.logo.generated.LogoSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.logo.generated.LogoSettingsBase>;
              public constructor();
              public getPosition(): number;
              public getMarginBottom(): number;
              public getInternalSettings(): com.mapbox.maps.plugin.logo.generated.LogoSettings;
              public getMarginTop(): number;
              public setMarginRight(param0: number): void;
              public getMarginRight(): number;
              public setPosition(param0: number): void;
              public getEnabled(): boolean;
              public setMarginTop(param0: number): void;
              public setInternalSettings(param0: com.mapbox.maps.plugin.logo.generated.LogoSettings): void;
              public getSettings(): com.mapbox.maps.plugin.logo.generated.LogoSettings;
              public setMarginLeft(param0: number): void;
              public updateSettings(param0: any): void;
              public setEnabled(param0: boolean): void;
              public applySettings(): void;
              public setMarginBottom(param0: number): void;
              public getMarginLeft(): number;
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
        export module logo {
          export module generated {
            export class LogoSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.logo.generated.LogoSettingsInterface>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.logo.generated.LogoSettingsInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getSettings(): com.mapbox.maps.plugin.logo.generated.LogoSettings; updateSettings(param0: any): void; getEnabled(): boolean; setEnabled(param0: boolean): void; getPosition(): number; setPosition(param0: number): void; getMarginLeft(): number; setMarginLeft(param0: number): void; getMarginTop(): number; setMarginTop(param0: number): void; getMarginRight(): number; setMarginRight(param0: number): void; getMarginBottom(): number; setMarginBottom(param0: number): void });
              public constructor();
              public getPosition(): number;
              public getMarginBottom(): number;
              public getMarginTop(): number;
              public setMarginRight(param0: number): void;
              public getMarginRight(): number;
              public setPosition(param0: number): void;
              public getEnabled(): boolean;
              public setMarginTop(param0: number): void;
              public getSettings(): com.mapbox.maps.plugin.logo.generated.LogoSettings;
              public setMarginLeft(param0: number): void;
              public updateSettings(param0: any): void;
              public setEnabled(param0: boolean): void;
              public setMarginBottom(param0: number): void;
              public getMarginLeft(): number;
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
        export module overlay {
          export class MapOverlayCoordinatesProvider {
            public static class: java.lang.Class<com.mapbox.maps.plugin.overlay.MapOverlayCoordinatesProvider>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.overlay.MapOverlayCoordinatesProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getShownCoordinates(): java.util.List<com.mapbox.geojson.Point> });
            public constructor();
            public getShownCoordinates(): java.util.List<com.mapbox.geojson.Point>;
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
        export module overlay {
          export class MapOverlayPlugin implements com.mapbox.maps.plugin.MapSizePlugin, com.mapbox.maps.plugin.MapPlugin {
            public static class: java.lang.Class<com.mapbox.maps.plugin.overlay.MapOverlayPlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.overlay.MapOverlayPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              registerMapOverlayCoordinatesProvider(param0: com.mapbox.maps.plugin.overlay.MapOverlayCoordinatesProvider): void;
              unregisterMapOverlayCoordinatesProvider(): void;
              registerOverlay(param0: globalAndroid.view.View): void;
              registerOverlays(param0: java.util.List<any>): void;
              unregisterOverlay(param0: globalAndroid.view.View): void;
              unregisterOverlays(param0: java.util.List<any>): void;
              setDisplayingAreaMargins(param0: number, param1: number, param2: number, param3: number): void;
              reframe(param0: com.mapbox.maps.plugin.overlay.OnReframeFinished): void;
              getEdgeInsets(): com.mapbox.maps.EdgeInsets;
              onSizeChanged(param0: number, param1: number): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            });
            public constructor();
            public setDisplayingAreaMargins(param0: number, param1: number, param2: number, param3: number): void;
            public registerOverlays(param0: java.util.List<any>): void;
            public unregisterOverlays(param0: java.util.List<any>): void;
            public registerMapOverlayCoordinatesProvider(param0: com.mapbox.maps.plugin.overlay.MapOverlayCoordinatesProvider): void;
            public initialize(): void;
            public cleanup(): void;
            public onSizeChanged(param0: number, param1: number): void;
            public unregisterMapOverlayCoordinatesProvider(): void;
            public registerOverlay(param0: globalAndroid.view.View): void;
            public getEdgeInsets(): com.mapbox.maps.EdgeInsets;
            public unregisterOverlay(param0: globalAndroid.view.View): void;
            public reframe(param0: com.mapbox.maps.plugin.overlay.OnReframeFinished): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          }
          export module MapOverlayPlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.overlay.MapOverlayPlugin.DefaultImpls>;
              public static cleanup(param0: com.mapbox.maps.plugin.overlay.MapOverlayPlugin): void;
              public static onSizeChanged(param0: com.mapbox.maps.plugin.overlay.MapOverlayPlugin, param1: number, param2: number): void;
              public static initialize(param0: com.mapbox.maps.plugin.overlay.MapOverlayPlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.overlay.MapOverlayPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
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
        export module overlay {
          export class OnReframeFinished {
            public static class: java.lang.Class<com.mapbox.maps.plugin.overlay.OnReframeFinished>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.overlay.OnReframeFinished interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onReframeFinished(param0: com.mapbox.maps.CameraOptions): void });
            public constructor();
            public onReframeFinished(param0: com.mapbox.maps.CameraOptions): void;
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
          export class ScaleBar {
            public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.ScaleBar>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.scalebar.ScaleBar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getDistancePerPixel(): number; setDistancePerPixel(param0: number): void; getEnable(): boolean; setEnable(param0: boolean): void; getSettings(): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings; setSettings(param0: com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings): void; getMapViewWidth(): number; setMapViewWidth(param0: number): void; getPixelRatio(): number; setPixelRatio(param0: number): void; getUseContinuousRendering(): boolean; setUseContinuousRendering(param0: boolean): void });
            public constructor();
            public getDistancePerPixel(): number;
            public getSettings(): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
            public setMapViewWidth(param0: number): void;
            public getPixelRatio(): number;
            public setUseContinuousRendering(param0: boolean): void;
            public setDistancePerPixel(param0: number): void;
            public setPixelRatio(param0: number): void;
            public getEnable(): boolean;
            public getMapViewWidth(): number;
            public setSettings(param0: com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings): void;
            public getUseContinuousRendering(): boolean;
            public setEnable(param0: boolean): void;
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
          export class ScaleBarPlugin implements com.mapbox.maps.plugin.ViewPlugin, com.mapbox.maps.plugin.MapSizePlugin, com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettingsInterface {
            public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.ScaleBarPlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.scalebar.ScaleBarPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getDistancePerPixel(): number;
              setDistancePerPixel(param0: number): void;
              bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
              onPluginView(param0: globalAndroid.view.View): void;
              onSizeChanged(param0: number, param1: number): void;
              getSettings(): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
              updateSettings(param0: any): void;
              getEnabled(): boolean;
              setEnabled(param0: boolean): void;
              getPosition(): number;
              setPosition(param0: number): void;
              getMarginLeft(): number;
              setMarginLeft(param0: number): void;
              getMarginTop(): number;
              setMarginTop(param0: number): void;
              getMarginRight(): number;
              setMarginRight(param0: number): void;
              getMarginBottom(): number;
              setMarginBottom(param0: number): void;
              getTextColor(): number;
              setTextColor(param0: number): void;
              getPrimaryColor(): number;
              setPrimaryColor(param0: number): void;
              getSecondaryColor(): number;
              setSecondaryColor(param0: number): void;
              getBorderWidth(): number;
              setBorderWidth(param0: number): void;
              getHeight(): number;
              setHeight(param0: number): void;
              getTextBarMargin(): number;
              setTextBarMargin(param0: number): void;
              getTextBorderWidth(): number;
              setTextBorderWidth(param0: number): void;
              getTextSize(): number;
              setTextSize(param0: number): void;
              isMetricUnits(): boolean;
              setMetricUnits(param0: boolean): void;
              getRefreshInterval(): number;
              setRefreshInterval(param0: number): void;
              getShowTextBorder(): boolean;
              setShowTextBorder(param0: boolean): void;
              getRatio(): number;
              setRatio(param0: number): void;
              getUseContinuousRendering(): boolean;
              setUseContinuousRendering(param0: boolean): void;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            });
            public constructor();
            public getBorderWidth(): number;
            public getRatio(): number;
            public getUseContinuousRendering(): boolean;
            public setTextBorderWidth(param0: number): void;
            public getShowTextBorder(): boolean;
            public setRatio(param0: number): void;
            public setHeight(param0: number): void;
            public getMarginTop(): number;
            public cleanup(): void;
            public setSecondaryColor(param0: number): void;
            public setMarginRight(param0: number): void;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            public getMarginLeft(): number;
            public setMetricUnits(param0: boolean): void;
            public isMetricUnits(): boolean;
            public getSettings(): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
            public getRefreshInterval(): number;
            public setMarginTop(param0: number): void;
            public bind(param0: globalAndroid.widget.FrameLayout, param1: globalAndroid.util.AttributeSet, param2: number): globalAndroid.view.View;
            public getPosition(): number;
            public getMarginBottom(): number;
            public getSecondaryColor(): number;
            public setUseContinuousRendering(param0: boolean): void;
            public setDistancePerPixel(param0: number): void;
            public getTextColor(): number;
            public getHeight(): number;
            public updateSettings(param0: any): void;
            public getTextBarMargin(): number;
            public setEnabled(param0: boolean): void;
            public setBorderWidth(param0: number): void;
            public getDistancePerPixel(): number;
            public getTextSize(): number;
            public getTextBorderWidth(): number;
            public setRefreshInterval(param0: number): void;
            public getEnabled(): boolean;
            public setShowTextBorder(param0: boolean): void;
            public setMarginLeft(param0: number): void;
            public setMarginBottom(param0: number): void;
            public setTextColor(param0: number): void;
            public initialize(): void;
            public onPluginView(param0: globalAndroid.view.View): void;
            public setPrimaryColor(param0: number): void;
            public setTextBarMargin(param0: number): void;
            public setPosition(param0: number): void;
            public onSizeChanged(param0: number, param1: number): void;
            public getPrimaryColor(): number;
            public getMarginRight(): number;
            public setTextSize(param0: number): void;
          }
          export module ScaleBarPlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.ScaleBarPlugin.DefaultImpls>;
              public static onPluginView(param0: com.mapbox.maps.plugin.scalebar.ScaleBarPlugin, param1: globalAndroid.view.View): void;
              public static initialize(param0: com.mapbox.maps.plugin.scalebar.ScaleBarPlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.scalebar.ScaleBarPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              public static onSizeChanged(param0: com.mapbox.maps.plugin.scalebar.ScaleBarPlugin, param1: number, param2: number): void;
              public static cleanup(param0: com.mapbox.maps.plugin.scalebar.ScaleBarPlugin): void;
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
          export module generated {
            export class ScaleBarSettings {
              public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings>;
              public setPrimaryColor(param0: number): void;
              public setShowTextBorder(param0: boolean): void;
              public getBorderWidth(): number;
              public getPosition(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: boolean, param15: number, param16: boolean, param17: number, param18: boolean);
              public component2(): number;
              public getRatio(): number;
              public component5(): number;
              public component11(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number);
              public component14(): number;
              public setTextBorderWidth(param0: number): void;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: boolean, param15: number);
              public getMarginRight(): number;
              public getHeight(): number;
              public getTextSize(): number;
              public component15(): boolean;
              public getEnabled(): boolean;
              public setMarginTop(param0: number): void;
              public setTextColor(param0: number): void;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: boolean, param15: number, param16: boolean);
              public constructor(param0: boolean, param1: number, param2: number);
              public setEnabled(param0: boolean): void;
              public setBorderWidth(param0: number): void;
              public getTextBorderWidth(): number;
              public getMarginLeft(): number;
              public isMetricUnits(): boolean;
              public component13(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number);
              public component17(): boolean;
              public setRatio(param0: number): void;
              public getUseContinuousRendering(): boolean;
              public setPosition(param0: number): void;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number);
              public getShowTextBorder(): boolean;
              public component4(): number;
              public setMarginLeft(param0: number): void;
              public component12(): number;
              public constructor(param0: boolean);
              public component19(): boolean;
              public equals(param0: any): boolean;
              public getSecondaryColor(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: boolean);
              public setRefreshInterval(param0: number): void;
              public component18(): number;
              public getTextBarMargin(): number;
              public component1(): boolean;
              public hashCode(): number;
              public component9(): number;
              public toString(): string;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number);
              public getMarginTop(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number);
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number);
              public setSecondaryColor(param0: number): void;
              public setTextBarMargin(param0: number): void;
              public component10(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number);
              public component6(): number;
              public component3(): number;
              public setUseContinuousRendering(param0: boolean): void;
              public setHeight(param0: number): void;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
              public setMetricUnits(param0: boolean): void;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
              public constructor();
              public component16(): number;
              public getRefreshInterval(): number;
              public component7(): number;
              public getPrimaryColor(): number;
              public getMarginBottom(): number;
              public copy(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: boolean, param15: number, param16: boolean, param17: number, param18: boolean): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number);
              public setMarginRight(param0: number): void;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: boolean, param15: number, param16: boolean, param17: number);
              public setTextSize(param0: number): void;
              public component8(): number;
              public getTextColor(): number;
              public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number);
              public setMarginBottom(param0: number): void;
              public constructor(param0: boolean, param1: number);
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
          export module generated {
            export abstract class ScaleBarSettingsBase extends com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettingsBase>;
              public setInternalSettings(param0: com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings): void;
              public getSettings(): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
              public setPrimaryColor(param0: number): void;
              public setShowTextBorder(param0: boolean): void;
              public getBorderWidth(): number;
              public setRefreshInterval(param0: number): void;
              public getPosition(): number;
              public getTextBarMargin(): number;
              public getRatio(): number;
              public getMarginTop(): number;
              public setTextBorderWidth(param0: number): void;
              public getMarginRight(): number;
              public getHeight(): number;
              public getTextSize(): number;
              public getEnabled(): boolean;
              public setSecondaryColor(param0: number): void;
              public setTextBarMargin(param0: number): void;
              public setMarginTop(param0: number): void;
              public setTextColor(param0: number): void;
              public updateSettings(param0: any): void;
              public setEnabled(param0: boolean): void;
              public setUseContinuousRendering(param0: boolean): void;
              public getInternalSettings(): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
              public setHeight(param0: number): void;
              public setBorderWidth(param0: number): void;
              public getTextBorderWidth(): number;
              public getMarginLeft(): number;
              public constructor();
              public isMetricUnits(): boolean;
              public setMetricUnits(param0: boolean): void;
              public getRefreshInterval(): number;
              public getPrimaryColor(): number;
              public getMarginBottom(): number;
              public setMarginRight(param0: number): void;
              public setRatio(param0: number): void;
              public getUseContinuousRendering(): boolean;
              public setPosition(param0: number): void;
              public getShowTextBorder(): boolean;
              public setTextSize(param0: number): void;
              public setMarginLeft(param0: number): void;
              public getTextColor(): number;
              public applySettings(): void;
              public setMarginBottom(param0: number): void;
              public getSecondaryColor(): number;
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
          export module generated {
            export class ScaleBarSettingsInterface {
              public static class: java.lang.Class<com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettingsInterface>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettingsInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getSettings(): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
                updateSettings(param0: any): void;
                getEnabled(): boolean;
                setEnabled(param0: boolean): void;
                getPosition(): number;
                setPosition(param0: number): void;
                getMarginLeft(): number;
                setMarginLeft(param0: number): void;
                getMarginTop(): number;
                setMarginTop(param0: number): void;
                getMarginRight(): number;
                setMarginRight(param0: number): void;
                getMarginBottom(): number;
                setMarginBottom(param0: number): void;
                getTextColor(): number;
                setTextColor(param0: number): void;
                getPrimaryColor(): number;
                setPrimaryColor(param0: number): void;
                getSecondaryColor(): number;
                setSecondaryColor(param0: number): void;
                getBorderWidth(): number;
                setBorderWidth(param0: number): void;
                getHeight(): number;
                setHeight(param0: number): void;
                getTextBarMargin(): number;
                setTextBarMargin(param0: number): void;
                getTextBorderWidth(): number;
                setTextBorderWidth(param0: number): void;
                getTextSize(): number;
                setTextSize(param0: number): void;
                isMetricUnits(): boolean;
                setMetricUnits(param0: boolean): void;
                getRefreshInterval(): number;
                setRefreshInterval(param0: number): void;
                getShowTextBorder(): boolean;
                setShowTextBorder(param0: boolean): void;
                getRatio(): number;
                setRatio(param0: number): void;
                getUseContinuousRendering(): boolean;
                setUseContinuousRendering(param0: boolean): void;
              });
              public constructor();
              public getSettings(): com.mapbox.maps.plugin.scalebar.generated.ScaleBarSettings;
              public setPrimaryColor(param0: number): void;
              public setShowTextBorder(param0: boolean): void;
              public getBorderWidth(): number;
              public setRefreshInterval(param0: number): void;
              public getPosition(): number;
              public getTextBarMargin(): number;
              public getRatio(): number;
              public getMarginTop(): number;
              public setTextBorderWidth(param0: number): void;
              public getMarginRight(): number;
              public getHeight(): number;
              public getTextSize(): number;
              public getEnabled(): boolean;
              public setSecondaryColor(param0: number): void;
              public setTextBarMargin(param0: number): void;
              public setMarginTop(param0: number): void;
              public setTextColor(param0: number): void;
              public updateSettings(param0: any): void;
              public setEnabled(param0: boolean): void;
              public setUseContinuousRendering(param0: boolean): void;
              public setHeight(param0: number): void;
              public setBorderWidth(param0: number): void;
              public getTextBorderWidth(): number;
              public getMarginLeft(): number;
              public isMetricUnits(): boolean;
              public setMetricUnits(param0: boolean): void;
              public getRefreshInterval(): number;
              public getPrimaryColor(): number;
              public getMarginBottom(): number;
              public setMarginRight(param0: number): void;
              public setRatio(param0: number): void;
              public getUseContinuousRendering(): boolean;
              public setPosition(param0: number): void;
              public getShowTextBorder(): boolean;
              public setTextSize(param0: number): void;
              public setMarginLeft(param0: number): void;
              public getTextColor(): number;
              public setMarginBottom(param0: number): void;
              public getSecondaryColor(): number;
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
          export class CompletionListener {
            public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.CompletionListener>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.viewport.CompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onComplete(param0: boolean): void });
            public constructor();
            public onComplete(param0: boolean): void;
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
          export class ViewportPlugin extends com.mapbox.maps.plugin.MapPlugin {
            public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.ViewportPlugin>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.viewport.ViewportPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getStatus(): com.mapbox.maps.plugin.viewport.ViewportStatus;
              transitionTo(param0: com.mapbox.maps.plugin.viewport.state.ViewportState, param1: com.mapbox.maps.plugin.viewport.transition.ViewportTransition, param2: com.mapbox.maps.plugin.viewport.CompletionListener): void;
              idle(): void;
              getOptions(): com.mapbox.maps.plugin.viewport.data.ViewportOptions;
              setOptions(param0: com.mapbox.maps.plugin.viewport.data.ViewportOptions): void;
              getDefaultTransition(): com.mapbox.maps.plugin.viewport.transition.ViewportTransition;
              setDefaultTransition(param0: com.mapbox.maps.plugin.viewport.transition.ViewportTransition): void;
              addStatusObserver(param0: com.mapbox.maps.plugin.viewport.ViewportStatusObserver): void;
              removeStatusObserver(param0: com.mapbox.maps.plugin.viewport.ViewportStatusObserver): void;
              makeFollowPuckViewportState(param0: com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions): com.mapbox.maps.plugin.viewport.state.FollowPuckViewportState;
              makeOverviewViewportState(param0: com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions): com.mapbox.maps.plugin.viewport.state.OverviewViewportState;
              makeDefaultViewportTransition(param0: com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions): com.mapbox.maps.plugin.viewport.transition.DefaultViewportTransition;
              makeImmediateViewportTransition(): com.mapbox.maps.plugin.viewport.transition.ViewportTransition;
              initialize(): void;
              cleanup(): void;
              onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
            });
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
            public getOptions(): com.mapbox.maps.plugin.viewport.data.ViewportOptions;
            public setOptions(param0: com.mapbox.maps.plugin.viewport.data.ViewportOptions): void;
            public makeImmediateViewportTransition(): com.mapbox.maps.plugin.viewport.transition.ViewportTransition;
            public initialize(): void;
            public cleanup(): void;
            public makeDefaultViewportTransition(param0: com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions): com.mapbox.maps.plugin.viewport.transition.DefaultViewportTransition;
            public onDelegateProvider(param0: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
          }
          export module ViewportPlugin {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.ViewportPlugin.DefaultImpls>;
              public static cleanup(param0: com.mapbox.maps.plugin.viewport.ViewportPlugin): void;
              public static onDelegateProvider(param0: com.mapbox.maps.plugin.viewport.ViewportPlugin, param1: com.mapbox.maps.plugin.delegates.MapDelegateProvider): void;
              public static initialize(param0: com.mapbox.maps.plugin.viewport.ViewportPlugin): void;
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
          export abstract class ViewportStatus {
            public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.ViewportStatus>;
          }
          export module ViewportStatus {
            export class Idle extends com.mapbox.maps.plugin.viewport.ViewportStatus {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.ViewportStatus.Idle>;
              public static INSTANCE: com.mapbox.maps.plugin.viewport.ViewportStatus.Idle;
              public toString(): string;
            }
            export class State extends com.mapbox.maps.plugin.viewport.ViewportStatus {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.ViewportStatus.State>;
              public hashCode(): number;
              public toString(): string;
              public getState(): com.mapbox.maps.plugin.viewport.state.ViewportState;
              public equals(param0: any): boolean;
              public constructor(param0: com.mapbox.maps.plugin.viewport.state.ViewportState);
            }
            export class Transition extends com.mapbox.maps.plugin.viewport.ViewportStatus {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.ViewportStatus.Transition>;
              public hashCode(): number;
              public getToState(): com.mapbox.maps.plugin.viewport.state.ViewportState;
              public constructor(param0: com.mapbox.maps.plugin.viewport.transition.ViewportTransition, param1: com.mapbox.maps.plugin.viewport.state.ViewportState);
              public toString(): string;
              public getTransition(): com.mapbox.maps.plugin.viewport.transition.ViewportTransition;
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
      export module plugin {
        export module viewport {
          export class ViewportStatusObserver {
            public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.ViewportStatusObserver>;
            /**
             * Constructs a new instance of the com.mapbox.maps.plugin.viewport.ViewportStatusObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onViewportStatusChanged(param0: com.mapbox.maps.plugin.viewport.ViewportStatus, param1: com.mapbox.maps.plugin.viewport.ViewportStatus, param2: com.mapbox.maps.plugin.viewport.data.ViewportStatusChangeReason): void });
            public constructor();
            public onViewportStatusChanged(param0: com.mapbox.maps.plugin.viewport.ViewportStatus, param1: com.mapbox.maps.plugin.viewport.ViewportStatus, param2: com.mapbox.maps.plugin.viewport.data.ViewportStatusChangeReason): void;
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
          export module data {
            export class DefaultViewportTransitionOptions {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions>;
              public hashCode(): number;
              public toBuilder(): com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions.Builder;
              public toString(): string;
              public equals(param0: any): boolean;
              public getMaxDurationMs(): number;
            }
            export module DefaultViewportTransitionOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions.Builder>;
                public maxDurationMs(param0: number): com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions.Builder;
                public constructor();
                public build(): com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions;
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
          export module data {
            export abstract class FollowPuckViewportStateBearing {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateBearing>;
            }
            export module FollowPuckViewportStateBearing {
              export class Constant extends com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateBearing {
                public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateBearing.Constant>;
                public toString(): string;
                public constructor(param0: number);
                public equals(param0: any): boolean;
                public hashCode(): number;
                public getBearing(): number;
              }
              export class SyncWithLocationPuck extends com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateBearing {
                public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateBearing.SyncWithLocationPuck>;
                public static INSTANCE: com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateBearing.SyncWithLocationPuck;
                public toString(): string;
                public equals(param0: any): boolean;
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
    export module maps {
      export module plugin {
        export module viewport {
          export module data {
            export class FollowPuckViewportStateOptions {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions>;
              public getPitch(): java.lang.Double;
              public hashCode(): number;
              public getPadding(): com.mapbox.maps.EdgeInsets;
              public toString(): string;
              public getZoom(): java.lang.Double;
              public getBearing(): com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateBearing;
              public equals(param0: any): boolean;
              public toBuilder(): com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions.Builder;
            }
            export module FollowPuckViewportStateOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions.Builder>;
                public bearing(param0: com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateBearing): com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions.Builder;
                public zoom(param0: java.lang.Double): com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions.Builder;
                public padding(param0: com.mapbox.maps.EdgeInsets): com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions.Builder;
                public constructor();
                public build(): com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions;
                public pitch(param0: java.lang.Double): com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions.Builder;
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
          export module data {
            export class OverviewViewportStateOptions {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions>;
              public getPitch(): java.lang.Double;
              public getBearing(): java.lang.Double;
              public hashCode(): number;
              public getPadding(): com.mapbox.maps.EdgeInsets;
              public toBuilder(): com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions.Builder;
              public getAnimationDurationMs(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public getGeometry(): com.mapbox.geojson.Geometry;
            }
            export module OverviewViewportStateOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions.Builder>;
                public geometry(param0: com.mapbox.geojson.Geometry): com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions.Builder;
                public bearing(param0: java.lang.Double): com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions.Builder;
                public constructor();
                public build(): com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions;
                public pitch(param0: java.lang.Double): com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions.Builder;
                public padding(param0: com.mapbox.maps.EdgeInsets): com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions.Builder;
                public animationDurationMs(param0: number): com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions.Builder;
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
          export module data {
            export class ViewportOptions {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.ViewportOptions>;
              public hashCode(): number;
              public getTransitionsToIdleUponUserInteraction(): boolean;
              public toBuilder(): com.mapbox.maps.plugin.viewport.data.ViewportOptions.Builder;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export module ViewportOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.ViewportOptions.Builder>;
                public transitionsToIdleUponUserInteraction(param0: boolean): com.mapbox.maps.plugin.viewport.data.ViewportOptions.Builder;
                public build(): com.mapbox.maps.plugin.viewport.data.ViewportOptions;
                public constructor();
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
          export module data {
            export class ViewportStatusChangeReason {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.ViewportStatusChangeReason>;
              public static IDLE_REQUESTED: com.mapbox.maps.plugin.viewport.data.ViewportStatusChangeReason;
              public static TRANSITION_STARTED: com.mapbox.maps.plugin.viewport.data.ViewportStatusChangeReason;
              public static TRANSITION_SUCCEEDED: com.mapbox.maps.plugin.viewport.data.ViewportStatusChangeReason;
              public static TRANSITION_FAILED: com.mapbox.maps.plugin.viewport.data.ViewportStatusChangeReason;
              public static USER_INTERACTION: com.mapbox.maps.plugin.viewport.data.ViewportStatusChangeReason;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export module ViewportStatusChangeReason {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.data.ViewportStatusChangeReason.Companion>;
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
            export class FollowPuckViewportState extends com.mapbox.maps.plugin.viewport.state.ViewportState {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.state.FollowPuckViewportState>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.viewport.state.FollowPuckViewportState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getOptions(): com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions; setOptions(param0: com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions): void; observeDataSource(param0: com.mapbox.maps.plugin.viewport.state.ViewportStateDataObserver): com.mapbox.maps.plugin.animation.Cancelable; startUpdatingCamera(): void; stopUpdatingCamera(): void });
              public constructor();
              public getOptions(): com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions;
              public startUpdatingCamera(): void;
              public setOptions(param0: com.mapbox.maps.plugin.viewport.data.FollowPuckViewportStateOptions): void;
              public stopUpdatingCamera(): void;
              public observeDataSource(param0: com.mapbox.maps.plugin.viewport.state.ViewportStateDataObserver): com.mapbox.maps.plugin.animation.Cancelable;
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
            export class OverviewViewportState extends com.mapbox.maps.plugin.viewport.state.ViewportState {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.state.OverviewViewportState>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.viewport.state.OverviewViewportState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getOptions(): com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions; setOptions(param0: com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions): void; observeDataSource(param0: com.mapbox.maps.plugin.viewport.state.ViewportStateDataObserver): com.mapbox.maps.plugin.animation.Cancelable; startUpdatingCamera(): void; stopUpdatingCamera(): void });
              public constructor();
              public startUpdatingCamera(): void;
              public getOptions(): com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions;
              public stopUpdatingCamera(): void;
              public setOptions(param0: com.mapbox.maps.plugin.viewport.data.OverviewViewportStateOptions): void;
              public observeDataSource(param0: com.mapbox.maps.plugin.viewport.state.ViewportStateDataObserver): com.mapbox.maps.plugin.animation.Cancelable;
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
            export class ViewportState {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.state.ViewportState>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.viewport.state.ViewportState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { observeDataSource(param0: com.mapbox.maps.plugin.viewport.state.ViewportStateDataObserver): com.mapbox.maps.plugin.animation.Cancelable; startUpdatingCamera(): void; stopUpdatingCamera(): void });
              public constructor();
              public startUpdatingCamera(): void;
              public stopUpdatingCamera(): void;
              public observeDataSource(param0: com.mapbox.maps.plugin.viewport.state.ViewportStateDataObserver): com.mapbox.maps.plugin.animation.Cancelable;
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
            export class ViewportStateDataObserver {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.state.ViewportStateDataObserver>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.viewport.state.ViewportStateDataObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewData(param0: com.mapbox.maps.CameraOptions): boolean });
              public constructor();
              public onNewData(param0: com.mapbox.maps.CameraOptions): boolean;
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
            export class DefaultViewportTransition extends com.mapbox.maps.plugin.viewport.transition.ViewportTransition {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.transition.DefaultViewportTransition>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.viewport.transition.DefaultViewportTransition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getOptions(): com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions; setOptions(param0: com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions): void; run(param0: com.mapbox.maps.plugin.viewport.state.ViewportState, param1: com.mapbox.maps.plugin.viewport.CompletionListener): com.mapbox.maps.plugin.animation.Cancelable });
              public constructor();
              public run(param0: com.mapbox.maps.plugin.viewport.state.ViewportState, param1: com.mapbox.maps.plugin.viewport.CompletionListener): com.mapbox.maps.plugin.animation.Cancelable;
              public getOptions(): com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions;
              public setOptions(param0: com.mapbox.maps.plugin.viewport.data.DefaultViewportTransitionOptions): void;
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
            export class ViewportTransition {
              public static class: java.lang.Class<com.mapbox.maps.plugin.viewport.transition.ViewportTransition>;
              /**
               * Constructs a new instance of the com.mapbox.maps.plugin.viewport.transition.ViewportTransition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { run(param0: com.mapbox.maps.plugin.viewport.state.ViewportState, param1: com.mapbox.maps.plugin.viewport.CompletionListener): com.mapbox.maps.plugin.animation.Cancelable });
              public constructor();
              public run(param0: com.mapbox.maps.plugin.viewport.state.ViewportState, param1: com.mapbox.maps.plugin.viewport.CompletionListener): com.mapbox.maps.plugin.animation.Cancelable;
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
      export module threading {
        export class AnimationThreadController {
          public static class: java.lang.Class<com.mapbox.maps.threading.AnimationThreadController>;
          public static INSTANCE: com.mapbox.maps.threading.AnimationThreadController;
          public postOnAnimatorThread(param0: any): void;
          public useBackgroundThread(): void;
          public postOnMainThread(param0: any): void;
          public useMainThread(): void;
          public getUsingBackgroundThread(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module maps {
      export module util {
        export class MathUtils {
          public static class: java.lang.Class<com.mapbox.maps.util.MathUtils>;
          public static INSTANCE: com.mapbox.maps.util.MathUtils;
          public prepareOptimalBearingPath(param0: androidNative.Array<number>): androidNative.Array<number>;
          public shortestRotation$sdk_base_publicRelease(param0: number, param1: number): number;
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.maps.plugin.animation.CameraAnimatorChangeListener:1
//com.mapbox.maps.plugin.animation.CameraAnimatorNullableChangeListener:1
//com.mapbox.maps.plugin.animation.CameraAnimatorOptions:1
//com.mapbox.maps.plugin.animation.CameraAnimatorOptions.Builder:1
//com.mapbox.maps.plugin.annotation.Annotation:1
//com.mapbox.maps.plugin.annotation.AnnotationManager:7
//com.mapbox.maps.plugin.annotation.AnnotationOptions:2
//com.mapbox.maps.plugin.annotation.OnAnnotationClickListener:1
//com.mapbox.maps.plugin.annotation.OnAnnotationDragListener:1
//com.mapbox.maps.plugin.annotation.OnAnnotationInteractionListener:1
//com.mapbox.maps.plugin.annotation.OnAnnotationLongClickListener:1
