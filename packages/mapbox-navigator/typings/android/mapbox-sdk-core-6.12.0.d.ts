/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module core {
      export class BuildConfig {
        public static class: java.lang.Class<com.mapbox.core.BuildConfig>;
        public static VERSION: string;
        public static NAME: string;
        public static GIT_REVISION: string;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export abstract class MapboxService<T, S> extends java.lang.Object {
        public static class: java.lang.Class<com.mapbox.core.MapboxService<any, any>>;
        public static MAX_URL_SIZE: number;
        public okHttpClient: okhttp3.OkHttpClient;
        public baseUrl(): string;
        public isEnableDebug(): boolean;
        public getOkHttpClient(): okhttp3.OkHttpClient;
        public executeCall(): retrofit2.Response<T>;
        public cancelCall(): void;
        public enableDebug(param0: boolean): void;
        public getService(): S;
        public cloneCall(): retrofit2.Call<T>;
        public setCallFactory(param0: okhttp3.Call.Factory): void;
        public getCall(): retrofit2.Call<T>;
        public getRetrofit(): retrofit2.Retrofit;
        public constructor(param0: java.lang.Class<S>);
        public initializeCall(): retrofit2.Call<T>;
        public getGsonBuilder(): com.google.gson.GsonBuilder;
        public enqueueCall(param0: retrofit2.Callback<T>): void;
        public getCallFactory(): okhttp3.Call.Factory;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module constants {
        export class Constants {
          public static class: java.lang.Class<com.mapbox.core.constants.Constants>;
          public static HEADER_USER_AGENT: string;
          public static BASE_API_URL: string;
          public static MAPBOX_USER: string;
          public static PRECISION_6: number;
          public static PRECISION_5: number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module exceptions {
        export class ServicesException {
          public static class: java.lang.Class<com.mapbox.core.exceptions.ServicesException>;
          public constructor(param0: string);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module internal {
        export class Preconditions {
          public static class: java.lang.Class<com.mapbox.core.internal.Preconditions>;
          public static checkNotNull(param0: any, param1: string): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module utils {
        export class ApiCallHelper {
          public static class: java.lang.Class<com.mapbox.core.utils.ApiCallHelper>;
          public static getHeaderUserAgent(param0: string, param1: string, param2: string, param3: string): string;
          public static getHeaderUserAgent(param0: string): string;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module utils {
        export class ColorUtils {
          public static class: java.lang.Class<com.mapbox.core.utils.ColorUtils>;
          public static toHexString(param0: number, param1: number, param2: number): string;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module utils {
        export class MapboxUtils {
          public static class: java.lang.Class<com.mapbox.core.utils.MapboxUtils>;
          public static isAccessTokenValid(param0: string): boolean;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module core {
      export module utils {
        export class TextUtils {
          public static class: java.lang.Class<com.mapbox.core.utils.TextUtils>;
          /** @deprecated */
          public static formatDistributions(param0: java.util.List<androidNative.Array<java.lang.Integer>>): string;
          public static join(param0: string, param1: androidNative.Array<any>): string;
          public static formatCoordinate(param0: number, param1: number): string;
          /** @deprecated */
          public static formatBearing(param0: java.util.List<androidNative.Array<java.lang.Double>>): string;
          public static isEmpty(param0: string): boolean;
          public static formatCoordinate(param0: number): string;
          /** @deprecated */
          public static formatRadiuses(param0: androidNative.Array<number>): string;
          /** @deprecated */
          public static formatApproaches(param0: androidNative.Array<string>): string;
          /** @deprecated */
          public static formatWaypointNames(param0: androidNative.Array<string>): string;
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.core.MapboxService:2
