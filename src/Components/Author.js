import React from 'react'
import { Avatar } from '@mui/material'
const Author = ({author}) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    {/* <div className="absolute -top-14"> */}
    <Avatar src={`data:image/png;base64,${author.photo}`} style={{height:"100px",width:"100px",justifyContent:"center"}} className="avatar"/>
    {/* <img src={`data:image/png;base64,${author.photo}`} alt={author.name} height="100px"  width="100px" className="rounded-full" /> */}
    {/* </div> */}
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
  )
}

export default Author
