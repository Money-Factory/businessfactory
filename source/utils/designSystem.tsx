import { extendTheme } from 'native-base';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { Appearance } from 'react-native';

// TODO REPLACE THIS
const ui = {
  isSystemAppearance: true,
  appearance: 'dark' as AppearanceMode,
};

export const BaseTheme = extendTheme(() => {
    // const { ui } = stores;
    const theme = ui.isSystemAppearance ? 
        Appearance.getColorScheme() :
        ui.appearance;

    return {
        config: {
            useSystemColorMode: false,
            initialColorMode: theme,
        },
    };
});

export const getThemeStatusBarStyle = (
  ca?: CurrentAppearance
): StatusBarStyle => {
  // const { ui } = stores;

  const current: CurrentAppearance = ca ?? {
    value: ui.appearance,
    system: ui.isSystemAppearance,
  };

  const appearance = current.system
    ? Appearance.getColorScheme()
    : current.value;
  switch (appearance) {
    case 'dark':
      return 'light-content';
    default:
      return 'dark-content';
  }
};

export const getThemeStatusBarBGColor = (): string => BaseTheme.colors.rose.toString();

export const getNavigationTheme = (ca?: CurrentAppearance): Theme => {
  // const { ui } = stores;

  const current: CurrentAppearance = ca ?? {
    value: ui.appearance,
    system: ui.isSystemAppearance,
  };

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

  const appearance = current.system
    ? Appearance.getColorScheme()
    : current.value;
  switch (appearance) {
    case 'dark':
      return MyDarkTheme;
    case 'light':
      return MyDefaultTheme;
    default:
      return DefaultTheme;
  }
};

export const getHeaderBlurEffect = (
  ca?: CurrentAppearance
): 'regular' | 'light' | 'dark' => {
  // const { ui } = stores;

  const current: CurrentAppearance = ca ?? {
    value: ui.appearance,
    system: ui.isSystemAppearance,
  };

  return current.system ? 'regular' : current.value;
};
