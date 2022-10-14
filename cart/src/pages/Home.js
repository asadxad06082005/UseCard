import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {useCart} from 'react-use-cart';
import data from '../data'
import styled from "styled-components";

const Home = () => {
    const {addItem} = useCart();


    return (
        <Div>
            <div className="container">
                <input  type="search" name="search" placeholder="Search Something" style={{
                    width: "95%",
                    textAlign: "center",
                    outline: "none",
                    margin: "20px auto",
                    padding: "15px"
                }}/>
                <div className="row">
                    {data.map((el) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12 " key={el.id}>
                                <div class="card" style={{width: "22rem"}}>
                                    <img src={el.strDrinkThumb} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <Link to={`/${el.id}`} class="card-title">{el.strGlass}</Link>
                                        <p class="card-text">{el.strInstructions}</p>
                                        <p>{el.strIngredient3}</p>
                                        <button onClick={() => addItem(el)} class="btn btn-primary">Add To Card</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Div>
    )
}
const Div = styled.div`
  .container {
    margin: auto;

    .card {
      height: 650px;
      margin-bottom: 30px;
      width: 120px;

      .card-body {
        height: 300px;

        .btn {
          width: 120px;
          height: 60px;
          background: red;
          outline: none;
          border: none;
          color: white;
          position: relative;
          top: 0;
          left: 95px;

          .btn:hover {
            background-color: white;
            border: 1px solid black;
            color: black;
          }
        }
      }
    }
  }

`
export default Home