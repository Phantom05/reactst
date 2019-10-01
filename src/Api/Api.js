// import React, { Component } from 'react';
import axios from 'axios';



async function GetSlideData(){
  let data ={}
  const getMainSlide = () => axios.get(`http://localhost:5000/movie/main/slide`);
  const getMovieList1 = () => axios.get(`http://localhost:5000/movie?sort_by=download_count`);
  const getMovieList2 = () => axios.get(`http://localhost:5000/movie?sort_by=like_count`);
  const getMovieList3 = () => axios.get(`http://localhost:5000/movie?sort_by=rating'`);
  const getMovieList4 = () => axios.get(`http://localhost:5000/movie?genre=family`);
  
  
  return axios.all([getMainSlide(), getMovieList1(), getMovieList2(), getMovieList3(), getMovieList4()])
    // .then(axios.spread(function (mainSlideList, week, populal, rating, genre) {
    //   data.mainSlideList = mainSlideList;
    //   data.week  = week ;
    //   data.populal = populal;
    //   data.rating = rating;
    //   data.genre = genre;
    //   console.log('done!',data);
    //   // resolve()
    // }));
 
    console.log('return', data);
    return data;
}






export  {
  GetSlideData,
}