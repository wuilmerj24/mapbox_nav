declare function NSErrorFromSentryError(error: SentryError, description: string): NSError;

declare function NSErrorFromSentryErrorWithException(error: SentryError, description: string, exception: NSException): NSError;

declare function NSErrorFromSentryErrorWithKernelError(error: SentryError, description: string, kernelErrorCode: number): NSError;

declare function NSErrorFromSentryErrorWithUnderlyingError(error: SentryError, description: string, underlyingError: NSError): NSError;

declare class SentryAttachment extends NSObject {
  static alloc(): SentryAttachment; // inherited from NSObject

  static new(): SentryAttachment; // inherited from NSObject

  readonly contentType: string;

  readonly data: NSData;

  readonly filename: string;

  readonly path: string;

  constructor(o: { data: NSData; filename: string });

  constructor(o: { data: NSData; filename: string; contentType: string });

  constructor(o: { path: string });

  constructor(o: { path: string; filename: string });

  constructor(o: { path: string; filename: string; contentType: string });

  initWithDataFilename(data: NSData, filename: string): this;

  initWithDataFilenameContentType(data: NSData, filename: string, contentType: string): this;

  initWithPath(path: string): this;

  initWithPathFilename(path: string, filename: string): this;

  initWithPathFilenameContentType(path: string, filename: string, contentType: string): this;
}

declare class SentryBreadcrumb extends NSObject implements SentrySerializable {
  static alloc(): SentryBreadcrumb; // inherited from NSObject

  static new(): SentryBreadcrumb; // inherited from NSObject

  category: string;

  data: NSDictionary<string, any>;

  level: SentryLevel;

  message: string;

  timestamp: Date;

  type: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { level: SentryLevel; category: string });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  hash(): number;

  initWithLevelCategory(level: SentryLevel, category: string): this;

  isEqual(object: any): boolean;

  isEqualToBreadcrumb(breadcrumb: SentryBreadcrumb): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryClient extends NSObject {
  static alloc(): SentryClient; // inherited from NSObject

  static new(): SentryClient; // inherited from NSObject

  readonly isEnabled: boolean;

  options: SentryOptions;

  constructor(o: { options: SentryOptions });

  captureError(error: NSError): SentryId;

  captureErrorWithScope(error: NSError, scope: SentryScope): SentryId;

  captureEvent(event: SentryEvent): SentryId;

  captureEventWithScope(event: SentryEvent, scope: SentryScope): SentryId;

  captureException(exception: NSException): SentryId;

  captureExceptionWithScope(exception: NSException, scope: SentryScope): SentryId;

  captureMessage(message: string): SentryId;

  captureMessageWithScope(message: string, scope: SentryScope): SentryId;

  captureUserFeedback(userFeedback: SentryUserFeedback): void;

  close(): void;

  flush(timeout: number): void;

  initWithOptions(options: SentryOptions): this;
}

declare class SentryCrashExceptionApplication extends NSObject {
  static alloc(): SentryCrashExceptionApplication; // inherited from NSObject

  static new(): SentryCrashExceptionApplication; // inherited from NSObject
}

declare class SentryDebugImageProvider extends NSObject {
  static alloc(): SentryDebugImageProvider; // inherited from NSObject

  static new(): SentryDebugImageProvider; // inherited from NSObject

  getDebugImages(): NSArray<SentryDebugMeta>;

  getDebugImagesCrashed(isCrash: boolean): NSArray<SentryDebugMeta>;

  getDebugImagesForFrames(frames: NSArray<SentryFrame> | SentryFrame[]): NSArray<SentryDebugMeta>;

  getDebugImagesForFramesIsCrash(frames: NSArray<SentryFrame> | SentryFrame[], isCrash: boolean): NSArray<SentryDebugMeta>;

  getDebugImagesForThreads(threads: NSArray<SentryThread> | SentryThread[]): NSArray<SentryDebugMeta>;

  getDebugImagesForThreadsIsCrash(threads: NSArray<SentryThread> | SentryThread[], isCrash: boolean): NSArray<SentryDebugMeta>;
}

declare class SentryDebugMeta extends NSObject implements SentrySerializable {
  static alloc(): SentryDebugMeta; // inherited from NSObject

