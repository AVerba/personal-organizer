import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/base.css';

import { App } from 'App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import ContextWrapper from './context/ContextWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/personal-organizer/">
        <ContextWrapper>
          <App />
        </ContextWrapper>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
