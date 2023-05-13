import React, { useState, useEffect } from 'react';
import Card from './Card';
import loader from './pizza-loader.gif'

const CardList = ({ products, addToCart }) => { /**CARDLARNI LIST QILISH VA LOADER */
    const [delay, setDelay] = useState(true); //default holatda loader ko'rinadi

    useEffect(() => {
        setDelay(true);
        setTimeout(() => {
            setDelay(false) //5s sekundan keyin loader o'chadi false qiymatga o'tadi
        }, 5000) //5s loader aylanishi
    }, [products])
    
    return (
        <>
            {
                delay ? <div className='loader'>
                            <img 
                                src={loader}
                                alt='loader'
                                className='loader'
                            />
                        </div>
                :
                <>
                    <div className='card-list'>
                        {
                            products.length === 0 ? <p>Нет продукты!</p> : 
                            products.map(item => {
                                return(
                                    <Card key={item.id} data={item} addToCart={addToCart} />
                                )
                            })
                        }
                    </div>
                </>
            }
        </>
    );
};

export default CardList;