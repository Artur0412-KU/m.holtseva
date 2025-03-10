import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Review1 from '../../assets/reviews/image-1.png'
import Review2 from '../../assets/reviews/image-2.png'
import Review3 from '../../assets/reviews/image-3.png'
import Review4 from '../../assets/reviews/image-5.png'
import Review5 from '../../assets/reviews/image-6.png'
import Review6 from '../../assets/reviews/image-7.png'
import Review7 from '../../assets/reviews/image-8.png'
import Review8 from '../../assets/reviews/image-9.png'
import Review9 from '../../assets/reviews/image-10.png'
import Review10 from '../../assets/reviews/image-11.png'
import 'swiper/css';

export default function Carousel() {
    const swiperRef = useRef<any>(null);
    return (
        <div className='px-[70px] py-[100px]'>
            <h1 className='text-[36px] font-bold text-center text-[#968377] mb-[50px] [@media(max-width:1024px)]:text-[32px]'>Відгуки</h1>
         <Swiper
           ref={swiperRef}
          spaceBetween={30}
          slidesPerView={3}
          autoplay = {
            {
              delay: 2500,
              disableOnInteraction: false,
            }
          }
          breakpoints={
           { 
                200: { // Виправлено порядок
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 2
                },
                1300: {
                    slidesPerView: 3
                }
            }
        }
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={Review1} alt="review-1" className='w-[90%]'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Review2} alt="review-1" className='w-[90%]'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Review3} alt="review-1" className='w-[90%]'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Review4} alt="review-1" className='w-[90%]'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Review5} alt="review-1" className='w-[90%]'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Review6} alt="review-1" className='w-[90%]'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Review7} alt="review-1" className='w-[90%]'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Review8} alt="review-1" className='w-[90%]'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Review9} alt="review-1" className='w-[90%]'/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Review10} alt="review-1" className='w-[90%]'/>
          </SwiperSlide>
        </Swiper>   
        </div>
        
      );
}
