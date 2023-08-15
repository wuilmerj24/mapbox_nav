/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module api {
      export module directions {
        export module v5 {
          export class AutoValueGson_DirectionsAdapterFactory extends com.mapbox.api.directions.v5.DirectionsAdapterFactory {
            public static class: java.lang.Class<com.mapbox.api.directions.v5.AutoValueGson_DirectionsAdapterFactory>;
            public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
            public static create(): com.google.gson.TypeAdapterFactory;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module api {
      export module directions {
        export module v5 {
          export abstract class DirectionsAdapterFactory {
            public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsAdapterFactory>;
            public constructor();
            public static create(): com.google.gson.TypeAdapterFactory;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module api {
      export module directions {
        export module v5 {
          export class DirectionsCriteria {
            public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria>;
            public static PROFILE_DEFAULT_USER: string;
            public static BASE_API_URL: string;
            public static PROFILE_DRIVING_TRAFFIC: string;
            public static PROFILE_DRIVING: string;
            public static PROFILE_WALKING: string;
            public static PROFILE_CYCLING: string;
            public static GEOMETRY_POLYLINE: string;
            public static GEOMETRY_POLYLINE6: string;
            public static OVERVIEW_SIMPLIFIED: string;
            public static OVERVIEW_FULL: string;
            public static OVERVIEW_FALSE: string;
            public static ANNOTATION_DURATION: string;
            public static ANNOTATION_DISTANCE: string;
            public static ANNOTATION_SPEED: string;
            public static ANNOTATION_CONGESTION: string;
            public static ANNOTATION_CONGESTION_NUMERIC: string;
            public static ANNOTATION_MAXSPEED: string;
            public static ANNOTATION_CLOSURE: string;
            public static ANNOTATION_TRAFFIC_TENDENCY: string;
            public static EXCLUDE_TOLL: string;
            public static EXCLUDE_MOTORWAY: string;
            public static EXCLUDE_FERRY: string;
            public static EXCLUDE_TUNNEL: string;
            public static EXCLUDE_RESTRICTED: string;
            public static EXCLUDE_CASH_ONLY_TOLLS: string;
            public static EXCLUDE_UNPAVED: string;
            public static INCLUDE_HOV2: string;
            public static INCLUDE_HOV3: string;
            public static INCLUDE_HOT: string;
            public static IMPERIAL: string;
            public static METRIC: string;
            public static SOURCE_FIRST: string;
            public static SOURCE_ANY: string;
            public static DESTINATION_ANY: string;
            public static DESTINATION_LAST: string;
            public static APPROACH_UNRESTRICTED: string;
            public static APPROACH_CURB: string;
            public static TRAFFIC_TENDENCY_UNKNOWN: number;
            public static TRAFFIC_TENDENCY_CONSTANT_CONGESTION: number;
            public static TRAFFIC_TENDENCY_INCREASING_CONGESTION: number;
            public static TRAFFIC_TENDENCY_DECREASING_CONGESTION: number;
            public static TRAFFIC_TENDENCY_RAPIDLY_INCREASING_CONGESTION: number;
            public static TRAFFIC_TENDENCY_RAPIDLY_DECREASING_CONGESTION: number;
            public static PAYMENT_METHOD_GENERAL: string;
            public static PAYMENT_METHOD_ETC: string;
            public static PAYMENT_METHOD_ETCX: string;
            public static PAYMENT_METHOD_CASH: string;
            public static PAYMENT_METHOD_EXACT_CASH: string;
            public static PAYMENT_METHOD_COINS: string;
            public static PAYMENT_METHOD_NOTES: string;
            public static PAYMENT_METHOD_DEBIT_CARDS: string;
            public static PAYMENT_METHOD_PASS_CARD: string;
            public static PAYMENT_METHOD_CREDIT_CARDS: string;
            public static PAYMENT_METHOD_VIDEO: string;
            public static PAYMENT_METHOD_CRYPTOCURRENCIES: string;
            public static PAYMENT_METHOD_APP: string;
            public static AMENITY_TYPE_GAS_STATION: string;
            public static AMENITY_TYPE_ELECTRIC_CHARGING_STATION: string;
            public static AMENITY_TYPE_TOILET: string;
            public static AMENITY_TYPE_COFFEE: string;
            public static AMENITY_TYPE_RESTAURANT: string;
            public static AMENITY_TYPE_SNACK: string;
            public static AMENITY_TYPE_ATM: string;
            public static AMENITY_TYPE_INFO: string;
            public static AMENITY_TYPE_BABY_CARE: string;
            public static AMENITY_TYPE_FACILITIES_FOR_DISABLED: string;
            public static AMENITY_TYPE_SHOP: string;
            public static AMENITY_TYPE_TELEPHONE: string;
            public static AMENITY_TYPE_HOTEL: string;
            public static AMENITY_TYPE_HOTSPRING: string;
            public static AMENITY_TYPE_SHOWER: string;
            public static AMENITY_TYPE_PICNIC_SHELTER: string;
            public static AMENITY_TYPE_POST: string;
            public static AMENITY_TYPE_FAX: string;
          }
          export module DirectionsCriteria {
            export class AmenityTypeCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.AmenityTypeCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$AmenityTypeCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class AnnotationCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.AnnotationCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$AnnotationCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class ApproachesCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.ApproachesCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$ApproachesCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class DestinationCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.DestinationCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$DestinationCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class ExcludeCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.ExcludeCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$ExcludeCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class GeometriesCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.GeometriesCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$GeometriesCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class IncludeCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.IncludeCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$IncludeCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class OverviewCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.OverviewCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$OverviewCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class PaymentMethodsCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.PaymentMethodsCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$PaymentMethodsCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class ProfileCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.ProfileCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$ProfileCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class SourceCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.SourceCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$SourceCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class TrafficTendencyCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.TrafficTendencyCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$TrafficTendencyCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class VoiceUnitCriteria {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.DirectionsCriteria.VoiceUnitCriteria>;
              /**
               * Constructs a new instance of the com.mapbox.api.directions.v5.DirectionsCriteria$VoiceUnitCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export module models {
              export module VoiceUnitCriteria {
                export module VoiceUnitCriteria {
                  export abstract class AutoValue_Admin extends com.mapbox.api.directions.v5.models.Admin {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Admin>;
                    public countryCode(): string;
                    public toString(): string;
                    public equals(param0: any): boolean;
                    public countryCodeAlpha3(): string;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Admin.Builder;
                  }
                  export module AutoValue_Admin {
                    export class Builder extends com.mapbox.api.directions.v5.models.Admin.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Admin.Builder>;
                      public countryCode(param0: string): com.mapbox.api.directions.v5.models.Admin.Builder;
                      public countryCodeAlpha3(param0: string): com.mapbox.api.directions.v5.models.Admin.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Admin;
                    }
                  }
                  export abstract class AutoValue_Amenity extends com.mapbox.api.directions.v5.models.Amenity {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Amenity>;
                    public toString(): string;
                    public name(): string;
                    public equals(param0: any): boolean;
                    public brand(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Amenity.Builder;
                    public type(): string;
                    public hashCode(): number;
                  }
                  export module AutoValue_Amenity {
                    export class Builder extends com.mapbox.api.directions.v5.models.Amenity.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Amenity.Builder>;
                      public brand(param0: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Amenity;
                      public name(param0: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
                      public type(param0: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
                    }
                  }
                  export abstract class AutoValue_BannerComponents extends com.mapbox.api.directions.v5.models.BannerComponents {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerComponents>;
                    public imageUrl(): string;
                    public toString(): string;
                    public subType(): string;
                    public equals(param0: any): boolean;
                    public directions(): java.util.List<string>;
                    public type(): string;
                    public abbreviationPriority(): java.lang.Integer;
                    public mapboxShield(): com.mapbox.api.directions.v5.models.MapboxShield;
                    public toBuilder(): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    public active(): java.lang.Boolean;
                    public abbreviation(): string;
                    public text(): string;
                    public activeDirection(): string;
                    public imageBaseUrl(): string;
                    public hashCode(): number;
                  }
                  export module AutoValue_BannerComponents {
                    export class Builder extends com.mapbox.api.directions.v5.models.BannerComponents.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerComponents.Builder>;
                      public imageBaseUrl(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public activeDirection(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public build(): com.mapbox.api.directions.v5.models.BannerComponents;
                      public mapboxShield(param0: com.mapbox.api.directions.v5.models.MapboxShield): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public abbreviation(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public abbreviationPriority(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public text(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public imageUrl(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public subType(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public directions(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public type(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                      public active(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                    }
                  }
                  export abstract class AutoValue_BannerInstructions extends com.mapbox.api.directions.v5.models.BannerInstructions {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerInstructions>;
                    public distanceAlongGeometry(): number;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                    public primary(): com.mapbox.api.directions.v5.models.BannerText;
                    public secondary(): com.mapbox.api.directions.v5.models.BannerText;
                    public equals(param0: any): boolean;
                    public sub(): com.mapbox.api.directions.v5.models.BannerText;
                    public view(): com.mapbox.api.directions.v5.models.BannerView;
                    public hashCode(): number;
                  }
                  export module AutoValue_BannerInstructions {
                    export class Builder extends com.mapbox.api.directions.v5.models.BannerInstructions.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerInstructions.Builder>;
                      public view(param0: com.mapbox.api.directions.v5.models.BannerView): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                      public sub(param0: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                      public distanceAlongGeometry(param0: number): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                      public build(): com.mapbox.api.directions.v5.models.BannerInstructions;
                      public primary(param0: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                      public secondary(param0: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                    }
                  }
                  export abstract class AutoValue_BannerText extends com.mapbox.api.directions.v5.models.BannerText {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerText>;
                    public toString(): string;
                    public text(): string;
                    public drivingSide(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.BannerText.Builder;
                    public degrees(): java.lang.Double;
                    public equals(param0: any): boolean;
                    public type(): string;
                    public modifier(): string;
                    public hashCode(): number;
                    public components(): java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>;
                  }
                  export module AutoValue_BannerText {
                    export class Builder extends com.mapbox.api.directions.v5.models.BannerText.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerText.Builder>;
                      public drivingSide(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public components(param0: java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public text(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public type(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public degrees(param0: java.lang.Double): com.mapbox.api.directions.v5.models.BannerText.Builder;
                      public build(): com.mapbox.api.directions.v5.models.BannerText;
                      public modifier(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                    }
                  }
                  export abstract class AutoValue_BannerView extends com.mapbox.api.directions.v5.models.BannerView {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerView>;
                    public toString(): string;
                    public text(): string;
                    public equals(param0: any): boolean;
                    public type(): string;
                    public modifier(): string;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.BannerView.Builder;
                    public components(): java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>;
                  }
                  export module AutoValue_BannerView {
                    export class Builder extends com.mapbox.api.directions.v5.models.BannerView.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerView.Builder>;
                      public text(param0: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
                      public modifier(param0: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
                      public type(param0: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
                      public build(): com.mapbox.api.directions.v5.models.BannerView;
                      public components(param0: java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>): com.mapbox.api.directions.v5.models.BannerView.Builder;
                    }
                  }
                  export abstract class AutoValue_Closure extends com.mapbox.api.directions.v5.models.Closure {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Closure>;
                    public geometryIndexEnd(): java.lang.Integer;
                    public toString(): string;
                    public equals(param0: any): boolean;
                    public geometryIndexStart(): java.lang.Integer;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Closure.Builder;
                  }
                  export module AutoValue_Closure {
                    export class Builder extends com.mapbox.api.directions.v5.models.Closure.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Closure.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.Closure;
                      public geometryIndexEnd(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Closure.Builder;
                      public geometryIndexStart(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Closure.Builder;
                    }
                  }
                  export abstract class AutoValue_Congestion extends com.mapbox.api.directions.v5.models.Congestion {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Congestion>;
                    public toString(): string;
                    public value(): number;
                    public equals(param0: any): boolean;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Congestion.Builder;
                  }
                  export module AutoValue_Congestion {
                    export class Builder extends com.mapbox.api.directions.v5.models.Congestion.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Congestion.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.Congestion;
                      public value(param0: number): com.mapbox.api.directions.v5.models.Congestion.Builder;
                    }
                  }
                  export abstract class AutoValue_CostPerVehicleSize extends com.mapbox.api.directions.v5.models.CostPerVehicleSize {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_CostPerVehicleSize>;
                    public small(): java.lang.Double;
                    public middle(): java.lang.Double;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                    public standard(): java.lang.Double;
                    public jumbo(): java.lang.Double;
                    public equals(param0: any): boolean;
                    public large(): java.lang.Double;
                    public hashCode(): number;
                  }
                  export module AutoValue_CostPerVehicleSize {
                    export class Builder extends com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_CostPerVehicleSize.Builder>;
                      public standard(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                      public large(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                      public jumbo(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                      public small(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                      public build(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                      public middle(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                    }
                  }
                  export abstract class AutoValue_DirectionsError extends com.mapbox.api.directions.v5.models.DirectionsError {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsError>;
                    public code(): string;
                    public toString(): string;
                    public equals(param0: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
                    public message(): string;
                    public hashCode(): number;
                  }
                  export module AutoValue_DirectionsError {
                    export class Builder extends com.mapbox.api.directions.v5.models.DirectionsError.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsError.Builder>;
                      public code(param0: string): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
                      public build(): com.mapbox.api.directions.v5.models.DirectionsError;
                      public message(param0: string): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
                    }
                  }
                  export abstract class AutoValue_DirectionsResponse extends com.mapbox.api.directions.v5.models.DirectionsResponse {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsResponse>;
                    public code(): string;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                    public metadata(): com.mapbox.api.directions.v5.models.Metadata;
                    public equals(param0: any): boolean;
                    public waypoints(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                    public routes(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
                    public message(): string;
                    public uuid(): string;
                    public hashCode(): number;
                  }
                  export module AutoValue_DirectionsResponse {
                    export class Builder extends com.mapbox.api.directions.v5.models.DirectionsResponse.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsResponse.Builder>;
                      public uuid(param0: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                      public waypoints(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                      public message(param0: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                      public metadata(param0: com.mapbox.api.directions.v5.models.Metadata): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                      public code(param0: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                      public routes(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                    }
                  }
                  export abstract class AutoValue_DirectionsRoute extends com.mapbox.api.directions.v5.models.DirectionsRoute {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsRoute>;
                    public routeOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
                    public toString(): string;
                    public weightName(): string;
                    public durationTypical(): java.lang.Double;
                    public routeIndex(): string;
                    public requestUuid(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    public equals(param0: any): boolean;
                    public distance(): java.lang.Double;
                    public waypoints(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
                    public geometry(): string;
                    public legs(): java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>;
                    public voiceLanguage(): string;
                    public tollCosts(): java.util.List<com.mapbox.api.directions.v5.models.TollCost>;
                    public hashCode(): number;
                    public duration(): java.lang.Double;
                    public weight(): java.lang.Double;
                  }
                  export module AutoValue_DirectionsRoute {
                    export class Builder extends com.mapbox.api.directions.v5.models.DirectionsRoute.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsRoute.Builder>;
                      public geometry(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public routeOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public tollCosts(param0: java.util.List<com.mapbox.api.directions.v5.models.TollCost>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public requestUuid(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public weight(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public weightName(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public durationTypical(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public duration(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public build(): com.mapbox.api.directions.v5.models.DirectionsRoute;
                      public routeIndex(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public legs(param0: java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public distance(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public waypoints(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                      public voiceLanguage(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                    }
                  }
                  export abstract class AutoValue_DirectionsWaypoint extends com.mapbox.api.directions.v5.models.DirectionsWaypoint {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsWaypoint>;
                    public toString(): string;
                    public name(): string;
                    public equals(param0: any): boolean;
                    public distance(): java.lang.Double;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                  }
                  export module AutoValue_DirectionsWaypoint {
                    export class Builder extends com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsWaypoint.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.DirectionsWaypoint;
                      public name(param0: string): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                      public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                      public distance(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                    }
                  }
                  export abstract class AutoValue_Incident extends com.mapbox.api.directions.v5.models.Incident {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Incident>;
                    public startTime(): string;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Incident.Builder;
                    public description(): string;
                    public subType(): string;
                    public equals(param0: any): boolean;
                    public countryCodeAlpha3(): string;
                    public subTypeDescription(): string;
                    public geometryIndexStart(): java.lang.Integer;
                    public type(): string;
                    public lanesBlocked(): java.util.List<string>;
                    public id(): string;
                    public alertcCodes(): java.util.List<java.lang.Integer>;
                    public longDescription(): string;
                    public geometryIndexEnd(): java.lang.Integer;
                    public impact(): string;
                    public affectedRoadNames(): java.util.List<string>;
                    public endTime(): string;
                    public numLanesBlocked(): java.lang.Integer;
                    public congestion(): com.mapbox.api.directions.v5.models.Congestion;
                    public countryCodeAlpha2(): string;
                    public creationTime(): string;
                    public hashCode(): number;
                    public closed(): java.lang.Boolean;
                  }
                  export module AutoValue_Incident {
                    export class Builder extends com.mapbox.api.directions.v5.models.Incident.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Incident.Builder>;
                      public numLanesBlocked(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Incident;
                      public alertcCodes(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public startTime(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public geometryIndexStart(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public affectedRoadNames(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public subTypeDescription(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public countryCodeAlpha3(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public congestion(param0: com.mapbox.api.directions.v5.models.Congestion): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public description(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public id(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public countryCodeAlpha2(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public geometryIndexEnd(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public creationTime(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public lanesBlocked(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public subType(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public closed(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public impact(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public longDescription(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public type(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                      public endTime(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                    }
                  }
                  export abstract class AutoValue_Interchange extends com.mapbox.api.directions.v5.models.Interchange {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Interchange>;
                    public toString(): string;
                    public name(): string;
                    public equals(param0: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Interchange.Builder;
                    public hashCode(): number;
                  }
                  export module AutoValue_Interchange {
                    export class Builder extends com.mapbox.api.directions.v5.models.Interchange.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Interchange.Builder>;
                      public name(param0: string): com.mapbox.api.directions.v5.models.Interchange.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Interchange;
                    }
                  }
                  export abstract class AutoValue_IntersectionLanes extends com.mapbox.api.directions.v5.models.IntersectionLanes {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_IntersectionLanes>;
                    public indications(): java.util.List<string>;
                    public active(): java.lang.Boolean;
                    public toString(): string;
                    public valid(): java.lang.Boolean;
                    public equals(param0: any): boolean;
                    public validIndication(): string;
                    public paymentMethods(): java.util.List<string>;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                  }
                  export module AutoValue_IntersectionLanes {
                    export class Builder extends com.mapbox.api.directions.v5.models.IntersectionLanes.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_IntersectionLanes.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.IntersectionLanes;
                      public valid(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                      public active(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                      public indications(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                      public paymentMethods(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                      public validIndication(param0: string): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                    }
                  }
                  export abstract class AutoValue_Junction extends com.mapbox.api.directions.v5.models.Junction {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Junction>;
                    public toString(): string;
                    public name(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Junction.Builder;
                    public equals(param0: any): boolean;
                    public hashCode(): number;
                  }
                  export module AutoValue_Junction {
                    export class Builder extends com.mapbox.api.directions.v5.models.Junction.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Junction.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.Junction;
                      public name(param0: string): com.mapbox.api.directions.v5.models.Junction.Builder;
                    }
                  }
                  export abstract class AutoValue_LegAnnotation extends com.mapbox.api.directions.v5.models.LegAnnotation {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegAnnotation>;
                    public toString(): string;
                    public maxspeed(): java.util.List<com.mapbox.api.directions.v5.models.MaxSpeed>;
                    public speed(): java.util.List<java.lang.Double>;
                    public congestionNumeric(): java.util.List<java.lang.Integer>;
                    public congestion(): java.util.List<string>;
                    public trafficTendency(): java.util.List<java.lang.Integer>;
                    public equals(param0: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    public distance(): java.util.List<java.lang.Double>;
                    public duration(): java.util.List<java.lang.Double>;
                    public hashCode(): number;
                  }
                  export module AutoValue_LegAnnotation {
                    export class Builder extends com.mapbox.api.directions.v5.models.LegAnnotation.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegAnnotation.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.LegAnnotation;
                      public trafficTendency(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public duration(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public maxspeed(param0: java.util.List<com.mapbox.api.directions.v5.models.MaxSpeed>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public distance(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public speed(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public congestion(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                      public congestionNumeric(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                    }
                  }
                  export abstract class AutoValue_LegStep extends com.mapbox.api.directions.v5.models.LegStep {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegStep>;
                    public intersections(): java.util.List<com.mapbox.api.directions.v5.models.StepIntersection>;
                    public toString(): string;
                    public weight(): number;
                    public durationTypical(): java.lang.Double;
                    public toBuilder(): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    public name(): string;
                    public drivingSide(): string;
                    public duration(): number;
                    public maneuver(): com.mapbox.api.directions.v5.models.StepManeuver;
                    public bannerInstructions(): java.util.List<com.mapbox.api.directions.v5.models.BannerInstructions>;
                    public equals(param0: any): boolean;
                    public distance(): number;
                    public destinations(): string;
                    public geometry(): string;
                    public pronunciation(): string;
                    public rotaryName(): string;
                    public speedLimitUnit(): string;
                    public voiceInstructions(): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>;
                    public mode(): string;
                    public exits(): string;
                    public ref(): string;
                    public hashCode(): number;
                    public speedLimitSign(): string;
                    public rotaryPronunciation(): string;
                  }
                  export module AutoValue_LegStep {
                    export class Builder extends com.mapbox.api.directions.v5.models.LegStep.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegStep.Builder>;
                      public distance(param0: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public durationTypical(param0: java.lang.Double): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public rotaryName(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public exits(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public pronunciation(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public geometry(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public destinations(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public ref(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public speedLimitSign(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public weight(param0: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public speedLimitUnit(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public name(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public mode(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public drivingSide(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public rotaryPronunciation(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public voiceInstructions(param0: java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public bannerInstructions(param0: java.util.List<com.mapbox.api.directions.v5.models.BannerInstructions>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public build(): com.mapbox.api.directions.v5.models.LegStep;
                      public intersections(param0: java.util.List<com.mapbox.api.directions.v5.models.StepIntersection>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public duration(param0: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                      public maneuver(param0: com.mapbox.api.directions.v5.models.StepManeuver): com.mapbox.api.directions.v5.models.LegStep.Builder;
                    }
                  }
                  export abstract class AutoValue_MapboxShield extends com.mapbox.api.directions.v5.models.MapboxShield {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxShield>;
                    public displayRef(): string;
                    public toString(): string;
                    public name(): string;
                    public equals(param0: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                    public baseUrl(): string;
                    public textColor(): string;
                    public hashCode(): number;
                  }
                  export module AutoValue_MapboxShield {
                    export class Builder extends com.mapbox.api.directions.v5.models.MapboxShield.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxShield.Builder>;
                      public textColor(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                      public name(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                      public build(): com.mapbox.api.directions.v5.models.MapboxShield;
                      public baseUrl(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                      public displayRef(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                    }
                  }
                  export abstract class AutoValue_MapboxStreetsV8 extends com.mapbox.api.directions.v5.models.MapboxStreetsV8 {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxStreetsV8>;
                    public toString(): string;
                    public equals(param0: any): boolean;
                    public roadClass(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder;
                    public hashCode(): number;
                  }
                  export module AutoValue_MapboxStreetsV8 {
                    export class Builder extends com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxStreetsV8.Builder>;
                      public roadClass(param0: string): com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder;
                      public build(): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
                    }
                  }
                  export abstract class AutoValue_MaxSpeed extends com.mapbox.api.directions.v5.models.MaxSpeed {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MaxSpeed>;
                    public toBuilder(): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                    public toString(): string;
                    public speed(): java.lang.Integer;
                    public unknown(): java.lang.Boolean;
                    public equals(param0: any): boolean;
                    public none(): java.lang.Boolean;
                    public unit(): string;
                    public hashCode(): number;
                  }
                  export module AutoValue_MaxSpeed {
                    export class Builder extends com.mapbox.api.directions.v5.models.MaxSpeed.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MaxSpeed.Builder>;
                      public unit(param0: string): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                      public none(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                      public unknown(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                      public build(): com.mapbox.api.directions.v5.models.MaxSpeed;
                      public speed(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                    }
                  }
                  export abstract class AutoValue_Metadata extends com.mapbox.api.directions.v5.models.Metadata {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Metadata>;
                    public toString(): string;
                    public equals(param0: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.Metadata.Builder;
                    public infoMap(): java.util.Map<string, string>;
                    public hashCode(): number;
                  }
                  export module AutoValue_Metadata {
                    export class Builder extends com.mapbox.api.directions.v5.models.Metadata.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Metadata.Builder>;
                      public infoMap(param0: java.util.Map<string, string>): com.mapbox.api.directions.v5.models.Metadata.Builder;
                      public build(): com.mapbox.api.directions.v5.models.Metadata;
                    }
                  }
                  export abstract class AutoValue_PaymentMethods extends com.mapbox.api.directions.v5.models.PaymentMethods {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_PaymentMethods>;
                    public toString(): string;
                    public etc(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                    public equals(param0: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
                    public hashCode(): number;
                    public cash(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                  }
                  export module AutoValue_PaymentMethods {
                    export class Builder extends com.mapbox.api.directions.v5.models.PaymentMethods.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_PaymentMethods.Builder>;
                      public etc(param0: com.mapbox.api.directions.v5.models.CostPerVehicleSize): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
                      public cash(param0: com.mapbox.api.directions.v5.models.CostPerVehicleSize): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
                      public build(): com.mapbox.api.directions.v5.models.PaymentMethods;
                    }
                  }
                  export abstract class AutoValue_RestStop extends com.mapbox.api.directions.v5.models.RestStop {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RestStop>;
                    public amenities(): java.util.List<com.mapbox.api.directions.v5.models.Amenity>;
                    public toString(): string;
                    public name(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.RestStop.Builder;
                    public equals(param0: any): boolean;
                    public type(): string;
                    public hashCode(): number;
                    public guideMap(): string;
                  }
                  export module AutoValue_RestStop {
                    export class Builder extends com.mapbox.api.directions.v5.models.RestStop.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RestStop.Builder>;
                      public type(param0: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
                      public name(param0: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
                      public guideMap(param0: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
                      public build(): com.mapbox.api.directions.v5.models.RestStop;
                      public amenities(param0: java.util.List<com.mapbox.api.directions.v5.models.Amenity>): com.mapbox.api.directions.v5.models.RestStop.Builder;
                    }
                  }
                  export abstract class AutoValue_RouteLeg extends com.mapbox.api.directions.v5.models.RouteLeg {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteLeg>;
                    public annotation(): com.mapbox.api.directions.v5.models.LegAnnotation;
                    public summary(): string;
                    public toString(): string;
                    public durationTypical(): java.lang.Double;
                    public equals(param0: any): boolean;
                    public viaWaypoints(): java.util.List<com.mapbox.api.directions.v5.models.SilentWaypoint>;
                    public distance(): java.lang.Double;
                    public admins(): java.util.List<com.mapbox.api.directions.v5.models.Admin>;
                    public incidents(): java.util.List<com.mapbox.api.directions.v5.models.Incident>;
                    public toBuilder(): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                    public closures(): java.util.List<com.mapbox.api.directions.v5.models.Closure>;
                    public hashCode(): number;
                    public duration(): java.lang.Double;
                    public steps(): java.util.List<com.mapbox.api.directions.v5.models.LegStep>;
                  }
                  export module AutoValue_RouteLeg {
                    export class Builder extends com.mapbox.api.directions.v5.models.RouteLeg.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteLeg.Builder>;
                      public summary(param0: string): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public annotation(param0: com.mapbox.api.directions.v5.models.LegAnnotation): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public duration(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public incidents(param0: java.util.List<com.mapbox.api.directions.v5.models.Incident>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public closures(param0: java.util.List<com.mapbox.api.directions.v5.models.Closure>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public distance(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public steps(param0: java.util.List<com.mapbox.api.directions.v5.models.LegStep>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public durationTypical(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public viaWaypoints(param0: java.util.List<com.mapbox.api.directions.v5.models.SilentWaypoint>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public admins(param0: java.util.List<com.mapbox.api.directions.v5.models.Admin>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                      public build(): com.mapbox.api.directions.v5.models.RouteLeg;
                    }
                  }
                  export abstract class AutoValue_RouteOptions extends com.mapbox.api.directions.v5.models.RouteOptions {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteOptions>;
                    public coordinates(): string;
                    public toString(): string;
                    public bannerInstructions(): java.lang.Boolean;
                    public radiuses(): string;
                    public voiceInstructions(): java.lang.Boolean;
                    public walkwayBias(): java.lang.Double;
                    public equals(param0: any): boolean;
                    public snappingIncludeStaticClosures(): string;
                    public maxHeight(): java.lang.Double;
                    public user(): string;
                    public include(): string;
                    public waypointTargets(): string;
                    public profile(): string;
                    public bearings(): string;
                    public arriveBy(): string;
                    public metadata(): java.lang.Boolean;
                    public waypointIndices(): string;
                    public exclude(): string;
                    public walkingSpeed(): java.lang.Double;
                    public alternatives(): java.lang.Boolean;
                    public departAt(): string;
                    public enableRefresh(): java.lang.Boolean;
                    public snappingIncludeClosures(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    public annotations(): string;
                    public layers(): string;
                    public geometries(): string;
                    public steps(): java.lang.Boolean;
                    public maxWidth(): java.lang.Double;
                    public voiceUnits(): string;
                    public paymentMethods(): string;
                    public suppressVoiceInstructionLocalNames(): java.lang.Boolean;
                    public alleyBias(): java.lang.Double;
                    public language(): string;
                    public overview(): string;
                    public maxWeight(): java.lang.Double;
                    public baseUrl(): string;
                    public continueStraight(): java.lang.Boolean;
                    public waypointNames(): string;
                    public hashCode(): number;
                    public roundaboutExits(): java.lang.Boolean;
                    public approaches(): string;
                    public avoidManeuverRadius(): java.lang.Double;
                    public waypointsPerRoute(): java.lang.Boolean;
                    public computeTollCost(): java.lang.Boolean;
                  }
                  export module AutoValue_RouteOptions {
                    export class Builder extends com.mapbox.api.directions.v5.models.RouteOptions.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteOptions.Builder>;
                      public voiceInstructions(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public waypointIndices(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public maxWeight(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public roundaboutExits(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public voiceUnits(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public alternatives(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public annotations(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public waypointNames(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public waypointTargets(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public baseUrl(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public enableRefresh(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public departAt(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public include(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public user(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public arriveBy(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public snappingIncludeClosures(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public language(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public walkwayBias(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public maxWidth(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public avoidManeuverRadius(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public suppressVoiceInstructionLocalNames(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public bearings(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public bannerInstructions(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public metadata(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public build(): com.mapbox.api.directions.v5.models.RouteOptions;
                      public geometries(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public alleyBias(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public exclude(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public overview(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public layers(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public paymentMethods(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public radiuses(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public waypointsPerRoute(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public computeTollCost(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public continueStraight(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public coordinates(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public approaches(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public profile(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public maxHeight(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public walkingSpeed(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public steps(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                      public snappingIncludeStaticClosures(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                    }
                  }
                  export abstract class AutoValue_ShieldSprite extends com.mapbox.api.directions.v5.models.ShieldSprite {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprite>;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
                    public equals(param0: any): boolean;
                    public spriteName(): string;
                    public hashCode(): number;
                    public spriteAttributes(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
                  }
                  export module AutoValue_ShieldSprite {
                    export class Builder extends com.mapbox.api.directions.v5.models.ShieldSprite.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprite.Builder>;
                      public spriteAttributes(param0: com.mapbox.api.directions.v5.models.ShieldSpriteAttribute): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
                      public build(): com.mapbox.api.directions.v5.models.ShieldSprite;
                      public spriteName(param0: string): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
                    }
                  }
                  export abstract class AutoValue_ShieldSpriteAttribute extends com.mapbox.api.directions.v5.models.ShieldSpriteAttribute {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSpriteAttribute>;
                    public height(): java.lang.Integer;
                    public pixelRatio(): java.lang.Integer;
                    public visible(): java.lang.Boolean;
                    public toString(): string;
                    public equals(param0: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    public width(): java.lang.Integer;
                    public placeholder(): java.util.List<java.lang.Double>;
                    public x(): java.lang.Integer;
                    public y(): java.lang.Integer;
                    public hashCode(): number;
                  }
                  export module AutoValue_ShieldSpriteAttribute {
                    export class Builder extends com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSpriteAttribute.Builder>;
                      public pixelRatio(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public x(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public build(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
                      public placeholder(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public y(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public visible(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public width(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                      public height(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                    }
                  }
                  export abstract class AutoValue_ShieldSprites extends com.mapbox.api.directions.v5.models.ShieldSprites {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprites>;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSprites.Builder;
                    public sprites(): java.util.List<com.mapbox.api.directions.v5.models.ShieldSprite>;
                    public equals(param0: any): boolean;
                    public hashCode(): number;
                  }
                  export module AutoValue_ShieldSprites {
                    export class Builder extends com.mapbox.api.directions.v5.models.ShieldSprites.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprites.Builder>;
                      public build(): com.mapbox.api.directions.v5.models.ShieldSprites;
                      public sprites(param0: java.util.List<com.mapbox.api.directions.v5.models.ShieldSprite>): com.mapbox.api.directions.v5.models.ShieldSprites.Builder;
                    }
                  }
                  export abstract class AutoValue_ShieldSvg extends com.mapbox.api.directions.v5.models.ShieldSvg {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSvg>;
                    public toString(): string;
                    public equals(param0: any): boolean;
                    public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSvg.Builder;
                    public svg(): string;
                    public hashCode(): number;
                  }
                  export module AutoValue_ShieldSvg {
                    export class Builder extends com.mapbox.api.directions.v5.models.ShieldSvg.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSvg.Builder>;
                      public svg(param0: string): com.mapbox.api.directions.v5.models.ShieldSvg.Builder;
                      public build(): com.mapbox.api.directions.v5.models.ShieldSvg;
                    }
                  }
                  export abstract class AutoValue_SilentWaypoint extends com.mapbox.api.directions.v5.models.SilentWaypoint {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_SilentWaypoint>;
                    public toString(): string;
                    public equals(param0: any): boolean;
                    public distanceFromStart(): number;
                    public geometryIndex(): number;
                    public waypointIndex(): number;
                    public hashCode(): number;
                  }
                  export module AutoValue_SilentWaypoint {
                    export class Builder extends com.mapbox.api.directions.v5.models.SilentWaypoint.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_SilentWaypoint.Builder>;
                      public geometryIndex(param0: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                      public waypointIndex(param0: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                      public distanceFromStart(param0: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                      public build(): com.mapbox.api.directions.v5.models.SilentWaypoint;
                    }
                  }
                  export abstract class AutoValue_StepIntersection extends com.mapbox.api.directions.v5.models.StepIntersection {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepIntersection>;
                    public junction(): com.mapbox.api.directions.v5.models.Junction;
                    public toBuilder(): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    public entry(): java.util.List<java.lang.Boolean>;
                    public toString(): string;
                    public trafficSignal(): java.lang.Boolean;
                    public equals(param0: any): boolean;
                    public tollCollection(): com.mapbox.api.directions.v5.models.TollCollection;
                    public isUrban(): java.lang.Boolean;
                    public stopSign(): java.lang.Boolean;
                    public classes(): java.util.List<string>;
                    public lanes(): java.util.List<com.mapbox.api.directions.v5.models.IntersectionLanes>;
                    public rawLocation(): androidNative.Array<number>;
                    public out(): java.lang.Integer;
                    public railwayCrossing(): java.lang.Boolean;
                    public in(): java.lang.Integer;
                    public mapboxStreetsV8(): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
                    public bearings(): java.util.List<java.lang.Integer>;
                    public tunnelName(): string;
                    public adminIndex(): java.lang.Integer;
                    public interchange(): com.mapbox.api.directions.v5.models.Interchange;
                    public hashCode(): number;
                    public yieldSign(): java.lang.Boolean;
                    public geometryIndex(): java.lang.Integer;
                    public restStop(): com.mapbox.api.directions.v5.models.RestStop;
                  }
                  export module AutoValue_StepIntersection {
                    export class Builder extends com.mapbox.api.directions.v5.models.StepIntersection.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepIntersection.Builder>;
                      public bearings(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public railwayCrossing(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public tollCollection(param0: com.mapbox.api.directions.v5.models.TollCollection): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public trafficSignal(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public mapboxStreetsV8(param0: com.mapbox.api.directions.v5.models.MapboxStreetsV8): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public entry(param0: java.util.List<java.lang.Boolean>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public geometryIndex(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public build(): com.mapbox.api.directions.v5.models.StepIntersection;
                      public stopSign(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public classes(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public junction(param0: com.mapbox.api.directions.v5.models.Junction): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public in(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public adminIndex(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public lanes(param0: java.util.List<com.mapbox.api.directions.v5.models.IntersectionLanes>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public tunnelName(param0: string): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public interchange(param0: com.mapbox.api.directions.v5.models.Interchange): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public restStop(param0: com.mapbox.api.directions.v5.models.RestStop): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public isUrban(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public out(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                      public yieldSign(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                    }
                  }
                  export abstract class AutoValue_StepManeuver extends com.mapbox.api.directions.v5.models.StepManeuver {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepManeuver>;
                    public exit(): java.lang.Integer;
                    public toString(): string;
                    public equals(param0: any): boolean;
                    public bearingAfter(): java.lang.Double;
                    public instruction(): string;
                    public bearingBefore(): java.lang.Double;
                    public type(): string;
                    public modifier(): string;
                    public hashCode(): number;
                    public rawLocation(): androidNative.Array<number>;
                    public toBuilder(): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                  }
                  export module AutoValue_StepManeuver {
                    export class Builder extends com.mapbox.api.directions.v5.models.StepManeuver.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepManeuver.Builder>;
                      public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public type(param0: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public bearingBefore(param0: java.lang.Double): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public bearingAfter(param0: java.lang.Double): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public modifier(param0: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public build(): com.mapbox.api.directions.v5.models.StepManeuver;
                      public instruction(param0: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                      public exit(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                    }
                  }
                  export abstract class AutoValue_TollCollection extends com.mapbox.api.directions.v5.models.TollCollection {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCollection>;
                    public toString(): string;
                    public name(): string;
                    public equals(param0: any): boolean;
                    public type(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                    public hashCode(): number;
                  }
                  export module AutoValue_TollCollection {
                    export class Builder extends com.mapbox.api.directions.v5.models.TollCollection.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCollection.Builder>;
                      public name(param0: string): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                      public build(): com.mapbox.api.directions.v5.models.TollCollection;
                      public type(param0: string): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                    }
                  }
                  export abstract class AutoValue_TollCost extends com.mapbox.api.directions.v5.models.TollCost {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCost>;
                    public toString(): string;
                    public equals(param0: any): boolean;
                    public paymentMethods(): com.mapbox.api.directions.v5.models.PaymentMethods;
                    public currency(): string;
                    public hashCode(): number;
                    public toBuilder(): com.mapbox.api.directions.v5.models.TollCost.Builder;
                  }
                  export module AutoValue_TollCost {
                    export class Builder extends com.mapbox.api.directions.v5.models.TollCost.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCost.Builder>;
                      public paymentMethods(param0: com.mapbox.api.directions.v5.models.PaymentMethods): com.mapbox.api.directions.v5.models.TollCost.Builder;
                      public build(): com.mapbox.api.directions.v5.models.TollCost;
                      public currency(param0: string): com.mapbox.api.directions.v5.models.TollCost.Builder;
                    }
                  }
                  export abstract class AutoValue_VoiceInstructions extends com.mapbox.api.directions.v5.models.VoiceInstructions {
                    public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_VoiceInstructions>;
                    public distanceAlongGeometry(): java.lang.Double;
                    public toString(): string;
                    public toBuilder(): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                    public equals(param0: any): boolean;
                    public hashCode(): number;
                    public ssmlAnnouncement(): string;
                    public announcement(): string;
                  }
                  export module AutoValue_VoiceInstructions {
                    export class Builder extends com.mapbox.api.directions.v5.models.VoiceInstructions.Builder {
                      public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_VoiceInstructions.Builder>;
                      public distanceAlongGeometry(param0: java.lang.Double): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                      public announcement(param0: string): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                      public ssmlAnnouncement(param0: string): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                      public build(): com.mapbox.api.directions.v5.models.VoiceInstructions;
                    }
                  }
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class Admin extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Admin>;
              public constructor();
              public countryCode(): string;
              public countryCodeAlpha3(): string;
              public toBuilder(): com.mapbox.api.directions.v5.models.Admin.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Admin>;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.Admin;
              public static builder(): com.mapbox.api.directions.v5.models.Admin.Builder;
            }
            export module Admin {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Admin.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Admin.Builder>;
                public countryCode(param0: string): com.mapbox.api.directions.v5.models.Admin.Builder;
                public build(): com.mapbox.api.directions.v5.models.Admin;
                public countryCodeAlpha3(param0: string): com.mapbox.api.directions.v5.models.Admin.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class Amenity extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Amenity>;
              public constructor();
              public brand(): string;
              public toBuilder(): com.mapbox.api.directions.v5.models.Amenity.Builder;
              public static builder(): com.mapbox.api.directions.v5.models.Amenity.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Amenity>;
              public type(): string;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.Amenity;
              public name(): string;
            }
            export module Amenity {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Amenity.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Amenity.Builder>;
                public build(): com.mapbox.api.directions.v5.models.Amenity;
                public brand(param0: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
                public type(param0: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
                public constructor();
                public name(param0: string): com.mapbox.api.directions.v5.models.Amenity.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_Admin extends com.mapbox.api.directions.v5.models.AutoValue_Admin {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Admin>;
            }
            export module AutoValue_Admin {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Admin> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Admin.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Admin;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.Admin): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_Amenity extends com.mapbox.api.directions.v5.models.AutoValue_Amenity {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Amenity>;
            }
            export module AutoValue_Amenity {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Amenity> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Amenity.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Amenity;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.Amenity): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_BannerComponents extends com.mapbox.api.directions.v5.models.AutoValue_BannerComponents {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerComponents>;
            }
            export module AutoValue_BannerComponents {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerComponents> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerComponents.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.BannerComponents;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.BannerComponents): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_BannerInstructions extends com.mapbox.api.directions.v5.models.AutoValue_BannerInstructions {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerInstructions>;
            }
            export module AutoValue_BannerInstructions {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerInstructions> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerInstructions.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.BannerInstructions;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.BannerInstructions): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_BannerText extends com.mapbox.api.directions.v5.models.AutoValue_BannerText {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerText>;
            }
            export module AutoValue_BannerText {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerText> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerText.GsonTypeAdapter>;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.BannerText): void;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.BannerText;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_BannerView extends com.mapbox.api.directions.v5.models.AutoValue_BannerView {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerView>;
            }
            export module AutoValue_BannerView {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerView> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_BannerView.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.BannerView;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.BannerView): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_Bearing extends com.mapbox.api.directions.v5.models.Bearing {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Bearing>;
              public angle(): number;
              public hashCode(): number;
              public degrees(): number;
              public toBuilder(): com.mapbox.api.directions.v5.models.Bearing.Builder;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export module AutoValue_Bearing {
              export class Builder extends com.mapbox.api.directions.v5.models.Bearing.Builder {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Bearing.Builder>;
                public angle(param0: number): com.mapbox.api.directions.v5.models.Bearing.Builder;
                public build(): com.mapbox.api.directions.v5.models.Bearing;
                public degrees(param0: number): com.mapbox.api.directions.v5.models.Bearing.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_Closure extends com.mapbox.api.directions.v5.models.AutoValue_Closure {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Closure>;
            }
            export module AutoValue_Closure {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Closure> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Closure.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Closure;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.Closure): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_Congestion extends com.mapbox.api.directions.v5.models.AutoValue_Congestion {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Congestion>;
            }
            export module AutoValue_Congestion {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Congestion> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Congestion.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Congestion;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.Congestion): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_CostPerVehicleSize extends com.mapbox.api.directions.v5.models.AutoValue_CostPerVehicleSize {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_CostPerVehicleSize>;
            }
            export module AutoValue_CostPerVehicleSize {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.CostPerVehicleSize> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_CostPerVehicleSize.GsonTypeAdapter>;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.CostPerVehicleSize): void;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_DirectionsError extends com.mapbox.api.directions.v5.models.AutoValue_DirectionsError {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsError>;
            }
            export module AutoValue_DirectionsError {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsError> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsError.GsonTypeAdapter>;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.DirectionsError;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.DirectionsError): void;
                public toString(): string;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_DirectionsResponse extends com.mapbox.api.directions.v5.models.AutoValue_DirectionsResponse {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsResponse>;
            }
            export module AutoValue_DirectionsResponse {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsResponse> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsResponse.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.DirectionsResponse;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.DirectionsResponse): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_DirectionsRoute extends com.mapbox.api.directions.v5.models.AutoValue_DirectionsRoute {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsRoute>;
            }
            export module AutoValue_DirectionsRoute {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsRoute> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsRoute.GsonTypeAdapter>;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.DirectionsRoute): void;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.DirectionsRoute;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_DirectionsWaypoint extends com.mapbox.api.directions.v5.models.AutoValue_DirectionsWaypoint {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsWaypoint>;
            }
            export module AutoValue_DirectionsWaypoint {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsWaypoint> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_DirectionsWaypoint.GsonTypeAdapter>;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.DirectionsWaypoint): void;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.DirectionsWaypoint;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_Exclude extends com.mapbox.api.directions.v5.models.Exclude {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Exclude>;
              public criteria(): java.util.List<string>;
              public hashCode(): number;
              public points(): java.util.List<com.mapbox.geojson.Point>;
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export module AutoValue_Exclude {
              export class Builder extends com.mapbox.api.directions.v5.models.Exclude.Builder {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Exclude.Builder>;
                public points(param0: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.directions.v5.models.Exclude.Builder;
                public criteria(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.Exclude.Builder;
                public build(): com.mapbox.api.directions.v5.models.Exclude;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_Incident extends com.mapbox.api.directions.v5.models.AutoValue_Incident {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Incident>;
            }
            export module AutoValue_Incident {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Incident> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Incident.GsonTypeAdapter>;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.Incident): void;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Incident;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_Interchange extends com.mapbox.api.directions.v5.models.AutoValue_Interchange {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Interchange>;
            }
            export module AutoValue_Interchange {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Interchange> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Interchange.GsonTypeAdapter>;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.Interchange): void;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Interchange;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_IntersectionLanes extends com.mapbox.api.directions.v5.models.AutoValue_IntersectionLanes {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_IntersectionLanes>;
            }
            export module AutoValue_IntersectionLanes {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.IntersectionLanes> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_IntersectionLanes.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.IntersectionLanes;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.IntersectionLanes): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_Junction extends com.mapbox.api.directions.v5.models.AutoValue_Junction {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Junction>;
            }
            export module AutoValue_Junction {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Junction> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Junction.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Junction;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.Junction): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_LegAnnotation extends com.mapbox.api.directions.v5.models.AutoValue_LegAnnotation {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegAnnotation>;
            }
            export module AutoValue_LegAnnotation {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.LegAnnotation> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegAnnotation.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.LegAnnotation;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.LegAnnotation): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_LegStep extends com.mapbox.api.directions.v5.models.AutoValue_LegStep {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegStep>;
            }
            export module AutoValue_LegStep {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.LegStep> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_LegStep.GsonTypeAdapter>;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.LegStep;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.LegStep): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_MapboxShield extends com.mapbox.api.directions.v5.models.AutoValue_MapboxShield {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxShield>;
            }
            export module AutoValue_MapboxShield {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MapboxShield> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxShield.GsonTypeAdapter>;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.MapboxShield): void;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.MapboxShield;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_MapboxStreetsV8 extends com.mapbox.api.directions.v5.models.AutoValue_MapboxStreetsV8 {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxStreetsV8>;
            }
            export module AutoValue_MapboxStreetsV8 {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MapboxStreetsV8> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MapboxStreetsV8.GsonTypeAdapter>;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.MapboxStreetsV8): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_MaxSpeed extends com.mapbox.api.directions.v5.models.AutoValue_MaxSpeed {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MaxSpeed>;
            }
            export module AutoValue_MaxSpeed {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MaxSpeed> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_MaxSpeed.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.MaxSpeed;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.MaxSpeed): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_Metadata extends com.mapbox.api.directions.v5.models.AutoValue_Metadata {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Metadata>;
            }
            export module AutoValue_Metadata {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Metadata> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_Metadata.GsonTypeAdapter>;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.Metadata;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.Metadata): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_PaymentMethods extends com.mapbox.api.directions.v5.models.AutoValue_PaymentMethods {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_PaymentMethods>;
            }
            export module AutoValue_PaymentMethods {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.PaymentMethods> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_PaymentMethods.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.PaymentMethods;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.PaymentMethods): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_RestStop extends com.mapbox.api.directions.v5.models.AutoValue_RestStop {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RestStop>;
            }
            export module AutoValue_RestStop {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RestStop> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RestStop.GsonTypeAdapter>;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.RestStop): void;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.RestStop;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_RouteLeg extends com.mapbox.api.directions.v5.models.AutoValue_RouteLeg {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteLeg>;
            }
            export module AutoValue_RouteLeg {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RouteLeg> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteLeg.GsonTypeAdapter>;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.RouteLeg): void;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.RouteLeg;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_RouteOptions extends com.mapbox.api.directions.v5.models.AutoValue_RouteOptions {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteOptions>;
            }
            export module AutoValue_RouteOptions {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RouteOptions> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_RouteOptions.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.RouteOptions;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.RouteOptions): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_ShieldSprite extends com.mapbox.api.directions.v5.models.AutoValue_ShieldSprite {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprite>;
            }
            export module AutoValue_ShieldSprite {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSprite> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprite.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.ShieldSprite;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.ShieldSprite): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_ShieldSpriteAttribute extends com.mapbox.api.directions.v5.models.AutoValue_ShieldSpriteAttribute {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSpriteAttribute>;
            }
            export module AutoValue_ShieldSpriteAttribute {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSpriteAttribute> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSpriteAttribute.GsonTypeAdapter>;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.ShieldSpriteAttribute): void;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_ShieldSprites extends com.mapbox.api.directions.v5.models.AutoValue_ShieldSprites {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprites>;
            }
            export module AutoValue_ShieldSprites {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSprites> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSprites.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.ShieldSprites;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.ShieldSprites): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_ShieldSvg extends com.mapbox.api.directions.v5.models.AutoValue_ShieldSvg {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSvg>;
            }
            export module AutoValue_ShieldSvg {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSvg> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_ShieldSvg.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.ShieldSvg;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.ShieldSvg): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_SilentWaypoint extends com.mapbox.api.directions.v5.models.AutoValue_SilentWaypoint {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_SilentWaypoint>;
            }
            export module AutoValue_SilentWaypoint {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.SilentWaypoint> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_SilentWaypoint.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.SilentWaypoint;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.SilentWaypoint): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_StepIntersection extends com.mapbox.api.directions.v5.models.AutoValue_StepIntersection {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepIntersection>;
            }
            export module AutoValue_StepIntersection {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.StepIntersection> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepIntersection.GsonTypeAdapter>;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.StepIntersection): void;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.StepIntersection;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_StepManeuver extends com.mapbox.api.directions.v5.models.AutoValue_StepManeuver {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepManeuver>;
            }
            export module AutoValue_StepManeuver {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.StepManeuver> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_StepManeuver.GsonTypeAdapter>;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.StepManeuver;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.StepManeuver): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_TollCollection extends com.mapbox.api.directions.v5.models.AutoValue_TollCollection {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCollection>;
            }
            export module AutoValue_TollCollection {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.TollCollection> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCollection.GsonTypeAdapter>;
                public toString(): string;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.TollCollection): void;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.TollCollection;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_TollCost extends com.mapbox.api.directions.v5.models.AutoValue_TollCost {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCost>;
            }
            export module AutoValue_TollCost {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.TollCost> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_TollCost.GsonTypeAdapter>;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.TollCost): void;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.TollCost;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class AutoValue_VoiceInstructions extends com.mapbox.api.directions.v5.models.AutoValue_VoiceInstructions {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_VoiceInstructions>;
            }
            export module AutoValue_VoiceInstructions {
              export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.VoiceInstructions> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.AutoValue_VoiceInstructions.GsonTypeAdapter>;
                public toString(): string;
                public read(param0: com.google.gson.stream.JsonReader): com.mapbox.api.directions.v5.models.VoiceInstructions;
                public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.api.directions.v5.models.VoiceInstructions): void;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class BannerComponents extends com.mapbox.api.directions.v5.models.DirectionsJsonObject implements java.lang.Comparable<com.mapbox.api.directions.v5.models.BannerComponents> {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerComponents>;
              public static TEXT: string;
              public static ICON: string;
              public static DELIMITER: string;
              public static EXIT_NUMBER: string;
              public static EXIT: string;
              public static LANE: string;
              public static GUIDANCE_VIEW: string;
              public static AFTERTOLL: string;
              public static CITYREAL: string;
              public static EXPRESSWAY_ENTRANCE: string;
              public static EXPRESSWAY_EXIT: string;
              public static JCT: string;
              public static SAPA: string;
              public static SAPAGUIDEMAP: string;
              public static SIGNBOARD: string;
              public static TOLLBRANCH: string;
              public constructor();
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.BannerComponents;
              public abbreviationPriority(): java.lang.Integer;
              public abbreviation(): string;
              public subType(): string;
              public activeDirection(): string;
              public active(): java.lang.Boolean;
              public text(): string;
              public compareTo(param0: com.mapbox.api.directions.v5.models.BannerComponents): number;
              public type(): string;
              public mapboxShield(): com.mapbox.api.directions.v5.models.MapboxShield;
              public directions(): java.util.List<string>;
              public imageBaseUrl(): string;
              public imageUrl(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerComponents>;
              public toBuilder(): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
              public static builder(): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
            }
            export module BannerComponents {
              export class BannerComponentsSubType {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerComponents.BannerComponentsSubType>;
                /**
                 * Constructs a new instance of the com.mapbox.api.directions.v5.models.BannerComponents$BannerComponentsSubType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class BannerComponentsType {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerComponents.BannerComponentsType>;
                /**
                 * Constructs a new instance of the com.mapbox.api.directions.v5.models.BannerComponents$BannerComponentsType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.BannerComponents.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerComponents.Builder>;
                public type(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                public mapboxShield(param0: com.mapbox.api.directions.v5.models.MapboxShield): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                public subType(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                public active(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                public activeDirection(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                public text(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                public constructor();
                public build(): com.mapbox.api.directions.v5.models.BannerComponents;
                public imageBaseUrl(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                public imageUrl(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                public abbreviation(param0: string): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                public abbreviationPriority(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
                public directions(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.BannerComponents.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class BannerInstructions extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerInstructions>;
              public constructor();
              public distanceAlongGeometry(): number;
              public sub(): com.mapbox.api.directions.v5.models.BannerText;
              public static builder(): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
              public view(): com.mapbox.api.directions.v5.models.BannerView;
              public primary(): com.mapbox.api.directions.v5.models.BannerText;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerInstructions>;
              public toBuilder(): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.BannerInstructions;
              public secondary(): com.mapbox.api.directions.v5.models.BannerText;
            }
            export module BannerInstructions {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.BannerInstructions.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerInstructions.Builder>;
                public primary(param0: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                public view(param0: com.mapbox.api.directions.v5.models.BannerView): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                public constructor();
                public build(): com.mapbox.api.directions.v5.models.BannerInstructions;
                public distanceAlongGeometry(param0: number): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                public sub(param0: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
                public secondary(param0: com.mapbox.api.directions.v5.models.BannerText): com.mapbox.api.directions.v5.models.BannerInstructions.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class BannerText extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerText>;
              public constructor();
              public drivingSide(): string;
              public text(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerText>;
              public modifier(): string;
              public static builder(): com.mapbox.api.directions.v5.models.BannerText.Builder;
              public type(): string;
              public components(): java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>;
              public degrees(): java.lang.Double;
              public toBuilder(): com.mapbox.api.directions.v5.models.BannerText.Builder;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.BannerText;
            }
            export module BannerText {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.BannerText.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerText.Builder>;
                public modifier(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                public drivingSide(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                public build(): com.mapbox.api.directions.v5.models.BannerText;
                public components(param0: java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>): com.mapbox.api.directions.v5.models.BannerText.Builder;
                public type(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                public constructor();
                public text(param0: string): com.mapbox.api.directions.v5.models.BannerText.Builder;
                public degrees(param0: java.lang.Double): com.mapbox.api.directions.v5.models.BannerText.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class BannerView extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerView>;
              public constructor();
              public text(): string;
              public modifier(): string;
              public toBuilder(): com.mapbox.api.directions.v5.models.BannerView.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.BannerView>;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.BannerView;
              public type(): string;
              public components(): java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>;
              public static builder(): com.mapbox.api.directions.v5.models.BannerView.Builder;
            }
            export module BannerView {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.BannerView.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.BannerView.Builder>;
                public components(param0: java.util.List<com.mapbox.api.directions.v5.models.BannerComponents>): com.mapbox.api.directions.v5.models.BannerView.Builder;
                public type(param0: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
                public text(param0: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
                public build(): com.mapbox.api.directions.v5.models.BannerView;
                public constructor();
                public modifier(param0: string): com.mapbox.api.directions.v5.models.BannerView.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class Bearing extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Bearing>;
              public constructor();
              public static builder(): com.mapbox.api.directions.v5.models.Bearing.Builder;
              public angle(): number;
              public degrees(): number;
              public toBuilder(): com.mapbox.api.directions.v5.models.Bearing.Builder;
            }
            export module Bearing {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Bearing.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Bearing.Builder>;
                public constructor();
                public angle(param0: number): com.mapbox.api.directions.v5.models.Bearing.Builder;
                public build(): com.mapbox.api.directions.v5.models.Bearing;
                public degrees(param0: number): com.mapbox.api.directions.v5.models.Bearing.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class Closure extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Closure>;
              public constructor();
              public toBuilder(): com.mapbox.api.directions.v5.models.Closure.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Closure>;
              public static builder(): com.mapbox.api.directions.v5.models.Closure.Builder;
              public geometryIndexStart(): java.lang.Integer;
              public geometryIndexEnd(): java.lang.Integer;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.Closure;
            }
            export module Closure {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Closure.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Closure.Builder>;
                public geometryIndexStart(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Closure.Builder;
                public build(): com.mapbox.api.directions.v5.models.Closure;
                public constructor();
                public geometryIndexEnd(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Closure.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class Congestion extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Congestion>;
              public constructor();
              public static builder(): com.mapbox.api.directions.v5.models.Congestion.Builder;
              public toBuilder(): com.mapbox.api.directions.v5.models.Congestion.Builder;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.Congestion;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Congestion>;
              public value(): number;
            }
            export module Congestion {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Congestion.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Congestion.Builder>;
                public value(param0: number): com.mapbox.api.directions.v5.models.Congestion.Builder;
                public constructor();
                public build(): com.mapbox.api.directions.v5.models.Congestion;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class CostPerVehicleSize extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.CostPerVehicleSize>;
              public constructor();
              public large(): java.lang.Double;
              public jumbo(): java.lang.Double;
              public toBuilder(): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
              public middle(): java.lang.Double;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
              public small(): java.lang.Double;
              public static builder(): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.CostPerVehicleSize>;
              public standard(): java.lang.Double;
            }
            export module CostPerVehicleSize {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder>;
                public middle(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                public constructor();
                public standard(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                public large(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                public small(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
                public build(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
                public jumbo(param0: java.lang.Double): com.mapbox.api.directions.v5.models.CostPerVehicleSize.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class DirectionsError extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsError>;
              public constructor();
              public static builder(): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsError>;
              public code(): string;
              public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
              public message(): string;
            }
            export module DirectionsError {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.DirectionsError.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsError.Builder>;
                public message(param0: string): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
                public build(): com.mapbox.api.directions.v5.models.DirectionsError;
                public constructor();
                public code(param0: string): com.mapbox.api.directions.v5.models.DirectionsError.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsJsonObject>;
              public constructor();
              public getUnrecognizedJsonProperties(): java.util.Map<string, com.google.gson.JsonElement>;
              public getUnrecognizedProperty(param0: string): com.google.gson.JsonElement;
              public toJson(): string;
              public getUnrecognizedPropertiesNames(): java.util.Set<string>;
            }
            export module DirectionsJsonObject {
              export abstract class Builder<T> extends java.lang.Object {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<any>>;
                public unrecognizedJsonProperties(param0: java.util.Map<string, com.google.gson.JsonElement>): T;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class DirectionsResponse extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsResponse>;
              public constructor();
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsResponse>;
              public code(): string;
              public static fromJson(param0: java.io.Reader): com.mapbox.api.directions.v5.models.DirectionsResponse;
              public static fromJson(param0: java.io.Reader, param1: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.DirectionsResponse;
              public message(): string;
              public static builder(): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
              public uuid(): string;
              public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
              /** @deprecated */
              public static fromJson(param0: string, param1: com.mapbox.api.directions.v5.models.RouteOptions, param2: string): com.mapbox.api.directions.v5.models.DirectionsResponse;
              public updateWithRequestData(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.DirectionsResponse;
              public static fromJson(param0: string, param1: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.DirectionsResponse;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.DirectionsResponse;
              public waypoints(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
              public routes(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>;
              public metadata(): com.mapbox.api.directions.v5.models.Metadata;
            }
            export module DirectionsResponse {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.DirectionsResponse.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsResponse.Builder>;
                public code(param0: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                public uuid(param0: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                public waypoints(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                public message(param0: string): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                public metadata(param0: com.mapbox.api.directions.v5.models.Metadata): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                public constructor();
                public routes(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsRoute>): com.mapbox.api.directions.v5.models.DirectionsResponse.Builder;
                public build(): com.mapbox.api.directions.v5.models.DirectionsResponse;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class DirectionsRoute extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsRoute>;
              public constructor();
              public weightName(): string;
              public routeIndex(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsRoute>;
              public durationTypical(): java.lang.Double;
              public static fromJson(param0: string, param1: com.mapbox.api.directions.v5.models.RouteOptions, param2: string): com.mapbox.api.directions.v5.models.DirectionsRoute;
              public weight(): java.lang.Double;
              public duration(): java.lang.Double;
              public requestUuid(): string;
              public geometry(): string;
              public routeOptions(): com.mapbox.api.directions.v5.models.RouteOptions;
              public tollCosts(): java.util.List<com.mapbox.api.directions.v5.models.TollCost>;
              public distance(): java.lang.Double;
              public legs(): java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>;
              public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
              public voiceLanguage(): string;
              public static builder(): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
              public waypoints(): java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute;
            }
            export module DirectionsRoute {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.DirectionsRoute.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsRoute.Builder>;
                public duration(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public legs(param0: java.util.List<com.mapbox.api.directions.v5.models.RouteLeg>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public requestUuid(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public constructor();
                public waypoints(param0: java.util.List<com.mapbox.api.directions.v5.models.DirectionsWaypoint>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public durationTypical(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public weightName(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public build(): com.mapbox.api.directions.v5.models.DirectionsRoute;
                public voiceLanguage(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public routeOptions(param0: com.mapbox.api.directions.v5.models.RouteOptions): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public tollCosts(param0: java.util.List<com.mapbox.api.directions.v5.models.TollCost>): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public geometry(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public weight(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public routeIndex(param0: string): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
                public distance(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsRoute.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class DirectionsWaypoint extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
              public constructor();
              public distance(): java.lang.Double;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.DirectionsWaypoint;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.DirectionsWaypoint>;
              public toBuilder(): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
              public name(): string;
              public location(): com.mapbox.geojson.Point;
              public static builder(): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
            }
            export module DirectionsWaypoint {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder>;
                public distance(param0: java.lang.Double): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                public name(param0: string): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
                public build(): com.mapbox.api.directions.v5.models.DirectionsWaypoint;
                public constructor();
                public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.directions.v5.models.DirectionsWaypoint.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class Exclude extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Exclude>;
              public constructor();
              public criteria(): java.util.List<string>;
              public static builder(): com.mapbox.api.directions.v5.models.Exclude.Builder;
              public points(): java.util.List<com.mapbox.geojson.Point>;
            }
            export module Exclude {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Exclude.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Exclude.Builder>;
                public points(param0: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.directions.v5.models.Exclude.Builder;
                public constructor();
                public criteria(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.Exclude.Builder;
                public build(): com.mapbox.api.directions.v5.models.Exclude;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class Incident extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Incident>;
              public static INCIDENT_ACCIDENT: string;
              public static INCIDENT_CONGESTION: string;
              public static INCIDENT_CONSTRUCTION: string;
              public static INCIDENT_DISABLED_VEHICLE: string;
              public static INCIDENT_LANE_RESTRICTION: string;
              public static INCIDENT_MASS_TRANSIT: string;
              public static INCIDENT_MISCELLANEOUS: string;
              public static INCIDENT_OTHER_NEWS: string;
              public static INCIDENT_PLANNED_EVENT: string;
              public static INCIDENT_ROAD_CLOSURE: string;
              public static INCIDENT_ROAD_HAZARD: string;
              public static INCIDENT_WEATHER: string;
              public static IMPACT_UNKNOWN: string;
              public static IMPACT_CRITICAL: string;
              public static IMPACT_MAJOR: string;
              public static IMPACT_MINOR: string;
              public static IMPACT_LOW: string;
              public subTypeDescription(): string;
              public subType(): string;
              public countryCodeAlpha3(): string;
              public affectedRoadNames(): java.util.List<string>;
              public closed(): java.lang.Boolean;
              public startTime(): string;
              public numLanesBlocked(): java.lang.Integer;
              public static builder(): com.mapbox.api.directions.v5.models.Incident.Builder;
              public impact(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Incident>;
              public countryCodeAlpha2(): string;
              public longDescription(): string;
              public endTime(): string;
              public creationTime(): string;
              public constructor();
              public description(): string;
              public lanesBlocked(): java.util.List<string>;
              public congestion(): com.mapbox.api.directions.v5.models.Congestion;
              public toBuilder(): com.mapbox.api.directions.v5.models.Incident.Builder;
              public geometryIndexStart(): java.lang.Integer;
              public geometryIndexEnd(): java.lang.Integer;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.Incident;
              public alertcCodes(): java.util.List<java.lang.Integer>;
              public type(): string;
              public id(): string;
            }
            export module Incident {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Incident.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Incident.Builder>;
                public subTypeDescription(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public longDescription(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public id(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public endTime(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public description(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public lanesBlocked(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.Incident.Builder;
                public numLanesBlocked(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                public constructor();
                public countryCodeAlpha2(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public affectedRoadNames(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.Incident.Builder;
                public congestion(param0: com.mapbox.api.directions.v5.models.Congestion): com.mapbox.api.directions.v5.models.Incident.Builder;
                public subType(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public countryCodeAlpha3(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public type(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public creationTime(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public impact(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public alertcCodes(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.Incident.Builder;
                public geometryIndexStart(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                public build(): com.mapbox.api.directions.v5.models.Incident;
                public startTime(param0: string): com.mapbox.api.directions.v5.models.Incident.Builder;
                public geometryIndexEnd(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.Incident.Builder;
                public closed(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.Incident.Builder;
              }
              export class ImpactType {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Incident.ImpactType>;
                /**
                 * Constructs a new instance of the com.mapbox.api.directions.v5.models.Incident$ImpactType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class IncidentType {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Incident.IncidentType>;
                /**
                 * Constructs a new instance of the com.mapbox.api.directions.v5.models.Incident$IncidentType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class Interchange extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Interchange>;
              public constructor();
              public static builder(): com.mapbox.api.directions.v5.models.Interchange.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Interchange>;
              public toBuilder(): com.mapbox.api.directions.v5.models.Interchange.Builder;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.Interchange;
              public name(): string;
            }
            export module Interchange {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Interchange.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Interchange.Builder>;
                public build(): com.mapbox.api.directions.v5.models.Interchange;
                public name(param0: string): com.mapbox.api.directions.v5.models.Interchange.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class IntersectionLanes extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.IntersectionLanes>;
              public constructor();
              public validIndication(): string;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.IntersectionLanes;
              public valid(): java.lang.Boolean;
              public indications(): java.util.List<string>;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.IntersectionLanes>;
              public static builder(): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
              public toBuilder(): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
              public paymentMethods(): java.util.List<string>;
              public active(): java.lang.Boolean;
            }
            export module IntersectionLanes {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.IntersectionLanes.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.IntersectionLanes.Builder>;
                public valid(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                public paymentMethods(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                public indications(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                public constructor();
                public build(): com.mapbox.api.directions.v5.models.IntersectionLanes;
                public active(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
                public validIndication(param0: string): com.mapbox.api.directions.v5.models.IntersectionLanes.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class Junction extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Junction>;
              public constructor();
              public static builder(): com.mapbox.api.directions.v5.models.Junction.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Junction>;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.Junction;
              public name(): string;
              public toBuilder(): com.mapbox.api.directions.v5.models.Junction.Builder;
            }
            export module Junction {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Junction.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Junction.Builder>;
                public name(param0: string): com.mapbox.api.directions.v5.models.Junction.Builder;
                public constructor();
                public build(): com.mapbox.api.directions.v5.models.Junction;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class LegAnnotation extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.LegAnnotation>;
              public constructor();
              public maxspeed(): java.util.List<com.mapbox.api.directions.v5.models.MaxSpeed>;
              public congestion(): java.util.List<string>;
              public static builder(): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
              public toBuilder(): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
              public duration(): java.util.List<java.lang.Double>;
              public trafficTendency(): java.util.List<java.lang.Integer>;
              public distance(): java.util.List<java.lang.Double>;
              public speed(): java.util.List<java.lang.Double>;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.LegAnnotation>;
              public congestionNumeric(): java.util.List<java.lang.Integer>;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.LegAnnotation;
            }
            export module LegAnnotation {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.LegAnnotation.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.LegAnnotation.Builder>;
                public duration(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                public congestionNumeric(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                public congestion(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                public trafficTendency(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                public constructor();
                public build(): com.mapbox.api.directions.v5.models.LegAnnotation;
                public distance(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                public speed(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
                public maxspeed(param0: java.util.List<com.mapbox.api.directions.v5.models.MaxSpeed>): com.mapbox.api.directions.v5.models.LegAnnotation.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class LegStep extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.LegStep>;
              public static MUTCD: string;
              public static VIENNA: string;
              public static builder(): com.mapbox.api.directions.v5.models.LegStep.Builder;
              public durationTypical(): java.lang.Double;
              public weight(): number;
              public toBuilder(): com.mapbox.api.directions.v5.models.LegStep.Builder;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.LegStep;
              public mode(): string;
              public intersections(): java.util.List<com.mapbox.api.directions.v5.models.StepIntersection>;
              public speedLimitUnit(): string;
              public rotaryPronunciation(): string;
              public bannerInstructions(): java.util.List<com.mapbox.api.directions.v5.models.BannerInstructions>;
              public rotaryName(): string;
              public name(): string;
              public speedLimitSign(): string;
              public constructor();
              public destinations(): string;
              public drivingSide(): string;
              public duration(): number;
              public geometry(): string;
              public voiceInstructions(): java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>;
              public distance(): number;
              public exits(): string;
              public ref(): string;
              public pronunciation(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.LegStep>;
              public maneuver(): com.mapbox.api.directions.v5.models.StepManeuver;
            }
            export module LegStep {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.LegStep.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.LegStep.Builder>;
                public build(): com.mapbox.api.directions.v5.models.LegStep;
                public pronunciation(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public maneuver(param0: com.mapbox.api.directions.v5.models.StepManeuver): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public speedLimitSign(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public rotaryPronunciation(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public constructor();
                public destinations(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public distance(param0: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public intersections(param0: java.util.List<com.mapbox.api.directions.v5.models.StepIntersection>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public drivingSide(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public exits(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public duration(param0: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public geometry(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public voiceInstructions(param0: java.util.List<com.mapbox.api.directions.v5.models.VoiceInstructions>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public mode(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public bannerInstructions(param0: java.util.List<com.mapbox.api.directions.v5.models.BannerInstructions>): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public speedLimitUnit(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public name(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public ref(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public durationTypical(param0: java.lang.Double): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public weight(param0: number): com.mapbox.api.directions.v5.models.LegStep.Builder;
                public rotaryName(param0: string): com.mapbox.api.directions.v5.models.LegStep.Builder;
              }
              export class SpeedLimitSign {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.LegStep.SpeedLimitSign>;
                /**
                 * Constructs a new instance of the com.mapbox.api.directions.v5.models.LegStep$SpeedLimitSign interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class ManeuverModifier {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ManeuverModifier>;
              public static UTURN: string;
              public static SHARP_RIGHT: string;
              public static RIGHT: string;
              public static SLIGHT_RIGHT: string;
              public static STRAIGHT: string;
              public static SLIGHT_LEFT: string;
              public static LEFT: string;
              public static SHARP_LEFT: string;
              public constructor();
            }
            export module ManeuverModifier {
              export class Type {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ManeuverModifier.Type>;
                /**
                 * Constructs a new instance of the com.mapbox.api.directions.v5.models.ManeuverModifier$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class MapboxShield extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MapboxShield>;
              public constructor();
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.MapboxShield;
              public textColor(): string;
              public displayRef(): string;
              public name(): string;
              public baseUrl(): string;
              public static builder(): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
              public toBuilder(): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MapboxShield>;
            }
            export module MapboxShield {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.MapboxShield.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MapboxShield.Builder>;
                public name(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                public textColor(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                public build(): com.mapbox.api.directions.v5.models.MapboxShield;
                public baseUrl(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
                public constructor();
                public displayRef(param0: string): com.mapbox.api.directions.v5.models.MapboxShield.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class MapboxStreetsV8 extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MapboxStreetsV8>;
              public constructor();
              public static builder(): com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MapboxStreetsV8>;
              public roadClass(): string;
              public toBuilder(): com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
            }
            export module MapboxStreetsV8 {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder>;
                public build(): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
                public constructor();
                public roadClass(param0: string): com.mapbox.api.directions.v5.models.MapboxStreetsV8.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class MaxSpeed extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MaxSpeed>;
              public constructor();
              public none(): java.lang.Boolean;
              public unit(): string;
              public unknown(): java.lang.Boolean;
              public static builder(): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.MaxSpeed>;
              public toBuilder(): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.MaxSpeed;
              public speed(): java.lang.Integer;
            }
            export module MaxSpeed {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.MaxSpeed.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.MaxSpeed.Builder>;
                public speed(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                public none(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                public build(): com.mapbox.api.directions.v5.models.MaxSpeed;
                public constructor();
                public unknown(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
                public unit(param0: string): com.mapbox.api.directions.v5.models.MaxSpeed.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class Metadata extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Metadata>;
              public constructor();
              public static builder(): com.mapbox.api.directions.v5.models.Metadata.Builder;
              public toBuilder(): com.mapbox.api.directions.v5.models.Metadata.Builder;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.Metadata;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.Metadata>;
              public infoMap(): java.util.Map<string, string>;
            }
            export module Metadata {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.Metadata.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.Metadata.Builder>;
                public build(): com.mapbox.api.directions.v5.models.Metadata;
                public infoMap(param0: java.util.Map<string, string>): com.mapbox.api.directions.v5.models.Metadata.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class PaymentMethods extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.PaymentMethods>;
              public constructor();
              public toBuilder(): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
              public static builder(): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
              public cash(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.PaymentMethods>;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.PaymentMethods;
              public etc(): com.mapbox.api.directions.v5.models.CostPerVehicleSize;
            }
            export module PaymentMethods {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.PaymentMethods.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.PaymentMethods.Builder>;
                public etc(param0: com.mapbox.api.directions.v5.models.CostPerVehicleSize): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
                public constructor();
                public build(): com.mapbox.api.directions.v5.models.PaymentMethods;
                public cash(param0: com.mapbox.api.directions.v5.models.CostPerVehicleSize): com.mapbox.api.directions.v5.models.PaymentMethods.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class RestStop extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RestStop>;
              public constructor();
              public toBuilder(): com.mapbox.api.directions.v5.models.RestStop.Builder;
              public guideMap(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RestStop>;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.RestStop;
              public type(): string;
              public static builder(): com.mapbox.api.directions.v5.models.RestStop.Builder;
              public name(): string;
              public amenities(): java.util.List<com.mapbox.api.directions.v5.models.Amenity>;
            }
            export module RestStop {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.RestStop.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RestStop.Builder>;
                public guideMap(param0: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
                public amenities(param0: java.util.List<com.mapbox.api.directions.v5.models.Amenity>): com.mapbox.api.directions.v5.models.RestStop.Builder;
                public constructor();
                public name(param0: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
                public build(): com.mapbox.api.directions.v5.models.RestStop;
                public type(param0: string): com.mapbox.api.directions.v5.models.RestStop.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class RouteLeg extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RouteLeg>;
              public constructor();
              public static builder(): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
              public closures(): java.util.List<com.mapbox.api.directions.v5.models.Closure>;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RouteLeg>;
              public durationTypical(): java.lang.Double;
              public admins(): java.util.List<com.mapbox.api.directions.v5.models.Admin>;
              public toBuilder(): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
              public viaWaypoints(): java.util.List<com.mapbox.api.directions.v5.models.SilentWaypoint>;
              public duration(): java.lang.Double;
              public steps(): java.util.List<com.mapbox.api.directions.v5.models.LegStep>;
              public annotation(): com.mapbox.api.directions.v5.models.LegAnnotation;
              public distance(): java.lang.Double;
              public summary(): string;
              public incidents(): java.util.List<com.mapbox.api.directions.v5.models.Incident>;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.RouteLeg;
            }
            export module RouteLeg {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.RouteLeg.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RouteLeg.Builder>;
                public duration(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                public incidents(param0: java.util.List<com.mapbox.api.directions.v5.models.Incident>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                public viaWaypoints(param0: java.util.List<com.mapbox.api.directions.v5.models.SilentWaypoint>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                public distance(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                public durationTypical(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                public steps(param0: java.util.List<com.mapbox.api.directions.v5.models.LegStep>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                public build(): com.mapbox.api.directions.v5.models.RouteLeg;
                public constructor();
                public admins(param0: java.util.List<com.mapbox.api.directions.v5.models.Admin>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                public annotation(param0: com.mapbox.api.directions.v5.models.LegAnnotation): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                public closures(param0: java.util.List<com.mapbox.api.directions.v5.models.Closure>): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
                public summary(param0: string): com.mapbox.api.directions.v5.models.RouteLeg.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class RouteOptions extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RouteOptions>;
              public approachesList(): java.util.List<string>;
              public annotations(): string;
              public radiusesList(): java.util.List<java.lang.Double>;
              public alleyBias(): java.lang.Double;
              public walkwayBias(): java.lang.Double;
              public maxWeight(): java.lang.Double;
              public include(): string;
              public waypointNamesList(): java.util.List<string>;
              public paymentMethods(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.RouteOptions>;
              public static fromUrl(param0: java.net.URL): com.mapbox.api.directions.v5.models.RouteOptions;
              public coordinatesList(): java.util.List<com.mapbox.geojson.Point>;
              public paymentMethodsList(): java.util.List<string>;
              public snappingIncludeClosuresList(): java.util.List<java.lang.Boolean>;
              public departAt(): string;
              public static builder(): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
              public maxWidth(): java.lang.Double;
              public waypointTargetsList(): java.util.List<com.mapbox.geojson.Point>;
              public layersList(): java.util.List<java.lang.Integer>;
              public profile(): string;
              public voiceInstructions(): java.lang.Boolean;
              public waypointNames(): string;
              public excludeList(): java.util.List<string>;
              public snappingIncludeStaticClosures(): string;
              public arriveBy(): string;
              public toBuilder(): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
              public voiceUnits(): string;
              public language(): string;
              public snappingIncludeStaticClosuresList(): java.util.List<java.lang.Boolean>;
              public annotationsList(): java.util.List<string>;
              public toJson(): string;
              public layers(): string;
              public bearings(): string;
              public exclude(): string;
              public waypointsPerRoute(): java.lang.Boolean;
              public walkingSpeed(): java.lang.Double;
              public approaches(): string;
              public continueStraight(): java.lang.Boolean;
              public suppressVoiceInstructionLocalNames(): java.lang.Boolean;
              public user(): string;
              public metadata(): java.lang.Boolean;
              public bannerInstructions(): java.lang.Boolean;
              public waypointIndicesList(): java.util.List<java.lang.Integer>;
              public radiuses(): string;
              public bearingsList(): java.util.List<com.mapbox.api.directions.v5.models.Bearing>;
              public baseUrl(): string;
              public constructor();
              public roundaboutExits(): java.lang.Boolean;
              public steps(): java.lang.Boolean;
              public enableRefresh(): java.lang.Boolean;
              public waypointTargets(): string;
              public includeList(): java.util.List<string>;
              public toUrl(param0: string): java.net.URL;
              public excludeObject(): com.mapbox.api.directions.v5.models.Exclude;
              public coordinates(): string;
              public waypointIndices(): string;
              public geometries(): string;
              public computeTollCost(): java.lang.Boolean;
              public alternatives(): java.lang.Boolean;
              public maxHeight(): java.lang.Double;
              public overview(): string;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.RouteOptions;
              public avoidManeuverRadius(): java.lang.Double;
              public snappingIncludeClosures(): string;
            }
            export module RouteOptions {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.RouteOptions.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.RouteOptions.Builder>;
                public avoidManeuverRadius(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public geometries(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public annotations(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public approachesList(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public build(): com.mapbox.api.directions.v5.models.RouteOptions;
                public waypointsPerRoute(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public radiusesList(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public computeTollCost(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public layers(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public walkingSpeed(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public maxWidth(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public snappingIncludeStaticClosuresList(param0: java.util.List<java.lang.Boolean>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public waypointNamesList(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public maxHeight(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public bannerInstructions(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public snappingIncludeClosures(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public alternatives(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public walkwayBias(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public annotationsList(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public unrecognizedProperties(param0: java.util.Map<string, string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public paymentMethodsList(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public user(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public radiuses(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public bearings(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public roundaboutExits(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public constructor();
                public language(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public excludeList(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public steps(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public voiceUnits(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public arriveBy(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public waypointTargets(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public waypointIndices(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public snappingIncludeClosuresList(param0: java.util.List<java.lang.Boolean>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public maxWeight(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public baseUrl(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public includeList(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public approaches(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public exclude(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public alleyBias(param0: java.lang.Double): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public paymentMethods(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public bearingsList(param0: java.util.List<com.mapbox.api.directions.v5.models.Bearing>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public profile(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public layersList(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public enableRefresh(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public continueStraight(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public coordinates(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public include(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public suppressVoiceInstructionLocalNames(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public waypointNames(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public voiceInstructions(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public departAt(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public waypointIndicesList(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public waypointTargetsList(param0: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public excludeObject(param0: com.mapbox.api.directions.v5.models.Exclude): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public overview(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public coordinatesList(param0: java.util.List<com.mapbox.geojson.Point>): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public snappingIncludeStaticClosures(param0: string): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
                public metadata(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.RouteOptions.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class ShieldSprite extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSprite>;
              public constructor();
              public spriteAttributes(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
              public static builder(): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
              public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSprite>;
              public spriteName(): string;
            }
            export module ShieldSprite {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.ShieldSprite.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSprite.Builder>;
                public build(): com.mapbox.api.directions.v5.models.ShieldSprite;
                public spriteAttributes(param0: com.mapbox.api.directions.v5.models.ShieldSpriteAttribute): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
                public constructor();
                public spriteName(param0: string): com.mapbox.api.directions.v5.models.ShieldSprite.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class ShieldSpriteAttribute extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSpriteAttribute>;
              public constructor();
              public pixelRatio(): java.lang.Integer;
              public toJson(): string;
              public height(): java.lang.Integer;
              public static builder(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
              public placeholder(): java.util.List<java.lang.Double>;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
              public visible(): java.lang.Boolean;
              public y(): java.lang.Integer;
              public x(): java.lang.Integer;
              public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSpriteAttribute>;
              public width(): java.lang.Integer;
            }
            export module ShieldSpriteAttribute {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder>;
                public width(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                public height(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                public placeholder(param0: java.util.List<java.lang.Double>): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                public y(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                public pixelRatio(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                public x(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                public constructor();
                public visible(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute.Builder;
                public build(): com.mapbox.api.directions.v5.models.ShieldSpriteAttribute;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class ShieldSprites extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSprites>;
              public constructor();
              public toJson(): string;
              public sprites(): java.util.List<com.mapbox.api.directions.v5.models.ShieldSprite>;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSprites>;
              public static builder(): com.mapbox.api.directions.v5.models.ShieldSprites.Builder;
              public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSprites.Builder;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.ShieldSprites;
            }
            export module ShieldSprites {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.ShieldSprites.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSprites.Builder>;
                public sprites(param0: java.util.List<com.mapbox.api.directions.v5.models.ShieldSprite>): com.mapbox.api.directions.v5.models.ShieldSprites.Builder;
                public build(): com.mapbox.api.directions.v5.models.ShieldSprites;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class ShieldSvg extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSvg>;
              public constructor();
              public svg(): string;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.ShieldSvg;
              public toJson(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.ShieldSvg>;
              public static builder(): com.mapbox.api.directions.v5.models.ShieldSvg.Builder;
              public toBuilder(): com.mapbox.api.directions.v5.models.ShieldSvg.Builder;
            }
            export module ShieldSvg {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.ShieldSvg.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.ShieldSvg.Builder>;
                public build(): com.mapbox.api.directions.v5.models.ShieldSvg;
                public constructor();
                public svg(param0: string): com.mapbox.api.directions.v5.models.ShieldSvg.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class SilentWaypoint extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.SilentWaypoint>;
              public constructor();
              public static builder(): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
              public waypointIndex(): number;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.SilentWaypoint>;
              public distanceFromStart(): number;
              public geometryIndex(): number;
            }
            export module SilentWaypoint {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.SilentWaypoint.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.SilentWaypoint.Builder>;
                public distanceFromStart(param0: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                public waypointIndex(param0: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                public geometryIndex(param0: number): com.mapbox.api.directions.v5.models.SilentWaypoint.Builder;
                public constructor();
                public build(): com.mapbox.api.directions.v5.models.SilentWaypoint;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export class SpeedLimit {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.SpeedLimit>;
              public static KMPH: string;
              public static MPH: string;
              public constructor();
            }
            export module SpeedLimit {
              export class Unit {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.SpeedLimit.Unit>;
                /**
                 * Constructs a new instance of the com.mapbox.api.directions.v5.models.SpeedLimit$Unit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class StepIntersection extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.StepIntersection>;
              public entry(): java.util.List<java.lang.Boolean>;
              public interchange(): com.mapbox.api.directions.v5.models.Interchange;
              public yieldSign(): java.lang.Boolean;
              public restStop(): com.mapbox.api.directions.v5.models.RestStop;
              public mapboxStreetsV8(): com.mapbox.api.directions.v5.models.MapboxStreetsV8;
              public trafficSignal(): java.lang.Boolean;
              public location(): com.mapbox.geojson.Point;
              public out(): java.lang.Integer;
              public static builder(): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
              public geometryIndex(): java.lang.Integer;
              public in(): java.lang.Integer;
              public railwayCrossing(): java.lang.Boolean;
              public bearings(): java.util.List<java.lang.Integer>;
              public tollCollection(): com.mapbox.api.directions.v5.models.TollCollection;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.StepIntersection;
              public junction(): com.mapbox.api.directions.v5.models.Junction;
              public constructor();
              public adminIndex(): java.lang.Integer;
              public tunnelName(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.StepIntersection>;
              public toBuilder(): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
              public classes(): java.util.List<string>;
              public isUrban(): java.lang.Boolean;
              public lanes(): java.util.List<com.mapbox.api.directions.v5.models.IntersectionLanes>;
              public rawLocation(): androidNative.Array<number>;
              public stopSign(): java.lang.Boolean;
            }
            export module StepIntersection {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.StepIntersection.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.StepIntersection.Builder>;
                public in(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public railwayCrossing(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public adminIndex(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public bearings(param0: java.util.List<java.lang.Integer>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public classes(param0: java.util.List<string>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public out(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public constructor();
                public restStop(param0: com.mapbox.api.directions.v5.models.RestStop): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public yieldSign(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public build(): com.mapbox.api.directions.v5.models.StepIntersection;
                public mapboxStreetsV8(param0: com.mapbox.api.directions.v5.models.MapboxStreetsV8): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public tunnelName(param0: string): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public isUrban(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public geometryIndex(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public tollCollection(param0: com.mapbox.api.directions.v5.models.TollCollection): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public junction(param0: com.mapbox.api.directions.v5.models.Junction): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public trafficSignal(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public entry(param0: java.util.List<java.lang.Boolean>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public lanes(param0: java.util.List<com.mapbox.api.directions.v5.models.IntersectionLanes>): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public stopSign(param0: java.lang.Boolean): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
                public interchange(param0: com.mapbox.api.directions.v5.models.Interchange): com.mapbox.api.directions.v5.models.StepIntersection.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class StepManeuver extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.StepManeuver>;
              public static TURN: string;
              public static NEW_NAME: string;
              public static DEPART: string;
              public static ARRIVE: string;
              public static MERGE: string;
              public static ON_RAMP: string;
              public static OFF_RAMP: string;
              public static FORK: string;
              public static END_OF_ROAD: string;
              public static CONTINUE: string;
              public static ROUNDABOUT: string;
              public static ROTARY: string;
              public static ROUNDABOUT_TURN: string;
              public static NOTIFICATION: string;
              public static EXIT_ROUNDABOUT: string;
              public static EXIT_ROTARY: string;
              public constructor();
              public modifier(): string;
              public static builder(): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.StepManeuver>;
              public toBuilder(): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
              public location(): com.mapbox.geojson.Point;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.StepManeuver;
              public bearingBefore(): java.lang.Double;
              public instruction(): string;
              public bearingAfter(): java.lang.Double;
              public type(): string;
              public exit(): java.lang.Integer;
              public rawLocation(): androidNative.Array<number>;
            }
            export module StepManeuver {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.StepManeuver.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.StepManeuver.Builder>;
                public rawLocation(param0: androidNative.Array<number>): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                public type(param0: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                public bearingAfter(param0: java.lang.Double): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                public instruction(param0: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                public exit(param0: java.lang.Integer): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                public modifier(param0: string): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                public bearingBefore(param0: java.lang.Double): com.mapbox.api.directions.v5.models.StepManeuver.Builder;
                public build(): com.mapbox.api.directions.v5.models.StepManeuver;
                public constructor();
              }
              export class StepManeuverType {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.StepManeuver.StepManeuverType>;
                /**
                 * Constructs a new instance of the com.mapbox.api.directions.v5.models.StepManeuver$StepManeuverType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class TollCollection extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.TollCollection>;
              public constructor();
              public toBuilder(): com.mapbox.api.directions.v5.models.TollCollection.Builder;
              public static builder(): com.mapbox.api.directions.v5.models.TollCollection.Builder;
              public type(): string;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.TollCollection;
              public name(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.TollCollection>;
            }
            export module TollCollection {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.TollCollection.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.TollCollection.Builder>;
                public type(param0: string): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                public name(param0: string): com.mapbox.api.directions.v5.models.TollCollection.Builder;
                public constructor();
                public build(): com.mapbox.api.directions.v5.models.TollCollection;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class TollCost extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.TollCost>;
              public constructor();
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.TollCost>;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.TollCost;
              public toBuilder(): com.mapbox.api.directions.v5.models.TollCost.Builder;
              public currency(): string;
              public static builder(): com.mapbox.api.directions.v5.models.TollCost.Builder;
              public paymentMethods(): com.mapbox.api.directions.v5.models.PaymentMethods;
            }
            export module TollCost {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.TollCost.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.TollCost.Builder>;
                public constructor();
                public currency(param0: string): com.mapbox.api.directions.v5.models.TollCost.Builder;
                public paymentMethods(param0: com.mapbox.api.directions.v5.models.PaymentMethods): com.mapbox.api.directions.v5.models.TollCost.Builder;
                public build(): com.mapbox.api.directions.v5.models.TollCost;
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
    export module api {
      export module directions {
        export module v5 {
          export module models {
            export abstract class VoiceInstructions extends com.mapbox.api.directions.v5.models.DirectionsJsonObject {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.models.VoiceInstructions>;
              public constructor();
              public toBuilder(): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
              public ssmlAnnouncement(): string;
              public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.api.directions.v5.models.VoiceInstructions>;
              public static builder(): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
              public distanceAlongGeometry(): java.lang.Double;
              public announcement(): string;
              public static fromJson(param0: string): com.mapbox.api.directions.v5.models.VoiceInstructions;
            }
            export module VoiceInstructions {
              export abstract class Builder extends com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder<com.mapbox.api.directions.v5.models.VoiceInstructions.Builder> {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.models.VoiceInstructions.Builder>;
                public build(): com.mapbox.api.directions.v5.models.VoiceInstructions;
                public distanceAlongGeometry(param0: java.lang.Double): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                public ssmlAnnouncement(param0: string): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
                public constructor();
                public announcement(param0: string): com.mapbox.api.directions.v5.models.VoiceInstructions.Builder;
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
    export module api {
      export module directions {
        export module v5 {
          export module utils {
            export class FormatUtils {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.utils.FormatUtils>;
              public static ISO_8601_PATTERN: string;
              public constructor();
              public static formatPointsList(param0: java.util.List<com.mapbox.geojson.Point>): string;
              public static join(param0: string, param1: java.util.List<any>): string;
              public static formatIntegers(param0: java.util.List<java.lang.Integer>): string;
              public static formatDouble(param0: number): string;
              public static formatRadiuses(param0: java.util.List<java.lang.Double>): string;
              public static formatDistributions(param0: java.util.List<androidNative.Array<java.lang.Integer>>): string;
              public static formatBearings(param0: java.util.List<com.mapbox.api.directions.v5.models.Bearing>): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module api {
      export module directions {
        export module v5 {
          export module utils {
            export class ParseUtils {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.utils.ParseUtils>;
              public constructor();
              public static parseToStrings(param0: string): java.util.List<string>;
              public static parseToStrings(param0: string, param1: string): java.util.List<string>;
              public static parseToBooleans(param0: string): java.util.List<java.lang.Boolean>;
              public static parseToIntegers(param0: string): java.util.List<java.lang.Integer>;
              public static parseBearings(param0: string): java.util.List<com.mapbox.api.directions.v5.models.Bearing>;
              public static parseToDoubles(param0: string): java.util.List<java.lang.Double>;
              public static parseToPoints(param0: string): java.util.List<com.mapbox.geojson.Point>;
            }
            export module ParseUtils {
              export class ValueParser<T> extends java.lang.Object {
                public static class: java.lang.Class<com.mapbox.api.directions.v5.utils.ParseUtils.ValueParser<any>>;
                /**
                 * Constructs a new instance of the com.mapbox.api.directions.v5.utils.ParseUtils$ValueParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { parse(param0: string): T });
                public constructor();
                public parse(param0: string): T;
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
    export module api {
      export module directions {
        export module v5 {
          export module utils {
            export class UnrecognizedPropertiesUtils {
              public static class: java.lang.Class<com.mapbox.api.directions.v5.utils.UnrecognizedPropertiesUtils>;
              public constructor();
              public static fromSerializableProperties(param0: java.util.Map<string, com.mapbox.auto.value.gson.SerializableJsonElement>): java.util.Map<string, com.google.gson.JsonElement>;
              public static toSerializableProperties(param0: java.util.Map<string, com.google.gson.JsonElement>): java.util.Map<string, com.mapbox.auto.value.gson.SerializableJsonElement>;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.api.directions.v5.models.DirectionsJsonObject.Builder:1
//com.mapbox.api.directions.v5.utils.ParseUtils.ValueParser:1
