import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


ReactDOM.render((
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
), document.getElementById('root'));

ReactDOM.render((
    <div>
    <ToastContainer
      newestOnTop={false}
      rtl={false}
      draggable
      pauseOnHover
      pauseOnVisibilityChange={false}
      closeOnClick
    />
    </div>
), document.getElementById('toastr'));
