import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot dari react-dom/client
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorker.unregister();
