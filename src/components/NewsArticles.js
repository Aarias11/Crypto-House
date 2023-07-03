import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import requests from "../Requests";

const NewsArticles = () => {

    const[news, setNews] = useState([])
    

    useEffect(() => {
        axios
        .get(requests.requestNews)
        .then((res) => {
            setNews(res.data.articles)
            console.log(res.data.articles)
        })
    }, [requests.requestNews])


    
 //   Function for Slider
  // Slide Left

  const slideLeft = () => {
    var slider = document.getElementById("sliderTwo");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  // Slide Right
  const slideRight = () => {
    var slider = document.getElementById("sliderTwo");
    slider.scrollLeft = slider.scrollLeft + 500;
  };



  return (
    <>
    <h1 className="text-center font-bold text-3xl p-9">Trending News</h1>
    <div id={"sliderTwo"}  className="rounded-div  flex overflow-x-scroll">

      <div className=" card-container  flex  justify-center  ">
        {news.map((news) => (
          <>
          

          
            <a target='_blank' href={news.url}>
            <div key={news.id}  className=" border image-center card w-[400px] h-[600px] rounded-2xl m-2 flex flex-col justify-center items-center shadow-xl">
              <img className="w-[600px] h-[400px]  news" src={news.urlToImage} />
              <div className="relative  h-full flex flex-col items-center">
              <p className='text-center font-bold text-xl p-6 cursor-pointer w-[420px]'><a href={news.url} />{news.title}</p>
              
                <p className='text-center p-3 text-sm'>{news.description}</p>
                <p className='text-center p-3 text-sm'>- {news.author}</p>
                <p>{news.publishedAt}</p>
                
              </div>
              
            </div>
            </a>
            
          </>
        ))}
      </div>
      <BsChevronLeft onClick={slideLeft} className='text-black bg-gray-400/80 border rounded-full p-1 absolute left-29 top-65 translate-y-[250px] cursor-pointer' size={40} />
      <BsChevronRight onClick={slideRight} className='text-black bg-gray-400/80 border rounded-full p-1 absolute right-40 top-65 translate-y-[250px] cursor-pointer' size={40} />
    </div>
    </>
  
  )
}


export default NewsArticles



// {
//     news.map((news, newsnow) => (
//         <div key={newsnow} news={news} className='w-[400px] h-[300px] rounded-div flex flex-row '>
//             <img className='w-[500px] h-[300px] p-3' src={news.urlToImage} />
//             <div className='w-[500px] p-3'>
//                 <p className='py-5 font-bold '>title{news.title}</p>
//                 <p className='overflow-scroll'>description{news.description}</p>
//                 <p className='py-5 text-right'>- author{news.author}</p>
//             </div>
//         </div>
        
        
//     ))
// }






{/* <div className='border rounded-xl shadow-2xl w-[600px] h-[300px] p-5 ml-4 justify-center'>
            <p className='font-bold text-center  '>TITLE</p>
            <p className='text-sm w-[500px] p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className='text-right'>- Author</p>
            
            </div> */}