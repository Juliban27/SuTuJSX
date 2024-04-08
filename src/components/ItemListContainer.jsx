import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../firebase/firebase";


export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const {cid} =useParams()


useEffect(()=>{
    //fetch('../data/productos.json')
        //.then(response => response.json())
        getProducts()
        .then(prods => {
            const productos = prods.filter(prod => prod.stock > 0)
            if(cid){
                const productosFiltrados = productos.filter(prod => prod.category == cid)
                setProducts(productosFiltrados)
            }else{
                setProducts(productos)
            }
        })
        .catch((error)=>console.log("Error: "+ error));
    }, [cid])



    return (
    <div className="greeting-container">
        <ItemList products={products} plantilla="Item"/>
    </div>
    );
}
