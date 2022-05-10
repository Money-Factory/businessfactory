import * as Font from 'expo-font';
import { IconComponent } from '../components/icon';

export default class OnStart implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      await loadAssets();

      this.inited = true;
    }
  };
}

const loadAssets = async () => {
  const fonts = [IconComponent.font];

  const fontAssets = fonts.map((font) => Font.loadAsync(font));

  await Promise.all([...fontAssets]);
};
