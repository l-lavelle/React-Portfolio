import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import About from "./components/AboutMe/About";
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: '/Portfolio',
          element: <Portfolio />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );