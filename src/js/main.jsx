// import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';

const body = createRoot(document.querySelector("body"));
body.render(<App/>);