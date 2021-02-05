import {memo} from 'react';
import Slider from "react-slick";
import './listContainerHome.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const listContainerHome = () => {
    console.log('Render de slider');
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
    };

    return (
        <section className="slider">
            <Slider {...settings}>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/bomji-box.appspot.com/o/carrusel1.jpg?alt=media&token=14eab940-c9cb-4e68-8f48-fc0369182852" alt="Slide 1" className="slider_img" height="300px"/>
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/bomji-box.appspot.com/o/promocion3.jpg?alt=media&token=50f4953f-240d-4195-a2b7-af5d8629160f" alt="Slide 2" className="slider_img" />
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/bomji-box.appspot.com/o/promocion6.jpg?alt=media&token=662db759-ca4a-42d9-88de-79ac25bcef75" alt="Slide 3" className="slider_img" />
                </div>
            </Slider>
        </section>
    )
}

export default memo(listContainerHome);


