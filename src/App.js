import Nav from './components/Nav';
import Footer from './components/footer';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home';
import Books from './pages/Books';
import {books} from './components/data'
import BookInfo from './pages/BookInfo.jsx';
import Cart from './pages/Cart';
import React, { useEffect, useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);
  
  function addToCart(book){
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity){
setCart(
  cart.map((item) => 
   item.id === book.id
  ? {
      ...item,
      quantity: +quantity,
    }
  : item
  
)
);
  }  

  function removeItem(item){
console.log("removeItem", item)
setCart(cart.filter(book => book.id !== item.id))
  }
  
  function numberOfItems(){
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }


  useEffect(() => {
    console.log(cart);
  }, [cart])
  
  return (
    <Router> 
    <div className="App">
<Nav numberOfItems={numberOfItems()} />
<Home />
<Route path='/home' exact component={Home}  />
<Route path='/Books' exact render={()=> <Books books ={books} />} />
<Route path='/Books/:id' exact render={()=> <BookInfo books ={books} addToCart={addToCart} cart={cart}/>} />
<Route path='/cart'  render={()=> <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />

<Footer /> 
    </div>
    </Router>
  );
}

export default App;
