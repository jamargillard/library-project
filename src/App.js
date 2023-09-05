import Nav from './components/Nav';
import Footer from './components/footer';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home';
import Books from './pages/Books';
import {books} from './components/data'
import BookInfo from './pages/BookInfo.jsx';
import Cart from './pages/Cart';

function App() {
  return (
    <Router> 
    <div className="App">
<Nav />
<Route path='/home' exact component={Home} />
<Route path='/Books' exact render={()=> <Books books ={books} />} />
<Route path='/Books/:id' exact render={()=> <BookInfo books ={books} />} />
<Route path='/cart'  render={()=> <Cart books ={books} />} />

<Footer /> 
    </div>
    </Router>
  );
}

export default App;
