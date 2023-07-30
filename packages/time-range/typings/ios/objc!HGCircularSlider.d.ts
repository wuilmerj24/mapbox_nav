declare class CircularSlider extends UIControl {
  static alloc(): CircularSlider; // inherited from NSObject

  static appearance(): CircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): CircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): CircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): CircularSlider; // inherited from UIAppearance

  static new(): CircularSlider; // inherited from NSObject

  backtrackLineWidth: number;

  diskColor: UIColor;

  diskFillColor: UIColor;

  endThumbStrokeColor: UIColor;

  endThumbStrokeHighlightedColor: UIColor;

  endThumbTintColor: UIColor;

  lineWidth: number;

  maximumValue: number;

  minimumValue: number;

  numberOfRounds: number;

  stopThumbAtMinMax: boolean;

  thumbLineWidth: number;

  thumbOffset: number;

  thumbRadius: number;

  trackColor: UIColor;

  trackFillColor: UIColor;

  trackShadowColor: UIColor;

  trackShadowOffset: CGPoint;
}

declare var HGCircularSliderVersionNumber: number;

declare var HGCircularSliderVersionString: interop.Reference<number>;

declare class MidPointCircularSlider extends RangeCircularSlider {
  static alloc(): MidPointCircularSlider; // inherited from NSObject

  static appearance(): MidPointCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): MidPointCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MidPointCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MidPointCircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MidPointCircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): MidPointCircularSlider; // inherited from UIAppearance

  static new(): MidPointCircularSlider; // inherited from NSObject

  midThumbStrokeColor: UIColor;

  midThumbStrokeHighlightedColor: UIColor;

  midThumbTintColor: UIColor;
}

declare class RangeCircularSlider extends CircularSlider {
  static alloc(): RangeCircularSlider; // inherited from NSObject

  static appearance(): RangeCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): RangeCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RangeCircularSlider; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): RangeCircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RangeCircularSlider; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): RangeCircularSlider; // inherited from UIAppearance

  static new(): RangeCircularSlider; // inherited from NSObject

  distance: number;

  startThumbStrokeColor: UIColor;

  startThumbStrokeHighlightedColor: UIColor;

  startThumbTintColor: UIColor;
}
