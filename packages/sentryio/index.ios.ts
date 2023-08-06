import { Application, UnhandledErrorEventData, iOSApplication } from '@nativescript/core';
import { OptionsInit } from '.';
import { SentryioCommon } from './common';
import { EDiagnosticLevels } from './enums/diagnostic_levels';
import { EInstrumenter } from './enums/instrumenters';
import { EMaxRequestBodySizeNS } from './enums/maxRequestBodySize';
import { IProxiSentryNS } from './interfaces/proxi.sentry';
import { ISdkVersionNs } from './interfaces/sdkversionns';
import { ISslSocketFactoryNS } from './interfaces/sslSocketFactory.sentry';
import { ITagSentryNs } from './interfaces/tags.sentry';

export class Sentryio extends SentryioCommon {
  private _debug: boolean;
  protected config: SentryOptions;
  constructor() {
    super();
    this.config = SentryOptions.new();
  }

  protected printf(...args: any[]) {
    if (this.debug) {
      console.log(`sentryio - ${args}`);
    }
  }

  set dsn(dsn: string) {
    this.config.dsn = dsn;
    this.printf('setDsn');
  }

  set debug(value: boolean) {
    if (value != null || value != undefined) {
      this._debug = value;
      this.config.debug = value;
      this.printf('setDebug');
    }
  }

  get debug(): boolean {
    return this._debug;
  }

  set attachServerName(value: boolean) {
    this.printf('attachServerName only android');
  }

  set attachStacktrace(value: boolean) {
    this.config.attachStacktrace = value;
    this.printf('setAttachStacktrace');
  }

  set attachThreads(value: boolean) {
    this.printf('setAttachThreads only android');
  }

  set cacheDirPath(value: string) {
    this.printf('setCacheDirPath only android');
  }

  set connectionTimeoutMillis(value: number) {
    this.printf('setConnectionTimeoutMillis only android');
  }

  set diagnosticLevel(value: EDiagnosticLevels) {
    let level: SentryLevel;
    if (value == EDiagnosticLevels.DEBUG) {
      level = SentryLevel.kSentryLevelDebug;
    } else if (value == EDiagnosticLevels.ERROR) {
      level = SentryLevel.kSentryLevelError;
    } else if (value == EDiagnosticLevels.FATAL) {
      level = SentryLevel.kSentryLevelFatal;
    } else if (value == EDiagnosticLevels.INFO) {
      level = SentryLevel.kSentryLevelInfo;
    } else if (value == EDiagnosticLevels.WARNING) {
      level = SentryLevel.kSentryLevelWarning;
    } else {
      level = SentryLevel.kSentryLevelNone;
    }

    this.config.diagnosticLevel = level;
    this.printf('setDiagnosticLevel');
  }

  set dist(value: string) {
    this.config.dist = value;
    this.printf('setDist');
  }

  set distinctId(value: string) {
    this.printf('setDistinctId only android');
  }

  set enableAutoSessionTracking(value: boolean) {
    this.config.enableAutoSessionTracking = value;
    this.printf('setEnableAutoSessionTracking');
  }

  set enableDeduplication(value: boolean) {
    this.printf('setEnableDeduplication only android');
  }

  set enableExternalConfiguration(value: boolean) {
    this.printf('setEnableExternalConfiguration only android');
  }

  set enableNdk(value: boolean) {
    this.printf('setEnableNdk only android');
  }

  set enableScopeSync(value: boolean) {
    this.printf('setEnableScopeSync only android');
  }

  set enableShutdownHook(value: boolean) {
    this.printf('setEnableShutdownHook only android');
  }

  set enableTimeToFullDisplayTracing(value: boolean) {
    this.config.enableTimeToFullDisplayTracing = value;
    this.printf('setEnableTimeToFullDisplayTracing');
  }

  set enableTracing(value: boolean) {
    this.config.enableTracing = value;
    this.printf('setEnableTracing');
  }

  set enableUncaughtExceptionHandler(value: boolean) {
    this.printf('setEnableUncaughtExceptionHandler only android');
  }

  set enableUserInteractionBreadcrumbs(value: boolean) {
    this.printf('setEnableUserInteractionBreadcrumbs only android');
  }

  set enableUserInteractionTracing(value: boolean) {
    this.config.enableUserInteractionTracing = value;
    this.printf('setEnableUserInteractionTracing');
  }

  set environment(value: string) {
    this.config.environment = value;
    this.printf('setEnvironment');
  }

  set flushTimeoutMillis(value: number) {
    this.printf('setFlushTimeoutMillis only android');
  }

