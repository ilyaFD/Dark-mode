import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from './theme/theme';
import './theme/theme.scss';

import './css/base.scss';
import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();

const rootElement = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>,
    rootElement,
);
