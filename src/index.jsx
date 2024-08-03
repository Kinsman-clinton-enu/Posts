import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers'; // Assuming you have your reducers imported
import 'semantic-ui-css/semantic.min.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={configureStore({reducer:reducers})}>
            <App />
        </Provider>
    </React.StrictMode>
);