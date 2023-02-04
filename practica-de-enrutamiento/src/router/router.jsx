import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Message from '../pages/Message';
import NotFound from '../pages/NotFound';
import PersonalizedMessage from '../pages/PersonalizedMessage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Layout />
            },
            {
                path:'/home',
                element: <Home />
            },
            {
                path: '/:param',
                element: <Message />
            },
            {
                path: '/:text/:color/:bgColor',
                element: <PersonalizedMessage />
            },
            {
                path:'/',
                element: <Home />
            }
        ],
      },
    
    
]);