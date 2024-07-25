// created by Artem
import React from 'react';
import { TamaguiProvider as Provider, createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v3'

const baseConfig = createTamagui(config);

export const TamaguiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider config={baseConfig}>
      {children}
    </Provider>
  );
};
