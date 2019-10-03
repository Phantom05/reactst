
let api = `http://localhost:5000`;
let apiAddress = {
  movieList:`${api}/movie/list`
};

let MainMovieListArr = [
  {
    title:`Weekly Watchlist`,
    query:'sort_by=download_count'
  },
  {
    title:`Most Popular`,
    query:`sort_by=download_count`
  },
  {
    title:`Highest Rating`,
    query:`sort_by=rating`
  },
  {
    title:`Family Movies`,
    query:`genre=family`
  },
  {
    title:`Horror`,
    query:'genre=horror'
  },
  {
    title:`Comedy`,
    query:`genre=comedy`
  },
  {
    title:`Documentary`,
    query:`genre=documentary`
  },
  {
    title:`Romance`,
    query:`genre=romance`
  },  
  {
    title:`Stand Up Comedy`,
    query:`genre=action`
  },
  {
    title:`Sci-fi - Fantasy`,
    query:`genre=sci-fi`
  },
  {
    title:`Foreign Language Films`,
    query:`genre=mystery`
  },
  {
    title:`Faith`,
    query:`genre=fantasy`
  },  
  {
    title:`Cult Classics`,
    query:'genre=history'
  },
  {
    title:`Thrillers`,
    query:`genre=thriller`
  },
  {
    title:`Sports Movies - Shows`,
    query:`genre=sport`
  },
  {
    title:`Drama`,
    query:`genre=drama`
  },
];
exports.apiAddress       = apiAddress;
exports.MainMovieListArr = MainMovieListArr;