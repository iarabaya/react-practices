import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import CartDetails from './CartDetails';


const styles = {
  cart: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  bubble:{
    position: 'relative',
    left: 12,
    top: 20
  }
}

class Cart extends Component{
  render(){
    const { cart, cartVisibility, showCart } = this.props;
    const total = cart.reduce((acc, el) => acc + el.quantity,0);

    return (
      <div>
        <span style={styles.bubble}>
          {total !== 0 ? <BubbleAlert value={total}/> : null}
        </span>
        <button onClick={showCart} style={styles.cart}>
          Cart
        </button>
        { cartVisibility ? <CartDetails cart={cart}/> : null}
        
      </div>     
    )
  }
}

export default Cart;