/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module mapbox {
    export module geojson {
      export abstract class BaseCoordinatesTypeAdapter<T> extends com.google.gson.TypeAdapter<any> {
        public static class: java.lang.Class<com.mapbox.geojson.BaseCoordinatesTypeAdapter<any>>;
        public writePoint(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.Point): void;
        public readPointList(param0: com.google.gson.stream.JsonReader): java.util.List<java.lang.Double>;
        public readPoint(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.Point;
        public writePointList(param0: com.google.gson.stream.JsonWriter, param1: java.util.List<java.lang.Double>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export abstract class BaseGeometryTypeAdapter<G, T> extends com.google.gson.TypeAdapter<any> {
        public static class: java.lang.Class<com.mapbox.geojson.BaseGeometryTypeAdapter<any, any>>;
        public writeCoordinateContainer(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.CoordinateContainer<any>): void;
        public readCoordinateContainer(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.CoordinateContainer<any>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class BoundingBox {
        public static class: java.lang.Class<com.mapbox.geojson.BoundingBox>;
        public northeast(): com.mapbox.geojson.Point;
        public west(): number;
        /** @deprecated */
        public static fromCoordinates(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): com.mapbox.geojson.BoundingBox;
        public southwest(): com.mapbox.geojson.Point;
        public toString(): string;
        /** @deprecated */
        public static fromCoordinates(param0: number, param1: number, param2: number, param3: number): com.mapbox.geojson.BoundingBox;
        public toJson(): string;
        public static fromJson(param0: string): com.mapbox.geojson.BoundingBox;
        public north(): number;
        public static fromLngLats(param0: number, param1: number, param2: number, param3: number): com.mapbox.geojson.BoundingBox;
        public south(): number;
        public static fromPoints(param0: com.mapbox.geojson.Point, param1: com.mapbox.geojson.Point): com.mapbox.geojson.BoundingBox;
        public static fromLngLats(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): com.mapbox.geojson.BoundingBox;
        public east(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.geojson.BoundingBox>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class CoordinateContainer<T> extends com.mapbox.geojson.Geometry {
        public static class: java.lang.Class<com.mapbox.geojson.CoordinateContainer<any>>;
        /**
         * Constructs a new instance of the com.mapbox.geojson.CoordinateContainer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { coordinates(): any; type(): string; toJson(): string; bbox(): com.mapbox.geojson.BoundingBox });
        public constructor();
        public type(): string;
        public coordinates(): any;
        public toJson(): string;
        public bbox(): com.mapbox.geojson.BoundingBox;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class Feature extends com.mapbox.geojson.GeoJson {
        public static class: java.lang.Class<com.mapbox.geojson.Feature>;
        public getNumberProperty(param0: string): java.lang.Number;
        public addNumberProperty(param0: string, param1: java.lang.Number): void;
        public id(): string;
        public removeProperty(param0: string): com.google.gson.JsonElement;
        public properties(): com.google.gson.JsonObject;
        public getStringProperty(param0: string): string;
        public hashCode(): number;
        public type(): string;
        public equals(param0: any): boolean;
        public static fromGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.Feature;
        public addStringProperty(param0: string, param1: string): void;
        public hasNonNullValueForProperty(param0: string): boolean;
        public geometry(): com.mapbox.geojson.Geometry;
        public addBooleanProperty(param0: string, param1: java.lang.Boolean): void;
        public getCharacterProperty(param0: string): java.lang.Character;
        public static fromJson(param0: string): com.mapbox.geojson.Feature;
        public static fromGeometry(param0: com.mapbox.geojson.Geometry): com.mapbox.geojson.Feature;
        public getBooleanProperty(param0: string): java.lang.Boolean;
        public toString(): string;
        public toJson(): string;
        public static fromGeometry(param0: com.mapbox.geojson.Geometry, param1: com.google.gson.JsonObject): com.mapbox.geojson.Feature;
        public static fromGeometry(param0: com.mapbox.geojson.Geometry, param1: com.google.gson.JsonObject, param2: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.Feature;
        public static fromGeometry(param0: com.mapbox.geojson.Geometry, param1: com.google.gson.JsonObject, param2: string): com.mapbox.geojson.Feature;
        public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.geojson.Feature>;
        public addProperty(param0: string, param1: com.google.gson.JsonElement): void;
        public getProperty(param0: string): com.google.gson.JsonElement;
        public hasProperty(param0: string): boolean;
        public static fromGeometry(param0: com.mapbox.geojson.Geometry, param1: com.google.gson.JsonObject, param2: string, param3: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.Feature;
        public bbox(): com.mapbox.geojson.BoundingBox;
        public addCharacterProperty(param0: string, param1: java.lang.Character): void;
      }
      export module Feature {
        export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.geojson.Feature> {
          public static class: java.lang.Class<com.mapbox.geojson.Feature.GsonTypeAdapter>;
          public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.Feature): void;
          public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.Feature;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class FeatureCollection extends com.mapbox.geojson.GeoJson {
        public static class: java.lang.Class<com.mapbox.geojson.FeatureCollection>;
        public static fromFeature(param0: com.mapbox.geojson.Feature): com.mapbox.geojson.FeatureCollection;
        public static fromFeatures(param0: java.util.List<com.mapbox.geojson.Feature>): com.mapbox.geojson.FeatureCollection;
        public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.geojson.FeatureCollection>;
        public static fromFeatures(param0: java.util.List<com.mapbox.geojson.Feature>, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.FeatureCollection;
        public toString(): string;
        public toJson(): string;
        public static fromFeatures(param0: androidNative.Array<com.mapbox.geojson.Feature>): com.mapbox.geojson.FeatureCollection;
        public static fromFeatures(param0: androidNative.Array<com.mapbox.geojson.Feature>, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.FeatureCollection;
        public hashCode(): number;
        public static fromJson(param0: string): com.mapbox.geojson.FeatureCollection;
        public type(): string;
        public equals(param0: any): boolean;
        public features(): java.util.List<com.mapbox.geojson.Feature>;
        public static fromFeature(param0: com.mapbox.geojson.Feature, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.FeatureCollection;
        public bbox(): com.mapbox.geojson.BoundingBox;
      }
      export module FeatureCollection {
        export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.geojson.FeatureCollection> {
          public static class: java.lang.Class<com.mapbox.geojson.FeatureCollection.GsonTypeAdapter>;
          public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.FeatureCollection;
          public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.FeatureCollection): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class GeoJson {
        public static class: java.lang.Class<com.mapbox.geojson.GeoJson>;
        /**
         * Constructs a new instance of the com.mapbox.geojson.GeoJson interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { type(): string; toJson(): string; bbox(): com.mapbox.geojson.BoundingBox });
        public constructor();
        public type(): string;
        public toJson(): string;
        public bbox(): com.mapbox.geojson.BoundingBox;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class Geometry extends com.mapbox.geojson.GeoJson {
        public static class: java.lang.Class<com.mapbox.geojson.Geometry>;
        /**
         * Constructs a new instance of the com.mapbox.geojson.Geometry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { type(): string; toJson(): string; bbox(): com.mapbox.geojson.BoundingBox });
        public constructor();
        public type(): string;
        public toJson(): string;
        public bbox(): com.mapbox.geojson.BoundingBox;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export abstract class GeometryAdapterFactory {
        public static class: java.lang.Class<com.mapbox.geojson.GeometryAdapterFactory>;
        public static create(): com.google.gson.TypeAdapterFactory;
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class GeometryCollection extends com.mapbox.geojson.Geometry {
        public static class: java.lang.Class<com.mapbox.geojson.GeometryCollection>;
        public static fromGeometries(param0: java.util.List<com.mapbox.geojson.Geometry>): com.mapbox.geojson.GeometryCollection;
        public geometries(): java.util.List<com.mapbox.geojson.Geometry>;
        public static fromGeometry(param0: com.mapbox.geojson.Geometry): com.mapbox.geojson.GeometryCollection;
        public toString(): string;
        public toJson(): string;
        public static fromJson(param0: string): com.mapbox.geojson.GeometryCollection;
        public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.geojson.GeometryCollection>;
        public hashCode(): number;
        public static fromGeometries(param0: java.util.List<com.mapbox.geojson.Geometry>, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.GeometryCollection;
        public static fromGeometry(param0: com.mapbox.geojson.Geometry, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.GeometryCollection;
        public type(): string;
        public equals(param0: any): boolean;
        public bbox(): com.mapbox.geojson.BoundingBox;
      }
      export module GeometryCollection {
        export class GsonTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.geojson.GeometryCollection> {
          public static class: java.lang.Class<com.mapbox.geojson.GeometryCollection.GsonTypeAdapter>;
          public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.GeometryCollection): void;
          public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.GeometryCollection;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class LineString extends com.mapbox.geojson.CoordinateContainer<java.util.List<com.mapbox.geojson.Point>> {
        public static class: java.lang.Class<com.mapbox.geojson.LineString>;
        public static fromPolyline(param0: string, param1: number): com.mapbox.geojson.LineString;
        public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.geojson.LineString>;
        public static fromLngLats(param0: com.mapbox.geojson.MultiPoint, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.LineString;
        public toPolyline(param0: number): string;
        public toString(): string;
        public toJson(): string;
        public coordinates(): any;
        public static fromLngLats(param0: java.util.List<com.mapbox.geojson.Point>): com.mapbox.geojson.LineString;
        public static fromLngLats(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.LineString;
        public hashCode(): number;
        public static fromJson(param0: string): com.mapbox.geojson.LineString;
        public type(): string;
        public equals(param0: any): boolean;
        public static fromLngLats(param0: com.mapbox.geojson.MultiPoint): com.mapbox.geojson.LineString;
        public bbox(): com.mapbox.geojson.BoundingBox;
        public coordinates(): java.util.List<com.mapbox.geojson.Point>;
      }
      export module LineString {
        export class GsonTypeAdapter extends com.mapbox.geojson.BaseGeometryTypeAdapter<com.mapbox.geojson.LineString, java.util.List<com.mapbox.geojson.Point>> {
          public static class: java.lang.Class<com.mapbox.geojson.LineString.GsonTypeAdapter>;
          public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.LineString): void;
          public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.LineString;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class ListOfDoublesCoordinatesTypeAdapter extends com.mapbox.geojson.BaseCoordinatesTypeAdapter<java.util.List<java.lang.Double>> {
        public static class: java.lang.Class<com.mapbox.geojson.ListOfDoublesCoordinatesTypeAdapter>;
        public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.List<java.lang.Double>): void;
        public read(param0: com.google.gson.stream.JsonReader): java.util.List<java.lang.Double>;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class ListOfListOfPointCoordinatesTypeAdapter extends com.mapbox.geojson.BaseCoordinatesTypeAdapter<java.util.List<java.util.List<com.mapbox.geojson.Point>>> {
        public static class: java.lang.Class<com.mapbox.geojson.ListOfListOfPointCoordinatesTypeAdapter>;
        public read(param0: com.google.gson.stream.JsonReader): java.util.List<java.util.List<com.mapbox.geojson.Point>>;
        public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.List<java.util.List<com.mapbox.geojson.Point>>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class ListOfPointCoordinatesTypeAdapter extends com.mapbox.geojson.BaseCoordinatesTypeAdapter<java.util.List<com.mapbox.geojson.Point>> {
        public static class: java.lang.Class<com.mapbox.geojson.ListOfPointCoordinatesTypeAdapter>;
        public read(param0: com.google.gson.stream.JsonReader): java.util.List<com.mapbox.geojson.Point>;
        public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.List<com.mapbox.geojson.Point>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class ListofListofListOfPointCoordinatesTypeAdapter extends com.mapbox.geojson.BaseCoordinatesTypeAdapter<java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>> {
        public static class: java.lang.Class<com.mapbox.geojson.ListofListofListOfPointCoordinatesTypeAdapter>;
        public read(param0: com.google.gson.stream.JsonReader): java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>;
        public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>): void;
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class MultiLineString extends com.mapbox.geojson.CoordinateContainer<java.util.List<java.util.List<com.mapbox.geojson.Point>>> {
        public static class: java.lang.Class<com.mapbox.geojson.MultiLineString>;
        public lineStrings(): java.util.List<com.mapbox.geojson.LineString>;
        public static fromLineString(param0: com.mapbox.geojson.LineString): com.mapbox.geojson.MultiLineString;
        public static fromLngLats(param0: java.util.List<java.util.List<com.mapbox.geojson.Point>>): com.mapbox.geojson.MultiLineString;
        public toString(): string;
        public toJson(): string;
        public coordinates(): any;
        public static fromLineStrings(param0: java.util.List<com.mapbox.geojson.LineString>, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.MultiLineString;
        public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.geojson.MultiLineString>;
        public static fromLineString(param0: com.mapbox.geojson.LineString, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.MultiLineString;
        public hashCode(): number;
        public static fromLineStrings(param0: java.util.List<com.mapbox.geojson.LineString>): com.mapbox.geojson.MultiLineString;
        public static fromLngLats(param0: java.util.List<java.util.List<com.mapbox.geojson.Point>>, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.MultiLineString;
        public static fromJson(param0: string): com.mapbox.geojson.MultiLineString;
        public type(): string;
        public equals(param0: any): boolean;
        public coordinates(): java.util.List<java.util.List<com.mapbox.geojson.Point>>;
        public bbox(): com.mapbox.geojson.BoundingBox;
      }
      export module MultiLineString {
        export class GsonTypeAdapter extends com.mapbox.geojson.BaseGeometryTypeAdapter<com.mapbox.geojson.MultiLineString, java.util.List<java.util.List<com.mapbox.geojson.Point>>> {
          public static class: java.lang.Class<com.mapbox.geojson.MultiLineString.GsonTypeAdapter>;
          public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.MultiLineString;
          public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.MultiLineString): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class MultiPoint extends com.mapbox.geojson.CoordinateContainer<java.util.List<com.mapbox.geojson.Point>> {
        public static class: java.lang.Class<com.mapbox.geojson.MultiPoint>;
        public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.geojson.MultiPoint>;
        public hashCode(): number;
        public type(): string;
        public equals(param0: any): boolean;
        public static fromJson(param0: string): com.mapbox.geojson.MultiPoint;
        public toString(): string;
        public static fromLngLats(param0: java.util.List<com.mapbox.geojson.Point>, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.MultiPoint;
        public toJson(): string;
        public coordinates(): any;
        public bbox(): com.mapbox.geojson.BoundingBox;
        public static fromLngLats(param0: java.util.List<com.mapbox.geojson.Point>): com.mapbox.geojson.MultiPoint;
        public coordinates(): java.util.List<com.mapbox.geojson.Point>;
      }
      export module MultiPoint {
        export class GsonTypeAdapter extends com.mapbox.geojson.BaseGeometryTypeAdapter<com.mapbox.geojson.MultiPoint, java.util.List<com.mapbox.geojson.Point>> {
          public static class: java.lang.Class<com.mapbox.geojson.MultiPoint.GsonTypeAdapter>;
          public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.MultiPoint): void;
          public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.MultiPoint;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class MultiPolygon extends com.mapbox.geojson.CoordinateContainer<java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>> {
        public static class: java.lang.Class<com.mapbox.geojson.MultiPolygon>;
        public static fromPolygons(param0: java.util.List<com.mapbox.geojson.Polygon>): com.mapbox.geojson.MultiPolygon;
        public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.geojson.MultiPolygon>;
        public static fromLngLats(param0: java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>): com.mapbox.geojson.MultiPolygon;
        public coordinates(): java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>;
        public static fromPolygon(param0: com.mapbox.geojson.Polygon, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.MultiPolygon;
        public toString(): string;
        public static fromJson(param0: string): com.mapbox.geojson.MultiPolygon;
        public toJson(): string;
        public coordinates(): any;
        public static fromPolygons(param0: java.util.List<com.mapbox.geojson.Polygon>, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.MultiPolygon;
        public static fromPolygon(param0: com.mapbox.geojson.Polygon): com.mapbox.geojson.MultiPolygon;
        public hashCode(): number;
        public polygons(): java.util.List<com.mapbox.geojson.Polygon>;
        public type(): string;
        public equals(param0: any): boolean;
        public static fromLngLats(param0: java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.MultiPolygon;
        public bbox(): com.mapbox.geojson.BoundingBox;
      }
      export module MultiPolygon {
        export class GsonTypeAdapter extends com.mapbox.geojson.BaseGeometryTypeAdapter<com.mapbox.geojson.MultiPolygon, java.util.List<java.util.List<java.util.List<com.mapbox.geojson.Point>>>> {
          public static class: java.lang.Class<com.mapbox.geojson.MultiPolygon.GsonTypeAdapter>;
          public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.MultiPolygon): void;
          public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.MultiPolygon;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class Point extends com.mapbox.geojson.CoordinateContainer<java.util.List<java.lang.Double>> {
        public static class: java.lang.Class<com.mapbox.geojson.Point>;
        public hasAltitude(): boolean;
        public altitude(): number;
        public coordinates(): java.util.List<java.lang.Double>;
        public static fromLngLat(param0: number, param1: number, param2: number, param3: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.Point;
        public longitude(): number;
        public toString(): string;
        public toJson(): string;
        public coordinates(): any;
        public latitude(): number;
        public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.geojson.Point>;
        public static fromLngLat(param0: number, param1: number, param2: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.Point;
        public hashCode(): number;
        public type(): string;
        public equals(param0: any): boolean;
        public static fromLngLat(param0: number, param1: number, param2: number): com.mapbox.geojson.Point;
        public static fromLngLat(param0: number, param1: number): com.mapbox.geojson.Point;
        public static fromJson(param0: string): com.mapbox.geojson.Point;
        public bbox(): com.mapbox.geojson.BoundingBox;
      }
      export module Point {
        export class GsonTypeAdapter extends com.mapbox.geojson.BaseGeometryTypeAdapter<com.mapbox.geojson.Point, java.util.List<java.lang.Double>> {
          public static class: java.lang.Class<com.mapbox.geojson.Point.GsonTypeAdapter>;
          public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.Point): void;
          public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.Point;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class PointAsCoordinatesTypeAdapter extends com.mapbox.geojson.BaseCoordinatesTypeAdapter<com.mapbox.geojson.Point> {
        public static class: java.lang.Class<com.mapbox.geojson.PointAsCoordinatesTypeAdapter>;
        public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.Point): void;
        public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.Point;
        public constructor();
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export class Polygon extends com.mapbox.geojson.CoordinateContainer<java.util.List<java.util.List<com.mapbox.geojson.Point>>> {
        public static class: java.lang.Class<com.mapbox.geojson.Polygon>;
        public static fromJson(param0: string): com.mapbox.geojson.Polygon;
        public static fromOuterInner(param0: com.mapbox.geojson.LineString, param1: com.mapbox.geojson.BoundingBox, param2: java.util.List<com.mapbox.geojson.LineString>): com.mapbox.geojson.Polygon;
        public toString(): string;
        public static fromLngLats(param0: java.util.List<java.util.List<com.mapbox.geojson.Point>>, param1: com.mapbox.geojson.BoundingBox): com.mapbox.geojson.Polygon;
        public toJson(): string;
        public coordinates(): any;
        public outer(): com.mapbox.geojson.LineString;
        public static typeAdapter(param0: com.google.gson.Gson): com.google.gson.TypeAdapter<com.mapbox.geojson.Polygon>;
        public inner(): java.util.List<com.mapbox.geojson.LineString>;
        public static fromOuterInner(param0: com.mapbox.geojson.LineString, param1: androidNative.Array<com.mapbox.geojson.LineString>): com.mapbox.geojson.Polygon;
        public static fromLngLats(param0: java.util.List<java.util.List<com.mapbox.geojson.Point>>): com.mapbox.geojson.Polygon;
        public hashCode(): number;
        public type(): string;
        public equals(param0: any): boolean;
        public coordinates(): java.util.List<java.util.List<com.mapbox.geojson.Point>>;
        public static fromOuterInner(param0: com.mapbox.geojson.LineString, param1: com.mapbox.geojson.BoundingBox, param2: androidNative.Array<com.mapbox.geojson.LineString>): com.mapbox.geojson.Polygon;
        public static fromOuterInner(param0: com.mapbox.geojson.LineString, param1: java.util.List<com.mapbox.geojson.LineString>): com.mapbox.geojson.Polygon;
        public bbox(): com.mapbox.geojson.BoundingBox;
      }
      export module Polygon {
        export class GsonTypeAdapter extends com.mapbox.geojson.BaseGeometryTypeAdapter<com.mapbox.geojson.Polygon, java.util.List<java.util.List<com.mapbox.geojson.Point>>> {
          public static class: java.lang.Class<com.mapbox.geojson.Polygon.GsonTypeAdapter>;
          public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.Polygon;
          public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.Polygon): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export module constants {
        export class GeoJsonConstants {
          public static class: java.lang.Class<com.mapbox.geojson.constants.GeoJsonConstants>;
          public static MIN_LONGITUDE: number;
          public static MAX_LONGITUDE: number;
          public static MIN_LATITUDE: number;
          public static MAX_LATITUDE: number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export module exception {
        export class GeoJsonException {
          public static class: java.lang.Class<com.mapbox.geojson.exception.GeoJsonException>;
          public constructor(param0: string);
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export module gson {
        export class BoundingBoxTypeAdapter extends com.google.gson.TypeAdapter<com.mapbox.geojson.BoundingBox> {
          public static class: java.lang.Class<com.mapbox.geojson.gson.BoundingBoxTypeAdapter>;
          public constructor();
          public read(param0: com.google.gson.stream.JsonReader): com.mapbox.geojson.BoundingBox;
          public write(param0: com.google.gson.stream.JsonWriter, param1: com.mapbox.geojson.BoundingBox): void;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export module gson {
        export abstract class GeoJsonAdapterFactory {
          public static class: java.lang.Class<com.mapbox.geojson.gson.GeoJsonAdapterFactory>;
          public static create(): com.google.gson.TypeAdapterFactory;
          public constructor();
        }
        export module GeoJsonAdapterFactory {
          export class GeoJsonAdapterFactoryIml extends com.mapbox.geojson.gson.GeoJsonAdapterFactory {
            public static class: java.lang.Class<com.mapbox.geojson.gson.GeoJsonAdapterFactory.GeoJsonAdapterFactoryIml>;
            public constructor();
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
    export module geojson {
      export module gson {
        export class GeometryGeoJson {
          public static class: java.lang.Class<com.mapbox.geojson.gson.GeometryGeoJson>;
          public static fromJson(param0: string): com.mapbox.geojson.Geometry;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export module internal {
        export module typeadapters {
          export class RuntimeTypeAdapterFactory<T> extends com.google.gson.TypeAdapterFactory {
            public static class: java.lang.Class<com.mapbox.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>>;
            public registerSubtype(param0: java.lang.Class<any>): com.mapbox.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>;
            public static of(param0: java.lang.Class<any>): com.mapbox.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>;
            public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
            public registerSubtype(param0: java.lang.Class<any>, param1: string): com.mapbox.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>;
            public static of(param0: java.lang.Class<any>, param1: string, param2: boolean): com.mapbox.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>;
            public static of(param0: java.lang.Class<any>, param1: string): com.mapbox.geojson.internal.typeadapters.RuntimeTypeAdapterFactory<any>;
          }
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export module shifter {
        export class CoordinateShifter {
          public static class: java.lang.Class<com.mapbox.geojson.shifter.CoordinateShifter>;
          /**
           * Constructs a new instance of the com.mapbox.geojson.shifter.CoordinateShifter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { shiftLonLat(param0: number, param1: number): java.util.List<java.lang.Double>; shiftLonLatAlt(param0: number, param1: number, param2: number): java.util.List<java.lang.Double>; unshiftPoint(param0: com.mapbox.geojson.Point): java.util.List<java.lang.Double>; unshiftPoint(param0: java.util.List<java.lang.Double>): java.util.List<java.lang.Double> });
          public constructor();
          public shiftLonLatAlt(param0: number, param1: number, param2: number): java.util.List<java.lang.Double>;
          public unshiftPoint(param0: com.mapbox.geojson.Point): java.util.List<java.lang.Double>;
          public shiftLonLat(param0: number, param1: number): java.util.List<java.lang.Double>;
          public unshiftPoint(param0: java.util.List<java.lang.Double>): java.util.List<java.lang.Double>;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export module shifter {
        export class CoordinateShifterManager {
          public static class: java.lang.Class<com.mapbox.geojson.shifter.CoordinateShifterManager>;
          public static setCoordinateShifter(param0: com.mapbox.geojson.shifter.CoordinateShifter): void;
          public constructor();
          public static isUsingDefaultShifter(): boolean;
          public static getCoordinateShifter(): com.mapbox.geojson.shifter.CoordinateShifter;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export module utils {
        export class GeoJsonUtils {
          public static class: java.lang.Class<com.mapbox.geojson.utils.GeoJsonUtils>;
          public constructor();
          public static trim(param0: number): number;
        }
      }
    }
  }
}

declare module com {
  export module mapbox {
    export module geojson {
      export module utils {
        export class PolylineUtils {
          public static class: java.lang.Class<com.mapbox.geojson.utils.PolylineUtils>;
          public static encode(param0: java.util.List<com.mapbox.geojson.Point>, param1: number): string;
          /** @deprecated */
          public static simplify(param0: java.util.List<com.mapbox.geojson.Point>, param1: number, param2: boolean): java.util.List<com.mapbox.geojson.Point>;
          /** @deprecated */
          public static simplify(param0: java.util.List<com.mapbox.geojson.Point>): java.util.List<com.mapbox.geojson.Point>;
          public static decode(param0: string, param1: number): java.util.List<com.mapbox.geojson.Point>;
          /** @deprecated */
          public static simplify(param0: java.util.List<com.mapbox.geojson.Point>, param1: number): java.util.List<com.mapbox.geojson.Point>;
          /** @deprecated */
          public static simplify(param0: java.util.List<com.mapbox.geojson.Point>, param1: boolean): java.util.List<com.mapbox.geojson.Point>;
        }
      }
    }
  }
}

//Generics information:
//com.mapbox.geojson.BaseCoordinatesTypeAdapter:1
//com.mapbox.geojson.BaseGeometryTypeAdapter:2
//com.mapbox.geojson.CoordinateContainer:1
//com.mapbox.geojson.internal.typeadapters.RuntimeTypeAdapterFactory:1
