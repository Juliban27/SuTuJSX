import { useCounter } from "../hooks/useCounter";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { toast } from "react-toastify"
export const ItemDetail = ({item}) => {
    const { addItem } = useCarritoContext()
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)
    const handeleAddToCart = () => {
        addItem(item, count)
        toast.success(`Producto agregado al carrito correctamente`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    }




    return (
        <div>
            <Link to={'/'}>
                <button>Cerrar</button>
            </Link>
            <img src={`../img/${item.img}`} alt={`Imagen de ${item.title} `} />
            <div className="detail">
                <h2 className="tituloProducto">{item.title}</h2>
                <p className="marcaProducto">{item.marca}</p>
                <p className="descripcionProducto">{item.description}</p>
                <p className="stockProducto">Stock: {item.stock}</p>
                <p className="precioProducto">Precio: {item.precio}</p>
            </div>
            <div className="acciones">
                <button onClick={decrement}>
                    -
                </button>
                <span>{count}</span>
                <button onClick={increment}>
                    +
                </button>
                <button onClick={reset}>
                    reset
                </button>
                <button onClick={handeleAddToCart}>
                    agregar al carrito
                </button>
            </div>
        </div>
    );
}

