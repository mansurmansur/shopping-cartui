import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={App} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>

        <Link className='links' to='/Cart'>
          Carts
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
