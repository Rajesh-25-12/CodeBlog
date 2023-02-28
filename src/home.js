import React, { useState, useEffect } from 'react'
import Card from './Components/Card'
import Widget from './Components/widget'
import Categories from './Components/Categories';
import Axios from 'axios';
import FeaturedPosts from './Realated';
import Main from './Components/Main';
const Home = () => {
    const [data, setData] = useState([])
  
    const Getname = () => {
        Axios.get('https://mernserver-8toi.onrender.com/read')
          .then((res) => {
            console.log(res, "response")
            setData(res.data)
            // setRowdata(res.data)
          })
          .catch((err) => {
            console.log(err, "response")
    
          })
      }
      useEffect(() => {
        Getname()
      }, [])
  return (
    <div className="container mx-auto px-10 mb-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
          <Card/>
      </div>
      
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <Widget data={data} />
          <Categories data={data}/>
        </div>
      </div>
    </div>
    <br/>
    <FeaturedPosts data={data}/>
  </div>
  )
}

export default Home
