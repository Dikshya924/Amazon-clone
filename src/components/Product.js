import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider'

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the satalayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <Products>
            <Info>
                <p>{title}
                </p>
                <p><small>$</small>
                    <strong>{price}</strong>
                </p>
                <Rating>
                    {Array(rating)
                        .fill().
                        map((_, i) => (
                            <p>⭐</p>
                        ))}


                </Rating>
            </Info>
            <Image>
                <img src={image} alt="cardImage" />
            </Image>
            <button onClick={addToBasket}>Add to Basket</button>
        </Products>
    )
}

export default Product
const Products = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    margin:20px;
    padding:20px;
    width:100%;
    max-height:400px;
    min-width:100px;
    background-color:white;
    z-index:1;
    button{
        background:#f0c14b;
        border:1px solid;
        width:80%;
        height:40px;
        margin-top:10px;
        border-color:#a88734 #9c7e31 #846a29;
        color:#111;
    }

`
const Info = styled.div`
    height:300px;
    width:100%;
    margin-bottom:15px;
    p{
         margin-top:5px;
         text-align:left;
        
    }
 
    
`
const Rating = styled.div`
    display:flex;
`
const Image = styled.div`
    img{
        max-height:200px;
        width:100%;
        object-fit:contain;
        margin-bottom:15px;
    }
`
