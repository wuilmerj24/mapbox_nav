declare class ConditionallyScrollingTableView extends UITableView {
  static alloc(): ConditionallyScrollingTableView; // inherited from NSObject

  static appearance(): ConditionallyScrollingTableView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): ConditionallyScrollingTableView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ConditionallyScrollingTableView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): ConditionallyScrollingTableView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ConditionallyScrollingTableView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): ConditionallyScrollingTableView; // inherited from UIAppearance

  static new(): ConditionallyScrollingTableView; // inherited from NSObject
}

declare class TenClock extends UIControl {
  static alloc(): TenClock; // inherited from NSObject

  static appearance(): TenClock; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): TenClock; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TenClock; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): TenClock; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TenClock; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): TenClock; // inherited from UIAppearance

  static new(): TenClock; // inherited from NSObject

  buttonInset: number;

  centerTextColor: UIColor;

  continuous: boolean;

  delegate: TenClockDelegate;

  disabled: boolean;

  endDate: Date;

  gradientLayer: CAGradientLayer;

  headBackgroundColor: UIColor;

  headLayer: CAShapeLayer;

  headText: string;

  headTextColor: UIColor;

  readonly inset: CGRect;

  insetAmount: number;

  readonly internalInset: CGRect;

  readonly internalRadius: number;

  internalShift: number;

  majorTicksColor: UIColor;

  majorTicksEnabled: boolean;

  minorTicksColor: UIColor;

  minorTicksEnabled: boolean;

  readonly numeralInset: CGRect;

  numeralsColor: UIColor;

  numeralsLayer: CALayer;

  overallPathLayer: CALayer;

  pathLayer: CAShapeLayer;

  pathWidth: number;

  repLayer: CAReplicatorLayer;

  shouldMoveHead: boolean;

  shouldMoveTail: boolean;

  startDate: Date;

  strokeColor: UIColor;

  tailBackgroundColor: UIColor;

  tailLayer: CAShapeLayer;

  tailText: string;

  tailTextColor: UIColor;

  timeStepSize: number;

  titleColor: UIColor;

  titleGradientMask: boolean;

  readonly titleTextInset: CGRect;

  titleTextLayer: CATextLayer;

  topHeadLayer: CAShapeLayer;

  topTailLayer: CAShapeLayer;

  trackLayer: CAShapeLayer;

  valueChanged: boolean;

  disabledFormattedColor(color: UIColor): UIColor;

  update(): void;

  updateGradientLayer(): void;

  updateTrackLayerPath(): void;
}

interface TenClockDelegate {
  timesChangedStartDateEndDate?(clock: TenClock, startDate: Date, endDate: Date): void;

  timesUpdatedStartDateEndDate?(clock: TenClock, startDate: Date, endDate: Date): void;
}
declare var TenClockDelegate: {
  prototype: TenClockDelegate;
};

declare var _10ClockVersionNumber: number;

declare var _10ClockVersionString: interop.Reference<number>;