  static new(): SentryDebugMeta; // inherited from NSObject

  codeFile: string;

  debugID: string;

  imageAddress: string;

  imageSize: number;

  imageVmAddress: string;

  name: string;

  type: string;

  uuid: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryDsn extends NSObject {
  static alloc(): SentryDsn; // inherited from NSObject

  static new(): SentryDsn; // inherited from NSObject

  readonly url: NSURL;

  constructor(o: { string: string });

  getEnvelopeEndpoint(): NSURL;

  getHash(): string;

  getStoreEndpoint(): NSURL;

  initWithStringDidFailWithError(dsnString: string): this;
}

declare class SentryEnvelopeItemHeader extends NSObject implements SentrySerializable {
  static alloc(): SentryEnvelopeItemHeader; // inherited from NSObject

  static new(): SentryEnvelopeItemHeader; // inherited from NSObject

  readonly contentType: string;

  readonly filename: string;

  readonly length: number;

  readonly type: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { type: string; length: number });

  constructor(o: { type: string; length: number; filenname: string; contentType: string });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithTypeLength(type: string, length: number): this;

  initWithTypeLengthFilennameContentType(type: string, length: number, filename: string, contentType: string): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare const enum SentryError {
  kSentryErrorUnknownError = -1,

  kSentryErrorInvalidDsnError = 100,

  kSentryErrorSentryCrashNotInstalledError = 101,

  kSentryErrorInvalidCrashReportError = 102,

  kSentryErrorCompressionError = 103,

  kSentryErrorJsonConversionError = 104,

  kSentryErrorCouldNotFindDirectory = 105,

  kSentryErrorRequestError = 106,

  kSentryErrorEventNotSent = 107,

  kSentryErrorFileIO = 108,

  kSentryErrorKernel = 109,
}

declare var SentryErrorDomain: string;

declare class SentryEvent extends NSObject implements SentrySerializable {
  static alloc(): SentryEvent; // inherited from NSObject

  static new(): SentryEvent; // inherited from NSObject

  breadcrumbs: NSArray<SentryBreadcrumb>;

  context: NSDictionary<string, NSDictionary<string, any>>;

  debugMeta: NSArray<SentryDebugMeta>;

  dist: string;

  environment: string;

  error: NSError;

  eventId: SentryId;

  exceptions: NSArray<SentryException>;

  extra: NSDictionary<string, any>;

  fingerprint: NSArray<string>;

  level: SentryLevel;

  logger: string;

  message: SentryMessage;

  modules: NSDictionary<string, string>;

  platform: string;

  releaseName: string;

  request: SentryRequest;

  sdk: NSDictionary<string, any>;

  serverName: string;

  stacktrace: SentryStacktrace;

  startTimestamp: Date;

  tags: NSDictionary<string, string>;

  threads: NSArray<SentryThread>;

  timestamp: Date;

  transaction: string;

  type: string;

  user: SentryUser;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { error: NSError });

  constructor(o: { level: SentryLevel });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithError(error: NSError): this;

