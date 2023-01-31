import {useState} from 'react'
import BasketItem from './BasketItem';
import {moneyFormat} from '../helpers';
import shopp from "../assets/shopping.gif"

function Basket({basket, resetBasket, total, products}) {
	return (
		<>
			<div className="basket-container container">
				<h3>Sepetim</h3>
				<ul>
					{basket.map(item => (
						<BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
					))}
				</ul>
				<div className="total">
        <img className='sepet' src={shopp}/>
					Toplam: ${moneyFormat(total)}
          
				</div>
				<button className="basket-reset-btn" onClick={resetBasket}>Sepeti Sıfırla</button>
      
			</div>
			<style jsx>{`
              .basket-container {
                padding: 20px;
                background: #FFF;
                border: 1px solid #ddd;
                border-radius:10px;
              }
              .basket-container h3 {
                font-size: 20px;
                margin-bottom: 15px;
              }
              .basket-container .total {
                border-top: 1px solid #ddd;
                padding-top: 10px;
                margin-top: 10px;
                font-size: 18px;
                font-weight: bold;
                text-align: right;
                color: #808080;
            
              }
              .basket-reset-btn {
                background:#3cb371;
                height: 40px;
                padding: 0 20px;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
                border-radius:2px 80px 2px 80px;
                color: #fff;
                
              }
              .sepet{
                weight: 50px;
                height:50px;
              
              }
			`}</style>
		</>
	)
}

export default Basket