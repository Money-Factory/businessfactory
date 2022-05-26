export default class OnStart implements IService {
  private initialized = false;

  init = async (): PVoid => {
    if (!this.initialized) {
      this.initialized = true;
    }
  };
}
