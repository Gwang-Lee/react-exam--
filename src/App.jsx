import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LikeButton from './components/LikeButton'
import LiveInput from './components/LiveInput'
import Page from './components/Page'
import Header from './layouts/Header'
import Notice from './pages/Notice'
import ProductList from './pages/ProductList'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </main>

      <hr style={{ margin: '50px 0', border: '1px dashed #ccc' }} />

      <div style={{ padding: '0 24px', textAlign: 'center' }}>
        <h2>EXAM</h2>
        <h3> 문제 1-1 </h3>
        <LikeButton />
        <h3> 문제 1-2 </h3>
        <LiveInput />
        <h3> 문제 1-3 </h3>
        <Page />
      </div>
    </BrowserRouter>
  )
}

export default App