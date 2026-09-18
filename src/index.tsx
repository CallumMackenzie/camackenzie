import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root') as HTMLElement;
const application = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The build contains a browser-generated SEO snapshot. React replaces that
// static markup with the interactive application when JavaScript is available.
if (container.dataset.prerendered === "true") container.replaceChildren();
createRoot(container).render(application);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
