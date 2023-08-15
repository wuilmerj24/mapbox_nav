/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module common {
      export class NativeLoggerWrapper {
        public static class: java.lang.Class<com.mapbox.common.NativeLoggerWrapper>;
        public static INSTANCE: com.mapbox.common.NativeLoggerWrapper;
        public getLogLevel(param0: string): com.mapbox.common.LoggingLevel;
        public warning(param0: string, param1: string): void;
        public info(param0: string, param1: string): void;
        public debug(param0: string, param1: string): void;
        public error(param0: string, param1: string): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module utils {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.navigation.utils.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module utils {
        export module internal {
          export class ConnectivityHandler {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.ConnectivityHandler>;
            public constructor(param0: kotlinx.coroutines.channels.Channel<java.lang.Boolean>);
            public run(param0: com.mapbox.common.NetworkStatus): void;
            public getNetworkStatusChannel(): kotlinx.coroutines.channels.ReceiveChannel<java.lang.Boolean>;
          }
          export module ConnectivityHandler {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.utils.internal.ConnectivityHandler.Companion>;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.utils.internal.ConnectivityHandler.WhenMappings>;
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
      export module utils {
        export module internal {
          export class HttpServiceFactoryWrapper {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.HttpServiceFactoryWrapper>;
            public static INSTANCE: com.mapbox.navigation.utils.internal.HttpServiceFactoryWrapper;
            public getInstance(): com.mapbox.common.HttpServiceInterface;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module utils {
        export module internal {
          export class InternalJobControlFactory {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.InternalJobControlFactory>;
            public static INSTANCE: com.mapbox.navigation.utils.internal.InternalJobControlFactory;
            public createImmediateMainScopeJobControl(): com.mapbox.navigation.utils.internal.JobControl;
            public createMainScopeJobControl(): com.mapbox.navigation.utils.internal.JobControl;
            public createDefaultScopeJobControl(): com.mapbox.navigation.utils.internal.JobControl;
            public createIOScopeJobControl(): com.mapbox.navigation.utils.internal.JobControl;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module utils {
        export module internal {
          export class JobControl {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.JobControl>;
            public constructor(param0: kotlinx.coroutines.Job, param1: kotlinx.coroutines.CoroutineScope);
            public component1(): kotlinx.coroutines.Job;
            public getScope(): kotlinx.coroutines.CoroutineScope;
            public component2(): kotlinx.coroutines.CoroutineScope;
            public copy(param0: kotlinx.coroutines.Job, param1: kotlinx.coroutines.CoroutineScope): com.mapbox.navigation.utils.internal.JobControl;
            public getJob(): kotlinx.coroutines.Job;
            public hashCode(): number;
            public equals(param0: any): boolean;
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
      export module utils {
        export module internal {
          export class LoggerFrontend {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.LoggerFrontend>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.utils.internal.LoggerFrontend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getLogLevel(): com.mapbox.common.LoggingLevel; logV(param0: string, param1: string): void; logD(param0: string, param1: string): void; logI(param0: string, param1: string): void; logE(param0: string, param1: string): void; logW(param0: string, param1: string): void });
            public constructor();
            public logI(param0: string, param1: string): void;
            public logV(param0: string, param1: string): void;
            public logD(param0: string, param1: string): void;
            public logE(param0: string, param1: string): void;
            public getLogLevel(): com.mapbox.common.LoggingLevel;
            public logW(param0: string, param1: string): void;
          }
          export module LoggerFrontend {
            export class DefaultImpls {
              public static class: java.lang.Class<com.mapbox.navigation.utils.internal.LoggerFrontend.DefaultImpls>;
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
      export module utils {
        export module internal {
          export class LoggerProvider {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.LoggerProvider>;
            public static INSTANCE: com.mapbox.navigation.utils.internal.LoggerProvider;
            public getLoggerFrontend(): com.mapbox.navigation.utils.internal.LoggerFrontend;
            public getFrontend$libnavigation_util_release(): com.mapbox.navigation.utils.internal.LoggerFrontend;
            public setLoggerFrontend(param0: com.mapbox.navigation.utils.internal.LoggerFrontend): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module utils {
        export module internal {
          export module LoggingLevelUtilKt {
            export module WhenMappings {
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.utils.internal.LoggingLevelUtilKt.WhenMappings>;
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
      export module utils {
        export module internal {
          export class MapboxCommonLoggerFrontend extends com.mapbox.navigation.utils.internal.LoggerFrontend {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.MapboxCommonLoggerFrontend>;
            public constructor();
            public logI(param0: string, param1: string): void;
            public logV(param0: string, param1: string): void;
            public logD(param0: string, param1: string): void;
            public logE(param0: string, param1: string): void;
            public getLogLevel(): com.mapbox.common.LoggingLevel;
            public logW(param0: string, param1: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module utils {
        export module internal {
          export class NullUtils {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.NullUtils>;
            public static ifNonNull(param0: any, param1: any): any;
            public static ifNonNull(param0: any, param1: any, param2: any): any;
            public static ifNonNull(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): any;
            public static ifNonNull(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): any;
            public static ifNonNull(param0: any, param1: any, param2: any, param3: any, param4: any): any;
            public static ifNonNull(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): any;
            public static ifNonNull(param0: any, param1: any, param2: any, param3: any): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module utils {
        export module internal {
          export class PrimitivesEx {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.PrimitivesEx>;
            public static toFloatOrNull(param0: java.lang.Double): java.lang.Float;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module utils {
        export module internal {
          export class RequestIdGenerator {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.RequestIdGenerator>;
            public constructor();
            public generateRequestId(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module utils {
        export module internal {
          export class RequestMap<T> extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.RequestMap<any>>;
            public constructor();
            public generateNextRequestId(): number;
            public removeAll(): java.util.List<T>;
            public put(param0: T): number;
            public get(param0: number): T;
            public remove(param0: number): T;
            public put(param0: number, param1: T): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module utils {
        export module internal {
          export class ThreadController {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.ThreadController>;
            public getMainScopeAndRootJob(): com.mapbox.navigation.utils.internal.JobControl;
            public constructor();
            public getIoRootJob$libnavigation_util_release(): kotlinx.coroutines.CompletableJob;
            public cancelAllUICoroutines(): void;
            public setIoRootJob$libnavigation_util_release(param0: kotlinx.coroutines.CompletableJob): void;
            public getIOScopeAndRootJob(): com.mapbox.navigation.utils.internal.JobControl;
            public getMainRootJob$libnavigation_util_release(): kotlinx.coroutines.CompletableJob;
            public setMainRootJob$libnavigation_util_release(param0: kotlinx.coroutines.CompletableJob): void;
            public cancelAllNonUICoroutines(): void;
          }
          export module ThreadController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.utils.internal.ThreadController.Companion>;
              public getIODispatcher(): kotlinx.coroutines.CoroutineDispatcher;
              public getDefaultDispatcher(): kotlinx.coroutines.CoroutineDispatcher;
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
      export module utils {
        export module internal {
          export class Time {
            public static class: java.lang.Class<com.mapbox.navigation.utils.internal.Time>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.utils.internal.Time interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { nanoTime(): number; millis(): number; seconds(): number });
            public constructor();
            public millis(): number;
            public nanoTime(): number;
            public seconds(): number;
          }
          export module Time {
            export class SystemClockImpl extends com.mapbox.navigation.utils.internal.Time {
              public static class: java.lang.Class<com.mapbox.navigation.utils.internal.Time.SystemClockImpl>;
              public static INSTANCE: com.mapbox.navigation.utils.internal.Time.SystemClockImpl;
              public nanoTime(): number;
              public seconds(): number;
              public millis(): number;
            }
            export class SystemImpl extends com.mapbox.navigation.utils.internal.Time {
              public static class: java.lang.Class<com.mapbox.navigation.utils.internal.Time.SystemImpl>;
              public static INSTANCE: com.mapbox.navigation.utils.internal.Time.SystemImpl;
              public nanoTime(): number;
              public seconds(): number;
              public millis(): number;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.navigation.utils.internal.RequestMap:1
