import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Star from './Star';
// import ReadMore from './ReadMore';
import './index.css';
import App from './App';
// import NewProject from './NewProject';

function Test(){
  const [movieRated,setMovieRated]=useState(0)
  return <div>
    <Star onMovieRated={setMovieRated}/>
    <p>Movie is {movieRated} star rated</p>
    
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Star maxRating={10} size={77}/>
    <Star color="red" size={33} messages={["aaa","bbbb","ccc","dddd","eee"]}/>
    <Test/> */}
    {/* <ReadMore/> */}
    {/* <NewProject/> */}
  </React.StrictMode>
);

