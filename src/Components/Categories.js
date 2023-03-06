import React from 'react'

const Categories = ({data}) => {
  var data1=[]
  if(data.length!=0){
    data1= data.filter((v,i,a)=>a.findIndex(v2=>(v2.categories.type===v.categories.type))===i)
  }
  return (
<div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {data1.map((category, index) => (
          <span className={`cursor-pointer block ${(index === data.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.categories.type}</span>
      ))}
    </div>
  )
}

export default Categories
