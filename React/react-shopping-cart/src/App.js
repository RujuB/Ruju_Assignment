import React, { useState } from 'react';
import './App.css';
//import everyflavor from 'public/images/evflav.jpeg';

const PAGE_PRODUCTS='products';
const PAGE_CART='cart';
function App() {
  const [cart,setCart]= useState([]);
  const [page,setPage]= useState(PAGE_PRODUCTS);
  const [products] = useState ([
    {
        name:'Every Flavor Beans',
        cost:'$20',
        image:'images/evflav.jpg',
    },
    {
      name:'Invisibility Cloak',
      cost:'$300',
      image:'images/invcloak.jpg',
    },
  ]);
  const addToCart=(product)=>{
    setCart([...cart,product]);
  };

  const removeFromCart = (productToRemove)=>{
    setCart(cart.filter(product => product !== productToRemove))
  }

  const navigateTo=(nextPage)=>{
    setPage(nextPage);
  }
  const renderProducts=()=>(
    <>
      <h1>Products</h1>
      <div className='products'>
      {products.map((product,idx)=>(
        <div className="product" key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt="Product not seen?"/>
        <button onClick={()=>addToCart(product)}>Add to cart</button>
      </div>
      ))}
      </div>
      </>
  );

  const renderCart=()=>(
    <>
      <h1>Cart</h1>
      <div className='products'>
      {cart.map((product,idx)=>(
        <div className="product" key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt="Product not seen?"/>
        <button onClick={()=>removeFromCart(product)}>Remove</button>
      </div>
      ))}
      </div>
      </>
  );
  
  return(
    <div className="App">
      <header>
        <button onClick={()=>navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button>
        <button onClick={()=>navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
      </div>
  );
}

export default App;
