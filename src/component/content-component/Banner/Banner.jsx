import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../../img/banner/banner1.jpg'
import banner2 from '../../../img/banner/banner2.jpg'
import banner3 from '../../../img/banner/banner3.jpg'
import banner4 from '../../../img/banner/banner4.jpg'
import '../Banner/Banner.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Banner(){
    const navigate=useNavigate()

    const handleClick=useEffect(()=>{
      const imgs=document.querySelectorAll('.d-block.w-100')
      imgs.forEach((img,index)=>{
        img.addEventListener('click',function(){
          // console.log(index)
          if(index===0){
            navigate("/phim-hanh-dong/13")
          }else if(index===1){
            navigate('/phim-trinh-tham/8')
          }else if(index===2){
            navigate('/phim-tinh-cam/7')
          }else if(index===3){
            navigate('/phim-hanh-dong/10')
          }
        })
      })
    })
    return (
    <Carousel>
      <Carousel.Item>
        <img  onClick={handleClick}
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}