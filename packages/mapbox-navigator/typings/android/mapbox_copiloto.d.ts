/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class AttachmentMetadata {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.AttachmentMetadata>;
          public setSize(param0: java.lang.Integer): void;
          public getCreated(): string;
          public getFormat(): string;
          public component2(): string;
          public component5(): string;
          public toString(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: string, param8: string);
          public component8(): string;
          public getSessionId(): string;
          public component4(): string;
          public getFileId(): string;
          public getStartTime(): string;
          public getType(): string;
          public hashCode(): number;
          public getSize(): java.lang.Integer;
          public component7(): java.lang.Integer;
          public component3(): string;
          public getEndTime(): string;
          public equals(param0: any): boolean;
          public component1(): string;
          public getName(): string;
          public setEndTime(param0: string): void;
          public component6(): string;
          public setStartTime(param0: string): void;
          public component9(): string;
          public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: string, param8: string): com.mapbox.navigation.copilot.AttachmentMetadata;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.BuildConfig>;
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
      export module copilot {
        export class DriveEnds extends com.mapbox.navigation.copilot.EventDTO {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.DriveEnds>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getRealDuration(): number;
          public component1(): string;
          public constructor(param0: string, param1: number);
          public component2(): number;
          public getType(): string;
          public hashCode(): number;
          public copy(param0: string, param1: number): com.mapbox.navigation.copilot.DriveEnds;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class DriveEndsEvent extends com.mapbox.navigation.copilot.HistoryEvent {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.DriveEndsEvent>;
          public component1(): com.mapbox.navigation.copilot.DriveEnds;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: com.mapbox.navigation.copilot.DriveEnds);
          public getDriveEnds(): com.mapbox.navigation.copilot.DriveEnds;
          public hashCode(): number;
          public copy(param0: com.mapbox.navigation.copilot.DriveEnds): com.mapbox.navigation.copilot.DriveEndsEvent;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export abstract class DriveEndsType {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.DriveEndsType>;
          public getType(): string;
        }
        export module DriveEndsType {
          export class ApplicationClosed extends com.mapbox.navigation.copilot.DriveEndsType {
            public static class: java.lang.Class<com.mapbox.navigation.copilot.DriveEndsType.ApplicationClosed>;
            public static INSTANCE: com.mapbox.navigation.copilot.DriveEndsType.ApplicationClosed;
            public getType(): string;
          }
          export class Arrived extends com.mapbox.navigation.copilot.DriveEndsType {
            public static class: java.lang.Class<com.mapbox.navigation.copilot.DriveEndsType.Arrived>;
            public static INSTANCE: com.mapbox.navigation.copilot.DriveEndsType.Arrived;
            public getType(): string;
          }
          export class CanceledManually extends com.mapbox.navigation.copilot.DriveEndsType {
            public static class: java.lang.Class<com.mapbox.navigation.copilot.DriveEndsType.CanceledManually>;
            public static INSTANCE: com.mapbox.navigation.copilot.DriveEndsType.CanceledManually;
            public getType(): string;
          }
          export class VehicleParked extends com.mapbox.navigation.copilot.DriveEndsType {
            public static class: java.lang.Class<com.mapbox.navigation.copilot.DriveEndsType.VehicleParked>;
            public static INSTANCE: com.mapbox.navigation.copilot.DriveEndsType.VehicleParked;
            public getType(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class EventDTO {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.EventDTO>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.copilot.EventDTO interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class GoingToBackground extends com.mapbox.navigation.copilot.EventDTO {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.GoingToBackground>;
          public static INSTANCE: com.mapbox.navigation.copilot.GoingToBackground;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class GoingToBackgroundEvent extends com.mapbox.navigation.copilot.HistoryEvent {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.GoingToBackgroundEvent>;
          public static INSTANCE: com.mapbox.navigation.copilot.GoingToBackgroundEvent;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class GoingToForeground extends com.mapbox.navigation.copilot.EventDTO {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.GoingToForeground>;
          public static INSTANCE: com.mapbox.navigation.copilot.GoingToForeground;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class GoingToForegroundEvent extends com.mapbox.navigation.copilot.HistoryEvent {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.GoingToForegroundEvent>;
          public static INSTANCE: com.mapbox.navigation.copilot.GoingToForegroundEvent;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class HistoryAttachmentsUtils {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.HistoryAttachmentsUtils>;
          public static INSTANCE: com.mapbox.navigation.copilot.HistoryAttachmentsUtils;
          public generateFilename(param0: com.mapbox.navigation.copilot.internal.CopilotMetadata): string;
          public copyToAndRemove(param0: java.io.File, param1: string, param2: any): any;
          public retrieveNavNativeSdkVersion(): string;
          public retrieveNavSdkVersion(): string;
          public retrieveOwnerFrom(param0: string): string;
          public retrieveSpecVersion(): string;
          public generateSessionId(param0: com.mapbox.navigation.copilot.internal.CopilotMetadata, param1: string): string;
          public utcTimeNow(param0: string, param1: java.util.Locale): string;
          public retrieveIsDebug(): boolean;
          public delete(param0: java.io.File): boolean;
          public size(param0: java.io.File): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export abstract class HistoryEvent {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.HistoryEvent>;
          public getSnakeCaseEventName$libnavigation_copilot_release(): string;
          public getEventDTO$libnavigation_copilot_release(): com.mapbox.navigation.copilot.EventDTO;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class HistoryEventDTO {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.HistoryEventDTO>;
          public constructor(param0: string, param1: string);
          public copy(param0: string, param1: string): com.mapbox.navigation.copilot.HistoryEventDTO;
          public equals(param0: any): boolean;
          public toString(): string;
          public component1(): string;
          public component2(): string;
          public getJson(): string;
          public getType(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class HistoryPoint {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.HistoryPoint>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getLatitude(): number;
          public getLongitude(): number;
          public component1(): number;
          public component2(): number;
          public copy(param0: number, param1: number): com.mapbox.navigation.copilot.HistoryPoint;
          public hashCode(): number;
          public constructor(param0: number, param1: number);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class HistoryRoutablePoint {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.HistoryRoutablePoint>;
          public constructor(param0: com.mapbox.navigation.copilot.HistoryPoint);
          public equals(param0: any): boolean;
          public toString(): string;
          public component1(): com.mapbox.navigation.copilot.HistoryPoint;
          public copy(param0: com.mapbox.navigation.copilot.HistoryPoint): com.mapbox.navigation.copilot.HistoryRoutablePoint;
          public hashCode(): number;
          public getCoordinates(): com.mapbox.navigation.copilot.HistoryPoint;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class HistorySearchResult {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.HistorySearchResult>;
          public getId(): string;
          public component2(): string;
          public component5(): java.util.List<com.mapbox.navigation.copilot.HistoryRoutablePoint>;
          public component3(): string;
          public getCoordinates(): com.mapbox.navigation.copilot.HistoryPoint;
          public getAddress(): string;
          public equals(param0: any): boolean;
          public toString(): string;
          public component1(): string;
          public component4(): com.mapbox.navigation.copilot.HistoryPoint;
          public getName(): string;
          public copy(param0: string, param1: string, param2: string, param3: com.mapbox.navigation.copilot.HistoryPoint, param4: java.util.List<com.mapbox.navigation.copilot.HistoryRoutablePoint>): com.mapbox.navigation.copilot.HistorySearchResult;
          public getRoutablePoint(): java.util.List<com.mapbox.navigation.copilot.HistoryRoutablePoint>;
          public constructor(param0: string, param1: string, param2: string, param3: com.mapbox.navigation.copilot.HistoryPoint, param4: java.util.List<com.mapbox.navigation.copilot.HistoryRoutablePoint>);
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class HistoryUploadWorker {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.HistoryUploadWorker>;
          public doWork(param0: any): any;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
        }
        export module HistoryUploadWorker {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.navigation.copilot.HistoryUploadWorker.Companion>;
            public uploadHistory(param0: globalAndroid.content.Context, param1: com.mapbox.navigation.copilot.internal.CopilotMetadata, param2: com.mapbox.common.UploadOptions, param3: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class InitRoute extends com.mapbox.navigation.copilot.EventDTO {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.InitRoute>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
          public component1(): string;
          public component2(): com.mapbox.api.directions.v5.models.DirectionsRoute;
          public copy(param0: string, param1: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.navigation.copilot.InitRoute;
          public constructor(param0: string, param1: com.mapbox.api.directions.v5.models.DirectionsRoute);
          public getRequestIdentifier(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class InitRouteEvent extends com.mapbox.navigation.copilot.HistoryEvent {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.InitRouteEvent>;
          public equals(param0: any): boolean;
          public component1(): com.mapbox.navigation.copilot.InitRoute;
          public toString(): string;
          public component2(): string;
          public getPreSerializedInitRoute(): string;
          public constructor(param0: com.mapbox.navigation.copilot.InitRoute, param1: string);
          public copy(param0: com.mapbox.navigation.copilot.InitRoute, param1: string): com.mapbox.navigation.copilot.InitRouteEvent;
          public getInitRoute(): com.mapbox.navigation.copilot.InitRoute;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class MapboxCopilot {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.MapboxCopilot>;
          public static INSTANCE: com.mapbox.navigation.copilot.MapboxCopilot;
          public push(param0: com.mapbox.navigation.copilot.HistoryEvent): void;
          public getPushStatusObservers$libnavigation_copilot_release(): java.util.concurrent.CopyOnWriteArraySet<com.mapbox.navigation.copilot.internal.PushStatusObserver>;
          public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
          public stop(): void;
          public start(): void;
          public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class MapboxCopilotImpl {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.MapboxCopilotImpl>;
          public static GZ: string;
          public static ZIP: string;
          public static MEDIA_TYPE_ZIP: string;
          public static LOG_CATEGORY: string;
          public push(param0: com.mapbox.navigation.copilot.HistoryEvent): void;
          public stop(): void;
          public constructor(param0: com.mapbox.navigation.core.MapboxNavigation, param1: kotlinx.coroutines.CoroutineDispatcher);
          public start(): void;
        }
        export module MapboxCopilotImpl {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.navigation.copilot.MapboxCopilotImpl.Companion>;
            public getGson$libnavigation_copilot_release(): com.google.gson.Gson;
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.mapbox.navigation.copilot.MapboxCopilotImpl.WhenMappings>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class NavFeedbackSubmitted extends com.mapbox.navigation.copilot.EventDTO {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.NavFeedbackSubmitted>;
          public copy(param0: string, param1: string, param2: java.util.Set<string>, param3: com.mapbox.navigation.copilot.HistoryPoint): com.mapbox.navigation.copilot.NavFeedbackSubmitted;
          public component2(): string;
          public getLocation(): com.mapbox.navigation.copilot.HistoryPoint;
          public getFeedbackId(): string;
          public getSubtype(): java.util.Set<string>;
          public component3(): java.util.Set<string>;
          public equals(param0: any): boolean;
          public constructor(param0: string, param1: string, param2: java.util.Set<string>, param3: com.mapbox.navigation.copilot.HistoryPoint);
          public toString(): string;
          public component1(): string;
          public component4(): com.mapbox.navigation.copilot.HistoryPoint;
          public getType(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class NavFeedbackSubmittedEvent extends com.mapbox.navigation.copilot.HistoryEvent {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.NavFeedbackSubmittedEvent>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getNavFeedbackSubmitted(): com.mapbox.navigation.copilot.NavFeedbackSubmitted;
          public constructor(param0: com.mapbox.navigation.copilot.NavFeedbackSubmitted);
          public component1(): com.mapbox.navigation.copilot.NavFeedbackSubmitted;
          public copy(param0: com.mapbox.navigation.copilot.NavFeedbackSubmitted): com.mapbox.navigation.copilot.NavFeedbackSubmittedEvent;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class SearchResultUsed extends com.mapbox.navigation.copilot.EventDTO {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.SearchResultUsed>;
          public getId(): string;
          public component2(): string;
          public component3(): string;
          public getCoordinates(): com.mapbox.navigation.copilot.HistoryPoint;
          public component5(): com.mapbox.navigation.copilot.HistoryPoint;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.mapbox.navigation.copilot.HistoryPoint, param5: java.util.List<com.mapbox.navigation.copilot.HistoryRoutablePoint>);
          public getAddress(): string;
          public equals(param0: any): boolean;
          public toString(): string;
          public component1(): string;
          public getName(): string;
          public getRoutablePoint(): java.util.List<com.mapbox.navigation.copilot.HistoryRoutablePoint>;
          public component4(): string;
          public copy(param0: string, param1: string, param2: string, param3: string, param4: com.mapbox.navigation.copilot.HistoryPoint, param5: java.util.List<com.mapbox.navigation.copilot.HistoryRoutablePoint>): com.mapbox.navigation.copilot.SearchResultUsed;
          public hashCode(): number;
          public getProvider(): string;
          public component6(): java.util.List<com.mapbox.navigation.copilot.HistoryRoutablePoint>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class SearchResultUsedEvent extends com.mapbox.navigation.copilot.HistoryEvent {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.SearchResultUsedEvent>;
          public equals(param0: any): boolean;
          public constructor(param0: com.mapbox.navigation.copilot.SearchResultUsed);
          public component1(): com.mapbox.navigation.copilot.SearchResultUsed;
          public toString(): string;
          public copy(param0: com.mapbox.navigation.copilot.SearchResultUsed): com.mapbox.navigation.copilot.SearchResultUsedEvent;
          public getSearchResultUsed(): com.mapbox.navigation.copilot.SearchResultUsed;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class SearchResults extends com.mapbox.navigation.copilot.EventDTO {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.SearchResults>;
          public component2(): string;
          public component5(): string;
          public getResponse(): string;
          public component3(): string;
          public equals(param0: any): boolean;
          public getRequest(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.List<com.mapbox.navigation.copilot.HistorySearchResult>);
          public getError(): string;
          public toString(): string;
          public component1(): string;
          public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.List<com.mapbox.navigation.copilot.HistorySearchResult>): com.mapbox.navigation.copilot.SearchResults;
          public component6(): java.util.List<com.mapbox.navigation.copilot.HistorySearchResult>;
          public getResults(): java.util.List<com.mapbox.navigation.copilot.HistorySearchResult>;
          public getSearchQuery(): string;
          public component4(): string;
          public hashCode(): number;
          public getProvider(): string;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class SearchResultsEvent extends com.mapbox.navigation.copilot.HistoryEvent {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.SearchResultsEvent>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getSearchResults(): com.mapbox.navigation.copilot.SearchResults;
          public component1(): com.mapbox.navigation.copilot.SearchResults;
          public copy(param0: com.mapbox.navigation.copilot.SearchResults): com.mapbox.navigation.copilot.SearchResultsEvent;
          public constructor(param0: com.mapbox.navigation.copilot.SearchResults);
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export class UploadServiceInterfaceFactory {
          public static class: java.lang.Class<com.mapbox.navigation.copilot.UploadServiceInterfaceFactory>;
          public static INSTANCE: com.mapbox.navigation.copilot.UploadServiceInterfaceFactory;
          public retrieveUploadServiceInterface(): com.mapbox.common.UploadServiceInterface;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export module internal {
          export class CopilotMetadata {
            public static class: java.lang.Class<com.mapbox.navigation.copilot.internal.CopilotMetadata>;
            public component5(): string;
            public getDriveMode(): string;
            public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string);
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getAppUserId(): string;
            public component9(): string;
            public component4(): string;
            public getEndedAt(): string;
            public getNavSdkVersion(): string;
            public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string): com.mapbox.navigation.copilot.internal.CopilotMetadata;
            public component10(): string;
            public component8(): string;
            public component3(): string;
            public constructor();
            public component7(): string;
            public getNavNativeSdkVersion(): string;
            public getStartedAt(): string;
            public toString(): string;
            public getAppVersion(): string;
            public component2(): string;
            public getDriveId(): string;
            public component6(): string;
            public getAppSessionId(): string;
            public getAppMode(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module copilot {
        export module internal {
          export abstract class PushStatus {
            public static class: java.lang.Class<com.mapbox.navigation.copilot.internal.PushStatus>;
            public getMetadata(): com.mapbox.navigation.copilot.internal.CopilotMetadata;
          }
          export module PushStatus {
            export class Failed extends com.mapbox.navigation.copilot.internal.PushStatus {
              public static class: java.lang.Class<com.mapbox.navigation.copilot.internal.PushStatus.Failed>;
              public constructor(param0: com.mapbox.navigation.copilot.internal.CopilotMetadata);
              public hashCode(): number;
              public getMetadata(): com.mapbox.navigation.copilot.internal.CopilotMetadata;
              public toString(): string;
              public equals(param0: any): boolean;
              public copy(param0: com.mapbox.navigation.copilot.internal.CopilotMetadata): com.mapbox.navigation.copilot.internal.PushStatus.Failed;
              public component1(): com.mapbox.navigation.copilot.internal.CopilotMetadata;
            }
            export class Success extends com.mapbox.navigation.copilot.internal.PushStatus {
              public static class: java.lang.Class<com.mapbox.navigation.copilot.internal.PushStatus.Success>;
              public constructor(param0: com.mapbox.navigation.copilot.internal.CopilotMetadata);
              public hashCode(): number;
              public copy(param0: com.mapbox.navigation.copilot.internal.CopilotMetadata): com.mapbox.navigation.copilot.internal.PushStatus.Success;
              public getMetadata(): com.mapbox.navigation.copilot.internal.CopilotMetadata;
              public toString(): string;
              public equals(param0: any): boolean;
              public component1(): com.mapbox.navigation.copilot.internal.CopilotMetadata;
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
      export module copilot {
        export module internal {
          export class PushStatusObserver {
            public static class: java.lang.Class<com.mapbox.navigation.copilot.internal.PushStatusObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.copilot.internal.PushStatusObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onPushStatusChanged(param0: com.mapbox.navigation.copilot.internal.PushStatus): void });
            public constructor();
            public onPushStatusChanged(param0: com.mapbox.navigation.copilot.internal.PushStatus): void;
          }
        }
      }
    }
  }
}

//Generics information:
