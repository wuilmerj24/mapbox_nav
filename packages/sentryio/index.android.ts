import { OptionsInit } from './interfaces/options.init';
import { SentryioCommon } from './common';
import { Application, Utils } from '@nativescript/core';
import { EDiagnosticLevels } from './enums/diagnostic_levels';
import { EInstrumenter } from './enums/instrumenters';
import { IProxiSentryNS } from './interfaces/proxi.sentry';
import { ISdkVersionNs } from './interfaces/sdkversionns';
import { ISslSocketFactoryNS } from './interfaces/sslSocketFactory.sentry';
import { ITagSentryNs } from './interfaces/tags.sentry';
import { EMaxRequestBodySizeNS } from './enums/maxRequestBodySize';

export class Sentryio extends SentryioCommon {
  protected config: io.sentry.SentryOptions;
  private _debug: boolean;
  constructor() {
    super();
  }

  protected printf(...args: any[]) {
    if (this.debug) {
      console.log(`sentryio - ${args}`);
    }
  }

  set dsn(dsn: string) {
    this.config.setDsn(dsn);
    this.printf('setDsn');
  }

  set debug(value: boolean) {
    if (value != null || value != undefined) {
      this._debug = value;
      this.config.setDebug(value);
      this.printf('setDebug');
    }
  }

  get debug(): boolean {
    return this._debug;
  }

  set attachServerName(value: boolean) {
    this.config.setAttachServerName(value);
    this.printf('setAttachServerName');
  }

  set attachStacktrace(value: boolean) {
    this.config.setAttachStacktrace(value);
    this.printf('setAttachStacktrace');
  }

  set attachThreads(value: boolean) {
    this.config.setAttachThreads(value);
    this.printf('setAttachThreads');
  }

  set cacheDirPath(value: string) {
    this.config.setCacheDirPath(value);
    this.printf('setCacheDirPath');
  }

  set connectionTimeoutMillis(value: number) {
    this.config.setConnectionTimeoutMillis(value);
    this.printf('setConnectionTimeoutMillis');
  }

  set diagnosticLevel(value: EDiagnosticLevels) {
    let level: io.sentry.SentryLevel;
    if (value == EDiagnosticLevels.DEBUG) {
      level = io.sentry.SentryLevel.DEBUG;
    } else if (value == EDiagnosticLevels.ERROR) {
      level = io.sentry.SentryLevel.ERROR;
    } else if (value == EDiagnosticLevels.FATAL) {
      level = io.sentry.SentryLevel.FATAL;
    } else if (value == EDiagnosticLevels.INFO) {
      level = io.sentry.SentryLevel.INFO;
    } else if (value == EDiagnosticLevels.WARNING) {
      level = io.sentry.SentryLevel.WARNING;
    }
    this.config.setDiagnosticLevel(level);
    this.printf('setDiagnosticLevel');
  }

  set dist(value: string) {
    this.config.setDist(value);
    this.printf('setDist');
  }

  set distinctId(value: string) {
    this.config.setDistinctId(value);
    this.printf('setDistinctId');
  }

  set enableAutoSessionTracking(value: boolean) {
    this.config.setEnableAutoSessionTracking(value);
    this.printf('setEnableAutoSessionTracking');
  }

  set enableDeduplication(value: boolean) {
    this.config.setEnableDeduplication(value);
    this.printf('setEnableDeduplication');
  }

  set enableExternalConfiguration(value: boolean) {
    this.config.setEnableExternalConfiguration(value);
    this.printf('setEnableExternalConfiguration');
  }

  set enableNdk(value: boolean) {
    this.config.setEnableNdk(value);
    this.printf('setEnableNdk');
  }

  set enableScopeSync(value: boolean) {
    this.config.setEnableScopeSync(value);
    this.printf('setEnableScopeSync');
  }

  set enableShutdownHook(value: boolean) {
    this.config.setEnableShutdownHook(value);
    this.printf('setEnableShutdownHook');
  }

  set enableTimeToFullDisplayTracing(value: boolean) {
    this.config.setEnableTimeToFullDisplayTracing(value);
    this.printf('setEnableTimeToFullDisplayTracing');
  }

  set enableTracing(value: boolean) {
    this.config.setEnableTracing(new java.lang.Boolean(value));
    this.printf('setEnableTracing');
  }

