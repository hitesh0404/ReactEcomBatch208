import logo from './logo.svg';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import ProductCategory from './components/ProductCategory';
import Register from './components/Register';
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
          element: <Register />
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

export default App;
