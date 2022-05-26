interface IService {
    init: () => PVoid;
  }
  type Services = Record<string, IService>;
  
  interface IStore {
    hydrate?: () => PVoid;
  }
  type Stores = Record<string, IStore>;
  
  type PVoid = Promise<void>;
  type AnyObj = Record<string, unknown>;
  type PureFunc = () => void;
  
  type AppearanceMode = 'light' | 'dark';
  type StatusBarStyle = 'light-content' | 'dark-content' | undefined;
  type ThemeColors = {
    textColor: string;
    bgColor: string;
    bg2Color: string;
  };
  type CurrentAppearance = {
    value: AppearanceMode;
    system: boolean;
  };
  
  type Language = 'en';
  
  // SERVICES
  type AppType = 'one_screen' | 'three_tabs';
  
  // STORES
  type UIAppearance = 'System' | 'Light' | 'Dark';
  type UILanguage = 'System' | 'English';
  
  // Settings
  type AppearanceAction = {
    name: UIAppearance;
  };
  
  type LanguageAction = {
    name: UILanguage;
  };
  