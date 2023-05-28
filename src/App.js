import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Create from './pages/Create'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/tambah-komoditas'} element={<Create />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
