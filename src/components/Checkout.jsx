import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { createOrdenCompra, getProduct, updateProduct } from "../firebase/firebase";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate()
    const {carrito, totalPrice, emptyCart} = useCarritoContext()
    const  handleSubmit = (e) => {
        e.preventDefeault()
        const datForm = new FormData(formRef.current) //Paso un formulario HTML a un objeto iterator
        const cliente = Object.fromEntries(datForm)
        

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if(prodBDD.stock >= prodCarrito.quantity){
                    prodBDD.stock -= prodCarrito.quantity;
                    updateProduct(prodBDD.id ,prodBDD)
                }else {
                    toast.info(`El producto con el nombre ${getProduct.marca} no puede continuar con la compra ya que no posee stock suficiente`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prodBDD.id) //Elimino el producto del carrito al tener stock suficiente
                }
            })
        })

        const aux2 = aux.map(prod => ({id: prod.id, quantity:prod.quantity, price:prod.price}))
        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar envio`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            })

    }
    return (
        <>
        {
            carrito.length === 0 ?
            <>
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link to={"/"}>
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                                Volver al inicio
                            </button>
                        </Link>

            </>
            :
        <div className="Checkout">
            
            <form action="" ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor="">Nombre:</label>
                <input type="text" name="" id="" />
                <label htmlFor=""> Apellido:</label>
                <input type="text" name="" id="" />
                <label htmlFor="">DNI:</label>
                <input type="number" name="" id="" />
                <label htmlFor="">Email:</label>
                <input type="email" name="" id="" />
                <label htmlFor="">Telefono:</label>
                <input type="number" name="" id="" />
                <label htmlFor="">Direccion:</label>
                <input type="number" name="" id="" />
                <button type="submit">Finalizar</button>
            </form>
        </div>
        }
        </>
    );
}


