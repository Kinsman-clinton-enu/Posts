import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import App from './components/App';
import reducers from './reducers'; // Assuming you have your reducers imported
import 'semantic-ui-css/semantic.min.css'

const store = configureStore({reducer:reducers}, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);