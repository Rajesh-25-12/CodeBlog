import React, { useState, useEffect } from 'react'
import Card from './Components/Card'
import Widget from './Components/widget'
import Categories from './Components/Categories';
import Axios from 'axios';
import FeaturedPosts from './Realated';
import Loader from './Components/Loader';
const Home = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = React.useState(false);

  const Getname = () => {
    Axios.get('https://mernserver-8toi.onrender.com/read')
      .then((res) => {
        setData(res.data)
        setTimeout(()=>{
          setOpen(false)

        },800)
      })
      .catch((err) => {
        console.log(err, "response")

      })
  }
  useEffect(() => {
    Getname()
    setOpen(true)
  }, [])
  return (
    <div className="container mx-auto px-10 mb-8">
            <FeaturedPosts data={data} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <Card data={data} />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Widget data={data} cat={data} />
            <Categories data={data} />
          </div>
        </div>
      </div>
      <br />
      <Loader open={open}/>
    </div>
  )
}

export default Home
