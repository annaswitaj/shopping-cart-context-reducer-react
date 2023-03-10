import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
