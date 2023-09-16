declare class NSCSwiftTimeRangerExt extends NSObject {
  static alloc(): NSCSwiftTimeRangerExt; // inherited from NSObject

  static new(): NSCSwiftTimeRangerExt; // inherited from NSObject

  dateFormatter: NSDateFormatter;

  updateTextsStartPointValueEndPointValue(sender: any, startPointValue: number, endPointValue: number): NSDictionary<string, any>;
}
