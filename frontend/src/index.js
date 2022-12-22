import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <ChakraProvider>
          <ColorModeScript />
          <App />
        </ChakraProvider>
      </Provider>
    </Router>
  </StrictMode>
);
