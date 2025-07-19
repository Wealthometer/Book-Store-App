import { Toaster } from 'react-hot-toast'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import CategoryShop from './pages/CategoryShop'
import ProductsDetails from './pages/ProductsDetails'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <main>
      <Header />
      <Toaster position='bottom-right' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/category' element={<CategoryShop />} />
        <Route path='/shop/category/:id' element={<ProductsDetails />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App