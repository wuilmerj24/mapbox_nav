import { OptionsInit } from '.';
import { SentryioCommon } from './common';

export class Sentryio extends SentryioCommon {
  private _debug: boolean;
  protected config: SentryOptions;

  protected printf(...args: any[]) {
    if (this.debug) {
      console.log(`sentryio - ${args}`);
    }
  }

  set debug(value: boolean) {
    this._debug = value;
  }
  init(options: OptionsInit) {
    this.config = SentryOptions.new();
    // SentrySDK.startWithOptions(this.config)
  }

  captureException(value: string) {
    throw new Error('Method not implemented.');
  }

  captureMessage(value: string) {
    throw new Error('Method not implemented.');
  }
}
