import { Component } from 'react';

const styles ={
  cartDetails: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    borderRadius: '5px',
    width:'300px',
    right: 50
  },
  ul: {
    margin: 0,
    padding: 0
  },
  product: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 1px #aaa'
  }
}

class CartDetails extends Component{
  render(){
    const { cart } = this.props;
    console.log(cart);
    return(
      <div style={styles.cartDetails}>
        <ul style={styles.ul}>
          {cart.map(e => 
          <li key={e.name} style={styles.product}>
            <img alt={e.name} src={e.img} width='50' height='32' />
            {e.name}
            <span>{e.quantity}</span>
          </li>)}
        </ul>
      </div>
    )
  }
}

export default CartDetails;