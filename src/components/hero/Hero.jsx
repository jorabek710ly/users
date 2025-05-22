import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = () => {
    const slides = [
        {
            img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
            text: 'iPhone X – Elegant design with stunning performance',
        },
        {
            img: 'https://images.unsplash.com/photo-1510552776732-03e61cf4b144?auto=format&fit=crop&w=1200&q=80',
            text: 'Stay connected with Android power',
        },
        {
            img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
            text: 'Smartphone design that inspires innovation',
        },
        {
            img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
            text: 'Crystal clear display and performance',
        },
        {
            img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=80',
            text: 'Technology in your hands, anytime anywhere',
        }
    ];

    return (
        <div className="flex items-center justify-center bg-gray-50 min-h-screen">
            <div className="w-full px-4 max-w-7xl mx-auto">
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={1}
                    className="rounded-xl overflow-hidden shadow-sm border border-gray-200"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            <img
                                src={slide.img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[90vh] object-cover brightness-75"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center px-4  bg-opacity-30 rounded-md">
                                    {slide.text}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Hero;

