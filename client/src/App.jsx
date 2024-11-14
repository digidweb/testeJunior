import "./App.css";
import ProductsList from "./features/products/ProductsList";

function App() {
  return (
    <>
      <div className="app">
        <h1>React</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <ProductsList />
      </div>
    </>
  );
}

export default App;
