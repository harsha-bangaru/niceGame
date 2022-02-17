import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const express = require('express');const app = express();const http = require('http');const server = http.createServer(app);
app.get('/', (req, res) => {  res.send('<h1>Hello world</h1>');});
server.listen(3000, () => {  console.log('listening on *:3000');});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
