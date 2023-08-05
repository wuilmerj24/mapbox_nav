declare module io {
  export module sentry {
    export module android {
      export module ndk {
        export class BuildConfig {
          public static class: java.lang.Class<io.sentry.android.ndk.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public static VERSION_NAME: string;
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module ndk {
        export class DebugImagesLoader {
          public static class: java.lang.Class<io.sentry.android.ndk.DebugImagesLoader>;
          public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
          public clearDebugImages(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module ndk {
        export class INativeScope {
          public static class: java.lang.Class<io.sentry.android.ndk.INativeScope>;
          /**
           * Constructs a new instance of the io.sentry.android.ndk.INativeScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { setTag(param0: string, param1: string): void; removeTag(param0: string): void; setExtra(param0: string, param1: string): void; removeExtra(param0: string): void; setUser(param0: string, param1: string, param2: string, param3: string): void; removeUser(): void; addBreadcrumb(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void });
          public constructor();
          public setUser(param0: string, param1: string, param2: string, param3: string): void;
          public setExtra(param0: string, param1: string): void;
          public removeUser(): void;
          public removeExtra(param0: string): void;
          public setTag(param0: string, param1: string): void;
          public removeTag(param0: string): void;
          public addBreadcrumb(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module ndk {
        export class NativeModuleListLoader {
          public static class: java.lang.Class<io.sentry.android.ndk.NativeModuleListLoader>;
          public static nativeClearModuleList(): void;
          public loadModuleList(): androidNative.Array<io.sentry.protocol.DebugImage>;
          public clearModuleList(): void;
          public static nativeLoadModuleList(): androidNative.Array<io.sentry.protocol.DebugImage>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module ndk {
        export class NativeScope extends io.sentry.android.ndk.INativeScope {
          public static class: java.lang.Class<io.sentry.android.ndk.NativeScope>;
          public static nativeRemoveUser(): void;
          public static nativeRemoveTag(param0: string): void;
          public static nativeSetExtra(param0: string, param1: string): void;
          public removeUser(): void;
          public removeExtra(param0: string): void;
          public removeTag(param0: string): void;
          public addBreadcrumb(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
          public static nativeSetTag(param0: string, param1: string): void;
          public setUser(param0: string, param1: string, param2: string, param3: string): void;
          public static nativeRemoveExtra(param0: string): void;
          public static nativeSetUser(param0: string, param1: string, param2: string, param3: string): void;
          public setExtra(param0: string, param1: string): void;
          public static nativeAddBreadcrumb(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
          public setTag(param0: string, param1: string): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module ndk {
        export class NdkScopeObserver {
          public static class: java.lang.Class<io.sentry.android.ndk.NdkScopeObserver>;
          public setExtra(param0: string, param1: string): void;
          public constructor(param0: io.sentry.SentryOptions);
          public setUser(param0: io.sentry.protocol.User): void;
          public removeExtra(param0: string): void;
          public setTag(param0: string, param1: string): void;
          public removeTag(param0: string): void;
          public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module ndk {
        export class SentryNdk {
          public static class: java.lang.Class<io.sentry.android.ndk.SentryNdk>;
          public static close(): void;
          public static init(param0: io.sentry.android.core.SentryAndroidOptions): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module android {
      export module ndk {
        export class SentryNdkUtil {
          public static class: java.lang.Class<io.sentry.android.ndk.SentryNdkUtil>;
        }
      }
    }
  }
}

//Generics information:
