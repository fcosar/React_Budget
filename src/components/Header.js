import {useState} from 'react'

import {moneyFormat} from '../helpers';
import Cash from "../assets/dolar.gif";


function Header({total, money}) {
	return (
    
		<>
         
			{total > 0 && money - total !== 0 && (
				<div className="header">
          <div>
          <img className='money' src={Cash}/>
          </div>
          <span>$ {moneyFormat(money - total)}</span></div>
			)}
			{total === 0 && (
				<div className="header"> <span>$ {moneyFormat(money)}</span></div>
			)}
			{money - total === 0 && (
				<div className="header empty">No Money</div>
			)}
			<style jsx>{`
              .header {
                position: sticky;
                top: 20px;
                background:#3cb371;
                height:100px;
                margin:0px 400px 0px 400px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 24px;
                letter-spacing: 1px;
                align-items:center;
                border-radius:2px 250px 2px 250px;
                
              }
              .header.empty {
                background: #015366;
              }
              .header span {
                margin: 0 10px;
                font-weight: bold;
              }
              .money{
                border-radius:50px;

              }
			`}</style>
		</>
	)
}

export default Header