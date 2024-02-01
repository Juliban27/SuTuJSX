import {useState} from 'react';

export const ItemCount = () => {

    const [count, setCount] = useState(1)

    const  handleIncrement= ()=> {
        setCount(count +1)
    }

    const handleDecrement = ()=>{
        if(count>1)
        setCount(count -1)
    }

    const handleAddToCart  =()=>{
        console.log(`Se ha agregado al carrito ${count} veces`)
    }


    return (
        <div className='container'>
            <div className='flex items-center justify-center'>
                <button className='' onClick={handleDecrement}>
                    -
                </button>
                <span className='text'>{count}</span>
                <button className='' onClick={handleIncrement}>
                    +
                </button>                  
            </div>
            <button onClick={handleAddToCart}>
                agregar al carrito
            </button>
        </div>
    );
}