  initWithLevel(level: SentryLevel): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryException extends NSObject implements SentrySerializable {
  static alloc(): SentryException; // inherited from NSObject

  static new(): SentryException; // inherited from NSObject

  mechanism: SentryMechanism;

  module: string;

  stacktrace: SentryStacktrace;

  threadId: number;

  type: string;

  value: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { value: string; type: string });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithValueType(value: string, type: string): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryFrame extends NSObject implements SentrySerializable {
  static alloc(): SentryFrame; // inherited from NSObject

  static new(): SentryFrame; // inherited from NSObject

  columnNumber: number;

  fileName: string;

  function: string;

  imageAddress: string;

  inApp: number;

  instruction: number;

  instructionAddress: string;

  lineNumber: number;

  module: string;

  package: string;

  platform: string;

  stackStart: number;

  symbolAddress: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryGeo extends NSObject implements NSCopying, SentrySerializable {
  static alloc(): SentryGeo; // inherited from NSObject

  static new(): SentryGeo; // inherited from NSObject

  city: string;

  countryCode: string;

  region: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

  hash(): number;

  isEqual(object: any): boolean;

  isEqualToGeo(geo: SentryGeo): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryHttpStatusCodeRange extends NSObject {
  static alloc(): SentryHttpStatusCodeRange; // inherited from NSObject

  static new(): SentryHttpStatusCodeRange; // inherited from NSObject

  readonly max: number;

  readonly min: number;

  constructor(o: { min: number; max: number });

  constructor(o: { statusCode: number });

  initWithMinMax(min: number, max: number): this;

  initWithStatusCode(statusCode: number): this;
}

declare class SentryHub extends NSObject {
  static alloc(): SentryHub; // inherited from NSObject

  static new(): SentryHub; // inherited from NSObject

  readonly scope: SentryScope;

  constructor(o: { client: SentryClient; andScope: SentryScope });

  addBreadcrumb(crumb: SentryBreadcrumb): void;

  bindClient(client: SentryClient): void;

  captureError(error: NSError): SentryId;

  captureErrorWithScope(error: NSError, scope: SentryScope): SentryId;

  captureEvent(event: SentryEvent): SentryId;

  captureEventWithScope(event: SentryEvent, scope: SentryScope): SentryId;

  captureException(exception: NSException): SentryId;

  captureExceptionWithScope(exception: NSException, scope: SentryScope): SentryId;

  captureMessage(message: string): SentryId;

  captureMessageWithScope(message: string, scope: SentryScope): SentryId;

  captureUserFeedback(userFeedback: SentryUserFeedback): void;

  close(): void;

  configureScope(callback: (p1: SentryScope) => void): void;

  endSession(): void;

  endSessionWithTimestamp(timestamp: Date): void;

  flush(timeout: number): void;

  getClient(): SentryClient;

  hasIntegration(integrationName: string): boolean;

  initWithClientAndScope(client: SentryClient, scope: SentryScope): this;

  isIntegrationInstalled(integrationClass: typeof NSObject): boolean;

  reportFullyDisplayed(): void;

  setUser(user: SentryUser): void;

  startSession(): void;

  startTransactionWithContext(transactionContext: SentryTransactionContext): SentrySpan;

  startTransactionWithContextBindToScope(transactionContext: SentryTransactionContext, bindToScope: boolean): SentrySpan;

  startTransactionWithContextBindToScopeCustomSamplingContext(transactionContext: SentryTransactionContext, bindToScope: boolean, customSamplingContext: NSDictionary<string, any>): SentrySpan;

  startTransactionWithContextCustomSamplingContext(transactionContext: SentryTransactionContext, customSamplingContext: NSDictionary<string, any>): SentrySpan;

  startTransactionWithNameOperation(name: string, operation: string): SentrySpan;

  startTransactionWithNameOperationBindToScope(name: string, operation: string, bindToScope: boolean): SentrySpan;
}

declare class SentryId extends NSObject {
  static alloc(): SentryId; // inherited from NSObject

  static new(): SentryId; // inherited from NSObject

  readonly sentryIdString: string;

  static readonly empty: SentryId;

  constructor(o: { UUID: NSUUID });

  constructor(o: { UUIDString: string });

  initWithUUID(uuid: NSUUID): this;

  initWithUUIDString(string: string): this;
}

interface SentryIntegrationProtocol extends NSObjectProtocol {
  installWithOptions(options: SentryOptions): boolean;

  uninstall?(): void;
}
declare var SentryIntegrationProtocol: {
  prototype: SentryIntegrationProtocol;
};

declare const enum SentryLevel {
  kSentryLevelNone = 0,

  kSentryLevelDebug = 1,

  kSentryLevelInfo = 2,

  kSentryLevelWarning = 3,

  kSentryLevelError = 4,

  kSentryLevelFatal = 5,
}

declare const enum SentryLogLevel {
  kSentryLogLevelNone = 1,

  kSentryLogLevelError = 2,

  kSentryLogLevelDebug = 3,

  kSentryLogLevelVerbose = 4,
}

declare class SentryMeasurementUnit extends NSObject implements NSCopying {
  static alloc(): SentryMeasurementUnit; // inherited from NSObject

  static new(): SentryMeasurementUnit; // inherited from NSObject

  readonly unit: string;

  static readonly none: SentryMeasurementUnit;

  constructor(o: { unit: string });

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

  initWithUnit(unit: string): this;
}

declare class SentryMeasurementUnitDuration extends SentryMeasurementUnit {
  static alloc(): SentryMeasurementUnitDuration; // inherited from NSObject

  static new(): SentryMeasurementUnitDuration; // inherited from NSObject

  static readonly day: SentryMeasurementUnitDuration;

  static readonly hour: SentryMeasurementUnitDuration;

  static readonly microsecond: SentryMeasurementUnitDuration;

  static readonly millisecond: SentryMeasurementUnitDuration;

  static readonly minute: SentryMeasurementUnitDuration;

  static readonly nanosecond: SentryMeasurementUnitDuration;

  static readonly second: SentryMeasurementUnitDuration;

  static readonly week: SentryMeasurementUnitDuration;
}

declare class SentryMeasurementUnitFraction extends SentryMeasurementUnit {
  static alloc(): SentryMeasurementUnitFraction; // inherited from NSObject

  static new(): SentryMeasurementUnitFraction; // inherited from NSObject

  static readonly percent: SentryMeasurementUnitFraction;

  static readonly ratio: SentryMeasurementUnitFraction;
}

declare class SentryMeasurementUnitInformation extends SentryMeasurementUnit {
  static alloc(): SentryMeasurementUnitInformation; // inherited from NSObject

  static new(): SentryMeasurementUnitInformation; // inherited from NSObject

  static readonly bit: SentryMeasurementUnitInformation;

  static readonly byte: SentryMeasurementUnitInformation;

  static readonly exabyte: SentryMeasurementUnitInformation;

  static readonly exbibyte: SentryMeasurementUnitInformation;

  static readonly gibibyte: SentryMeasurementUnitInformation;

  static readonly gigabyte: SentryMeasurementUnitInformation;

  static readonly kibibyte: SentryMeasurementUnitInformation;

  static readonly kilobyte: SentryMeasurementUnitInformation;

  static readonly mebibyte: SentryMeasurementUnitInformation;

  static readonly megabyte: SentryMeasurementUnitInformation;

  static readonly pebibyte: SentryMeasurementUnitInformation;

  static readonly petabyte: SentryMeasurementUnitInformation;

  static readonly tebibyte: SentryMeasurementUnitInformation;

  static readonly terabyte: SentryMeasurementUnitInformation;
}

declare class SentryMechanism extends NSObject implements SentrySerializable {
  static alloc(): SentryMechanism; // inherited from NSObject

  static new(): SentryMechanism; // inherited from NSObject

  data: NSDictionary<string, any>;

  desc: string;

  handled: number;

  helpLink: string;

  meta: SentryMechanismMeta;

  synthetic: number;

  type: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { type: string });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithType(type: string): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryMechanismMeta extends NSObject implements SentrySerializable {
  static alloc(): SentryMechanismMeta; // inherited from NSObject

  static new(): SentryMechanismMeta; // inherited from NSObject

  error: SentryNSError;

  machException: NSDictionary<string, any>;

  signal: NSDictionary<string, any>;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryMessage extends NSObject implements SentrySerializable {
  static alloc(): SentryMessage; // inherited from NSObject

  static new(): SentryMessage; // inherited from NSObject

  readonly formatted: string;

  message: string;

  params: NSArray<string>;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { formatted: string });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithFormatted(formatted: string): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryNSError extends NSObject implements SentrySerializable {
  static alloc(): SentryNSError; // inherited from NSObject

  static new(): SentryNSError; // inherited from NSObject

  code: number;

  domain: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { domain: string; code: number });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithDomainCode(domain: string, code: number): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryOptions extends NSObject {
  static alloc(): SentryOptions; // inherited from NSObject

  static defaultIntegrations(): NSArray<string>;

  static new(): SentryOptions; // inherited from NSObject

  appHangTimeoutInterval: number;

  attachScreenshot: boolean;

  attachStacktrace: boolean;

  attachViewHierarchy: boolean;

  beforeBreadcrumb: (p1: SentryBreadcrumb) => SentryBreadcrumb;

  beforeSend: (p1: SentryEvent) => SentryEvent;

  debug: boolean;

  diagnosticLevel: SentryLevel;

  dist: string;

  dsn: string;

  enableAppHangTracking: boolean;

  enableAutoBreadcrumbTracking: boolean;

  enableAutoPerformanceTracing: boolean;

  enableAutoSessionTracking: boolean;

  enableCaptureFailedRequests: boolean;

  enableCoreDataTracing: boolean;

  enableCrashHandler: boolean;

  enableFileIOTracing: boolean;

  enableMetricKit: boolean;

  enableNetworkBreadcrumbs: boolean;

  enableNetworkTracking: boolean;

  enablePreWarmedAppStartTracing: boolean;

  enableProfiling: boolean;

  enableSwizzling: boolean;

  enableTimeToFullDisplayTracing: boolean;

  enableTracing: boolean;

  enableUIViewControllerTracing: boolean;

  enableUserInteractionTracing: boolean;

  enableWatchdogTerminationTracking: boolean;

  enabled: boolean;

  environment: string;

  failedRequestStatusCodes: NSArray<SentryHttpStatusCodeRange>;

  failedRequestTargets: NSArray<any>;

  idleTimeout: number;

  readonly inAppExcludes: NSArray<string>;

  readonly inAppIncludes: NSArray<string>;

  initialScope: (p1: SentryScope) => SentryScope;

  integrations: NSArray<string>;

  readonly isProfilingEnabled: boolean;

  readonly isTracingEnabled: boolean;

  maxAttachmentSize: number;

  maxBreadcrumbs: number;

  maxCacheItems: number;

  onCrashedLastRun: (p1: SentryEvent) => void;

  parsedDsn: SentryDsn;

  profilesSampleRate: number;

  profilesSampler: (p1: SentrySamplingContext) => number;

  releaseName: string;

  sampleRate: number;

  sendClientReports: boolean;

  sendDefaultPii: boolean;

  sessionTrackingIntervalMillis: number;

  shutdownTimeInterval: number;

  swiftAsyncStacktraces: boolean;

  tracePropagationTargets: NSArray<any>;

  tracesSampleRate: number;

  tracesSampler: (p1: SentrySamplingContext) => number;

  urlSessionDelegate: NSURLSessionDelegate;

  addInAppExclude(inAppExclude: string): void;

  addInAppInclude(inAppInclude: string): void;
}

declare class SentryRequest extends NSObject implements SentrySerializable {
  static alloc(): SentryRequest; // inherited from NSObject

  static new(): SentryRequest; // inherited from NSObject

  bodySize: number;

  cookies: string;

  fragment: string;

  headers: NSDictionary<string, string>;

  method: string;

  queryString: string;

  url: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentrySDK extends NSObject {
  static addBreadcrumb(crumb: SentryBreadcrumb): void;

  static alloc(): SentrySDK; // inherited from NSObject

  static captureError(error: NSError): SentryId;

  static captureErrorWithScope(error: NSError, scope: SentryScope): SentryId;

  static captureErrorWithScopeBlock(error: NSError, block: (p1: SentryScope) => void): SentryId;

  static captureEvent(event: SentryEvent): SentryId;

  static captureEventWithScope(event: SentryEvent, scope: SentryScope): SentryId;

  static captureEventWithScopeBlock(event: SentryEvent, block: (p1: SentryScope) => void): SentryId;

  static captureException(exception: NSException): SentryId;

  static captureExceptionWithScope(exception: NSException, scope: SentryScope): SentryId;

  static captureExceptionWithScopeBlock(exception: NSException, block: (p1: SentryScope) => void): SentryId;

  static captureMessage(message: string): SentryId;

  static captureMessageWithScope(message: string, scope: SentryScope): SentryId;

  static captureMessageWithScopeBlock(message: string, block: (p1: SentryScope) => void): SentryId;

  static captureUserFeedback(userFeedback: SentryUserFeedback): void;

  static close(): void;

  static configureScope(callback: (p1: SentryScope) => void): void;

  static crash(): void;

  static endSession(): void;

  static flush(timeout: number): void;

  static new(): SentrySDK; // inherited from NSObject

  static reportFullyDisplayed(): void;

  static setUser(user: SentryUser): void;

  static startSession(): void;

  static startTransactionWithContext(transactionContext: SentryTransactionContext): SentrySpan;

  static startTransactionWithContextBindToScope(transactionContext: SentryTransactionContext, bindToScope: boolean): SentrySpan;

  static startTransactionWithContextBindToScopeCustomSamplingContext(transactionContext: SentryTransactionContext, bindToScope: boolean, customSamplingContext: NSDictionary<string, any>): SentrySpan;

  static startTransactionWithContextCustomSamplingContext(transactionContext: SentryTransactionContext, customSamplingContext: NSDictionary<string, any>): SentrySpan;

  static startTransactionWithNameOperation(name: string, operation: string): SentrySpan;

  static startTransactionWithNameOperationBindToScope(name: string, operation: string, bindToScope: boolean): SentrySpan;

  static startWithConfigureOptions(configureOptions: (p1: SentryOptions) => void): void;

  static startWithOptions(options: SentryOptions): void;

  static readonly crashedLastRun: boolean;

  static readonly isEnabled: boolean;

  static readonly span: SentrySpan;
}

declare const enum SentrySampleDecision {
  kSentrySampleDecisionUndecided = 0,

  kSentrySampleDecisionYes = 1,

  kSentrySampleDecisionNo = 2,
}

declare class SentrySamplingContext extends NSObject {
  static alloc(): SentrySamplingContext; // inherited from NSObject

  static new(): SentrySamplingContext; // inherited from NSObject

  readonly customSamplingContext: NSDictionary<string, any>;

  readonly transactionContext: SentryTransactionContext;

  constructor(o: { transactionContext: SentryTransactionContext });

  constructor(o: { transactionContext: SentryTransactionContext; customSamplingContext: NSDictionary<string, any> });

  initWithTransactionContext(transactionContext: SentryTransactionContext): this;

  initWithTransactionContextCustomSamplingContext(transactionContext: SentryTransactionContext, customSamplingContext: NSDictionary<string, any>): this;
}

declare class SentryScope extends NSObject implements SentrySerializable {
  static alloc(): SentryScope; // inherited from NSObject

  static new(): SentryScope; // inherited from NSObject

  span: SentrySpan;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { maxBreadcrumbs: number });

  constructor(o: { scope: SentryScope });

  add(crumb: SentryBreadcrumb): void;

  addAttachment(attachment: SentryAttachment): void;

  addBreadcrumb(crumb: SentryBreadcrumb): void;

  class(): typeof NSObject;

  clear(): void;

  clearAttachments(): void;

  clearBreadcrumbs(): void;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  includeAttachment(attachment: SentryAttachment): void;

  initWithMaxBreadcrumbs(maxBreadcrumbs: number): this;

  initWithScope(scope: SentryScope): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  removeContextForKey(key: string): void;

  removeExtraForKey(key: string): void;

  removeTagForKey(key: string): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;

  setContextValueForKey(value: NSDictionary<string, any>, key: string): void;

  setDist(dist: string): void;

  setEnvironment(environment: string): void;

  setExtraValueForKey(value: any, key: string): void;

  setExtras(extras: NSDictionary<string, any>): void;

  setFingerprint(fingerprint: NSArray<string> | string[]): void;

  setLevel(level: SentryLevel): void;

  setTagValueForKey(value: string, key: string): void;

  setTags(tags: NSDictionary<string, string>): void;

  setUser(user: SentryUser): void;

  useSpan(callback: (p1: SentrySpan) => void): void;
}

interface SentrySerializable extends NSObjectProtocol {
  serialize(): NSDictionary<string, any>;
}
declare var SentrySerializable: {
  prototype: SentrySerializable;
};

interface SentrySpan extends SentrySerializable {
  data: NSDictionary<string, any>;

  isFinished: boolean;

  operation: string;

  origin: string;

  parentSpanId: SentrySpanId;

  sampled: SentrySampleDecision;

  spanDescription: string;

  spanId: SentrySpanId;

  startTimestamp: Date;

  status: SentrySpanStatus;

  tags: NSDictionary<string, string>;

  timestamp: Date;

  traceId: SentryId;

  finish(): void;

  finishWithStatus(status: SentrySpanStatus): void;

  removeDataForKey(key: string): void;

  removeTagForKey(key: string): void;

  setDataValueForKey(value: any, key: string): void;

  setExtraValueForKey(value: any, key: string): void;

  setMeasurementValue(name: string, value: number): void;

  setMeasurementValueUnit(name: string, value: number, unit: SentryMeasurementUnit): void;

  setTagValueForKey(value: string, key: string): void;

  startChildWithOperation(operation: string): SentrySpan;

  startChildWithOperationDescription(operation: string, description: string): SentrySpan;

  toTraceHeader(): SentryTraceHeader;
}
declare var SentrySpan: {
  prototype: SentrySpan;
};

declare class SentrySpanContext extends NSObject implements SentrySerializable {
  static alloc(): SentrySpanContext; // inherited from NSObject

  static new(): SentrySpanContext; // inherited from NSObject

  readonly operation: string;

  origin: string;

  readonly parentSpanId: SentrySpanId;

  readonly sampled: SentrySampleDecision;

  readonly spanDescription: string;

  readonly spanId: SentrySpanId;

  readonly traceId: SentryId;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { operation: string });

  constructor(o: { operation: string; sampled: SentrySampleDecision });

  constructor(o: { traceId: SentryId; spanId: SentrySpanId; parentId: SentrySpanId; operation: string; sampled: SentrySampleDecision });

  constructor(o: { traceId: SentryId; spanId: SentrySpanId; parentId: SentrySpanId; operation: string; spanDescription: string; sampled: SentrySampleDecision });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithOperation(operation: string): this;

  initWithOperationSampled(operation: string, sampled: SentrySampleDecision): this;

  initWithTraceIdSpanIdParentIdOperationSampled(traceId: SentryId, spanId: SentrySpanId, parentId: SentrySpanId, operation: string, sampled: SentrySampleDecision): this;

  initWithTraceIdSpanIdParentIdOperationSpanDescriptionSampled(traceId: SentryId, spanId: SentrySpanId, parentId: SentrySpanId, operation: string, description: string, sampled: SentrySampleDecision): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentrySpanId extends NSObject implements NSCopying {
  static alloc(): SentrySpanId; // inherited from NSObject

  static new(): SentrySpanId; // inherited from NSObject

  readonly sentrySpanIdString: string;

  static readonly empty: SentrySpanId;

  constructor(o: { UUID: NSUUID });

  constructor(o: { value: string });

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

  initWithUUID(uuid: NSUUID): this;

  initWithValue(value: string): this;
}

declare const enum SentrySpanStatus {
  kSentrySpanStatusUndefined = 0,

  kSentrySpanStatusOk = 1,

  kSentrySpanStatusDeadlineExceeded = 2,

  kSentrySpanStatusUnauthenticated = 3,

  kSentrySpanStatusPermissionDenied = 4,

  kSentrySpanStatusNotFound = 5,

  kSentrySpanStatusResourceExhausted = 6,

  kSentrySpanStatusInvalidArgument = 7,

  kSentrySpanStatusUnimplemented = 8,

  kSentrySpanStatusUnavailable = 9,

  kSentrySpanStatusInternalError = 10,

  kSentrySpanStatusUnknownError = 11,

  kSentrySpanStatusCancelled = 12,

  kSentrySpanStatusAlreadyExists = 13,

  kSentrySpanStatusFailedPrecondition = 14,

  kSentrySpanStatusAborted = 15,

  kSentrySpanStatusOutOfRange = 16,

  kSentrySpanStatusDataLoss = 17,
}

declare class SentryStacktrace extends NSObject implements SentrySerializable {
  static alloc(): SentryStacktrace; // inherited from NSObject

  static new(): SentryStacktrace; // inherited from NSObject

  frames: NSArray<SentryFrame>;

  registers: NSDictionary<string, string>;

  snapshot: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { frames: NSArray<SentryFrame> | SentryFrame[]; registers: NSDictionary<string, string> });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  fixDuplicateFrames(): void;

  initWithFramesRegisters(frames: NSArray<SentryFrame> | SentryFrame[], registers: NSDictionary<string, string>): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryThread extends NSObject implements SentrySerializable {
  static alloc(): SentryThread; // inherited from NSObject

  static new(): SentryThread; // inherited from NSObject

  crashed: number;

  current: number;

  isMain: number;

  name: string;

  stacktrace: SentryStacktrace;

  threadId: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { threadId: number });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithThreadId(threadId: number): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryTraceHeader extends NSObject {
  static alloc(): SentryTraceHeader; // inherited from NSObject

  static new(): SentryTraceHeader; // inherited from NSObject

  readonly sampled: SentrySampleDecision;

  readonly spanId: SentrySpanId;

  readonly traceId: SentryId;

  constructor(o: { traceId: SentryId; spanId: SentrySpanId; sampled: SentrySampleDecision });

  initWithTraceIdSpanIdSampled(traceId: SentryId, spanId: SentrySpanId, sampled: SentrySampleDecision): this;

  value(): string;
}

declare class SentryTransactionContext extends SentrySpanContext {
  static alloc(): SentryTransactionContext; // inherited from NSObject

  static new(): SentryTransactionContext; // inherited from NSObject

  readonly name: string;

  readonly nameSource: SentryTransactionNameSource;

  parentSampled: SentrySampleDecision;

  sampleRate: number;

  constructor(o: { name: string; operation: string });

  constructor(o: { name: string; operation: string; sampled: SentrySampleDecision });

  constructor(o: { name: string; operation: string; traceId: SentryId; spanId: SentrySpanId; parentSpanId: SentrySpanId; parentSampled: SentrySampleDecision });

  initWithNameOperation(name: string, operation: string): this;

  initWithNameOperationSampled(name: string, operation: string, sampled: SentrySampleDecision): this;

  initWithNameOperationTraceIdSpanIdParentSpanIdParentSampled(name: string, operation: string, traceId: SentryId, spanId: SentrySpanId, parentSpanId: SentrySpanId, parentSampled: SentrySampleDecision): this;
}

declare const enum SentryTransactionNameSource {
  kSentryTransactionNameSourceCustom = 0,

  kSentryTransactionNameSourceUrl = 1,

  kSentryTransactionNameSourceRoute = 2,

  kSentryTransactionNameSourceView = 3,

  kSentryTransactionNameSourceComponent = 4,

  kSentryTransactionNameSourceTask = 5,
}

declare class SentryUser extends NSObject implements NSCopying, SentrySerializable {
  static alloc(): SentryUser; // inherited from NSObject

  static new(): SentryUser; // inherited from NSObject

  data: NSDictionary<string, any>;

  email: string;

  geo: SentryGeo;

  ipAddress: string;

  name: string;

  segment: string;

  userId: string;

  username: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { userId: string });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

  hash(): number;

  initWithUserId(userId: string): this;

  isEqual(object: any): boolean;

  isEqualToUser(user: SentryUser): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryUserFeedback extends NSObject implements SentrySerializable {
  static alloc(): SentryUserFeedback; // inherited from NSObject

  static new(): SentryUserFeedback; // inherited from NSObject

  comments: string;

  email: string;

  readonly eventId: SentryId;

  name: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { eventId: SentryId });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithEventId(eventId: SentryId): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare var SentryVersionNumber: number;

declare var SentryVersionNumberVar: number;

declare var SentryVersionString: interop.Reference<number>;

declare var SentryVersionStringVar: interop.Reference<number>;

declare var defaultMaxBreadcrumbs: number;

declare var kSentrySpanStatusNameAborted: string;

declare var kSentrySpanStatusNameAlreadyExists: string;

declare var kSentrySpanStatusNameCancelled: string;

declare var kSentrySpanStatusNameDataLoss: string;

declare var kSentrySpanStatusNameDeadlineExceeded: string;

declare var kSentrySpanStatusNameFailedPrecondition: string;

declare var kSentrySpanStatusNameInternalError: string;

declare var kSentrySpanStatusNameInvalidArgument: string;

declare var kSentrySpanStatusNameNotFound: string;

declare var kSentrySpanStatusNameOk: string;

declare var kSentrySpanStatusNameOutOfRange: string;

declare var kSentrySpanStatusNamePermissionDenied: string;

declare var kSentrySpanStatusNameResourceExhausted: string;

declare var kSentrySpanStatusNameUnauthenticated: string;

declare var kSentrySpanStatusNameUnavailable: string;

declare var kSentrySpanStatusNameUndefined: string;

declare var kSentrySpanStatusNameUnimplemented: string;

declare var kSentrySpanStatusNameUnknownError: string;

declare function nameForSentrySpanStatus(status: SentrySpanStatus): string;
