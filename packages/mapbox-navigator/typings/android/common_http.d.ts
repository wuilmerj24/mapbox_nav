/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.BuildConfig>;
            public static DEBUG: boolean;
            public static LIBRARY_PACKAGE_NAME: string;
            public static BUILD_TYPE: string;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class CallbackWrapper {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.CallbackWrapper>;
            public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
            public cancel(param0: com.mapbox.common.HttpRequestError): void;
            public cancel(): void;
            public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
          }
          export module CallbackWrapper {
            export class RequestCallback {
              public static class: java.lang.Class<com.mapbox.common.module.okhttp.CallbackWrapper.RequestCallback>;
              /**
               * Constructs a new instance of the com.mapbox.common.module.okhttp.CallbackWrapper$RequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onFailure(param0: com.mapbox.common.HttpRequestError): void; onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void });
              public constructor();
              public onFailure(param0: com.mapbox.common.HttpRequestError): void;
              public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class CertificatePinnerFactory {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.CertificatePinnerFactory>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class CountingFileRequestBody {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.CountingFileRequestBody>;
            public contentType(): okhttp3.MediaType;
            public writeTo(param0: okio.BufferedSink): void;
            public constructor(param0: java.io.File, param1: okhttp3.MediaType, param2: com.mapbox.common.module.okhttp.UploadPostCallback);
            public contentLength(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class DownloadGetCallback extends com.mapbox.common.module.okhttp.CallbackWrapper.RequestCallback {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.DownloadGetCallback>;
            public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
            public getFreeMemoryInBytes(param0: string): number;
            public onFailure(param0: com.mapbox.common.HttpRequestError): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class DownloadResumeData {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.DownloadResumeData>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class DownloadRunnable {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.DownloadRunnable>;
            public run(): void;
            public constructor(param0: com.mapbox.common.DownloadOptions, param1: com.mapbox.common.DownloadStatusCallback, param2: number, param3: com.mapbox.common.module.okhttp.MapboxOkHttpService);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class HttpCallback extends com.mapbox.common.module.okhttp.CallbackWrapper.RequestCallback {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.HttpCallback>;
            public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
            public onFailure(param0: com.mapbox.common.HttpRequestError): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class IdGenerator {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.IdGenerator>;
            public static getNewId(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class LazyClient {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.LazyClient>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class MapboxOkHttpService {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.MapboxOkHttpService>;
            public reachabilityChanged: com.mapbox.common.ReachabilityChanged;
            public pendingCalls: java.util.Map<java.lang.Long, com.mapbox.common.module.okhttp.CallbackWrapper>;
            public constructor();
            public setInterceptor(param0: com.mapbox.common.HttpServiceInterceptorInterface): void;
            public supportsKeepCompression(): boolean;
            public download(param0: com.mapbox.common.DownloadOptions, param1: com.mapbox.common.DownloadStatusCallback): number;
            public request(param0: com.mapbox.common.HttpRequest, param1: com.mapbox.common.HttpResponseCallback): number;
            public cancelRequest(param0: number, param1: com.mapbox.common.ResultCallback): void;
            public cancelUpload(param0: number, param1: com.mapbox.common.ResultCallback): void;
            public upload(param0: com.mapbox.common.UploadOptions, param1: com.mapbox.common.UploadStatusCallback): number;
            public setMaxRequestsPerHost(param0: number): void;
          }
          export module MapboxOkHttpService {
            export class HttpServiceOfflineSwitchObserver {
              public static class: java.lang.Class<com.mapbox.common.module.okhttp.MapboxOkHttpService.HttpServiceOfflineSwitchObserver>;
              public statusChanged(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class NetworkUsageListener {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.NetworkUsageListener>;
            public static FACTORY: okhttp3.EventListener.Factory;
            public static CALLBACK: com.mapbox.common.module.okhttp.NetworkUsageListener.NetworkUsageMetricCallback;
            public callFailed(param0: okhttp3.Call, param1: java.io.IOException): void;
            public responseBodyEnd(param0: okhttp3.Call, param1: number): void;
            public requestHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Request): void;
            public requestBodyEnd(param0: okhttp3.Call, param1: number): void;
            public responseHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Response): void;
            public callEnd(param0: okhttp3.Call): void;
          }
          export module NetworkUsageListener {
            export class DummyEventListener {
              public static class: java.lang.Class<com.mapbox.common.module.okhttp.NetworkUsageListener.DummyEventListener>;
            }
            export class NetworkUsageMetricCallback {
              public static class: java.lang.Class<com.mapbox.common.module.okhttp.NetworkUsageListener.NetworkUsageMetricCallback>;
              /**
               * Constructs a new instance of the com.mapbox.common.module.okhttp.NetworkUsageListener$NetworkUsageMetricCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onBytesTransferred(param0: string, param1: number, param2: number): void });
              public constructor();
              public onBytesTransferred(param0: string, param1: number, param2: number): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class UploadPostCallback extends com.mapbox.common.module.okhttp.CallbackWrapper.RequestCallback {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.UploadPostCallback>;
            public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
            public setTotalBytes(param0: number): void;
            public onFailure(param0: com.mapbox.common.HttpRequestError): void;
            public onProgress(param0: number, param1: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module common {
      export module module {
        export module okhttp {
          export class UploadRunnable {
            public static class: java.lang.Class<com.mapbox.common.module.okhttp.UploadRunnable>;
            public run(): void;
            public constructor(param0: com.mapbox.common.UploadOptions, param1: com.mapbox.common.UploadStatusCallback, param2: number, param3: com.mapbox.common.module.okhttp.MapboxOkHttpService);
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module module {
      export class Mapbox_HttpClientModuleConfiguration {
        public static class: java.lang.Class<com.mapbox.module.Mapbox_HttpClientModuleConfiguration>;
        public static INSTANCE: com.mapbox.module.Mapbox_HttpClientModuleConfiguration;
        public static getEnableConfiguration(): boolean;
        public static getImplClass(): java.lang.Class<com.mapbox.common.module.okhttp.MapboxOkHttpService>;
      }
    }
  }
}

//Generics information:
