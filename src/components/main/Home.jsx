import React from "react";
import './home.scss'
import doggy from './Img.png'
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'

const Main = () => {
    return (
        <main className="main" id="home">
            <section className="hero">
                <Swiper 
                    className="container"
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: '.testimonials-pagination',
                        bulletClass: 'testimonials-bullet',
                        bulletActiveClass: 'testimonials-bullet-active'
                    }}
                >
                    <SwiperSlide>
                        <div className="hero__inner">
                            <div className="hero__image">
                                <img src={doggy} alt='doggy'/>
                            </div>
                            <div className="hero__content">
                                <span className="hero__label">Save 10 - 20 % off</span>
                                <h1 className="hero__title">
                                    Best Destination <br/>
                                    For <span>Your Pets</span>
                                </h1>
                                <button className="btn">SHOP NOW →</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="hero__inner">
                            <div className="hero__image">
                                <img src={doggy} alt='doggy'/>
                            </div>
                            <div className="hero__content">
                                <span className="hero__label">HOMEE</span>
                                <h1 className="hero__title">
                                    Хочу домой <br/>
                                    <span>Пожалуйста :(</span>
                                </h1>
                                <button className="btn">Отпустить →</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
                <div className="testimonials-pagination-container">
                    <div className="testimonials-pagination"></div>
                </div>
            </section>
        </main>
    )
}

export default Main