import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Recommended from "./components/Recommend";
import "./App.css";
import SearchPage from "./components/SearchPage";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
             <Route path="search/:query" element={
              <div className="main">
                <LeftMenu/>
                <SearchPage/>
              </div>
             }></Route>   

             <Route path="/" element={
               <div className="main">
                <LeftMenu />
                <Recommended />
              </div>
             }></Route>                              
      </Routes>

     
    </BrowserRouter>
  );
}

export default App;








//key : AIzaSyDuGtEkXyQM8a-CfHXZvtAKyUcbN7eaGAI