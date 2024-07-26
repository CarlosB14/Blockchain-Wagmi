import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ModalProvider } from './provider/Web3ModalProvider.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Web3ModalProvider>
        <App />
      </Web3ModalProvider>
    </ChakraProvider>
  </React.StrictMode>
);