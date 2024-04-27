import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../../App'
import AddProductPage from '../Pages/Dashboard/AddProductPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/add-product',
        element: <AddProductPage />
    },

])

export default function Navigation() {
    return (
        <RouterProvider router={router} />
    )
}
