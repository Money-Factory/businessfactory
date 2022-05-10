import { makeAutoObservable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';
import Nav from '../services/navigation';

export default class UIStore implements IStore {
  isSystemAppearance = true;

  appearance: AppearanceMode = 'dark';

  setAppearanceMode = (v: UIAppearance): void => {
    this.isSystemAppearance = v === 'System';
    this.appearance = appearanceFromUIToInternal(v);

    Nav.restart();
  };

  get appearanceName(): UIAppearance {
    return this.isSystemAppearance
      ? 'System'
      : appearanceFromInternalToUI(this.appearance);
  }

  isSystemLanguage = true;

  language: Language = 'en';

  setLanguage = (v: UILanguage): void => {
    this.isSystemLanguage = v === 'System';
    this.language = languageFromUIToInternal(v);

    Nav.restart();
  };

  get languageName(): UILanguage {
    return this.isSystemLanguage
      ? 'System'
      : languageFromInternalToUI(this.language);
  }

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: UIStore.name,
      properties: [
        'isSystemAppearance',
        'appearance',
        'isSystemLanguage',
        'language',
      ],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}

const appearanceFromInternalToUI = (v: AppearanceMode): UIAppearance =>
  v === 'light' ? 'Light' : 'Dark';

const appearanceFromUIToInternal = (v: UIAppearance): AppearanceMode =>
  v === 'Light' ? 'light' : 'dark';

const languageFromInternalToUI = (v: Language): UILanguage => {
  switch (v) {
    default: {
      return 'English';
    }
  }
};

const languageFromUIToInternal = (v: UILanguage): Language => {
  switch (v) {
    default: {
      return 'en';
    }
  }
};
