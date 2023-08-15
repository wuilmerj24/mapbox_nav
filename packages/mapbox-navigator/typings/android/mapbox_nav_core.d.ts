/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class BuildConfig {
          public static class: java.lang.Class<com.mapbox.navigation.core.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public static MAPBOX_NAVIGATION_VERSION_NAME: string;
          public static NAV_NATIVE_SDK_VERSION: string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class CopilotSessionObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.CopilotSessionObserver>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.CopilotSessionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCopilotSessionChanged(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void });
          public constructor();
          public onCopilotSessionChanged(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class DeveloperMetadata {
          public static class: java.lang.Class<com.mapbox.navigation.core.DeveloperMetadata>;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: string);
          public getCopilotSessionId(): string;
          public hashCode(): number;
          public copy$libnavigation_core_release(param0: string): com.mapbox.navigation.core.DeveloperMetadata;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class DeveloperMetadataAggregator extends com.mapbox.navigation.core.CopilotSessionObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.DeveloperMetadataAggregator>;
          public constructor(param0: string);
          public unregisterObserver(param0: com.mapbox.navigation.core.DeveloperMetadataObserver): void;
          public unregisterAllObservers(): void;
          public registerObserver(param0: com.mapbox.navigation.core.DeveloperMetadataObserver): void;
          public onCopilotSessionChanged(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class DeveloperMetadataObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.DeveloperMetadataObserver>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.DeveloperMetadataObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onDeveloperMetadataChanged(param0: com.mapbox.navigation.core.DeveloperMetadata): void });
          public constructor();
          public onDeveloperMetadataChanged(param0: com.mapbox.navigation.core.DeveloperMetadata): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class EtcGateApi {
          public static class: java.lang.Class<com.mapbox.navigation.core.EtcGateApi>;
          public updateEtcGateInfo(param0: com.mapbox.navigation.core.EtcGateInfo): void;
          public getExperimental$libnavigation_core_release(): com.mapbox.navigator.Experimental;
          public constructor(param0: com.mapbox.navigator.Experimental);
          public setExperimental$libnavigation_core_release(param0: com.mapbox.navigator.Experimental): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class EtcGateInfo {
          public static class: java.lang.Class<com.mapbox.navigation.core.EtcGateInfo>;
          public equals(param0: any): boolean;
          public toString(): string;
          public getMonotonicTimestampNanoseconds(): number;
          public getId(): number;
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
      export module core {
        export class HistoryRecordingStateHandler extends com.mapbox.navigation.core.trip.session.TripSessionStateObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.HistoryRecordingStateHandler>;
          public registerStateChangeObserver(param0: com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver): void;
          public unregisterStateChangeObserver(param0: com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver): void;
          public unregisterCopilotSessionObserver(param0: com.mapbox.navigation.core.CopilotSessionObserver): void;
          public constructor();
          public currentCopilotSession(): com.mapbox.navigation.core.internal.HistoryRecordingSessionState;
          public unregisterAllCopilotSessionObservers(): void;
          public lastSetRoutesFailed(): void;
          public setRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
          public onSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.TripSessionState): void;
          public unregisterAllStateChangeObservers(): void;
          public registerCopilotSessionObserver(param0: com.mapbox.navigation.core.CopilotSessionObserver): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class MapboxNavigation {
          public static class: java.lang.Class<com.mapbox.navigation.core.MapboxNavigation>;
          public registerRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
          public getTilesetDescriptorFactory(): com.mapbox.navigation.core.navigator.TilesetDescriptorFactory;
          public moveRoutesFromPreviewToNavigator(): void;
          public unregisterBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
          /** @deprecated */
          public setRerouteController(param0: com.mapbox.navigation.core.reroute.RerouteController): void;
          public getRoadObjectMatcher(): com.mapbox.navigation.core.trip.session.eh.RoadObjectMatcher;
          public onDestroy(): void;
          public getNavigationRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
          public unregisterRoutesPreviewObserver(param0: com.mapbox.navigation.core.preview.RoutesPreviewObserver): void;
          public requestRoadGraphDataUpdate(param0: com.mapbox.navigation.core.RoadGraphDataUpdateCallback): void;
          public registerLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
          public registerEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
          public setNavigationRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
          public getExperimental(): com.mapbox.navigator.Experimental;
          public getAlternativeMetadataFor(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>;
          public unregisterNavigationSessionStateObserver(param0: com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver): void;
          public getRoadObjectsStore(): com.mapbox.navigation.core.trip.session.eh.RoadObjectsStore;
          public onEVDataUpdated(param0: java.util.Map<string, string>): void;
          /** @deprecated */
          public resetTripSession(): void;
          public getZLevel(): java.lang.Integer;
          public setArrivalController(): void;
          public registerRouteAlternativesObserver(param0: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver): void;
          public unregisterRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
          /** @deprecated */
          public getRoutes(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
          public unregisterTripSessionStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
          /** @deprecated */
          public setRerouteController(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController): void;
          public startTripSession(): void;
          /** @deprecated */
          public setRerouteController(): void;
          public registerDeveloperMetadataObserver(param0: com.mapbox.navigation.core.DeveloperMetadataObserver): void;
          /** @deprecated */
          public setRoutes(param0: java.util.List<any>): void;
          public getNavigationSessionState(): com.mapbox.navigation.core.trip.session.NavigationSessionState;
          public cancelRouteRequest(param0: number): void;
          public requestAlternativeRoutes(): void;
          public isRunningForegroundService(): boolean;
          public requestRoutes(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
          public unregisterArrivalObserver(param0: com.mapbox.navigation.core.arrival.ArrivalObserver): void;
          public requestAlternativeRoutes(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesRequestCallback): void;
          public provideFeedbackMetadataWrapper(): com.mapbox.navigation.core.telemetry.events.FeedbackMetadataWrapper;
          public setNavigationRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: number): void;
          public unregisterDeveloperMetadataObserver(param0: com.mapbox.navigation.core.DeveloperMetadataObserver): void;
          public unregisterRoutesObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
          public getRerouteController(): com.mapbox.navigation.core.reroute.NavigationRerouteController;
          public getRouteRefreshController(): com.mapbox.navigation.core.routerefresh.RouteRefreshController;
          /** @deprecated */
          public setRoutes(param0: java.util.List<any>, param1: number): void;
          public registerRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
          public registerNavigationVersionSwitchObserver(param0: com.mapbox.navigation.core.NavigationVersionSwitchObserver): void;
          public getGraphAccessor(): com.mapbox.navigation.core.trip.session.eh.GraphAccessor;
          public getMapboxReplayer(): com.mapbox.navigation.core.replay.MapboxReplayer;
          public stopTripSession(): void;
          public requestAlternativeRoutes(param0: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesRequestCallback): void;
          public setArrivalController(param0: com.mapbox.navigation.core.arrival.ArrivalController): void;
          public constructor(param0: com.mapbox.navigation.base.options.NavigationOptions, param1: com.mapbox.navigation.utils.internal.ThreadController);
          public postUserFeedback(param0: string, param1: string, param2: string, param3: string, param4: com.mapbox.navigation.core.telemetry.events.FeedbackMetadata): void;
          public registerRoutesPreviewObserver(param0: com.mapbox.navigation.core.preview.RoutesPreviewObserver): void;
          public postUserFeedback(param0: string, param1: string, param2: string, param3: string, param4: androidNative.Array<string>): void;
          public postUserFeedback$libnavigation_core_release(param0: string, param1: string, param2: string, param3: string, param4: androidNative.Array<string>, param5: com.mapbox.navigation.core.telemetry.events.FeedbackMetadata, param6: com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback): void;
          public registerTripSessionStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
          public getNavigationOptions(): com.mapbox.navigation.base.options.NavigationOptions;
          public getAlternativeMetadataFor(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata;
          public getRoutesPreview(): com.mapbox.navigation.core.preview.RoutesPreview;
          public registerBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
          public registerOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
          public getHistoryRecorder(): com.mapbox.navigation.core.history.MapboxHistoryRecorder;
          /** @deprecated */
          public requestRoutes(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
          public unregisterEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
          public registerOnRoutesSetStartedObserver$libnavigation_core_release(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
          public unregisterLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
          public setRerouteEnabled(param0: boolean): void;
          public setNavigationRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: number, param2: com.mapbox.navigation.core.RoutesSetCallback): void;
          public isDestroyed(): boolean;
          public isRerouteEnabled(): boolean;
          public postUserFeedback(param0: string, param1: string, param2: string, param3: string, param4: androidNative.Array<string>, param5: com.mapbox.navigation.core.telemetry.events.FeedbackMetadata): void;
          public changeRoutesPreviewPrimaryRoute(param0: com.mapbox.navigation.base.route.NavigationRoute): void;
          public registerArrivalObserver(param0: com.mapbox.navigation.core.arrival.ArrivalObserver): void;
          public setRoutesPreview(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: number): void;
          public getEtcGateAPI(): com.mapbox.navigation.core.EtcGateApi;
          public postCustomEvent$libnavigation_core_release(param0: string, param1: string, param2: string): void;
          public registerVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
          public postUserFeedback(param0: string, param1: string, param2: string, param3: string): void;
          public startReplayTripSession(param0: boolean): void;
          public unregisterOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
          public registerRoutesObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
          public registerRouteAlternativesObserver(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver): void;
          public constructor(param0: com.mapbox.navigation.base.options.NavigationOptions);
          public navigateNextRouteLeg(param0: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
          public unregisterNavigationVersionSwitchObserver(param0: com.mapbox.navigation.core.NavigationVersionSwitchObserver): void;
          public startTripSession(param0: boolean): void;
          public currentLegIndex(): number;
          public unregisterRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
          public unregisterOnRoutesSetStartedObserver$libnavigation_core_release(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
          public resetTripSession(param0: com.mapbox.navigation.core.TripSessionResetCallback): void;
          public setRoutesPreview(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
          public getCopilotHistoryRecorder$libnavigation_core_release(): com.mapbox.navigation.core.history.MapboxHistoryRecorder;
          public isReplayEnabled(): boolean;
          public getTripSessionState(): com.mapbox.navigation.core.trip.session.TripSessionState;
          public unregisterRouteAlternativesObserver(param0: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver): void;
          public setRerouteOptionsAdapter(param0: com.mapbox.navigation.core.reroute.RerouteOptionsAdapter): void;
          public registerNavigationSessionStateObserver(param0: com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver): void;
          public getHistoryRecordingStateHandler$libnavigation_core_release(): com.mapbox.navigation.core.HistoryRecordingStateHandler;
          public setTripNotificationInterceptor(param0: com.mapbox.navigation.base.trip.notification.TripNotificationInterceptor): void;
          public unregisterVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
          public unregisterRouteAlternativesObserver(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver): void;
        }
        export module MapboxNavigation {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.navigation.core.MapboxNavigation.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class MapboxNavigationProvider {
          public static class: java.lang.Class<com.mapbox.navigation.core.MapboxNavigationProvider>;
          public static INSTANCE: com.mapbox.navigation.core.MapboxNavigationProvider;
          /** @deprecated */
          public static destroy(): void;
          public static isCreated(): boolean;
          /** @deprecated */
          public static create(param0: com.mapbox.navigation.base.options.NavigationOptions): com.mapbox.navigation.core.MapboxNavigation;
          /** @deprecated */
          public static retrieve(): com.mapbox.navigation.core.MapboxNavigation;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class NavigationComponentProvider {
          public static class: java.lang.Class<com.mapbox.navigation.core.NavigationComponentProvider>;
          public static INSTANCE: com.mapbox.navigation.core.NavigationComponentProvider;
          public createNativeNavigator(param0: com.mapbox.navigator.ConfigHandle, param1: com.mapbox.navigator.HistoryRecorderHandle, param2: com.mapbox.navigator.TilesConfig, param3: string, param4: com.mapbox.navigator.RouterInterface): com.mapbox.navigation.navigator.internal.MapboxNativeNavigator;
          public createRoutesCacheClearer(): com.mapbox.navigation.core.RoutesCacheClearer;
          public createHistoryRecordingStateHandler(): com.mapbox.navigation.core.HistoryRecordingStateHandler;
          public createEVDynamicDataHolder(): com.mapbox.navigation.core.ev.EVDynamicDataHolder;
          public createArrivalProgressObserver(param0: com.mapbox.navigation.core.trip.session.TripSession): com.mapbox.navigation.core.arrival.ArrivalProgressObserver;
          public createRouteRefreshRequestDataProvider(): com.mapbox.navigation.core.RoutesProgressDataProvider;
          public createDirectionsSession(param0: com.mapbox.navigation.base.internal.NavigationRouterV2): com.mapbox.navigation.core.directions.session.DirectionsSession;
          public createTripSessionLocationEngine(param0: com.mapbox.navigation.base.options.NavigationOptions): com.mapbox.navigation.core.trip.session.TripSessionLocationEngine;
          public createDeveloperMetadataAggregator(param0: com.mapbox.navigation.core.HistoryRecordingStateHandler): com.mapbox.navigation.core.DeveloperMetadataAggregator;
          public createNavigationSession(): com.mapbox.navigation.core.trip.session.NavigationSession;
          public createBillingController(param0: string, param1: com.mapbox.navigation.core.trip.session.NavigationSession, param2: com.mapbox.navigation.core.trip.session.TripSession, param3: com.mapbox.navigation.core.arrival.ArrivalProgressObserver): com.mapbox.navigation.core.accounts.BillingController;
          public createTripService(param0: globalAndroid.content.Context, param1: com.mapbox.navigation.base.trip.notification.TripNotification, param2: com.mapbox.navigation.utils.internal.ThreadController): com.mapbox.navigation.core.trip.service.TripService;
          public createTripSession(param0: com.mapbox.navigation.core.trip.service.TripService, param1: com.mapbox.navigation.core.trip.session.TripSessionLocationEngine, param2: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator, param3: com.mapbox.navigation.utils.internal.ThreadController): com.mapbox.navigation.core.trip.session.TripSession;
          public createRoutesPreviewController(param0: kotlinx.coroutines.CoroutineScope): com.mapbox.navigation.core.preview.RoutesPreviewController;
          public createRerouteController(param0: com.mapbox.navigation.core.directions.session.DirectionsSession, param1: com.mapbox.navigation.core.trip.session.TripSession, param2: com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater, param3: com.mapbox.navigation.base.options.RerouteOptions, param4: com.mapbox.navigation.utils.internal.ThreadController, param5: com.mapbox.navigation.core.ev.EVDynamicDataHolder): com.mapbox.navigation.core.reroute.InternalRerouteController;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class NavigationVersionSwitchObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.NavigationVersionSwitchObserver>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.NavigationVersionSwitchObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSwitchToFallbackVersion(param0: string): void; onSwitchToTargetVersion(param0: string): void });
          public constructor();
          public onSwitchToTargetVersion(param0: string): void;
          public onSwitchToFallbackVersion(param0: string): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoadGraphDataUpdateCallback {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoadGraphDataUpdateCallback>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.RoadGraphDataUpdateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onRoadGraphDataUpdateInfoAvailable(param0: boolean, param1: com.mapbox.navigation.core.RoadGraphVersionInfo): void });
          public constructor();
          public onRoadGraphDataUpdateInfoAvailable(param0: boolean, param1: com.mapbox.navigation.core.RoadGraphVersionInfo): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoadGraphVersionInfo {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoadGraphVersionInfo>;
          public constructor(param0: string, param1: string);
          public getDataset(): string;
          public equals(param0: any): boolean;
          public getVersion(): string;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesCacheClearer implements com.mapbox.navigation.core.directions.session.RoutesObserver, com.mapbox.navigation.core.preview.RoutesPreviewObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesCacheClearer>;
          public routesPreviewUpdated(param0: com.mapbox.navigation.core.preview.RoutesPreviewUpdate): void;
          public onRoutesChanged(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesProgressDataProvider extends com.mapbox.navigation.core.trip.session.RouteProgressObserver {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesProgressDataProvider>;
          public getRouteRefreshRequestDataOrWait(param0: any): any;
          public constructor();
          public onNewRoutes(): void;
          public onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesRefreshData {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesRefreshData>;
          public equals(param0: any): boolean;
          public component1(): com.mapbox.navigation.base.route.NavigationRoute;
          public toString(): string;
          public getPrimaryRoute(): com.mapbox.navigation.base.route.NavigationRoute;
          public getAllRoutesRefreshData(): java.util.List<any>;
          public component3(): java.util.List<any>;
          public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.core.internal.RouteProgressData, param2: java.util.List<any>);
          public copy(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.core.internal.RouteProgressData, param2: java.util.List<any>): com.mapbox.navigation.core.RoutesRefreshData;
          public getAlternativeRoutesProgressData(): java.util.List<any>;
          public component2(): com.mapbox.navigation.core.internal.RouteProgressData;
          public hashCode(): number;
          public getPrimaryRouteProgressData(): com.mapbox.navigation.core.internal.RouteProgressData;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesRefreshDataProvider {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesRefreshDataProvider>;
          public getRoutesRefreshData(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any): any;
          public constructor(param0: com.mapbox.navigation.core.RoutesProgressDataProvider);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesSetCallback {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesSetCallback>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.RoutesSetCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onRoutesSet(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.core.RoutesSetError, com.mapbox.navigation.core.RoutesSetSuccess>): void });
          public constructor();
          public onRoutesSet(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.core.RoutesSetError, com.mapbox.navigation.core.RoutesSetSuccess>): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesSetError {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesSetError>;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: string);
          public getMessage(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutesSetSuccess {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutesSetSuccess>;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: java.util.Map<string, com.mapbox.navigation.core.RoutesSetError>);
          public getIgnoredAlternatives(): java.util.Map<string, com.mapbox.navigation.core.RoutesSetError>;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export class RoutingTilesFiles {
          public static class: java.lang.Class<com.mapbox.navigation.core.RoutingTilesFiles>;
          public static TILES_PATH_SUB_DIR: string;
          public constructor(param0: globalAndroid.content.Context);
          public absolutePath(param0: com.mapbox.navigation.base.options.RoutingTilesOptions): string;
          public getApplicationContext(): globalAndroid.content.Context;
        }
        export module RoutingTilesFiles {
          export class Companion {
            public static class: java.lang.Class<com.mapbox.navigation.core.RoutingTilesFiles.Companion>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export abstract class SetRoutes {
          public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes>;
        }
        export module SetRoutes {
          export class Alternatives extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.Alternatives>;
            public constructor(param0: number);
            public getLegIndex(): number;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public component1(): number;
            public copy(param0: number): com.mapbox.navigation.core.SetRoutes.Alternatives;
            public toString(): string;
          }
          export class CleanUp extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.CleanUp>;
            public static INSTANCE: com.mapbox.navigation.core.SetRoutes.CleanUp;
          }
          export class NewRoutes extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.NewRoutes>;
            public constructor(param0: number);
            public getLegIndex(): number;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public component1(): number;
            public copy(param0: number): com.mapbox.navigation.core.SetRoutes.NewRoutes;
            public toString(): string;
          }
          export class RefreshRoutes extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.RefreshRoutes>;
            public constructor(param0: com.mapbox.navigation.core.internal.RouteProgressData);
            public component1(): com.mapbox.navigation.core.internal.RouteProgressData;
            public getRouteProgressData(): com.mapbox.navigation.core.internal.RouteProgressData;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public copy(param0: com.mapbox.navigation.core.internal.RouteProgressData): com.mapbox.navigation.core.SetRoutes.RefreshRoutes;
            public toString(): string;
          }
          export class Reroute extends com.mapbox.navigation.core.SetRoutes {
            public static class: java.lang.Class<com.mapbox.navigation.core.SetRoutes.Reroute>;
            public copy(param0: number): com.mapbox.navigation.core.SetRoutes.Reroute;
            public constructor(param0: number);
            public getLegIndex(): number;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public component1(): number;
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
      export module core {
        export class TripSessionResetCallback {
          public static class: java.lang.Class<com.mapbox.navigation.core.TripSessionResetCallback>;
          /**
           * Constructs a new instance of the com.mapbox.navigation.core.TripSessionResetCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onTripSessionReset(): void });
          public constructor();
          public onTripSessionReset(): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module accounts {
          export class BillingController {
            public static class: java.lang.Class<com.mapbox.navigation.core.accounts.BillingController>;
            public constructor(param0: com.mapbox.navigation.core.trip.session.NavigationSession, param1: com.mapbox.navigation.core.arrival.ArrivalProgressObserver, param2: string, param3: com.mapbox.navigation.core.trip.session.TripSession);
            public onDestroy(): void;
            public onExternalRouteSet(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number): void;
          }
          export module BillingController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.accounts.BillingController.Companion>;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.core.accounts.BillingController.WhenMappings>;
            }
            export module getRunningOrPausedSessionSkuId {
              export module WhenMappings {
                export class SkuSessionStatus {
                  public static class: java.lang.Class<com.mapbox.navigation.core.accounts.BillingController.getRunningOrPausedSessionSkuId.SkuSessionStatus>;
                  public getSkuId(): com.mapbox.common.SessionSKUIdentifier;
                  public toString(): string;
                  public constructor(param0: com.mapbox.common.SessionSKUIdentifier, param1: com.mapbox.common.BillingSessionStatus);
                  public component1(): com.mapbox.common.SessionSKUIdentifier;
                  public copy(param0: com.mapbox.common.SessionSKUIdentifier, param1: com.mapbox.common.BillingSessionStatus): com.mapbox.navigation.core.accounts.BillingController.getRunningOrPausedSessionSkuId.SkuSessionStatus;
                  public equals(param0: any): boolean;
                  public getStatus(): com.mapbox.common.BillingSessionStatus;
                  public component2(): com.mapbox.common.BillingSessionStatus;
                  public hashCode(): number;
                }
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
      export module core {
        export module accounts {
          export class BillingServiceProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.accounts.BillingServiceProvider>;
            public static INSTANCE: com.mapbox.navigation.core.accounts.BillingServiceProvider;
            public getInstance(): com.mapbox.common.BillingServiceInterface;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module arrival {
          export class ArrivalController {
            public static class: java.lang.Class<com.mapbox.navigation.core.arrival.ArrivalController>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.arrival.ArrivalController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { navigateNextRouteLeg(param0: com.mapbox.navigation.base.trip.model.RouteLegProgress): boolean });
            public constructor();
            public navigateNextRouteLeg(param0: com.mapbox.navigation.base.trip.model.RouteLegProgress): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module arrival {
          export class ArrivalObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.arrival.ArrivalObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.arrival.ArrivalObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onWaypointArrival(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void; onNextRouteLegStart(param0: com.mapbox.navigation.base.trip.model.RouteLegProgress): void; onFinalDestinationArrival(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void });
            public constructor();
            public onWaypointArrival(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
            public onFinalDestinationArrival(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
            public onNextRouteLegStart(param0: com.mapbox.navigation.base.trip.model.RouteLegProgress): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module arrival {
          export class ArrivalProgressObserver extends com.mapbox.navigation.core.trip.session.RouteProgressObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.arrival.ArrivalProgressObserver>;
            public constructor(param0: com.mapbox.navigation.core.trip.session.TripSession);
            public unregisterAllObservers(): void;
            public onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
            public registerObserver(param0: com.mapbox.navigation.core.arrival.ArrivalObserver): void;
            public navigateNextRouteLeg(param0: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
            public unregisterObserver(param0: com.mapbox.navigation.core.arrival.ArrivalObserver): void;
            public attach(param0: com.mapbox.navigation.core.arrival.ArrivalController): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module arrival {
          export class AutoArrivalController extends com.mapbox.navigation.core.arrival.ArrivalController {
            public static class: java.lang.Class<com.mapbox.navigation.core.arrival.AutoArrivalController>;
            public constructor();
            public navigateNextRouteLeg(param0: com.mapbox.navigation.base.trip.model.RouteLegProgress): boolean;
          }
          export module AutoArrivalController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.arrival.AutoArrivalController.Companion>;
              public getAUTO_ARRIVAL_NANOS(): number;
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
      export module core {
        export module directions {
          export class LegacyNavigationRouterAdapter {
            public static class: java.lang.Class<com.mapbox.navigation.core.directions.LegacyNavigationRouterAdapter>;
            public cancelRouteRefreshRequest(param0: number): void;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
            public shutdown(): void;
            public cancelAll(): void;
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public constructor(param0: com.mapbox.navigation.base.route.NavigationRouter);
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
            public cancelRouteRequest(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module directions {
          export class LegacyRouterAdapter {
            public static class: java.lang.Class<com.mapbox.navigation.core.directions.LegacyRouterAdapter>;
            public cancelRouteRefreshRequest(param0: number): void;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.RouterCallback): number;
            public shutdown(): void;
            public cancelAll(): void;
            public getRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: number, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
            public getRouteRefresh(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: com.mapbox.navigation.base.route.RouteRefreshCallback): number;
            public getRoute(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
            public constructor(param0: com.mapbox.navigation.base.route.Router);
            public cancelRouteRequest(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module directions {
          export module session {
            export class DirectionsSession extends com.mapbox.navigation.core.directions.session.RouteRefresh {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.DirectionsSession>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.directions.session.DirectionsSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getRoutesUpdatedResult(): com.mapbox.navigation.core.directions.session.RoutesUpdatedResult;
                getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
                getInitialLegIndex(): number;
                setNavigationRoutesStarted(param0: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void;
                setNavigationRoutesFinished(param0: com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes): void;
                getPrimaryRouteOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
                requestRoutes(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
                cancelRouteRequest(param0: number): void;
                cancelAll(): void;
                registerSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
                unregisterSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
                unregisterAllSetNavigationRoutesFinishedObserver(): void;
                registerSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
                unregisterSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
                shutdown(): void;
                requestRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
                cancelRouteRefreshRequest(param0: number): void;
              });
              public constructor();
              public registerSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
              public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public cancelRouteRefreshRequest(param0: number): void;
              public unregisterSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
              public getInitialLegIndex(): number;
              public setNavigationRoutesStarted(param0: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void;
              public setNavigationRoutesFinished(param0: com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes): void;
              public getPrimaryRouteOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
              public registerSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
              public requestRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              public unregisterAllSetNavigationRoutesFinishedObserver(): void;
              public shutdown(): void;
              public unregisterSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
              public cancelRouteRequest(param0: number): void;
              public getRoutesUpdatedResult(): com.mapbox.navigation.core.directions.session.RoutesUpdatedResult;
              public requestRoutes(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
              public cancelAll(): void;
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
      export module core {
        export module directions {
          export module session {
            export class DirectionsSessionRoutes {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes>;
              public hashCode(): number;
              public component1(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public constructor(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>, param2: com.mapbox.navigation.core.SetRoutes);
              public component3(): com.mapbox.navigation.core.SetRoutes;
              public getSetRoutesInfo(): com.mapbox.navigation.core.SetRoutes;
              public toString(): string;
              public toRoutesUpdatedResult(): com.mapbox.navigation.core.directions.session.RoutesUpdatedResult;
              public copy(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>, param2: com.mapbox.navigation.core.SetRoutes): com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes;
              public component2(): java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>;
              public equals(param0: any): boolean;
              public getAcceptedRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public getIgnoredRoutes(): java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>;
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
      export module core {
        export module directions {
          export module session {
            export class IgnoredRoute {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.IgnoredRoute>;
              public getNavigationRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: string);
              public getReason(): string;
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
      export module core {
        export module directions {
          export module session {
            export class MapboxDirectionsSession extends com.mapbox.navigation.core.directions.session.DirectionsSession {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.MapboxDirectionsSession>;
              public static DEFAULT_INITIAL_LEG_INDEX: number;
              public registerSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
              public constructor(param0: com.mapbox.navigation.base.internal.NavigationRouterV2);
              public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public cancelRouteRefreshRequest(param0: number): void;
              public unregisterSetNavigationRoutesStartedObserver(param0: com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver): void;
              public getInitialLegIndex(): number;
              public setNavigationRoutesFinished(param0: com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes): void;
              public setNavigationRoutesStarted(param0: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void;
              public getPrimaryRouteOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
              public registerSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
              public requestRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
              public unregisterAllSetNavigationRoutesFinishedObserver(): void;
              public shutdown(): void;
              public setRoutesUpdatedResult(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
              public unregisterSetNavigationRoutesFinishedObserver(param0: com.mapbox.navigation.core.directions.session.RoutesObserver): void;
              public cancelRouteRequest(param0: number): void;
              public getRoutesUpdatedResult(): com.mapbox.navigation.core.directions.session.RoutesUpdatedResult;
              public requestRoutes(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.route.NavigationRouterCallback): number;
              public cancelAll(): void;
            }
            export module MapboxDirectionsSession {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.MapboxDirectionsSession.Companion>;
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
      export module core {
        export module directions {
          export module session {
            export class RouteRefresh {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RouteRefresh>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.directions.session.RouteRefresh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { requestRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number; cancelRouteRefreshRequest(param0: number): void });
              public constructor();
              public cancelRouteRefreshRequest(param0: number): void;
              public requestRouteRefresh(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.internal.RouteRefreshRequestData, param2: com.mapbox.navigation.base.route.NavigationRouterRefreshCallback): number;
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
      export module core {
        export module directions {
          export module session {
            export class RoutesExtra {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RoutesExtra>;
              public static INSTANCE: com.mapbox.navigation.core.directions.session.RoutesExtra;
              public static ROUTES_UPDATE_REASON_CLEAN_UP: string;
              public static ROUTES_UPDATE_REASON_NEW: string;
              public static ROUTES_UPDATE_REASON_ALTERNATIVE: string;
              public static ROUTES_UPDATE_REASON_REROUTE: string;
              public static ROUTES_UPDATE_REASON_REFRESH: string;
            }
            export module RoutesExtra {
              export class RoutesUpdateReason {
                public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RoutesExtra.RoutesUpdateReason>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.directions.session.RoutesExtra$RoutesUpdateReason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
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
    export module navigation {
      export module core {
        export module directions {
          export module session {
            export class RoutesObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RoutesObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.directions.session.RoutesObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRoutesChanged(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void });
              public constructor();
              public onRoutesChanged(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
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
      export module core {
        export module directions {
          export module session {
            export class RoutesSetStartedParams {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RoutesSetStartedParams>;
              public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public hashCode(): number;
              public component1(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public constructor(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>);
              public copy(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): com.mapbox.navigation.core.directions.session.RoutesSetStartedParams;
              public toString(): string;
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
    export module navigation {
      export module core {
        export module directions {
          export module session {
            export class RoutesUpdatedResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.RoutesUpdatedResult>;
              /** @deprecated */
              public getRoutes(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
              public hashCode(): number;
              public getNavigationRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public constructor(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>, param2: string);
              public toString(): string;
              public equals(param0: any): boolean;
              public getIgnoredRoutes(): java.util.List<com.mapbox.navigation.core.directions.session.IgnoredRoute>;
              public getReason(): string;
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
      export module core {
        export module directions {
          export module session {
            export class SetNavigationRoutesStartedObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.directions.session.SetNavigationRoutesStartedObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRoutesSetStarted(param0: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void });
              public constructor();
              public onRoutesSetStarted(param0: com.mapbox.navigation.core.directions.session.RoutesSetStartedParams): void;
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
      export module core {
        export module directions {
          export module session {
            export class Utils {
              public static class: java.lang.Class<com.mapbox.navigation.core.directions.session.Utils>;
              public static INSTANCE: com.mapbox.navigation.core.directions.session.Utils;
              public createDirectionsSessionRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.core.trip.session.NativeSetRouteValue, param2: com.mapbox.navigation.core.SetRoutes): com.mapbox.navigation.core.directions.session.DirectionsSessionRoutes;
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
      export module core {
        export module ev {
          export class EVDynamicDataHolder {
            public static class: java.lang.Class<com.mapbox.navigation.core.ev.EVDynamicDataHolder>;
            public constructor();
            public updateData(param0: java.util.Map<string, string>): void;
            public currentData(param0: java.util.Map<string, any>): java.util.Map<string, string>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module ev {
          export class EVRefreshDataProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.ev.EVRefreshDataProvider>;
            public get(param0: com.mapbox.api.directions.v5.models.RouteOptions): java.util.Map<string, string>;
            public constructor(param0: com.mapbox.navigation.core.ev.EVDynamicDataHolder);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module ev {
          export class EVRerouteOptionsAdapter extends com.mapbox.navigation.core.reroute.RerouteOptionsAdapter {
            public static class: java.lang.Class<com.mapbox.navigation.core.ev.EVRerouteOptionsAdapter>;
            public constructor(param0: com.mapbox.navigation.core.ev.EVDynamicDataHolder);
            public onRouteOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.RouteOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module formatter {
          export class FormattedDistanceData {
            public static class: java.lang.Class<com.mapbox.navigation.core.formatter.FormattedDistanceData>;
            public getUnitType(): com.mapbox.navigation.base.formatter.UnitType;
            public constructor(param0: number, param1: string, param2: string, param3: com.mapbox.navigation.base.formatter.UnitType);
            public getDistanceAsString(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getDistanceSuffix(): string;
            public getDistance(): number;
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
      export module core {
        export module formatter {
          export class MapboxDistanceFormatter {
            public static class: java.lang.Class<com.mapbox.navigation.core.formatter.MapboxDistanceFormatter>;
            public constructor(param0: com.mapbox.navigation.base.formatter.DistanceFormatterOptions);
            public formatDistance(param0: number): globalAndroid.text.SpannableString;
            public getSpannableDistanceString$libnavigation_core_release(param0: any): globalAndroid.text.SpannableString;
            public getOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module formatter {
          export class MapboxDistanceUtil {
            public static class: java.lang.Class<com.mapbox.navigation.core.formatter.MapboxDistanceUtil>;
            public static INSTANCE: com.mapbox.navigation.core.formatter.MapboxDistanceUtil;
            public formatDistance(param0: number, param1: number, param2: com.mapbox.navigation.base.formatter.UnitType, param3: globalAndroid.content.Context, param4: java.util.Locale): com.mapbox.navigation.core.formatter.FormattedDistanceData;
            public formatDistance(param0: number, param1: number, param2: com.mapbox.navigation.base.formatter.UnitType, param3: globalAndroid.content.Context): com.mapbox.navigation.core.formatter.FormattedDistanceData;
            public formatDistance(param0: number, param1: number, param2: com.mapbox.navigation.base.formatter.UnitType, param3: java.util.Locale): number;
            public formatDistance(param0: number, param1: number, param2: com.mapbox.navigation.base.formatter.UnitType): number;
          }
          export module MapboxDistanceUtil {
            export class FormattingData {
              public static class: java.lang.Class<com.mapbox.navigation.core.formatter.MapboxDistanceUtil.FormattingData>;
              public constructor(param0: number, param1: string, param2: string, param3: com.mapbox.navigation.base.formatter.UnitType);
              public component2(): string;
              public hashCode(): number;
              public getTurfDistanceUnit(): string;
              public getDistanceAsString(): string;
              public getDistance(): number;
              public toString(): string;
              public component3(): string;
              public component1(): number;
              public getUnitType(): com.mapbox.navigation.base.formatter.UnitType;
              public equals(param0: any): boolean;
              public component4(): com.mapbox.navigation.base.formatter.UnitType;
              public copy(param0: number, param1: string, param2: string, param3: com.mapbox.navigation.base.formatter.UnitType): com.mapbox.navigation.core.formatter.MapboxDistanceUtil.FormattingData;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.core.formatter.MapboxDistanceUtil.WhenMappings>;
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
      export module core {
        export module geodeeplink {
          export class GeoDeeplink {
            public static class: java.lang.Class<com.mapbox.navigation.core.geodeeplink.GeoDeeplink>;
            public getPlaceQuery(): string;
            public constructor(param0: com.mapbox.geojson.Point, param1: string);
            public getPoint(): com.mapbox.geojson.Point;
            public equals(param0: any): boolean;
            public hashCode(): number;
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
      export module core {
        export module geodeeplink {
          export class GeoDeeplinkParser {
            public static class: java.lang.Class<com.mapbox.navigation.core.geodeeplink.GeoDeeplinkParser>;
            public static INSTANCE: com.mapbox.navigation.core.geodeeplink.GeoDeeplinkParser;
            public static parse(param0: string): com.mapbox.navigation.core.geodeeplink.GeoDeeplink;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module history {
          export class HistoryFiles {
            public static class: java.lang.Class<com.mapbox.navigation.core.history.HistoryFiles>;
            public constructor(param0: globalAndroid.content.Context);
            public historyRecorderAbsolutePath(param0: com.mapbox.navigation.base.options.HistoryRecorderOptions): string;
            public getApplicationContext(): globalAndroid.content.Context;
            public copilotAbsolutePath(): string;
          }
          export module HistoryFiles {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.HistoryFiles.Companion>;
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
      export module core {
        export module history {
          export class MapboxHistoryReader extends java.lang.Object {
            public static class: java.lang.Class<com.mapbox.navigation.core.history.MapboxHistoryReader>;
            public getFilePath(): string;
            public next(): com.mapbox.navigation.core.history.model.HistoryEvent;
            public hasNext(): boolean;
            public constructor(param0: string);
            public remove(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module history {
          export class MapboxHistoryReaderProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.history.MapboxHistoryReaderProvider>;
            public static INSTANCE: com.mapbox.navigation.core.history.MapboxHistoryReaderProvider;
            public create(param0: string): com.mapbox.navigation.core.history.MapboxHistoryReader;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module history {
          export class MapboxHistoryRecorder {
            public static class: java.lang.Class<com.mapbox.navigation.core.history.MapboxHistoryRecorder>;
            public copilotFileDirectory$libnavigation_core_release(): string;
            public getHistoryRecorderHandle$libnavigation_core_release(): com.mapbox.navigator.HistoryRecorderHandle;
            public fileDirectory(): string;
            public stopRecording(param0: com.mapbox.navigation.core.history.SaveHistoryCallback): void;
            public pushHistory(param0: string, param1: string): void;
            public setHistoryRecorderHandle$libnavigation_core_release(param0: com.mapbox.navigator.HistoryRecorderHandle): void;
            public constructor(param0: com.mapbox.navigation.base.options.NavigationOptions, param1: com.mapbox.navigator.HistoryRecorderHandle);
            public startRecording(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module history {
          export class SaveHistoryCallback {
            public static class: java.lang.Class<com.mapbox.navigation.core.history.SaveHistoryCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.history.SaveHistoryCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSaved(param0: string): void });
            public constructor();
            public onSaved(param0: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module history {
          export module model {
            export class HistoryEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEvent>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.history.model.HistoryEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getEventTimestamp(): number });
              public constructor();
              public getEventTimestamp(): number;
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
      export module core {
        export module history {
          export module model {
            export class HistoryEventGetStatus extends com.mapbox.navigation.core.history.model.HistoryEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventGetStatus>;
              public getElapsedRealtimeNanos(): number;
              public constructor(param0: number, param1: number);
              public hashCode(): number;
              public toString(): string;
              public getEventTimestamp(): number;
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
    export module navigation {
      export module core {
        export module history {
          export module model {
            export class HistoryEventMapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventMapper>;
              public constructor();
              public map(param0: com.mapbox.navigator.HistoryRecord): com.mapbox.navigation.core.history.model.HistoryEvent;
            }
            export module HistoryEventMapper {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventMapper.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventMapper.WhenMappings>;
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
      export module core {
        export module history {
          export module model {
            export class HistoryEventPushHistoryRecord extends com.mapbox.navigation.core.history.model.HistoryEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventPushHistoryRecord>;
              public getProperties(): string;
              public constructor(param0: number, param1: string, param2: string);
              public hashCode(): number;
              public toString(): string;
              public getEventTimestamp(): number;
              public equals(param0: any): boolean;
              public getType(): string;
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
      export module core {
        export module history {
          export module model {
            export class HistoryEventSetRoute extends com.mapbox.navigation.core.history.model.HistoryEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventSetRoute>;
              public getNavigationRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public getRouteIndex(): number;
              public getProfile(): string;
              public getGeometries(): string;
              public hashCode(): number;
              public getLegIndex(): number;
              /** @deprecated */
              public getDirectionsRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public constructor(param0: number, param1: com.mapbox.navigation.base.route.NavigationRoute, param2: number, param3: number, param4: string, param5: string, param6: java.util.List<com.mapbox.navigation.core.history.model.HistoryWaypoint>);
              public toString(): string;
              public getEventTimestamp(): number;
              public equals(param0: any): boolean;
              public getWaypoints(): java.util.List<com.mapbox.navigation.core.history.model.HistoryWaypoint>;
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
      export module core {
        export module history {
          export module model {
            export class HistoryEventUpdateLocation extends com.mapbox.navigation.core.history.model.HistoryEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryEventUpdateLocation>;
              public getLocation(): globalAndroid.location.Location;
              public constructor(param0: number, param1: globalAndroid.location.Location);
              public hashCode(): number;
              public toString(): string;
              public getEventTimestamp(): number;
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
    export module navigation {
      export module core {
        export module history {
          export module model {
            export class HistoryWaypoint {
              public static class: java.lang.Class<com.mapbox.navigation.core.history.model.HistoryWaypoint>;
              public hashCode(): number;
              public getPoint(): com.mapbox.geojson.Point;
              public toString(): string;
              public constructor(param0: com.mapbox.geojson.Point, param1: boolean);
              public isSilent(): boolean;
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
    export module navigation {
      export module core {
        export module internal {
          export abstract class HistoryRecordingSessionState {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.HistoryRecordingSessionState>;
            public getSessionId(): string;
          }
          export module HistoryRecordingSessionState {
            export class ActiveGuidance extends com.mapbox.navigation.core.internal.HistoryRecordingSessionState {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.HistoryRecordingSessionState.ActiveGuidance>;
              public hashCode(): number;
              public constructor(param0: string);
              public getSessionId(): string;
              public toString(): string;
              public equals(param0: any): boolean;
              public component1(): string;
              public copy(param0: string): com.mapbox.navigation.core.internal.HistoryRecordingSessionState.ActiveGuidance;
            }
            export class FreeDrive extends com.mapbox.navigation.core.internal.HistoryRecordingSessionState {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.HistoryRecordingSessionState.FreeDrive>;
              public hashCode(): number;
              public constructor(param0: string);
              public getSessionId(): string;
              public copy(param0: string): com.mapbox.navigation.core.internal.HistoryRecordingSessionState.FreeDrive;
              public toString(): string;
              public equals(param0: any): boolean;
              public component1(): string;
            }
            export class Idle extends com.mapbox.navigation.core.internal.HistoryRecordingSessionState {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.HistoryRecordingSessionState.Idle>;
              public static INSTANCE: com.mapbox.navigation.core.internal.HistoryRecordingSessionState.Idle;
              public getSessionId(): string;
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
      export module core {
        export module internal {
          export class HistoryRecordingStateChangeObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onShouldStartRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void; onShouldStopRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void; onShouldCancelRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void });
            public constructor();
            public onShouldCancelRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
            public onShouldStartRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
            public onShouldStopRecording(param0: com.mapbox.navigation.core.internal.HistoryRecordingSessionState): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class MapboxNavigationSDK {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.MapboxNavigationSDK>;
            public static INSTANCE: com.mapbox.navigation.core.internal.MapboxNavigationSDK;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class MapboxNavigationSDKInitializer extends androidx.startup.Initializer<com.mapbox.navigation.core.internal.MapboxNavigationSDK> {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.MapboxNavigationSDKInitializer>;
            public dependencies(): java.util.List<java.lang.Class<any>>;
            public constructor();
            public create(param0: globalAndroid.content.Context): com.mapbox.navigation.core.internal.MapboxNavigationSDK;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class PredictiveCache {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.PredictiveCache>;
            public static INSTANCE: com.mapbox.navigation.core.internal.PredictiveCache;
            public clean(): void;
            public createNavigationController(param0: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions): void;
            /** @deprecated */
            public currentMapsPredictiveCacheControllers(param0: any): java.util.List<string>;
            public getNavPredictiveCacheLocationOptions$libnavigation_core_release(): java.util.Set<com.mapbox.navigation.base.options.PredictiveCacheLocationOptions>;
            public getMapsPredictiveCacheLocationOptionsTileVariant$libnavigation_core_release(): java.util.Map<any, java.util.Map<string, any>>;
            public createMapsControllers(param0: any, param1: com.mapbox.common.TileStore, param2: java.util.List<any>): void;
            /** @deprecated */
            public removeAllMapControllersFromTileVariants(param0: any): void;
            /** @deprecated */
            public createMapsController(param0: any, param1: com.mapbox.common.TileStore, param2: string, param3: com.mapbox.navigation.base.options.PredictiveCacheLocationOptions): void;
            public removeAllMapControllersFromDescriptors(param0: any): void;
            public getCachedMapsPredictiveCacheControllersTileVariant$libnavigation_core_release(): java.util.Map<any, java.util.Map<string, com.mapbox.navigator.PredictiveCacheController>>;
            public init(): void;
            public getMapsPredictiveCacheLocationOptions$libnavigation_core_release(): java.util.Map<any, any>;
            /** @deprecated */
            public removeMapControllers(param0: any, param1: string): void;
            public getCachedMapsPredictiveCacheControllers$libnavigation_core_release(): java.util.Map<any, java.util.List<any>>;
            public getCachedNavigationPredictiveCacheControllers$libnavigation_core_release(): java.util.Set<com.mapbox.navigator.PredictiveCacheController>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class ReachabilityService {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.ReachabilityService>;
            public static INSTANCE: com.mapbox.navigation.core.internal.ReachabilityService;
            public addReachabilityObserver(param0: com.mapbox.navigation.utils.internal.ConnectivityHandler): number;
            public removeReachabilityObserver(param0: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class RouteProgressData {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.RouteProgressData>;
            public component2(): number;
            public component3(): java.lang.Integer;
            public constructor(param0: number, param1: number, param2: java.lang.Integer);
            public getLegGeometryIndex(): java.lang.Integer;
            public getLegIndex(): number;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public copy(param0: number, param1: number, param2: java.lang.Integer): com.mapbox.navigation.core.internal.RouteProgressData;
            public component1(): number;
            public toString(): string;
            public getRouteGeometryIndex(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module internal {
          export class RoutesProgressData {
            public static class: java.lang.Class<com.mapbox.navigation.core.internal.RoutesProgressData>;
            public getAlternatives(): java.util.Map<string, com.mapbox.navigation.core.internal.RouteProgressData>;
            public copy(param0: com.mapbox.navigation.core.internal.RouteProgressData, param1: java.util.Map<string, com.mapbox.navigation.core.internal.RouteProgressData>): com.mapbox.navigation.core.internal.RoutesProgressData;
            public component1(): com.mapbox.navigation.core.internal.RouteProgressData;
            public component2(): java.util.Map<string, com.mapbox.navigation.core.internal.RouteProgressData>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.mapbox.navigation.core.internal.RouteProgressData, param1: java.util.Map<string, com.mapbox.navigation.core.internal.RouteProgressData>);
            public getPrimary(): com.mapbox.navigation.core.internal.RouteProgressData;
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
      export module core {
        export module internal {
          export module accounts {
            export class MapboxNavigationAccounts {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.accounts.MapboxNavigationAccounts>;
              public static INSTANCE: com.mapbox.navigation.core.internal.accounts.MapboxNavigationAccounts;
              public obtainUrlWithSkuToken(param0: java.net.URL): java.net.URL;
              public obtainSkuId$libnavigation_core_release(): string;
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
      export module core {
        export module internal {
          export module dump {
            export class HelpDumpInterceptor extends com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.dump.HelpDumpInterceptor>;
              public constructor();
              public description(): string;
              public command(): string;
              public intercept(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: java.util.List<string>): void;
              public availableCommands(): java.util.List<any>;
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
      export module core {
        export module internal {
          export module dump {
            export class MapboxDumpHandler {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.dump.MapboxDumpHandler>;
              public constructor();
              public handle(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
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
      export module core {
        export module internal {
          export module dump {
            export class MapboxDumpInterceptor {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { command(): string; description(): string; availableCommands(): java.util.List<any>; intercept(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: java.util.List<string>): void });
              public constructor();
              public description(): string;
              public command(): string;
              public intercept(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: java.util.List<string>): void;
              public availableCommands(): java.util.List<any>;
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
      export module core {
        export module internal {
          export module dump {
            export class MapboxDumpRegistry {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.dump.MapboxDumpRegistry>;
              public static INSTANCE: com.mapbox.navigation.core.internal.dump.MapboxDumpRegistry;
              public getDefaultInterceptor(): com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor;
              public setDefaultInterceptor(param0: com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor): void;
              public removeInterceptors(param0: androidNative.Array<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>): void;
              public addInterceptors(param0: androidNative.Array<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>): boolean;
              public getInterceptors(): java.util.List<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>;
              public getInterceptors(param0: string): java.util.List<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>;
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
      export module core {
        export module internal {
          export module dump {
            export class MapboxDumpRegistryDelegate {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.dump.MapboxDumpRegistryDelegate>;
              public constructor();
              public getDefaultInterceptor(): com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor;
              public setDefaultInterceptor(param0: com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor): void;
              public removeInterceptors(param0: androidNative.Array<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>): void;
              public addInterceptors(param0: androidNative.Array<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>): boolean;
              public getInterceptors(): java.util.List<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>;
              public getInterceptors(param0: string): java.util.List<com.mapbox.navigation.core.internal.dump.MapboxDumpInterceptor>;
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
      export module core {
        export module internal {
          export module extensions {
            export class AttachOnLifecycle {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.extensions.AttachOnLifecycle>;
              public constructor(param0: androidx.lifecycle.Lifecycle.Event, param1: androidx.lifecycle.Lifecycle.Event, param2: com.mapbox.navigation.core.MapboxNavigation, param3: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver);
              public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
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
      export module core {
        export module internal {
          export module extensions {
            export class MapboxNavigationExtensions {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.extensions.MapboxNavigationExtensions>;
              public static flowTripSessionState(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.core.trip.session.TripSessionState>;
              public static flowOnNextRouteLegStart(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.base.trip.model.RouteLegProgress>;
              public static registerHistoryRecordingStateChangeObserver(param0: com.mapbox.navigation.core.MapboxNavigation, param1: com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver): void;
              public static flowOnWaypointArrival(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.base.trip.model.RouteProgress>;
              public static flowSetNavigationRoutesStarted(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.core.directions.session.RoutesSetStartedParams>;
              public static flowRoutesUpdated(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.core.directions.session.RoutesUpdatedResult>;
              public static flowRouteProgress(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.base.trip.model.RouteProgress>;
              public static flowNewRawLocation(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<globalAndroid.location.Location>;
              public static flowOnFinalDestinationArrival(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.base.trip.model.RouteProgress>;
              public static flowRouteAlternativeObserver(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<any>;
              public static unregisterHistoryRecordingStateChangeObserver(param0: com.mapbox.navigation.core.MapboxNavigation, param1: com.mapbox.navigation.core.internal.HistoryRecordingStateChangeObserver): void;
              public static flowNavigationSessionState(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.core.trip.session.NavigationSessionState>;
              public static flowVoiceInstructions(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.api.directions.v5.models.VoiceInstructions>;
              public static retrieveCopilotHistoryRecorder(param0: com.mapbox.navigation.core.MapboxNavigation): com.mapbox.navigation.core.history.MapboxHistoryRecorder;
              public static flowLocationMatcherResult(param0: com.mapbox.navigation.core.MapboxNavigation): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.core.trip.session.LocationMatcherResult>;
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
      export module core {
        export module internal {
          export module extensions {
            export class MapboxNavigationObserverChain extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.extensions.MapboxNavigationObserverChain>;
              public constructor();
              public addAll(param0: androidNative.Array<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>): void;
              public remove(param0: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): void;
              public removeAndDetach(param0: androidNative.Array<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>): void;
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public removeAll(param0: androidNative.Array<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>): void;
              public clear(): void;
              public toList(): java.util.List<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>;
              public add(param0: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): void;
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
      export module core {
        export module internal {
          export module extensions {
            export class MapboxNavigationObserverEx {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.extensions.MapboxNavigationObserverEx>;
              public static navigationListOf(param0: androidNative.Array<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
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
      export module core {
        export module internal {
          export module lifecycle {
            export class CarAppLifecycleOwner {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.lifecycle.CarAppLifecycleOwner>;
              public constructor();
              public getStartedReferenceCounter$libnavigation_core_release(): androidx.lifecycle.DefaultLifecycleObserver;
              public isConfigurationChanging(): boolean;
              public getActivityLifecycleCallbacks$libnavigation_core_release(): globalAndroid.app.Application.ActivityLifecycleCallbacks;
              public getLifecycle(): androidx.lifecycle.Lifecycle;
              public attach(param0: androidx.lifecycle.LifecycleOwner): void;
              public detach(param0: androidx.lifecycle.LifecycleOwner): void;
              public attachAllActivities(param0: globalAndroid.app.Application): void;
            }
            export module CarAppLifecycleOwner {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.internal.lifecycle.CarAppLifecycleOwner.Companion>;
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
      export module core {
        export module internal {
          export module telemetry {
            export class CustomEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.telemetry.CustomEvent>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.internal.telemetry.CustomEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export module CustomEvent {
              export class Type {
                public static class: java.lang.Class<com.mapbox.navigation.core.internal.telemetry.CustomEvent.Type>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.internal.telemetry.CustomEvent$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
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
    export module navigation {
      export module core {
        export module internal {
          export module telemetry {
            export class NavigationCustomEventType {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.telemetry.NavigationCustomEventType>;
              public static INSTANCE: com.mapbox.navigation.core.internal.telemetry.NavigationCustomEventType;
              public static ANALYTICS: string;
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
      export module core {
        export module internal {
          export module telemetry {
            export class UserFeedback {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.telemetry.UserFeedback>;
              public getFeedbackId(): string;
              public getScreenshot(): string;
              public hashCode(): number;
              public getLocation(): com.mapbox.geojson.Point;
              public getSource(): string;
              public toString(): string;
              public getDescription(): string;
              public equals(param0: any): boolean;
              public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: androidNative.Array<string>, param6: com.mapbox.geojson.Point);
              public getFeedbackType(): string;
              public getFeedbackSubType(): androidNative.Array<string>;
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
      export module core {
        export module internal {
          export module telemetry {
            export class UserFeedbackCallback {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewUserFeedback(param0: com.mapbox.navigation.core.internal.telemetry.UserFeedback): void });
              public constructor();
              public onNewUserFeedback(param0: com.mapbox.navigation.core.internal.telemetry.UserFeedback): void;
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
      export module core {
        export module internal {
          export module utils {
            export class CoroutineUtils {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.utils.CoroutineUtils>;
              public static INSTANCE: com.mapbox.navigation.core.internal.utils.CoroutineUtils;
              public createChildScope(param0: kotlinx.coroutines.CoroutineScope): kotlinx.coroutines.CoroutineScope;
              public createScope(param0: kotlinx.coroutines.Job, param1: any): kotlinx.coroutines.CoroutineScope;
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
      export module core {
        export module internal {
          export module utils {
            export class InternalUtils {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.utils.InternalUtils>;
              public static INSTANCE: com.mapbox.navigation.core.internal.utils.InternalUtils;
              public getUNCONDITIONAL_POLLING_INTERVAL_MILLISECONDS$libnavigation_core_release(): number;
              public setUnconditionalPollingPatience(param0: java.lang.Long): void;
              public getUNCONDITIONAL_POLLING_PATIENCE_MILLISECONDS$libnavigation_core_release(): number;
              public setUnconditionalPollingInterval(param0: java.lang.Long): void;
              public setUNCONDITIONAL_POLLING_INTERVAL_MILLISECONDS$libnavigation_core_release(param0: number): void;
              public setUNCONDITIONAL_POLLING_PATIENCE_MILLISECONDS$libnavigation_core_release(param0: number): void;
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
      export module core {
        export module internal {
          export module utils {
            export abstract class ModuleParams {
              public static class: java.lang.Class<com.mapbox.navigation.core.internal.utils.ModuleParams>;
            }
            export module ModuleParams {
              export class NavigationRouter extends com.mapbox.navigation.core.internal.utils.ModuleParams {
                public static class: java.lang.Class<com.mapbox.navigation.core.internal.utils.ModuleParams.NavigationRouter>;
                public constructor(param0: string, param1: com.mapbox.navigator.RouterInterface, param2: com.mapbox.navigation.utils.internal.ThreadController);
                public getNativeRouter(): com.mapbox.navigator.RouterInterface;
                public getAccessToken(): string;
                public getThreadController(): com.mapbox.navigation.utils.internal.ThreadController;
              }
              export class NavigationTripNotification extends com.mapbox.navigation.core.internal.utils.ModuleParams {
                public static class: java.lang.Class<com.mapbox.navigation.core.internal.utils.ModuleParams.NavigationTripNotification>;
                public getTripNotificationInterceptorOwner(): com.mapbox.navigation.base.internal.trip.notification.TripNotificationInterceptorOwner;
                public getNavigationOptions(): com.mapbox.navigation.base.options.NavigationOptions;
                public constructor(param0: com.mapbox.navigation.base.options.NavigationOptions, param1: com.mapbox.navigation.base.internal.trip.notification.TripNotificationInterceptorOwner, param2: com.mapbox.navigation.base.formatter.DistanceFormatterOptions);
                public getDistanceFormatterOptions(): com.mapbox.navigation.base.formatter.DistanceFormatterOptions;
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
      export module core {
        export module lifecycle {
          export class ForwardMapboxNavigation {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.ForwardMapboxNavigation>;
            public static forwardMapboxNavigation(param0: any, param1: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class MapboxNavigationApp {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.MapboxNavigationApp>;
            public static INSTANCE: com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static getLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
            public static setup(param0: com.mapbox.navigation.base.options.NavigationOptions): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static setup(param0: com.mapbox.navigation.core.lifecycle.NavigationOptionsProvider): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static disable(): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static detach(param0: androidx.lifecycle.LifecycleOwner): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static registerObserver(param0: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static getObservers(param0: any): java.util.List<any>;
            public static current(): com.mapbox.navigation.core.MapboxNavigation;
            public static unregisterObserver(param0: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static getObserver(param0: java.lang.Class<any>): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public static attachAllActivities(param0: globalAndroid.app.Application): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
            public static isSetup(): boolean;
            public static getObserver(param0: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public static getObservers(param0: java.lang.Class<any>): java.util.List<any>;
            public static attach(param0: androidx.lifecycle.LifecycleOwner): com.mapbox.navigation.core.lifecycle.MapboxNavigationApp;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class MapboxNavigationAppDelegate {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.MapboxNavigationAppDelegate>;
            public current(): com.mapbox.navigation.core.MapboxNavigation;
            public getObservers(param0: java.lang.Class<any>): java.util.List<any>;
            public constructor();
            public attach(param0: androidx.lifecycle.LifecycleOwner): void;
            public setSetup(param0: boolean): void;
            public getObservers(param0: any): java.util.List<any>;
            public getObserver(param0: java.lang.Class<any>): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public registerObserver(param0: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): void;
            public detach(param0: androidx.lifecycle.LifecycleOwner): void;
            public disable(): void;
            public getObserver(param0: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public unregisterObserver(param0: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): void;
            public getLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
            public attachAllActivities(param0: globalAndroid.app.Application): void;
            public setup(param0: com.mapbox.navigation.core.lifecycle.NavigationOptionsProvider): com.mapbox.navigation.core.lifecycle.MapboxNavigationAppDelegate;
            public isSetup(): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class MapboxNavigationObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void; onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void });
            public constructor();
            public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
            public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class MapboxNavigationOwner {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.MapboxNavigationOwner>;
            public current(): com.mapbox.navigation.core.MapboxNavigation;
            public setup(param0: com.mapbox.navigation.core.lifecycle.NavigationOptionsProvider): void;
            public getObservers(param0: java.lang.Class<any>): java.util.List<any>;
            public constructor();
            public register(param0: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): com.mapbox.navigation.core.lifecycle.MapboxNavigationOwner;
            public getCarAppLifecycleObserver$libnavigation_core_release(): androidx.lifecycle.DefaultLifecycleObserver;
            public unregister(param0: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver): void;
            public getObservers(param0: any): java.util.List<any>;
            public getObserver(param0: java.lang.Class<any>): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
            public disable(): void;
            public getObserver(param0: any): com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver;
          }
          export module MapboxNavigationOwner {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.MapboxNavigationOwner.Companion>;
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
      export module core {
        export module lifecycle {
          export class NavigationOptionsProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.NavigationOptionsProvider>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.lifecycle.NavigationOptionsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { createNavigationOptions(): com.mapbox.navigation.base.options.NavigationOptions });
            public constructor();
            public createNavigationOptions(): com.mapbox.navigation.base.options.NavigationOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class RequireMapboxNavigation {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.RequireMapboxNavigation>;
            public static requireMapboxNavigation(param0: androidx.lifecycle.LifecycleOwner, param1: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, param2: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, param3: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, param4: any): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module lifecycle {
          export class RequireMapboxNavigationDelegate extends any<any, com.mapbox.navigation.core.MapboxNavigation> {
            public static class: java.lang.Class<com.mapbox.navigation.core.lifecycle.RequireMapboxNavigationDelegate>;
            public constructor(param0: androidx.lifecycle.LifecycleOwner, param1: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, param2: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, param3: com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver, param4: any);
            public getValue(param0: any, param1: any): com.mapbox.navigation.core.MapboxNavigation;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module navigator {
          export class CacheHandleWrapper {
            public static class: java.lang.Class<com.mapbox.navigation.core.navigator.CacheHandleWrapper>;
            public static INSTANCE: com.mapbox.navigation.core.navigator.CacheHandleWrapper;
            public requestRoadGraphDataUpdate(param0: com.mapbox.navigator.CacheHandleInterface, param1: com.mapbox.navigation.core.RoadGraphDataUpdateCallback): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module navigator {
          export class LocationEx {
            public static class: java.lang.Class<com.mapbox.navigation.core.navigator.LocationEx>;
            public static toBundle(param0: java.util.HashMap<string, com.mapbox.bindgen.Value>, param1: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
            public static toMap(param0: globalAndroid.os.Bundle): java.util.HashMap<string, com.mapbox.bindgen.Value>;
            public static toFixLocation(param0: globalAndroid.location.Location): com.mapbox.navigator.FixLocation;
            public static toLocation(param0: com.mapbox.navigator.FixLocation): globalAndroid.location.Location;
            public static toLocations(param0: java.util.List<any>): java.util.List<globalAndroid.location.Location>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module navigator {
          export class NavigatorMapper {
            public static class: java.lang.Class<com.mapbox.navigation.core.navigator.NavigatorMapper>;
            public static mapToDirectionsApi(param0: com.mapbox.navigator.VoiceInstruction): com.mapbox.api.directions.v5.models.VoiceInstructions;
            public static prepareSpeedLimitInfo(param0: com.mapbox.navigator.NavigationStatus): com.mapbox.navigation.base.speed.model.SpeedLimitInfo;
            public static convertState(param0: com.mapbox.navigator.RouteState): com.mapbox.navigation.base.trip.model.RouteProgressState;
            public static getCurrentBannerInstructions(param0: com.mapbox.navigator.NavigationStatus, param1: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.api.directions.v5.models.BannerInstructions;
            public static getRouteProgressFrom(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigator.NavigationStatus, param2: number, param3: com.mapbox.api.directions.v5.models.BannerInstructions, param4: java.lang.Integer, param5: com.mapbox.api.directions.v5.models.VoiceInstructions, param6: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>, param7: com.mapbox.navigation.base.route.LegWaypoint): com.mapbox.navigation.base.trip.model.RouteProgress;
            public static getLocationMatcherResult(param0: com.mapbox.navigation.navigator.internal.TripStatus, param1: globalAndroid.location.Location, param2: java.util.List<any>, param3: com.mapbox.navigation.base.road.model.Road): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
            public static getTripStatusFrom(param0: com.mapbox.navigator.NavigationStatus, param1: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.navigator.internal.TripStatus;
            public static prepareSpeedLimit(param0: com.mapbox.navigator.NavigationStatus): com.mapbox.navigation.base.speed.model.SpeedLimit;
          }
          export module NavigatorMapper {
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.core.navigator.NavigatorMapper.WhenMappings>;
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
      export module core {
        export module navigator {
          export class TilesetDescriptorFactory {
            public static class: java.lang.Class<com.mapbox.navigation.core.navigator.TilesetDescriptorFactory>;
            public constructor(param0: com.mapbox.navigation.base.options.RoutingTilesOptions, param1: com.mapbox.navigator.CacheHandle, param2: com.mapbox.navigation.core.navigator.TilesetDescriptorFactory.NativeFactoryWrapper);
            public build(param0: string): com.mapbox.common.TilesetDescriptor;
            public getSpecificVersion(param0: string): com.mapbox.common.TilesetDescriptor;
            public build(param0: string, param1: string, param2: string): com.mapbox.common.TilesetDescriptor;
            public build(param0: string, param1: string): com.mapbox.common.TilesetDescriptor;
            public build(): com.mapbox.common.TilesetDescriptor;
            public getLatest(): com.mapbox.common.TilesetDescriptor;
          }
          export module TilesetDescriptorFactory {
            export class NativeFactoryWrapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.navigator.TilesetDescriptorFactory.NativeFactoryWrapper>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.navigator.TilesetDescriptorFactory$NativeFactoryWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getSpecificVersion(param0: com.mapbox.navigator.CacheHandle, param1: string): com.mapbox.common.TilesetDescriptor; getLatest(param0: com.mapbox.navigator.CacheHandle): com.mapbox.common.TilesetDescriptor; build(param0: string, param1: string): com.mapbox.common.TilesetDescriptor });
              public constructor();
              public getSpecificVersion(param0: com.mapbox.navigator.CacheHandle, param1: string): com.mapbox.common.TilesetDescriptor;
              public getLatest(param0: com.mapbox.navigator.CacheHandle): com.mapbox.common.TilesetDescriptor;
              public build(param0: string, param1: string): com.mapbox.common.TilesetDescriptor;
            }
            export class NativeFactoryWrapperImpl extends com.mapbox.navigation.core.navigator.TilesetDescriptorFactory.NativeFactoryWrapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.navigator.TilesetDescriptorFactory.NativeFactoryWrapperImpl>;
              public constructor();
              public getSpecificVersion(param0: com.mapbox.navigator.CacheHandle, param1: string): com.mapbox.common.TilesetDescriptor;
              public getLatest(param0: com.mapbox.navigator.CacheHandle): com.mapbox.common.TilesetDescriptor;
              public build(param0: string, param1: string): com.mapbox.common.TilesetDescriptor;
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
      export module core {
        export module preview {
          export class NativeRoutesDataParser extends com.mapbox.navigation.core.preview.RoutesDataParser {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.NativeRoutesDataParser>;
            public constructor();
            public parse(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module preview {
          export class RoutesDataParser {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesDataParser>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.preview.RoutesDataParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { parse(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any): any });
            public constructor();
            public parse(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module preview {
          export class RoutesPreview {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreview>;
            public getPrimaryRoute(): com.mapbox.navigation.base.route.NavigationRoute;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getRoutesList(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getOriginalRoutesList(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getPrimaryRouteIndex(): number;
            public constructor(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>, param2: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param3: number);
            public toString(): string;
            public getAlternativesMetadata(): java.util.List<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module preview {
          export class RoutesPreviewController {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreviewController>;
            public constructor(param0: com.mapbox.navigation.core.preview.RoutesDataParser, param1: kotlinx.coroutines.CoroutineScope);
            public registerRoutesPreviewObserver(param0: com.mapbox.navigation.core.preview.RoutesPreviewObserver): void;
            public unregisterAllRoutesPreviewObservers(): void;
            public changeRoutesPreviewPrimaryRoute(param0: com.mapbox.navigation.base.route.NavigationRoute): void;
            public unregisterRoutesPreviewObserver(param0: com.mapbox.navigation.core.preview.RoutesPreviewObserver): void;
            public previewNavigationRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: number): void;
            public getRoutesPreview(): com.mapbox.navigation.core.preview.RoutesPreview;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module preview {
          export class RoutesPreviewExtra {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreviewExtra>;
            public static INSTANCE: com.mapbox.navigation.core.preview.RoutesPreviewExtra;
            public static PREVIEW_NEW: string;
            public static PREVIEW_CLEAN_UP: string;
          }
          export module RoutesPreviewExtra {
            export class RoutePreviewUpdateReason {
              public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreviewExtra.RoutePreviewUpdateReason>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.preview.RoutesPreviewExtra$RoutePreviewUpdateReason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
      export module core {
        export module preview {
          export class RoutesPreviewObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreviewObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.preview.RoutesPreviewObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { routesPreviewUpdated(param0: com.mapbox.navigation.core.preview.RoutesPreviewUpdate): void });
            public constructor();
            public routesPreviewUpdated(param0: com.mapbox.navigation.core.preview.RoutesPreviewUpdate): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module preview {
          export class RoutesPreviewUpdate {
            public static class: java.lang.Class<com.mapbox.navigation.core.preview.RoutesPreviewUpdate>;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getReason(): string;
            public constructor(param0: string, param1: com.mapbox.navigation.core.preview.RoutesPreview);
            public getRoutesPreview(): com.mapbox.navigation.core.preview.RoutesPreview;
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
      export module core {
        export module replay {
          export class MapboxReplayer {
            public static class: java.lang.Class<com.mapbox.navigation.core.replay.MapboxReplayer>;
            public seekTo(param0: com.mapbox.navigation.core.replay.history.ReplayEventBase): void;
            public constructor();
            public unregisterObserver(param0: com.mapbox.navigation.core.replay.history.ReplayEventsObserver): void;
            public finish(): void;
            public pushRealLocation(param0: globalAndroid.content.Context, param1: number): void;
            public unregisterObservers(): void;
            public stop(): void;
            public eventSeconds(param0: number): number;
            public playFirstLocation(): void;
            public registerObserver(param0: com.mapbox.navigation.core.replay.history.ReplayEventsObserver): void;
            public pushEvents(param0: java.util.List<any>): com.mapbox.navigation.core.replay.MapboxReplayer;
            public durationSeconds(): number;
            public clearEvents(): void;
            public isPlaying$libnavigation_core_release(): boolean;
            public playbackSpeed(param0: number): void;
            public seekTo(param0: number): void;
            public eventRealtimeOffset(param0: number): number;
            public play(): void;
            public clearPlayedEvents(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module replay {
          export class ReplayLocationEngine extends com.mapbox.navigation.core.replay.history.ReplayEventsObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.replay.ReplayLocationEngine>;
            public removeLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
            public cleanUpLastLocation$libnavigation_core_release(): void;
            public requestLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
            public getLastLocation(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
            public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
            public constructor(param0: com.mapbox.navigation.core.replay.MapboxReplayer);
            public requestLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineRequest, param1: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>, param2: globalAndroid.os.Looper): void;
            public replayEvents(param0: java.util.List<any>): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module replay {
          export module history {
            export class ReplayEventBase {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.replay.history.ReplayEventBase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getEventTimestamp(): number });
              public constructor();
              public getEventTimestamp(): number;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEventGetStatus extends com.mapbox.navigation.core.replay.history.ReplayEventBase {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventGetStatus>;
              public component1(): number;
              public hashCode(): number;
              public copy(param0: number): com.mapbox.navigation.core.replay.history.ReplayEventGetStatus;
              public toString(): string;
              public getEventTimestamp(): number;
              public equals(param0: any): boolean;
              public constructor(param0: number);
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEventLocation {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventLocation>;
              public component7(): java.lang.Double;
              public copy(param0: number, param1: number, param2: string, param3: java.lang.Double, param4: java.lang.Double, param5: java.lang.Double, param6: java.lang.Double, param7: java.lang.Double): com.mapbox.navigation.core.replay.history.ReplayEventLocation;
              public constructor(param0: number, param1: number, param2: string, param3: java.lang.Double, param4: java.lang.Double, param5: java.lang.Double, param6: java.lang.Double, param7: java.lang.Double);
              public getBearing(): java.lang.Double;
              public hashCode(): number;
              public getProvider(): string;
              public getAccuracyHorizontal(): java.lang.Double;
              public component2(): number;
              public getTime(): java.lang.Double;
              public getSpeed(): java.lang.Double;
              public component6(): java.lang.Double;
              public toString(): string;
              public getLon(): number;
              public component8(): java.lang.Double;
              public component3(): string;
              public getAltitude(): java.lang.Double;
              public component1(): number;
              public component5(): java.lang.Double;
              public getLat(): number;
              public component4(): java.lang.Double;
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
    export module navigation {
      export module core {
        export module replay {
          export module history {
            export class ReplayEventSimulator {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventSimulator>;
              public isPlaying(): boolean;
              public stopSimulator(): void;
              public playbackSpeed(param0: number): void;
              public constructor(param0: com.mapbox.navigation.core.replay.history.ReplayEvents);
              public launchSimulator(param0: any): kotlinx.coroutines.Job;
              public pushEvents(param0: java.util.List<any>): void;
              public clearPlayedEvents(): void;
              public stopAndClearEvents(): void;
              public eventRealtimeOffset(param0: number): number;
              public seekTo(param0: number): void;
            }
            export module ReplayEventSimulator {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventSimulator.Companion>;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEventUpdateLocation extends com.mapbox.navigation.core.replay.history.ReplayEventBase {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventUpdateLocation>;
              public constructor(param0: number, param1: com.mapbox.navigation.core.replay.history.ReplayEventLocation);
              public component1(): number;
              public hashCode(): number;
              public getLocation(): com.mapbox.navigation.core.replay.history.ReplayEventLocation;
              public component2(): com.mapbox.navigation.core.replay.history.ReplayEventLocation;
              public toString(): string;
              public getEventTimestamp(): number;
              public equals(param0: any): boolean;
              public copy(param0: number, param1: com.mapbox.navigation.core.replay.history.ReplayEventLocation): com.mapbox.navigation.core.replay.history.ReplayEventUpdateLocation;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEvents {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEvents>;
              public constructor(param0: java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>);
              public getEvents(): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public hashCode(): number;
              public component1(): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public toString(): string;
              public equals(param0: any): boolean;
              public copy(param0: java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>): com.mapbox.navigation.core.replay.history.ReplayEvents;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayEventsObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayEventsObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.replay.history.ReplayEventsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { replayEvents(param0: java.util.List<any>): void });
              public constructor();
              public replayEvents(param0: java.util.List<any>): void;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayHistoryEventMapper<Event> extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper<any>>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { map(param0: Event): com.mapbox.navigation.core.replay.history.ReplayEventBase });
              public constructor();
              public map(param0: Event): com.mapbox.navigation.core.replay.history.ReplayEventBase;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayHistoryMapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistoryMapper>;
              public toBuilder(): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder;
              public mapToReplayEvent(param0: com.mapbox.navigation.core.history.model.HistoryEvent): com.mapbox.navigation.core.replay.history.ReplayEventBase;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export module ReplayHistoryMapper {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder>;
                public build(): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper;
                public pushEventMappers(param0: java.util.List<any>): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder;
                public locationMapper(param0: com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper<com.mapbox.navigation.core.history.model.HistoryEventUpdateLocation>): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder;
                public statusMapper(param0: com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper<com.mapbox.navigation.core.history.model.HistoryEventGetStatus>): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder;
                public constructor();
                public setRouteMapper(param0: com.mapbox.navigation.core.replay.history.ReplayHistoryEventMapper<com.mapbox.navigation.core.history.model.HistoryEventSetRoute>): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder;
              }
              export module Builder {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistoryMapper.Builder.Companion>;
                }
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
      export module core {
        export module replay {
          export module history {
            export class ReplayHistorySession extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistorySession>;
              public constructor();
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public setOptions(param0: com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions): void;
              public getOptions(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions>;
              public setHistoryFile(param0: string): void;
            }
            export module ReplayHistorySession {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistorySession.Companion>;
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
      export module core {
        export module replay {
          export module history {
            export class ReplayHistorySessionOptions {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions>;
              public getReplayHistoryMapper(): com.mapbox.navigation.core.replay.history.ReplayHistoryMapper;
              public hashCode(): number;
              public getFilePath(): string;
              public toString(): string;
              public toBuilder(): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions.Builder;
              public equals(param0: any): boolean;
              public getEnableSetRoute(): boolean;
            }
            export module ReplayHistorySessionOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions.Builder>;
                public build(): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions;
                public replayHistoryMapper(param0: com.mapbox.navigation.core.replay.history.ReplayHistoryMapper): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions.Builder;
                public enableSetRoute(param0: boolean): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions.Builder;
                public constructor();
                public filePath(param0: string): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions.Builder;
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
      export module core {
        export module replay {
          export module history {
            export class ReplaySetNavigationRoute extends com.mapbox.navigation.core.replay.history.ReplayEventBase {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplaySetNavigationRoute>;
              public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public toBuilder(): com.mapbox.navigation.core.replay.history.ReplaySetNavigationRoute.Builder;
              public hashCode(): number;
              public toString(): string;
              public getEventTimestamp(): number;
              public equals(param0: any): boolean;
            }
            export module ReplaySetNavigationRoute {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplaySetNavigationRoute.Builder>;
                public constructor(param0: number);
                public route(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.replay.history.ReplaySetNavigationRoute.Builder;
                public build(): com.mapbox.navigation.core.replay.history.ReplaySetNavigationRoute;
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
      export module core {
        export module replay {
          export module history {
            export class ReplaySetRoute extends com.mapbox.navigation.core.replay.history.ReplayEventBase {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.history.ReplaySetRoute>;
              public component2(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public component1(): number;
              public hashCode(): number;
              public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public copy(param0: number, param1: com.mapbox.api.directions.v5.models.DirectionsRoute): com.mapbox.navigation.core.replay.history.ReplaySetRoute;
              public toString(): string;
              public constructor(param0: number, param1: com.mapbox.api.directions.v5.models.DirectionsRoute);
              public getEventTimestamp(): number;
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
    export module navigation {
      export module core {
        export module replay {
          export module route {
            export class ReplayPolylineDecodeStream extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayPolylineDecodeStream>;
              public getEncodedPath(): string;
              public getCurrent(): com.mapbox.geojson.Point;
              public skip(param0: number): void;
              public decode(param0: number, param1: string): java.util.List<com.mapbox.geojson.Point>;
              public hasNext(): boolean;
              public remove(): void;
              public constructor(param0: string, param1: number);
              public next(): com.mapbox.geojson.Point;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayProgressObserver extends com.mapbox.navigation.core.trip.session.RouteProgressObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayProgressObserver>;
              public onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
              public constructor(param0: com.mapbox.navigation.core.replay.MapboxReplayer, param1: com.mapbox.navigation.core.replay.route.ReplayRouteMapper);
              public constructor(param0: com.mapbox.navigation.core.replay.MapboxReplayer);
              public updateOptions(param0: com.mapbox.navigation.core.replay.route.ReplayRouteOptions): com.mapbox.navigation.core.replay.route.ReplayProgressObserver;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteDriver {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteDriver>;
              public constructor();
              public driveRouteLeg(param0: com.mapbox.api.directions.v5.models.RouteLeg): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
              public drivePointList(param0: com.mapbox.navigation.core.replay.route.ReplayRouteOptions, param1: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteInterpolator {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteInterpolator>;
              public constructor();
              public createBearingProfile(param0: java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>): void;
              public createSpeedProfile(param0: com.mapbox.navigation.core.replay.route.ReplayRouteOptions, param1: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
              public interpolateSpeed(param0: com.mapbox.navigation.core.replay.route.ReplayRouteOptions, param1: number, param2: number, param3: number): com.mapbox.navigation.core.replay.route.ReplayRouteSegment;
            }
            export module ReplayRouteInterpolator {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteInterpolator.Companion>;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteLocation {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
              public getTimeSeconds(): number;
              public getDistance(): number;
              public toString(): string;
              public getTimeMillis(): number;
              public getBearing(): number;
              public setBearing(param0: number): void;
              public getPoint(): com.mapbox.geojson.Point;
              public setTimeMillis(param0: number): void;
              public getSpeedMps(): number;
              public setDistance(param0: number): void;
              public getRouteIndex(): java.lang.Integer;
              public constructor(param0: java.lang.Integer, param1: com.mapbox.geojson.Point);
              public setSpeedMps(param0: number): void;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteMapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteMapper>;
              /** @deprecated */
              public constructor(param0: com.mapbox.navigation.core.replay.route.ReplayRouteOptions, param1: com.mapbox.base.common.logger.Logger);
              public constructor();
              public mapDirectionsRouteGeometry(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public mapGeometry(param0: string): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public mapRouteLegAnnotation(param0: com.mapbox.api.directions.v5.models.RouteLeg): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public static mapToUpdateLocation(param0: number, param1: globalAndroid.location.Location): com.mapbox.navigation.core.replay.history.ReplayEventBase;
              public getOptions(): com.mapbox.navigation.core.replay.route.ReplayRouteOptions;
              public static mapToUpdateLocation(param0: number, param1: com.mapbox.geojson.Point): com.mapbox.navigation.core.replay.history.ReplayEventUpdateLocation;
              public constructor(param0: com.mapbox.navigation.core.replay.route.ReplayRouteOptions);
              public setOptions(param0: com.mapbox.navigation.core.replay.route.ReplayRouteOptions): void;
              public mapDirectionsRouteLegAnnotation(param0: com.mapbox.api.directions.v5.models.DirectionsRoute): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public mapPointList(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
              public mapRouteLegGeometry(param0: com.mapbox.api.directions.v5.models.RouteLeg): java.util.List<com.mapbox.navigation.core.replay.history.ReplayEventBase>;
            }
            export module ReplayRouteMapper {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteMapper.Companion>;
                public mapToUpdateLocation(param0: number, param1: com.mapbox.geojson.Point): com.mapbox.navigation.core.replay.history.ReplayEventUpdateLocation;
                public mapToUpdateLocation(param0: number, param1: globalAndroid.location.Location): com.mapbox.navigation.core.replay.history.ReplayEventBase;
                public mapToUpdateLocation$libnavigation_core_release(param0: com.mapbox.navigation.core.replay.route.ReplayRouteLocation): com.mapbox.navigation.core.replay.history.ReplayEventBase;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteOptions {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteOptions>;
              public getTurnSpeedMps(): number;
              public toBuilder(): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
              public getMaxSpeedMps(): number;
              public hashCode(): number;
              public getMinAcceleration(): number;
              public getFrequency(): number;
              public toString(): string;
              public getMaxAcceleration(): number;
              public equals(param0: any): boolean;
              public getUTurnSpeedMps(): number;
            }
            export module ReplayRouteOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder>;
                public uTurnSpeedMps(param0: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
                public minAcceleration(param0: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
                public maxSpeedMps(param0: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
                public build(): com.mapbox.navigation.core.replay.route.ReplayRouteOptions;
                public constructor();
                public frequency(param0: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
                public maxAcceleration(param0: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
                public turnSpeedMps(param0: number): com.mapbox.navigation.core.replay.route.ReplayRouteOptions.Builder;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteSegment {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSegment>;
              public hashCode(): number;
              public component2(): number;
              public getStartSpeedMps(): number;
              public component7(): number;
              public component5(): number;
              public copy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteStep>): com.mapbox.navigation.core.replay.route.ReplayRouteSegment;
              public getEndSpeedMps(): number;
              public toString(): string;
              public getTotalDistance(): number;
              public getSpeedUpDistance(): number;
              public component8(): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteStep>;
              public component1(): number;
              public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteStep>);
              public getMaxSpeedMps(): number;
              public component4(): number;
              public component6(): number;
              public getSteps(): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteStep>;
              public component3(): number;
              public getSlowDownDistance(): number;
              public equals(param0: any): boolean;
              public getCruiseDistance(): number;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteSession extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSession>;
              public constructor();
              public setOptions(param0: com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions): com.mapbox.navigation.core.replay.route.ReplayRouteSession;
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public getOptions(): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions;
            }
            export module ReplayRouteSession {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSession.Companion>;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteSessionOptions {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions>;
              public getLocationResetEnabled(): boolean;
              public getReplayRouteOptions(): com.mapbox.navigation.core.replay.route.ReplayRouteOptions;
              public hashCode(): number;
              public getDecodeMinDistance(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public toBuilder(): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions.Builder;
            }
            export module ReplayRouteSessionOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions.Builder>;
                public replayRouteOptions(param0: com.mapbox.navigation.core.replay.route.ReplayRouteOptions): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions.Builder;
                public build(): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions;
                public decodeMinDistance(param0: number): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions.Builder;
                public constructor();
                public locationResetEnabled(param0: boolean): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions.Builder;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteSmoother {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSmoother>;
              public constructor();
              public segmentRoute(param0: java.util.List<com.mapbox.geojson.Point>, param1: number, param2: number): java.util.List<com.mapbox.geojson.Point>;
              public distanceToSegment(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point, param2: com.mapbox.geojson.Point): java.lang.Double;
              public smoothRoute(param0: java.util.List<com.mapbox.geojson.Point>, param1: number): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
              public distinctPoints(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.geojson.Point>;
            }
            export module ReplayRouteSmoother {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteSmoother.Companion>;
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteStep {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteStep>;
              public getTimeSeconds(): number;
              public hashCode(): number;
              public component2(): number;
              public toString(): string;
              public getAcceleration(): number;
              public component1(): number;
              public component4(): number;
              public getPositionMeters(): number;
              public component3(): number;
              public getSpeedMps(): number;
              public copy(param0: number, param1: number, param2: number, param3: number): com.mapbox.navigation.core.replay.route.ReplayRouteStep;
              public equals(param0: any): boolean;
              public constructor(param0: number, param1: number, param2: number, param3: number);
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
      export module core {
        export module replay {
          export module route {
            export class ReplayRouteTraffic {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteTraffic>;
              public constructor();
              public mapToDistinctRoutePoints(param0: com.mapbox.api.directions.v5.models.RouteLeg): java.util.List<com.mapbox.geojson.Point>;
              public trafficLocations(param0: java.util.List<com.mapbox.geojson.Point>, param1: java.util.List<java.lang.Double>, param2: java.util.List<java.lang.Double>): java.util.List<com.mapbox.navigation.core.replay.route.ReplayRouteLocation>;
            }
            export module ReplayRouteTraffic {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.ReplayRouteTraffic.Companion>;
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
      export module core {
        export module replay {
          export module route {
            export class RouteLegIdentifier {
              public static class: java.lang.Class<com.mapbox.navigation.core.replay.route.RouteLegIdentifier>;
              public hashCode(): number;
              public component2(): number;
              public getLegIndex(): number;
              public getRouteId(): string;
              public toString(): string;
              public copy(param0: string, param1: number): com.mapbox.navigation.core.replay.route.RouteLegIdentifier;
              public constructor(param0: string, param1: number);
              public equals(param0: any): boolean;
              public component1(): string;
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
      export module core {
        export module reroute {
          export class InternalRerouteController extends com.mapbox.navigation.core.reroute.NavigationRerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.InternalRerouteController>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.reroute.InternalRerouteController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { reroute(param0: com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback): void; reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void; getState(): com.mapbox.navigation.core.reroute.RerouteState; reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void; interrupt(): void; registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean; unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean });
            public constructor();
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(param0: com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback): void;
            public reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
          }
          export module InternalRerouteController {
            export class RoutesCallback {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.reroute.InternalRerouteController$RoutesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewRoutes(param0: com.mapbox.navigation.core.reroute.RerouteResult): void });
              public constructor();
              public onNewRoutes(param0: com.mapbox.navigation.core.reroute.RerouteResult): void;
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
      export module core {
        export module reroute {
          export class InternalRerouteControllerAdapter implements com.mapbox.navigation.core.reroute.InternalRerouteController, com.mapbox.navigation.core.reroute.NavigationRerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.InternalRerouteControllerAdapter>;
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
            public reroute(param0: com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback): void;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
            public constructor(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController);
          }
          export module InternalRerouteControllerAdapter {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.InternalRerouteControllerAdapter.Companion>;
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
      export module core {
        export module reroute {
          export class LegacyRerouteControllerAdapter implements com.mapbox.navigation.core.reroute.NavigationRerouteController, com.mapbox.navigation.core.reroute.RerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.LegacyRerouteControllerAdapter>;
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public constructor(param0: com.mapbox.navigation.core.reroute.RerouteController);
            public reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module reroute {
          export class MapboxRerouteController extends com.mapbox.navigation.core.reroute.InternalRerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.MapboxRerouteController>;
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public setRerouteOptionsAdapter$libnavigation_core_release(param0: com.mapbox.navigation.core.reroute.RerouteOptionsAdapter): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public constructor(param0: com.mapbox.navigation.core.directions.session.DirectionsSession, param1: com.mapbox.navigation.core.trip.session.TripSession, param2: com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater, param3: com.mapbox.navigation.base.options.RerouteOptions, param4: com.mapbox.navigation.utils.internal.ThreadController, param5: com.mapbox.navigation.core.ev.EVDynamicDataHolder);
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
            public reroute(param0: com.mapbox.navigation.core.reroute.InternalRerouteController.RoutesCallback): void;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
            public constructor(param0: com.mapbox.navigation.core.directions.session.DirectionsSession, param1: com.mapbox.navigation.core.trip.session.TripSession, param2: com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater, param3: com.mapbox.navigation.base.options.RerouteOptions, param4: com.mapbox.navigation.utils.internal.ThreadController, param5: com.mapbox.navigation.core.reroute.MapboxRerouteOptionsAdapter);
          }
          export module MapboxRerouteController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.MapboxRerouteController.Companion>;
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
      export module core {
        export module reroute {
          export class MapboxRerouteOptionsAdapter extends com.mapbox.navigation.core.reroute.RerouteOptionsAdapter {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.MapboxRerouteOptionsAdapter>;
            public constructor(param0: java.util.List<any>);
            public constructor(param0: com.mapbox.navigation.core.ev.EVDynamicDataHolder);
            public setExternalOptionsAdapter(param0: com.mapbox.navigation.core.reroute.RerouteOptionsAdapter): void;
            public onRouteOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.RouteOptions;
            public getExternalOptionsAdapter(): com.mapbox.navigation.core.reroute.RerouteOptionsAdapter;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module reroute {
          export class NavigationRerouteController extends com.mapbox.navigation.core.reroute.RerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.NavigationRerouteController>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.reroute.NavigationRerouteController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void; getState(): com.mapbox.navigation.core.reroute.RerouteState; reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void; interrupt(): void; registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean; unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean });
            public constructor();
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public reroute(param0: com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback): void;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
          }
          export module NavigationRerouteController {
            export class RoutesCallback {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.NavigationRerouteController.RoutesCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.reroute.NavigationRerouteController$RoutesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.base.route.RouterOrigin): void });
              public constructor();
              public onNewRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.base.route.RouterOrigin): void;
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
      export module core {
        export module reroute {
          export class RerouteController {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteController>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.reroute.RerouteController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getState(): com.mapbox.navigation.core.reroute.RerouteState; reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void; interrupt(): void; registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean; unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean });
            public constructor();
            public reroute(param0: com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback): void;
            public registerRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public interrupt(): void;
            public unregisterRerouteStateObserver(param0: com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver): boolean;
            public getState(): com.mapbox.navigation.core.reroute.RerouteState;
          }
          export module RerouteController {
            export class RerouteStateObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteController.RerouteStateObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.reroute.RerouteController$RerouteStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRerouteStateChanged(param0: com.mapbox.navigation.core.reroute.RerouteState): void });
              public constructor();
              public onRerouteStateChanged(param0: com.mapbox.navigation.core.reroute.RerouteState): void;
            }
            export class RoutesCallback {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteController.RoutesCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.reroute.RerouteController$RoutesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewRoutes(param0: java.util.List<any>): void });
              public constructor();
              public onNewRoutes(param0: java.util.List<any>): void;
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
      export module core {
        export module reroute {
          export class RerouteOptionsAdapter {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteOptionsAdapter>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.reroute.RerouteOptionsAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRouteOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.RouteOptions });
            public constructor();
            public onRouteOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.RouteOptions;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module reroute {
          export class RerouteResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteResult>;
            public getInitialLegIndex(): number;
            public constructor(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: number, param2: com.mapbox.navigation.base.route.RouterOrigin);
            public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
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
      export module core {
        export module reroute {
          export abstract class RerouteState {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState>;
          }
          export module RerouteState {
            export class Failed extends com.mapbox.navigation.core.reroute.RerouteState {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState.Failed>;
              public hashCode(): number;
              public toString(): string;
              public constructor(param0: string, param1: java.lang.Throwable);
              public component1(): string;
              public component2(): java.lang.Throwable;
              public component3(): java.util.List<com.mapbox.navigation.base.route.RouterFailure>;
              public constructor(param0: string);
              public getThrowable(): java.lang.Throwable;
              public equals(param0: any): boolean;
              public constructor(param0: string, param1: java.lang.Throwable, param2: java.util.List<com.mapbox.navigation.base.route.RouterFailure>);
              public getMessage(): string;
              public getReasons(): java.util.List<com.mapbox.navigation.base.route.RouterFailure>;
              public copy(param0: string, param1: java.lang.Throwable, param2: java.util.List<com.mapbox.navigation.base.route.RouterFailure>): com.mapbox.navigation.core.reroute.RerouteState.Failed;
            }
            export class FetchingRoute extends com.mapbox.navigation.core.reroute.RerouteState {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState.FetchingRoute>;
              public static INSTANCE: com.mapbox.navigation.core.reroute.RerouteState.FetchingRoute;
            }
            export class Idle extends com.mapbox.navigation.core.reroute.RerouteState {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState.Idle>;
              public static INSTANCE: com.mapbox.navigation.core.reroute.RerouteState.Idle;
            }
            export class Interrupted extends com.mapbox.navigation.core.reroute.RerouteState {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState.Interrupted>;
              public static INSTANCE: com.mapbox.navigation.core.reroute.RerouteState.Interrupted;
            }
            export class RouteFetched extends com.mapbox.navigation.core.reroute.RerouteState {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteState.RouteFetched>;
              public component1(): com.mapbox.navigation.base.route.RouterOrigin;
              public hashCode(): number;
              public toString(): string;
              public constructor(param0: com.mapbox.navigation.base.route.RouterOrigin);
              public copy(param0: com.mapbox.navigation.base.route.RouterOrigin): com.mapbox.navigation.core.reroute.RerouteState.RouteFetched;
              public equals(param0: any): boolean;
              public getRouterOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
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
      export module core {
        export module reroute {
          export class RerouteStateObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RerouteStateObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.reroute.RerouteStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRerouteStateChanged(param0: com.mapbox.navigation.core.reroute.RerouteState): void });
            public constructor();
            public onRerouteStateChanged(param0: com.mapbox.navigation.core.reroute.RerouteState): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module reroute {
          export abstract class RouteRequestResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RouteRequestResult>;
          }
          export module RouteRequestResult {
            export class Cancellation extends com.mapbox.navigation.core.reroute.RouteRequestResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RouteRequestResult.Cancellation>;
              public static INSTANCE: com.mapbox.navigation.core.reroute.RouteRequestResult.Cancellation;
            }
            export class Failure extends com.mapbox.navigation.core.reroute.RouteRequestResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RouteRequestResult.Failure>;
              public constructor(param0: java.util.List<com.mapbox.navigation.base.route.RouterFailure>);
              public getReasons(): java.util.List<com.mapbox.navigation.base.route.RouterFailure>;
            }
            export class Success extends com.mapbox.navigation.core.reroute.RouteRequestResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.reroute.RouteRequestResult.Success>;
              public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public getRouterOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
              public constructor(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.base.route.RouterOrigin);
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
      export module core {
        export module routealternatives {
          export class AlternativeMetadataProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.AlternativeMetadataProvider>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routealternatives.AlternativeMetadataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getMetadataFor(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata });
            public constructor();
            public getMetadataFor(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class AlternativeRouteInfo {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.AlternativeRouteInfo>;
            public getDuration(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getDistance(): number;
            public constructor(param0: number, param1: number);
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
      export module core {
        export module routealternatives {
          export class AlternativeRouteIntersection {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.AlternativeRouteIntersection>;
            public getLocation(): com.mapbox.geojson.Point;
            public getLegIndex(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public constructor(param0: com.mapbox.geojson.Point, param1: number, param2: number, param3: number);
            public getGeometryIndexInRoute(): number;
            public toString(): string;
            public getGeometryIndexInLeg(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class AlternativeRouteMetadata {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata>;
            public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.core.routealternatives.AlternativeRouteIntersection, param2: com.mapbox.navigation.core.routealternatives.AlternativeRouteIntersection, param3: com.mapbox.navigation.core.routealternatives.AlternativeRouteInfo, param4: com.mapbox.navigation.core.routealternatives.AlternativeRouteInfo, param5: number);
            /** @deprecated */
            public getAlternativeId(): number;
            public getForkIntersectionOfPrimaryRoute(): com.mapbox.navigation.core.routealternatives.AlternativeRouteIntersection;
            public getForkIntersectionOfAlternativeRoute(): com.mapbox.navigation.core.routealternatives.AlternativeRouteIntersection;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getInfoFromFork(): com.mapbox.navigation.core.routealternatives.AlternativeRouteInfo;
            public getInfoFromStartOfPrimary(): com.mapbox.navigation.core.routealternatives.AlternativeRouteInfo;
            public toString(): string;
            public getNavigationRoute(): com.mapbox.navigation.base.route.NavigationRoute;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export abstract class DirectionsRequestResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult>;
          }
          export module DirectionsRequestResult {
            export abstract class ErrorResponse extends com.mapbox.navigation.core.routealternatives.DirectionsRequestResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse>;
            }
            export module ErrorResponse {
              export class NotRetryableError extends com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse {
                public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.NotRetryableError>;
                public static INSTANCE: com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.NotRetryableError;
              }
              export class RetryableError extends com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse {
                public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.RetryableError>;
                public static INSTANCE: com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.RetryableError;
              }
              export class RetryableErrorWithDelay extends com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse {
                public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.RetryableErrorWithDelay>;
                public toString(): string;
                public constructor(param0: number);
                public component1(): number;
                public equals(param0: any): boolean;
                public getDelayMilliseconds(): number;
                public copy(param0: number): com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.ErrorResponse.RetryableErrorWithDelay;
                public hashCode(): number;
              }
            }
            export class SuccessfulResponse extends com.mapbox.navigation.core.routealternatives.DirectionsRequestResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.SuccessfulResponse>;
              public copy(param0: com.mapbox.api.directions.v5.models.DirectionsResponse): com.mapbox.navigation.core.routealternatives.DirectionsRequestResult.SuccessfulResponse;
              public getBody(): com.mapbox.api.directions.v5.models.DirectionsResponse;
              public component1(): com.mapbox.api.directions.v5.models.DirectionsResponse;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public constructor(param0: com.mapbox.api.directions.v5.models.DirectionsResponse);
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
      export module core {
        export module routealternatives {
          export class NavigationRouteAlternativesObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRouteAlternatives(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: com.mapbox.navigation.base.route.RouterOrigin): void; onRouteAlternativesError(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesError): void });
            public constructor();
            public onRouteAlternatives(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: com.mapbox.navigation.base.route.RouterOrigin): void;
            public onRouteAlternativesError(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesError): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class NavigationRouteAlternativesRequestCallback {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesRequestCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesRequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRouteAlternativeRequestFinished(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: com.mapbox.navigation.base.route.RouterOrigin): void; onRouteAlternativesRequestError(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesError): void });
            public constructor();
            public onRouteAlternativesRequestError(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesError): void;
            public onRouteAlternativeRequestFinished(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param2: com.mapbox.navigation.base.route.RouterOrigin): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class OnlineRouteAlternativesSwitch extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.OnlineRouteAlternativesSwitch>;
            public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
            public constructor();
            public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
            public constructor(param0: number, param1: number, param2: number, param3: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class RouteAlternativesController extends com.mapbox.navigation.core.routealternatives.AlternativeMetadataProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesController>;
            public register(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver): void;
            public triggerAlternativeRequest(param0: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesRequestCallback): void;
            public constructor(param0: com.mapbox.navigation.base.route.RouteAlternativesOptions, param1: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator, param2: com.mapbox.navigation.core.trip.session.TripSession, param3: com.mapbox.navigation.utils.internal.ThreadController);
            public register(param0: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver): void;
            public unregister(param0: com.mapbox.navigation.core.routealternatives.NavigationRouteAlternativesObserver): void;
            public processAlternativesMetadata(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: java.util.List<any>): void;
            public getMetadataFor(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routealternatives.AlternativeRouteMetadata;
            public unregister(param0: com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver): void;
            public unregisterAll(): void;
          }
          export module RouteAlternativesController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesController.Companion>;
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
      export module core {
        export module routealternatives {
          export class RouteAlternativesControllerProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesControllerProvider>;
            public static INSTANCE: com.mapbox.navigation.core.routealternatives.RouteAlternativesControllerProvider;
            public create(param0: com.mapbox.navigation.base.route.RouteAlternativesOptions, param1: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator, param2: com.mapbox.navigation.core.trip.session.TripSession, param3: com.mapbox.navigation.utils.internal.ThreadController): com.mapbox.navigation.core.routealternatives.RouteAlternativesController;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class RouteAlternativesError {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesError>;
            public getMessage(): string;
            public constructor(param0: string, param1: com.mapbox.navigation.base.route.RouterOrigin, param2: java.lang.Throwable);
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getRouterOrigin(): com.mapbox.navigation.base.route.RouterOrigin;
            public getThrowable(): java.lang.Throwable;
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
      export module core {
        export module routealternatives {
          export class RouteAlternativesObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routealternatives.RouteAlternativesObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRouteAlternatives(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<any>, param2: com.mapbox.navigation.base.route.RouterOrigin): void });
            public constructor();
            public onRouteAlternatives(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<any>, param2: com.mapbox.navigation.base.route.RouterOrigin): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routealternatives {
          export class RouteAlternativesRequestCallback {
            public static class: java.lang.Class<com.mapbox.navigation.core.routealternatives.RouteAlternativesRequestCallback>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routealternatives.RouteAlternativesRequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRouteAlternativeRequestFinished(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<any>, param2: com.mapbox.navigation.base.route.RouterOrigin): void; onRouteAlternativesAborted(param0: string): void });
            public constructor();
            public onRouteAlternativeRequestFinished(param0: com.mapbox.navigation.base.trip.model.RouteProgress, param1: java.util.List<any>, param2: com.mapbox.navigation.base.route.RouterOrigin): void;
            public onRouteAlternativesAborted(param0: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routeoptions {
          export class RouteOptionsUpdater {
            public static class: java.lang.Class<com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater>;
            public constructor();
            public update(param0: com.mapbox.api.directions.v5.models.RouteOptions, param1: com.mapbox.navigation.base.trip.model.RouteProgress, param2: com.mapbox.navigation.core.trip.session.LocationMatcherResult): com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult;
          }
          export module RouteOptionsUpdater {
            export abstract class RouteOptionsResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult>;
            }
            export module RouteOptionsResult {
              export class Error extends com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult.Error>;
                public getError(): java.lang.Throwable;
                public toString(): string;
                public constructor(param0: java.lang.Throwable);
                public equals(param0: any): boolean;
                public copy(param0: java.lang.Throwable): com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult.Error;
                public component1(): java.lang.Throwable;
                public hashCode(): number;
              }
              export class Success extends com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult.Success>;
                public toString(): string;
                public constructor(param0: com.mapbox.api.directions.v5.models.RouteOptions);
                public equals(param0: any): boolean;
                public copy(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.navigation.core.routeoptions.RouteOptionsUpdater.RouteOptionsResult.Success;
                public getRouteOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
                public hashCode(): number;
                public component1(): com.mapbox.api.directions.v5.models.RouteOptions;
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
      export module core {
        export module routerefresh {
          export class DirectionsRouteDiffProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.DirectionsRouteDiffProvider>;
            public constructor();
            public buildRouteDiffs(param0: com.mapbox.navigation.base.route.NavigationRoute, param1: com.mapbox.navigation.base.route.NavigationRoute, param2: number): java.util.List<string>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class ExpiringDataRemover {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.ExpiringDataRemover>;
            public constructor(param0: any);
            public removeExpiringDataFromRoutesProgressData(param0: com.mapbox.navigation.core.RoutesRefreshData): com.mapbox.navigation.core.RoutesRefreshData;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class ImmediateRouteRefreshController {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.ImmediateRouteRefreshController>;
            public requestRoutesRefresh(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any): void;
            public constructor(param0: com.mapbox.navigation.core.routerefresh.RouteRefresherExecutor, param1: com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder, param2: kotlinx.coroutines.CoroutineScope, param3: com.mapbox.navigation.core.routerefresh.RouteRefresherListener);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class PlannedRouteRefreshController {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.PlannedRouteRefreshController>;
            public static MAX_RETRY_COUNT: number;
            public constructor(param0: com.mapbox.navigation.core.routerefresh.RouteRefresherExecutor, param1: com.mapbox.navigation.base.route.RouteRefreshOptions, param2: com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder, param3: com.mapbox.navigation.core.routerefresh.RouteRefresherListener, param4: kotlinx.coroutines.CoroutineScope, param5: com.mapbox.navigation.core.routerefresh.RetryRouteRefreshStrategy);
            public resume(): void;
            public pause(): void;
            public constructor(param0: com.mapbox.navigation.core.routerefresh.RouteRefresherExecutor, param1: com.mapbox.navigation.base.route.RouteRefreshOptions, param2: com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder, param3: kotlinx.coroutines.CoroutineScope, param4: com.mapbox.navigation.core.routerefresh.RouteRefresherListener);
            public getRoutesToRefresh(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public startRoutesRefreshing(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
          }
          export module PlannedRouteRefreshController {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.PlannedRouteRefreshController.Companion>;
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
      export module core {
        export module routerefresh {
          export class QueuedRequest {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.QueuedRequest>;
            public getStartCallback(): any;
            public component1(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public component2(): any;
            public getFinishCallback(): any;
            public constructor(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any, param2: any);
            public component3(): any;
            public copy(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any, param2: any): com.mapbox.navigation.core.routerefresh.QueuedRequest;
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
      export module core {
        export module routerefresh {
          export class RefreshObserversManager {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RefreshObserversManager>;
            public constructor();
            public unregisterAllObservers(): void;
            public registerObserver(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshObserver): void;
            public onRoutesRefreshed(param0: com.mapbox.navigation.core.routerefresh.RouteRefresherResult): void;
            public unregisterObserver(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshObserver): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RetryRouteRefreshStrategy {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RetryRouteRefreshStrategy>;
            public constructor(param0: number);
            public shouldRetry(): boolean;
            public onNextAttempt(): void;
            public reset(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshController {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshController>;
            public registerRouteRefreshStateObserver(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver): void;
            public unregisterRouteRefreshStateObserver(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver): void;
            public pauseRouteRefreshes(): void;
            public requestImmediateRouteRefresh(): void;
            public registerRouteRefreshObserver$libnavigation_core_release(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshObserver): void;
            public requestPlannedRouteRefresh$libnavigation_core_release(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>): void;
            public unregisterRouteRefreshObserver$libnavigation_core_release(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshObserver): void;
            public constructor(param0: kotlinx.coroutines.Job, param1: com.mapbox.navigation.core.routerefresh.PlannedRouteRefreshController, param2: com.mapbox.navigation.core.routerefresh.ImmediateRouteRefreshController, param3: com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder, param4: com.mapbox.navigation.core.routerefresh.RefreshObserversManager, param5: com.mapbox.navigation.core.routerefresh.RouteRefresherResultProcessor);
            public destroy$libnavigation_core_release(): void;
            public resumeRouteRefreshes(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshControllerProvider {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshControllerProvider>;
            public static INSTANCE: com.mapbox.navigation.core.routerefresh.RouteRefreshControllerProvider;
            public createRouteRefreshController(param0: kotlinx.coroutines.CoroutineDispatcher, param1: kotlinx.coroutines.CoroutineDispatcher, param2: com.mapbox.navigation.base.route.RouteRefreshOptions, param3: com.mapbox.navigation.core.directions.session.DirectionsSession, param4: com.mapbox.navigation.core.RoutesProgressDataProvider, param5: com.mapbox.navigation.core.ev.EVDynamicDataHolder, param6: com.mapbox.navigation.utils.internal.Time): com.mapbox.navigation.core.routerefresh.RouteRefreshController;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshExtra {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshExtra>;
            public static INSTANCE: com.mapbox.navigation.core.routerefresh.RouteRefreshExtra;
            public static REFRESH_STATE_STARTED: string;
            public static REFRESH_STATE_FINISHED_SUCCESS: string;
            public static REFRESH_STATE_FINISHED_FAILED: string;
            public static REFRESH_STATE_CLEARED_EXPIRED: string;
            public static REFRESH_STATE_CANCELED: string;
          }
          export module RouteRefreshExtra {
            export class RouteRefreshState {
              public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshExtra.RouteRefreshState>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RouteRefreshExtra$RouteRefreshState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
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
      export module core {
        export module routerefresh {
          export class RouteRefreshLog {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshLog>;
            public static INSTANCE: com.mapbox.navigation.core.routerefresh.RouteRefreshLog;
            public static LOG_CATEGORY: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RouteRefreshObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRoutesRefreshed(param0: com.mapbox.navigation.core.RoutesRefreshData): void });
            public constructor();
            public onRoutesRefreshed(param0: com.mapbox.navigation.core.RoutesRefreshData): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshProgressObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshProgressObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RouteRefreshProgressObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onStarted(): void; onSuccess(): void; onFailure(param0: string): void; onClearedExpired(): void; onCancel(): void });
            public constructor();
            public onFailure(param0: string): void;
            public onCancel(): void;
            public onStarted(): void;
            public onSuccess(): void;
            public onClearedExpired(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshStateHolder extends com.mapbox.navigation.core.routerefresh.RouteRefreshProgressObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder>;
            public registerRouteRefreshStateObserver(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver): void;
            public unregisterAllRouteRefreshStateObservers(): void;
            public constructor();
            public unregisterRouteRefreshStateObserver(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver): void;
            public onFailure(param0: string): void;
            public onCancel(): void;
            public onStarted(): void;
            public onSuccess(): void;
            public onClearedExpired(): void;
            public reset(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshStateResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshStateResult>;
            public getMessage(): string;
            public getState(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public constructor(param0: string, param1: string);
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
      export module core {
        export module routerefresh {
          export class RouteRefreshStatesObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RouteRefreshStatesObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onNewState(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshStateResult): void });
            public constructor();
            public onNewState(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshStateResult): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefreshValidator {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshValidator>;
            public static INSTANCE: com.mapbox.navigation.core.routerefresh.RouteRefreshValidator;
            public joinValidationErrorMessages(param0: java.util.List<any>): string;
            public validateRoute(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult;
          }
          export module RouteRefreshValidator {
            export abstract class RouteValidationResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult>;
            }
            export module RouteValidationResult {
              export class Invalid extends com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult.Invalid>;
                public component1(): string;
                public toString(): string;
                public getReason(): string;
                public equals(param0: any): boolean;
                public constructor(param0: string);
                public copy(param0: string): com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult.Invalid;
                public hashCode(): number;
              }
              export class Valid extends com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult.Valid>;
                public static INSTANCE: com.mapbox.navigation.core.routerefresh.RouteRefreshValidator.RouteValidationResult.Valid;
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
      export module core {
        export module routerefresh {
          export class RouteRefresher {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresher>;
            public constructor(param0: com.mapbox.navigation.core.RoutesRefreshDataProvider, param1: com.mapbox.navigation.core.ev.EVRefreshDataProvider, param2: com.mapbox.navigation.core.routerefresh.DirectionsRouteDiffProvider, param3: com.mapbox.navigation.core.directions.session.RouteRefresh);
            public refresh(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: number, param2: any): any;
          }
          export module RouteRefresher {
            export abstract class RouteRefreshResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult>;
            }
            export module RouteRefreshResult {
              export class Fail extends com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult.Fail>;
                public toString(): string;
                public component1(): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
                public copy(param0: com.mapbox.navigation.base.route.NavigationRouterRefreshError): com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult.Fail;
                public equals(param0: any): boolean;
                public getError(): com.mapbox.navigation.base.route.NavigationRouterRefreshError;
                public hashCode(): number;
                public constructor(param0: com.mapbox.navigation.base.route.NavigationRouterRefreshError);
              }
              export class Success extends com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult {
                public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult.Success>;
                public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute);
                public toString(): string;
                public copy(param0: com.mapbox.navigation.base.route.NavigationRoute): com.mapbox.navigation.core.routerefresh.RouteRefresher.RouteRefreshResult.Success;
                public getRoute(): com.mapbox.navigation.base.route.NavigationRoute;
                public equals(param0: any): boolean;
                public component1(): com.mapbox.navigation.base.route.NavigationRoute;
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
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefresherExecutor {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresherExecutor>;
            public constructor(param0: com.mapbox.navigation.core.routerefresh.RouteRefresher, param1: number, param2: kotlinx.coroutines.CoroutineScope);
            public executeRoutesRefresh(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: any, param2: any): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefresherListener {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresherListener>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.routerefresh.RouteRefresherListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onRoutesRefreshed(param0: com.mapbox.navigation.core.routerefresh.RouteRefresherResult): void });
            public constructor();
            public onRoutesRefreshed(param0: com.mapbox.navigation.core.routerefresh.RouteRefresherResult): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module routerefresh {
          export class RouteRefresherResult {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresherResult>;
            public getSuccess(): boolean;
            public constructor(param0: boolean, param1: com.mapbox.navigation.core.RoutesRefreshData);
            public copy(param0: boolean, param1: com.mapbox.navigation.core.RoutesRefreshData): com.mapbox.navigation.core.routerefresh.RouteRefresherResult;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public component2(): com.mapbox.navigation.core.RoutesRefreshData;
            public component1(): boolean;
            public getRefreshedRoutesData(): com.mapbox.navigation.core.RoutesRefreshData;
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
      export module core {
        export module routerefresh {
          export class RouteRefresherResultProcessor extends com.mapbox.navigation.core.routerefresh.RouteRefresherListener {
            public static class: java.lang.Class<com.mapbox.navigation.core.routerefresh.RouteRefresherResultProcessor>;
            public constructor(param0: com.mapbox.navigation.core.routerefresh.RouteRefreshStateHolder, param1: com.mapbox.navigation.core.routerefresh.RefreshObserversManager, param2: com.mapbox.navigation.core.routerefresh.ExpiringDataRemover, param3: com.mapbox.navigation.utils.internal.Time, param4: number);
            public onRoutesRefreshed(param0: com.mapbox.navigation.core.routerefresh.RouteRefresherResult): void;
            public reset(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export class ApplicationLifecycleMonitor {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.ApplicationLifecycleMonitor>;
            public onActivityPaused(param0: globalAndroid.app.Activity): void;
            public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
            public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
            public obtainPortraitPercentage(): number;
            public onActivityStarted(param0: globalAndroid.app.Activity): void;
            public onActivityResumed(param0: globalAndroid.app.Activity): void;
            public constructor(param0: globalAndroid.app.Application);
            public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
            public obtainForegroundPercentage(): number;
            public onActivityStopped(param0: globalAndroid.app.Activity): void;
          }
          export module ApplicationLifecycleMonitor {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.ApplicationLifecycleMonitor.Companion>;
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
      export module core {
        export module telemetry {
          export class DynamicSessionValues {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.DynamicSessionValues>;
            public getTimeSinceLastReroute(): number;
            public setCurrentDistanceTraveled(param0: number): void;
            public constructor(param0: number, param1: number, param2: number, param3: java.util.Date, param4: number, param5: number);
            public setRerouteCount(param0: number): void;
            public component4(): java.util.Date;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public component6(): number;
            public getTimeOfReroute(): number;
            public component2(): number;
            public getAccumulatedDistanceTraveled(): number;
            public getRerouteCount(): number;
            public resetCurrentDistanceTraveled(): void;
            public component1(): number;
            public component5(): number;
            public constructor();
            public setTimeOfReroute(param0: number): void;
            public getDriverModeArrivalTime(): java.util.Date;
            public setTimeSinceLastReroute(param0: number): void;
            public getCurrentDistanceTraveled(): number;
            public toString(): string;
            public setDriverModeArrivalTime(param0: java.util.Date): void;
            public setAccumulatedDistanceTraveled(param0: number): void;
            public accumulateDistanceTraveled(param0: number): void;
            public copy(param0: number, param1: number, param2: number, param3: java.util.Date, param4: number, param5: number): com.mapbox.navigation.core.telemetry.DynamicSessionValues;
            public reset(): void;
            public component3(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export class EventLocations {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.EventLocations>;
            public onBufferFull(): void;
            public constructor(param0: java.util.List<any>, param1: java.util.List<globalAndroid.location.Location>, param2: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener);
            public addPostEventLocation(param0: globalAndroid.location.Location): void;
            public getLocationsCollectorListener(): com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener;
            public postEventLocationsSize(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export class LocationsCollector extends com.mapbox.navigation.core.trip.session.LocationObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.LocationsCollector>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.telemetry.LocationsCollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getLastLocation(): globalAndroid.location.Location; flushBuffers(): void; flushBufferFor(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void; collectLocations(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void; onNewRawLocation(param0: globalAndroid.location.Location): void; onNewLocationMatcherResult(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void });
            public constructor();
            public onNewRawLocation(param0: globalAndroid.location.Location): void;
            public collectLocations(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void;
            public flushBuffers(): void;
            public onNewLocationMatcherResult(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void;
            public flushBufferFor(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void;
            public getLastLocation(): globalAndroid.location.Location;
          }
          export module LocationsCollector {
            export class LocationsCollectorListener {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.telemetry.LocationsCollector$LocationsCollectorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onBufferFull(param0: java.util.List<any>, param1: java.util.List<any>): void });
              public constructor();
              public onBufferFull(param0: java.util.List<any>, param1: java.util.List<any>): void;
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
      export module core {
        export module telemetry {
          export class LocationsCollectorImpl extends com.mapbox.navigation.core.telemetry.LocationsCollector {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.LocationsCollectorImpl>;
            public onNewRawLocation(param0: globalAndroid.location.Location): void;
            public constructor();
            public collectLocations(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void;
            public flushBuffers(): void;
            public onNewLocationMatcherResult(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void;
            public flushBufferFor(param0: com.mapbox.navigation.core.telemetry.LocationsCollector.LocationsCollectorListener): void;
            public getLastLocation(): globalAndroid.location.Location;
          }
          export module LocationsCollectorImpl {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.LocationsCollectorImpl.Companion>;
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
      export module core {
        export module telemetry {
          export class MapboxNavigationTelemetry {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry>;
            public static INSTANCE: com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry;
            public static LOG_CATEGORY: string;
            public static MOCK_PROVIDER: string;
            public unregisterUserFeedbackCallback(param0: com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback): void;
            public postCustomEvent(param0: string, param1: string, param2: string): void;
            public destroy(param0: com.mapbox.navigation.core.MapboxNavigation): void;
            public setApplicationInstance(param0: globalAndroid.app.Application): void;
            public postUserFeedback(param0: string, param1: string, param2: string, param3: string, param4: androidNative.Array<string>, param5: com.mapbox.navigation.core.telemetry.events.FeedbackMetadata, param6: com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback): void;
            public registerUserFeedbackCallback(param0: com.mapbox.navigation.core.internal.telemetry.UserFeedbackCallback): void;
            public provideFeedbackMetadataWrapper(): com.mapbox.navigation.core.telemetry.events.FeedbackMetadataWrapper;
            public initialize(param0: com.mapbox.navigation.core.MapboxNavigation, param1: com.mapbox.navigation.base.options.NavigationOptions, param2: com.mapbox.navigation.base.metrics.MetricsReporter, param3: com.mapbox.navigation.core.telemetry.LocationsCollector): void;
          }
          export module MapboxNavigationTelemetry {
            export abstract class NavTelemetryState {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState>;
            }
            export module NavTelemetryState {
              export class Paused extends com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState.Paused>;
                public getSessionMetadataOnPaused(): com.mapbox.navigation.core.telemetry.SessionMetadataOnPause;
                public constructor(param0: com.mapbox.navigation.core.telemetry.SessionMetadataOnPause);
              }
              export class Running extends com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState.Running>;
                public constructor(param0: com.mapbox.navigation.core.telemetry.SessionMetadata);
                public getSessionMetadata(): com.mapbox.navigation.core.telemetry.SessionMetadata;
              }
              export class Stopped extends com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState.Stopped>;
                public static INSTANCE: com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.NavTelemetryState.Stopped;
              }
            }
            export class RouteData {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.RouteData>;
              public constructor();
              public setNeedHandleDeparture(param0: boolean): void;
              public getOriginalRoute(): com.mapbox.navigation.base.route.NavigationRoute;
              public setRouteProgress(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
              public setOriginalRoute(param0: com.mapbox.navigation.base.route.NavigationRoute): void;
              public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public hasRouteAndRouteProgress(): boolean;
              public getNeedHandleDeparture(): boolean;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.MapboxNavigationTelemetry.WhenMappings>;
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
      export module core {
        export module telemetry {
          export class SessionMetadata {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.SessionMetadata>;
            public copy(param0: string, param1: string, param2: java.util.Date, param3: com.mapbox.navigation.core.telemetry.TelemetryNavSessionState, param4: com.mapbox.navigation.core.telemetry.DynamicSessionValues): com.mapbox.navigation.core.telemetry.SessionMetadata;
            public component1(): string;
            public component4(): com.mapbox.navigation.core.telemetry.TelemetryNavSessionState;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public component5(): com.mapbox.navigation.core.telemetry.DynamicSessionValues;
            public toString(): string;
            public constructor(param0: string, param1: string, param2: java.util.Date, param3: com.mapbox.navigation.core.telemetry.TelemetryNavSessionState, param4: com.mapbox.navigation.core.telemetry.DynamicSessionValues);
            public getDriverModeId(): string;
            public component2(): string;
            public setDriverModeId(param0: string): void;
            public getDriverModeStartTime(): java.util.Date;
            public getDynamicValues(): com.mapbox.navigation.core.telemetry.DynamicSessionValues;
            public component3(): java.util.Date;
            public getNavigatorSessionIdentifier(): string;
            public getTelemetryNavSessionState(): com.mapbox.navigation.core.telemetry.TelemetryNavSessionState;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export class SessionMetadataOnPause {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.SessionMetadataOnPause>;
            public copy(param0: string): com.mapbox.navigation.core.telemetry.SessionMetadataOnPause;
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getNavigatorSessionIdentifier(): string;
            public toString(): string;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export class TelemetryNavSessionState {
            public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.TelemetryNavSessionState>;
            public static TRIP: com.mapbox.navigation.core.telemetry.TelemetryNavSessionState;
            public static FREE_DRIVE: com.mapbox.navigation.core.telemetry.TelemetryNavSessionState;
            public static values(): androidNative.Array<com.mapbox.navigation.core.telemetry.TelemetryNavSessionState>;
            public static valueOf(param0: string): com.mapbox.navigation.core.telemetry.TelemetryNavSessionState;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module telemetry {
          export module audio {
            export class AudioTypeChain {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeChain>;
              public constructor();
              public setup(param0: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Unknown, param1: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Speaker, param2: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Headphones, param3: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Bluetooth): com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver;
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
      export module core {
        export module telemetry {
          export module audio {
            export abstract class AudioTypeResolver {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver>;
              public chain: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver;
              public obtainAudioType(param0: globalAndroid.content.Context): string;
              public setChain$libnavigation_core_release(param0: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver): void;
              public getChain$libnavigation_core_release(): com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver;
              public nextChain(param0: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver): void;
            }
            export module AudioTypeResolver {
              export class Bluetooth extends com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Bluetooth>;
                public constructor();
                public obtainAudioType(param0: globalAndroid.content.Context): string;
              }
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Companion>;
              }
              export class Headphones extends com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Headphones>;
                public constructor();
                public obtainAudioType(param0: globalAndroid.content.Context): string;
              }
              export class Speaker extends com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Speaker>;
                public constructor();
                public obtainAudioType(param0: globalAndroid.content.Context): string;
              }
              export class Unknown extends com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver.Unknown>;
                public constructor();
                public obtainAudioType(param0: globalAndroid.content.Context): string;
                public nextChain(param0: com.mapbox.navigation.core.telemetry.audio.AudioTypeResolver): void;
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
      export module core {
        export module telemetry {
          export module events {
            export class AppMetadata {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.AppMetadata>;
              public component2(): string;
              public hashCode(): number;
              public getUserId(): string;
              public toString(): string;
              public component3(): string;
              public component1(): string;
              public constructor(param0: string, param1: string, param2: string, param3: string);
              public copy(param0: string, param1: string, param2: string, param3: string): com.mapbox.navigation.core.telemetry.events.AppMetadata;
              public getName(): string;
              public getSessionId(): string;
              public component4(): string;
              public equals(param0: any): boolean;
              public getVersion(): string;
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
      export module core {
        export module telemetry {
          export module events {
            export class BitmapEncodeOptions {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions>;
              public getWidth(): number;
              public hashCode(): number;
              public toBuilder(): com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions.Builder;
              public getCompressQuality(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export module BitmapEncodeOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions.Builder>;
                public width(param0: number): com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions.Builder;
                public build(): com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions;
                public constructor();
                public compressQuality(param0: number): com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions.Builder;
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
      export module core {
        export module telemetry {
          export module events {
            export class FeedbackEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackEvent>;
              public static INSTANCE: com.mapbox.navigation.core.telemetry.events.FeedbackEvent;
              public static INCORRECT_VISUAL: string;
              public static ROAD_ISSUE: string;
              public static TRAFFIC_ISSUE: string;
              public static OTHER_ISSUE: string;
              public static ROAD_CLOSED: string;
              public static ROUTING_ERROR: string;
              public static ROUTE_NOT_ALLOWED: string;
              public static INCORRECT_VISUAL_GUIDANCE: string;
              public static INCORRECT_AUDIO_GUIDANCE: string;
              public static POSITIONING_ISSUE: string;
              public static ARRIVAL_FEEDBACK_GOOD: string;
              public static ARRIVAL_FEEDBACK_NOT_GOOD: string;
              public static REROUTE: string;
              public static UI: string;
              public static TURN_ICON_INCORRECT: string;
              public static STREET_NAME_INCORRECT: string;
              public static INSTRUCTION_UNNECESSARY: string;
              public static INSTRUCTION_MISSING: string;
              public static MANEUVER_INCORRECT: string;
              public static EXIT_INFO_INCORRECT: string;
              public static LANE_GUIDANCE_INCORRECT: string;
              public static INCORRECT_SPEED_LIMIT: string;
              public static GUIDANCE_TOO_EARLY: string;
              public static GUIDANCE_TOO_LATE: string;
              public static PRONUNCIATION_INCORRECT: string;
              public static ROAD_NAME_REPEATED: string;
              public static ROUTE_NOT_DRIVE_ABLE: string;
              public static ROUTE_NOT_PREFERRED: string;
              public static ALTERNATIVE_ROUTE_NOT_EXPECTED: string;
              public static ROUTE_INCLUDED_MISSING_ROADS: string;
              public static ROUTE_HAD_ROADS_TOO_NARROW_TO_PASS: string;
              public static ROUTED_DOWN_A_ONE_WAY: string;
              public static TURN_WAS_NOT_ALLOWED: string;
              public static CARS_NOT_ALLOWED_ON_STREET: string;
              public static STREET_PERMANENTLY_BLOCKED_OFF: string;
              public static STREET_TEMPORARILY_BLOCKED_OFF: string;
              public static MISSING_ROAD: string;
              public static TRAFFIC_CONGESTION: string;
              public static TRAFFIC_MODERATE: string;
              public static TRAFFIC_NO: string;
              public static ARRIVAL_FEEDBACK_WRONG_LOCATION: string;
              public static ARRIVAL_FEEDBACK_WRONG_ENTRANCE: string;
              public static ARRIVAL_FEEDBACK_CONFUSING_INSTRUCTIONS: string;
              public static ARRIVAL_FEEDBACK_THIS_PLACE_IS_CLOSED: string;
              public static DRIVER_MODE_TRIP: string;
              public static DRIVER_MODE_FREE_DRIVE: string;
            }
            export module FeedbackEvent {
              export class DriverMode {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackEvent.DriverMode>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.telemetry.events.FeedbackEvent$DriverMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class Source {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackEvent.Source>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.telemetry.events.FeedbackEvent$Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class SubType {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackEvent.SubType>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.telemetry.events.FeedbackEvent$SubType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class Type {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackEvent.Type>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.telemetry.events.FeedbackEvent$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
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
    export module navigation {
      export module core {
        export module telemetry {
          export module events {
            export class FeedbackHelper {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackHelper>;
              public static INSTANCE: com.mapbox.navigation.core.telemetry.events.FeedbackHelper;
              public static encodeScreenshot(param0: globalAndroid.graphics.Bitmap): string;
              public static getFeedbackSubTypes(param0: string): androidNative.Array<string>;
              public static encodeScreenshot(param0: globalAndroid.graphics.Bitmap, param1: com.mapbox.navigation.core.telemetry.events.BitmapEncodeOptions): string;
              public static getFreeDriveFeedbackTypes(): androidNative.Array<string>;
              public static getActiveNavigationFeedbackTypes(): androidNative.Array<string>;
              public static getArrivalFeedbackTypes(): androidNative.Array<string>;
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
      export module core {
        export module telemetry {
          export module events {
            export class FeedbackMetadata {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackMetadata>;
              public getPercentTimeInPortrait$libnavigation_core_release(): java.lang.Integer;
              public getPercentTimeInForeground$libnavigation_core_release(): java.lang.Integer;
              public getSessionIdentifier$libnavigation_core_release(): string;
              public getLocationsBeforeEvent$libnavigation_core_release(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public hashCode(): number;
              public getDriverModeStartTime$libnavigation_core_release(): string;
              public getAppMetadata$libnavigation_core_release(): com.mapbox.navigation.core.telemetry.events.AppMetadata;
              public toJson(param0: com.google.gson.Gson): string;
              public getEventVersion$libnavigation_core_release(): number;
              public getDriverModeIdentifier$libnavigation_core_release(): string;
              public toString(): string;
              public static fromJson(param0: string): com.mapbox.navigation.core.telemetry.events.FeedbackMetadata;
              public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>, param6: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>, param7: com.mapbox.geojson.Point, param8: string, param9: java.lang.Integer, param10: java.lang.Integer, param11: number, param12: com.mapbox.navigation.core.telemetry.events.PhoneState, param13: com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute, param14: com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress, param15: com.mapbox.navigation.core.telemetry.events.AppMetadata);
              public getMetricsRouteProgress$libnavigation_core_release(): com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress;
              public getDriverMode$libnavigation_core_release(): string;
              public getLocationEngineNameExternal$libnavigation_core_release(): string;
              public getLastLocation$libnavigation_core_release(): com.mapbox.geojson.Point;
              public getPhoneState$libnavigation_core_release(): com.mapbox.navigation.core.telemetry.events.PhoneState;
              public equals(param0: any): boolean;
              public getRerouteCount$libnavigation_core_release(): number;
              public getLocationsAfterEvent$libnavigation_core_release(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public getMetricsDirectionsRoute$libnavigation_core_release(): com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute;
            }
            export module FeedbackMetadata {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackMetadata.Companion>;
                public fromJson(param0: string): com.mapbox.navigation.core.telemetry.events.FeedbackMetadata;
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
      export module core {
        export module telemetry {
          export module events {
            export class FeedbackMetadataWrapper {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FeedbackMetadataWrapper>;
              public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: com.mapbox.geojson.Point, param6: string, param7: java.lang.Integer, param8: java.lang.Integer, param9: number, param10: com.mapbox.navigation.core.telemetry.events.PhoneState, param11: com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute, param12: com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress, param13: com.mapbox.navigation.core.telemetry.events.AppMetadata, param14: com.mapbox.navigation.core.telemetry.LocationsCollector);
              public get(): com.mapbox.navigation.core.telemetry.events.FeedbackMetadata;
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
      export module core {
        export module telemetry {
          export module events {
            export class FreeDriveEventType {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.FreeDriveEventType>;
              public static START: com.mapbox.navigation.core.telemetry.events.FreeDriveEventType;
              public static STOP: com.mapbox.navigation.core.telemetry.events.FreeDriveEventType;
              public static values(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.FreeDriveEventType>;
              public static valueOf(param0: string): com.mapbox.navigation.core.telemetry.events.FreeDriveEventType;
              public getType(): string;
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
      export module core {
        export module telemetry {
          export module events {
            export class MetricsDirectionsRoute {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute>;
              public getStepCount(): number;
              public hashCode(): number;
              public component2(): number;
              public constructor(param0: com.mapbox.navigation.base.route.NavigationRoute);
              public constructor(param0: number, param1: number, param2: number, param3: string, param4: string);
              public getDistance(): number;
              public toString(): string;
              public component5(): string;
              public component1(): number;
              public getGeometry(): string;
              public getRequestIdentifier(): string;
              public component3(): number;
              public component4(): string;
              public getDuration(): number;
              public copy(param0: number, param1: number, param2: number, param3: string, param4: string): com.mapbox.navigation.core.telemetry.events.MetricsDirectionsRoute;
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
    export module navigation {
      export module core {
        export module telemetry {
          export module events {
            export class MetricsRouteProgress {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress>;
              public getDirectionsRouteDuration(): number;
              public getPreviousStepModifier(): string;
              public hashCode(): number;
              public getDirectionsRouteStepCount(): number;
              public getDurationRemaining(): number;
              public getUpcomingStepType(): string;
              public getDirectionsRouteGeometry(): string;
              public getDistanceTraveled(): number;
              public getLegCount(): number;
              public toString(): string;
              public getUpcomingStepName(): string;
              public getCurrentStepDistance(): number;
              public getDirectionsRouteDistance(): number;
              public getCurrentStepDuration(): number;
              public getDirectionsRouteRequestIdentifier(): string;
              public getLegIndex(): number;
              public getPreviousStepInstruction(): string;
              public getDistanceRemaining(): number;
              public getUpcomingStepModifier(): string;
              public getPreviousStepType(): string;
              public getDirectionsRouteProfile(): string;
              public getStepIndex(): number;
              public getStepCount(): number;
              public getPreviousStepName(): string;
              public getCurrentStepDistanceRemaining(): number;
              public getDirectionsRouteIndex(): number;
              public getCurrentStepDurationRemaining(): number;
              public constructor(param0: com.mapbox.navigation.base.trip.model.RouteProgress);
              public getDirectionsRouteDestination(): com.mapbox.geojson.Point;
              public equals(param0: any): boolean;
              public getUpcomingStepInstruction(): string;
            }
            export module MetricsRouteProgress {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress.Companion>;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationAppUserTurnstileEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationAppUserTurnstileEvent>;
              public constructor(param0: com.mapbox.common.TurnstileEvent);
              public getEvent$libnavigation_core_release(): com.mapbox.common.TurnstileEvent;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationArriveEvent extends com.mapbox.navigation.core.telemetry.events.NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationArriveEvent>;
              public getEventName$libnavigation_core_release(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.PhoneState);
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationCancelEvent extends com.mapbox.navigation.core.telemetry.events.NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationCancelEvent>;
              public getComment(): string;
              public setComment(param0: string): void;
              public setRating(param0: number): void;
              public getArrivalTimestamp(): string;
              public getEventName$libnavigation_core_release(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public setArrivalTimestamp(param0: string): void;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.PhoneState);
              public getRating(): number;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationCustomEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationCustomEvent>;
              public getDriverModeId(): string;
              public setType(param0: string): void;
              public setCreatedMonotime(param0: number): void;
              public toJson(param0: com.google.gson.Gson): string;
              public getOperatingSystem(): string;
              public setLng(param0: number): void;
              public setLocationEngine(param0: string): void;
              public getEvent(): string;
              public getSdkIdentifier(): string;
              public getLat(): number;
              public getSimulation(): boolean;
              public setCustomEventVersion(param0: string): void;
              public getCreatedMonotime(): number;
              public getEventVersion(): number;
              public setSdkIdentifier(param0: string): void;
              public getType(): string;
              public getCreated(): string;
              public getDriverModeStartTimestampMonotime(): number;
              public constructor();
              public getDevice(): string;
              public setDriverModeStartTimestampMonotime(param0: number): void;
              public toValue(): com.mapbox.bindgen.Value;
              public setSimulation(param0: boolean): void;
              public getLng(): number;
              public getMetricName(): string;
              public getPayload(): string;
              public setDriverMode(param0: string): void;
              public getCustomEventVersion(): string;
              public setLat(param0: number): void;
              public getLocationEngine(): string;
              public getDriverModeStartTimestamp(): string;
              public setEventVersion(param0: number): void;
              public getDriverMode(): string;
              public getVersion(): string;
              public setPayload(param0: string): void;
            }
            export module NavigationCustomEvent {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationCustomEvent.Companion>;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationDepartEvent extends com.mapbox.navigation.core.telemetry.events.NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationDepartEvent>;
              public getEventName$libnavigation_core_release(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.PhoneState);
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
      export module core {
        export module telemetry {
          export module events {
            export abstract class NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationEvent>;
              public getOriginalEstimatedDistance(): number;
              public getSdkVersion(): string;
              public getConnectivity(): string;
              public setDistanceCompleted(param0: number): void;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public getStartTimestamp(): string;
              public toJson(param0: com.google.gson.Gson): string;
              public setBannerIndex(param0: number): void;
              public getTotalStepCount(): number;
              public setLng(param0: number): void;
              public getVolumeLevel(): number;
              public getSessionIdentifier(): string;
              public setRerouteCount(param0: number): void;
              public setLocationEngine(param0: string): void;
              public getNavigatorSessionIdentifier(): string;
              public setNavigatorSessionIdentifier(param0: string): void;
              public setLegIndex(param0: number): void;
              public getVoiceIndex(): number;
              public getEvent(): string;
              public getTripIdentifier(): string;
              public getGeometry(): string;
              public setOriginalEstimatedDuration(param0: number): void;
              public getApplicationState(): string;
              public getBannerIndex(): number;
              public getLat(): number;
              public setDurationRemaining(param0: number): void;
              public getLegIndex(): number;
              public setTripIdentifier(param0: string): void;
              public getBatteryPluggedIn(): boolean;
              public getCreated(): string;
              public setRequestIdentifier(param0: string): void;
              public setStartTimestamp(param0: string): void;
              public setVoiceIndex(param0: number): void;
              public getOriginalStepCount(): number;
              public setDistanceRemaining(param0: number): void;
              public getDevice(): string;
              public getEventName$libnavigation_core_release(): string;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.PhoneState);
              public toValue(): com.mapbox.bindgen.Value;
              public getBatteryLevel(): number;
              public getLng(): number;
              public getAbsoluteDistanceToDestination(): number;
              public getMetricName(): string;
              public setDriverMode(param0: string): void;
              public getLocationEngine(): string;
              public setPercentTimeInForeground(param0: number): void;
              public setEventVersion(param0: number): void;
              public setTotalStepCount(param0: number): void;
              public getRequestIdentifier(): string;
              public getRerouteCount(): number;
              public getOriginalGeometry(): string;
              public setStepIndex(param0: number): void;
              public getVersion(): string;
              public setOriginalEstimatedDistance(param0: number): void;
              public getAudioType(): string;
              public getEstimatedDistance(): number;
              public getDurationRemaining(): number;
              public getOperatingSystem(): string;
              public getLegCount(): number;
              public getPercentTimeInForeground(): number;
              public getOriginalEstimatedDuration(): number;
              public getScreenBrightness(): number;
              public setOriginalRequestIdentifier(param0: string): void;
              public getSdkIdentifier(): string;
              public setGeometry(param0: string): void;
              public setOriginalStepCount(param0: number): void;
              public getSimulation(): boolean;
              public setAppMetadata(param0: com.mapbox.navigation.core.telemetry.events.AppMetadata): void;
              public getDistanceRemaining(): number;
              public getOriginalRequestIdentifier(): string;
              public getDistanceCompleted(): number;
              public getEventVersion(): number;
              public setEstimatedDuration(param0: number): void;
              public setSdkIdentifier(param0: string): void;
              public setOriginalGeometry(param0: string): void;
              public getStepIndex(): number;
              public getAppMetadata(): com.mapbox.navigation.core.telemetry.events.AppMetadata;
              public getStepCount(): number;
              public getProfile(): string;
              public getPercentTimeInPortrait(): number;
              public setStepCount(param0: number): void;
              public setSimulation(param0: boolean): void;
              public setPercentTimeInPortrait(param0: number): void;
              public setLegCount(param0: number): void;
              public setLat(param0: number): void;
              public getEstimatedDuration(): number;
              public getDriverMode(): string;
              public setSessionIdentifier(param0: string): void;
              public setEstimatedDistance(param0: number): void;
              public setProfile(param0: string): void;
              public setAbsoluteDistanceToDestination(param0: number): void;
            }
            export module NavigationEvent {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationEvent.Companion>;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationFeedbackEvent extends com.mapbox.navigation.core.telemetry.events.NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationFeedbackEvent>;
              public setLocationsBefore(param0: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>): void;
              public getScreenshot(): string;
              public getLocationsBefore(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public getEventName$libnavigation_core_release(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public setSource(param0: string): void;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.PhoneState);
              public getUserId(): string;
              public getStep(): com.mapbox.navigation.core.telemetry.events.NavigationStepData;
              public getLocationsAfter(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public getDescription(): string;
              public getFeedbackType(): string;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.PhoneState, param1: com.mapbox.navigation.core.telemetry.events.NavigationStepData);
              public getFeedbackId(): string;
              public setLocationsAfter(param0: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>): void;
              public getSource(): string;
              public setDescription(param0: string): void;
              public setFeedbackSubType(param0: androidNative.Array<string>): void;
              public setFeedbackType(param0: string): void;
              public setScreenshot(param0: string): void;
              public getFeedbackSubType(): androidNative.Array<string>;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationFreeDriveEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationFreeDriveEvent>;
              public getConnectivity(): string;
              public getAudioType(): string;
              public getStartTimestamp(): string;
              public toJson(param0: com.google.gson.Gson): string;
              public getVolumeLevel(): number;
              public getSessionIdentifier(): string;
              public setLocationEngine(param0: string): void;
              public getPercentTimeInForeground(): number;
              public getNavigatorSessionIdentifier(): string;
              public setNavigatorSessionIdentifier(param0: string): void;
              public getEventType(): string;
              public getEvent(): string;
              public getApplicationState(): string;
              public getScreenBrightness(): number;
              public getSimulation(): boolean;
              public setAppMetadata(param0: com.mapbox.navigation.core.telemetry.events.AppMetadata): void;
              public setEventType(param0: string): void;
              public getEventVersion(): number;
              public getBatteryPluggedIn(): boolean;
              public getCreated(): string;
              public getAppMetadata(): com.mapbox.navigation.core.telemetry.events.AppMetadata;
              public setStartTimestamp(param0: string): void;
              public getPercentTimeInPortrait(): number;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.PhoneState);
              public toValue(): com.mapbox.bindgen.Value;
              public getBatteryLevel(): number;
              public setSimulation(param0: boolean): void;
              public getLocation(): com.mapbox.navigation.core.telemetry.events.TelemetryLocation;
              public getMetricName(): string;
              public setPercentTimeInPortrait(param0: number): void;
              public getLocationEngine(): string;
              public setPercentTimeInForeground(param0: number): void;
              public setEventVersion(param0: number): void;
              public setLocation(param0: com.mapbox.navigation.core.telemetry.events.TelemetryLocation): void;
              public setSessionIdentifier(param0: string): void;
              public getVersion(): string;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationRerouteEvent extends com.mapbox.navigation.core.telemetry.events.NavigationEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationRerouteEvent>;
              public setLocationsBefore(param0: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>): void;
              public getSecondsSinceLastReroute(): number;
              public getScreenshot(): string;
              public getLocationsBefore(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public getEventName$libnavigation_core_release(): string;
              public customFields(): java.util.Map<string, com.mapbox.bindgen.Value>;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.PhoneState);
              public getNewDistanceRemaining(): number;
              public setNewGeometry(param0: string): void;
              public getStep(): com.mapbox.navigation.core.telemetry.events.NavigationStepData;
              public getLocationsAfter(): androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public setNewDistanceRemaining(param0: number): void;
              public getNewGeometry(): string;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.PhoneState, param1: com.mapbox.navigation.core.telemetry.events.NavigationStepData);
              public getFeedbackId(): string;
              public getNewDurationRemaining(): number;
              public setLocationsAfter(param0: androidNative.Array<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>): void;
              public setSecondsSinceLastReroute(param0: number): void;
              public setScreenshot(param0: string): void;
              public setNewDurationRemaining(param0: number): void;
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
      export module core {
        export module telemetry {
          export module events {
            export class NavigationStepData {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.NavigationStepData>;
              public getPreviousName(): string;
              public getUpcomingInstruction(): string;
              public getPreviousInstruction(): string;
              public hashCode(): number;
              public constructor(param0: com.mapbox.navigation.core.telemetry.events.MetricsRouteProgress);
              public getDurationRemaining(): number;
              public getUpcomingType(): string;
              public getDistance(): number;
              public getPreviousModifier(): string;
              public getPreviousType(): string;
              public getDistanceRemaining(): number;
              public getDuration(): number;
              public getUpcomingModifier(): string;
              public equals(param0: any): boolean;
              public getUpcomingName(): string;
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
      export module core {
        export module telemetry {
          export module events {
            export class PhoneState {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.PhoneState>;
              public getConnectivity(): string;
              public isBatteryPluggedIn(): boolean;
              public getAudioType(): string;
              public component7(): string;
              public hashCode(): number;
              public component2(): number;
              public constructor(param0: number, param1: number, param2: number, param3: boolean, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string);
              public getUserId(): string;
              public component10(): string;
              public getVolumeLevel(): number;
              public copy(param0: number, param1: number, param2: number, param3: boolean, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string): com.mapbox.navigation.core.telemetry.events.PhoneState;
              public toString(): string;
              public getApplicationState(): string;
              public getScreenBrightness(): number;
              public component3(): number;
              public component6(): string;
              public getCreated(): string;
              public component9(): string;
              public getBatteryLevel(): number;
              public component5(): string;
              public getFeedbackId(): string;
              public component8(): string;
              public component1(): number;
              public equals(param0: any): boolean;
              public component4(): boolean;
            }
            export module PhoneState {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.PhoneState.Companion>;
                public newInstance$libnavigation_core_release(param0: globalAndroid.content.Context): com.mapbox.navigation.core.telemetry.events.PhoneState;
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
      export module core {
        export module telemetry {
          export module events {
            export class TelemetryLocation {
              public static class: java.lang.Class<com.mapbox.navigation.core.telemetry.events.TelemetryLocation>;
              public getSpeed(): number;
              public getLongitude(): number;
              public hashCode(): number;
              public component2(): number;
              public component7(): number;
              public component5(): number;
              public copy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: number, param7: number): com.mapbox.navigation.core.telemetry.events.TelemetryLocation;
              public getVerticalAccuracy(): number;
              public toString(): string;
              public getTimestamp(): string;
              public getBearing(): number;
              public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: number, param7: number);
              public component1(): number;
              public getHorizontalAccuracy(): number;
              public component8(): number;
              public component4(): number;
              public component3(): number;
              public component6(): string;
              public equals(param0: any): boolean;
              public getLatitude(): number;
              public getAltitude(): number;
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
      export module core {
        export module trip {
          export class MapboxTripStarter extends com.mapbox.navigation.core.lifecycle.MapboxNavigationObserver {
            public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarter>;
            public enableReplayRoute(param0: com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public refreshLocationPermissions(): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
            public enableMapMatching(): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public constructor();
            public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
            public getReplayHistorySessionOptions(): com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions;
            public enableReplayHistory(param0: com.mapbox.navigation.core.replay.history.ReplayHistorySessionOptions): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public constructor(param0: com.mapbox.navigation.core.trip.MapboxTripStarterServices);
            public static create(): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public static getRegisteredInstance(): com.mapbox.navigation.core.trip.MapboxTripStarter;
            public getReplayRouteSessionOptions(): com.mapbox.navigation.core.replay.route.ReplayRouteSessionOptions;
          }
          export module MapboxTripStarter {
            export class Companion {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarter.Companion>;
              public create(): com.mapbox.navigation.core.trip.MapboxTripStarter;
              public getRegisteredInstance(): com.mapbox.navigation.core.trip.MapboxTripStarter;
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
      export module core {
        export module trip {
          export class MapboxTripStarterServices {
            public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarterServices>;
            public constructor();
            public getReplayHistorySession(): com.mapbox.navigation.core.replay.history.ReplayHistorySession;
            public getReplayRouteSession(): com.mapbox.navigation.core.replay.route.ReplayRouteSession;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module trip {
          export abstract class MapboxTripStarterType {
            public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarterType>;
          }
          export module MapboxTripStarterType {
            export class MapMatching extends com.mapbox.navigation.core.trip.MapboxTripStarterType {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarterType.MapMatching>;
              public static INSTANCE: com.mapbox.navigation.core.trip.MapboxTripStarterType.MapMatching;
            }
            export class ReplayHistory extends com.mapbox.navigation.core.trip.MapboxTripStarterType {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarterType.ReplayHistory>;
              public static INSTANCE: com.mapbox.navigation.core.trip.MapboxTripStarterType.ReplayHistory;
            }
            export class ReplayRoute extends com.mapbox.navigation.core.trip.MapboxTripStarterType {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.MapboxTripStarterType.ReplayRoute>;
              public static INSTANCE: com.mapbox.navigation.core.trip.MapboxTripStarterType.ReplayRoute;
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
      export module core {
        export module trip {
          export class NativeRouteProcessingListener {
            public static class: java.lang.Class<com.mapbox.navigation.core.trip.NativeRouteProcessingListener>;
            /**
             * Constructs a new instance of the com.mapbox.navigation.core.trip.NativeRouteProcessingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onNativeRouteProcessingStarted(): void });
            public constructor();
            public onNativeRouteProcessingStarted(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module core {
        export module trip {
          export module service {
            export class MapboxNotificationData {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.MapboxNotificationData>;
              public getNotificationId(): number;
              public component1(): number;
              public hashCode(): number;
              public getNotification(): globalAndroid.app.Notification;
              public copy(param0: number, param1: globalAndroid.app.Notification): com.mapbox.navigation.core.trip.service.MapboxNotificationData;
              public toString(): string;
              public component2(): globalAndroid.app.Notification;
              public equals(param0: any): boolean;
              public constructor(param0: number, param1: globalAndroid.app.Notification);
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
      export module core {
        export module trip {
          export module service {
            export class MapboxTripService extends com.mapbox.navigation.core.trip.service.TripService {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.MapboxTripService>;
              public stopService(): void;
              public startService(): void;
              public updateNotification(param0: com.mapbox.navigation.base.trip.model.TripNotificationState): void;
              public hasServiceStarted(): boolean;
              public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.navigation.base.trip.notification.TripNotification, param2: com.mapbox.navigation.utils.internal.ThreadController);
              public constructor(param0: com.mapbox.navigation.base.trip.notification.TripNotification, param1: any, param2: any, param3: com.mapbox.navigation.utils.internal.ThreadController);
            }
            export module MapboxTripService {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.MapboxTripService.Companion>;
                public registerOneTimeNotificationDataObserver$libnavigation_core_release(param0: com.mapbox.navigation.core.trip.service.NotificationDataObserver): void;
                public unregisterOneTimeNotificationDataObserver$libnavigation_core_release(param0: com.mapbox.navigation.core.trip.service.NotificationDataObserver): void;
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
      export module core {
        export module trip {
          export module service {
            export class NavigationNotificationService {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.NavigationNotificationService>;
              public constructor();
              public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: androidNative.Array<string>): void;
              public onDestroy(): void;
              public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
              public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
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
      export module core {
        export module trip {
          export module service {
            export class NotificationDataObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.NotificationDataObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.service.NotificationDataObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNotificationUpdated(param0: com.mapbox.navigation.core.trip.service.MapboxNotificationData): void });
              public constructor();
              public onNotificationUpdated(param0: com.mapbox.navigation.core.trip.service.MapboxNotificationData): void;
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
      export module core {
        export module trip {
          export module service {
            export class TripService {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.service.TripService>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.service.TripService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { startService(): void; stopService(): void; updateNotification(param0: com.mapbox.navigation.base.trip.model.TripNotificationState): void; hasServiceStarted(): boolean });
              public constructor();
              public stopService(): void;
              public startService(): void;
              public updateNotification(param0: com.mapbox.navigation.base.trip.model.TripNotificationState): void;
              public hasServiceStarted(): boolean;
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
      export module core {
        export module trip {
          export module session {
            export class BannerInstructionEvent {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.BannerInstructionEvent>;
              public getLatestInstructionIndex(): java.lang.Integer;
              public invalidateLatestBannerInstructions(param0: com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper): void;
              public getLatestInstructionWrapper(): com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper;
              public getLatestBannerInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
              public getBannerInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
              public isOccurring(param0: com.mapbox.api.directions.v5.models.BannerInstructions, param1: java.lang.Integer): boolean;
            }
            export module BannerInstructionEvent {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.BannerInstructionEvent.Companion>;
                public invoke(): com.mapbox.navigation.core.trip.session.BannerInstructionEvent;
              }
              export class LatestInstructionWrapper {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper>;
                public toString(): string;
                public component1(): number;
                public component2(): com.mapbox.api.directions.v5.models.BannerInstructions;
                public getLatestBannerInstructions(): com.mapbox.api.directions.v5.models.BannerInstructions;
                public equals(param0: any): boolean;
                public constructor(param0: number, param1: com.mapbox.api.directions.v5.models.BannerInstructions);
                public getLatestInstructionIndex(): number;
                public copy(param0: number, param1: com.mapbox.api.directions.v5.models.BannerInstructions): com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper;
                public hashCode(): number;
              }
              export module LatestInstructionWrapper {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper.Companion>;
                  public createOrNull(param0: java.lang.Integer, param1: com.mapbox.api.directions.v5.models.BannerInstructions): com.mapbox.navigation.core.trip.session.BannerInstructionEvent.LatestInstructionWrapper;
                }
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
      export module core {
        export module trip {
          export module session {
            export class BannerInstructionsObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.BannerInstructionsObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.BannerInstructionsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewBannerInstructions(param0: com.mapbox.api.directions.v5.models.BannerInstructions): void });
              public constructor();
              public onNewBannerInstructions(param0: com.mapbox.api.directions.v5.models.BannerInstructions): void;
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
      export module core {
        export module trip {
          export module session {
            export class CancellableLocationEngine {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.CancellableLocationEngine>;
              public constructor(param0: com.mapbox.android.core.location.LocationEngine);
              public cancelLastLocationTask(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
              public requestLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineRequest, param1: globalAndroid.app.PendingIntent): void;
              public removeLocationUpdates(param0: globalAndroid.app.PendingIntent): void;
              public requestLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineRequest, param1: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>, param2: globalAndroid.os.Looper): void;
              public removeLocationUpdates(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
              public getLastLocation(param0: com.mapbox.android.core.location.LocationEngineCallback<com.mapbox.android.core.location.LocationEngineResult>): void;
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
      export module core {
        export module trip {
          export module session {
            export class LegIndexUpdatedCallback {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onLegIndexUpdatedCallback(param0: boolean): void });
              public constructor();
              public onLegIndexUpdatedCallback(param0: boolean): void;
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
      export module core {
        export module trip {
          export module session {
            export class LocationMatcherResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.LocationMatcherResult>;
              public getRoadEdgeMatchProbability(): number;
              public isTeleport(): boolean;
              public getRoad(): com.mapbox.navigation.base.road.model.Road;
              public hashCode(): number;
              /** @deprecated */
              public getSpeedLimit(): com.mapbox.navigation.base.speed.model.SpeedLimit;
              public toString(): string;
              public getEnhancedLocation(): globalAndroid.location.Location;
              public isOffRoad(): boolean;
              public getSpeedLimitInfo(): com.mapbox.navigation.base.speed.model.SpeedLimitInfo;
              public getInTunnel(): boolean;
              public getZLevel(): java.lang.Integer;
              public getKeyPoints(): java.util.List<globalAndroid.location.Location>;
              public getOffRoadProbability(): number;
              public constructor(param0: globalAndroid.location.Location, param1: java.util.List<any>, param2: boolean, param3: number, param4: boolean, param5: com.mapbox.navigation.base.speed.model.SpeedLimit, param6: com.mapbox.navigation.base.speed.model.SpeedLimitInfo, param7: number, param8: java.lang.Integer, param9: com.mapbox.navigation.base.road.model.Road, param10: boolean, param11: boolean);
              public isDegradedMapMatching(): boolean;
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
    export module navigation {
      export module core {
        export module trip {
          export module session {
            export class LocationObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.LocationObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.LocationObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewRawLocation(param0: globalAndroid.location.Location): void; onNewLocationMatcherResult(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void });
              public constructor();
              public onNewLocationMatcherResult(param0: com.mapbox.navigation.core.trip.session.LocationMatcherResult): void;
              public onNewRawLocation(param0: globalAndroid.location.Location): void;
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
      export module core {
        export module trip {
          export module session {
            export class MapboxTripSession extends com.mapbox.navigation.core.trip.session.TripSession {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.MapboxTripSession>;
              public registerBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
              public getLastVoiceInstruction$libnavigation_core_release(): com.mapbox.api.directions.v5.models.VoiceInstructions;
              public setRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.core.SetRoutes, param2: any): any;
              public getLocationMatcherResult(): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
              public unregisterAllRoadObjectsOnRouteObservers(): void;
              public updateLegIndex(param0: number, param1: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
              public registerFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
              public unregisterAllBannerInstructionsObservers(): void;
              public registerLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
              public unregisterOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
              public getState(): com.mapbox.navigation.core.trip.session.TripSessionState;
              public getPrimaryRoute$libnavigation_core_release(): com.mapbox.navigation.base.route.NavigationRoute;
              public registerOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
              public unregisterAllVoiceInstructionsObservers(): void;
              public unregisterEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
              public stop(): void;
              public unregisterLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
              public registerVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
              public constructor(param0: com.mapbox.navigation.core.trip.service.TripService, param1: com.mapbox.navigation.core.trip.session.TripSessionLocationEngine, param2: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator, param3: com.mapbox.navigation.utils.internal.ThreadController, param4: com.mapbox.navigation.core.trip.session.eh.EHorizonSubscriptionManager);
              public unregisterStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
              public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public unregisterAllRouteProgressObservers(): void;
              public unregisterRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
              public unregisterRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
              public registerEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
              public unregisterAllLocationObservers(): void;
              public unregisterAllOffRouteObservers(): void;
              public unregisterBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
              public unregisterVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
              public getZLevel(): java.lang.Integer;
              public unregisterAllFallbackVersionsObservers(): void;
              public unregisterAllEHorizonObservers(): void;
              public getRawLocation(): globalAndroid.location.Location;
              public start(param0: boolean, param1: boolean): void;
              public registerRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
              public unregisterFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
              public getTripService(): com.mapbox.navigation.core.trip.service.TripService;
              public registerStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
              public isRunningWithForegroundService(): boolean;
              public unregisterAllStateObservers(): void;
              public registerRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
              public setPrimaryRoute$libnavigation_core_release(param0: com.mapbox.navigation.base.route.NavigationRoute): void;
              public setLastVoiceInstruction$libnavigation_core_release(param0: com.mapbox.api.directions.v5.models.VoiceInstructions): void;
            }
            export module MapboxTripSession {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.MapboxTripSession.Companion>;
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
      export module core {
        export module trip {
          export module session {
            export class NativeSetRouteError extends com.mapbox.navigation.core.trip.session.NativeSetRouteResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NativeSetRouteError>;
              public hashCode(): number;
              public constructor(param0: string);
              public toString(): string;
              public getError(): string;
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
    export module navigation {
      export module core {
        export module trip {
          export module session {
            export abstract class NativeSetRouteResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NativeSetRouteResult>;
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
      export module core {
        export module trip {
          export module session {
            export class NativeSetRouteValue extends com.mapbox.navigation.core.trip.session.NativeSetRouteResult {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NativeSetRouteValue>;
              public getNativeAlternatives(): java.util.List<com.mapbox.navigator.RouteAlternative>;
              public getRoutes(): java.util.List<com.mapbox.navigation.base.route.NavigationRoute>;
              public hashCode(): number;
              public constructor(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: java.util.List<any>);
              public toString(): string;
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
    export module navigation {
      export module core {
        export module trip {
          export module session {
            export class NativeStatusProcessingError {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NativeStatusProcessingError>;
              public constructor(param0: java.lang.Throwable);
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
      export module core {
        export module trip {
          export module session {
            export class NavigationSession implements com.mapbox.navigation.core.directions.session.RoutesObserver, com.mapbox.navigation.core.trip.session.TripSessionStateObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSession>;
              public constructor();
              public setState$libnavigation_core_release(param0: com.mapbox.navigation.core.trip.session.NavigationSessionState): void;
              public unregisterNavigationSessionStateObserver$libnavigation_core_release(param0: com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver): void;
              public registerNavigationSessionStateObserver$libnavigation_core_release(param0: com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver): void;
              public onSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.TripSessionState): void;
              public getState$libnavigation_core_release(): com.mapbox.navigation.core.trip.session.NavigationSessionState;
              public onRoutesChanged(param0: com.mapbox.navigation.core.directions.session.RoutesUpdatedResult): void;
              public unregisterAllNavigationSessionStateObservers$libnavigation_core_release(): void;
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
      export module core {
        export module trip {
          export module session {
            export abstract class NavigationSessionState {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionState>;
              public getSessionId(): string;
            }
            export module NavigationSessionState {
              export class ActiveGuidance extends com.mapbox.navigation.core.trip.session.NavigationSessionState {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionState.ActiveGuidance>;
                public component1(): string;
                public toString(): string;
                public getSessionId(): string;
                public equals(param0: any): boolean;
                public copy(param0: string): com.mapbox.navigation.core.trip.session.NavigationSessionState.ActiveGuidance;
                public constructor(param0: string);
                public hashCode(): number;
              }
              export class FreeDrive extends com.mapbox.navigation.core.trip.session.NavigationSessionState {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionState.FreeDrive>;
                public component1(): string;
                public toString(): string;
                public getSessionId(): string;
                public equals(param0: any): boolean;
                public constructor(param0: string);
                public copy(param0: string): com.mapbox.navigation.core.trip.session.NavigationSessionState.FreeDrive;
                public hashCode(): number;
              }
              export class Idle extends com.mapbox.navigation.core.trip.session.NavigationSessionState {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionState.Idle>;
                public static INSTANCE: com.mapbox.navigation.core.trip.session.NavigationSessionState.Idle;
                public getSessionId(): string;
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
      export module core {
        export module trip {
          export module session {
            export class NavigationSessionStateObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.NavigationSessionStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNavigationSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.NavigationSessionState): void });
              public constructor();
              public onNavigationSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.NavigationSessionState): void;
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
      export module core {
        export module trip {
          export module session {
            export class NavigationSessionUtils {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionUtils>;
              public static INSTANCE: com.mapbox.navigation.core.trip.session.NavigationSessionUtils;
              public getNewHistoryRecordingSessionState(param0: boolean, param1: boolean): com.mapbox.navigation.core.internal.HistoryRecordingSessionState;
              public getNewNavigationSessionState(param0: boolean, param1: boolean): com.mapbox.navigation.core.trip.session.NavigationSessionState;
              public isDriving(param0: com.mapbox.navigation.core.trip.session.TripSessionState): boolean;
            }
            export module NavigationSessionUtils {
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.NavigationSessionUtils.WhenMappings>;
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
      export module core {
        export module trip {
          export module session {
            export class OffRouteObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.OffRouteObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.OffRouteObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onOffRouteStateChanged(param0: boolean): void });
              public constructor();
              public onOffRouteStateChanged(param0: boolean): void;
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
      export module core {
        export module trip {
          export module session {
            export class RoadObjectsOnRouteObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewRoadObjectsOnTheRoute(param0: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>): void });
              public constructor();
              /** @deprecated */
              public onNewRoadObjectsOnTheRoute(param0: java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>): void;
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
      export module core {
        export module trip {
          export module session {
            export class RouteProgressObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.RouteProgressObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.RouteProgressObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void });
              public constructor();
              public onRouteProgressChanged(param0: com.mapbox.navigation.base.trip.model.RouteProgress): void;
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
      export module core {
        export module trip {
          export module session {
            export class TripSession {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSession>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.TripSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getTripService(): com.mapbox.navigation.core.trip.service.TripService;
                setRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.core.SetRoutes, param2: any): any;
                getRawLocation(): globalAndroid.location.Location;
                getZLevel(): java.lang.Integer;
                getLocationMatcherResult(): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
                getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
                getState(): com.mapbox.navigation.core.trip.session.TripSessionState;
                start(param0: boolean, param1: boolean): void;
                stop(): void;
                isRunningWithForegroundService(): boolean;
                registerLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
                unregisterLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
                unregisterAllLocationObservers(): void;
                registerRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
                unregisterRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
                unregisterAllRouteProgressObservers(): void;
                registerOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
                unregisterOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
                unregisterAllOffRouteObservers(): void;
                registerStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
                unregisterStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
                unregisterAllStateObservers(): void;
                registerBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
                unregisterBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
                unregisterAllBannerInstructionsObservers(): void;
                registerVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
                unregisterVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
                unregisterAllVoiceInstructionsObservers(): void;
                updateLegIndex(param0: number, param1: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
                registerRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
                unregisterRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
                unregisterAllRoadObjectsOnRouteObservers(): void;
                registerEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                unregisterEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                unregisterAllEHorizonObservers(): void;
                registerFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
                unregisterFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
                unregisterAllFallbackVersionsObservers(): void;
              });
              public constructor();
              public registerBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
              public setRoutes(param0: java.util.List<com.mapbox.navigation.base.route.NavigationRoute>, param1: com.mapbox.navigation.core.SetRoutes, param2: any): any;
              public getLocationMatcherResult(): com.mapbox.navigation.core.trip.session.LocationMatcherResult;
              public unregisterAllRoadObjectsOnRouteObservers(): void;
              public updateLegIndex(param0: number, param1: com.mapbox.navigation.core.trip.session.LegIndexUpdatedCallback): void;
              public registerFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
              public unregisterAllBannerInstructionsObservers(): void;
              public registerLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
              public unregisterOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
              public getState(): com.mapbox.navigation.core.trip.session.TripSessionState;
              public registerOffRouteObserver(param0: com.mapbox.navigation.core.trip.session.OffRouteObserver): void;
              public unregisterAllVoiceInstructionsObservers(): void;
              public unregisterEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
              public stop(): void;
              public unregisterLocationObserver(param0: com.mapbox.navigation.core.trip.session.LocationObserver): void;
              public registerVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
              public unregisterStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
              public getRouteProgress(): com.mapbox.navigation.base.trip.model.RouteProgress;
              public unregisterAllRouteProgressObservers(): void;
              public unregisterRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
              public unregisterRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
              public registerEHorizonObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
              public unregisterAllLocationObservers(): void;
              public unregisterAllOffRouteObservers(): void;
              public unregisterBannerInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.BannerInstructionsObserver): void;
              public unregisterVoiceInstructionsObserver(param0: com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver): void;
              public getZLevel(): java.lang.Integer;
              public unregisterAllFallbackVersionsObservers(): void;
              public unregisterAllEHorizonObservers(): void;
              public getRawLocation(): globalAndroid.location.Location;
              public start(param0: boolean, param1: boolean): void;
              public registerRoadObjectsOnRouteObserver(param0: com.mapbox.navigation.core.trip.session.RoadObjectsOnRouteObserver): void;
              public unregisterFallbackVersionsObserver(param0: com.mapbox.navigator.FallbackVersionsObserver): void;
              public getTripService(): com.mapbox.navigation.core.trip.service.TripService;
              public registerStateObserver(param0: com.mapbox.navigation.core.trip.session.TripSessionStateObserver): void;
              public isRunningWithForegroundService(): boolean;
              public unregisterAllStateObservers(): void;
              public registerRouteProgressObserver(param0: com.mapbox.navigation.core.trip.session.RouteProgressObserver): void;
            }
            export module TripSession {
              export class DefaultImpls {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSession.DefaultImpls>;
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
      export module core {
        export module trip {
          export module session {
            export class TripSessionLocationEngine {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSessionLocationEngine>;
              public isReplayEnabled(): boolean;
              public getMapboxReplayer(): com.mapbox.navigation.core.replay.MapboxReplayer;
              public constructor(param0: com.mapbox.navigation.base.options.NavigationOptions, param1: any);
              public stopLocationUpdates(): void;
              public startLocationUpdates(param0: boolean, param1: any): void;
            }
            export module TripSessionLocationEngine {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSessionLocationEngine.Companion>;
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
      export module core {
        export module trip {
          export module session {
            export class TripSessionState {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSessionState>;
              public static STARTED: com.mapbox.navigation.core.trip.session.TripSessionState;
              public static STOPPED: com.mapbox.navigation.core.trip.session.TripSessionState;
              public static values(): androidNative.Array<com.mapbox.navigation.core.trip.session.TripSessionState>;
              public static valueOf(param0: string): com.mapbox.navigation.core.trip.session.TripSessionState;
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
      export module core {
        export module trip {
          export module session {
            export class TripSessionStateObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.TripSessionStateObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.TripSessionStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.TripSessionState): void });
              public constructor();
              public onSessionStateChanged(param0: com.mapbox.navigation.core.trip.session.TripSessionState): void;
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
      export module core {
        export module trip {
          export module session {
            export class VoiceInstructionsObserver {
              public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.core.trip.session.VoiceInstructionsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onNewVoiceInstructions(param0: com.mapbox.api.directions.v5.models.VoiceInstructions): void });
              public constructor();
              public onNewVoiceInstructions(param0: com.mapbox.api.directions.v5.models.VoiceInstructions): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class EHorizonObserver {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.EHorizonObserver>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.trip.session.eh.EHorizonObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onPositionUpdated(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonPosition, param1: java.util.List<any>): void; onRoadObjectEnter(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo): void; onRoadObjectExit(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo): void; onRoadObjectPassed(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPassInfo): void; onRoadObjectAdded(param0: string): void; onRoadObjectUpdated(param0: string): void; onRoadObjectRemoved(param0: string): void });
                public constructor();
                public onPositionUpdated(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonPosition, param1: java.util.List<any>): void;
                public onRoadObjectPassed(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectPassInfo): void;
                public onRoadObjectUpdated(param0: string): void;
                public onRoadObjectRemoved(param0: string): void;
                public onRoadObjectAdded(param0: string): void;
                public onRoadObjectEnter(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo): void;
                public onRoadObjectExit(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEnterExitInfo): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class EHorizonSubscriptionManager {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.EHorizonSubscriptionManager>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.trip.session.eh.EHorizonSubscriptionManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { registerObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void; unregisterObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void; unregisterAllObservers(): void; reset(): void });
                public constructor();
                public registerObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                public unregisterObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                public reset(): void;
                public unregisterAllObservers(): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class EHorizonSubscriptionManagerImpl extends com.mapbox.navigation.core.trip.session.eh.EHorizonSubscriptionManager {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.EHorizonSubscriptionManagerImpl>;
                public constructor(param0: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator, param1: com.mapbox.navigation.utils.internal.ThreadController);
                public registerObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                public unregisterObserver(param0: com.mapbox.navigation.core.trip.session.eh.EHorizonObserver): void;
                public reset(): void;
                public unregisterAllObservers(): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class GraphAccessor {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.GraphAccessor>;
                public getPathShape(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPath): java.util.List<com.mapbox.geojson.Point>;
                public getEdgeMetadata(param0: number): com.mapbox.navigation.base.trip.model.eh.EHorizonEdgeMetadata;
                public getEdgeShape(param0: number): java.util.List<com.mapbox.geojson.Point>;
                public constructor(param0: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator);
                public getGraphPositionCoordinate(param0: com.mapbox.navigation.base.trip.model.eh.EHorizonGraphPosition): com.mapbox.geojson.Point;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class RoadObjectMatcher {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.RoadObjectMatcher>;
                public matchOpenLRObjects(param0: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableOpenLr>): void;
                /** @deprecated */
                public matchPointObject(param0: string, param1: com.mapbox.geojson.Point): void;
                public matchGantryObjects(param0: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>, param1: boolean): void;
                public matchPolylineObjects(param0: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>, param1: boolean): void;
                /** @deprecated */
                public matchPolygonObject(param0: string, param1: java.util.List<com.mapbox.geojson.Point>): void;
                /** @deprecated */
                public matchOpenLRObject(param0: string, param1: string, param2: string): void;
                public matchOpenLRObjects(param0: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableOpenLr>, param1: boolean): void;
                public matchPolygonObjects(param0: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>): void;
                public matchPolygonObjects(param0: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>, param1: boolean): void;
                public matchPointObjects(param0: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchablePoint>): void;
                public matchPointObjects(param0: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchablePoint>, param1: boolean): void;
                public cancel(param0: java.util.List<string>): void;
                public constructor(param0: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator);
                public registerRoadObjectMatcherObserver(param0: com.mapbox.navigation.core.trip.session.eh.RoadObjectMatcherObserver): void;
                public matchGantryObjects(param0: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>): void;
                /** @deprecated */
                public matchGantryObject(param0: string, param1: java.util.List<com.mapbox.geojson.Point>): void;
                public matchPolylineObjects(param0: java.util.List<com.mapbox.navigation.base.trip.model.eh.MatchableGeometry>): void;
                public cancelAll(): void;
                /** @deprecated */
                public matchPolylineObject(param0: string, param1: java.util.List<com.mapbox.geojson.Point>): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class RoadObjectMatcherObserver {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.RoadObjectMatcherObserver>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.core.trip.session.eh.RoadObjectMatcherObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onRoadObjectMatched(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectMatcherError, com.mapbox.navigation.base.trip.model.roadobject.RoadObject>): void });
                public constructor();
                public onRoadObjectMatched(param0: com.mapbox.bindgen.Expected<com.mapbox.navigation.base.trip.model.roadobject.RoadObjectMatcherError, com.mapbox.navigation.base.trip.model.roadobject.RoadObject>): void;
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
      export module core {
        export module trip {
          export module session {
            export module eh {
              export class RoadObjectsStore {
                public static class: java.lang.Class<com.mapbox.navigation.core.trip.session.eh.RoadObjectsStore>;
                public removeCustomRoadObject(param0: string): void;
                public getRoadObjectsOnTheEdge(param0: number): java.util.Map<string, com.mapbox.navigation.base.trip.model.roadobject.RoadObjectEdgeLocation>;
                public getRoadObject(param0: string): com.mapbox.navigation.base.trip.model.roadobject.RoadObject;
                public constructor(param0: com.mapbox.navigation.navigator.internal.MapboxNativeNavigator);
                public getUpcomingRoadObjects(param0: java.util.List<any>): java.util.List<com.mapbox.navigation.base.trip.model.roadobject.UpcomingRoadObject>;
                public addCustomRoadObject(param0: com.mapbox.navigation.base.trip.model.roadobject.RoadObject): void;
                public getRoadObjectIdsByEdgeIds(param0: java.util.List<java.lang.Long>): java.util.List<string>;
                public removeAllCustomRoadObjects(): void;
              }
            }
          }
        }
      }
    }
  }
}
