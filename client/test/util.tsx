import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
