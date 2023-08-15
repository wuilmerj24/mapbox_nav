/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module turf {
      export class TurfAssertions {
        public static class: java.lang.Class<com.mapbox.turf.TurfAssertions>;
        /** @deprecated */
        public static getCoord(param0: com.mapbox.geojson.Feature): com.mapbox.geojson.Point;
        public static geojsonType(param0: com.mapbox.geojson.GeoJson, param1: string, param2: string): void;
        public static featureOf(param0: com.mapbox.geojson.Feature, param1: string, param2: string): void;
        public static collectionOf(param0: com.mapbox.geojson.FeatureCollection, param1: string, param2: string): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module turf {
      export class TurfClassification {
        public static class: java.lang.Class<com.mapbox.turf.TurfClassification>;
        public static nearestPoint(param0: com.mapbox.geojson.Point, param1: java.util.List<com.mapbox.geojson.Point>): com.mapbox.geojson.Point;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module turf {
      export class TurfConstants {
        public static class: java.lang.Class<com.mapbox.turf.TurfConstants>;
        public static UNIT_MILES: string;
        public static UNIT_NAUTICAL_MILES: string;
        public static UNIT_KILOMETERS: string;
        public static UNIT_RADIANS: string;
        public static UNIT_DEGREES: string;
        public static UNIT_INCHES: string;
        public static UNIT_YARDS: string;
        public static UNIT_METERS: string;
        public static UNIT_CENTIMETERS: string;
        public static UNIT_FEET: string;
        public static UNIT_CENTIMETRES: string;
        public static UNIT_METRES: string;
        public static UNIT_KILOMETRES: string;
        public static UNIT_DEFAULT: string;
      }
      export module TurfConstants {
        export class TurfUnitCriteria {
          public static class: java.lang.Class<com.mapbox.turf.TurfConstants.TurfUnitCriteria>;
          /**
           * Constructs a new instance of the com.mapbox.turf.TurfConstants$TurfUnitCriteria interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
    export module turf {
      export class TurfConversion {
        public static class: java.lang.Class<com.mapbox.turf.TurfConversion>;
        public static lengthToRadians(param0: number, param1: string): number;
        public static explode(param0: com.mapbox.geojson.FeatureCollection): com.mapbox.geojson.FeatureCollection;
        public static lengthToRadians(param0: number): number;
        public static convertLength(param0: number, param1: string): number;
        public static degreesToRadians(param0: number): number;
        public static convertLength(param0: number, param1: string, param2: string): number;
        public static polygonToLine(param0: com.mapbox.geojson.Feature): com.mapbox.geojson.Feature;
        public static explode(param0: com.mapbox.geojson.Feature): com.mapbox.geojson.FeatureCollection;
        public static polygonToLine(param0: com.mapbox.geojson.MultiPolygon, param1: com.google.gson.JsonObject): com.mapbox.geojson.FeatureCollection;
        public static multiPolygonToLine(param0: com.mapbox.geojson.Feature): com.mapbox.geojson.FeatureCollection;
        public static radiansToLength(param0: number, param1: string): number;
        public static polygonToLine(param0: com.mapbox.geojson.Polygon, param1: com.google.gson.JsonObject): com.mapbox.geojson.Feature;
        public static polygonToLine(param0: com.mapbox.geojson.MultiPolygon): com.mapbox.geojson.FeatureCollection;
        public static combine(param0: com.mapbox.geojson.FeatureCollection): com.mapbox.geojson.FeatureCollection;
        public static radiansToLength(param0: number): number;
        public static polygonToLine(param0: com.mapbox.geojson.Polygon): com.mapbox.geojson.Feature;
        public static lengthToDegrees(param0: number, param1: string): number;
        public static polygonToLine(param0: com.mapbox.geojson.Feature, param1: com.google.gson.JsonObject): com.mapbox.geojson.Feature;
        public static radiansToDegrees(param0: number): number;
        public static multiPolygonToLine(param0: com.mapbox.geojson.Feature, param1: com.google.gson.JsonObject): com.mapbox.geojson.FeatureCollection;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module turf {
      export class TurfException {
        public static class: java.lang.Class<com.mapbox.turf.TurfException>;
        public constructor(param0: string);
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module turf {
      export class TurfJoins {
        public static class: java.lang.Class<com.mapbox.turf.TurfJoins>;
        public static inside(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Polygon): boolean;
        public static inside(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.MultiPolygon): boolean;
        public static pointsWithinPolygon(param0: com.mapbox.geojson.FeatureCollection, param1: com.mapbox.geojson.FeatureCollection): com.mapbox.geojson.FeatureCollection;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module turf {
      export class TurfMeasurement {
        public static class: java.lang.Class<com.mapbox.turf.TurfMeasurement>;
        public static EARTH_RADIUS: number;
        public static length(param0: com.mapbox.geojson.MultiLineString, param1: string): number;
        public static bbox(param0: com.mapbox.geojson.LineString): androidNative.Array<number>;
        public static area(param0: com.mapbox.geojson.Geometry): number;
        public static length(param0: com.mapbox.geojson.MultiPolygon, param1: string): number;
        public static bboxPolygon(param0: androidNative.Array<number>): com.mapbox.geojson.Feature;
        public static envelope(param0: com.mapbox.geojson.GeoJson): com.mapbox.geojson.Polygon;
        public static bbox(param0: com.mapbox.geojson.MultiPolygon): androidNative.Array<number>;
        public static length(param0: com.mapbox.geojson.Polygon, param1: string): number;
        public static bbox(param0: com.mapbox.geojson.Geometry): androidNative.Array<number>;
        public static center(param0: com.mapbox.geojson.FeatureCollection, param1: com.google.gson.JsonObject, param2: string): com.mapbox.geojson.Feature;
        public static bboxPolygon(param0: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.Feature;
        public static bbox(param0: com.mapbox.geojson.Point): androidNative.Array<number>;
        public static bearing(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point): number;
        public static distance(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point): number;
        public static square(param0: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.BoundingBox;
        public static center(param0: com.mapbox.geojson.Feature, param1: com.google.gson.JsonObject, param2: string): com.mapbox.geojson.Feature;
        public static bbox(param0: com.mapbox.geojson.GeoJson): androidNative.Array<number>;
        public static length(param0: java.util.List<com.mapbox.geojson.Point>, param1: string): number;
        public static bbox(param0: com.mapbox.geojson.MultiPoint): androidNative.Array<number>;
        public static length(param0: com.mapbox.geojson.LineString, param1: string): number;
        public static bbox(param0: com.mapbox.geojson.Polygon): androidNative.Array<number>;
        public static bbox(param0: com.mapbox.geojson.MultiLineString): androidNative.Array<number>;
        public static distance(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point, param2: string): number;
        public static along(param0: java.util.List<com.mapbox.geojson.Point>, param1: number, param2: string): com.mapbox.geojson.Point;
        public static center(param0: com.mapbox.geojson.Feature): com.mapbox.geojson.Feature;
        public static destination(param0: com.mapbox.geojson.Point, param1: number, param2: number, param3: string): com.mapbox.geojson.Point;
        public static along(param0: com.mapbox.geojson.LineString, param1: number, param2: string): com.mapbox.geojson.Point;
        public static bbox(param0: com.mapbox.geojson.Feature): androidNative.Array<number>;
        public static center(param0: com.mapbox.geojson.FeatureCollection): com.mapbox.geojson.Feature;
        public static bboxPolygon(param0: androidNative.Array<number>, param1: com.google.gson.JsonObject, param2: string): com.mapbox.geojson.Feature;
        public static bboxPolygon(param0: com.mapbox.geojson.BoundingBox, param1: com.google.gson.JsonObject, param2: string): com.mapbox.geojson.Feature;
        public static area(param0: com.mapbox.geojson.Feature): number;
        public static bbox(param0: com.mapbox.geojson.FeatureCollection): androidNative.Array<number>;
        public static midpoint(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point): com.mapbox.geojson.Point;
        public static area(param0: com.mapbox.geojson.FeatureCollection): number;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module turf {
      export class TurfMeta {
        public static class: java.lang.Class<com.mapbox.turf.TurfMeta>;
        public static coordAll(param0: com.mapbox.geojson.Point): java.util.List<com.mapbox.geojson.Point>;
        public static coordAll(param0: com.mapbox.geojson.MultiPoint): java.util.List<com.mapbox.geojson.Point>;
        public static coordAll(param0: com.mapbox.geojson.LineString): java.util.List<com.mapbox.geojson.Point>;
        public static coordAll(param0: com.mapbox.geojson.Polygon, param1: boolean): java.util.List<com.mapbox.geojson.Point>;
        public static coordAll(param0: com.mapbox.geojson.FeatureCollection, param1: boolean): java.util.List<com.mapbox.geojson.Point>;
        public static getCoord(param0: com.mapbox.geojson.Feature): com.mapbox.geojson.Point;
        public static coordAll(param0: com.mapbox.geojson.Feature, param1: boolean): java.util.List<com.mapbox.geojson.Point>;
        public static coordAll(param0: com.mapbox.geojson.MultiLineString): java.util.List<com.mapbox.geojson.Point>;
        public static coordAll(param0: com.mapbox.geojson.MultiPolygon, param1: boolean): java.util.List<com.mapbox.geojson.Point>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module turf {
      export class TurfMisc {
        public static class: java.lang.Class<com.mapbox.turf.TurfMisc>;
        public static lineSlice(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point, param2: com.mapbox.geojson.Feature): com.mapbox.geojson.LineString;
        public static lineSlice(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point, param2: com.mapbox.geojson.LineString): com.mapbox.geojson.LineString;
        public static nearestPointOnLine(param0: com.mapbox.geojson.Point, param1: java.util.List<com.mapbox.geojson.Point>): com.mapbox.geojson.Feature;
        public static lineIntersect(param0: com.mapbox.geojson.LineString, param1: com.mapbox.geojson.LineString): java.util.List<com.mapbox.geojson.Point>;
        public static nearestPointOnLine(param0: com.mapbox.geojson.Point, param1: java.util.List<com.mapbox.geojson.Point>, param2: string): com.mapbox.geojson.Feature;
        public static lineSliceAlong(param0: com.mapbox.geojson.Feature, param1: number, param2: number, param3: string): com.mapbox.geojson.LineString;
        public static lineSliceAlong(param0: com.mapbox.geojson.LineString, param1: number, param2: number, param3: string): com.mapbox.geojson.LineString;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module turf {
      export class TurfTransformation {
        public static class: java.lang.Class<com.mapbox.turf.TurfTransformation>;
        public static simplify(param0: java.util.List<com.mapbox.geojson.Point>, param1: number, param2: boolean): java.util.List<com.mapbox.geojson.Point>;
        public static circle(param0: com.mapbox.geojson.Point, param1: number): com.mapbox.geojson.Polygon;
        public static circle(param0: com.mapbox.geojson.Point, param1: number, param2: string): com.mapbox.geojson.Polygon;
        public static simplify(param0: java.util.List<com.mapbox.geojson.Point>, param1: boolean): java.util.List<com.mapbox.geojson.Point>;
        public static circle(param0: com.mapbox.geojson.Point, param1: number, param2: number, param3: string): com.mapbox.geojson.Polygon;
        public static simplify(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.geojson.Point>;
        public static simplify(param0: java.util.List<com.mapbox.geojson.Point>, param1: number): java.util.List<com.mapbox.geojson.Point>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module turf {
      export module models {
        export class LineIntersectsResult {
          public static class: java.lang.Class<com.mapbox.turf.models.LineIntersectsResult>;
          public equals(param0: any): boolean;
          public horizontalIntersection(): java.lang.Double;
          public toString(): string;
          public verticalIntersection(): java.lang.Double;
          public onLine1(): boolean;
          public static builder(): com.mapbox.turf.models.LineIntersectsResult.Builder;
          public onLine2(): boolean;
          public toBuilder(): com.mapbox.turf.models.LineIntersectsResult.Builder;
          public hashCode(): number;
        }
        export module LineIntersectsResult {
          export class Builder {
            public static class: java.lang.Class<com.mapbox.turf.models.LineIntersectsResult.Builder>;
            public verticalIntersection(param0: java.lang.Double): com.mapbox.turf.models.LineIntersectsResult.Builder;
            public onLine1(param0: boolean): com.mapbox.turf.models.LineIntersectsResult.Builder;
            public build(): com.mapbox.turf.models.LineIntersectsResult;
            public horizontalIntersection(param0: java.lang.Double): com.mapbox.turf.models.LineIntersectsResult.Builder;
            public onLine2(param0: boolean): com.mapbox.turf.models.LineIntersectsResult.Builder;
          }
        }
      }
    }
  }
}

//Generics information:
