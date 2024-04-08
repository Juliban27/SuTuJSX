import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from "./ItemList";

export const Cart = () => {
    const {carrito, totalPrice, emptyCart} = useCarritoContext()

    return (
        <>
        {
            carrito.lenght === 0? 
            <>
            <h1>Carrito vacio</h1>
            
            <button><Link to={'/'}>Volver al inicio</Link></button>
            
            </>
            :
            <div>
            {<ItemList products={carrito} plantilla="ItemCart" />}
            <p>Resumen de la compra: ${totalPrice()}</p>
            <button onClick={emptyCart}>Vaciar Carrito</button>
            <button><Link to={'/'}>Continuar comprando</Link></button>
            <button><Link to={'/checkout'}>Finalizar Compra</Link></button>
            </div>
        }  
        </>
    );
}


