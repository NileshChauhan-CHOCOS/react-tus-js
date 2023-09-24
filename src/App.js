import logo from './logo.svg';
import './App.css';
import ProductList from "./productlist/ProductList"
import Header from "./header/Header"
export default function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList/>
    </div>
  );
}

// Component is a function
// which returns some html
// in jsx
// function that return jsx is known as component in react
// functional component