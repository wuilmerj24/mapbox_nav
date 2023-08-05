declare class HTTPHeaderSanitizer extends NSObject {
  static alloc(): HTTPHeaderSanitizer; // inherited from NSObject

  static new(): HTTPHeaderSanitizer; // inherited from NSObject

  static sanitizeHeaders(headers: NSDictionary<string, string>): NSDictionary<string, string>;
}

declare class SentryMXCallStack extends NSObject {
  static alloc(): SentryMXCallStack; // inherited from NSObject

  static new(): SentryMXCallStack; // inherited from NSObject

  callStackRootFrames: NSArray<SentryMXFrame>;

  readonly flattenedRootFrames: NSArray<SentryMXFrame>;

  constructor(o: { threadAttributed: boolean; rootFrames: NSArray<SentryMXFrame> | SentryMXFrame[] });

  initWithThreadAttributedRootFrames(threadAttributed: boolean, rootFrames: NSArray<SentryMXFrame> | SentryMXFrame[]): this;
}

declare class SentryMXCallStackTree extends NSObject {
  static alloc(): SentryMXCallStackTree; // inherited from NSObject

  static fromDataError(data: NSData): SentryMXCallStackTree;

  static new(): SentryMXCallStackTree; // inherited from NSObject

  readonly callStackPerThread: boolean;

  readonly callStacks: NSArray<SentryMXCallStack>;

  constructor(o: { callStacks: NSArray<SentryMXCallStack> | SentryMXCallStack[]; callStackPerThread: boolean });

  initWithCallStacksCallStackPerThread(callStacks: NSArray<SentryMXCallStack> | SentryMXCallStack[], callStackPerThread: boolean): this;
}

declare class SentryMXFrame extends NSObject {
  static alloc(): SentryMXFrame; // inherited from NSObject

  static new(): SentryMXFrame; // inherited from NSObject

  address: number;

  binaryName: string;

  binaryUUID: NSUUID;

  readonly frames: NSArray<SentryMXFrame>;

  readonly framesIncludingSelf: NSArray<SentryMXFrame>;

  offsetIntoBinaryTextSegment: number;

  subFrames: NSArray<SentryMXFrame>;
}

declare class SentryMXManager extends NSObject implements MXMetricManagerSubscriber {
  static alloc(): SentryMXManager; // inherited from NSObject

  static new(): SentryMXManager; // inherited from NSObject

  delegate: SentryMXManagerDelegate;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { disableCrashDiagnostics: boolean });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  didReceiveDiagnosticPayloads(payloads: NSArray<MXDiagnosticPayload> | MXDiagnosticPayload[]): void;

  didReceiveMetricPayloads(payloads: NSArray<MXMetricPayload> | MXMetricPayload[]): void;

  initWithDisableCrashDiagnostics(disableCrashDiagnostics: boolean): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  pauseReports(): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  receiveReports(): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

interface SentryMXManagerDelegate {
  didReceiveCpuExceptionDiagnosticCallStackTreeTimeStampBeginTimeStampEnd(diagnostic: MXCPUExceptionDiagnostic, callStackTree: SentryMXCallStackTree, timeStampBegin: Date, timeStampEnd: Date): void;

  didReceiveCrashDiagnosticCallStackTreeTimeStampBeginTimeStampEnd(diagnostic: MXCrashDiagnostic, callStackTree: SentryMXCallStackTree, timeStampBegin: Date, timeStampEnd: Date): void;

  didReceiveDiskWriteExceptionDiagnosticCallStackTreeTimeStampBeginTimeStampEnd(diagnostic: MXDiskWriteExceptionDiagnostic, callStackTree: SentryMXCallStackTree, timeStampBegin: Date, timeStampEnd: Date): void;

  didReceiveHangDiagnosticCallStackTreeTimeStampBeginTimeStampEnd(diagnostic: MXHangDiagnostic, callStackTree: SentryMXCallStackTree, timeStampBegin: Date, timeStampEnd: Date): void;
}
declare var SentryMXManagerDelegate: {
  prototype: SentryMXManagerDelegate;
};

declare var SentryPrivateVersionNumber: number;

declare var SentryPrivateVersionString: interop.Reference<number>;

declare class SwiftDescriptor extends NSObject {
  static alloc(): SwiftDescriptor; // inherited from NSObject

  static getObjectClassName(object: any): string;

  static getSwiftErrorDescription(error: NSError): string;

  static new(): SwiftDescriptor; // inherited from NSObject
}

declare class UrlSanitized extends NSObject {
  static alloc(): UrlSanitized; // inherited from NSObject

  static new(): UrlSanitized; // inherited from NSObject

  readonly fragment: string;

  readonly query: string;

  readonly queryItems: NSArray<NSURLQueryItem>;

  readonly sanitizedUrl: string;

  static readonly SENSITIVE_DATA_SUBSTITUTE: string;

  constructor(o: { URL: NSURL });

  initWithURL(url: NSURL): this;
}
