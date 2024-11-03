import React from 'react'
import { BrowserRouter as Router ,Routes,Route,Switch,Link} from 'react-router-dom'
import ComA from './components/ComA'
import ComB from './components/ComB'



const App = () => {
  return (
    <>
    <Router> 
    <h1>jbnksfgnoxknbgldkgneakl</h1>
    <nav>
    <button> <Link to="/">Home</Link> </button>
    <button> <Link to="/about">About</Link> </button>
    <button> <Link to="/contact">Cantact us</Link> </button>
    </nav>
    <Routes>
    <Route path='/' element={<ComA/>}/>
    <Route path='/about' element={<ComB/>}/>
    <Route path='*' element={<ComB/>}/>
    </Routes> 
    </Router>
    <footer><h1>this is footer</h1></footer>
    </>
  )
}

export default App