  set enableUncaughtExceptionHandler(value: boolean) {
    this.config.setEnableUncaughtExceptionHandler(value);
    this.printf('setEnableUncaughtExceptionHandler');
  }

  set enableUserInteractionBreadcrumbs(value: boolean) {
    this.config.setEnableUserInteractionBreadcrumbs(value);
    this.printf('setEnableUserInteractionBreadcrumbs');
  }

  set enableUserInteractionTracing(value: boolean) {
    this.config.setEnableUserInteractionTracing(value);
    this.printf('setEnableUserInteractionTracing');
  }

  set environment(value: string) {
    this.config.setEnvironment(value);
    this.printf('setEnvironment');
  }

  set flushTimeoutMillis(value: number) {
    this.config.setFlushTimeoutMillis(value);
    this.printf('setFlushTimeoutMillis');
  }

  set idleTimeout(value: number) {
    this.config.setIdleTimeout(new java.lang.Long(`${value}`));
    this.printf('setIdleTimeout');
  }

  set instrumenter(value: EInstrumenter) {
    let instrumenter: io.sentry.Instrumenter;
    if (value == EInstrumenter.OTEL) {
      instrumenter = io.sentry.Instrumenter.OTEL;
    } else if (value == EInstrumenter.SENTRY) {
      instrumenter = io.sentry.Instrumenter.SENTRY;
    }
    this.config.setInstrumenter(instrumenter);
    this.printf('setInstrumenter');
  }

