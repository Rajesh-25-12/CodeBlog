import React, { useState } from 'react';    // Importing React library
import Carousel from 'react-multi-carousel';    // Importing Carousel library
import 'react-multi-carousel/lib/styles.css';    // Importing react-multi-carousel stylesheet
import FeaturedPost from './Components/FeaturedPost';    // Importing FeaturedPost component
import Main from './Components/Main';    // Importing Main component
const responsive = {    // Defining constant "responsive"
  superLargeDesktop: {    // Define screen size
    breakpoint: { max: 4000, min: 1024 },    // Define breakpoint for screen size
    items: 5,    // Define items to be displayed
  },
  desktop: {    // Define screen size
    breakpoint: { max: 1024, min: 768 },    // Define breakpoint for screen size
    items: 3,    // Define items to be displayed
  },
  tablet: {    // Define screen size
    breakpoint: { max: 768, min: 640 },    // Define breakpoint for screen size
    items: 2,    // Define items to be displayed
  },
  mobile: {    // Define screen size
    breakpoint: { max: 640, min: 0 },    // Define breakpoint for screen size
    items: 1,    // Define items to be displayed
  },
};

const FeaturedPosts = ({ data }) => {    // Defining "FeaturedPosts" component
  const [open, setopen] = useState(false)    // Initialize boolean variable "open" with false
  const [id, setid] = useState()    // Initialize variable "id"
  const [data1, setData1] = useState([])    // Initialize variable "data1" with empty array

  const handleopen = (id) => {    // Define function "handleopen"
    setopen(true)    // Set variable "open" to true
    setid(id)    // Assign variable "id" to the value of "id" variable
    setData1(data.filter(obj => obj.id === id))    // Assign variable "data1" to data which has id same as the value of "id" variable

  }
  const close = () => {    // Define function "close"
    setopen(false)    // Set variable "open" to false
  }
  const customLeftArrow = (    // Define custom Left arrow
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (    // Define custom Right arrow
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  return (    // Return statement
    <div className="mb-8">
      <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
        {data.map((post, index) => (    // Map through the array of data
          <div onClick={() => handleopen(post.id)}>
            <FeaturedPost key={index} post={post} />
          </div>
        ))}
        <Main open={open} close={close} id={id} data={data1} cat={data} />
      </Carousel>
    </div>
  );
};
export default FeaturedPosts;    // Export FeaturedPosts component
