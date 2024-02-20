
import {useCounter} from '../hooks/useCounter'
export const ItemCount = () => {
    const {count, incerement, decrement, reset} = useCounter(1,10,1)
    const handleAddToCart  =()=>{
        console.log(`Se ha agregado al carrito ${count} veces`)
    }


    return (
        <div className='container'>
            <div className='flex items-center justify-center'>
                <button className='' onClick={decrement}>
                    -
                </button>
                <span className='text'>{count}</span>
                <button className='' onClick={incerement}>
                    +
                </button>     
                <button className='' onClick={reset}>
                    Reset
                </button>             
            </div>
            <button onClick={handleAddToCart}>
                agregar al carrito
            </button>
        </div>
    );
}


