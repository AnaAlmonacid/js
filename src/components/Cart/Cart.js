import { useContext } from "react"
import { cartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, addToCart, removeProduct} = useContext(cartContext);
    console.log('Cart', cart)

    return (
        <div>
            <h2>Carrito</h2>
            {cart.length === 0 ? (
            <div>
            <h2>Carrito vacio</h2>
            <Link to='/'><button>Comprar de nuevo</button></Link>
            </div>
            )
            :
            (
                <>
                {cart.map((product) =>(
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title}/> 
                    <p>{product.price}</p>
                    <p>{product.cantidad}</p>
                    <button onClick={()=> removeProduct(product.id)}>Eliminar producto</button>
                </div>
            ))}
                </>
            )}
        </div>
    )
}

export default Cart