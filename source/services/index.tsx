import React from 'react';

import OnStart from './onStart';
import Nav from './navigation';
import Translate from './translate';

export const services = {
  t: new Translate(), // should be first
  nav: new Nav(),
  onStart: new OnStart(),
};
type ContextServices = typeof services;

const servicesContext = React.createContext<ContextServices>(services);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ServicesProvider = ({ children }: any) => (
  <servicesContext.Provider value={services}>
    {children}
  </servicesContext.Provider>
);

export const useServices = (): ContextServices =>
  React.useContext(servicesContext);

export const initServices = async (): PVoid => {
  const results: PVoid[] = [];
  Object.keys(services).forEach((key: string) => {
    if (Object.prototype.hasOwnProperty.call(services, key)) {
      const s = (services as Services)[key];

      if (s.init) {
        results.push(s.init());
      }
    }
  });

  await Promise.all(results);
};
