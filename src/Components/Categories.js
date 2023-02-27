import React from 'react'

const Categories = ({data}) => {
  return (
<div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {data.map((category, index) => (
        // <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === data.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.categories.type}</span>
        // </Link>
      ))}
    </div>
  )
}

export default Categories