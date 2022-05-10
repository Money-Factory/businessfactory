import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import en from './translations';
import { stores } from '../../stores';

export default class Translate implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      setup();

      this.inited = true;
    }
  };

  do = i18n.t;
}

const setup = (): void => {
  const { ui } = stores;
  const lng = Localization.locale;

  i18n.translations = { en };
  i18n.fallbacks = true;
  if (ui.isSystemLanguage) {
    i18n.locale = lng;
  } else {
    i18n.locale = ui.language;
  }
};
