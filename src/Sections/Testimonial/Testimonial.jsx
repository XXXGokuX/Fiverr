import React from 'react'
import { SampleNextArrow, SamplePrevArrow } from '../PopularServices/PopularServices';
import Slider from 'react-slick';

function Testimonial() {
    return (
        <div class="testimonial-section my-10 md:my-32">
            <div class="testimonial-section-inner px-[32px]">

                <div class="testimonial-slides">
                    <TestimonialSlides/>
                </div>
            </div>
        </div>
    )
}


function TestimonialSlide({ img, heading, text }) {
    return (
        <div class="testimonial-slides">

            <div class="testimonial-slide flex md:flex-row flex-col gap-5">
                <div class="slide-img md:w-2/5 lg:w-[35%]">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg" class="object-cover rounded-md" />
                </div>

                <div class="slide-text md:w-3/5 lg:w-[65%]">
                    <div class="heading">
                        <h1 class="text-xl text-[#99999b]">Caitlin Tormey, Chief Commercial Officer</h1>
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png" class="object-contain w-16 md:w-20" />
                    </div>

                    <div class="testmonial-text text-2xl text-[#083f19] font-serif">
                        <blockquote>
                            <i>
                                "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."
                            </i>
                        </blockquote>
                    </div>
                </div>
            </div>

        </div>
    )
}

function TestimonialSlides()
{
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
      };
    return(
        <div className='card-slides'>
            <Slider {...settings}>
                <TestimonialSlide/>
                <TestimonialSlide/>
                <TestimonialSlide/>
            </Slider>
        </div>
    )
}

export default Testimonial
