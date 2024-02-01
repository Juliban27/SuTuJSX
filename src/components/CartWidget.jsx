import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    const [count, setCount] = useState(0)

    const handleAddToCart  =()=>{
        setCount(count +1)
        console.log(`Se ha agregado al carrito ${count} veces`)

    }
    return (
        <div>
    <FontAwesomeIcon icon={faCartShopping} />
            <button onClick={handleAddToCart}>
            <span>{count}</span>
            </button>
        </div>
    );
}

