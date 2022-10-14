import React, { useContext } from 'react'
import { AppContext } from '../../context'
import './About.css'
import { useParams } from 'react-router-dom'

const About = () => {
  const { array } = useContext(AppContext)
  const params = useParams()
  const currentData = array.find((el) => {
    return el.idDrink === params.id
  })
  return (
    <div>
      <img src={currentData.strDrinkThumb} alt="" />
      <h1>{currentData.strGlass}</h1>
    </div>
  )
}

export default About