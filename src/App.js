import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" exact={true} element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
