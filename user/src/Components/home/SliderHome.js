import React, {Component,Fragment} from 'react';
import Slider from "react-slick";
class SliderHome extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const SliderData=this.props.data;

        const SliderView=  SliderData.map((SliderList,i)=>{
            return  <div>
            <img className="slider-img" src={SliderList.image}/>
         </div>
        })
       


        return (
                <Slider {...settings}>
                     {SliderView}
                </Slider>
        );
    }
}

export default SliderHome;