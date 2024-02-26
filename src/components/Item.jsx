import { Link } from "react-router-dom";

export const Item = ({  product }) => {
    return (
        <div  className="producto">
            <img src={`../img/${product.img}`} alt={`Imagen de ${product.title} `}/>
            <h2 className="tituloProducto">{product.title}</h2>
            <p className="marcaProducto">{product.marca}</p>
            <p className="descripcionProducto">{product.description}</p>
            <p className="stockProducto">{product.stock}</p>
            <div className="precioAgregar">
                <span className="precioProducto">{product.precio}</span>
                <Link to={`/item/${product.id}`}>
                <button className="agregarCarritoBoton">
                    Ver Producto
                </button>
                </Link>
            </div>
        </div>
    );
}

