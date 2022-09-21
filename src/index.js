import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import config from './aws-exports';

// import * as AWS from 'aws-sdk'
// import { ConfigurationOptions } from 'aws-sdk'

// const configuration: ConfigurationOptions = {
//   region: '',
//   secretAccessKey: '',
//   accessKeyId: ''
// }

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

