import React from 'react'
import moment from 'moment';

const Widget = ({cat,data,id}) => {
  var filtereddata=[]
  for(let i=0;i<3;i++){
    if(data[i]!=undefined){
      filtereddata.push(data[i])
    }
  }
  if(filtereddata.length!=0){
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{id ? 'Related Posts' : 'Recent Posts'}</h3>
      
      {filtereddata.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
           <img width="60px" src={`data:image/png;base64,${post.author.photo}`}></img>
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            {post.title}
            {/* <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link> */}
          </div>
        </div>
      ))}
    </div>
  )
}}

export default Widget
