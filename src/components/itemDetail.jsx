

export const ItemDetail = ({item}) => {
    
    return (
        <div>
            <img src={`../img/${item.img}`} alt={`Imagen de ${item.title} `} />
            <div className="detail">
                <h2 className="tituloProducto">{item.title}</h2>
                <p className="marcaProducto">{item.marca}</p>
                <p className="descripcionProducto">{item.description}</p>
                <p className="stockProducto">Stock: {item.stock}</p>
                <p className="precioProducto">Precio: {item.precio}</p>
            </div>
        </div>
    );
}

