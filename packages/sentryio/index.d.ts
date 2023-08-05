import { SentryioCommon } from './common';
import { OptionsInit } from './interfaces/options.init';
export * from './interfaces/options.init';

export declare class Sentryio extends SentryioCommon implements SentryioCommon {
  constructor(options?: OptionsInit);
  init(options: OptionsInit);
  captureException(value: any);
  // captureEvent(value: any) => void);
  captureMessage(value: string);
}
