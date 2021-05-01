import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
const GlobalStyle = createGlobalStyle`
html,body{
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
}
`;
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			<GlobalStyle />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
