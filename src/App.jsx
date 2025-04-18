import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black font-sf-pro text-white'>
        <Navbar />
        <About />
      </div>
    </BrowserRouter>
  )
}

export default App 