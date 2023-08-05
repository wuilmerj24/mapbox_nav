declare module io {
  export module sentry {
    export class AsyncHttpTransportFactory extends io.sentry.ITransportFactory {
      public static class: java.lang.Class<io.sentry.AsyncHttpTransportFactory>;
      public constructor();
      public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
    }
  }
}

declare module io {
  export module sentry {
    export class Attachment {
      public static class: java.lang.Class<io.sentry.Attachment>;
      public getFilename(): string;
      public constructor(param0: androidNative.Array<number>, param1: string, param2: string);
      public getPathname(): string;
      public constructor(param0: androidNative.Array<number>, param1: string, param2: string, param3: boolean);
      public constructor(param0: string, param1: string, param2: string);
      public getContentType(): string;
      public constructor(param0: io.sentry.JsonSerializable, param1: string, param2: string, param3: string, param4: boolean);
      public constructor(param0: string, param1: string);
      public getBytes(): androidNative.Array<number>;
      public constructor(param0: androidNative.Array<number>, param1: string, param2: string, param3: string, param4: boolean);
      public constructor(param0: androidNative.Array<number>, param1: string);
      public getAttachmentType(): string;
      public constructor(param0: string, param1: string, param2: string, param3: boolean, param4: string);
      public static fromScreenshot(param0: androidNative.Array<number>): io.sentry.Attachment;
      public static fromViewHierarchy(param0: io.sentry.protocol.ViewHierarchy): io.sentry.Attachment;
      public constructor(param0: string, param1: string, param2: string, param3: boolean);
      public static fromThreadDump(param0: androidNative.Array<number>): io.sentry.Attachment;
      public constructor(param0: string);
      public constructor(param0: string, param1: string, param2: string, param3: string, param4: boolean);
      public getSerializable(): io.sentry.JsonSerializable;
    }
  }
}

declare module io {
  export module sentry {
    export class BackfillingEventProcessor extends io.sentry.EventProcessor {
      public static class: java.lang.Class<io.sentry.BackfillingEventProcessor>;
      /**
       * Constructs a new instance of the io.sentry.BackfillingEventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent; process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction });
      public constructor();
      public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
      public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
    }
  }
}

declare module io {
  export module sentry {
    export class Baggage {
      public static class: java.lang.Class<io.sentry.Baggage>;
      public setUserId(param0: string): void;
      public static fromHeader(param0: java.util.List<string>): io.sentry.Baggage;
      public constructor(param0: io.sentry.ILogger);
      public toTraceContext(): io.sentry.TraceContext;
      public setPublicKey(param0: string): void;
      public getTraceId(): string;
      public setValuesFromTransaction(param0: io.sentry.ITransaction, param1: io.sentry.protocol.User, param2: io.sentry.SentryOptions, param3: io.sentry.TracesSamplingDecision): void;
      public getRelease(): string;
      public toHeaderString(param0: string): string;
      public static fromHeader(param0: string, param1: io.sentry.ILogger): io.sentry.Baggage;
      public setValuesFromScope(param0: io.sentry.Scope, param1: io.sentry.SentryOptions): void;
      public getSampleRateDouble(): java.lang.Double;
      public static fromHeader(param0: java.util.List<string>, param1: boolean, param2: io.sentry.ILogger): io.sentry.Baggage;
      public setTraceId(param0: string): void;
      public getEnvironment(): string;
      public getUserId(): string;
      public get(param0: string): string;
      public constructor(param0: java.util.Map<string, string>, param1: string, param2: boolean, param3: io.sentry.ILogger);
      public isMutable(): boolean;
      public setTransaction(param0: string): void;
      public constructor(param0: io.sentry.Baggage);
      public static fromHeader(param0: java.util.List<string>, param1: io.sentry.ILogger): io.sentry.Baggage;
      public getThirdPartyHeader(): string;
      public set(param0: string, param1: string): void;
      public getPublicKey(): string;
      public getUserSegment(): string;
      public getTransaction(): string;
      public setSampleRate(param0: string): void;
      public getUnknown(): java.util.Map<string, any>;
      public freeze(): void;
      public setEnvironment(param0: string): void;
      public static fromHeader(param0: string): io.sentry.Baggage;
      public setRelease(param0: string): void;
      public static fromHeader(param0: string, param1: boolean, param2: io.sentry.ILogger): io.sentry.Baggage;
      public setUserSegment(param0: string): void;
      public getSampleRate(): string;
    }
    export module Baggage {
      export class DSCKeys {
        public static class: java.lang.Class<io.sentry.Baggage.DSCKeys>;
        public static TRACE_ID: string;
        public static PUBLIC_KEY: string;
        public static RELEASE: string;
        public static USER_ID: string;
        public static ENVIRONMENT: string;
        public static USER_SEGMENT: string;
        public static TRANSACTION: string;
        public static SAMPLE_RATE: string;
        public static ALL: java.util.List<string>;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class BaggageHeader {
      public static class: java.lang.Class<io.sentry.BaggageHeader>;
      public static BAGGAGE_HEADER: string;
      public static fromBaggageAndOutgoingHeader(param0: io.sentry.Baggage, param1: java.util.List<string>): io.sentry.BaggageHeader;
      public getName(): string;
      public getValue(): string;
      public constructor(param0: string);
    }
  }
}

declare module io {
  export module sentry {
    export class Breadcrumb implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.Breadcrumb>;
      public static userInteraction(param0: string, param1: string, param2: string): io.sentry.Breadcrumb;
      public static userInteraction(param0: string, param1: string, param2: string, param3: java.util.Map<string, any>): io.sentry.Breadcrumb;
      public equals(param0: any): boolean;
      public removeData(param0: string): void;
      public setUnknown(param0: java.util.Map<string, any>): void;
      public static user(param0: string, param1: string): io.sentry.Breadcrumb;
      public static query(param0: string): io.sentry.Breadcrumb;
      public getData(param0: string): any;
      public getMessage(): string;
      public static fromMap(param0: java.util.Map<string, any>, param1: io.sentry.SentryOptions): io.sentry.Breadcrumb;
      public static ui(param0: string, param1: string): io.sentry.Breadcrumb;
      public getData(): java.util.Map<string, any>;
      public static userInteraction(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string, any>): io.sentry.Breadcrumb;
      public static http(param0: string, param1: string, param2: java.lang.Integer): io.sentry.Breadcrumb;
      public getTimestamp(): java.util.Date;
      public setData(param0: string, param1: any): void;
      public setLevel(param0: io.sentry.SentryLevel): void;
      public constructor(param0: java.util.Date);
      public static debug(param0: string): io.sentry.Breadcrumb;
      public setCategory(param0: string): void;
      public static info(param0: string): io.sentry.Breadcrumb;
      public static http(param0: string, param1: string): io.sentry.Breadcrumb;
      public getType(): string;
      public constructor(param0: string);
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public static error(param0: string): io.sentry.Breadcrumb;
      public constructor();
      public static navigation(param0: string, param1: string): io.sentry.Breadcrumb;
      public setMessage(param0: string): void;
      public getUnknown(): java.util.Map<string, any>;
      public static transaction(param0: string): io.sentry.Breadcrumb;
      public setType(param0: string): void;
      public getLevel(): io.sentry.SentryLevel;
      public getCategory(): string;
      public hashCode(): number;
    }
    export module Breadcrumb {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.Breadcrumb> {
        public static class: java.lang.Class<io.sentry.Breadcrumb.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.Breadcrumb;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.Breadcrumb.JsonKeys>;
        public static TIMESTAMP: string;
        public static MESSAGE: string;
        public static TYPE: string;
        public static DATA: string;
        public static CATEGORY: string;
        public static LEVEL: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class BuildConfig {
      public static class: java.lang.Class<io.sentry.BuildConfig>;
      public static SENTRY_JAVA_SDK_NAME: string;
      public static VERSION_NAME: string;
    }
  }
}

declare module io {
  export module sentry {
    export class CircularFifoQueue<E> extends java.util.AbstractCollection<any> {
      public static class: java.lang.Class<io.sentry.CircularFifoQueue<any>>;
      public isFull(): boolean;
      public clear(): void;
      public size(): number;
      public isEmpty(): boolean;
      public poll(): any;
      public isAtFullCapacity(): boolean;
      public constructor();
      public constructor(param0: java.util.Collection<any>);
      public maxSize(): number;
      public peek(): any;
      public offer(param0: any): boolean;
      public remove(): any;
      public add(param0: any): boolean;
      public get(param0: number): any;
      public element(): any;
      public iterator(): java.util.Iterator<any>;
    }
  }
}

declare module io {
  export module sentry {
    export class CpuCollectionData {
      public static class: java.lang.Class<io.sentry.CpuCollectionData>;
      public getTimestampMillis(): number;
      public getCpuUsagePercentage(): number;
      public constructor(param0: number, param1: number);
    }
  }
}

declare module io {
  export module sentry {
    export class CustomSamplingContext {
      public static class: java.lang.Class<io.sentry.CustomSamplingContext>;
      public set(param0: string, param1: any): void;
      public get(param0: string): any;
      public getData(): java.util.Map<string, any>;
      public constructor();
    }
  }
}

declare module io {
  export module sentry {
    export class DataCategory {
      public static class: java.lang.Class<io.sentry.DataCategory>;
      public static All: io.sentry.DataCategory;
      public static Default: io.sentry.DataCategory;
      public static Error: io.sentry.DataCategory;
      public static Session: io.sentry.DataCategory;
      public static Attachment: io.sentry.DataCategory;
      public static Profile: io.sentry.DataCategory;
      public static Transaction: io.sentry.DataCategory;
      public static Security: io.sentry.DataCategory;
      public static UserReport: io.sentry.DataCategory;
      public static Unknown: io.sentry.DataCategory;
      public static valueOf(param0: string): io.sentry.DataCategory;
      public static values(): androidNative.Array<io.sentry.DataCategory>;
      public getCategory(): string;
    }
  }
}

declare module io {
  export module sentry {
    export class DateUtils {
      public static class: java.lang.Class<io.sentry.DateUtils>;
      public static getCurrentDateTime(): java.util.Date;
      public static millisToNanos(param0: number): number;
      public static millisToSeconds(param0: number): number;
      public static nanosToMillis(param0: number): number;
      public static toUtilDateNotNull(param0: io.sentry.SentryDate): java.util.Date;
      public static getDateTime(param0: string): java.util.Date;
      public static toUtilDate(param0: io.sentry.SentryDate): java.util.Date;
      public static getTimestamp(param0: java.util.Date): string;
      public static nanosToDate(param0: number): java.util.Date;
      public static secondsToNanos(param0: number): number;
      public static getDateTimeWithMillisPrecision(param0: string): java.util.Date;
      public static nanosToSeconds(param0: number): number;
      public static dateToSeconds(param0: java.util.Date): number;
      public static dateToNanos(param0: java.util.Date): number;
      public static getDateTime(param0: number): java.util.Date;
    }
  }
}

declare module io {
  export module sentry {
    export class DefaultTransactionPerformanceCollector extends io.sentry.TransactionPerformanceCollector {
      public static class: java.lang.Class<io.sentry.DefaultTransactionPerformanceCollector>;
      public constructor(param0: io.sentry.SentryOptions);
      public start(param0: io.sentry.ITransaction): void;
      public stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
      public close(): void;
    }
  }
}

declare module io {
  export module sentry {
    export class DiagnosticLogger extends io.sentry.ILogger {
      public static class: java.lang.Class<io.sentry.DiagnosticLogger>;
      public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
      public isEnabled(param0: io.sentry.SentryLevel): boolean;
      public getLogger(): io.sentry.ILogger;
      public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
      public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.ILogger);
      public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
    }
  }
}

declare module io {
  export module sentry {
    export abstract class DirectoryProcessor {
      public static class: java.lang.Class<io.sentry.DirectoryProcessor>;
      public processFile(param0: java.io.File, param1: io.sentry.Hint): void;
      public processDirectory(param0: java.io.File): void;
      public isRelevantFileName(param0: string): boolean;
    }
    export module DirectoryProcessor {
      export class SendCachedEnvelopeHint implements io.sentry.hints.Cached, io.sentry.hints.Retryable, io.sentry.hints.SubmissionResult, io.sentry.hints.Flushable {
        public static class: java.lang.Class<io.sentry.DirectoryProcessor.SendCachedEnvelopeHint>;
        public isRetry(): boolean;
        public setResult(param0: boolean): void;
        public constructor(param0: number, param1: io.sentry.ILogger);
        public setRetry(param0: boolean): void;
        public isSuccess(): boolean;
        public waitFlush(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class Dsn {
      public static class: java.lang.Class<io.sentry.Dsn>;
      public getSecretKey(): string;
      public getPublicKey(): string;
      public getPath(): string;
      public getProjectId(): string;
    }
  }
}

declare module io {
  export module sentry {
    export class DsnUtil {
      public static class: java.lang.Class<io.sentry.DsnUtil>;
      public static urlContainsDsnHost(param0: io.sentry.SentryOptions, param1: string): boolean;
      public constructor();
    }
  }
}

declare module io {
  export module sentry {
    export class DuplicateEventDetectionEventProcessor extends io.sentry.EventProcessor {
      public static class: java.lang.Class<io.sentry.DuplicateEventDetectionEventProcessor>;
      public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
      public constructor(param0: io.sentry.SentryOptions);
      public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
    }
  }
}

declare module io {
  export module sentry {
    export class EnvelopeReader extends io.sentry.IEnvelopeReader {
      public static class: java.lang.Class<io.sentry.EnvelopeReader>;
      public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
      public constructor(param0: io.sentry.ISerializer);
    }
  }
}

declare module io {
  export module sentry {
    export class EnvelopeSender extends io.sentry.DirectoryProcessor implements io.sentry.IEnvelopeSender {
      public static class: java.lang.Class<io.sentry.EnvelopeSender>;
      public processFile(param0: java.io.File, param1: io.sentry.Hint): void;
      public constructor(param0: io.sentry.IHub, param1: io.sentry.ISerializer, param2: io.sentry.ILogger, param3: number);
      public processEnvelopeFile(param0: string, param1: io.sentry.Hint): void;
      public isRelevantFileName(param0: string): boolean;
    }
  }
}

declare module io {
  export module sentry {
    export class EventProcessor {
      public static class: java.lang.Class<io.sentry.EventProcessor>;
      /**
       * Constructs a new instance of the io.sentry.EventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent; process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction });
      public constructor();
      public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
      public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
    }
  }
}

declare module io {
  export module sentry {
    export class ExternalOptions {
      public static class: java.lang.Class<io.sentry.ExternalOptions>;
      public setEnableTracing(param0: java.lang.Boolean): void;
      public setEnableUncaughtExceptionHandler(param0: java.lang.Boolean): void;
      public setServerName(param0: string): void;
      public setTracesSampleRate(param0: java.lang.Double): void;
      public setProfilesSampleRate(param0: java.lang.Double): void;
      public getRelease(): string;
      public getEnableDeduplication(): java.lang.Boolean;
      public getContextTags(): java.util.List<string>;
      public getInAppIncludes(): java.util.List<string>;
      public addBundleId(param0: string): void;
      /** @deprecated */
      public getTracingOrigins(): java.util.List<string>;
      public getProfilesSampleRate(): java.lang.Double;
      public addInAppInclude(param0: string): void;
      public setMaxRequestBodySize(param0: io.sentry.SentryOptions.RequestSize): void;
      public setProguardUuid(param0: string): void;
      public getSendClientReports(): java.lang.Boolean;
      public getProguardUuid(): string;
      public constructor();
      public getDist(): string;
      public getDebug(): java.lang.Boolean;
      public setEnvironment(param0: string): void;
      public setDebug(param0: java.lang.Boolean): void;
      public setRelease(param0: string): void;
      public getBundleIds(): java.util.Set<string>;
      public getServerName(): string;
      /** @deprecated */
      public addTracingOrigin(param0: string): void;
      public addContextTag(param0: string): void;
      public getIdleTimeout(): java.lang.Long;
      public getTracePropagationTargets(): java.util.List<string>;
      public addInAppExclude(param0: string): void;
      public getProxy(): io.sentry.SentryOptions.Proxy;
      public getTracesSampleRate(): java.lang.Double;
      public getIgnoredExceptionsForType(): java.util.Set<java.lang.Class<any>>;
      public getTags(): java.util.Map<string, string>;
      public getInAppExcludes(): java.util.List<string>;
      public getEnableUncaughtExceptionHandler(): java.lang.Boolean;
      public addIgnoredExceptionForType(param0: java.lang.Class<any>): void;
      public getEnvironment(): string;
      public setDist(param0: string): void;
      public setTag(param0: string, param1: string): void;
      public setIdleTimeout(param0: java.lang.Long): void;
      public getDsn(): string;
      public setProxy(param0: io.sentry.SentryOptions.Proxy): void;
      public addTracePropagationTarget(param0: string): void;
      public setDsn(param0: string): void;
      public getMaxRequestBodySize(): io.sentry.SentryOptions.RequestSize;
      public getEnableTracing(): java.lang.Boolean;
      public static from(param0: io.sentry.config.PropertiesProvider, param1: io.sentry.ILogger): io.sentry.ExternalOptions;
      public setSendClientReports(param0: java.lang.Boolean): void;
      public getPrintUncaughtStackTrace(): java.lang.Boolean;
      public setPrintUncaughtStackTrace(param0: java.lang.Boolean): void;
      public setEnableDeduplication(param0: java.lang.Boolean): void;
    }
  }
}

