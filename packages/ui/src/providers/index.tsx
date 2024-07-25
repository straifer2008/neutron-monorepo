import React from 'react'
import { TamaguiProvider } from "./tamagui.provider";

const compose = (providers: React.FC<{ children: React.ReactNode }>[]) =>
  providers.reduce((Prev, Curr) =>
    ({ children }) => Prev ?
      (<Prev><Curr>{children}</Curr></Prev>) :
      (<Curr>{children}</Curr>)
  )

const Providers = compose([TamaguiProvider]);

export function Provider({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
