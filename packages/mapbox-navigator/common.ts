import { ContentView } from '@nativescript/core';

export class MapboxUtil {
  public static debug: boolean = false;
}

export const CLog = (...args: any[]) => {
  if (MapboxUtil.debug) {
    console.log('mapboxnav ---', args);
  }
};

export class MapboxNavigatorCommon extends ContentView {
  public set debug(value: boolean) {
    MapboxUtil.debug = value;
  }
}
