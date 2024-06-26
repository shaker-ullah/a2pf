import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import ListedBooks from './components/ListedBooks/ListedBooks'
import PagesToRead from './components/PagesToRead/PagesToRead'
import App from './App'
import BookDetails from './components/BookDetails/BookDetails'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReadBook from './components/ReadBook/ReadBook'
import Wishes from './components/Wishes/Wishes'






const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../public/book.json')
      },

      {
        path: '/booklist',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBook></ReadBook>
          },
          {
            path: 'wishes',
            element: <Wishes></Wishes>
          }
        ]
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../public/book.json')
      },
      {
        path: '/readpage',
        element: <PagesToRead></PagesToRead>
      }

    ]
  }


])












ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer/>
  </React.StrictMode>,
)
