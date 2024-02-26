import { useRef } from "react";

export const Checkout = () => {
    const formRef = useRef()

    const  handleSubmit = (e) => {
        e.preventDefeault()
        const datForm = new FormData(formRef.current) //Paso un formulario HTML a un objeto iterator
        console.log(datForm)
        const data = Object.fromEntries(datForm) //Paso un objeto iterator a un objeto simple
    }
    
    return (
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
    );
}


