
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import App from './App';
import Header from './ui/Header';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Category from './Pages/Category';
import NotFound from './Pages/NotFound';
import Orders from './Pages/Orders';
import Cancel from './Pages/Cancel';
import Profile from './Pages/Profile';
import Success from './Pages/Success';
import Favorite from './Pages/Favorite';


const LayOut = () => {
  return (
    <div>
      <Header/>
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "category",
        element: <Category />,
      },

      {
        path: "order",
        element: <Orders />,
      },
      {
        path: "favorite",
        element: <Favorite/>,
      },
      {
        path: "cancel",
        element: <Cancel />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
