import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import Cadastro from './pages/Cadastrar-evento.jsx';
import Detalhes from './pages/detalhes-evento.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cadastrar-evento', element: <Cadastro /> },
  { path: '/detalhes-evento/:id', element: <Detalhes /> }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
