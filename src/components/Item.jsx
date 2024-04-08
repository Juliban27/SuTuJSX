import { Link } from "react-router-dom";

export const Item = ({  product }) => {
    return (
        <Link to={`/item/${product.id}`}>
        <div  className="producto">
            <img src={`../img/${product.img}`} alt={`Imagen de ${product.title} `}/>
            <h2 className="tituloProducto">{product.title}</h2>
            <p className="marcaProducto">{product.marca}</p>
            <p className="descripcionProducto">{product.description}</p>
            <p className="stockProducto">{product.stock}</p>
            <span className="precioProducto">{product.precio}</span>
        </div>
        </Link>
    );
}

