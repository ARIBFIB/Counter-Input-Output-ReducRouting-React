import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';
import { Counter } from './features/counter/Counter.jsx';
import { Input } from './features/counterInput/Input.jsx';
import { Output } from './features/OutputValue/Output.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/counter',
        element: <Counter />,
      },
      {
        path: '/input',
        element: <Input />,
      },
      {
        path: '/output',
        element: <Output />,
      },
      
      {
        path: '*',
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
