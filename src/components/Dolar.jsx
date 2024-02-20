import { useState, useEffect } from "react";

useState
useEffect
export const Dolar = () => {
    const [dolar, setDolar] = useState([0]);

    useEffect(()=>{
        fetch("https://criptoya.com/api/dolar")
        .then(response  => response.json())
        .then (data => {
            const molde=
                <div className="cotizacionDolar">
                    <h3>Cotizacion del Dolar</h3>
                    <p>Dolar Mayorista ${data.mayorista.price}</p>
                    <p>Dolar Tarjeta ${data.tarjeta.price}</p>
                    <p>Dolar Oficial ${data.oficial.price}</p>
                </div>
            setDolar(molde)
        })
        .catch(error => console.log(error))
    }, [])



    return (
        <div>
            {dolar}
        </div>
    );
}


//<Item product={{title: 'Lentejas', description:'Muy ricas', stock:20, price:4000, marca:'Diana',img:'https://jumbocolombiaio.vtexassets.com/arquivos/ids/200370-1600-1600?v=637814146011970000&width=1600&height=1600&aspect=true'}}/>   como invocar esta variable