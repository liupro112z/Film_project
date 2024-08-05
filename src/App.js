import {Link, Routes, Route,useParams, useNavigate} from "react-router-dom";
import Home from "./component/pages/Home"
import Layout from "./component/pages/Layout";
import ActionFilm from "./component/pages/kindFilm/actionFilm/ActionFilm";
import HandleFilm from "./component/pages/kindFilm/HandleFilm"
import Login from "./component/handleComponent/Account/Login";
import RomanceFilm from "./component/pages/kindFilm/romanceFilm/RomanceFilm";
import Register from "./component/handleComponent/Account/Register";
import HandleFilmWatch from "./component/pages/kindFilm/HandleFilmWatch";
import Mypage from "./component/pages/Mypage";
import './styles/base.css';
import DetectiveFilm from "./component/pages/kindFilm/detectiveFilm/DetectiveFilm";
import FilmFollowed from "./component/pages/FilmFollowed";
import CountryFilm from "./component/pages/CountryFilm";
function App() {
  const navigate=useNavigate()
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/home'  element={<Home/>}/>
        <Route path='/'  element={<Home/>}/>
        <Route path='/phim-hanh-dong' element={<ActionFilm id={100}/>}/>
        <Route path='/phim-tinh-cam' element={<RomanceFilm id={100}/>}/>
        <Route path='/phim-trinh-tham' element={<DetectiveFilm id={100}/>}/>
        <Route path='/phim-hanh-dong/:idfilm' element={<HandleFilm titleFilm={'action'}/>}/>
        <Route path='/phim-tinh-cam/:idfilm' element={<HandleFilm titleFilm={'romance'}/>}/>
        <Route path='/phim-trinh-tham/:idfilm' element={<HandleFilm titleFilm={'detective'}/>}/>
        <Route path='/phim-hanh-dong/:idfilm/chap/:idchap' element={<HandleFilmWatch titleFilm={'action'} />}/>
        <Route path='/phim-tinh-cam/:idfilm/chap/:idchap' element={<HandleFilmWatch titleFilm={'romance'} />}/>
        <Route path='/phim-trinh-tham/:idfilm/chap/:idchap' element={<HandleFilmWatch titleFilm={'detective'} />}/>
        <Route path='/home/:userId' element={<Home/>}>{()=>navigate(0)}</Route>
        <Route path='/:signup'element={<Home/>}>{()=>{navigate(0)}}</Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}>{()=>{navigate(0)}}</Route>
        <Route path='/account/:accountId' element={<Mypage/>}/>
        <Route path='/follow' element={<FilmFollowed/>}/>
        <Route path='/country/:country' element={<CountryFilm/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
