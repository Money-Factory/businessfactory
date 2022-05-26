import { extendTheme } from 'native-base';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { Appearance } from 'react-native';

// TODO REPLACE THIS
const ui = {
  isSystemAppearance: false,
  appearance: 'dark' as AppearanceMode,
};

export const BaseTheme = extendTheme({
    config: {
        useSystemColorMode: ui.isSystemAppearance,
        initialColorMode: ui.appearance,
    },
});

export const getThemeStatusBarStyle = (): StatusBarStyle => {
  const appearance = ui.isSystemAppearance
    ? Appearance.getColorScheme()
    : ui.appearance;
  switch (appearance) {
    case 'light':
      return 'dark-content';
    default:
      return 'light-content';
  }
};

export const getThemeStatusBarBGColor = (): string => BaseTheme.colors.rose.toString();

export const getNavigationTheme = (): Theme => {
  const appearance = ui.isSystemAppearance
    ? Appearance.getColorScheme()
    : ui.appearance;
  switch (appearance) {
    case 'dark':
      return DarkTheme;
    default:
      return DefaultTheme;
  }
};

export const getHeaderBlurEffect = (): 'regular' | 'light' | 'dark' => 
  ui.isSystemAppearance ? 'regular' : ui.appearance;
