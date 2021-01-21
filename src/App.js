import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Button, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import {getMatches} from "./api/Api";

function App() {

  const [matches,setMatches] = useState([]);

  useEffect(()=>{
    getMatches()
      .then((data)=>{
        setMatches(data.matches);
        console.log(data.matches);
      })
      .catch(error=>alert("could not load data"));
    
  },[]);

  return (
    <div className="App">
      <Navbar />
     <h1>Welcome to Live Score App</h1>
     <Grid container>
       <Grid sm="3"></Grid>
       <Grid sm="6">
       {
         matches.map((match)=>(
           <MyCard key={match.unique_id} match={match} />
         ))
       }
       </Grid>
     </Grid>
    
    </div>
    
  );
}

export default App;
