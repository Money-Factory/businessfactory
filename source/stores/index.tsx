import React from 'react';

import './_hydration';
import UIStore from './ui';

export const stores = {
  ui: new UIStore(),
};
type ContextStores = typeof stores;

const StoreContext = React.createContext<ContextStores>(stores);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StoresProvider = ({ children }: any) => (
  <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
);

export const useStores = (): ContextStores => React.useContext(StoreContext);

export const hydrateStores = async (): PVoid => {
  const results: PVoid[] = [];
  Object.keys(stores).forEach((key: string) => {
    if (Object.prototype.hasOwnProperty.call(stores, key)) {
      const s = (stores as Stores)[key];

      if (s.hydrate) {
        results.push(s.hydrate());
      }
    }
  });

  await Promise.all(results);
};
