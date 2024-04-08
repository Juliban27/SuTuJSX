import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCarritoContext } from '../context/CartContext';
import { Link } from "react-router-dom"
export const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
            
                <Link to={'/cart'}>
                    <button>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>{getItemQuantity()}</span>
                    </button>
                </Link>
            
    );
}

