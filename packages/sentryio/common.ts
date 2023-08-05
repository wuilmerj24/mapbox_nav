import { OptionsInit } from './interfaces/options.init';
export abstract class SentryioCommon {
  abstract init(options: OptionsInit);
  protected abstract printf(...args: any[]);
  abstract captureException(value: any);
  // abstract captureEvent(value:any);
  abstract captureMessage(value: string);
}
