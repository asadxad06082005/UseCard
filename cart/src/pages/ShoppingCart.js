import React from 'react'
import {useCart} from 'react-use-cart';
import styled from "styled-components";

const ShoppingCart = () => {
    const {items, isEmpty, totalUniqueItems, emptyCart, removeItem, updateItemQuantity} = useCart();
    if (isEmpty) return <p>Your cart is empty</p>
    let total = 0;
    return (
        <Div>
            <div className='tot'>
                <ul><p>Total Price</p>
                    <li><h1>{total}</h1></li>
                </ul>
                <ul>
                    <p>Remove All Items</p>
                    <li>
                        <button className="red btn" onClick={emptyCart}>Empty</button>
                    </li>
                </ul>
            </div>

            {items.map((item) => {
                if (item.count >= 1) {
                    const priceTotal = item.count * item.price
                    total += priceTotal;
                    return (
                        <div className="main">
                            <div className="first">
                                <img src={item.strDrinkThumb} alt=""/>

                                <ul>
                                    <p>Item</p>
                                    <li><h5 key={item.idDrink}>{item.strGlass}</h5></li>
                                </ul>
                                <ul>
                                    <p>Price</p>
                                    <li><h3>{priceTotal}$</h3></li>
                                </ul>
                            </div>

                            <div className="second">
                                <ul>
                                  <p>Count</p>
                                    <li>
                                        <button className="red btn"
                                                onClick={() => updateItemQuantity(item.id, item.count--)}>-
                                        </button>
                                        {item.count}
                                        <button className="blue btn"
                                                onClick={() => updateItemQuantity(item.id, item.count++)}>+
                                        </button>
                                    </li>
                                </ul>
                                <ul>
                                    <p>Delete</p>
                                    <li>  <button className="red btn" onClick={() => removeItem(item.id)}>Remove</button></li>
                                </ul>
                            </div>
                        </div>
                    )
                } else {
                    removeItem(item.id)
                }
            })}

        </Div>

    )
}
const Div = styled.div`
  width: 50%;
  margin: auto;

  ul {

    li {
      list-style: none;
    }
  }

  .tot {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main {
    margin-top: 50px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    .first {
      display: flex;
      position: relative;
      top: 0;

      ul {

        li {

          list-style: none;
        }
      }

      img {
        width: 200px;
        height: 200px;
      }
    }

    .second {
      display: flex;
      position: relative;
      top: 0;

      .btn {
        outline: none;
        border: none;
      }

      .red {
        color: white;
        background: red;
      }

      .blue {
        background: blue;
        color: white;
      }
    }
  }

  button {
    color: white;
    background: red;
  }
`
export default ShoppingCart