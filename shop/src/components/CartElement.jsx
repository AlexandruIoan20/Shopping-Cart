import React from "react";

const CartElement = (props) => { 
    const { item, onIncreasingQ } = props;
    return (
        <section className="cart-element">
            <img src= { item.url } width = "100px" height="100px" alt="...loading" />

            <article className="price-q-informator">
                <p> { `${item.name}` }</p>  
                <form> 
                    <input type="number" 
                        min= {1} 
                        max= {10}
                        step = '1' 
                        onChange = { (e) => { onIncreasingQ(item, e.target.value)}}
                        value = { item.quantity} />
                </form>
                <p className="price"> {`${item.quantity} x ${item.price * item.quantity}$ / 1 x ${item.price}$`} </p>
            </article>
        </section>
    )
};

export default CartElement;