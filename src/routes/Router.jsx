import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from '../components/Root/Root';
import ItemListContainer from "../containers/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../containers/ItemDetailContainer/ItemDetailContainer"

const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <h1>error</h1>,
            children: [
                {
                    path: "/",
                    element: <ItemListContainer/>
                },
                {
                    path: "/productos",
                    element: <ItemListContainer/>
                },
                {
                    path: "/category/:category",
                    element: <ItemListContainer/>
                },
                {
                    path: "/detail/:itemId",
                    element: <ItemDetailContainer/>
                },
                {
                    path: "/contacto",
                    element: <ItemListContainer/>
                },
                {
                    path: "/sobrenosotros",
                    element: <ItemListContainer/>
                }
            ],
        },
    ]);

export const Router = () => {
    return <RouterProvider router={router} />
}

export default Router