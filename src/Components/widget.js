// Import React Library
import React from 'react'
// Import moment library to perform Date operations
import moment from 'moment';
// Defining Widget component
const Widget = ({ cat, data, id }) => {

  var filtereddata = []    // Initializing filtereddata variable as empty array
  for (let i = 0; i < 3; i++) {    // Loop through the value of i from 0 to 3
    if (cat !== undefined) {    // Check if cat variable is undefined or not
      if (cat[i] !== undefined) {    // Check if cat[i] variable is undefined or not
        if (cat[i].id !== id) {    // Check if id of cat[i] and id is same or not
          filtereddata.push(cat[i])    // Push cat[i] to the end of filtereddata array
        }
      }
    }
  }

  if (filtereddata.length !== 0) {    // Check if filtereddata is empty or not
    return (
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">{id ? 'Related Posts' : 'Recent Posts'}</h3>
        {filtereddata.map((post, index) => (    // Map through the filtereddata array
          <div key={index} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <img width="60px" alt='h' src={`data:image/png;base64,${post.author.photo}`}></img>
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
              {post.title}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Widget    // Export Widget component
