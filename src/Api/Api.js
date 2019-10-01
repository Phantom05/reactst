// import React, { Component } from 'react';
import axios from 'axios';
import {apiAddress} from 'Route/Common';


async function GetSlideData(){
  const getMainSlide = () => axios.get(`${apiAddress.movieList}/main/slide`);
  const getMovieList1 = () => axios.get(`${apiAddress.movieList}?sort_by=download_count`);
  const getMovieList2 = () => axios.get(`${apiAddress.movieList}?sort_by=like_count`);
  const getMovieList3 = () => axios.get(`${apiAddress.movieList}?sort_by=rating`);
  const getMovieList4 = () => axios.get(`${apiAddress.movieList}?genre=family`);
  
  
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
 

}


// async function getMovieListData(){
//   let data = {};
//   // axios.get(`${apiAddress}/movie?sort_by=download_count&page=${main.state.scrollIdx}`)
// }


// async function getMovieDetailData(){
//   let data = {};
//   // axios.get(`${apiAddress}/movie?sort_by=download_count&page=${main.state.scrollIdx}`)
// }


function getMovieListData(qurey){
  return axios.get(`${apiAddress.movieList}?${qurey}`)
}

export  {
  GetSlideData,
  getMovieListData
}