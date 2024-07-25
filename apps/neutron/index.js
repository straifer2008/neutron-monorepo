import { registerRootComponent } from 'expo'
import { ExpoRoot } from 'expo-router'
import React from "react";

React.AnimateComponent = ({ children }) => <>{children}</>;

registerRootComponent(() => <ExpoRoot context={require.context('./app')} />);
// expo-router/entry
