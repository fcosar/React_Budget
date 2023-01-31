import { useState } from "react";
import {moneyFormat} from '../helpers';

function Product({product,total,money,basket,setBasket}) {

const  basketItem =basket.find(item => item.id === product.id)  

const addBasket =()=>{

   const checkBasket = basket.find(item =>item.id === product.id)
   if (checkBasket){
      checkBasket.amount +=1
      setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
   }else{
     setBasket([...basket, {
        id: product.id,
        amount: 1,
    }])
   }

}
 const removeBasket = () => {
   
    
       const currentBasket = basket.find(item=>item.id === product.id)
       const basketWithoutCurrent = basket.filter(item => item.id !== product.id)

          currentBasket.amount -=1
          if(currentBasket.amount === 0){
             setBasket([...basketWithoutCurrent])
          }else{
          setBasket([...basketWithoutCurrent,currentBasket])
       }
       
 }
    return(
        <>
        <div className="product"> 
		    <div className="img">		<img src={product.image} alt=""/></div>
        <h6> {product.title} </h6>
        <div className="price">$ {product.price} </div>
        <div className="actions">
					<button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Vazgeç</button>
					<span className="amount">{basketItem && basketItem.amount || 0}</span>
					<button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>Ekle
					</button>
				</div>
        <style jsx> {`
        .product{
            padding: 15px;
            background: #FFF;
            border: 1px solid #ddd;
            margin-bottom: 20px;
            width:175px;
            font-size:30px;
            margin-top:24px;
            border-radius: 10px;
            
        }
        .product img {
          width: 100%;
          object-fit:contain;
        
         
        }
          .product h6 {
            font-size: 18px;
            margin-bottom: 8px;
            margin-top:15px;
            border-top:1px solid rgba(0,0,0,0.1)
          }
          .product .price {
            font-size: 16px;
            color: #228b22;
          }
          .product .actions {
            display: flex;
            align-items: center;
            margin-top: 15px;
          }
          .actions button {
            height: 40px;
            padding: 0 15px;
            flex: 1;
            cursor: pointer;
          }
          .actions button[disabled] {
            opacity: .3;
            cursor: not-allowed;
          }
          .actions .buy-btn {
            background: #ffd0b1;
            font-size: 14x;
            font-weight: 500;
            border-radius: 0 6px 6px 0;
          }
          .actions .sell-btn {
            background: #c0c0c0;
            font-size: 12px;
            color: #333;
            font-weight: 500;
            border-radius: 6px 0 0 6px;
          }
          .actions .amount {
            width: 50px;
            text-align: center;
            border: 1px solid #ddd;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 17px;
            font-weight: bold;
            color: #555;
          }
          .img{
            height:150px;
            width:110px;
          }
        `} </style>
        </div>
          
        </>
    )
}

export default Product