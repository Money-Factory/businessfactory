import React from 'react';
import { reloadAsync } from 'expo-updates';

import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import { ModalProps, ScreenProps } from '../../screens';

export default class Nav implements IService {
  private initialized = false;

  navContainer: React.RefObject<NavigationContainerRef<ScreenProps>> = React.createRef();

  route: string | undefined;

  init = async (): PVoid => {
    if (!this.initialized) {
      this.initialized = true;
    }
  };

  // on init methods
  onReady = (): void => {
    this.route = this.navContainer.current?.getCurrentRoute()?.name;
  };

  onStateChange = (): void => {
    const prevName = this.route;
    const currentName = this.navContainer.current?.getCurrentRoute()?.name;

    if (!!prevName && !!currentName) {
      const params = { to: currentName, from: prevName };

      // send some statistics
      // facebook.event('ScreenOpen', params);
      // yandex.event('ScreenOpen', params);
      // eslint-disable-next-line no-console
      console.log('onStateChange:', JSON.stringify(params, null, 2));
    }

    this.route = currentName;
  };

  // Navigation methods
  push = <T extends keyof ScreenProps>(
    name: T,
    passProps?: ScreenProps[T]
  ): void => {
    this.navContainer.current?.dispatch(StackActions.push(name, passProps));
  };

  pop = (): void => {
    this.navContainer.current?.goBack();
  };

  show = <T extends keyof ModalProps>(
    name: T,
    passProps?: ScreenProps[T]
  ): void => {
    this.navigate(name, passProps);
  };

  static restart = async (): PVoid => {
    await reloadAsync();
  };

  private navigate = <T extends keyof ScreenProps>(
    name: T,
    passProps?: ScreenProps[T]
  ): void => {
    this.navContainer.current?.dispatch(
      CommonActions.navigate({
        name,
        params: passProps,
      })
    );
  };
}