  set logger(value: boolean) {
    const that = this;
    this.config.setLogger(
      new io.sentry.ILogger({
        isEnabled(param0: io.sentry.SentryLevel) {
          that.printf(param0);
          return value;
        },
        log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>) {
          that.printf(`${param0} - ${param1} - ${param2} - ${param3}`);
        },
      })
    );
    this.printf('logger');
  }

  set mainThreadChecker(value: boolean) {
    this.config.setMainThreadChecker(
      new io.sentry.util.thread.IMainThreadChecker({
        isMainThread(param0: number): boolean {
          return value;
        },
      })
    );
    this.printf('logger');
  }

  set maxAttachmentSize(value: number) {
    this.config.setMaxAttachmentSize(value);
    this.printf('maxAttachmentSize');
  }

  set maxBreadcrumbs(value: number) {
    this.config.setMaxBreadcrumbs(value);
    this.printf('setMaxBreadcrumbs');
  }

  set maxCacheItems(value: number) {
    this.config.setMaxCacheItems(value);
    this.printf('maxCacheItems');
  }

  set maxDepth(value: number) {
    this.config.setMaxDepth(value);
    this.printf('maxDepth');
  }

  set maxQueueSize(value: number) {
    this.config.setMaxQueueSize(value);
    this.printf('setMaxQueueSize');
  }

  set maxRequestBodySize(value: EMaxRequestBodySizeNS) {
    let valor: io.sentry.SentryOptions.RequestSize;
    if (value == EMaxRequestBodySizeNS.SMALL) {
      valor = io.sentry.SentryOptions.RequestSize.SMALL;
    } else if (value == EMaxRequestBodySizeNS.ALWAYS) {
      valor = io.sentry.SentryOptions.RequestSize.ALWAYS;
    } else if (value == EMaxRequestBodySizeNS.MEDIUM) {
      valor = io.sentry.SentryOptions.RequestSize.MEDIUM;
    } else if (value == EMaxRequestBodySizeNS.NONE) {
      valor = io.sentry.SentryOptions.RequestSize.NONE;
    }
    this.config.setMaxRequestBodySize(valor);
    this.printf('setMaxRequestBodySize');
  }

  set maxSpans(value: number) {
    this.config.setMaxSpans(value);
    this.printf('setMaxSpans');
  }

  set maxTraceFileSize(value: number) {
    this.config.setMaxTraceFileSize(value);
    this.printf('setMaxTraceFileSize');
  }

  set printUncaughtStackTrace(value: boolean) {
    this.config.setPrintUncaughtStackTrace(value);
    this.printf('setPrintUncaughtStackTrace');
  }

  set profilesSampleRate(value: number) {
    this.config.setProfilesSampleRate(new java.lang.Double(value));
    this.printf('setProfilesSampleRate');
  }

  set proguardUuid(value: string) {
    this.config.setProguardUuid(value);
    this.printf('setProguardUuid');
  }

  set proxy(value: IProxiSentryNS) {
    const proxi: io.sentry.SentryOptions.Proxy = new io.sentry.SentryOptions.Proxy();
    proxi.setHost(value.host);
    proxi.setPort(value.port);
    proxi.setUser(value.user);
    proxi.setPass(value.pass);
    this.config.setProxy(proxi);
    this.printf('setProxy');
  }

  set readTimeoutMillis(value: number) {
    this.config.setReadTimeoutMillis(value);
    this.printf('setReadTimeoutMillis');
  }

  set release(value: string) {
    this.config.setRelease(value);
    this.printf('setRelease');
  }

  set sampleRate(value: number) {
    this.config.setSampleRate(new java.lang.Double(value));
    this.printf('setSampleRate');
  }

  set sdkVersion(value: ISdkVersionNs) {
    this.config.setSdkVersion(new io.sentry.protocol.SdkVersion(value.name, value.version));
    this.printf('setSdkVersion');
  }

  set sendClientReports(value: boolean) {
    this.config.setSendClientReports(value);
    this.printf('setSendClientReports');
  }

  set sendDefaultPii(value: boolean) {
    this.config.setSendDefaultPii(value);
    this.printf('setSendDefaultPii');
  }

  set sentryClientName(value: string) {
    this.config.setSentryClientName(value);
    this.printf('setSentryClientName');
  }

  set serverName(value: string) {
    this.config.setServerName(value);
    this.printf('setServerName');
  }

  set sessionTrackingIntervalMillis(value: number) {
    this.config.setSessionTrackingIntervalMillis(value);
    this.printf('setSessionTrackingIntervalMillis');
  }

  set shutdownTimeoutMillis(value: number) {
    this.config.setShutdownTimeoutMillis(value);
    this.printf('setShutdownTimeoutMillis');
  }

  set sslSocketFactory(value: ISslSocketFactoryNS) {
    try {
      let sslSocketFactory = javax.net.ssl.SSLSocketFactory.getDefault();
      sslSocketFactory.createSocket(value.host, value.port);
      this.config.setSslSocketFactory(sslSocketFactory.clone());
      this.printf('setSslSocketFactory');
    } catch (error) {
      this.printf(error);
    }
  }

  set tag(value: ITagSentryNs) {
    this.config.setTag(value.key, value.value);
    this.printf('setTag');
  }

  set traceOptionsRequests(value: boolean) {
    this.config.setTraceOptionsRequests(value);
    this.printf('setTraceOptionsRequests');
  }

  set tracePropagationTargets(value: Array<String>) {
    const lista: java.util.ArrayList<string> = new java.util.ArrayList<string>();
    for (let i: number = 0; i < value.length; i++) {
      lista.add(i, value[i]);
    }
    this.config.setTracePropagationTargets(lista);
    this.printf('setTracePropagationTargets');
  }

  set tracesSampleRate(value: number) {
    this.config.setTracesSampleRate(new java.lang.Double(value));
    this.printf('setTracesSampleRate');
  }

  set viewHierarchyExporters(value: Array<string>) {
    const lista: java.util.ArrayList<string> = new java.util.ArrayList<string>();
    for (let i: number = 0; i < value.length; i++) {
      lista.add(i, value[i]);
    }
    this.config.setViewHierarchyExporters(lista);
    this.printf('setViewHierarchyExporters');
  }
  init(options: OptionsInit) {
    const that = this;
    io.sentry.Sentry.init(
      new io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>({
        configure(config: io.sentry.SentryOptions) {
          that.config = config;
          try {
            if (options.dsn.length > 4) {
              that.dsn = options.dsn;
            } else {
              that.printf(`Dsn is required`);
            }

            if (options.debug != undefined && options.debug != null) {
              that.debug = options.debug;
            }

            if (options.diagnosticLevel != undefined && options.diagnosticLevel != null) {
              that.diagnosticLevel = options.diagnosticLevel;
            }

            if (options.logger != undefined && options.logger != null) {
              that.logger = options.logger;
            }

            if (options.attachServerName != undefined && options.attachServerName != null) {
              that.attachServerName = options.attachServerName;
            }

            if (options.attachStacktrace != undefined && options.attachStacktrace != null) {
              that.attachStacktrace = options.attachStacktrace;
            }

            if (options.attachThreads != undefined && options.attachThreads != null) {
              that.attachThreads = options.attachThreads;
            }

            if (options.cacheDirPath != undefined && options.cacheDirPath != null) {
              that.cacheDirPath = options.cacheDirPath;
            }

            if (options.connectionTimeoutMillis != undefined && options.connectionTimeoutMillis != null) {
              that.connectionTimeoutMillis = options.connectionTimeoutMillis;
            }

            if (options.dist != undefined && options.dist != null) {
              that.dist = options.dist;
            }

            if (options.distinctId != undefined && options.distinctId != null) {
              that.distinctId = options.distinctId;
            }

            if (options.enableAutoSessionTracking != undefined && options.enableAutoSessionTracking != null) {
              that.enableAutoSessionTracking = options.enableAutoSessionTracking;
            }

            if (options.enableDeduplication != undefined && options.enableDeduplication != null) {
              that.enableDeduplication = options.enableDeduplication;
            }

            if (options.enableExternalConfiguration != undefined && options.enableExternalConfiguration != null) {
              that.enableExternalConfiguration = options.enableExternalConfiguration;
            }

            if (options.enableNdk != undefined && options.enableNdk != null) {
              that.enableNdk = options.enableNdk;
            }

            if (options.enableScopeSync != undefined && options.enableScopeSync != null) {
              that.enableScopeSync = options.enableScopeSync;
            }

            if (options.enableShutdownHook != undefined && options.enableShutdownHook != null) {
              that.enableShutdownHook = options.enableShutdownHook;
            }

            if (options.enableTimeToFullDisplayTracing != undefined && options.enableTimeToFullDisplayTracing != null) {
              that.enableTimeToFullDisplayTracing = options.enableTimeToFullDisplayTracing;
            }

            if (options.enableTracing != undefined && options.enableTracing != null) {
              that.enableTracing = options.enableTracing;
            }

            if (options.enableUncaughtExceptionHandler != undefined && options.enableUncaughtExceptionHandler != null) {
              that.enableUncaughtExceptionHandler = options.enableUncaughtExceptionHandler;
            }

            if (options.enableUserInteractionBreadcrumbs != undefined && options.enableUserInteractionBreadcrumbs != null) {
              that.enableUserInteractionBreadcrumbs = options.enableUserInteractionBreadcrumbs;
            }

            if (options.enableUserInteractionTracing != undefined && options.enableUserInteractionTracing != null) {
              that.enableUserInteractionTracing = options.enableUserInteractionTracing;
            }

            if (options.environment != undefined && options.environment != null) {
              that.environment = options.environment;
            }

            if (options.flushTimeoutMillis != undefined && options.flushTimeoutMillis != null) {
              that.flushTimeoutMillis = options.flushTimeoutMillis;
            }

            if (options.idleTimeout != undefined && options.idleTimeout != null) {
              that.idleTimeout = options.idleTimeout;
            }

            if (options.instrumenter != undefined && options.instrumenter != null) {
              that.instrumenter = options.instrumenter;
            }

            if (options.mainThreadChecker != undefined && options.mainThreadChecker != null) {
              that.mainThreadChecker = options.mainThreadChecker;
            }

            if (options.maxAttachmentSize != undefined && options.maxAttachmentSize != null) {
              that.maxAttachmentSize = options.maxAttachmentSize;
            }

            if (options.maxBreadcrumbs != undefined && options.maxBreadcrumbs != null) {
              that.maxBreadcrumbs = options.maxBreadcrumbs;
            }

            if (options.maxCacheItems != undefined && options.maxCacheItems != null) {
              that.maxCacheItems = options.maxCacheItems;
            }

            if (options.maxDepth != undefined && options.maxDepth != null) {
              that.maxDepth = options.maxDepth;
            }

            if (options.maxQueueSize != undefined && options.maxQueueSize != null) {
              that.maxQueueSize = options.maxQueueSize;
            }

            if (options.maxRequestBodySize != undefined && options.maxRequestBodySize != null) {
              that.maxRequestBodySize = options.maxRequestBodySize;
            }

            if (options.maxSpans != undefined && options.maxSpans != null) {
              that.maxSpans = options.maxSpans;
            }

            if (options.maxTraceFileSize !== undefined && options.maxTraceFileSize !== null) {
              that.maxTraceFileSize = options.maxTraceFileSize;
            }

            if (options.printUncaughtStackTrace !== undefined && options.printUncaughtStackTrace !== null) {
              that.printUncaughtStackTrace = options.printUncaughtStackTrace;
            }

            if (options.profilesSampleRate !== undefined && options.profilesSampleRate !== null) {
              that.profilesSampleRate = options.profilesSampleRate;
            }

            if (options.proguardUuid !== undefined && options.proguardUuid !== null && options.proguardUuid !== '') {
              that.proguardUuid = options.proguardUuid;
            }

            if (options.proxy !== undefined && options.proxy !== null) {
              that.proxy = options.proxy;
            }

            if (options.readTimeoutMillis !== undefined && options.readTimeoutMillis !== null) {
              that.readTimeoutMillis = options.readTimeoutMillis;
            }

            if (options.release !== undefined && options.release !== null && options.release !== '') {
              that.release = options.release;
            }

            if (options.sampleRate !== undefined && options.sampleRate !== null) {
              that.sampleRate = options.sampleRate;
            }

            if (options.sdkVersion !== undefined && options.sdkVersion !== null) {
              that.sdkVersion = options.sdkVersion;
            }

            if (options.sendClientReports !== undefined && options.sendClientReports !== null) {
              that.sendClientReports = options.sendClientReports;
            }

            if (options.sendDefaultPii !== undefined && options.sendDefaultPii !== null) {
              that.sendDefaultPii = options.sendDefaultPii;
            }

            if (options.sentryClientName !== undefined && options.sentryClientName !== null && options.sentryClientName !== '') {
              that.sentryClientName = options.sentryClientName;
            }

            if (options.serverName !== undefined && options.serverName !== null && options.serverName !== '') {
              that.serverName = options.serverName;
            }

            if (options.sessionTrackingIntervalMillis !== undefined && options.sessionTrackingIntervalMillis !== null) {
              that.sessionTrackingIntervalMillis = options.sessionTrackingIntervalMillis;
            }

            if (options.shutdownTimeoutMillis !== undefined && options.shutdownTimeoutMillis !== null) {
              that.shutdownTimeoutMillis = options.shutdownTimeoutMillis;
            }

            if (options.sslSocketFactory !== undefined && options.sslSocketFactory !== null) {
              that.sslSocketFactory = options.sslSocketFactory;
            }

            if (options.tag !== undefined && options.tag !== null) {
              that.tag = options.tag;
            }

            if (options.traceOptionsRequests !== undefined && options.traceOptionsRequests !== null) {
              that.traceOptionsRequests = options.traceOptionsRequests;
            }

            if (options.tracePropagationTargets !== undefined && options.tracePropagationTargets !== null) {
              that.tracePropagationTargets = options.tracePropagationTargets;
            }

            if (options.tracesSampleRate !== undefined && options.tracesSampleRate !== null) {
              that.tracesSampleRate = options.tracesSampleRate;
            }

            if (options.viewHierarchyExporters !== undefined && options.viewHierarchyExporters !== null) {
              that.viewHierarchyExporters = options.viewHierarchyExporters;
            }
          } catch (error) {
            that.printf(error);
          }
        },
      })
    );
  }

  captureException(value: any) {
    const that = this;
    try {
      const cause = new java.lang.Throwable(value.stack);
      const ex = new java.lang.Exception(value.message, cause);
      io.sentry.Sentry.captureException(ex);
    } catch (error) {
      this.printf(error);
    }
  }

  // captureEvent(value: any, callback: (...payload: any[]) => void) {
  //     const that=this;
  //     try {
  //     } catch (error) {
  //         this.printf(error)
  //         callback(error)
  //     }
  // }

  captureMessage(value: string) {
    const that = this;
    try {
      io.sentry.Sentry.captureMessage(value);
    } catch (error) {
      this.printf(error);
    }
  }
}
