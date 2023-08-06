import { EDiagnosticLevels } from '@arepa/sentryio/enums/diagnostic_levels';
import { DemoSharedBase } from '../utils';
import { Sentryio, OptionsInit } from '@arepa/sentryio';
import { EInstrumenter } from '@arepa/sentryio/enums/instrumenters';
import { EMaxRequestBodySizeNS } from '@arepa/sentryio/enums/maxRequestBodySize';

export class DemoSharedSentryio extends DemoSharedBase {
  public sentryio: Sentryio;
  constructor() {
    super();
    this.sentryio = new Sentryio();
  }
  init() {
    const options: OptionsInit = {
      // dsn: "https://93b1e0fb34d141a281b49bad2ffc683c@o103382.ingest.sentry.io/6316201",
      // dsn: "https://9899919a0fe5690cabd53523ce2d2b23@o103382.ingest.sentry.io/4505643678629888",
      // dsn: "https://18f596e0a783474d9daff17415905ccd@o156402.ingest.sentry.io/6556280",
      dsn: 'https://70ab2bdb36aef455ea6b39ad42190b89@o156402.ingest.sentry.io/4505645099319296',
      debug: true,
      logger: true,
      diagnosticLevel: EDiagnosticLevels.DEBUG,
    };
    this.sentryio.init(options);
  }

  captureException() {
    // try {
    //   throw new Error('error');
    // } catch (error) {
    //   this.sentryio.captureException(error);
    // }
    this.sentryio.captureException('Es un error de prueba');
  }

  captureMessage() {
    this.sentryio.captureMessage('sadasdas');
  }
}
