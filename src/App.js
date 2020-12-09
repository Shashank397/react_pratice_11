import logo from './logo.svg';
import React, {useState} from 'react'

import './App.css';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';
import Footer from './Component/Footer/Footer';
import { Input } from '@material-ui/core';

function App() {
  const [texttyped, setTextTyped] = useState("This is initial value");
  function changeTextTyped(e){
    setTextTyped(e.target.value);
  }
  
  return (
    <div className="App">
      <br/><br/><Input type="text" placeholder="Type anything here" onChange={changeTextTyped}/>
      <Header t1={texttyped} cardname={"Harry Potter"} details={"this is hogwards form harry potter"} listofschools={[{"SchoolName":"venkat","photo":"https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,"details":"this details of venkate school"}, {"SchoolName":"kristukala", "photo":"https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","details":"this details of kristukala school"}, {"SchoolName":"Venkat2", "photo":"https://images.pexels.com/photos/3087286/pexels-photo-3087286.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","details":"this details of venakt2 school"}, {"SchoolName":"holy child school", "photo":"https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","details":"this details of Holy child school"}]} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
