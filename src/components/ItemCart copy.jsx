import { useCarritoContext } from "../context/CartContext";
import { useCounter } from "../hooks/useCounter.js";
export const ItemCart = ({product}) => {
    const {removeItem, updateProduct} = useCarritoContext()
    const {count, increment, decrement} = useCounter(product.quantity, product.stock, 1)
    return (
        <div>
            <div className="Producto-Item">
                <img src={product.img} alt={` ${product.img}`} />
            </div>
            <div>
                <h3>{product.title} {product.marca}</h3>
                <p>{product.price}</p>
            </div>
            <div className="flex items-center">
                <button className="restar" onClick={async () => {
                    updateProduct(product.id, count - 1)
                    decrement()
                }}>
                    -
                </button>
                <span>{count}</span>
                <button className="sumar" onClick={() => {
                    updateProduct(product.id, count + 1)
                    increment()
                }}>
                    +
                </button>
            </div>
            <div className="subtotal-div">
                <p className="subtotal">Subtotal: ${product.price * count}</p>
            </div>
            <div>
                <button onClick={()=> removeItem(product.id)} >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

