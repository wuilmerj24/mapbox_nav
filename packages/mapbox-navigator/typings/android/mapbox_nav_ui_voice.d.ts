/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module navigation {
      export module ui {
        export module voice {
          export class BuildConfig {
            public static class: java.lang.Class<com.mapbox.navigation.ui.voice.BuildConfig>;
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
    export module navigation {
      export module ui {
        export module voice {
          export module api {
            export class AsyncAudioFocusDelegate {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { requestFocus(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, param1: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void; abandonFocus(param0: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void });
              public constructor();
              public requestFocus(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, param1: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public abandonFocus(param0: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
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
        export module voice {
          export module api {
            export class AudioFocusDelegate {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.AudioFocusDelegate>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.AudioFocusDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { requestFocus(): boolean; abandonFocus(): boolean });
              public constructor();
              public requestFocus(): boolean;
              public abandonFocus(): boolean;
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
        export module voice {
          export module api {
            export class AudioFocusDelegateProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.AudioFocusDelegateProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.AudioFocusDelegateProvider;
              public defaultAudioFocusDelegate(param0: globalAndroid.media.AudioManager, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes): com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate;
              public defaultAudioFocusDelegate(param0: globalAndroid.content.Context, param1: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions): com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate;
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
        export module voice {
          export module api {
            export class AudioFocusRequestCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { invoke(param0: boolean): void });
              public constructor();
              public invoke(param0: boolean): void;
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
        export module voice {
          export module api {
            export class BundleProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.BundleProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.BundleProvider;
              public retrieveBundle(): globalAndroid.os.Bundle;
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
        export module voice {
          export module api {
            export class FileInputStreamProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.FileInputStreamProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.FileInputStreamProvider;
              public retrieveFileInputStream(param0: java.io.File): java.io.FileInputStream;
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
        export module voice {
          export module api {
            export class MapboxAudioGuidance {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance>;
              public constructor(param0: com.mapbox.navigation.ui.voice.internal.impl.MapboxAudioGuidanceServices, param1: kotlinx.coroutines.CoroutineDispatcher);
              public toggle(): void;
              public static create(): com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance;
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public static getRegisteredInstance(): com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance;
              public unmute(): void;
              public getCurrentVoiceInstructionsPlayer(): com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer;
              public stateFlow(): kotlinx.coroutines.flow.StateFlow<com.mapbox.navigation.ui.voice.api.MapboxAudioGuidanceState>;
              public mute(): void;
            }
            export module MapboxAudioGuidance {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance.Companion>;
                public getRegisteredInstance(): com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance;
                public create(): com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance;
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
        export module voice {
          export module api {
            export class MapboxAudioGuidanceState {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxAudioGuidanceState>;
              public isPlayable(): boolean;
              public constructor();
              public isFirst(): boolean;
              public getVoiceInstructions(): com.mapbox.api.directions.v5.models.VoiceInstructions;
              public hashCode(): number;
              public getSpeechAnnouncement(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public toString(): string;
              public isMuted(): boolean;
              public equals(param0: any): boolean;
              public constructor(param0: boolean, param1: boolean, param2: boolean, param3: com.mapbox.api.directions.v5.models.VoiceInstructions, param4: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement);
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
        export module voice {
          export module api {
            export class MapboxSpeechApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechApi>;
              public cancel(): void;
              public predownload$libnavui_voice_release(param0: java.util.List<any>): void;
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions);
              public generatePredownloaded(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.voice.model.SpeechError, com.mapbox.navigation.ui.voice.model.SpeechValue>>): void;
              public generate(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.bindgen.Expected<com.mapbox.navigation.ui.voice.model.SpeechError, com.mapbox.navigation.ui.voice.model.SpeechValue>>): void;
              public clean(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
              public cancelPredownload$libnavui_voice_release(): void;
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
        export module voice {
          export module api {
            export class MapboxSpeechFileProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechFileProvider>;
              public cancel(): void;
              public constructor(param0: java.io.File);
              public delete(param0: java.io.File): void;
              public generateVoiceFileFrom(param0: java.io.InputStream, param1: any): any;
            }
            export module MapboxSpeechFileProvider {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechFileProvider.Companion>;
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
        export module voice {
          export module api {
            export class MapboxSpeechProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechProvider>;
              public constructor(param0: string, param1: string, param2: com.mapbox.navigation.base.internal.accounts.UrlSkuTokenProvider, param3: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions, param4: com.mapbox.navigation.ui.utils.internal.resource.ResourceLoader);
              public load(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: any): any;
            }
            export module MapboxSpeechProvider {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechProvider.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxSpeechProvider.WhenMappings>;
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
        export module voice {
          export module api {
            export class MapboxVoiceApi extends com.mapbox.navigation.ui.voice.api.VoiceApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxVoiceApi>;
              public cancel(): void;
              public constructor(param0: com.mapbox.navigation.ui.voice.api.MapboxSpeechProvider, param1: com.mapbox.navigation.ui.voice.api.MapboxSpeechFileProvider);
              public clean(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public retrieveVoiceFile(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: any): any;
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
        export module voice {
          export module api {
            export class MapboxVoiceInstructionsPlayer {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer>;
              public updateLanguage(param0: string): void;
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, param3: com.mapbox.navigation.ui.voice.api.AudioFocusDelegate);
              /** @deprecated */
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, param3: com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate, param4: com.mapbox.navigation.ui.utils.internal.Provider<java.util.Timer>);
              public play(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>): void;
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, param3: com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate);
              public volume(param0: com.mapbox.navigation.ui.voice.model.SpeechVolume): void;
              public clear(): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, param4: com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate);
              public shutdown(): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, param4: com.mapbox.navigation.ui.voice.api.AudioFocusDelegate);
              /** @deprecated */
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions);
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions);
              /** @deprecated */
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, param4: com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate, param5: com.mapbox.navigation.ui.utils.internal.Provider<java.util.Timer>);
              public constructor(param0: globalAndroid.content.Context, param1: string);
            }
            export module MapboxVoiceInstructionsPlayer {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer.WhenMappings>;
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
        export module voice {
          export module api {
            export class MediaPlayerProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.MediaPlayerProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.MediaPlayerProvider;
              public retrieveMediaPlayer(): globalAndroid.media.MediaPlayer;
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
        export module voice {
          export module api {
            export class NextVoiceInstructionsProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.NextVoiceInstructionsProvider>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.NextVoiceInstructionsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getNextVoiceInstructions(param0: com.mapbox.navigation.ui.voice.api.RouteProgressData): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions> });
              public constructor();
              public getNextVoiceInstructions(param0: com.mapbox.navigation.ui.voice.api.RouteProgressData): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>;
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
        export module voice {
          export module api {
            export class OreoAndLaterAudioFocusDelegate extends com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.OreoAndLaterAudioFocusDelegate>;
              public requestFocus(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, param1: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public constructor(param0: globalAndroid.media.AudioManager, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes);
              public abandonFocus(param0: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
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
        export module voice {
          export module api {
            export class PlayCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.PlayCallback>;
              public getConsumer(): com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>;
              public hashCode(): number;
              public component1(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public getAnnouncement(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public component2(): com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>;
              public constructor(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>);
              public toString(): string;
              public equals(param0: any): boolean;
              public copy(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.base.util.MapboxNavigationConsumer<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>): com.mapbox.navigation.ui.voice.api.PlayCallback;
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
        export module voice {
          export module api {
            export class PreOreoAudioFocusDelegate extends com.mapbox.navigation.ui.voice.api.AsyncAudioFocusDelegate {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.PreOreoAudioFocusDelegate>;
              public requestFocus(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, param1: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
              public constructor(param0: globalAndroid.media.AudioManager, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes);
              public abandonFocus(param0: com.mapbox.navigation.ui.voice.api.AudioFocusRequestCallback): void;
            }
            export module PreOreoAudioFocusDelegate {
              export class WhenMappings {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.PreOreoAudioFocusDelegate.WhenMappings>;
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
        export module voice {
          export module api {
            export class RouteProgressData {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.RouteProgressData>;
              public getStepDistanceRemaining(): number;
              public hashCode(): number;
              public component2(): number;
              public component5(): number;
              public copy(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: number, param3: number, param4: number): com.mapbox.navigation.ui.voice.api.RouteProgressData;
              public toString(): string;
              public component1(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public constructor(param0: com.mapbox.api.directions.v5.models.DirectionsRoute, param1: number, param2: number, param3: number, param4: number);
              public getRoute(): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public getStepDurationRemaining(): number;
              public getLegIndex(): number;
              public component4(): number;
              public component3(): number;
              public equals(param0: any): boolean;
              public getStepIndex(): number;
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
        export module voice {
          export module api {
            export class TextToSpeechProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.TextToSpeechProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.TextToSpeechProvider;
              public getTextToSpeech(param0: globalAndroid.content.Context, param1: globalAndroid.speech.tts.TextToSpeech.OnInitListener): globalAndroid.speech.tts.TextToSpeech;
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
        export module voice {
          export module api {
            export class TimeBasedNextVoiceInstructionsProvider extends com.mapbox.navigation.ui.voice.api.NextVoiceInstructionsProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.TimeBasedNextVoiceInstructionsProvider>;
              public constructor(param0: number);
              public getNextVoiceInstructions(param0: com.mapbox.navigation.ui.voice.api.RouteProgressData): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>;
            }
            export module TimeBasedNextVoiceInstructionsProvider {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.TimeBasedNextVoiceInstructionsProvider.Companion>;
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
        export module voice {
          export module api {
            export class UrlUtils {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.UrlUtils>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.UrlUtils;
              public encodePathSegment(param0: string): string;
              public canonicalize$libnavui_voice_release(param0: string, param1: number, param2: number, param3: string, param4: boolean, param5: boolean, param6: boolean, param7: boolean, param8: java.nio.charset.Charset): string;
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
        export module voice {
          export module api {
            export class VoiceApi {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceApi>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.VoiceApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { retrieveVoiceFile(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: any): any; clean(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void });
              public constructor();
              public clean(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public retrieveVoiceFile(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: any): any;
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
        export module voice {
          export module api {
            export class VoiceApiProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceApiProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.VoiceApiProvider;
              public retrieveMapboxVoiceApi(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions): com.mapbox.navigation.ui.voice.api.MapboxVoiceApi;
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
        export module voice {
          export module api {
            export class VoiceInstructionsFilePlayer extends com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayer {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsFilePlayer>;
              public setVolumeLevel$libnavui_voice_release(param0: number): void;
              public getCurrentPlay$libnavui_voice_release(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public volume(param0: com.mapbox.navigation.ui.voice.model.SpeechVolume): void;
              public clear(): void;
              public getVolumeLevel$libnavui_voice_release(): number;
              public setCurrentPlay$libnavui_voice_release(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public setMediaPlayer$libnavui_voice_release(param0: globalAndroid.media.MediaPlayer): void;
              public constructor(param0: globalAndroid.content.Context, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes);
              public getMediaPlayer$libnavui_voice_release(): globalAndroid.media.MediaPlayer;
              public play(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback): void;
              public shutdown(): void;
            }
            export module VoiceInstructionsFilePlayer {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsFilePlayer.Companion>;
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
        export module voice {
          export module api {
            export class VoiceInstructionsFilePlayerProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsFilePlayerProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.VoiceInstructionsFilePlayerProvider;
              public retrieveVoiceInstructionsFilePlayer(param0: globalAndroid.content.Context, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes): com.mapbox.navigation.ui.voice.api.VoiceInstructionsFilePlayer;
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
        export module voice {
          export module api {
            export class VoiceInstructionsParser {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsParser>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.VoiceInstructionsParser;
              public parse(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): com.mapbox.bindgen.Expected<java.lang.Throwable, com.mapbox.navigation.ui.voice.model.TypeAndAnnouncement>;
              public parse(param0: com.mapbox.api.directions.v5.models.VoiceInstructions): com.mapbox.bindgen.Expected<java.lang.Throwable, com.mapbox.navigation.ui.voice.model.TypeAndAnnouncement>;
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
        export module voice {
          export module api {
            export class VoiceInstructionsPlayer {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayer>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { play(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback): void; volume(param0: com.mapbox.navigation.ui.voice.model.SpeechVolume): void; clear(): void; shutdown(): void });
              public constructor();
              public volume(param0: com.mapbox.navigation.ui.voice.model.SpeechVolume): void;
              public clear(): void;
              public play(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback): void;
              public shutdown(): void;
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
        export module voice {
          export module api {
            export abstract class VoiceInstructionsPlayerAttributes {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes>;
              public configureMediaPlayer(): any;
              public getOptions(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
              public applyOn$libnavui_voice_release(param0: globalAndroid.media.MediaPlayer): void;
              public applyOn$libnavui_voice_release(param0: globalAndroid.speech.tts.TextToSpeech, param1: globalAndroid.os.Bundle): void;
              public configureTextToSpeech(): any;
              public configureAudioFocusRequestBuilder(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner): any;
              public applyOn$libnavui_voice_release(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner, param1: globalAndroid.media.AudioFocusRequest.Builder): void;
            }
            export module VoiceInstructionsPlayerAttributes {
              export class OreoAndLaterAttributes extends com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes.OreoAndLaterAttributes>;
                public toString(): string;
                public configureMediaPlayer(): any;
                public getOptions(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
                public audioAttributes$libnavui_voice_release(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner): any;
                public equals(param0: any): boolean;
                public constructor(param0: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, param1: any);
                public component1(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
                public component2(): any;
                public getBuilder(): any;
                public configureAudioFocusRequestBuilder(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner): any;
                public configureTextToSpeech(): any;
                public hashCode(): number;
                public copy(param0: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions, param1: any): com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes.OreoAndLaterAttributes;
              }
              export module OreoAndLaterAttributes {
                export class WhenMappings {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes.OreoAndLaterAttributes.WhenMappings>;
                }
              }
              export class PreOreoAttributes extends com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes.PreOreoAttributes>;
                public constructor(param0: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions);
                public toString(): string;
                public configureMediaPlayer(): any;
                public configureAudioFocusRequestBuilder(param0: com.mapbox.navigation.ui.voice.model.AudioFocusOwner): any;
                public copy(param0: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions): com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes.PreOreoAttributes;
                public getOptions(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
                public equals(param0: any): boolean;
                public configureTextToSpeech(): any;
                public component1(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
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
      export module ui {
        export module voice {
          export module api {
            export class VoiceInstructionsPlayerAttributesProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributesProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributesProvider;
              public retrievePlayerAttributes(param0: com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions): com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes;
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
        export module voice {
          export module api {
            export class VoiceInstructionsPlayerCallback {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback>;
              /**
               * Constructs a new instance of the com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onDone(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void });
              public constructor();
              public onDone(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
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
        export module voice {
          export module api {
            export class VoiceInstructionsPrefetcher {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPrefetcher>;
              public static DEFAULT_OBSERVABLE_TIME_SECONDS: number;
              public static DEFAULT_TIME_PERCENTAGE_TO_TRIGGER_AFTER: number;
              public constructor(param0: com.mapbox.navigation.ui.voice.api.MapboxSpeechApi, param1: number, param2: number, param3: com.mapbox.navigation.ui.voice.api.NextVoiceInstructionsProvider, param4: com.mapbox.navigation.utils.internal.Time);
              public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public constructor(param0: com.mapbox.navigation.ui.voice.api.MapboxSpeechApi);
            }
            export module VoiceInstructionsPrefetcher {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsPrefetcher.Companion>;
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
        export module voice {
          export module api {
            export class VoiceInstructionsTextPlayer extends com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayer {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsTextPlayer>;
              public updateLanguage(param0: string): void;
              public setVolumeLevel$libnavui_voice_release(param0: number): void;
              public initializeWithLanguage$libnavui_voice_release(param0: java.util.Locale): void;
              public getCurrentPlay$libnavui_voice_release(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public volume(param0: com.mapbox.navigation.ui.voice.model.SpeechVolume): void;
              public clear(): void;
              public getVolumeLevel$libnavui_voice_release(): number;
              public setCurrentPlay$libnavui_voice_release(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement): void;
              public play(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement, param1: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerCallback): void;
              public shutdown(): void;
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes);
              public setLanguageSupported$libnavui_voice_release(param0: boolean): void;
              public isLanguageSupported$libnavui_voice_release(): boolean;
              public getTextToSpeech$libnavui_voice_release(): globalAndroid.speech.tts.TextToSpeech;
            }
            export module VoiceInstructionsTextPlayer {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsTextPlayer.Companion>;
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
        export module voice {
          export module api {
            export class VoiceInstructionsTextPlayerProvider {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.api.VoiceInstructionsTextPlayerProvider>;
              public static INSTANCE: com.mapbox.navigation.ui.voice.api.VoiceInstructionsTextPlayerProvider;
              public retrieveVoiceInstructionsTextPlayer(param0: globalAndroid.content.Context, param1: string, param2: com.mapbox.navigation.ui.voice.api.VoiceInstructionsPlayerAttributes): com.mapbox.navigation.ui.voice.api.VoiceInstructionsTextPlayer;
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
        export module voice {
          export module databinding {
            export class MapboxAudioGuidanceButtonLayoutBinding {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.databinding.MapboxAudioGuidanceButtonLayoutBinding>;
              public buttonText: androidx.appcompat.widget.AppCompatTextView;
              public container: androidx.constraintlayout.widget.ConstraintLayout;
              public iconImage: androidx.appcompat.widget.AppCompatImageView;
              public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.mapbox.navigation.ui.voice.databinding.MapboxAudioGuidanceButtonLayoutBinding;
              public static bind(param0: globalAndroid.view.View): com.mapbox.navigation.ui.voice.databinding.MapboxAudioGuidanceButtonLayoutBinding;
              public getRoot(): globalAndroid.view.View;
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
        export module voice {
          export module internal {
            export class MapboxAudioGuidanceVoice {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.MapboxAudioGuidanceVoice>;
              public getMapboxSpeechApi$libnavui_voice_release(): com.mapbox.navigation.ui.voice.api.MapboxSpeechApi;
              public constructor(param0: com.mapbox.navigation.ui.voice.api.MapboxSpeechApi, param1: com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer);
              public speak(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: any): any;
              public speakPredownloaded(param0: com.mapbox.api.directions.v5.models.VoiceInstructions, param1: any): any;
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
        export module voice {
          export module internal {
            export class MapboxVoiceInstructions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions>;
              public constructor();
              public registerObservers(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public voiceInstructions(): kotlinx.coroutines.flow.Flow<com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions.State>;
              public unregisterObservers(param0: com.mapbox.navigation.core.MapboxNavigation): void;
              public voiceLanguage(): kotlinx.coroutines.flow.Flow<string>;
            }
            export module MapboxVoiceInstructions {
              export class State {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions.State>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { isPlayable(): boolean; isFirst(): boolean; getVoiceInstructions(): com.mapbox.api.directions.v5.models.VoiceInstructions });
                public constructor();
                public isFirst(): boolean;
                public getVoiceInstructions(): com.mapbox.api.directions.v5.models.VoiceInstructions;
                public isPlayable(): boolean;
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
        export module voice {
          export module internal {
            export class MapboxVoiceInstructionsState extends com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions.State {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructionsState>;
              public isPlayable(): boolean;
              public constructor();
              public isFirst(): boolean;
              public getVoiceInstructions(): com.mapbox.api.directions.v5.models.VoiceInstructions;
              public copy(param0: boolean, param1: boolean, param2: com.mapbox.api.directions.v5.models.VoiceInstructions): com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructionsState;
              public component1(): boolean;
              public hashCode(): number;
              public component2(): boolean;
              public constructor(param0: boolean, param1: boolean, param2: com.mapbox.api.directions.v5.models.VoiceInstructions);
              public toString(): string;
              public component3(): com.mapbox.api.directions.v5.models.VoiceInstructions;
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
      export module ui {
        export module voice {
          export module internal {
            export module impl {
              export class MapboxAudioGuidanceServices {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.impl.MapboxAudioGuidanceServices>;
                public configOwner(param0: globalAndroid.content.Context): com.mapbox.navigation.ui.utils.internal.configuration.NavigationConfigOwner;
                public mapboxSpeechApi(param0: com.mapbox.navigation.core.MapboxNavigation, param1: string): com.mapbox.navigation.ui.voice.api.MapboxSpeechApi;
                public dataStoreOwner(param0: globalAndroid.content.Context): com.mapbox.navigation.ui.utils.internal.datastore.NavigationDataStoreOwner;
                public getVoiceInstructionsPlayer(): com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer;
                public constructor();
                public getOrUpdateMapboxVoiceInstructionsPlayer(param0: com.mapbox.navigation.core.MapboxNavigation, param1: string): com.mapbox.navigation.ui.voice.api.MapboxVoiceInstructionsPlayer;
                public mapboxVoiceInstructions(): com.mapbox.navigation.ui.voice.internal.MapboxVoiceInstructions;
                public mapboxAudioGuidanceVoice(param0: com.mapbox.navigation.core.MapboxNavigation, param1: string): com.mapbox.navigation.ui.voice.internal.MapboxAudioGuidanceVoice;
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
        export module voice {
          export module internal {
            export module ui {
              export class AudioComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.ui.AudioComponentContract>;
                /**
                 * Constructs a new instance of the com.mapbox.navigation.ui.voice.internal.ui.AudioComponentContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { isMuted(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>; isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>; mute(): void; unMute(): void });
                public constructor();
                public isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                public isMuted(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                public mute(): void;
                public unMute(): void;
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
        export module voice {
          export module internal {
            export module ui {
              export class AudioGuidanceButtonComponent {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.ui.AudioGuidanceButtonComponent>;
                public constructor(param0: com.mapbox.navigation.ui.voice.view.MapboxAudioGuidanceButton, param1: com.mapbox.navigation.ui.utils.internal.Provider<com.mapbox.navigation.ui.voice.internal.ui.AudioComponentContract>);
                public onAttached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
                public onDetached(param0: com.mapbox.navigation.core.MapboxNavigation): void;
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
        export module voice {
          export module internal {
            export module ui {
              export class MapboxAudioComponentContract extends com.mapbox.navigation.ui.voice.internal.ui.AudioComponentContract {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.internal.ui.MapboxAudioComponentContract>;
                public constructor(param0: kotlinx.coroutines.CoroutineScope, param1: com.mapbox.navigation.ui.voice.api.MapboxAudioGuidance);
                public isVisible(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                public isMuted(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                public mute(): void;
                public unMute(): void;
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
        export module voice {
          export module model {
            export class AudioFocusOwner {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.AudioFocusOwner>;
              public static MediaPlayer: com.mapbox.navigation.ui.voice.model.AudioFocusOwner;
              public static TextToSpeech: com.mapbox.navigation.ui.voice.model.AudioFocusOwner;
              public static valueOf(param0: string): com.mapbox.navigation.ui.voice.model.AudioFocusOwner;
              public static values(): androidNative.Array<com.mapbox.navigation.ui.voice.model.AudioFocusOwner>;
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
        export module voice {
          export module model {
            export class SpeechAnnouncement {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement>;
              public getSsmlAnnouncement(): string;
              public toBuilder(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement.Builder;
              public hashCode(): number;
              public getAnnouncement(): string;
              public getFile(): java.io.File;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export module SpeechAnnouncement {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.SpeechAnnouncement.Builder>;
                public file(param0: java.io.File): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement.Builder;
                public build(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
                public constructor(param0: string);
                public ssmlAnnouncement(param0: string): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement.Builder;
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
        export module voice {
          export module model {
            export class SpeechError {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.SpeechError>;
              public getFallback(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
              public constructor(param0: string, param1: java.lang.Throwable, param2: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement);
              public getThrowable(): java.lang.Throwable;
              public getErrorMessage(): string;
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
        export module voice {
          export module model {
            export class SpeechValue {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.SpeechValue>;
              public constructor(param0: com.mapbox.navigation.ui.voice.model.SpeechAnnouncement);
              public getAnnouncement(): com.mapbox.navigation.ui.voice.model.SpeechAnnouncement;
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
        export module voice {
          export module model {
            export class SpeechVolume {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.SpeechVolume>;
              public copy(param0: number): com.mapbox.navigation.ui.voice.model.SpeechVolume;
              public component1(): number;
              public getLevel(): number;
              public hashCode(): number;
              public toString(): string;
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
      export module ui {
        export module voice {
          export module model {
            export class TypeAndAnnouncement {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.TypeAndAnnouncement>;
              public component2(): string;
              public copy(param0: string, param1: string): com.mapbox.navigation.ui.voice.model.TypeAndAnnouncement;
              public hashCode(): number;
              public constructor(param0: string, param1: string);
              public getAnnouncement(): string;
              public toString(): string;
              public equals(param0: any): boolean;
              public getType(): string;
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
      export module ui {
        export module voice {
          export module model {
            export abstract class VoiceState {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.VoiceState>;
            }
            export module VoiceState {
              export class VoiceError extends com.mapbox.navigation.ui.voice.model.VoiceState {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.VoiceState.VoiceError>;
                public component1(): string;
                public toString(): string;
                public equals(param0: any): boolean;
                public getException(): string;
                public copy(param0: string): com.mapbox.navigation.ui.voice.model.VoiceState.VoiceError;
                public constructor(param0: string);
                public hashCode(): number;
              }
              export class VoiceFile extends com.mapbox.navigation.ui.voice.model.VoiceState {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.model.VoiceState.VoiceFile>;
                public toString(): string;
                public copy(param0: java.io.File): com.mapbox.navigation.ui.voice.model.VoiceState.VoiceFile;
                public equals(param0: any): boolean;
                public constructor(param0: java.io.File);
                public component1(): java.io.File;
                public hashCode(): number;
                public getInstructionFile(): java.io.File;
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
        export module voice {
          export module options {
            export class MapboxSpeechApiOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions>;
              public toBuilder(): com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions.Builder;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public getBaseUri(): string;
            }
            export module MapboxSpeechApiOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions.Builder>;
                public baseUri(param0: string): com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions.Builder;
                public constructor();
                public build(): com.mapbox.navigation.ui.voice.options.MapboxSpeechApiOptions;
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
        export module voice {
          export module options {
            export class VoiceInstructionsPlayerOptions {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions>;
              public getTtsStreamType(): number;
              public getStreamType(): number;
              public getUsage(): number;
              public hashCode(): number;
              public getUseLegacyApi(): boolean;
              public getAbandonFocusDelay(): number;
              public getFocusGain(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public getContentType(): number;
              public toBuilder(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
              public getCheckIsLanguageAvailable(): boolean;
            }
            export module VoiceInstructionsPlayerOptions {
              export class Builder {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder>;
                public useLegacyApi(param0: boolean): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public build(): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions;
                public focusGain(param0: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public contentType(param0: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public constructor();
                public ttsStreamType(param0: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public checkIsLanguageAvailable(param0: boolean): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public abandonFocusDelay(param0: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public streamType(param0: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
                public usage(param0: number): com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder;
              }
              export module Builder {
                export class Companion {
                  public static class: java.lang.Class<com.mapbox.navigation.ui.voice.options.VoiceInstructionsPlayerOptions.Builder.Companion>;
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
        export module voice {
          export module view {
            export class MapboxAudioGuidanceButton {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.view.MapboxAudioGuidanceButton>;
              public setUnmuteText(param0: string): void;
              public unmuteAndExtend(param0: number): void;
              public updateStyle(param0: number): void;
              public muteAndExtend(): void;
              public setMuteText(param0: string): void;
              public getIconImage(): androidx.appcompat.widget.AppCompatImageView;
              public setUnmuteIconResId(param0: number): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
              public unmute(): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public getContainerView(): androidx.constraintlayout.widget.ConstraintLayout;
              public mute(): void;
              public setMuteIconResId(param0: number): void;
              public getUnmuteIconResId(): number;
              public muteAndExtend(param0: number): void;
              public getTextView(): androidx.appcompat.widget.AppCompatTextView;
              public getMuteText(): string;
              public getMuteIconResId(): number;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public getUnmuteText(): string;
              public unmuteAndExtend(): void;
              public constructor(param0: globalAndroid.content.Context);
            }
            export module MapboxAudioGuidanceButton {
              export class Companion {
                public static class: java.lang.Class<com.mapbox.navigation.ui.voice.view.MapboxAudioGuidanceButton.Companion>;
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
        export module voice {
          export module view {
            export class MapboxSoundButton {
              public static class: java.lang.Class<com.mapbox.navigation.ui.voice.view.MapboxSoundButton>;
              public mute(): boolean;
              public unmute(): boolean;
              public muteAndExtend(param0: number, param1: string): boolean;
              public muteAndExtend(param0: number): boolean;
              public updateStyle(param0: number): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public unmuteAndExtend(param0: number): boolean;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public unmuteAndExtend(param0: number, param1: string): boolean;
              public constructor(param0: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

//Generics information:
