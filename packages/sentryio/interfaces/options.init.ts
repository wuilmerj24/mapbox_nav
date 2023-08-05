import { EDiagnosticLevels } from '../enums/diagnostic_levels';
import { EInstrumenter } from '../enums/instrumenters';
import { EMaxRequestBodySizeNS } from '../enums/maxRequestBodySize';
import { IProxiSentryNS } from '../interfaces/proxi.sentry';
import { ISdkVersionNs } from '../interfaces/sdkversionns';
import { ISslSocketFactoryNS } from '../interfaces/sslSocketFactory.sentry';
import { ITagSentryNs } from '../interfaces/tags.sentry';

export interface OptionsInit {
  dsn: string /*DSN config */;
  debug?: boolean;
  attachServerName?: boolean;
  attachStacktrace?: boolean;
  attachThreads?: boolean;
  cacheDirPath?: string;
  connectionTimeoutMillis?: number;
  diagnosticLevel?: EDiagnosticLevels;
  dist?: string;
  distinctId?: string;
  enableAutoSessionTracking?: boolean;
  enableDeduplication?: boolean;
  enableExternalConfiguration?: boolean;
  enableNdk?: boolean;
  enableScopeSync?: boolean;
  enableShutdownHook?: boolean;
  enableTimeToFullDisplayTracing?: boolean;
  enableTracing?: boolean;
  enableUncaughtExceptionHandler?: boolean;
  enableUserInteractionBreadcrumbs?: boolean;
  enableUserInteractionTracing?: boolean;
  environment?: string;
  flushTimeoutMillis?: number;
  idleTimeout?: number;
  instrumenter?: EInstrumenter;
  logger?: boolean;
  mainThreadChecker?: boolean;
  maxAttachmentSize?: number;
  maxBreadcrumbs?: number;
  maxCacheItems?: number;
  maxDepth?: number;
  maxQueueSize?: number;
  maxRequestBodySize?: EMaxRequestBodySizeNS;
  maxSpans?: number;
  maxTraceFileSize?: number;
  printUncaughtStackTrace?: boolean;
  profilesSampleRate?: number;
  proguardUuid?: string;
  proxy?: IProxiSentryNS;
  readTimeoutMillis?: number;
  release?: string;
  sampleRate?: number;
  sdkVersion?: ISdkVersionNs;
  sendClientReports?: boolean;
  sendDefaultPii?: boolean;
  sentryClientName?: string;
  serverName?: string;
  sessionTrackingIntervalMillis?: number;
  shutdownTimeoutMillis?: number;
  sslSocketFactory?: ISslSocketFactoryNS;
  tag?: ITagSentryNs;
  traceOptionsRequests?: boolean;
  tracePropagationTargets?: Array<string>;
  tracesSampleRate?: number;
  viewHierarchyExporters?: Array<string>;
  // REVIZAR
  envelopeDiskCache?: () => {};
  // REVIZAR
  envelopeReader?: () => {};
  // REVIZAR
  executorService?: () => {};
  // REVIZAR
  gestureTargetLocators?: () => {};
  // REVIZAR
  hostnameVerifier?: () => {};
  // REVIZAR
  modulesLoader?: () => {};
  // REVIZAR
  profilesSampler?: () => {};
  // REVIZAR
  serializer?: () => {};
  transactionPerformanceCollector?: () => {};
  transactionProfiler?: () => {};
  transportFactory?: () => {};
  // rebizar
  beforeBreadcrumb?: () => {};
  // rebizar
  beforeSend?: () => {};
  dateProvider?: () => {};
}
