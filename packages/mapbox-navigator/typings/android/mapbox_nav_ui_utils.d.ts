/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module utils {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.utils.BuildConfig>;
            public static DEBUG: boolean;
            public static LIBRARY_PACKAGE_NAME: string;
            public static BUILD_TYPE: string;
            public static MAPBOX_NAVIGATION_VERSION_NAME: string;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module utils {
          export module internal {
            export class CompareUtils {
              public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.CompareUtils>;
              public static INSTANCE: com.mapbox.navigation.ui.utils.internal.CompareUtils;
              public areEqualContentsIgnoreOrder(param0: java.util.Collection<any>, param1: java.util.Collection<any>): boolean;
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
      export module ui {
        export module utils {
          export module internal {
            export class ExtendableButtonHelper {
              public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.ExtendableButtonHelper>;
              public constructor(param0: globalAndroid.widget.TextView, param1: any, param2: any);
              public removeDelayedAnimations(): void;
              public constructor(param0: globalAndroid.widget.TextView, param1: number, param2: number);
              public showTextAndExtend(param0: string, param1: number): void;
              public isAnimationRunning(): boolean;
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
      export module ui {
        export module utils {
          export module internal {
            export class NullUtils {
              public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.NullUtils>;
              public static ifNonNull(param0: any, param1: any): any;
              public static ifNonNull(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): any;
              public static ifNonNull(param0: any, param1: any, param2: any, param3: any): any;
              public static ifNonNull(param0: any, param1: any, param2: any, param3: any, param4: any): any;
              public static ifNonNull(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): any;
              public static ifNonNull(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): any;
              public static ifNonNull(param0: any, param1: any, param2: any): any;
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
      export module ui {
        export module utils {
          export module internal {
            export class Provider<T> extends java.lang.Object {
              public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.Provider<any>>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.utils.internal.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { get(): T });
              public constructor();
              public get(): T;
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
      export module ui {
        export module utils {
          export module internal {
            export class SvgUtil {
              public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.SvgUtil>;
              public static INSTANCE: com.mapbox.navigation.ui.utils.internal.SvgUtil;
              public renderAsBitmapWith(param0: java.io.ByteArrayInputStream, param1: number, param2: number, param3: string): globalAndroid.graphics.Bitmap;
              public renderAsBitmapWithHeight(param0: java.io.ByteArrayInputStream, param1: number, param2: string): globalAndroid.graphics.Bitmap;
              public renderAsBitmapWithWidth(param0: java.io.ByteArrayInputStream, param1: number, param2: string, param3: com.caverock.androidsvg.SVGExternalFileResolver): globalAndroid.graphics.Bitmap;
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
      export module ui {
        export module utils {
          export module internal {
            export module configuration {
              export class NavigationConfigOwner {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.configuration.NavigationConfigOwner>;
                public language(): kotlinx.coroutines.flow.Flow<string>;
                public toLocale(param0: globalAndroid.content.res.Configuration): java.util.Locale;
                public config(): kotlinx.coroutines.flow.Flow<globalAndroid.content.res.Configuration>;
                public constructor(param0: globalAndroid.content.Context);
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
      export module ui {
        export module utils {
          export module internal {
            export module datastore {
              export class NavigationDataStoreKey<T> extends java.lang.Object {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreKey<any>>;
                public constructor(param0: androidx.datastore.preferences.core.Preferences.Key<T>, param1: T);
                public getDefaultValue(): T;
                public getPreferenceKey(): androidx.datastore.preferences.core.Preferences.Key<T>;
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
      export module ui {
        export module utils {
          export module internal {
            export module datastore {
              export class NavigationDataStoreOwner {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreOwner>;
                public write(param0: com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreKey<any>, param1: any, param2: any): any;
                public read(param0: com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreKey<any>): kotlinx.coroutines.flow.Flow;
                public constructor(param0: globalAndroid.content.Context);
              }
              export module NavigationDataStoreOwner {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreOwner.Companion>;
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
      export module ui {
        export module utils {
          export module internal {
            export module extensions {
              export class BitmapEx {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.extensions.BitmapEx>;
                public static drawableWithHeight(param0: globalAndroid.graphics.Bitmap, param1: number, param2: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
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
      export module ui {
        export module utils {
          export module internal {
            export module extensions {
              export class TextViewEx {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.extensions.TextViewEx>;
                public static measureTextWidth(param0: globalAndroid.widget.TextView, param1: string): number;
                public static getAsBitmap(param0: globalAndroid.widget.TextView): globalAndroid.graphics.Bitmap;
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
      export module ui {
        export module utils {
          export module internal {
            export module extensions {
              export class ViewEx {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.extensions.ViewEx>;
                public static slideWidth(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): globalAndroid.animation.ValueAnimator;
                public static slideHeight(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): globalAndroid.animation.ValueAnimator;
                public static play(param0: globalAndroid.animation.ValueAnimator, param1: any, param2: any): void;
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
      export module ui {
        export module utils {
          export module internal {
            export module lifecycle {
              export class ViewLifecycleRegistry {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.lifecycle.ViewLifecycleRegistry>;
                public constructor(param0: globalAndroid.view.View, param1: androidx.lifecycle.LifecycleOwner);
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
      export module ui {
        export module utils {
          export module internal {
            export module network {
              export class HttpServiceInterceptorChain {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.network.HttpServiceInterceptorChain>;
                public onRequest(param0: com.mapbox.common.HttpRequest): com.mapbox.common.HttpRequest;
                public onDownload(param0: com.mapbox.common.DownloadOptions): com.mapbox.common.DownloadOptions;
                public onResponse(param0: com.mapbox.common.HttpResponse): com.mapbox.common.HttpResponse;
                public remove(param0: com.mapbox.common.HttpServiceInterceptorInterface): com.mapbox.navigation.ui.utils.internal.network.HttpServiceInterceptorChain;
                public removeIf(param0: any): void;
                public constructor();
                public add(param0: com.mapbox.common.HttpServiceInterceptorInterface): com.mapbox.navigation.ui.utils.internal.network.HttpServiceInterceptorChain;
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
      export module ui {
        export module utils {
          export module internal {
            export module network {
              export class LoggingInterceptor {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.network.LoggingInterceptor>;
                public onRequest(param0: com.mapbox.common.HttpRequest): com.mapbox.common.HttpRequest;
                public onDownload(param0: com.mapbox.common.DownloadOptions): com.mapbox.common.DownloadOptions;
                public onResponse(param0: com.mapbox.common.HttpResponse): com.mapbox.common.HttpResponse;
                public constructor();
              }
              export module LoggingInterceptor {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.network.LoggingInterceptor.Companion>;
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
      export module ui {
        export module utils {
          export module internal {
            export module resource {
              export class DefaultResourceLoader extends com.mapbox.navigation.ui.utils.internal.resource.ResourceLoader {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.DefaultResourceLoader>;
                public constructor(param0: com.mapbox.common.TileStore, param1: com.mapbox.common.ReachabilityInterface);
                public load(param0: com.mapbox.common.TileStore, param1: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param2: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback): number;
                public unregisterObserver(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver): void;
                public registerObserver(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver): void;
                public load(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback): number;
                public constructor();
                public cancel(param0: number): void;
              }
              export module DefaultResourceLoader {
                export class CallbackAdapter {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.DefaultResourceLoader.CallbackAdapter>;
                  public constructor(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback, param2: java.util.Queue<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver>);
                  public run(param0: com.mapbox.common.ResourceLoadProgress): void;
                  public notifyOnStart(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): void;
                  public run(param0: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void;
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
      export module ui {
        export module utils {
          export module internal {
            export module resource {
              export class ResourceLoadCallback extends com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onStart(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): void; onProgress(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.common.ResourceLoadProgress): void; onFinish(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void });
                public constructor();
                public onProgress(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.common.ResourceLoadProgress): void;
                public onStart(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): void;
                public onFinish(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void;
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
      export module ui {
        export module utils {
          export module internal {
            export module resource {
              export class ResourceLoadObserver {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onStart(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): void; onProgress(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.common.ResourceLoadProgress): void; onFinish(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void });
                public constructor();
                public onProgress(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.common.ResourceLoadProgress): void;
                public onStart(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest): void;
                public onFinish(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.bindgen.Expected<com.mapbox.common.ResourceLoadError, com.mapbox.common.ResourceLoadResult>): void;
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
      export module ui {
        export module utils {
          export module internal {
            export module resource {
              export class ResourceLoadRequest {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest>;
                public getFlags(): com.mapbox.common.ResourceLoadFlags;
                public setNetworkRestriction(param0: com.mapbox.common.NetworkRestriction): void;
                public getUrl(): string;
                public getNetworkRestriction(): com.mapbox.common.NetworkRestriction;
                public constructor(param0: string);
                public setFlags(param0: com.mapbox.common.ResourceLoadFlags): void;
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
      export module ui {
        export module utils {
          export module internal {
            export module resource {
              export abstract class ResourceLoader {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoader>;
                public load(param0: com.mapbox.common.TileStore, param1: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param2: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback): number;
                public unregisterObserver(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver): void;
                public registerObserver(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadObserver): void;
                public load(param0: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadRequest, param1: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoadCallback): number;
                public constructor();
                public cancel(param0: number): void;
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
      export module ui {
        export module utils {
          export module internal {
            export module resource {
              export class ResourceLoaderFactory {
                public static class: java.lang.Class<com.mapbox.navigation.ui.utils.internal.resource.ResourceLoaderFactory>;
                public static INSTANCE: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoaderFactory;
                public getInstance(): com.mapbox.navigation.ui.utils.internal.resource.ResourceLoader;
              }
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.navigation.ui.utils.internal.Provider:1
//com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreKey:1
