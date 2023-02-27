import React from 'react'
import AdjustcentPostcard from './AdjustcentPostcard'

const Adjustpost = ({ createdAt,id,data}) => {
  return (
<div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
        <>
          {data.previous && (
            <div className={`${data.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
              <AdjustcentPostcard post={data.previous} position="LEFT" />
            </div>
          )}
          {data.next && (
            <div className={`${data.previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
              <AdjustcentPostcard post={data.next} position="RIGHT" />
            </div>
          )}
        </>
      
    </div>
  )
}

export default Adjustpost
