import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import './index.css';
import Cardapio from './pages/Cardapio';


const root = ReactDOM.createRoot(
  document.getElementById('coffe') as HTMLElement
);
root.render(
 <Cardapio />
);