import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App/App';
import store from './store/store';
import { Provider } from 'react-redux'
import BarChart from './components/BarChart/BarChart';
import Mouse from './components/Mouse/Mouse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BarChart />
    {/* <Mouse/> */}
  </Provider>
);
