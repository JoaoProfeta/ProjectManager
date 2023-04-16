import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { QueryClientProvider } from 'react-query';
import { queryClient } from './requisições/queryClient';




ReactDOM.createRoot(document.getElementById('root')).render(
  
      <QueryClientProvider client={queryClient}>
         <App/>
      </QueryClientProvider>
    
 
)
