

export const Item = ({  product }) => {
    return (
        <div  className="producto">
            <img src={`../img/${product.img}`} alt={`Imagen de ${product.title} `}/>
            <h2 className="tituloProducto">{product.title}</h2>
            <p className="marcaProducto">{product.marca}</p>
            <p className="descripcionProducto">{product.description}</p>
            <p className="stockProducto">{product.stock}</p>
            <div className="precioAgregar">
                <span className="precioProducto">{product.price}</span>
                <button className="agregarCarritoBoton">
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

