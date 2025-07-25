import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import ProductCategory from './components/ProductCategory';
import Register from './components/Register';
import Counter from './components/Counter';
import CounterNew from './components/CounterNew';
import UseOfMemo from './components/UseOfMemo';
import Example from './components/Example';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <NavBar />
          <Link to={"product-category"}>Product Category</Link>
          <Footer />
        </>
      ),
      children: [
        {
          path: "product-category",
          element: <ProductCategory />,
        },
        {
          path: "user",
          element: <h1>Hello User Profile Page</h1>,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/products",
      element: (
        <>
          <NavBar />
          <Products link="https://dummyjson.com/products/" />
          <Footer />
        </>
      ),
    },
    {
      path: "/products/category/:categoryName",
      element: (
        <>
          <NavBar />
          <Products link="https://dummyjson.com/products/category/" />
          <Footer />
        </>
      ),
    },
    {
      path: "/counter",
      element: (
        <>
          <NavBar />
          <ErrorBoundary > 
          <Counter />
          </ErrorBoundary>
          <Footer />
        </>
      ),
    },
    {
      path: "/counter-new",
      element: (
        <>
          <NavBar />
          <CounterNew />
          <Footer />
        </>
      ),
    },
    {
      path: "/memo",
      element: (
        <>
          <NavBar />
          <UseOfMemo />
          <Footer />
        </>
      ),
    },
    {
      path: "/example",
      element: (
        <>
          <NavBar />
          <Example />
          <Footer />
        </>
      ),
    },

    {
      path: "*",
      element: <>404 not Found</>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App ;
