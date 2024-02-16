import React from 'react'
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";



import card1 from "../../Images/ai-artists-2x.png"
import card2 from "../../Images/animated-explainer-2x.png"
import card3 from "../../Images/seo-2x.png"
import card4 from "../../Images/social-2x.png"
import card5 from "../../Images/translation-2x.png"
import card6 from "../../Images/voice-over-2x.png"
import card7 from "../../Images/wordpress-2x.png"
import card8 from "../../Images/book-covers-2x.png"
import card9 from "../../Images/data-entry-2x.png"
import card10 from "../../Images/logo-design-2x.png"
import card11 from "../../Images/ai-artists-2x.png"


const cards= [
    {img: card1,heading:"AI Artist",subheading:"Add Talent to AI"},
    {img: card2,heading:"AI Artist",subheading:"Add Talent to AI"},
    {img: card3,heading:"AI Artist",subheading:"Add Talent to AI"},
    {img: card4,heading:"AI Artist",subheading:"Add Talent to AI"},
    {img: card5,heading:"AI Artist",subheading:"Add Talent to AI"},
    {img: card6,heading:"AI Artist",subheading:"Add Talent to AI"},
    {img: card7,heading:"AI Artist",subheading:"Add Talent to AI"},
    {img: card8,heading:"AI Artist",subheading:"Add Talent to AI"},
    {img: card9,heading:"AI Artist",subheading:"Add Talent to AI"},
    {img: card10,heading:"AI Artist",subheading:"Add Talent to AI"},
    {img: card11,heading:"AI Artist",subheading:"Add Talent to AI"},
   
]




function PopularServices() {
  return (
    <div className='popular-services-section my-4 px-[32px]'>
       <div className='popular-services-inner'>

            <div className='heading my-3'>
                <h1 className='text-3xl md:text-4xl font-semibold text-gray-600 my-3 mb-6'>Popular Services</h1>
            </div>

            <div className='services-card'>
                <ServicesCardSlide/>
            </div>

       </div>
    </div>  
  )
}


function ServicesCard({ subheading,heading,img })
{
    return(
        <div className='card relative mx-3 cursor-pointer group'>
            <img className='object-cover h-full w-full rounded-[4px] brightness-90 group-hover:brightness-100' src={img} />
            <div className='card-tex text-white font-semibold absolute w-full top-0 left-0 px-5 py-5'>
                <h3 className='md:text-sm text-xs'>{subheading}</h3>
                <h1 className='text-xl md:text-3xl'>{heading}</h1>
            </div>

        </div>
    )
}

function ServicesCardSlide()
{

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className='card-slides'>
            <Slider {...settings}>
                {cards.map(card=> <ServicesCard {...card} />)}
            </Slider>
        </div>
    )
}


export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='before:none shadow-md absolute -right-6 top-[50%] -translate-y-[50%] bg-white z-50 cursor-pointer h-12 w-12 rounded-full flex items-center justify-center'

      onClick={onClick}
    >
      <GrFormNext className='text-3xl text-gray-500' />
    </div>
  );
}

export function SamplePrevArrow(props) {
  return (
    <div
      className='before:none shadow-md absolute -left-6 top-[50%] -translate-y-[50%] bg-white z-50 cursor-pointer h-12 w-12 rounded-full flex items-center justify-center'
      onClick={props.onClick}
    >
      <GrFormPrevious className='text-3xl text-gray-500'/>
    </div>
  );
}
export default PopularServices;
