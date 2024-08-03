import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers'; // Assuming you have your reducers imported

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    </React.StrictMode>
);