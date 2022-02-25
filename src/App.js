
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Checkout from './component/Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './component/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={(
            <>
              <Login />
            </>
          )} />
          <Route path="/checkout" element={(
            <>
              <Header />
              <Checkout />
            </>
          )} />
          <Route path="/" element={(
            <>
              <Header />
              <Home />
            </>
          )} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
