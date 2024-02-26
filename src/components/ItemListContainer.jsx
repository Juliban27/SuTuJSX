import { useEffect, useRef, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const {cid} =useParams()


useEffect(()=>{
    fetch('../data/productos.json')
        .then(response => response.json())
        .then(prods => {
            if(cid){
                const productos = prods.filter(prod => prod.tipo == cid)
                setProducts(productos)
            }else{
                setProducts(prods)
            }
        })
        .catch((error)=>console.log("Error: "+ error));
    }, [cid])



    return (
    <div className="greeting-container">
        <ItemList products={products}/>
    </div>
    );
}