declare module io {
  export module sentry {
    export class FullyDisplayedReporter {
      public static class: java.lang.Class<io.sentry.FullyDisplayedReporter>;
      public registerFullyDrawnListener(param0: io.sentry.FullyDisplayedReporter.FullyDisplayedReporterListener): void;
      public reportFullyDrawn(): void;
      public static getInstance(): io.sentry.FullyDisplayedReporter;
    }
    export module FullyDisplayedReporter {
      export class FullyDisplayedReporterListener {
        public static class: java.lang.Class<io.sentry.FullyDisplayedReporter.FullyDisplayedReporterListener>;
        /**
         * Constructs a new instance of the io.sentry.FullyDisplayedReporter$FullyDisplayedReporterListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onFullyDrawn(): void });
        public constructor();
        public onFullyDrawn(): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class Hint {
      public static class: java.lang.Class<io.sentry.Hint>;
      public static withAttachment(param0: io.sentry.Attachment): io.sentry.Hint;
      public clear(): void;
      public set(param0: string, param1: any): void;
      public get(param0: string): any;
      public getThreadDump(): io.sentry.Attachment;
      public clearAttachments(): void;
      public getAttachments(): java.util.List<io.sentry.Attachment>;
      public setScreenshot(param0: io.sentry.Attachment): void;
      public setThreadDump(param0: io.sentry.Attachment): void;
      public getViewHierarchy(): io.sentry.Attachment;
      public constructor();
      public static withAttachments(param0: java.util.List<io.sentry.Attachment>): io.sentry.Hint;
      public getAs(param0: string, param1: java.lang.Class<any>): any;
      public remove(param0: string): void;
      public addAttachments(param0: java.util.List<io.sentry.Attachment>): void;
      public replaceAttachments(param0: java.util.List<io.sentry.Attachment>): void;
      public addAttachment(param0: io.sentry.Attachment): void;
      public setViewHierarchy(param0: io.sentry.Attachment): void;
      public getScreenshot(): io.sentry.Attachment;
    }
  }
}

declare module io {
  export module sentry {
    export class HostnameCache {
      public static class: java.lang.Class<io.sentry.HostnameCache>;
    }
    export module HostnameCache {
      export class HostnameCacheThreadFactory {
        public static class: java.lang.Class<io.sentry.HostnameCache.HostnameCacheThreadFactory>;
        public newThread(param0: java.lang.Runnable): java.lang.Thread;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class HttpStatusCodeRange {
      public static class: java.lang.Class<io.sentry.HttpStatusCodeRange>;
      public static DEFAULT_MIN: number;
      public static DEFAULT_MAX: number;
      public isInRange(param0: number): boolean;
      public constructor(param0: number);
      public constructor(param0: number, param1: number);
    }
  }
}

declare module io {
  export module sentry {
    export class Hub extends io.sentry.IHub {
      public static class: java.lang.Class<io.sentry.Hub>;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
      public startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
      public isCrashedLastRun(): java.lang.Boolean;
      public getOptions(): io.sentry.SentryOptions;
      public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
      public constructor(param0: io.sentry.SentryOptions);
      public captureMessage(param0: string): io.sentry.protocol.SentryId;
      public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
      /** @deprecated */
      public reportFullDisplayed(): void;
      public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public configureScope(param0: io.sentry.ScopeCallback): void;
      public addBreadcrumb(param0: string, param1: string): void;
      public setFingerprint(param0: java.util.List<string>): void;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
      public captureUserFeedback(param0: io.sentry.UserFeedback): void;
      public setUser(param0: io.sentry.protocol.User): void;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public reportFullyDisplayed(): void;
      public bindClient(param0: io.sentry.ISentryClient): void;
      public popScope(): void;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
      public clone(): io.sentry.IHub;
      public getBaggage(): io.sentry.BaggageHeader;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      /** @deprecated */
      public traceHeaders(): io.sentry.SentryTraceHeader;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
      public startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
      public getSpan(): io.sentry.ISpan;
      public addBreadcrumb(param0: string): void;
      public getLastEventId(): io.sentry.protocol.SentryId;
      public flush(param0: number): void;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public setExtra(param0: string, param1: string): void;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
      public setLevel(param0: io.sentry.SentryLevel): void;
      public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public clearBreadcrumbs(): void;
      public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
      public close(): void;
      public setTag(param0: string, param1: string): void;
      public startSession(): void;
      public endSession(): void;
      public removeExtra(param0: string): void;
      public setTransaction(param0: string): void;
      public getTraceparent(): io.sentry.SentryTraceHeader;
      public removeTag(param0: string): void;
      public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
      public isEnabled(): boolean;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
      public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
      public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public withScope(param0: io.sentry.ScopeCallback): void;
      public pushScope(): void;
      public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
    }
  }
}

declare module io {
  export module sentry {
    export class HubAdapter extends io.sentry.IHub {
      public static class: java.lang.Class<io.sentry.HubAdapter>;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
      public startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
      public isCrashedLastRun(): java.lang.Boolean;
      public getOptions(): io.sentry.SentryOptions;
      public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
      public captureMessage(param0: string): io.sentry.protocol.SentryId;
      public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
      /** @deprecated */
      public reportFullDisplayed(): void;
      public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public configureScope(param0: io.sentry.ScopeCallback): void;
      public addBreadcrumb(param0: string, param1: string): void;
      public setFingerprint(param0: java.util.List<string>): void;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
      public captureUserFeedback(param0: io.sentry.UserFeedback): void;
      public setUser(param0: io.sentry.protocol.User): void;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public static getInstance(): io.sentry.HubAdapter;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public reportFullyDisplayed(): void;
      public bindClient(param0: io.sentry.ISentryClient): void;
      public popScope(): void;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
      public clone(): io.sentry.IHub;
      public getBaggage(): io.sentry.BaggageHeader;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      /** @deprecated */
      public traceHeaders(): io.sentry.SentryTraceHeader;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
      public startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
      public getSpan(): io.sentry.ISpan;
      public addBreadcrumb(param0: string): void;
      public getLastEventId(): io.sentry.protocol.SentryId;
      public flush(param0: number): void;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public setExtra(param0: string, param1: string): void;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
      public setLevel(param0: io.sentry.SentryLevel): void;
      public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public clearBreadcrumbs(): void;
      public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
      public close(): void;
      public setTag(param0: string, param1: string): void;
      public startSession(): void;
      public endSession(): void;
      public removeExtra(param0: string): void;
      public setTransaction(param0: string): void;
      public getTraceparent(): io.sentry.SentryTraceHeader;
      public removeTag(param0: string): void;
      public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
      public isEnabled(): boolean;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
      public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
      public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public withScope(param0: io.sentry.ScopeCallback): void;
      public pushScope(): void;
      public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
    }
  }
}

declare module io {
  export module sentry {
    export class ICollector {
      public static class: java.lang.Class<io.sentry.ICollector>;
      /**
       * Constructs a new instance of the io.sentry.ICollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { setup(): void; collect(param0: io.sentry.PerformanceCollectionData): void });
      public constructor();
      public setup(): void;
      public collect(param0: io.sentry.PerformanceCollectionData): void;
    }
  }
}

declare module io {
  export module sentry {
    export class IEnvelopeReader {
      public static class: java.lang.Class<io.sentry.IEnvelopeReader>;
      /**
       * Constructs a new instance of the io.sentry.IEnvelopeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { read(param0: java.io.InputStream): io.sentry.SentryEnvelope });
      public constructor();
      public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
    }
  }
}

declare module io {
  export module sentry {
    export class IEnvelopeSender {
      public static class: java.lang.Class<io.sentry.IEnvelopeSender>;
      /**
       * Constructs a new instance of the io.sentry.IEnvelopeSender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { processEnvelopeFile(param0: string, param1: io.sentry.Hint): void });
      public constructor();
      public processEnvelopeFile(param0: string, param1: io.sentry.Hint): void;
    }
  }
}

declare module io {
  export module sentry {
    export class IHub {
      public static class: java.lang.Class<io.sentry.IHub>;
      /**
       * Constructs a new instance of the io.sentry.IHub interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        isEnabled(): boolean;
        captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
        captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
        captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
        captureMessage(param0: string): io.sentry.protocol.SentryId;
        captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
        captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
        captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
        captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
        captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
        captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
        captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
        captureUserFeedback(param0: io.sentry.UserFeedback): void;
        startSession(): void;
        endSession(): void;
        close(): void;
        addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
        addBreadcrumb(param0: io.sentry.Breadcrumb): void;
        addBreadcrumb(param0: string): void;
        addBreadcrumb(param0: string, param1: string): void;
        setLevel(param0: io.sentry.SentryLevel): void;
        setTransaction(param0: string): void;
        setUser(param0: io.sentry.protocol.User): void;
        setFingerprint(param0: java.util.List<string>): void;
        clearBreadcrumbs(): void;
        setTag(param0: string, param1: string): void;
        removeTag(param0: string): void;
        setExtra(param0: string, param1: string): void;
        removeExtra(param0: string): void;
        getLastEventId(): io.sentry.protocol.SentryId;
        pushScope(): void;
        popScope(): void;
        withScope(param0: io.sentry.ScopeCallback): void;
        configureScope(param0: io.sentry.ScopeCallback): void;
        bindClient(param0: io.sentry.ISentryClient): void;
        flush(param0: number): void;
        clone(): io.sentry.IHub;
        captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
        captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
        startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
        startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
        startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
        startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
        startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
        startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
        startTransaction(param0: string, param1: string): io.sentry.ITransaction;
        startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
        startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
        traceHeaders(): io.sentry.SentryTraceHeader;
        setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
        getSpan(): io.sentry.ISpan;
        getOptions(): io.sentry.SentryOptions;
        isCrashedLastRun(): java.lang.Boolean;
        reportFullyDisplayed(): void;
        reportFullDisplayed(): void;
        continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
        getTraceparent(): io.sentry.SentryTraceHeader;
        getBaggage(): io.sentry.BaggageHeader;
      });
      public constructor();
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
      public startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
      public isCrashedLastRun(): java.lang.Boolean;
      public getOptions(): io.sentry.SentryOptions;
      public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
      public captureMessage(param0: string): io.sentry.protocol.SentryId;
      public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
      /** @deprecated */
      public reportFullDisplayed(): void;
      public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public configureScope(param0: io.sentry.ScopeCallback): void;
      public addBreadcrumb(param0: string, param1: string): void;
      public setFingerprint(param0: java.util.List<string>): void;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
      public captureUserFeedback(param0: io.sentry.UserFeedback): void;
      public setUser(param0: io.sentry.protocol.User): void;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public reportFullyDisplayed(): void;
      public bindClient(param0: io.sentry.ISentryClient): void;
      public popScope(): void;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
      public clone(): io.sentry.IHub;
      public getBaggage(): io.sentry.BaggageHeader;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      /** @deprecated */
      public traceHeaders(): io.sentry.SentryTraceHeader;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
      public startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
      public addBreadcrumb(param0: string): void;
      public getSpan(): io.sentry.ISpan;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public getLastEventId(): io.sentry.protocol.SentryId;
      public flush(param0: number): void;
      public setExtra(param0: string, param1: string): void;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
      public setLevel(param0: io.sentry.SentryLevel): void;
      public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public clearBreadcrumbs(): void;
      public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
      public close(): void;
      public setTag(param0: string, param1: string): void;
      public startSession(): void;
      public endSession(): void;
      public removeExtra(param0: string): void;
      public setTransaction(param0: string): void;
      public getTraceparent(): io.sentry.SentryTraceHeader;
      public removeTag(param0: string): void;
      public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
      public isEnabled(): boolean;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
      public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
      public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public withScope(param0: io.sentry.ScopeCallback): void;
      public pushScope(): void;
      public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
    }
  }
}

declare module io {
  export module sentry {
    export class ILogger {
      public static class: java.lang.Class<io.sentry.ILogger>;
      /**
       * Constructs a new instance of the io.sentry.ILogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        // log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
        // log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
        log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
        isEnabled(param0: io.sentry.SentryLevel): boolean;
      });
      public constructor();
      public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
      public isEnabled(param0: io.sentry.SentryLevel): boolean;
      public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
      public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
    }
  }
}

declare module io {
  export module sentry {
    export class IMemoryCollector {
      public static class: java.lang.Class<io.sentry.IMemoryCollector>;
      /**
       * Constructs a new instance of the io.sentry.IMemoryCollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { collect(): io.sentry.MemoryCollectionData });
      public constructor();
      public collect(): io.sentry.MemoryCollectionData;
    }
  }
}

declare module io {
  export module sentry {
    export class IOptionsObserver {
      public static class: java.lang.Class<io.sentry.IOptionsObserver>;
      /**
       * Constructs a new instance of the io.sentry.IOptionsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { setRelease(param0: string): void; setProguardUuid(param0: string): void; setSdkVersion(param0: io.sentry.protocol.SdkVersion): void; setEnvironment(param0: string): void; setDist(param0: string): void; setTags(param0: java.util.Map<string, string>): void });
      public constructor();
      public setTags(param0: java.util.Map<string, string>): void;
      public setEnvironment(param0: string): void;
      public setRelease(param0: string): void;
      public setProguardUuid(param0: string): void;
      public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
      public setDist(param0: string): void;
    }
  }
}

declare module io {
  export module sentry {
    export class IScopeObserver {
      public static class: java.lang.Class<io.sentry.IScopeObserver>;
      /**
       * Constructs a new instance of the io.sentry.IScopeObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { setUser(param0: io.sentry.protocol.User): void; addBreadcrumb(param0: io.sentry.Breadcrumb): void; setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void; setTag(param0: string, param1: string): void; removeTag(param0: string): void; setTags(param0: java.util.Map<string, string>): void; setExtra(param0: string, param1: string): void; removeExtra(param0: string): void; setExtras(param0: java.util.Map<string, any>): void; setRequest(param0: io.sentry.protocol.Request): void; setFingerprint(param0: java.util.Collection<string>): void; setLevel(param0: io.sentry.SentryLevel): void; setContexts(param0: io.sentry.protocol.Contexts): void; setTransaction(param0: string): void; setTrace(param0: io.sentry.SpanContext): void });
      public constructor();
      public setTags(param0: java.util.Map<string, string>): void;
      public setTrace(param0: io.sentry.SpanContext): void;
      public setRequest(param0: io.sentry.protocol.Request): void;
      public setExtras(param0: java.util.Map<string, any>): void;
      public removeExtra(param0: string): void;
      public setTransaction(param0: string): void;
      public removeTag(param0: string): void;
      public setUser(param0: io.sentry.protocol.User): void;
      public setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
      public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
      public setExtra(param0: string, param1: string): void;
      public setFingerprint(param0: java.util.Collection<string>): void;
      public setLevel(param0: io.sentry.SentryLevel): void;
      public setTag(param0: string, param1: string): void;
      public setContexts(param0: io.sentry.protocol.Contexts): void;
    }
  }
}

declare module io {
  export module sentry {
    export class ISentryClient {
      public static class: java.lang.Class<io.sentry.ISentryClient>;
      /**
       * Constructs a new instance of the io.sentry.ISentryClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        isEnabled(): boolean;
        captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
        close(): void;
        flush(param0: number): void;
        captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
        captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
        captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
        captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
        captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
        captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
        captureUserFeedback(param0: io.sentry.UserFeedback): void;
        captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
        captureSession(param0: io.sentry.Session): void;
        captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
        captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Scope, param3: io.sentry.Hint): io.sentry.protocol.SentryId;
        captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Scope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
        captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
        captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
      });
      public constructor();
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
      public captureSession(param0: io.sentry.Session): void;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Scope, param3: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Scope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
      public flush(param0: number): void;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureUserFeedback(param0: io.sentry.UserFeedback): void;
      public isEnabled(): boolean;
      public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
      public captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
      public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public close(): void;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
    }
  }
}

declare module io {
  export module sentry {
    export class ISentryExecutorService {
      public static class: java.lang.Class<io.sentry.ISentryExecutorService>;
      /**
       * Constructs a new instance of the io.sentry.ISentryExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>; submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>; schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>; close(param0: number): void; isClosed(): boolean });
      public constructor();
      public isClosed(): boolean;
      public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
      public close(param0: number): void;
      public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
      public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
    }
  }
}

declare module io {
  export module sentry {
    export class ISerializer {
      public static class: java.lang.Class<io.sentry.ISerializer>;
      /**
       * Constructs a new instance of the io.sentry.ISerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { deserializeCollection(param0: java.io.Reader, param1: java.lang.Class<any>, param2: io.sentry.JsonDeserializer<any>): any; deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any; deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope; serialize(param0: any, param1: java.io.Writer): void; serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void; serialize(param0: java.util.Map<string, any>): string });
      public constructor();
      public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
      public serialize(param0: java.util.Map<string, any>): string;
      public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
      public deserializeCollection(param0: java.io.Reader, param1: java.lang.Class<any>, param2: io.sentry.JsonDeserializer<any>): any;
      public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
      public serialize(param0: any, param1: java.io.Writer): void;
    }
  }
}

declare module io {
  export module sentry {
    export class ISpan {
      public static class: java.lang.Class<io.sentry.ISpan>;
      /**
       * Constructs a new instance of the io.sentry.ISpan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        startChild(param0: string): io.sentry.ISpan;
        startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
        startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
        startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
        startChild(param0: string, param1: string): io.sentry.ISpan;
        toSentryTrace(): io.sentry.SentryTraceHeader;
        traceContext(): io.sentry.TraceContext;
        toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
        finish(): void;
        finish(param0: io.sentry.SpanStatus): void;
        finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
        setOperation(param0: string): void;
        getOperation(): string;
        setDescription(param0: string): void;
        getDescription(): string;
        setStatus(param0: io.sentry.SpanStatus): void;
        getStatus(): io.sentry.SpanStatus;
        setThrowable(param0: java.lang.Throwable): void;
        getThrowable(): java.lang.Throwable;
        getSpanContext(): io.sentry.SpanContext;
        setTag(param0: string, param1: string): void;
        getTag(param0: string): string;
        isFinished(): boolean;
        setData(param0: string, param1: any): void;
        getData(param0: string): any;
        setMeasurement(param0: string, param1: java.lang.Number): void;
        setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
        updateEndDate(param0: io.sentry.SentryDate): boolean;
        getStartDate(): io.sentry.SentryDate;
        getFinishDate(): io.sentry.SentryDate;
        isNoOp(): boolean;
      });
      public constructor();
      public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
      public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
      public traceContext(): io.sentry.TraceContext;
      public finish(): void;
      public isNoOp(): boolean;
      public getData(param0: string): any;
      public setStatus(param0: io.sentry.SpanStatus): void;
      public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
      public isFinished(): boolean;
      public getStatus(): io.sentry.SpanStatus;
      public setData(param0: string, param1: any): void;
      public toSentryTrace(): io.sentry.SentryTraceHeader;
      public getOperation(): string;
      public setThrowable(param0: java.lang.Throwable): void;
      public setTag(param0: string, param1: string): void;
      public updateEndDate(param0: io.sentry.SentryDate): boolean;
      public setOperation(param0: string): void;
      public startChild(param0: string, param1: string): io.sentry.ISpan;
      public getStartDate(): io.sentry.SentryDate;
      public setDescription(param0: string): void;
      public finish(param0: io.sentry.SpanStatus): void;
      public setMeasurement(param0: string, param1: java.lang.Number): void;
      public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
      public getSpanContext(): io.sentry.SpanContext;
      public getTag(param0: string): string;
      public getThrowable(): java.lang.Throwable;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
      public getDescription(): string;
      public startChild(param0: string): io.sentry.ISpan;
      public getFinishDate(): io.sentry.SentryDate;
    }
  }
}

declare module io {
  export module sentry {
    export class ITransaction extends io.sentry.ISpan {
      public static class: java.lang.Class<io.sentry.ITransaction>;
      /**
       * Constructs a new instance of the io.sentry.ITransaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        setName(param0: string): void;
        setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
        getName(): string;
        getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
        getSpans(): java.util.List<io.sentry.Span>;
        startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
        isSampled(): java.lang.Boolean;
        isProfileSampled(): java.lang.Boolean;
        getSamplingDecision(): io.sentry.TracesSamplingDecision;
        getLatestActiveSpan(): io.sentry.Span;
        getEventId(): io.sentry.protocol.SentryId;
        scheduleFinish(): void;
        forceFinish(param0: io.sentry.SpanStatus, param1: boolean): void;
        finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean): void;
        setContext(param0: string, param1: any): void;
        getContexts(): io.sentry.protocol.Contexts;
        startChild(param0: string): io.sentry.ISpan;
        startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
        startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
        startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
        startChild(param0: string, param1: string): io.sentry.ISpan;
        toSentryTrace(): io.sentry.SentryTraceHeader;
        traceContext(): io.sentry.TraceContext;
        toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
        finish(): void;
        finish(param0: io.sentry.SpanStatus): void;
        finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
        setOperation(param0: string): void;
        getOperation(): string;
        setDescription(param0: string): void;
        getDescription(): string;
        setStatus(param0: io.sentry.SpanStatus): void;
        getStatus(): io.sentry.SpanStatus;
        setThrowable(param0: java.lang.Throwable): void;
        getThrowable(): java.lang.Throwable;
        getSpanContext(): io.sentry.SpanContext;
        setTag(param0: string, param1: string): void;
        getTag(param0: string): string;
        isFinished(): boolean;
        setData(param0: string, param1: any): void;
        getData(param0: string): any;
        setMeasurement(param0: string, param1: java.lang.Number): void;
        setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
        updateEndDate(param0: io.sentry.SentryDate): boolean;
        getStartDate(): io.sentry.SentryDate;
        getFinishDate(): io.sentry.SentryDate;
        isNoOp(): boolean;
      });
      public constructor();
      public getEventId(): io.sentry.protocol.SentryId;
      public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
      public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
      public traceContext(): io.sentry.TraceContext;
      public finish(): void;
      public getContexts(): io.sentry.protocol.Contexts;
      public isNoOp(): boolean;
      public getData(param0: string): any;
      public scheduleFinish(): void;
      public forceFinish(param0: io.sentry.SpanStatus, param1: boolean): void;
      public setStatus(param0: io.sentry.SpanStatus): void;
      public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
      public isFinished(): boolean;
      public setContext(param0: string, param1: any): void;
      public getSamplingDecision(): io.sentry.TracesSamplingDecision;
      public getStatus(): io.sentry.SpanStatus;
      public setData(param0: string, param1: any): void;
      public toSentryTrace(): io.sentry.SentryTraceHeader;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
      public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean): void;
      public getOperation(): string;
      public setThrowable(param0: java.lang.Throwable): void;
      public setTag(param0: string, param1: string): void;
      public updateEndDate(param0: io.sentry.SentryDate): boolean;
      public isProfileSampled(): java.lang.Boolean;
      public setOperation(param0: string): void;
      public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
      public startChild(param0: string, param1: string): io.sentry.ISpan;
      public getStartDate(): io.sentry.SentryDate;
      public setDescription(param0: string): void;
      public finish(param0: io.sentry.SpanStatus): void;
      public setMeasurement(param0: string, param1: java.lang.Number): void;
      public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
      public getSpanContext(): io.sentry.SpanContext;
      public getLatestActiveSpan(): io.sentry.Span;
      public getTag(param0: string): string;
      public getThrowable(): java.lang.Throwable;
      public getName(): string;
      public getSpans(): java.util.List<io.sentry.Span>;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
      public isSampled(): java.lang.Boolean;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
      public getDescription(): string;
      public startChild(param0: string): io.sentry.ISpan;
      public getFinishDate(): io.sentry.SentryDate;
      public setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
      public setName(param0: string): void;
    }
  }
}

declare module io {
  export module sentry {
    export class ITransactionProfiler {
      public static class: java.lang.Class<io.sentry.ITransactionProfiler>;
      /**
       * Constructs a new instance of the io.sentry.ITransactionProfiler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { onTransactionStart(param0: io.sentry.ITransaction): void; onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>): io.sentry.ProfilingTraceData; close(): void });
      public constructor();
      public onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>): io.sentry.ProfilingTraceData;
      public onTransactionStart(param0: io.sentry.ITransaction): void;
      public close(): void;
    }
  }
}

declare module io {
  export module sentry {
    export class ITransportFactory {
      public static class: java.lang.Class<io.sentry.ITransportFactory>;
      /**
       * Constructs a new instance of the io.sentry.ITransportFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport });
      public constructor();
      public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
    }
  }
}

declare module io {
  export module sentry {
    export class Instrumenter {
      public static class: java.lang.Class<io.sentry.Instrumenter>;
      public static SENTRY: io.sentry.Instrumenter;
      public static OTEL: io.sentry.Instrumenter;
      public static valueOf(param0: string): io.sentry.Instrumenter;
      public static values(): androidNative.Array<io.sentry.Instrumenter>;
    }
  }
}

declare module io {
  export module sentry {
    export class Integration extends io.sentry.IntegrationName {
      public static class: java.lang.Class<io.sentry.Integration>;
      /**
       * Constructs a new instance of the io.sentry.Integration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void; getIntegrationName(): string; addIntegrationToSdkVersion(): void });
      public constructor();
      public addIntegrationToSdkVersion(): void;
      public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
      public getIntegrationName(): string;
    }
  }
}

declare module io {
  export module sentry {
    export class IntegrationName {
      public static class: java.lang.Class<io.sentry.IntegrationName>;
      /**
       * Constructs a new instance of the io.sentry.IntegrationName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { getIntegrationName(): string; addIntegrationToSdkVersion(): void });
      public constructor();
      public addIntegrationToSdkVersion(): void;
      public getIntegrationName(): string;
    }
  }
}

declare module io {
  export module sentry {
    export class IpAddressUtils {
      public static class: java.lang.Class<io.sentry.IpAddressUtils>;
      public static DEFAULT_IP_ADDRESS: string;
      public static isDefault(param0: string): boolean;
    }
  }
}

declare module io {
  export module sentry {
    export class JavaMemoryCollector extends io.sentry.ICollector {
      public static class: java.lang.Class<io.sentry.JavaMemoryCollector>;
      public setup(): void;
      public constructor();
      public collect(param0: io.sentry.PerformanceCollectionData): void;
    }
  }
}

declare module io {
  export module sentry {
    export class JsonDeserializer<T> extends java.lang.Object {
      public static class: java.lang.Class<io.sentry.JsonDeserializer<any>>;
      /**
       * Constructs a new instance of the io.sentry.JsonDeserializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): T });
      public constructor();
      public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): T;
    }
  }
}

declare module io {
  export module sentry {
    export class JsonObjectDeserializer {
      public static class: java.lang.Class<io.sentry.JsonObjectDeserializer>;
      public constructor();
      public deserialize(param0: io.sentry.JsonObjectReader): any;
    }
    export module JsonObjectDeserializer {
      export class NextValue {
        public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.NextValue>;
        /**
         * Constructs a new instance of the io.sentry.JsonObjectDeserializer$NextValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { nextValue(): any });
        public constructor();
        public nextValue(): any;
      }
      export class Token {
        public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.Token>;
        /**
         * Constructs a new instance of the io.sentry.JsonObjectDeserializer$Token interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getValue(): any });
        public constructor();
        public getValue(): any;
      }
      export class TokenArray extends io.sentry.JsonObjectDeserializer.Token {
        public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenArray>;
        public getValue(): any;
      }
      export class TokenMap extends io.sentry.JsonObjectDeserializer.Token {
        public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenMap>;
        public getValue(): any;
      }
      export class TokenName extends io.sentry.JsonObjectDeserializer.Token {
        public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenName>;
        public getValue(): any;
      }
      export class TokenPrimitive extends io.sentry.JsonObjectDeserializer.Token {
        public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenPrimitive>;
        public getValue(): any;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class JsonObjectReader extends io.sentry.vendor.gson.stream.JsonReader {
      public static class: java.lang.Class<io.sentry.JsonObjectReader>;
      public nextIntegerOrNull(): java.lang.Integer;
      public nextMapOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.Map<any, any>;
      public nextLongOrNull(): java.lang.Long;
      public nextStringOrNull(): string;
      public nextDoubleOrNull(): java.lang.Double;
      public nextObjectOrNull(): any;
      public static dateOrNull(param0: string, param1: io.sentry.ILogger): java.util.Date;
      public nextFloat(): java.lang.Float;
      public nextOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): any;
      public constructor(param0: java.io.Reader);
      public nextDateOrNull(param0: io.sentry.ILogger): java.util.Date;
      public nextFloatOrNull(): java.lang.Float;
      public nextTimeZoneOrNull(param0: io.sentry.ILogger): java.util.TimeZone;
      public nextList(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.List<any>;
      public nextBooleanOrNull(): java.lang.Boolean;
      public nextUnknown(param0: io.sentry.ILogger, param1: java.util.Map<string, any>, param2: string): void;
    }
  }
}

declare module io {
  export module sentry {
    export class JsonObjectSerializer {
      public static class: java.lang.Class<io.sentry.JsonObjectSerializer>;
      public static OBJECT_PLACEHOLDER: string;
      public jsonReflectionObjectSerializer: io.sentry.JsonReflectionObjectSerializer;
      public constructor(param0: number);
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger, param2: any): void;
    }
  }
}

declare module io {
  export module sentry {
    export class JsonObjectWriter extends io.sentry.vendor.gson.stream.JsonWriter {
      public static class: java.lang.Class<io.sentry.JsonObjectWriter>;
      public constructor(param0: java.io.Writer);
      public name(param0: string): io.sentry.JsonObjectWriter;
      public value(param0: boolean): io.sentry.vendor.gson.stream.JsonWriter;
      public value(param0: io.sentry.ILogger, param1: any): io.sentry.JsonObjectWriter;
      public value(param0: java.lang.Boolean): io.sentry.vendor.gson.stream.JsonWriter;
      public value(param0: java.lang.Number): io.sentry.vendor.gson.stream.JsonWriter;
      public name(param0: string): io.sentry.vendor.gson.stream.JsonWriter;
      public value(param0: string): io.sentry.vendor.gson.stream.JsonWriter;
      public constructor(param0: java.io.Writer, param1: number);
      public value(param0: number): io.sentry.vendor.gson.stream.JsonWriter;
    }
  }
}

declare module io {
  export module sentry {
    export class JsonReflectionObjectSerializer {
      public static class: java.lang.Class<io.sentry.JsonReflectionObjectSerializer>;
      public serialize(param0: any, param1: io.sentry.ILogger): any;
      public serializeObject(param0: any, param1: io.sentry.ILogger): java.util.Map<string, any>;
    }
  }
}

declare module io {
  export module sentry {
    export class JsonSerializable {
      public static class: java.lang.Class<io.sentry.JsonSerializable>;
      /**
       * Constructs a new instance of the io.sentry.JsonSerializable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void });
      public constructor();
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
    }
  }
}

declare module io {
  export module sentry {
    export class JsonSerializer extends io.sentry.ISerializer {
      public static class: java.lang.Class<io.sentry.JsonSerializer>;
      public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
      public serialize(param0: java.util.Map<string, any>): string;
      public constructor(param0: io.sentry.SentryOptions);
      public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
      public deserializeCollection(param0: java.io.Reader, param1: java.lang.Class<any>, param2: io.sentry.JsonDeserializer<any>): any;
      public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
      public serialize(param0: any, param1: java.io.Writer): void;
    }
  }
}

declare module io {
  export module sentry {
    export class JsonUnknown {
      public static class: java.lang.Class<io.sentry.JsonUnknown>;
      /**
       * Constructs a new instance of the io.sentry.JsonUnknown interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { getUnknown(): java.util.Map<string, any>; setUnknown(param0: java.util.Map<string, any>): void });
      public constructor();
      public getUnknown(): java.util.Map<string, any>;
      public setUnknown(param0: java.util.Map<string, any>): void;
    }
  }
}

declare module io {
  export module sentry {
    export class MainEventProcessor extends io.sentry.EventProcessor {
      public static class: java.lang.Class<io.sentry.MainEventProcessor>;
      public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
      public constructor(param0: io.sentry.SentryOptions);
      public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
      public close(): void;
    }
  }
}

declare module io {
  export module sentry {
    export class MeasurementUnit {
      public static class: java.lang.Class<io.sentry.MeasurementUnit>;
      /**
       * Constructs a new instance of the io.sentry.MeasurementUnit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { name(): string; apiName(): string });
      public constructor();
      public static NONE: string;
      public name(): string;
      public apiName(): string;
    }
    export module MeasurementUnit {
      export class Custom extends io.sentry.MeasurementUnit {
        public static class: java.lang.Class<io.sentry.MeasurementUnit.Custom>;
        public name(): string;
        public apiName(): string;
        public constructor(param0: string);
      }
      export class Duration extends io.sentry.MeasurementUnit {
        public static class: java.lang.Class<io.sentry.MeasurementUnit.Duration>;
        public static NANOSECOND: io.sentry.MeasurementUnit.Duration;
        public static MICROSECOND: io.sentry.MeasurementUnit.Duration;
        public static MILLISECOND: io.sentry.MeasurementUnit.Duration;
        public static SECOND: io.sentry.MeasurementUnit.Duration;
        public static MINUTE: io.sentry.MeasurementUnit.Duration;
        public static HOUR: io.sentry.MeasurementUnit.Duration;
        public static DAY: io.sentry.MeasurementUnit.Duration;
        public static WEEK: io.sentry.MeasurementUnit.Duration;
        public static values(): androidNative.Array<io.sentry.MeasurementUnit.Duration>;
        public static valueOf(param0: string): io.sentry.MeasurementUnit.Duration;
        public name(): string;
        public apiName(): string;
      }
      export class Fraction extends io.sentry.MeasurementUnit {
        public static class: java.lang.Class<io.sentry.MeasurementUnit.Fraction>;
        public static RATIO: io.sentry.MeasurementUnit.Fraction;
        public static PERCENT: io.sentry.MeasurementUnit.Fraction;
        public static values(): androidNative.Array<io.sentry.MeasurementUnit.Fraction>;
        public name(): string;
        public static valueOf(param0: string): io.sentry.MeasurementUnit.Fraction;
        public apiName(): string;
      }
      export class Information extends io.sentry.MeasurementUnit {
        public static class: java.lang.Class<io.sentry.MeasurementUnit.Information>;
        public static BIT: io.sentry.MeasurementUnit.Information;
        public static BYTE: io.sentry.MeasurementUnit.Information;
        public static KILOBYTE: io.sentry.MeasurementUnit.Information;
        public static KIBIBYTE: io.sentry.MeasurementUnit.Information;
        public static MEGABYTE: io.sentry.MeasurementUnit.Information;
        public static MEBIBYTE: io.sentry.MeasurementUnit.Information;
        public static GIGABYTE: io.sentry.MeasurementUnit.Information;
        public static GIBIBYTE: io.sentry.MeasurementUnit.Information;
        public static TERABYTE: io.sentry.MeasurementUnit.Information;
        public static TEBIBYTE: io.sentry.MeasurementUnit.Information;
        public static PETABYTE: io.sentry.MeasurementUnit.Information;
        public static PEBIBYTE: io.sentry.MeasurementUnit.Information;
        public static EXABYTE: io.sentry.MeasurementUnit.Information;
        public static EXBIBYTE: io.sentry.MeasurementUnit.Information;
        public name(): string;
        public static values(): androidNative.Array<io.sentry.MeasurementUnit.Information>;
        public apiName(): string;
        public static valueOf(param0: string): io.sentry.MeasurementUnit.Information;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class MemoryCollectionData {
      public static class: java.lang.Class<io.sentry.MemoryCollectionData>;
      public constructor(param0: number, param1: number, param2: number);
      public getTimestampMillis(): number;
      public getUsedHeapMemory(): number;
      public getUsedNativeMemory(): number;
      public constructor(param0: number, param1: number);
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpEnvelopeReader extends io.sentry.IEnvelopeReader {
      public static class: java.lang.Class<io.sentry.NoOpEnvelopeReader>;
      public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
      public static getInstance(): io.sentry.NoOpEnvelopeReader;
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpHub extends io.sentry.IHub {
      public static class: java.lang.Class<io.sentry.NoOpHub>;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
      public startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
      public isCrashedLastRun(): java.lang.Boolean;
      public getOptions(): io.sentry.SentryOptions;
      public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
      public captureMessage(param0: string): io.sentry.protocol.SentryId;
      public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
      /** @deprecated */
      public reportFullDisplayed(): void;
      public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public configureScope(param0: io.sentry.ScopeCallback): void;
      public addBreadcrumb(param0: string, param1: string): void;
      public setFingerprint(param0: java.util.List<string>): void;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
      public captureUserFeedback(param0: io.sentry.UserFeedback): void;
      public setUser(param0: io.sentry.protocol.User): void;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public reportFullyDisplayed(): void;
      public bindClient(param0: io.sentry.ISentryClient): void;
      public popScope(): void;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
      public clone(): io.sentry.IHub;
      public getBaggage(): io.sentry.BaggageHeader;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      /** @deprecated */
      public traceHeaders(): io.sentry.SentryTraceHeader;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
      public startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
      public static getInstance(): io.sentry.NoOpHub;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
      public getSpan(): io.sentry.ISpan;
      public addBreadcrumb(param0: string): void;
      public getLastEventId(): io.sentry.protocol.SentryId;
      public flush(param0: number): void;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public setExtra(param0: string, param1: string): void;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
      public setLevel(param0: io.sentry.SentryLevel): void;
      public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public clearBreadcrumbs(): void;
      public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
      public close(): void;
      public setTag(param0: string, param1: string): void;
      public startSession(): void;
      public endSession(): void;
      public removeExtra(param0: string): void;
      public setTransaction(param0: string): void;
      public getTraceparent(): io.sentry.SentryTraceHeader;
      public removeTag(param0: string): void;
      public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
      public isEnabled(): boolean;
      public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
      public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
      public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public withScope(param0: io.sentry.ScopeCallback): void;
      public pushScope(): void;
      public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpLogger extends io.sentry.ILogger {
      public static class: java.lang.Class<io.sentry.NoOpLogger>;
      public static getInstance(): io.sentry.NoOpLogger;
      public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
      public isEnabled(param0: io.sentry.SentryLevel): boolean;
      public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
      public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpSentryClient extends io.sentry.ISentryClient {
      public static class: java.lang.Class<io.sentry.NoOpSentryClient>;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
      public captureSession(param0: io.sentry.Session): void;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Scope, param3: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Scope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
      public flush(param0: number): void;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
      public static getInstance(): io.sentry.NoOpSentryClient;
      public captureUserFeedback(param0: io.sentry.UserFeedback): void;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public isEnabled(): boolean;
      public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
      public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public close(): void;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpSentryExecutorService extends io.sentry.ISentryExecutorService {
      public static class: java.lang.Class<io.sentry.NoOpSentryExecutorService>;
      public isClosed(): boolean;
      public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
      public close(param0: number): void;
      public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
      public static getInstance(): io.sentry.ISentryExecutorService;
      public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpSerializer extends io.sentry.ISerializer {
      public static class: java.lang.Class<io.sentry.NoOpSerializer>;
      public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
      public static getInstance(): io.sentry.NoOpSerializer;
      public serialize(param0: java.util.Map<string, any>): string;
      public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
      public deserializeCollection(param0: java.io.Reader, param1: java.lang.Class<any>, param2: io.sentry.JsonDeserializer<any>): any;
      public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
      public serialize(param0: any, param1: java.io.Writer): void;
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpSpan extends io.sentry.ISpan {
      public static class: java.lang.Class<io.sentry.NoOpSpan>;
      public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
      public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
      public traceContext(): io.sentry.TraceContext;
      public finish(): void;
      public isNoOp(): boolean;
      public getData(param0: string): any;
      public setStatus(param0: io.sentry.SpanStatus): void;
      public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
      public isFinished(): boolean;
      public getStatus(): io.sentry.SpanStatus;
      public setData(param0: string, param1: any): void;
      public static getInstance(): io.sentry.NoOpSpan;
      public toSentryTrace(): io.sentry.SentryTraceHeader;
      public getOperation(): string;
      public setThrowable(param0: java.lang.Throwable): void;
      public setTag(param0: string, param1: string): void;
      public updateEndDate(param0: io.sentry.SentryDate): boolean;
      public setOperation(param0: string): void;
      public startChild(param0: string, param1: string): io.sentry.ISpan;
      public getStartDate(): io.sentry.SentryDate;
      public setDescription(param0: string): void;
      public finish(param0: io.sentry.SpanStatus): void;
      public setMeasurement(param0: string, param1: java.lang.Number): void;
      public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
      public getSpanContext(): io.sentry.SpanContext;
      public getTag(param0: string): string;
      public getThrowable(): java.lang.Throwable;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
      public getDescription(): string;
      public startChild(param0: string): io.sentry.ISpan;
      public getFinishDate(): io.sentry.SentryDate;
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpTransaction extends io.sentry.ITransaction {
      public static class: java.lang.Class<io.sentry.NoOpTransaction>;
      public getEventId(): io.sentry.protocol.SentryId;
      public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
      public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
      public traceContext(): io.sentry.TraceContext;
      public finish(): void;
      public getContexts(): io.sentry.protocol.Contexts;
      public isNoOp(): boolean;
      public getData(param0: string): any;
      public scheduleFinish(): void;
      public forceFinish(param0: io.sentry.SpanStatus, param1: boolean): void;
      public setStatus(param0: io.sentry.SpanStatus): void;
      public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
      public isFinished(): boolean;
      public setContext(param0: string, param1: any): void;
      public getStatus(): io.sentry.SpanStatus;
      public getSamplingDecision(): io.sentry.TracesSamplingDecision;
      public setData(param0: string, param1: any): void;
      public toSentryTrace(): io.sentry.SentryTraceHeader;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
      public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean): void;
      public getOperation(): string;
      public setThrowable(param0: java.lang.Throwable): void;
      public setTag(param0: string, param1: string): void;
      public updateEndDate(param0: io.sentry.SentryDate): boolean;
      public static getInstance(): io.sentry.NoOpTransaction;
      public isProfileSampled(): java.lang.Boolean;
      public setOperation(param0: string): void;
      public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
      public startChild(param0: string, param1: string): io.sentry.ISpan;
      public getStartDate(): io.sentry.SentryDate;
      public setDescription(param0: string): void;
      public finish(param0: io.sentry.SpanStatus): void;
      public setMeasurement(param0: string, param1: java.lang.Number): void;
      public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
      public getSpanContext(): io.sentry.SpanContext;
      public getLatestActiveSpan(): io.sentry.Span;
      public getTag(param0: string): string;
      public getThrowable(): java.lang.Throwable;
      public getName(): string;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
      public getSpans(): java.util.List<io.sentry.Span>;
      public isSampled(): java.lang.Boolean;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
      public getDescription(): string;
      public startChild(param0: string): io.sentry.ISpan;
      public getFinishDate(): io.sentry.SentryDate;
      public setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
      public setName(param0: string): void;
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpTransactionPerformanceCollector extends io.sentry.TransactionPerformanceCollector {
      public static class: java.lang.Class<io.sentry.NoOpTransactionPerformanceCollector>;
      public static getInstance(): io.sentry.NoOpTransactionPerformanceCollector;
      public start(param0: io.sentry.ITransaction): void;
      public stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
      public close(): void;
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpTransactionProfiler extends io.sentry.ITransactionProfiler {
      public static class: java.lang.Class<io.sentry.NoOpTransactionProfiler>;
      public onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>): io.sentry.ProfilingTraceData;
      public static getInstance(): io.sentry.NoOpTransactionProfiler;
      public onTransactionStart(param0: io.sentry.ITransaction): void;
      public close(): void;
    }
  }
}

declare module io {
  export module sentry {
    export class NoOpTransportFactory extends io.sentry.ITransportFactory {
      public static class: java.lang.Class<io.sentry.NoOpTransportFactory>;
      public static getInstance(): io.sentry.NoOpTransportFactory;
      public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
    }
  }
}

declare module io {
  export module sentry {
    export class OptionsContainer<T> extends java.lang.Object {
      public static class: java.lang.Class<io.sentry.OptionsContainer<any>>;
      public createInstance(): T;
      public static create(param0: java.lang.Class<any>): io.sentry.OptionsContainer<any>;
    }
  }
}

declare module io {
  export module sentry {
    export class OutboxSender extends io.sentry.DirectoryProcessor implements io.sentry.IEnvelopeSender {
      public static class: java.lang.Class<io.sentry.OutboxSender>;
      public processFile(param0: java.io.File, param1: io.sentry.Hint): void;
      public processEnvelopeFile(param0: string, param1: io.sentry.Hint): void;
      public constructor(param0: io.sentry.IHub, param1: io.sentry.IEnvelopeReader, param2: io.sentry.ISerializer, param3: io.sentry.ILogger, param4: number);
      public isRelevantFileName(param0: string): boolean;
    }
  }
}

declare module io {
  export module sentry {
    export class PerformanceCollectionData {
      public static class: java.lang.Class<io.sentry.PerformanceCollectionData>;
      public getCpuData(): io.sentry.CpuCollectionData;
      public addMemoryData(param0: io.sentry.MemoryCollectionData): void;
      public addCpuData(param0: io.sentry.CpuCollectionData): void;
      public constructor();
      public getMemoryData(): io.sentry.MemoryCollectionData;
    }
  }
}

declare module io {
  export module sentry {
    export class PreviousSessionFinalizer {
      public static class: java.lang.Class<io.sentry.PreviousSessionFinalizer>;
      public run(): void;
    }
  }
}

declare module io {
  export module sentry {
    export class ProfilingTraceData implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.ProfilingTraceData>;
      public static TRUNCATION_REASON_NORMAL: string;
      public static TRUNCATION_REASON_TIMEOUT: string;
      public static TRUNCATION_REASON_BACKGROUNDED: string;
      public setCpuArchitecture(param0: string): void;
      public setUnknown(param0: java.util.Map<string, any>): void;
      public setTruncationReason(param0: string): void;
      public getAndroidApiLevel(): number;
      public setSampledProfile(param0: string): void;
      public getDeviceOsVersion(): string;
      public getProfileId(): string;
      public getTraceId(): string;
      public readDeviceCpuFrequencies(): void;
      public getRelease(): string;
      public getTransactionId(): string;
      public constructor(param0: java.io.File, param1: java.util.List<io.sentry.ProfilingTransactionData>, param2: io.sentry.ITransaction, param3: string, param4: number, param5: string, param6: java.util.concurrent.Callable<java.util.List<java.lang.Integer>>, param7: string, param8: string, param9: string, param10: java.lang.Boolean, param11: string, param12: string, param13: string, param14: string, param15: string, param16: java.util.Map<string, io.sentry.profilemeasurements.ProfileMeasurement>);
      public isDeviceIsEmulator(): boolean;
      public setDevicePhysicalMemoryBytes(param0: string): void;
      public getTransactions(): java.util.List<io.sentry.ProfilingTransactionData>;
      public setTraceId(param0: string): void;
      public setDeviceOsBuildNumber(param0: string): void;
      public setTransactionName(param0: string): void;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public setDeviceLocale(param0: string): void;
      public getDeviceCpuFrequencies(): java.util.List<java.lang.Integer>;
      public setProfileId(param0: string): void;
      public getCpuArchitecture(): string;
      public getTransactionName(): string;
      public getDeviceOsBuildNumber(): string;
      public setEnvironment(param0: string): void;
      public setDeviceOsVersion(param0: string): void;
      public setRelease(param0: string): void;
      public getDeviceOsName(): string;
      public getDurationNs(): string;
      public getTruncationReason(): string;
      public getDeviceLocale(): string;
      public getPlatform(): string;
      public getSampledProfile(): string;
      public getDevicePhysicalMemoryBytes(): string;
      public setDeviceManufacturer(param0: string): void;
      public setDurationNs(param0: string): void;
      public setAndroidApiLevel(param0: number): void;
      public getMeasurementsMap(): java.util.Map<string, io.sentry.profilemeasurements.ProfileMeasurement>;
      public getEnvironment(): string;
      public setDeviceIsEmulator(param0: boolean): void;
      public setBuildId(param0: string): void;
      public setTransactionId(param0: string): void;
      public getTraceFile(): java.io.File;
      public constructor(param0: java.io.File, param1: io.sentry.ITransaction);
      public getBuildId(): string;
      public getDeviceModel(): string;
      public setDeviceCpuFrequencies(param0: java.util.List<java.lang.Integer>): void;
      public setDeviceModel(param0: string): void;
      public getUnknown(): java.util.Map<string, any>;
      public getDeviceManufacturer(): string;
      public setTransactions(param0: java.util.List<io.sentry.ProfilingTransactionData>): void;
    }
    export module ProfilingTraceData {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.ProfilingTraceData> {
        public static class: java.lang.Class<io.sentry.ProfilingTraceData.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.ProfilingTraceData;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.ProfilingTraceData.JsonKeys>;
        public static ANDROID_API_LEVEL: string;
        public static DEVICE_LOCALE: string;
        public static DEVICE_MANUFACTURER: string;
        public static DEVICE_MODEL: string;
        public static DEVICE_OS_BUILD_NUMBER: string;
        public static DEVICE_OS_NAME: string;
        public static DEVICE_OS_VERSION: string;
        public static DEVICE_IS_EMULATOR: string;
        public static ARCHITECTURE: string;
        public static DEVICE_CPU_FREQUENCIES: string;
        public static DEVICE_PHYSICAL_MEMORY_BYTES: string;
        public static PLATFORM: string;
        public static BUILD_ID: string;
        public static TRANSACTION_NAME: string;
        public static DURATION_NS: string;
        public static RELEASE: string;
        public static VERSION_CODE: string;
        public static TRANSACTION_LIST: string;
        public static TRANSACTION_ID: string;
        public static TRACE_ID: string;
        public static PROFILE_ID: string;
        public static ENVIRONMENT: string;
        public static SAMPLED_PROFILE: string;
        public static TRUNCATION_REASON: string;
        public static MEASUREMENTS: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class ProfilingTransactionData implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.ProfilingTransactionData>;
      public equals(param0: any): boolean;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public setUnknown(param0: java.util.Map<string, any>): void;
      public constructor();
      public getRelativeStartCpuMs(): java.lang.Long;
      public getTraceId(): string;
      public getRelativeEndCpuMs(): java.lang.Long;
      public getId(): string;
      public setId(param0: string): void;
      public getUnknown(): java.util.Map<string, any>;
      public getName(): string;
      public constructor(param0: io.sentry.ITransaction, param1: java.lang.Long, param2: java.lang.Long);
      public notifyFinish(param0: java.lang.Long, param1: java.lang.Long, param2: java.lang.Long, param3: java.lang.Long): void;
      public getRelativeStartNs(): java.lang.Long;
      public setRelativeEndNs(param0: java.lang.Long): void;
      public getRelativeEndNs(): java.lang.Long;
      public setRelativeStartNs(param0: java.lang.Long): void;
      public setTraceId(param0: string): void;
      public setName(param0: string): void;
      public hashCode(): number;
    }
    export module ProfilingTransactionData {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.ProfilingTransactionData> {
        public static class: java.lang.Class<io.sentry.ProfilingTransactionData.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.ProfilingTransactionData;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.ProfilingTransactionData.JsonKeys>;
        public static ID: string;
        public static TRACE_ID: string;
        public static NAME: string;
        public static START_NS: string;
        public static END_NS: string;
        public static START_CPU_MS: string;
        public static END_CPU_MS: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class PropagationContext {
      public static class: java.lang.Class<io.sentry.PropagationContext>;
      public getBaggage(): io.sentry.Baggage;
      public setParentSpanId(param0: io.sentry.SpanId): void;
      public traceContext(): io.sentry.TraceContext;
      public setTraceId(param0: io.sentry.protocol.SentryId): void;
      public constructor();
      public getTraceId(): io.sentry.protocol.SentryId;
      public getSpanId(): io.sentry.SpanId;
      public getParentSpanId(): io.sentry.SpanId;
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: io.sentry.SpanId, param3: io.sentry.Baggage, param4: java.lang.Boolean);
      public setSpanId(param0: io.sentry.SpanId): void;
      public static fromHeaders(param0: io.sentry.SentryTraceHeader, param1: io.sentry.Baggage, param2: io.sentry.SpanId): io.sentry.PropagationContext;
      public isSampled(): java.lang.Boolean;
      public static fromHeaders(param0: io.sentry.ILogger, param1: string, param2: string): io.sentry.PropagationContext;
      public static fromHeaders(param0: io.sentry.ILogger, param1: string, param2: java.util.List<string>): io.sentry.PropagationContext;
      public constructor(param0: io.sentry.PropagationContext);
      public setBaggage(param0: io.sentry.Baggage): void;
      public setSampled(param0: java.lang.Boolean): void;
    }
  }
}

declare module io {
  export module sentry {
    export class RequestDetails {
      public static class: java.lang.Class<io.sentry.RequestDetails>;
      public getHeaders(): java.util.Map<string, string>;
      public constructor(param0: string, param1: java.util.Map<string, string>);
      public getUrl(): java.net.URL;
    }
  }
}

declare module io {
  export module sentry {
    export class RequestDetailsResolver {
      public static class: java.lang.Class<io.sentry.RequestDetailsResolver>;
      public constructor(param0: io.sentry.SentryOptions);
    }
  }
}

declare module io {
  export module sentry {
    export class SamplingContext {
      public static class: java.lang.Class<io.sentry.SamplingContext>;
      public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext);
      public getCustomSamplingContext(): io.sentry.CustomSamplingContext;
      public getTransactionContext(): io.sentry.TransactionContext;
    }
  }
}

declare module io {
  export module sentry {
    export class Scope {
      public static class: java.lang.Class<io.sentry.Scope>;
      public setContexts(param0: string, param1: java.util.Collection<any>): void;
      public setContexts(param0: string, param1: string): void;
      public clearTransaction(): void;
      public getContexts(): io.sentry.protocol.Contexts;
      public setContexts(param0: string, param1: java.lang.Boolean): void;
      public getUser(): io.sentry.protocol.User;
      public getSpan(): io.sentry.ISpan;
      public getSession(): io.sentry.Session;
      public removeContexts(param0: string): void;
      public withTransaction(param0: io.sentry.Scope.IWithTransaction): void;
      public setExtra(param0: string, param1: string): void;
      public constructor(param0: io.sentry.SentryOptions);
      public getTags(): java.util.Map<string, string>;
      public setLevel(param0: io.sentry.SentryLevel): void;
      public withPropagationContext(param0: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
      public clearBreadcrumbs(): void;
      public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
      public setTag(param0: string, param1: string): void;
      public setPropagationContext(param0: io.sentry.PropagationContext): void;
      public clear(): void;
      public setRequest(param0: io.sentry.protocol.Request): void;
      public getTransaction(): io.sentry.ITransaction;
      public clearAttachments(): void;
      public setTransaction(param0: io.sentry.ITransaction): void;
      public removeExtra(param0: string): void;
      public setTransaction(param0: string): void;
      public setFingerprint(param0: java.util.List<string>): void;
      public removeTag(param0: string): void;
      public getTransactionName(): string;
      public setUser(param0: io.sentry.protocol.User): void;
      public getRequest(): io.sentry.protocol.Request;
      public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
      public getLevel(): io.sentry.SentryLevel;
      public addAttachment(param0: io.sentry.Attachment): void;
      public setContexts(param0: string, param1: any): void;
      public setContexts(param0: string, param1: java.lang.Number): void;
      public getPropagationContext(): io.sentry.PropagationContext;
      public setContexts(param0: string, param1: java.lang.Character): void;
      public addEventProcessor(param0: io.sentry.EventProcessor): void;
      public setContexts(param0: string, param1: androidNative.Array<any>): void;
    }
    export module Scope {
      export class IWithPropagationContext {
        public static class: java.lang.Class<io.sentry.Scope.IWithPropagationContext>;
        /**
         * Constructs a new instance of the io.sentry.Scope$IWithPropagationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { accept(param0: io.sentry.PropagationContext): void });
        public constructor();
        public accept(param0: io.sentry.PropagationContext): void;
      }
      export class IWithSession {
        public static class: java.lang.Class<io.sentry.Scope.IWithSession>;
        /**
         * Constructs a new instance of the io.sentry.Scope$IWithSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { accept(param0: io.sentry.Session): void });
        public constructor();
        public accept(param0: io.sentry.Session): void;
      }
      export class IWithTransaction {
        public static class: java.lang.Class<io.sentry.Scope.IWithTransaction>;
        /**
         * Constructs a new instance of the io.sentry.Scope$IWithTransaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { accept(param0: io.sentry.ITransaction): void });
        public constructor();
        public accept(param0: io.sentry.ITransaction): void;
      }
      export class SessionPair {
        public static class: java.lang.Class<io.sentry.Scope.SessionPair>;
        public getCurrent(): io.sentry.Session;
        public constructor(param0: io.sentry.Session, param1: io.sentry.Session);
        public getPrevious(): io.sentry.Session;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class ScopeCallback {
      public static class: java.lang.Class<io.sentry.ScopeCallback>;
      /**
       * Constructs a new instance of the io.sentry.ScopeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { run(param0: io.sentry.Scope): void });
      public constructor();
      public run(param0: io.sentry.Scope): void;
    }
  }
}

declare module io {
  export module sentry {
    export class SendCachedEnvelopeFireAndForgetIntegration extends io.sentry.Integration {
      public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration>;
      public addIntegrationToSdkVersion(): void;
      public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
      public getIntegrationName(): string;
      public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory);
    }
    export module SendCachedEnvelopeFireAndForgetIntegration {
      export class SendFireAndForget {
        public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget>;
        /**
         * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { send(): void });
        public constructor();
        public send(): void;
      }
      export class SendFireAndForgetDirPath {
        public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath>;
        /**
         * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForgetDirPath interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getDirPath(): string });
        public constructor();
        public getDirPath(): string;
      }
      export class SendFireAndForgetFactory {
        public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory>;
        /**
         * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForgetFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget; hasValidPath(param0: string, param1: io.sentry.ILogger): boolean; processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget; lambda$processDir$0(param0: io.sentry.ILogger, param1: string, param2: io.sentry.DirectoryProcessor, param3: java.io.File): void });
        public constructor();
        public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
        public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
        public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SendFireAndForgetEnvelopeSender extends io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
      public static class: java.lang.Class<io.sentry.SendFireAndForgetEnvelopeSender>;
      public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
      public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
      public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
      public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
    }
  }
}

declare module io {
  export module sentry {
    export class SendFireAndForgetOutboxSender extends io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
      public static class: java.lang.Class<io.sentry.SendFireAndForgetOutboxSender>;
      public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
      public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
      public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
      public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
    }
  }
}

declare module io {
  export module sentry {
    export class Sentry {
      public static class: java.lang.Class<io.sentry.Sentry>;
      public static withScope(param0: io.sentry.ScopeCallback): void;
      public static init(param0: io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>): void;
      public static startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
      public static getBaggage(): io.sentry.BaggageHeader;
      /** @deprecated */
      public static reportFullDisplayed(): void;
      public static addBreadcrumb(param0: string, param1: string): void;
      public static setLevel(param0: io.sentry.SentryLevel): void;
      public static captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public static captureUserFeedback(param0: io.sentry.UserFeedback): void;
      public static startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
      public static getSpan(): io.sentry.ISpan;
      public static startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
      public static captureMessage(param0: string): io.sentry.protocol.SentryId;
      public static getTraceparent(): io.sentry.SentryTraceHeader;
      public static flush(param0: number): void;
      public static getCurrentHub(): io.sentry.IHub;
      public static captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public static startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
      public static setCurrentHub(param0: io.sentry.IHub): void;
      public static setTransaction(param0: string): void;
      public static startTransaction(param0: string, param1: string, param2: string): io.sentry.ITransaction;
      public static captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public static getLastEventId(): io.sentry.protocol.SentryId;
      public static captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public static pushScope(): void;
      public static configureScope(param0: io.sentry.ScopeCallback): void;
      public static endSession(): void;
      public static init(param0: io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>, param1: boolean): void;
      public static startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
      public static bindClient(param0: io.sentry.ISentryClient): void;
      public static init(param0: string): void;
      public static captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public static removeTag(param0: string): void;
      public static captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public static clearBreadcrumbs(): void;
      public static setUser(param0: io.sentry.protocol.User): void;
      public static cloneMainHub(): io.sentry.IHub;
      public static reportFullyDisplayed(): void;
      public static popScope(): void;
      public static startSession(): void;
      public static captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
      public static startTransaction(param0: string, param1: string, param2: string, param3: boolean): io.sentry.ITransaction;
      public static addBreadcrumb(param0: string): void;
      public static captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public static isCrashedLastRun(): java.lang.Boolean;
      public static addBreadcrumb(param0: io.sentry.Breadcrumb): void;
      /** @deprecated */
      public static traceHeaders(): io.sentry.SentryTraceHeader;
      public static isEnabled(): boolean;
      public static init(param0: io.sentry.OptionsContainer<any>, param1: io.sentry.Sentry.OptionsConfiguration<any>, param2: boolean): void;
      public static startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
      public static startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
      public static captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
      public static captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
      public static removeExtra(param0: string): void;
      public static init(param0: io.sentry.SentryOptions): void;
      public static addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
      public static init(param0: io.sentry.OptionsContainer<any>, param1: io.sentry.Sentry.OptionsConfiguration<any>): void;
      public static setExtra(param0: string, param1: string): void;
      public static init(): void;
      public static startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
      public static setTag(param0: string, param1: string): void;
      public static close(): void;
      public static setFingerprint(param0: java.util.List<string>): void;
      public static captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
      public static continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
      public static startTransaction(param0: string, param1: string): io.sentry.ITransaction;
    }
    export module Sentry {
      export class OptionsConfiguration<T> extends java.lang.Object {
        public static class: java.lang.Class<io.sentry.Sentry.OptionsConfiguration<any>>;
        /**
         * Constructs a new instance of the io.sentry.Sentry$OptionsConfiguration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { configure(param0: T): void });
        public constructor();
        public configure(param0: T): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryAutoDateProvider extends io.sentry.SentryDateProvider {
      public static class: java.lang.Class<io.sentry.SentryAutoDateProvider>;
      public now(): io.sentry.SentryDate;
      public constructor();
    }
  }
}

declare module io {
  export module sentry {
    export abstract class SentryBaseEvent {
      public static class: java.lang.Class<io.sentry.SentryBaseEvent>;
      public static DEFAULT_PLATFORM: string;
      public throwable: java.lang.Throwable;
      public setTags(param0: java.util.Map<string, string>): void;
      public getSdk(): io.sentry.protocol.SdkVersion;
      public getEventId(): io.sentry.protocol.SentryId;
      public getPlatform(): string;
      public setServerName(param0: string): void;
      public getContexts(): io.sentry.protocol.Contexts;
      public getUser(): io.sentry.protocol.User;
      public addBreadcrumb(param0: string): void;
      public setDebugMeta(param0: io.sentry.protocol.DebugMeta): void;
      public setPlatform(param0: string): void;
      public setSdk(param0: io.sentry.protocol.SdkVersion): void;
      public getThrowableMechanism(): java.lang.Throwable;
      public getRelease(): string;
      public getTags(): java.util.Map<string, string>;
      public setExtra(param0: string, param1: any): void;
      public getEnvironment(): string;
      public setDist(param0: string): void;
      public setThrowable(param0: java.lang.Throwable): void;
      public setTag(param0: string, param1: string): void;
      public getExtra(param0: string): any;
      public getDebugMeta(): io.sentry.protocol.DebugMeta;
      public setRequest(param0: io.sentry.protocol.Request): void;
      public setExtras(param0: java.util.Map<string, any>): void;
      public removeExtra(param0: string): void;
      public constructor(param0: io.sentry.protocol.SentryId);
      public setEventId(param0: io.sentry.protocol.SentryId): void;
      public removeTag(param0: string): void;
      public constructor();
      public getDist(): string;
      public setUser(param0: io.sentry.protocol.User): void;
      public getTag(param0: string): string;
      public getRequest(): io.sentry.protocol.Request;
      public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
      public getExtras(): java.util.Map<string, any>;
      public getThrowable(): java.lang.Throwable;
      public setEnvironment(param0: string): void;
      public setRelease(param0: string): void;
      public getServerName(): string;
      public setBreadcrumbs(param0: java.util.List<io.sentry.Breadcrumb>): void;
      public getBreadcrumbs(): java.util.List<io.sentry.Breadcrumb>;
    }
    export module SentryBaseEvent {
      export class Deserializer {
        public static class: java.lang.Class<io.sentry.SentryBaseEvent.Deserializer>;
        public deserializeValue(param0: io.sentry.SentryBaseEvent, param1: string, param2: io.sentry.JsonObjectReader, param3: io.sentry.ILogger): boolean;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.SentryBaseEvent.JsonKeys>;
        public static EVENT_ID: string;
        public static CONTEXTS: string;
        public static SDK: string;
        public static REQUEST: string;
        public static TAGS: string;
        public static RELEASE: string;
        public static ENVIRONMENT: string;
        public static PLATFORM: string;
        public static USER: string;
        public static SERVER_NAME: string;
        public static DIST: string;
        public static BREADCRUMBS: string;
        public static DEBUG_META: string;
        public static EXTRA: string;
        public constructor();
      }
      export class Serializer {
        public static class: java.lang.Class<io.sentry.SentryBaseEvent.Serializer>;
        public serialize(param0: io.sentry.SentryBaseEvent, param1: io.sentry.JsonObjectWriter, param2: io.sentry.ILogger): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryClient extends io.sentry.ISentryClient {
      public static class: java.lang.Class<io.sentry.SentryClient>;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
      public captureSession(param0: io.sentry.Session): void;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Scope, param3: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Scope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
      public flush(param0: number): void;
      public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
      public captureUserFeedback(param0: io.sentry.UserFeedback): void;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
      public isEnabled(): boolean;
      public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
      public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
      public close(): void;
      public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
      public captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
    }
    export module SentryClient {
      export class SortBreadcrumbsByDate extends java.util.Comparator<io.sentry.Breadcrumb> {
        public static class: java.lang.Class<io.sentry.SentryClient.SortBreadcrumbsByDate>;
        public compare(param0: io.sentry.Breadcrumb, param1: io.sentry.Breadcrumb): number;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryCrashLastRunState {
      public static class: java.lang.Class<io.sentry.SentryCrashLastRunState>;
      public isCrashedLastRun(param0: string, param1: boolean): java.lang.Boolean;
      public static getInstance(): io.sentry.SentryCrashLastRunState;
      public reset(): void;
      public setCrashedLastRun(param0: boolean): void;
    }
  }
}

declare module io {
  export module sentry {
    export abstract class SentryDate extends java.lang.Comparable<io.sentry.SentryDate> {
      public static class: java.lang.Class<io.sentry.SentryDate>;
      public isBefore(param0: io.sentry.SentryDate): boolean;
      public nanoTimestamp(): number;
      public laterDateNanosTimestampByDiff(param0: io.sentry.SentryDate): number;
      public compareTo(param0: io.sentry.SentryDate): number;
      public constructor();
      public isAfter(param0: io.sentry.SentryDate): boolean;
      public diff(param0: io.sentry.SentryDate): number;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryDateProvider {
      public static class: java.lang.Class<io.sentry.SentryDateProvider>;
      /**
       * Constructs a new instance of the io.sentry.SentryDateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { now(): io.sentry.SentryDate });
      public constructor();
      public now(): io.sentry.SentryDate;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryEnvelope {
      public static class: java.lang.Class<io.sentry.SentryEnvelope>;
      public static from(param0: io.sentry.ISerializer, param1: io.sentry.ProfilingTraceData, param2: number, param3: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion, param2: io.sentry.SentryEnvelopeItem);
      public static from(param0: io.sentry.ISerializer, param1: io.sentry.SentryBaseEvent, param2: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
      public getHeader(): io.sentry.SentryEnvelopeHeader;
      public constructor(param0: io.sentry.SentryEnvelopeHeader, param1: java.lang.Iterable<io.sentry.SentryEnvelopeItem>);
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion, param2: java.lang.Iterable<io.sentry.SentryEnvelopeItem>);
      public getItems(): java.lang.Iterable<io.sentry.SentryEnvelopeItem>;
      public static from(param0: io.sentry.ISerializer, param1: io.sentry.Session, param2: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryEnvelopeHeader implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
      public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader>;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public getUnknown(): java.util.Map<string, any>;
      public getEventId(): io.sentry.protocol.SentryId;
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion, param2: io.sentry.TraceContext);
      public constructor(param0: io.sentry.protocol.SentryId);
      public getSdkVersion(): io.sentry.protocol.SdkVersion;
      public getSentAt(): java.util.Date;
      public setUnknown(param0: java.util.Map<string, any>): void;
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion);
      public setSentAt(param0: java.util.Date): void;
      public getTraceContext(): io.sentry.TraceContext;
      public constructor();
    }
    export module SentryEnvelopeHeader {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryEnvelopeHeader> {
        public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryEnvelopeHeader;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader.JsonKeys>;
        public static EVENT_ID: string;
        public static SDK: string;
        public static TRACE: string;
        public static SENT_AT: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryEnvelopeItem {
      public static class: java.lang.Class<io.sentry.SentryEnvelopeItem>;
      public static fromClientReport(param0: io.sentry.ISerializer, param1: io.sentry.clientreport.ClientReport): io.sentry.SentryEnvelopeItem;
      public static fromEvent(param0: io.sentry.ISerializer, param1: io.sentry.SentryBaseEvent): io.sentry.SentryEnvelopeItem;
      public static fromAttachment(param0: io.sentry.ISerializer, param1: io.sentry.ILogger, param2: io.sentry.Attachment, param3: number): io.sentry.SentryEnvelopeItem;
      public static fromProfilingTrace(param0: io.sentry.ProfilingTraceData, param1: number, param2: io.sentry.ISerializer): io.sentry.SentryEnvelopeItem;
      public getData(): androidNative.Array<number>;
      public static fromSession(param0: io.sentry.ISerializer, param1: io.sentry.Session): io.sentry.SentryEnvelopeItem;
      public static fromUserFeedback(param0: io.sentry.ISerializer, param1: io.sentry.UserFeedback): io.sentry.SentryEnvelopeItem;
      public getEvent(param0: io.sentry.ISerializer): io.sentry.SentryEvent;
      public getHeader(): io.sentry.SentryEnvelopeItemHeader;
      public getTransaction(param0: io.sentry.ISerializer): io.sentry.protocol.SentryTransaction;
      public getClientReport(param0: io.sentry.ISerializer): io.sentry.clientreport.ClientReport;
    }
    export module SentryEnvelopeItem {
      export class CachedItem {
        public static class: java.lang.Class<io.sentry.SentryEnvelopeItem.CachedItem>;
        public getBytes(): androidNative.Array<number>;
        public constructor(param0: java.util.concurrent.Callable<androidNative.Array<number>>);
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryEnvelopeItemHeader implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
      public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader>;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public getUnknown(): java.util.Map<string, any>;
      public getLength(): number;
      public constructor(param0: io.sentry.SentryItemType, param1: number, param2: string, param3: string, param4: string);
      public getAttachmentType(): string;
      public setUnknown(param0: java.util.Map<string, any>): void;
      public getFileName(): string;
      public getType(): io.sentry.SentryItemType;
      public getContentType(): string;
    }
    export module SentryEnvelopeItemHeader {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryEnvelopeItemHeader> {
        public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryEnvelopeItemHeader;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader.JsonKeys>;
        public static CONTENT_TYPE: string;
        public static FILENAME: string;
        public static TYPE: string;
        public static ATTACHMENT_TYPE: string;
        public static LENGTH: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryEvent extends io.sentry.SentryBaseEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.SentryEvent>;
      public getThreads(): java.util.List<io.sentry.protocol.SentryThread>;
      public constructor(param0: java.lang.Throwable);
      public setUnknown(param0: java.util.Map<string, any>): void;
      public getLogger(): string;
      public setThreads(param0: java.util.List<io.sentry.protocol.SentryThread>): void;
      public getTimestamp(): java.util.Date;
      public setLevel(param0: io.sentry.SentryLevel): void;
      public constructor(param0: java.util.Date);
      public setMessage(param0: io.sentry.protocol.Message): void;
      public setLogger(param0: string): void;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public setExceptions(param0: java.util.List<io.sentry.protocol.SentryException>): void;
      public isErrored(): boolean;
      public constructor(param0: io.sentry.protocol.SentryId);
      public setTransaction(param0: string): void;
      public setFingerprints(param0: java.util.List<string>): void;
      public constructor();
      public setTimestamp(param0: java.util.Date): void;
      public isCrashed(): boolean;
      public getExceptions(): java.util.List<io.sentry.protocol.SentryException>;
      public getTransaction(): string;
      public getUnknown(): java.util.Map<string, any>;
      public setModule(param0: string, param1: string): void;
      public setModules(param0: java.util.Map<string, string>): void;
      public getLevel(): io.sentry.SentryLevel;
      public getModule(param0: string): string;
      public getFingerprints(): java.util.List<string>;
      public removeModule(param0: string): void;
      public getMessage(): io.sentry.protocol.Message;
    }
    export module SentryEvent {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryEvent> {
        public static class: java.lang.Class<io.sentry.SentryEvent.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryEvent;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.SentryEvent.JsonKeys>;
        public static TIMESTAMP: string;
        public static MESSAGE: string;
        public static LOGGER: string;
        public static THREADS: string;
        public static EXCEPTION: string;
        public static LEVEL: string;
        public static TRANSACTION: string;
        public static FINGERPRINT: string;
        public static MODULES: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryExceptionFactory {
      public static class: java.lang.Class<io.sentry.SentryExceptionFactory>;
      public getSentryExceptionsFromThread(param0: io.sentry.protocol.SentryThread, param1: io.sentry.protocol.Mechanism, param2: java.lang.Throwable): java.util.List<io.sentry.protocol.SentryException>;
      public constructor(param0: io.sentry.SentryStackTraceFactory);
      public getSentryExceptions(param0: java.lang.Throwable): java.util.List<io.sentry.protocol.SentryException>;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryExecutorService extends io.sentry.ISentryExecutorService {
      public static class: java.lang.Class<io.sentry.SentryExecutorService>;
      public isClosed(): boolean;
      public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
      public close(param0: number): void;
      public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
      public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
    }
    export module SentryExecutorService {
      export class SentryExecutorServiceThreadFactory {
        public static class: java.lang.Class<io.sentry.SentryExecutorService.SentryExecutorServiceThreadFactory>;
        public newThread(param0: java.lang.Runnable): java.lang.Thread;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryInstantDate extends io.sentry.SentryDate {
      public static class: java.lang.Class<io.sentry.SentryInstantDate>;
      public nanoTimestamp(): number;
      public constructor();
      public constructor(param0: java.time.Instant);
    }
  }
}

declare module io {
  export module sentry {
    export class SentryInstantDateProvider extends io.sentry.SentryDateProvider {
      public static class: java.lang.Class<io.sentry.SentryInstantDateProvider>;
      public now(): io.sentry.SentryDate;
      public constructor();
    }
  }
}

declare module io {
  export module sentry {
    export class SentryIntegrationPackageStorage {
      public static class: java.lang.Class<io.sentry.SentryIntegrationPackageStorage>;
      public static getInstance(): io.sentry.SentryIntegrationPackageStorage;
      public addIntegration(param0: string): void;
      public getPackages(): java.util.Set<io.sentry.protocol.SentryPackage>;
      public addPackage(param0: string, param1: string): void;
      public clearStorage(): void;
      public getIntegrations(): java.util.Set<string>;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryItemType extends io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.SentryItemType>;
      public static Session: io.sentry.SentryItemType;
      public static Event: io.sentry.SentryItemType;
      public static UserFeedback: io.sentry.SentryItemType;
      public static Attachment: io.sentry.SentryItemType;
      public static Transaction: io.sentry.SentryItemType;
      public static Profile: io.sentry.SentryItemType;
      public static ClientReport: io.sentry.SentryItemType;
      public static ReplayEvent: io.sentry.SentryItemType;
      public static ReplayRecording: io.sentry.SentryItemType;
      public static Unknown: io.sentry.SentryItemType;
      public static resolve(param0: any): io.sentry.SentryItemType;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public static values(): androidNative.Array<io.sentry.SentryItemType>;
      public static valueOfLabel(param0: string): io.sentry.SentryItemType;
      public getItemType(): string;
      public static valueOf(param0: string): io.sentry.SentryItemType;
    }
    export module SentryItemType {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryItemType> {
        public static class: java.lang.Class<io.sentry.SentryItemType.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryItemType;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryLevel extends io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.SentryLevel>;
      public static DEBUG: io.sentry.SentryLevel;
      public static INFO: io.sentry.SentryLevel;
      public static WARNING: io.sentry.SentryLevel;
      public static ERROR: io.sentry.SentryLevel;
      public static FATAL: io.sentry.SentryLevel;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public static valueOf(param0: string): io.sentry.SentryLevel;
      public static values(): androidNative.Array<io.sentry.SentryLevel>;
    }
    export module SentryLevel {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryLevel> {
        public static class: java.lang.Class<io.sentry.SentryLevel.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryLevel;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryLockReason implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.SentryLockReason>;
      public static LOCKED: number;
      public static WAITING: number;
      public static SLEEPING: number;
      public static BLOCKED: number;
      public static ANY: number;
      public getType(): number;
      public setAddress(param0: string): void;
      public setClassName(param0: string): void;
      public getThreadId(): java.lang.Long;
      public equals(param0: any): boolean;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public setUnknown(param0: java.util.Map<string, any>): void;
      public getPackageName(): string;
      public setType(param0: number): void;
      public getAddress(): string;
      public setThreadId(param0: java.lang.Long): void;
      public constructor();
      public getUnknown(): java.util.Map<string, any>;
      public constructor(param0: io.sentry.SentryLockReason);
      public getClassName(): string;
      public setPackageName(param0: string): void;
      public hashCode(): number;
    }
    export module SentryLockReason {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryLockReason> {
        public static class: java.lang.Class<io.sentry.SentryLockReason.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryLockReason;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.SentryLockReason.JsonKeys>;
        public static TYPE: string;
        public static ADDRESS: string;
        public static PACKAGE_NAME: string;
        public static CLASS_NAME: string;
        public static THREAD_ID: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryLongDate extends io.sentry.SentryDate {
      public static class: java.lang.Class<io.sentry.SentryLongDate>;
      public nanoTimestamp(): number;
      public constructor(param0: number);
      public constructor();
    }
  }
}

declare module io {
  export module sentry {
    export class SentryNanotimeDate extends io.sentry.SentryDate {
      public static class: java.lang.Class<io.sentry.SentryNanotimeDate>;
      public nanoTimestamp(): number;
      public constructor(param0: java.util.Date, param1: number);
      public laterDateNanosTimestampByDiff(param0: io.sentry.SentryDate): number;
      public compareTo(param0: io.sentry.SentryDate): number;
      public constructor();
      public diff(param0: io.sentry.SentryDate): number;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryNanotimeDateProvider extends io.sentry.SentryDateProvider {
      public static class: java.lang.Class<io.sentry.SentryNanotimeDateProvider>;
      public now(): io.sentry.SentryDate;
      public constructor();
    }
  }
}

declare module io {
  export module sentry {
    export class SentryOptions {
      public static class: java.lang.Class<io.sentry.SentryOptions>;
      public static DEFAULT_PROPAGATION_TARGETS: string;
      public getBeforeBreadcrumb(): io.sentry.SentryOptions.BeforeBreadcrumbCallback;
      public isTracingEnabled(): boolean;
      public setInstrumenter(param0: io.sentry.Instrumenter): void;
      public setMainThreadChecker(param0: io.sentry.util.thread.IMainThreadChecker): void;
      public addCollector(param0: io.sentry.ICollector): void;
      public setProfilesSampleRate(param0: java.lang.Double): void;
      public getMaxAttachmentSize(): number;
      public isDebug(): boolean;
      public setViewHierarchyExporters(param0: java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>): void;
      public setMaxSpans(param0: number): void;
      public setEnableExternalConfiguration(param0: boolean): void;
      public getRelease(): string;
      public setEnableScopeSync(param0: boolean): void;
      public setTransactionPerformanceCollector(param0: io.sentry.TransactionPerformanceCollector): void;
      public setMaxQueueSize(param0: number): void;
      public setLogger(param0: io.sentry.ILogger): void;
      /** @deprecated */
      public getTracingOrigins(): java.util.List<string>;
      public getMaxQueueSize(): number;
      public getProfilesSampler(): io.sentry.SentryOptions.ProfilesSamplerCallback;
      public getProfilingTracesDirPath(): string;
      public setSerializer(param0: io.sentry.ISerializer): void;
      public isSendClientReports(): boolean;
      public setExecutorService(param0: io.sentry.ISentryExecutorService): void;
      public getConnectionTimeoutMillis(): number;
      public getReadTimeoutMillis(): number;
      public getModulesLoader(): io.sentry.internal.modules.IModulesLoader;
      public addIntegration(param0: io.sentry.Integration): void;
      public getGestureTargetLocators(): java.util.List<io.sentry.internal.gestures.GestureTargetLocator>;
      public getDistinctId(): string;
      public getLogger(): io.sentry.ILogger;
      public getScopeObservers(): java.util.List<io.sentry.IScopeObserver>;
      public getProguardUuid(): string;
      public constructor();
      public setDistinctId(param0: string): void;
      public getDiagnosticLevel(): io.sentry.SentryLevel;
      public getDist(): string;
      public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
      public isEnableTimeToFullDisplayTracing(): boolean;
      public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
      public setEnvironment(param0: string): void;
      public setTransportFactory(param0: io.sentry.ITransportFactory): void;
      public setDateProvider(param0: io.sentry.SentryDateProvider): void;
      public setMaxTraceFileSize(param0: number): void;
      public getBundleIds(): java.util.Set<string>;
      public getServerName(): string;
      public getFlushTimeoutMillis(): number;
      public isEnableUncaughtExceptionHandler(): boolean;
      public setSendDefaultPii(param0: boolean): void;
      public getIdleTimeout(): java.lang.Long;
      public getShutdownTimeoutMillis(): number;
      public setEnableUncaughtExceptionHandler(param0: boolean): void;
      public setEnableUserInteractionBreadcrumbs(param0: boolean): void;
      public setAttachServerName(param0: boolean): void;
      public merge(param0: io.sentry.ExternalOptions): void;
      /** @deprecated */
      public setTracingOrigins(param0: java.util.List<string>): void;
      public getProxy(): io.sentry.SentryOptions.Proxy;
      public isTraceOptionsRequests(): boolean;
      public isSendDefaultPii(): boolean;
      public getBeforeSendTransaction(): io.sentry.SentryOptions.BeforeSendTransactionCallback;
      public setTransportGate(param0: io.sentry.transport.ITransportGate): void;
      public setConnectionTimeoutMillis(param0: number): void;
      public setModulesLoader(param0: io.sentry.internal.modules.IModulesLoader): void;
      public getTransportGate(): io.sentry.transport.ITransportGate;
      public getIgnoredExceptionsForType(): java.util.Set<java.lang.Class<any>>;
      public setAttachThreads(param0: boolean): void;
      public getSdkVersion(): io.sentry.protocol.SdkVersion;
      public setEnableAutoSessionTracking(param0: boolean): void;
      public setDist(param0: string): void;
      public getExecutorService(): io.sentry.ISentryExecutorService;
      public getMaxSpans(): number;
      /** @deprecated */
      public setTraceSampling(param0: boolean): void;
      public setTracePropagationTargets(param0: java.util.List<string>): void;
      public getDsn(): string;
      public setEnableTimeToFullDisplayTracing(param0: boolean): void;
      public setTransactionProfiler(param0: io.sentry.ITransactionProfiler): void;
      public getDateProvider(): io.sentry.SentryDateProvider;
      public setProxy(param0: io.sentry.SentryOptions.Proxy): void;
      public getSampleRate(): java.lang.Double;
      public setEnvelopeReader(param0: io.sentry.IEnvelopeReader): void;
      public setSampleRate(param0: java.lang.Double): void;
      public getIntegrations(): java.util.List<io.sentry.Integration>;
      public getMaxCacheItems(): number;
      public setMaxCacheItems(param0: number): void;
      public getMaxDepth(): number;
      public setReadTimeoutMillis(param0: number): void;
      public setMaxAttachmentSize(param0: number): void;
      public setEnableNdk(param0: boolean): void;
      public setTracesSampler(param0: io.sentry.SentryOptions.TracesSamplerCallback): void;
      public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
      /** @deprecated */
      public setProfilingEnabled(param0: boolean): void;
      public isEnableUserInteractionBreadcrumbs(): boolean;
      public setEnableTracing(param0: java.lang.Boolean): void;
      public getTracesSampler(): io.sentry.SentryOptions.TracesSamplerCallback;
      public setServerName(param0: string): void;
      public setShutdownTimeoutMillis(param0: number): void;
      public setTracesSampleRate(param0: java.lang.Double): void;
      public getViewHierarchyExporters(): java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>;
      public getContextTags(): java.util.List<string>;
      public getInAppIncludes(): java.util.List<string>;
      public addBundleId(param0: string): void;
      public getTransportFactory(): io.sentry.ITransportFactory;
      /** @deprecated */
      public getShutdownTimeout(): number;
      public setEnableShutdownHook(param0: boolean): void;
      public getOptionsObservers(): java.util.List<io.sentry.IOptionsObserver>;
      public getDebugMetaLoader(): io.sentry.internal.debugmeta.IDebugMetaLoader;
      public getProfilesSampleRate(): java.lang.Double;
      public isTraceSampling(): boolean;
      public setSentryClientName(param0: string): void;
      public isEnableExternalConfiguration(): boolean;
      public setEnableUserInteractionTracing(param0: boolean): void;
      public addInAppInclude(param0: string): void;
      public setPrintUncaughtStackTrace(param0: boolean): void;
      public setSendClientReports(param0: boolean): void;
      public setMaxRequestBodySize(param0: io.sentry.SentryOptions.RequestSize): void;
      public getCollectors(): java.util.List<io.sentry.ICollector>;
      public isEnableShutdownHook(): boolean;
      public getEnvelopeDiskCache(): io.sentry.cache.IEnvelopeCache;
      public getMaxBreadcrumbs(): number;
      public setProguardUuid(param0: string): void;
      public isEnableNdk(): boolean;
      public addOptionsObserver(param0: io.sentry.IOptionsObserver): void;
      public isEnableDeduplication(): boolean;
      public setAttachStacktrace(param0: boolean): void;
      public isEnableScopeSync(): boolean;
      public getSerializer(): io.sentry.ISerializer;
      public getOutboxPath(): string;
      public setEnvelopeDiskCache(param0: io.sentry.cache.IEnvelopeCache): void;
      public isProfilingEnabled(): boolean;
      public getEnvelopeReader(): io.sentry.IEnvelopeReader;
      public setRelease(param0: string): void;
      public setBeforeSendTransaction(param0: io.sentry.SentryOptions.BeforeSendTransactionCallback): void;
      public isPrintUncaughtStackTrace(): boolean;
      public getSentryClientName(): string;
      public addScopeObserver(param0: io.sentry.IScopeObserver): void;
      public getCacheDirPath(): string;
      /** @deprecated */
      public addTracingOrigin(param0: string): void;
      public isEnableUserInteractionTracing(): boolean;
      public addContextTag(param0: string): void;
      public getClientReportRecorder(): io.sentry.clientreport.IClientReportRecorder;
      public setBeforeBreadcrumb(param0: io.sentry.SentryOptions.BeforeBreadcrumbCallback): void;
      public setSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
      public setDebug(param0: boolean): void;
      public setProfilesSampler(param0: io.sentry.SentryOptions.ProfilesSamplerCallback): void;
      public getTracePropagationTargets(): java.util.List<string>;
      public addInAppExclude(param0: string): void;
      public isAttachThreads(): boolean;
      public setBeforeSend(param0: io.sentry.SentryOptions.BeforeSendCallback): void;
      public setCacheDirPath(param0: string): void;
      public getSessionTrackingIntervalMillis(): number;
      /** @deprecated */
      public setShutdownTimeout(param0: number): void;
      public setFlushTimeoutMillis(param0: number): void;
      public getTracesSampleRate(): java.lang.Double;
      public getTags(): java.util.Map<string, string>;
      public getMaxTraceFileSize(): number;
      public getInAppExcludes(): java.util.List<string>;
      public setSessionTrackingIntervalMillis(param0: number): void;
      public setMaxDepth(param0: number): void;
      public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
      public setTraceOptionsRequests(param0: boolean): void;
      public addIgnoredExceptionForType(param0: java.lang.Class<any>): void;
      public getEnvironment(): string;
      public setTag(param0: string, param1: string): void;
      public getInstrumenter(): io.sentry.Instrumenter;
      public isEnableAutoSessionTracking(): boolean;
      public setGestureTargetLocators(param0: java.util.List<io.sentry.internal.gestures.GestureTargetLocator>): void;
      public getMainThreadChecker(): io.sentry.util.thread.IMainThreadChecker;
      public setIdleTimeout(param0: java.lang.Long): void;
      public setDebugMetaLoader(param0: io.sentry.internal.debugmeta.IDebugMetaLoader): void;
      public getBeforeSend(): io.sentry.SentryOptions.BeforeSendCallback;
      public setEnableDeduplication(param0: boolean): void;
      public getTransactionPerformanceCollector(): io.sentry.TransactionPerformanceCollector;
      public setDsn(param0: string): void;
      public isAttachServerName(): boolean;
      public getMaxRequestBodySize(): io.sentry.SentryOptions.RequestSize;
      public getTransactionProfiler(): io.sentry.ITransactionProfiler;
      public getEnableTracing(): java.lang.Boolean;
      public isAttachStacktrace(): boolean;
      public getSslSocketFactory(): javax.net.ssl.SSLSocketFactory;
      public setMaxBreadcrumbs(param0: number): void;
      public setDiagnosticLevel(param0: io.sentry.SentryLevel): void;
      public addEventProcessor(param0: io.sentry.EventProcessor): void;
      public getFullyDisplayedReporter(): io.sentry.FullyDisplayedReporter;
    }
    export module SentryOptions {
      export class BeforeBreadcrumbCallback {
        public static class: java.lang.Class<io.sentry.SentryOptions.BeforeBreadcrumbCallback>;
        /**
         * Constructs a new instance of the io.sentry.SentryOptions$BeforeBreadcrumbCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { execute(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): io.sentry.Breadcrumb });
        public constructor();
        public execute(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): io.sentry.Breadcrumb;
      }
      export class BeforeSendCallback {
        public static class: java.lang.Class<io.sentry.SentryOptions.BeforeSendCallback>;
        /**
         * Constructs a new instance of the io.sentry.SentryOptions$BeforeSendCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent });
        public constructor();
        public execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
      }
      export class BeforeSendTransactionCallback {
        public static class: java.lang.Class<io.sentry.SentryOptions.BeforeSendTransactionCallback>;
        /**
         * Constructs a new instance of the io.sentry.SentryOptions$BeforeSendTransactionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { execute(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction });
        public constructor();
        public execute(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
      }
      export class ProfilesSamplerCallback {
        public static class: java.lang.Class<io.sentry.SentryOptions.ProfilesSamplerCallback>;
        /**
         * Constructs a new instance of the io.sentry.SentryOptions$ProfilesSamplerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { sample(param0: io.sentry.SamplingContext): java.lang.Double });
        public constructor();
        public sample(param0: io.sentry.SamplingContext): java.lang.Double;
      }
      export class Proxy {
        public static class: java.lang.Class<io.sentry.SentryOptions.Proxy>;
        public getPort(): string;
        public getPass(): string;
        public getUser(): string;
        public setPass(param0: string): void;
        public setUser(param0: string): void;
        public constructor(param0: string, param1: string, param2: string, param3: string);
        public getHost(): string;
        public setHost(param0: string): void;
        public setPort(param0: string): void;
        public constructor(param0: string, param1: string);
        public constructor();
      }
      export class RequestSize {
        public static class: java.lang.Class<io.sentry.SentryOptions.RequestSize>;
        public static NONE: io.sentry.SentryOptions.RequestSize;
        public static SMALL: io.sentry.SentryOptions.RequestSize;
        public static MEDIUM: io.sentry.SentryOptions.RequestSize;
        public static ALWAYS: io.sentry.SentryOptions.RequestSize;
        public static valueOf(param0: string): io.sentry.SentryOptions.RequestSize;
        public static values(): androidNative.Array<io.sentry.SentryOptions.RequestSize>;
      }
      export class TracesSamplerCallback {
        public static class: java.lang.Class<io.sentry.SentryOptions.TracesSamplerCallback>;
        /**
         * Constructs a new instance of the io.sentry.SentryOptions$TracesSamplerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { sample(param0: io.sentry.SamplingContext): java.lang.Double });
        public constructor();
        public sample(param0: io.sentry.SamplingContext): java.lang.Double;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryRuntimeEventProcessor extends io.sentry.EventProcessor {
      public static class: java.lang.Class<io.sentry.SentryRuntimeEventProcessor>;
      public constructor(param0: string, param1: string);
      public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
      public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
      public constructor();
    }
  }
}

declare module io {
  export module sentry {
    export class SentrySpanStorage {
      public static class: java.lang.Class<io.sentry.SentrySpanStorage>;
      public static getInstance(): io.sentry.SentrySpanStorage;
      public store(param0: string, param1: io.sentry.ISpan): void;
      public get(param0: string): io.sentry.ISpan;
      public removeAndGet(param0: string): io.sentry.ISpan;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryStackTraceFactory {
      public static class: java.lang.Class<io.sentry.SentryStackTraceFactory>;
      public isInApp(param0: string): java.lang.Boolean;
      public constructor(param0: io.sentry.SentryOptions);
      public getStackFrames(param0: androidNative.Array<java.lang.StackTraceElement>): java.util.List<io.sentry.protocol.SentryStackFrame>;
      public getInAppCallStack(): java.util.List<io.sentry.protocol.SentryStackFrame>;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryThreadFactory {
      public static class: java.lang.Class<io.sentry.SentryThreadFactory>;
      public constructor(param0: io.sentry.SentryStackTraceFactory, param1: io.sentry.SentryOptions);
    }
  }
}

declare module io {
  export module sentry {
    export class SentryTraceHeader {
      public static class: java.lang.Class<io.sentry.SentryTraceHeader>;
      public static SENTRY_TRACE_HEADER: string;
      public getName(): string;
      public isSampled(): java.lang.Boolean;
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: java.lang.Boolean);
      public getValue(): string;
      public getTraceId(): io.sentry.protocol.SentryId;
      public constructor(param0: string);
      public getSpanId(): io.sentry.SpanId;
    }
  }
}

declare module io {
  export module sentry {
    export class SentryTracer extends io.sentry.ITransaction {
      public static class: java.lang.Class<io.sentry.SentryTracer>;
      public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
      public getEventId(): io.sentry.protocol.SentryId;
      public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.IHub, param2: io.sentry.TransactionOptions);
      public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
      public finish(): void;
      public getContexts(): io.sentry.protocol.Contexts;
      public getData(param0: string): any;
      public setStatus(param0: io.sentry.SpanStatus): void;
      public getStatus(): io.sentry.SpanStatus;
      public getSamplingDecision(): io.sentry.TracesSamplingDecision;
      public toSentryTrace(): io.sentry.SentryTraceHeader;
      public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean): void;
      public getOperation(): string;
      public setOperation(param0: string): void;
      public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
      public finish(param0: io.sentry.SpanStatus): void;
      public setMeasurement(param0: string, param1: java.lang.Number): void;
      public getTag(param0: string): string;
      public getLatestActiveSpan(): io.sentry.Span;
      public getThrowable(): java.lang.Throwable;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
      public getSpans(): java.util.List<io.sentry.Span>;
      public isSampled(): java.lang.Boolean;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
      public getDescription(): string;
      public getFinishDate(): io.sentry.SentryDate;
      public startChild(param0: string): io.sentry.ISpan;
      public traceContext(): io.sentry.TraceContext;
      public isNoOp(): boolean;
      public scheduleFinish(): void;
      public forceFinish(param0: io.sentry.SpanStatus, param1: boolean): void;
      public getData(): java.util.Map<string, any>;
      public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
      public isFinished(): boolean;
      public getChildren(): java.util.List<io.sentry.Span>;
      public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.IHub);
      public setContext(param0: string, param1: any): void;
      public setData(param0: string, param1: any): void;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
      public setThrowable(param0: java.lang.Throwable): void;
      public setTag(param0: string, param1: string): void;
      public updateEndDate(param0: io.sentry.SentryDate): boolean;
      public isProfileSampled(): java.lang.Boolean;
      public startChild(param0: string, param1: string): io.sentry.ISpan;
      public getStartDate(): io.sentry.SentryDate;
      public setDescription(param0: string): void;
      public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
      public getSpanContext(): io.sentry.SpanContext;
      public getName(): string;
      public setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
      public setName(param0: string): void;
    }
    export module SentryTracer {
      export class FinishStatus {
        public static class: java.lang.Class<io.sentry.SentryTracer.FinishStatus>;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryValues<T> extends java.lang.Object {
      public static class: java.lang.Class<io.sentry.SentryValues<any>>;
      public getValues(): java.util.List<T>;
    }
    export module SentryValues {
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.SentryValues.JsonKeys>;
        public static VALUES: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SentryWrapper {
      public static class: java.lang.Class<io.sentry.SentryWrapper>;
      public static wrapCallable(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Callable<any>;
      public constructor();
      public static wrapSupplier(param0: any /* any*/): any /* any*/;
    }
  }
}

declare module io {
  export module sentry {
    export class Session implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.Session>;
      public setUnknown(param0: java.util.Map<string, any>): void;
      public end(): void;
      public getStarted(): java.util.Date;
      public getSessionId(): java.util.UUID;
      public errorCount(): number;
      public getIpAddress(): string;
      public getDuration(): java.lang.Double;
      public getInit(): java.lang.Boolean;
      public getRelease(): string;
      public constructor(param0: string, param1: io.sentry.protocol.User, param2: string, param3: string);
      public getSequence(): java.lang.Long;
      public constructor(param0: io.sentry.Session.State, param1: java.util.Date, param2: java.util.Date, param3: number, param4: string, param5: java.util.UUID, param6: java.lang.Boolean, param7: java.lang.Long, param8: java.lang.Double, param9: string, param10: string, param11: string, param12: string, param13: string);
      public getStatus(): io.sentry.Session.State;
      public getTimestamp(): java.util.Date;
      public getEnvironment(): string;
      public end(param0: java.util.Date): void;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public setInitAsTrue(): void;
      public getDistinctId(): string;
      public getUserAgent(): string;
      public getAbnormalMechanism(): string;
      public update(param0: io.sentry.Session.State, param1: string, param2: boolean): boolean;
      public update(param0: io.sentry.Session.State, param1: string, param2: boolean, param3: string): boolean;
      public getUnknown(): java.util.Map<string, any>;
      public clone(): io.sentry.Session;
    }
    export module Session {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.Session> {
        public static class: java.lang.Class<io.sentry.Session.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.Session;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.Session.JsonKeys>;
        public static SID: string;
        public static DID: string;
        public static INIT: string;
        public static STARTED: string;
        public static STATUS: string;
        public static SEQ: string;
        public static ERRORS: string;
        public static DURATION: string;
        public static TIMESTAMP: string;
        public static ATTRS: string;
        public static RELEASE: string;
        public static ENVIRONMENT: string;
        public static IP_ADDRESS: string;
        public static USER_AGENT: string;
        public static ABNORMAL_MECHANISM: string;
        public constructor();
      }
      export class State {
        public static class: java.lang.Class<io.sentry.Session.State>;
        public static Ok: io.sentry.Session.State;
        public static Exited: io.sentry.Session.State;
        public static Crashed: io.sentry.Session.State;
        public static Abnormal: io.sentry.Session.State;
        public static valueOf(param0: string): io.sentry.Session.State;
        public static values(): androidNative.Array<io.sentry.Session.State>;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class ShutdownHookIntegration extends io.sentry.Integration {
      public static class: java.lang.Class<io.sentry.ShutdownHookIntegration>;
      public addIntegrationToSdkVersion(): void;
      public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
      public getIntegrationName(): string;
      public constructor();
      public constructor(param0: java.lang.Runtime);
      public close(): void;
    }
  }
}

declare module io {
  export module sentry {
    export class Span extends io.sentry.ISpan {
      public static class: java.lang.Class<io.sentry.Span>;
      public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
      public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
      public traceContext(): io.sentry.TraceContext;
      public finish(): void;
      public isNoOp(): boolean;
      public getTraceId(): io.sentry.protocol.SentryId;
      public getData(param0: string): any;
      public setStatus(param0: io.sentry.SpanStatus): void;
      public getParentSpanId(): io.sentry.SpanId;
      public getData(): java.util.Map<string, any>;
      public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
      public isFinished(): boolean;
      public getTags(): java.util.Map<string, string>;
      public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.SentryTracer, param2: io.sentry.IHub, param3: io.sentry.SentryDate, param4: io.sentry.SpanOptions);
      public getStatus(): io.sentry.SpanStatus;
      public getSamplingDecision(): io.sentry.TracesSamplingDecision;
      public setData(param0: string, param1: any): void;
      public toSentryTrace(): io.sentry.SentryTraceHeader;
      public getOperation(): string;
      public setTag(param0: string, param1: string): void;
      public setThrowable(param0: java.lang.Throwable): void;
      public updateEndDate(param0: io.sentry.SentryDate): boolean;
      public isProfileSampled(): java.lang.Boolean;
      public setOperation(param0: string): void;
      public startChild(param0: string, param1: string): io.sentry.ISpan;
      public getStartDate(): io.sentry.SentryDate;
      public setDescription(param0: string): void;
      public finish(param0: io.sentry.SpanStatus): void;
      public setMeasurement(param0: string, param1: java.lang.Number): void;
      public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
      public getSpanContext(): io.sentry.SpanContext;
      public getTag(param0: string): string;
      public getSpanId(): io.sentry.SpanId;
      public getThrowable(): java.lang.Throwable;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
      public isSampled(): java.lang.Boolean;
      public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
      public getDescription(): string;
      public getFinishDate(): io.sentry.SentryDate;
      public startChild(param0: string): io.sentry.ISpan;
    }
  }
}

declare module io {
  export module sentry {
    export class SpanContext implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.SpanContext>;
      public static TYPE: string;
      public op: string;
      public description: string;
      public status: io.sentry.SpanStatus;
      public tags: java.util.Map<string, string>;
      public getProfileSampled(): java.lang.Boolean;
      public equals(param0: any): boolean;
      public constructor(param0: string, param1: io.sentry.TracesSamplingDecision);
      public setUnknown(param0: java.util.Map<string, any>): void;
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: string, param3: io.sentry.SpanId, param4: io.sentry.TracesSamplingDecision);
      public getTraceId(): io.sentry.protocol.SentryId;
      public setStatus(param0: io.sentry.SpanStatus): void;
      public getParentSpanId(): io.sentry.SpanId;
      public getTags(): java.util.Map<string, string>;
      public getStatus(): io.sentry.SpanStatus;
      public getSamplingDecision(): io.sentry.TracesSamplingDecision;
      public getOperation(): string;
      public constructor(param0: string);
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: io.sentry.SpanId, param3: string, param4: string, param5: io.sentry.TracesSamplingDecision, param6: io.sentry.SpanStatus);
      public setTag(param0: string, param1: string): void;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public constructor(param0: io.sentry.SpanContext);
      public setOperation(param0: string): void;
      public setSamplingDecision(param0: io.sentry.TracesSamplingDecision): void;
      public getSampled(): java.lang.Boolean;
      public setDescription(param0: string): void;
      public getSpanId(): io.sentry.SpanId;
      public getUnknown(): java.util.Map<string, any>;
      public setSampled(param0: java.lang.Boolean, param1: java.lang.Boolean): void;
      public getDescription(): string;
      public setSampled(param0: java.lang.Boolean): void;
      public hashCode(): number;
    }
    export module SpanContext {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SpanContext> {
        public static class: java.lang.Class<io.sentry.SpanContext.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SpanContext;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.SpanContext.JsonKeys>;
        public static TRACE_ID: string;
        public static SPAN_ID: string;
        public static PARENT_SPAN_ID: string;
        public static OP: string;
        public static DESCRIPTION: string;
        public static STATUS: string;
        public static TAGS: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SpanDataConvention {
      public static class: java.lang.Class<io.sentry.SpanDataConvention>;
      /**
       * Constructs a new instance of the io.sentry.SpanDataConvention interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {});
      public constructor();
      public static HTTP_FRAGMENT_KEY: string;
      public static BLOCKED_MAIN_THREAD_KEY: string;
      public static HTTP_METHOD_KEY: string;
      public static HTTP_STATUS_CODE_KEY: string;
      public static HTTP_QUERY_KEY: string;
      public static HTTP_RESPONSE_CONTENT_LENGTH_KEY: string;
      public static CALL_STACK_KEY: string;
    }
  }
}

declare module io {
  export module sentry {
    export class SpanFinishedCallback {
      public static class: java.lang.Class<io.sentry.SpanFinishedCallback>;
      /**
       * Constructs a new instance of the io.sentry.SpanFinishedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { execute(param0: io.sentry.Span): void });
      public constructor();
      public execute(param0: io.sentry.Span): void;
    }
  }
}

declare module io {
  export module sentry {
    export class SpanId extends io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.SpanId>;
      public static EMPTY_ID: io.sentry.SpanId;
      public equals(param0: any): boolean;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public toString(): string;
      public constructor();
      public constructor(param0: string);
      public hashCode(): number;
    }
    export module SpanId {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SpanId> {
        public static class: java.lang.Class<io.sentry.SpanId.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SpanId;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SpanOptions {
      public static class: java.lang.Class<io.sentry.SpanOptions>;
      public isTrimStart(): boolean;
      public isIdle(): boolean;
      public setTrimEnd(param0: boolean): void;
      public constructor();
      public setIdle(param0: boolean): void;
      public setTrimStart(param0: boolean): void;
      public isTrimEnd(): boolean;
    }
  }
}

declare module io {
  export module sentry {
    export class SpanStatus extends io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.SpanStatus>;
      public static OK: io.sentry.SpanStatus;
      public static CANCELLED: io.sentry.SpanStatus;
      public static INTERNAL_ERROR: io.sentry.SpanStatus;
      public static UNKNOWN: io.sentry.SpanStatus;
      public static UNKNOWN_ERROR: io.sentry.SpanStatus;
      public static INVALID_ARGUMENT: io.sentry.SpanStatus;
      public static DEADLINE_EXCEEDED: io.sentry.SpanStatus;
      public static NOT_FOUND: io.sentry.SpanStatus;
      public static ALREADY_EXISTS: io.sentry.SpanStatus;
      public static PERMISSION_DENIED: io.sentry.SpanStatus;
      public static RESOURCE_EXHAUSTED: io.sentry.SpanStatus;
      public static FAILED_PRECONDITION: io.sentry.SpanStatus;
      public static ABORTED: io.sentry.SpanStatus;
      public static OUT_OF_RANGE: io.sentry.SpanStatus;
      public static UNIMPLEMENTED: io.sentry.SpanStatus;
      public static UNAVAILABLE: io.sentry.SpanStatus;
      public static DATA_LOSS: io.sentry.SpanStatus;
      public static UNAUTHENTICATED: io.sentry.SpanStatus;
      public static valueOf(param0: string): io.sentry.SpanStatus;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public static fromHttpStatusCode(param0: number): io.sentry.SpanStatus;
      public static fromHttpStatusCode(param0: java.lang.Integer, param1: io.sentry.SpanStatus): io.sentry.SpanStatus;
      public static values(): androidNative.Array<io.sentry.SpanStatus>;
    }
    export module SpanStatus {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SpanStatus> {
        public static class: java.lang.Class<io.sentry.SpanStatus.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SpanStatus;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export class Stack {
      public static class: java.lang.Class<io.sentry.Stack>;
      public constructor(param0: io.sentry.ILogger, param1: io.sentry.Stack.StackItem);
      public constructor(param0: io.sentry.Stack);
    }
    export module Stack {
      export class StackItem {
        public static class: java.lang.Class<io.sentry.Stack.StackItem>;
        public getOptions(): io.sentry.SentryOptions;
        public getClient(): io.sentry.ISentryClient;
        public getScope(): io.sentry.Scope;
        public setClient(param0: io.sentry.ISentryClient): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class SynchronizedCollection<E> extends java.lang.Object {
      public static class: java.lang.Class<io.sentry.SynchronizedCollection<any>>;
      public clear(): void;
      public equals(param0: any): boolean;
      public isEmpty(): boolean;
      public iterator(): java.util.Iterator<E>;
      public size(): number;
      public decorated(): java.util.Collection<E>;
      public add(param0: E): boolean;
      public static synchronizedCollection(param0: java.util.Collection<any>): io.sentry.SynchronizedCollection<any>;
      public addAll(param0: java.util.Collection<any>): boolean;
      public retainAll(param0: java.util.Collection<any>): boolean;
      public remove(param0: any): boolean;
      public containsAll(param0: java.util.Collection<any>): boolean;
      public toArray(): androidNative.Array<any>;
      public contains(param0: any): boolean;
      public toString(): string;
      public removeAll(param0: java.util.Collection<any>): boolean;
      public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
      public hashCode(): number;
    }
  }
}

declare module io {
  export module sentry {
    export class SynchronizedQueue<E> extends io.sentry.SynchronizedCollection<any> implements java.util.Queue<any> {
      public static class: java.lang.Class<io.sentry.SynchronizedQueue<any>>;
      public equals(param0: any): boolean;
      public poll(): any;
      public decorated(): java.util.Collection<any>;
      public peek(): any;
      public remove(param0: any): boolean;
      public constructor(param0: java.util.Queue<any>, param1: any);
      public toArray(): androidNative.Array<any>;
      public decorated(): java.util.Queue<any>;
      public offer(param0: any): boolean;
      public remove(): any;
      public element(): any;
      public hashCode(): number;
      public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
    }
  }
}

declare module io {
  export module sentry {
    export class SystemOutLogger extends io.sentry.ILogger {
      public static class: java.lang.Class<io.sentry.SystemOutLogger>;
      public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
      public isEnabled(param0: io.sentry.SentryLevel): boolean;
      public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
      public constructor();
      public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
    }
  }
}

declare module io {
  export module sentry {
    export class TraceContext implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.TraceContext>;
      public getRelease(): string;
      public getPublicKey(): string;
      public getUserSegment(): string;
      public getTransaction(): string;
      public getUnknown(): java.util.Map<string, any>;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public setUnknown(param0: java.util.Map<string, any>): void;
      public getSampleRate(): string;
      public getTraceId(): io.sentry.protocol.SentryId;
      public getEnvironment(): string;
      public getUserId(): string;
    }
    export module TraceContext {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.TraceContext> {
        public static class: java.lang.Class<io.sentry.TraceContext.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.TraceContext;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.TraceContext.JsonKeys>;
        public static TRACE_ID: string;
        public static PUBLIC_KEY: string;
        public static RELEASE: string;
        public static ENVIRONMENT: string;
        public static USER: string;
        public static USER_ID: string;
        public static USER_SEGMENT: string;
        public static TRANSACTION: string;
        public static SAMPLE_RATE: string;
        public constructor();
      }
      export class TraceContextUser extends io.sentry.JsonUnknown {
        public static class: java.lang.Class<io.sentry.TraceContext.TraceContextUser>;
        public getId(): string;
        public getSegment(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public getUnknown(): java.util.Map<string, any>;
      }
      export module TraceContextUser {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.TraceContext.TraceContextUser> {
          public static class: java.lang.Class<io.sentry.TraceContext.TraceContextUser.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.TraceContext.TraceContextUser;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.TraceContext.TraceContextUser.JsonKeys>;
          public static ID: string;
          public static SEGMENT: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export class TracesSampler {
      public static class: java.lang.Class<io.sentry.TracesSampler>;
      public constructor(param0: io.sentry.SentryOptions);
    }
  }
}

declare module io {
  export module sentry {
    export class TracesSamplingDecision {
      public static class: java.lang.Class<io.sentry.TracesSamplingDecision>;
      public constructor(param0: java.lang.Boolean);
      public getProfileSampled(): java.lang.Boolean;
      public getSampled(): java.lang.Boolean;
      public getProfileSampleRate(): java.lang.Double;
      public constructor(param0: java.lang.Boolean, param1: java.lang.Double, param2: java.lang.Boolean, param3: java.lang.Double);
      public getSampleRate(): java.lang.Double;
      public constructor(param0: java.lang.Boolean, param1: java.lang.Double);
    }
  }
}

declare module io {
  export module sentry {
    export class TransactionContext extends io.sentry.SpanContext {
      public static class: java.lang.Class<io.sentry.TransactionContext>;
      public getBaggage(): io.sentry.Baggage;
      public setInstrumenter(param0: io.sentry.Instrumenter): void;
      public constructor(param0: string, param1: io.sentry.TracesSamplingDecision);
      public setUnknown(param0: java.util.Map<string, any>): void;
      public setParentSampled(param0: java.lang.Boolean, param1: java.lang.Boolean): void;
      public constructor(param0: string, param1: io.sentry.protocol.TransactionNameSource, param2: string, param3: io.sentry.TracesSamplingDecision);
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: string, param3: io.sentry.SpanId, param4: io.sentry.TracesSamplingDecision);
      public static fromPropagationContext(param0: io.sentry.PropagationContext): io.sentry.TransactionContext;
      public constructor(param0: string, param1: string);
      public setTransactionNameSource(param0: io.sentry.protocol.TransactionNameSource): void;
      public setParentSampled(param0: java.lang.Boolean): void;
      public constructor(param0: string);
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: io.sentry.SpanId, param3: string, param4: string, param5: io.sentry.TracesSamplingDecision, param6: io.sentry.SpanStatus);
      public getInstrumenter(): io.sentry.Instrumenter;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public constructor(param0: io.sentry.SpanContext);
      public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
      /** @deprecated */
      public static fromSentryTrace(param0: string, param1: string, param2: io.sentry.SentryTraceHeader): io.sentry.TransactionContext;
      public getUnknown(): java.util.Map<string, any>;
      public getName(): string;
      public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: io.sentry.SpanId, param3: io.sentry.TracesSamplingDecision, param4: io.sentry.Baggage);
      public constructor(param0: string, param1: string, param2: io.sentry.TracesSamplingDecision);
      public getParentSamplingDecision(): io.sentry.TracesSamplingDecision;
      public constructor(param0: string, param1: io.sentry.protocol.TransactionNameSource, param2: string);
      public getParentSampled(): java.lang.Boolean;
      public setName(param0: string): void;
    }
  }
}

declare module io {
  export module sentry {
    export class TransactionFinishedCallback {
      public static class: java.lang.Class<io.sentry.TransactionFinishedCallback>;
      /**
       * Constructs a new instance of the io.sentry.TransactionFinishedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { execute(param0: io.sentry.ITransaction): void });
      public constructor();
      public execute(param0: io.sentry.ITransaction): void;
    }
  }
}

declare module io {
  export module sentry {
    export class TransactionOptions extends io.sentry.SpanOptions {
      public static class: java.lang.Class<io.sentry.TransactionOptions>;
      public isBindToScope(): boolean;
      public setTransactionFinishedCallback(param0: io.sentry.TransactionFinishedCallback): void;
      public isWaitForChildren(): boolean;
      public setIdleTimeout(param0: java.lang.Long): void;
      public getTransactionFinishedCallback(): io.sentry.TransactionFinishedCallback;
      public setCustomSamplingContext(param0: io.sentry.CustomSamplingContext): void;
      public setStartTimestamp(param0: io.sentry.SentryDate): void;
      public constructor();
      public getCustomSamplingContext(): io.sentry.CustomSamplingContext;
      public setWaitForChildren(param0: boolean): void;
      public getStartTimestamp(): io.sentry.SentryDate;
      public getIdleTimeout(): java.lang.Long;
      public setBindToScope(param0: boolean): void;
    }
  }
}

declare module io {
  export module sentry {
    export class TransactionPerformanceCollector {
      public static class: java.lang.Class<io.sentry.TransactionPerformanceCollector>;
      /**
       * Constructs a new instance of the io.sentry.TransactionPerformanceCollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { start(param0: io.sentry.ITransaction): void; stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>; close(): void });
      public constructor();
      public start(param0: io.sentry.ITransaction): void;
      public stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
      public close(): void;
    }
  }
}

declare module io {
  export module sentry {
    export class TypeCheckHint {
      public static class: java.lang.Class<io.sentry.TypeCheckHint>;
      public static SENTRY_TYPE_CHECK_HINT: string;
      public static SENTRY_IS_FROM_HYBRID_SDK: string;
      public static SENTRY_JAVASCRIPT_SDK_NAME: string;
      public static SENTRY_DOTNET_SDK_NAME: string;
      public static SENTRY_DART_SDK_NAME: string;
      public static SENTRY_SYNTHETIC_EXCEPTION: string;
      public static ANDROID_ACTIVITY: string;
      public static ANDROID_CONFIGURATION: string;
      public static ANDROID_INTENT: string;
      public static ANDROID_SENSOR_EVENT: string;
      public static ANDROID_MOTION_EVENT: string;
      public static ANDROID_VIEW: string;
      public static ANDROID_FRAGMENT: string;
      public static ANDROID_NAV_DESTINATION: string;
      public static ANDROID_NETWORK_CAPABILITIES: string;
      public static OKHTTP_RESPONSE: string;
      public static OKHTTP_REQUEST: string;
      public static APOLLO_RESPONSE: string;
      public static APOLLO_REQUEST: string;
      public static GRAPHQL_HANDLER_PARAMETERS: string;
      public static JUL_LOG_RECORD: string;
      public static LOG4J_LOG_EVENT: string;
      public static LOGBACK_LOGGING_EVENT: string;
      public static OPEN_FEIGN_RESPONSE: string;
      public static OPEN_FEIGN_REQUEST: string;
      public static SERVLET_REQUEST: string;
      public static SPRING_RESOLVER_RESPONSE: string;
      public static SPRING_RESOLVER_REQUEST: string;
      public static SPRING_REQUEST_FILTER_RESPONSE: string;
      public static SPRING_REQUEST_FILTER_REQUEST: string;
      public static SPRING_REQUEST_INTERCEPTOR_RESPONSE: string;
      public static SPRING_REQUEST_INTERCEPTOR_REQUEST: string;
      public static SPRING_REQUEST_INTERCEPTOR_REQUEST_BODY: string;
      public static WEBFLUX_EXCEPTION_HANDLER_RESPONSE: string;
      public static WEBFLUX_EXCEPTION_HANDLER_REQUEST: string;
      public static WEBFLUX_FILTER_RESPONSE: string;
      public static WEBFLUX_FILTER_REQUEST: string;
      public static SPRING_EXCHANGE_FILTER_RESPONSE: string;
      public static SPRING_EXCHANGE_FILTER_REQUEST: string;
      public constructor();
    }
  }
}

declare module io {
  export module sentry {
    export class UncaughtExceptionHandler {
      public static class: java.lang.Class<io.sentry.UncaughtExceptionHandler>;
      /**
       * Constructs a new instance of the io.sentry.UncaughtExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler; setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void });
      public constructor();
      public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
      public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
    }
    export module UncaughtExceptionHandler {
      export class Adapter extends io.sentry.UncaughtExceptionHandler {
        public static class: java.lang.Class<io.sentry.UncaughtExceptionHandler.Adapter>;
        public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
        public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class UncaughtExceptionHandlerIntegration extends io.sentry.Integration {
      public static class: java.lang.Class<io.sentry.UncaughtExceptionHandlerIntegration>;
      public addIntegrationToSdkVersion(): void;
      public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
      public getIntegrationName(): string;
      public constructor();
      public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
      public close(): void;
    }
    export module UncaughtExceptionHandlerIntegration {
      export class UncaughtExceptionHint extends io.sentry.hints.BlockingFlushHint implements io.sentry.hints.SessionEnd {
        public static class: java.lang.Class<io.sentry.UncaughtExceptionHandlerIntegration.UncaughtExceptionHint>;
        public markFlushed(): void;
        public constructor(param0: number, param1: io.sentry.ILogger);
        public waitFlush(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export class UserFeedback implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
      public static class: java.lang.Class<io.sentry.UserFeedback>;
      public setEmail(param0: string): void;
      public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
      public getEventId(): io.sentry.protocol.SentryId;
      public constructor(param0: io.sentry.protocol.SentryId);
      public setUnknown(param0: java.util.Map<string, any>): void;
      public getComments(): string;
      public setComments(param0: string): void;
      public constructor(param0: io.sentry.protocol.SentryId, param1: string, param2: string, param3: string);
      public getUnknown(): java.util.Map<string, any>;
      public toString(): string;
      public getName(): string;
      public setName(param0: string): void;
      public getEmail(): string;
    }
    export module UserFeedback {
      export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.UserFeedback> {
        public static class: java.lang.Class<io.sentry.UserFeedback.Deserializer>;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
        public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.UserFeedback;
        public constructor();
      }
      export class JsonKeys {
        public static class: java.lang.Class<io.sentry.UserFeedback.JsonKeys>;
        public static EVENT_ID: string;
        public static NAME: string;
        public static EMAIL: string;
        public static COMMENTS: string;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module cache {
      export abstract class CacheStrategy {
        public static class: java.lang.Class<io.sentry.cache.CacheStrategy>;
        public static UTF_8: java.nio.charset.Charset;
        public options: io.sentry.SentryOptions;
        public serializer: io.sentry.ISerializer;
        public directory: java.io.File;
        public rotateCacheIfNeeded(param0: androidNative.Array<java.io.File>): void;
        public isDirectoryValid(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module cache {
      export class CacheUtils {
        public static class: java.lang.Class<io.sentry.cache.CacheUtils>;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module cache {
      export class EnvelopeCache extends io.sentry.cache.CacheStrategy implements io.sentry.cache.IEnvelopeCache {
        public static class: java.lang.Class<io.sentry.cache.EnvelopeCache>;
        public static SUFFIX_ENVELOPE_FILE: string;
        public static PREFIX_CURRENT_SESSION_FILE: string;
        public static PREFIX_PREVIOUS_SESSION_FILE: string;
        public static CRASH_MARKER_FILE: string;
        public static NATIVE_CRASH_MARKER_FILE: string;
        public static STARTUP_CRASH_MARKER_FILE: string;
        public constructor(param0: io.sentry.SentryOptions, param1: string, param2: number);
        public discard(param0: io.sentry.SentryEnvelope): void;
        public static getCurrentSessionFile(param0: string): java.io.File;
        public flushPreviousSession(): void;
        public store(param0: io.sentry.SentryEnvelope): void;
        public waitPreviousSessionFlush(): boolean;
        public static create(param0: io.sentry.SentryOptions): io.sentry.cache.IEnvelopeCache;
        public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
        public static getPreviousSessionFile(param0: string): java.io.File;
        public iterator(): java.util.Iterator<io.sentry.SentryEnvelope>;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module cache {
      export class IEnvelopeCache extends java.lang.Iterable<io.sentry.SentryEnvelope> {
        public static class: java.lang.Class<io.sentry.cache.IEnvelopeCache>;
        /**
         * Constructs a new instance of the io.sentry.cache.IEnvelopeCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void; store(param0: io.sentry.SentryEnvelope): void; discard(param0: io.sentry.SentryEnvelope): void });
        public constructor();
        public discard(param0: io.sentry.SentryEnvelope): void;
        public store(param0: io.sentry.SentryEnvelope): void;
        public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module cache {
      export class PersistingOptionsObserver extends io.sentry.IOptionsObserver {
        public static class: java.lang.Class<io.sentry.cache.PersistingOptionsObserver>;
        public static OPTIONS_CACHE: string;
        public static RELEASE_FILENAME: string;
        public static PROGUARD_UUID_FILENAME: string;
        public static SDK_VERSION_FILENAME: string;
        public static ENVIRONMENT_FILENAME: string;
        public static DIST_FILENAME: string;
        public static TAGS_FILENAME: string;
        public constructor(param0: io.sentry.SentryOptions);
        public setProguardUuid(param0: string): void;
        public setDist(param0: string): void;
        public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
        public setEnvironment(param0: string): void;
        public setTags(param0: java.util.Map<string, string>): void;
        public static read(param0: io.sentry.SentryOptions, param1: string, param2: java.lang.Class<any>): any;
        public static read(param0: io.sentry.SentryOptions, param1: string, param2: java.lang.Class<any>, param3: io.sentry.JsonDeserializer<any>): any;
        public setRelease(param0: string): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module cache {
      export class PersistingScopeObserver extends io.sentry.IScopeObserver {
        public static class: java.lang.Class<io.sentry.cache.PersistingScopeObserver>;
        public static SCOPE_CACHE: string;
        public static USER_FILENAME: string;
        public static BREADCRUMBS_FILENAME: string;
        public static TAGS_FILENAME: string;
        public static EXTRAS_FILENAME: string;
        public static CONTEXTS_FILENAME: string;
        public static REQUEST_FILENAME: string;
        public static LEVEL_FILENAME: string;
        public static FINGERPRINT_FILENAME: string;
        public static TRANSACTION_FILENAME: string;
        public static TRACE_FILENAME: string;
        public constructor(param0: io.sentry.SentryOptions);
        public setExtras(param0: java.util.Map<string, any>): void;
        public removeExtra(param0: string): void;
        public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
        public setFingerprint(param0: java.util.Collection<string>): void;
        public setTags(param0: java.util.Map<string, string>): void;
        public setTransaction(param0: string): void;
        public setContexts(param0: io.sentry.protocol.Contexts): void;
        public setExtra(param0: string, param1: string): void;
        public setUser(param0: io.sentry.protocol.User): void;
        public setRequest(param0: io.sentry.protocol.Request): void;
        public removeTag(param0: string): void;
        public setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
        public setTrace(param0: io.sentry.SpanContext): void;
        public setLevel(param0: io.sentry.SentryLevel): void;
        public static read(param0: io.sentry.SentryOptions, param1: string, param2: java.lang.Class<any>): any;
        public static read(param0: io.sentry.SentryOptions, param1: string, param2: java.lang.Class<any>, param3: io.sentry.JsonDeserializer<any>): any;
        public setTag(param0: string, param1: string): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module clientreport {
      export class AtomicClientReportStorage extends io.sentry.clientreport.IClientReportStorage {
        public static class: java.lang.Class<io.sentry.clientreport.AtomicClientReportStorage>;
        public resetCountsAndGet(): java.util.List<io.sentry.clientreport.DiscardedEvent>;
        public addCount(param0: io.sentry.clientreport.ClientReportKey, param1: java.lang.Long): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module clientreport {
      export class ClientReport implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.clientreport.ClientReport>;
        public getTimestamp(): java.util.Date;
        public getDiscardedEvents(): java.util.List<io.sentry.clientreport.DiscardedEvent>;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getUnknown(): java.util.Map<string, any>;
        public constructor(param0: java.util.Date, param1: java.util.List<io.sentry.clientreport.DiscardedEvent>);
      }
      export module ClientReport {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.clientreport.ClientReport> {
          public static class: java.lang.Class<io.sentry.clientreport.ClientReport.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.clientreport.ClientReport;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.clientreport.ClientReport.JsonKeys>;
          public static TIMESTAMP: string;
          public static DISCARDED_EVENTS: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module clientreport {
      export class ClientReportKey {
        public static class: java.lang.Class<io.sentry.clientreport.ClientReportKey>;
        public getCategory(): string;
        public getReason(): string;
        public hashCode(): number;
        public equals(param0: any): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module clientreport {
      export class ClientReportRecorder extends io.sentry.clientreport.IClientReportRecorder {
        public static class: java.lang.Class<io.sentry.clientreport.ClientReportRecorder>;
        public constructor(param0: io.sentry.SentryOptions);
        public attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
        public recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
        public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
        public recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module clientreport {
      export class DiscardReason {
        public static class: java.lang.Class<io.sentry.clientreport.DiscardReason>;
        public static QUEUE_OVERFLOW: io.sentry.clientreport.DiscardReason;
        public static CACHE_OVERFLOW: io.sentry.clientreport.DiscardReason;
        public static RATELIMIT_BACKOFF: io.sentry.clientreport.DiscardReason;
        public static NETWORK_ERROR: io.sentry.clientreport.DiscardReason;
        public static SAMPLE_RATE: io.sentry.clientreport.DiscardReason;
        public static BEFORE_SEND: io.sentry.clientreport.DiscardReason;
        public static EVENT_PROCESSOR: io.sentry.clientreport.DiscardReason;
        public getReason(): string;
        public static values(): androidNative.Array<io.sentry.clientreport.DiscardReason>;
        public static valueOf(param0: string): io.sentry.clientreport.DiscardReason;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module clientreport {
      export class DiscardedEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.clientreport.DiscardedEvent>;
        public getQuantity(): java.lang.Long;
        public getCategory(): string;
        public getReason(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public constructor(param0: string, param1: string, param2: java.lang.Long);
        public getUnknown(): java.util.Map<string, any>;
        public toString(): string;
      }
      export module DiscardedEvent {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.clientreport.DiscardedEvent> {
          public static class: java.lang.Class<io.sentry.clientreport.DiscardedEvent.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.clientreport.DiscardedEvent;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.clientreport.DiscardedEvent.JsonKeys>;
          public static REASON: string;
          public static CATEGORY: string;
          public static QUANTITY: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module clientreport {
      export class IClientReportRecorder {
        public static class: java.lang.Class<io.sentry.clientreport.IClientReportRecorder>;
        /**
         * Constructs a new instance of the io.sentry.clientreport.IClientReportRecorder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void; recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void; recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void; attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope });
        public constructor();
        public recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
        public attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
        public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
        public recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module clientreport {
      export class IClientReportStorage {
        public static class: java.lang.Class<io.sentry.clientreport.IClientReportStorage>;
        /**
         * Constructs a new instance of the io.sentry.clientreport.IClientReportStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { addCount(param0: io.sentry.clientreport.ClientReportKey, param1: java.lang.Long): void; resetCountsAndGet(): java.util.List<io.sentry.clientreport.DiscardedEvent> });
        public constructor();
        public resetCountsAndGet(): java.util.List<io.sentry.clientreport.DiscardedEvent>;
        public addCount(param0: io.sentry.clientreport.ClientReportKey, param1: java.lang.Long): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module clientreport {
      export class NoOpClientReportRecorder extends io.sentry.clientreport.IClientReportRecorder {
        public static class: java.lang.Class<io.sentry.clientreport.NoOpClientReportRecorder>;
        public recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
        public attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
        public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
        public recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export abstract class AbstractPropertiesProvider extends io.sentry.config.PropertiesProvider {
        public static class: java.lang.Class<io.sentry.config.AbstractPropertiesProvider>;
        public constructor(param0: string, param1: java.util.Properties);
        public getProperty(param0: string, param1: string): string;
        public getMap(param0: string): java.util.Map<string, string>;
        public getLongProperty(param0: string): java.lang.Long;
        public getDoubleProperty(param0: string): java.lang.Double;
        public getProperty(param0: string): string;
        public getList(param0: string): java.util.List<string>;
        public constructor(param0: java.util.Properties);
        public getBooleanProperty(param0: string): java.lang.Boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class ClasspathPropertiesLoader extends io.sentry.config.PropertiesLoader {
        public static class: java.lang.Class<io.sentry.config.ClasspathPropertiesLoader>;
        public constructor(param0: string, param1: java.lang.ClassLoader, param2: io.sentry.ILogger);
        public constructor(param0: io.sentry.ILogger);
        public load(): java.util.Properties;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class CompositePropertiesProvider extends io.sentry.config.PropertiesProvider {
        public static class: java.lang.Class<io.sentry.config.CompositePropertiesProvider>;
        public getProperty(param0: string, param1: string): string;
        public getMap(param0: string): java.util.Map<string, string>;
        public getLongProperty(param0: string): java.lang.Long;
        public constructor(param0: java.util.List<io.sentry.config.PropertiesProvider>);
        public getDoubleProperty(param0: string): java.lang.Double;
        public getProperty(param0: string): string;
        public getList(param0: string): java.util.List<string>;
        public getBooleanProperty(param0: string): java.lang.Boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class EnvironmentVariablePropertiesProvider extends io.sentry.config.PropertiesProvider {
        public static class: java.lang.Class<io.sentry.config.EnvironmentVariablePropertiesProvider>;
        public getProperty(param0: string, param1: string): string;
        public getMap(param0: string): java.util.Map<string, string>;
        public getLongProperty(param0: string): java.lang.Long;
        public getDoubleProperty(param0: string): java.lang.Double;
        public getProperty(param0: string): string;
        public getList(param0: string): java.util.List<string>;
        public getBooleanProperty(param0: string): java.lang.Boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class FilesystemPropertiesLoader extends io.sentry.config.PropertiesLoader {
        public static class: java.lang.Class<io.sentry.config.FilesystemPropertiesLoader>;
        public constructor(param0: string, param1: io.sentry.ILogger);
        public load(): java.util.Properties;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class PropertiesLoader {
        public static class: java.lang.Class<io.sentry.config.PropertiesLoader>;
        /**
         * Constructs a new instance of the io.sentry.config.PropertiesLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { load(): java.util.Properties });
        public constructor();
        public load(): java.util.Properties;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class PropertiesProvider {
        public static class: java.lang.Class<io.sentry.config.PropertiesProvider>;
        /**
         * Constructs a new instance of the io.sentry.config.PropertiesProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getProperty(param0: string): string; getMap(param0: string): java.util.Map<string, string>; getList(param0: string): java.util.List<string>; getProperty(param0: string, param1: string): string; getBooleanProperty(param0: string): java.lang.Boolean; getDoubleProperty(param0: string): java.lang.Double; getLongProperty(param0: string): java.lang.Long });
        public constructor();
        public getProperty(param0: string, param1: string): string;
        public getMap(param0: string): java.util.Map<string, string>;
        public getLongProperty(param0: string): java.lang.Long;
        public getDoubleProperty(param0: string): java.lang.Double;
        public getProperty(param0: string): string;
        public getList(param0: string): java.util.List<string>;
        public getBooleanProperty(param0: string): java.lang.Boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class PropertiesProviderFactory {
        public static class: java.lang.Class<io.sentry.config.PropertiesProviderFactory>;
        public static create(): io.sentry.config.PropertiesProvider;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class SimplePropertiesProvider extends io.sentry.config.AbstractPropertiesProvider {
        public static class: java.lang.Class<io.sentry.config.SimplePropertiesProvider>;
        public constructor(param0: string, param1: java.util.Properties);
        public getProperty(param0: string, param1: string): string;
        public getMap(param0: string): java.util.Map<string, string>;
        public getLongProperty(param0: string): java.lang.Long;
        public getDoubleProperty(param0: string): java.lang.Double;
        public getProperty(param0: string): string;
        public getList(param0: string): java.util.List<string>;
        public constructor(param0: java.util.Properties);
        public getBooleanProperty(param0: string): java.lang.Boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module config {
      export class SystemPropertyPropertiesProvider extends io.sentry.config.AbstractPropertiesProvider {
        public static class: java.lang.Class<io.sentry.config.SystemPropertyPropertiesProvider>;
        public constructor(param0: string, param1: java.util.Properties);
        public getProperty(param0: string, param1: string): string;
        public getMap(param0: string): java.util.Map<string, string>;
        public getLongProperty(param0: string): java.lang.Long;
        public getDoubleProperty(param0: string): java.lang.Double;
        public getProperty(param0: string): string;
        public getList(param0: string): java.util.List<string>;
        public constructor(param0: java.util.Properties);
        public getBooleanProperty(param0: string): java.lang.Boolean;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module exception {
      export class ExceptionMechanismException {
        public static class: java.lang.Class<io.sentry.exception.ExceptionMechanismException>;
        public getThread(): java.lang.Thread;
        public isSnapshot(): boolean;
        public constructor(param0: io.sentry.protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread);
        public getExceptionMechanism(): io.sentry.protocol.Mechanism;
        public constructor(param0: io.sentry.protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread, param3: boolean);
        public getThrowable(): java.lang.Throwable;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module exception {
      export class InvalidSentryTraceHeaderException {
        public static class: java.lang.Class<io.sentry.exception.InvalidSentryTraceHeaderException>;
        public getSentryTraceHeader(): string;
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor(param0: string);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module exception {
      export class SentryEnvelopeException {
        public static class: java.lang.Class<io.sentry.exception.SentryEnvelopeException>;
        public constructor(param0: string);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module exception {
      export class SentryHttpClientException {
        public static class: java.lang.Class<io.sentry.exception.SentryHttpClientException>;
        public constructor(param0: string);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class AbnormalExit {
        public static class: java.lang.Class<io.sentry.hints.AbnormalExit>;
        /**
         * Constructs a new instance of the io.sentry.hints.AbnormalExit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { mechanism(): string; ignoreCurrentThread(): boolean; timestamp(): java.lang.Long });
        public constructor();
        public mechanism(): string;
        public timestamp(): java.lang.Long;
        public ignoreCurrentThread(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class ApplyScopeData {
        public static class: java.lang.Class<io.sentry.hints.ApplyScopeData>;
        /**
         * Constructs a new instance of the io.sentry.hints.ApplyScopeData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class Backfillable {
        public static class: java.lang.Class<io.sentry.hints.Backfillable>;
        /**
         * Constructs a new instance of the io.sentry.hints.Backfillable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { shouldEnrich(): boolean });
        public constructor();
        public shouldEnrich(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export abstract class BlockingFlushHint implements io.sentry.hints.DiskFlushNotification, io.sentry.hints.Flushable {
        public static class: java.lang.Class<io.sentry.hints.BlockingFlushHint>;
        public markFlushed(): void;
        public constructor(param0: number, param1: io.sentry.ILogger);
        public waitFlush(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class Cached {
        public static class: java.lang.Class<io.sentry.hints.Cached>;
        /**
         * Constructs a new instance of the io.sentry.hints.Cached interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class DiskFlushNotification {
        public static class: java.lang.Class<io.sentry.hints.DiskFlushNotification>;
        /**
         * Constructs a new instance of the io.sentry.hints.DiskFlushNotification interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { markFlushed(): void });
        public constructor();
        public markFlushed(): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class Flushable {
        public static class: java.lang.Class<io.sentry.hints.Flushable>;
        /**
         * Constructs a new instance of the io.sentry.hints.Flushable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { waitFlush(): boolean });
        public constructor();
        public waitFlush(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class Resettable {
        public static class: java.lang.Class<io.sentry.hints.Resettable>;
        /**
         * Constructs a new instance of the io.sentry.hints.Resettable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { reset(): void });
        public constructor();
        public reset(): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class Retryable {
        public static class: java.lang.Class<io.sentry.hints.Retryable>;
        /**
         * Constructs a new instance of the io.sentry.hints.Retryable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { isRetry(): boolean; setRetry(param0: boolean): void });
        public constructor();
        public isRetry(): boolean;
        public setRetry(param0: boolean): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class SessionEnd {
        public static class: java.lang.Class<io.sentry.hints.SessionEnd>;
        /**
         * Constructs a new instance of the io.sentry.hints.SessionEnd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class SessionEndHint extends io.sentry.hints.SessionEnd {
        public static class: java.lang.Class<io.sentry.hints.SessionEndHint>;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class SessionStart {
        public static class: java.lang.Class<io.sentry.hints.SessionStart>;
        /**
         * Constructs a new instance of the io.sentry.hints.SessionStart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class SessionStartHint extends io.sentry.hints.SessionStart {
        public static class: java.lang.Class<io.sentry.hints.SessionStartHint>;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class SubmissionResult {
        public static class: java.lang.Class<io.sentry.hints.SubmissionResult>;
        /**
         * Constructs a new instance of the io.sentry.hints.SubmissionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { setResult(param0: boolean): void; isSuccess(): boolean });
        public constructor();
        public setResult(param0: boolean): void;
        public isSuccess(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module hints {
      export class TransactionEnd {
        public static class: java.lang.Class<io.sentry.hints.TransactionEnd>;
        /**
         * Constructs a new instance of the io.sentry.hints.TransactionEnd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module instrumentation {
      export module file {
        export class FileIOSpanManager {
          public static class: java.lang.Class<io.sentry.instrumentation.file.FileIOSpanManager>;
        }
        export module FileIOSpanManager {
          export class FileIOCallable<T> extends java.lang.Object {
            public static class: java.lang.Class<io.sentry.instrumentation.file.FileIOSpanManager.FileIOCallable<any>>;
            /**
             * Constructs a new instance of the io.sentry.instrumentation.file.FileIOSpanManager$FileIOCallable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { call(): T });
            public constructor();
            public call(): T;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module instrumentation {
      export module file {
        export class FileInputStreamInitData {
          public static class: java.lang.Class<io.sentry.instrumentation.file.FileInputStreamInitData>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module instrumentation {
      export module file {
        export class FileOutputStreamInitData {
          public static class: java.lang.Class<io.sentry.instrumentation.file.FileOutputStreamInitData>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module instrumentation {
      export module file {
        export class SentryFileInputStream {
          public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileInputStream>;
          public read(): number;
          public constructor(param0: string);
          public constructor(param0: java.io.FileDescriptor);
          public skip(param0: number): number;
          public close(): void;
          public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
          public read(param0: androidNative.Array<number>): number;
          public constructor(param0: java.io.File);
        }
        export module SentryFileInputStream {
          export class Factory {
            public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileInputStream.Factory>;
            public static create(param0: java.io.FileInputStream, param1: java.io.FileDescriptor): java.io.FileInputStream;
            public constructor();
            public static create(param0: java.io.FileInputStream, param1: java.io.File): java.io.FileInputStream;
            public static create(param0: java.io.FileInputStream, param1: string): java.io.FileInputStream;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module instrumentation {
      export module file {
        export class SentryFileOutputStream {
          public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileOutputStream>;
          public constructor(param0: string);
          public constructor(param0: java.io.FileDescriptor);
          public write(param0: androidNative.Array<number>): void;
          public close(): void;
          public constructor(param0: string, param1: boolean);
          public write(param0: number): void;
          public constructor(param0: java.io.File);
          public constructor(param0: java.io.File, param1: boolean);
          public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
        }
        export module SentryFileOutputStream {
          export class Factory {
            public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileOutputStream.Factory>;
            public constructor();
            public static create(param0: java.io.FileOutputStream, param1: java.io.FileDescriptor): java.io.FileOutputStream;
            public static create(param0: java.io.FileOutputStream, param1: string): java.io.FileOutputStream;
            public static create(param0: java.io.FileOutputStream, param1: java.io.File): java.io.FileOutputStream;
            public static create(param0: java.io.FileOutputStream, param1: string, param2: boolean): java.io.FileOutputStream;
            public static create(param0: java.io.FileOutputStream, param1: java.io.File, param2: boolean): java.io.FileOutputStream;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module instrumentation {
      export module file {
        export class SentryFileReader {
          public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileReader>;
          public constructor(param0: string);
          public constructor(param0: java.io.FileDescriptor);
          public constructor(param0: java.io.File);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module instrumentation {
      export module file {
        export class SentryFileWriter {
          public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileWriter>;
          public constructor(param0: string);
          public constructor(param0: java.io.FileDescriptor);
          public constructor(param0: string, param1: boolean);
          public constructor(param0: java.io.File);
          public constructor(param0: java.io.File, param1: boolean);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module debugmeta {
        export class IDebugMetaLoader {
          public static class: java.lang.Class<io.sentry.internal.debugmeta.IDebugMetaLoader>;
          /**
           * Constructs a new instance of the io.sentry.internal.debugmeta.IDebugMetaLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { loadDebugMeta(): java.util.Properties });
          public constructor();
          public loadDebugMeta(): java.util.Properties;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module debugmeta {
        export class NoOpDebugMetaLoader extends io.sentry.internal.debugmeta.IDebugMetaLoader {
          public static class: java.lang.Class<io.sentry.internal.debugmeta.NoOpDebugMetaLoader>;
          public static getInstance(): io.sentry.internal.debugmeta.NoOpDebugMetaLoader;
          public loadDebugMeta(): java.util.Properties;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module debugmeta {
        export class ResourcesDebugMetaLoader extends io.sentry.internal.debugmeta.IDebugMetaLoader {
          public static class: java.lang.Class<io.sentry.internal.debugmeta.ResourcesDebugMetaLoader>;
          public constructor(param0: io.sentry.ILogger);
          public loadDebugMeta(): java.util.Properties;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module gestures {
        export class GestureTargetLocator {
          public static class: java.lang.Class<io.sentry.internal.gestures.GestureTargetLocator>;
          /**
           * Constructs a new instance of the io.sentry.internal.gestures.GestureTargetLocator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { locate(param0: any, param1: number, param2: number, param3: io.sentry.internal.gestures.UiElement.Type): io.sentry.internal.gestures.UiElement });
          public constructor();
          public locate(param0: any, param1: number, param2: number, param3: io.sentry.internal.gestures.UiElement.Type): io.sentry.internal.gestures.UiElement;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module gestures {
        export class UiElement {
          public static class: java.lang.Class<io.sentry.internal.gestures.UiElement>;
          public equals(param0: any): boolean;
          public getResourceName(): string;
          public getView(): any;
          public getClassName(): string;
          public getIdentifier(): string;
          public constructor(param0: any, param1: string, param2: string, param3: string);
          public hashCode(): number;
          public getTag(): string;
        }
        export module UiElement {
          export class Type {
            public static class: java.lang.Class<io.sentry.internal.gestures.UiElement.Type>;
            public static CLICKABLE: io.sentry.internal.gestures.UiElement.Type;
            public static SCROLLABLE: io.sentry.internal.gestures.UiElement.Type;
            public static values(): androidNative.Array<io.sentry.internal.gestures.UiElement.Type>;
            public static valueOf(param0: string): io.sentry.internal.gestures.UiElement.Type;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module modules {
        export class CompositeModulesLoader extends io.sentry.internal.modules.ModulesLoader {
          public static class: java.lang.Class<io.sentry.internal.modules.CompositeModulesLoader>;
          public getOrLoadModules(): java.util.Map<string, string>;
          public constructor(param0: java.util.List<io.sentry.internal.modules.IModulesLoader>, param1: io.sentry.ILogger);
          public constructor(param0: io.sentry.ILogger);
          public loadModules(): java.util.Map<string, string>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module modules {
        export class IModulesLoader {
          public static class: java.lang.Class<io.sentry.internal.modules.IModulesLoader>;
          /**
           * Constructs a new instance of the io.sentry.internal.modules.IModulesLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getOrLoadModules(): java.util.Map<string, string> });
          public constructor();
          public getOrLoadModules(): java.util.Map<string, string>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module modules {
        export class ManifestModulesLoader extends io.sentry.internal.modules.ModulesLoader {
          public static class: java.lang.Class<io.sentry.internal.modules.ManifestModulesLoader>;
          public getOrLoadModules(): java.util.Map<string, string>;
          public constructor(param0: io.sentry.ILogger);
          public loadModules(): java.util.Map<string, string>;
        }
        export module ManifestModulesLoader {
          export class Module {
            public static class: java.lang.Class<io.sentry.internal.modules.ManifestModulesLoader.Module>;
            public constructor(param0: string, param1: string);
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module modules {
        export abstract class ModulesLoader extends io.sentry.internal.modules.IModulesLoader {
          public static class: java.lang.Class<io.sentry.internal.modules.ModulesLoader>;
          public static EXTERNAL_MODULES_FILENAME: string;
          public logger: io.sentry.ILogger;
          public getOrLoadModules(): java.util.Map<string, string>;
          public constructor(param0: io.sentry.ILogger);
          public loadModules(): java.util.Map<string, string>;
          public parseStream(param0: java.io.InputStream): java.util.Map<string, string>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module modules {
        export class NoOpModulesLoader extends io.sentry.internal.modules.IModulesLoader {
          public static class: java.lang.Class<io.sentry.internal.modules.NoOpModulesLoader>;
          public getOrLoadModules(): java.util.Map<string, string>;
          public static getInstance(): io.sentry.internal.modules.NoOpModulesLoader;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module modules {
        export class ResourcesModulesLoader extends io.sentry.internal.modules.ModulesLoader {
          public static class: java.lang.Class<io.sentry.internal.modules.ResourcesModulesLoader>;
          public getOrLoadModules(): java.util.Map<string, string>;
          public constructor(param0: io.sentry.ILogger);
          public loadModules(): java.util.Map<string, string>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module internal {
      export module viewhierarchy {
        export class ViewHierarchyExporter {
          public static class: java.lang.Class<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>;
          /**
           * Constructs a new instance of the io.sentry.internal.viewhierarchy.ViewHierarchyExporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { export(param0: io.sentry.protocol.ViewHierarchyNode, param1: any): boolean });
          public constructor();
          public export(param0: io.sentry.protocol.ViewHierarchyNode, param1: any): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module profilemeasurements {
      export class ProfileMeasurement implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurement>;
        public static ID_FROZEN_FRAME_RENDERS: string;
        public static ID_SLOW_FRAME_RENDERS: string;
        public static ID_SCREEN_FRAME_RATES: string;
        public static ID_CPU_USAGE: string;
        public static ID_MEMORY_FOOTPRINT: string;
        public static ID_MEMORY_NATIVE_FOOTPRINT: string;
        public static ID_UNKNOWN: string;
        public static UNIT_HZ: string;
        public static UNIT_NANOSECONDS: string;
        public static UNIT_BYTES: string;
        public static UNIT_PERCENT: string;
        public static UNIT_UNKNOWN: string;
        public getUnit(): string;
        public constructor(param0: string, param1: java.util.Collection<io.sentry.profilemeasurements.ProfileMeasurementValue>);
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public hashCode(): number;
        public setUnit(param0: string): void;
        public equals(param0: any): boolean;
        public getUnknown(): java.util.Map<string, any>;
        public constructor();
        public getValues(): java.util.Collection<io.sentry.profilemeasurements.ProfileMeasurementValue>;
        public setValues(param0: java.util.Collection<io.sentry.profilemeasurements.ProfileMeasurementValue>): void;
      }
      export module ProfileMeasurement {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.profilemeasurements.ProfileMeasurement> {
          public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurement.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.profilemeasurements.ProfileMeasurement;
          public constructor();
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurement.JsonKeys>;
          public static UNIT: string;
          public static VALUES: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module profilemeasurements {
      export class ProfileMeasurementValue implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurementValue>;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public hashCode(): number;
        public constructor(param0: java.lang.Long, param1: java.lang.Number);
        public getRelativeStartNs(): string;
        public equals(param0: any): boolean;
        public getUnknown(): java.util.Map<string, any>;
        public getValue(): number;
        public constructor();
      }
      export module ProfileMeasurementValue {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.profilemeasurements.ProfileMeasurementValue> {
          public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurementValue.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.profilemeasurements.ProfileMeasurementValue;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurementValue.JsonKeys>;
          public static VALUE: string;
          public static START_NS: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class App implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.App>;
        public static TYPE: string;
        public setAppIdentifier(param0: string): void;
        public getAppIdentifier(): string;
        public setAppVersion(param0: string): void;
        public setAppBuild(param0: string): void;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getAppBuild(): string;
        public getUnknown(): java.util.Map<string, any>;
        public setAppName(param0: string): void;
        public getAppStartTime(): java.util.Date;
        public getDeviceAppHash(): string;
        public constructor();
        public setInForeground(param0: java.lang.Boolean): void;
        public getInForeground(): java.lang.Boolean;
        public getAppVersion(): string;
        public getBuildType(): string;
        public getAppName(): string;
        public getPermissions(): java.util.Map<string, string>;
        public hashCode(): number;
        public setBuildType(param0: string): void;
        public equals(param0: any): boolean;
        public setDeviceAppHash(param0: string): void;
        public setPermissions(param0: java.util.Map<string, string>): void;
        public setAppStartTime(param0: java.util.Date): void;
      }
      export module App {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.App> {
          public static class: java.lang.Class<io.sentry.protocol.App.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.App;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.App.JsonKeys>;
          public static APP_IDENTIFIER: string;
          public static APP_START_TIME: string;
          public static DEVICE_APP_HASH: string;
          public static BUILD_TYPE: string;
          public static APP_NAME: string;
          public static APP_VERSION: string;
          public static APP_BUILD: string;
          public static APP_PERMISSIONS: string;
          public static IN_FOREGROUND: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class Browser implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.Browser>;
        public static TYPE: string;
        public setName(param0: string): void;
        public getVersion(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getUnknown(): java.util.Map<string, any>;
        public getName(): string;
        public setVersion(param0: string): void;
        public constructor();
      }
      export module Browser {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Browser> {
          public static class: java.lang.Class<io.sentry.protocol.Browser.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Browser;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.Browser.JsonKeys>;
          public static NAME: string;
          public static VERSION: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class Contexts extends java.util.concurrent.ConcurrentHashMap<string, any> implements io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.Contexts>;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getOperatingSystem(): io.sentry.protocol.OperatingSystem;
        public setResponse(param0: io.sentry.protocol.Response): void;
        public getDevice(): io.sentry.protocol.Device;
        public constructor(param0: io.sentry.protocol.Contexts);
        public setApp(param0: io.sentry.protocol.App): void;
        public getResponse(): io.sentry.protocol.Response;
        public constructor();
        public setDevice(param0: io.sentry.protocol.Device): void;
        public getRuntime(): io.sentry.protocol.SentryRuntime;
        public getGpu(): io.sentry.protocol.Gpu;
        public getTrace(): io.sentry.SpanContext;
        public setGpu(param0: io.sentry.protocol.Gpu): void;
        public getApp(): io.sentry.protocol.App;
        public setTrace(param0: io.sentry.SpanContext): void;
        public setBrowser(param0: io.sentry.protocol.Browser): void;
        public setRuntime(param0: io.sentry.protocol.SentryRuntime): void;
        public getBrowser(): io.sentry.protocol.Browser;
        public setOperatingSystem(param0: io.sentry.protocol.OperatingSystem): void;
      }
      export module Contexts {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Contexts> {
          public static class: java.lang.Class<io.sentry.protocol.Contexts.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Contexts;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class DebugImage implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.DebugImage>;
        public static PROGUARD: string;
        public static JVM: string;
        public getUuid(): string;
        public setUuid(param0: string): void;
        public getType(): string;
        public setImageSize(param0: number): void;
        public setArch(param0: string): void;
        public getCodeId(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getDebugFile(): string;
        public setCodeFile(param0: string): void;
        public getDebugId(): string;
        public getImageSize(): java.lang.Long;
        public setType(param0: string): void;
        public getUnknown(): java.util.Map<string, any>;
        public getArch(): string;
        public constructor();
        public setImageAddr(param0: string): void;
        public setImageSize(param0: java.lang.Long): void;
        public setDebugFile(param0: string): void;
        public setDebugId(param0: string): void;
        public getImageAddr(): string;
        public setCodeId(param0: string): void;
        public getCodeFile(): string;
      }
      export module DebugImage {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.DebugImage> {
          public static class: java.lang.Class<io.sentry.protocol.DebugImage.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.DebugImage;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.DebugImage.JsonKeys>;
          public static UUID: string;
          public static TYPE: string;
          public static DEBUG_ID: string;
          public static DEBUG_FILE: string;
          public static CODE_ID: string;
          public static CODE_FILE: string;
          public static IMAGE_ADDR: string;
          public static IMAGE_SIZE: string;
          public static ARCH: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class DebugMeta implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.DebugMeta>;
        public getImages(): java.util.List<io.sentry.protocol.DebugImage>;
        public setImages(param0: java.util.List<io.sentry.protocol.DebugImage>): void;
        public getSdkInfo(): io.sentry.protocol.SdkInfo;
        public setSdkInfo(param0: io.sentry.protocol.SdkInfo): void;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getUnknown(): java.util.Map<string, any>;
        public constructor();
      }
      export module DebugMeta {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.DebugMeta> {
          public static class: java.lang.Class<io.sentry.protocol.DebugMeta.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.DebugMeta;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.DebugMeta.JsonKeys>;
          public static SDK_INFO: string;
          public static IMAGES: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class Device implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.Device>;
        public static TYPE: string;
        public setMemorySize(param0: java.lang.Long): void;
        public setCpuDescription(param0: string): void;
        public setFreeStorage(param0: java.lang.Long): void;
        public setScreenDpi(param0: java.lang.Integer): void;
        public getId(): string;
        public getFreeMemory(): java.lang.Long;
        public setCharging(param0: java.lang.Boolean): void;
        public setExternalStorageSize(param0: java.lang.Long): void;
        public setArchs(param0: androidNative.Array<string>): void;
        public getExternalStorageSize(): java.lang.Long;
        public getBrand(): string;
        public constructor();
        public setBatteryTemperature(param0: java.lang.Float): void;
        public isOnline(): java.lang.Boolean;
        public setBrand(param0: string): void;
        public hashCode(): number;
        public getScreenWidthPixels(): java.lang.Integer;
        public equals(param0: any): boolean;
        public getStorageSize(): java.lang.Long;
        public getTimezone(): java.util.TimeZone;
        public setScreenDensity(param0: java.lang.Float): void;
        public setName(param0: string): void;
        public getCpuDescription(): string;
        public setManufacturer(param0: string): void;
        public getMemorySize(): java.lang.Long;
        public setFamily(param0: string): void;
        public getUnknown(): java.util.Map<string, any>;
        public getName(): string;
        public setBatteryLevel(param0: java.lang.Float): void;
        public getArchs(): androidNative.Array<string>;
        public getLocale(): string;
        public getBootTime(): java.util.Date;
        public setLocale(param0: string): void;
        public setOnline(param0: java.lang.Boolean): void;
        public setStorageSize(param0: java.lang.Long): void;
        public isLowMemory(): java.lang.Boolean;
        public getLanguage(): string;
        public setProcessorCount(param0: java.lang.Integer): void;
        public getScreenDpi(): java.lang.Integer;
        public setModelId(param0: string): void;
        public setConnectionType(param0: string): void;
        public setFreeMemory(param0: java.lang.Long): void;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getModelId(): string;
        public setLowMemory(param0: java.lang.Boolean): void;
        public getScreenDensity(): java.lang.Float;
        public setModel(param0: string): void;
        public setTimezone(param0: java.util.TimeZone): void;
        public getFamily(): string;
        public setScreenHeightPixels(param0: java.lang.Integer): void;
        public setUsableMemory(param0: java.lang.Long): void;
        public isCharging(): java.lang.Boolean;
        public getProcessorCount(): java.lang.Integer;
        public getProcessorFrequency(): java.lang.Double;
        public setExternalFreeStorage(param0: java.lang.Long): void;
        public setId(param0: string): void;
        public getExternalFreeStorage(): java.lang.Long;
        public getFreeStorage(): java.lang.Long;
        public getScreenHeightPixels(): java.lang.Integer;
        public getOrientation(): io.sentry.protocol.Device.DeviceOrientation;
        public getBatteryLevel(): java.lang.Float;
        public getModel(): string;
        public getBatteryTemperature(): java.lang.Float;
        public setBootTime(param0: java.util.Date): void;
        public getConnectionType(): string;
        public setScreenWidthPixels(param0: java.lang.Integer): void;
        public setOrientation(param0: io.sentry.protocol.Device.DeviceOrientation): void;
        public getManufacturer(): string;
        public setSimulator(param0: java.lang.Boolean): void;
        public setLanguage(param0: string): void;
        public isSimulator(): java.lang.Boolean;
        public getUsableMemory(): java.lang.Long;
        public setProcessorFrequency(param0: java.lang.Double): void;
      }
      export module Device {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Device> {
          public static class: java.lang.Class<io.sentry.protocol.Device.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Device;
        }
        export class DeviceOrientation extends io.sentry.JsonSerializable {
          public static class: java.lang.Class<io.sentry.protocol.Device.DeviceOrientation>;
          public static PORTRAIT: io.sentry.protocol.Device.DeviceOrientation;
          public static LANDSCAPE: io.sentry.protocol.Device.DeviceOrientation;
          public static valueOf(param0: string): io.sentry.protocol.Device.DeviceOrientation;
          public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
          public static values(): androidNative.Array<io.sentry.protocol.Device.DeviceOrientation>;
        }
        export module DeviceOrientation {
          export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Device.DeviceOrientation> {
            public static class: java.lang.Class<io.sentry.protocol.Device.DeviceOrientation.Deserializer>;
            public constructor();
            public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
            public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Device.DeviceOrientation;
          }
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.Device.JsonKeys>;
          public static NAME: string;
          public static MANUFACTURER: string;
          public static BRAND: string;
          public static FAMILY: string;
          public static MODEL: string;
          public static MODEL_ID: string;
          public static ARCHS: string;
          public static BATTERY_LEVEL: string;
          public static CHARGING: string;
          public static ONLINE: string;
          public static ORIENTATION: string;
          public static SIMULATOR: string;
          public static MEMORY_SIZE: string;
          public static FREE_MEMORY: string;
          public static USABLE_MEMORY: string;
          public static LOW_MEMORY: string;
          public static STORAGE_SIZE: string;
          public static FREE_STORAGE: string;
          public static EXTERNAL_STORAGE_SIZE: string;
          public static EXTERNAL_FREE_STORAGE: string;
          public static SCREEN_WIDTH_PIXELS: string;
          public static SCREEN_HEIGHT_PIXELS: string;
          public static SCREEN_DENSITY: string;
          public static SCREEN_DPI: string;
          public static BOOT_TIME: string;
          public static TIMEZONE: string;
          public static ID: string;
          public static LANGUAGE: string;
          public static CONNECTION_TYPE: string;
          public static BATTERY_TEMPERATURE: string;
          public static LOCALE: string;
          public static PROCESSOR_COUNT: string;
          public static CPU_DESCRIPTION: string;
          public static PROCESSOR_FREQUENCY: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class Geo implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.Geo>;
        public static fromMap(param0: java.util.Map<string, any>): io.sentry.protocol.Geo;
        public setCity(param0: string): void;
        public getCity(): string;
        public setRegion(param0: string): void;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getCountryCode(): string;
        public getUnknown(): java.util.Map<string, any>;
        public constructor(param0: io.sentry.protocol.Geo);
        public getRegion(): string;
        public constructor();
        public setCountryCode(param0: string): void;
      }
      export module Geo {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Geo> {
          public static class: java.lang.Class<io.sentry.protocol.Geo.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Geo;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.Geo.JsonKeys>;
          public static CITY: string;
          public static COUNTRY_CODE: string;
          public static REGION: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class Gpu implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.Gpu>;
        public static TYPE: string;
        public setName(param0: string): void;
        public setApiType(param0: string): void;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public getVendorName(): string;
        public setMemorySize(param0: java.lang.Integer): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public setNpotSupport(param0: string): void;
        public getUnknown(): java.util.Map<string, any>;
        public getName(): string;
        public isMultiThreadedRendering(): java.lang.Boolean;
        public setVersion(param0: string): void;
        public getId(): java.lang.Integer;
        public constructor();
        public getApiType(): string;
        public getVersion(): string;
        public setId(param0: java.lang.Integer): void;
        public setMultiThreadedRendering(param0: java.lang.Boolean): void;
        public setVendorId(param0: string): void;
        public setVendorName(param0: string): void;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getMemorySize(): java.lang.Integer;
        public getVendorId(): string;
        public getNpotSupport(): string;
      }
      export module Gpu {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Gpu> {
          public static class: java.lang.Class<io.sentry.protocol.Gpu.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Gpu;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.Gpu.JsonKeys>;
          public static NAME: string;
          public static ID: string;
          public static VENDOR_ID: string;
          public static VENDOR_NAME: string;
          public static MEMORY_SIZE: string;
          public static API_TYPE: string;
          public static MULTI_THREADED_RENDERING: string;
          public static VERSION: string;
          public static NPOT_SUPPORT: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class MeasurementValue implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.MeasurementValue>;
        public static KEY_APP_START_COLD: string;
        public static KEY_APP_START_WARM: string;
        public static KEY_FRAMES_TOTAL: string;
        public static KEY_FRAMES_SLOW: string;
        public static KEY_FRAMES_FROZEN: string;
        public static KEY_TIME_TO_INITIAL_DISPLAY: string;
        public static KEY_TIME_TO_FULL_DISPLAY: string;
        public getValue(): java.lang.Number;
        public constructor(param0: java.lang.Number, param1: string);
        public getUnit(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getUnknown(): java.util.Map<string, any>;
        public constructor(param0: java.lang.Number, param1: string, param2: java.util.Map<string, any>);
      }
      export module MeasurementValue {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.MeasurementValue> {
          public static class: java.lang.Class<io.sentry.protocol.MeasurementValue.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.MeasurementValue;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.MeasurementValue.JsonKeys>;
          public static VALUE: string;
          public static UNIT: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class Mechanism implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.Mechanism>;
        public setData(param0: java.util.Map<string, any>): void;
        public setSynthetic(param0: java.lang.Boolean): void;
        public getType(): string;
        public isHandled(): java.lang.Boolean;
        public constructor(param0: java.lang.Thread);
        public setMeta(param0: java.util.Map<string, any>): void;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getHelpLink(): string;
        public setType(param0: string): void;
        public getUnknown(): java.util.Map<string, any>;
        public getDescription(): string;
        public getMeta(): java.util.Map<string, any>;
        public getData(): java.util.Map<string, any>;
        public setHelpLink(param0: string): void;
        public constructor();
        public setDescription(param0: string): void;
        public setHandled(param0: java.lang.Boolean): void;
        public getSynthetic(): java.lang.Boolean;
      }
      export module Mechanism {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Mechanism> {
          public static class: java.lang.Class<io.sentry.protocol.Mechanism.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Mechanism;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.Mechanism.JsonKeys>;
          public static TYPE: string;
          public static DESCRIPTION: string;
          public static HELP_LINK: string;
          public static HANDLED: string;
          public static META: string;
          public static DATA: string;
          public static SYNTHETIC: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class Message implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.Message>;
        public getFormatted(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public setParams(param0: java.util.List<string>): void;
        public getUnknown(): java.util.Map<string, any>;
        public setMessage(param0: string): void;
        public getMessage(): string;
        public getParams(): java.util.List<string>;
        public setFormatted(param0: string): void;
        public constructor();
      }
      export module Message {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Message> {
          public static class: java.lang.Class<io.sentry.protocol.Message.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Message;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.Message.JsonKeys>;
          public static FORMATTED: string;
          public static MESSAGE: string;
          public static PARAMS: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class OperatingSystem implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.OperatingSystem>;
        public static TYPE: string;
        public setName(param0: string): void;
        public getRawDescription(): string;
        public isRooted(): java.lang.Boolean;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getBuild(): string;
        public setRooted(param0: java.lang.Boolean): void;
        public getUnknown(): java.util.Map<string, any>;
        public getName(): string;
        public setVersion(param0: string): void;
        public constructor();
        public getVersion(): string;
        public setBuild(param0: string): void;
        public getKernelVersion(): string;
        public setRawDescription(param0: string): void;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public setKernelVersion(param0: string): void;
      }
      export module OperatingSystem {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.OperatingSystem> {
          public static class: java.lang.Class<io.sentry.protocol.OperatingSystem.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.OperatingSystem;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.OperatingSystem.JsonKeys>;
          public static NAME: string;
          public static VERSION: string;
          public static RAW_DESCRIPTION: string;
          public static BUILD: string;
          public static KERNEL_VERSION: string;
          public static ROOTED: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class Request implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.Request>;
        public setFragment(param0: string): void;
        public setMethod(param0: string): void;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public setBodySize(param0: java.lang.Long): void;
        public setHeaders(param0: java.util.Map<string, string>): void;
        public getData(): any;
        public setCookies(param0: string): void;
        public constructor();
        public setData(param0: any): void;
        public getEnvs(): java.util.Map<string, string>;
        public setEnvs(param0: java.util.Map<string, string>): void;
        public hashCode(): number;
        public constructor(param0: io.sentry.protocol.Request);
        public equals(param0: any): boolean;
        public setOthers(param0: java.util.Map<string, string>): void;
        public getCookies(): string;
        public setApiTarget(param0: string): void;
        public getBodySize(): java.lang.Long;
        public getOthers(): java.util.Map<string, string>;
        public getUnknown(): java.util.Map<string, any>;
        public getUrl(): string;
        public getApiTarget(): string;
        public getMethod(): string;
        public getFragment(): string;
        public getHeaders(): java.util.Map<string, string>;
        public getQueryString(): string;
        public setQueryString(param0: string): void;
        public setUrl(param0: string): void;
      }
      export module Request {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Request> {
          public static class: java.lang.Class<io.sentry.protocol.Request.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Request;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.Request.JsonKeys>;
          public static URL: string;
          public static METHOD: string;
          public static QUERY_STRING: string;
          public static DATA: string;
          public static COOKIES: string;
          public static HEADERS: string;
          public static ENV: string;
          public static OTHER: string;
          public static FRAGMENT: string;
          public static BODY_SIZE: string;
          public static API_TARGET: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class Response implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.Response>;
        public static TYPE: string;
        public getCookies(): string;
        public getStatusCode(): java.lang.Integer;
        public getBodySize(): java.lang.Long;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public setBodySize(param0: java.lang.Long): void;
        public setHeaders(param0: java.util.Map<string, string>): void;
        public getUnknown(): java.util.Map<string, any>;
        public setCookies(param0: string): void;
        public getData(): any;
        public constructor();
        public setData(param0: any): void;
        public getHeaders(): java.util.Map<string, string>;
        public constructor(param0: io.sentry.protocol.Response);
        public setStatusCode(param0: java.lang.Integer): void;
      }
      export module Response {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Response> {
          public static class: java.lang.Class<io.sentry.protocol.Response.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Response;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.Response.JsonKeys>;
          public static COOKIES: string;
          public static HEADERS: string;
          public static STATUS_CODE: string;
          public static BODY_SIZE: string;
          public static DATA: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SdkInfo implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SdkInfo>;
        public setSdkName(param0: string): void;
        public getVersionMinor(): java.lang.Integer;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public setVersionPatchlevel(param0: java.lang.Integer): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public setVersionMajor(param0: java.lang.Integer): void;
        public setVersionMinor(param0: java.lang.Integer): void;
        public getSdkName(): string;
        public getUnknown(): java.util.Map<string, any>;
        public getVersionMajor(): java.lang.Integer;
        public constructor();
        public getVersionPatchlevel(): java.lang.Integer;
      }
      export module SdkInfo {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SdkInfo> {
          public static class: java.lang.Class<io.sentry.protocol.SdkInfo.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SdkInfo;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.SdkInfo.JsonKeys>;
          public static SDK_NAME: string;
          public static VERSION_MAJOR: string;
          public static VERSION_MINOR: string;
          public static VERSION_PATCHLEVEL: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SdkVersion implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SdkVersion>;
        public setName(param0: string): void;
        public getIntegrationSet(): java.util.Set<string>;
        public static updateSdkVersion(param0: io.sentry.protocol.SdkVersion, param1: string, param2: string): io.sentry.protocol.SdkVersion;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getUnknown(): java.util.Map<string, any>;
        public getName(): string;
        public setVersion(param0: string): void;
        public addIntegration(param0: string): void;
        public getVersion(): string;
        /** @deprecated */
        public getIntegrations(): java.util.List<string>;
        public getPackageSet(): java.util.Set<io.sentry.protocol.SentryPackage>;
        public hashCode(): number;
        /** @deprecated */
        public getPackages(): java.util.List<io.sentry.protocol.SentryPackage>;
        public equals(param0: any): boolean;
        public addPackage(param0: string, param1: string): void;
        public constructor(param0: string, param1: string);
      }
      export module SdkVersion {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SdkVersion> {
          public static class: java.lang.Class<io.sentry.protocol.SdkVersion.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SdkVersion;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.SdkVersion.JsonKeys>;
          public static NAME: string;
          public static VERSION: string;
          public static PACKAGES: string;
          public static INTEGRATIONS: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SentryException implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SentryException>;
        public getType(): string;
        public getModule(): string;
        public getMechanism(): io.sentry.protocol.Mechanism;
        public setModule(param0: string): void;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getValue(): string;
        public setType(param0: string): void;
        public getUnknown(): java.util.Map<string, any>;
        public constructor();
        public setValue(param0: string): void;
        public setThreadId(param0: java.lang.Long): void;
        public getStacktrace(): io.sentry.protocol.SentryStackTrace;
        public setMechanism(param0: io.sentry.protocol.Mechanism): void;
        public getThreadId(): java.lang.Long;
        public setStacktrace(param0: io.sentry.protocol.SentryStackTrace): void;
      }
      export module SentryException {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryException> {
          public static class: java.lang.Class<io.sentry.protocol.SentryException.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryException;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.SentryException.JsonKeys>;
          public static TYPE: string;
          public static VALUE: string;
          public static MODULE: string;
          public static THREAD_ID: string;
          public static STACKTRACE: string;
          public static MECHANISM: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SentryId extends io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SentryId>;
        public static EMPTY_ID: io.sentry.protocol.SentryId;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public hashCode(): number;
        public constructor(param0: java.util.UUID);
        public equals(param0: any): boolean;
        public toString(): string;
        public constructor(param0: string);
        public constructor();
      }
      export module SentryId {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryId> {
          public static class: java.lang.Class<io.sentry.protocol.SentryId.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryId;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SentryPackage implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SentryPackage>;
        public setName(param0: string): void;
        public getVersion(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getUnknown(): java.util.Map<string, any>;
        public getName(): string;
        public setVersion(param0: string): void;
        public constructor(param0: string, param1: string);
      }
      export module SentryPackage {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryPackage> {
          public static class: java.lang.Class<io.sentry.protocol.SentryPackage.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryPackage;
          public constructor();
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.SentryPackage.JsonKeys>;
          public static NAME: string;
          public static VERSION: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SentryRuntime implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SentryRuntime>;
        public static TYPE: string;
        public setName(param0: string): void;
        public getVersion(): string;
        public getRawDescription(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public setRawDescription(param0: string): void;
        public getUnknown(): java.util.Map<string, any>;
        public getName(): string;
        public setVersion(param0: string): void;
        public constructor();
      }
      export module SentryRuntime {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryRuntime> {
          public static class: java.lang.Class<io.sentry.protocol.SentryRuntime.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryRuntime;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.SentryRuntime.JsonKeys>;
          public static NAME: string;
          public static VERSION: string;
          public static RAW_DESCRIPTION: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SentrySpan implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SentrySpan>;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getUnknown(): java.util.Map<string, any>;
        public getDescription(): string;
        public isFinished(): boolean;
        public getData(): java.util.Map<string, any>;
        public getSpanId(): io.sentry.SpanId;
        public getTags(): java.util.Map<string, string>;
        public getOp(): string;
        public getStartTimestamp(): java.lang.Double;
        public getTraceId(): io.sentry.protocol.SentryId;
        public getStatus(): io.sentry.SpanStatus;
        public getParentSpanId(): io.sentry.SpanId;
        public constructor(param0: java.lang.Double, param1: java.lang.Double, param2: io.sentry.protocol.SentryId, param3: io.sentry.SpanId, param4: io.sentry.SpanId, param5: string, param6: string, param7: io.sentry.SpanStatus, param8: java.util.Map<string, string>, param9: java.util.Map<string, any>);
        public getTimestamp(): java.lang.Double;
        public constructor(param0: io.sentry.Span, param1: java.util.Map<string, any>);
        public constructor(param0: io.sentry.Span);
      }
      export module SentrySpan {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentrySpan> {
          public static class: java.lang.Class<io.sentry.protocol.SentrySpan.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentrySpan;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.SentrySpan.JsonKeys>;
          public static START_TIMESTAMP: string;
          public static TIMESTAMP: string;
          public static TRACE_ID: string;
          public static SPAN_ID: string;
          public static PARENT_SPAN_ID: string;
          public static OP: string;
          public static DESCRIPTION: string;
          public static STATUS: string;
          public static TAGS: string;
          public static DATA: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SentryStackFrame implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame>;
        public getSymbol(): string;
        public setFramesOmitted(param0: java.util.List<java.lang.Integer>): void;
        public getModule(): string;
        public setModule(param0: string): void;
        public setPostContext(param0: java.util.List<string>): void;
        public getAbsPath(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getFunction(): string;
        public setVars(param0: java.util.Map<string, string>): void;
        public setSymbol(param0: string): void;
        public getVars(): java.util.Map<string, string>;
        public setPackage(param0: string): void;
        public getPreContext(): java.util.List<string>;
        public setAbsPath(param0: string): void;
        public constructor();
        public setColno(param0: java.lang.Integer): void;
        public setImageAddr(param0: string): void;
        public setNative(param0: java.lang.Boolean): void;
        public setRawFunction(param0: string): void;
        public getFilename(): string;
        public setPlatform(param0: string): void;
        public getPackage(): string;
        public setFunction(param0: string): void;
        public getLineno(): java.lang.Integer;
        public setInApp(param0: java.lang.Boolean): void;
        public getFramesOmitted(): java.util.List<java.lang.Integer>;
        public setSymbolAddr(param0: string): void;
        public getLock(): io.sentry.SentryLockReason;
        public getUnknown(): java.util.Map<string, any>;
        public getPostContext(): java.util.List<string>;
        public getContextLine(): string;
        public getSymbolAddr(): string;
        public setInstructionAddr(param0: string): void;
        public getRawFunction(): string;
        public setLineno(param0: java.lang.Integer): void;
        public setContextLine(param0: string): void;
        public setLock(param0: io.sentry.SentryLockReason): void;
        public setFilename(param0: string): void;
        public getPlatform(): string;
        public getInstructionAddr(): string;
        public getImageAddr(): string;
        public setPreContext(param0: java.util.List<string>): void;
        public getColno(): java.lang.Integer;
        public isInApp(): java.lang.Boolean;
        public isNative(): java.lang.Boolean;
      }
      export module SentryStackFrame {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryStackFrame> {
          public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryStackFrame;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame.JsonKeys>;
          public static FILENAME: string;
          public static FUNCTION: string;
          public static MODULE: string;
          public static LINENO: string;
          public static COLNO: string;
          public static ABS_PATH: string;
          public static CONTEXT_LINE: string;
          public static IN_APP: string;
          public static PACKAGE: string;
          public static NATIVE: string;
          public static PLATFORM: string;
          public static IMAGE_ADDR: string;
          public static SYMBOL_ADDR: string;
          public static INSTRUCTION_ADDR: string;
          public static RAW_FUNCTION: string;
          public static SYMBOL: string;
          public static LOCK: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SentryStackTrace implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace>;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public setRegisters(param0: java.util.Map<string, string>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public constructor(param0: java.util.List<io.sentry.protocol.SentryStackFrame>);
        public getRegisters(): java.util.Map<string, string>;
        public setSnapshot(param0: java.lang.Boolean): void;
        public setFrames(param0: java.util.List<io.sentry.protocol.SentryStackFrame>): void;
        public getSnapshot(): java.lang.Boolean;
        public getUnknown(): java.util.Map<string, any>;
        public constructor();
        public getFrames(): java.util.List<io.sentry.protocol.SentryStackFrame>;
      }
      export module SentryStackTrace {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryStackTrace> {
          public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryStackTrace;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace.JsonKeys>;
          public static FRAMES: string;
          public static REGISTERS: string;
          public static SNAPSHOT: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SentryThread implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SentryThread>;
        public setName(param0: string): void;
        public setMain(param0: java.lang.Boolean): void;
        public getPriority(): java.lang.Integer;
        public isCrashed(): java.lang.Boolean;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public setDaemon(param0: java.lang.Boolean): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public setCurrent(param0: java.lang.Boolean): void;
        public getHeldLocks(): java.util.Map<string, io.sentry.SentryLockReason>;
        public getUnknown(): java.util.Map<string, any>;
        public getName(): string;
        public setCrashed(param0: java.lang.Boolean): void;
        public setId(param0: java.lang.Long): void;
        public isCurrent(): java.lang.Boolean;
        public constructor();
        public getStacktrace(): io.sentry.protocol.SentryStackTrace;
        public getState(): string;
        public setHeldLocks(param0: java.util.Map<string, io.sentry.SentryLockReason>): void;
        public isDaemon(): java.lang.Boolean;
        public getId(): java.lang.Long;
        public setStacktrace(param0: io.sentry.protocol.SentryStackTrace): void;
        public setState(param0: string): void;
        public isMain(): java.lang.Boolean;
        public setPriority(param0: java.lang.Integer): void;
      }
      export module SentryThread {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryThread> {
          public static class: java.lang.Class<io.sentry.protocol.SentryThread.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryThread;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.SentryThread.JsonKeys>;
          public static ID: string;
          public static PRIORITY: string;
          public static NAME: string;
          public static STATE: string;
          public static CRASHED: string;
          public static CURRENT: string;
          public static DAEMON: string;
          public static MAIN: string;
          public static STACKTRACE: string;
          public static HELD_LOCKS: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class SentryTransaction extends io.sentry.SentryBaseEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.SentryTransaction>;
        public getType(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public constructor(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.util.List<io.sentry.protocol.SentrySpan>, param4: java.util.Map<string, io.sentry.protocol.MeasurementValue>, param5: io.sentry.protocol.TransactionInfo);
        public getUnknown(): java.util.Map<string, any>;
        public isFinished(): boolean;
        public getSpans(): java.util.List<io.sentry.protocol.SentrySpan>;
        public getSamplingDecision(): io.sentry.TracesSamplingDecision;
        public getMeasurements(): java.util.Map<string, io.sentry.protocol.MeasurementValue>;
        public constructor();
        public isSampled(): boolean;
        public getStartTimestamp(): java.lang.Double;
        public getStatus(): io.sentry.SpanStatus;
        public constructor(param0: io.sentry.SentryTracer);
        public getTimestamp(): java.lang.Double;
        public getTransaction(): string;
        public constructor(param0: io.sentry.protocol.SentryId);
      }
      export module SentryTransaction {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryTransaction> {
          public static class: java.lang.Class<io.sentry.protocol.SentryTransaction.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryTransaction;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.SentryTransaction.JsonKeys>;
          public static TRANSACTION: string;
          public static START_TIMESTAMP: string;
          public static TIMESTAMP: string;
          public static SPANS: string;
          public static TYPE: string;
          public static MEASUREMENTS: string;
          public static TRANSACTION_INFO: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class TransactionInfo implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
        public static class: java.lang.Class<io.sentry.protocol.TransactionInfo>;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getUnknown(): java.util.Map<string, any>;
        public constructor(param0: string);
      }
      export module TransactionInfo {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.TransactionInfo> {
          public static class: java.lang.Class<io.sentry.protocol.TransactionInfo.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.TransactionInfo;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.TransactionInfo.JsonKeys>;
          public static SOURCE: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class TransactionNameSource {
        public static class: java.lang.Class<io.sentry.protocol.TransactionNameSource>;
        public static CUSTOM: io.sentry.protocol.TransactionNameSource;
        public static URL: io.sentry.protocol.TransactionNameSource;
        public static ROUTE: io.sentry.protocol.TransactionNameSource;
        public static VIEW: io.sentry.protocol.TransactionNameSource;
        public static COMPONENT: io.sentry.protocol.TransactionNameSource;
        public static TASK: io.sentry.protocol.TransactionNameSource;
        public apiName(): string;
        public static values(): androidNative.Array<io.sentry.protocol.TransactionNameSource>;
        public static valueOf(param0: string): io.sentry.protocol.TransactionNameSource;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class User implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.User>;
        public static fromMap(param0: java.util.Map<string, any>, param1: io.sentry.SentryOptions): io.sentry.protocol.User;
        public getId(): string;
        public getSegment(): string;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public getIpAddress(): string;
        public getGeo(): io.sentry.protocol.Geo;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public constructor();
        /** @deprecated */
        public getOthers(): java.util.Map<string, string>;
        public hashCode(): number;
        public setId(param0: string): void;
        public setUsername(param0: string): void;
        public equals(param0: any): boolean;
        public getUsername(): string;
        public setGeo(param0: io.sentry.protocol.Geo): void;
        public getData(): java.util.Map<string, string>;
        public setSegment(param0: string): void;
        public setName(param0: string): void;
        public getEmail(): string;
        /** @deprecated */
        public setOthers(param0: java.util.Map<string, string>): void;
        public setEmail(param0: string): void;
        public getUnknown(): java.util.Map<string, any>;
        public getName(): string;
        public setData(param0: java.util.Map<string, string>): void;
        public constructor(param0: io.sentry.protocol.User);
        public setIpAddress(param0: string): void;
      }
      export module User {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.User> {
          public static class: java.lang.Class<io.sentry.protocol.User.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.User;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.User.JsonKeys>;
          public static EMAIL: string;
          public static ID: string;
          public static USERNAME: string;
          public static SEGMENT: string;
          public static IP_ADDRESS: string;
          public static NAME: string;
          public static GEO: string;
          public static OTHER: string;
          public static DATA: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class ViewHierarchy implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.ViewHierarchy>;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getUnknown(): java.util.Map<string, any>;
        public getRenderingSystem(): string;
        public getWindows(): java.util.List<io.sentry.protocol.ViewHierarchyNode>;
        public constructor(param0: string, param1: java.util.List<io.sentry.protocol.ViewHierarchyNode>);
      }
      export module ViewHierarchy {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.ViewHierarchy> {
          public static class: java.lang.Class<io.sentry.protocol.ViewHierarchy.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.ViewHierarchy;
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.ViewHierarchy.JsonKeys>;
          public static RENDERING_SYSTEM: string;
          public static WINDOWS: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module protocol {
      export class ViewHierarchyNode implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
        public static class: java.lang.Class<io.sentry.protocol.ViewHierarchyNode>;
        public getWidth(): java.lang.Double;
        public setUnknown(param0: java.util.Map<string, any>): void;
        public serialize(param0: io.sentry.JsonObjectWriter, param1: io.sentry.ILogger): void;
        public getHeight(): java.lang.Double;
        public setType(param0: string): void;
        public setWidth(param0: java.lang.Double): void;
        public getRenderingSystem(): string;
        public constructor();
        public getVisibility(): string;
        public getChildren(): java.util.List<io.sentry.protocol.ViewHierarchyNode>;
        public setAlpha(param0: java.lang.Double): void;
        public setTag(param0: string): void;
        public setHeight(param0: java.lang.Double): void;
        public getX(): java.lang.Double;
        public setChildren(param0: java.util.List<io.sentry.protocol.ViewHierarchyNode>): void;
        public setX(param0: java.lang.Double): void;
        public setY(param0: java.lang.Double): void;
        public getType(): string;
        public setIdentifier(param0: string): void;
        public getTag(): string;
        public setRenderingSystem(param0: string): void;
        public getUnknown(): java.util.Map<string, any>;
        public setVisibility(param0: string): void;
        public getAlpha(): java.lang.Double;
        public getIdentifier(): string;
        public getY(): java.lang.Double;
      }
      export module ViewHierarchyNode {
        export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.ViewHierarchyNode> {
          public static class: java.lang.Class<io.sentry.protocol.ViewHierarchyNode.Deserializer>;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.ViewHierarchyNode;
          public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
          public constructor();
        }
        export class JsonKeys {
          public static class: java.lang.Class<io.sentry.protocol.ViewHierarchyNode.JsonKeys>;
          public static RENDERING_SYSTEM: string;
          public static TYPE: string;
          public static IDENTIFIER: string;
          public static TAG: string;
          public static WIDTH: string;
          public static HEIGHT: string;
          public static X: string;
          public static Y: string;
          public static VISIBILITY: string;
          public static ALPHA: string;
          public static CHILDREN: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class AsyncHttpTransport extends io.sentry.transport.ITransport {
        public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport>;
        public constructor(param0: io.sentry.transport.QueuedThreadPoolExecutor, param1: io.sentry.SentryOptions, param2: io.sentry.transport.RateLimiter, param3: io.sentry.transport.ITransportGate, param4: io.sentry.transport.HttpConnection);
        public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.transport.RateLimiter, param2: io.sentry.transport.ITransportGate, param3: io.sentry.RequestDetails);
        public close(): void;
        public send(param0: io.sentry.SentryEnvelope): void;
        public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
        public flush(param0: number): void;
      }
      export module AsyncHttpTransport {
        export class AsyncConnectionThreadFactory {
          public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport.AsyncConnectionThreadFactory>;
          public newThread(param0: java.lang.Runnable): java.lang.Thread;
        }
        export class EnvelopeSender {
          public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport.EnvelopeSender>;
          public run(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class AuthenticatorWrapper {
        public static class: java.lang.Class<io.sentry.transport.AuthenticatorWrapper>;
        public setDefault(param0: java.net.Authenticator): void;
        public static getInstance(): io.sentry.transport.AuthenticatorWrapper;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class CurrentDateProvider extends io.sentry.transport.ICurrentDateProvider {
        public static class: java.lang.Class<io.sentry.transport.CurrentDateProvider>;
        public getCurrentTimeMillis(): number;
        public static getInstance(): io.sentry.transport.ICurrentDateProvider;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class HttpConnection {
        public static class: java.lang.Class<io.sentry.transport.HttpConnection>;
        public send(param0: io.sentry.SentryEnvelope): io.sentry.transport.TransportResult;
        public updateRetryAfterLimits(param0: java.net.HttpURLConnection, param1: number): void;
        public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails, param2: io.sentry.transport.RateLimiter);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class ICurrentDateProvider {
        public static class: java.lang.Class<io.sentry.transport.ICurrentDateProvider>;
        /**
         * Constructs a new instance of the io.sentry.transport.ICurrentDateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { getCurrentTimeMillis(): number });
        public constructor();
        public getCurrentTimeMillis(): number;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class ITransport {
        public static class: java.lang.Class<io.sentry.transport.ITransport>;
        /**
         * Constructs a new instance of the io.sentry.transport.ITransport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void; send(param0: io.sentry.SentryEnvelope): void; flush(param0: number): void });
        public constructor();
        public send(param0: io.sentry.SentryEnvelope): void;
        public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
        public flush(param0: number): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class ITransportGate {
        public static class: java.lang.Class<io.sentry.transport.ITransportGate>;
        /**
         * Constructs a new instance of the io.sentry.transport.ITransportGate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { isConnected(): boolean });
        public constructor();
        public isConnected(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class NoOpEnvelopeCache extends io.sentry.cache.IEnvelopeCache {
        public static class: java.lang.Class<io.sentry.transport.NoOpEnvelopeCache>;
        public discard(param0: io.sentry.SentryEnvelope): void;
        public store(param0: io.sentry.SentryEnvelope): void;
        public static getInstance(): io.sentry.transport.NoOpEnvelopeCache;
        public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
        public iterator(): java.util.Iterator<io.sentry.SentryEnvelope>;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class NoOpTransport extends io.sentry.transport.ITransport {
        public static class: java.lang.Class<io.sentry.transport.NoOpTransport>;
        public close(): void;
        public static getInstance(): io.sentry.transport.NoOpTransport;
        public send(param0: io.sentry.SentryEnvelope): void;
        public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
        public flush(param0: number): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class NoOpTransportGate extends io.sentry.transport.ITransportGate {
        public static class: java.lang.Class<io.sentry.transport.NoOpTransportGate>;
        public isConnected(): boolean;
        public static getInstance(): io.sentry.transport.NoOpTransportGate;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class ProxyAuthenticator {
        public static class: java.lang.Class<io.sentry.transport.ProxyAuthenticator>;
        public getPasswordAuthentication(): java.net.PasswordAuthentication;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class QueuedThreadPoolExecutor {
        public static class: java.lang.Class<io.sentry.transport.QueuedThreadPoolExecutor>;
        public afterExecute(param0: java.lang.Runnable, param1: java.lang.Throwable): void;
        public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
        public constructor(param0: number, param1: number, param2: java.util.concurrent.ThreadFactory, param3: java.util.concurrent.RejectedExecutionHandler, param4: io.sentry.ILogger);
      }
      export module QueuedThreadPoolExecutor {
        export class CancelledFuture<T> extends java.util.concurrent.Future<any> {
          public static class: java.lang.Class<io.sentry.transport.QueuedThreadPoolExecutor.CancelledFuture<any>>;
          public get(): any;
          public isDone(): boolean;
          public isCancelled(): boolean;
          public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
          public cancel(param0: boolean): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class RateLimiter {
        public static class: java.lang.Class<io.sentry.transport.RateLimiter>;
        public constructor(param0: io.sentry.SentryOptions);
        public constructor(param0: io.sentry.transport.ICurrentDateProvider, param1: io.sentry.SentryOptions);
        public updateRetryAfterLimits(param0: string, param1: string, param2: number): void;
        public filter(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.SentryEnvelope;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class ReusableCountLatch {
        public static class: java.lang.Class<io.sentry.transport.ReusableCountLatch>;
        public waitTillZero(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
        public increment(): void;
        public constructor(param0: number);
        public getCount(): number;
        public decrement(): void;
        public constructor();
        public waitTillZero(): void;
      }
      export module ReusableCountLatch {
        export class Sync {
          public static class: java.lang.Class<io.sentry.transport.ReusableCountLatch.Sync>;
          public tryAcquireShared(param0: number): number;
          public tryReleaseShared(param0: number): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export class StdoutTransport extends io.sentry.transport.ITransport {
        public static class: java.lang.Class<io.sentry.transport.StdoutTransport>;
        public close(): void;
        public send(param0: io.sentry.SentryEnvelope): void;
        public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
        public constructor(param0: io.sentry.ISerializer);
        public flush(param0: number): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module transport {
      export abstract class TransportResult {
        public static class: java.lang.Class<io.sentry.transport.TransportResult>;
        public static success(): io.sentry.transport.TransportResult;
        public getResponseCode(): number;
        public isSuccess(): boolean;
        public static error(): io.sentry.transport.TransportResult;
        public static error(param0: number): io.sentry.transport.TransportResult;
      }
      export module TransportResult {
        export class ErrorTransportResult extends io.sentry.transport.TransportResult {
          public static class: java.lang.Class<io.sentry.transport.TransportResult.ErrorTransportResult>;
          public getResponseCode(): number;
          public isSuccess(): boolean;
        }
        export class SuccessTransportResult extends io.sentry.transport.TransportResult {
          public static class: java.lang.Class<io.sentry.transport.TransportResult.SuccessTransportResult>;
          public getResponseCode(): number;
          public isSuccess(): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class ClassLoaderUtils {
        public static class: java.lang.Class<io.sentry.util.ClassLoaderUtils>;
        public static classLoaderOrDefault(param0: java.lang.ClassLoader): java.lang.ClassLoader;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class CollectionUtils {
        public static class: java.lang.Class<io.sentry.util.CollectionUtils>;
        public static newArrayList(param0: java.util.List<any>): java.util.List<any>;
        public static size(param0: java.lang.Iterable<any>): number;
        public static filterListEntries(param0: java.util.List<any>, param1: io.sentry.util.CollectionUtils.Predicate<any>): java.util.List<any>;
        public static newHashMap(param0: java.util.Map<any, any>): java.util.Map<any, any>;
        public static filterMapEntries(param0: java.util.Map<any, any>, param1: io.sentry.util.CollectionUtils.Predicate<any>): java.util.Map<any, any>;
        public static map(param0: java.util.List<any>, param1: io.sentry.util.CollectionUtils.Mapper<any, any>): java.util.List<any>;
        public static newConcurrentHashMap(param0: java.util.Map<any, any>): java.util.Map<any, any>;
      }
      export module CollectionUtils {
        export class Mapper<T, R> extends java.lang.Object {
          public static class: java.lang.Class<io.sentry.util.CollectionUtils.Mapper<any, any>>;
          /**
           * Constructs a new instance of the io.sentry.util.CollectionUtils$Mapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { map(param0: T): R });
          public constructor();
          public map(param0: T): R;
        }
        export class Predicate<T> extends java.lang.Object {
          public static class: java.lang.Class<io.sentry.util.CollectionUtils.Predicate<any>>;
          /**
           * Constructs a new instance of the io.sentry.util.CollectionUtils$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { test(param0: T): boolean });
          public constructor();
          public test(param0: T): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class DebugMetaPropertiesApplier {
        public static class: java.lang.Class<io.sentry.util.DebugMetaPropertiesApplier>;
        public static DEBUG_META_PROPERTIES_FILENAME: string;
        public static applyToOptions(param0: io.sentry.SentryOptions, param1: java.util.Properties): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class ExceptionUtils {
        public static class: java.lang.Class<io.sentry.util.ExceptionUtils>;
        public static findRootCause(param0: java.lang.Throwable): java.lang.Throwable;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class FileUtils {
        public static class: java.lang.Class<io.sentry.util.FileUtils>;
        public static readText(param0: java.io.File): string;
        public static deleteRecursively(param0: java.io.File): boolean;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class HintUtils {
        public static class: java.lang.Class<io.sentry.util.HintUtils>;
        public static getSentrySdkHint(param0: io.sentry.Hint): any;
        public static runIfDoesNotHaveType(param0: io.sentry.Hint, param1: java.lang.Class<any>, param2: io.sentry.util.HintUtils.SentryNullableConsumer<any>): void;
        public static shouldApplyScopeData(param0: io.sentry.Hint): boolean;
        public static hasType(param0: io.sentry.Hint, param1: java.lang.Class<any>): boolean;
        public static runIfHasType(param0: io.sentry.Hint, param1: java.lang.Class<any>, param2: io.sentry.util.HintUtils.SentryConsumer<any>): void;
        public static createWithTypeCheckHint(param0: any): io.sentry.Hint;
        public static runIfHasTypeLogIfNot(param0: io.sentry.Hint, param1: java.lang.Class<any>, param2: io.sentry.ILogger, param3: io.sentry.util.HintUtils.SentryConsumer<any>): void;
        public static setIsFromHybridSdk(param0: io.sentry.Hint, param1: string): void;
        public static isFromHybridSdk(param0: io.sentry.Hint): boolean;
        public static runIfHasType(param0: io.sentry.Hint, param1: java.lang.Class<any>, param2: io.sentry.util.HintUtils.SentryConsumer<any>, param3: io.sentry.util.HintUtils.SentryHintFallback): void;
        public static setTypeCheckHint(param0: io.sentry.Hint, param1: any): void;
      }
      export module HintUtils {
        export class SentryConsumer<T> extends java.lang.Object {
          public static class: java.lang.Class<io.sentry.util.HintUtils.SentryConsumer<any>>;
          /**
           * Constructs a new instance of the io.sentry.util.HintUtils$SentryConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { accept(param0: T): void });
          public constructor();
          public accept(param0: T): void;
        }
        export class SentryHintFallback {
          public static class: java.lang.Class<io.sentry.util.HintUtils.SentryHintFallback>;
          /**
           * Constructs a new instance of the io.sentry.util.HintUtils$SentryHintFallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { accept(param0: any, param1: java.lang.Class<any>): void });
          public constructor();
          public accept(param0: any, param1: java.lang.Class<any>): void;
        }
        export class SentryNullableConsumer<T> extends java.lang.Object {
          public static class: java.lang.Class<io.sentry.util.HintUtils.SentryNullableConsumer<any>>;
          /**
           * Constructs a new instance of the io.sentry.util.HintUtils$SentryNullableConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { accept(param0: T): void });
          public constructor();
          public accept(param0: T): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class HttpUtils {
        public static class: java.lang.Class<io.sentry.util.HttpUtils>;
        public static COOKIE_HEADER_NAME: string;
        public static isSecurityCookie(param0: string, param1: java.util.List<string>): boolean;
        public static containsSensitiveHeader(param0: string): boolean;
        public static filterOutSecurityCookiesFromHeader(param0: java.util.Enumeration<string>, param1: string, param2: java.util.List<string>): java.util.List<string>;
        public static filterOutSecurityCookiesFromHeader(param0: java.util.List<string>, param1: string, param2: java.util.List<string>): java.util.List<string>;
        public constructor();
        public static filterOutSecurityCookies(param0: string, param1: java.util.List<string>): string;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class JsonSerializationUtils {
        public static class: java.lang.Class<io.sentry.util.JsonSerializationUtils>;
        public static atomicIntegerArrayToList(param0: java.util.concurrent.atomic.AtomicIntegerArray): java.util.List<any>;
        public static bytesFrom(param0: io.sentry.ISerializer, param1: io.sentry.ILogger, param2: io.sentry.JsonSerializable): androidNative.Array<number>;
        public constructor();
        public static calendarToMap(param0: java.util.Calendar): java.util.Map<string, any>;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class LazyEvaluator<T> extends java.lang.Object {
        public static class: java.lang.Class<io.sentry.util.LazyEvaluator<any>>;
        public getValue(): T;
        public constructor(param0: io.sentry.util.LazyEvaluator.Evaluator<T>);
      }
      export module LazyEvaluator {
        export class Evaluator<T> extends java.lang.Object {
          public static class: java.lang.Class<io.sentry.util.LazyEvaluator.Evaluator<any>>;
          /**
           * Constructs a new instance of the io.sentry.util.LazyEvaluator$Evaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { evaluate(): T });
          public constructor();
          public evaluate(): T;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class LogUtils {
        public static class: java.lang.Class<io.sentry.util.LogUtils>;
        public static logNotInstanceOf(param0: java.lang.Class<any>, param1: any, param2: io.sentry.ILogger): void;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class Objects {
        public static class: java.lang.Class<io.sentry.util.Objects>;
        public static requireNonNull(param0: any, param1: string): any;
        public static hash(param0: androidNative.Array<any>): number;
        public static equals(param0: any, param1: any): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class Pair<A, B> extends java.lang.Object {
        public static class: java.lang.Class<io.sentry.util.Pair<any, any>>;
        public getFirst(): A;
        public constructor(param0: A, param1: B);
        public getSecond(): B;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class Platform {
        public static class: java.lang.Class<io.sentry.util.Platform>;
        public static isJvm(): boolean;
        public static isJavaNinePlus(): boolean;
        public static isAndroid(): boolean;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class PropagationTargetsUtils {
        public static class: java.lang.Class<io.sentry.util.PropagationTargetsUtils>;
        public static contain(param0: java.util.List<string>, param1: java.net.URI): boolean;
        public static contain(param0: java.util.List<string>, param1: string): boolean;
        public constructor();
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class SampleRateUtils {
        public static class: java.lang.Class<io.sentry.util.SampleRateUtils>;
        public static isValidSampleRate(param0: java.lang.Double): boolean;
        public static isValidTracesSampleRate(param0: java.lang.Double): boolean;
        public static isValidTracesSampleRate(param0: java.lang.Double, param1: boolean): boolean;
        public constructor();
        public static isValidProfilesSampleRate(param0: java.lang.Double): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class StringUtils {
        public static class: java.lang.Class<io.sentry.util.StringUtils>;
        public static byteCountToString(param0: number): string;
        public static capitalize(param0: string): string;
        public static normalizeUUID(param0: string): string;
        public static getStringAfterDot(param0: string): string;
        public static join(param0: string, param1: java.lang.Iterable<any>): string;
        public static removeSurrounding(param0: string, param1: string): string;
        public static countOf(param0: string, param1: string): number;
        public static calculateStringHash(param0: string, param1: io.sentry.ILogger): string;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class TracingUtils {
        public static class: java.lang.Class<io.sentry.util.TracingUtils>;
        public static startNewTrace(param0: io.sentry.IHub): void;
        public static trace(param0: io.sentry.IHub, param1: java.util.List<string>, param2: io.sentry.ISpan): io.sentry.util.TracingUtils.TracingHeaders;
        public static traceIfAllowed(param0: io.sentry.IHub, param1: string, param2: java.util.List<string>, param3: io.sentry.ISpan): io.sentry.util.TracingUtils.TracingHeaders;
        public static maybeUpdateBaggage(param0: io.sentry.Scope, param1: io.sentry.SentryOptions): io.sentry.PropagationContext;
        public constructor();
      }
      export module TracingUtils {
        export class PropagationContextHolder {
          public static class: java.lang.Class<io.sentry.util.TracingUtils.PropagationContextHolder>;
        }
        export class TracingHeaders {
          public static class: java.lang.Class<io.sentry.util.TracingUtils.TracingHeaders>;
          public getBaggageHeader(): io.sentry.BaggageHeader;
          public getSentryTraceHeader(): io.sentry.SentryTraceHeader;
          public constructor(param0: io.sentry.SentryTraceHeader, param1: io.sentry.BaggageHeader);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export class UrlUtils {
        public static class: java.lang.Class<io.sentry.util.UrlUtils>;
        public static SENSITIVE_DATA_SUBSTITUTE: string;
        public static parse(param0: string): io.sentry.util.UrlUtils.UrlDetails;
        public static parseNullable(param0: string): io.sentry.util.UrlUtils.UrlDetails;
        public constructor();
      }
      export module UrlUtils {
        export class UrlDetails {
          public static class: java.lang.Class<io.sentry.util.UrlUtils.UrlDetails>;
          public getUrl(): string;
          public applyToSpan(param0: io.sentry.ISpan): void;
          public applyToRequest(param0: io.sentry.protocol.Request): void;
          public getQuery(): string;
          public getFragment(): string;
          public getUrlOrFallback(): string;
          public constructor(param0: string, param1: string, param2: string);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export module thread {
        export class IMainThreadChecker {
          public static class: java.lang.Class<io.sentry.util.thread.IMainThreadChecker>;
          /**
           * Constructs a new instance of the io.sentry.util.thread.IMainThreadChecker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            isMainThread(param0: number): boolean;
            // isMainThread(param0: java.lang.Thread): boolean;
            // isMainThread(): boolean;
            // isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
          });
          public constructor();
          public isMainThread(param0: java.lang.Thread): boolean;
          // public isMainThread(): boolean;
          // public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
          // public isMainThread(param0: number): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export module thread {
        export class MainThreadChecker extends io.sentry.util.thread.IMainThreadChecker {
          public static class: java.lang.Class<io.sentry.util.thread.MainThreadChecker>;
          public isMainThread(param0: java.lang.Thread): boolean;
          public isMainThread(): boolean;
          public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
          public static getInstance(): io.sentry.util.thread.MainThreadChecker;
          public isMainThread(param0: number): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module util {
      export module thread {
        export class NoOpMainThreadChecker extends io.sentry.util.thread.IMainThreadChecker {
          public static class: java.lang.Class<io.sentry.util.thread.NoOpMainThreadChecker>;
          public static getInstance(): io.sentry.util.thread.NoOpMainThreadChecker;
          public isMainThread(param0: java.lang.Thread): boolean;
          public constructor();
          public isMainThread(): boolean;
          public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
          public isMainThread(param0: number): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module vendor {
      export class Base64 {
        public static class: java.lang.Class<io.sentry.vendor.Base64>;
        public static DEFAULT: number;
        public static NO_PADDING: number;
        public static NO_WRAP: number;
        public static CRLF: number;
        public static URL_SAFE: number;
        public static NO_CLOSE: number;
        public static encode(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): androidNative.Array<number>;
        public static decode(param0: string, param1: number): androidNative.Array<number>;
        public static decode(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): androidNative.Array<number>;
        public static encode(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
        public static encodeToString(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): string;
        public static decode(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
        public static encodeToString(param0: androidNative.Array<number>, param1: number): string;
      }
      export module Base64 {
        export abstract class Coder {
          public static class: java.lang.Class<io.sentry.vendor.Base64.Coder>;
          public output: androidNative.Array<number>;
          public op: number;
          public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
          public maxOutputSize(param0: number): number;
        }
        export class Decoder extends io.sentry.vendor.Base64.Coder {
          public static class: java.lang.Class<io.sentry.vendor.Base64.Decoder>;
          public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
          public maxOutputSize(param0: number): number;
          public constructor(param0: number, param1: androidNative.Array<number>);
        }
        export class Encoder extends io.sentry.vendor.Base64.Coder {
          public static class: java.lang.Class<io.sentry.vendor.Base64.Encoder>;
          public static LINE_GROUPS: number;
          public do_padding: boolean;
          public do_newline: boolean;
          public do_cr: boolean;
          public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
          public maxOutputSize(param0: number): number;
          public constructor(param0: number, param1: androidNative.Array<number>);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module vendor {
      export module gson {
        export module internal {
          export module bind {
            export module util {
              export class ISO8601Utils {
                public static class: java.lang.Class<io.sentry.vendor.gson.internal.bind.util.ISO8601Utils>;
                public static TIMEZONE_UTC: java.util.TimeZone;
                public static format(param0: java.util.Date): string;
                public constructor();
                public static format(param0: java.util.Date, param1: boolean): string;
                public static format(param0: java.util.Date, param1: boolean, param2: java.util.TimeZone): string;
                public static parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
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
    export module vendor {
      export module gson {
        export module stream {
          export class JsonReader {
            public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonReader>;
            public nextNull(): void;
            public beginObject(): void;
            public nextBoolean(): boolean;
            public close(): void;
            public isLenient(): boolean;
            public endArray(): void;
            public getPath(): string;
            public beginArray(): void;
            public endObject(): void;
            public toString(): string;
            public setLenient(param0: boolean): void;
            public peek(): io.sentry.vendor.gson.stream.JsonToken;
            public nextInt(): number;
            public nextLong(): number;
            public nextName(): string;
            public skipValue(): void;
            public constructor(param0: java.io.Reader);
            public hasNext(): boolean;
            public nextDouble(): number;
            public nextString(): string;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module vendor {
      export module gson {
        export module stream {
          export class JsonScope {
            public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonScope>;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module vendor {
      export module gson {
        export module stream {
          export class JsonToken {
            public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonToken>;
            public static BEGIN_ARRAY: io.sentry.vendor.gson.stream.JsonToken;
            public static END_ARRAY: io.sentry.vendor.gson.stream.JsonToken;
            public static BEGIN_OBJECT: io.sentry.vendor.gson.stream.JsonToken;
            public static END_OBJECT: io.sentry.vendor.gson.stream.JsonToken;
            public static NAME: io.sentry.vendor.gson.stream.JsonToken;
            public static STRING: io.sentry.vendor.gson.stream.JsonToken;
            public static NUMBER: io.sentry.vendor.gson.stream.JsonToken;
            public static BOOLEAN: io.sentry.vendor.gson.stream.JsonToken;
            public static NULL: io.sentry.vendor.gson.stream.JsonToken;
            public static END_DOCUMENT: io.sentry.vendor.gson.stream.JsonToken;
            public static values(): androidNative.Array<io.sentry.vendor.gson.stream.JsonToken>;
            public static valueOf(param0: string): io.sentry.vendor.gson.stream.JsonToken;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module vendor {
      export module gson {
        export module stream {
          export class JsonWriter {
            public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonWriter>;
            public close(): void;
            public setSerializeNulls(param0: boolean): void;
            public constructor(param0: java.io.Writer);
            public endArray(): io.sentry.vendor.gson.stream.JsonWriter;
            public isLenient(): boolean;
            public nullValue(): io.sentry.vendor.gson.stream.JsonWriter;
            public flush(): void;
            public setIndent(param0: string): void;
            public endObject(): io.sentry.vendor.gson.stream.JsonWriter;
            public getSerializeNulls(): boolean;
            public name(param0: string): io.sentry.vendor.gson.stream.JsonWriter;
            public beginObject(): io.sentry.vendor.gson.stream.JsonWriter;
            public setLenient(param0: boolean): void;
            public jsonValue(param0: string): io.sentry.vendor.gson.stream.JsonWriter;
            public beginArray(): io.sentry.vendor.gson.stream.JsonWriter;
            public value(param0: string): io.sentry.vendor.gson.stream.JsonWriter;
            public value(param0: java.lang.Number): io.sentry.vendor.gson.stream.JsonWriter;
            public value(param0: boolean): io.sentry.vendor.gson.stream.JsonWriter;
            public isHtmlSafe(): boolean;
            public value(param0: java.lang.Boolean): io.sentry.vendor.gson.stream.JsonWriter;
            public setHtmlSafe(param0: boolean): void;
            public value(param0: number): io.sentry.vendor.gson.stream.JsonWriter;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module vendor {
      export module gson {
        export module stream {
          export class MalformedJsonException {
            public static class: java.lang.Class<io.sentry.vendor.gson.stream.MalformedJsonException>;
            public constructor(param0: java.lang.Throwable);
            public constructor(param0: string, param1: java.lang.Throwable);
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

//Generics information:
//io.sentry.CircularFifoQueue:1
//io.sentry.JsonDeserializer:1
//io.sentry.OptionsContainer:1
//io.sentry.Sentry.OptionsConfiguration:1
//io.sentry.SentryValues:1
//io.sentry.SynchronizedCollection:1
//io.sentry.SynchronizedQueue:1
//io.sentry.instrumentation.file.FileIOSpanManager.FileIOCallable:1
//io.sentry.transport.QueuedThreadPoolExecutor.CancelledFuture:1
//io.sentry.util.CollectionUtils.Mapper:2
//io.sentry.util.CollectionUtils.Predicate:1
//io.sentry.util.HintUtils.SentryConsumer:1
//io.sentry.util.HintUtils.SentryNullableConsumer:1
//io.sentry.util.LazyEvaluator:1
//io.sentry.util.LazyEvaluator.Evaluator:1
//io.sentry.util.Pair:2
