import { extendTheme } from 'native-base';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { Appearance } from 'react-native';

// TODO REPLACE THIS
const ui = {
  isSystemAppearance: false,
  appearance: 'dark' as AppearanceMode,
};

export const BaseTheme = extendTheme(() => 
     ({
        config: {
            useSystemColorMode: ui.isSystemAppearance,
            initialColorMode: ui.appearance,
        },
    })
);

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
  // for more information - https://reactnavigation.org/docs/themes
  const MyDefaultTheme: Theme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: BaseTheme.colors.primary.toString(),
      background: BaseTheme.colors.rose.toString(),
      card: BaseTheme.colors.rose.toString(),
      text: BaseTheme.colors.text.toString(),
      // border: Colors.grey30,
      // notification: Colors.primary,
    },
  };

  const MyDarkTheme: Theme = {
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: BaseTheme.colors.primary.toString(),
      background: BaseTheme.colors.rose.toString(),
      card: BaseTheme.colors.rose.toString(),
      text: BaseTheme.colors.text.toString(),
      // border: Colors.grey30,
      // notification: Colors.primary,
    },
  };

  const appearance = ui.isSystemAppearance
    ? Appearance.getColorScheme()
    : ui.appearance;
  switch (appearance) {
    case 'dark':
      return MyDarkTheme;
    default:
      return MyDefaultTheme;
  }
};

export const getHeaderBlurEffect = (): 'regular' | 'light' | 'dark' => 
  ui.isSystemAppearance ? 'regular' : ui.appearance;
