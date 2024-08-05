import { Link } from 'react-router-dom'
import '../kindFilm/Title.css'
export default function Title(prop){
    return(
        <div className="title-film" >
            <p >{prop.name}</p>
            <Link to={prop.urltitle}>Xem tất cả</Link>
        </div>
    )
}