import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Main from './Main';

const Card = () => {
  const navigate = useHistory()
  const [data, setData] = useState([])
  const [open, setopen] = useState(false)
  const [id, setid] = useState()
  const Getname = () => {
    Axios.get('http://localhost:3001/read')
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
  const handleopen = (id) => {
    setopen(true)
    setid(id)
  }
  const close = () => {
    setopen(false)

  }
  return (
    <>
      {data.map((item) => (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
          <div className="relative overflow-hidden shadow-md pb-80 mb-6">
            <img src={`data:image/png;base64,${item.blogphoto}`} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
          </div>

          <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
            {/* <Link href={`/post/${post.slug}`}>{post.title}</Link> */}
          </h1>
          <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
            <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
              <img width="60px" height="60px" src={`data:image/png;base64,${item.author.photo}`} />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{item.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(item.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
            {item.content[0].text}
          </p>
          <div className="text-center">
            {/* <Link href={`/post/${post.slug}`}> */}
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer" onClick={() => handleopen(item.id)}>Continue Reading</span>
            {/* </Link> */}
          </div>
        </div>
      ))}
      <Main open={open} close={close} id={id} />
    </>

  )
}

export default Card
