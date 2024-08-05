import { useNavigate } from 'react-router-dom';
import Banner from '../content-component/Banner/Banner';
import ActionFilm from './kindFilm/actionFilm/ActionFilm';
import RomanceFilm from './kindFilm/romanceFilm/RomanceFilm';
import Title from './kindFilm/Title';
import DetectiveFilm from './kindFilm/detectiveFilm/DetectiveFilm';
import Footer from '../Footer';
import '../../component/pages/homePage.css';

export default function Home(){
    return(
        <div className="home-page">
           <div className="banner">
                <Banner/>
           </div>
           <div className="content-film">
                <Title name={'Phim hành động'} urltitle={'/phim-hanh-dong'} />
                <ActionFilm id={10}/>
                <Title name={'Phim tình cảm'} urltitle={'/phim-tinh-cam'}/>
                <RomanceFilm id={10}/>
                <Title name={'Phim trinh thám'} urltitle={'/phim-trinh-tham'}/>
                <DetectiveFilm id={10}/>
           </div>
            <Footer/>
        </div>
    )
}