  set idleTimeout(value: number) {
    this.config.idleTimeout = value;
    this.printf('setIdleTimeout');
  }

  set instrumenter(value: EInstrumenter) {
    this.printf('setInstrumenter only android');
  }

  set logger(value: boolean) {
    this.printf('logger only android');
  }

  set mainThreadChecker(value: boolean) {
    this.printf('mainThreadChecker only android');
  }

  set maxAttachmentSize(value: number) {
    this.config.maxAttachmentSize = value;
    this.printf('maxAttachmentSize');
  }

  set maxBreadcrumbs(value: number) {
    this.config.maxBreadcrumbs = value;
    this.printf('setMaxBreadcrumbs');
  }

  set maxCacheItems(value: number) {
    this.config.maxCacheItems = value;
    this.printf('maxCacheItems');
  }

  set maxDepth(value: number) {
    this.printf('maxDepth only android');
  }

  set maxQueueSize(value: number) {
    this.printf('setMaxQueueSize only android');
  }

  set maxRequestBodySize(value: EMaxRequestBodySizeNS) {
    this.printf('setMaxRequestBodySize only android');
  }

  set maxSpans(value: number) {
    this.printf('setMaxSpans only android');
  }

  set maxTraceFileSize(value: number) {
    this.printf('setMaxTraceFileSize only android');
  }

  set printUncaughtStackTrace(value: boolean) {
    this.printf('setPrintUncaughtStackTrace only android');
  }

  set profilesSampleRate(value: number) {
    this.config.profilesSampleRate = value;
    this.printf('setProfilesSampleRate');
  }

  set proguardUuid(value: string) {
    this.printf('setProguardUuid only android');
  }

  set proxy(value: IProxiSentryNS) {
    this.printf('setProxy only android');
  }

  set readTimeoutMillis(value: number) {
    this.printf('setReadTimeoutMillis only android');
  }

  set release(value: string) {
    this.config.releaseName = value;
    this.printf('setRelease');
  }

  set sampleRate(value: number) {
    this.config.sampleRate = value;
    this.printf('setSampleRate');
  }

  set sdkVersion(value: ISdkVersionNs) {
    this.printf('setSdkVersion only android');
  }

  set sendClientReports(value: boolean) {
    this.config.sendClientReports = value;
    this.printf('setSendClientReports');
  }

  set sendDefaultPii(value: boolean) {
    this.config.sendDefaultPii = value;
    this.printf('setSendDefaultPii');
  }

  set sentryClientName(value: string) {
    this.printf('setSentryClientName only android');
  }

  set serverName(value: string) {
    this.printf('setServerName only android');
  }

  set sessionTrackingIntervalMillis(value: number) {
    this.config.sessionTrackingIntervalMillis = value;
    this.printf('setSessionTrackingIntervalMillis');
  }

  set shutdownTimeoutMillis(value: number) {
    this.config.shutdownTimeInterval = value;
    this.printf('setShutdownTimeoutMillis');
  }

  set sslSocketFactory(value: ISslSocketFactoryNS) {
    this.printf('setSslSocketFactory only android');
  }

  set tag(value: ITagSentryNs) {
    this.printf('setTag only android');
  }

  set traceOptionsRequests(value: boolean) {
    this.config.enableCaptureFailedRequests = value;
    this.printf('setTraceOptionsRequests');
  }

  set tracePropagationTargets(value: Array<string>) {
    const lista: NSArray<any> = NSArray.new();
    for (let i: number = 0; i < value.length; i++) {
      lista.setValueForKey('value', value[i]);
    }
    this.config.tracePropagationTargets = lista;
    this.printf('setTracePropagationTargets');
  }

  set tracesSampleRate(value: number) {
    this.config.tracesSampleRate = value;
    this.printf('setTracesSampleRate');
  }

  set viewHierarchyExporters(value: Array<string>) {
    this.printf('setViewHierarchyExporters only android');
  }

  init(options: OptionsInit) {
    const that = this;

    SentrySDK.startWithConfigureOptions((config: SentryOptions) => {
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
      const sentryEvent: SentryEvent = SentryEvent.new();

      config.beforeSend(sentryEvent);
    });
  }

  captureException(value: string) {
    try {
      const exception = NSException.exceptionWithNameReasonUserInfo('error', value, null);
      SentrySDK.captureException(exception);
    } catch (error) {
      this.printf(error);
    }
  }

  captureMessage(value: string) {
    SentrySDK.captureMessage(value);
  }
}
