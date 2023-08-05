declare module io {
  export module sentry {
    export module android {
      export module core {
        export class ANRWatchDog {
          public static class: java.lang.Class<io.sentry.android.core.ANRWatchDog>;
          public run(): void;
        }
        export module ANRWatchDog {
          export class ANRListener {
            public static class: java.lang.Class<io.sentry.android.core.ANRWatchDog.ANRListener>;
            /**
             * Constructs a new instance of the io.sentry.android.core.ANRWatchDog$ANRListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAppNotResponding(param0: io.sentry.android.core.ApplicationNotResponding): void });
            public constructor();
            public onAppNotResponding(param0: io.sentry.android.core.ApplicationNotResponding): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class ActivityFramesTracker {
          public static class: java.lang.Class<io.sentry.android.core.ActivityFramesTracker>;
          public takeMetrics(param0: io.sentry.protocol.SentryId): java.util.Map<string, io.sentry.protocol.MeasurementValue>;
          public isFrameMetricsAggregatorAvailable(): boolean;
          public constructor(param0: io.sentry.android.core.LoadClass, param1: io.sentry.android.core.SentryAndroidOptions, param2: io.sentry.android.core.MainLooperHandler);
          public stop(): void;
          public addActivity(param0: globalAndroid.app.Activity): void;
          public constructor(param0: io.sentry.android.core.LoadClass, param1: io.sentry.android.core.SentryAndroidOptions);
          public setMetrics(param0: globalAndroid.app.Activity, param1: io.sentry.protocol.SentryId): void;
        }
        export module ActivityFramesTracker {
          export class FrameCounts {
            public static class: java.lang.Class<io.sentry.android.core.ActivityFramesTracker.FrameCounts>;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class ActivityLifecycleIntegration {
          public static class: java.lang.Class<io.sentry.android.core.ActivityLifecycleIntegration>;
          public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
          public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public onActivityStarted(param0: globalAndroid.app.Activity): void;
          public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public onActivityStopped(param0: globalAndroid.app.Activity): void;
          public onActivityPrePaused(param0: globalAndroid.app.Activity): void;
          public constructor(param0: globalAndroid.app.Application, param1: io.sentry.android.core.BuildInfoProvider, param2: io.sentry.android.core.ActivityFramesTracker);
          public close(): void;
          public onActivityResumed(param0: globalAndroid.app.Activity): void;
          public onActivityPaused(param0: globalAndroid.app.Activity): void;
          public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AndroidCpuCollector {
          public static class: java.lang.Class<io.sentry.android.core.AndroidCpuCollector>;
          public setup(): void;
          public collect(param0: io.sentry.PerformanceCollectionData): void;
          public constructor(param0: io.sentry.ILogger, param1: io.sentry.android.core.BuildInfoProvider);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AndroidDateUtils {
          public static class: java.lang.Class<io.sentry.android.core.AndroidDateUtils>;
          public constructor();
          public static getCurrentSentryDateTime(): io.sentry.SentryDate;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AndroidLogger {
          public static class: java.lang.Class<io.sentry.android.core.AndroidLogger>;
          public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
          public constructor(param0: string);
          public constructor();
          public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
          public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
          public isEnabled(param0: io.sentry.SentryLevel): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AndroidMemoryCollector {
          public static class: java.lang.Class<io.sentry.android.core.AndroidMemoryCollector>;
          public setup(): void;
          public collect(param0: io.sentry.PerformanceCollectionData): void;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AndroidOptionsInitializer {
          public static class: java.lang.Class<io.sentry.android.core.AndroidOptionsInitializer>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AndroidTransactionProfiler {
          public static class: java.lang.Class<io.sentry.android.core.AndroidTransactionProfiler>;
          public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.SentryAndroidOptions, param2: io.sentry.android.core.BuildInfoProvider, param3: io.sentry.android.core.internal.util.SentryFrameMetricsCollector);
          public onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>): io.sentry.ProfilingTraceData;
          public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.SentryAndroidOptions, param2: io.sentry.android.core.BuildInfoProvider, param3: io.sentry.android.core.internal.util.SentryFrameMetricsCollector, param4: io.sentry.IHub);
          public close(): void;
          public onTransactionStart(param0: io.sentry.ITransaction): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AndroidTransportGate {
          public static class: java.lang.Class<io.sentry.android.core.AndroidTransportGate>;
          public isConnected(): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AnrIntegration {
          public static class: java.lang.Class<io.sentry.android.core.AnrIntegration>;
          public constructor(param0: globalAndroid.content.Context);
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public close(): void;
        }
        export module AnrIntegration {
          export class AnrHint {
            public static class: java.lang.Class<io.sentry.android.core.AnrIntegration.AnrHint>;
            public ignoreCurrentThread(): boolean;
            public mechanism(): string;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AnrIntegrationFactory {
          public static class: java.lang.Class<io.sentry.android.core.AnrIntegrationFactory>;
          public static create(param0: globalAndroid.content.Context, param1: io.sentry.android.core.BuildInfoProvider): io.sentry.Integration;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AnrV2EventProcessor {
          public static class: java.lang.Class<io.sentry.android.core.AnrV2EventProcessor>;
          public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
          public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.SentryAndroidOptions, param2: io.sentry.android.core.BuildInfoProvider);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AnrV2Integration {
          public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration>;
          public constructor(param0: globalAndroid.content.Context);
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public close(): void;
        }
        export module AnrV2Integration {
          export class AnrProcessor {
            public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.AnrProcessor>;
            public run(): void;
          }
          export class AnrV2Hint {
            public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.AnrV2Hint>;
            public shouldEnrich(): boolean;
            public timestamp(): java.lang.Long;
            public constructor(param0: number, param1: io.sentry.ILogger, param2: number, param3: boolean, param4: boolean);
            public mechanism(): string;
          }
          export class ParseResult {
            public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.ParseResult>;
          }
          export module ParseResult {
            export class Type {
              public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.ParseResult.Type>;
              public static DUMP: io.sentry.android.core.AnrV2Integration.ParseResult.Type;
              public static NO_DUMP: io.sentry.android.core.AnrV2Integration.ParseResult.Type;
              public static ERROR: io.sentry.android.core.AnrV2Integration.ParseResult.Type;
              public static values(): androidNative.Array<io.sentry.android.core.AnrV2Integration.ParseResult.Type>;
              public static valueOf(param0: string): io.sentry.android.core.AnrV2Integration.ParseResult.Type;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AppComponentsBreadcrumbsIntegration {
          public static class: java.lang.Class<io.sentry.android.core.AppComponentsBreadcrumbsIntegration>;
          public constructor(param0: globalAndroid.content.Context);
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public onTrimMemory(param0: number): void;
          public close(): void;
          public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
          public onLowMemory(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AppLifecycleIntegration {
          public static class: java.lang.Class<io.sentry.android.core.AppLifecycleIntegration>;
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public constructor();
          public close(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AppStartState {
          public static class: java.lang.Class<io.sentry.android.core.AppStartState>;
          public reset(): void;
          public isColdStart(): java.lang.Boolean;
          public getAppStartEndTime(): io.sentry.SentryDate;
          public setAppStartMillis(param0: number): void;
          public static getInstance(): io.sentry.android.core.AppStartState;
          public getAppStartInterval(): java.lang.Long;
          public getAppStartTime(): io.sentry.SentryDate;
          public getAppStartMillis(): java.lang.Long;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class AppState {
          public static class: java.lang.Class<io.sentry.android.core.AppState>;
          public isInBackground(): java.lang.Boolean;
          public static getInstance(): io.sentry.android.core.AppState;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class ApplicationNotResponding {
          public static class: java.lang.Class<io.sentry.android.core.ApplicationNotResponding>;
          public getThread(): java.lang.Thread;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class BuildConfig {
          public static class: java.lang.Class<io.sentry.android.core.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public static SENTRY_ANDROID_SDK_NAME: string;
          public static VERSION_NAME: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class BuildInfoProvider {
          public static class: java.lang.Class<io.sentry.android.core.BuildInfoProvider>;
          public isEmulator(): java.lang.Boolean;
          public getModel(): string;
          public getSdkInfoVersion(): number;
          public constructor(param0: io.sentry.ILogger);
          public getBuildTags(): string;
          public getManufacturer(): string;
          public getVersionRelease(): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class ContextUtils {
          public static class: java.lang.Class<io.sentry.android.core.ContextUtils>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class CurrentActivityHolder {
          public static class: java.lang.Class<io.sentry.android.core.CurrentActivityHolder>;
          public clearActivity(): void;
          public setActivity(param0: globalAndroid.app.Activity): void;
          public getActivity(): globalAndroid.app.Activity;
          public static getInstance(): io.sentry.android.core.CurrentActivityHolder;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class CurrentActivityIntegration {
          public static class: java.lang.Class<io.sentry.android.core.CurrentActivityIntegration>;
          public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public onActivityStarted(param0: globalAndroid.app.Activity): void;
          public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public onActivityStopped(param0: globalAndroid.app.Activity): void;
          public close(): void;
          public constructor(param0: globalAndroid.app.Application);
          public onActivityResumed(param0: globalAndroid.app.Activity): void;
          public onActivityPaused(param0: globalAndroid.app.Activity): void;
          public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class DefaultAndroidEventProcessor {
          public static class: java.lang.Class<io.sentry.android.core.DefaultAndroidEventProcessor>;
          public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
          public getDefaultUser(): io.sentry.protocol.User;
          public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.BuildInfoProvider, param2: io.sentry.android.core.SentryAndroidOptions);
          public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export abstract class EmptySecureContentProvider {
          public static class: java.lang.Class<io.sentry.android.core.EmptySecureContentProvider>;
          public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
          public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
          public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
          public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class EnvelopeFileObserver {
          public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserver>;
          public onEvent(param0: number, param1: string): void;
        }
        export module EnvelopeFileObserver {
          export class CachedEnvelopeHint {
            public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserver.CachedEnvelopeHint>;
            public isRetry(): boolean;
            public waitFlush(): boolean;
            public isSuccess(): boolean;
            public setResult(param0: boolean): void;
            public setRetry(param0: boolean): void;
            public constructor(param0: number, param1: io.sentry.ILogger);
            public reset(): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export abstract class EnvelopeFileObserverIntegration {
          public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserverIntegration>;
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public constructor();
          public close(): void;
          public static getOutboxFileObserver(): io.sentry.android.core.EnvelopeFileObserverIntegration;
        }
        export module EnvelopeFileObserverIntegration {
          export class OutboxEnvelopeFileObserverIntegration extends io.sentry.android.core.EnvelopeFileObserverIntegration {
            public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserverIntegration.OutboxEnvelopeFileObserverIntegration>;
            public getPath(param0: io.sentry.SentryOptions): string;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class IDebugImagesLoader {
          public static class: java.lang.Class<io.sentry.android.core.IDebugImagesLoader>;
          /**
           * Constructs a new instance of the io.sentry.android.core.IDebugImagesLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>; clearDebugImages(): void });
          public constructor();
          public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
          public clearDebugImages(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class Installation {
          public static class: java.lang.Class<io.sentry.android.core.Installation>;
          public static id(param0: globalAndroid.content.Context): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class LifecycleWatcher {
          public static class: java.lang.Class<io.sentry.android.core.LifecycleWatcher>;
          public onStart(param0: androidx.lifecycle.LifecycleOwner): void;
          public onStop(param0: androidx.lifecycle.LifecycleOwner): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class LoadClass {
          public static class: java.lang.Class<io.sentry.android.core.LoadClass>;
          public loadClass(param0: string, param1: io.sentry.ILogger): java.lang.Class<any>;
          public isClassAvailable(param0: string, param1: io.sentry.ILogger): boolean;
          public isClassAvailable(param0: string, param1: io.sentry.SentryOptions): boolean;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class MainLooperHandler {
          public static class: java.lang.Class<io.sentry.android.core.MainLooperHandler>;
          public post(param0: java.lang.Runnable): void;
          public getThread(): java.lang.Thread;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class ManifestMetadataReader {
          public static class: java.lang.Class<io.sentry.android.core.ManifestMetadataReader>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class NdkIntegration {
          public static class: java.lang.Class<io.sentry.android.core.NdkIntegration>;
          public static SENTRY_NDK_CLASS_NAME: string;
          public constructor(param0: java.lang.Class<any>);
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public close(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class NetworkBreadcrumbsIntegration {
          public static class: java.lang.Class<io.sentry.android.core.NetworkBreadcrumbsIntegration>;
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.BuildInfoProvider, param2: io.sentry.ILogger);
          public close(): void;
        }
        export module NetworkBreadcrumbsIntegration {
          export class NetworkBreadcrumbConnectionDetail {
            public static class: java.lang.Class<io.sentry.android.core.NetworkBreadcrumbsIntegration.NetworkBreadcrumbConnectionDetail>;
          }
          export class NetworkBreadcrumbsNetworkCallback {
            public static class: java.lang.Class<io.sentry.android.core.NetworkBreadcrumbsIntegration.NetworkBreadcrumbsNetworkCallback>;
            public onCapabilitiesChanged(param0: globalAndroid.net.Network, param1: globalAndroid.net.NetworkCapabilities): void;
            public onAvailable(param0: globalAndroid.net.Network): void;
            public onLost(param0: globalAndroid.net.Network): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class NoOpDebugImagesLoader extends io.sentry.android.core.IDebugImagesLoader {
          public static class: java.lang.Class<io.sentry.android.core.NoOpDebugImagesLoader>;
          public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
          public clearDebugImages(): void;
          public static getInstance(): io.sentry.android.core.NoOpDebugImagesLoader;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class PerformanceAndroidEventProcessor {
          public static class: java.lang.Class<io.sentry.android.core.PerformanceAndroidEventProcessor>;
          public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
          public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class PhoneStateBreadcrumbsIntegration {
          public static class: java.lang.Class<io.sentry.android.core.PhoneStateBreadcrumbsIntegration>;
          public constructor(param0: globalAndroid.content.Context);
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public close(): void;
        }
        export module PhoneStateBreadcrumbsIntegration {
          export class PhoneStateChangeListener {
            public static class: java.lang.Class<io.sentry.android.core.PhoneStateBreadcrumbsIntegration.PhoneStateChangeListener>;
            public onCallStateChanged(param0: number, param1: string): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class ScreenshotEventProcessor {
          public static class: java.lang.Class<io.sentry.android.core.ScreenshotEventProcessor>;
          public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
          public constructor(param0: io.sentry.android.core.SentryAndroidOptions, param1: io.sentry.android.core.BuildInfoProvider);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class SendCachedEnvelopeIntegration {
          public static class: java.lang.Class<io.sentry.android.core.SendCachedEnvelopeIntegration>;
          public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory, param1: io.sentry.util.LazyEvaluator<java.lang.Boolean>);
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class SentryAndroid {
          public static class: java.lang.Class<io.sentry.android.core.SentryAndroid>;
          public static init(param0: globalAndroid.content.Context): void;
          public static init(param0: globalAndroid.content.Context, param1: io.sentry.ILogger): void;
          public static init(param0: globalAndroid.content.Context, param1: io.sentry.Sentry.OptionsConfiguration<io.sentry.android.core.SentryAndroidOptions>): void;
          public static init(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.Sentry.OptionsConfiguration<io.sentry.android.core.SentryAndroidOptions>): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class SentryAndroidDateProvider {
          public static class: java.lang.Class<io.sentry.android.core.SentryAndroidDateProvider>;
          public constructor();
          public now(): io.sentry.SentryDate;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class SentryAndroidOptions {
          public static class: java.lang.Class<io.sentry.android.core.SentryAndroidOptions>;
          public isReportHistoricalAnrs(): boolean;
          public setDebugImagesLoader(param0: io.sentry.android.core.IDebugImagesLoader): void;
          public getNativeSdkName(): string;
          public setEnableNetworkEventBreadcrumbs(param0: boolean): void;
          public isEnableActivityLifecycleBreadcrumbs(): boolean;
          public setAttachViewHierarchy(param0: boolean): void;
          public setEnableSystemEventBreadcrumbs(param0: boolean): void;
          public setEnableActivityLifecycleTracingAutoFinish(param0: boolean): void;
          public constructor();
          public getAnrTimeoutIntervalMillis(): number;
          public setEnableAppLifecycleBreadcrumbs(param0: boolean): void;
          public getDebugImagesLoader(): io.sentry.android.core.IDebugImagesLoader;
          public isEnableRootCheck(): boolean;
          public getBeforeScreenshotCaptureCallback(): io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback;
          public setEnableAutoActivityLifecycleTracing(param0: boolean): void;
          public isEnableFramesTracking(): boolean;
          public setCollectAdditionalContext(param0: boolean): void;
          public isAttachViewHierarchy(): boolean;
          public isEnableActivityLifecycleTracingAutoFinish(): boolean;
          public isAnrEnabled(): boolean;
          public setAnrEnabled(param0: boolean): void;
          public isEnableAppComponentBreadcrumbs(): boolean;
          public isAnrReportInDebug(): boolean;
          public isEnableAutoActivityLifecycleTracing(): boolean;
          public setEnableRootCheck(param0: boolean): void;
          public setEnableAppComponentBreadcrumbs(param0: boolean): void;
          public enableAllAutoBreadcrumbs(param0: boolean): void;
          public isEnableAppLifecycleBreadcrumbs(): boolean;
          /** @deprecated */
          public setProfilingTracesIntervalMillis(param0: number): void;
          public setReportHistoricalAnrs(param0: boolean): void;
          public setAttachAnrThreadDump(param0: boolean): void;
          public setNativeSdkName(param0: string): void;
          public setEnableActivityLifecycleBreadcrumbs(param0: boolean): void;
          public isCollectAdditionalContext(): boolean;
          public getBeforeViewHierarchyCaptureCallback(): io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback;
          public getStartupCrashDurationThresholdMillis(): number;
          public setBeforeViewHierarchyCaptureCallback(param0: io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback): void;
          /** @deprecated */
          public getProfilingTracesIntervalMillis(): number;
          public isAttachScreenshot(): boolean;
          public isEnableNetworkEventBreadcrumbs(): boolean;
          public isEnableSystemEventBreadcrumbs(): boolean;
          public setProfilingTracesHz(param0: number): void;
          public setAnrReportInDebug(param0: boolean): void;
          public setBeforeScreenshotCaptureCallback(param0: io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback): void;
          public setAnrTimeoutIntervalMillis(param0: number): void;
          public isAttachAnrThreadDump(): boolean;
          public setAttachScreenshot(param0: boolean): void;
          public getProfilingTracesHz(): number;
          public setEnableFramesTracking(param0: boolean): void;
        }
        export module SentryAndroidOptions {
          export class BeforeCaptureCallback {
            public static class: java.lang.Class<io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback>;
            /**
             * Constructs a new instance of the io.sentry.android.core.SentryAndroidOptions$BeforeCaptureCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: boolean): boolean });
            public constructor();
            public execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: boolean): boolean;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class SentryInitProvider extends io.sentry.android.core.EmptySecureContentProvider {
          public static class: java.lang.Class<io.sentry.android.core.SentryInitProvider>;
          public shutdown(): void;
          public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
          public constructor();
          public onCreate(): boolean;
          public getType(param0: globalAndroid.net.Uri): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class SentryLogcatAdapter {
          public static class: java.lang.Class<io.sentry.android.core.SentryLogcatAdapter>;
          public static e(param0: string, param1: string): number;
          public static w(param0: string, param1: java.lang.Throwable): number;
          public static i(param0: string, param1: string): number;
          public static v(param0: string, param1: string): number;
          public static wtf(param0: string, param1: java.lang.Throwable): number;
          public static wtf(param0: string, param1: string, param2: java.lang.Throwable): number;
          public static i(param0: string, param1: string, param2: java.lang.Throwable): number;
          public static w(param0: string, param1: string): number;
          public static v(param0: string, param1: string, param2: java.lang.Throwable): number;
          public static d(param0: string, param1: string, param2: java.lang.Throwable): number;
          public constructor();
          public static e(param0: string, param1: string, param2: java.lang.Throwable): number;
          public static wtf(param0: string, param1: string): number;
          public static w(param0: string, param1: string, param2: java.lang.Throwable): number;
          public static d(param0: string, param1: string): number;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class SentryPerformanceProvider extends io.sentry.android.core.EmptySecureContentProvider {
          public static class: java.lang.Class<io.sentry.android.core.SentryPerformanceProvider>;
          public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public onActivityStarted(param0: globalAndroid.app.Activity): void;
          public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public onActivityStopped(param0: globalAndroid.app.Activity): void;
          public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
          public constructor();
          public onCreate(): boolean;
          public getType(param0: globalAndroid.net.Uri): string;
          public onActivityResumed(param0: globalAndroid.app.Activity): void;
          public onActivityPaused(param0: globalAndroid.app.Activity): void;
          public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class SystemEventsBreadcrumbsIntegration {
          public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration>;
          public constructor(param0: globalAndroid.content.Context);
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public close(): void;
          public constructor(param0: globalAndroid.content.Context, param1: java.util.List<string>);
        }
        export module SystemEventsBreadcrumbsIntegration {
          export class SystemEventsBroadcastReceiver {
            public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration.SystemEventsBroadcastReceiver>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class TempSensorBreadcrumbsIntegration {
          public static class: java.lang.Class<io.sentry.android.core.TempSensorBreadcrumbsIntegration>;
          public constructor(param0: globalAndroid.content.Context);
          public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
          public close(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class UserInteractionIntegration {
          public static class: java.lang.Class<io.sentry.android.core.UserInteractionIntegration>;
          public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public constructor(param0: globalAndroid.app.Application, param1: io.sentry.android.core.LoadClass);
          public onActivityStarted(param0: globalAndroid.app.Activity): void;
          public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public onActivityStopped(param0: globalAndroid.app.Activity): void;
          public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
          public close(): void;
          public onActivityResumed(param0: globalAndroid.app.Activity): void;
          public onActivityPaused(param0: globalAndroid.app.Activity): void;
          public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export class ViewHierarchyEventProcessor {
          public static class: java.lang.Class<io.sentry.android.core.ViewHierarchyEventProcessor>;
          public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
          public static snapshotViewHierarchy(param0: globalAndroid.app.Activity, param1: io.sentry.ILogger): io.sentry.protocol.ViewHierarchy;
          public constructor(param0: io.sentry.android.core.SentryAndroidOptions);
          public static snapshotViewHierarchy(param0: globalAndroid.view.View): io.sentry.protocol.ViewHierarchy;
          public static snapshotViewHierarchyAsData(param0: globalAndroid.app.Activity, param1: io.sentry.util.thread.IMainThreadChecker, param2: io.sentry.ISerializer, param3: io.sentry.ILogger): androidNative.Array<number>;
          public static snapshotViewHierarchy(param0: globalAndroid.view.View, param1: java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>): io.sentry.protocol.ViewHierarchy;
          public static snapshotViewHierarchy(param0: globalAndroid.app.Activity, param1: java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>, param2: io.sentry.util.thread.IMainThreadChecker, param3: io.sentry.ILogger): io.sentry.protocol.ViewHierarchy;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module cache {
          export class AndroidEnvelopeCache {
            public static class: java.lang.Class<io.sentry.android.core.cache.AndroidEnvelopeCache>;
            public static LAST_ANR_REPORT: string;
            public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
            public constructor(param0: io.sentry.android.core.SentryAndroidOptions);
            public getDirectory(): java.io.File;
            public static lastReportedAnr(param0: io.sentry.SentryOptions): java.lang.Long;
            public static hasStartupCrashMarker(param0: io.sentry.SentryOptions): boolean;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module debugmeta {
            export class AssetsDebugMetaLoader {
              public static class: java.lang.Class<io.sentry.android.core.internal.debugmeta.AssetsDebugMetaLoader>;
              public constructor(param0: globalAndroid.content.Context, param1: io.sentry.ILogger);
              public loadDebugMeta(): java.util.Properties;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module gestures {
            export class AndroidViewGestureTargetLocator {
              public static class: java.lang.Class<io.sentry.android.core.internal.gestures.AndroidViewGestureTargetLocator>;
              public locate(param0: any, param1: number, param2: number, param3: io.sentry.internal.gestures.UiElement.Type): io.sentry.internal.gestures.UiElement;
              public constructor(param0: boolean);
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module gestures {
            export class NoOpWindowCallback {
              public static class: java.lang.Class<io.sentry.android.core.internal.gestures.NoOpWindowCallback>;
              public constructor();
              public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
              public onDetachedFromWindow(): void;
              public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
              public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
              public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
              public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
              public onContentChanged(): void;
              public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
              public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
              public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
              public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
              public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
              public onWindowFocusChanged(param0: boolean): void;
              public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
              public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
              public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
              public onAttachedToWindow(): void;
              public onCreatePanelView(param0: number): globalAndroid.view.View;
              public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
              public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
              public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
              public onSearchRequested(): boolean;
              public onSearchRequested(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module gestures {
            export class SentryGestureListener {
              public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryGestureListener>;
              public onDown(param0: globalAndroid.view.MotionEvent): boolean;
              public onUp(param0: globalAndroid.view.MotionEvent): void;
              public constructor(param0: globalAndroid.app.Activity, param1: io.sentry.IHub, param2: io.sentry.android.core.SentryAndroidOptions);
              public onLongPress(param0: globalAndroid.view.MotionEvent): void;
              public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
              public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
              public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
              public onShowPress(param0: globalAndroid.view.MotionEvent): void;
            }
            export module SentryGestureListener {
              export class ScrollState {
                public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryGestureListener.ScrollState>;
              }
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module gestures {
            export class SentryWindowCallback extends io.sentry.android.core.internal.gestures.WindowCallbackAdapter {
              public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryWindowCallback>;
              public constructor(param0: globalAndroid.view.Window.Callback, param1: globalAndroid.content.Context, param2: io.sentry.android.core.internal.gestures.SentryGestureListener, param3: io.sentry.SentryOptions);
              public getDelegate(): globalAndroid.view.Window.Callback;
              public stopTracking(): void;
              public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
            }
            export module SentryWindowCallback {
              export class MotionEventObtainer {
                public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryWindowCallback.MotionEventObtainer>;
                /**
                 * Constructs a new instance of the io.sentry.android.core.internal.gestures.SentryWindowCallback$MotionEventObtainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { obtain(param0: globalAndroid.view.MotionEvent): globalAndroid.view.MotionEvent });
                public constructor();
                public obtain(param0: globalAndroid.view.MotionEvent): globalAndroid.view.MotionEvent;
              }
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module gestures {
            export class ViewUtils {
              public static class: java.lang.Class<io.sentry.android.core.internal.gestures.ViewUtils>;
              public constructor();
              public static getResourceId(param0: globalAndroid.view.View): string;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module gestures {
            export class WindowCallbackAdapter {
              public static class: java.lang.Class<io.sentry.android.core.internal.gestures.WindowCallbackAdapter>;
              public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
              public onDetachedFromWindow(): void;
              public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
              public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
              public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
              public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
              public onContentChanged(): void;
              public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
              public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
              public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
              public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
              public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
              public onWindowFocusChanged(param0: boolean): void;
              public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
              public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
              public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
              public onAttachedToWindow(): void;
              public onCreatePanelView(param0: number): globalAndroid.view.View;
              public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
              public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
              public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
              public onSearchRequested(): boolean;
              public onSearchRequested(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module modules {
            export class AssetsModulesLoader {
              public static class: java.lang.Class<io.sentry.android.core.internal.modules.AssetsModulesLoader>;
              public loadModules(): java.util.Map<string, string>;
              public constructor(param0: globalAndroid.content.Context, param1: io.sentry.ILogger);
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module threaddump {
            export class Line {
              public static class: java.lang.Class<io.sentry.android.core.internal.threaddump.Line>;
              public lineno: number;
              public text: string;
              public constructor(param0: number, param1: string);
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module threaddump {
            export class Lines {
              public static class: java.lang.Class<io.sentry.android.core.internal.threaddump.Lines>;
              public pos: number;
              public constructor(param0: java.util.ArrayList<any>);
              public hasNext(): boolean;
              public static readLines(param0: java.io.BufferedReader): io.sentry.android.core.internal.threaddump.Lines;
              public rewind(): void;
              public static readLines(param0: java.io.File): io.sentry.android.core.internal.threaddump.Lines;
              public next(): io.sentry.android.core.internal.threaddump.Line;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module threaddump {
            export class ThreadDumpParser {
              public static class: java.lang.Class<io.sentry.android.core.internal.threaddump.ThreadDumpParser>;
              public parse(param0: io.sentry.android.core.internal.threaddump.Lines): java.util.List<io.sentry.protocol.SentryThread>;
              public constructor(param0: io.sentry.SentryOptions, param1: boolean);
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class AndroidCurrentDateProvider {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.AndroidCurrentDateProvider>;
              public static getInstance(): io.sentry.transport.ICurrentDateProvider;
              public getCurrentTimeMillis(): number;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class AndroidMainThreadChecker {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.AndroidMainThreadChecker>;
              public isMainThread(param0: number): boolean;
              public static getInstance(): io.sentry.android.core.internal.util.AndroidMainThreadChecker;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class BreadcrumbFactory {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.BreadcrumbFactory>;
              public constructor();
              public static forSession(param0: string): io.sentry.Breadcrumb;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class ConnectivityChecker {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.ConnectivityChecker>;
              public static getConnectionType(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider): string;
              public static registerNetworkCallback(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider, param3: globalAndroid.net.ConnectivityManager.NetworkCallback): boolean;
              public static unregisterNetworkCallback(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider, param3: globalAndroid.net.ConnectivityManager.NetworkCallback): void;
              public static getConnectionType(param0: globalAndroid.net.NetworkCapabilities, param1: io.sentry.android.core.BuildInfoProvider): string;
              public static getConnectionStatus(param0: globalAndroid.content.Context, param1: io.sentry.ILogger): io.sentry.android.core.internal.util.ConnectivityChecker.Status;
            }
            export module ConnectivityChecker {
              export class Status {
                public static class: java.lang.Class<io.sentry.android.core.internal.util.ConnectivityChecker.Status>;
                public static CONNECTED: io.sentry.android.core.internal.util.ConnectivityChecker.Status;
                public static NOT_CONNECTED: io.sentry.android.core.internal.util.ConnectivityChecker.Status;
                public static NO_PERMISSION: io.sentry.android.core.internal.util.ConnectivityChecker.Status;
                public static UNKNOWN: io.sentry.android.core.internal.util.ConnectivityChecker.Status;
                public static valueOf(param0: string): io.sentry.android.core.internal.util.ConnectivityChecker.Status;
                public static values(): androidNative.Array<io.sentry.android.core.internal.util.ConnectivityChecker.Status>;
              }
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class ContentProviderSecurityChecker {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.ContentProviderSecurityChecker>;
              public constructor();
              public constructor(param0: io.sentry.android.core.BuildInfoProvider);
              public checkPrivilegeEscalation(param0: globalAndroid.content.ContentProvider): void;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class CpuInfoUtils {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.CpuInfoUtils>;
              public static getInstance(): io.sentry.android.core.internal.util.CpuInfoUtils;
              public readMaxFrequencies(): java.util.List<java.lang.Integer>;
              public setCpuMaxFrequencies(param0: java.util.List<java.lang.Integer>): void;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class Debouncer {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.Debouncer>;
              public checkForDebounce(): boolean;
              public constructor(param0: io.sentry.transport.ICurrentDateProvider, param1: number);
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class DeviceOrientations {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.DeviceOrientations>;
              public static getOrientation(param0: number): io.sentry.protocol.Device.DeviceOrientation;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class FirstDrawDoneListener {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.FirstDrawDoneListener>;
              public static registerForNextDraw(param0: globalAndroid.view.View, param1: java.lang.Runnable, param2: io.sentry.android.core.BuildInfoProvider): void;
              public onDraw(): void;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class Permissions {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.Permissions>;
              public static hasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class RootChecker {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.RootChecker>;
              public isDeviceRooted(): boolean;
              public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.BuildInfoProvider, param2: io.sentry.ILogger);
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class ScreenshotUtils {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.ScreenshotUtils>;
              public constructor();
              public static takeScreenshot(param0: globalAndroid.app.Activity, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider): androidNative.Array<number>;
              public static takeScreenshot(param0: globalAndroid.app.Activity, param1: io.sentry.util.thread.IMainThreadChecker, param2: io.sentry.ILogger, param3: io.sentry.android.core.BuildInfoProvider): androidNative.Array<number>;
            }
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module core {
        export module internal {
          export module util {
            export class SentryFrameMetricsCollector {
              public static class: java.lang.Class<io.sentry.android.core.internal.util.SentryFrameMetricsCollector>;
              public onActivityPaused(param0: globalAndroid.app.Activity): void;
              public onActivityStarted(param0: globalAndroid.app.Activity): void;
              public constructor(param0: globalAndroid.content.Context, param1: io.sentry.SentryOptions, param2: io.sentry.android.core.BuildInfoProvider);
              public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
              public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
              public onActivityResumed(param0: globalAndroid.app.Activity): void;
              public startCollection(param0: io.sentry.android.core.internal.util.SentryFrameMetricsCollector.FrameMetricsCollectorListener): string;
              public stopCollection(param0: string): void;
              public constructor(param0: globalAndroid.content.Context, param1: io.sentry.SentryOptions, param2: io.sentry.android.core.BuildInfoProvider, param3: io.sentry.android.core.internal.util.SentryFrameMetricsCollector.WindowFrameMetricsManager);
              public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
              public onActivityStopped(param0: globalAndroid.app.Activity): void;
            }
            export module SentryFrameMetricsCollector {
              export class FrameMetricsCollectorListener {
                public static class: java.lang.Class<io.sentry.android.core.internal.util.SentryFrameMetricsCollector.FrameMetricsCollectorListener>;
                /**
                 * Constructs a new instance of the io.sentry.android.core.internal.util.SentryFrameMetricsCollector$FrameMetricsCollectorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onFrameMetricCollected(param0: number, param1: number, param2: number): void });
                public constructor();
                public onFrameMetricCollected(param0: number, param1: number, param2: number): void;
              }
              export class WindowFrameMetricsManager {
                public static class: java.lang.Class<io.sentry.android.core.internal.util.SentryFrameMetricsCollector.WindowFrameMetricsManager>;
                /**
                 * Constructs a new instance of the io.sentry.android.core.internal.util.SentryFrameMetricsCollector$WindowFrameMetricsManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { addOnFrameMetricsAvailableListener(param0: globalAndroid.view.Window, param1: globalAndroid.view.Window.OnFrameMetricsAvailableListener, param2: globalAndroid.os.Handler): void; removeOnFrameMetricsAvailableListener(param0: globalAndroid.view.Window, param1: globalAndroid.view.Window.OnFrameMetricsAvailableListener): void });
                public constructor();
                public removeOnFrameMetricsAvailableListener(param0: globalAndroid.view.Window, param1: globalAndroid.view.Window.OnFrameMetricsAvailableListener): void;
                public addOnFrameMetricsAvailableListener(param0: globalAndroid.view.Window, param1: globalAndroid.view.Window.OnFrameMetricsAvailableListener, param2: globalAndroid.os.Handler): void;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
