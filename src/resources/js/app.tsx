import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// Retrieve the root element
const rootElement = document.getElementById('app');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
