import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

document.oncontextmenu= new Function( "return false" );
document.ondblclick= new Function( "return false" );
document.onselectstart= new Function( "return false" );
document.onkeydown= new Function( "return false" );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
